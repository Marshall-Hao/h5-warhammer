(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-38678875":"074c33cf","chunk-424f638c":"870e3973","chunk-682a5446":"9165b0fb","chunk-d678c36c":"d3224873","chunk-05022229":"c60f074c","chunk-4a4784c5":"6d160e27","chunk-34d85200":"23664acf","chunk-3501ddda":"ef02fbc6","chunk-a9cff908":"b6c3f9ea","chunk-798ad760":"ea6ef69e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-38678875":1,"chunk-424f638c":1,"chunk-682a5446":1,"chunk-05022229":1,"chunk-34d85200":1,"chunk-3501ddda":1,"chunk-a9cff908":1,"chunk-798ad760":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-38678875":"733abd50","chunk-424f638c":"2e232780","chunk-682a5446":"fd91be48","chunk-d678c36c":"31d6cfe0","chunk-05022229":"09e7d1d8","chunk-4a4784c5":"31d6cfe0","chunk-34d85200":"32a3f549","chunk-3501ddda":"82ed1814","chunk-a9cff908":"b3cdec62","chunk-798ad760":"4a5624cc"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),n(a)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0658":function(e,t,n){"use strict";n("9555")},"0ce7":function(e,t,n){"use strict";n("1800")},1800:function(e,t,n){},"26b3":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,o=n("5530"),c=n("bc3a"),a=n.n(c),u=n("2808");function i(e,t,n){return n=Object(o["a"])(Object(o["a"])({},n),{"Ahoy-Visit":u["a"].getVisitId(),"Ahoy-Visitor":u["a"].getVisitorId()}),a.a.post(e,t,{headers:n}).then((function(e){var t=e.data;return t})).catch((function(e){console.error("error is",e)}))}r="https://api-staging.h5.games-workshop-china.com/api/v1/",a.a.defaults.baseURL=r,a.a.defaults.headers["Content-Type"]="application/json"},2808:function(e,t,n){"use strict";var r=n("5c8c");r["a"].configure({urlPrefix:"https://api-staging.h5.games-workshop-china.com",visitDuration:30}),t["a"]=r["a"]},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"currentAosQuestion",(function(){return ae})),n.d(r,"currentFourtyKQuestion",(function(){return ue}));var o={};n.r(o),n.d(o,"addQuestions",(function(){return ie}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={key:0};function u(e,t,n,r,o,u){var i=Object(c["H"])("DesktopLanding"),s=Object(c["H"])("router-view"),d=Object(c["H"])("sound");return Object(c["z"])(),Object(c["g"])(c["a"],null,[o.mobile?(Object(c["z"])(),Object(c["e"])(s,{key:1},{default:Object(c["Q"])((function(e){var t=e.Component;return[Object(c["k"])(c["b"],{name:"fade"},{default:Object(c["Q"])((function(){return[(Object(c["z"])(),Object(c["e"])(Object(c["I"])(t)))]})),_:2},1024)]})),_:1})):(Object(c["z"])(),Object(c["g"])("div",a,[Object(c["k"])(i)])),Object(c["k"])(d)],64)}var i=n("1da1"),s=n("5530"),d=(n("96cf"),n("d3b7"),n("159b"),n("e9c4"),n("26b3")),f=n("aaef"),l=n("335a"),h=n("032f"),p=n("2808");function b(){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(h["b"])(),n=t.getCookie(f["b"]),r={"Ahoy-Visit":p["a"].getVisitId(),"Ahoy-Visitor":p["a"].getVisitorId()},!n){e.next=12;break}return e.next=6,Object(d["a"])("/login",{email:n["X-USER-EMAIL"]},r);case 6:return o=e.sent,m(o["categories"]["40k"]["questions"]),v(o["categories"]["aos"]["questions"]),e.abrupt("return",o);case 12:return e.next=14,Object(d["a"])("/login",{},r);case 14:return o=e.sent,t.setCookie(f["b"],JSON.stringify(o["headers"])),l["a"].session.set(f["b"],o["headers"]),m(o["categories"]["40k"]["questions"]),v(o["categories"]["aos"]["questions"]),e.abrupt("return",o);case 20:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function m(e){e.forEach((function(e){l["a"].session.set("__40kquestion".concat(e.page_template_number,"__"),e)}))}function v(e){e.forEach((function(e){l["a"].session.set("__aosquestion".concat(e.page_template_number,"__"),e)}))}var k=n("5502"),y={autoplay:"",loop:"",ref:"audio"},O=["src"],j=Object(c["j"])(" Your browser does not support the audio element. ");function _(e,t,n,r,o,a){return Object(c["z"])(),Object(c["g"])("audio",y,[Object(c["h"])("source",{src:n.soundUrl,type:"audio/wav"},null,8,O),j],512)}var w={name:"sound",computed:Object(s["a"])({},Object(k["e"])(["play"])),props:{soundUrl:{default:n("d18b")}},watch:{play:function(e){e?this.$refs.audio.play():this.$refs.audio.pause()}},mounted:function(){this.autoPlay()},methods:{autoPlay:function(){var e=this.$refs.audio;function t(){e.play(),document.removeEventListener("touchstart",t,!1)}document.addEventListener("WeixinJSBridgeReady",t,!1),document.addEventListener("touchstart",t,!1)}}},P=n("d959"),x=n.n(P);const E=x()(w,[["render",_]]);var q=E,A=n("a21f"),S=n.n(A),C=n("b76f"),Q=n.n(C),L={class:"body fixed-no-scroll"},T=Object(c["i"])('<div class="bg" data-v-7c8150bc></div><div class="content" data-v-7c8150bc><img class="content-logo" src="'+S.a+'" alt="warhammer logo" data-v-7c8150bc><h2 data-v-7c8150bc> 测测你的战锤“基因” <br data-v-7c8150bc> 你所属的战锤宇宙是哪个？ </h2><p data-v-7c8150bc> 扫描下方二维码进入测试吧！ <br data-v-7c8150bc> （手机端体验更佳哦!） </p><img class="content-qr" src="'+Q.a+'" alt="warhammer qr code" data-v-7c8150bc></div><footer data-v-7c8150bc><a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow" data-v-7c8150bc>沪ICP备17004107号-1</a></footer>',3),z=[T];function I(e,t){return Object(c["z"])(),Object(c["g"])("div",L,z)}n("0ce7");const V={},R=x()(V,[["render",I],["__scopeId","data-v-7c8150bc"]]);var B=R,K=n("bbd5"),N={data:function(){return{mobile:!0}},components:{Sound:q,DesktopLanding:B},mounted:function(){console.log(111,Object(K["b"])()),this.mobile=Object(K["b"])(),this.login()},methods:Object(s["a"])({login:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:n=t.sent,r={aos:n["categories"]["aos"]["questions"],fourtyK:n["categories"]["40k"]["questions"]},e.addQuestions(r),console.log(n);case 6:case"end":return t.stop()}}),t)})))()}},Object(k["c"])(["addQuestions"]))};n("0658");const D=x()(N,[["render",u]]);var M=D,U=(n("3ca3"),n("ddb0"),n("6c02")),H=function(){return n.e("chunk-38678875").then(n.bind(null,"bede"))},J=function(){return n.e("chunk-424f638c").then(n.bind(null,"bd91"))},$=function(){return Promise.all([n.e("chunk-d678c36c"),n.e("chunk-05022229")]).then(n.bind(null,"1c91"))},F=function(){return n.e("chunk-682a5446").then(n.bind(null,"66ba"))},W=function(){return Promise.all([n.e("chunk-d678c36c"),n.e("chunk-4a4784c5"),n.e("chunk-3501ddda")]).then(n.bind(null,"4303"))},X=function(){return Promise.all([n.e("chunk-d678c36c"),n.e("chunk-4a4784c5"),n.e("chunk-a9cff908")]).then(n.bind(null,"de02"))},Y=function(){return Promise.all([n.e("chunk-d678c36c"),n.e("chunk-798ad760")]).then(n.bind(null,"0fc1"))},G=function(){return Promise.all([n.e("chunk-d678c36c"),n.e("chunk-4a4784c5"),n.e("chunk-34d85200")]).then(n.bind(null,"fbd8"))},Z=[{path:"/",redirect:"/landing"},{path:"/landing",component:H},{path:"/terms",component:J},{path:"/choose",component:$},{path:"/questions",component:F,beforeEnter:function(e,t,n){var r=e.params.id,o=l["a"].session.get("__currentquiz__");!o||r>7||e.matched.length<2?n({path:"/landing"}):n()},children:[{path:"40k/:id",component:W},{path:"aos/:id",component:X}]},{path:"/reveal",component:Y},{path:"/share",component:G,beforeEnter:function(e,t,n){var r=e.params.id;console.log(r);var o=l["a"].session.get("__currentquiz__");!o||r>7?n({path:"/landing"}):n()}}],ee=Object(U["a"])({history:Object(U["b"])(),routes:Z});ee.beforeEach((function(e,t,n){e.matched.length?n():n({path:"/landing"})}));var te=ee,ne={category:null,aosQuestions:[],fourtykQuestions:[],point:0,play:!0},re=ne,oe={setAos:function(e,t){e.aosQuestions=t},set40K:function(e,t){e.fourtykQuestions=t},setCategory:function(e,t){e.category=t},togglePlay:function(e){e.play=!e.play},noPlay:function(e){e.play=!1}},ce=oe,ae=function(e){return e.aosQuestions},ue=function(e){return e.fourtykQuestions};function ie(e,t){var n=e.commit,r=t.aos,o=t.fourtyK;n("setAos",r),n("set40K",o)}var se=!1,de=Object(k["b"])({state:re,getters:r,mutations:ce,actions:o,strict:se,plugins:se?[Object(k["a"])()]:[]}),fe=(n("a41b"),n("77ed"),n("af1e"),n("c83c"));Object(c["d"])(M).use(de).use(te).use(fe["a"]).use(h["a"]).mount("#app"),h["a"].config({expire:"7d"}),console.log=function(){}},9555:function(e,t,n){},a21f:function(e,t,n){e.exports=n.p+"img/logo_lg.f8a80d28.png"},a41b:function(e,t,n){},aaef:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r="__user__",o="__quiz__"},b76f:function(e,t,n){e.exports=n.p+"img/base_qr.a035c4c1.png"},bbd5:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u}));n("fb6a"),n("d3b7"),n("ac1f"),n("466d");function r(e,t,n){return e.slice(t,n)}var o=null;function c(e,t,n){return function(){clearTimeout(o),o=setTimeout((function(){e(n)}),t)}}function a(){var e=[/Android/i,/webOS/i,/iPhone/i,/iPod/i,/BlackBerry/i,/Windows Phone/i];return e.some((function(e){return navigator.userAgent.match(e)}))}function u(e){window.history.pushState(null,null,e),window.onpopstate=function(){window.history.pushState(null,null,e)}}},d18b:function(e,t,n){e.exports=n.p+"media/landing-music.0b30856d.wav"}});
//# sourceMappingURL=app.433f04cd.js.map