---
title: "Safely generate an XML document"
layout: "post"
permalink: "/2013/03/safely-generate-xml-document.html"
---

If you need to safely generate an XML document in PHP, you may use the [DOMDocument](http://www.php.net/manual/en/book.dom.php) class. You may refer to the code below.

{% highlight php %}
<?php

//Create DOMDocument object
$domtree = new DOMDocument('1.0', 'UTF-8');
$xmlRoot = $domtree->createElement("xml");
$domtree->appendChild($xmlRoot);

//Create an element and set an attribute
$organism = $domtree->createElement("human","Joe");
$organism->setAttribute("eyecolor","black");
$xmlRoot->appendChild( $organism );

//Serve XML
header('Content-Type: text/xml');
echo $domtree->saveXML();

?>
{% endhighlight %}