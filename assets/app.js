const siteData = window.GOLDSTEIN_SITE_DATA;
const STORAGE_KEY = "goldstein-reader-state-v1";
const params = new URLSearchParams(window.location.search);
const savedState = readSavedState();
const requestedSection = params.get("section") ?? savedState.sectionId;
const requestedKind = params.get("kind") ?? savedState.kind;
const requestedEntry = params.get("entry") ?? savedState.entryId;

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
};

function readSavedState() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

const els = {
  itemCount: document.getElementById("itemCount"),
  searchInput: document.getElementById("searchInput"),
  sectionList: document.getElementById("sectionList"),
  sectionMeta: document.getElementById("sectionMeta"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionNote: document.getElementById("sectionNote"),
  entrySelect: document.getElementById("entrySelect"),
  readerSurface: document.getElementById("readerSurface"),
  tabs: Array.from(document.querySelectorAll(".tab-button")),
  ttsPlayer: document.getElementById("ttsPlayer"),
  playerTitle: document.getElementById("playerTitle"),
  playerProgress: document.getElementById("playerProgress"),
  wakeLockStatus: document.getElementById("wakeLockStatus"),
  playButton: document.getElementById("playButton"),
  pauseButton: document.getElementById("pauseButton"),
  stopButton: document.getElementById("stopButton"),
  rateInput: document.getElementById("rateInput"),
  rateOutput: document.getElementById("rateOutput"),
};

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

function persistReaderState() {
  const payload = {
    sectionId: state.sectionId,
    kind: state.kind,
    entryId: state.entryId,
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
    if (state.paragraphIndex < state.paragraphs.length - 1) {
      state.paragraphIndex += 1;
      speakFromCurrent();
    } else {
      releaseScreenWakeLock();
      updatePlayer();
    }
  };

  state.utterance.onerror = () => {
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
  if (speech) speech.cancel();
  state.paused = false;
  state.utterance = null;
  await releaseScreenWakeLock();
  updatePlayer();
}

function updatePlayer() {
  const entry = currentEntry();
  els.ttsPlayer.hidden = state.kind !== "tts";
  els.playerTitle.textContent =
    state.kind === "tts" && entry ? entry.label : "TTS 파일을 선택하세요";
  els.playerProgress.textContent =
    state.kind === "tts" && state.paragraphs.length
      ? `문단 ${Math.min(state.paragraphIndex + 1, state.paragraphs.length)} / ${state.paragraphs.length}`
      : "";
  els.wakeLockStatus.textContent = state.kind === "tts" ? state.wakeLockStatus : "";
  els.wakeLockStatus.className = state.wakeLockStatusKind;

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
  renderReader();
  persistReaderState();
  if (window.lucide) lucide.createIcons();
}

els.searchInput.addEventListener("input", renderSections);

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
  renderReader();
  persistReaderState();
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

setKindWithFallback(state.kind);
render();
