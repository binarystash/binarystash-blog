---
title: "Adding images and descriptions to Wordpress menu items"
layout: "post"
permalink: "/2013/04/adding-images-and-descriptions-to.html"
---

![WP Menu](/images/wpmenu.jpg)

1. Install and activate the [Nav Menu Images](http://wordpress.org/extend/plugins/nav-menu-images/) plugin.
2. Under screen options, check "Description". It will add a "Description" field to your menu items. 
	
	![Screen Options](/images/screenoptions.jpg)

3. In _functions.php_, add the following. 

	```php
	<?php
	class My_Custom_Walker extends Walker_Nav_Menu {
		function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
			global $wp_query;

			$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
			$class_names = $value = '';

			$classes = empty( $item->classes ) ? array() : (array) $item->classes;
			$classes[] = 'menu-item-' . $item->ID;
			$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
			$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

			$id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
			$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

			$output .= $indent . '<li' . $id . $value . $class_names .'>';

			$attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
			$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
			$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
			$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';

			$image = get_the_post_thumbnail( $item->ID, 'full', array( 'alt' => $item->post_content, 'title' => $item->post_content ) );
			
			$title = "<strong>" . $item->title . "</strong>";
			
			$description = "<i>" . $item->post_content . "</i>";
			
			$item_output = $args->before;
			$item_output .= '<a'. $attributes .'>';
			$item_output .= $args->link_before . $image . "<br/>" . $title . "<br/>" . $description . $args->link_after;
			$item_output .= '</a>';
			$item_output .= $args->after;
			
			$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
		}
	}
	?>
	```

4. Then, use the following code to display the menu anywhere in your theme.

	```php
	<?php
		wp_nav_menu( array( 'menu' => 'My Menu', 'walker'=>new My_Custom_Walker() ) );
	?>
	```

5. Make sure that you add images and descriptions to your menu items via 
Appearance -> Menus.

####Credits

Icons courtesy of [DryIcons](http://dryicons.com/)