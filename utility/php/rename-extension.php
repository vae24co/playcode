<?php
function renameExtension($dir, $oldExtension, $newExtension) {
	// Set the path to the directory containing the files to rename
	// $dir = "/path/to/directory/";

	// Open the directory
	if ($handle = opendir($dir)) {

		// Loop through the files in the directory
		while (false !== ($file = readdir($handle))) {

			// Check if the file is a .$oldExtension file
			if (pathinfo($file, PATHINFO_EXTENSION) == $oldExtension) {

				// Create the new file name with .php extension
				$new_name = pathinfo($file, PATHINFO_FILENAME) . '.'.$newExtension;

				// Rename the file
				rename($dir . $file, $dir . $new_name);
			}
		}

		// Close the directory
		closedir($handle);
	}
	return true;
}


// $o = renameExtension(__DIR__ . '/lab/', 'html', 'php');
// var_dump($o);