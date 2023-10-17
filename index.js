const body = document.querySelector('body')
const hamburger = document.querySelector('.hamburger')
const tabHeaderNav = document.querySelector('.header__nav')
const tabHeaderList = document.querySelector('.nav__list')
const tabNavLink = document.querySelectorAll('.nav__link')
const footerGithubLink = document.querySelector('.github')
const projects = document.querySelector('.projects')
const projectsLinks = document.querySelectorAll('.projects__link')


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  tabHeaderNav.classList.toggle('header__nav-is-active');
  tabHeaderList.classList.toggle('nav__list-is-active');
  body.classList.toggle('body-is-active');
});

tabNavLink.forEach((el) => {
  el.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    tabHeaderNav.classList.remove('header__nav-is-active');
    tabHeaderList.classList.remove('nav__list-is-active');
    body.classList.remove('body-is-active');
  });
})

