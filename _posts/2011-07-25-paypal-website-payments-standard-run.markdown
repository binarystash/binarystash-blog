---
title: "Paypal Website Payments Standard: Run a remote script on completion"
layout: "post"
permalink: "/2011/07/paypal-website-payments-standard-run.html"
---

When _notify_url_ is set in the HTML form submitted, Paypal will post payment data to the specified URL. For an instance, it's useful for capturing the result of the transaction and storing it in the database.

To see the variables being posted by Paypal, check [Introducing IPN](https://merchant.paypal.com/us/cgi-bin/?cmd=_render-content&content_ID=developer/e_howto_admin_IPNIntro#id091F0M006Y4).