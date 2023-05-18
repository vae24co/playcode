<!DOCTYPE html>
<html>

	<head>
		<title>AJAX Powered</title>
		<script src="asset/jquery.js"></script>
		<link href="asset/ui.css" rel="stylesheet" type="text/css">
	</head>

	<body>

		<nav>
			<ul>
				<li><a href="page/home.php" class="menu-link" onclick="loadPage(event, this)" page="Home">Home</a></li>
				<li><a href="page/about.php" class="menu-link" onclick="loadPage(event, this)" page="About">About</a></li>
				<li><a href="page/contact.php" class="menu-link" onclick="loadPage(event, this)" page="Contact">Contact</a></li>
			</ul>
		</nav>
		<?php echo '<pre>' . var_export($_GET, true) . '</pre>'; ?>
		<div id="content"></div>

		<script src="asset/ao.js"></script>
	</body>

</html>