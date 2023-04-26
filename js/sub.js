$(document).on('ready', function () {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true
    })

    ;$(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 1800,
            settings: {
                slidesToShow:3
            } 
        },
        { 
            breakpoint: 1200,
            settings: {	
                slidesToShow:2
            } 
        },
        { 
            breakpoint: 1000,
            settings: {	
                slidesToShow:1
            } 
        }
    ]
    });

    // $(".regular").slick({
    //     infinite: true,
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     autoplay: true,
    // });

    $(".v4slider").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 1500,
            settings: {
                slidesToShow:3
            } 
        },
        { 
            breakpoint: 900,
            settings: {	
                slidesToShow:1
            } 
        }
    ]
    });



});

