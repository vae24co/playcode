<?php
function numberToWords($number) {
  // Define arrays for words and separators
	$ones = array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
	$tens = array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
	$separators = array('', ' thousand ', ' million ', ' billion ', ' trillion ');

  // Convert the number to an array of chunks of 3 digits
	$chunks = str_split(strrev($number), 3);
	$words = array();

  // Loop through each chunk and convert it to words
	for ($i = 0; $i < count($chunks); $i++) {
		$chunk = strrev($chunks[$i]);
		$chunkWords = array();

    // Convert the hundreds place to words
		if (isset($chunk[2]) && $chunk[2] != '0') {
			$chunkWords[] = $ones[$chunk[2]] . ' hundred';
		}

    // Convert the tens and ones places to words
		if (isset($chunk[1])) {
			if ($chunk[1] == '1') {
				$chunkWords[] = $ones[$chunk[1] . $chunk[0]];
			} else {
				if ($chunk[1] != '0') {
					$chunkWords[] = $tens[$chunk[1]];
				}
				if ($chunk[0] != '0') {
					$chunkWords[] = $ones[$chunk[0]];
				}
			}
		} else {
			if ($chunk[0] != '0') {
				$chunkWords[] = $ones[$chunk[0]];
			}
		}

    // Add the separator if the chunk is not zero
		if (implode('', $chunkWords) != '') {
			$chunkWords[] = $separators[$i];
		}

    // Add the chunk words to the words array
		$words = array_merge($chunkWords, $words);
	}

  // Replace the last separator with "and" if there are more than 1 chunks and the last chunk is not zero
	if (count($chunks) > 1 && $chunks[0] != '000') {
		$lastSeparatorPos = count($words) - count($separators);
		$words[$lastSeparatorPos] = ' and ';
	}

  // Join the words array and return the result
	return implode('', $words);
}




$words[] = numberToWords(7);
$words[] = numberToWords(12);
$words[] = numberToWords(215);
$words[] = numberToWords(2012);
$words[] = numberToWords(22000);
$words[] = numberToWords(10200030);


// one hundred million, two hundred thousand and thirty
$words[] = numberToWords(100200030);

// one hundred and twenty-three million, four hundred and fifty-six thousand, seven hundred and eighty-nine
$words[] = numberToWords(123456789);
echo '<pre><tt>'.var_export($words, true).'</tt></pre>';
?>