// ==========================================
  // CONFIGURATION - CHANGE NAME HERE
  // ==========================================
  const BIRTHDAY_NAME = "Rashpreet Kaur"; // <-- CHANGE THIS NAME!

  // ==========================================
  // PHOTOS - REPLACE WITH YOUR OWN PHOTOS
  // ==========================================
  const photos = [{
  src: "./1.jpg",
  caption: "Best friends forever 🌸"
  },
  {
  src: "./2.jpg",
  caption: "Making memories ✨"
  }];

  // ==========================================
  // INTRO ANIMATION
  // ==========================================
  setTimeout(() => {
    document.getElementById('intro').classList.add('hidden');
    createBalloons();
  }, 3500);

  // ==========================================
  // CAKE INTERACTION
  // ==========================================
  let candlesBlown = false;
  const cakeContainer = document.getElementById('cakeContainer');
  const cake = document.getElementById('cake');
  const cakeMessage = document.getElementById('cakeMessage');

  cakeContainer.addEventListener('click', () => {
  if (!candlesBlown) {
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, i) => {
      setTimeout(() => flame.classList.add('blown'), i * 150);
    });
    candlesBlown = true;
    cakeMessage.textContent = '🎂 Cutting the cake...';

    setTimeout(() => {
      cake.classList.add('cut');
      cakeMessage.textContent = '🎉 Make a wish, ' + BIRTHDAY_NAME + '! 🎉';
      triggerConfetti();
      playBirthdayMelody();
    }, 1000);
  }
  });

  // ==========================================
  // PHOTO GALLERY
  // ==========================================
  const photoGrid = document.getElementById('photoGrid');

  photos.forEach((photo, i) => {
  const card = document.createElement('div');
  card.className = 'photo-card';
  card.style.animationDelay = (i * 0.15) + 's';
  card.innerHTML = `
  <div class="photo-wrapper">
  <img src="${photo.src}" alt="${photo.caption}">
  </div>
  <p class="photo-caption">${photo.caption}</p>
  `;
  photoGrid.appendChild(card);
  });


    // ==========================================
    // CONFETTI
    // ==========================================
    function triggerConfetti() {
      const container = document.getElementById('confetti');
      container.innerHTML = '';
      const colors = ['#ff6b9d', '#c44569', '#f8b500', '#ff6348', '#7bed9f', '#70a1ff', '#a55eea', '#ff4757', '#feca57', '#48dbfb'];
      
      for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (8 + Math.random() * 10) + 'px';
        confetti.style.height = (8 + Math.random() * 10) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.animationDuration = (3 + Math.random() * 3) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(confetti);
      }

      setTimeout(() => container.innerHTML = '', 6000);
    }

    // ==========================================
    // BALLOONS
    // ==========================================
    function createBalloons() {
      const container = document.getElementById('balloons');
      const colors = [
        ['#f472b6', '#ec4899'],
        ['#a78bfa', '#8b5cf6'],
        ['#60a5fa', '#3b82f6'],
        ['#fb7185', '#f43f5e'],
        ['#e879f9', '#d946ef'],
        ['#818cf8', '#6366f1']
      ];
      const positions = ['5%', '12%', '85%', '92%', '8%', '88%'];

      positions.forEach((pos, i) => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = pos;
        balloon.style.animationDelay = (i * 0.8) + 's';
        
        const body = document.createElement('div');
        body.className = 'balloon-body';
        body.style.background = `linear-gradient(135deg, ${colors[i % colors.length][0]}, ${colors[i % colors.length][1]})`;
        
        const string = document.createElement('div');
        string.className = 'balloon-string';
        
        balloon.appendChild(body);
        balloon.appendChild(string);
        container.appendChild(balloon);
      });
    }

  // ─── MUSIC (using Web Audio API for a simple tone melody) ───
  let audioCtx;

  function playBirthdayMelody() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Happy Birthday melody (simplified)
    // Each entry: [frequency in Hz, duration in seconds]
    const notes = [
      [262,
        0.3],
      [262,
        0.3],
      [294,
        0.6],
      [262,
        0.6],
      [349,
        0.6],
      [330,
        1.0],
      [262,
        0.3],
      [262,
        0.3],
      [294,
        0.6],
      [262,
        0.6],
      [392,
        0.6],
      [349,
        1.0],
      [262,
        0.3],
      [262,
        0.3],
      [523,
        0.6],
      [440,
        0.6],
      [349,
        0.6],
      [330,
        0.6],
      [294,
        1.0],
      [466,
        0.3],
      [466,
        0.3],
      [440,
        0.6],
      [349,
        0.6],
      [392,
        0.6],
      [349,
        1.0]
    ];

    let time = audioCtx.currentTime + 0.1;

    function playSequence() {
      if (!audioCtx) return;

      notes.forEach(([freq, dur]) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(time);
        osc.stop(time + dur);
        time += dur * 0.85;
      });
    }

    playSequence();
  }

  // ==========================================
  // SCROLL REVEAL
  // ==========================================
  const observerOptions = {
  threshold: 0.15, rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
  }, observerOptions);

  document.querySelectorAll('.section-hidden').forEach(section => {
  observer.observe(section);
  });

  // ==========================================
  // UPDATE NAME DYNAMICALLY
  // ==========================================
  document.querySelectorAll('.intro-name, .hero-name, .name-in-wish, .footer-name').forEach(el => {
  el.textContent = BIRTHDAY_NAME;
  });
  document.title = `🎂 Happy Birthday ${BIRTHDAY_NAME}! 🎉`;
