(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f586f7f0"],{"0213":function(e,t,n){"use strict";n("cb29");var c=n("7a23"),o=["href","fill","stroke"];function r(e,t,n,r,i,a){return Object(c["z"])(),Object(c["g"])("svg",{class:Object(c["q"])(n.icon)},[Object(c["h"])("use",{href:r.iconName,style:Object(c["r"])(n.duration),fill:n.fill,stroke:n.stroke},null,12,o)],2)}n("a9e3"),n("99af"),n("b0c0");var i={name:"svg-icon",props:{name:[Number,String],prefix:{type:String,default:"war-q3"},duration:{type:Object,default:{animation:"logo3 3s infinite alternate"}},fill:{type:String,default:"black"},stroke:{type:String,default:"rgba(72, 138, 20, 0)"},icon:{type:String,default:"icon"}},setup:function(e){var t="#".concat(e.prefix).concat(e.name);return{iconName:t}}},a=(n("3b3f"),n("d959")),u=n.n(a);const s=u()(i,[["render",r],["__scopeId","data-v-2875fd7a"]]);t["a"]=s},"112e":function(e,t,n){"use strict";n("9d25")},"1caf":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("1da1"),o=(n("96cf"),n("26b3")),r=n("aaef"),i=n("335a");function a(e,t){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){var c,a,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.questionId,a=t.choiceId,u=i["a"].session.get(r["a"]),e.next=4,Object(o["a"])("/user_quizzes/".concat(u,"/user_answers\n    "),{user_answer:{question_id:c,choice_id:a}},n);case 4:s=e.sent,console.log(s);case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}},"1ceb":function(e,t,n){},2113:function(e,t,n){"use strict";n("4adb")},2532:function(e,t,n){"use strict";var c=n("23e7"),o=n("e330"),r=n("5a34"),i=n("1d80"),a=n("577e"),u=n("ab13"),s=o("".indexOf);c({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~s(a(i(this)),a(r(e)),arguments.length>1?arguments[1]:void 0)}})},"263d":function(e,t,n){},"2d08":function(e,t,n){"use strict";function c(e){if(e){var t=e.getBoundingClientRect();return{left:t.left,top:t.top}}}n.d(t,"a",(function(){return c}))},"319e":function(e,t,n){},"3b3f":function(e,t,n){"use strict";n("1ceb")},4303:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,i){return Object(c["z"])(),Object(c["e"])(Object(c["I"])("fourtyk-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"])}var r={class:"q1 fixed-no-scroll"},i={class:"q1-title"},a={class:"q1-section"},u={class:"q1-section-choices"},s=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function d(e,t,n,o,d,l){return Object(c["z"])(),Object(c["g"])("div",r,[Object(c["h"])("div",{class:"q1-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",i,Object(c["K"])(n.questionText),1),Object(c["h"])("section",a,[Object(c["h"])("div",u,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(n.questionChoices,(function(e,t){return Object(c["z"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(c["q"])({"selected-q1":o.selected===t}),style:Object(c["r"])("background-image:url(".concat(e.image,")"))},[Object(c["h"])("div",{onTouchstart:Object(c["S"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchmove:Object(c["S"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["S"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["S"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["S"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,s)],6)})),128))])])])}var l=n("ef6d"),f={name:"fourtyk-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c,1500),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,selected:u}}},b=(n("9dff"),n("d959")),h=n.n(b);const p=h()(f,[["render",d],["__scopeId","data-v-40f53f0e"]]);var v=p,O={class:"q2 fixed-no-scroll"},g={class:"q2-title"},j={class:"q2-section"},m={class:"q2-section-choices"},y=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function q(e,t,n,o,r,i){return Object(c["z"])(),Object(c["g"])("div",O,[Object(c["h"])("div",{class:"q2-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",g,Object(c["K"])(n.questionText),1),Object(c["h"])("section",j,[Object(c["h"])("div",m,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(n.questionChoices,(function(t,n){return Object(c["z"])(),Object(c["g"])("div",{key:t,style:Object(c["r"])({backgroundImage:"url(".concat(t.image,")")}),class:Object(c["q"])({"selected-q":o.selected===n}),onTouchstart:Object(c["S"])((function(e){return o.choiceTouchStartParticle(n,e,t.id)}),["prevent"]),onTouchmove:Object(c["S"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onTouchend:Object(c["S"])((function(e){return o.choiceTouchEnd(t.id)}),["prevent"]),onMouseenter:Object(c["S"])((function(t){return e.choiceTouchStart(n)}),["prevent"]),onMousemove:Object(c["S"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)}},[Object(c["h"])("div",{class:Object(c["q"])(["q2-section-choices-mask",{"selected-q":o.selected===n}])},null,2)],46,y)})),128))])])])}var k=n("1da1"),T=(n("96cf"),{name:"fourtyk-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c,1500),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;function s(e,t,n){return d.apply(this,arguments)}function d(){return d=Object(k["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a(t);case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStartParticle:s,selected:u}}});n("f98b");const w=h()(T,[["render",q]]);var _=w,M={class:"q3 fixed-no-scroll"},S={class:"q3-section"},x={class:"q3-section-title"},C={class:"q3-section-choices"},z=["onClick"];function I(e,t,n,o,r,i){var a=Object(c["H"])("svg-icon");return Object(c["z"])(),Object(c["g"])("div",M,[Object(c["h"])("div",{class:"q3-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("div",S,[Object(c["h"])("h1",x,Object(c["K"])(n.questionText),1),Object(c["h"])("div",C,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(n.questionChoices,(function(e,t){return Object(c["z"])(),Object(c["g"])("div",{key:e,class:"q3-section-container"},[Object(c["h"])("div",{class:Object(c["q"])(["q3-section-choice",{"select-q3":o.selected===t,"unselect-q3":o.selected!==t}]),onClick:Object(c["S"])((function(n){return o.choiceTouchZoom(t,e.id)}),["prevent"])},[2!==t?(Object(c["z"])(),Object(c["e"])(a,{key:0,name:t+1,duration:{}},null,8,["name"])):(Object(c["z"])(),Object(c["e"])(a,{key:1,name:t+1,duration:{},icon:"icon-special"},null,8,["name"]))],10,z)])})),128))])])])}var Q=["src"];function E(e,t,n,o,r,i){var a=Object(c["H"])("fly-box");return Object(c["z"])(),Object(c["e"])(a,{lineColor:n.lineColor,starColor:n.starColor,duration:n.duration},{default:Object(c["Q"])((function(){return[Object(c["h"])("img",{src:n.posterUrl,style:Object(c["r"])(n.style)},null,12,Q)]})),_:1},8,["lineColor","starColor","duration"])}n("a9e3"),n("99af");var B,N=function(e){return Object(c["C"])("data-v-6c21862b"),e=e(),Object(c["A"])(),e},R={class:"fly-box",ref:"flyBoxRef"},L=["width","height","viewBox"],Y=["id","d"],P=["id"],X=["fill"],A=["dur","path"],F=["id"],W=N((function(){return Object(c["h"])("stop",{offset:"0","stop-color":"#fff","stop-opacity":"1"},null,-1)})),D=N((function(){return Object(c["h"])("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)})),H=[W,D],V=["href","stroke"],$=["href","stroke","mask"],K={class:"fly-box-content"};function U(e,t,n,o,r,i){return Object(c["z"])(),Object(c["g"])("div",R,[(Object(c["z"])(),Object(c["g"])("svg",{width:o.width,height:o.height,viewBox:"0 0 ".concat(o.width," ").concat(o.height)},[Object(c["h"])("defs",null,[Object(c["h"])("path",{id:o.pathId,d:o.path,fill:"none"},null,8,Y),Object(c["h"])("mask",{id:o.maskId},[Object(c["h"])("circle",{r:"50",cx:"0",cy:"0",fill:"url(#".concat(o.radialId,")")},[Object(c["h"])("animateMotion",{dur:"".concat(n.duration,"s"),path:o.path,rotate:"auto",repeatCount:"indefinite"},null,8,A)],8,X)],8,P),Object(c["h"])("radialGradient",{id:o.radialId,cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},H,8,F)]),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"1",stroke:n.lineColor},null,8,V),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"3",stroke:n.starColor,mask:"url(#".concat(o.maskId,")")},null,8,$)],8,L)),Object(c["h"])("div",K,[Object(c["G"])(e.$slots,"default",{},void 0,!0)])],512)}var G=new Uint8Array(16);function Z(){if(!B&&(B="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!B))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return B(G)}var J=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ee(e){return"string"===typeof e&&J.test(e)}for(var te=ee,ne=[],ce=0;ce<256;++ce)ne.push((ce+256).toString(16).substr(1));function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(ne[e[t+0]]+ne[e[t+1]]+ne[e[t+2]]+ne[e[t+3]]+"-"+ne[e[t+4]]+ne[e[t+5]]+"-"+ne[e[t+6]]+ne[e[t+7]]+"-"+ne[e[t+8]]+ne[e[t+9]]+"-"+ne[e[t+10]]+ne[e[t+11]]+ne[e[t+12]]+ne[e[t+13]]+ne[e[t+14]]+ne[e[t+15]]).toLowerCase();if(!te(n))throw TypeError("Stringified UUID is invalid");return n}var re=oe;function ie(e,t,n){e=e||{};var c=e.random||(e.rng||Z)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=c[o];return t}return re(c)}var ae=ie,ue={name:"fly-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2}},setup:function(){var e=Object(c["E"])(0),t=Object(c["E"])(0),n=Object(c["E"])(null),o=ae(),r="fly-box-path-".concat(o),i="radial-graident-".concat(o),a="fly-box-mask-".concat(o),u=Object(c["c"])((function(){return"M0 5 L".concat(e.value," 5 L").concat(e.value," ").concat(t.value-5," L5 ").concat(t.value-5," Z")}));function s(){var c=n.value;e.value=c.clientWidth,t.value=c.clientHeight}return Object(c["y"])((function(){s()})),Object(c["w"])((function(){s()})),{width:e,height:t,path:u,flyBoxRef:n,pathId:r,radialId:i,maskId:a}}};n("c07a");const se=h()(ue,[["render",U],["__scopeId","data-v-6c21862b"]]);var de=se,le={name:"video-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2},posterUrl:String,style:{type:Object,default:{transform:"scale(1.112, 1.1)"}}},components:{FlyBox:de}};n("9333");const fe=h()(le,[["render",E],["__scopeId","data-v-db8ca160"]]);var be=fe,he=n("0213"),pe=n("5796"),ve={name:"fourtyk-q3",components:{VideoBox:be,SvgIcon:he["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected,s=!1;function d(e,t){return f.apply(this,arguments)}function f(){return f=Object(k["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!s){e.next=2;break}return e.abrupt("return");case 2:return s=!0,e.next=5,Object(pe["a"])(a,i,t,n,".select-q3",".unselect-q3");case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,choiceTouchZoom:d,selected:u}}};n("e84e");const Oe=h()(ve,[["render",I],["__scopeId","data-v-36e85114"]]);var ge=Oe,je={class:"q4"},me={class:"q4-bg"},ye=Object(c["i"])('<div class="q4-intro" data-v-24b86de3><p data-v-24b86de3> 你仍然不能决定好前进的方向，但这里有一个罗盘也许可以帮助你。 点击它，为你的命运注入启示。 </p><div data-v-24b86de3><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-24b86de3><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-24b86de3><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-24b86de3></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-24b86de3></animate></polyline></svg><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-24b86de3><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-24b86de3><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-24b86de3></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-24b86de3></animate></polyline></svg></div></div>',1);function qe(e,t,n,o,r,i){var a=Object(c["H"])("LuckyWheel");return Object(c["z"])(),Object(c["g"])("div",je,[Object(c["h"])("div",me,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(n.questionChoices,(function(e,t){return Object(c["z"])(),Object(c["g"])("div",{key:e,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover"}),class:Object(c["q"])([{selected:r.selected===t,unselected:r.selected!==t},"q4-bg-choice"])},[Object(c["h"])("div",{class:Object(c["q"])({selected:r.selected===t,unselected:r.selected!==t})},null,2)],6)})),128))]),ye,Object(c["k"])(a,{class:"q4-luckwheel",ref:"myLucky",width:"40rem",height:"40rem",prizes:r.prizes,blocks:r.blocks,defaultConfig:r.defaultConfig,onEnd:i.endCallback},null,8,["prizes","blocks","defaultConfig","onEnd"]),Object(c["h"])("div",{class:"q4-button",onTouchstart:t[0]||(t[0]=Object(c["S"])((function(){return i.startWheel&&i.startWheel.apply(i,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return i.startWheel&&i.startWheel.apply(i,arguments)})},null,32)])}n("caad"),n("2532");var ke=n("1caf"),Te=n("aaef"),we=n("335a"),_e=n("6c02"),Me=n("cffa"),Se={name:"fourtyk-q4",data:function(){return{blocks:[{padding:"0px"},{padding:"0px",imgs:[{src:this.currentQuestion.selector_image,top:"26",width:"80%",rotate:!0}]}],prizes:[{title:"0"},{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"11"}],defaultConfig:{speed:30},choice1:["1","2","3"],choice2:["0","11","10"],choice3:["4","5","6"],choice4:["7","8","9"],selected:null}},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],methods:{startWheel:function(){var e=this;this.$refs.myLucky.play(),setTimeout((function(){var t=Math.floor(11*Math.random());e.$refs.myLucky.stop(t)}),4e3)},endCallback:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){var c,o,r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.$cookie.getCookie(Te["b"]),o=e.title,r=t.currentQuestion.id,t.choice1.includes(o)?(i=t.questionChoices[0].id,t.selected=0):t.choice2.includes(o)?(i=t.questionChoices[1].id,t.selected=1):t.choice3.includes(o)?(i=t.questionChoices[2].id,t.selected=2):(i=t.questionChoices[3].id,t.selected=3),t.$emit("updateParams",5),Object(ke["a"])({questionId:r,choiceId:i},c),n.next=8,t.$nextTick;case 8:a=document.querySelector(".unselected"),console.log(a),Me["a"].to(".selected",{scale:1.05,duration:1.5,ease:"expo.out",onComplete:function(){t.goNextPage()}});case 11:case"end":return n.stop()}}),n)})))()},goNextPage:function(){we["a"].session.set("__currentquiz__",4),this.$router.push({path:"/questions/40k/5"})}},setup:function(){var e=Object(_e["d"])(),t=Object(_e["e"])();Object(_e["c"])((function(){var n=we["a"].session.get("__currentquiz__");console.log(Number(e.params.id),n),Number(e.params.id)>n&&t.push({path:"/questions/40k/".concat(n+1)})}))}};n("2113");const xe=h()(Se,[["render",qe],["__scopeId","data-v-24b86de3"]]);var Ce=xe,ze={class:"q5"};function Ie(e,t,n,o,r,i){var a=Object(c["H"])("new-scene");return Object(c["z"])(),Object(c["g"])("div",ze,[Object(c["k"])(a,{choicesList:n.questionChoices,nowQuestion:n.currentQuestion},null,8,["choicesList","nowQuestion"])])}var Qe=n("7d59"),Ee={name:"aos-q5",components:{NewScene:Qe["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){e.currentQuestion.id,e.questionChoices[0].image,e.questionChoices[0].id;return{}}};n("71b7");const Be=h()(Ee,[["render",Ie],["__scopeId","data-v-864f5e5c"]]);var Ne=Be,Re={class:"q6-title"},Le={class:"q6-section"},Ye={class:"q6-grid"},Pe={class:"q6-card-front-content"},Xe=["onTouchstart","onMouseenter","onMousemove"];function Ae(e,t,n,o,r,i){return Object(c["z"])(),Object(c["g"])("div",{class:"q6 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",Re,Object(c["K"])(n.questionText),1),Object(c["h"])("div",Le,[Object(c["h"])("div",Ye,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(n.questionChoices,(function(e,n){return Object(c["z"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q6-card",{"select-card":o.flip===n,"unselect-card":o.flip!==n}])},[Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-back",{"back-flip":o.flip===n}]),style:Object(c["r"])({background:"url(".concat(e.image,")"),backgroundSize:"cover",borderRadius:"1.3rem"}),onMouseleave:t[0]||(t[0]=function(){return o.backPos&&o.backPos.apply(o,arguments)})},null,38),Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-front",{"front-flip":o.flip===n}])},[Object(c["h"])("div",Pe,[Object(c["h"])("div",{class:"q6-card-front-btn",onTouchstart:Object(c["S"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMouseenter:Object(c["S"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMousemove:Object(c["S"])((function(e){return o.choiceTouchMove(n)}),["prevent"])},null,40,Xe)])],2)],2)})),128))])])],4)}n("d3b7"),n("159b");var Fe=n("2d08"),We={name:"fourtyk-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,o=e.currentQuestion.id,r=Object(c["E"])(null),i=Object(l["a"])(n,o,2500),a=i.choiceTouchMove,u=i.choiceTouchEnd,s=!1;function d(e,t){return f.apply(this,arguments)}function f(){return f=Object(k["a"])(regeneratorRuntime.mark((function e(t,n){var o,i,a,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!s){e.next=2;break}return e.abrupt("return");case 2:return r.value=t,e.next=5,Object(c["p"])();case 5:return e.next=7,Object(c["p"])();case 7:return e.next=9,document.querySelector(".select-card");case 9:return o=e.sent,i=Object(Fe["a"])(o).left,a=Object(Fe["a"])(o).top,e.next=14,document.querySelector(".unselect-card");case 14:d=e.sent,s=!0,d&&Me["a"].timeline().to(".unselect-card",{opacity:0,stagger:{amount:.5}}).fromTo(".select-card",{position:"absolute",left:"".concat(i),top:"".concat(a)},{xPercent:-50,left:"50%",yPercent:-50,top:"50%",position:"absolute",duration:1,scale:1.5}).to(".front-flip",{rotateY:-180}).to(".back-flip",{rotateY:0,duration:.5,onComplete:function(){u(n)}},"<");case 17:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function b(){r.value=null}return{flip:r,flipCard:d,backPos:b,choiceTouchMove:a}},mounted:function(){window.innerHeight>800&&document.querySelector(".q6").classList.add("paddingY"),window.innerWidth,this.setChoiceDimension(.8)},methods:{setChoiceDimension:function(e){var t=document.querySelectorAll(".q6-card");console.log({cards:t});var n=window.innerWidth-40-2,c=window.innerHeight*e-45-10,o=n/2*(25/17)*2<=c;console.log({useW:o}),o?t.forEach((function(e){e.style.width="".concat(n/2,"px"),e.style.height="".concat(n/2*(25/17),"px")})):t.forEach((function(e){e.style.height="".concat(c/2,"px"),e.style.width="".concat(c/2*.68,"px")}))}}};n("112e");const De=h()(We,[["render",Ae],["__scopeId","data-v-12528778"]]);var He=De,Ve={class:"q7-title"},$e={class:"q7-section"},Ke={class:"q7-progress"},Ue={class:"q7-progress-top",ref:"swipeOne"},Ge={class:"q7-progress-eagle"},Ze={class:"q7-progress-instruction"},Je={class:"q7-progress-bottom",ref:"swipeTwo"};function et(e,t,n,o,r,i){var a=Object(c["H"])("svg-icon");return Object(c["z"])(),Object(c["g"])("div",{class:"q7 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",Ve,Object(c["K"])(n.questionText),1),Object(c["h"])("div",$e,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(n.questionChoices,(function(e,t){return Object(c["z"])(),Object(c["g"])("div",{class:"q7-section-option",key:e},[0===t?(Object(c["z"])(),Object(c["g"])("div",{key:0,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"top"},null,4)):(Object(c["z"])(),Object(c["g"])("div",{key:1,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"bottom"},null,4))])})),128))]),Object(c["h"])("div",Ke,[Object(c["h"])("div",Ue,null,512),Object(c["h"])("div",{class:"q7-progress-container",style:Object(c["r"])(o.iconTransform),onTouchstart:t[0]||(t[0]=Object(c["S"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onTouchmove:t[1]||(t[1]=Object(c["S"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onTouchend:t[2]||(t[2]=Object(c["S"])((function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)}),["prevent"])),onMouseenter:t[3]||(t[3]=Object(c["S"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onMousemove:t[4]||(t[4]=Object(c["S"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onMouseleave:t[5]||(t[5]=function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)})},[Object(c["h"])("div",Ge,[Object(c["k"])(a,{name:3,fill:"#fff",duration:{}}),Object(c["h"])("p",Ze,Object(c["K"])(n.currentQuestion.instruction),1)])],36),Object(c["h"])("div",Je,null,512)])],4)}var tt=n("f148"),nt={name:"fourtyk-q7",components:{SvgIcon:he["a"],VideoBox:be},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e){var t={animation:"mainlogo 0.8s infinite alternate"},n=e.currentQuestion.id,o=e.questionChoices,r=Object(_e["d"])(),i=Object(_e["e"])(),a=Object(c["c"])((function(){return"linear-gradient(\n          0,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(O.redOffset,"%,\n          transparent ").concat(O.transparentOffsetY,"%\n        );")})),u=Object(c["c"])((function(){return"linear-gradient(\n           180deg,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(O.greyOffset,"%,\n          transparent ").concat(O.transparentOffsetYGrey,"%\n        );")})),s=Object(c["c"])((function(){return"".concat(O.duration,"ms")})),d=Object(tt["a"])("v",n,o),l=d.swipeOne,f=d.swipeTwo,b=d.onMiddleTouchStart,h=d.onMiddleTouchMove,p=d.onMiddleTouchEnd,v=d.iconTransform,O=d.maskTransform;return Object(_e["c"])((function(){var e=we["a"].session.get("__currentquiz__");console.log(Number(r.params.id),e),Number(r.params.id)>e&&i.push({path:"/questions/40k/".concat(e+1)})})),{animation:t,swipeOne:l,swipeTwo:f,onMiddleTouchStart:b,onMiddleTouchMove:h,onMiddleTouchEnd:p,iconTransform:v,maskTransform:O,maskValue:a,greyMask:u,duration:s}}};n("cdce");const ct=h()(nt,[["render",et],["__scopeId","data-v-b5c4bb08"]]);var ot=ct,rt=n("be84"),it={name:"40k-question",components:{FourtykQ1:v,FourtykQ2:_,FourtykQ3:ge,FourtykQ4:Ce,FourtykQ5:Ne,FourtykQ6:He,FourtykQ7:ot},setup:function(){var e=Object(rt["a"])(),t=e.questionId,n=e.questionBackground,c=e.currentQuestion,o=e.updateParams,r=e.store;return{questionId:t,questionBackground:n,currentQuestion:c,updateParams:o,store:r}}};const at=h()(it,[["render",o]]);t["default"]=at},"44e7":function(e,t,n){var c=n("861d"),o=n("c6b6"),r=n("b622"),i=r("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},"4adb":function(e,t,n){},"575a":function(e,t,n){},5796:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("1da1"),o=(n("96cf"),n("7a23")),r=n("cffa"),i=n("2d08");function a(e,t,n,c,o,r){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,c,r,a,u){var d,l,f,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t(c),e.next=3,Object(o["p"])();case 3:return e.next=5,document.querySelector(a);case 5:return d=e.sent,l=Object(i["a"])(d).left,f=Object(i["a"])(d).top,e.next=10,document.querySelector(u);case 10:b=e.sent,b&&s(a,u,l,f,n,r);case 12:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function s(e,t,n,c,o,i){r["a"].timeline().to(t,{opacity:0,stagger:{amount:.3}}).fromTo(e,{position:"absolute",left:"".concat(n),top:"".concat(c)},{position:"absolute",left:"50%",top:"50%",yPercent:-50,xPercent:-50,duration:.6,scale:1.5,ease:"sine.out",onComplete:function(){o(i)}})}},"5a34":function(e,t,n){var c=n("da84"),o=n("44e7"),r=c.TypeError;e.exports=function(e){if(o(e))throw r("The method doesn't accept regular expressions");return e}},"622f":function(e,t,n){},"71b7":function(e,t,n){"use strict";n("f9e7")},"7d59":function(e,t,n){"use strict";var c=n("7a23"),o=function(e){return Object(c["C"])("data-v-b2c8f006"),e=e(),Object(c["A"])(),e},r={class:"glide scene"},i={class:"scene-title"},a=Object(c["j"])(" 滑动查看四个幻境 "),u=o((function(){return Object(c["h"])("br",null,null,-1)})),s=Object(c["j"])(" 选择你喜欢的据点 "),d=[a,u,s],l={class:"glide__track","data-glide-el":"track"},f={class:"glide__slides"},b=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],h={class:"glide__arrows","data-glide-el":"controls"},p=Object(c["i"])('<button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;" data-v-b2c8f006><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-b2c8f006><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(165, 147, 93)" stroke-linecap="round" data-v-b2c8f006><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(165, 147, 93)" dur="2s" begin="0; l42.end" data-v-b2c8f006></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(165, 147, 93)" to="rgb(255, 255, 255)" dur="2s" begin="l41.end" data-v-b2c8f006></animate></polyline></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;" data-v-b2c8f006><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-b2c8f006><polyline points="10 200, 110 100, 10 0,0 10,85 100, 0 190 " fill="#64798B" stroke-linecap="round" data-v-b2c8f006><animate id="r41" attributeName="fill" attributeType="XML" from="#fff" to="#64798B" dur="2s" begin="0; r42.end" data-v-b2c8f006></animate><animate id="r42" attributeName="fill" attributeType="XML" from="#64798B" to="#fff" dur="2s" begin="r41.end" data-v-b2c8f006></animate></polyline></svg></button>',2),v=[p],O={class:"glide__bullets","data-glide-el":"controls[nav]"},g=o((function(){return Object(c["h"])("button",{class:"glide__bullet","data-glide-dir":"=0"},null,-1)})),j=o((function(){return Object(c["h"])("button",{class:"glide__bullet","data-glide-dir":"=1"},null,-1)})),m=o((function(){return Object(c["h"])("button",{class:"glide__bullet","data-glide-dir":"=2"},null,-1)})),y=o((function(){return Object(c["h"])("button",{class:"glide__bullet","data-glide-dir":"=3"},null,-1)})),q=[g,j,m,y];function k(e,t,n,o,a,u){return Object(c["z"])(),Object(c["g"])("div",r,[Object(c["R"])(Object(c["h"])("p",i,d,512),[[c["N"],null===o.selected]]),Object(c["h"])("div",l,[Object(c["h"])("ul",f,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["F"])(n.choicesList,(function(e,t){return Object(c["z"])(),Object(c["g"])("li",{class:"glide__slide",key:e},[Object(c["h"])("div",{class:Object(c["q"])(["scene-choice",{"selected-q":o.selected===t}]),style:Object(c["r"])("background-image: url(".concat(e.image,")"))},[Object(c["R"])(Object(c["h"])("div",{class:"scene-pick",onTouchstart:Object(c["S"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(c["S"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["S"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["S"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["S"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}}," 确认 ",40,b),[[c["N"],null===o.selected]])],6)])})),128))]),Object(c["R"])(Object(c["h"])("div",h,v,512),[[c["N"],null===o.selected]]),Object(c["R"])(Object(c["h"])("div",O,q,512),[[c["N"],null===o.selected]])])])}var T=n("ef6d"),w=n("0346"),_=n("5c40"),M={name:"new-scene",props:{choicesList:Array,nowQuestion:Object},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.nowQuestion.id,o=Object(T["a"])(n,c,1500),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;return Object(_["C"])((function(){new w["a"](".glide",{type:"carousel",gap:0}).mount()})),{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,selected:u}}},S=(n("a0fb"),n("d959")),x=n.n(S);const C=x()(M,[["render",k],["__scopeId","data-v-b2c8f006"]]);t["a"]=C},"7db0":function(e,t,n){"use strict";var c=n("23e7"),o=n("b727").find,r=n("44d2"),i="find",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),c({target:"Array",proto:!0,forced:a},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(i)},"81d5":function(e,t,n){"use strict";var c=n("7b0b"),o=n("23cb"),r=n("07fa");e.exports=function(e){var t=c(this),n=r(t),i=arguments.length,a=o(i>1?arguments[1]:void 0,n),u=i>2?arguments[2]:void 0,s=void 0===u?n:o(u,n);while(s>a)t[a++]=e;return t}},9261:function(e,t,n){},9333:function(e,t,n){"use strict";n("622f")},"9d25":function(e,t,n){},"9dff":function(e,t,n){"use strict";n("319e")},a0fb:function(e,t,n){"use strict";n("c210")},ab13:function(e,t,n){var c=n("b622"),o=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(c){}}return!1}},b0c0:function(e,t,n){var c=n("83ab"),o=n("5e77").EXISTS,r=n("e330"),i=n("9bf2").f,a=Function.prototype,u=r(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=r(s.exec),l="name";c&&!o&&i(a,l,{configurable:!0,get:function(){try{return d(s,u(this))[1]}catch(e){return""}}})},be84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("caad"),n("2532"),n("a9e3"),n("7db0"),n("d3b7");var c=n("7a23"),o=n("6c02"),r=n("5502"),i=n("335a");function a(){var e=Object(o["d"])(),t=e.path.includes("40k"),n=Object(r["f"])(),a=Object(c["E"])(e.params.id),u=(a.value,Object(c["c"])((function(){return t?i["a"].session.get("__40kquestion".concat(a.value,"__")):i["a"].session.get("__aosquestion".concat(a.value,"__"))})));console.log(u.value);var s=Object(c["c"])((function(){return u.value&&u.value.page_template_number===Number(a.value)?u.value:(e=t?n.getters.currentFourtyKQuestion.find((function(e){return e.page_template_number===Number(a.value)})):n.getters.currentAosQuestion.find((function(e){return e.page_template_number===Number(a.value)})),e);var e})),d=Object(c["c"])((function(){var e="url(".concat(s.value&&s.value.bg_image,")");return{backgroundImage:e}}));function l(e){a.value=e}return Object(c["u"])((function(){l(e.params.id)})),{questionId:a,questionBackground:d,currentQuestion:s,updateParams:l,store:n}}},c07a:function(e,t,n){"use strict";n("9261")},c210:function(e,t,n){},caad:function(e,t,n){"use strict";var c=n("23e7"),o=n("4d64").includes,r=n("44d2");c({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},cb29:function(e,t,n){var c=n("23e7"),o=n("81d5"),r=n("44d2");c({target:"Array",proto:!0},{fill:o}),r("fill")},cdce:function(e,t,n){"use strict";n("575a")},e84e:function(e,t,n){"use strict";n("263d")},ef6d:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("a9e3"),n("caad"),n("2532"),n("99af");var c=n("7a23"),o=n("6c02"),r=n("bbd5"),i=n("1caf"),a=n("032f"),u=n("aaef"),s=n("335a");function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;Object(o["c"])((function(){var e=s["a"].session.get("__currentquiz__");console.log(Number(b.params.id),e),Number(b.params.id)>e&&(h?f.push({path:"/questions/40k/".concat(e+1)}):f.push({path:"/questions/aos/".concat(e+1)}))}));var d=Object(a["b"])(),l=d.getCookie(u["b"]),f=Object(o["e"])(),b=Object(o["d"])(),h=b.path.includes("40k"),p=Object(c["E"])(null);function v(e){p.value=e}function O(e){p.value=e}function g(e){Object(r["a"])(j.bind(e),n,e)()}function j(n){Object(i["a"])({questionId:t,choiceId:n},l);var c=Number(b.params.id);e("updateParams",c+1),m(c,h?"40k":"aos")}function m(e,t){s["a"].session.set("__currentquiz__",e),7!==e?f.push({path:"/questions/".concat(t,"/").concat(e+1)}):f.push({path:"/reveal"})}return{choiceTouchMove:O,choiceTouchEnd:g,choiceTouchStart:v,selected:p}}},f148:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));n("a9e3");var c=n("7a23"),o=n("6c02"),r=n("bbd5"),i=n("1da1"),a=(n("96cf"),n("26b3")),u=n("aaef"),s=n("335a"),d=n("2808");function l(e,t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])("/user_quizzes",{user_quiz:{category_id:t}},n);case 2:c=e.sent,s["a"].session.set(u["a"],c.id),console.log({quizCategory:c}),c&&d["a"].track("Started Quiz",{category:1===t?"40k":"AOS",user_quiz_id:c.id});case 6:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var b=n("1caf"),h=n("5502"),p=n("032f"),v=n("cffa");function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"h",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Object(p["b"])(),a=i.getCookie(u["b"]),d=Object(r["b"])(),f=Object(c["E"])(null),O=Object(c["E"])(null),g=Object(c["E"])(null),j=Object(c["D"])({left:!1,right:!1}),m=Object(c["D"])({transparentOffset:60,transparentOffsetY:55,transparentOffsetYGrey:55,redOffset:25,greyOffset:25,blkOffset:45,duration:0}),y=Object(o["e"])(),q=Object(h["f"])(),k={};function T(e){d?(k.startX=e.touches[0].pageX,k.startY=e.touches[0].pageY):(k.startX=e.pageX,k.startY=e.pageY),k.directionLocked=""}function w(t){var n,c;k.directionLocked="h"===e?"h":"v",d?(n=t.touches[0].pageX-k.startX,c=t.touches[0].pageY-k.startY):(n=t.pageX-k.startX,c=t.pageY-k.startY),"v"===k.directionLocked?S(c):M(n)}function _(){"v"===k.directionLocked?C():x()}function M(e){e>0?(k.percentX=e/k.widthL,j.right=!0,j.left=!1):(k.percentX=e/k.widthR,j.left=!0,j.right=!1),g.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"0ms"},m.blkOffset=45-.45*k.percentX*100,m.transparentOffset=60-.4*k.percentX*100,m.duration=0}function S(e){e>0?(k.percentY=e/k.heightB,m.greyOffset=Math.max(25+.25*k.percentY*100,25),m.transparentOffsetYGrey=Math.max(55+.45*k.percentY*100,55)):(k.percentY=e/k.heightT,m.redOffset=Math.max(25-.25*k.percentY*100,25),m.transparentOffsetY=Math.max(55-.45*k.percentY*100,55)),g.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"0ms"},m.duration=0}function x(){if(Math.abs(k.percentX)<.95){var e=0;j.left=!1,j.right=!1,g.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"300ms"},m.transparentOffset=60,m.blkOffset=45,m.duration=300}else s["a"].session.set("__currentquiz__",1),k.percentX>0&&(l(1,a),q.commit("setCategory","40k"),y.push({path:"/questions/40k/1"})),k.percentX<0&&(console.log("???"),l(2,a),q.commit("setCategory","aos"),y.push({path:"/questions/aos/1"}))}function C(){if(Math.abs(k.percentY)<.75){var e=0;g.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"300ms"},m.transparentOffsetY=55,m.transparentOffsetYGrey=55,m.redOffset=25,m.greyOffset=25,m.duration=300}else k.percentY<0?(Object(b["a"])({questionId:t,choiceId:n[0].id},a),z("bottom")):(Object(b["a"])({questionId:t,choiceId:n[1].id},a),z("top")),s["a"].session.set("__currentquiz__",7)}function z(e){var t=document.querySelector(".".concat(e)),n=document.querySelector(".".concat(e," div"));v["a"].timeline().to(".q7-progress-eagle",{opacity:0,duration:0}).to(n,{opacity:0,duration:0}).to(t,{opacity:0,duration:.8,ease:"expo.out",onComplete:function(){y.push({path:"/reveal"})}})}return Object(c["w"])((function(){k.widthL=Number(Object(r["d"])(getComputedStyle(f.value).width,0,-2)),k.widthR=Number(Object(r["d"])(getComputedStyle(O.value).width,0,-2)),k.heightT=Number(Object(r["d"])(getComputedStyle(f.value).height,0,-2)),k.heightB=Number(Object(r["d"])(getComputedStyle(O.value).height,0,-2))})),{onMiddleTouchStart:T,onMiddleTouchMove:w,onMiddleTouchEnd:_,iconTransform:g,swipeOne:f,swipeTwo:O,maskTransform:m,beatAnimate:j}}},f93a:function(e,t,n){},f98b:function(e,t,n){"use strict";n("f93a")},f9e7:function(e,t,n){}}]);
//# sourceMappingURL=chunk-f586f7f0.8a3dd0d7.js.map