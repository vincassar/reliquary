// RELIQUARY — game state machine

(() => {
  const { CITIES, SUSPECTS, MODES, TRAIT_KEYS, TRAIT_LABELS, CITY_REGIONS, RINGLEADER_CASE } =
    window.RELIQUARY_DATA;

  const TRAVEL_HOURS = 10;
  const WRONG_TRAVEL_HOURS = 14;
  const INTERVIEW_HOURS = 2;
  const HOURS_PER_STOP = 20; // budget scales with trail length
  const SVG_NS = "http://www.w3.org/2000/svg";

  // Rough lat/lon (degrees) per city — projected into a 720x360 equirectangular SVG.
  const CITY_COORDS = {
    rome:        { lat: 41.9,  lon: 12.5  },
    assisi:      { lat: 43.07, lon: 12.62 },
    santiago:    { lat: 42.88, lon: -8.54 },
    lisbon:      { lat: 38.72, lon: -9.14 },
    fatima:      { lat: 39.63, lon: -8.66 },
    krakow:      { lat: 50.06, lon: 19.94 },
    lourdes:     { lat: 43.09, lon: -0.05 },
    mexico_city: { lat: 19.43, lon: -99.13 },
    manila:      { lat: 14.60, lon: 120.98 },
    jerusalem:   { lat: 31.78, lon: 35.22 },
    dublin:      { lat: 53.35, lon: -6.26 },
    goa:         { lat: 15.50, lon: 73.83 },
    paris:       { lat: 48.86, lon: 2.35  },
    istanbul:    { lat: 41.01, lon: 28.98 },
    cairo:       { lat: 30.04, lon: 31.24 },
    london:      { lat: 51.51, lon: -0.13 },
    tokyo:       { lat: 35.68, lon: 139.65 },
    buenos_aires:{ lat: -34.61, lon: -58.38 },
    new_york:    { lat: 40.71, lon: -74.01 },
    rio:         { lat: -22.91, lon: -43.17 },
    sydney:      { lat: -33.87, lon: 151.21 },
    vilnius:     { lat: 54.69, lon: 25.28 },
    cape_town:   { lat: -33.92, lon: 18.42 },
    montevideo:  { lat: -34.90, lon: -56.16 },
    dakar:       { lat: 14.69, lon: -17.44 },
    merida:      { lat: 20.97, lon: -89.62 },
    kotor:       { lat: 42.42, lon: 18.77 },
    sofia:       { lat: 42.70, lon: 23.32 },
    lima:        { lat: -12.05, lon: -77.04 },
    santiago_chile:{ lat: -33.45, lon: -70.67 },
    nairobi:     { lat: -1.29, lon: 36.82 },
    axum:        { lat: 14.12, lon: 38.73 },
    moscow:      { lat: 55.76, lon: 37.62 },
    st_petersburg:{ lat: 59.93, lon: 30.33 },
    kyiv:        { lat: 50.45, lon: 30.52 },
    lviv:        { lat: 49.84, lon: 24.03 },
    beijing:     { lat: 39.90, lon: 116.41 },
    shanghai:    { lat: 31.23, lon: 121.47 },
    macau:       { lat: 22.20, lon: 113.54 },
    valletta:    { lat: 35.90, lon: 14.51 },
    tunis:       { lat: 36.81, lon: 10.18 },
    tripoli:     { lat: 32.89, lon: 13.19 },
    beirut:      { lat: 33.89, lon: 35.50 },
    cologne:     { lat: 50.94, lon:  6.96 },
    barcelona:   { lat: 41.39, lon:  2.15 },
    madrid:      { lat: 40.42, lon: -3.70 },
    azores:      { lat: 37.74, lon: -25.67 },
    galapagos:   { lat:  -0.75, lon: -90.30 },
    zurich:      { lat: 47.38, lon:  8.54 },
    vatican_city:{ lat: 41.90, lon: 12.45 },
    san_marino:  { lat: 43.94, lon: 12.46 },
    reggio_calabria:{ lat: 38.11, lon: 15.65 },
    athens:      { lat: 37.98, lon: 23.73 },
    thessaloniki:{ lat: 40.64, lon: 22.94 },
    venice:      { lat: 45.44, lon: 12.33 },
  };

  function project(lat, lon) {
    return { x: (lon + 180) * 2, y: (90 - lat) * 2 };
  }

  // Real Natural Earth 110m land outlines, projected equirectangular into viewBox 720x360,
  // generated offline from world-atlas@2/land-110m.json (MIT-licensed).
  const CONTINENT_PATHS = window.CONTINENT_PATHS || [];

  const state = {
    mode: null,
    case: null,
    suspect: null,
    trail: [],
    position: 0,
    hoursLeft: 0,
    hoursLeftInitial: 0,
    cityVisits: [],
    evidence: {},
    warrant: null,
    ended: false,
    activeTab: "scene",
    evidenceSeen: 0,
  };

  // Persistent across cases in this session (and across reloads, via localStorage).
  const STORAGE_KEY = "reliquary_captured_v1";
  const CASES_STORAGE_KEY = "reliquary_solved_cases_v1";
  // v2 bump invalidates pre-pronoun saves (which baked "they" into clues).
  const CASE_IN_PROGRESS_KEY = "reliquary_current_case_v2";
  let capturedSuspects = new Set();
  let solvedCases = new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) capturedSuspects = new Set(JSON.parse(raw));
    const rawCases = localStorage.getItem(CASES_STORAGE_KEY);
    if (rawCases) solvedCases = new Set(JSON.parse(rawCases));
  } catch (_) { /* private mode, storage unavailable */ }

  function saveCaptured() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...capturedSuspects])); }
    catch (_) {}
  }
  function saveSolvedCases() {
    try { localStorage.setItem(CASES_STORAGE_KEY, JSON.stringify([...solvedCases])); }
    catch (_) {}
  }
  function resetCaptured() {
    capturedSuspects = new Set();
    solvedCases = new Set();
    saveCaptured();
    saveSolvedCases();
    renderRoster();
  }
  function crookIds() {
    return Object.keys(SUSPECTS).filter((s) => !SUSPECTS[s].ringleader);
  }
  function ringleaderId() {
    return Object.keys(SUSPECTS).find((s) => SUSPECTS[s].ringleader);
  }
  function remainingSuspects() {
    return crookIds().filter((s) => !capturedSuspects.has(s));
  }
  function allCrooksCaught() {
    return crookIds().every((s) => capturedSuspects.has(s));
  }
  function patriarchCaptured() {
    const r = ringleaderId();
    return r ? capturedSuspects.has(r) : false;
  }
  function availableCases(modeId) {
    const all = MODES[modeId].cases;
    const fresh = all.filter((c) => !solvedCases.has(c.id));
    return fresh.length ? fresh : all; // fallback: all solved, allow repeats
  }

  // ---- in-progress case persistence ----
  function saveGameState() {
    if (state.ended || !state.case) { clearGameState(); return; }
    try {
      const snapshot = {
        mode: state.mode,
        caseId: state.case.id,
        suspect: state.suspect,
        trail: state.trail,
        position: state.position,
        hoursLeft: state.hoursLeft,
        hoursLeftInitial: state.hoursLeftInitial,
        evidence: state.evidence,
        warrant: state.warrant,
        activeTab: state.activeTab,
        evidenceSeen: state.evidenceSeen,
        cityVisits: state.cityVisits.map((v) => ({
          witnesses: v.witnesses.map((w) => ({
            role: w.role,
            clue: w.clue,
            interviewed: w.interviewed,
          })),
          options: v.options,
        })),
      };
      localStorage.setItem(CASE_IN_PROGRESS_KEY, JSON.stringify(snapshot));
    } catch (_) { /* ignore */ }
  }

  function clearGameState() {
    try { localStorage.removeItem(CASE_IN_PROGRESS_KEY); } catch (_) {}
  }

  function loadGameState() {
    try {
      const raw = localStorage.getItem(CASE_IN_PROGRESS_KEY);
      if (!raw) return false;
      const s = JSON.parse(raw);
      const allCases = [
        ...MODES.catholic.cases,
        ...MODES.secular.cases,
        RINGLEADER_CASE,
      ];
      const caseObj = allCases.find((c) => c.id === s.caseId);
      if (!caseObj) { clearGameState(); return false; }
      state.mode = s.mode;
      state.case = caseObj;
      state.suspect = s.suspect;
      state.trail = s.trail;
      state.position = s.position;
      state.hoursLeft = s.hoursLeft;
      state.hoursLeftInitial = s.hoursLeftInitial || state.trail.length * HOURS_PER_STOP;
      state.evidence = s.evidence || {};
      state.warrant = s.warrant || null;
      state.activeTab = s.activeTab || "scene";
      state.evidenceSeen = s.evidenceSeen || 0;
      state.cityVisits = s.cityVisits;
      state.ended = false;
      return true;
    } catch (_) { clearGameState(); return false; }
  }

  // -------- utilities --------
  function randPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function shuffled(arr) {
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }
  function $(id) { return document.getElementById(id); }

  // Substitute the suspect's pronouns for the they/their/them placeholders
  // used throughout the clue and caption text.
  function gender(text, suspectId) {
    const sus = SUSPECTS[suspectId];
    const p = sus && sus.pronouns;
    if (!text || !p || p.subj === "they") return text;
    const cap = (s) => s[0].toUpperCase() + s.slice(1);
    return text
      .replace(/\bThey were\b/g, cap(p.subj) + " was")
      .replace(/\bthey were\b/g, p.subj + " was")
      .replace(/\bThey've\b/g, cap(p.subj) + "'s")
      .replace(/\bthey've\b/g, p.subj + "'s")
      .replace(/\bThey're\b/g, cap(p.subj) + "'s")
      .replace(/\bthey're\b/g, p.subj + "'s")
      .replace(/\bThey'd\b/g, cap(p.subj) + "'d")
      .replace(/\bthey'd\b/g, p.subj + "'d")
      .replace(/\bThey\b/g, cap(p.subj))
      .replace(/\bthey\b/g, p.subj)
      .replace(/\bTheir\b/g, cap(p.poss))
      .replace(/\btheir\b/g, p.poss)
      .replace(/\bThem\b/g, cap(p.obj))
      .replace(/\bthem\b/g, p.obj);
  }

  // -------- setup --------
  function startCase(modeId) {
    if (patriarchCaptured()) {
      // Everything is done.
      renderRoster();
      return;
    }
    state.mode = modeId;
    let trailTailLen;
    if (allCrooksCaught()) {
      // Patriarch case — longer trail, special suspect.
      state.case = RINGLEADER_CASE;
      state.suspect = ringleaderId();
      trailTailLen = 7; // 8-city trail
    } else {
      const available = remainingSuspects();
      state.case = randPick(availableCases(modeId));
      state.suspect = randPick(available);
      trailTailLen = 5; // 6-city trail
    }

    state.trail = [state.case.origin, ...buildTrailTail(state.case.origin, trailTailLen)];

    state.position = 0;
    state.hoursLeftInitial = state.trail.length * HOURS_PER_STOP;
    state.hoursLeft = state.hoursLeftInitial;
    state.evidence = {};
    state.warrant = null;
    state.ended = false;
    state.activeTab = "scene";
    state.evidenceSeen = 0;

    // Pick 3 of the 4 traits to reveal this case. Assign each to a random
    // non-final city. Other non-final cities are destination-only.
    const traitsToReveal = shuffled(TRAIT_KEYS).slice(0, 3);
    const nonFinalIdx = Array.from({ length: state.trail.length - 1 }, (_, i) => i);
    const traitCities = shuffled(nonFinalIdx).slice(0, traitsToReveal.length);
    const cityTraitMap = {};
    traitCities.forEach((ci, i) => { cityTraitMap[ci] = traitsToReveal[i]; });

    const FINAL_MESSAGES = [
      "The thief is here. I spotted them crossing the square — then they were gone.",
      "They paid cash, asked no questions. Suite booked for one more night.",
      "Stay sharp. One mistake and this trail is cold.",
    ];

    state.cityVisits = state.trail.map((cityId, idx) => {
      const nextCity = state.trail[idx + 1];
      const city = CITIES[cityId];
      const traitKey = cityTraitMap[idx];
      const modeHints = nextCity
        ? shuffled(CITIES[nextCity].hints[state.mode])
        : null;

      const clues = [];
      if (nextCity) {
        const destCount = traitKey ? 2 : 3;
        for (let i = 0; i < destCount; i++) {
          clues.push({ type: "destination", text: gender(modeHints[i], state.suspect), city: nextCity });
        }
      } else {
        // Final city — three flavor lines, no trait
        for (let i = 0; i < 3; i++) {
          clues.push({ type: "final", text: gender(FINAL_MESSAGES[i], state.suspect) });
        }
      }
      if (traitKey) {
        clues.push({
          type: "trait",
          trait: traitKey,
          text: gender(SUSPECTS[state.suspect].witnessTraits[traitKey], state.suspect),
        });
      }

      const witnessRoles = shuffled(city.witnesses[state.mode]);
      const witnesses = clues.map((clue, i) => ({
        role: witnessRoles[i] || witnessRoles[0],
        clue,
        interviewed: false,
      }));
      shuffleInPlace(witnesses);

      let options = null;
      if (nextCity) {
        const distractors = shuffled(
          Object.keys(CITIES).filter((c) => c !== cityId && c !== nextCity)
        ).slice(0, 3);
        options = shuffled([nextCity, ...distractors]);
      }
      return { witnesses, options };
    });

    saveGameState();
    showScreen("briefing");
    renderBriefing();
  }

  // Build a trail tail of the requested length that rotates through as many
  // non-origin regions as possible (first one per region, then fills).
  function buildTrailTail(originId, count) {
    count = count || 5;
    const originRegion = CITY_REGIONS[originId];
    const candidates = Object.keys(CITIES).filter((c) => c !== originId);
    const byRegion = {};
    for (const c of candidates) {
      const r = CITY_REGIONS[c];
      (byRegion[r] = byRegion[r] || []).push(c);
    }
    const nonOrigin = Object.keys(byRegion).filter((r) => r !== originRegion);
    const shuffledRegions = shuffled(nonOrigin);

    const picks = [];
    // First pass: one city per non-origin region (guarantees spread).
    for (const r of shuffledRegions) {
      if (picks.length >= count) break;
      const pool = byRegion[r].filter((c) => !picks.includes(c));
      if (pool.length) picks.push(randPick(pool));
    }
    // Fill from anywhere remaining.
    while (picks.length < count) {
      const remaining = candidates.filter((c) => !picks.includes(c));
      if (!remaining.length) break;
      picks.push(randPick(remaining));
    }
    return shuffled(picks);
  }

  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // -------- screen / tab management --------
  function showScreen(name) {
    document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
    $("screen-" + name).classList.add("active");
  }

  function showTab(name) {
    state.activeTab = name;
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === name);
    });
    document.querySelectorAll(".tab-pane").forEach((pane) => {
      pane.classList.toggle("active", pane.dataset.tab === name);
    });
    if (name === "dossier") {
      state.evidenceSeen = Object.keys(state.evidence).length;
      updateDossierBadge();
    }
  }

  // -------- audio --------
  let audioCtx = null;
  let muted = false;
  const samples = {
    // name -> { url candidates, buffer, loading }
    engine:  { urls: ["engine.mp3",  "engine.wav"],  buffer: null, loading: null },
    screech: { urls: ["screech.mp3", "screech.wav"], buffer: null, loading: null },
  };

  function ensureAudio() {
    if (muted) return null;
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    preloadSamples();
    return audioCtx;
  }

  function loadSample(name) {
    const s = samples[name];
    if (!s || s.buffer || s.loading || !audioCtx) return;
    const tryUrls = s.urls.map((u) => `${u}?v=${Date.now()}`);
    s.loading = (async () => {
      for (const url of tryUrls) {
        try {
          const res = await fetch(url, { cache: "no-store" });
          if (!res.ok) continue;
          const buf = await res.arrayBuffer();
          s.buffer = await audioCtx.decodeAudioData(buf);
          return;
        } catch (_) { /* try next */ }
      }
    })().finally(() => { s.loading = null; });
  }

  function preloadSamples() {
    for (const name of Object.keys(samples)) loadSample(name);
  }

  // Engine: loop engine.mp3 until stopped. Returns a handle with .stop().
  function playEngineHum(durationSec) {
    const ctx = ensureAudio();
    if (!ctx) return { stop() {} };
    if (!samples.engine.buffer) {
      loadSample("engine");
      return { stop() {} };
    }
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = samples.engine.buffer;
    src.loop = true;
    const out = ctx.createGain();
    out.gain.setValueAtTime(0, now);
    out.gain.linearRampToValueAtTime(0.6, now + 0.3);
    out.gain.setValueAtTime(0.6, now + durationSec - 0.3);
    out.gain.linearRampToValueAtTime(0, now + durationSec);
    src.connect(out);
    out.connect(ctx.destination);
    src.start(now);
    src.stop(now + durationSec + 0.05);

    return {
      stop() {
        try {
          const t = ctx.currentTime;
          out.gain.cancelScheduledValues(t);
          out.gain.setValueAtTime(out.gain.value, t);
          out.gain.linearRampToValueAtTime(0, t + 0.15);
          src.stop(t + 0.2);
        } catch (_) { /* already stopped */ }
      },
    };
  }

  // Wheels-down: play the screech sample.
  function playLandingBrake() {
    const ctx = ensureAudio();
    if (!ctx) return;
    if (!samples.screech.buffer) {
      loadSample("screech");
      return;
    }
    const src = ctx.createBufferSource();
    src.buffer = samples.screech.buffer;
    const g = ctx.createGain();
    g.gain.value = 0.9;
    src.connect(g);
    g.connect(ctx.destination);
    src.start(ctx.currentTime);
  }

  function toggleMute() {
    muted = !muted;
    const btn = $("btn-mute");
    if (btn) btn.textContent = muted ? "🔇" : "🔊";
    if (muted && audioCtx) audioCtx.suspend();
    if (!muted && audioCtx) audioCtx.resume();
  }

  // -------- travelling map --------
  let mapBuilt = false;
  let rafHandle = null;
  let timeoutHandle = null;
  let currentEngine = null;

  function buildWorldMap() {
    const svg = $("world-map");
    svg.innerHTML = "";
    // Parchment frame
    const frame = document.createElementNS(SVG_NS, "rect");
    frame.setAttribute("x", 1);
    frame.setAttribute("y", 1);
    frame.setAttribute("width", 718);
    frame.setAttribute("height", 358);
    frame.setAttribute("fill", "none");
    frame.setAttribute("stroke", "#7a5a2a");
    frame.setAttribute("stroke-width", 0.8);
    svg.appendChild(frame);
    // Graticule
    const grat = document.createElementNS(SVG_NS, "g");
    grat.setAttribute("class", "graticule");
    for (let lon = -150; lon <= 150; lon += 30) {
      const x = (lon + 180) * 2;
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttribute("x1", x);
      line.setAttribute("y1", 0);
      line.setAttribute("x2", x);
      line.setAttribute("y2", 360);
      grat.appendChild(line);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = (90 - lat) * 2;
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttribute("x1", 0);
      line.setAttribute("y1", y);
      line.setAttribute("x2", 720);
      line.setAttribute("y2", y);
      grat.appendChild(line);
    }
    svg.appendChild(grat);
    // Continents
    CONTINENT_PATHS.forEach((d) => {
      const p = document.createElementNS(SVG_NS, "path");
      p.setAttribute("d", d);
      p.setAttribute("class", "continent");
      svg.appendChild(p);
    });
    // City dots + labels
    Object.entries(CITY_COORDS).forEach(([id, coord]) => {
      const { x, y } = project(coord.lat, coord.lon);
      const dot = document.createElementNS(SVG_NS, "circle");
      dot.setAttribute("cx", x);
      dot.setAttribute("cy", y);
      dot.setAttribute("r", 2.4);
      dot.setAttribute("class", "city-dot");
      dot.dataset.city = id;
      svg.appendChild(dot);
      const label = document.createElementNS(SVG_NS, "text");
      const short = CITIES[id].name.split(",")[0];
      label.textContent = short;
      label.setAttribute("x", x + 5);
      label.setAttribute("y", y + 3);
      label.setAttribute("class", "city-label");
      label.dataset.city = id;
      svg.appendChild(label);
    });
    mapBuilt = true;
  }

  function resetMapMarkers() {
    const svg = $("world-map");
    svg.querySelectorAll(".route, .plane").forEach((el) => el.remove());
    svg.querySelectorAll(".city-dot").forEach((el) => el.classList.remove("origin", "dest"));
    svg.querySelectorAll(".city-label").forEach((el) => el.classList.remove("active"));
  }

  function highlightCity(cityId, role) {
    const svg = $("world-map");
    const dot = svg.querySelector(`.city-dot[data-city="${cityId}"]`);
    const label = svg.querySelector(`.city-label[data-city="${cityId}"]`);
    if (dot) dot.classList.add(role);
    if (label) label.classList.add("active");
  }

  function animateFlight({ fromId, toId, success, onDone }) {
    if (!mapBuilt) buildWorldMap();
    resetMapMarkers();

    const svg = $("world-map");
    const a = project(CITY_COORDS[fromId].lat, CITY_COORDS[fromId].lon);
    const b = project(CITY_COORDS[toId].lat, CITY_COORDS[toId].lon);
    // Arc: quadratic bezier, arching upward for visual flight path
    const cx = (a.x + b.x) / 2;
    const cy = Math.min(a.y, b.y) - Math.max(24, Math.abs(b.x - a.x) * 0.12);
    const d = `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;

    const route = document.createElementNS(SVG_NS, "path");
    route.setAttribute("d", d);
    route.setAttribute("class", "route");
    svg.appendChild(route);

    const len = route.getTotalLength();
    route.style.strokeDasharray = `${len} ${len}`;
    route.style.strokeDashoffset = `${len}`;

    const plane = document.createElementNS(SVG_NS, "g");
    plane.setAttribute("class", "plane");
    // Stylized plane silhouette (flies rightward)
    plane.innerHTML =
      '<path d="M -6 0 L 8 0 M 0 -3 L 4 0 L 0 3 Z M -3 -4 L 1 -4 L 1 4 L -3 4 Z" ' +
      'fill="#2a1a0a" stroke="#2a1a0a" stroke-width="1" stroke-linejoin="round"/>';
    svg.appendChild(plane);

    highlightCity(fromId, "origin");
    highlightCity(toId, "dest");

    // Park the plane at origin before takeoff.
    const start0 = route.getPointAtLength(0);
    plane.setAttribute("transform", `translate(${start0.x} ${start0.y}) rotate(0)`);

    $("map-title").textContent = success
      ? "BUREAU CHART · IN PURSUIT"
      : "BUREAU CHART · COLD LEAD";
    $("map-status").textContent = `Boarding at ${CITIES[fromId].name}…`;

    const modal = $("map-modal");
    modal.classList.remove("hidden");

    const boardingMs = 700;
    const flightMs = 2400;
    const holdMs = 1100;
    let finished = false;
    let phaseStart = 0;

    function finish() {
      if (finished) return;
      finished = true;
      if (rafHandle) cancelAnimationFrame(rafHandle);
      if (timeoutHandle) clearTimeout(timeoutHandle);
      rafHandle = null;
      timeoutHandle = null;
      if (currentEngine) { currentEngine.stop(); currentEngine = null; }
      modal.classList.add("hidden");
      onDone && onDone();
    }

    function flightFrame(now) {
      if (finished) return;
      const t = Math.min(1, (now - phaseStart) / flightMs);
      route.style.strokeDashoffset = `${len * (1 - t)}`;
      const pt = route.getPointAtLength(len * t);
      const ahead = route.getPointAtLength(Math.min(len, len * t + 1));
      const angle = Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180 / Math.PI;
      plane.setAttribute("transform", `translate(${pt.x} ${pt.y}) rotate(${angle})`);
      if (t < 1) {
        rafHandle = requestAnimationFrame(flightFrame);
      } else {
        $("map-status").textContent = success
          ? `Wheels down · ${CITIES[toId].name}`
          : `No trace of the thief in ${CITIES[toId].name} · hours wasted`;
        if (currentEngine) { currentEngine.stop(); currentEngine = null; }
        playLandingBrake();
        timeoutHandle = setTimeout(finish, holdMs);
      }
    }

    // Boarding beat: hold at origin, then start the flight tween + engine.
    timeoutHandle = setTimeout(() => {
      $("map-status").textContent = `${CITIES[fromId].name} → ${CITIES[toId].name}`;
      phaseStart = performance.now();
      currentEngine = playEngineHum((flightMs + 50) / 1000);
      rafHandle = requestAnimationFrame(flightFrame);
    }, boardingMs);

    $("btn-map-skip").onclick = finish;
  }

  function updateDossierBadge() {
    const evidenceCount = Object.keys(state.evidence).length;
    const badge = $("dossier-badge");
    if (evidenceCount > state.evidenceSeen) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }

  // -------- rendering --------
  function renderBriefing() {
    $("briefing-title").textContent = state.case.title;
    $("briefing-text").textContent = state.case.brief;
    const origin = CITIES[state.case.origin];
    $("briefing-origin").textContent =
      `First destination: ${origin.name}  ${origin.flag}`;
  }

  function render() {
    if (state.ended) return;
    renderHeader();
    renderBreadcrumb();
    renderCity();
    renderDossier();
    renderFlights();
    updateDossierBadge();
  }

  function renderRoster() {
    const wrap = $("ring-roster");
    if (!wrap) return;
    wrap.innerHTML = "";
    const crooks = crookIds();
    const leader = ringleaderId();
    const caughtCrooks = crooks.filter((s) => capturedSuspects.has(s)).length;
    const leaderCaught = leader && capturedSuspects.has(leader);
    const allDone = caughtCrooks === crooks.length && leaderCaught;

    const header = document.createElement("div");
    header.className = "roster-header";
    if (allDone) {
      header.textContent = "RING ROSTER — ring and Patriarch in custody";
    } else if (caughtCrooks === crooks.length) {
      header.textContent = `RING ROSTER — all ${crooks.length} operators down; the Patriarch remains`;
    } else if (caughtCrooks === 0) {
      header.textContent = `RING ROSTER — ${crooks.length} operators at large`;
    } else {
      header.textContent = `RING ROSTER — ${caughtCrooks} of ${crooks.length} operators in custody`;
    }
    wrap.appendChild(header);

    const row = document.createElement("div");
    row.className = "roster-row";
    crooks.forEach((id) => {
      const sus = SUSPECTS[id];
      const card = document.createElement("div");
      const jailed = capturedSuspects.has(id);
      card.className = "roster-card" + (jailed ? " captured" : "");
      card.innerHTML = `
        <div class="roster-name">${sus.name.split(" ").slice(-1)[0]}</div>
        <div class="roster-title">${sus.title}</div>
        <div class="roster-badge">${jailed ? "BOOKED" : "AT LARGE"}</div>
      `;
      row.appendChild(card);
    });
    wrap.appendChild(row);

    // Patriarch callout (visible once all 10 crooks are caught)
    if (leader && caughtCrooks === crooks.length) {
      const patriarchCard = document.createElement("div");
      const sus = SUSPECTS[leader];
      patriarchCard.className = "patriarch-card" + (leaderCaught ? " captured" : "");
      patriarchCard.innerHTML = `
        <div class="patriarch-label">THE PATRIARCH</div>
        <div class="patriarch-name">${sus.name}</div>
        <div class="patriarch-title">${sus.title}</div>
        <div class="roster-badge">${leaderCaught ? "BOOKED" : "AT LARGE — HUNT HIM"}</div>
      `;
      wrap.appendChild(patriarchCard);
    }

    // Ring-busted celebration — only when patriarch is also down.
    const picker = $("mode-picker");
    const busted = $("ring-busted-card");
    if (picker && busted) {
      if (allDone) {
        picker.classList.add("hidden");
        busted.classList.remove("hidden");
      } else {
        picker.classList.remove("hidden");
        busted.classList.add("hidden");
      }
    }

    // Reset link — visible whenever any captures exist and ring is not fully done.
    if (capturedSuspects.size > 0 && !allDone) {
      const reset = document.createElement("button");
      reset.className = "ghost-btn roster-reset";
      reset.textContent = "Reset ring progress";
      reset.addEventListener("click", () => {
        if (confirm("Reset ring progress? All captures will be lost.")) resetCaptured();
      });
      wrap.appendChild(reset);
    }
  }

  function renderBreadcrumb() {
    const wrap = $("breadcrumb");
    wrap.innerHTML = "";
    state.trail.forEach((cityId, i) => {
      if (i > 0) {
        const conn = document.createElement("div");
        conn.className = "bc-conn" + (i <= state.position ? " active" : "");
        wrap.appendChild(conn);
      }
      const step = document.createElement("div");
      const cls =
        i < state.position ? "done" :
        i === state.position ? "current" : "future";
      step.className = `bc-step ${cls}`;
      const label = document.createElement("div");
      label.className = "bc-label";
      label.textContent = i <= state.position ? CITIES[cityId].name.split(",")[0] : "?";
      step.appendChild(label);
      wrap.appendChild(step);
    });
  }

  function renderHeader() {
    $("case-title").textContent =
      state.case.title + "  —  " + MODES[state.mode].label;
    const h = Math.max(0, Math.floor(state.hoursLeft));
    const hh = String(h).padStart(2, "0");
    $("clock").textContent = `${hh}:00`;
    $("clock").classList.toggle("low", state.hoursLeft <= (state.hoursLeftInitial || 72) * 0.25);
  }

  function renderCity() {
    const cityId = state.trail[state.position];
    const city = CITIES[cityId];
    const visit = state.cityVisits[state.position];
    $("city-flag").textContent = city.flag;
    $("city-name").textContent = city.name;
    $("city-flavor").textContent = city.flavor;

    const wrap = $("witnesses");
    wrap.innerHTML = "";
    visit.witnesses.forEach((w, i) => {
      const div = document.createElement("div");
      div.className = "witness";
      if (w.interviewed) div.classList.add("done");
      if (w.interviewed && w.clue.type === "trait") div.classList.add("trait");
      const role = document.createElement("div");
      role.className = "role";
      role.textContent = w.interviewed ? w.role : `Interview ${w.role}`;
      div.appendChild(role);
      if (w.interviewed) {
        const clue = document.createElement("div");
        clue.className = "clue";
        clue.textContent = "“" + w.clue.text + "”";
        div.appendChild(clue);
      } else {
        const hint = document.createElement("div");
        hint.className = "role";
        hint.style.fontSize = "12px";
        hint.style.color = "var(--ink-faint)";
        hint.textContent = "(2 hours)";
        div.appendChild(hint);
      }
      if (!w.interviewed && !state.ended) {
        div.addEventListener("click", () => interview(i));
      }
      wrap.appendChild(div);
    });

    // Final action
    const final = $("final-action");
    if (state.position === state.trail.length - 1) {
      final.classList.remove("hidden");
    } else {
      final.classList.add("hidden");
    }
  }

  function renderDossier() {
    const list = $("dossier-traits");
    list.innerHTML = "";
    const keys = TRAIT_KEYS.filter((k) => state.evidence[k]);
    if (keys.length === 0) {
      const li = document.createElement("li");
      li.className = "empty";
      li.textContent = "No evidence gathered yet.";
      list.appendChild(li);
    } else {
      keys.forEach((k) => {
        const li = document.createElement("li");
        const lab = document.createElement("span");
        lab.className = "label";
        lab.textContent = TRAIT_LABELS[k];
        li.appendChild(lab);
        li.appendChild(document.createTextNode(state.evidence[k]));
        list.appendChild(li);
      });
    }

    const w = $("dossier-warrant");
    if (state.warrant) {
      w.className = "warrant-pill issued";
      w.textContent = "Warrant: " + SUSPECTS[state.warrant].name;
    } else {
      w.className = "warrant-pill none";
      w.textContent = "— none issued —";
    }

    const files = $("suspect-files");
    files.innerHTML = "";
    Object.entries(SUSPECTS).forEach(([id, sus]) => {
      const card = document.createElement("div");
      const jailed = capturedSuspects.has(id);
      card.className = "suspect-card" + (jailed ? " captured" : "");
      if (jailed) {
        const stamp = document.createElement("div");
        stamp.className = "booked-stamp";
        stamp.textContent = "IN CUSTODY";
        card.appendChild(stamp);
      }
      const name = document.createElement("div");
      name.className = "name";
      name.textContent = sus.name;
      card.appendChild(name);
      const title = document.createElement("div");
      title.className = "title";
      title.textContent = sus.title;
      card.appendChild(title);
      TRAIT_KEYS.forEach((k) => {
        const row = document.createElement("div");
        row.className = "trait-line";
        row.textContent = `${TRAIT_LABELS[k]}: ${sus.traits[k]}`;
        card.appendChild(row);
      });
      files.appendChild(card);
    });
  }

  function renderFlights() {
    const wrap = $("flight-options");
    wrap.innerHTML = "";
    const visit = state.cityVisits[state.position];
    renderDeparturesMap(visit);
    if (!visit.options) {
      const p = document.createElement("p");
      p.className = "flights-hint";
      p.textContent = "This is the final destination. Make the arrest.";
      wrap.appendChild(p);
      return;
    }
    visit.options.forEach((cid) => {
      const city = CITIES[cid];
      const f = document.createElement("button");
      f.className = "flight";
      f.dataset.city = cid;
      f.innerHTML =
        `<span class="dest">${city.name}</span>` +
        `<span class="flag-sm">${city.flag}</span>`;
      f.addEventListener("click", () => flyTo(cid));
      f.addEventListener("mouseenter", () => highlightDeparture(cid, true));
      f.addEventListener("mouseleave", () => highlightDeparture(cid, false));
      f.addEventListener("focus", () => highlightDeparture(cid, true));
      f.addEventListener("blur", () => highlightDeparture(cid, false));
      wrap.appendChild(f);
    });
  }

  function renderDeparturesMap(visit) {
    const svg = $("departures-map");
    if (!svg) return;
    svg.innerHTML = "";
    // Continents (reuse the same paths from the flight map)
    CONTINENT_PATHS.forEach((d) => {
      const p = document.createElementNS(SVG_NS, "path");
      p.setAttribute("d", d);
      p.setAttribute("class", "dep-continent");
      svg.appendChild(p);
    });

    const addCity = (cid, cls) => {
      const coord = CITY_COORDS[cid];
      if (!coord) return;
      const { x, y } = project(coord.lat, coord.lon);
      const dot = document.createElementNS(SVG_NS, "circle");
      dot.setAttribute("cx", x);
      dot.setAttribute("cy", y);
      dot.setAttribute("r", cls.includes("origin") ? 6 : 5);
      dot.setAttribute("class", `dep-dot ${cls}`);
      dot.dataset.city = cid;
      dot.addEventListener("mouseenter", () => highlightDeparture(cid, true));
      dot.addEventListener("mouseleave", () => highlightDeparture(cid, false));
      dot.addEventListener("click", () => {
        if (!cls.includes("origin")) flyTo(cid);
      });
      svg.appendChild(dot);
      const label = document.createElementNS(SVG_NS, "text");
      label.textContent = CITIES[cid].name.split(",")[0];
      label.setAttribute("x", x + 7);
      label.setAttribute("y", y + 4);
      label.setAttribute("class", `dep-label ${cls}`);
      label.dataset.city = cid;
      svg.appendChild(label);
    };

    // Origin (current city)
    const originId = state.trail[state.position];
    if (originId) addCity(originId, "origin");
    // Flight options, if any
    if (visit && visit.options) {
      visit.options.forEach((cid) => {
        if (cid !== originId) addCity(cid, "option");
      });
    }
  }

  function highlightDeparture(cityId, on) {
    const svg = $("departures-map");
    if (svg) {
      svg.querySelectorAll(
        `.dep-dot[data-city="${cityId}"], .dep-label[data-city="${cityId}"]`
      ).forEach((el) => el.classList.toggle("hovered", on));
    }
    const btn = document.querySelector(`.flight[data-city="${cityId}"]`);
    if (btn) btn.classList.toggle("hover-highlight", on);
  }

  // -------- actions --------
  function interview(witnessIdx) {
    if (state.ended) return;
    const visit = state.cityVisits[state.position];
    const w = visit.witnesses[witnessIdx];
    if (w.interviewed) return;
    w.interviewed = true;
    state.hoursLeft -= INTERVIEW_HOURS;
    if (w.clue.type === "trait") {
      state.evidence[w.clue.trait] = w.clue.text;
    }
    saveGameState();
    if (checkTimeout()) return;
    render();
  }

  function flyTo(cityId) {
    if (state.ended) return;
    const visit = state.cityVisits[state.position];
    if (!visit.options) return;
    const fromId = state.trail[state.position];
    const correct = state.trail[state.position + 1];
    const success = cityId === correct;
    if (success) {
      state.hoursLeft -= TRAVEL_HOURS;
    } else {
      state.hoursLeft -= WRONG_TRAVEL_HOURS;
      visit.options = visit.options.filter((c) => c !== cityId);
    }
    saveGameState(); // commit hours / filtered options before the animation
    animateFlight({
      fromId,
      toId: cityId,
      success,
      onDone: () => {
        if (success) state.position += 1;
        else flashClue(`No trace of the thief in ${CITIES[cityId].name}. Hours wasted.`);
        saveGameState();
        showTab("scene");
        if (checkTimeout()) return;
        render();
      },
    });
  }

  function flashClue(msg) {
    const log = $("clue-log");
    const entry = document.createElement("div");
    entry.className = "entry";
    entry.textContent = "· " + msg;
    log.prepend(entry);
  }

  function openWarrantModal() {
    const wrap = $("warrant-options");
    wrap.innerHTML = "";
    Object.entries(SUSPECTS).forEach(([id, sus]) => {
      if (capturedSuspects.has(id)) return; // already in jail
      const btn = document.createElement("button");
      btn.className = "warrant-option";
      const name = `<span class="name">${sus.name} — ${sus.title}</span>`;
      const bio = `<span class="bio">${sus.bio}</span>`;
      const traits = TRAIT_KEYS.map(
        (k) => `<div class="tr">${TRAIT_LABELS[k]}: ${sus.traits[k]}</div>`
      ).join("");
      btn.innerHTML = name + bio + traits;
      btn.addEventListener("click", () => {
        state.warrant = id;
        saveGameState();
        $("warrant-modal").classList.add("hidden");
        render();
      });
      wrap.appendChild(btn);
    });
    $("warrant-modal").classList.remove("hidden");
  }

  function attemptArrest() {
    if (state.ended) return;
    const atFinal = state.position === state.trail.length - 1;
    if (!atFinal) {
      flashClue("They're not here. Keep moving.");
      return;
    }
    const suspect = SUSPECTS[state.suspect];
    const artifact = state.case.artifact;
    if (!state.warrant) {
      endGame({
        cutscene: "no_warrant",
        ctx: { suspectName: suspect.name, artifact },
        win: false,
        title: "The Thief Walks Free",
        text: gender(`Without a warrant, customs waves them through. ${suspect.name} is on a private flight to somewhere you'll never find them.`, state.suspect),
      });
      return;
    }
    if (state.warrant === state.suspect) {
      capturedSuspects.add(state.suspect);
      solvedCases.add(state.case.id);
      saveCaptured();
      saveSolvedCases();

      const isPatriarch = state.suspect === ringleaderId();
      const justCaughtTenth = !isPatriarch && allCrooksCaught();
      let cutsceneType, title, text;
      if (isPatriarch) {
        cutsceneType = "ring_busted";
        title = "The Ring Is Broken";
        text = `You collar ${suspect.name} on the tarmac. The Borghese Ledger is in your hand — every buyer on every continent. The Bureau names you agent of the decade.`;
      } else if (justCaughtTenth) {
        cutsceneType = "ten_down";
        title = "Ten Down — One to Go";
        text = `You collar ${suspect.name} — the tenth operator. But the Patriarch is still at large in Rome. Return to HQ for the final briefing.`;
      } else {
        cutsceneType = "win";
        title = "Case Closed";
        text = gender(`You collar ${suspect.name} in the lobby of a small hotel. The ${artifact} is in their shoulder bag, wrapped in silk. The Bureau sends its compliments.`, state.suspect);
      }
      endGame({
        cutscene: cutsceneType,
        ctx: { suspectName: suspect.name, artifact },
        win: true,
        title,
        text,
      });
    } else {
      const wrong = SUSPECTS[state.warrant];
      endGame({
        cutscene: "wrong_suspect",
        ctx: { suspectName: suspect.name, wrongName: wrong.name, artifact },
        win: false,
        title: "Wrong Suspect",
        text: `You detain ${wrong.name}, who has nothing to do with the theft. By the time the paperwork clears, ${suspect.name} has vanished with the ${artifact}.`,
      });
    }
  }

  function checkTimeout() {
    if (state.hoursLeft <= 0 && !state.ended) {
      const suspect = SUSPECTS[state.suspect];
      endGame({
        cutscene: "timeout",
        ctx: { suspectName: suspect.name, artifact: state.case.artifact },
        win: false,
        title: "Time's Up",
        text: `The Bureau's window has closed. The trail is cold. ${suspect.name} has moved the ${state.case.artifact} to a private buyer you will not find.`,
      });
      return true;
    }
    return false;
  }

  function endGame({ cutscene, ctx, win, title, text }) {
    state.ended = true;
    clearGameState();
    const finish = () => {
      showScreen("end");
      const t = $("end-title");
      t.textContent = title;
      t.className = win ? "win" : "lose";
      $("end-text").textContent = text;
      const total = Object.keys(SUSPECTS).length;
      const progress = `Ring progress: ${capturedSuspects.size} of ${total} in custody.`;
      if (!win) {
        $("end-solution").textContent =
          `The thief was ${SUSPECTS[state.suspect].name}. Trail: ` +
          state.trail.map((c) => CITIES[c].name).join(" → ") +
          "   ·   " + progress;
      } else {
        $("end-solution").textContent =
          `Trail: ${state.trail.map((c) => CITIES[c].name).join(" → ")}   ·   Hours to spare: ${Math.floor(state.hoursLeft)}   ·   ${progress}`;
      }
    };
    if (cutscene) {
      playCutscene(cutscene, ctx || {}, finish);
    } else {
      finish();
    }
  }

  // -------- cutscenes (Keystone-Cops silent-film style) --------
  // SVG figure factories. Black silhouettes; simple running pose.
  function copFigure(delay) {
    return `
      <svg class="kc-fig" viewBox="0 0 40 60" aria-hidden="true" style="animation-delay:${delay}s">
        <path d="M 14 11 L 14 7 Q 20 2 26 7 L 26 11 Z" />
        <circle cx="20" cy="3" r="1.4"/>
        <circle cx="20" cy="15" r="4.5"/>
        <path d="M 15 19 L 25 19 L 26 34 L 14 34 Z"/>
        <rect x="14" y="28" width="12" height="1.4" fill="#e6d7ae"/>
        <line x1="15" y1="22" x2="8" y2="15" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
        <line x1="8"  y1="15" x2="4" y2="8"  stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
        <line x1="25" y1="22" x2="32" y2="26" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
        <g class="kc-legs">
          <line x1="17" y1="34" x2="12" y2="50" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
          <line x1="23" y1="34" x2="28" y2="50" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
        </g>
      </svg>
    `;
  }
  function perpFigure(delay) {
    return `
      <svg class="kc-fig kc-perp-fig" viewBox="0 0 40 60" aria-hidden="true" style="animation-delay:${delay}s">
        <path d="M 13 10 L 27 10 L 27 7 Q 20 4 13 7 Z"/>
        <circle cx="20" cy="15" r="4.5"/>
        <rect x="15" y="13.5" width="10" height="2" fill="#e6d7ae"/>
        <path d="M 15 19 L 25 19 L 26 34 L 14 34 Z"/>
        <rect x="14" y="22" width="12" height="1.2" fill="#e6d7ae"/>
        <rect x="14" y="26" width="12" height="1.2" fill="#e6d7ae"/>
        <rect x="14" y="30" width="12" height="1.2" fill="#e6d7ae"/>
        <ellipse cx="9" cy="20" rx="5" ry="6"/>
        <text x="5.5" y="22.5" font-size="5" fill="#e6d7ae" font-weight="bold" font-family="serif">$</text>
        <line x1="15" y1="22" x2="10" y2="21" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
        <line x1="25" y1="22" x2="32" y2="18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
        <g class="kc-legs">
          <line x1="17" y1="34" x2="12" y2="50" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
          <line x1="23" y1="34" x2="28" y2="50" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
        </g>
      </svg>
    `;
  }
  const skyline = `
    <svg class="kc-skyline" viewBox="0 0 400 140" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <rect x="0"   y="70" width="50"  height="70"/>
      <rect x="52"  y="50" width="30"  height="90"/>
      <polygon points="82,50 90,36 98,50"/>
      <rect x="100" y="80" width="60"  height="60"/>
      <rect x="165" y="40" width="24"  height="100"/>
      <rect x="168" y="36" width="2" height="6"/>
      <rect x="195" y="74" width="40"  height="66"/>
      <rect x="240" y="58" width="44"  height="82"/>
      <rect x="288" y="84" width="40"  height="56"/>
      <rect x="332" y="48" width="28"  height="92"/>
      <polygon points="360,48 370,30 380,48"/>
    </svg>
  `;

  function sceneChase(flavor) {
    // flavor: "caught" or "escape"
    const perpClass = flavor === "caught" ? "kc-mover kc-perp kc-caught" : "kc-mover kc-perp kc-escape";
    const copClass  = flavor === "caught" ? "kc-mover kc-cop kc-caught" : "kc-mover kc-cop kc-lag";
    return `
      <div class="kc-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <div class="${perpClass}" style="animation-delay:0s;"><div class="kc-bounce">${perpFigure(0)}</div></div>
        <div class="${copClass}"   style="animation-delay:0.15s;"><div class="kc-bounce">${copFigure(0.02)}</div></div>
        <div class="${copClass}"   style="animation-delay:0.35s;"><div class="kc-bounce">${copFigure(0.05)}</div></div>
        <div class="${copClass} kc-trip" style="animation-delay:0.55s;"><div class="kc-bounce">${copFigure(0.08)}</div></div>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function scenePileon() {
    // Cops converge on a tangled pile near center
    return `
      <div class="kc-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <div class="kc-pile">
          <div class="kc-pile-fig kc-pf-1">${copFigure(0)}</div>
          <div class="kc-pile-fig kc-pf-2">${copFigure(0.04)}</div>
          <div class="kc-pile-fig kc-pf-3">${copFigure(0.08)}</div>
          <div class="kc-pile-fig kc-pf-perp">${perpFigure(0.02)}</div>
        </div>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function sceneGate() {
    return `
      <div class="kc-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <svg class="kc-gate" viewBox="0 0 160 120" aria-hidden="true">
          <rect x="12" y="20"  width="6"  height="90"/>
          <rect x="142" y="20" width="6"  height="90"/>
          <rect x="10" y="16"  width="140" height="6"/>
          <text x="80" y="54" text-anchor="middle" font-family="Courier New" font-size="10" font-weight="bold">CUSTOMS</text>
        </svg>
        <div class="kc-mover kc-perp kc-walkthrough"><div class="kc-bounce kc-stroll">${perpFigure(0)}</div></div>
        <div class="kc-cop-flap kc-left">${copFigure(0)}</div>
        <div class="kc-cop-flap kc-right">${copFigure(0.1)}</div>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function sceneClock() {
    return `
      <div class="kc-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <svg class="kc-clock" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" stroke-width="4"/>
          <g class="kc-tick">
            ${Array.from({length:12}).map((_,i)=>{
              const a=(i*30)*Math.PI/180;
              const x1=60+Math.sin(a)*44, y1=60-Math.cos(a)*44;
              const x2=60+Math.sin(a)*50, y2=60-Math.cos(a)*50;
              return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="currentColor" stroke-width="2"/>`;
            }).join("")}
          </g>
          <line class="kc-hand kc-hand-min" x1="60" y1="60" x2="60" y2="18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          <line class="kc-hand kc-hand-hr"  x1="60" y1="60" x2="60" y2="30" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
          <circle cx="60" cy="60" r="3" fill="currentColor"/>
        </svg>
        <div class="kc-circles">
          <div class="kc-orbit kc-o1"><div class="kc-bounce">${copFigure(0)}</div></div>
          <div class="kc-orbit kc-o2"><div class="kc-bounce">${copFigure(0.08)}</div></div>
          <div class="kc-orbit kc-o3"><div class="kc-bounce">${copFigure(0.16)}</div></div>
        </div>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function sceneEscape() {
    // Perp dashing off; cops behind tangled up
    return `
      <div class="kc-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <div class="kc-mover kc-perp kc-escape"><div class="kc-bounce">${perpFigure(0)}</div></div>
        <div class="kc-tangle">
          <div class="kc-tangle-fig kc-tf-1">${copFigure(0)}</div>
          <div class="kc-tangle-fig kc-tf-2">${copFigure(0.04)}</div>
          <div class="kc-tangle-fig kc-tf-3">${copFigure(0.08)}</div>
        </div>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function sceneJail() {
    return `
      <div class="kc-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <div class="kc-cell">
          <div class="kc-cell-bg"></div>
          <div class="kc-cell-perp">${perpFigure(0)}</div>
          <svg class="kc-bars" viewBox="0 0 120 150" preserveAspectRatio="none" aria-hidden="true">
            <rect x="0" y="0" width="120" height="5" fill="currentColor"/>
            <rect x="0" y="145" width="120" height="5" fill="currentColor"/>
            <rect x="10" y="0" width="4" height="150" fill="currentColor"/>
            <rect x="32" y="0" width="4" height="150" fill="currentColor"/>
            <rect x="54" y="0" width="4" height="150" fill="currentColor"/>
            <rect x="76" y="0" width="4" height="150" fill="currentColor"/>
            <rect x="98" y="0" width="4" height="150" fill="currentColor"/>
          </svg>
        </div>
        <div class="kc-guard">${copFigure(0)}</div>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function sceneRingBusted() {
    // Row of five silhouettes behind a long cell of bars
    const cells = Array.from({length: 5}).map((_, i) => `
      <div class="rb-cell">
        <div class="rb-cell-bg"></div>
        <div class="rb-cell-fig">${perpFigure(i * 0.03)}</div>
      </div>
    `).join("");
    return `
      <div class="kc-scene rb-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <div class="rb-cells">${cells}</div>
        <svg class="rb-bars" viewBox="0 0 600 150" preserveAspectRatio="none" aria-hidden="true">
          <rect x="0" y="0" width="600" height="5" fill="currentColor"/>
          <rect x="0" y="145" width="600" height="5" fill="currentColor"/>
          ${Array.from({length:20}).map((_,i)=>`<rect x="${i*30+10}" y="0" width="3" height="150" fill="currentColor"/>`).join("")}
        </svg>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function sceneLaugh() {
    return `
      <div class="kc-scene">
        ${skyline}
        <div class="kc-ground"></div>
        <div class="kc-laugh">
          <div class="kc-laugh-speech">HA!&nbsp;HA!&nbsp;HA!</div>
          <div class="kc-laugh-fig">${perpFigure(0)}</div>
        </div>
        <div class="kc-vignette"></div>
        <div class="kc-grain"></div>
      </div>
    `;
  }

  function intertitle(lines) {
    const body = lines.map((l, i) =>
      i === 0 ? `<div class="kc-title-lead">${l}</div>`
              : `<div class="kc-title-body">${l}</div>`
    ).join("");
    return `<div class="kc-intertitle"><div class="kc-intertitle-box">${body}</div></div>`;
  }

  // Each cutscene type has multiple variants; a random one plays each time.
  // Variants differ in which scenes they use (and the order) so the visual
  // signature is distinct, not just the captions.
  const CUTSCENE_VARIANTS = {
    win: [
      // A — full chase → pile-on → jail
      (ctx) => [
        { html: sceneChase("caught"), caption: "The chase is on — you close the gap!", ms: 3000 },
        { html: scenePileon(),        caption: `Pile on, boys! — ${ctx.suspectName} is cornered.`, ms: 2600 },
        { html: sceneJail(),          caption: `Behind bars. ${ctx.suspectName} is done running.`, ms: 2800 },
        { html: intertitle(["CASE CLOSED", `The ${ctx.artifact} is recovered.`]), caption: "", ms: 2400 },
      ],
      // B — no chase, caught in hotel; straight to pile-on and jail
      (ctx) => [
        { html: scenePileon(),        caption: `A tip puts five cops on ${ctx.suspectName} in the hotel lobby.`, ms: 2600 },
        { html: sceneJail(),          caption: `A concrete cell, a single bulb. ${ctx.suspectName} waits for extradition.`, ms: 2800 },
        { html: intertitle(["CASE CLOSED", `The ${ctx.artifact} is back in the Bureau's vault.`]), caption: "", ms: 2400 },
      ],
      // C — chase → jail (no pile-on, just a clean collar)
      (ctx) => [
        { html: sceneChase("caught"), caption: `You spot ${ctx.suspectName} crossing the plaza — then close in at a dead run.`, ms: 2800 },
        { html: sceneJail(),          caption: `Local gendarmes take ${ctx.suspectName} to holding without another sound.`, ms: 2800 },
        { html: intertitle(["CASE CLOSED", `${ctx.artifact} — recovered intact.`]), caption: "", ms: 2400 },
      ],
    ],
    wrong_suspect: [
      // A — the classic blunder: pile on wrong → real thief escapes → laughs
      (ctx) => [
        { html: scenePileon(),  caption: `You pile on ${ctx.wrongName}…`, ms: 2400 },
        { html: sceneEscape(),  caption: `…while ${ctx.suspectName} slips away behind you!`, ms: 2600 },
        { html: sceneLaugh(),   caption: `${ctx.suspectName} has the last laugh.`, ms: 2800 },
        { html: intertitle(["WRONG SUSPECT", `${ctx.suspectName} makes off with the ${ctx.artifact}.`]), caption: "", ms: 2400 },
      ],
      // B — thief escapes FIRST, you then realize, no laugh (quiet burn)
      (ctx) => [
        { html: sceneEscape(),  caption: `${ctx.suspectName} is already a silhouette at the end of the alley.`, ms: 2600 },
        { html: scenePileon(),  caption: `By the time you realize, ${ctx.wrongName} is flat on the cobbles, protesting.`, ms: 2400 },
        { html: intertitle(["WRONG SUSPECT", `${ctx.suspectName} is in the wind with the ${ctx.artifact}.`]), caption: "", ms: 2400 },
      ],
      // C — gate scene (wrong arrest at customs) → thief laughs — skip pile
      (ctx) => [
        { html: sceneGate(),    caption: `Customs detains ${ctx.wrongName} at the gate — wrong face, wrong warrant.`, ms: 2800 },
        { html: sceneLaugh(),   caption: `${ctx.suspectName} watches from the rooftop bar, sipping vermouth.`, ms: 2800 },
        { html: intertitle(["WRONG SUSPECT", `The ring laughs longest.`]), caption: "", ms: 2400 },
      ],
    ],
    no_warrant: [
      // A — classic: gate → laugh
      (ctx) => [
        { html: sceneGate(),    caption: "No warrant. Customs waves them right through.", ms: 2800 },
        { html: sceneLaugh(),   caption: `${ctx.suspectName} tips a hat from the jetway.`, ms: 2800 },
        { html: intertitle(["WALKS FREE", `${ctx.suspectName} is gone with the ${ctx.artifact}.`]), caption: "", ms: 2400 },
      ],
      // B — gate only, dignified shrug (no laugh)
      (ctx) => [
        { html: sceneGate(),    caption: "You have only the name. Customs demands more — a warrant. You have none.", ms: 3000 },
        { html: intertitle(["WALKS FREE", `Paperwork beats police work.`]), caption: "", ms: 2400 },
      ],
      // C — escape into the airport crowd, no gate confrontation
      (ctx) => [
        { html: sceneEscape(),  caption: `${ctx.suspectName} steps onto a jet bridge. You can only watch.`, ms: 2600 },
        { html: sceneLaugh(),   caption: `${ctx.suspectName} waves from a business-class window.`, ms: 2800 },
        { html: intertitle(["WALKS FREE", `${ctx.suspectName} vanishes with the ${ctx.artifact}.`]), caption: "", ms: 2400 },
      ],
    ],
    timeout: [
      // A — clock → escape → laugh (classic)
      (ctx) => [
        { html: sceneClock(),   caption: "The clock runs out. The Bureau's window closes.", ms: 2800 },
        { html: sceneEscape(),  caption: `While the cops chase their tails, ${ctx.suspectName} vanishes.`, ms: 2400 },
        { html: sceneLaugh(),   caption: `${ctx.suspectName} laughs from halfway around the world.`, ms: 2800 },
        { html: intertitle(["THE TRAIL GOES COLD", `The ${ctx.artifact} is lost.`]), caption: "", ms: 2400 },
      ],
      // B — clock → jail-less, short; just a cold clock and an intertitle
      (ctx) => [
        { html: sceneClock(),   caption: "The Bureau's stopwatch clicks to zero.", ms: 3000 },
        { html: intertitle(["OUT OF TIME", `${ctx.suspectName} is untraceable with the ${ctx.artifact}.`]), caption: "", ms: 2400 },
      ],
      // C — thief's getaway happens first, THEN the clock
      (ctx) => [
        { html: sceneEscape(),  caption: `${ctx.suspectName} was always three hops ahead.`, ms: 2400 },
        { html: sceneClock(),   caption: `Time's up. The captain relieves you.`, ms: 2600 },
        { html: sceneLaugh(),   caption: `${ctx.suspectName} will never be this close again.`, ms: 2600 },
        { html: intertitle(["UNSOLVED", `The ${ctx.artifact} is on the black market.`]), caption: "", ms: 2400 },
      ],
    ],
    ten_down: [
      (ctx) => [
        { html: sceneChase("caught"), caption: `The tenth operator — ${ctx.suspectName} — is in your grip.`, ms: 2800 },
        { html: scenePileon(),        caption: "The ring's entire lieutenant corps — in custody.", ms: 2400 },
        { html: intertitle(["TEN DOWN", "The Patriarch remains."]), caption: "", ms: 2800 },
      ],
    ],
    ring_busted: [
      (ctx) => [
        { html: sceneChase("caught"),  caption: `The Patriarch — ${ctx.suspectName} — in your crosshairs.`, ms: 2800 },
        { html: scenePileon(),         caption: "The head of the snake — caught.", ms: 2400 },
        { html: sceneRingBusted(),     caption: "Every operator. Every lieutenant. The Patriarch himself.", ms: 3200 },
        { html: intertitle(["THE RING IS BROKEN", "Bureau honors: highest commendation."]), caption: "", ms: 3000 },
      ],
    ],
  };

  let cutsceneTimeout = null;

  function playCutscene(type, ctx, onDone) {
    const variants = CUTSCENE_VARIANTS[type] || [];
    if (!variants.length) { onDone && onDone(); return; }
    const variant = variants[Math.floor(Math.random() * variants.length)];
    const beats = variant(ctx);
    const modal = $("cutscene-modal");
    modal.classList.remove("hidden");
    let i = 0;
    function advance() {
      if (i >= beats.length) {
        modal.classList.add("hidden");
        onDone && onDone();
        return;
      }
      const beat = beats[i++];
      $("cutscene-frame").innerHTML = beat.html;
      $("cutscene-caption").textContent = gender(beat.caption, state.suspect);
      cutsceneTimeout = setTimeout(advance, beat.ms);
    }
    $("btn-cutscene-skip").onclick = () => {
      if (cutsceneTimeout) clearTimeout(cutsceneTimeout);
      cutsceneTimeout = null;
      modal.classList.add("hidden");
      onDone && onDone();
    };
    advance();
  }

  // -------- wiring --------
  function bindEvents() {
    document.querySelectorAll(".mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        ensureAudio(); // prime AudioContext on first user gesture
        startCase(btn.dataset.mode);
      });
    });
    $("btn-accept").addEventListener("click", () => {
      showScreen("game");
      showTab("scene");
      if (!mapBuilt) buildWorldMap();
      render();
    });
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => showTab(btn.dataset.tab));
    });
    $("btn-mute").addEventListener("click", toggleMute);
    $("btn-warrant").addEventListener("click", openWarrantModal);
    $("btn-warrant-cancel").addEventListener("click", () => {
      $("warrant-modal").classList.add("hidden");
    });
    $("btn-arrest").addEventListener("click", attemptArrest);
    $("btn-replay").addEventListener("click", () => {
      showScreen("title");
      renderRoster();
    });
    const btnNewRing = $("btn-new-ring");
    if (btnNewRing) btnNewRing.addEventListener("click", () => {
      resetCaptured();
    });
    $("warrant-modal").addEventListener("click", (e) => {
      if (e.target.id === "warrant-modal") {
        $("warrant-modal").classList.add("hidden");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderRoster();
    // Resume an in-progress case if the browser has one stashed away.
    if (loadGameState()) {
      if (!mapBuilt) buildWorldMap();
      showScreen("game");
      showTab(state.activeTab || "scene");
      render();
    }
    // Pre-create a suspended AudioContext and start fetching+decoding samples
    // right away. The first real user click (mode button) will resume it.
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx && !audioCtx) {
        audioCtx = new Ctx();
        if (audioCtx.state === "running") audioCtx.suspend();
        preloadSamples();
      }
    } catch (_) { /* some browsers disallow pre-gesture creation */ }
  });
})();
