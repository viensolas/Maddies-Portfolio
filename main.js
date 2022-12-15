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

// fading scroll
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', (e) => {
  const scrollY = window.scrollY;
  const opacity = (homeHeight - scrollY) / homeHeight;
  home.style.opacity = opacity;
});
