---
title: "What to do if you forget your router's admin panel address (Windows)"
layout: "post"
description: Identify router's admin panel address on Windows
permalink: "/2011/10/networking-what-to-do-if-you-forget.html"
---

1. Open *cmd.exe*.
2. Type *ipconfig*.
3. Find the Default Gateway ( eg. 192.168.1.1 ). This is your router's IP address.
4. If you changed the port to other than 80 and your router runs Linux, telnet to your router. Type your username and password ( eg. username=root and password=admin ).
5. Type *netstat -ltu*.
6. Identify entries whose state is LISTEN. Try the port associated with each entry.