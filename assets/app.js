const siteData = window.GOLDSTEIN_SITE_DATA;
const params = new URLSearchParams(window.location.search);
const requestedSection = params.get("section");
const requestedKind = params.get("kind");

const state = {
  sectionId: siteData.sections.some((section) => section.id === requestedSection)
    ? requestedSection
    : siteData.sections[0]?.id,
  kind: requestedKind === "tts" ? "tts" : "translation",
  entryId: null,
  paragraphs: [],
  paragraphIndex: 0,
  utterance: null,
  paused: false,
  voices: [],
};

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
    button.addEventListener("click", () => {
      stopSpeech();
      state.sectionId = section.id;
      setKindWithFallback(state.kind);
      render();
    });
    els.sectionList.appendChild(button);
  });
}

function setKindWithFallback(kind) {
  const section = currentSection();
  state.kind = entriesFor(section, kind).length ? kind : "translation";
  state.entryId = entriesFor(section, state.kind)[0]?.id ?? null;
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

  const html = marked.parse(entry.content, {
    breaks: false,
    gfm: true,
  });
  els.readerSurface.innerHTML = DOMPurify.sanitize(html);
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

function speakFromCurrent() {
  const speech = window.speechSynthesis;
  if (!speech || state.kind !== "tts" || !state.paragraphs.length) return;

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
      updatePlayer();
    }
  };

  state.utterance.onerror = () => updatePlayer();
  speech.speak(state.utterance);
  updatePlayer();
}

function pauseSpeech() {
  const speech = window.speechSynthesis;
  if (!speech) return;
  if (speech.paused) {
    speech.resume();
    state.paused = false;
  } else if (speech.speaking) {
    speech.pause();
    state.paused = true;
  }
  updatePlayer();
}

function stopSpeech() {
  const speech = window.speechSynthesis;
  if (speech) speech.cancel();
  state.paused = false;
  state.utterance = null;
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
  if (window.lucide) lucide.createIcons();
}

els.searchInput.addEventListener("input", renderSections);

els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    stopSpeech();
    state.kind = tab.dataset.kind;
    state.entryId = entriesFor(currentSection(), state.kind)[0]?.id ?? null;
    render();
  });
});

els.entrySelect.addEventListener("change", () => {
  stopSpeech();
  state.entryId = els.entrySelect.value;
  state.paragraphIndex = 0;
  renderReader();
});

els.playButton.addEventListener("click", () => {
  if (window.speechSynthesis?.paused) {
    window.speechSynthesis.resume();
    state.paused = false;
    updatePlayer();
    return;
  }
  speakFromCurrent();
});

els.pauseButton.addEventListener("click", pauseSpeech);
els.stopButton.addEventListener("click", stopSpeech);

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
