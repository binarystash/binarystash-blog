---
title: "Preloading flash using javascript"
layout: "post"
permalink: "/2012/10/preloading-flash-using-javascript.html"
---

Sometimes, you need flash to start playing *only* after all the content in the page has loaded. The script below demonstrates how to do this using pure javascript; without the use of *ExternalInterface*.

####Requirements
1. jQuery
2. [swfobject](http://code.google.com/p/swfobject)

####Reminders

* Always make sure that the dimensions (height and width) of the flash within the *object* tag are set to 0.
* Embedding flash files causes your page to fail W3C validation.
* If your flash animation has a preloader, the preloader will be bypassed.

####Code

{% highlight html %}

<!DOCTYPE html>
<html>
<head>
	<title>Flash Preloading</title>
	<meta charset="utf-8"/>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/swfobject.js"></script>
	<script type="text/javascript">
		jQuery(window).load( function() {
			var flashvars = {},
			params = {wmode:"transparent"},
			attributes = {};
			swfobject.embedSWF("flash.swf","flash","983", "435", "8","",flashvars,params,attributes);
		});
	</script>
	<style type="text/css">
		body {
			background:#000;
		}
	</style>
</head>
<body>
	<div id="flashpreloader">
		<object 
			classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" 
			codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" 
			width="0" 
			height="0" 
			id="mymoviename"
		> 
			<param name="movie" value="flash.swf" /> 
			<param name="quality" value="high" /> 
			<param name="bgcolor" value="#000" /> 
			<embed 
				src="flash.swf" 
				quality="high" 
				bgcolor="#000"
				width="0" 
				height="0" 
				name="mymoviename" 
				align="" 
				type="application/x-shockwave-flash" 
				pluginspage="http://www.macromedia.com/go/getflashplayer"> 
			</embed> 
		</object>
	</div>
	<div id="flash"></div>
	<div>
		<img src="image.jpg" alt=""/>
		<img src="image2.jpg" alt=""/>
	</div>
</body>
</html>


{% endhighlight %}