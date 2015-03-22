---
title: "Replace every nth instance of a string in a string using php"
layout: "post"
permalink: "/2015/03/replacing-every-nth-instance-of-a-string-in-a-string-using-php.html"
---

Similar to [str_replace()](https://php.net/manual/en/function.str-replace.php), the following function replaces all instances of a string within a string. It also allows you to define an interval for doing the replacements. 

{% highlight php %}
<?php
/*
 * Replace every case-sensitive nth instance of a string in a string
 * 
 * @param string $search - the value being searched for
 * @param string $replace - the replacement value
 * @param string $subject - the string to search in
 * @param int $nth - replacement interval (optional)
 * @param int $count - number of replacements performed (optional)
 *
 * @return string
 *
 */
function str_replace_nth( $search, $replace, $subject, $nth=1, $count=null ) {
	
	$pieces = explode( $search, $subject );
	$updated_string = "";
	$replaced = 0; 
	
	if ( !$nth ) { return $subject; }
	
	foreach( $pieces as $i=>$piece ) {
		
		if ( $i == 0 ) {
			if ( $piece == "" && $nth == 1 ) {
				if ( $count === null || $replaced < $count ) {
					$updated_string .= $replace . $piece;
				}
				$replaced++;
			}
			else {
				$updated_string .= $piece;
			}
		}
		else {
			if ( $i % $nth == 0 ) {
				if ( $count === null || $replaced < $count ) {
					$updated_string .= $replace . $piece;
				}
				else {
					$updated_string .= $search . $piece;
				}
				$replaced++;
			}
			else {
				$updated_string .= $search . $piece;
			}
		}
		
	}
	
	return $updated_string;
	
}
?>
{% endhighlight %}
