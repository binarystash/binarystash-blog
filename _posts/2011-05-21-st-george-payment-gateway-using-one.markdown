---
title: "St. George Payment Gateway: Using one merchant account with multiple websites"
layout: "post"
description: Use St. George merchant account with multiple websites
permalink: "/2011/05/st-george-payment-gateway-using-one.html"
---

St. George Australia Payment Gateway currently supports only one _response URL_ per merchant account. This becomes an issue when you have two or more e-commerce websites utilizing the same merchant account.

A workaround is to point the response URL to a script that decides which site to redirect to. The script first gets the POSTed data from St. George. The response data usually contains the following data.

```
Array
(
    [customerReference] => (eg. 1)
    [txnreference] => (eg. 0000000000000000)
    [responseCode] => 00
    [responseText] => APPROVED (TEST TRANSACTION ONLY)
    [amount] => 1.00
)
```

Using the _customerReference_ value, the script redirects to the appropriate site with the response data appended as a GET string.