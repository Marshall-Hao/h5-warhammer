(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e9eb48a"],{"0054":function(e,t,c){"use strict";c("776d")},2532:function(e,t,c){"use strict";var n=c("23e7"),o=c("e330"),r=c("5a34"),u=c("1d80"),i=c("577e"),s=c("ab13"),a=o("".indexOf);n({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~a(i(u(this)),i(r(e)),arguments.length>1?arguments[1]:void 0)}})},2994:function(e,t,c){},"2d08":function(e,t,c){"use strict";function n(e){if(e){var t=e.getBoundingClientRect();return{left:t.left+window.scrollX,top:t.top+window.scrollY}}}c.d(t,"a",(function(){return n}))},"394a":function(e,t,c){},"44e7":function(e,t,c){var n=c("861d"),o=c("c6b6"),r=c("b622"),u=r("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[u])?!!t:"RegExp"==o(e))}},"46d0":function(e,t,c){"use strict";c("59fd")},"4aa9":function(e,t,c){"use strict";c("9b81")},"518a":function(e,t,c){"use strict";c("8d48")},"539c":function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));c("a9e3"),c("caad"),c("2532");var n=c("7a23"),o=c("6c02"),r=c("1caf"),u=c("032f"),i=c("aaef"),s=c("335a");function a(e,t,c){Object(o["c"])((function(){var e=s["a"].session.get("__currentquiz__");console.log(Number(h.params.id),e),Number(h.params.id)>e&&l.push({path:"/questions/40k/".concat(e+1)})}));var a=Object(u["b"])(),d=a.getCookie(i["c"]),l=Object(o["e"])(),h=Object(o["d"])(),b=h.path.includes("40k"),f=c,v=Object(n["F"])(t),O=Object(n["F"])(0);function j(e,t){v.value=e.image,O.value=t,f=e.id}function p(){Object(r["a"])({questionId:e,choiceId:f},d),s["a"].session.set("__currentquiz__",5),b?l.push({path:"/questions/40k/6"}):l.push({path:"/questions/aos/6"})}return{changeScene:j,next:p,scene:v,selected:O}}},"59fd":function(e,t,c){},"5a34":function(e,t,c){var n=c("da84"),o=c("44e7"),r=n.TypeError;e.exports=function(e){if(o(e))throw r("The method doesn't accept regular expressions");return e}},"5e8c":function(e,t,c){"use strict";c("394a")},"6c2d":function(e,t,c){"use strict";c("2994")},"6fdb":function(e,t,c){"use strict";c("9fdf")},"776d":function(e,t,c){},"7db0":function(e,t,c){"use strict";var n=c("23e7"),o=c("b727").find,r=c("44d2"),u="find",i=!0;u in[]&&Array(1)[u]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(u)},8080:function(e,t,c){},"8d48":function(e,t,c){},"9b81":function(e,t,c){},"9fdf":function(e,t,c){},a7e9:function(e,t,c){},ab13:function(e,t,c){var n=c("b622"),o=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[o]=!1,"/./"[e](t)}catch(n){}}return!1}},be84:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c("caad"),c("2532"),c("a9e3"),c("7db0"),c("d3b7");var n=c("7a23"),o=c("6c02"),r=c("5502"),u=c("335a");function i(){var e=Object(o["d"])(),t=e.path.includes("40k"),c=Object(r["e"])(),i=Object(n["F"])(e.params.id),s=(i.value,Object(n["c"])((function(){return t?u["a"].session.get("__40kquestion".concat(i.value,"__")):u["a"].session.get("__aosquestion".concat(i.value,"__"))})));console.log(s.value);var a=Object(n["c"])((function(){return s.value&&s.value.page_template_number===Number(i.value)?s.value:(e=t?c.getters.currentFourtyKQuestion.find((function(e){return e.page_template_number===Number(i.value)})):c.getters.currentAosQuestion.find((function(e){return e.page_template_number===Number(i.value)})),e);var e})),d=Object(n["c"])((function(){var e="url(".concat(a.value&&a.value.bg_image,")");return{backgroundImage:e}}));function l(e){i.value=e}return Object(n["v"])((function(){l(e.params.id)})),{questionId:i,questionBackground:d,currentQuestion:a,updateParams:l,store:c}}},bece:function(e,t,c){"use strict";var n=c("7a23"),o={class:"scene"};function r(e,t,c,r,u,i){var s=Object(n["I"])("Camera"),a=Object(n["I"])("HemisphereLight"),d=Object(n["I"])("DirectionalLight"),l=Object(n["I"])("SphereGeometry"),h=Object(n["I"])("Texture"),b=Object(n["I"])("BasicMaterial"),f=Object(n["I"])("Mesh"),v=Object(n["I"])("Scene"),O=Object(n["I"])("Renderer");return Object(n["A"])(),Object(n["g"])("div",o,[Object(n["k"])(O,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":{autoRotate:!0,enableDamping:!0,enableZoom:!1,minPolarAngle:.5*Math.PI,maxPolarAngle:.5*Math.PI}},{default:Object(n["R"])((function(){return[Object(n["k"])(s,{position:{z:160},aspect:u.ratio,fov:75},null,8,["aspect"]),Object(n["k"])(v,{background:"#000",ref:"scene"},{default:Object(n["R"])((function(){return[Object(n["k"])(a),Object(n["k"])(d,{position:{x:0,y:200,z:100},"cast-shadow":"","shadow-camera":{top:180,bottom:-120,left:-120,right:120}}),Object(n["k"])(f,{scale:{x:16,y:16,z:-16},"receive-shadow":""},{default:Object(n["R"])((function(){return[Object(n["k"])(l,{ref:"mesh",radius:1,"width-segments":200,"height-segments":200},null,512),Object(n["k"])(b,null,{default:Object(n["R"])((function(){return[Object(n["k"])(h,{src:c.scene},null,8,["src"])]})),_:1})]})),_:1})]})),_:1},512)]})),_:1},8,["orbit-ctrl"])])}var u=c("af1e"),i={name:"scene",components:{Renderer:u["l"],Camera:u["d"],Scene:u["m"],HemisphereLight:u["g"],DirectionalLight:u["e"],Mesh:u["h"],SphereGeometry:u["o"],BasicMaterial:u["b"],Texture:u["p"]},data:function(){return{ratio:1}},props:{scene:{default:null},scale:{type:Object,default:{x:.005,y:.005,z:.005}}},mounted:function(){this.ratio=window.innerWidth/window.innerHeight;var e=this.$refs.mesh.geometry;e.scale(16,16,-16)},methods:{}},s=(c("f4f9"),c("d959")),a=c.n(s);const d=a()(i,[["render",r],["__scopeId","data-v-7ac9eb58"]]);t["a"]=d},caad:function(e,t,c){"use strict";var n=c("23e7"),o=c("4d64").includes,r=c("44d2");n({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},de02:function(e,t,c){"use strict";c.r(t);var n=c("7a23");function o(e,t,c,o,r,u){return Object(n["A"])(),Object(n["g"])("div",null,[(Object(n["A"])(),Object(n["e"])(Object(n["J"])("aos-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"]))])}var r={class:"q1 fixed-no-scroll"},u={class:"q1-title"},i={class:"q1-section"},s={class:"q1-section-choices"},a=["onTouchstart","onTouchmove","onMouseenter","onMousemove","onMousedown"];function d(e,t,c,o,d,l){return Object(n["A"])(),Object(n["g"])("div",r,[Object(n["h"])("div",{class:"q1-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("h1",u,Object(n["L"])(c.questionText),1),Object(n["h"])("section",i,[Object(n["h"])("div",s,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(t,c){return Object(n["A"])(),Object(n["g"])("div",{class:Object(n["q"])(["q1-section-choice",{"select-card":o.selected===c,"unselect-card":o.selected&&o.selected!==c}]),ref_for:!0,ref:"q",key:t,style:Object(n["r"])("background-image:url(".concat(t.image,")"))},[Object(n["h"])("div",{onTouchstart:Object(n["T"])((function(e){return o.choiceTouchZoom(c,t.id)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onMouseenter:Object(n["T"])((function(t){return e.choiceTouchStart(c)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onMousedown:function(c){return e.choiceTouchEnd(t.id)}},null,40,a)],6)})),128))])])])}var l=c("1da1"),h=(c("d3b7"),c("159b"),c("96cf"),c("ef6d")),b=c("cffa"),f=c("2d08"),v={name:"aos-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,o=e.currentQuestion.id,r=Object(h["a"])(c,o,1500),u=r.choiceTouchMove,i=r.choiceTouchEnd,s=r.choiceTouchStart,a=r.selected;function d(e,t){return v.apply(this,arguments)}function v(){return v=Object(l["a"])(regeneratorRuntime.mark((function e(t,c){var o,r,u,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s(t),e.next=3,Object(n["p"])();case 3:return e.next=5,Object(n["p"])();case 5:return e.next=7,document.querySelector(".select-card");case 7:return o=e.sent,r=Object(f["a"])(o).left,u=Object(f["a"])(o).top,e.next=12,document.querySelector(".unselect-card");case 12:a=e.sent,a&&b["a"].timeline().to(".unselect-card",{opacity:0,stagger:{amount:.5}}).fromTo(".select-card",{position:"absolute",left:"".concat(r),top:"".concat(u)},{xPercent:-50,left:"50%",yPercent:-50,top:"50%",position:"absolute",duration:1,scale:1.5,onComplete:function(){i(c)}});case 14:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}return{choiceTouchMove:u,choiceTouchZoom:d,selected:a}},mounted:function(){window.innerWidth>375?this.setChoiceDimension(.8):(document.querySelector(".q1-title").style.height="15%",document.querySelector(".q1-section").style.height="85%",this.setChoiceDimension(.85))},methods:{setChoiceDimension:function(e){var t=document.querySelectorAll(".q1-section-choice");console.log({choices:t});var c=window.innerWidth-10,n=window.innerHeight*e-45-2,o=c/2*(25/17)*2<=n;console.log({useW:o}),o?t.forEach((function(e){e.style.width="".concat(c/2,"px"),e.style.height="".concat(c/2*(25/17),"px")})):t.forEach((function(e){e.style.height="".concat(n/2,"px"),e.style.width="".concat(n/2*.68,"px")}))}}},O=(c("6c2d"),c("d959")),j=c.n(O);const p=j()(v,[["render",d],["__scopeId","data-v-4a8e0a3e"]]);var g=p,m={class:"q2-title"},q={class:"q2-section"},T={class:"q2-choices"},y=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function w(e,t,c,o,r,u){return Object(n["A"])(),Object(n["g"])("div",{class:"q2 fixed-no-scroll",style:Object(n["r"])(c.questionBackground)},[Object(n["h"])("h1",m,Object(n["L"])(c.questionText),1),Object(n["h"])("div",q,[Object(n["h"])("div",T,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(t,c){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:t,class:Object(n["q"])({"selected-q":o.selected===c}),style:Object(n["r"])({backgroundImage:"url(".concat(t.image,")")}),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStartParticle(c,e)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onTouchend:Object(n["T"])((function(e){return o.choiceTouchEnd(t.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(t){return e.choiceTouchStart(c)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)}},[Object(n["h"])("div",{class:Object(n["q"])({"selected-qd":o.selected===c})},null,2)],46,y)})),128))])])],4)}var _=c("2431"),k={name:"aos-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(h["a"])(c,n,2100),r=o.choiceTouchMove,u=o.choiceTouchEnd,i=o.choiceTouchStart,s=o.selected;function a(e,t){i(e),Object(_["a"])(t.target,t)}return{choiceTouchMove:r,choiceTouchEnd:u,choiceTouchStartParticle:a,selected:s}}};c("518a");const M=j()(k,[["render",w],["__scopeId","data-v-6599c625"]]);var x=M,S={class:"q3 fixed-no-scroll"},A={class:"q3-title"},Q={class:"q3-section"},I={class:"q3-choices"},B=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function C(e,t,c,o,r,u){return Object(n["A"])(),Object(n["g"])("div",S,[Object(n["h"])("div",{class:"q3-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("h1",A,Object(n["L"])(c.questionText),1),Object(n["h"])("div",Q,[Object(n["h"])("div",I,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{class:Object(n["q"])(["q3-choice",{"selected-q3":o.selected===t}]),ref_for:!0,ref:"q",key:e,style:Object(n["r"])("background-image:url(".concat(e.image,")")),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,46,B)})),128))])])])}var E={name:"aos-q3",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(h["a"])(c,n),r=o.choiceTouchMove,u=o.choiceTouchEnd,i=o.choiceTouchStart,s=o.selected;return{choiceTouchMove:r,choiceTouchEnd:u,choiceTouchStart:i,selected:s}},mounted:function(){var e=document.querySelectorAll(".q3-choice");e.forEach((function(e){var t=window.innerWidth/2-24;e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px")}))}};c("5e8c");const P=j()(E,[["render",C],["__scopeId","data-v-83f5f966"]]);var L=P,R={class:"q4-title"},N={class:"q4-section-wrapper"},z={class:"glide q4-section"},W={class:"glide__track","data-glide-el":"track"},G={class:"glide__slides"},D=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],H=Object(n["i"])('<div class="glide__arrows" data-glide-el="controls" data-v-796e1209><button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;" data-v-796e1209><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-796e1209><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(165, 147, 93)" stroke-linecap="round" data-v-796e1209><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(165, 147, 93)" dur="2s" begin="0; l42.end" data-v-796e1209></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(165, 147, 93)" to="rgb(255, 255, 255)" dur="2s" begin="l41.end" data-v-796e1209></animate></polyline></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;" data-v-796e1209><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-796e1209><polyline points="10 200, 110 100, 10 0,0 10,85 100, 0 190 " fill="#64798B" stroke-linecap="round" data-v-796e1209><animate id="r41" attributeName="fill" attributeType="XML" from="#fff" to="#64798B" dur="2s" begin="0; r42.end" data-v-796e1209></animate><animate id="r42" attributeName="fill" attributeType="XML" from="#64798B" to="#fff" dur="2s" begin="r41.end" data-v-796e1209></animate></polyline></svg></button></div><div class="glide__bullets" data-glide-el="controls[nav]" data-v-796e1209></div>',2),X={class:"q4-instruction"};function F(e,t,c,o,r,u){return Object(n["A"])(),Object(n["g"])("div",{class:"q4 fixed-no-scroll",style:Object(n["r"])(c.questionBackground)},[Object(n["h"])("h1",R,Object(n["L"])(c.questionText),1),Object(n["h"])("div",N,[Object(n["h"])("div",z,[Object(n["h"])("div",W,[Object(n["h"])("ul",G,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("li",{class:"glide__slide",key:e},[Object(n["h"])("div",{class:Object(n["q"])(["q4-choice",{"selected-q":o.selected===t}]),style:Object(n["r"])("background-image:url(".concat(e.image,")"))},null,6),Object(n["h"])("div",{class:"q4-pick",onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}}," Select ",40,D)])})),128))]),H]),Object(n["h"])("p",X,Object(n["L"])(c.currentQuestion.instruction),1)])])],4)}var J=c("0346"),Z=c("5c40"),U={name:"aos-q4",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(h["a"])(c,n),r=o.choiceTouchMove,u=o.choiceTouchEnd,i=o.choiceTouchStart,s=o.selected;return Object(Z["D"])((function(){new J["a"](".glide",{type:"carousel"}).mount()})),{choiceTouchMove:r,choiceTouchEnd:u,choiceTouchStart:i,selected:s}},mounted:function(){var e={w:271,h:375},t=.85*window.innerHeight-40-10-40-64,c=.75*window.innerWidth;console.log({safeH:t,safeW:c});var n=document.querySelectorAll(".q4-choice");n.forEach((function(n){c*(e.h/e.w)<=t?(console.log("use W"),n.style.width="".concat(c,"px"),n.style.height="".concat(c*(e.h/e.w),"px")):(n.style.height="".concat(t,"px"),n.style.width="".concat(t*(e.w/e.h),"px"))}))}};c("4aa9");const Y=j()(U,[["render",F],["__scopeId","data-v-796e1209"]]);var K=Y,$=function(e){return Object(n["D"])("data-v-fb08e512"),e=e(),Object(n["B"])(),e},V={class:"q5"},ee={class:"q5-title"},te=$((function(){return Object(n["h"])("div",{class:"q5-rotate"},null,-1)})),ce={class:"q5-select"},ne=["onTouchstart","onMousedown"];function oe(e,t,c,o,r,u){var i=Object(n["I"])("scene");return Object(n["A"])(),Object(n["g"])("div",V,[Object(n["h"])("div",ee,Object(n["L"])(c.questionText),1),Object(n["k"])(i,{scene:o.scene,scale:{x:.5,y:.5,z:.5}},null,8,["scene","scale"]),te,Object(n["h"])("div",{class:"q5-confirm",onTouchstart:t[0]||(t[0]=Object(n["T"])((function(){return o.next&&o.next.apply(o,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return o.next&&o.next.apply(o,arguments)})}," confirm ",32),Object(n["h"])("ul",ce,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("li",{key:e,class:Object(n["q"])({"select-q":o.selected===t}),onTouchstart:Object(n["T"])((function(c){return o.changeScene(e,t)}),["prevent"]),onMousedown:function(c){return o.changeScene(e,t)}},Object(n["L"])(t+1),43,ne)})),128))])])}var re=c("539c"),ue=c("bece"),ie={name:"aos-q5",components:{Scene:ue["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){var t=e.currentQuestion.id,c=e.questionChoices[0].image,n=e.questionChoices[0].id,o=Object(re["a"])(t,c,n),r=o.changeScene,u=o.next,i=o.scene,s=o.selected;return{changeScene:r,next:u,scene:i,selected:s}}};c("eae76");const se=j()(ie,[["render",oe],["__scopeId","data-v-fb08e512"]]);var ae=se,de={class:"q6"},le={class:"q6-title"},he={class:"q6-section"},be={class:"q6-section-choices"},fe=["onTouchstart","onTouchmove","onMouseenter","onMousemove"];function ve(e,t,c,o,r,u){return Object(n["A"])(),Object(n["g"])("div",de,[Object(n["h"])("div",{class:"q6-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("div",{class:"q6-icon",style:Object(n["r"])({background:"url(".concat(c.currentQuestion.selector_image,")"),backgroundSize:"cover"})},null,4),Object(n["h"])("h1",le,Object(n["L"])(c.questionText),1),Object(n["h"])("section",he,[Object(n["h"])("div",be,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(n["q"])({"selected-q6":o.selected===t,"unselect-q":o.selected&&o.selected!==t})},[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(e.text,(function(e){return Object(n["A"])(),Object(n["g"])("span",{key:e},Object(n["L"])(e),1)})),128)),Object(n["h"])("div",{onTouchstart:Object(n["T"])((function(c){return o.choiceTouchStartSmoke(t,e.id)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMouseenter:Object(n["T"])((function(c){return o.choiceTouchStartSmoke(t,e.id)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"])},null,40,fe)],2)})),128))])])])}var Oe={name:"aos-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(h["a"])(c,n,1200),r=o.choiceTouchMove,u=o.choiceTouchEnd,i=o.choiceTouchStart,s=o.selected;function a(e,t){return d.apply(this,arguments)}function d(){return d=Object(l["a"])(regeneratorRuntime.mark((function e(t,c){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:return e.next=4,document.querySelector(".unselect-q");case 4:n=e.sent,n&&b["a"].timeline().to(".unselect-q",{opacity:0,stagger:{amount:.5}}).to(".selected-q6 span",{textShadow:"0 0 25px whitesmoke",filter:"blur(8px)",opacity:0,stagger:{amount:2}}).to(".selected-q6",{translateX:80,translateY:-40,rotate:-40,skewX:60,scale:1.2,duration:2,onComplete:function(){u(c)}},"<");case 6:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}return{choiceTouchMove:r,choiceTouchStartSmoke:a,selected:s}}};c("6fdb");const je=j()(Oe,[["render",ve],["__scopeId","data-v-755c329c"]]);var pe=je,ge={class:"q7 fixed-no-scroll"},me={class:"q7-section"},qe={class:"q7-title"},Te={class:"q7-choices"},ye=["onTouchstart","onTouchmove","onTouchend","onMousedown","onMouseenter","onMousemove"];function we(e,t,c,o,r,u){return Object(n["A"])(),Object(n["g"])("div",ge,[Object(n["h"])("div",{class:"q7-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("div",{class:"q7-banner",style:Object(n["r"])({"background-image":"url(".concat(c.currentQuestion.instruction_image,")")})},null,4),Object(n["h"])("div",me,[Object(n["h"])("h1",qe,Object(n["L"])(c.questionText),1),Object(n["h"])("div",Te,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(t,c){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:t,style:Object(n["r"])("background-image:url(".concat(t.image,")")),class:Object(n["q"])({"selected-q":o.selected===c}),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStartParticle(c,e)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onTouchend:Object(n["T"])((function(e){return o.choiceTouchEnd(t.id)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)},onMouseenter:Object(n["T"])((function(t){return e.choiceTouchStart(c)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"])},[Object(n["h"])("div",{class:Object(n["q"])({"selected-qd":o.selected===c})},null,2)],46,ye)})),128))])])])}var _e={name:"aos-q7",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(h["a"])(c,n,2100),r=o.choiceTouchMove,u=o.choiceTouchEnd,i=o.choiceTouchStart,s=o.selected;function a(e,t){i(e),Object(_["a"])(t.target,!1)}return{choiceTouchMove:r,choiceTouchEnd:u,choiceTouchStartParticle:a,selected:s}},mounted:function(){var e={w:563,h:512},t={w:312,h:74},c=document.querySelector(".q7-banner");c.style.height="".concat(c.offsetWidth*(e.h/e.w),"px");var n=document.querySelector(".q7-section");n.style.height="".concat(window.innerHeight-c.offsetHeight,"px");var o=document.querySelectorAll(".q7-choices > div");o.forEach((function(e){e.style.width="".concat(.85*window.innerWidth,"px"),e.style.height="".concat(.85*window.innerWidth*(t.h/t.w),"px")}))}};c("46d0");const ke=j()(_e,[["render",we],["__scopeId","data-v-3ad2425c"]]);var Me=ke,xe=c("be84"),Se={name:"aos-question",components:{AosQ1:g,AosQ2:x,AosQ3:L,AosQ4:K,AosQ5:ae,AosQ6:pe,AosQ7:Me},setup:function(){var e=Object(xe["a"])(),t=e.questionId,c=e.questionBackground,n=e.currentQuestion,o=e.updateParams,r=e.store;return{questionId:t,questionBackground:c,currentQuestion:n,updateParams:o,store:r}}};c("0054");const Ae=j()(Se,[["render",o],["__scopeId","data-v-4d066580"]]);t["default"]=Ae},eae76:function(e,t,c){"use strict";c("8080")},ef6d:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));c("a9e3"),c("caad"),c("2532"),c("99af");var n=c("7a23"),o=c("6c02"),r=c("bbd5"),u=c("1caf"),i=c("032f"),s=c("aaef"),a=c("335a");function d(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;Object(o["c"])((function(){var e=a["a"].session.get("__currentquiz__");console.log(Number(b.params.id),e),Number(b.params.id)>e&&(f?h.push({path:"/questions/40k/".concat(e+1)}):h.push({path:"/questions/aos/".concat(e+1)}))}));var d=Object(i["b"])(),l=d.getCookie(s["c"]),h=Object(o["e"])(),b=Object(o["d"])(),f=b.path.includes("40k"),v=Object(n["F"])(null);function O(e){v.value=e}function j(e){v.value=e}function p(e){Object(r["a"])(g.bind(e),c,e)()}function g(c){Object(u["a"])({questionId:t,choiceId:c},l);var n=Number(b.params.id);e("updateParams",n+1),m(n,f?"40k":"aos")}function m(e,t){a["a"].session.set("__currentquiz__",e),7!==e?h.push({path:"/questions/".concat(t,"/").concat(e+1)}):h.push({path:"/reveal"})}return{choiceTouchMove:j,choiceTouchEnd:p,choiceTouchStart:O,selected:v}}},f4f9:function(e,t,c){"use strict";c("a7e9")}}]);
//# sourceMappingURL=chunk-5e9eb48a.a22d8609.js.map