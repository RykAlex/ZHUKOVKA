$(document).ready(function () {
  let slide = $(".slide");
  slide.slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: true,
          autoplay: true,
        },
      },
    ],
  });

  $(".prev").on("click", function () {
    slide.slick("slickPrev");
  });
  $(".next").on("click", function () {
    slide.slick("slickNext");
  });
});
