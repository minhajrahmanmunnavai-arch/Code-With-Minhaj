/**
 * Main Application Script
 * Vanilla JavaScript implementation
 */

import { 
  initPageLoadSequence, 
  initScrollReveal, 
  initStatsCounters, 
  initSkillBars, 
  initTimelineScroll, 
  initBackToTop 
} from './animations.js';

import { 
  projectsData, 
  renderProjects, 
  setupProjectFilters, 
  setupProjectModal 
} from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle Management
  initThemeToggle();

  // 2. Sticky Navbar & Active Section Indicator
  initNavigation();

  // 3. Mobile Hamburger Menu
  initMobileMenu();

  // 4. Render Project Showcase & Filters
  const projectsContainer = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (projectsContainer) {
    renderProjects(projectsContainer, projectsData);
    setupProjectFilters(filterButtons, projectsContainer);
    setupProjectModal();
  }

  // 5. Scroll Animations & Reveal Triggers
  initPageLoadSequence();
  initScrollReveal();
  initStatsCounters();
  initSkillBars();
  initTimelineScroll();
  initBackToTop();

  // 6. Interactive Contact Form with Validation
  initContactForm();
});

/**
 * Dark / Light Theme Manager
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const html = document.documentElement;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  if (isDark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  function toggleTheme() {
    const isNowDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
    updateThemeIcons(isNowDark);
  }

  function updateThemeIcons(isCurrentDark) {
    const icons = document.querySelectorAll('.theme-icon-sun, .theme-icon-moon');
    icons.forEach(icon => {
      if (icon.classList.contains('theme-icon-sun')) {
        icon.style.display = isCurrentDark ? 'block' : 'none';
      } else if (icon.classList.contains('theme-icon-moon')) {
        icon.style.display = isCurrentDark ? 'none' : 'block';
      }
    });
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
  updateThemeIcons(isDark);
}

/**
 * Navigation Bar Controller (Sticky & Active Links)
 */
function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect on navbar
  function handleNavScroll() {
    if (window.scrollY > 24) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Active section tracking with IntersectionObserver
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    });

    sections.forEach(sec => sectionObserver.observe(sec));
  }
}

/**
 * Mobile Hamburger Menu Controller
 */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn || !mobileDrawer) return;

  function toggleMenu() {
    const isOpen = mobileDrawer.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mobileDrawer.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * Contact Form Validation & State
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const successBanner = document.getElementById('contact-success-banner');
  const resetBtn = document.getElementById('contact-reset-btn');

  if (!form || !submitBtn) return;

  const fields = {
    name: {
      el: document.getElementById('contact-name'),
      errEl: document.getElementById('error-name'),
      validate: (val) => val.trim().length >= 2,
      msg: 'Please provide a valid name (at least 2 characters).'
    },
    email: {
      el: document.getElementById('contact-email'),
      errEl: document.getElementById('error-email'),
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      msg: 'Please provide a valid email address.'
    },
    subject: {
      el: document.getElementById('contact-subject'),
      errEl: document.getElementById('error-subject'),
      validate: (val) => val.trim().length >= 3,
      msg: 'Subject must be at least 3 characters.'
    },
    message: {
      el: document.getElementById('contact-message'),
      errEl: document.getElementById('error-message'),
      validate: (val) => val.trim().length >= 10,
      msg: 'Please enter a message of at least 10 characters.'
    }
  };

  // Real-time validation on input
  Object.keys(fields).forEach(key => {
    const item = fields[key];
    if (!item.el) return;

    item.el.addEventListener('input', () => {
      if (item.errEl.textContent) {
        if (item.validate(item.el.value)) {
          item.errEl.textContent = '';
          item.el.classList.remove('border-red-500');
        }
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate all fields
    Object.keys(fields).forEach(key => {
      const item = fields[key];
      if (!item.el) return;

      const val = item.el.value;
      if (!item.validate(val)) {
        item.errEl.textContent = item.msg;
        item.el.classList.add('border-red-500');
        isValid = false;
      } else {
        item.errEl.textContent = '';
        item.el.classList.remove('border-red-500');
      }
    });

    if (!isValid) return;

    // Loading State
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="btn-spinner" aria-hidden="true"></span>
      <span>Sending Message...</span>
    `;

    // Simulated network response
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;

      // Show success message
      form.classList.add('hidden');
      if (successBanner) {
        successBanner.classList.remove('hidden');
      }
      form.reset();
    }, 1200);
  });

  if (resetBtn && successBanner) {
    resetBtn.addEventListener('click', () => {
      successBanner.classList.add('hidden');
      form.classList.remove('hidden');
    });
  }
}
