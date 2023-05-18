<!DOCTYPE html>
<html>

	<head>
		<title>jQuery Powered</title>
		<script src="asset/jquery.js"></script>
		<link href="asset/ui.css" rel="stylesheet" type="text/css">
	</head>

	<body>
		<nav>
			<a href="#" onclick="loadContent('page/home.php')">Home</a>
			<a href="#" onclick="loadContent('page/about.php')">About</a>
			<a href="#" onclick="loadContent('page/contact.php')">Contact</a>
		</nav>
		<div id="content"></div>
		<div id="loading">
			<img src="asset/spinner.gif" alt="Loading...">
		</div>


		<script>
			function loadContent(page, contentArea = 'content') {
				// $('#loading').show();
				setTimeout(function () {
					$('#' + contentArea).load(page, function () {
						// $('#loading').hide();
					});
				}, 20);
			}
		</script>
	</body>

</html>