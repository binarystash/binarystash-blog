/* A polyfill to add the functionality of Javascript 1.6 to IE < 9 */
/* Copyright James  2012 */
/* Dual licensed under the MIT and GPL licenses */

Array.prototype.indexOf=function(d){if(null==this)throw new TypeError;var e=Object(this),b=e.length>>>0;if(0===b)return-1;var a=0;0<arguments.length&&(a=Number(arguments[1]),a!=a?a=0:0!=a&&(Infinity!=a&&-Infinity!=a)&&(a=(0<a||-1)*Math.floor(Math.abs(a))));if(a>=b)return-1;for(a=0<=a?a:Math.max(b-Math.abs(a),0);a<b;a++)if(a in e&&e[a]===d)return a;return-1};
Array.prototype.lastIndexOf=function(d){if(null==this)throw new TypeError;var e=Object(this),b=e.length>>>0;if(0===b)return-1;var a=b;1<arguments.length&&(a=Number(arguments[1]),a!=a?a=0:0!=a&&(a!=1/0&&a!=-(1/0))&&(a=(0<a||-1)*Math.floor(Math.abs(a))));for(b=0<=a?Math.min(a,b-1):b-Math.abs(a);0<=b;b--)if(b in e&&e[b]===d)return b;return-1};
Array.prototype.every=function(d,e){if(null==this)throw new TypeError;var b=Object(this),a=b.length>>>0;if("function"!=typeof d)throw new TypeError;for(var c=0;c<a;c++)if(c in b&&!d.call(e,b[c],c,b))return!1;return!0};Array.prototype.filter=function(d,e){if(null==this)throw new TypeError;var b=Object(this),a=b.length>>>0;if("function"!=typeof d)throw new TypeError;for(var c=[],f=0;f<a;f++)if(f in b){var g=b[f];d.call(e,g,f,b)&&c.push(g)}return c};
Array.prototype.forEach=function(d,e){var b,a;if(null==this)throw new TypeError("this is null or not defined");var c=Object(this),f=c.length>>>0;if("[object Function]"!={}.toString.call(d))throw new TypeError(d+" is not a function");e&&(b=e);for(a=0;a<f;){var g;a in c&&(g=c[a],d.call(b,g,a,c));a++}};
Array.prototype.map=function(d,e){var b,a,c;if(null==this)throw new TypeError(" this is null or not defined");var f=Object(this),g=f.length>>>0;if("[object Function]"!={}.toString.call(d))throw new TypeError(d+" is not a function");e&&(b=e);a=Array(g);for(c=0;c<g;){var h;c in f&&(h=f[c],h=d.call(b,h,c,f),a[c]=h);c++}return a};
Array.prototype.some=function(d,e){if(null==this)throw new TypeError;var b=Object(this),a=b.length>>>0;if("function"!=typeof d)throw new TypeError;for(var c=0;c<a;c++)if(c in b&&d.call(e,b[c],c,b))return!0;return!1};