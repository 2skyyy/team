$(document).on('ready', function () {
    $(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3.7,
        slidesToScroll: 3.7
    });

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
});