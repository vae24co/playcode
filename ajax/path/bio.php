<?php
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
	require_once '../app.php';
}
?>
<div class="page">
	<h1>The Biography</h1>
	<p>Hello <?php echo $name; ?>,<br>I would love to write your biography but as it is nice to have you on this is AJAX Biography.<br>Time: <?php echo $time;?></p>
</div>