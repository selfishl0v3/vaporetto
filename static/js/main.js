!function(){"use strict";function e(){var e=new Date,t=(e.getHours()<10?"0":"")+e.getHours(),n=(e.getMinutes()<10?"0":"")+e.getMinutes();return t+":"+n}function t(e){if(0===e.length){var t=document.createElement("div");t.classList.add("zero-results"),i.innerHTML='<div class="padding"><h4>Nessun risultato trovato</h4></div>',c.innerHTML="",i.appendChild(t)}else{i.innerHTML="",c.innerHTML="";var n=_.chain(e).filter(function(e){return _.has(e,"diretti")}).map(function(e){return e.diretti}).flatten().uniq(function(e){return JSON.stringify(e)}).sortBy(function(e){return moment(e[0].ora,"HH:mm").valueOf()}).value();console.log("diretti >> ",n);var o=_.chain(e).filter(function(e){return _.has(e,"cambio")}).map(function(e){return e.cambio}).flatten().uniq(function(e){return JSON.stringify(e)}).sortBy(function(e){return moment(e[0].ora,"HH:mm").valueOf()}).value();console.log("con cambio >> ",o);var r=function(e,t,n){0===e.length?n.innerHTML="":e.forEach(function(e){var o=document.createElement("div");o.classList.add("single-voyage"),o.classList.add("pure-g-r"),e.forEach(function(e,n){var r=document.createElement("div");if(r.classList.add("single-stop"),r.classList.add("pure-u-1"),r.classList.add("pure-u-sm-1-2"),r.innerHTML='<div class="padding"><h4>'+e.fermata+"</h4><h5>Linea "+e.linea+"</h5><h5>"+e.ora+"</h5><h5>"+e.giorni+"</h5></div>",r.classList.add("linea-"+e.linea.replace(".","")),o.appendChild(r),1===n&&"diretti"===t||3===n&&"cambio"===t){var a=document.createElement("div");a.classList.add("separator-route"),o.appendChild(a)}if(1===n&&"cambio"===t){var i=document.createElement("div");i.classList.add("separator-cambio"),o.appendChild(i)}}),n.appendChild(o)})};r(n,"diretti",i),r(o,"cambio",c)}}!function(e,t){"function"==typeof define&&define.amd?define("smoothScroll",t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(window||this,function(e){var t,n,o,r={},a=!!document.querySelector&&!!e.addEventListener,i={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},c=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var r=0,a=e.length;a>r;r++)t.call(n,e[r],r,e)},u=function(e,t){var n={};return c(e,function(t,o){n[o]=e[o]}),c(t,function(e,o){n[o]=t[o]}),n},s=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},l=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},d=function(e){for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===i?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return a},f=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},m=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},p=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},h=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},v=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))};r.animateScroll=function(t,n,r){var a=u(a||i,r||{}),c=h(t?t.getAttribute("data-options"):null);a=u(a,c),n="#"+d(n.substr(1));var s="#"===n?document.documentElement:document.querySelector(n),g=e.pageYOffset;o||(o=document.querySelector("[data-scroll-header]"));var y,b,L,E=null===o?0:l(o)+o.offsetTop,H=m(s,E,parseInt(a.offset,10)),S=H-g,O=p(),I=0;v(n,a.updateURL);var T=function(o,r,i){var c=e.pageYOffset;(o==r||c==r||e.innerHeight+c>=O)&&(clearInterval(i),s.focus(),a.callbackAfter(t,n))},C=function(){I+=16,b=I/parseInt(a.speed,10),b=b>1?1:b,L=g+S*f(a.easing,b),e.scrollTo(0,Math.floor(L)),T(L,H,y)},M=function(){a.callbackBefore(t,n),y=setInterval(C,16)};0===e.pageYOffset&&e.scrollTo(0,0),M()};var g=function(e){var n=s(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),r.animateScroll(n,n.hash,t))},y=function(){n||(n=setTimeout(function(){n=null,headerHeight=null===o?0:l(o)+o.offsetTop},66))};return r.destroy=function(){t&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",y,!1),t=null,n=null,o=null)},r.init=function(n){a&&(r.destroy(),t=u(i,n||{}),o=document.querySelector("[data-scroll-header]"),document.addEventListener("click",g,!1),o&&e.addEventListener("resize",y,!1))},r}),NodeList.prototype.forEach=Array.prototype.forEach,HTMLCollection.prototype.forEach=Array.prototype.forEach,NodeList.prototype.on=function(e,t){this.forEach(function(n){n.addEventListener(e,t)})},smoothScroll.init({updateURL:!1});var n=document.getElementById("search"),o=document.getElementById("start"),r=document.getElementById("end"),a=document.getElementById("time"),i=document.getElementById("results-diretti").querySelector(".results"),c=document.getElementById("results-cambio").querySelector(".results");reqwest({url:"http://api.vaporetto.mobi/getStops",type:"json",method:"get",contentType:"application/json",error:function(e){console.log(e)},success:function(t){t.forEach(function(e){var t=document.createElement("option");t.textContent=e.description,t.value=e.id,o.appendChild(t),r.appendChild(t.cloneNode(!0))}),a.value=e()}}),n.addEventListener("submit",function(e){e.preventDefault(),i.innerHTML="Loading...",c.innerHTML="";var n=o.value.trim(),u=r.value.trim(),s=a.value.trim();return""===n?void(i.innerHTML="<b>Attenzione!</b> Selezionare una partenza!"):""===u?void(i.innerHTML="<b>Attenzione!</b> Selezionare un arrivo!"):""===s?void(i.innerHTML="<b>Attenzione!</b> Selezionare un orario!"):void reqwest({url:"http://api.vaporetto.mobi/getResults",type:"json",method:"get",contentType:"application/json",data:{start:n,end:u,time:s},error:function(e){console.log(e)},success:function(e){console.log(e),t(e.results)}})})}();