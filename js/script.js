new Swiper(".img-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },
  Keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  slidesPerView: 2.25,
  slidesPerGroup: 1,
  spaceBetween: 20,
  initialSlide: 0,
  // loop: true,
  //   autoplay: true,
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
  },
  // autoHeight: true,
  // thumbs: {
  //   swiper: {
  //     el: ".image-mini-slider",
  //     slidesPerView: 3,
  //   },
  // },
});
