function ajaxNavigation() {
	$(document).ready(function() {
		$('nav a').click(function(e) {
			e.preventDefault();

			var url = $(this).attr('href');
			var page = './page/'+url+'.php';

      // Add loading message to the content area
			$('#content').html('Loading...');

			$.ajax({
				url: page,
				success: function(data) {
					$('#content').html(data);
					window.history.pushState(null, null, url);
				}
			});
		});

		$(window).on('popstate', function() {
			var url = location.pathname;

      // Add loading message to the content area
			$('#content').html('Loading...');

			$.ajax({
				url: page,
				success: function(data) {
					$('#content').html(data);
				}
			});
		});
	});
}


// Call the function to initialize AJAX navigation
ajaxNavigation();