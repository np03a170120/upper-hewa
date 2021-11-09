$(".main-about-slider").slick({
    infinite: true,
    speed: 900,
    fade: true,
    autoplay: true,
    cssEase: "linear",
    dots: false,
    prevArrow: false,
    nextArrow: false,
});

// $(".center").slick({
//     centerMode: true,
//     centerPadding: "100px",
//     slidesToShow: 3,
//     rows: 1,
//     responsive: [{
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: "40px",
//                 slidesToShow: 3,
//             },
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: "40px",
//                 slidesToShow: 1,
//             },
//         },
//     ],
// });
$(".lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
});