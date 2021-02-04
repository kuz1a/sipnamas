$(document).ready(function() {
    var swiper = new Swiper('.vert_slider', {
        slidesPerView: 1,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});