$(document).ready(function () {
	
	// read the text of an element (get)
	console.log($('h1').text());
	// modify text (set)
	$('h1').text('Starting with jQuery');
	// manipulate DOM adding a new element
	$( "<p>New element with jQuery</p>" ).appendTo('h1');

	// Activate ScrollSpy
	$('body').scrollspy({
		target: '.navbar-custom',
		offset: 51
	});

	// Enable easing plugin
    $('.page-scroll a').bind('click', function(event) {
        event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
    });

	$('form#contactForm').on( "submit",function (event) {
		event.preventDefault();

		$.ajax({
			url: 'http://localhost:4000/mail',
			type: 'POST',
			data:{
				name: $('input#name').val()
			},
			success: function(response){
				console.log('SUCCESS!!!' + response);
				// Enable button & show success message
	            $("#btnSubmit").attr("disabled", false);
	            $('#form-result').html("<div class='alert alert-success'>");
	            $('#form-result > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	                .append("</button>");
	            $('#form-result > .alert-success')
	                .append("<strong>Your message has been sent. </strong>");
	            $('#form-result > .alert-success')
	                .append('</div>');

	            //clear all fields
	            $('#contactForm').trigger("reset");
			},
			error: function (error) {
				console.log("FAIL!!! :'(" + error);
				// Fail message
                $('#form-result').html("<div class='alert alert-danger'>");
                $('#form-result > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#form-result > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!");
                $('#form-result > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
			}
		});
	});
});