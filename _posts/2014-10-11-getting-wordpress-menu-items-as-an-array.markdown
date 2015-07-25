---
title: "Getting Wordpress menu items as an array"
layout: "post"
permalink: "/2014/10/getting-wordpress-menu-items-as-an-array.html"
---

Like *wp\_get\_nav\_menu\_items()*, the following function returns an array of menu items. Additionally, the menu's hierarchy is preserved. 

{% highlight php %}
<?php

/*
 * Returns an array of menu items in nested hierarchy
 *
 * @param $location string - menu location
 *
 * @return array
 */
function get_nav_menu_items_tree( $location ) {

    //Get menu items from specified menu location
    $locations = get_nav_menu_locations();

    if ( !isset( $locations[$location] ) ) { return; }

    $menu = wp_get_nav_menu_object($locations[$location]);
    $menu_items = wp_get_nav_menu_items($menu);


    //Place menu items under their parents
    $tree = array();

    if ( count( $menu_items) ) {
		
		//Add a 'submenu' property to all menu objects
		foreach( $menu_items as &$item ) {
			$item->submenu = array();
		}
		
		//Iterate through the menu items and organize them by parent
		foreach( $menu_items as $item) {
			
			$id = $item->menu_item_parent;
			
			if ( $id == 0 ) {
				$tree[] = $item;
			}
			else {
				$parent = find_nav_item( $id, $tree );
				$parent->submenu[] = $item;
			}
			
		}

    }

    return $tree;

}

/**
 * Accepts output of wp_get_nav_menu_items(),
 * searches for the object with the specified ID,
 * and return a reference to that object
 * 
 * @param $id int - the ID of the menu
 * @param $array array - array outputted by wp_get_nav_menu_items()
 *
 * @return WP_Post
 */
function find_nav_item($id,$array) {
	
	$match = false;

	foreach( $array as $item ) {
		
		if ( $item->ID == $id ) {
			$match = &$item;
		}
		else if ( is_array( $item->submenu ) ) {
			$match = find_nav_item($id, $item->submenu );
		}
		
	}
	
	return $match;
	
}

{% endhighlight %}