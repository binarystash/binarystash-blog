---
title: "Wordpress nested queries"
layout: "post"
permalink: "/2013/04/nested-wpquery-loops.html"
---

The WP Codex suggests the following usage for [WP_Query](https://codex.wordpress.org/Class_Reference/WP_Query).

{% highlight php %}
<?php
// The Query
$the_query = new WP_Query( $args );

// The Loop
while ( $the_query->have_posts() ) :
	$the_query->the_post();
	echo '<li>' . get_the_title() . '</li>';
endwhile;

/* Restore original Post Data 
 * NB: Because we are using new WP_Query we aren't stomping on the 
 * original $wp_query and it does not need to be reset.
*/
wp_reset_postdata();
?>
{% endhighlight %}

The code works. However, the *the\_post()* function interferes with the main loop. The code breaks if you add a nested query.

####Nested Queries

Nested queries are useful if you need to display related data (i.e image attachments) for each item returned by the query. Consider the following code.

{% highlight php %}
<?php
$args = array('page_id' => 36);
$query = new WP_Query($args);

//Loop through the result of the first query
foreach ( $query->posts as $post ) :
  
	echo "<pre>";
	var_dump( $post ); 
	echo "</pre>";
	  
	$args2 = array( 
		'post_parent' => $post->ID,
		'post_status' => 'null',
		'post_type'=> 'attachment',
		'post_mime_type' => 'image/jpeg,image/gif,image/jpg,image/png'
	);
	$query2 = new WP_Query($args2);

	//Loop through the result of the nested query
	foreach ( $query2->posts as $post2 ) :
		echo "<pre>";
		var_dump( $post2 );
		echo "</pre>";    
	endforeach;
   
endforeach;
?>
{% endhighlight %}

By looping through the object returned by the query and not relying on *the\_post()* function, we can perform a nested query.