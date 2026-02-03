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