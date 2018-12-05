angular.module('app', ['ui.router', 'ui.carousel'])
.run(['Carousel', (Carousel) => {
    Carousel.setOptions({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: 'ease',
        dots: true,

        easing: 'linear',
        fade: false,
        infinite: true,
        initialSlide: 0,

        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    });
}]);