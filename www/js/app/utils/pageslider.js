define(function(t){"use strict";var e=t("jquery");return function(t){var a,i=[];this.back=function(){location.hash=i[i.length-2]},this.slidePage=function(t){var e=i.length,a=window.location.hash;return 0===e?(i.push(a),void this.slidePageFrom(t)):void(a===i[e-2]?(i.pop(),this.slidePageFrom(t,"page-left")):(i.push(a),this.slidePageFrom(t,"page-right")))},this.slidePageFrom=function(i,n){return t.append(i),a&&n?(i.attr("class","page "+n),a.one("webkitTransitionEnd",function(t){e(t.target).remove()}),t[0].offsetWidth,i.attr("class","page transition page-center"),a.attr("class","page transition "+("page-left"===n?"page-right":"page-left")),void(a=i)):(i.attr("class","page page-center"),void(a=i))}}});