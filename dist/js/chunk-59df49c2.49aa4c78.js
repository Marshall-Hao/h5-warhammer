(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59df49c2"],{"0213":function(e,t,n){"use strict";n("cb29");var c=n("7a23"),o=["href","fill","stroke"];function r(e,t,n,r,i,a){return Object(c["A"])(),Object(c["g"])("svg",{class:Object(c["q"])(n.icon)},[Object(c["h"])("use",{href:r.iconName,style:Object(c["r"])(n.duration),fill:n.fill,stroke:n.stroke},null,12,o)],2)}n("a9e3"),n("99af"),n("b0c0");var i={name:"svg-icon",props:{name:[Number,String],prefix:{type:String,default:"war-q3"},duration:{type:Object,default:{animation:"logo3 3s infinite alternate"}},fill:{type:String,default:"black"},stroke:{type:String,default:"rgba(72, 138, 20, 0)"},icon:{type:String,default:"icon"}},setup:function(e){var t="#".concat(e.prefix).concat(e.name);return{iconName:t}}},a=(n("3b3f"),n("d959")),u=n.n(a);const s=u()(i,[["render",r],["__scopeId","data-v-2875fd7a"]]);t["a"]=s},"17f1":function(e,t,n){"use strict";n("bfa4")},"1ceb":function(e,t,n){},"21f3":function(e,t,n){"use strict";n("4515")},"33dd":function(e,t,n){},"3b3f":function(e,t,n){"use strict";n("1ceb")},4303:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,i){return Object(c["A"])(),Object(c["e"])(Object(c["J"])("fourtyk-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"])}var r={class:"q1 fixed-no-scroll"},i={class:"q1-title"},a={class:"q1-section"},u={class:"q1-section-choices"},s=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function d(e,t,n,o,d,l){return Object(c["A"])(),Object(c["g"])("div",r,[Object(c["h"])("div",{class:"q1-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",i,Object(c["L"])(n.questionText),1),Object(c["h"])("section",a,[Object(c["h"])("div",u,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(c["q"])({"selected-q1":o.selected===t}),style:Object(c["r"])("background-image:url(".concat(e.image,")"))},[Object(c["h"])("div",{onTouchstart:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,s)],6)})),128))])])])}var l=n("ef6d"),f={name:"fourtyk-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c,1500),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,selected:u}}},b=(n("7014"),n("d959")),h=n.n(b);const p=h()(f,[["render",d],["__scopeId","data-v-35770fe8"]]);var O=p,v={class:"q2 fixed-no-scroll"},j={class:"q2-title"},g={class:"q2-section"},m={class:"q2-section-choices"},y=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function q(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",v,[Object(c["h"])("div",{class:"q2-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",j,Object(c["L"])(n.questionText),1),Object(c["h"])("section",g,[Object(c["h"])("div",m,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(t,n){return Object(c["A"])(),Object(c["g"])("div",{key:t,style:Object(c["r"])({backgroundImage:"url(".concat(t.image,")")}),class:Object(c["q"])({"selected-q":o.selected===n}),onTouchstart:Object(c["T"])((function(e){return o.choiceTouchStartParticle(n,e,t.id)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onTouchend:Object(c["T"])((function(e){return o.choiceTouchEnd(t.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(t){return e.choiceTouchStart(n)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)}},[Object(c["h"])("div",{class:Object(c["q"])(["q2-section-choices-mask",{"selected-q":o.selected===n}])},null,2)],46,y)})),128))])])])}var T=n("1da1"),k=(n("96cf"),{name:"fourtyk-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c,2100),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;function s(e,t,n){return d.apply(this,arguments)}function d(){return d=Object(T["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a(t);case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStartParticle:s,selected:u}}});n("f1a1");const w=h()(k,[["render",q]]);var x=w,M={class:"q3 fixed-no-scroll"},C={class:"q3-section"},S={class:"q3-section-title"},_={class:"q3-section-choices"},I=["onClick"];function A(e,t,n,o,r,i){var a=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",M,[Object(c["h"])("div",{class:"q3-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("div",C,[Object(c["h"])("h1",S,Object(c["L"])(n.questionText),1),Object(c["h"])("div",_,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q3-section-choice",{"select-q3":o.selected===t,"unselect-q3":o.selected!==t}]),onClick:Object(c["T"])((function(n){return o.choiceTouchZoom(t,e.id)}),["prevent"])},[2!==t?(Object(c["A"])(),Object(c["e"])(a,{key:0,name:t+1,duration:{}},null,8,["name"])):(Object(c["A"])(),Object(c["e"])(a,{key:1,name:t+1,duration:{},icon:"icon-special"},null,8,["name"]))],10,I)})),128))])])])}var Q=["src"];function B(e,t,n,o,r,i){var a=Object(c["I"])("fly-box");return Object(c["A"])(),Object(c["e"])(a,{lineColor:n.lineColor,starColor:n.starColor,duration:n.duration},{default:Object(c["R"])((function(){return[Object(c["h"])("img",{src:n.posterUrl,style:Object(c["r"])(n.style)},null,12,Q)]})),_:1},8,["lineColor","starColor","duration"])}n("a9e3"),n("99af");var E,L=function(e){return Object(c["D"])("data-v-6c21862b"),e=e(),Object(c["B"])(),e},Y={class:"fly-box",ref:"flyBoxRef"},P=["width","height","viewBox"],R=["id","d"],X=["id"],N=["fill"],z=["dur","path"],F=["id"],G=L((function(){return Object(c["h"])("stop",{offset:"0","stop-color":"#fff","stop-opacity":"1"},null,-1)})),W=L((function(){return Object(c["h"])("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)})),D=[G,W],V=["href","stroke"],$=["href","stroke","mask"],U={class:"fly-box-content"};function H(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",Y,[(Object(c["A"])(),Object(c["g"])("svg",{width:o.width,height:o.height,viewBox:"0 0 ".concat(o.width," ").concat(o.height)},[Object(c["h"])("defs",null,[Object(c["h"])("path",{id:o.pathId,d:o.path,fill:"none"},null,8,R),Object(c["h"])("mask",{id:o.maskId},[Object(c["h"])("circle",{r:"50",cx:"0",cy:"0",fill:"url(#".concat(o.radialId,")")},[Object(c["h"])("animateMotion",{dur:"".concat(n.duration,"s"),path:o.path,rotate:"auto",repeatCount:"indefinite"},null,8,z)],8,N)],8,X),Object(c["h"])("radialGradient",{id:o.radialId,cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},D,8,F)]),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"1",stroke:n.lineColor},null,8,V),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"3",stroke:n.starColor,mask:"url(#".concat(o.maskId,")")},null,8,$)],8,P)),Object(c["h"])("div",U,[Object(c["H"])(e.$slots,"default",{},void 0,!0)])],512)}var J=new Uint8Array(16);function Z(){if(!E&&(E="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(J)}var K=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ee(e){return"string"===typeof e&&K.test(e)}for(var te=ee,ne=[],ce=0;ce<256;++ce)ne.push((ce+256).toString(16).substr(1));function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(ne[e[t+0]]+ne[e[t+1]]+ne[e[t+2]]+ne[e[t+3]]+"-"+ne[e[t+4]]+ne[e[t+5]]+"-"+ne[e[t+6]]+ne[e[t+7]]+"-"+ne[e[t+8]]+ne[e[t+9]]+"-"+ne[e[t+10]]+ne[e[t+11]]+ne[e[t+12]]+ne[e[t+13]]+ne[e[t+14]]+ne[e[t+15]]).toLowerCase();if(!te(n))throw TypeError("Stringified UUID is invalid");return n}var re=oe;function ie(e,t,n){e=e||{};var c=e.random||(e.rng||Z)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=c[o];return t}return re(c)}var ae=ie,ue={name:"fly-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2}},setup:function(){var e=Object(c["F"])(0),t=Object(c["F"])(0),n=Object(c["F"])(null),o=ae(),r="fly-box-path-".concat(o),i="radial-graident-".concat(o),a="fly-box-mask-".concat(o),u=Object(c["c"])((function(){return"M0 5 L".concat(e.value," 5 L").concat(e.value," ").concat(t.value-5," L5 ").concat(t.value-5," Z")}));function s(){var c=n.value;e.value=c.clientWidth,t.value=c.clientHeight}return Object(c["z"])((function(){s()})),Object(c["x"])((function(){s()})),{width:e,height:t,path:u,flyBoxRef:n,pathId:r,radialId:i,maskId:a}}};n("c07a");const se=h()(ue,[["render",H],["__scopeId","data-v-6c21862b"]]);var de=se,le={name:"video-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2},posterUrl:String,style:{type:Object,default:{transform:"scale(1.112, 1.1)"}}},components:{FlyBox:de}};n("9333");const fe=h()(le,[["render",B],["__scopeId","data-v-db8ca160"]]);var be=fe,he=n("0213"),pe=n("5796"),Oe={name:"fourtyk-q3",components:{VideoBox:be,SvgIcon:he["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;function s(e,t){return d.apply(this,arguments)}function d(){return d=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(pe["a"])(a,i,t,n,".select-q3",".unselect-q3",!0);case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,choiceTouchZoom:s,selected:u}}};n("8d67");const ve=h()(Oe,[["render",A],["__scopeId","data-v-f3d47baa"]]);var je=ve,ge={class:"q4"},me={class:"q4-bg"},ye=Object(c["i"])('<div class="q4-intro" data-v-19764c7a><p data-v-19764c7a> 你仍然不能决定好前进的方向，但这里有一个罗盘也许可以帮助你。 点击它，为你的命运注入启示。 </p><div data-v-19764c7a><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-19764c7a><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-19764c7a><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-19764c7a></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-19764c7a></animate></polyline></svg><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-19764c7a><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-19764c7a><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-19764c7a></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-19764c7a></animate></polyline></svg></div></div>',1);function qe(e,t,n,o,r,i){var a=Object(c["I"])("LuckyWheel");return Object(c["A"])(),Object(c["g"])("div",ge,[Object(c["h"])("div",me,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover"}),class:Object(c["q"])([{selected:r.selected===t,unselected:r.selected!==t},"q4-bg-choice"])},[Object(c["h"])("div",{class:Object(c["q"])({selected:r.selected===t,unselected:r.selected!==t})},null,2)],6)})),128))]),ye,Object(c["k"])(a,{class:"q4-luckwheel",ref:"myLucky",width:"40rem",height:"40rem",prizes:r.prizes,blocks:r.blocks,defaultConfig:r.defaultConfig,onEnd:i.endCallback},null,8,["prizes","blocks","defaultConfig","onEnd"]),Object(c["h"])("div",{class:"q4-button",onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return i.startWheel&&i.startWheel.apply(i,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return i.startWheel&&i.startWheel.apply(i,arguments)})},null,32)])}n("caad"),n("2532");var Te=n("1caf"),ke=n("aaef"),we=n("335a"),xe=n("6c02"),Me=n("cffa"),Ce={name:"fourtyk-q4",data:function(){return{blocks:[{padding:"0px"},{padding:"0px",imgs:[{src:this.currentQuestion.selector_image,top:"26",width:"80%",rotate:!0}]}],prizes:[{title:"0"},{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"11"}],defaultConfig:{speed:30},choice1:["1","2","3"],choice2:["0","11","10"],choice3:["4","5","6"],choice4:["7","8","9"],selected:null}},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],methods:{startWheel:function(){var e=this;this.$refs.myLucky.play(),setTimeout((function(){var t=Math.floor(11*Math.random());e.$refs.myLucky.stop(t)}),4e3)},endCallback:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){var c,o,r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.$cookie.getCookie(ke["b"]),o=e.title,r=t.currentQuestion.id,t.choice1.includes(o)?(i=t.questionChoices[0].id,t.selected=0):t.choice2.includes(o)?(i=t.questionChoices[1].id,t.selected=1):t.choice3.includes(o)?(i=t.questionChoices[2].id,t.selected=2):(i=t.questionChoices[3].id,t.selected=3),t.$emit("updateParams",5),Object(Te["a"])({questionId:r,choiceId:i},c),n.next=8,t.$nextTick;case 8:a=document.querySelector(".unselected"),console.log(a),Me["a"].to(".selected",{scale:1.05,duration:1.5,ease:"expo.out",onComplete:function(){t.goNextPage()}});case 11:case"end":return n.stop()}}),n)})))()},goNextPage:function(){we["a"].session.set("__currentquiz__",4),this.$router.push({path:"/questions/40k/5"})}},setup:function(){var e=Object(xe["d"])(),t=Object(xe["e"])();Object(xe["c"])((function(){var n=we["a"].session.get("__currentquiz__");console.log(Number(e.params.id),n),Number(e.params.id)>n&&t.push({path:"/questions/40k/".concat(n+1)})}))}};n("7bb9");const Se=h()(Ce,[["render",qe],["__scopeId","data-v-19764c7a"]]);var _e=Se,Ie={class:"q5"};function Ae(e,t,n,o,r,i){var a=Object(c["I"])("new-scene");return Object(c["A"])(),Object(c["g"])("div",Ie,[Object(c["k"])(a,{choicesList:n.questionChoices,nowQuestion:n.currentQuestion},null,8,["choicesList","nowQuestion"])])}var Qe=n("7d59"),Be={name:"aos-q5",components:{newScene:Qe["a"],NewScene:Qe["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){e.currentQuestion.id,e.questionChoices[0].image,e.questionChoices[0].id;return{}}};n("21f3");const Ee=h()(Be,[["render",Ae],["__scopeId","data-v-47004418"]]);var Le=Ee,Ye={class:"q6-title"},Pe={class:"q6-section"},Re={class:"q6-grid"},Xe={class:"q6-card-front-content"},Ne=["onTouchstart","onMouseenter","onMousemove"];function ze(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",{class:"q6 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",Ye,Object(c["L"])(n.questionText),1),Object(c["h"])("div",Pe,[Object(c["h"])("div",Re,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q6-card",{"select-card":o.flip===n,"unselect-card":o.flip!==n}])},[Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-back",{"back-flip":o.flip===n}]),style:Object(c["r"])({background:"url(".concat(e.image,")"),backgroundSize:"cover",borderRadius:"1.3rem"}),onMouseleave:t[0]||(t[0]=function(){return o.backPos&&o.backPos.apply(o,arguments)})},null,38),Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-front",{"front-flip":o.flip===n}])},[Object(c["h"])("div",Xe,[Object(c["h"])("div",{class:"q6-card-front-btn",onTouchstart:Object(c["T"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"])},null,40,Ne)])],2)],2)})),128))])])],4)}n("d3b7"),n("159b");var Fe=n("2d08"),Ge={name:"fourtyk-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,o=e.currentQuestion.id,r=Object(c["F"])(null),i=Object(l["a"])(n,o,2500),a=i.choiceTouchMove,u=i.choiceTouchEnd;function s(e,t){return d.apply(this,arguments)}function d(){return d=Object(T["a"])(regeneratorRuntime.mark((function e(t,n){var o,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.value=t,e.next=3,Object(c["p"])();case 3:return e.next=5,Object(c["p"])();case 5:return e.next=7,document.querySelector(".select-card");case 7:return o=e.sent,i=Object(Fe["a"])(o).left,a=Object(Fe["a"])(o).top,e.next=12,document.querySelector(".unselect-card");case 12:s=e.sent,s&&Me["a"].timeline().to(".unselect-card",{opacity:0,stagger:{amount:.5}}).fromTo(".select-card",{position:"absolute",left:"".concat(i),top:"".concat(a)},{xPercent:-50,left:"50%",yPercent:-50,top:"50%",position:"absolute",duration:1,scale:1.5}).to(".front-flip",{rotateY:-180}).to(".back-flip",{rotateY:0,duration:.5,onComplete:function(){u(n)}},"<");case 14:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(){r.value=null}return{flip:r,flipCard:s,backPos:f,choiceTouchMove:a}},mounted:function(){window.innerHeight>800&&document.querySelector(".q6").classList.add("paddingY"),window.innerWidth,this.setChoiceDimension(.8)},methods:{setChoiceDimension:function(e){var t=document.querySelectorAll(".q6-card");console.log({cards:t});var n=window.innerWidth-40-2,c=window.innerHeight*e-45-10,o=n/2*(25/17)*2<=c;console.log({useW:o}),o?t.forEach((function(e){e.style.width="".concat(n/2,"px"),e.style.height="".concat(n/2*(25/17),"px")})):t.forEach((function(e){e.style.height="".concat(c/2,"px"),e.style.width="".concat(c/2*.68,"px")}))}}};n("5c5f");const We=h()(Ge,[["render",ze],["__scopeId","data-v-6bd91f1f"]]);var De=We,Ve={class:"q7-title"},$e={class:"q7-section"},Ue={class:"q7-progress"},He={class:"q7-progress-top",ref:"swipeOne"},Je={class:"q7-progress-eagle"},Ze={class:"q7-progress-instruction"},Ke={class:"q7-progress-bottom",ref:"swipeTwo"};function et(e,t,n,o,r,i){var a=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",{class:"q7 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",Ve,Object(c["L"])(n.questionText),1),Object(c["h"])("div",$e,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{class:"q7-section-option",key:e},[0===t?(Object(c["A"])(),Object(c["g"])("div",{key:0,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"top"},null,4)):(Object(c["A"])(),Object(c["g"])("div",{key:1,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"bottom"},null,4))])})),128))]),Object(c["h"])("div",Ue,[Object(c["h"])("div",He,null,512),Object(c["h"])("div",{class:"q7-progress-container",style:Object(c["r"])(o.iconTransform),onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onTouchmove:t[1]||(t[1]=Object(c["T"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onTouchend:t[2]||(t[2]=Object(c["T"])((function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)}),["prevent"])),onMouseenter:t[3]||(t[3]=Object(c["T"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onMousemove:t[4]||(t[4]=Object(c["T"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onMouseleave:t[5]||(t[5]=function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)})},[Object(c["h"])("div",Je,[Object(c["k"])(a,{name:3,fill:"#fff",duration:{}}),Object(c["h"])("p",Ze,Object(c["L"])(n.currentQuestion.instruction),1)])],36),Object(c["h"])("div",Ke,null,512)])],4)}var tt=n("f148"),nt={name:"fourtyk-q7",components:{SvgIcon:he["a"],VideoBox:be},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e){var t={animation:"mainlogo 0.8s infinite alternate"},n=e.currentQuestion.id,o=e.questionChoices,r=Object(c["c"])((function(){return"linear-gradient(\n          0,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(p.redOffset,"%,\n          transparent ").concat(p.transparentOffsetY,"%\n        );")})),i=Object(c["c"])((function(){return"linear-gradient(\n           180deg,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(p.greyOffset,"%,\n          transparent ").concat(p.transparentOffsetYGrey,"%\n        );")})),a=Object(c["c"])((function(){return"".concat(p.duration,"ms")})),u=Object(tt["a"])("v",n,o),s=u.swipeOne,d=u.swipeTwo,l=u.onMiddleTouchStart,f=u.onMiddleTouchMove,b=u.onMiddleTouchEnd,h=u.iconTransform,p=u.maskTransform;return Object(c["x"])((function(){})),{animation:t,swipeOne:s,swipeTwo:d,onMiddleTouchStart:l,onMiddleTouchMove:f,onMiddleTouchEnd:b,iconTransform:h,maskTransform:p,maskValue:r,greyMask:i,duration:a}}};n("17f1");const ct=h()(nt,[["render",et],["__scopeId","data-v-35adc996"]]);var ot=ct,rt=n("be84"),it={name:"40k-question",components:{FourtykQ1:O,FourtykQ2:x,FourtykQ3:je,FourtykQ4:_e,FourtykQ5:Le,FourtykQ6:De,FourtykQ7:ot},setup:function(){var e=Object(rt["a"])(),t=e.questionId,n=e.questionBackground,c=e.currentQuestion,o=e.updateParams,r=e.store;return{questionId:t,questionBackground:n,currentQuestion:c,updateParams:o,store:r}}};const at=h()(it,[["render",o]]);t["default"]=at},4515:function(e,t,n){},"4ecf":function(e,t,n){},"5c5f":function(e,t,n){"use strict";n("ae3d")},"622f":function(e,t,n){},"69a0":function(e,t,n){},7014:function(e,t,n){"use strict";n("decd")},"7bb9":function(e,t,n){"use strict";n("33dd")},"81d5":function(e,t,n){"use strict";var c=n("7b0b"),o=n("23cb"),r=n("07fa");e.exports=function(e){var t=c(this),n=r(t),i=arguments.length,a=o(i>1?arguments[1]:void 0,n),u=i>2?arguments[2]:void 0,s=void 0===u?n:o(u,n);while(s>a)t[a++]=e;return t}},"8d67":function(e,t,n){"use strict";n("4ecf")},9261:function(e,t,n){},9333:function(e,t,n){"use strict";n("622f")},ae3d:function(e,t,n){},b0c0:function(e,t,n){var c=n("83ab"),o=n("5e77").EXISTS,r=n("e330"),i=n("9bf2").f,a=Function.prototype,u=r(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=r(s.exec),l="name";c&&!o&&i(a,l,{configurable:!0,get:function(){try{return d(s,u(this))[1]}catch(e){return""}}})},bfa4:function(e,t,n){},c07a:function(e,t,n){"use strict";n("9261")},cb29:function(e,t,n){var c=n("23e7"),o=n("81d5"),r=n("44d2");c({target:"Array",proto:!0},{fill:o}),r("fill")},decd:function(e,t,n){},f148:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("a9e3");var c=n("7a23"),o=n("6c02"),r=n("bbd5"),i=n("1da1"),a=(n("96cf"),n("26b3")),u=n("aaef"),s=n("335a"),d=n("2808");function l(e,t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])("/user_quizzes",{user_quiz:{category_id:t}},n);case 2:c=e.sent,s["a"].session.set(u["a"],c.id),console.log({quizCategory:c}),c&&d["a"].track("Started Quiz",{category:1===t?"40k":"AOS",user_quiz_id:c.id});case 6:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var b=n("1caf"),h=n("5502"),p=n("032f"),O=n("cffa");function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"h",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Object(p["b"])(),a=i.getCookie(u["b"]),d=Object(r["b"])(),f=Object(c["F"])(null),v=Object(c["F"])(null),j=Object(c["F"])(null),g=Object(c["E"])({left:!1,right:!1}),m=Object(c["E"])({transparentOffset:60,transparentOffsetY:55,transparentOffsetYGrey:55,redOffset:25,greyOffset:25,blkOffset:45,duration:0}),y=Object(o["e"])(),q=Object(h["f"])(),T={};function k(e){d?(T.startX=e.touches[0].pageX,T.startY=e.touches[0].pageY):(T.startX=e.pageX,T.startY=e.pageY),T.directionLocked=""}function w(t){var n,c;T.directionLocked="h"===e?"h":"v",d?(n=t.touches[0].pageX-T.startX,c=t.touches[0].pageY-T.startY):(n=t.pageX-T.startX,c=t.pageY-T.startY),"v"===T.directionLocked?C(c):M(n)}function x(){"v"===T.directionLocked?_():S()}function M(e){e>0?(T.percentX=e/T.widthL,g.right=!0,g.left=!1):(T.percentX=e/T.widthR,g.left=!0,g.right=!1),j.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"0ms"},m.blkOffset=45-.45*T.percentX*100,m.transparentOffset=60-.4*T.percentX*100,m.duration=0}function C(e){e>0?(T.percentY=e/T.heightB,m.greyOffset=Math.max(25+.25*T.percentY*100,25),m.transparentOffsetYGrey=Math.max(55+.45*T.percentY*100,55)):(T.percentY=e/T.heightT,m.redOffset=Math.max(25-.25*T.percentY*100,25),m.transparentOffsetY=Math.max(55-.45*T.percentY*100,55)),j.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"0ms"},m.duration=0}function S(){if(Math.abs(T.percentX)<.95){var e=0;g.left=!1,g.right=!1,j.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"300ms"},m.transparentOffset=60,m.blkOffset=45,m.duration=300}else s["a"].session.set("__currentquiz__",1),T.percentX>0?(l(1,a),q.commit("setCategory","40k"),y.push({path:"/questions/40k/1"})):(l(2,a),q.commit("setCategory","aos"),y.push({path:"/questions/aos/1"}))}function _(){if(Math.abs(T.percentY)<.75){var e=0;j.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"300ms"},m.transparentOffsetY=55,m.transparentOffsetYGrey=55,m.redOffset=25,m.greyOffset=25,m.duration=300}else T.percentY<0?(Object(b["a"])({questionId:t,choiceId:n[0].id},a),I("bottom")):(Object(b["a"])({questionId:t,choiceId:n[1].id},a),I("top")),s["a"].session.set("__currentquiz__",7)}function I(e){var t=document.querySelector(".".concat(e)),n=document.querySelector(".".concat(e," div"));O["a"].timeline().to(n,{opacity:0,duration:0}).to(t,{opacity:0,duration:.7,ease:"expo.out",onComplete:function(){y.push({path:"/reveal"})}})}return Object(c["x"])((function(){T.widthL=Number(Object(r["c"])(getComputedStyle(f.value).width,0,-2)),T.widthR=Number(Object(r["c"])(getComputedStyle(v.value).width,0,-2)),T.heightT=Number(Object(r["c"])(getComputedStyle(f.value).height,0,-2)),T.heightB=Number(Object(r["c"])(getComputedStyle(v.value).height,0,-2))})),{onMiddleTouchStart:k,onMiddleTouchMove:w,onMiddleTouchEnd:x,iconTransform:j,swipeOne:f,swipeTwo:v,maskTransform:m,beatAnimate:g}}},f1a1:function(e,t,n){"use strict";n("69a0")}}]);
//# sourceMappingURL=chunk-59df49c2.49aa4c78.js.map