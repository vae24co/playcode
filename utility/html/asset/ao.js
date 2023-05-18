function loadPage(e, element) {
	e.preventDefault();
	$('.menu-link').removeClass('active');
	$(element).addClass('active');

	var url = $(element).attr('href');
	var page = $(element).attr('page');
	$.ajax({
		url: url,
		success: function (data) {
			$(document).prop('title', page);
			$('#content').html(data);
		},
		error: function () {
			$(document).prop('title', 'Error 404 | '+page);
			$('#content').html('<h1>Error 404</h1><p>Sorry, an error occurred while loading content!</p>');
		}
	});
}