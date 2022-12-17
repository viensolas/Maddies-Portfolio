'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//Scrolling to clicked html element

// const navbarMenu = document.querySelector('.navbar__menu');
// navbarMenu.addEventListener('click', (event)=>{
//   const target = event.target;
//   const link = target.dataset.link;
//   if (link == null){return};
//   const scrollTo = document.querySelector(link);
//   scrollTo.scrollIntoView({behavior: "smooth", block:"start"});
// });

// const $ =(tag)=>document.querySelector(`${tag}`);
// $('.home__contact').addEventListener('click',(e)=>{
//   $('#contact').scrollIntoView({behavior:'smooth'});
// })

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

//scroll to section with menu buttons
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// scroll to contact with home button
const homeContactBttn = document.querySelector('.home__contact');
homeContactBttn.addEventListener('click', (e) => scrollIntoView('#contact'));

// // fading scroll
// const home = document.querySelector('.home__container');
// const homeHeight = home.getBoundingClientRect().height;

// document.addEventListener('scroll', (e) => {
//   const scrollY = window.scrollY;
//   const opacity = (homeHeight - scrollY) / homeHeight;
//   home.style.opacity = opacity;
// });

// fading scroll
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', (e) => {
  const scrollY = window.scrollY;
  const opacity = (homeHeight - scrollY) / homeHeight;
  home.style.opacity = opacity;
});

//show 'arrow up'' button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Handle click on the 'arrow up' button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// work filter
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});
