$(document).on('ready', function () {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    })

    ;$(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $(".regular").slick({
        infinite: true,
        slidesToShow: 6.28,
        slidesToScroll: 1
    });
});

