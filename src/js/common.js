$(document).ready(function () {
	
	// new WOW().init();

	svg4everybody({});

	$('.nav-list').children('li').on('click', function(){
			event.preventDefault();
		if ($(this).hasClass('active')){
			$(this).removeClass('active')
		} else {
			$('.nav-list').children('li').removeClass('active')
			$(this).addClass('active')
		}
		
	})

	Modernizr.on('webp', function(result) {
		if (result) {
			// supported
		} else {
			// not-supported
		}
	});

	// $(".go-top").on("click", function (event) {
	// 	event.preventDefault();
	// 	var id = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body, html').animate({
	// 		scrollTop: top
	// 	}, 350);
	// });
	
	var Slider = new Swiper('.swiper-container', {
		autoplay: true,
		speed: 400,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
});

	// var header = $('.header-mobile'),
	// scrollPrev = 0;
	
	// $(window).scroll(function() {
	// 	var scrolled = $(window).scrollTop();
	
	// 	if ( scrolled > $('.section-halls').offset().top && scrolled > scrollPrev || scrolled < 500) {
	// 		header.removeClass('fixed');
	// 		$('.go-top').addClass('fixed');
	// 	} else {
	// 		header.addClass('fixed');
	// 	}
	// 	if (scrolled < 500) {
	// 		$('.go-top').removeClass('fixed');
	// 	}
	// 	scrollPrev = scrolled;
	// });




})