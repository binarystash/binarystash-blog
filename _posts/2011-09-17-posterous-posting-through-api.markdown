---
title: "Posting through Posterous API"
layout: "post"
permalink: "/2011/09/posterous-posting-through-api.html"
---

Posterous is a blogging platform just like Blogger. It has an API that can be used to perform blogging tasks. Below is a sample code that posts using the API.

```php
<?php
$username = 'my@email.com';
$password = 'my_password';
$api_token = 'my_api_token';
$post_title = "New Title";
$post_body = "Posting through API";
$siteId = 'my_site_id';
$method="post";

$url = "http://posterous.com/api/2/sites/$siteId/posts";

$fields = array(
"api_token"=>$api_token,
"post[title]"=>$post_title,
"post[body]"=>$post_body,
"_method"=>$method
);

$fields_string = '';
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string,'&');

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_USERPWD, $username . ":" . $password);
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_POST,count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);

$m = json_decode( $result );

echo "
";
var_dump($m);
echo "
"; 
?>
```