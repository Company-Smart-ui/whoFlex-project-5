const swiper = new Swiper(".MenuSwiperBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor:'true',
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });