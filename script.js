/* ══════════════════════════════════════════════════
   Sanguine Launcher — Website JavaScript
   i18n · Particles · Scroll Reveal · Slider · Navbar
   ══════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────
   TRANSLATIONS (RU / EN)
   ───────────────────────────────────────────────── */
const i18n = {
  ru: {
    meta: {
      title: 'Sanguine — Companion App (Лаунчер)',
      description: 'Официальный сайт лаунчера для Sanguine. Wiki, новости, команды, карта Вардора — всё в одном месте.',
    },
    nav: {
      about: 'О лаунчере',
      features: 'Возможности',
      preview: 'Превью',
      download: 'Скачать',
    },
    hero: {
      title: 'Sanguine Launcher',
      subtitle: 'ВЛАСТВУЙ В НОЧИ',
      desc: 'Все инструменты для V Rising в одном приложении: Wiki, интерактивная карта, справочник команд и конструктор билдов.',
      cta_win: 'Скачать для Windows',
      stat_platforms: 'Платформы',
      stat_lang: 'Языки',
      stat_free_val: 'Free',
      stat_price: 'Бесплатно',
    },
    about: {
      tag_game: 'Об игре',
      game_title: 'Что такое V Rising?',
      game_desc:
        'V Rising — это атмосферная action-RPG от Stunlock Studios, где ты играешь за вампира, пробудившегося после долгого сна. Добывай кровь, стройся крепость, сражайся с могучими боссами V Blood и подчиняй мир Вардора своей воле.',
      tag_launcher: 'Сайт лаунчера',
      launcher_title: 'Зачем нужен наш лаунчер?',
      launcher_desc:
        'Этот лаунчер объединяет все нужные ресурсы об игре в одном стильном приложении. Это не просто инструмент — это твой полноценный компаньон для Вардора.',
      l1: 'Для новичков: удобная Wiki и справочники',
      l2: 'Для опытных: быстрый поиск команд и патчноутов',
      l3: 'Для всех: актуальные новости и обновления',
    },
    features: {
      tag: 'Функционал',
      title: 'Возможности лаунчера',
      subtitle: 'Всё, что нужно вампиру для комфортной игры — в одном месте',
      items: [
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
          title: 'Встроенная Wiki',
          desc: 'Огромная база данных: снаряжение, способности, боссы V Blood, NPC, постройки и многое другое.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
          title: 'Справочник команд',
          desc: 'Полный список серверных и игровых команд с описаниями — быстрый доступ в любой момент.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
          title: 'Свежие новости',
          desc: 'Актуальные обновления и патчноуты прямо в лаунчере — никогда не пропустишь важное.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>',
          title: 'Карта мира',
          desc: 'Детальная карта Вардора с ключевыми локациями, боссами и точками интереса.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
          title: 'Два языка',
          desc: 'Полная локализация на русский и английский язык — переключай в любой момент в настройках.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
          title: 'Автообновление',
          desc: 'Лаунчер обновляется автоматически — ты всегда работаешь с самой актуальной версией.',
        },
      ],
    },
    preview: {
      tag: 'Интерфейс',
      title: 'Превью лаунчера',
      subtitle: 'Стильный и интуитивный интерфейс в атмосфере Sanguine',
      slides: [
        {
          tag: 'Главный экран',
          title: 'Домашняя страница',
          desc: 'Лаконичный стартовый экран с быстрым доступом ко всем разделам лаунчера.',
          img: '/assets/bg-1.webp',
        },
        {
          tag: 'Wiki',
          title: 'Встроенная Wiki',
          desc: 'Подробные данные по снаряжению, способностям, боссам V Blood и предметам.',
          img: '/assets/bg-3.webp',
        },
        {
          tag: 'Новости',
          title: 'Актуальные новости',
          desc: 'Все обновления и патчноуты прямо в лаунчере — без необходимости открывать браузер.',
          img: '/assets/bg-4.webp',
        },
        {
          tag: 'Карта',
          title: 'Карта Вардора',
          desc: 'Детальная карта игрового мира с метками боссов и ключевых локаций.',
          img: '/assets/bg-5.webp',
        },
        {
          tag: 'Команды',
          title: 'Справочник команд',
          desc: 'Полная база серверных команд с описаниями и примерами использования.',
          img: '/assets/bg-6.webp',
        },
      ],
    },
    download: {
      tag: 'Скачать',
      title: 'Получить лаунчер',
      subtitle: 'Бесплатно. Без регистрации. Только для Windows.',
      win_desc: 'Мастер установки NSIS · x64',
      win_btn: 'Скачать для Windows',
      req_title: 'Минимальные системные требования',
      req_os: 'ОС: Windows 10/11 64-bit',
      req_cpu: 'Процессор: Intel Core i5-6600 / AMD Ryzen 5 1500X',
      req_ram: 'ОЗУ: 12 ГБ RAM',
      req_gpu: 'Видеокарта: NVIDIA GTX 750 Ti / AMD Radeon R7 360',
      req_disk: 'Диск: 7 ГБ свободного места',
      note: 'Приложение не аффилировано со Stunlock Studios. Sanguine — зарегистрированная торговая марка Stunlock Studios AB.',
    },
    footer: {
      tagline: 'Companion App for Vampires',
      copy: '© 2025 Sanguine. Сделано с любовью',
      disclaimer: 'Неофициальное фан-приложение. Не аффилировано со Stunlock Studios.',
    },
  },

  en: {
    meta: {
      title: 'Sanguine — Companion App (Launcher)',
      description: 'Official site for the Sanguine launcher. Wiki, news, commands, Vardoran map — all in one place.',
    },
    nav: {
      about: 'About',
      features: 'Features',
      preview: 'Preview',
      download: 'Download',
    },
    hero: {
      title: 'Sanguine Launcher',
      subtitle: 'RULE THE NIGHT',
      desc: 'All V Rising tools in one application: Wiki, interactive map, command reference, and build creator.',
      cta_win: 'Download for Windows',
      stat_platforms: 'Platforms',
      stat_lang: 'Languages',
      stat_free_val: 'Free',
      stat_price: 'Price',
    },
    about: {
      tag_game: 'About the Game',
      game_title: 'What is Sanguine?',
      game_desc:
        'Sanguine is an atmospheric action-RPG by Stunlock Studios where you play as a vampire awakened from a long slumber. Hunt for blood, build your castle, fight powerful V Blood bosses and bend the world of Vardoran to your will.',
      tag_launcher: 'Launcher Site',
      launcher_title: 'Why use our launcher?',
      launcher_desc:
        "This launcher brings together all the resources you need about the game in one sleek application. It's the perfect companion for any level of vampire.",
      l1: 'For newcomers: easy Wiki access and reference guides',
      l2: 'For veterans: quick look-up of commands and patch notes',
      l3: 'For everyone: up-to-date news and release notes',
    },
    features: {
      tag: 'Features',
      title: 'Launcher Capabilities',
      subtitle: 'Everything a vampire needs for a comfortable playthrough — in one place',
      items: [
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
          title: 'Built-in Wiki',
          desc: 'Massive database: gear, abilities, V Blood bosses, NPCs, structures and much more.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
          title: 'Command Reference',
          desc: 'Complete list of server and in-game commands with descriptions — quick access at any time.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
          title: 'Latest News',
          desc: 'Up-to-date patch notes and announcements right in the launcher — never miss anything important.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>',
          title: 'World Map',
          desc: 'Detailed map of Vardoran with key locations, bosses and points of interest marked.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
          title: 'Two Languages',
          desc: 'Full Russian and English localization — switch at any time in settings.',
        },
        {
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
          title: 'Auto-Update',
          desc: 'The launcher updates itself automatically — you always have the latest version.',
        },
      ],
    },
    preview: {
      tag: 'Interface',
      title: 'Launcher Preview',
      subtitle: 'Sleek and intuitive UI in the atmosphere of Sanguine',
      slides: [
        {
          tag: 'Home Screen',
          title: 'Home Page',
          desc: 'Clean start screen with quick access to all sections of the launcher.',
          img: '/assets/bg-1.webp',
        },
        {
          tag: 'Wiki',
          title: 'Built-in Wiki',
          desc: 'Detailed data on gear, abilities, V Blood bosses and items.',
          img: '/assets/bg-3.webp',
        },
        {
          tag: 'News',
          title: 'Latest News',
          desc: 'All updates and patch notes right in the launcher — no need to open a browser.',
          img: '/assets/bg-4.webp',
        },
        {
          tag: 'Map',
          title: 'Map of Vardoran',
          desc: 'Detailed map of the game world with boss markers and key locations.',
          img: '/assets/bg-5.webp',
        },
        {
          tag: 'Commands',
          title: 'Command Reference',
          desc: 'Full database of server commands with descriptions and usage examples.',
          img: '/assets/bg-6.webp',
        },
      ],
    },
    download: {
      tag: 'Download',
      title: 'Get the Launcher',
      subtitle: 'Free. No registration. Windows only.',
      win_desc: 'NSIS Installation Wizard · x64',
      win_btn: 'Download for Windows',
      req_title: 'Minimum System Requirements',
      req_os: 'OS: Windows 10/11 64-bit',
      req_cpu: 'CPU: Intel Core i5-6600 / AMD Ryzen 5 1500X',
      req_ram: 'Memory: 12 GB RAM',
      req_gpu: 'GPU: NVIDIA GTX 750 Ti / AMD Radeon R7 360',
      req_disk: 'Storage: 7 GB available space',
      note: 'This application is not affiliated with Stunlock Studios. Sanguine is a registered trademark of Stunlock Studios AB.',
    },
    footer: {
      tagline: 'Companion App for Vampires',
      copy: '© 2025 Sanguine. Made with love',
      disclaimer: 'Unofficial fan application. Not affiliated with Stunlock Studios.',
    },
  },
};

/* ─────────────────────────────────────────────────
   STATE
   ───────────────────────────────────────────────── */
let currentLang = localStorage.getItem('vrl-lang') || 'ru';
let currentSlide = 0;
let slideInterval = null;

/* ─────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const t = (key) => {
  const parts = key.split('.');
  let val = i18n[currentLang];
  for (const p of parts) {
    val = val?.[p];
  }
  return val ?? key;
};

/* ─────────────────────────────────────────────────
   APPLY TRANSLATIONS
   ───────────────────────────────────────────────── */
function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t('meta.title');
  $('meta[name="description"]')?.setAttribute('content', t('meta.description'));

  // Text content
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val && val !== key) {
      el.innerHTML = val;
    }
  });

  // Rebuild dynamic sections
  buildFeatures();
  buildSlider();

  // Update lang buttons
  $$('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

/* ─────────────────────────────────────────────────
   FEATURES GRID
   ───────────────────────────────────────────────── */
function buildFeatures() {
  const grid = $('#featuresGrid');
  if (!grid) return;
  const items = t('features.items');
  if (!Array.isArray(items)) return;

  grid.innerHTML = items
    .map(
      (f, i) => `
    <div class="feature-card reveal" style="--i:${i}">
      <div class="feature-icon-wrap" aria-hidden="true">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `,
    )
    .join('');

  // Re-observe newly created cards
  observeReveal();
}

/* ─────────────────────────────────────────────────
   SLIDER
   ───────────────────────────────────────────────── */
function buildSlider() {
  const track = $('#sliderTrack');
  const dotsEl = $('#sliderDots');
  if (!track || !dotsEl) return;

  const slides = t('preview.slides');
  if (!Array.isArray(slides)) return;

  track.innerHTML = slides
    .map(
      (s) => `
    <div class="slide">
      <img src="${s.img}" alt="${s.title}" class="slide-img" loading="lazy" />
      <div class="slide-overlay">
        <div class="slide-tag">${s.tag}</div>
        <h3 class="slide-title">${s.title}</h3>
        <p class="slide-desc">${s.desc}</p>
      </div>
    </div>
  `,
    )
    .join('');

  dotsEl.innerHTML = slides
    .map(
      (_, i) => `
    <button class="dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Slide ${i + 1}"></button>
  `,
    )
    .join('');

  // Attach dot handlers
  $$('.dot', dotsEl).forEach((dot) => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.idx)));
  });

  currentSlide = 0;
  updateSlider();
  resetAutoPlay();
}

function updateSlider() {
  const track = $('#sliderTrack');
  const dots = $$('.dot');
  if (!track) return;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function goToSlide(idx) {
  const slides = t('preview.slides');
  if (!Array.isArray(slides)) return;
  currentSlide = (idx + slides.length) % slides.length;
  updateSlider();
  resetAutoPlay();
}

function resetAutoPlay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function initSliderControls() {
  $('#slidePrev')?.addEventListener('click', () => goToSlide(currentSlide - 1));
  $('#slideNext')?.addEventListener('click', () => goToSlide(currentSlide + 1));
}

// Touch/swipe support
function initSliderSwipe() {
  const wrapper = $('.slider-wrapper');
  if (!wrapper) return;
  let startX = 0;
  wrapper.addEventListener(
    'touchstart',
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );
  wrapper.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goToSlide(currentSlide + (diff > 0 ? 1 : -1));
  });
}

/* ─────────────────────────────────────────────────
   PARTICLES
   ───────────────────────────────────────────────── */
function initParticles() {
  const container = $('#particles');
  if (!container) return;

  const COUNT = 45;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const x = Math.random() * 100;
    const dur = 8 + Math.random() * 15;
    const delay = Math.random() * -15;
    const drift = (Math.random() - 0.5) * 150;
    const size = 1.5 + Math.random() * 3.5;
    const glow = size * 2;
    p.style.cssText = `
      left: ${x}%;
      bottom: -10px;
      width: ${size}px;
      height: ${size}px;
      box-shadow: 0 0 ${glow}px rgba(239, 68, 68, 0.8);
      --dur: ${dur}s;
      --delay: ${delay}s;
      --drift: ${drift}px;
      animation-delay: ${delay}s;
    `;
    container.appendChild(p);
  }
}

/* ─────────────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  const burger = $('#burger');
  const mobile = $('#navMobile');

  // Scroll class
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Helper: close the menu
  const closeMenu = () => {
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    mobile.classList.remove('open');
    mobile.setAttribute('aria-hidden', 'true');
  };

  // Burger toggle
  burger?.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    mobile.classList.toggle('open', open);
    mobile.setAttribute('aria-hidden', String(!open));
  });

  // Close mobile on link click
  $$('.nav-mobile .nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close mobile when clicking on the empty overlay area
  mobile?.addEventListener('click', (e) => {
    if (e.target === mobile) closeMenu();
  });

  // Close mobile when clicking anywhere outside the navbar
  document.addEventListener('click', (e) => {
    if (mobile.classList.contains('open') && !navbar.contains(e.target)) {
      closeMenu();
    }
  });
}

/* ─────────────────────────────────────────────────
   LANG SWITCH
   ───────────────────────────────────────────────── */
function initLangSwitch() {
  $$('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem('vrl-lang', lang);
      applyTranslations();
    });
  });
}

/* ─────────────────────────────────────────────────
   SCROLL REVEAL (IntersectionObserver)
   ───────────────────────────────────────────────── */
let revealObserver = null;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger siblings
          const siblings = [...(entry.target.parentElement?.querySelectorAll('.reveal') || [])];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 0.08}s`;
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
  );

  $$('.reveal').forEach((el) => revealObserver.observe(el));
}

/* ─────────────────────────────────────────────────
   SMOOTH ANCHOR SCROLL
   ───────────────────────────────────────────────── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ─────────────────────────────────────────────────
   HERO SLIDER (Background slideshow)
   ───────────────────────────────────────────────── */
function initHeroSlider() {
  const slides = $$('.hero-slide');
  if (slides.length < 2) return;

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
}

/* ─────────────────────────────────────────────────
   HERO PARALLAX (subtle)
   ───────────────────────────────────────────────── */
function initParallax() {
  const hero = $('#hero');
  const deco = $('.hero-deco');
  if (!hero || !deco) return;

  let targetY = 0;
  let currentY = 0;
  let ticking = false;

  const updateTarget = () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
    targetY = progress * 24;
  };

  const animate = () => {
    currentY += (targetY - currentY) * 0.12;
    deco.style.setProperty('--parallax-y', `${currentY.toFixed(2)}px`);
    requestAnimationFrame(animate);
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateTarget();
        ticking = false;
      });
    },
    { passive: true },
  );

  updateTarget();
  animate();
}

/* ─────────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLangSwitch();
  // initParticles(); // particles disabled per design request
  initHeroSlider();
  initParallax();
  initSmoothScroll();

  applyTranslations(); // builds features + slider

  initSliderControls();
  initSliderSwipe();
  observeReveal();

  // Animate hero elements on load
  requestAnimationFrame(() => {
    $$('.hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 120);
    });
  });
});
