<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Photo Capture</title>
	</head>

	<body>

	<button id="capture-button">Capture Photo</button>

    <div id="image-container"></div>


	</body>
	<script>
$(document).ready(function() {
  $('#capture-button').click(function() {
    navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        var video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        var image = new Image();
        image.src = canvas.toDataURL();
        $('#image-container').append(image);

        stream.getTracks().forEach(function(track) {
          track.stop();
        });
      })
      .catch(function(error) {
        console.log('Error: ' + error);
      });
  });
});

	</script>
	<script src="asset/jquery.js"></script>

</html>