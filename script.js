/**
 * ==========================================================================
 * WEBSITE ULANG tauN ROMANTIS - SHABRINA (BINA)
 * Vanilla JavaScript murni tanpa library eksternal
 * 60 FPS Smooth Performance, Mobile-First
 * ==========================================================================
 */

// ==========================================================================
// A. DATA UTAMA / CONFIG (EDIT SEMUA TEKS, PESAN, & FOTO DI SINI)
// ==========================================================================
const CONFIG = {
  // Informasi Penerima & Pengirim
  namaPenerima: "Shabrina",
  panggilan: "Bina",
  namaPengirim: "Nafis", // Ganti dengan nama kamu, misal: "Rian", "Adit", dll.
  tanggalUlangtaunLabel: "04 OKTOBER",
  password: "041004", // Format HHBBTT (04 Oktober 2004)
  durasiLoading: 3800, // milidetik (3.8 detik)

  // Pesan Digital Bouquet (5 Bunga: Tulip, Mawar, Matahari, Buket, Anggrek/Hibiscus)
  bouquetMessages: [
    {
      emoji: "🌷",
      label: "🌷 KEINDAHAN",
      text: "Aku suka kamu bukan cuma karena kamu cantik. Aku suka sikap kamu, perhatian  kamu, kebaikan kamu, cara kamu ketawa dan hal-hal kecil dari kamu yang mungkin kamu sendiri gak sadar."
    },
    {
      emoji: "🌹",
      label: "🌹 KETULUSAN",
      text: "Aku mungkin gak selalu bilang, tapi aku ngerasa kamu tulus banget sama aku. Punya orang yang bisa aku trust kayak kamu it really means alot to me."
    },
    {
      emoji: "🌻",
      label: "🌻 KECERIAAN",
      text: "Kadang hari aku biasa aja, kadang juga lagi gak enak. Tapi kalau ngeliat pap kamu, pasti jadi lebih enak. Literally Sesimpel itu."
    },
    {
      emoji: "💐",
      label: "💐 KESABARAN",
      text: "Makasih ya udah sabar sama aku. Aku tau aku gak selalu gampang dihadapin dan kadang masih suka bikin kesel, apalagi kalo lagi pengen sendiri. Tapi kamu masih mau ngertiin aku, and i really appriciate that."
    },
    {
      emoji: "🌺",
      label: "🌺 MASA DEPAN",
      text: "Aku gak tau nanti kita bakal sejauh apa, but I hope we can keep going even if it slow. Gak harus perfect, yang penting kita sama-sama mau usaha, saling ngerti, and stay together."
    }
  ],

  // Koleksi Foto & Caption (Our Photo Memories)
  fotoMemories: [
    {
      src: "images/foto1.jpeg",
      caption: "first pap nyaa"
    },
    {
      src: "images/foto2.jpeg",
      caption: "wpp wa :)"
    },
    {
      src: "images/foto3.jpeg",
      caption: "busett dehhh"
    },
    {
      src: "images/foto4.jpeg",
      caption: "ini ada di shopee ga sii"
    },
    {
      src: "images/foto5.jpeg",
      caption: "eyemakeup nya gacorrr"
    },
    {
      src: "images/foto6.jpeg",
      caption: "alamknyooo"
    }
  ],

  // Jurnal Perjalanan Cinta (Timeline Milestones)
  journeyMilestones: [
    {
      emoji: "✨",
      title: "Awal",
      subtitle: "Pertama kali ketemu",
      desc: "Sejujurnya ini cukup random soalnya ketemu dari anon"
    },
    {
      emoji: "💬",
      title: "Mulai deket",
      subtitle: "Ternyata jokes aku masuk",
      desc: "US"
    },
    {
      emoji: "💕",
      title: "aku mulai suka banget sama kamu",
      subtitle: "makin makin deket",
      desc: "bisa callan sama kamu, cerita cerita, saling ngepap"
    },
    {
      emoji: "📸",
      title: "Mulai Renggang & balikan",
      subtitle: "aku ngerasa ragu dan mulai renggang",
      desc: "sebenernya salah aku si, soalnya aku yang mulai duluan buat renggang, tapi akhirnya aku balik lagi soalnya ga kuat (ternyata kmu dah ngedet sama cowo lain)"
    },
    {
      emoji: "🌅",
      title: "Hari Ini & Masa Depan",
      subtitle: "Perjalanan Kita Belum Selesai",
      date: "04 OKTOBER",
      desc: "Hari ini kamu nambah usia, dan aku bersyukur masih ada di sini. Semoga kita masih bisa terus terus terus bersama sampai selamanya (AAMIIN)"
    }
  ],

  // 8 Catatan Rasa Syukur (Reasons I'm Grateful To Know You)
  jarNotes: [
    {
      emoji: "💫",
      text: "Aku bersyukur karena sama kamu aku bisa jadi diri sendiri. Bisa bercanda, ngobrol gak jelas, sampe ketawa gara-gara hal yang sebenarnya gak jelas."
    },
    {
      emoji: "🌷",
      text: "Makasih karena kamu masih sabar sama aku, termasuk pas aku lagi keras kepala, banyak mikir, atau kadang susah diajak ngobrol. Aku tau itu gak gampang."
    },
    {
      emoji: "🤝",
      text: "Aku senang punya kamu yang bisa dengerin cerita aku, termasuk waktu aku lagi bingung atau banyak pikiran. Kadang aku cuma butuh didengerin, dan kamu ada di situ."
    },
    {
      emoji: "🍜",
      text: "Aku suka hal-hal kecil yang kita lakuin bareng. call, chatan, saling pap atau sekadar nanya \"udah minum belum?\"(beneran nanya)."
    },
    {
      emoji: "🌙",
      text: "Aku bersyukur kamu bisa dengerin aku tanpa bikin aku merasa aneh karena cerita ini itu. Rasanya nyaman punya tempat buat cerita."
    },
    {
      emoji: "☀️",
      text: "Aku gak tau kamu sadar atau gak, tapi foto kamu emang punya efek aneh ke aku. Lagi cape atau bad mood, liat wpp kamu aja langsung good mood."
    },
    {
      emoji: "🧸",
      text: "Sama kamu aku nggak harus selalu kelihatan baik-baik aja. Aku bisa cerita kalau lagi capek, bingung, atau lagi nggak tahu harus gimana."
    },
    {
      emoji: "💖",
      text: "Kalau ditanya apa yang paling aku syukuri dari hubungan ini, salah satunya ya karena aku bisa kenal kamu. Semoga kita masih bisa terus saling nemenin, bukan cuma hari ini."
    }
  ],
};

// ==========================================================================
// STATE MANAGEMENT & INISIALISASI
// ==========================================================================
const state = {
  unlocked: false,
  pinEntered: "",
  wrongPinCount: 0,
  isMusicPlaying: false,
  candlesLeft: 3,
  candlesBlown: [false, false, false],
  currentPhotoIndex: 0,
  revealedPhotos: new Set(),
  remainingJarIndices: [0, 1, 2, 3, 4, 5, 6, 7],
  drawnJarCount: 0,
  isJarShaking: false,
  audioInitiated: false
};

// Selalu bersihkan status unlocked di awal agar lock screen selalu muncul
try {
  sessionStorage.removeItem('unlocked');
} catch (e) { }

/**
 * Fungsi global untuk reset session (dapat dipanggil via console: resetSession())
 */
window.resetSession = function () {
  try {
    sessionStorage.removeItem('unlocked');
  } catch (e) { }
  window.location.reload();
};

// ==========================================================================
// AUDIO SYSTEM (BGM + WEBAUDIO ROMANTIC SYNTH MELODY AS FALLBACK)
// ==========================================================================
const bgm = document.getElementById('bgm');
const musicBtn = document.getElementById('music-btn');
let synthAudioCtx = null;
let synthInterval = null;
let iosTipShown = false;

/**
 * Melepas kunci audio iOS Safari secara sinkron saat ada sentuhan pengguna pertama kali
 */
function unlockAudioContextSync() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!synthAudioCtx) {
      synthAudioCtx = new AudioContext();
    }
    if (synthAudioCtx.state === 'suspended') {
      synthAudioCtx.resume();
    }
    // Mainkan buffer hening 1 sample untuk membuka blokir autoplay di iOS
    const buffer = synthAudioCtx.createBuffer(1, 1, 22050);
    const source = synthAudioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(synthAudioCtx.destination);
    source.start(0);
  } catch (e) { }
}

// Buka kunci audio sesegera mungkin saat pengguna pertama kali menyentuh layar
const globalAudioUnlock = () => {
  unlockAudioContextSync();
};
['touchstart', 'touchend', 'click'].forEach(evtName => {
  document.addEventListener(evtName, globalAudioUnlock, { capture: true, passive: true });
});

/**
 * Tampilkan petunjuk hening ramah khusus iPhone jika pengguna berada di iOS
 */
function showIosSilentTip() {
  if (iosTipShown) return;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!isIOS) return;

  iosTipShown = true;
  let tip = document.getElementById('ios-silent-tip');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'ios-silent-tip';
    tip.innerHTML = '🔔 <span>Di iPhone, pastikan tombol hening/silent di samping bodi HP tidak aktif agar suara terdengar ya 💗</span>';
    document.body.appendChild(tip);
  }

  tip.classList.add('show');
  setTimeout(() => {
    tip.classList.remove('show');
  }, 4500);
}

/**
 * Memutar musik otomatis setelah interaksi pertama
 */
function attemptPlayMusic() {
  unlockAudioContextSync();
  if (state.audioInitiated) return;
  state.audioInitiated = true;
  playMusic();
  showIosSilentTip();
}

/**
 * Toggle play / pause musik
 */
function toggleMusic() {
  unlockAudioContextSync();
  if (state.isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
    showIosSilentTip();
  }
}

function playMusic() {
  unlockAudioContextSync();
  state.isMusicPlaying = true;
  updateMusicButtonUI();

  // Cek apakah ada file music.mp3 asli yang valid (durasi > 2s)
  // File 165 byte dummy memiliki durasi NaN, 0, atau kurang dari 2 detik
  const hasRealMp3 = bgm && !isNaN(bgm.duration) && bgm.duration > 2;

  if (hasRealMp3) {
    try {
      if (bgm && !bgm.paused) return;
      const playPromise = bgm.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            stopRomanticSynthMusic();
          })
          .catch(() => {
            startRomanticSynthMusic();
          });
      }
    } catch (e) {
      startRomanticSynthMusic();
    }
  } else {
    // File music.mp3 adalah placeholder -> langsung gunakan synth romantis
    startRomanticSynthMusic();
  }
}

function pauseMusic() {
  state.isMusicPlaying = false;
  updateMusicButtonUI();
  try {
    if (bgm) bgm.pause();
  } catch (e) { }
  stopRomanticSynthMusic();
}

function updateMusicButtonUI() {
  if (!musicBtn) return;
  if (state.isMusicPlaying) {
    musicBtn.classList.add('playing');
    musicBtn.setAttribute('title', 'Jeda Musik');
  } else {
    musicBtn.classList.remove('playing');
    musicBtn.setAttribute('title', 'Putar Musik');
  }
}

/**
 * Generator nada lembut romantic music box chime menggunakan Web Audio API
 * Berjalan otomatis di iPhone & Android tanpa memerlukan file eksternal
 */
function startRomanticSynthMusic() {
  if (synthInterval) return;
  try {
    unlockAudioContextSync();
    if (!synthAudioCtx) return;

    // Notasi melodi romantis lembut (pentatonic C major / A minor: C4, E4, G4, A4, B4, C5, D5, E5)
    const melody = [
      261.63, 329.63, 392.00, 440.00, 523.25, 392.00, 329.63, 261.63,
      220.00, 261.63, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25
    ];
    let noteIdx = 0;

    synthInterval = setInterval(() => {
      if (!state.isMusicPlaying) return;
      playSoftNote(melody[noteIdx % melody.length]);
      noteIdx++;
    }, 700);
  } catch (err) { }
}

function stopRomanticSynthMusic() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

function playSoftNote(freq) {
  if (!synthAudioCtx) return;
  try {
    if (synthAudioCtx.state === 'suspended') {
      synthAudioCtx.resume();
    }
    const t = synthAudioCtx.currentTime;

    // Nada fundamental utama (sine hangat)
    const osc1 = synthAudioCtx.createOscillator();
    const gain1 = synthAudioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, t);

    gain1.gain.setValueAtTime(0.0001, t);
    gain1.gain.exponentialRampToValueAtTime(0.05, t + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);

    osc1.connect(gain1);
    gain1.connect(synthAudioCtx.destination);
    osc1.start(t);
    osc1.stop(t + 1.45);

    // Nada harmonik kedua (efek music box / bell chime manis)
    const osc2 = synthAudioCtx.createOscillator();
    const gain2 = synthAudioCtx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, t);

    gain2.gain.setValueAtTime(0.0001, t);
    gain2.gain.exponentialRampToValueAtTime(0.015, t + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);

    osc2.connect(gain2);
    gain2.connect(synthAudioCtx.destination);
    osc2.start(t);
    osc2.stop(t + 0.9);
  } catch (e) { }
}

// ==========================================================================
// BACKGROUND FALLING FLOWERS ENGINE (CANVAS 60FPS SMOOTH AESTHETIC)
// ==========================================================================
let flowerCanvas = null;
let flowerCtx = null;
let flowerAnimId = null;
let flowerPetals = [];
let flowersPaused = false;
let flowerMouseX = -1000;
let flowerMouseY = -1000;
let flowerLastTime = performance.now();
let ambientWindPhase = 0;

class FallingPetal {
  constructor(w, h, initialSpread = false) {
    this.reset(w, h, initialSpread);
  }

  reset(w, h, initialSpread = false) {
    this.x = Math.random() * (w + 120) - 60;
    this.y = initialSpread ? Math.random() * (h + 60) - 30 : -Math.random() * 80 - 20;

    // 0 = Sakura petal with notch, 1 = Rose petal, 2 = 5-petal blossom, 3 = Stardust sparkle
    const rand = Math.random();
    if (rand < 0.52) {
      this.type = 0; // Sakura petal
      this.size = Math.random() * 8 + 11; // 11px - 19px
    } else if (rand < 0.76) {
      this.type = 1; // Rose petal
      this.size = Math.random() * 9 + 12; // 12px - 21px
    } else if (rand < 0.90) {
      this.type = 2; // 5-petal blossom
      this.size = Math.random() * 6 + 13; // 13px - 19px
    } else {
      this.type = 3; // Fairy stardust
      this.size = Math.random() * 2.5 + 2; // 2px - 4.5px
    }

    // Kecepatan jatuh pelan-pelan yang lembut & anggun
    this.speedY = Math.random() * 0.65 + 0.55; // 0.55 - 1.20 px/frame
    this.speedX = (Math.random() - 0.5) * 0.35;

    // Ayunan melayang horizontal (sine wave sway)
    this.swayAngle = Math.random() * Math.PI * 2;
    this.swaySpeed = Math.random() * 0.016 + 0.010;
    this.swayRadius = Math.random() * 1.5 + 0.8;

    // Rotasi 2D
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.018;

    // Efek 3D tumbling / berputar di udara
    this.flipAngle = Math.random() * Math.PI * 2;
    this.flipSpeed = Math.random() * 0.024 + 0.014;

    // Transparansi lembut
    this.opacity = this.type === 3 ? (Math.random() * 0.5 + 0.35) : (Math.random() * 0.35 + 0.58);

    // Kedalaman (depth scale)
    this.depth = Math.random() * 0.45 + 0.75;
  }

  update(dt, w, h, windX) {
    const timeScale = dt * 60; // normalisasi ke 60 FPS

    // Jatuh ke bawah pelan-pelan
    this.y += this.speedY * this.depth * timeScale;

    // Ayunan melayang lembut ditiup angin
    this.swayAngle += this.swaySpeed * timeScale;
    this.x += (Math.sin(this.swayAngle) * this.swayRadius + this.speedX + windX) * timeScale;

    // Rotasi & efek flip 3D
    this.rotation += this.rotSpeed * timeScale;
    this.flipAngle += this.flipSpeed * timeScale;

    // Interaksi lembut saat cursor/sentuhan mendekat
    const dx = this.x - flowerMouseX;
    const dy = this.y - flowerMouseY;
    const distSq = dx * dx + dy * dy;
    if (distSq < 16900 && distSq > 0) { // jarak 130px
      const dist = Math.sqrt(distSq);
      const force = (1 - dist / 130) * 1.7 * timeScale;
      this.x += (dx / dist) * force;
      this.y += (dy / dist) * (force * 0.4);
    }

    // Reset ke atas setelah lewat batas bawah layar
    if (this.y > h + 50 || this.x < -80 || this.x > w + 80) {
      this.reset(w, h, false);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // Efek 3D berputar di udara melalui skala X/Y
    const cosFlip = Math.cos(this.flipAngle);
    ctx.scale(1, cosFlip);

    const r = this.size * this.depth;
    ctx.globalAlpha = this.opacity * Math.max(0.32, Math.abs(cosFlip));

    if (this.type === 0) {
      // 1. SAKURA PETAL DENGAN LEKUKAN KHAS (NOTCH)
      ctx.beginPath();
      ctx.moveTo(0, r);
      ctx.bezierCurveTo(-r * 0.75, r * 0.2, -r * 0.8, -r * 0.6, -r * 0.25, -r);
      ctx.bezierCurveTo(-r * 0.08, -r * 0.82, r * 0.08, -r * 0.82, r * 0.25, -r);
      ctx.bezierCurveTo(r * 0.8, -r * 0.6, r * 0.75, r * 0.2, 0, r);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, -r, 0, r);
      grad.addColorStop(0, '#fff2f6');
      grad.addColorStop(0.45, '#fba8c0');
      grad.addColorStop(1, '#e8668b');
      ctx.fillStyle = grad;
      ctx.fill();

    } else if (this.type === 1) {
      // 2. KELOPAK MAWAR LEMBUT (ROSE PETAL)
      ctx.beginPath();
      ctx.moveTo(0, r * 0.9);
      ctx.bezierCurveTo(-r * 0.85, r * 0.4, -r * 0.8, -r * 0.7, 0, -r);
      ctx.bezierCurveTo(r * 0.8, -r * 0.7, r * 0.85, r * 0.4, 0, r * 0.9);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, -r, 0, r);
      grad.addColorStop(0, '#ffd1df');
      grad.addColorStop(0.55, '#e8668b');
      grad.addColorStop(1, '#c03863');
      ctx.fillStyle = grad;
      ctx.fill();

    } else if (this.type === 2) {
      // 3. BUNGA SAKURA 5 KELOPAK MINI DENGAN PUSAT EMAS
      const count = 5;
      for (let i = 0; i < count; i++) {
        const angle = (i * Math.PI * 2) / count;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-r * 0.38, -r * 0.35, -r * 0.4, -r * 0.95, 0, -r);
        ctx.bezierCurveTo(r * 0.4, -r * 0.95, r * 0.38, -r * 0.35, 0, 0);
        ctx.closePath();

        const grad = ctx.createRadialGradient(0, -r * 0.5, 0, 0, -r * 0.5, r);
        grad.addColorStop(0, '#fff8fa');
        grad.addColorStop(0.65, '#fba8c0');
        grad.addColorStop(1, '#e8668b');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // Pusat serbuk sari emas lembut
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = '#f5c76b';
      ctx.fill();

    } else {
      // 4. KILAU FAIRY STARDUST EMAS / PINK LEMBUT
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 1.4);
      grad.addColorStop(0, '#fffbf0');
      grad.addColorStop(0.5, 'rgba(249, 168, 192, 0.65)');
      grad.addColorStop(1, 'rgba(232, 102, 139, 0)');
      ctx.fillStyle = grad;
      ctx.fill();
    }

    ctx.restore();
  }
}

function initParticles() {
  flowerCanvas = document.getElementById('flower-canvas');
  if (!flowerCanvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  flowerCtx = flowerCanvas.getContext('2d');
  resizeFlowerCanvas();
  window.addEventListener('resize', resizeFlowerCanvas);

  // Sesuaikan jumlah bunga berdasarkan ukuran layar agar seimbang & ringan
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 32 : 54;

  flowerPetals = [];
  for (let i = 0; i < count; i++) {
    flowerPetals.push(new FallingPetal(flowerCanvas.width, flowerCanvas.height, true));
  }

  // Interaksi kursor / sentuhan layar untuk angin lembut
  const handlePointer = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    flowerMouseX = clientX;
    flowerMouseY = clientY;
  };

  window.addEventListener('mousemove', handlePointer, { passive: true });
  window.addEventListener('touchmove', handlePointer, { passive: true });
  window.addEventListener('mouseleave', () => { flowerMouseX = -1000; flowerMouseY = -1000; });
  window.addEventListener('touchend', () => { flowerMouseX = -1000; flowerMouseY = -1000; });

  // Hemat baterai saat tab browser tidak aktif
  document.addEventListener('visibilitychange', () => {
    flowersPaused = document.hidden;
    if (!flowersPaused) {
      flowerLastTime = performance.now();
    }
  });

  flowerLastTime = performance.now();
  if (!flowerAnimId) {
    flowerAnimId = requestAnimationFrame(renderFlowers);
  }
}

function resizeFlowerCanvas() {
  if (!flowerCanvas) return;
  flowerCanvas.width = window.innerWidth;
  flowerCanvas.height = window.innerHeight;
}

function renderFlowers(currentTime) {
  if (!flowerCtx || !flowerCanvas) return;

  const dt = Math.min((currentTime - flowerLastTime) / 1000, 0.1);
  flowerLastTime = currentTime;

  if (!flowersPaused) {
    flowerCtx.clearRect(0, 0, flowerCanvas.width, flowerCanvas.height);

    ambientWindPhase += dt * 0.35;
    // Angin lembut mengayun perlahan ke kanan & kiri
    const windX = Math.sin(ambientWindPhase) * 0.3 + 0.12;

    const w = flowerCanvas.width;
    const h = flowerCanvas.height;

    for (let i = 0; i < flowerPetals.length; i++) {
      const p = flowerPetals[i];
      p.update(dt, w, h, windX);
      p.draw(flowerCtx);
    }
  }

  flowerAnimId = requestAnimationFrame(renderFlowers);
}

// ==========================================================================
// REUSABLE CONFETTI SYSTEM (LIGHTWEIGHT 60FPS CANVAS)
// ==========================================================================
const confettiCanvas = document.getElementById('confetti-canvas');
let confettiCtx = null;
let confettiPieces = [];
let confettiAnimId = null;

if (confettiCanvas) {
  confettiCtx = confettiCanvas.getContext('2d');
  resizeConfettiCanvas();
  window.addEventListener('resize', resizeConfettiCanvas);
}

function resizeConfettiCanvas() {
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

/**
 * Fungsi reusable untuk ledakan confetti di koordinat (x, y)
 * @param {number} x - Koordinat horizontal (pixel)
 * @param {number} y - Koordinat vertikal (pixel)
 * @param {number} count - Jumlah partikel confetti
 */
function confettiBurst(x, y, count = 45) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!confettiCtx) return;

  const colors = [
    '#f9a8c0', '#e8668b', '#f5c76b', '#8fb4ff',
    '#e8d7ff', '#ff9f43', '#ffffff', '#b8f2e6'
  ];
  const shapes = ['square', 'circle', 'oval'];

  const originX = x !== undefined ? x : window.innerWidth / 2;
  const originY = y !== undefined ? y : window.innerHeight / 2;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 12 + 4;
    confettiPieces.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity - (Math.random() * 5 + 3),
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      gravity: 0.28,
      drag: 0.96,
      opacity: 1,
      life: 0,
      maxLife: Math.random() * 60 + 80
    });
  }

  if (!confettiAnimId) {
    updateConfetti();
  }
}

function updateConfetti() {
  if (!confettiCtx || confettiPieces.length === 0) {
    if (confettiCtx && confettiCanvas) {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
    confettiAnimId = null;
    return;
  }

  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  for (let i = confettiPieces.length - 1; i >= 0; i--) {
    const p = confettiPieces[i];
    p.life++;
    p.vx *= p.drag;
    p.vy = p.vy * p.drag + p.gravity;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.vRot;

    if (p.life > p.maxLife * 0.7) {
      p.opacity = Math.max(0, 1 - (p.life - p.maxLife * 0.7) / (p.maxLife * 0.3));
    }

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.globalAlpha = p.opacity;
    confettiCtx.fillStyle = p.color;

    if (p.shape === 'circle') {
      confettiCtx.beginPath();
      confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      confettiCtx.fill();
    } else if (p.shape === 'oval') {
      confettiCtx.beginPath();
      confettiCtx.ellipse(0, 0, p.size * 0.7, p.size * 0.35, 0, 0, Math.PI * 2);
      confettiCtx.fill();
    } else {
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    }

    confettiCtx.restore();

    if (p.life >= p.maxLife || p.y > window.innerHeight + 50) {
      confettiPieces.splice(i, 1);
    }
  }

  confettiAnimId = requestAnimationFrame(updateConfetti);
}

// ==========================================================================
// SCREEN 1: LOADING SCREEN CONTROLLER
// ==========================================================================
const loadingScreen = document.getElementById('loading-screen');
const loadingBar = document.getElementById('loading-bar');
const lockScreen = document.getElementById('lock-screen');
const giftScreen = document.getElementById('gift-screen');
const mainContent = document.getElementById('main-content');

function startLoadingSequence() {
  document.body.classList.add('locked');

  let startTime = performance.now();
  const duration = CONFIG.durasiLoading;

  function progressStep(currentTime) {
    const elapsed = currentTime - startTime;
    const pct = Math.min(100, (elapsed / duration) * 100);
    if (loadingBar) loadingBar.style.width = `${pct}%`;

    if (elapsed < duration) {
      requestAnimationFrame(progressStep);
    } else {
      // Selesai loading -> selalu masuk ke lock screen
      finishLoading();
    }
  }

  requestAnimationFrame(progressStep);
}

function finishLoading() {
  loadingScreen.classList.add('fade-out');

  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    // Selalu tampilkan lock screen sebelum membuka kado
    showLockScreen();
  }, 800);
}

// ==========================================================================
// SCREEN 2: PASSWORD SCREEN CONTROLLER (LOCK SCREEN)
// ==========================================================================
const pinDotsContainer = document.getElementById('pin-dots');
const lockFeedback = document.getElementById('lock-feedback');
const keypad = document.getElementById('keypad');

let keypadEventsInitialized = false;
let physicalKeyboardInitialized = false;

function showLockScreen() {
  // Reset state PIN saat lock screen ditampilkan
  state.unlocked = false;
  state.pinEntered = "";
  updatePinDotsUI();
  if (lockFeedback) {
    lockFeedback.textContent = "";
    lockFeedback.style.color = "var(--color-pink-soft)";
  }

  lockScreen.classList.remove('hidden');
  lockScreen.classList.remove('fade-out');

  setupKeypadEvents();
  setupPhysicalKeyboard();
}

function updatePinDotsUI() {
  if (!pinDotsContainer) return;
  const dots = pinDotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    if (idx < state.pinEntered.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
}

function handlePinDigit(digit) {
  // Putar musik saat interaksi keypad pertama kali
  attemptPlayMusic();

  if (state.pinEntered.length >= 6) return;

  state.pinEntered += digit;
  updatePinDotsUI();

  if (state.pinEntered.length === 6) {
    validatePin();
  }
}

function handlePinBackspace() {
  attemptPlayMusic();
  if (state.pinEntered.length > 0) {
    state.pinEntered = state.pinEntered.slice(0, -1);
    updatePinDotsUI();
    if (lockFeedback) lockFeedback.textContent = "";
  }
}

function handlePinClear() {
  attemptPlayMusic();
  state.pinEntered = "";
  updatePinDotsUI();
  if (lockFeedback) lockFeedback.textContent = "";
}

function validatePin() {
  if (state.pinEntered === CONFIG.password) {
    // PIN BENAR ("041004")
    handleCorrectPin();
  } else {
    // PIN SALAH
    handleWrongPin();
  }
}

function handleCorrectPin() {
  state.unlocked = true;
  if (lockFeedback) {
    lockFeedback.textContent = "Selamat datang, sayang 💕";
    lockFeedback.style.color = "var(--color-pink-soft)";
  }

  // Efek pop berurutan pada titik pin
  if (pinDotsContainer) {
    const dots = pinDotsContainer.querySelectorAll('.dot');
    dots.forEach((d, i) => {
      setTimeout(() => {
        d.style.boxShadow = "0 0 16px #ffffff, 0 0 24px #f9a8c0";
        d.style.borderColor = "#ffffff";
      }, i * 70);
    });
  }

  // Transisi ke Gift Screen setelah 1.2 detik
  setTimeout(() => {
    lockScreen.classList.add('fade-out');
    setTimeout(() => {
      lockScreen.classList.add('hidden');
      showGiftScreen();
    }, 800);
  }, 1200);
}

function handleWrongPin() {
  state.wrongPinCount++;

  // Getar HP jika didukung
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate([80, 40, 80]);
    } catch (e) { }
  }

  // Tampilkan efek salah
  if (pinDotsContainer) {
    pinDotsContainer.classList.add('shake', 'error');
  }

  if (lockFeedback) {
    if (state.wrongPinCount >= 3) {
      lockFeedback.textContent = "Petunjuk: tanggal lahir kamu (041004) 💗";
    } else {
      lockFeedback.textContent = "Hmm, coba ingat lagi ya sayang 🥺";
    }
    lockFeedback.style.color = "#ff5a7a";
  }

  // Reset otomatis setelah 0.7 detik
  setTimeout(() => {
    if (pinDotsContainer) {
      pinDotsContainer.classList.remove('shake', 'error');
    }
    state.pinEntered = "";
    updatePinDotsUI();
  }, 700);
}

function setupKeypadEvents() {
  if (keypadEventsInitialized || !keypad) return;
  keypadEventsInitialized = true;

  keypad.addEventListener('click', (e) => {
    const btn = e.target.closest('.key-btn');
    if (!btn || btn.classList.contains('empty')) return;

    const key = btn.getAttribute('data-key');
    if (key === 'backspace') {
      handlePinBackspace();
    } else if (key === 'clear') {
      handlePinClear();
    } else if (key) {
      handlePinDigit(key);
    }
  });
}

function setupPhysicalKeyboard() {
  if (physicalKeyboardInitialized) return;
  physicalKeyboardInitialized = true;

  window.addEventListener('keydown', (e) => {
    if (!lockScreen || lockScreen.classList.contains('hidden') || state.unlocked) return;

    if (e.key >= '0' && e.key <= '9') {
      handlePinDigit(e.key);
    } else if (e.key === 'Backspace') {
      handlePinBackspace();
    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
      handlePinClear();
    }
  });
}

// ==========================================================================
// SCREEN 3: GIFT BOX SCREEN CONTROLLER
// ==========================================================================
const giftBoxTrigger = document.getElementById('gift-box-trigger');
const giftBox = document.getElementById('gift-box');
const giftFlowersFlyout = document.getElementById('gift-flowers-flyout');
const giftFlash = document.getElementById('gift-flash');
let isGiftOpening = false;

function showGiftScreen() {
  giftScreen.classList.remove('hidden');
  giftScreen.classList.remove('fade-out');

  if (giftBoxTrigger) {
    giftBoxTrigger.addEventListener('click', handleOpenGift);
    giftBoxTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpenGift();
      }
    });
  }
}

function handleOpenGift() {
  if (isGiftOpening) return;
  isGiftOpening = true;

  attemptPlayMusic();

  // 1. Kado bergetar 0.5s
  giftBox.classList.add('shaking');

  setTimeout(() => {
    giftBox.classList.remove('shaking');
    // 2. Tutup terbuka terlempar ke atas & memudar, 3. Cahaya terang memancar
    giftBox.classList.add('opened');

    // 4. Bunga-bunga keluar mekar dan menyebar ke seluruh layar
    spawnGiftFlowersBloom();

    // Confetti burst
    const rect = giftBox.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    confettiBurst(cx, cy, 60);

    // 5. Sekitar 3 detik kemudian, layar memutih-pink sebentar lalu transisi ke Hero
    setTimeout(() => {
      if (giftFlash) giftFlash.classList.add('flashing');

      setTimeout(() => {
        giftScreen.classList.add('fade-out');

        setTimeout(() => {
          giftScreen.classList.add('hidden');
          if (giftFlash) giftFlash.classList.remove('flashing');
          enterMainPage();
        }, 600);
      }, 500);

    }, 2800);

  }, 500);
}

function spawnGiftFlowersBloom() {
  if (!giftFlowersFlyout) return;
  const flowers = ['🌸', '🌹', '🌷', '🌻', '💐', '🌺', '💮', '💖'];
  const count = 22;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'flyout-flower';
    el.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    // Lintasan melengkung acak
    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = Math.random() * 240 + 120;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - Math.random() * 80;
    const rot = (Math.random() - 0.5) * 720;

    el.style.setProperty('--tx', `${tx}px`);
    el.style.setProperty('--ty', `${ty}px`);
    el.style.setProperty('--rot', `${rot}deg`);
    el.style.animationDelay = `${(i * 0.08).toFixed(2)}s`;

    giftFlowersFlyout.appendChild(el);
  }
}

// ==========================================================================
// TRANSISI KE HALAMAN UTAMA (MAIN CONTENT)
// ==========================================================================
function enterMainPage() {
  document.body.classList.remove('locked');
  mainContent.classList.remove('hidden');

  // Tampilkan tombol musik mengambang
  if (musicBtn) {
    musicBtn.classList.remove('hidden');
    updateMusicButtonUI();
  }

  // Inisialisasi semua modul halaman utama terlebih dahulu
  initScrollProgressBar();
  initCakeCandles();
  initDigitalBouquet();
  initPhotoMemories();
  initTimeline();
  initGratefulJar();
  initPenutupSurprise();

  // Inisialisasi scroll reveal SETELAH semua kartu (foto & timeline) terpasang di DOM
  initScrollReveal();

  // Scroll ke paling atas hero
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ==========================================================================
// SCROLL PROGRESS BAR & SCROLL OBSERVER
// ==========================================================================
function initScrollProgressBar() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  if (window.scrollObserver) {
    window.scrollObserver.disconnect();
  }

  window.scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        window.scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '50px 0px 50px 0px'
  });

  reveals.forEach(el => window.scrollObserver.observe(el));

  // Fallback scroll listener untuk memastikan kartu selalu muncul di mobile/hosting webview
  window.removeEventListener('scroll', checkFallbackReveals);
  window.addEventListener('scroll', checkFallbackReveals, { passive: true });
  checkFallbackReveals();
}

function checkFallbackReveals() {
  const unrevealed = document.querySelectorAll('.reveal:not(.visible)');
  if (unrevealed.length === 0) return;
  const windowH = window.innerHeight;
  unrevealed.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowH - 10 && rect.bottom > 0) {
      el.classList.add('visible');
      if (window.scrollObserver) {
        window.scrollObserver.unobserve(el);
      }
    }
  });
}

// ==========================================================================
// SECTION 4: HERO KUE ULANG tauN & 3 LILIN
// ==========================================================================
function initCakeCandles() {
  const candles = document.querySelectorAll('.candle');
  const candleHint = document.getElementById('candle-hint');
  const cakeContainer = document.getElementById('cake-container');
  const wishGrantText = document.getElementById('wish-grant-text');
  const heroGreetingCard = document.getElementById('hero-greeting-card');
  const btnRelight = document.getElementById('btn-relight');
  const scrollDownNudge = document.getElementById('scroll-down-nudge');

  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      const idx = parseInt(candle.getAttribute('data-candle'), 10) - 1;
      if (state.candlesBlown[idx]) return; // Sudah ditiup

      // Tiup lilin
      state.candlesBlown[idx] = true;
      state.candlesLeft--;
      candle.classList.add('blown-out');

      // Getar kecil di HP
      if ('vibrate' in navigator) {
        try { navigator.vibrate(50); } catch (e) { }
      }

      // Update Hint Pill
      if (state.candlesLeft === 2) {
        candleHint.textContent = "Tinggal 2 lilin lagi 🕯️";
      } else if (state.candlesLeft === 1) {
        candleHint.textContent = "Satu lagi, make a wish! ✨";
      } else if (state.candlesLeft === 0) {
        candleHint.textContent = "Semua lilin telah padam! ✨";
        handleAllCandlesBlown();
      }
    });
  });

  function handleAllCandlesBlown() {
    // Confetti meledak besar
    const rect = cakeContainer.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    confettiBurst(cx, cy, 75);
    setTimeout(() => confettiBurst(cx - 100, cy - 50, 40), 250);
    setTimeout(() => confettiBurst(cx + 100, cy - 50, 40), 450);

    // Kue berkilau
    cakeContainer.classList.add('sparkling');

    // Teks Dancing Script muncul
    if (wishGrantText) wishGrantText.classList.remove('hidden');

    // Card ucapan muncul
    if (heroGreetingCard) heroGreetingCard.classList.remove('hidden');

    // Nudge scroll ke bawah & tombol tiup ulang
    if (scrollDownNudge) scrollDownNudge.classList.remove('hidden');
    if (btnRelight) btnRelight.classList.remove('hidden');
  }

  // Tombol tiup ulang
  if (btnRelight) {
    btnRelight.addEventListener('click', () => {
      state.candlesLeft = 3;
      state.candlesBlown = [false, false, false];
      candles.forEach(c => c.classList.remove('blown-out'));
      candleHint.textContent = "Tap lilin untuk meniupnya! 🎂";
      if (wishGrantText) wishGrantText.classList.add('hidden');
      cakeContainer.classList.remove('sparkling');
      btnRelight.classList.add('hidden');
    });
  }
}

// ==========================================================================
// SECTION 6: DIGITAL BOUQUET CONTROLLER
// ==========================================================================
function initDigitalBouquet() {
  const flowerNodes = document.querySelectorAll('.flower-node');
  const bCardBadge = document.getElementById('b-card-badge');
  const bCardText = document.getElementById('b-card-text');
  const bouquetCard = document.getElementById('bouquet-card');

  flowerNodes.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const data = CONFIG.bouquetMessages[idx];
      if (!data) return;

      // Update active states
      flowerNodes.forEach(node => {
        node.classList.remove('active');
        node.classList.add('dimmed');
      });
      btn.classList.remove('dimmed');
      btn.classList.add('active');

      // Animasi transisi teks kartu
      if (bouquetCard) {
        bouquetCard.style.opacity = '0';
        bouquetCard.style.transform = 'translateY(8px)';

        setTimeout(() => {
          bCardBadge.textContent = data.label;
          bCardText.textContent = `"${data.text}"`;
          bouquetCard.style.opacity = '1';
          bouquetCard.style.transform = 'translateY(0)';
        }, 200);
      }
    });
  });
}

// ==========================================================================
// SECTION 7: OUR PHOTO MEMORIES & LIGHTBOX
// ==========================================================================
function initPhotoMemories() {
  const photoGrid = document.getElementById('photo-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (!photoGrid) return;

  // Render 6 photo cards dari CONFIG
  photoGrid.innerHTML = "";
  CONFIG.fotoMemories.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'photo-card reveal';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Foto kenangan ${index + 1}: ${item.caption}`);

    // Fallback onerror jika file belum ada atau beda ekstensi (.jpeg vs .jpg)
    card.innerHTML = `
      <img src="${item.src}" alt="${item.caption}" class="photo-img" loading="lazy" onerror="if (!this.dataset.triedJpg && this.src.includes('.jpeg')) { this.dataset.triedJpg = '1'; this.src = this.src.replace(/\\.jpeg$/i, '.jpg'); } else { this.onerror=null; this.parentElement.querySelector('.photo-fallback').classList.remove('hidden'); this.style.display='none'; }">
      <div class="photo-fallback hidden" aria-hidden="true">
        <span>📷</span>
        <p>Kenangan Kita</p>
      </div>
      <div class="photo-overlay">
        <span class="cam-icon" aria-hidden="true">📷</span>
        <span class="overlay-text">pencet dongg</span>
      </div>
      <div class="photo-caption-bar">${item.caption}</div>
    `;

    // Klik untuk reveal atau buka lightbox
    const handleCardClick = () => {
      if (!state.revealedPhotos.has(index)) {
        // Reveal foto pertama kali
        state.revealedPhotos.add(index);
        card.classList.add('revealed');
      } else {
        // Buka lightbox
        openLightbox(index);
      }
    };

    card.addEventListener('click', handleCardClick);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardClick();
      }
    });

    photoGrid.appendChild(card);
    if (window.scrollObserver) {
      window.scrollObserver.observe(card);
    }
  });

  // Lightbox handlers
  function openLightbox(index) {
    state.currentPhotoIndex = index;
    updateLightboxContent();
    lightbox.classList.remove('hidden');
    document.body.classList.add('locked');
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.classList.remove('locked');
  }

  function updateLightboxContent() {
    const item = CONFIG.fotoMemories[state.currentPhotoIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.caption;
  }

  function nextPhoto() {
    state.currentPhotoIndex = (state.currentPhotoIndex + 1) % CONFIG.fotoMemories.length;
    updateLightboxContent();
  }

  function prevPhoto() {
    state.currentPhotoIndex = (state.currentPhotoIndex - 1 + CONFIG.fotoMemories.length) % CONFIG.fotoMemories.length;
    updateLightboxContent();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextPhoto);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevPhoto);

  // Keyboard navigation untuk lightbox
  window.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  });

  // Touch swipe gesture di HP untuk Lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleLightboxSwipe();
  }, { passive: true });

  function handleLightboxSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextPhoto(); // swipe kiri -> foto berikutnya
      else prevPhoto(); // swipe kanan -> foto sebelumnya
    }
  }
}

// ==========================================================================
// SECTION 8: JURNAL PERJALANAN CINTA KITA (TIMELINE)
// ==========================================================================
function initTimeline() {
  const timelineList = document.getElementById('timeline-list');
  const progressFill = document.getElementById('timeline-progress-fill');
  const timelineContainer = document.getElementById('timeline-container');

  if (!timelineList) return;

  // Render milestones dari CONFIG
  timelineList.innerHTML = "";
  CONFIG.journeyMilestones.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'timeline-item reveal';
    el.setAttribute('data-step', index);

    // Ganti [NAMA KAMU] pada milestone jika ada
    const descReplaced = item.desc.replace(/\[NAMA KAMU\]/g, CONFIG.namaPengirim);

    el.innerHTML = `
      <div class="timeline-node" aria-hidden="true"></div>
      <div class="timeline-card glass-card">
        <div class="timeline-card-header">
          <div class="timeline-icon-wrap" aria-hidden="true">${item.emoji}</div>
          <h3 class="timeline-title">${item.title}</h3>
        </div>
        <h4 class="timeline-subtitle">${item.subtitle}</h4>
        <p class="timeline-desc">${descReplaced}</p>
        ${item.date ? `<span class="timeline-date-tag">🗓️ ${item.date}</span>` : ''}
      </div>
    `;

    timelineList.appendChild(el);
    if (window.scrollObserver) {
      window.scrollObserver.observe(el);
    }
  });

  // Track scroll progress pada timeline
  window.addEventListener('scroll', () => {
    if (!timelineContainer || !progressFill) return;
    const rect = timelineContainer.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Hitung kemajuan scroll relatif terhadap timeline
    const startY = windowH * 0.7;
    const totalH = rect.height;
    const currentY = startY - rect.top;

    let pct = (currentY / totalH) * 100;
    pct = Math.max(0, Math.min(100, pct));
    progressFill.style.height = `${pct}%`;

    // Highlight node saat terlewati
    const items = timelineList.querySelectorAll('.timeline-item');
    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowH * 0.65) {
        item.classList.add('active-node');
      } else {
        item.classList.remove('active-node');
      }
    });
  }, { passive: true });
}

// ==========================================================================
// SECTION 9: REASONS I'M GRATEFUL TO KNOW YOU (TOPLES KACA)
// ==========================================================================
function initGratefulJar() {
  const jarGraphic = document.getElementById('jar-graphic');
  const btnJarShake = document.getElementById('btn-jar-shake');
  const flyingNote = document.getElementById('flying-note');
  const jarNoteCard = document.getElementById('jar-note-card');
  const jarNoteIcon = document.getElementById('jar-note-icon');
  const jarNoteText = document.getElementById('jar-note-text');
  const jarNoteFooter = document.getElementById('jar-note-footer');

  if (!btnJarShake) return;

  btnJarShake.addEventListener('click', () => {
    if (state.isJarShaking) return;

    // Cek apakah semua catatan sudah terambil
    if (state.remainingJarIndices.length === 0) {
      // Tombol reset/mulai lagi
      state.remainingJarIndices = [0, 1, 2, 3, 4, 5, 6, 7];
      state.drawnJarCount = 0;
      btnJarShake.textContent = "📒 Kocok toplesnya";
      jarNoteIcon.textContent = "✨";
      jarNoteText.textContent = "Toples telah diisi kembali dengan alasan-alasan indah. Kocok lagi!";
      jarNoteFooter.textContent = "SIAP MENGAMBIL CATATAN";
      return;
    }

    state.isJarShaking = true;
    btnJarShake.disabled = true;

    // 1. Toples bergetar 0.8s
    jarGraphic.classList.add('shaking');

    // 2. Kertas terbang keluar
    setTimeout(() => {
      if (flyingNote) {
        flyingNote.classList.remove('animating');
        void flyingNote.offsetWidth; // trigger reflow
        flyingNote.classList.add('animating');
      }
    }, 300);

    // 3. Tampilkan card catatan baru
    setTimeout(() => {
      jarGraphic.classList.remove('shaking');

      // Ambil indeks acak tanpa perulangan
      const randomIdxPos = Math.floor(Math.random() * state.remainingJarIndices.length);
      const chosenIndex = state.remainingJarIndices.splice(randomIdxPos, 1)[0];
      state.drawnJarCount++;

      const note = CONFIG.jarNotes[chosenIndex];

      // Animasi transisi card
      jarNoteCard.style.opacity = '0';
      jarNoteCard.style.transform = 'translateY(10px)';

      setTimeout(() => {
        jarNoteIcon.textContent = note.emoji;
        jarNoteText.textContent = `"${note.text}"`;
        jarNoteFooter.textContent = `CATATAN ${state.drawnJarCount} DARI 8`;

        jarNoteCard.style.opacity = '1';
        jarNoteCard.style.transform = 'translateY(0)';

        // Jika sudah 8 catatan habis
        if (state.remainingJarIndices.length === 0) {
          btnJarShake.textContent = "🔄 Mulai lagi dari awal";
          const allDoneNotice = document.createElement('div');
          allDoneNotice.style.marginTop = '10px';
          allDoneNotice.style.fontSize = '0.85rem';
          allDoneNotice.style.color = 'var(--color-pink-soft)';
          allDoneNotice.textContent = "Semua catatan sudah kamu baca 💗";
          jarNoteCard.appendChild(allDoneNotice);
        }

        state.isJarShaking = false;
        btnJarShake.disabled = false;
      }, 250);

    }, 800);
  });
}

// ==========================================================================
// SECTION 10: THANK YOU FOR EVERYTHING & FINAL SURPRISE
// ==========================================================================
function initPenutupSurprise() {
  const btnFinalSurprise = document.getElementById('btn-final-surprise');
  const celebrationModal = document.getElementById('celebration-modal');
  const celebrationClose = document.getElementById('celebration-close');
  const celebrationBackdrop = document.getElementById('celebration-backdrop');
  const btnBackToTop = document.getElementById('btn-back-to-top');

  const line1 = document.getElementById('celeb-line-1');
  const line2 = document.getElementById('celeb-line-2');
  const line3 = document.getElementById('celeb-line-3');

  // Ganti [NAMA KAMU] pada tanda tangan surat dan modal penutup
  const letterSign = document.getElementById('letter-signature');
  if (letterSign) letterSign.textContent = `${CONFIG.namaPengirim} 💗`;
  if (line2) line2.textContent = `— ${CONFIG.namaPengirim}`;

  if (btnFinalSurprise) {
    btnFinalSurprise.addEventListener('click', () => {
      celebrationModal.classList.remove('hidden');

      // Massive confetti berkali-kali
      confettiBurst(window.innerWidth / 2, window.innerHeight * 0.4, 80);
      setTimeout(() => confettiBurst(window.innerWidth * 0.25, window.innerHeight * 0.3, 60), 300);
      setTimeout(() => confettiBurst(window.innerWidth * 0.75, window.innerHeight * 0.3, 60), 600);
      setTimeout(() => confettiBurst(window.innerWidth / 2, window.innerHeight * 0.2, 90), 1000);

      // Munculkan teks besar berurutan
      setTimeout(() => { if (line1) line1.classList.add('celeb-show'); }, 300);
      setTimeout(() => { if (line2) line2.classList.add('celeb-show'); }, 1100);
      setTimeout(() => { if (line3) line3.classList.add('celeb-show'); }, 1900);
    });
  }

  function closeCelebration() {
    celebrationModal.classList.add('hidden');
    if (line1) line1.classList.remove('celeb-show');
    if (line2) line2.classList.remove('celeb-show');
    if (line3) line3.classList.remove('celeb-show');
  }

  if (celebrationClose) celebrationClose.addEventListener('click', closeCelebration);
  if (celebrationBackdrop) celebrationBackdrop.addEventListener('click', closeCelebration);

  // Tombol Kembali ke atas
  if (btnBackToTop) {
    btnBackToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// ATTACH MUSIC TOGGLE BUTTON
// ==========================================================================
if (musicBtn) {
  musicBtn.addEventListener('click', () => {
    toggleMusic();
  });
}

// ==========================================================================
// ENTRY POINT / DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  startLoadingSequence();
});
