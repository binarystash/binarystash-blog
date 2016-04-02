---
title: "jQuery: Horizontally scroll to the center of a page"
layout: "post"
description: Horizontally scroll to the center of a page using jQuery
permalink: "/2012/09/javascript-horizontally-scroll-to.html"
---

Use this code to horizontally scroll to the center of a page. Replace minWidth with the width of your page.

```javascript
jQuery(window).scrollLeft( (minWidth - jQuery(window).width())/2 )
```