<?php
$filename = 'zend.md';
$entry = $_SERVER['PHP_SELF'].' | '.mt_rand(10000, 99999).' | link - '.@$_GET['olink'].' | project - '.@$_GET['oproject']."\n";
$fp = fopen($filename, 'a+');
// if(empty($_GET['olink'])){
$write = fwrite($fp, $entry);
// }
// else {
// 	echo 'Don\'t write. it is a '.@$_GET['olink'];
// }
fclose($fp);
$fp = fopen($filename, 'r');
$content = fread($fp, filesize($filename));
fclose($fp);
echo '<h3>CONTENT</h3>'.nl2br($content);