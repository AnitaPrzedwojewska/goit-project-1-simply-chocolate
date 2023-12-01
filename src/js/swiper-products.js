// 'use strict'; - włącza tryb strick dla JavaScript
// To jest komentarz. pod spodem piszemy nasz kod JavaScript
// core version + navigation, pagination modules:

const swiper = new Swiper(".swiper-prod", {
  // Optional parameters
  direction: 'horizontal',
    
  loop: false,

  breakpoints: {
    slidesPerView: 1,
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },

  pagination: {
    el: '.swiper-pagination-prod',
    type: 'bullets',
  },
});