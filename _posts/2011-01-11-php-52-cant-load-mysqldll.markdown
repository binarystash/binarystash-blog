---
title: "PHP 5.2 can't load mysql.dll"
layout: "post"
permalink: "/2011/01/php-52-cant-load-mysqldll.html"
---

After downgrading from PHP 5.3 to 5.2, my MySQL applications stopped working. I realized that it was caused by PHP not being able to load "mysql.dll" even though it was declared in "php.ini."

Within few hours of scouring the internet for a solution, I found out that a copy of "MySQL.dll" exists in my Windows\system32 directory. I forgot that I placed it there for my previous PHP installation. Renaming or deleting the file solved the problem.