// ============================================================================
// app.js — charge progress.json, calcule l'avancée et construit le dashboard.
// Les données de référence viennent de data.js (ONE_PIECE_DATA).
// ============================================================================

(async function () {
  const progress = await loadProgress();
  const data = ONE_PIECE_DATA;

  const current = progress.currentChapter;
  const totalChapters = data.totalChapters;
  const totalVolumes = data.totalVolumes;

  // --- Trouver l'arc et la saga en cours -----------------------------------
  let currentArc = null;
  let currentSaga = null;
  for (const saga of data.sagas) {
    for (const arc of saga.arcs) {
      if (current >= arc.startChapter && current <= arc.endChapter) {
        currentArc = arc;
        currentSaga = saga;
      }
    }
  }
  // Si le chapitre dépasse tout ce qui est connu, on cale sur le dernier arc.
  if (!currentArc) {
    const lastSaga = data.sagas[data.sagas.length - 1];
    currentSaga = lastSaga;
    currentArc = lastSaga.arcs[lastSaga.arcs.length - 1];
  }

  // --- En-tête --------------------------------------------------------------
  document.getElementById('reader-title').textContent =
    `Le voyage d'${progress.reader}`;

  const lastUpdatedEl = document.getElementById('last-updated');
  if (progress.lastUpdated) {
    lastUpdatedEl.textContent = `Dernière mise à jour : ${formatDate(progress.lastUpdated)}`;
  }

  // --- Cartes de stats ------------------------------------------------------
  const chapterPct = pct(current, totalChapters);
  const volumePct = pct(progress.currentVolume, totalVolumes);

  setText('stat-chapter', current);
  setText('stat-chapter-sub', `sur ${totalChapters} · ${chapterPct}%`);

  setText('stat-volume', progress.currentVolume);
  setText('stat-volume-sub', `sur ${totalVolumes} · ${volumePct}%`);

  setText('stat-arc', currentArc.name);
  setText('stat-saga', `Saga ${currentSaga.name} ${currentSaga.emoji}`);

  // --- Jauge globale (log pose) --------------------------------------------
  setText('overall-pct', `${chapterPct}%`);
  setText('overall-caption',
    `${progress.reader} a lu ${current} chapitres sur ${totalChapters}. ` +
    (progress.note ? progress.note : `En route vers le One Piece !`));

  // animation au prochain frame pour déclencher la transition CSS
  requestAnimationFrame(() => {
    document.getElementById('overall-fill').style.width = chapterPct + '%';
    document.getElementById('overall-ship').style.left = chapterPct + '%';
  });

  // --- Frise des sagas / arcs ----------------------------------------------
  const timeline = document.getElementById('timeline');
  const frag = document.createDocumentFragment();

  for (const saga of data.sagas) {
    const sagaEl = document.createElement('div');
    sagaEl.className = 'saga';

    sagaEl.appendChild(buildSagaHead(saga));

    const arcsEl = document.createElement('div');
    arcsEl.className = 'arcs';
    for (const arc of saga.arcs) {
      arcsEl.appendChild(buildArc(arc, current));
    }
    sagaEl.appendChild(arcsEl);
    frag.appendChild(sagaEl);
  }
  timeline.appendChild(frag);
})();

// ============================================================================
// Helpers
// ============================================================================

async function loadProgress() {
  try {
    const res = await fetch('progress.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (e) {
    // Repli si le fetch échoue (ex. ouverture en file://)
    console.warn('Impossible de charger progress.json, valeurs par défaut.', e);
    return {
      reader: 'Anaïs',
      currentVolume: 60,
      currentChapter: 590,
      lastUpdated: null,
      note: ''
    };
  }
}

function buildSagaHead(saga) {
  const head = document.createElement('div');
  head.className = 'saga-head';

  const emoji = document.createElement('span');
  emoji.className = 'saga-emoji';
  emoji.textContent = saga.emoji;

  const txt = document.createElement('div');
  const name = document.createElement('div');
  name.className = 'saga-name';
  name.textContent = `Saga ${saga.name}`;
  const sub = document.createElement('div');
  sub.className = 'saga-subtitle';
  sub.textContent = saga.subtitle;
  txt.appendChild(name);
  txt.appendChild(sub);

  head.appendChild(emoji);
  head.appendChild(txt);
  return head;
}

function buildArc(arc, current) {
  const el = document.createElement('div');
  const status = arcStatus(arc, current);
  el.className = 'arc arc--' + status;

  const marker = document.createElement('div');
  marker.className = 'arc-marker';
  marker.textContent = status === 'done' ? '✅' : status === 'current' ? '⛵' : '🗺️';

  const body = document.createElement('div');
  body.className = 'arc-body';

  const name = document.createElement('div');
  name.className = 'arc-name';
  name.textContent = arc.name;

  const meta = document.createElement('div');
  meta.className = 'arc-meta';
  const volTxt = arc.startVolume === arc.endVolume
    ? `Tome ${arc.startVolume}`
    : `Tomes ${arc.startVolume}–${arc.endVolume}`;
  meta.textContent = `Ch. ${arc.startChapter}–${arc.endChapter} · ${volTxt}`;

  body.appendChild(name);
  body.appendChild(meta);

  // Barre de progression seulement pour l'arc en cours (les autres sont
  // pleins ou vides via le CSS).
  if (status === 'current') {
    const bar = document.createElement('div');
    bar.className = 'arc-bar';
    const fill = document.createElement('div');
    fill.className = 'arc-bar-fill';
    bar.appendChild(fill);
    body.appendChild(bar);

    const p = arcProgress(arc, current);
    requestAnimationFrame(() => { fill.style.width = p + '%'; });

    const sub = document.createElement('div');
    sub.className = 'arc-meta';
    sub.style.marginTop = '0.3rem';
    sub.innerHTML = `<strong>${p}%</strong> de l'arc lu — chapitre ${current}`;
    body.appendChild(sub);
  }

  el.appendChild(marker);
  el.appendChild(body);
  return el;
}

function arcStatus(arc, current) {
  if (current > arc.endChapter) return 'done';
  if (current >= arc.startChapter && current <= arc.endChapter) return 'current';
  return 'todo';
}

function arcProgress(arc, current) {
  const span = arc.endChapter - arc.startChapter + 1;
  const read = current - arc.startChapter + 1;
  return clamp(Math.round((read / span) * 100), 0, 100);
}

function pct(value, total) {
  return clamp(Math.round((value / total) * 100), 0, 100);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function formatDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
