---
title: "Fix Wordpress mouseover submenus on touch devices"
layout: "post"
permalink: "/2012/10/fix-wordpress-submenus-on-touch-devices.html"
---

On devices running Android and iOS, 'hover' events do not exist so your mouseover-triggered submenus will not work properly.

The following code, which uses jQuery, makes your submenus work. The downside is that the first-level links will not work.

{% highlight javascript %}

jQuery(document).ready( function() {
  if ( is_touch_device() ) {
    jQuery(".menu li").each( function(index,value) {
      if ( jQuery(this).find(".sub-menu").length > 0 ) {
        jQuery(this).children("a").eq(0).click( function(e) {
          e.preventDefault();
        });
      }
    });
  }
});

function is_touch_device() {
  return !!('ontouchstart' in window || window.navigator.msMaxTouchPoints);
}

{% endhighlight %}