/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=0,n=i[o];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];n;){var r=s&&s[n];r&&(this.off(t,n),delete s[n]),n.apply(this,e),o+=r?0:1,n=i[o]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);s.isBoxSizeOuter=r=200==t(n.width),i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,n,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=o.indexOf("%")!=-1?parseFloat(o)/100*s.width:parseInt(o,10),a=n.indexOf("%")!=-1?parseFloat(n)/100*s.height:parseInt(n,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-o,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){
var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});;
// ANIM CORE
// ---- This JS partial will handle all the global JS based micro-ineractions and animations.
(function ($, Drupal) {
  Drupal.behaviors.sju_theme_animate = {
    attach: function (context, settings) {
      // all things anim parent when entering into the screen will be assigned an active class
      // ---------------------------------------------- CARD ANIMATION FUNCTION
      $.fn.cardAnim = function() {
        if ($(this).is(":in-viewport")) {
          $(this).each(function() {
            if ($(this).is(":in-viewport") && !$(this).hasClass("anim-item--active")) {
              $(this).addClass("anim-item--active");
            }
          });
        }
      };

      // ---------------------------------------------- SEQUENCE ANIMATION FUNCTION
      function initSequenceAnims(index, element) {
        var $this = $(element),
            $children = $this.find(".anim-parent");

        var delay = $this.attr('data-delay');
        if ("undefined" == typeof delay) delay = 350;

        if ($this.is(":in-viewport")) {
          var animItem = $this.find(".sequence-anim-item");
          var count = 0, length = animItem.length;
          var interval = setInterval(function(){
            if(count == length)
              clearInterval(interval);

            animItem.eq(count++).addClass('sequence-anim-item--active');
          }, delay)
        }

        $(window).on('load', function() {
          if ($this.is(":in-viewport")) {
            var animItem = $this.find(".sequence-anim-item");
            var count = 0, length = animItem.length;
            var interval = setInterval(function(){
              if(count == length)
                clearInterval(interval);

              animItem.eq(count++).addClass('sequence-anim-item--active');
            }, delay)
          }
        });

        $(window).scroll(function() {
          if ($this.is(":in-viewport")) {
            var animItem = $this.find(".sequence-anim-item");
            var count = 0, length = animItem.length;
            var interval = setInterval(function(){
              if(count == length)
                clearInterval(interval);

              animItem.eq(count++).addClass('sequence-anim-item--active');
            }, delay)
          }
        });
      }

      // ---------------------------------------------- COUNTUP ANIMATION FUNCTION
      function initCounterUp(index, element) {
        var  $this = $(element),
            statNumber = $this.attr("data-number");

        if ($this.hasClass('counterUpFired')) {
          return;
        }

        $this.counterUp({
          delay: 10,
          time: 1500
        });

        $this.addClass('counterUpFired');
      }

      /**
       * Drives the init of all of the various animations.
       * @param
       */
      function initAnims() {
        // Set up a custom event listener on the body so that the animation can
        // be triggered from outside this scope.
        $('body').on('admissionsFireAnims', function(){
          $(".anim-item").cardAnim();
        });

        // Need to fire this immediately in case this is an AJAX request and the
        // window load has already fired.
        $(".anim-item").cardAnim();

        $(window).on('load', function() {
          $(".anim-item").cardAnim();
        });

        $(window).scroll(function() {
          $(".anim-item").cardAnim();
        });

        $(".sequence-anim-parent").each(initSequenceAnims);

        $(".count-up").each(initCounterUp);
      }

      // ======== INIT
      initAnims();

    } // attach
  } // behaviors
})(jQuery, Drupal); // function
;
// --------------------------------------------------
// APP.JS
// --------------------------------------------------
(function($){
  $(document).ready(function() {

/*
The variability and options content on pages
along with the design variations as a result make it
very difficult to execute conditional theming without parsing the DOM
*/
 $(".section--page-intro").parents(".row").addClass("row--has-page-intro js-processed");
// ------------------

    if($(".section--full-width-feature video").length && !$(".touchevents").length) {
      $(".section--full-width-feature video").each(function() {
        $(this).attr("autoplay", "autoplay");
      });
    }
    // Toggle and active class if focused so that links can be tabbed to and read
    if($(".hover-grid-item--school-hub").length) {
      $(".hover-grid-item--school-hub").each(function() {
        $(this).find("a").focus(function() {
          $(this).parents(".hover-grid-item--school-hub").addClass("tab-focused");
          $(this).parents(".columns").siblings(".columns").find(".tab-focused").removeClass("tab-focused");
          $(this).parents(".columns").siblings(".columns").find(".tab-focused").removeClass("tab-focused");
        });
        $(this).focus(function() {
          $(this).parents(".columns").siblings(".columns").find(".tab-focused").removeClass("tab-focused");
          $(this).addClass("tab-focused");
        });
      });
    }
  });
})(jQuery);
;
(function($){

  $(document).ready(function() {

    // Toggles between two strings
    // Used for changing mobile menu button text on click
    $.fn.toggleText = (function(t1, t2) {
      this.each(function() {
        var $this = $(this)
        if ($this.text() == t1) { $this.text(t2); }

        else { $this.text(t1); }

      })
      return this;
    });

  /*
    -----------------------
    MORE IN THIS SECTION
    -----------------------
  */

    $(".more-in-this-section").click(function(){
      $(this).toggleClass("more-in-this-section--active");
      $(this).siblings("ul").slideToggle();
      $(this).find(".toggle-text").toggleText("Click to expose navigation links on mobile.", "Click to hide navigation links on mobile.").toggleClass("active");
    });

    $(".sidebar-subnav--button").click(function(){
      $(this).toggleClass("sidebar-subnav--button--active");
      $(this).siblings(".sidebar-subnav--content").slideToggle();
      $(this).find(".toggle-text").toggleText("Click to expose navigation links on mobile.", "Click to hide navigation links on mobile.").toggleClass("active");
    });

  });
})(jQuery);
;
var URLreg = /(?:\(['|"]?)(.*?)(?:['|"]?\))/;

document.addEventListener('DOMContentLoaded', function() {
  var supportsBackgroundBlendMode = window.getComputedStyle(document.body).backgroundBlendMode;
  if(typeof supportsBackgroundBlendMode == 'undefined') {
    // TODO: maybe check for Canvas composite support?
    createBlendedBackgrounds();
  }
}, false);

function createBlendedBackgrounds() {
  var els = document.querySelectorAll('.blend-multiply');
  for(var i = 0; i < els.length; i++) {
    var el = els[i];
    processElement(el);
  }
}

function processElement(el) {
  var style = window.getComputedStyle(el);
  var backgroundImageURL = URLreg.exec(style.backgroundImage)[1];
  var backgroundColor = style.backgroundColor;
  createBlendedBackgroundImageFromURLAndColor(backgroundImageURL, backgroundColor, function(imgData) {
    el.style.backgroundImage = 'url(' + imgData + ')';
  });
}

function createBlendedBackgroundImageFromURLAndColor(url, color, callback) {
  var img = document.createElement('img');
  img.src = url;
  img.onload = function() {
    var canvas = document.createElement('canvas');
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    var context = canvas.getContext('2d');
    context.globalCompositeOperation = 'multiply'
    context.drawImage(this, 0, 0);
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    var data = canvas.toDataURL('image/jpeg');
    callback(data);
  };
}
;
(function($){
  $(document).ready(function(){


  // define an ordinary expanded menu's anchor
  var subnavTrigger = $('.sidebar-menu ul.menu li.menu-item--expanded > a, .sidebar-menu ul.menu li.menu-item--expanded > span');

  // define an active expanded menu's anchor
  var subnavActiveTrigger = $('.sidebar-menu ul.menu .is-active, .sidebar-menu ul.menu .menu-item--active-trail > span');

  // insert a button to access the children of the anchor
  $('<button class="togglyBox" tabindex="0">Open the sub-menu</button>').insertAfter(subnavTrigger);

  // replace the text if it's the active page
  $(subnavActiveTrigger).siblings('.togglyBox').text('Close the sub-menu');

  // make Buttons active with open menus
  $(subnavActiveTrigger).addClass("engaged")

  // when you click the button, the anchor changes from plus to minus, the children are opened, and the text changes
  $(subnavTrigger).siblings('.togglyBox').click(function(){
    $(this).siblings(subnavTrigger).toggleClass('engaged');
    $(this).siblings('ul.menu').slideToggle();
    $(this).text(function(i, v){
      return v === 'Open the sub-menu' ? 'Close the sub-menu' : 'Open the sub-menu'
    })
  });

  // adds a separate class to change from minus to plus
  $(subnavActiveTrigger).each(function(){
    $(this).addClass('open');

  });

  // the active state needs this special change for the plus/minus
  $(subnavActiveTrigger).siblings('.togglyBox').click(function(){
    $(this).siblings(subnavActiveTrigger).toggleClass('open').toggleClass('closed');

  });


 }); // for jQuery
})(jQuery);
;
(function($){
  $(document).ready(function(){

    // Checkbox toggling:
    // Disallows unchecking all when it is checked.
    // Unchecks all when an item is checked.
    // Unchecks all items when all is checked.
    // Checks all when all items are unchecked.
    var $checkbox = $('.filters__checkbox__itself');

    $checkbox.click(function(event) {

      // Variables
      var $this = $(this),
          checked = $this[0].checked,
          $parents = $this.parents('fieldset');

      // All checkbox
      if ( $this.val() === 'all' ) {

        // If unchecked, reset all. If checked, do nothing.
        if ( checked ) {
          $parents.find('input').not(this).prop('checked', false);
        } else {
          event.preventDefault();
        }
      // Other checkboxes, checking. Uncheck all.
      } else if ( checked ) {
        $parents.find('[value="all"]').prop('checked', false);
      // Other checkboxes, unchecking. If last unchecked item, check all.
      } else {
        var $checkboxes = $parents.find('[type="checkbox"]:not([value="all"])'),
            allChecked = false;
        $checkboxes.each(function() {
          if ( $(this)[0].checked ) {
            allChecked = true;
            return false;
          }
        });
        if ( ! allChecked ) {
          $parents.find('[value="all"]').prop('checked', true);
        }
      }
    });


 }); // for jQuery
})(jQuery);
;
(function($){
  $(document).ready(function(){


  listingSlick($('.listing-slick'));

  $(window).resize(function() {
    if( !$('.listing-slick').hasClass('slick-initialized') && $(window).width() < 1025 )
    {
      listingSlick($('.listing-slick'));
    }
  });

  // News & events carousel
  function listingSlick(element) {

    element.slick({
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 'auto',
      variableWidth: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 641,
          settings: {
            centerMode: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: 'unslick'
        }
      ]
    });
  };




 }); // for jQuery
})(jQuery);
;
// --------------------------------------------------
// hero-video.js
// --------------------------------------------------
(function ($, Drupal) {
  Drupal.behaviors.sju_theme_hero = {
    attach: function (context, settings) {
      $(document).ready(function(){
          // Establish parallax for both the video
          // and messaging components to create some depth.
           var parallaxScroll = function(){
                var scrolled = $(window).scrollTop(),
                  divOffset = $('.video-feature').scrollTop();

                  $('.hero--parallax .main-slider').css('transform', 'translateY('+(-1-(scrolled*.20))+'px)');
            }
            // We add autoplay if touch is disabled (Safest way to assume an internet connection)
            // --- additionally Safari does not support autoplay on any touch device
            if($(".hero--video").length && !$(".touchevents").length) {
              $(".hero video").attr("autoplay", "");
            }

            if(!$(".has-alert, .touchevents").length) {
              if($(".hero--parallax").length) {
                // Establish parallax for both the video & Images
                $(window).scroll(function() {
                  if($(".hero--parallax").is(':in-viewport')) {
                    $(window).bind("scroll", parallaxScroll);
                    $('.hero--parallax .main-slider').show();
                  } else {
                    $(window).unbind("scroll", parallaxScroll);
                    $('.hero--parallax .main-slider').hide();
                  }
                });
              }
            }
            if($("#bgndVideo").length) {
              $("#bgndVideo").YTPlayer();

              // setting the video to "body" is the only way to toggle its parallax behavior
              // This makes it a direct child of the <body> and we still want it in its hero container
              $("#wrapper_bgndVideo").appendTo(".video-feature");
            }

            // Conditionally add a toggle to show more stats if there is more than 1
            if($(".hero-stat-container .stat").length > 1) {
              $(".hero-stat-container").append("<button class='hero-stat-expand'><span class='toggle-text'>Show more facts</span></button>");
              $(".hero-stat-expand").on("click", function() {
                $(this).siblings(".row").find(".stat").toggleClass("active");
                $(this).toggleClass("active");
                $(this).toggleText("Show fewer facts", "Show more facts");
              })
            }
        // --------------------- HERO SLIDER CUSTOM FOR SJU
        // CODEPEN https://codepen.io/digistate/pen/MvapbE

        // ----- Need to handle heroes with 1 image differently when animating in on load
        if($(".hero .main-slider .item").not(".item--no-img").length === 1) {
          $(".hero").addClass("hero--single-img");
        }

        // ---------- SLIDER FUNCTIONS
          var slideWrapper = $(".main-slider"),
              slideContent = $(".main-slider--content"),
              iframes = slideWrapper.find('.embed-player'),
              lazyImages = slideWrapper.find('.slide-image'),
              lazyCounter = 0;

          // POST commands to YouTube or Vimeo API
          function postMessageToPlayer(player, command){
            if (player == null || command == null) return;
            player.contentWindow.postMessage(JSON.stringify(command), "*");
          }

          // When the slide is changing
          function playPauseVideo(slick, control) {
            var currentSlide, slideType, startTime, player, video;

            currentSlide = slick.find(".slick-current");
            slideType = currentSlide.attr("class").split(" ")[1];
            player = currentSlide.find("iframe").get(0);
            startTime = currentSlide.data("video-start");

            if (slideType === "vimeo") {
              switch (control) {
                case "play":
                  if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
                    currentSlide.addClass('started');
                    postMessageToPlayer(player, {
                      "method": "setCurrentTime",
                      "value" : startTime
                    });
                  }
                  postMessageToPlayer(player, {
                    "method": "play",
                    "value" : 1
                  });
                  break;
                case "pause":
                  postMessageToPlayer(player, {
                    "method": "pause",
                    "value": 1
                  });
                  break;
              }
            } else if (slideType === "youtube") {
              switch (control) {
                case "play":
                  postMessageToPlayer(player, {
                    "event": "command",
                    "func": "mute"
                  });
                  postMessageToPlayer(player, {
                    "event": "command",
                    "func": "playVideo"
                  });
                  break;
                case "pause":
                  postMessageToPlayer(player, {
                    "event": "command",
                    "func": "pauseVideo"
                  });
                  break;
              }
            } else if (slideType === "video") {
              video = currentSlide.children("video").get(0);
              if (video != null) {
                if (control === "play") {
                  video.play();
                } else {
                  video.pause();
                }
              }
            }
          }

          // Resize player
          function resizePlayer(iframes, ratio) {
            if (!iframes[0]) return;
            var win = $(".main-slider"),
                width = win.width(),
                playerWidth,
                height = win.height(),
                playerHeight,
                ratio = ratio || 16/9;

            iframes.each(function(){
              var current = $(this);
              if (width / ratio < height) {
                playerWidth = Math.ceil(height * ratio);
                current.width(playerWidth).height(height).css({
                  left: (width - playerWidth) / 2,
                   top: 0
                  });
              } else {
                playerHeight = Math.ceil(width / ratio);
                current.width(width).height(playerHeight).css({
                  left: 0,
                  top: (height - playerHeight) / 2
                });
              }
            });
          }

          // Initialize
          enquire.register("screen and (min-width:641px)", {
            match : function() {
              slideWrapper.on("init", function(slick){
                slick = $(slick.currentTarget);
                setTimeout(function(){
                  playPauseVideo(slick,"play");
                }, 1000);
                resizePlayer(iframes, 16/9);
              });
              slideWrapper.on("beforeChange", function(event, slick) {
                slick = $(slick.$slider);
                playPauseVideo(slick,"pause");
              });
              slideWrapper.on("afterChange", function(event, slick) {
                slick = $(slick.$slider);
                playPauseVideo(slick,"play");
              });
              slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
                lazyCounter++;
                if (lazyCounter === lazyImages.length){
                  lazyImages.addClass('show');
                  // slideWrapper.slick("slickPlay");
                }
              });
            },
          });
          if($(".main-slider .item").length > 1) {
            //start the slider
            slideWrapper.slick({
              // fade:true,
              autoplay: true,
              autoplaySpeed: 4000,
              lazyLoad:"progressive",
              speed:1200,
              arrows:true,
              appendArrows: ".hero-nav__controls",
              cssEase:"cubic-bezier(.63,0,.35,1)",
              dots: false,
              centerMode: false,
              variableWidth: true,
              asNavFor: slideContent,
              responsive: [
                {
                  breakpoint: 640,
                  settings: {
                    autoplay: false,
                  }
                }
              ]
            });
            slideContent.slick({
              // fade:true,
              autoplay: true,
              autoplaySpeed: 4000,
              lazyLoad:"progressive",
              speed:1000,
              arrows:false,
              dots:true,
              cssEase:"cubic-bezier(.63,0,.35,1)",
              asNavFor: slideWrapper,
              appendDots: ".hero-nav__dots",
              responsive: [
                {
                  breakpoint: 640,
                  settings: {
                    autoplay: false,
                  }
                }
              ]
            });
          }
          // Resize event
          $(window).on("resize.slickVideoPlayer", function(){
            resizePlayer(iframes, 16/9);
          });

          // Hide hero controls if there is only 1 Hero image
          if($(".main-slider .slick-slide").length < 2) {
            $(".hero-nav").hide();
          }

          // ---- PLAY / PAUSE
          $('.slick-pause').on('click', function() {
            $('.main-slider, .main-slider--content').slick('slickPause');
            $(this).attr("aria-hidden", "true");
            $('.slick-play').attr("aria-hidden", "false");
          });
          $('.slick-play').on('click', function() {
            $('.main-slider, .main-slider--content').slick('slickPlay')
            $(this).attr("aria-hidden", "true");
            $('.slick-pause').attr("aria-hidden", "false");
          });

      }); // END DOC READY
    } // attach
  } // behaviors
})(jQuery, Drupal); // function
;
(function ($, Drupal) {

  Drupal.behaviors.sju_theme_jump_links = {
    attach: function (context, settings) {

      $(function() {
        // Automatically smooth scroll when using anchor links.
        $('a[href*="#"]:not([href="#"]):not([js-jump-nav-heading]):not(.jumpnav-excluded-heading)').once().click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var targetSelector = $(this.hash).length ? this.hash : '[name=' + this.hash.slice(1) + ']',
                $target = $(targetSelector),
                scrolled = $target.variableScrollTo(-110);

            if (scrolled) {
              $target.focus();
              if ($target.is(':focus')) {
                return false;
              }
              else {
                $target.attr('tabindex', '-1');
                $target.focus();
              }
              return false;
            }
          }
        });
      });

    }
  }
})(jQuery, Drupal);
;
(function($){
  $(document).ready(function() {

    $('.more-or-less').append('  <div class="more-or-less__button-strip more-or-less__load-more"><button type="button" class="btn">Expand Section</a></div>');


    $('.more-or-less__load-more .btn').click(function(){
      $(this).parents('.more-or-less').addClass('open');
      $(this).toggle();
    });
    $('.more-or-less__fewer .btn').click(function(){
      var thisContainer = $(this).parents('.more-or-less');
      $(thisContainer).removeClass('open');
      $(thisContainer).delay(500).find('.more-or-less__load-more .btn').toggle();
      $('html, body').animate({
        scrollTop: $(thisContainer).offset().top
      }, 500);
    });

  });
})(jQuery);
;
// --------------------------------------------------
// object-fit-polyfill.JS
// --------------------------------------------------
(function($){
  $(document).ready(function() {

    if ( ! Modernizr.objectfit && $(".compat-object-fit-container").length ) {
      $('.compat-object-fit-container').each(function () {
        var $container = $(this),
            imgUrl = $container.find('img').prop('src');
        if (imgUrl) {
          $container
            .css('backgroundImage', 'url(' + imgUrl + ')')
            .addClass('compat-object-fit');
        }
      });
    }


  });
})(jQuery);
;
(function($){


  $(function() {

    // The offset slider elements
    var $three = $('.offset-slider--three'),
        $unlimited = $('.offset-slider--unlimited'),
        $gallery = $(".section--gallery"),
        $mobileOffsetSlider = $(".mobile-offset-slider");

    // Initialize the sliders on page load
    $three.threeOffsetSlider();
    $unlimited.unlimiteOffsetSlider();
    $gallery.gallerySlider();
    $mobileOffsetSlider.mobileOffsetSlider();

    // Initialize three offset slider on window resize if it's not already inilitalized
    $(window).resize(function() {

      if( !$three.hasClass('slick-initialized') && $(window).width() < 1024 ) {
        $three.threeOffsetSlider();
      }

    });

  });


  // The three offset calling function
  $.fn.threeOffsetSlider = function() {

    this.slick({
      arrows: false,
      centerMode: true,
      centerPadding: 'auto',
      dots: false,
      infinite: false,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            centerMode: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: 'unslick'
        }
      ]
    });

  };


  // The unlimited offset calling function
  $.fn.unlimiteOffsetSlider = function() {

    this.slick({
      arrows: false,
      centerMode: true,
      centerPadding: 'auto',
      dots: false,
      infinite: false,
      mobileFirst: true,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            centerMode: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            centerMode: false,
            slidesToShow: 3
          }
        }
      ]
    });
  };

  // gallery
  $.fn.gallerySlider = function(galleryType) {

    var $galleryPrimary = this.find(".gallery-primary"),
        $galleryNav = this.find(".gallery-nav");

    $galleryNav.slick({
      centerMode: false,
      centerPadding: 'auto',
      dots: false,
      infinite: true,
      mobileFirst: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: false,
      asNavFor: $galleryPrimary,
      focusOnSelect: true,
      arrows: true,
    });
    $galleryPrimary.slick({
      centerMode: false,
      centerPadding: 'auto',
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      variableWidth: false,
      arrows: false,
      asNavFor: $galleryNav,
      draggable: false,
      swipe: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            variableWidth: true,
            arrows: true,
            appendArrows: $galleryPrimary,
            centerMode: false,
            centerPadding: 'auto',
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 640,
          settings: {
            draggable: true,
            swipe: true,
          }
        },
      ]
    });
  };

  // Mobile
  $.fn.mobileOffsetSlider = function() {

      $(this).slick({
        mobileFirst: true,
        variableWidth: true,
        draggable: true,
        arrows: false,
        centerMode: false,
        centerPadding: 'auto',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
          {
            breakpoint: 767,
            slidesToShow: 3,
            slidesToScroll: 1,
            accessibility: false,
            settings: "unslick"
          }
        ]
      });

      // For Some Reason Slick keeps its aria and tabindex values afer unslick.
      if($(window).width() > 767) {
        $(".mobile-offset-slider").each(function() {
          $(this).find(".columns").attr("aria-hidden", "false");
          $(this).find(".columns").attr("tabindex", "");
          $(this).find("a").attr("tabindex", "");
        })
      }
  };


})(jQuery)
;
// --------------------------------------------------
// OHO-STICKY-HEADER.JS
// --------------------------------------------------

(function($) {
  $(document).ready(function() {

        //We Add our classes before we clone

        // Add .has-ul class to menu items with submenu children
        $(".navigation li:has(ul) > a").addClass("has-ul");

        // Add a button to toggle the child menu
        $(".navigation li:has(ul)").each(function(){

          // collect the text from the parent anchor
          var $parentText = $(this).children('a').text();

          // add a class to style width of anchor
          $(this).addClass("has-ul");

          // add the button
          var $ulChild = $(this).children('ul');

          $('<button type="button"><span>Open</span> the ' + $parentText + ' menu</button>').insertBefore( $ulChild );
        });

        // code in which we use buttons to toggle sub menus

        $('li.has-ul > button').click(function(){

          $(this).children('span').text(function(i, v){
            return v === 'Open' ? 'Close' : 'Open'
          })

          $(this).toggleClass('engaged');
          $(this).next('ul.menu').slideToggle();
          $(this).siblings("a").toggleClass("active");
        });

        // Toggles between two strings
        // Used for changing mobile menu button text on click
        $.fn.toggleText = (function(t1, t2) {
          this.each(function() {
            var $this = $(this)
            if ($this.text() == t1) { $this.text(t2); }

            else { $this.text(t1); }

          })
          return this;
        });

        $('.btn--site__header').click(function(){
          $("header .btn--site__header.open").not($(this)).next().slideUp();
          $("header .btn--site__header.open").not($(this)).removeClass("open");

          $(this).toggleClass('open');
          $(this).next().slideToggle();
        });

        //---------------Back To Top

        // We check if the height of content exceeds an arbitrary amount
        if($("body").outerHeight() > $(window).outerHeight() * 1.5) {
          $(".site-footer").append("<a class='back-to-top' href'#'><span class='show-for-sr'>click to scroll back to the </span>top <span class='show-for-sr'> of the page</span></a>");
        }

        $(window).scroll(function() {
          if($(document).scrollTop() >= $(window).outerHeight() * 1.5) {
            $(".back-to-top").addClass("visible");
          } else {
            $(".back-to-top").removeClass("visible");
          }
        });

        $(".back-to-top").on("click", function(e) {
          e.preventDefault();
          $('a[href="#main-menu"]').variableScrollTo();
          $('a[href="#main-menu"]').focus();
        })

        $(window).on("load", function() {
          if(window.location.hash) {
            var scrollLocation = window.location.hash;
            $(scrollLocation).variableScrollTo(-140, 3000);
          }
        })

        // ------------------------------- Search toggle / Overlay Toggles
          //close them all
          $(".overlay__close").click(function(e) {
            $(".overlay").removeClass("active");
            e.preventDefault();
          });
          //search
          $(".search-toggle").click(function(e) {
            $(".header__search-overlay").addClass("active");
            e.preventDefault();
          });

        // ----------------------------------------
        // ------- STICKY HEADER FUNCTION
        // ----------------------------------------
          var $lastScrollTop = 0;
          ohoSticky = function($stickyTarget, $stickyItem, mediaQueryValue, directionalScrollReveal="false", offsetStickyBuffer=0) {
            var $stickyContainer = $($stickyTarget),
                $stickyHeaderItem = $stickyContainer.find($stickyItem),
                headerHeight = $stickyContainer.outerHeight(),
                stickyItemOuterHeight = $stickyHeaderItem.outerHeight(),
                headerMainOffsetTop = $stickyContainer.offset().top + $stickyContainer.outerHeight() - stickyItemOuterHeight;

            if($stickyContainer.attr("data-directional-scroll-reveal")  === "true" || directionalScrollReveal === "true") {
              headerMainOffsetTop = headerMainOffsetTop + stickyItemOuterHeight;
              directionalScrollReveal = true;
            }

            enquire.register("screen and (min-width:"+mediaQueryValue+")", {

              match : function() {
                // -----------------------------
                // check if an alert is present
                // -----------------------------
                if(!$('body').hasClass('has-alert')) {
                  // -------------------------------------------------------
                  // if we want to hide/show the header based on scroll direction
                  // -------------------------------------------------------
                  if(directionalScrollReveal) {
                    // We are using the HTML attr in the CSS - if we're explicitly setting it to be true
                    // we will make sure to add the ATTR to the HTML so we can use it
                    if(!$stickyContainer.attr("data-directional-scroll-reveal") === "true" ) {
                      $stickyContainer.attr("data-directional-scroll-reveal", "true");
                    }
                    var $st = $(window).scrollTop();
                     if ($st > $lastScrollTop) {
                       // downscroll code
                       $stickyContainer.each(function() {
                          $(this).removeClass("sticky--scrolling-up");
                          $(this).addClass("sticky--scrolling-down");
                       });
                     } else {
                      // upscroll code
                       $stickyContainer.each(function() {
                         $stickyContainer.addClass("sticky--scrolling-up");
                         $stickyContainer.removeClass("sticky--scrolling-down");
                       });
                     }
                     $lastScrollTop = $st;
                  }


                  // -------------------------------------------------------
                  // Conditions for when the $stickyHeaderItem should stick
                  // -------------------------------------------------------
                  if ($(window).scrollTop() > headerMainOffsetTop && !$stickyContainer.hasClass("sticky")) {
                    $stickyContainer.addClass("sticky");
                  } else if ($(window).scrollTop() < headerMainOffsetTop + offsetStickyBuffer && $stickyContainer.hasClass("sticky")) {
                    $stickyContainer.removeClass("sticky");

                  }
                  // -------------------------------------------------------
                } else {
                  // if alert is present we remove the sticky header
                  $stickyHeaderItem.removeClass("sticky");
                } // end if alert
              },

              unmatch : function() {
                $stickyContainer.removeClass("sticky");
              },
            });
          };
        // ------- OHO STICKY INIT
        $("[data-sticky-container]").each(function() {
          var $this = $(this);
          ohoSticky($this, "[data-sticky-item]", "1025px");
          $(window).scroll(function() {
            ohoSticky($this, "[data-sticky-item]", "1025px");
          });
        });
        //---------
        // JUMP NAV STICKY
        //---------
        if($(".page--special-landing-page").length || $(".page--page").length || $(".page--program").length || $(".page--place").length) {
          // Create Nav and UL for us to clone h2s into
          $(".sidebar-column").append("<nav class='jumpnav'><div data-sticky-item><ul></ul></div></nav>");

          // Calculate the height of the intro text area and sidebar menu.
          var introHeight = $('.section--page-intro').outerHeight(true),
              menuHeight  = $('.sidebar-menu').outerHeight();
          // If the intro is longer than the sidebar menu, then set a margin top
          // sufficient to push the jumpnav below the intro area.
          if (introHeight > menuHeight) {
            $('.jumpnav').css('margin-top', introHeight - menuHeight + 'px');
          }

          $('.jumpnav [data-sticky-item] ul').jumpNav({
            maxScrollDuration: 3000,
            stickyHeight: 100,
            minRequired: 3,
            targetSelectors: [
              '[js-jump-nav-heading]',
              '.content h2:not(.jumpnav-excluded-heading)',
            ],
          });

          // Making it Sticky and adding some active states
          $(".jumpnav").each(function() {
            var $this = $(this);
            ohoSticky($this, "[data-sticky-item]", "767px", "false", $this.find("ul").outerHeight());
            $(window).scroll(function() {
              ohoSticky($this, "[data-sticky-item]", "767px", "false", $this.find("ul").outerHeight() + 120);
            });
          });
        }

        // --------- When the PPC Form Card is longer than main content
        if($(".card--ppc-landing-intro").length) {
          var $card = $(".card--ppc-landing-intro");

          $(".content").css("min-height", $card.outerHeight());
          $(".content").addClass("js-processed");

        }

    }); // Doc Ready
})(jQuery); // function
;
// picker navigation
// adding event.preventDefault(); breaks it

(function($){

  $(document).ready(function(){

    //
    // Tab behavior
    //

    $('.picker button').click(function() {

      // Clicked element
      var $this = $(this);

      // Current picker
      var $picker = $this.parents('.tabs');

      // Index number, add one for zero index
      var tabNumber = $this.parent().index() + 1;

      // Current active tab
      var $current = $picker.find('[aria-hidden="false"]');

      // Tab to be activated
      var $toActivate = $picker.find('.tabs__tab:nth-of-type(' + tabNumber + ')');

      // Remove the active aria states
      $picker.find('[aria-selected="true"]').attr('aria-selected', 'false');
      $picker.find('[aria-hidden="false"]').attr('aria-hidden', 'true');

      // Add the active aria states
      $this.attr('aria-selected', 'true');
      $toActivate.attr('aria-hidden', 'false');

      // Create slick
      var $activateSlick = $toActivate.children('.tabs__slick');
      if( $activateSlick.length > 0 && !$activateSlick.hasClass('slick-slider') )
      {
        loadCarousel($activateSlick);
      }

    });





  });

})(jQuery);
;
(function($){
  $(document).ready(function(){

    $('.slide-toggle a').click(function(event){
      event.preventDefault();

      // Clicked element
      var $this = $(this);

      // Current picker
      var $picker = $this.parents('.tabs__content__itself');

      // Index number, add one for zero index
      var tabCount = $(this).index() + 1;

      // Current active tab
      var $current = $picker.find('[aria-hidden="false"]');

      // Tab to be activated
      var $toActivate = $picker.find('.slide-toggle__content__instance:nth-of-type(' + tabCount + ')');

      // Remove the active aria states
      $picker.find('[aria-selected="true"]').attr('aria-selected', 'false');
      $picker.find('[aria-hidden="false"]').attr('aria-hidden', 'true');


      // Add the active aria states
      $this.attr('aria-selected', 'true');
      $toActivate.attr('aria-hidden', 'false');
    });

 }); // for jQuery
})(jQuery);
;
(function($){
  $(document).ready(function(){

    // tabs across the top

    $('.tabs__tabs__button').click(function(){
      $(this).toggleClass('engaged');

      // Clicked element
      var $this = $(this);

      // Current picker
      var $picker = $this.parents('.tabs');

      // Index number, add one for zero index
      var tabCount = $(this).index() + 1;

      // Current active tab
    //  var $current = $picker.find('[aria-hidden="false"]');

      // Tab to be activated
      var $toActivate = $picker.find('.tabs__content:nth-of-type(' + tabCount + ')');

      // Remove the active aria states
      $picker.find('.tabs__tabs__button[aria-selected="true"]').attr('aria-selected', 'false');
      $picker.find('.tabs__content[aria-hidden="false"]').attr('aria-hidden', 'true');


      // Add the active aria states
      $this.attr('aria-selected', 'true');
      $toActivate.attr('aria-hidden', 'false');

    });



    // accordion version of top tabs

    $('.tabs__title').click(function(){
      $(this).next('.tabs__content__itself').slideToggle();
      $(this).toggleClass('engaged');
    });

    // event listing specific internal filter tabs - accordion version

    $('.tabs__content__itself__content .tabs__filter__title').click(function(){
      $(this).next('.tabs__filter__content').slideToggle();
      $(this).toggleClass('engaged');
    });

    // event listing specific internal filter tabs


    $('.tabs__content__itself__tabs .tabs__filter__tab').click(function(){

      // Clicked element
      var $this = $(this);

      // Current picker
      var $picker = $this.parents('.tabs__content');

      // Index number, add one for zero index
      var tabCount = $(this).index() + 1;
      var contentCount = tabCount * 2;

      // Current active tab
    //  var $current = $picker.find('[aria-hidden="false"]');

      // Tab to be activated
      var $toActivate = $picker.find('.tabs__filter__content:nth-child(' + contentCount + ')');

      // Remove the active aria states
      $picker.find('.tabs__filter__tab[aria-selected="true"]').attr('aria-selected', 'false');
      $picker.find('.tabs__filter__content[aria-hidden="false"]').attr('aria-hidden', 'true');


      // Add the active aria states
      $this.attr('aria-selected', 'true');
      $toActivate.attr('aria-hidden', 'false');


    });


    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

    function checkSize(){
      if ($(window).width() <= 1160){

      }
      else {
        $('.tabs__content__itself').css('display', '');
      }
    }

 }); // for jQuery
})(jQuery);
;
//--------------
// Tool Tip
//--------------
(function($){
  $(document).ready(function(event){

    $(document).mousemove(function(event) {
      var currentMousePos = { x: 0, y: 0 };
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
      if($(".xy-mouse-position").length) {
        $(".xy-mouse-position").text("Postion X:" + currentMousePos.x + " Position Y:" + currentMousePos.y);
      }

      $(".tooltip-box-toggle").click(function(){
        var $tooltip_box = $(this).parents(".has-tooltip-box").siblings(".tooltip-box");

        $(this).toggleClass("tooltip-box-toggle--active");
        $tooltip_box.toggleClass("tooltip-box--active");

        //Tooltip positioning
        // We get the X and Y coordinates of the mouse on click
        // and we set the values via CSS to the left and right
          $tooltip_box.css({
            "left": currentMousePos.x,
            "top": currentMousePos.y
          });
        });
      });

    $(".tooltip-box i").click(function(){
      $(this).parents(".tooltip-box").removeClass("tooltip-box--active");
      $(this).parents(".tooltip-box").siblings(".has-tooltip-box").children(".tooltip-box-toggle").removeClass("tooltip-box-toggle--active");
    });

  }); // End Doc Ready
})(jQuery); // End jQuery
;
// ----------------------
// ACCORDION
// ----------------------
(function ($, Drupal) {

  // call the function again after mobile init
  function accordion() {
    $(".accordion-drop-down__toggle").click(function(event) {
      event.preventDefault();
      $(this).toggleClass("accordion-drop-down__toggle--active");

      if(!$(this).hasClass("accordion-drop-down__toggle--app-process")) {
        $(this).next().slideToggle();
      }

      $(this).find('span:not(.accordion-toggle-text)').text(function(i, v){
        return v === 'Click to Open' ? 'Click to Close' : 'Click to Open'
      });
      $(this).addClass("accordion-init");
    });
  } // ---------- End Accordion Core Function

  // ------ Mobile Only jQuery Plugin
  $.fn.mobileAccordion = function(accordionButtonText, classModifier, buttonClassModifier, iconType) {
    var $this = $(this),
        attr = $this.attr('data-mobile-accordion-btn-text'),
        dataIconType = $this.attr('data-icon-type');

    // if there is a mobile value for text on the html we'll use that instead.
    if (typeof attr !== typeof undefined && attr !== false) {
      var accordionButtonText = attr;
    }
    // if there is a mobile value for Icon on the html we'll use that instead.
    if (typeof dataIconType !== typeof undefined && dataIconType !== false) {
      var iconType = dataIconType;
    }



    if (iconType == "chevron") {
      var accordionMarkup = '<button type="button" class="accordion-drop-down__toggle accordion-drop-down__toggle--mobile '+buttonClassModifier+'"><span class="accordion-toggle-text">' + accordionButtonText + '</span><span class="show-for-sr">Click to Open</span><svg class="accordion-drop-down__icon" width="19px" height="12px" viewBox="0 0 19 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M15.9409091,11.0009804 C15.9409091,11.1659779 15.8785854,11.311935 15.7539363,11.4388561 L7.04100281,20.3105996 C6.91635364,20.4375208 6.77300925,20.5009804 6.61096532,20.5009804 C6.4489214,20.5009804 6.30557701,20.4375208 6.18092784,20.3105996 L5.24606373,19.3586958 C5.12141456,19.2317747 5.05909091,19.0858176 5.05909091,18.9208201 C5.05909091,18.7558226 5.12141456,18.6098655 5.24606373,18.4829443 L12.5940956,11.0009804 L5.24606373,3.51901646 C5.12141456,3.39209532 5.05909091,3.2461382 5.05909091,3.08114071 C5.05909091,2.91614323 5.12141456,2.7701861 5.24606373,2.64326496 L6.18092784,1.69136115 C6.30557701,1.56444001 6.4489214,1.50098039 6.61096532,1.50098039 C6.77300925,1.50098039 6.91635364,1.56444001 7.04100281,1.69136115 L15.7539363,10.5631046 C15.8785854,10.6900258 15.9409091,10.8359829 15.9409091,11.0009804 Z" id="path-1"></path></defs><g id="symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="cehvron-down" transform="translate(-1.000000, -5.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="use-chevron" fill="#CF102D" transform="translate(10.500000, 11.000980) rotate(-270.000000) translate(-10.500000, -11.000980) " xlink:href="#path-1"></use></g></g></svg></button>';
    } else {
      var accordionMarkup = '<button type="button" class="accordion-drop-down__toggle accordion-drop-down__toggle--mobile '+buttonClassModifier+'"><span class="accordion-toggle-text">' + accordionButtonText + '</span><span class="show-for-sr">Click to Open</span><svg version="1.1" id="plus" class="accordion-drop-down__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><rect id="vertical-line" class="accordion-drop-down__icon--rotate" x="10.8" class="st0" width="2.4" height="24"/><rect id="horizontal-line" x="10.8" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 24 1.776357e-15)" class="st0" width="2.4" height="24"/></svg></button>';
    }

    $this.wrap("<div class='mobile-accordion-container'></div>");
    if(!$this.hasClass("accordion-init")) {
      $this.addClass("accordion-init");
      $this.parents(".mobile-accordion-container").prepend(accordionMarkup).addClass(classModifier);
    }
  };

  Drupal.behaviors.sju_theme_accordion = {
    attach: function (context, settings) {

      // Target Mobile Accordion Elements and add markup/classes
      $(".mobile-accordion").each(function() {
        $(this).mobileAccordion('', '', '');
      });

      // ---------------------
      // Global Accordion Init
      $(".accordion-drop-down__toggle").unbind("click"); // solves double firing and also single firing issues in Drupal after AJAX load
      accordion();
      // ---------------------

    }
  }
})(jQuery, Drupal);
;
// ---------
// IMG GRID
// ---------
(function($) {
  $(document).ready(function() {
    initImgGrid();

    function initImgGrid() {
      var $grid = $('.img-grid'),
        $slider;

      if($grid.length) {

        // init Isotope
        $grid = $grid.isotope({
          // options...
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.isotope('layout');
        });

        // Assign number labels
          $('.img-grid-item__toggle').each(function(i) {
            $(this).attr('data-grid-number', + (i+0));
          });
        $('.img-grid-item--slide').each(function(i) {
            $(this).attr('data-grid-number', + (i+0));
        });

        $slider = $(".img-grid-slider");
        if ($slider.length && !$slider.hasClass('slick-initialized')) {
          $slider.slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            fade: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  variableWidth: true,
                  draggable: true,
                  arrows: true,
                  centerMode: false,
                  centerPadding: 'auto',
                  speed: 500,
                  fade: false,
                }
              }
            ]

          });

          // there are arrows intended to be in each slide,
          // Slick doesn't provide functionality for this
          // so we have faux buttons that click the real Slick Arrows buttons
          $(".img-grid-item--slide__nav button").on("click", function () {
            var label = $(this).attr("aria-label");
            $(this).parents(".img-grid-slider").find(".slick-arrow[aria-label=" + label + "]").click();
          });

          $(".img-grid-item__toggle").on("click", function (e) {

            e.preventDefault();

            // parse assigned grid-number attr
            var ImgGridNum = $(this).attr("data-grid-number");

            if($(this).attr("data-fancybox") == "") {
              $(".img-grid-slider").find("[data-grid-number='" + ImgGridNum + "'] a").click();
            }

            // slide to the correct position within the slider
            $(".img-grid-slider").slick('slickGoTo', ImgGridNum);

            // show the modal
            $(this).parents(".section--img-grid").addClass("modal-active").find(".modal").addClass("active");
            $(".site-header").addClass("header-modal-active");
          });
          // hide the modal
          $(".modal-close").on("click", function() {
            $(this).parents(".modal").removeClass("active");
            $(".site-header").removeClass("header-modal-active");
          });
        }
      }
    }
  });
})(jQuery);
;
(function($){
  $(document).ready(function(){



  $('.modal-link').each(function(){

    var $target = $(this).next('.modal-content');

    console.log( $target );

    $(this).on('click', function(){

      $.fancybox.open({
        src  : $target,
        type : 'inline',
        opts : {
          afterShow : function( instance, current ) {
            console.info('done!');
          }
        }
      });

    });

  });


 }); // for jQuery
})(jQuery);
;
