---
title: "Persistent Javascript timeout function"
layout: "post"
permalink: "/2013/03/persistent-javascript-timeout-function.html"
---

The _setTimeout()_ function repeats countdown on each page load. What if you need to set a message to pop up at consistent intervals throughout your site? What if you need to ensure a delayed function only gets executed once in your web app?

Using the function below, you can set persistent timeouts which don't get interrupted by page loads.

Ensure that jQuery and [jQuery Cookie](https://github.com/carhartl/jquery-cookie) are included in your page.

{% highlight javascript %}

/*
* Set a persistent timeout
* @param callbackFunc {Function} The function to call after specified milliseconds
* @param timeout {Number} Number of milliseconds
* @param identifier {String} A required arbitrary string. This must be unique.
* @return {Void}
*/
function setPersistentTimeout( callbackFunc, timeout, identifier ) {
 
	//Set vars
	identifier += "SPT_" + identifier;
	var currentDate = new Date();
	var startDate = currentDate;

	//Check original start date
	if ( jQuery.cookie(identifier) ) {
		startDate = new Date( jQuery.cookie(identifier) );
	}
	else {
		jQuery.cookie(identifier,startDate.toString());
	}

	//Calculate then set the new timeout
	var offset = currentDate.getTime() - startDate.getTime();

	if ( timeout >= offset ) {
		setTimeout( callbackFunc, timeout - offset );
	}

}

{% endhighlight %}

Use it like it is used below.

{% highlight javascript %}
function myFunc() {
	alert("Hello World");
}

setPersistentTimeout( myFunc, 5000, "myFuncInstance1");

{% endhighlight %}

The following function unsets the timeout.

{% highlight javascript %}
/*
* Unset a persistent timeout
* @param identifier {String} The identifier used in setting the timeout
* @return {Void}
*/
function unsetPersistentTimeout(identifier) {
    identifier = "SPT_" + identifier;
    jQuery.removeCookie(identifier);
}

{% endhighlight %}