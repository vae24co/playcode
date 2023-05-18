<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Counter JS</title>
		<script>
		function Counter(counter) {
			var elem = document.getElementById('seconds-counter');
			var myCounter = setInterval(function() {
				++counter;
				elem.innerText = counter + ' seconds';
			}, 1000);

			// clearInterval(myCounter);
		}
		</script>
		<style>
		#seconds-counter {
			color: tan;
		}
		</style>
	</head>

	<body>
		<div>You've been here for <span id='seconds-counter'><a href="javascript:void(0)" onclick="Counter(0);">Start Counter</a></span></div>
	</body>

</html>