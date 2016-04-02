---
title: "Automatically opening external links in new window on Wordpress"
layout: "post"
description: Identify external links and open them in new windows
permalink: "/2014/02/opening-external-links-in-new-window.html"
---

The function below makes all external links on posts and pages open in new window. Place it in *functions.php*.

Alternatively, get it as a [Wordpress plugin](https://github.com/binarystash/wp-outside-links-in-new-tabs).

{% highlight php %}
<?php
function open_external_links_in_new_window($content) {

	$doc = new DOMDocument();
	$doc->loadHTML("<div>".$content."</div>");
	$links = $doc->getElementsByTagName('a');
	
	$blogurl = get_bloginfo("url");
	$components = parse_url( $blogurl );
	$host = $components["host"];
	
	/* Set target attribute of all external links to "_blank" */
	
	foreach( $links as $link ) {

		$href = $link->getAttribute("href");
		$components = parse_url( $href );

		if( !isset( $components["host"] ) ) {
			continue;
		}

		if ( $components["host"] != $host ) {
			$link->setAttribute("target","_blank");
		}

	}
	
	/*
	 * Extract the HTML fragment.
	 * Credits: http://stackoverflow.com/questions/29493678/loadhtml-libxml-html-noimplied-on-an-html-fragment-generates-incorrect-tags
	 */
	
	$temporary_wrapper = $doc->getElementsByTagName('div')->item(0);
	$temporary_wrapper = $temporary_wrapper->parentNode->removeChild($temporary_wrapper);
	
	while ($doc->firstChild) {
		$doc->removeChild($doc->firstChild);
	}

	while ($temporary_wrapper->firstChild ) {
		$doc->appendChild($temporary_wrapper->firstChild);
	}
	
	/* Return HTML */
	
	return trim($doc->saveHTML());

}

add_filter( 'the_content', 'open_external_links_in_new_window' );
?>
{% endhighlight %}
