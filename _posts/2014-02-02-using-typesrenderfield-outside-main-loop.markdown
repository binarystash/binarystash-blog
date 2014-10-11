---
title: "Using types_render_field() outside the main Wordpress loop"
layout: "post"
permalink: "/2014/02/using-typesrenderfield-outside-main-loop.html"
---

As of WP Types 1.5.4, _types_render_field()_ can't be readily used outside the main Wordpress loop. If you need to use it outside the main loop, you may refer to the code below. Place it on a template file and adjust the variables.  

{% highlight php %}
<?php
global $post;

$post = get_post($post_id);
types_render_field('custom-field',array());

wp_reset_postdata();
?>
{% endhighlight %}
