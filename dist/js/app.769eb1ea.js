(function(e){function n(n){for(var r,c,u=n[0],i=n[1],s=n[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a38bb":"9c973a13","chunk-6ab9cb12":"6500fcc2","chunk-2d0d03f5":"fe1dac84","chunk-3e1b1a11":"e7f433a2","chunk-3e85c26f":"a36d3f7d","chunk-8bdc8b9e":"c017f4c3","chunk-07cdb8f4":"7612afec","chunk-6ba49244":"36dff3b3","chunk-5e9eb48a":"a22d8609","chunk-5c441afa":"84a3becd","chunk-7fd6ed7d":"be6701ec"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-6ab9cb12":1,"chunk-3e1b1a11":1,"chunk-3e85c26f":1,"chunk-07cdb8f4":1,"chunk-5e9eb48a":1,"chunk-5c441afa":1,"chunk-7fd6ed7d":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0a38bb":"31d6cfe0","chunk-6ab9cb12":"ba4dc027","chunk-2d0d03f5":"31d6cfe0","chunk-3e1b1a11":"80ebdd82","chunk-3e85c26f":"3bc7398e","chunk-8bdc8b9e":"31d6cfe0","chunk-07cdb8f4":"61466334","chunk-6ba49244":"31d6cfe0","chunk-5e9eb48a":"82bebbd2","chunk-5c441afa":"81c6bac7","chunk-7fd6ed7d":"6e4f11a6"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],f=s.getAttribute("data-href");if(f===r||f===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],h.parentNode.removeChild(h),t(o)},h.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"161c":function(e,n,t){"use strict";t("e1e8")},"26b3":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r,c=t("bc3a"),a=t.n(c);function o(e,n,t){return a.a.post(e,n,{headers:t}).then((function(e){var n=e.data;return n})).catch((function(e){console.error("error is",e)}))}r="https://api-staging.h5.games-workshop-china.com/api/v1/",a.a.defaults.baseURL=r,a.a.defaults.headers["Content-Type"]="application/json"},2808:function(e,n,t){"use strict";var r=t("5c8c");r["a"].configure({urlPrefix:"https://api-staging.h5.games-workshop-china.com",visitDuration:30}),n["a"]=r["a"]},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"currentAosQuestion",(function(){return R})),t.d(r,"currentFourtyKQuestion",(function(){return T}));var c={};t.r(c),t.d(c,"addQuestions",(function(){return L}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23");function o(e,n,t,r,c,o){var u=Object(a["I"])("router-view");return Object(a["A"])(),Object(a["e"])(u,null,{default:Object(a["R"])((function(e){var n=e.Component;return[Object(a["k"])(a["b"],{name:"fade"},{default:Object(a["R"])((function(){return[(Object(a["A"])(),Object(a["e"])(Object(a["J"])(n)))]})),_:2},1024)]})),_:1})}var u=t("1da1"),i=t("5530"),s=(t("96cf"),t("6a7c")),f=(t("2808"),t("5502")),d={data:function(){return{}},mounted:function(){this.login()},methods:Object(i["a"])({login:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["a"])();case 2:t=n.sent,r={aos:t["categories"]["aos"]["questions"],fourtyK:t["categories"]["40k"]["questions"]},e.addQuestions(r),console.log(t);case 6:case"end":return n.stop()}}),n)})))()}},Object(f["c"])(["addQuestions"]))},h=(t("161c"),t("d959")),b=t.n(h);const l=b()(d,[["render",o]]);var p=l,g=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),k=t("335a"),m=function(){return t.e("chunk-3e85c26f").then(t.bind(null,"bede"))},v=function(){return t.e("chunk-3e1b1a11").then(t.bind(null,"bd91"))},y=function(){return Promise.all([t.e("chunk-8bdc8b9e"),t.e("chunk-6ba49244"),t.e("chunk-5c441afa")]).then(t.bind(null,"1c91"))},O=function(){return t.e("chunk-2d0d03f5").then(t.bind(null,"66ba"))},_=function(){return Promise.all([t.e("chunk-8bdc8b9e"),t.e("chunk-6ba49244"),t.e("chunk-7fd6ed7d")]).then(t.bind(null,"4303"))},j=function(){return Promise.all([t.e("chunk-8bdc8b9e"),t.e("chunk-6ba49244"),t.e("chunk-2d0a38bb"),t.e("chunk-5e9eb48a")]).then(t.bind(null,"de02"))},w=function(){return Promise.all([t.e("chunk-8bdc8b9e"),t.e("chunk-07cdb8f4")]).then(t.bind(null,"0fc1"))},P=function(){return Promise.all([t.e("chunk-2d0a38bb"),t.e("chunk-6ab9cb12")]).then(t.bind(null,"fbd8"))},x=[{path:"/",redirect:"/landing"},{path:"/landing",component:m},{path:"/terms",component:v},{path:"/choose",component:y},{path:"/questions",component:O,beforeEnter:function(e,n,t){var r=e.params.id,c=k["a"].session.get("__currentquiz__");!c||r>7?t({path:"/landing"}):t()},children:[{path:"40k/:id",component:_},{path:"aos/:id",component:j}]},{path:"/reveal",component:w},{path:"/share",component:P}],E=Object(g["a"])({history:Object(g["b"])(),routes:x});E.beforeEach((function(e,n,t){e.matched.length?t():t({path:"/landing"})}));var q=E,A={category:null,aosQuestions:[],fourtykQuestions:[],point:0},C=A,Q={setAos:function(e,n){e.aosQuestions=n},set40K:function(e,n){e.fourtykQuestions=n},setCategory:function(e,n){e.category=n}},S=Q,R=function(e){return e.aosQuestions},T=function(e){return e.fourtykQuestions};function L(e,n){var t=e.commit,r=n.aos,c=n.fourtyK;t("setAos",r),t("set40K",c)}var K=!1,N=Object(f["b"])({state:C,getters:r,mutations:S,actions:c,strict:K,plugins:K?[Object(f["a"])()]:[]}),M=(t("a41b"),t("77ed"),t("032f")),J=(t("af1e"),t("c83c"));Object(a["d"])(p).use(N).use(q).use(J["a"]).use(M["a"]).mount("#app"),M["a"].config({expire:"7d"})},"6a7c":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("1da1"),c=(t("96cf"),t("d3b7"),t("159b"),t("e9c4"),t("26b3")),a=t("aaef"),o=t("335a"),u=t("032f");function i(){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Object(u["b"])(),t=n.getCookie(a["c"]),console.log(t),!t){e.next=13;break}return console.log("cookie test"),e.next=7,Object(c["a"])("/login",{email:t["X-USER-EMAIL"]});case 7:return r=e.sent,f(r["categories"]["40k"]["questions"]),d(r["categories"]["aos"]["questions"]),e.abrupt("return",r);case 13:return e.next=15,Object(c["a"])("/login");case 15:return r=e.sent,n.setCookie(a["c"],JSON.stringify(r["headers"])),o["a"].session.set(a["c"],r["headers"]),f(r["categories"]["40k"]["questions"]),d(r["categories"]["aos"]["questions"]),e.abrupt("return",r);case 21:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(e){e.forEach((function(e){o["a"].session.set("__40kquestion".concat(e.page_template_number,"__"),e)}))}function d(e){e.forEach((function(e){o["a"].session.set("__aosquestion".concat(e.page_template_number,"__"),e)}))}},a41b:function(e,n,t){},aaef:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return a}));var r="__user__",c="__quiz__",a="这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很"},e1e8:function(e,n,t){}});
//# sourceMappingURL=app.769eb1ea.js.map