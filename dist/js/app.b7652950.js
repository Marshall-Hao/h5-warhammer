(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-424f638c":"6807cab0","chunk-682a5446":"b7e2023f","chunk-a8b88e70":"ff0aa192","chunk-d678c36c":"d3224873","chunk-295570b8":"dc2bc7dd","chunk-596db9fd":"071cb6b0","chunk-80c9512e":"468514cd","chunk-de1047dc":"6d9c2e5d","chunk-dad2a830":"5d73810f","chunk-ecbf0696":"714477a8","chunk-a27891ae":"56c7b68b"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-424f638c":1,"chunk-682a5446":1,"chunk-a8b88e70":1,"chunk-295570b8":1,"chunk-80c9512e":1,"chunk-de1047dc":1,"chunk-dad2a830":1,"chunk-ecbf0696":1,"chunk-a27891ae":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-424f638c":"2e232780","chunk-682a5446":"fd91be48","chunk-a8b88e70":"7a968b96","chunk-d678c36c":"31d6cfe0","chunk-295570b8":"b2b4f2b8","chunk-596db9fd":"31d6cfe0","chunk-80c9512e":"ec947522","chunk-de1047dc":"f74124b3","chunk-dad2a830":"41e1e07e","chunk-ecbf0696":"2b0ff546","chunk-a27891ae":"3a541caf"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],h.parentNode.removeChild(h),t(a)},h.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var h=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"26b3":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r,o=t("5530"),c=t("bc3a"),a=t.n(c),u=t("2808");function i(e,n,t){return t=Object(o["a"])(Object(o["a"])({},t),{"Ahoy-Visit":u["a"].getVisitId(),"Ahoy-Visitor":u["a"].getVisitorId()}),a.a.post(e,n,{headers:t}).then((function(e){var n=e.data;return n})).catch((function(e){console.error("error is",e)}))}r="https://api-staging.h5.games-workshop-china.com/api/v1/",a.a.defaults.baseURL=r,a.a.defaults.headers["Content-Type"]="application/json"},2808:function(e,n,t){"use strict";var r=t("5c8c");r["a"].configure({urlPrefix:"https://api-staging.h5.games-workshop-china.com",visitDuration:30}),n["a"]=r["a"]},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"currentAosQuestion",(function(){return F})),t.d(r,"currentFourtyKQuestion",(function(){return H}));var o={};t.r(o),t.d(o,"addQuestions",(function(){return W}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23");function a(e,n,t,r,o,a){var u=Object(c["I"])("router-view"),i=Object(c["I"])("sound");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(u,null,{default:Object(c["R"])((function(e){var n=e.Component;return[Object(c["k"])(c["b"],{name:"fade"},{default:Object(c["R"])((function(){return[(Object(c["A"])(),Object(c["e"])(Object(c["J"])(n)))]})),_:2},1024)]})),_:1}),Object(c["k"])(i)],64)}var u=t("1da1"),i=t("5530"),s=(t("96cf"),t("d3b7"),t("159b"),t("e9c4"),t("26b3")),d=t("aaef"),f=t("335a"),h=t("032f"),l=t("2808");function p(){return b.apply(this,arguments)}function b(){return b=Object(u["a"])(regeneratorRuntime.mark((function e(){var n,t,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Object(h["b"])(),t=n.getCookie(d["b"]),r={"Ahoy-Visit":l["a"].getVisitId(),"Ahoy-Visitor":l["a"].getVisitorId()},!t){e.next=12;break}return e.next=6,Object(s["a"])("/login",{email:t["X-USER-EMAIL"]},r);case 6:return o=e.sent,m(o["categories"]["40k"]["questions"]),g(o["categories"]["aos"]["questions"]),e.abrupt("return",o);case 12:return e.next=14,Object(s["a"])("/login",{},r);case 14:return o=e.sent,n.setCookie(d["b"],JSON.stringify(o["headers"])),f["a"].session.set(d["b"],o["headers"]),m(o["categories"]["40k"]["questions"]),g(o["categories"]["aos"]["questions"]),e.abrupt("return",o);case 20:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function m(e){e.forEach((function(e){f["a"].session.set("__40kquestion".concat(e.page_template_number,"__"),e)}))}function g(e){e.forEach((function(e){f["a"].session.set("__aosquestion".concat(e.page_template_number,"__"),e)}))}var k=t("5502"),v={autoplay:"",loop:"",ref:"audio"},y=["src"],j=Object(c["j"])(" Your browser does not support the audio element. ");function O(e,n,t,r,o,a){return Object(c["A"])(),Object(c["g"])("audio",v,[Object(c["h"])("source",{src:t.soundUrl,type:"audio/wav"},null,8,y),j],512)}var _={name:"sound",computed:Object(i["a"])({},Object(k["e"])(["play"])),props:{soundUrl:{default:t("d18b")}},watch:{play:function(e){e?this.$refs.audio.play():this.$refs.audio.pause()}},mounted:function(){this.autoPlay()},methods:{autoPlay:function(){var e=this.$refs.audio;function n(){e.play(),document.removeEventListener("touchstart",n,!1)}document.addEventListener("WeixinJSBridgeReady",n,!1),document.addEventListener("touchstart",n,!1)}}},w=t("d959"),P=t.n(w);const E=P()(_,[["render",O]]);var x=E,A={data:function(){return{}},components:{Sound:x},mounted:function(){this.login()},methods:Object(i["a"])({login:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,p();case 2:t=n.sent,r={aos:t["categories"]["aos"]["questions"],fourtyK:t["categories"]["40k"]["questions"]},e.addQuestions(r),console.log(t);case 6:case"end":return n.stop()}}),n)})))()}},Object(k["c"])(["addQuestions"]))};t("bd28");const q=P()(A,[["render",a]]);var S=q,C=(t("3ca3"),t("ddb0"),t("6c02")),Q=function(){return t.e("chunk-a8b88e70").then(t.bind(null,"bede"))},L=function(){return t.e("chunk-424f638c").then(t.bind(null,"bd91"))},R=function(){return Promise.all([t.e("chunk-d678c36c"),t.e("chunk-a27891ae")]).then(t.bind(null,"1c91"))},I=function(){return t.e("chunk-682a5446").then(t.bind(null,"66ba"))},T=function(){return Promise.all([t.e("chunk-d678c36c"),t.e("chunk-596db9fd"),t.e("chunk-de1047dc"),t.e("chunk-ecbf0696")]).then(t.bind(null,"4303"))},V=function(){return Promise.all([t.e("chunk-d678c36c"),t.e("chunk-596db9fd"),t.e("chunk-de1047dc"),t.e("chunk-dad2a830")]).then(t.bind(null,"de02"))},K=function(){return Promise.all([t.e("chunk-d678c36c"),t.e("chunk-295570b8")]).then(t.bind(null,"0fc1"))},N=function(){return Promise.all([t.e("chunk-d678c36c"),t.e("chunk-596db9fd"),t.e("chunk-80c9512e")]).then(t.bind(null,"fbd8"))},J=[{path:"/",redirect:"/landing"},{path:"/landing",component:Q},{path:"/terms",component:L},{path:"/choose",component:R},{path:"/questions",component:I,beforeEnter:function(e,n,t){var r=e.params.id,o=f["a"].session.get("__currentquiz__");!o||r>7?t({path:"/landing"}):t()},children:[{path:"40k/:id",component:T},{path:"aos/:id",component:V}]},{path:"/reveal",component:K},{path:"/share",component:N,beforeEnter:function(e,n,t){var r=e.params.id,o=f["a"].session.get("__currentquiz__");!o||r>7?t({path:"/landing"}):t()}}],M=Object(C["a"])({history:Object(C["b"])(),routes:J});M.beforeEach((function(e,n,t){e.matched.length?t():t({path:"/landing"})}));var U=M,B={category:null,aosQuestions:[],fourtykQuestions:[],point:0,play:!0},z=B,D={setAos:function(e,n){e.aosQuestions=n},set40K:function(e,n){e.fourtykQuestions=n},setCategory:function(e,n){e.category=n},togglePlay:function(e){e.play=!e.play},noPlay:function(e){e.play=!1}},$=D,F=function(e){return e.aosQuestions},H=function(e){return e.fourtykQuestions};function W(e,n){var t=e.commit,r=n.aos,o=n.fourtyK;t("setAos",r),t("set40K",o)}var X=!1,Y=Object(k["b"])({state:z,getters:r,mutations:$,actions:o,strict:X,plugins:X?[Object(k["a"])()]:[]}),G=(t("a41b"),t("77ed"),t("af1e"),t("c83c"));Object(c["d"])(S).use(Y).use(U).use(G["a"]).use(h["a"]).mount("#app"),h["a"].config({expire:"7d"}),console.log=function(){}},a41b:function(e,n,t){},aaef:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}));var r="__user__",o="__quiz__"},bd28:function(e,n,t){"use strict";t("c3ee")},c3ee:function(e,n,t){},d18b:function(e,n,t){e.exports=t.p+"media/landing-music.0b30856d.wav"}});
//# sourceMappingURL=app.b7652950.js.map