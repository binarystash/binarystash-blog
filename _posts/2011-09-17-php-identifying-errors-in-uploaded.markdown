---
title: "Identifying errors in uploaded files"
layout: "post"
permalink: "/2011/09/php-identifying-errors-in-uploaded.html"
---

Uploaded files can be processed using the $_FILES variable. For each array inside $_FILES, there is an "error" item whose values range from 0 to 8.  See [file upload error codes](http://php.net/manual/en/features.file-upload.errors.php). This is helpful in debugging missing file uploads.