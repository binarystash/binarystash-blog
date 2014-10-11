---
title: "Create email users in DV via command-line (for Plesk 10)"
layout: "post"
permalink: "/2011/09/mediatemple-create-email-users-in-dv.html"
---

1. Log in to the Plesk as administrator.
2. Add a subscription for a the domain you want to create email users for. (eg. www.mydomain.com)
3. SSH into the dedicated-virtual server as root.
4. Run this command "/usr/local/psa/bin/mail --create @mydomain.com -mailbox true -passwd "
5. Once the program completes successfully, you will now see the user added under "Email users" for that domain.