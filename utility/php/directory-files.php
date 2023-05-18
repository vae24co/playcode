<?php
function listFile($dir, $extension) {
	$name = [];
	// Set the path to the directory
	#$dir = "/path/to/directory/";

	// Get all files with .$extension in the directory
	$files = glob($dir . '*.'.$extension);

	// Loop through the array of files and print their names
	foreach ($files as $file) {
		$name[] = basename($file) . "\n";
	}
	return $name;
}

$lab = __DIR__ . '/lab/';
$o = listFile($lab, 'php');
var_dump($o);