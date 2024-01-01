const autoSwiper = new Swiper('.auto__swiper', {
  loop: true,
  slidesPerGroup: 1,
	slidesPerView: 6,
	spaceBetween: 40,

  navigation: {
    nextEl: '.auto__button-next',
    prevEl: '.auto__button-prev',
  },
});


const workSwiper = new Swiper('.work__swiper', {
  loop: true,
  slidesPerGroup: 1,
	slidesPerView: 1,
  effect: 'fade',

  navigation: {
    nextEl: '.work__button-next',
    prevEl: '.work__button-prev',
  },
  pagination: {
    el: '.work__swiper-pagination',
  },
});