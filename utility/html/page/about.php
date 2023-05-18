<?php
require_once '../code/ao.php';
if(!isAjax()){
	echo '<h1>Error 404</h1><p>Sorry, an error occurred while loading content!</p>';
	exit;
}
?>
<h1>About Us</h1>
<p>This is the about us loaded content</p>
<script>
	// alert('About Us Loaded!');
</script>