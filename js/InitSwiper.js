var galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,
    loopAdditionalSlides: 7,
    spaceBetween: 10,

});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    loop: true,
    loopAdditionalSlides: 7,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;