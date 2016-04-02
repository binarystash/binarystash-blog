---
title: "11-step guide to set up Github using Git Gui"
layout: "post"
description: Set up Git GUI for Github
permalink: "/2012/09/visual-guide-to-setting-up-your-first.html"
---

[Github](http://www.github.com/) is an online service that allows you to share your code publicly. This tutorial teaches you how to set up a Github repository using Git Gui on Windows.

1. Download [Git](http://git-scm.com/). Install it using the default options. Git 1.7.11 was used in this tutorial.
2. Create an account at [Github](http://www.github.com/).
3. In your computer, create your project folder. 

	![](/images/git1.jpg)

4. Inside the folder, right click then choose *Git Init Here*. This will set up the required files for Git to work in your project folder.
	
	![](/images/git2.jpg)

5. Create a new file (e.g. README).
6. Inside the folder, right click then choose *Git Add all files now*. This action tells Git that you allow it to manage all the files in the folder.
	
	![](/images/git3.jpg)

7. Inside the folder, right click again then choose *Git Commit Tool*. Git Gui should appear. Add your comment. Once you're done, click *Commit*.
	
	![](/images/git4.jpg)

8. Create a repository on [Github](http://www.github.com/). Take note of your *Repository name* and *Repository URL*.
9. After creating your repository on Github, right click inside your project folder and choose *Git Gui*. Go to *Remote -> Add Remote*. Place your *Repository name* in the *Name* field and your *Repository URL* in the *Location* field. Click *Add*. Specify your Github username and password when prompted.
	
	![](/images/git5.jpg)

10. In Git Gui, go to *Remote-> Push*. Click *Push*. Specify your Github username and password when prompted.
	
	![](/images/git6.jpg)
	
11. Congratulations! You will now see your commits when you visit your Github project URL *(e.g. https://github.com/myname/myproject )*