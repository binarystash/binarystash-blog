---
title: "Samsung GT-I5503: Detecting an ad hoc network in Android Froyo"
layout: "post"
permalink: "/2011/01/samsung-gt-i5503-detecting-ad-hoc.html"
---

One of the my biggest annoyances with Froyo is its lack of ability to detect ad hoc networks. However, thanks to the smart folks at XDA Developers forum, this has become possible via a hack they created.

Follow these steps to allow your GT-I5503 to detect an ad hoc network.

###Get necessary files

1. Download [Root Explorer 2.3](http://www.mediafire.com/?0tynyznwmmo). Transfer it to your phone's SD card and install it.

2. Download [Universal Androot](http://www.mediafire.com/?cyoevco9wy8hkcm). Transfer it to your phone's SD card and install it.

3.  Download "wpa_adhoc-signed.zip" at [XDA Developers](http://forum.xda-developers.com/showthread.php?t=754961). Extract the file file "wpa_supplicant" and transfer it to your SD card. This file has only been the working hack I've tried so far.

###Install hack

1. Open Universal Androot and click "Root." Wait for a few seconds as it roots your device. Rooting is necessary for us to replace a protected system file. Skipping this will render the next steps useless. If you encounter errors, please restart your phone and repeat this step.

![Androot](/images/androot.png)

2. Open Root Explorer. Click "Allow" when it asks you for super-user permission. Browse to "/system/bin". Look for the file "wpa\_supplicant" and make a backup of this file.

3. Finally, replace the "wpa\_supplicant" file in "/system/bin" with the hacked "wpa\_supplicant" file you downloaded. If the phone complains that there is not enough space, your phone may not be rooted. Otherwise, you have installed the hack successfully.

![Rootexp](/images/rootexp.png)

4. Restart your phone. Go to Settings->Wireless & networks->Wi-Fi settings. Make sure Wi-Fi is on. Detected ad hoc networks are prepended with "(*)".