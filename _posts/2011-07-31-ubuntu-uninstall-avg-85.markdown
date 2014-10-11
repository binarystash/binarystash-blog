---
title: "Ubuntu: Uninstall AVG 8.5"
layout: "post"
permalink: "/2011/07/ubuntu-uninstall-avg-85.html"
---

1. Open the command line.
2. Type _sudo -i_. Enter your password.
3. Type _gedit /var/lib/dpkg/info/avg85flx.prerm_. Replace the lines saying _invoke-rc.d avgd stop_ with _echo 'stop'_. Save changes then close gedit.
4. Type _apt-get remove avg85flx_. Follow the instructions until uninstall completes.