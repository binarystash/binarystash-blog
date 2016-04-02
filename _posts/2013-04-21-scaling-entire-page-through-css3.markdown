---
title: "Scaling an entire page through CSS3"
layout: "post"
descripton: Auto-fit an entire page within the window using CSS3
permalink: "/2013/04/scaling-entire-page-through-css3.html"
---

![alt text for image](/images/thumb.jpg)

The function below scales an entire page in a way similar to how touch devices shrink a page to fit the screen. It uses CSS3 so most modern browsers should be compatible with it. It is experimental so make sure that you thoroughly test your pages if you use it.

{% highlight javascript %}
/*
 * Scale a page using CSS3
 * @param minWidth {Number} The width of your wrapper or your page's minimum width.
 * @return {Void}
 */

function scalePage(minWidth) {

    //Check parameters
    if (minWidth == "") {
        console.log("minWidth not defined. Exiting");
        return;
    }

    //Do not scale if a touch device is detected.
    if (isTouchDevice()) {
        return;
    }

    //The 'body' tag should always be the parent element.
    var parentElem = "body";

    //Wrap content to prevent long vertical scrollbars
    jQuery(parentElem).wrapInner("<div id='resizer-boundary'/>");
    jQuery("#resizer-boundary").wrapInner("<div id='resizer-supercontainer'/>");

    var boundary = jQuery("#resizer-boundary");
    var superContainer = jQuery("#resizer-supercontainer");

    //Get current dimensions of content
    var winW = jQuery(window).width();
    var docH = jQuery(parentElem).height();

    scalePageNow();
    jQuery(window).resize(scalePageNow);

    //Nested functions

    function scalePageNow() {
        //Defining the width of 'supercontainer' ensures that content will be
        //centered when the window is wider than the original content.
        //Comment the following line if you need to enable the conditionals below.
        superContainer.width(minWidth);

        //Get the width of the window
        winW = jQuery(window).width();

        //Uncomment conditionals if content must be scaled only when content is wider 
        //than the window.
        //if ( winW < minWidth ) {
        var newWidth = winW / minWidth; //percentage
        var newHeight = (docH * (newWidth * minWidth)) / minWidth; //pixel
        superContainer.css({
            "transform": "scale(" + newWidth + ")",
            "transform-origin": "0 0",
            "-ms-transform": "scale(" + newWidth + ")",
            "-ms-transform-origin": "0 0",
            "-moz-transform": "scale(" + newWidth + ")",
            "-moz-transform-origin": "0 0",
            "-o-transform": "scale(" + newWidth + ")",
            "-o-transform-origin": "0 0",
            "-webkit-transform": "scale(" + newWidth + ")",
            "-webkit-transform-origin": "0 0"
        });

        boundary.css({
            "position": "relative",
            "overflow": "hidden",
            "height": newHeight + "px"
        });

/*}
    else {
      
     superContainer.css({
      "transform":"scale("+newWidth+")",
      "transform-origin":"0 0",
      "-ms-transform":"scale("+newWidth+")",
      "-ms-transform-origin":"0 0",
      "-moz-transform":"scale(1,1)",
      "-moz-transform-origin":"0.5 0.5",
      "-o-transform":"scale(1,1)",
      "-o-transform-origin":"0.5 0.5",
      "-webkit-transform":"scale(1,1)",
      "-webkit-transform-origin":"0.5 0.5"
     });
      
     boundary.css({
      "position":"relative",
      "overflow":"visible",
      "height":"auto"
     });
    }*/
    }

    function isTouchDevice() {
        return !!('ontouchstart' in window || window.navigator.msMaxTouchPoints);
    }
}

{% endhighlight %}

####Known Limitations
* _select menus_ in the page will not appear where they should be on Firefox after scaling. This is a known [Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=628387).
* The function is prevented from running on touch devices.
* An image background applied to the body tag will not be shrunk.