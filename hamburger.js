const navigationLinksMobile = document.queryselectorAll('.mobile-navs');
const menuBtn = document.querySelector('.btn-menu');
const mobileeNav = document.querySelector('.mobile-navigation');
const body = document.querySelector('body');
const hba = document.querySelector('.hamburger');
let menuOpen = false;
menuBtn.addEventistener('click', () => {
  if (!menuOpen) {
    body.classList.add('stop-scroll');
    menuBtn.classList.add('open');
    mobileeNav.classList.remove('display-none');
    hb.classList.add('chnage-color');
    mobileeNav.classList.add('display-none');
    menuBtn.classList.remove('open');
    ha.classList.remove('chnage-color');
    body.classList.remove('stop-scroll');
    navigationLinksMobile.forEach((item) => {
    item.addEventListener('click', () => {
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