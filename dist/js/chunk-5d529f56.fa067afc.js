(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d529f56"],{"07ed":function(e,t,c){"use strict";c("ad38")},"0da6":function(e,t,c){"use strict";c("601d")},1007:function(e,t,c){},2994:function(e,t,c){},"57ba":function(e,t,c){"use strict";c("8d2d")},"601d":function(e,t,c){},"6c2d":function(e,t,c){"use strict";c("2994")},"6fdb":function(e,t,c){"use strict";c("9fdf")},"742a":function(e,t,c){"use strict";c("ba83")},8080:function(e,t,c){},"8d2d":function(e,t,c){},"8d67":function(e,t,c){"use strict";c("1007")},"9fdf":function(e,t,c){},ad38:function(e,t,c){},ba83:function(e,t,c){},de02:function(e,t,c){"use strict";c.r(t);var n=c("7a23");function o(e,t,c,o,r,i){return Object(n["A"])(),Object(n["g"])("div",null,[(Object(n["A"])(),Object(n["e"])(Object(n["J"])("aos-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"]))])}var r={class:"q1 fixed-no-scroll"},i={class:"q1-title"},u={class:"q1-section"},s={class:"q1-section-choices"},a=["onTouchstart","onTouchmove","onMouseenter","onMousemove","onMousedown"];function d(e,t,c,o,d,h){return Object(n["A"])(),Object(n["g"])("div",r,[Object(n["h"])("div",{class:"q1-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("h1",i,Object(n["L"])(c.questionText),1),Object(n["h"])("section",u,[Object(n["h"])("div",s,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(t,c){return Object(n["A"])(),Object(n["g"])("div",{class:Object(n["q"])(["q1-section-choice",{"select-card":o.selected===c,"unselect-card":o.selected&&o.selected!==c}]),ref_for:!0,ref:"q",key:t,style:Object(n["r"])("background-image:url(".concat(t.image,")"))},[Object(n["h"])("div",{onTouchstart:Object(n["T"])((function(e){return o.choiceTouchZoom(c,t.id)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onMouseenter:Object(n["T"])((function(t){return e.choiceTouchStart(c)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onMousedown:function(c){return e.choiceTouchEnd(t.id)}},null,40,a)],6)})),128))])])])}var h=c("1da1"),l=(c("d3b7"),c("159b"),c("96cf"),c("ef6d")),b=c("cffa"),f=c("2d08"),j={name:"aos-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,o=e.currentQuestion.id,r=Object(l["a"])(c,o,1500),i=r.choiceTouchMove,u=r.choiceTouchEnd,s=r.choiceTouchStart,a=r.selected;function d(e,t){return j.apply(this,arguments)}function j(){return j=Object(h["a"])(regeneratorRuntime.mark((function e(t,c){var o,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s(t),e.next=3,Object(n["p"])();case 3:return e.next=5,Object(n["p"])();case 5:return e.next=7,document.querySelector(".select-card");case 7:return o=e.sent,r=Object(f["a"])(o).left,i=Object(f["a"])(o).top,e.next=12,document.querySelector(".unselect-card");case 12:a=e.sent,a&&b["a"].timeline().to(".unselect-card",{opacity:0,stagger:{amount:.5}}).fromTo(".select-card",{position:"absolute",left:"".concat(r),top:"".concat(i)},{xPercent:-50,left:"50%",yPercent:-50,top:"50%",position:"absolute",duration:1,scale:1.5,onComplete:function(){u(c)}});case 14:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}return{choiceTouchMove:i,choiceTouchZoom:d,selected:a}},mounted:function(){window.innerWidth>375?this.setChoiceDimension(.8):(document.querySelector(".q1-title").style.height="15%",document.querySelector(".q1-section").style.height="85%",this.setChoiceDimension(.85))},methods:{setChoiceDimension:function(e){var t=document.querySelectorAll(".q1-section-choice");console.log({choices:t});var c=window.innerWidth-10,n=window.innerHeight*e-45-2,o=c/2*(25/17)*2<=n;console.log({useW:o}),o?t.forEach((function(e){e.style.width="".concat(c/2,"px"),e.style.height="".concat(c/2*(25/17),"px")})):t.forEach((function(e){e.style.height="".concat(n/2,"px"),e.style.width="".concat(n/2*.68,"px")}))}}},O=(c("6c2d"),c("d959")),v=c.n(O);const q=v()(j,[["render",d],["__scopeId","data-v-4a8e0a3e"]]);var T=q,g={class:"q2-title"},p={class:"q2-section"},m={class:"q2-choices"},y=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function w(e,t,c,o,r,i){return Object(n["A"])(),Object(n["g"])("div",{class:"q2 fixed-no-scroll",style:Object(n["r"])(c.questionBackground)},[Object(n["h"])("h1",g,Object(n["L"])(c.questionText),1),Object(n["h"])("div",p,[Object(n["h"])("div",m,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(t,c){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:t,class:Object(n["q"])({"selected-q":o.selected===c}),style:Object(n["r"])({backgroundImage:"url(".concat(t.image,")")}),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStartParticle(c,e)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onTouchend:Object(n["T"])((function(e){return o.choiceTouchEnd(t.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(t){return e.choiceTouchStart(c)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)}},[Object(n["h"])("div",{class:Object(n["q"])({"selected-qd":o.selected===c})},null,2)],46,y)})),128))])])],4)}var M=c("2431"),x={name:"aos-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),r=o.choiceTouchMove,i=o.choiceTouchEnd,u=o.choiceTouchStart,s=o.selected;function a(e,t){u(e),Object(M["a"])(t.target,t)}return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStartParticle:a,selected:s}}};c("07ed");const k=v()(x,[["render",w],["__scopeId","data-v-54580f58"]]);var S=k,A={class:"q3 fixed-no-scroll"},_={class:"q3-title"},Q={class:"q3-section"},B={class:"q3-choices"},E=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function C(e,t,c,o,r,i){return Object(n["A"])(),Object(n["g"])("div",A,[Object(n["h"])("div",{class:"q3-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("h1",_,Object(n["L"])(c.questionText),1),Object(n["h"])("div",Q,[Object(n["h"])("div",B,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{class:Object(n["q"])(["q3-choice",{"selected-q3":o.selected===t}]),ref_for:!0,ref:"q",key:e,style:Object(n["r"])("background-image:url(".concat(e.image,")")),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,46,E)})),128))])])])}var P={name:"aos-q3",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),r=o.choiceTouchMove,i=o.choiceTouchEnd,u=o.choiceTouchStart,s=o.selected;return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:u,selected:s}},mounted:function(){var e=document.querySelectorAll(".q3-choice");e.forEach((function(e){var t=window.innerWidth/2-24;e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px")}))}};c("742a");const L=v()(P,[["render",C],["__scopeId","data-v-10c4ce4c"]]);var I=L,W={class:"q4-title"},G={class:"q4-section-wrapper"},H={class:"glide q4-section"},X={class:"glide__track","data-glide-el":"track"},D={class:"glide__slides"},N=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],R=Object(n["i"])('<div class="glide__arrows" data-glide-el="controls" data-v-fb51f124><button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;" data-v-fb51f124><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-fb51f124><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(165, 147, 93)" stroke-linecap="round" data-v-fb51f124><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(165, 147, 93)" dur="2s" begin="0; l42.end" data-v-fb51f124></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(165, 147, 93)" to="rgb(255, 255, 255)" dur="2s" begin="l41.end" data-v-fb51f124></animate></polyline></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;" data-v-fb51f124><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-fb51f124><polyline points="10 200, 110 100, 10 0,0 10,85 100, 0 190 " fill="#64798B" stroke-linecap="round" data-v-fb51f124><animate id="r41" attributeName="fill" attributeType="XML" from="#fff" to="#64798B" dur="2s" begin="0; r42.end" data-v-fb51f124></animate><animate id="r42" attributeName="fill" attributeType="XML" from="#64798B" to="#fff" dur="2s" begin="r41.end" data-v-fb51f124></animate></polyline></svg></button></div><div class="glide__bullets" data-glide-el="controls[nav]" data-v-fb51f124></div>',2),J={class:"q4-instruction"};function z(e,t,c,o,r,i){return Object(n["A"])(),Object(n["g"])("div",{class:"q4 fixed-no-scroll",style:Object(n["r"])(c.questionBackground)},[Object(n["h"])("h1",W,Object(n["L"])(c.questionText),1),Object(n["h"])("div",G,[Object(n["h"])("div",H,[Object(n["h"])("div",X,[Object(n["h"])("ul",D,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("li",{class:"glide__slide",key:e},[Object(n["h"])("div",{class:Object(n["q"])(["q4-choice",{"selected-q":o.selected===t}]),style:Object(n["r"])("background-image:url(".concat(e.image,")"))},null,6),Object(n["h"])("div",{class:"q4-pick",onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}}," Select ",40,N)])})),128))]),R]),Object(n["h"])("p",J,Object(n["L"])(c.currentQuestion.instruction),1)])])],4)}var U=c("0346"),Z=c("5c40"),Y={name:"aos-q4",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),r=o.choiceTouchMove,i=o.choiceTouchEnd,u=o.choiceTouchStart,s=o.selected;return Object(Z["D"])((function(){new U["a"](".glide",{type:"carousel"}).mount()})),{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:u,selected:s}},mounted:function(){var e={w:271,h:375},t=.85*window.innerHeight-40-10-40-64,c=.75*window.innerWidth;console.log({safeH:t,safeW:c});var n=document.querySelectorAll(".q4-choice");n.forEach((function(n){c*(e.h/e.w)<=t?(console.log("use W"),n.style.width="".concat(c,"px"),n.style.height="".concat(c*(e.h/e.w),"px")):(n.style.height="".concat(t,"px"),n.style.width="".concat(t*(e.w/e.h),"px"))}))}};c("57ba");const F=v()(Y,[["render",z],["__scopeId","data-v-fb51f124"]]);var K=F,V=function(e){return Object(n["D"])("data-v-fb08e512"),e=e(),Object(n["B"])(),e},$={class:"q5"},ee={class:"q5-title"},te=V((function(){return Object(n["h"])("div",{class:"q5-rotate"},null,-1)})),ce={class:"q5-select"},ne=["onTouchstart","onMousedown"];function oe(e,t,c,o,r,i){var u=Object(n["I"])("scene");return Object(n["A"])(),Object(n["g"])("div",$,[Object(n["h"])("div",ee,Object(n["L"])(c.questionText),1),Object(n["k"])(u,{scene:o.scene,scale:{x:.5,y:.5,z:.5}},null,8,["scene","scale"]),te,Object(n["h"])("div",{class:"q5-confirm",onTouchstart:t[0]||(t[0]=Object(n["T"])((function(){return o.next&&o.next.apply(o,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return o.next&&o.next.apply(o,arguments)})}," confirm ",32),Object(n["h"])("ul",ce,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("li",{key:e,class:Object(n["q"])({"select-q":o.selected===t}),onTouchstart:Object(n["T"])((function(c){return o.changeScene(e,t)}),["prevent"]),onMousedown:function(c){return o.changeScene(e,t)}},Object(n["L"])(t+1),43,ne)})),128))])])}var re=c("539c"),ie=c("bece"),ue={name:"aos-q5",components:{Scene:ie["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){var t=e.currentQuestion.id,c=e.questionChoices[0].image,n=e.questionChoices[0].id,o=Object(re["a"])(t,c,n),r=o.changeScene,i=o.next,u=o.scene,s=o.selected;return{changeScene:r,next:i,scene:u,selected:s}}};c("eae7");const se=v()(ue,[["render",oe],["__scopeId","data-v-fb08e512"]]);var ae=se,de={class:"q6"},he={class:"q6-title"},le={class:"q6-section"},be={class:"q6-section-choices"},fe=["onTouchstart","onTouchmove","onMouseenter","onMousemove"];function je(e,t,c,o,r,i){return Object(n["A"])(),Object(n["g"])("div",de,[Object(n["h"])("div",{class:"q6-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("div",{class:"q6-icon",style:Object(n["r"])({background:"url(".concat(c.currentQuestion.selector_image,")"),backgroundSize:"cover"})},null,4),Object(n["h"])("h1",he,Object(n["L"])(c.questionText),1),Object(n["h"])("section",le,[Object(n["h"])("div",be,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(n["q"])({"selected-q6":o.selected===t,"unselect-q":o.selected&&o.selected!==t})},[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(e.text,(function(e){return Object(n["A"])(),Object(n["g"])("span",{key:e},Object(n["L"])(e),1)})),128)),Object(n["h"])("div",{onTouchstart:Object(n["T"])((function(c){return o.choiceTouchStartSmoke(t,e.id)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMouseenter:Object(n["T"])((function(c){return o.choiceTouchStartSmoke(t,e.id)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"])},null,40,fe)],2)})),128))])])])}var Oe={name:"aos-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n,1200),r=o.choiceTouchMove,i=o.choiceTouchEnd,u=o.choiceTouchStart,s=o.selected;function a(e,t){return d.apply(this,arguments)}function d(){return d=Object(h["a"])(regeneratorRuntime.mark((function e(t,c){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:return e.next=4,document.querySelector(".unselect-q");case 4:n=e.sent,n&&b["a"].timeline().to(".unselect-q",{opacity:0,stagger:{amount:.5}}).to(".selected-q6 span",{textShadow:"0 0 25px whitesmoke",filter:"blur(8px)",opacity:0,stagger:{amount:2}}).to(".selected-q6",{translateX:80,translateY:-40,rotate:-40,skewX:60,scale:1.2,duration:2,onComplete:function(){i(c)}},"<");case 6:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}return{choiceTouchMove:r,choiceTouchStartSmoke:a,selected:s}}};c("6fdb");const ve=v()(Oe,[["render",je],["__scopeId","data-v-755c329c"]]);var qe=ve,Te={class:"q7 fixed-no-scroll"},ge={class:"q7-banner"},pe={class:"q7-section"},me={class:"q7-title"},ye={class:"q7-choices"},we=["onTouchstart","onTouchmove","onTouchend","onMousedown","onMouseenter","onMousemove"];function Me(e,t,c,o,r,i){return Object(n["A"])(),Object(n["g"])("div",Te,[Object(n["h"])("div",{class:"q7-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("div",ge,[Object(n["h"])("div",{class:"q7-banner-inner",style:Object(n["r"])({"background-image":"url(".concat(c.currentQuestion.instruction_image,")")})},null,4)]),Object(n["h"])("div",pe,[Object(n["h"])("h1",me,Object(n["L"])(c.questionText),1),Object(n["h"])("div",ye,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(t,c){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:t,style:Object(n["r"])("background-image:url(".concat(t.image,")")),class:Object(n["q"])({"selected-q":o.selected===c}),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStartParticle(c,e)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"]),onTouchend:Object(n["T"])((function(e){return o.choiceTouchEnd(t.id)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)},onMouseenter:Object(n["T"])((function(t){return e.choiceTouchStart(c)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(c)}),["prevent"])},[Object(n["h"])("div",{class:Object(n["q"])({"selected-qd":o.selected===c})},null,2)],46,we)})),128))])])])}var xe={name:"aos-q7",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),r=o.choiceTouchMove,i=o.choiceTouchEnd,u=o.choiceTouchStart,s=o.selected;function a(e,t){u(e),Object(M["a"])(t.target,!1)}return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStartParticle:a,selected:s}},mounted:function(){var e={w:563,h:512},t={w:192,h:252},c={w:312,h:74},n=document.querySelector(".q7-banner");n.style.height="".concat(n.offsetWidth*(e.h/e.w),"px");var o=document.querySelector(".q7-banner-inner");o.style.height="".concat(.95*n.offsetHeight,"px"),o.style.width="".concat(.95*n.offsetHeight*(t.w/t.h),"px");var r=document.querySelector(".q7-section");r.style.height="".concat(window.innerHeight-n.offsetHeight,"px");var i=document.querySelectorAll(".q7-choices > div");i.forEach((function(e){e.style.width="".concat(.85*window.innerWidth,"px"),e.style.height="".concat(.85*window.innerWidth*(c.h/c.w),"px")}))}};c("0da6");const ke=v()(xe,[["render",Me],["__scopeId","data-v-9056ef1a"]]);var Se=ke,Ae=c("be84"),_e={name:"aos-question",components:{AosQ1:T,AosQ2:S,AosQ3:I,AosQ4:K,AosQ5:ae,AosQ6:qe,AosQ7:Se},setup:function(){var e=Object(Ae["a"])(),t=e.questionId,c=e.questionBackground,n=e.currentQuestion,o=e.updateParams,r=e.store;return{questionId:t,questionBackground:c,currentQuestion:n,updateParams:o,store:r}}};c("8d67");const Qe=v()(_e,[["render",o],["__scopeId","data-v-21a2d554"]]);t["default"]=Qe},eae7:function(e,t,c){"use strict";c("8080")}}]);
//# sourceMappingURL=chunk-5d529f56.fa067afc.js.map