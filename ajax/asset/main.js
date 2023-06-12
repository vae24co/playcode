$(document).ready(function() {
  $('.navigation a').click(function(e) {
    e.preventDefault(); // Prevent default link behavior

		var url = $(this).attr('href'); // Get the URL from the clicked link
		var path_url = 'path/'+url;
    var pageTitle = $(this).text(); // Get the page title from the clicked link

    // Remove active class from all navigation links except the clicked one
    $('.navigation a').not(this).removeClass('active');

    // Add active class to the clicked link
    $(this).addClass('active');

    // Create overlay div with spinner
    var $overlay = $('<div id="overlay"><div class="spinner"><img src="asset/loader.gif" alt="Loading..." /></div></div>');

    // Append overlay to the body
    $('body').append($overlay);

    // Apply blur effect to the container
    $('#container').addClass('blur');

    $.ajax({
      url: path_url, // URL to fetch the content from
      type: 'GET', // HTTP method
      dataType: 'html', // Expected data type
      success: function(response) {
        $('#container').html(response); // Update the #container with the retrieved content
        history.pushState({ page: url }, pageTitle, url); // Update the address bar URL
        document.title = pageTitle; // Update the page title
      },
      error: function(xhr, status, error) {
        console.log('An error occurred: ' + error); // Log any errors to the console
        $('#container').html('<p>Error loading content.</p>'); // Display error message
      },
      complete: function() {
        // Remove overlay and blur effect after the AJAX request is complete
        $overlay.remove();
        $('#container').removeClass('blur');
      }
    });
  });
});
