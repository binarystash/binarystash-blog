---
title: "Extending a jQuery plugin"
layout: "post"
permalink: "/2013/03/extending-jquery-plugin.html"
---

Different practices and architectures are used in plugin development, hence, there are also various ways to extend a plugin.

The method presented below is aimed at extending a plugin having the architecture described in [jQuery's wiki](http://docs.jquery.com/Plugins/Authoring). (Update: The code below uses the old architecture. jQuery Docs has provided a new method for writing extensible plugins.)

We have the following plugin and we need to override the functionality of func1. What should we do?

###Plugin 1

{% highlight javascript %}

(function ($) {

    var methods = {
        init: function (options) {
            alert("here");
        },
        func1: function () {
            alert("func1");
        },
        func2: function () {
            alert("func2");
        }
    };

    $.fn.myPlugin = function (method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist');
        }

    };

})(jQuery);

{% endhighlight %}

One way to extend this plugin without changing its original code is by writing another plugin. See the code below.

###Plugin 2

{% highlight javascript %}

(function ($) {

    var methods = {
        'func1': function () {
            alert("func1 of myPlugin2");
        }
    }

    $.fn.myPlugin2 = function (method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ((typeof method === 'object' || !method) && methods.init) {
            return methods.init.apply(this, arguments);
        } else {
            try {
                return $.fn.myPlugin.apply(this, arguments);
            } catch (e) {
                $.error(e);
            }
        }

    }

})(jQuery);

{% endhighlight %}

Hence:

{% highlight javascript %}

$("body").myPlugin2(); //Will alert 'here'
$("body").myPlugin2('func1'); //Will alert 'func1 of myPlugin2'

{% endhighlight %}

We can add new functions or override existing ones in _myPlugin2_. If it doesn't find the method in its scope, it tries to call the method from _myPlugin1_.