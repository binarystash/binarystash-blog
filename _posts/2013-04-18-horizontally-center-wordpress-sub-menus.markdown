---
title: "Horizontally center Wordpress sub-menus"
layout: "post"
permalink: "/2013/04/horizontally-center-wordpress-sub-menus.html"
---

The following function will automatically center first-level Wordpress sub-menus. Be sure to include jQuery.

{% highlight javascript %}

function alignSubmenus() {
  jQuery(".menu > li > .sub-menu").each( function() {
  	var linkW = jQuery(this).parent().width();
		var mLeft = (linkW - jQuery(this).width())/2;
		jQuery(this).css("margin-left",mLeft+"px");
	});
}

{% endhighlight %}

