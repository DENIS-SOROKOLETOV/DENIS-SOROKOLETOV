$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		draggable:false,
		slidesToShow:1,
		count: true,
		responsive:[
		{
			breackpoint:767,
			settings: {

			}
		}
		],
		mobileFirst:true,
	});


});
