(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f6f7b2b"],{"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),i=n("825a"),c=n("1626"),o=n("c6b6"),u=n("9263"),s=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=a(n,e,t);return null!==r&&i(r),r}if("RegExp"===o(e))return a(u,e,t);throw s("RegExp#exec called on incompatible receiver")}},"1caf":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),a=(n("96cf"),n("26b3")),i=n("aaef"),c=n("335a");function o(e,t){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.questionId,o=t.choiceId,u=c["a"].session.get(i["a"]),e.next=4,Object(a["a"])("/user_quizzes/".concat(u,"/user_answers\n    "),{user_answer:{question_id:r,choice_id:o}},n);case 4:s=e.sent,console.log(s);case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}},2431:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("fb6a"),n("cb29"),n("b0c0");var r,a=n("c0e9"),i=n.n(a);function c(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];i()(e,{useCORS:!0}).then((function(a){var i;r=a.getContext("2d"),console.log(a),h();var c=e.offsetWidth,o=e.offsetHeight;t?(console.log("small"),i=r.getImageData(5,5,23,23).data):i=r.getImageData(0,0,c,o).data,console.log(i);for(var u=15,s=0,d=0;d<c;d++)for(var f=0;f<o;f++){if(s%u===0){var b=4*(f*c+d),v=i.slice(b,b+4),p=e.getBoundingClientRect(),g=p.left+d,m=p.top+f;l(g,m,v,n)}s++}}))}var o,u,s=function(){var e=this;this.animationDuration=1e4,this.speed={x:15*Math.random()-5,y:15*Math.random()-5},this.radius=2+1*Math.random(),this.life=5e3+20*Math.random(),this.remainingLife=this.life,this.draw=function(t){var n=e;e.remainingLife>0&&e.radius>0&&(t.beginPath(),t.arc(n.startX,n.startY,n.radius,0,2*Math.PI),t.fillStyle="rgba("+e.rgbArray[0]+","+e.rgbArray[1]+","+e.rgbArray[2]+", 1)",t.fill(),n.remainingLife-=.1,n.radius-=.01,n.startX+=n.speed.x,n.startY+=n.speed.y)}},d=function(){var e=this;this.name="ExplodeToRightParticle",this.animationDuration=1e4,this.speed={x:0+6*Math.random(),y:3*Math.random()-1.5},this.radius=0+9*Math.random(),this.life=500+20*Math.random(),this.remainingLife=this.life,this.firstRun=!0,this.draw=function(t){e.firstRun&&(e.firstRun=!1,e.startX+=20*Math.random()),e.remainingLife>0&&e.radius>0&&(t.beginPath(),t.arc(e.startX,e.startY,e.radius,0,2*Math.PI),t.fillStyle="rgba("+e.rgbArray[0]+","+e.rgbArray[1]+","+e.rgbArray[2]+", 1)",t.fill(),e.remainingLife--,e.radius-=.1,e.startX+=e.speed.x,e.startY+=e.speed.y)}},f=[];function l(e,t,n,r){var a;a=r?new d:new s,a.rgbArray=n,a.startX=e,a.startY=t,a.startTime=Date.now(),f.push(a)}function h(){var e=document.querySelector("canvas");e&&e.remove(),o=document.createElement("canvas"),u=o.getContext("2d"),o.width=window.innerWidth,o.height=window.innerHeight,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.zIndex="1001",o.style.pointerEvents="none",document.body.appendChild(o)}function b(){"undefined"!==typeof u&&u.clearRect(0,0,window.innerWidth,window.innerHeight);for(var e=0;e<f.length;e++)if(f[e].draw(u),e===f.length-1){var t=(Date.now()-f[e].startTime)/f[e].animationDuration;t>1&&(f=[])}window.requestAnimationFrame(b)}window.requestAnimationFrame(b)},2532:function(e,t,n){"use strict";var r=n("23e7"),a=n("e330"),i=n("5a34"),c=n("1d80"),o=n("577e"),u=n("ab13"),s=a("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~s(o(c(this)),o(i(e)),arguments.length>1?arguments[1]:void 0)}})},"2d08":function(e,t,n){"use strict";function r(e){if(e){var t=e.getBoundingClientRect();return{left:t.left+window.scrollX,top:t.top+window.scrollY}}}n.d(t,"a",(function(){return r}))},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},"466d":function(e,t,n){"use strict";var r=n("c65b"),a=n("d784"),i=n("825a"),c=n("50c4"),o=n("577e"),u=n("1d80"),s=n("dc4a"),d=n("8aa5"),f=n("14c3");a("match",(function(e,t,n){return[function(t){var n=u(this),a=void 0==t?void 0:s(t,e);return a?r(a,t,n):new RegExp(t)[e](o(n))},function(e){var r=i(this),a=o(e),u=n(t,r,a);if(u.done)return u.value;if(!r.global)return f(r,a);var s=r.unicode;r.lastIndex=0;var l,h=[],b=0;while(null!==(l=f(r,a))){var v=o(l[0]);h[b]=v,""===v&&(r.lastIndex=d(a,c(r.lastIndex),s)),b++}return 0===b?null:h}]}))},"539c":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("a9e3"),n("caad"),n("2532");var r=n("7a23"),a=n("6c02"),i=n("1caf"),c=n("032f"),o=n("aaef"),u=n("335a");function s(e,t,n){Object(a["c"])((function(){var e=u["a"].session.get("__currentquiz__");console.log(Number(l.params.id),e),Number(l.params.id)>e&&f.push({path:"/questions/40k/".concat(e+1)})}));var s=Object(c["b"])(),d=s.getCookie(o["b"]),f=Object(a["e"])(),l=Object(a["d"])(),h=l.path.includes("40k"),b=n,v=Object(r["F"])(t),p=Object(r["F"])(0);function g(e,t){v.value=e.image,p.value=t,b=e.id}function m(){Object(i["a"])({questionId:e,choiceId:b},d),u["a"].session.set("__currentquiz__",5),h?f.push({path:"/questions/40k/6"}):f.push({path:"/questions/aos/6"})}return{changeScene:g,next:m,scene:v,selected:p}}},"5a34":function(e,t,n){var r=n("da84"),a=n("44e7"),i=r.TypeError;e.exports=function(e){if(a(e))throw i("The method doesn't accept regular expressions");return e}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").find,i=n("44d2"),c="find",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i(c)},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},a7e9:function(e,t,n){},ab13:function(e,t,n){var r=n("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},bbd5:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));n("fb6a"),n("d3b7"),n("ac1f"),n("466d");function r(e,t,n){return e.slice(t,n)}var a=null;function i(e,t,n){return function(){clearTimeout(a),a=setTimeout((function(){e(n)}),t)}}function c(){var e=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i];return e.some((function(e){return navigator.userAgent.match(e)}))}},be84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("caad"),n("2532"),n("a9e3"),n("7db0"),n("d3b7");var r=n("7a23"),a=n("6c02"),i=n("5502"),c=n("335a");function o(){var e=Object(a["d"])(),t=e.path.includes("40k"),n=Object(i["e"])(),o=Object(r["F"])(e.params.id),u=(o.value,Object(r["c"])((function(){return t?c["a"].session.get("__40kquestion".concat(o.value,"__")):c["a"].session.get("__aosquestion".concat(o.value,"__"))})));console.log(u.value);var s=Object(r["c"])((function(){return u.value&&u.value.page_template_number===Number(o.value)?u.value:(e=t?n.getters.currentFourtyKQuestion.find((function(e){return e.page_template_number===Number(o.value)})):n.getters.currentAosQuestion.find((function(e){return e.page_template_number===Number(o.value)})),e);var e})),d=Object(r["c"])((function(){var e="url(".concat(s.value&&s.value.bg_image,")");return{backgroundImage:e}}));function f(e){o.value=e}return Object(r["v"])((function(){f(e.params.id)})),{questionId:o,questionBackground:d,currentQuestion:s,updateParams:f,store:n}}},bece:function(e,t,n){"use strict";var r=n("7a23"),a={class:"scene"};function i(e,t,n,i,c,o){var u=Object(r["I"])("Camera"),s=Object(r["I"])("HemisphereLight"),d=Object(r["I"])("DirectionalLight"),f=Object(r["I"])("SphereGeometry"),l=Object(r["I"])("Texture"),h=Object(r["I"])("BasicMaterial"),b=Object(r["I"])("Mesh"),v=Object(r["I"])("Scene"),p=Object(r["I"])("Renderer");return Object(r["A"])(),Object(r["g"])("div",a,[Object(r["k"])(p,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":{autoRotate:!0,enableDamping:!0,enableZoom:!1,minPolarAngle:.5*Math.PI,maxPolarAngle:.5*Math.PI}},{default:Object(r["R"])((function(){return[Object(r["k"])(u,{position:{z:160},aspect:c.ratio,fov:75},null,8,["aspect"]),Object(r["k"])(v,{background:"#000",ref:"scene"},{default:Object(r["R"])((function(){return[Object(r["k"])(s),Object(r["k"])(d,{position:{x:0,y:200,z:100},"cast-shadow":"","shadow-camera":{top:180,bottom:-120,left:-120,right:120}}),Object(r["k"])(b,{scale:{x:16,y:16,z:-16},"receive-shadow":""},{default:Object(r["R"])((function(){return[Object(r["k"])(f,{ref:"mesh",radius:1,"width-segments":200,"height-segments":200},null,512),Object(r["k"])(h,null,{default:Object(r["R"])((function(){return[Object(r["k"])(l,{src:n.scene},null,8,["src"])]})),_:1})]})),_:1})]})),_:1},512)]})),_:1},8,["orbit-ctrl"])])}var c=n("af1e"),o={name:"scene",components:{Renderer:c["l"],Camera:c["d"],Scene:c["m"],HemisphereLight:c["g"],DirectionalLight:c["e"],Mesh:c["h"],SphereGeometry:c["o"],BasicMaterial:c["b"],Texture:c["p"]},data:function(){return{ratio:1}},props:{scene:{default:null},scale:{type:Object,default:{x:.005,y:.005,z:.005}}},mounted:function(){this.ratio=window.innerWidth/window.innerHeight;var e=this.$refs.mesh.geometry;e.scale(16,16,-16)},methods:{}},u=(n("f4f9"),n("d959")),s=n.n(u);const d=s()(o,[["render",i],["__scopeId","data-v-7ac9eb58"]]);t["a"]=d},caad:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),i=n("9263"),c=n("d039"),o=n("b622"),u=n("9112"),s=o("species"),d=RegExp.prototype;e.exports=function(e,t,n,f){var l=o(e),h=!c((function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})),b=h&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[l]=/./[l]),n.exec=function(){return t=!0,null},n[l](""),!t}));if(!h||!b||n){var v=r(/./[l]),p=t(l,""[e],(function(e,t,n,a,c){var o=r(e),u=t.exec;return u===i||u===d.exec?h&&!c?{done:!0,value:v(t,n,a)}:{done:!0,value:o(n,t,a)}:{done:!1}}));a(String.prototype,e,p[0]),a(d,l,p[1])}f&&u(d[l],"sham",!0)}},ef6d:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("a9e3"),n("caad"),n("2532"),n("99af");var r=n("7a23"),a=n("6c02"),i=n("bbd5"),c=n("1caf"),o=n("032f"),u=n("aaef"),s=n("335a");function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;Object(a["c"])((function(){var e=s["a"].session.get("__currentquiz__");console.log(Number(h.params.id),e),Number(h.params.id)>e&&(b?l.push({path:"/questions/40k/".concat(e+1)}):l.push({path:"/questions/aos/".concat(e+1)}))}));var d=Object(o["b"])(),f=d.getCookie(u["b"]),l=Object(a["e"])(),h=Object(a["d"])(),b=h.path.includes("40k"),v=Object(r["F"])(null);function p(e){v.value=e}function g(e){v.value=e}function m(e){Object(i["a"])(O.bind(e),n,e)()}function O(n){Object(c["a"])({questionId:t,choiceId:n},f);var r=Number(h.params.id);e("updateParams",r+1),w(r,b?"40k":"aos")}function w(e,t){s["a"].session.set("__currentquiz__",e),7!==e?l.push({path:"/questions/".concat(t,"/").concat(e+1)}):l.push({path:"/reveal"})}return{choiceTouchMove:g,choiceTouchEnd:m,choiceTouchStart:p,selected:v}}},f4f9:function(e,t,n){"use strict";n("a7e9")},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("e8b5"),c=n("68ee"),o=n("861d"),u=n("23cb"),s=n("07fa"),d=n("fc6a"),f=n("8418"),l=n("b622"),h=n("1dde"),b=n("f36a"),v=h("slice"),p=l("species"),g=a.Array,m=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var n,r,a,l=d(this),h=s(l),v=u(e,h),O=u(void 0===t?h:t,h);if(i(l)&&(n=l.constructor,c(n)&&(n===g||i(n.prototype))?n=void 0:o(n)&&(n=n[p],null===n&&(n=void 0)),n===g||void 0===n))return b(l,v,O);for(r=new(void 0===n?g:n)(m(O-v,0)),a=0;v<O;v++,a++)v in l&&f(r,a,l[v]);return r.length=a,r}})}}]);
//# sourceMappingURL=chunk-4f6f7b2b.b8a5f10a.js.map