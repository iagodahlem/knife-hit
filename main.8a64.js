!function(e){function t(t){for(var o,a,s=t[0],u=t[1],f=t[2],l=0,h=[];l<s.length;l++)a=s[l],r[a]&&h.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(c&&c(t);h.length;)h.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={1:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var c=u;i.push([1071,0]),n()}({1071:function(e,t,n){"use strict";var o=n(125),r=u(o),i=u(n(434)),a=u(n(433)),s=u(n(432));function u(e){return e&&e.__esModule?e:{default:e}}n(430),window.addEventListener("load",function(){var e={type:r.default.AUTO,width:750,height:1334,backgroundColor:"#05424C",scene:[i.default,a.default,s.default]};window.game=new o.Game(e),window.focus(),f(),c()});var f=function(){window.addEventListener("resize",c,!1)},c=function(){var e=document.querySelector("canvas"),t=window.innerWidth,n=window.innerHeight,o=t/n,r=window.game.config.width/window.game.config.height;o<r?(e.style.width=t+"px",e.style.height=t/r+"px"):(e.style.width=n*r+"px",e.style.height=n+"px")}},430:function(e,t,n){},431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={rotationSpeed:3,throwSpeed:150,minAngle:10}},432:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(125),i=s(r),a=s(n(431));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"game"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Scene),o(t,[{key:"create",value:function(){this.canThrow=!0,this.knifeGroup=this.add.group(),this.knife=this.add.sprite(window.game.config.width/2,window.game.config.height/5*4,"knife"),this.target=this.add.sprite(window.game.config.width/2,400,"target"),this.target.depth=1,this.input.on("pointerdown",this.throwKnife,this)}},{key:"update",value:function(){this.target.angle+=a.default.rotationSpeed;for(var e=this.knifeGroup.getChildren(),t=0;t<e.length;t++){e[t].angle+=a.default.rotationSpeed;var n=i.default.Math.DegToRad(e[t].angle+90);e[t].x=this.target.x+this.target.width/2*Math.cos(n),e[t].y=this.target.y+this.target.width/2*Math.sin(n)}}},{key:"throwKnife",value:function(){this.canThrow&&(this.canThrow=!1,this.tweens.add({targets:[this.knife],y:this.target.y+this.target.width/2,duration:a.default.throwSpeed,callbackScope:this,onComplete:this.onCompleteThrowKnife}))}},{key:"onCompleteThrowKnife",value:function(){for(var e=this,t=!0,n=this.knifeGroup.getChildren(),o=0;o<n.length;o++){if(Math.abs(i.default.Math.Angle.ShortestBetween(this.target.angle,n[o].impactAngle))<a.default.minAngle){t=!1;break}}if(t){this.canThrow=!0;var r=this.add.sprite(this.knife.x,this.knife.y,"knife");r.impactAngle=this.target.angle,this.knifeGroup.add(r),this.knife.y=window.game.config.height/5*4}else this.tweens.add({targets:[this.knife],y:this.sys.game.config.height+this.knife.height,rotation:5,duration:4*a.default.throwSpeed,callbackScope:this,onComplete:function(){e.scene.start("game")}})}}]),t}();t.default=u},433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(125);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"loading"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Scene),o(t,[{key:"preload",value:function(){this.loadAssets(this.cache.json.get("assets")),this.add.image(this.centerX(),this.centerY(),"logo"),this.createProgressbar(this.centerX(),this.centerY()+240)}},{key:"loadAssets",value:function(e){var t=this;Object.keys(e).forEach(function(n){t.load.image(n,"./assets/"+e[n])})}},{key:"centerX",value:function(){return this.sys.game.config.width/2}},{key:"centerY",value:function(){return this.sys.game.config.height/2}},{key:"createProgressbar",value:function(e,t){var n=this,o=e-200,r=t-8,i=this.add.graphics(),a=function(e){i.clear(),i.fillStyle("#ffffff",1),i.fillRect(o,r,400*e,16)};this.load.on("progress",a),this.load.once("complete",function(){n.load.off("progress",a),n.scene.start("game")})}}]),t}();t.default=i},434:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(125);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"boot"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Scene),o(t,[{key:"preload",value:function(){this.load.json("assets","./assets/assets.json"),this.load.image("logo","./assets/logo.png")}},{key:"create",value:function(){this.scene.start("loading")}}]),t}();t.default=i}});