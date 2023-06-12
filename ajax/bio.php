<?php include 'app.php'; ?>
<!DOCTYPE html>
<html lang="en">
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>AJAX Bio</title>
	<script type="text/javascript" src="asset/jquery.js"></script>
	<link rel="stylesheet" href="asset/main.css">
	<script type="text/javascript" src="asset/main.js"></script>
	</head>

	<body>
		<div class="navigation">
			<a href="index.php">Home</a> |
			<a href="bio.php">Bio</a>
		</div>
		<div id="container">
			<?php include 'path/bio.php'; ?>
		</div>
	</body>

</html>