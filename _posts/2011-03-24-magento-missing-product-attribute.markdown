---
title: "Magento: Attribute options empty/missing in product page"
layout: "post"
permalink: "/2011/03/magento-missing-product-attribute.html"
---

I spent "FOUR" hours figuring out why the configurable product attributes in Magento were empty when the they'd been setup properly in the admin panel.

The fact is Magento relies on Javascript to display the dropdown menus. Since my jQuery-based slideshow clashed with Scriptaculous, the dropdowns malfunctioned. It had nothing to do with the product configuration at all.