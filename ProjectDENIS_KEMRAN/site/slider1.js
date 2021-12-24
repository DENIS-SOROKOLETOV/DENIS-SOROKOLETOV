$('.slider1').slick({
	arrows: false,
	draggable:true,
	slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 1000,
	responsive:[
		{
		breackpoint:767,
		settings: {

			slidesToShow: 3,
			slidesToScroll: 1,

		}
	}
	],
	mobileFirst:true,
});
	