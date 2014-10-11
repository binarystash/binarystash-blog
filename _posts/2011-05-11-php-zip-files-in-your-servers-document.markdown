---
title: "Zip files in your server's document directory"
layout: "post"
permalink: "/2011/05/php-zip-files-in-your-servers-document.html"
---

1. Create *zip.php* in your server's document directory with the following code.

	```php
	<?php
	$output = shell_exec('zip zipfile.zip *');
	echo "<pre>$output</pre>";
	?>

2. Run the script in your browser (ie. http://www.yoursite.com/zip.php). This should create zipfile.zip which can be downloaded via http://www.yoursite.com/zipfile.zip.

3. If you encounter a "Permission denied" error, temporarily change document directory permissions to 777 then run the script again.