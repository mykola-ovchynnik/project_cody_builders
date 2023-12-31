//-------------------------------- HEADER ------------------------------//

const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const siteNavLinks = document.querySelectorAll('.site-nav-link');
const navList = document.querySelector('.site-nav__list');
const backdrop = document.querySelector('.backdrop');
const sideMenu = document.getElementById('side-menu');

burgerButton.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
  sideMenu.classList.remove('is-hidden');
});

closeButton.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
  sideMenu.classList.add('is-hidden');
});

backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    backdrop.classList.add('is-hidden');
    sideMenu.classList.add('is-hidden');
  }
});

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1280) {
    burgerButton.classList.remove('is-hidden');
    closeButton.classList.remove('is-hidden');
    backdrop.classList.add('is-hidden');
    sideMenu.classList.add('is-hidden');
  }

  if (screenWidth >= 1280) {
    burgerButton.classList.add('is-hidden');
    closeButton.classList.add('is-hidden');
    sideMenu.classList.remove('is-hidden');
    backdrop.classList.remove('is-hidden');
  }

  siteNavLinks.forEach(siteNavLink => {
    siteNavLink.removeEventListener('click', addIsHidden);

    if (screenWidth < 1280) {
      siteNavLink.addEventListener('click', addIsHidden);
    }
    if (screenWidth >= 1280) {
      siteNavLink.addEventListener('click', removeIsHidden);
    }
  });

  function addIsHidden() {
    backdrop.classList.add('is-hidden');
  }

  function removeIsHidden() {
    backdrop.classList.remove('is-hidden');
  }
}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);

// ****************************************************************************//

//-------------------------------- Privycy Policy ------------------------------//

document.addEventListener('DOMContentLoaded', function () {
  const infoBtns = document.querySelectorAll('.info-open-btn-id');
  const infoBackdrop = document.querySelector('.info-backdrop-id');
  const closeBtn = document.querySelector('.info-close-btn-id');
  const infoModal = document.querySelector('.info-modal');

  const heroContainer = document.querySelector('.hero');

  let scrollPosition = 0;

  infoBtns.forEach(infoBtn => {
    infoBtn.addEventListener('click', () => {
      scrollPosition = window.scrollY;
      scrollToTop();
      openInfoModal();
    });
  });

  closeBtn.addEventListener('click', () => {
    closeInfoModal();
    scrollToPosition();
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openInfoModal() {
    infoBackdrop.style.opacity = '1';
    infoBackdrop.classList.remove('is-hidden');

    // const heroPosition = heroContainer.getBoundingClientRect();
    // infoModal.style.top = `${heroPosition.top}px`;
  }

  function closeInfoModal() {
    infoBackdrop.style.opacity = '0';
    infoBackdrop.classList.add('is-hidden');
  }

  function scrollToPosition() {
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }
});

// ****************************************************************************//

//-------------------------------- Terms of Service ------------------------------//

document.addEventListener('DOMContentLoaded', function () {
  const termsBtn = document.querySelector('.terms-open-btn-id');
  const termsCloseBtn = document.querySelector('.terms-close-btn-id');
  const termsBackdrop = document.querySelector('.terms-backdrop-id');
  const termsModal = document.querySelector('.terms-modal');

  const termsHeroContainer = document.querySelector('hero');

  let scrollPosition = 0;

  termsBtn.addEventListener('click', () => {
    scrollPosition = window.scrollY;
    scrollToTop();
    openTermsModal();
  });

  termsCloseBtn.addEventListener('click', () => {
    closeTermsModal();
    scrollToPosition();
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openTermsModal() {
    termsBackdrop.style.opacity = '1';
    termsBackdrop.classList.remove('is-hidden');
    if (termsHeroContainer) {
      const termsHeroPosition = termsHeroContainer.getBoundingClientRect();
      termsModal.style.top = `${termsHeroPosition.top}px`;
    }
  }

  function closeTermsModal() {
    termsBackdrop.style.opacity = '0';
    termsBackdrop.classList.add('is-hidden');
  }

  function scrollToPosition() {
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }
});

// ****************************************************************************//

//-------------------------------- Loader ------------------------------//

document.addEventListener('DOMContentLoaded', () => {
  const mask = document.querySelector('.mask');
  const loader = document.querySelector('.loader');
  const errorPage = document.querySelector('.page-error-container');

  if (navigator.onLine) {
    mask.style.display = 'none';
    errorPage.style.display = 'none';
  } else {
    mask.style.display = 'none';
    errorPage.style.display = 'block';
    errorPage.style.position = 'fixed';
    errorPage.style.zIndex = '9999999';
    errorPage.style.top = '50%';
    errorPage.style.left = '50%';
    errorPage.style.transform = 'translate(-50%, -50%)';
  }

  window.addEventListener('online', () => {
    mask.style.display = 'none';
    errorPage.style.display = 'none';
  });

  window.addEventListener('offline', () => {
    mask.style.display = 'block';
    loader.style.display = 'none';
    errorPage.style.display = 'block';
    errorPage.style.position = 'fixed';
    errorPage.style.zIndex = '999999999999';
    errorPage.style.top = '50%';
    errorPage.style.left = '50%';
    errorPage.style.transform = 'translate(-50%, -50%)';
  });
});
