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

	$('form#contactForm').on( "submit",function (event) {
		event.preventDefault();

		$.ajax({
			url: 'http://localhost:4000/mail',
			type: 'POST',
			data:{
				name: $('input#name').val()
			},
			success: function(response){
				console.log('EXITO!!!' + response);
			},
			error: function (error) {
				console.log("FAIL!!! :'(" + error);
			}
		});
	});
});