const swiper = new Swiper(".prod-slide-content", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
    
  breakpoints: {
    slidesPerView: 1,
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 18
    }
  },

  // If we need pagination
  pagination: {
      el: ".swiper-pagination",
      type: 'bullets',   
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// var swiper = new Swiper(".prod-slide-content", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
