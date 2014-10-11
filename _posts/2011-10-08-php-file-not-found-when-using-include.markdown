---
title: "File not found when using include() via command line"
layout: "post"
permalink: "/2011/10/php-file-not-found-when-using-include.html"
---

Suppose you include a file using a relative path.

```php
<?php
include "../directory/file.php";
?>
```

If you run your PHP script via command line, you may get the following error.

```html
Warning: include(): Failed opening '../directory/file.php' for inclusion
```

This is caused by the fact that PHP doesn't automatically change the directory to the directory of the executed file when using the command line. To fix this, use:

```php
<?php
$current_directory = dirname(__FILE__);
chdir( $current_directory );

include "../directory/file.php"; 
?>
```