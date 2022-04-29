var swiper = new Swiper(".card-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".card-slider__pagination",
    clickable: true,
  },
});
