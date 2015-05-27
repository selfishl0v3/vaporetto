/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection, reqwest, smoothScroll, _, console */





(function () {
  'use strict';

  /** smooth-scroll v5.3.3, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
  !function(e,t){"function"==typeof define&&define.amd?define("smoothScroll",t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(window||this,function(e){"use strict";var t,n,o,r={},a=!!document.querySelector&&!!e.addEventListener,c={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},u=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var r=0,a=e.length;a>r;r++)t.call(n,e[r],r,e)},i=function(e,t){var n={};return u(e,function(t,o){n[o]=e[o]}),u(t,function(e,o){n[o]=t[o]}),n},l=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e){for(var t,n=String(e),o=n.length,r=-1,a="",c=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return a},d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},m=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},p=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},v=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))};r.animateScroll=function(t,n,r){var a=i(a||c,r||{}),u=p(t?t.getAttribute("data-options"):null);a=i(a,u),n="#"+f(n.substr(1));var l="#"===n?document.documentElement:document.querySelector(n),g=e.pageYOffset;o||(o=document.querySelector("[data-scroll-header]"));var b,O,y,S=null===o?0:s(o)+o.offsetTop,I=h(l,S,parseInt(a.offset,10)),H=I-g,E=m(),A=0;v(n,a.updateURL);var L=function(o,r,c){var u=e.pageYOffset;(o==r||u==r||e.innerHeight+u>=E)&&(clearInterval(c),l.focus(),a.callbackAfter(t,n))},Q=function(){A+=16,O=A/parseInt(a.speed,10),O=O>1?1:O,y=g+H*d(a.easing,O),e.scrollTo(0,Math.floor(y)),L(y,I,b)},C=function(){a.callbackBefore(t,n),b=setInterval(Q,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()};var g=function(e){var n=l(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),r.animateScroll(n,n.hash,t))},b=function(){n||(n=setTimeout(function(){n=null,headerHeight=null===o?0:s(o)+o.offsetTop},66))};return r.destroy=function(){t&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",b,!1),t=null,n=null,o=null)},r.init=function(n){a&&(r.destroy(),t=i(c,n||{}),o=document.querySelector("[data-scroll-header]"),document.addEventListener("click",g,!1),o&&e.addEventListener("resize",b,!1))},r});




  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };


  //  -- initialize smooth scroll for anchors --
  smoothScroll.init({ updateURL: false });


  //  -- elements --
  var searchForm = document.getElementById('search');
  var start = document.getElementById('start');
  var end = document.getElementById('end');
  var time = document.getElementById('time');

  var resultsDiretti = document.getElementById('results-diretti').querySelector('.results');
  var resultsCambio = document.getElementById('results-cambio').querySelector('.results');


  //  -- return current time in format HH:mm --
  function getTimeNow() {
    var d = new Date();
    var h = (d.getHours() < 10 ? '0' : '') + d.getHours();
    var m = (d.getMinutes() < 10 ? '0': '') + d.getMinutes();
    return h + ':' + m;
  }





  function ___x(__s) {

    if (__s.length === 0) {
      var _zeroResults = document.createElement('div');

      _zeroResults.classList.add('zero-results');
      resultsDiretti.innerHTML = '<div class="padding">' +
                                  '<h4>Nessun risultato trovato</h4>' +
                                  '</div>';
      resultsCambio.innerHTML = '';
      resultsDiretti.appendChild(_zeroResults);

    } else {
      resultsDiretti.innerHTML = '';
      resultsCambio.innerHTML = '';

      var _diretti = _.chain(__s)
                      .filter(function (_s) {
                        return _.has(_s, 'diretti');
                      })
                      .map(function (item) {
                        return item.diretti;
                      })
                      .flatten()
                      .uniq(function (item) {
                        return JSON.stringify(item);
                      })
                      .sortBy(function (item) {
                        return moment(item[0].ora, 'HH:mm').valueOf();
                      })
                      .value();
      console.log('diretti >> ', _diretti);
      var _cambio = _.chain(__s)
                      .filter(function (_s) {
                        return _.has(_s, 'cambio');
                      })
                      .map(function (item) {
                        return item.cambio;
                      })
                      .flatten()
                      .uniq(function (item) {
                        return JSON.stringify(item);
                      })
                      .sortBy(function (item) {
                        return moment(item[0].ora, 'HH:mm').valueOf();
                      })
                      .value();
      console.log('con cambio >> ', _cambio);

      var buildOutput = function (_routes, _type, _finalElement) {

        if (_routes.length === 0) {
          _finalElement.innerHTML = '';
        } else {

          _routes.forEach(function (_r) {
            var thisV = document.createElement('div');

            thisV.classList.add('single-voyage');
            thisV.classList.add('pure-g-r');
            _r.forEach(function (_s, _sI) {
              var thisStop = document.createElement('div');

              thisStop.classList.add('single-stop');
              thisStop.classList.add('pure-u-1');
              thisStop.classList.add('pure-u-sm-1-2');
              thisStop.innerHTML = '<div class="padding">' +
                                    '<h4>' + _s.fermata + '</h4>' +
                                    '<h5>Linea ' + _s.linea + '</h5>' + 
                                    '<h5>' + _s.ora + '</h5>' +
                                    '<h5>' + _s.giorni + '</h5>' +
                                    '</div>';

              thisStop.classList.add('linea-' + _s.linea.replace('.', ''));
              thisV.appendChild(thisStop);

              if ( (_sI === 1 && _type === 'diretti') || (_sI === 3 && _type === 'cambio') ) {
                var _separator = document.createElement('div');

                _separator.classList.add('separator-route');
                //_separator.innerHTML = '=== end ===';
                thisV.appendChild(_separator);
              }

              if (_sI === 1 && _type === 'cambio') {
                var _separatorCambio = document.createElement('div');
                _separatorCambio.classList.add('separator-cambio');
                //_separatorCambio.innerHTML = '=== cambio ===';
                thisV.appendChild(_separatorCambio);
              }

            });

            _finalElement.appendChild(thisV);
          });

        }   //  -- end if results > 0 --

      };    //  -- end buildOutput --


      //  -- bang! --
      buildOutput(_diretti, 'diretti', resultsDiretti);
      buildOutput(_cambio, 'cambio', resultsCambio);

    } //  -- end else if 0 results --




  }










  //  -- get stops from ACTV website --
  reqwest({
    url: 'http://api.vaporetto.mobi/getStops',
    type: 'json',
    method: 'get',
    contentType: 'application/json',
    error: function (err) {
      console.log(err);
    },
    success: function (resp) {
      //console.log(resp);
      resp.forEach(function (stop) {

        var thisOpt = document.createElement('option');
        thisOpt.textContent = stop.description;
        thisOpt.value = stop.id;

        start.appendChild(thisOpt);
        end.appendChild(thisOpt.cloneNode(true));

      });
      time.value = getTimeNow();      
    }
  });


  //  -- search form submit --
  searchForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    resultsDiretti.innerHTML = 'Loading...';
    resultsCambio.innerHTML = '';

    var _start = start.value.trim();
    var _end = end.value.trim();
    var _time = time.value.trim();

    if (_start === '') {
      resultsDiretti.innerHTML = '<b>Attenzione!</b> Selezionare una partenza!';
      return;
    }

    if (_end === '') {
      resultsDiretti.innerHTML = '<b>Attenzione!</b> Selezionare un arrivo!';
      return;
    }

    if (_time === '') {
      resultsDiretti.innerHTML = '<b>Attenzione!</b> Selezionare un orario!';
      return;
    }

    reqwest({
      url: 'http://api.vaporetto.mobi/getResults',
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      data: {start: _start, end: _end, time: _time},
      error: function (err) {
        console.log(err);
      },
      success: function (resp) {
        console.log(resp);
        ___x(resp.results);
      }
    });
  });


})();