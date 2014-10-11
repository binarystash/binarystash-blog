---
title: "Displaying the new Google Maps using the classic Google Maps layout"
layout: "post"
permalink: "/2013/12/embedding-new-google-maps-with-classic.html"
---

*New Google Maps*:

![New Google Maps](/images/new.jpg)


*Classic Google Maps*:

![Classic Google Maps](/images/old.jpg)

You can display the new Google Maps using the classic Google Maps layout by following the steps below.

1. On the new Google Maps, click the folder icon below the name of your map and choose "Export to KML".
2. A new window will open and a file downloads. Copy the source URL of the downloaded file.
3. In the following code, replace <kml> with the source URL in step 2. Paste the code on your webpage.

{% highlight html %}
<iframe src="http://maps.google.com/maps?q=<kml>&output=embed" width="500" height="500"></iframe>
{% endhighlight %}
