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

    $depth = 0;
    $current_item;

    if ( count( $menu_items) ) {

        foreach( $menu_items as $key=>$menu_item ) {

            $menu_item->submenu = array();
            $parent = $menu_item->menu_item_parent;

            if ( $parent == 0 ) {
                
                $tree[] = $menu_item;
                $current_item = $tree[ ( count($tree) - 1 ) ];
                $depth = 0;

            }
            else {

                $depth++;
                $current_item->submenu[] = $menu_item;
                $current_item = $current_item->submenu[ ( count( $current_item->submenu ) - 1 ) ];

            }

        }

    }

    return $tree;

}

{% endhighlight %}
