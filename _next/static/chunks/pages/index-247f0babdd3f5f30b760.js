(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4771:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(9008),o=n(9583),i=n(2809),c=(n(7294),n(5893));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=function(t){var e;return(0,c.jsx)("button",a(a({},t),{},{onClick:function(){e||(e=new Audio(t.src)),e.paused||(e.pause(),e.currentTime=0),e.play()},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:t.children}))},l=n(4155),f="https://button.guwino.me",p=l.env.NEXT_PUBLIC_REPOSITORY||"guwinomi/guwinomi-san-button",m=l.env.NEXT_PUBLIC_REPOSITORY_URL||"https://github.com/guwinomi/guwinomi-san-button",d=[{text:"\u3050\u3044\u306e\u307f\u3067\u3059",src:"/sounds/guwinomidesu.wav"},{text:"\u3050\u3044\u3044\u3044\u3044\u3043\u3043",src:"/sounds/guwiiii.wav"},{text:"\u3084\u30701",src:"/sounds/yaba_1.wav"},{text:"\u3084\u30702",src:"/sounds/yaba_2.wav"},{text:"\u3084\u30703",src:"/sounds/yaba_3.wav"},{text:"\u3084\u30704",src:"/sounds/yaba_4.wav"},{text:"\u3084\u30705",src:"/sounds/yaba_5.wav"},{text:"\u3084\u30706",src:"/sounds/yaba_6.wav"},{text:"\u304b\u306a\u3057\u3044",src:"/sounds/kanashii.wav"},{text:"(\u5438\u3044\u8fbc\u307f\u97f3)",src:"/sounds/suikomi.wav"},{text:"\u4eca\u591c\u306f\u3053\u308c\u3067\u512a\u52dd\u3057\u3066\u3044\u304f\u305e",src:"/sounds/yuusho.wav"},{text:"\u3093\u3083\u3042\u3044",src:"/sounds/nnyaai.wav"}],h=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("title",{children:"\u30b0\u30f0\u30ce\u30df\u3055\u3093\u30dc\u30bf\u30f3"}),(0,c.jsx)("meta",{name:"description",content:"\u30b0\u30f0\u30ce\u30df\u3055\u3093\u30dc\u30bf\u30f3\u3060\u3088"}),(0,c.jsx)("meta",{property:"og:title",content:"\u30b0\u30f0\u30ce\u30df\u3055\u3093\u30dc\u30bf\u30f3"}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:description",content:"\u30b0\u30f0\u30ce\u30df\u3055\u3093\u30dc\u30bf\u30f3\u3060\u3088"}),(0,c.jsx)("meta",{property:"og:url",content:f}),(0,c.jsx)("meta",{property:"og:image",content:"".concat(f,"/favicon.png")}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary"})]}),(0,c.jsxs)("div",{className:"container pt-4 mx-auto",children:[(0,c.jsx)("h1",{className:"mb-8 text-4xl font-bold text-center text-gray-800",children:"\u30b0\u30f0\u30ce\u30df\u3055\u3093\u30dc\u30bf\u30f3"}),(0,c.jsx)("ul",{className:"flex flex-wrap",children:d.map((function(t,e){return(0,c.jsx)("li",{className:"flex-initial p-1",children:(0,c.jsx)(u,{src:t.src,children:t.text})},e)}))}),(0,c.jsx)("div",{className:"mt-6 text-2xl text-center",children:(0,c.jsx)("a",{title:p,href:m,target:"_blank",rel:"noreferrer",children:(0,c.jsx)(o.hJX,{className:"inline"})})})]})]})}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4771)}])},9008:function(t,e,n){t.exports=n(639)},4155:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var s,a=[],u=!1,l=-1;function f(){u&&s&&(u=!1,s.length?a=s.concat(a):l=-1,a.length&&p())}function p(){if(!u){var t=c(f);u=!0;for(var e=a.length;e;){for(s=a,a=[];++l<e;)s&&s[l].run();l=-1,e=a.length}s=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new m(t,e)),1!==a.length||u||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},4405:function(t,e,n){"use strict";n.d(e,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function a(t){return t&&t.map((function(t,e){return r.createElement(t.tag,c({key:e},t.attr),a(t.child))}))}function u(t){return function(e){return r.createElement(l,c({attr:c({},t.attr)},e),a(t.child))}}function l(t){var e=function(e){var n,o=t.attr,i=t.size,a=t.title,u=s(t,["attr","size","title"]),l=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}}},function(t){t.O(0,[445,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);