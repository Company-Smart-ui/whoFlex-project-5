var swiper = new Swiper(".HomepageSwiperInit", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    grabCursor:'true',
    pagination: {
      el: "hp-pagination-init",
      clickable: true,
    },
    navigation: {
        nextEl: '.hp-next-init',
        prevEl: '.hp-prev-init',
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView:3,
        spaceBetween: 40,
      },
      1024: {
        grabCursor:false,
        slidesPerView: 4, 
        loop:false, 
        allowTouchMove: false, //switch off on desktop

      },
    },
  });