const siteData = window.GOLDSTEIN_SITE_DATA;
const STORAGE_KEY = "goldstein-reader-state-v1";
const params = new URLSearchParams(window.location.search);
const savedState = readSavedState();
const requestedSection = params.get("section") ?? savedState.sectionId;
const requestedKind = params.get("kind") ?? savedState.kind;
const requestedEntry = params.get("entry") ?? savedState.entryId;
const PARAGRAPH_REPEAT_DELAY_MS = 2500;

const state = {
  sectionId: siteData.sections.some((section) => section.id === requestedSection)
    ? requestedSection
    : siteData.sections[0]?.id,
  kind: requestedKind === "tts" ? "tts" : "translation",
  entryId: requestedEntry ?? null,
  paragraphs: [],
  paragraphIndex: 0,
  utterance: null,
  paused: false,
  voices: [],
  wakeLock: null,
  wakeLockWanted: false,
  wakeLockStatus: "",
  wakeLockStatusKind: "",
  sidebarCollapsed: savedState.sidebarCollapsed === true,
  repeatMode: normalizeRepeatMode(savedState.repeatMode),
  playbackRunId: 0,
  repeatTimer: null,
};

function readSavedState() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

const els = {
  appShell: document.getElementById("appShell"),
  itemCount: document.getElementById("itemCount"),
  searchInput: document.getElementById("searchInput"),
  sectionList: document.getElementById("sectionList"),
  sidebarCollapseButton: document.getElementById("sidebarCollapseButton"),
  sidebarExpandButton: document.getElementById("sidebarExpandButton"),
  sectionMeta: document.getElementById("sectionMeta"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionNote: document.getElementById("sectionNote"),
  entrySelect: document.getElementById("entrySelect"),
  readerSurface: document.getElementById("readerSurface"),
  pageNavButtons: Array.from(document.querySelectorAll("[data-page-nav]")),
  pagePositions: Array.from(document.querySelectorAll("[data-page-position]")),
  tabs: Array.from(document.querySelectorAll(".tab-button")),
  ttsPlayer: document.getElementById("ttsPlayer"),
  playerTitle: document.getElementById("playerTitle"),
  playerProgress: document.getElementById("playerProgress"),
  wakeLockStatus: document.getElementById("wakeLockStatus"),
  playButton: document.getElementById("playButton"),
  pauseButton: document.getElementById("pauseButton"),
  stopButton: document.getElementById("stopButton"),
  repeatModeButton: document.getElementById("repeatModeButton"),
  rateInput: document.getElementById("rateInput"),
  rateOutput: document.getElementById("rateOutput"),
};

function normalizeRepeatMode(mode) {
  return mode === "paragraph" || mode === "all" ? mode : "none";
}

function repeatModeLabel(mode = state.repeatMode) {
  if (mode === "paragraph") return "각 문단 반복";
  if (mode === "all") return "전체 반복";
  return "";
}

function clearRepeatTimer() {
  if (state.repeatTimer) {
    window.clearTimeout(state.repeatTimer);
    state.repeatTimer = null;
  }
}

function repeatCurrentParagraphAfterDelay(playbackRunId) {
  clearRepeatTimer();
  state.utterance = null;
  state.repeatTimer = window.setTimeout(() => {
    state.repeatTimer = null;
    if (playbackRunId === state.playbackRunId && state.repeatMode === "paragraph") {
      speakCurrentParagraph(playbackRunId);
    }
  }, PARAGRAPH_REPEAT_DELAY_MS);
  updatePlayer();
}

function entriesFor(section, kind = state.kind) {
  return section.entries.filter((entry) => entry.kind === kind);
}

function currentSection() {
  return siteData.sections.find((section) => section.id === state.sectionId) ?? siteData.sections[0];
}

function currentEntry() {
  const section = currentSection();
  const entries = entriesFor(section);
  return entries.find((entry) => entry.id === state.entryId) ?? entries[0] ?? null;
}

function pairedEntryKey(entry) {
  return entry?.fileName
    ?.replace(/_Korean_Translation\.md$/, "")
    .replace(/_KR_TTS\.md$/, "");
}

function matchingEntryForKind(section, previousEntry, targetKind) {
  const entries = entriesFor(section, targetKind);
  const previousKey = pairedEntryKey(previousEntry);
  return entries.find((entry) => pairedEntryKey(entry) === previousKey) ?? entries[0] ?? null;
}

function orderedEntriesForKind(kind = state.kind) {
  return siteData.sections.flatMap((section) =>
    entriesFor(section, kind).map((entry) => ({ section, entry }))
  );
}

function currentOrderedEntryIndex(entries = orderedEntriesForKind()) {
  return entries.findIndex(
    ({ section, entry }) => section.id === state.sectionId && entry.id === state.entryId
  );
}

function setSidebarCollapsed(collapsed, options = {}) {
  state.sidebarCollapsed = Boolean(collapsed);
  els.appShell.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);

  const expanded = String(!state.sidebarCollapsed);
  els.sidebarCollapseButton.setAttribute("aria-expanded", expanded);
  els.sidebarExpandButton.setAttribute("aria-expanded", expanded);
  els.sidebarCollapseButton.title = state.sidebarCollapsed
    ? "챕터 선택바 숨김"
    : "챕터 선택바 숨기기";
  els.sidebarExpandButton.title = state.sidebarCollapsed
    ? "챕터 선택바 보이기"
    : "챕터 선택바 표시됨";

  if (options.persist !== false) {
    persistReaderState();
  }
}

function persistReaderState() {
  const payload = {
    sectionId: state.sectionId,
    kind: state.kind,
    entryId: state.entryId,
    sidebarCollapsed: state.sidebarCollapsed,
    repeatMode: state.repeatMode,
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Storage can be disabled in private modes; URL state still keeps refresh stable.
  }

  const nextParams = new URLSearchParams(window.location.search);
  nextParams.set("section", payload.sectionId);
  nextParams.set("kind", payload.kind);
  if (payload.entryId) {
    nextParams.set("entry", payload.entryId);
  } else {
    nextParams.delete("entry");
  }

  const nextUrl = `${window.location.pathname}?${nextParams.toString()}${window.location.hash}`;
  try {
    window.history.replaceState(null, "", nextUrl);
  } catch {
    // Some embedded/file contexts can reject history updates.
  }
}

function sectionMatches(section, query) {
  if (!query) return true;
  const haystack = [
    section.id,
    section.title,
    section.category,
    ...section.entries.flatMap((entry) => [entry.fileName, entry.label, entry.version]),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderSections() {
  const query = els.searchInput.value.trim().toLowerCase();
  const sections = siteData.sections.filter((section) => sectionMatches(section, query));
  els.sectionList.innerHTML = "";

  sections.forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `section-button${section.id === state.sectionId ? " active" : ""}`;
    button.innerHTML = `
      <span class="section-topline">
        <span class="section-id">${section.id}</span>
        <span class="section-count">${entriesFor(section, "translation").length} TR · ${entriesFor(section, "tts").length} TTS</span>
      </span>
      <span class="section-name">${section.title}</span>
    `;
    button.addEventListener("click", async () => {
      await stopSpeech();
      state.sectionId = section.id;
      setKindWithFallback(state.kind);
      render();
    });
    els.sectionList.appendChild(button);
  });
}

function setKindWithFallback(kind, preferredEntryId = state.entryId) {
  const section = currentSection();
  state.kind = entriesFor(section, kind).length ? kind : "translation";
  const entries = entriesFor(section, state.kind);
  state.entryId =
    entries.find((entry) => entry.id === preferredEntryId)?.id ?? entries[0]?.id ?? null;
}

function renderHeader() {
  const section = currentSection();
  els.sectionMeta.textContent = `${section.category.replaceAll("_", " ")} · pages ${section.pageLabelStart}-${section.pageLabelEnd}`;
  els.sectionTitle.textContent = `${section.id} ${section.title}`;
  els.sectionNote.textContent = section.note || "PDF는 배포 대상에서 제외했습니다.";
}

function renderTabs() {
  els.tabs.forEach((tab) => {
    const kind = tab.dataset.kind;
    const available = entriesFor(currentSection(), kind).length > 0;
    tab.disabled = !available;
    tab.classList.toggle("active", kind === state.kind);
  });
}

function renderEntrySelect() {
  const entries = entriesFor(currentSection());
  els.entrySelect.innerHTML = "";

  entries.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.id;
    option.textContent = entry.label;
    els.entrySelect.appendChild(option);
  });

  const entry = currentEntry();
  state.entryId = entry?.id ?? null;
  els.entrySelect.value = state.entryId ?? "";
}

function renderPageNav() {
  const entries = orderedEntriesForKind();
  const currentIndex = currentOrderedEntryIndex(entries);
  const pageText = currentIndex >= 0 ? `${currentIndex + 1} / ${entries.length}` : "0 / 0";

  els.pagePositions.forEach((position) => {
    position.textContent = pageText;
  });

  els.pageNavButtons.forEach((button) => {
    const direction = Number(button.dataset.pageNav);
    const target = entries[currentIndex + direction];
    const actionLabel = direction < 0 ? "이전 페이지" : "다음 페이지";

    button.disabled = !target;
    button.title = target ? `${actionLabel}: ${target.entry.label}` : `${actionLabel} 없음`;
    button.setAttribute("aria-label", button.title);
  });
}

function prependEntryImage(entry) {
  if (!entry?.image?.src) return;

  const figure = document.createElement("figure");
  const image = document.createElement("img");

  figure.className = "entry-image";
  image.src = entry.image.src;
  image.alt = entry.image.alt || `${entry.label} infographic`;
  image.loading = "lazy";
  image.decoding = "async";

  figure.appendChild(image);
  els.readerSurface.prepend(figure);
}

function renderMarkdown(entry) {
  if (!entry) {
    els.readerSurface.innerHTML = `<p class="reader-empty">표시할 TR 파일이 없습니다.</p>`;
    return;
  }

  const protectedContent = protectMath(entry.content);
  const html = marked.parse(protectedContent.content, {
    breaks: false,
    gfm: true,
  });
  els.readerSurface.innerHTML = DOMPurify.sanitize(html);
  restoreMathPlaceholders(els.readerSurface, protectedContent.math);
  renderMathInElement(els.readerSurface, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    throwOnError: false,
  });
  alignEquationNumbers(els.readerSurface);
  prependEntryImage(entry);
}

function protectMath(content) {
  const math = [];
  const protectedContent = content.replace(
    /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$[^\n$]+?\$)/g,
    (match) => {
      const token = `@@GOLDSTEIN_MATH_${math.length}@@`;
      math.push(match);
      return token;
    }
  );

  return { content: protectedContent, math };
}

function restoreMathPlaceholders(root, math) {
  const tokenPattern = /@@GOLDSTEIN_MATH_(\d+)@@/g;

  function visit(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      if (!text || !text.includes("@@GOLDSTEIN_MATH_")) return;

      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match;

      tokenPattern.lastIndex = 0;
      while ((match = tokenPattern.exec(text))) {
        if (match.index > lastIndex) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        }
        fragment.appendChild(document.createTextNode(math[Number(match[1])] ?? match[0]));
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }

      node.parentNode.replaceChild(fragment, node);
      return;
    }

    Array.from(node.childNodes).forEach(visit);
  }

  visit(root);
}

function nextElementSiblingOutsideSelf(node, boundary) {
  let current = node;

  while (current && current !== boundary) {
    if (current.nextElementSibling) return current.nextElementSibling;
    current = current.parentElement;
  }

  return null;
}

function trimLeadingWhitespace(node) {
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  const firstText = walker.nextNode();

  if (firstText) {
    firstText.nodeValue = firstText.nodeValue.replace(/^\s+/, "");
  }
}

function removeTextPrefix(node, length) {
  let remaining = length;
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  let textNode = walker.nextNode();

  while (textNode && remaining > 0) {
    const textLength = textNode.nodeValue.length;

    if (textLength <= remaining) {
      const consumedNode = textNode;
      textNode = walker.nextNode();
      remaining -= textLength;
      consumedNode.nodeValue = "";
    } else {
      textNode.nodeValue = textNode.nodeValue.slice(remaining);
      remaining = 0;
    }
  }

  trimLeadingWhitespace(node);
}

function alignEquationNumbers(root) {
  const equationNumberPattern = /^\s*(?:[—–-]\s*)?\((\d+\.\d+[a-z]?)\)\s*/;

  Array.from(root.querySelectorAll(".katex-display")).forEach((display) => {
    const mathBlock = display.closest("p") ?? display.parentElement;
    const numberBlock = mathBlock ? nextElementSiblingOutsideSelf(mathBlock, root) : null;
    const numberMatch = numberBlock?.textContent?.match(equationNumberPattern);

    if (!mathBlock || !numberBlock || !numberMatch) return;

    const row = document.createElement("div");
    const mathCell = document.createElement("div");
    const number = document.createElement("span");

    row.className = "equation-row";
    mathCell.className = "equation-math";
    number.className = "equation-number";
    number.textContent = `(${numberMatch[1]})`;

    mathBlock.parentElement.insertBefore(row, mathBlock);
    mathCell.appendChild(display);
    row.append(mathCell, number);

    if (!mathBlock.textContent.trim()) {
      mathBlock.remove();
    }

    removeTextPrefix(numberBlock, numberMatch[0].length);
    if (!numberBlock.textContent.trim()) {
      numberBlock.remove();
    }
  });
}

function splitParagraphs(content) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function renderTts(entry) {
  if (!entry) {
    els.readerSurface.innerHTML = `<p class="reader-empty">표시할 TTS 파일이 없습니다.</p>`;
    state.paragraphs = [];
    updatePlayer();
    return;
  }

  state.paragraphs = splitParagraphs(entry.content);
  els.readerSurface.innerHTML = state.paragraphs
    .map((paragraph, index) => `<p class="tts-paragraph" data-index="${index}">${escapeHtml(paragraph)}</p>`)
    .join("");
  prependEntryImage(entry);
  els.readerSurface.querySelectorAll(".tts-paragraph").forEach((node) => {
    node.addEventListener("click", () => {
      state.paragraphIndex = Number(node.dataset.index);
      speakFromCurrent();
    });
  });
  updatePlayer();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function selectKoreanVoice() {
  const voices = state.voices.length ? state.voices : window.speechSynthesis?.getVoices?.() ?? [];
  return (
    voices.find((voice) => voice.lang?.toLowerCase() === "ko-kr") ??
    voices.find((voice) => voice.lang?.toLowerCase().startsWith("ko")) ??
    null
  );
}

function setWakeLockStatus(message, kind = "") {
  state.wakeLockStatus = message;
  state.wakeLockStatusKind = kind;
  updatePlayer();
}

async function requestScreenWakeLock() {
  state.wakeLockWanted = true;
  if (!("wakeLock" in navigator)) {
    setWakeLockStatus("화면 유지 미지원: 기기 자동 잠금을 꺼주세요.", "warning");
    return;
  }
  if (state.wakeLock) {
    setWakeLockStatus("화면 유지 켜짐", "active");
    return;
  }

  try {
    state.wakeLock = await navigator.wakeLock.request("screen");
    state.wakeLock.addEventListener("release", () => {
      state.wakeLock = null;
      if (state.wakeLockWanted) {
        setWakeLockStatus("화면 유지 대기 중", "warning");
      }
    });
    setWakeLockStatus("화면 유지 켜짐", "active");
  } catch (error) {
    const reason = error?.name ? ` (${error.name})` : "";
    setWakeLockStatus(`화면 유지 실패${reason}`, "warning");
  }
}

async function releaseScreenWakeLock() {
  state.wakeLockWanted = false;
  const lock = state.wakeLock;
  state.wakeLock = null;
  if (lock) {
    try {
      await lock.release();
    } catch {
      // The browser may have already released the lock during visibility changes.
    }
  }
  setWakeLockStatus("", "");
}

async function speakFromCurrent() {
  const speech = window.speechSynthesis;
  if (!speech || state.kind !== "tts" || !state.paragraphs.length) return;

  state.playbackRunId += 1;
  clearRepeatTimer();
  await speakCurrentParagraph(state.playbackRunId);
}

async function speakCurrentParagraph(playbackRunId) {
  const speech = window.speechSynthesis;
  if (!speech || playbackRunId !== state.playbackRunId) return;

  clearRepeatTimer();
  await requestScreenWakeLock();
  speech.cancel();
  state.paused = false;

  const text = state.paragraphs[state.paragraphIndex];
  state.utterance = new SpeechSynthesisUtterance(text);
  state.utterance.lang = "ko-KR";
  state.utterance.rate = Number(els.rateInput.value);
  const voice = selectKoreanVoice();
  if (voice) state.utterance.voice = voice;

  state.utterance.onend = () => {
    if (playbackRunId !== state.playbackRunId) return;

    if (state.repeatMode === "paragraph") {
      repeatCurrentParagraphAfterDelay(playbackRunId);
      return;
    }

    if (state.paragraphIndex < state.paragraphs.length - 1) {
      state.paragraphIndex += 1;
      speakCurrentParagraph(playbackRunId);
      return;
    }

    if (state.repeatMode === "all") {
      state.paragraphIndex = 0;
      speakCurrentParagraph(playbackRunId);
      return;
    }

    state.utterance = null;
    releaseScreenWakeLock();
    updatePlayer();
  };

  state.utterance.onerror = () => {
    if (playbackRunId !== state.playbackRunId) return;
    state.utterance = null;
    releaseScreenWakeLock();
    updatePlayer();
  };
  speech.speak(state.utterance);
  updatePlayer();
}

async function pauseSpeech() {
  const speech = window.speechSynthesis;
  if (!speech) return;
  if (speech.paused) {
    speech.resume();
    state.paused = false;
    await requestScreenWakeLock();
  } else if (speech.speaking) {
    speech.pause();
    state.paused = true;
    await releaseScreenWakeLock();
  }
  updatePlayer();
}

async function stopSpeech() {
  const speech = window.speechSynthesis;
  state.playbackRunId += 1;
  clearRepeatTimer();
  if (speech) speech.cancel();
  state.paused = false;
  state.utterance = null;
  await releaseScreenWakeLock();
  updatePlayer();
}

function cycleRepeatMode() {
  const modes = ["none", "paragraph", "all"];
  const currentIndex = modes.indexOf(state.repeatMode);
  state.repeatMode = modes[(currentIndex + 1) % modes.length];
  updatePlayer();
  persistReaderState();
}

function updatePlayer() {
  const entry = currentEntry();
  const repeatActive = state.repeatMode !== "none";
  const repeatLabel = repeatModeLabel();

  els.ttsPlayer.hidden = state.kind !== "tts";
  els.playerTitle.textContent =
    state.kind === "tts" && entry ? entry.label : "TTS 파일을 선택하세요";
  els.playerProgress.textContent =
    state.kind === "tts" && state.paragraphs.length
      ? `문단 ${Math.min(state.paragraphIndex + 1, state.paragraphs.length)} / ${state.paragraphs.length}${repeatLabel ? ` · ${repeatLabel}` : ""}`
      : "";
  els.wakeLockStatus.textContent = state.kind === "tts" ? state.wakeLockStatus : "";
  els.wakeLockStatus.className = state.wakeLockStatusKind;

  els.repeatModeButton.classList.toggle("active", repeatActive);
  els.repeatModeButton.classList.toggle("repeat-paragraph", state.repeatMode === "paragraph");
  els.repeatModeButton.classList.toggle("repeat-all", state.repeatMode === "all");
  els.repeatModeButton.setAttribute("aria-pressed", String(repeatActive));
  els.repeatModeButton.title = repeatActive
    ? `${repeatLabel} 켜짐: 다음 반복 모드`
    : "반복 꺼짐: 반복 모드 선택";
  els.repeatModeButton.setAttribute("aria-label", els.repeatModeButton.title);

  els.readerSurface.querySelectorAll(".tts-paragraph").forEach((paragraph) => {
    paragraph.classList.toggle("active", Number(paragraph.dataset.index) === state.paragraphIndex);
  });
}

function renderReader() {
  const entry = currentEntry();
  if (state.kind === "tts") {
    renderTts(entry);
  } else {
    renderMarkdown(entry);
    updatePlayer();
  }
}

function render() {
  const totalEntries = siteData.sections.reduce((sum, section) => sum + section.entries.length, 0);
  els.itemCount.textContent = `${totalEntries} files`;
  renderSections();
  renderHeader();
  renderTabs();
  renderEntrySelect();
  renderPageNav();
  renderReader();
  persistReaderState();
  if (window.lucide) lucide.createIcons();
}

els.searchInput.addEventListener("input", renderSections);

els.sidebarCollapseButton.addEventListener("click", () => {
  setSidebarCollapsed(true);
});

els.sidebarExpandButton.addEventListener("click", () => {
  setSidebarCollapsed(false);
});

els.tabs.forEach((tab) => {
  tab.addEventListener("click", async () => {
    const previousEntry = currentEntry();
    await stopSpeech();
    state.kind = tab.dataset.kind;
    state.entryId = matchingEntryForKind(currentSection(), previousEntry, state.kind)?.id ?? null;
    render();
  });
});

els.entrySelect.addEventListener("change", async () => {
  await stopSpeech();
  state.entryId = els.entrySelect.value;
  state.paragraphIndex = 0;
  renderPageNav();
  renderReader();
  persistReaderState();
});

els.pageNavButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const entries = orderedEntriesForKind();
    const currentIndex = currentOrderedEntryIndex(entries);
    const target = entries[currentIndex + Number(button.dataset.pageNav)];

    if (!target) return;

    await stopSpeech();
    state.sectionId = target.section.id;
    state.entryId = target.entry.id;
    state.paragraphIndex = 0;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

els.playButton.addEventListener("click", async () => {
  if (window.speechSynthesis?.paused) {
    window.speechSynthesis.resume();
    state.paused = false;
    await requestScreenWakeLock();
    updatePlayer();
    return;
  }
  await speakFromCurrent();
});

els.pauseButton.addEventListener("click", pauseSpeech);
els.stopButton.addEventListener("click", stopSpeech);
els.repeatModeButton.addEventListener("click", cycleRepeatMode);

document.addEventListener("visibilitychange", () => {
  if (
    document.visibilityState === "visible" &&
    state.wakeLockWanted &&
    state.kind === "tts" &&
    !state.paused
  ) {
    requestScreenWakeLock();
  }
});

els.rateInput.addEventListener("input", () => {
  els.rateOutput.textContent = `${Number(els.rateInput.value).toFixed(1)}x`;
});

if ("speechSynthesis" in window) {
  state.voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    state.voices = window.speechSynthesis.getVoices();
  };
}

setSidebarCollapsed(state.sidebarCollapsed, { persist: false });
setKindWithFallback(state.kind);
render();
