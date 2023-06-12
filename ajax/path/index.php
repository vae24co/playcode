<?php
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
	require_once '../app.php';
}
?>
<div class="page">
	<h1>The Home</h1>
	<p>Hello <?php echo $name; ?>,<br>It is nice to have you on this is AJAX Home.<br>Time: <?php echo $time; ?></p>
</div>