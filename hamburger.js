const navigationLinksMobile = document.querySelectorAll('.mobile-navs');
const menuBtn = document.querySelector('.btn-menu');
const mobileeNav = document.querySelector('.mobile-navigation');
const hba = document.querySelector('.hamburger');
// =======================================================================
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    mobileeNav.classList.remove('display-none');
    hba.classList.add('chnage-color');
    navigationLinksMobile.forEach((item) => {
      item.addEventListener('click', () => {
        mobileeNav.classList.add('display-none');
        menuBtn.classList.remove('open');
        hba.classList.remove('chnage-color');
        menuOpen = false;
      });
    });
    menuOpen = true;
  } else if (menuOpen) {
    menuBtn.classList.remove('open');
    mobileeNav.classList.add('display-none');
    hba.classList.remove('chnage-color');
    menuOpen = false;
  }
});