$(document).ready(function () {

	// Activate ScrollSpy
	$('body').scrollspy({
		target: '.navbar-custom',
		offset: 51
	});

	// Enable easing plugin
	/* Since the links are appended dynamically to the page,
	 * we need to use document.on() to capture the click events.*/
	$(document).on('click', '.page-scroll a', function (event) {
		event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
	});

});