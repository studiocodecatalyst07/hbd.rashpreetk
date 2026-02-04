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
