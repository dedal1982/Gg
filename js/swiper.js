const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    951: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1151: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1421: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperTwo = new Swiper(".swiper-two", {
  slidesPerView: 8,
  direction: "vertical",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-two",
    prevEl: ".swiper-button-prev-two",
  },
});
