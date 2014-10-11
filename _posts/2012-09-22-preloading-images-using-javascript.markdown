---
title: "Preloading images using Javascript"
layout: "post"
permalink: "/2012/09/preloading-images-using-javascript.html"
---

The [Core Framework](http://code.google.com/p/core-framework/) provides a convenient function to preload a list of images before executing your code. It can be used alongside [jQuery](http://jquery.com/).

The following snippet initially hides the images then displays them once they're loaded.

###CSS

{% highlight css %}

img {
	display:none;
}

{% endhighlight %}

####JS

{% highlight javascript %}

Core.preloader.queue([
	'image1.jpg',
	'image2.jpg'
]).preload(function(ui)
{
	jQuery("img").fadeIn();
});

{% endhighlight %}