$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ],
  });
});
