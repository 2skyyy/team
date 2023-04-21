$(document).on('ready', function () {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    })

    ;$(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 1800,
            settings: {
                slidesToShow:3
            } 
        },
        { 
            breakpoint: 1300,
            settings: {	
                slidesToShow:2 
            } 
        },
        { 
            breakpoint: 930,
            settings: {	
                slidesToShow:1
            } 
        }
    ]
    });

    $(".regular").slick({
        infinite: true,
        slidesToShow: 6.28,
        slidesToScroll: 1
    });
});

