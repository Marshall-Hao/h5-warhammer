(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0111f0f1"],{1007:function(e,t,c){},"2c7f":function(e,t,c){},4588:function(e,t,c){},"52d4":function(e,t,c){"use strict";c("e8b3")},"70c7":function(e,t,c){},8080:function(e,t,c){},8201:function(e,t,c){"use strict";c("70c7")},"8d67":function(e,t,c){"use strict";c("1007")},"9ca2":function(e,t,c){"use strict";c("2c7f")},a822:function(e,t,c){},ad8d:function(e,t,c){},ba77:function(e,t,c){"use strict";c("4588")},c107:function(e,t,c){"use strict";c("ad8d")},cc22:function(e,t,c){"use strict";c("a822")},de02:function(e,t,c){"use strict";c.r(t);var n=c("7a23");function o(e,t,c,o,i,r){return Object(n["A"])(),Object(n["g"])("div",null,[(Object(n["A"])(),Object(n["e"])(Object(n["J"])("aos-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"]))])}var i={class:"q1 fixed-no-scroll"},r={class:"q1-title"},u={class:"q1-section"},a={class:"q1-section-choices"},s=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],d=Object(n["i"])('<svg width="0" height="0" data-v-be36c8e2><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-be36c8e2><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-be36c8e2></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="200" data-v-be36c8e2><animate id="scale1" attributeName="scale" attributeType="XML" from="200" to="10" dur="2s" fill="freeze" begin="0; scale3.end" data-v-be36c8e2></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="10" to="1" dur="2.5s" fill="freeze" begin="scale1.end" data-v-be36c8e2></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="1" to="200" dur="2s" fill="freeze" begin="scale2.end" data-v-be36c8e2></animate></feDisplacementMap></filter></svg>',1);function h(e,t,c,o,h,l){return Object(n["A"])(),Object(n["g"])("div",i,[Object(n["h"])("div",{class:"q1-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("h1",r,Object(n["L"])(c.questionText),1),Object(n["h"])("section",u,[Object(n["h"])("div",a,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{class:Object(n["q"])(["q1-section-choice",{"selected-q":o.selected===t}]),ref_for:!0,ref:"q",key:e,style:Object(n["r"])("background-image:url(".concat(e.image,")"))},[Object(n["h"])("div",{onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,s)],6)})),128))])]),d])}c("d3b7"),c("159b");var l=c("ef6d"),b={name:"aos-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),i=o.choiceTouchMove,r=o.choiceTouchEnd,u=o.choiceTouchStart,a=o.selected;return{choiceTouchMove:i,choiceTouchEnd:r,choiceTouchStart:u,selected:a}},mounted:function(){window.innerWidth>375?this.setChoiceDimension(.8):(document.querySelector(".q1-title").style.height="15%",document.querySelector(".q1-section").style.height="85%",this.setChoiceDimension(.85))},methods:{setChoiceDimension:function(e){var t=document.querySelectorAll(".q1-section-choice");console.log({choices:t});var c=window.innerWidth-10,n=window.innerHeight*e-45-2,o=c/2*(25/17)*2<=n;console.log({useW:o}),o?t.forEach((function(e){e.style.width="".concat(c/2,"px"),e.style.height="".concat(c/2*(25/17),"px")})):t.forEach((function(e){e.style.height="".concat(n/2,"px"),e.style.width="".concat(n/2*.68,"px")}))}}},f=(c("9ca2"),c("d959")),v=c.n(f);const O=v()(b,[["render",h],["__scopeId","data-v-be36c8e2"]]);var j=O,T=function(e){return Object(n["D"])("data-v-44601c52"),e=e(),Object(n["B"])(),e},g={class:"q2-title"},m={class:"q2-section"},q={class:"q2-choices"},p=["onTouchmove","onTouchstart","onTouchend","onMouseenter","onMousemove","onMousedown"],y={width:"0",height:"0"},M={id:"smoke"},w={ref:"turbulence",id:"turbulence",type:"fractalNoise",baseFrequency:".03",numOctaves:"20"},S=T((function(){return Object(n["h"])("feDisplacementMap",{in:"SourceGraphic",scale:"30"},null,-1)}));function x(e,t,c,o,i,r){return Object(n["A"])(),Object(n["g"])("div",{class:"q2 fixed-no-scroll",style:Object(n["r"])(c.questionBackground)},[Object(n["h"])("h1",g,Object(n["L"])(c.questionText),1),Object(n["h"])("div",m,[Object(n["h"])("div",q,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(n["q"])({"selected-q":o.selected===t}),style:Object(n["r"])({backgroundImage:"url(".concat(e.image,")")})},[Object(n["h"])("div",{onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,p)],6)})),128))])]),(Object(n["A"])(),Object(n["g"])("svg",y,[Object(n["h"])("filter",M,[Object(n["h"])("feTurbulence",w,null,512),S])]))],4)}c("25f0");var k=c("5c40"),A={name:"aos-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c,o,i,r=t.emit,u=e.currentQuestion.id,a=Object(n["F"])(null),s=1,d=Math.PI/180,h=Object(l["a"])(r,u),b=h.choiceTouchMove,f=h.choiceTouchEnd,v=h.choiceTouchStart,O=h.selected;function j(){s+=.35,o=.035,i=.015,o+=.01*Math.cos(s*d),i+=.009*Math.sin(s*d),c=o.toString()+" "+i.toString(),a.value.setAttributeNS(null,"baseFrequency",c),window.requestAnimationFrame(j)}return Object(k["D"])((function(){window.requestAnimationFrame(j)})),{turbulence:a,choiceTouchMove:b,choiceTouchEnd:f,choiceTouchStart:v,selected:O}}};c("ba77");const _=v()(A,[["render",x],["__scopeId","data-v-44601c52"]]);var Q=_,E={class:"q3 fixed-no-scroll"},B={class:"q3-title"},C={class:"q3-section"},L={class:"q3-choices"},N=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function D(e,t,c,o,i,r){return Object(n["A"])(),Object(n["g"])("div",E,[Object(n["h"])("div",{class:"q3-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("h1",B,Object(n["L"])(c.questionText),1),Object(n["h"])("div",C,[Object(n["h"])("div",L,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{class:Object(n["q"])(["q3-choice",{"selected-q":o.selected===t}]),ref_for:!0,ref:"q",key:e,style:Object(n["r"])("background-image:url(".concat(e.image,")")),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,46,N)})),128))])])])}var I={name:"aos-q3",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),i=o.choiceTouchMove,r=o.choiceTouchEnd,u=o.choiceTouchStart,a=o.selected;return{choiceTouchMove:i,choiceTouchEnd:r,choiceTouchStart:u,selected:a}},mounted:function(){var e=document.querySelectorAll(".q3-choice");e.forEach((function(e){var t=window.innerWidth/2-24;e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px")}))}};c("c107");const G=v()(I,[["render",D],["__scopeId","data-v-368c24c7"]]);var P=G,X={class:"q4-title"},z={class:"q4-section-wrapper"},F={class:"glide q4-section"},W={class:"glide__track","data-glide-el":"track"},H={class:"glide__slides"},U=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],J=Object(n["i"])('<div class="glide__arrows" data-glide-el="controls" data-v-13d7622a><button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;" data-v-13d7622a><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-13d7622a><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(165, 147, 93)" stroke-linecap="round" data-v-13d7622a><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(165, 147, 93)" dur="2s" begin="0; l42.end" data-v-13d7622a></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(165, 147, 93)" to="rgb(255, 255, 255)" dur="2s" begin="l41.end" data-v-13d7622a></animate></polyline></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;" data-v-13d7622a><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-13d7622a><polyline points="10 200, 110 100, 10 0,0 10,85 100, 0 190 " fill="#64798B" stroke-linecap="round" data-v-13d7622a><animate id="r41" attributeName="fill" attributeType="XML" from="#fff" to="#64798B" dur="2s" begin="0; r42.end" data-v-13d7622a></animate><animate id="r42" attributeName="fill" attributeType="XML" from="#64798B" to="#fff" dur="2s" begin="r41.end" data-v-13d7622a></animate></polyline></svg></button></div><div class="glide__bullets" data-glide-el="controls[nav]" data-v-13d7622a></div>',2),R={class:"q4-instruction"};function K(e,t,c,o,i,r){return Object(n["A"])(),Object(n["g"])("div",{class:"q4 fixed-no-scroll",style:Object(n["r"])(c.questionBackground)},[Object(n["h"])("h1",X,Object(n["L"])(c.questionText),1),Object(n["h"])("div",z,[Object(n["h"])("div",F,[Object(n["h"])("div",W,[Object(n["h"])("ul",H,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("li",{class:"glide__slide",key:e},[Object(n["h"])("div",{class:"q4-choice",style:Object(n["r"])("background-image:url(".concat(e.image,")"))},null,4),Object(n["h"])("div",{class:Object(n["q"])(["q4-pick",{"selected-q":o.selected===t}]),onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}}," Select ",42,U)])})),128))]),J]),Object(n["h"])("p",R,Object(n["L"])(c.currentQuestion.instruction),1)])])],4)}var V=c("0346"),Y={name:"aos-q4",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),i=o.choiceTouchMove,r=o.choiceTouchEnd,u=o.choiceTouchStart,a=o.selected;return Object(k["D"])((function(){new V["a"](".glide",{type:"carousel"}).mount()})),{choiceTouchMove:i,choiceTouchEnd:r,choiceTouchStart:u,selected:a}},mounted:function(){var e={w:271,h:375},t=.85*window.innerHeight-40-10-40-64,c=.75*window.innerWidth;console.log({safeH:t,safeW:c});var n=document.querySelectorAll(".q4-choice");n.forEach((function(n){c*(e.h/e.w)<=t?(console.log("use W"),n.style.width="".concat(c,"px"),n.style.height="".concat(c*(e.h/e.w),"px")):(n.style.height="".concat(t,"px"),n.style.width="".concat(t*(e.w/e.h),"px"))}))}};c("8201");const Z=v()(Y,[["render",K],["__scopeId","data-v-13d7622a"]]);var $=Z,ee=function(e){return Object(n["D"])("data-v-fb08e512"),e=e(),Object(n["B"])(),e},te={class:"q5"},ce={class:"q5-title"},ne=ee((function(){return Object(n["h"])("div",{class:"q5-rotate"},null,-1)})),oe={class:"q5-select"},ie=["onTouchstart","onMousedown"];function re(e,t,c,o,i,r){var u=Object(n["I"])("scene");return Object(n["A"])(),Object(n["g"])("div",te,[Object(n["h"])("div",ce,Object(n["L"])(c.questionText),1),Object(n["k"])(u,{scene:o.scene,scale:{x:.5,y:.5,z:.5}},null,8,["scene","scale"]),ne,Object(n["h"])("div",{class:"q5-confirm",onTouchstart:t[0]||(t[0]=Object(n["T"])((function(){return o.next&&o.next.apply(o,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return o.next&&o.next.apply(o,arguments)})}," confirm ",32),Object(n["h"])("ul",oe,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("li",{key:e,class:Object(n["q"])({"select-q":o.selected===t}),onTouchstart:Object(n["T"])((function(c){return o.changeScene(e,t)}),["prevent"]),onMousedown:function(c){return o.changeScene(e,t)}},Object(n["L"])(t+1),43,ie)})),128))])])}var ue=c("539c"),ae=c("bece"),se={name:"aos-q5",components:{Scene:ae["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){var t=e.currentQuestion.id,c=e.questionChoices[0].image,n=e.questionChoices[0].id,o=Object(ue["a"])(t,c,n),i=o.changeScene,r=o.next,u=o.scene,a=o.selected;return{changeScene:i,next:r,scene:u,selected:a}}};c("eae7");const de=v()(se,[["render",re],["__scopeId","data-v-fb08e512"]]);var he=de,le={class:"q6"},be={class:"q6-title"},fe={class:"q6-section"},ve={class:"q6-section-choices"},Oe=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],je=Object(n["i"])('<svg width="0" height="0" data-v-cefb0214><filter id="fractal" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%" data-v-cefb0214><feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.032 0.02" numOctaves="1" data-v-cefb0214><animate id="wave1" attributeName="baseFrequency" attributeType="XML" from="0.032 0.02" to="0.022 0.01" dur="3.5s" fill="freeze" begin="0; wave2.end" data-v-cefb0214></animate><animate id="wave2" attributeName="baseFrequency" attributeType="XML" from="0.022 0.01" to="0.032 0.02" dur="3.5s" fill="freeze" begin="wave1.end" data-v-cefb0214></animate></feTurbulence><feDisplacementMap in="SourceGraphic" scale="15" data-v-cefb0214></feDisplacementMap></filter></svg>',1);function Te(e,t,c,o,i,r){return Object(n["A"])(),Object(n["g"])("div",le,[Object(n["h"])("div",{class:"q6-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("div",{class:"q6-icon",style:Object(n["r"])({background:"url(".concat(c.currentQuestion.selector_image,")"),backgroundSize:"cover"})},null,4),Object(n["h"])("h1",be,Object(n["L"])(c.questionText),1),Object(n["h"])("section",fe,[Object(n["h"])("div",ve,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(n["q"])({"selected-q":o.selected===t})},[Object(n["j"])(Object(n["L"])(e.text)+" ",1),Object(n["h"])("div",{onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,Oe)],2)})),128))])]),je])}var ge={name:"aos-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),i=o.choiceTouchMove,r=o.choiceTouchEnd,u=o.choiceTouchStart,a=o.selected;return{choiceTouchMove:i,choiceTouchEnd:r,choiceTouchStart:u,selected:a}}};c("cc22");const me=v()(ge,[["render",Te],["__scopeId","data-v-cefb0214"]]);var qe=me,pe={class:"q7 fixed-no-scroll"},ye={class:"q7-banner"},Me={class:"q7-section"},we={class:"q7-title"},Se={class:"q7-choices"},xe=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],ke=Object(n["i"])('<svg width="0" height="0" data-v-6fd84b78><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-6fd84b78><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-6fd84b78></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="10" data-v-6fd84b78><animate id="scale1" attributeName="scale" attributeType="XML" from="50" to="5" dur="2s" fill="freeze" begin="0; scale3.end" data-v-6fd84b78></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="5" to="0" dur="2.5s" fill="freeze" begin="scale1.end" data-v-6fd84b78></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="0" to="50" dur="2s" fill="freeze" begin="scale2.end" data-v-6fd84b78></animate></feDisplacementMap></filter></svg>',1);function Ae(e,t,c,o,i,r){return Object(n["A"])(),Object(n["g"])("div",pe,[Object(n["h"])("div",{class:"q7-background",style:Object(n["r"])(c.questionBackground)},null,4),Object(n["h"])("div",ye,[Object(n["h"])("div",{class:"q7-banner-inner",style:Object(n["r"])({"background-image":"url(".concat(c.currentQuestion.instruction_image,")")})},null,4)]),Object(n["h"])("div",Me,[Object(n["h"])("h1",we,Object(n["L"])(c.questionText),1),Object(n["h"])("div",Se,[(Object(n["A"])(!0),Object(n["g"])(n["a"],null,Object(n["G"])(c.questionChoices,(function(e,t){return Object(n["A"])(),Object(n["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(n["q"])({"selected-q":o.selected===t}),style:Object(n["r"])("background-image:url(".concat(e.image,")"))},[Object(n["h"])("div",{onTouchstart:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(n["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(n["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(n["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,xe)],6)})),128))])]),ke])}var _e={name:"aos-q7",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var c=t.emit,n=e.currentQuestion.id,o=Object(l["a"])(c,n),i=o.choiceTouchMove,r=o.choiceTouchEnd,u=o.choiceTouchStart,a=o.selected;return{choiceTouchMove:i,choiceTouchEnd:r,choiceTouchStart:u,selected:a}},mounted:function(){var e={w:563,h:512},t={w:192,h:252},c={w:312,h:74},n=document.querySelector(".q7-banner");n.style.height="".concat(n.offsetWidth*(e.h/e.w),"px");var o=document.querySelector(".q7-banner-inner");o.style.height="".concat(.95*n.offsetHeight,"px"),o.style.width="".concat(.95*n.offsetHeight*(t.w/t.h),"px");var i=document.querySelector(".q7-section");i.style.height="".concat(window.innerHeight-n.offsetHeight,"px");var r=document.querySelectorAll(".q7-choices > div");r.forEach((function(e){e.style.width="".concat(.85*window.innerWidth,"px"),e.style.height="".concat(.85*window.innerWidth*(c.h/c.w),"px")}))}};c("52d4");const Qe=v()(_e,[["render",Ae],["__scopeId","data-v-6fd84b78"]]);var Ee=Qe,Be=c("be84"),Ce={name:"aos-question",components:{AosQ1:j,AosQ2:Q,AosQ3:P,AosQ4:$,AosQ5:he,AosQ6:qe,AosQ7:Ee},setup:function(){var e=Object(Be["a"])(),t=e.questionId,c=e.questionBackground,n=e.currentQuestion,o=e.updateParams,i=e.store;return{questionId:t,questionBackground:c,currentQuestion:n,updateParams:o,store:i}}};c("8d67");const Le=v()(Ce,[["render",o],["__scopeId","data-v-21a2d554"]]);t["default"]=Le},e8b3:function(e,t,c){},eae7:function(e,t,c){"use strict";c("8080")}}]);
//# sourceMappingURL=chunk-0111f0f1.a7f5d4c1.js.map