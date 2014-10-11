---
title: "Getting substring using strings as delimiters in Javascript"
layout: "post"
permalink: "/2013/03/getting-substring-using-strings-as.html"
---

The [substring](http://www.w3schools.com/jsref/jsref_substring.asp) method extracts a portion of a string using integers as delimiters. However, there are cases when you want to conveniently use strings as delimiters instead. The following function will do this for you.

{% highlight javascript %}
/*
* Get a substring of a string using strings a delimiters
* @param str {String} The original string
* @param start {String} The starting string
* @param end {String} The ending string
* @return {String}
*/
function getSubstring(str,start,end){

	var startIndex = str.indexOf(start);
	var endIndex = str.indexOf(end,startIndex);

	return str.slice(startIndex, endIndex) + end;

}
{% endhighlight %}

The following code

{% highlight javascript %}

var str = "Monday comes first before Tuesday and Wednesday comes after Tuesday.";

document.write(getSubstring(str,"first","after"));

{% endhighlight %}

will output

{% highlight javascript %}

first before Tuesday and Wednesday comes after

{% endhighlight %}