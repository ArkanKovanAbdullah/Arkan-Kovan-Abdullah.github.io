const navigationLinksMobile = document.querySelectorAll('.mobile-navs');
const menuBtn = document.querySelector('.btn-menu');
const mobileeNav = document.querySelector('.mobile-navigation');
const body = document.querySelector('body');
const hba = document.querySelector('.hamburger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    body.classList.add('stop-scroll');
    menuBtn.classList.add('open');
    mobileeNav.classList.remove('display-none');
    hba.classList.add('chnage-color');
    navigationLinksMobile.forEach((item) => {
      item.addEventListener('click', () => {
        mobileeNav.classList.add('display-none');
        menuBtn.classList.remove('open');
        hba.classList.remove('chnage-color');
        body.classList.remove('stop-scroll');
        menuOpen = false;
      });
    });
    menuOpen = true;
  } else if (menuOpen) {
    menuBtn.classList.remove('open');
    mobileeNav.classList.add('display-none');
    hba.classList.remove('chnage-color');
    body.classList.remove('stop-scroll');
    menuOpen = false;
  }
});