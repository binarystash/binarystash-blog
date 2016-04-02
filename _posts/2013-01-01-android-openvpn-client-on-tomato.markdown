---
title: "Android OpenVPN client on Tomato OpenVPN server"
layout: "post"
description: Connect your Android device to a Tomato OpenVPN server
permalink: "/2012/12/android-openvpn-client-on-tomato.html"
---

The following is a guide for connecting an Android device to a Tomato-based OpenVPN server.

####Test your OpenVPN server.

1. Ensure that your Tomato-based OpenVPN server is accessible. If you haven't set up the server yet, see [Tomato OpenVPN](http://tomatousb.org/tut:openvpn) tutorial.
2. Check that your server is accessible. You may download [Port Scanner](https://play.google.com/store/apps/details?id=com.twistandroid.portscan&hl=en) to ping your server.

####Connect Android to your OpenVPN server

<ol><li>Transfer your OpenVPN client certificates to your SD card. See <a href="http://tomatousb.org/tut:openvpn">Tomato OpenVPN tutorial.</a> on how to generate them. </li><li>Install <a href="https://play.google.com/store/apps/details?id=de.blinkt.openvpn&amp;hl=en">OpenVPN for Android</a> on your phone. This program <b>doesn't</b> require root to work. Version 0.5.28 is used for this guide.</li><li>Open the app.</li><li>Go to <b>VPN Profiles</b>.</li><li>Assuming that you haven't generated a configuration file yet, press <b>+</b></li><li>Enter a name for your profile.</li><li>On [<b>My Profile]-&gt;Basic-&gt;Type</b>, select "Certificates". Your will be presented with three certificate fields. Select the certificates you transferred to your SD card.  <br/><br/><table style="border:1"><tbody><tr><td>CA Certificate</td><td>ca.crt</td></tr><tr><td>Client Certificate</td><td>client1.crt</td></tr><tr><td>Client Certificate Key</td><td>client1.key</td></tr></tbody></table><br/><br/></li><li>Go back to <b>VPN Profiles</b> and select your profile. You will be prompted to connect.</li><li>Check Tomato's <b>VPN tunneling</b> page to see that your Android device is connected to your LAN.</li></ol>