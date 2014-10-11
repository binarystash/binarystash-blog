---
title: "Automatically opening external links in new window on Wordpress"
layout: "post"
permalink: "/2014/02/opening-external-links-in-new-window.html"
---

The function below makes all external links on posts and pages open in new window. Place it in *functions.php*.

{% highlight php %}
<?php
function open_external_links_in_new_window($content) {

	$doc = new DOMDocument();
	$doc->loadXML("<div>".$content."</div>");
	$links = $doc->getElementsByTagName('a');
	
	$blogurl = get_bloginfo("url");
	$components = parse_url( $blogurl );
	$host = $components["host"];
	
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

	return $doc->saveXML();

}

add_filter( 'the_content', 'open_external_links_in_new_window' );
?>
{% endhighlight %}
