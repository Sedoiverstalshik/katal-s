const swiper = new Swiper('.auto__swiper', {
  loop: true,
	slidesPerView: 6,
	spaceBetween: 40,

  navigation: {
    nextEl: '.auto__button-next',
    prevEl: '.auto__button-prev',
  },
});