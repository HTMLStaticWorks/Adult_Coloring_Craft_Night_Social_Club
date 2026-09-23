/* ============================================================
   COLOR & COMPANY — main.js
   All JavaScript functionality — single file
   ============================================================ */

'use strict';

/* ============================================================
   SECTION: DATA — Demo Member, Sessions, Membership
   ============================================================ */

const MEMBER_DATA = {
  name: "Alex Morgan",
  email: "alex@example.com",
  phone: "+1 (555) 012-3456",
  membership: "Creative Club",
  memberSince: "March 2026",
  totalSessions: 6,
  usedSessions: 4,
  remainingSessions: 2,
  renewalDate: "October 15, 2026",
  billingStatus: "Active",
  upcomingBookings: [
    {
      id: "bk-001",
      session: "Botanical After Dark",
      date: "Sep 28, 2026",
      time: "7:00 PM",
      seats: 1,
      status: "confirmed",
      category: "COLORING"
    },
    {
      id: "bk-002",
      session: "Modern Mandala Night",
      date: "Oct 5, 2026",
      time: "6:30 PM",
      seats: 2,
      status: "confirmed",
      category: "CRAFT"
    }
  ],
  pastBookings: [
    {
      id: "bk-003",
      session: "Abstract Color Lab",
      date: "Sep 12, 2026",
      time: "7:00 PM",
      seats: 1,
      status: "completed",
      category: "COLORING"
    },
    {
      id: "bk-004",
      session: "Collage & Conversation",
      date: "Aug 22, 2026",
      time: "6:00 PM",
      seats: 2,
      status: "completed",
      category: "SOCIAL"
    },
    {
      id: "bk-005",
      session: "Watercolor Evenings",
      date: "Aug 8, 2026",
      time: "7:00 PM",
      seats: 1,
      status: "completed",
      category: "CRAFT"
    }
  ],
  cancelledBookings: [
    {
      id: "bk-006",
      session: "Slow Sunday Craft",
      date: "Jul 20, 2026",
      time: "3:00 PM",
      seats: 1,
      status: "cancelled",
      category: "CRAFT"
    }
  ],
  pastCreations: [
    { id: "cr-001", title: "Botanical Study", session: "Botanical After Dark", date: "Sep 12, 2026", category: "coloring", img: "assets/images/creations-01.webp" },
    { id: "cr-002", title: "Midnight Abstract", session: "Abstract Color Lab", date: "Aug 22, 2026", category: "coloring", img: "assets/images/creations-02.webp" },
    { id: "cr-003", title: "Autumn Collage", session: "Collage & Conversation", date: "Aug 8, 2026", category: "craft", img: "assets/images/creations-03.webp" },
    { id: "cr-004", title: "Monochrome Floral", session: "Watercolor Evenings", date: "Jul 20, 2026", category: "mixed-media", img: "assets/images/creations-04.webp" },
    { id: "cr-005", title: "Paper Garden", session: "Botanical After Dark", date: "Jun 15, 2026", category: "seasonal", img: "assets/images/creations-05.webp" },
    { id: "cr-006", title: "Geometric Study", session: "Modern Mandala Night", date: "Jun 3, 2026", category: "coloring", img: "assets/images/coloring-table.webp" }
  ],
  paymentHistory: [
    { id: "py-001", date: "Sep 15, 2026", description: "Creative Club — Monthly", amount: "$45.00", status: "paid" },
    { id: "py-002", date: "Aug 15, 2026", description: "Creative Club — Monthly", amount: "$45.00", status: "paid" },
    { id: "py-003", date: "Jul 15, 2026", description: "Creative Club — Monthly", amount: "$45.00", status: "paid" },
    { id: "py-004", date: "Jun 15, 2026", description: "Creative Club — Monthly", amount: "$45.00", status: "paid" },
    { id: "py-005", date: "May 15, 2026", description: "Guest Session — Botanical Night", amount: "$22.00", status: "paid" }
  ],
  preferences: {
    coloring: true,
    craft: true,
    social: false,
    quiet: true,
    seasonal: false
  },
  notifications: {
    email: true,
    reminders: true,
    memberUpdates: false
  }
};

const SESSIONS_DATA = [
  {
    id: "s-001",
    title: "Botanical After Dark",
    category: "coloring",
    date: "Sep 28, 2026",
    time: "7:00 PM",
    duration: "2.5 hours",
    description: "Immerse yourself in the world of botanical illustration. Using premium colored pencils and fine markers, you'll bring detailed botanical line art to life in your own color palette. No experience needed — just bring your curiosity.",
    image: "assets/images/plan1.jpg",
    materials: "Premium colored pencils, fine markers, botanical illustration sheets",
    experience: "All levels welcome",
    sampleSeats: "4 sample seats available (demo)",
    price: "$28",
    memberPrice: "1 credit",
    members: false
  },
  {
    id: "s-002",
    title: "Modern Mandala Night",
    category: "coloring",
    date: "Oct 5, 2026",
    time: "6:30 PM",
    duration: "2 hours",
    description: "Explore the meditative world of mandala design. From simple geometric patterns to intricate circular compositions, you'll choose your complexity level and create something truly personal.",
    image: "assets/images/plan2.jpg",
    materials: "Fine-tip markers, geometric templates, premium paper",
    experience: "Beginner to Intermediate",
    sampleSeats: "6 sample seats available (demo)",
    price: "$25",
    memberPrice: "1 credit",
    members: false
  },
  {
    id: "s-003",
    title: "Collage & Conversation",
    category: "social",
    date: "Oct 10, 2026",
    time: "7:00 PM",
    duration: "2 hours",
    description: "An evening of cutting, layering and connecting. Bring fragments of magazines, textures and papers to create personal collage compositions while enjoying great conversation around the table.",
    image: "assets/images/plan3.jpg",
    materials: "Paper, magazines, scissors, glue, mixed media supplies",
    experience: "All levels welcome",
    sampleSeats: "8 sample seats available (demo)",
    price: "$30",
    memberPrice: "1 credit",
    members: false
  },
  {
    id: "s-004",
    title: "Autumn Paper Art",
    category: "seasonal",
    date: "Oct 18, 2026",
    time: "5:00 PM",
    duration: "2.5 hours",
    description: "Celebrate the season with warm-toned paper art. Press, layer and arrange autumn botanicals, textures and tones to create a seasonal piece you'll want to frame.",
    image: "assets/images/plan4.jpg",
    materials: "Pressed botanicals, craft paper, watercolor, seasonal palettes",
    experience: "All levels welcome",
    sampleSeats: "5 sample seats available (demo)",
    price: "$32",
    memberPrice: "1 credit",
    members: false
  },
  {
    id: "s-005",
    title: "Abstract Color Lab",
    category: "coloring",
    date: "Oct 24, 2026",
    time: "7:00 PM",
    duration: "2 hours",
    description: "Break free from structure. This experimental session invites you to explore abstract composition, bold color relationships and expressive mark-making using a range of media.",
    image: "assets/images/abstract-craft.webp",
    materials: "Watercolor, acrylics, mixed media paper, experimental tools",
    experience: "All levels welcome",
    sampleSeats: "3 sample seats available (demo)",
    price: "$30",
    memberPrice: "1 credit",
    members: false
  },
  {
    id: "s-006",
    title: "Member Preview: Winter Botanicals",
    category: "coloring",
    date: "Nov 2, 2026",
    time: "7:00 PM",
    duration: "2.5 hours",
    description: "Exclusively for members — an early preview of our winter botanical series. Work with hand-selected winter plants and a curated palette to create a seasonal masterpiece.",
    image: "assets/images/botanical-coloring.webp",
    materials: "Premium watercolor pencils, winter botanical sheets",
    experience: "All levels welcome",
    sampleSeats: "Members only (demo)",
    price: "Member Credit",
    memberPrice: "1 credit",
    members: true
  },
  {
    id: "s-007",
    title: "Slow Sunday Craft",
    category: "craft",
    date: "Oct 12, 2026",
    time: "3:00 PM",
    duration: "3 hours",
    description: "Sundays were made for this. Take your time with a multi-material craft project in a relaxed, quiet studio setting. Perfect for unwinding before the week begins.",
    image: "assets/images/craft-night.webp",
    materials: "Assorted craft materials, fabric, paper, textiles",
    experience: "All levels welcome",
    sampleSeats: "7 sample seats available (demo)",
    price: "$26",
    memberPrice: "1 credit",
    members: false
  },
  {
    id: "s-008",
    title: "Color & Conversation",
    category: "social",
    date: "Oct 20, 2026",
    time: "6:00 PM",
    duration: "2 hours",
    description: "A sophisticated social coloring experience. Guided prompts, great music and even better company. The perfect way to spend a weekday evening.",
    image: "assets/images/hero-coloring.webp",
    materials: "Premium coloring sheets, quality colored pencils",
    experience: "All levels — social focus",
    sampleSeats: "10 sample seats available (demo)",
    price: "$22",
    memberPrice: "1 credit",
    members: false
  }
];

const MEMBERSHIP_PLANS = [
  {
    id: "studio-pass",
    name: "Studio Pass",
    title: "Studio Pass",
    price: "$28",
    period: "/ month",
    sessions: 2,
    benefits: [
      "2 session credits per month",
      "Member booking access",
      "Creation gallery access",
      "Member email updates",
      "Studio discount on extra sessions"
    ],
    featured: false,
    note: "Sample pricing — demonstration only"
  },
  {
    id: "creative-club",
    name: "Creative Club",
    title: "Creative Club",
    price: "$45",
    period: "/ month",
    sessions: 6,
    benefits: [
      "6 session credits per month",
      "Early session booking",
      "Member-only night access",
      "1 guest benefit per month",
      "Creation gallery & archive",
      "Priority event access"
    ],
    featured: true,
    badge: "Most Popular",
    note: "Sample pricing — demonstration only"
  },
  {
    id: "full-circle",
    name: "Full Circle",
    title: "Full Circle",
    price: "$75",
    period: "/ month",
    sessions: 12,
    benefits: [
      "12 session credits per month",
      "All member-only events included",
      "2 guest benefits per month",
      "Seasonal workshop previews",
      "Full creation archive access",
      "Dedicated member support",
      "Special event invitations"
    ],
    featured: false,
    note: "Sample pricing — demonstration only"
  }
];

const SEARCH_DATA = [
  { title: "Botanical After Dark", type: "Session", url: "sessions.html", keywords: "botanical coloring plants evening" },
  { title: "Modern Mandala Night", type: "Session", url: "sessions.html", keywords: "mandala geometric coloring" },
  { title: "Collage & Conversation", type: "Session", url: "sessions.html", keywords: "collage social conversation" },
  { title: "Abstract Color Lab", type: "Session", url: "sessions.html", keywords: "abstract art mixed media experimental" },
  { title: "Autumn Paper Art", type: "Session", url: "sessions.html", keywords: "autumn seasonal craft paper" },
  { title: "Studio Pass Membership", type: "Membership", url: "membership.html", keywords: "membership studio pass plan" },
  { title: "Creative Club Membership", type: "Membership", url: "membership.html", keywords: "membership creative club plan" },
  { title: "Full Circle Membership", type: "Membership", url: "membership.html", keywords: "membership full circle plan premium" },
  { title: "Private Birthday Events", type: "Private Events", url: "private-events.html", keywords: "birthday private event group" },
  { title: "Corporate Creative Nights", type: "Private Events", url: "private-events.html", keywords: "corporate team private creative" },
  { title: "Upcoming Sessions", type: "Page", url: "sessions.html", keywords: "upcoming schedule sessions events" },
  { title: "Join the Club", type: "Membership", url: "membership.html", keywords: "join membership club" },
  { title: "Creations Gallery", type: "Gallery", url: "creations.html", keywords: "creations gallery artwork finished" },
  { title: "Contact the Studio", type: "Contact", url: "contact.html", keywords: "contact help questions studio" },
  { title: "Member Dashboard", type: "Member", url: "dashboard.html", keywords: "dashboard member portal" }
];

const NOTIFICATIONS_DATA = [
  { id: "n-001", text: "Your Botanical After Dark session is tomorrow. We're looking forward to seeing you!", time: "1 day ago", read: false, url: "bookings.html" },
  { id: "n-002", text: "Your Creative Club membership has 2 session credits remaining this month.", time: "3 days ago", read: false, url: "membership-usage.html" },
  { id: "n-003", text: "A new seasonal session — Winter Botanical Preview — has been added to the schedule.", time: "5 days ago", read: true, url: "sessions.html" },
  { id: "n-004", text: "Your October membership renewal is coming up on October 15, 2026.", time: "1 week ago", read: true, url: "billing.html" }
];

/* ============================================================
   SECTION: LOCAL STORAGE HELPERS
   ============================================================ */

const LS = {
  get: (key, fallback = null) => {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  },
  remove: (key) => {
    try { localStorage.removeItem(key); } catch {}
  }
};

/* ============================================================
   SECTION: THEME
   ============================================================ */

const ThemeManager = (() => {
  const STORAGE_KEY = 'cc-theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    LS.set(STORAGE_KEY, theme);
    // Update all toggle buttons
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', String(isDark));
      const icon = btn.querySelector('.theme-icon');
      if (icon) icon.textContent = isDark ? '☀️' : '🌙';
      const label = btn.querySelector('.theme-label');
      if (label) label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    apply(current === 'dark' ? 'light' : 'dark');
  }

  function init() {
    const saved = LS.get(STORAGE_KEY, 'light');
    apply(saved);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
  }

  return { init, toggle, apply };
})();

/* ============================================================
   SECTION: RTL
   ============================================================ */

const RTLManager = (() => {
  const STORAGE_KEY = 'cc-rtl';

  function apply(isRTL) {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    LS.set(STORAGE_KEY, isRTL);
    document.querySelectorAll('[data-rtl-toggle]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(isRTL));
      const label = btn.querySelector('.rtl-label');
      if (label) label.textContent = isRTL ? 'Switch to LTR' : 'Switch to RTL';
    });
  }

  function toggle() {
    const current = document.documentElement.dir === 'rtl';
    apply(!current);
  }

  function init() {
    const saved = LS.get(STORAGE_KEY, false);
    apply(saved);
    document.querySelectorAll('[data-rtl-toggle]').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
  }

  return { init, toggle, apply };
})();

/* ============================================================
   SECTION: NAVIGATION & NAVBAR
   ============================================================ */

const NavManager = (() => {
  function setActive() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      const href = link.getAttribute('href') || '';
      const isActive = href === page || (page === '' && href === 'index.html');
      link.classList.toggle('active', isActive);
    });
  }

  function initScrolled() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    const handler = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
  }

  function init() {
    setActive();
    initScrolled();
  }

  return { init };
})();

/* ============================================================
   SECTION: MOBILE MENU
   ============================================================ */

const MobileMenu = (() => {
  let drawer, overlay, hamburger, isOpen = false;

  function open() {
    if (!drawer) return;
    isOpen = true;
    drawer.classList.add('open');
    overlay.classList.add('visible');
    hamburger && hamburger.classList.add('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    drawer.querySelector('a, button') && drawer.querySelector('a, button').focus();
  }

  function close() {
    if (!drawer) return;
    isOpen = false;
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger && hamburger.classList.remove('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggle() {
    isOpen ? close() : open();
  }

  function init() {
    drawer = document.getElementById('mobile-drawer');
    overlay = document.getElementById('drawer-overlay');
    hamburger = document.getElementById('hamburger');
    if (!drawer) return;

    hamburger && hamburger.addEventListener('click', toggle);
    overlay && overlay.addEventListener('click', close);

    drawer.querySelectorAll('.mobile-drawer__link').forEach(link => {
      link.addEventListener('click', close);
    });

    const closeBtn = document.getElementById('drawer-close');
    closeBtn && closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen) close();
    });
  }

  return { init, open, close };
})();

/* ============================================================
   SECTION: SEARCH
   ============================================================ */

const SearchManager = (() => {
  let panel, input, resultsContainer;

  function open() {
    if (!panel) return;
    panel.classList.add('open');
    input && input.focus();
  }

  function close() {
    if (!panel) return;
    panel.classList.remove('open');
  }

  function search(query) {
    if (!resultsContainer) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      resultsContainer.innerHTML = '';
      return;
    }
    const results = SEARCH_DATA.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );
    if (results.length === 0) {
      resultsContainer.innerHTML = `<span class="search-panel__empty">No matching creative experiences found.</span>`;
    } else {
      resultsContainer.innerHTML = results.slice(0, 8).map(r =>
        `<a href="${r.url}" class="search-panel__result-item">
          <strong>${r.title}</strong> <span style="opacity:0.6">— ${r.type}</span>
        </a>`
      ).join('');
    }
  }

  function init() {
    panel = document.getElementById('search-panel');
    input = document.getElementById('search-input');
    resultsContainer = document.getElementById('search-results');

    document.querySelectorAll('[data-search-open]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        open();
      });
    });

    const closeBtn = document.getElementById('search-close');
    closeBtn && closeBtn.addEventListener('click', close);

    input && input.addEventListener('input', e => search(e.target.value));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });
  }

  return { init, open, close };
})();

/* ============================================================
   SECTION: SCROLL REVEAL
   ============================================================ */

const ScrollReveal = (() => {
  function init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, entry.target.dataset.delay || 0);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: BACK TO TOP
   ============================================================ */

const BackToTop = (() => {
  function init() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
  return { init };
})();

/* ============================================================
   SECTION: MODALS (Reusable)
   ============================================================ */

const ModalManager = (() => {
  const activeModals = new Set();

  function open(modalId) {
    const overlay = document.getElementById(modalId);
    if (!overlay) return;
    overlay.classList.add('open');
    activeModals.add(modalId);
    document.body.style.overflow = 'hidden';
    const firstFocusable = overlay.querySelector('input, button, select, textarea, [tabindex="0"]');
    firstFocusable && firstFocusable.focus();
  }

  function close(modalId) {
    const overlay = document.getElementById(modalId);
    if (!overlay) return;
    overlay.classList.remove('open');
    activeModals.delete(modalId);
    if (activeModals.size === 0) document.body.style.overflow = '';
  }

  function closeAll() {
    activeModals.forEach(id => close(id));
  }

  function init() {
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', () => open(btn.dataset.modalOpen));
    });

    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.modalClose || btn.closest('.modal-overlay')?.id;
        if (id) close(id);
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) close(overlay.id);
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAll();
    });
  }

  return { init, open, close, closeAll };
})();

/* ============================================================
   SECTION: BOOKING MODAL
   ============================================================ */

const BookingManager = (() => {
  let currentSession = null;

  function openWithSession(session) {
    currentSession = session;
    const modal = document.getElementById('booking-modal');
    if (!modal) return;

    // Pre-populate session field
    const sessionField = document.getElementById('booking-session');
    if (sessionField) {
      sessionField.value = session ? session.title : '';
    }
    const titleEl = modal.querySelector('.booking-modal-session-title');
    if (titleEl && session) titleEl.textContent = session.title;

    ModalManager.open('booking-modal');
    resetBookingForm();
    SeatSelector.init();
  }

  function resetBookingForm() {
    const form = document.getElementById('booking-form');
    if (form) {
      form.reset();
      form.querySelectorAll('.form-error').forEach(e => e.classList.remove('visible'));
      form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(i => i.classList.remove('error'));
    }
    const success = document.getElementById('booking-success');
    const formContent = document.getElementById('booking-form-content');
    if (success) success.classList.remove('visible');
    if (formContent) formContent.style.display = '';
  }

  function showSuccess() {
    const success = document.getElementById('booking-success');
    const formContent = document.getElementById('booking-form-content');
    if (success) success.classList.add('visible');
    if (formContent) formContent.style.display = 'none';

    // Update usage
    const member = LS.get('cc-member', MEMBER_DATA);
    if (member.usedSessions < member.totalSessions) {
      member.usedSessions++;
      member.remainingSessions = member.totalSessions - member.usedSessions;
      LS.set('cc-member', member);
    }

    // Add to bookings
    if (currentSession) {
      const bookings = LS.get('cc-bookings', []);
      bookings.push({
        id: 'bk-' + Date.now(),
        session: currentSession.title,
        date: currentSession.date,
        time: currentSession.time,
        seats: document.getElementById('booking-seats')?.value || 1,
        status: 'confirmed',
        category: currentSession.category?.toUpperCase()
      });
      LS.set('cc-bookings', bookings);
    }

    UsageManager.refresh && UsageManager.refresh();
    showToast('Booking request prepared — demo only.');
  }

  function submitBooking(e) {
    e.preventDefault();
    const form = document.getElementById('booking-form');
    if (!form) return;
    if (!FormValidator.validate(form)) return;
    showSuccess();
  }

  function init() {
    const form = document.getElementById('booking-form');
    form && form.addEventListener('submit', submitBooking);

    document.querySelectorAll('[data-book-session]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.bookSession;
        const session = SESSIONS_DATA.find(s => s.id === id) || SESSIONS_DATA[0];
        openWithSession(session);
      });
    });

    const openBookBtn = document.getElementById('open-booking-modal');
    openBookBtn && openBookBtn.addEventListener('click', () => openWithSession(SESSIONS_DATA[0]));
  }

  return { init, openWithSession };
})();

/* ============================================================
   SECTION: SEAT SELECTOR
   ============================================================ */

const SeatSelector = (() => {
  const unavailableSeats = [2, 5, 11, 14]; // demo unavailable

  function init() {
    const container = document.getElementById('seat-selector');
    if (!container) return;
    container.innerHTML = '';

    const tables = [
      { name: 'Table 01', seats: [1,2,3,4] },
      { name: 'Table 02', seats: [5,6,7,8] },
      { name: 'Table 03', seats: [9,10,11,12] },
      { name: 'Table 04', seats: [13,14,15,16] }
    ];

    tables.forEach(table => {
      const row = document.createElement('div');
      row.className = 'seat-row';
      row.innerHTML = `<span class="seat-row__label">${table.name}</span><div class="seat-row__seats"></div>`;
      const seatsEl = row.querySelector('.seat-row__seats');

      table.seats.forEach(num => {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = num;
        seat.setAttribute('data-seat', num);
        if (unavailableSeats.includes(num)) {
          seat.classList.add('unavailable');
          seat.setAttribute('aria-disabled', 'true');
          seat.setAttribute('aria-label', `Seat ${num} — unavailable (demo)`);
        } else {
          seat.setAttribute('role', 'button');
          seat.setAttribute('tabindex', '0');
          seat.setAttribute('aria-label', `Seat ${num}`);
          seat.addEventListener('click', () => toggleSeat(seat));
          seat.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggleSeat(seat); });
        }
        seatsEl.appendChild(seat);
      });

      container.appendChild(row);
    });

    // Legend
    const legend = document.createElement('div');
    legend.className = 'seat-legend';
    legend.innerHTML = `
      <span class="seat-legend__item"><span class="seat-legend__dot"></span>Available</span>
      <span class="seat-legend__item"><span class="seat-legend__dot seat-legend__dot--selected"></span>Selected</span>
      <span class="seat-legend__item"><span class="seat-legend__dot seat-legend__dot--unavailable"></span>Unavailable (demo)</span>
    `;
    container.appendChild(legend);

    const note = document.createElement('p');
    note.className = 'demo-note';
    note.style.marginTop = '8px';
    note.textContent = '⚠ Demo seat display only. No real-time availability.';
    container.appendChild(note);
  }

  function toggleSeat(el) {
    el.classList.toggle('selected');
    el.setAttribute('aria-pressed', String(el.classList.contains('selected')));
  }

  return { init };
})();

/* ============================================================
   SECTION: SESSION FILTERING
   ============================================================ */

const SessionFilter = (() => {
  function init() {
    const filterBtns = document.querySelectorAll('[data-filter]');
    const sessionItems = document.querySelectorAll('[data-session-cat]');
    if (!filterBtns.length || !sessionItems.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        sessionItems.forEach(item => {
          const match = filter === 'all' || item.dataset.sessionCat === filter;
          item.style.display = match ? '' : 'none';
          if (match) {
            item.classList.remove('reveal');
            void item.offsetWidth;
            item.style.opacity = '0';
            setTimeout(() => { item.style.opacity = '1'; }, 50);
          }
        });
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: SESSION DETAILS MODAL
   ============================================================ */

const SessionDetails = (() => {
  function open(sessionId) {
    const session = SESSIONS_DATA.find(s => s.id === sessionId);
    if (!session) return;

    const modal = document.getElementById('session-detail-modal');
    if (!modal) return;

    // Populate modal
    const fields = {
      '#sd-title': session.title,
      '#sd-category': session.category.toUpperCase(),
      '#sd-date': session.date,
      '#sd-time': session.time,
      '#sd-duration': session.duration,
      '#sd-description': session.description,
      '#sd-materials': session.materials,
      '#sd-experience': session.experience,
      '#sd-seats': session.sampleSeats,
      '#sd-price': session.price,
      '#sd-member-price': session.memberPrice
    };

    Object.entries(fields).forEach(([sel, val]) => {
      const el = modal.querySelector(sel);
      if (el) el.textContent = val;
    });

    const img = modal.querySelector('#sd-image');
    if (img) {
      img.src = session.image;
      img.alt = session.title;
    }

    const bookBtn = modal.querySelector('#sd-book-btn');
    if (bookBtn) {
      bookBtn.dataset.bookSessionId = sessionId;
      bookBtn.onclick = () => {
        ModalManager.close('session-detail-modal');
        BookingManager.openWithSession(session);
      };
    }

    ModalManager.open('session-detail-modal');
  }

  function init() {
    document.querySelectorAll('[data-session-detail]').forEach(btn => {
      btn.addEventListener('click', () => open(btn.dataset.sessionDetail));
    });
  }

  return { init, open };
})();

/* ============================================================
   SECTION: HOME PAGE INTERACTIONS
   ============================================================ */

const HomeManager = (() => {
  function initSplitKeywords() {
    const keywords = document.querySelectorAll('.split-section__keyword');
    if (!keywords.length) return;
    let index = 0;
    keywords[0]?.classList.add('visible');
    setInterval(() => {
      keywords.forEach(k => k.classList.remove('visible'));
      index = (index + 1) % keywords.length;
      keywords[index]?.classList.add('visible');
    }, 1500);
  }

  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const heroBg = document.querySelector('.hero__bg img');
    if (!heroBg) return;
    window.addEventListener('scroll', () => {
      const offset = window.scrollY * 0.3;
      heroBg.style.transform = `translateY(${offset}px)`;
    }, { passive: true });
  }

  function initParticles() {
    const container = document.querySelector('.hero__particles');
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#C96F61', '#F4EEE5', '#2A2028'];
    const count = 12;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'hero__particle';
      const size = Math.random() * 6 + 3;
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        --duration: ${Math.random() * 6 + 6}s;
        --delay: ${Math.random() * 4}s;
      `;
      container.appendChild(p);
    }
  }

  function init() {
    initSplitKeywords();
    initParallax();
    initParticles();
  }

  return { init };
})();

/* ============================================================
   SECTION: HOME 2 — INTERACTIVE TABLE / HOTSPOTS
   ============================================================ */

const TabletopManager = (() => {
  const hotspots = [
    { x: '20%', y: '45%', name: 'Colored Pencils', detail: 'Premium artist-grade, used in coloring nights', session: 'Coloring Night' },
    { x: '40%', y: '30%', name: 'Watercolor Palette', detail: 'Transparent pigment mixing, used in craft nights', session: 'Watercolor Evening' },
    { x: '65%', y: '55%', name: 'Fine Liner Markers', detail: 'Detail-work tools, used in mandala sessions', session: 'Mandala Night' },
    { x: '80%', y: '35%', name: 'Art Brushes', detail: 'Various sizes for paint and mixed media', session: 'Mixed Media Lab' },
    { x: '50%', y: '70%', name: 'Premium Paper', detail: 'Artist-grade, smooth or textured surface', session: 'All Sessions' },
    { x: '30%', y: '65%', name: 'Scissors & Tools', detail: 'Craft-grade cutting tools for paper art', session: 'Craft Night' }
  ];

  function init() {
    const container = document.querySelector('.tabletop');
    if (!container) return;

    hotspots.forEach(hs => {
      const el = document.createElement('div');
      el.className = 'tabletop__hotspot';
      el.style.insetInlineStart = hs.x;
      el.style.top = hs.y;
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', hs.name);
      el.innerHTML = `<span style="color:#fff;font-size:0.7rem;font-weight:700">+</span>
        <div class="tabletop__tooltip">
          <div class="tabletop__tooltip-name">${hs.name}</div>
          <div class="tabletop__tooltip-detail">${hs.detail}</div>
          <div class="tabletop__tooltip-detail" style="margin-top:4px;color:var(--color-primary)">${hs.session}</div>
        </div>`;

      el.addEventListener('mouseenter', () => el.classList.add('hovered'));
      el.addEventListener('mouseleave', () => el.classList.remove('hovered'));
      el.addEventListener('focus', () => el.classList.add('hovered'));
      el.addEventListener('blur', () => el.classList.remove('hovered'));
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter') el.classList.toggle('hovered');
      });

      container.appendChild(el);
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: HOME 2 — NIGHT SELECTOR
   ============================================================ */

const NightSelector = (() => {
  function init() {
    const tabs = document.querySelectorAll('.night-selector__tab');
    const panels = document.querySelectorAll('.night-selector__panel');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const target = document.getElementById('panel-' + tab.dataset.night);
        target && target.classList.add('active');
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: HOME 2 — JOURNEY STEPS
   ============================================================ */

const JourneyManager = (() => {
  function init() {
    const steps = document.querySelectorAll('.journey__step');
    const panels = document.querySelectorAll('.journey__panel');
    if (!steps.length) return;

    steps.forEach((step, i) => {
      step.addEventListener('click', () => {
        steps.forEach(s => s.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        step.classList.add('active');
        panels[i] && panels[i].classList.add('active');
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: CONTACT TOPICS
   ============================================================ */

const ContactTopics = (() => {
  function init() {
    const btns = document.querySelectorAll('.topic-btn');
    const ctaText = document.getElementById('contact-cta-text');
    if (!btns.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (ctaText) {
          ctaText.textContent = 'Start an enquiry about ' + btn.dataset.topic;
        }
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: GALLERY FILTERING (Creations)
   ============================================================ */

const GalleryManager = (() => {
  function init() {
    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const items = document.querySelectorAll('[data-creation-cat]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.galleryFilter;
        items.forEach(item => {
          const match = filter === 'all' || item.dataset.creationCat === filter;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // Render creations gallery from data
  function renderCreations(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const member = LS.get('cc-member', MEMBER_DATA);
    const creations = data || member.pastCreations || MEMBER_DATA.pastCreations;
    container.innerHTML = creations.map(c => `
      <div class="gallery-item" data-creation-cat="${c.category}">
        <img src="${c.img}" alt="${c.title}" loading="lazy" onerror="this.parentElement.style.background='var(--color-surface-2)';this.style.display='none'">
        <div class="gallery-item__overlay">
          <div class="gallery-item__title">${c.title}</div>
          <div class="gallery-item__meta">${c.session} · ${c.date}</div>
        </div>
      </div>
    `).join('');
  }

  return { init, renderCreations };
})();

/* ============================================================
   SECTION: MEMBERSHIP
   ============================================================ */

const MembershipManager = (() => {
  function renderPlans(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = MEMBERSHIP_PLANS.map(plan => `
      <div class="plan-card ${plan.featured ? 'plan-card--featured' : ''}">
        ${plan.badge ? `<div class="plan-card__badge">${plan.badge}</div>` : ''}
        <div class="plan-card__name">${plan.name}</div>
        <div class="plan-card__title">${plan.title}</div>
        <div class="plan-card__price">${plan.price}<sub>${plan.period}</sub></div>
        <p class="plan-card__sample-note">⚠ ${plan.note}</p>
        <ul class="plan-card__benefits">
          ${plan.benefits.map(b => `
            <li class="plan-benefit">
              <span class="plan-benefit__icon">✓</span>
              ${b}
            </li>
          `).join('')}
        </ul>
        <button class="btn btn-${plan.featured ? 'primary' : 'outline'} w-full"
          data-modal-open="join-modal"
          onclick="ModalManager.open('join-modal')">
          ${plan.featured ? 'Join Creative Club →' : 'Get Started →'}
        </button>
      </div>
    `).join('');
  }

  function init() {
    renderPlans('membership-plans-container');
  }

  return { init, renderPlans };
})();

/* ============================================================
   SECTION: USAGE MANAGER
   ============================================================ */

const UsageManager = (() => {
  function refresh() {
    const member = LS.get('cc-member', MEMBER_DATA);
    const used = member.usedSessions || 0;
    const total = member.totalSessions || 6;
    const remaining = total - used;
    const pct = (used / total) * 100;

    // Progress ring
    const ring = document.getElementById('usage-ring-fill');
    if (ring) {
      const r = 54;
      const circ = 2 * Math.PI * r;
      const offset = circ - (pct / 100) * circ;
      ring.style.strokeDasharray = circ;
      ring.style.strokeDashoffset = offset;
    }

    // Ring center numbers
    const ringUsed = document.getElementById('usage-ring-used');
    if (ringUsed) ringUsed.textContent = used;
    const ringTotal = document.getElementById('usage-ring-total');
    if (ringTotal) ringTotal.textContent = total;

    // Stat numbers
    document.querySelectorAll('[data-usage-used]').forEach(el => el.textContent = used);
    document.querySelectorAll('[data-usage-total]').forEach(el => el.textContent = total);
    document.querySelectorAll('[data-usage-remaining]').forEach(el => el.textContent = remaining);

    // Progress bar
    const bar = document.querySelector('.progress-bar__fill');
    if (bar) bar.style.width = pct + '%';
  }

  function init() {
    refresh();
  }

  return { init, refresh };
})();

/* ============================================================
   SECTION: DASHBOARD
   ============================================================ */

const DashboardManager = (() => {
  function initGreeting() {
    const el = document.querySelector('.dashboard-greeting');
    if (!el) return;
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    const member = LS.get('cc-member', MEMBER_DATA);
    el.textContent = `${greeting}, ${member.name.split(' ')[0]}.`;
  }

  function initDateDisplay() {
    const el = document.querySelector('.dashboard-date');
    if (!el) return;
    const now = new Date();
    el.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  function initMobileSidebar() {
    const hamburger = document.getElementById('dashboard-hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!hamburger || !sidebar) return;

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay && overlay.classList.toggle('visible');
      document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    });

    overlay && overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
    });
  }

  function init() {
    initGreeting();
    initDateDisplay();
    initMobileSidebar();
    loadDashboardData();
  }

  function loadDashboardData() {
    const member = LS.get('cc-member', MEMBER_DATA);

    // Membership status
    const planEl = document.getElementById('dash-plan-name');
    if (planEl) planEl.textContent = member.membership;

    const usedEl = document.getElementById('dash-sessions-used');
    if (usedEl) usedEl.textContent = `${member.usedSessions} / ${member.totalSessions} sessions used`;

    // Upcoming session card
    const upcoming = member.upcomingBookings?.[0] || MEMBER_DATA.upcomingBookings[0];
    if (upcoming) {
      const titleEl = document.getElementById('dash-upcoming-title');
      if (titleEl) titleEl.textContent = upcoming.session;
      const dateEl = document.getElementById('dash-upcoming-date');
      if (dateEl) dateEl.textContent = `${upcoming.date} at ${upcoming.time}`;
    }
  }

  return { init };
})();

/* ============================================================
   SECTION: BOOKINGS PAGE
   ============================================================ */

const BookingsPage = (() => {
  function renderBookings() {
    const member = LS.get('cc-member', MEMBER_DATA);
    const storedBookings = LS.get('cc-bookings', []);

    const allUpcoming = [...(member.upcomingBookings || MEMBER_DATA.upcomingBookings), ...storedBookings];
    const allPast = member.pastBookings || MEMBER_DATA.pastBookings;
    const allCancelled = member.cancelledBookings || MEMBER_DATA.cancelledBookings;

    renderTable('bookings-upcoming', allUpcoming, 'No upcoming bookings');
    renderTable('bookings-past', allPast, 'No past bookings');
    renderTable('bookings-cancelled', allCancelled, 'No cancelled bookings');
  }

  function renderTable(containerId, bookings, emptyMsg) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!bookings || bookings.length === 0) {
      container.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--color-text-muted);padding:2rem">${emptyMsg}</td></tr>`;
      return;
    }

    container.innerHTML = bookings.map(b => `
      <tr>
        <td><strong>${b.session}</strong></td>
        <td>${b.date}</td>
        <td>${b.time || '—'}</td>
        <td><span class="session-badge session-badge--available">${b.category || '—'}</span></td>
        <td>${b.seats || '1'} seat${b.seats > 1 ? 's' : ''}</td>
        <td><span class="status-badge status-badge--${b.status}">${b.status}</span></td>
      </tr>
    `).join('');
  }

  function initFilters() {
    const filterBtns = document.querySelectorAll('[data-bookings-filter]');
    const panels = {
      upcoming: document.getElementById('tab-upcoming'),
      past: document.getElementById('tab-past'),
      cancelled: document.getElementById('tab-cancelled')
    };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Object.values(panels).forEach(p => p && (p.style.display = 'none'));
        const target = panels[btn.dataset.bookingsFilter];
        if (target) target.style.display = '';
      });
    });
  }

  function init() {
    renderBookings();
    initFilters();
  }

  return { init };
})();

/* ============================================================
   SECTION: BILLING PAGE
   ============================================================ */

const BillingManager = (() => {
  function renderPaymentHistory() {
    const container = document.getElementById('payment-history-body');
    if (!container) return;
    const member = LS.get('cc-member', MEMBER_DATA);
    const history = member.paymentHistory || MEMBER_DATA.paymentHistory;

    container.innerHTML = history.map(p => `
      <tr>
        <td>${p.date}</td>
        <td>${p.description}</td>
        <td><strong>${p.amount}</strong></td>
        <td><span class="status-badge status-badge--confirmed">${p.status}</span></td>
        <td>
          <button class="btn btn-ghost btn-sm" onclick="showToast('Demo receipt — no real data.')">View →</button>
        </td>
      </tr>
    `).join('');
  }

  function init() {
    renderPaymentHistory();

    const updateBtn = document.getElementById('update-payment-btn');
    updateBtn && updateBtn.addEventListener('click', () => {
      showToast('Payment update is demo only — no real payment processing.');
    });

    // Load member plan info
    const member = LS.get('cc-member', MEMBER_DATA);
    const planEl = document.getElementById('billing-plan-name');
    if (planEl) planEl.textContent = member.membership;
    const renewalEl = document.getElementById('billing-renewal');
    if (renewalEl) renewalEl.textContent = member.renewalDate;
    const statusEl = document.getElementById('billing-status');
    if (statusEl) statusEl.textContent = member.billingStatus;
  }

  return { init };
})();

/* ============================================================
   SECTION: PROFILE
   ============================================================ */

const ProfileManager = (() => {
  function loadProfile() {
    const member = LS.get('cc-member', MEMBER_DATA);

    const fields = {
      'profile-name': member.name,
      'profile-email': member.email,
      'profile-phone': member.phone
    };

    Object.entries(fields).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.value = val || '';
    });

    // Preferences
    const prefs = member.preferences || MEMBER_DATA.preferences;
    Object.entries(prefs).forEach(([key, val]) => {
      const el = document.getElementById('pref-' + key);
      if (el) {
        if (val) el.classList.add('checked');
        const icon = el.querySelector('.pref-check__icon');
        if (icon && val) icon.innerHTML = '✓';
      }
    });

    // Notification toggles
    const notifs = member.notifications || MEMBER_DATA.notifications;
    Object.entries(notifs).forEach(([key, val]) => {
      const el = document.getElementById('notif-' + key);
      if (el) el.checked = val;
    });
  }

  function saveProfile() {
    const member = LS.get('cc-member', MEMBER_DATA);
    const nameEl = document.getElementById('profile-name');
    const emailEl = document.getElementById('profile-email');
    const phoneEl = document.getElementById('profile-phone');

    if (nameEl) member.name = nameEl.value;
    if (emailEl) member.email = emailEl.value;
    if (phoneEl) member.phone = phoneEl.value;

    // Preferences
    const prefs = {};
    document.querySelectorAll('[data-pref]').forEach(el => {
      prefs[el.dataset.pref] = el.classList.contains('checked');
    });
    member.preferences = prefs;

    // Notifications
    const notifs = {};
    document.querySelectorAll('[data-notif]').forEach(el => {
      notifs[el.dataset.notif] = el.checked;
    });
    member.notifications = notifs;

    LS.set('cc-member', member);
    showToast('Profile saved — demo state only.');
  }

  function init() {
    loadProfile();

    document.querySelectorAll('.pref-check').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('checked');
        const icon = el.querySelector('.pref-check__icon');
        if (icon) icon.innerHTML = el.classList.contains('checked') ? '✓' : '';
      });
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          el.click();
        }
      });
    });

    const saveBtn = document.getElementById('save-profile-btn');
    saveBtn && saveBtn.addEventListener('click', saveProfile);

    const form = document.getElementById('profile-form');
    form && form.addEventListener('submit', e => { e.preventDefault(); saveProfile(); });
  }

  return { init };
})();

/* ============================================================
   SECTION: LOGIN / AUTH
   ============================================================ */

const AuthManager = (() => {
  const STORAGE_KEY = 'cc-demo-logged-in';

  function isLoggedIn() {
    return LS.get(STORAGE_KEY, false);
  }

  function login() {
    LS.set(STORAGE_KEY, true);
  }

  function logout() {
    LS.remove(STORAGE_KEY);
    // window.location.href = 'login.html';
  }

  function requireLogin() {
    if (!isLoggedIn()) {
      // window.location.href = 'login.html';
    }
  }

  function initLoginPage() {
    const demoBtn = document.getElementById('demo-login-btn');
    demoBtn && demoBtn.addEventListener('click', () => {
      login();
      window.location.href = 'dashboard.html';
    });

    const loginForm = document.getElementById('login-form');
    loginForm && loginForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!FormValidator.validate(loginForm)) return;
      login();
      window.location.href = 'dashboard.html';
    });
  }

  function initLogout() {
    document.querySelectorAll('[data-logout]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        logout();
      });
    });
  }

  function init() {
    initLoginPage();
    initLogout();
  }

  return { init, isLoggedIn, login, logout, requireLogin };
})();

/* ============================================================
   SECTION: NOTIFICATIONS
   ============================================================ */

const NotificationsManager = (() => {
  function getNotifications() {
    return LS.get('cc-notifications', NOTIFICATIONS_DATA);
  }

  function markRead(id) {
    const notifs = getNotifications();
    const item = notifs.find(n => n.id === id);
    if (item) { item.read = true; LS.set('cc-notifications', notifs); }
    render();
    updateBadge();
  }

  function updateBadge() {
    const notifs = getNotifications();
    const unread = notifs.filter(n => !n.read).length;
    const badge = document.querySelector('.topbar-btn__badge');
    if (badge) {
      badge.style.display = unread > 0 ? '' : 'none';
    }
    const countEl = document.getElementById('notif-count');
    if (countEl) countEl.textContent = unread;
  }

  function render() {
    const container = document.getElementById('notification-list');
    if (!container) return;
    const notifs = getNotifications();
    container.innerHTML = notifs.map(n => `
      <div class="notification-item ${n.read ? 'read' : 'unread'}" data-notif-id="${n.id}">
        <div class="notification-item__dot"></div>
        <div class="notification-item__content">
          <p>${n.text}</p>
          <time>${n.time}</time>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.notification-item').forEach(el => {
      el.addEventListener('click', () => {
        markRead(el.dataset.notifId);
      });
    });
  }

  function toggleDropdown() {
    const dropdown = document.getElementById('notification-dropdown');
    if (!dropdown) return;
    dropdown.classList.toggle('open');
    if (dropdown.classList.contains('open')) render();
  }

  function init() {
    updateBadge();
    const btn = document.getElementById('notification-btn');
    btn && btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleDropdown();
    });

    document.addEventListener('click', e => {
      const dropdown = document.getElementById('notification-dropdown');
      if (dropdown && !dropdown.contains(e.target) && e.target !== document.getElementById('notification-btn')) {
        dropdown.classList.remove('open');
      }
    });

    const markAllBtn = document.getElementById('mark-all-read');
    markAllBtn && markAllBtn.addEventListener('click', () => {
      const notifs = getNotifications();
      notifs.forEach(n => n.read = true);
      LS.set('cc-notifications', notifs);
      render();
      updateBadge();
    });
  }

  return { init, updateBadge };
})();

/* ============================================================
   SECTION: FORM VALIDATION
   ============================================================ */

const FormValidator = (() => {
  function validate(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const errorEl = document.getElementById(field.id + '-error');
      if (!field.value.trim()) {
        field.classList.add('error');
        errorEl && errorEl.classList.add('visible');
        valid = false;
      } else {
        field.classList.remove('error');
        errorEl && errorEl.classList.remove('visible');

        if (field.type === 'email' && !isValidEmail(field.value)) {
          field.classList.add('error');
          if (errorEl) { errorEl.textContent = 'Please enter a valid email address.'; errorEl.classList.add('visible'); }
          valid = false;
        }
      }
    });
    return valid;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function init() {
    // Live validation on input
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
      field.addEventListener('blur', () => {
        if (field.value.trim()) {
          field.classList.remove('error');
          const errorEl = document.getElementById(field.id + '-error');
          errorEl && errorEl.classList.remove('visible');
        }
      });
    });

    // Generic form success modals
    document.querySelectorAll('[data-form-success]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (!validate(form)) return;
        const target = form.dataset.formSuccess;
        const formContent = form.closest('.modal__body') || form.parentElement;
        const successEl = document.getElementById(target);
        if (successEl) { successEl.classList.add('visible'); }
        showToast('Enquiry prepared — demo only, not sent.');
        setTimeout(() => {
          form.reset();
          successEl && successEl.classList.remove('visible');
        }, 5000);
      });
    });
  }

  return { validate, init };
})();

/* ============================================================
   SECTION: PRIVATE EVENTS — ENQUIRY
   ============================================================ */

const PrivateEventsManager = (() => {
  function init() {
    const form = document.getElementById('private-event-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!FormValidator.validate(form)) return;
      const success = document.getElementById('private-event-success');
      const formContent = document.getElementById('private-event-form-content');
      if (success) success.classList.add('visible');
      if (formContent) formContent.style.display = 'none';
      showToast('Event enquiry prepared — demo only.');
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: CONTACT MODAL
   ============================================================ */

const ContactManager = (() => {
  function init() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!FormValidator.validate(form)) return;
      const success = document.getElementById('contact-success');
      const formContent = document.getElementById('contact-form-content');
      if (success) success.classList.add('visible');
      if (formContent) formContent.style.display = 'none';
      showToast('Message sent! (Demo — nothing was actually sent.)');
      setTimeout(() => {
        form.reset();
        if (success) success.classList.remove('visible');
        if (formContent) formContent.style.display = '';
        ModalManager.close('contact-modal');
      }, 5000);
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: NEWSLETTER
   ============================================================ */

const NewsletterManager = (() => {
  function init() {
    document.querySelectorAll('.footer__newsletter-form').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input && input.value.trim()) {
          showToast('Subscribed! (Demo — no email was recorded.)');
          input.value = '';
        }
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: COUNTDOWN (Coming Soon)
   ============================================================ */

const CountdownManager = (() => {
  function init() {
    const target = document.getElementById('countdown-target');
    if (!target) return;
    const endDate = new Date(target.dataset.date || '2027-01-01T00:00:00');

    function update() {
      const now = new Date();
      const diff = endDate - now;
      if (diff <= 0) return;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = String(val).padStart(2, '0'); };
      set('cd-days', days);
      set('cd-hours', hours);
      set('cd-mins', mins);
      set('cd-secs', secs);
    }

    update();
    setInterval(update, 1000);
  }

  return { init };
})();

/* ============================================================
   SECTION: HOME SESSION CARDS RENDER
   ============================================================ */

const HomeSessionCards = (() => {
  function render(containerId, limit = 4) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const sessions = SESSIONS_DATA.slice(0, limit);
    container.innerHTML = sessions.map(s => `
      <div class="session-card" data-session-cat="${s.category}">
        <div class="session-card__image">
          <img src="${s.image}" alt="${s.title}" loading="lazy" onerror="this.style.display='none'">
        </div>
        <div class="session-card__body">
          <div class="session-card__cat">${s.category.toUpperCase()}</div>
          <div class="session-card__title">${s.title}</div>
          <div class="session-card__desc">${s.description.substring(0, 120)}…</div>
        </div>
        <div class="session-card__footer">
          <div>
            <span class="session-meta-tag">📅 ${s.date}</span>
            <span class="session-meta-tag">⏰ ${s.time}</span>
          </div>
          <button class="btn btn-sm btn-primary" data-session-detail="${s.id}">Book →</button>
        </div>
      </div>
    `).join('');
    // Re-attach session detail events
    container.querySelectorAll('[data-session-detail]').forEach(btn => {
      btn.addEventListener('click', () => SessionDetails.open(btn.dataset.sessionDetail));
    });
  }

  return { render };
})();

/* ============================================================
   SECTION: SESSIONS PAGE — RENDER ROWS
   ============================================================ */

const SessionsPageManager = (() => {
  function render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = SESSIONS_DATA.map(s => `
      <div class="session-row reveal" data-session-cat="${s.category}">
        <div class="session-row__date">
          <div class="session-row__day">${s.date.split(' ')[1]?.replace(',', '') || ''}</div>
          <div class="session-row__month-time">${s.date.split(' ')[0]} · ${s.time}</div>
        </div>
        <div class="session-row__info">
          <div class="session-row__category">${s.category.toUpperCase()}</div>
          <div class="session-row__title">${s.title}</div>
          <div class="session-row__desc">${s.description.substring(0, 110)}…</div>
          <div class="session-row__meta">
            <span class="session-meta-tag">⏱ ${s.duration}</span>
            <span class="session-meta-tag">🎨 ${s.experience}</span>
            ${s.members ? '<span class="session-badge session-badge--members">Members Only</span>' : `<span class="session-badge session-badge--available">${s.sampleSeats}</span>`}
          </div>
        </div>
        <div class="session-row__actions">
          <div class="session-price">${s.price}<span> per seat</span></div>
          <button class="btn btn-sm btn-outline" data-session-detail="${s.id}" style="width: 140px; justify-content: center;">View Session</button>
          <button class="btn btn-sm btn-primary" data-session-detail="${s.id}" style="width: 140px; justify-content: center;">Book Seat →</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-session-detail]').forEach(btn => {
      btn.addEventListener('click', () => SessionDetails.open(btn.dataset.sessionDetail));
    });
  }

  return { render };
})();

/* ============================================================
   SECTION: TOAST
   ============================================================ */

function showToast(message, duration = 3500) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), duration);
}

/* ============================================================
   SECTION: TABS (Generic)
   ============================================================ */

const TabsManager = (() => {
  function init() {
    document.querySelectorAll('[data-tabs]').forEach(tabGroup => {
      const triggers = tabGroup.querySelectorAll('[data-tab]');
      triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          triggers.forEach(t => t.classList.remove('active'));
          trigger.classList.add('active');
          const target = document.getElementById(trigger.dataset.tab);
          const allPanels = tabGroup.querySelectorAll('[data-tab-panel]');
          allPanels.forEach(p => p.style.display = 'none');
          if (target) target.style.display = '';
        });
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: ACCORDION
   ============================================================ */

const AccordionManager = (() => {
  function init() {
    document.querySelectorAll('.accordion-item').forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      const content = item.querySelector('.accordion-content');
      if (!trigger || !content) return;

      trigger.setAttribute('aria-expanded', 'false');
      content.style.maxHeight = '0';
      content.style.overflow = 'hidden';
      content.style.transition = 'max-height 0.3s ease';

      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        // Close siblings
        item.closest('.accordion')?.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'false');
            const sc = sibling.querySelector('.accordion-content');
            if (sc) sc.style.maxHeight = '0';
          }
        });
        trigger.setAttribute('aria-expanded', String(!isOpen));
        content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION: INITIALIZE ALL
   ============================================================ */

function initPage() {
  // Always run
  ThemeManager.init();
  RTLManager.init();
  NavManager.init();
  MobileMenu.init();
  SearchManager.init();
  ScrollReveal.init();
  BackToTop.init();
  ModalManager.init();
  FormValidator.init();
  TabsManager.init();
  AccordionManager.init();
  NewsletterManager.init();

  const body = document.body;
  const page = body.dataset.page;

  // Home
  if (page === 'home') {
    HomeManager.init();
    HomeSessionCards.render('home-sessions');
    SessionDetails.init();
    BookingManager.init();
  }

  // Home 2
  if (page === 'home-2') {
    HomeManager.init();
    TabletopManager.init();
    NightSelector.init();
    JourneyManager.init();
    SessionDetails.init();
    BookingManager.init();
  }

  // Sessions
  if (page === 'sessions') {
    SessionsPageManager.render('sessions-list');
    SessionFilter.init();
    SessionDetails.init();
    BookingManager.init();
    SeatSelector.init();
    ScrollReveal.init();
  }

  // Private Events
  if (page === 'private-events') {
    PrivateEventsManager.init();
  }

  // Membership
  if (page === 'membership') {
    MembershipManager.init();
    BookingManager.init();
  }

  // Contact
  if (page === 'contact') {
    ContactTopics.init();
    ContactManager.init();
  }

  // Login
  if (page === 'login') {
    AuthManager.init();
  }

  // Dashboard
  if (page === 'dashboard') {
    AuthManager.initLogout && AuthManager.init();
    DashboardManager.init();
    NotificationsManager.init();
    UsageManager.init();
    GalleryManager.renderCreations('dash-creations', MEMBER_DATA.pastCreations.slice(0, 4));
    BookingManager.init();
    SessionDetails.init();
  }

  // Bookings
  if (page === 'bookings') {
    AuthManager.init();
    BookingsPage.init();
    BookingManager.init();
  }

  // Membership Usage
  if (page === 'membership-usage') {
    AuthManager.init();
    UsageManager.init();
  }

  // Creations Gallery
  if (page === 'creations') {
    AuthManager.init();
    GalleryManager.renderCreations('creations-gallery', MEMBER_DATA.pastCreations);
    GalleryManager.init();
  }

  // Billing
  if (page === 'billing') {
    AuthManager.init();
    BillingManager.init();
  }

  // Profile
  if (page === 'profile') {
    AuthManager.init();
    ProfileManager.init();
  }

  // Coming Soon
  if (page === 'coming-soon') {
    CountdownManager.init();
  }
}

document.addEventListener('DOMContentLoaded', initPage);


