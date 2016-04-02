---
title: "Fixing WP ShareThis Facebook Like button on IE8"
layout: "post"
description: Fix WP ShareThis Like button on IE8
permalink: "/2013/05/fixing-wp-sharethis-facebook-like.html"
---

[WP ShareThis](http://wordpress.org/plugins/share-this/) adds social media buttons to Wordpress posts and pages. However, as of version 6.0, the Facebook Like button doesn't appear on IE8. The code below serves as a temporary fix. Simply add it to your theme's _functions.php_.

```php
<?php
if (get_option('st_add_to_content') != 'no' || get_option('st_add_to_page') != 'no') {
	remove_filter('the_content', 'st_add_widget');
	remove_filter('get_the_excerpt', 'st_remove_st_add_link',9);
	remove_filter('the_excerpt', 'st_add_widget');

	add_filter('the_content', 'st_add_widget_fixed');
	add_filter('get_the_excerpt', 'st_remove_st_add_link',9);
	add_filter('the_excerpt', 'st_add_widget_fixed');
}

function st_add_widget_fixed($content) {
	if ((is_page() && get_option('st_add_to_page') != 'no') || (!is_page() && get_option('st_add_to_content') != 'no')) {
		if (!is_feed()) {
			return $content.'<div>'.st_makeEntries().'</div>';
		}
	}

	return $content;
}
?>
```