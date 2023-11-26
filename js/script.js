const autoSwiper = new Swiper('.auto__swiper', {
  loop: true,
	slidesPerView: 6,
	spaceBetween: 40,

  navigation: {
    nextEl: '.auto__button-next',
    prevEl: '.auto__button-prev',
  },
});


const workSwiper = new Swiper('.work__swiper', {
  loop: true,
	slidesPerView: 1,

  navigation: {
    nextEl: '.work__button-next',
    prevEl: '.work__button-prev',
  },
});