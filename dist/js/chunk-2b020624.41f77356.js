(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b020624"],{"0213":function(e,t,n){"use strict";n("cb29");var c=n("7a23"),o=["href","fill","stroke"];function r(e,t,n,r,i,a){return Object(c["A"])(),Object(c["g"])("svg",{class:Object(c["q"])(n.icon)},[Object(c["h"])("use",{href:r.iconName,style:Object(c["r"])(n.duration),fill:n.fill,stroke:n.stroke},null,12,o)],2)}n("a9e3"),n("99af"),n("b0c0");var i={name:"svg-icon",props:{name:[Number,String],prefix:{type:String,default:"war-q3"},duration:{type:Object,default:{animation:"logo3 3s infinite alternate"}},fill:{type:String,default:"black"},stroke:{type:String,default:"rgba(72, 138, 20, 0)"},icon:{type:String,default:"icon"}},setup:function(e){var t="#".concat(e.prefix).concat(e.name);return{iconName:t}}},a=(n("3b3f"),n("d959")),u=n.n(a);const s=u()(i,[["render",r],["__scopeId","data-v-2875fd7a"]]);t["a"]=s},1913:function(e,t,n){"use strict";n("8034")},"1ceb":function(e,t,n){},"1e9a":function(e,t,n){"use strict";n("e29e")},2175:function(e,t,n){e.exports=n.p+"media/laser.1110d61c.wav"},"39b1":function(e,t,n){},"3b3f":function(e,t,n){"use strict";n("1ceb")},4303:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,i){return Object(c["A"])(),Object(c["e"])(Object(c["J"])("fourtyk-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"])}var r={class:"q1 fixed-no-scroll"},i={class:"q1-title"},a={class:"q1-section"},u={class:"q1-section-choices"},s=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function d(e,t,n,o,d,l){return Object(c["A"])(),Object(c["g"])("div",r,[Object(c["h"])("div",{class:"q1-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",i,Object(c["L"])(n.questionText),1),Object(c["h"])("section",a,[Object(c["h"])("div",u,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(c["q"])({"selected-q1":o.selected===t}),style:Object(c["r"])("background-image:url(".concat(e.image,")"))},[Object(c["h"])("div",{onTouchstart:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,s)],6)})),128))])])])}var l=n("ef6d"),f={name:"fourtyk-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c,1500),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,selected:u}}},b=(n("7326"),n("d959")),h=n.n(b);const p=h()(f,[["render",d],["__scopeId","data-v-070d92ca"]]);var O=p,j=n("2175"),v=n.n(j),g={class:"q2 fixed-no-scroll"},m={class:"q2-title"},q={class:"q2-section"},y={class:"q2-section-choices",ref:"q"},T=["onTouchstart","onTouchmove","onMouseenter","onMousemove","onMousedown"],k={ref:"audio"},M=Object(c["h"])("source",{src:v.a,type:"audio/wav"},null,-1),x=Object(c["j"])(" Your browser does not support the audio element. "),w=[M,x];function C(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",g,[Object(c["h"])("div",{class:"q2-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",m,Object(c["L"])(n.questionText),1),Object(c["h"])("section",q,[Object(c["h"])("div",y,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(t,n){return Object(c["A"])(),Object(c["g"])("div",{key:t,style:Object(c["r"])({backgroundImage:"url(".concat(t.image,")")}),class:Object(c["q"])({"selected-q":o.selected===n}),onTouchstart:Object(c["T"])((function(e){return o.choiceTouchStartParticle(n,e,t.id)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onMouseenter:Object(c["T"])((function(t){return e.choiceTouchStart(n)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)}},[Object(c["h"])("div",{class:Object(c["q"])(["q2-section-choices-mask",{"selected-q":o.selected===n}])},null,2)],46,T)})),128))],512)]),Object(c["h"])("audio",k,w,512)])}var S=n("1da1"),_=(n("96cf"),n("2431")),A=n("cffa"),I={name:"fourtyk-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,o=e.currentQuestion.id,r=Object(c["F"])(null),i=Object(c["F"])(null),a=Object(l["a"])(n,o,0),u=a.choiceTouchMove,s=a.choiceTouchEnd,d=a.choiceTouchStart,f=a.selected;function b(e,t,n){return h.apply(this,arguments)}function h(){return h=Object(S["a"])(regeneratorRuntime.mark((function e(t,n,o){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(_["a"])(n.target),i.value.play(),d(t),e.next=5,Object(c["p"])();case 5:A["a"].timeline().to(".q2-section-choices-mask",{display:"none",duration:.5}).to(".selected-q",{translateX:"120%",duration:1.5,onComplete:function(){s(o)}});case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}return{q:r,audio:i,choiceTouchMove:u,choiceTouchEnd:s,choiceTouchStartParticle:b,selected:f}}};n("1e9a");const Q=h()(I,[["render",C]]);var B=Q,Y={class:"q3 fixed-no-scroll"},E={class:"q3-section"},L={class:"q3-section-title"},P={class:"q3-section-choices"},R=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function X(e,t,n,o,r,i){var a=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",Y,[Object(c["h"])("div",{class:"q3-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("div",E,[Object(c["h"])("h1",L,Object(c["L"])(n.questionText),1),Object(c["h"])("div",P,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q3-section-choice",{"select-q3":o.selected===t}]),onTouchstart:Object(c["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},[2!==t?(Object(c["A"])(),Object(c["e"])(a,{key:0,name:t+1,duration:{}},null,8,["name"])):(Object(c["A"])(),Object(c["e"])(a,{key:1,name:t+1,duration:{},icon:"icon-special"},null,8,["name"]))],42,R)})),128))])])])}var F=["src"];function z(e,t,n,o,r,i){var a=Object(c["I"])("fly-box");return Object(c["A"])(),Object(c["e"])(a,{lineColor:n.lineColor,starColor:n.starColor,duration:n.duration},{default:Object(c["R"])((function(){return[Object(c["h"])("img",{src:n.posterUrl,style:Object(c["r"])(n.style)},null,12,F)]})),_:1},8,["lineColor","starColor","duration"])}n("a9e3"),n("99af");var N,G=function(e){return Object(c["D"])("data-v-6c21862b"),e=e(),Object(c["B"])(),e},D={class:"fly-box",ref:"flyBoxRef"},W=["width","height","viewBox"],V=["id","d"],$=["id"],U=["fill"],H=["dur","path"],J=["id"],Z=G((function(){return Object(c["h"])("stop",{offset:"0","stop-color":"#fff","stop-opacity":"1"},null,-1)})),K=G((function(){return Object(c["h"])("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)})),ee=[Z,K],te=["href","stroke"],ne=["href","stroke","mask"],ce={class:"fly-box-content"};function oe(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",D,[(Object(c["A"])(),Object(c["g"])("svg",{width:o.width,height:o.height,viewBox:"0 0 ".concat(o.width," ").concat(o.height)},[Object(c["h"])("defs",null,[Object(c["h"])("path",{id:o.pathId,d:o.path,fill:"none"},null,8,V),Object(c["h"])("mask",{id:o.maskId},[Object(c["h"])("circle",{r:"50",cx:"0",cy:"0",fill:"url(#".concat(o.radialId,")")},[Object(c["h"])("animateMotion",{dur:"".concat(n.duration,"s"),path:o.path,rotate:"auto",repeatCount:"indefinite"},null,8,H)],8,U)],8,$),Object(c["h"])("radialGradient",{id:o.radialId,cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},ee,8,J)]),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"1",stroke:n.lineColor},null,8,te),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"3",stroke:n.starColor,mask:"url(#".concat(o.maskId,")")},null,8,ne)],8,W)),Object(c["h"])("div",ce,[Object(c["H"])(e.$slots,"default",{},void 0,!0)])],512)}var re=new Uint8Array(16);function ie(){if(!N&&(N="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!N))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return N(re)}var ae=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ue(e){return"string"===typeof e&&ae.test(e)}for(var se=ue,de=[],le=0;le<256;++le)de.push((le+256).toString(16).substr(1));function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(de[e[t+0]]+de[e[t+1]]+de[e[t+2]]+de[e[t+3]]+"-"+de[e[t+4]]+de[e[t+5]]+"-"+de[e[t+6]]+de[e[t+7]]+"-"+de[e[t+8]]+de[e[t+9]]+"-"+de[e[t+10]]+de[e[t+11]]+de[e[t+12]]+de[e[t+13]]+de[e[t+14]]+de[e[t+15]]).toLowerCase();if(!se(n))throw TypeError("Stringified UUID is invalid");return n}var be=fe;function he(e,t,n){e=e||{};var c=e.random||(e.rng||ie)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=c[o];return t}return be(c)}var pe=he,Oe={name:"fly-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2}},setup:function(){var e=Object(c["F"])(0),t=Object(c["F"])(0),n=Object(c["F"])(null),o=pe(),r="fly-box-path-".concat(o),i="radial-graident-".concat(o),a="fly-box-mask-".concat(o),u=Object(c["c"])((function(){return"M0 5 L".concat(e.value," 5 L").concat(e.value," ").concat(t.value-5," L5 ").concat(t.value-5," Z")}));function s(){var c=n.value;e.value=c.clientWidth,t.value=c.clientHeight}return Object(c["z"])((function(){s()})),Object(c["x"])((function(){s()})),{width:e,height:t,path:u,flyBoxRef:n,pathId:r,radialId:i,maskId:a}}};n("c07a");const je=h()(Oe,[["render",oe],["__scopeId","data-v-6c21862b"]]);var ve=je,ge={name:"video-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2},posterUrl:String,style:{type:Object,default:{transform:"scale(1.112, 1.1)"}}},components:{FlyBox:ve}};n("9333");const me=h()(ge,[["render",z],["__scopeId","data-v-db8ca160"]]);var qe=me,ye=n("0213"),Te={name:"fourtyk-q3",components:{VideoBox:qe,SvgIcon:ye["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,selected:u}}};n("1913");const ke=h()(Te,[["render",X],["__scopeId","data-v-1c5c8869"]]);var Me=ke,xe={class:"q4"},we={class:"q4-bg"},Ce=Object(c["i"])('<div class="q4-intro" data-v-3a9c243d><p data-v-3a9c243d>Press</p><div data-v-3a9c243d><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-3a9c243d><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-3a9c243d><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-3a9c243d></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-3a9c243d></animate></polyline></svg><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-3a9c243d><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-3a9c243d><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-3a9c243d></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-3a9c243d></animate></polyline></svg></div></div>',1);function Se(e,t,n,o,r,i){var a=Object(c["I"])("LuckyWheel");return Object(c["A"])(),Object(c["g"])("div",xe,[Object(c["h"])("div",we,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover"}),class:Object(c["q"])([{selected:r.selected===t,unselected:r.selected!==t},"q4-bg-choice"])},[Object(c["h"])("div",{class:Object(c["q"])({selected:r.selected===t,unselected:r.selected!==t})},null,2)],6)})),128))]),Ce,Object(c["k"])(a,{class:"q4-luckwheel",ref:"myLucky",width:"40rem",height:"40rem",prizes:r.prizes,blocks:r.blocks,defaultConfig:r.defaultConfig,onEnd:i.endCallback},null,8,["prizes","blocks","defaultConfig","onEnd"]),Object(c["h"])("div",{class:"q4-button",onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return i.startWheel&&i.startWheel.apply(i,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return i.startWheel&&i.startWheel.apply(i,arguments)})},null,32)])}n("caad"),n("2532");var _e=n("1caf"),Ae=n("aaef"),Ie=n("335a"),Qe=n("6c02"),Be={name:"fourtyk-q4",data:function(){return{blocks:[{padding:"0px"},{padding:"0px",imgs:[{src:this.currentQuestion.selector_image,top:"26",width:"80%",rotate:!0}]}],prizes:[{title:"0"},{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"11"}],defaultConfig:{speed:30},choice1:["1","2","3"],choice2:["0","11","10"],choice3:["4","5","6"],choice4:["7","8","9"],selected:null}},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],methods:{startWheel:function(){var e=this;this.$refs.myLucky.play(),setTimeout((function(){var t=Math.floor(11*Math.random());e.$refs.myLucky.stop(t)}),4e3)},endCallback:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){var c,o,r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.$cookie.getCookie(Ae["b"]),o=e.title,r=t.currentQuestion.id,t.choice1.includes(o)?(i=t.questionChoices[0].id,t.selected=0):t.choice2.includes(o)?(i=t.questionChoices[1].id,t.selected=1):t.choice3.includes(o)?(i=t.questionChoices[2].id,t.selected=2):(i=t.questionChoices[3].id,t.selected=3),t.$emit("updateParams",5),Object(_e["a"])({questionId:r,choiceId:i},c),n.next=8,t.$nextTick;case 8:a=document.querySelector(".unselected"),console.log(a),A["a"].to(".selected",{scale:1.05,duration:1.5,ease:"expo.out",onComplete:function(){t.goNextPage()}});case 11:case"end":return n.stop()}}),n)})))()},goNextPage:function(){Ie["a"].session.set("__currentquiz__",4),this.$router.push({path:"/questions/40k/5"})}},setup:function(){var e=Object(Qe["d"])(),t=Object(Qe["e"])();Object(Qe["c"])((function(){var n=Ie["a"].session.get("__currentquiz__");console.log(Number(e.params.id),n),Number(e.params.id)>n&&t.push({path:"/questions/40k/".concat(n+1)})}))}};n("9b2f");const Ye=h()(Be,[["render",Se],["__scopeId","data-v-3a9c243d"]]);var Ee=Ye,Le=function(e){return Object(c["D"])("data-v-90c83b7c"),e=e(),Object(c["B"])(),e},Pe={class:"q5"},Re={class:"q5-title"},Xe=Le((function(){return Object(c["h"])("div",{class:"q5-rotate"},null,-1)})),Fe={class:"q5-select"},ze=["onTouchstart","onMousedown"];function Ne(e,t,n,o,r,i){var a=Object(c["I"])("scene");return Object(c["A"])(),Object(c["g"])("div",Pe,[Object(c["h"])("div",Re,Object(c["L"])(n.questionText),1),Object(c["k"])(a,{scene:o.scene},null,8,["scene"]),Xe,Object(c["h"])("div",{class:"q5-confirm",onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return o.next&&o.next.apply(o,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return o.next&&o.next.apply(o,arguments)})}," confirm ",32),Object(c["h"])("ul",Fe,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("li",{key:e,class:Object(c["q"])({"select-q":o.selected===t}),onTouchstart:Object(c["T"])((function(n){return o.changeScene(e,t)}),["prevent"]),onMousedown:function(n){return o.changeScene(e,t)}},Object(c["L"])(t+1),43,ze)})),128))])])}var Ge=n("bece"),De=n("539c"),We={name:"fourtyk-q5",components:{Scene:Ge["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){var t=e.currentQuestion.id,n=e.questionChoices[0].image,c=e.questionChoices[0].id,o=Object(De["a"])(t,n,c),r=o.changeScene,i=o.next,a=o.scene,u=o.selected;return{changeScene:r,next:i,scene:a,selected:u}}};n("6f10");const Ve=h()(We,[["render",Ne],["__scopeId","data-v-90c83b7c"]]);var $e=Ve,Ue={class:"q6-title"},He={class:"q6-section"},Je={class:"q6-grid"},Ze={class:"q6-card-front-content"},Ke=["onTouchstart","onMouseenter","onMousemove"];function et(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",{class:"q6 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",Ue,Object(c["L"])(n.questionText),1),Object(c["h"])("div",He,[Object(c["h"])("div",Je,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q6-card",{"select-card":o.flip===n,"unselect-card":o.flip!==n}])},[Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-back",{"back-flip":o.flip===n}]),style:Object(c["r"])({background:"url(".concat(e.image,")"),backgroundSize:"cover",borderRadius:"1.3rem"}),onMouseleave:t[0]||(t[0]=function(){return o.backPos&&o.backPos.apply(o,arguments)})},null,38),Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-front",{"front-flip":o.flip===n}])},[Object(c["h"])("div",Ze,[Object(c["h"])("div",{class:"q6-card-front-btn",onTouchstart:Object(c["T"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"])},null,40,Ke)])],2)],2)})),128))])])],4)}n("d3b7"),n("159b");var tt=n("2d08"),nt={name:"fourtyk-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,o=e.currentQuestion.id,r=Object(c["F"])(null),i=Object(l["a"])(n,o,2500),a=i.choiceTouchMove,u=i.choiceTouchEnd;function s(e,t){return d.apply(this,arguments)}function d(){return d=Object(S["a"])(regeneratorRuntime.mark((function e(t,n){var o,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.value=t,e.next=3,Object(c["p"])();case 3:return e.next=5,Object(c["p"])();case 5:return e.next=7,document.querySelector(".select-card");case 7:return o=e.sent,i=Object(tt["a"])(o).left,a=Object(tt["a"])(o).top,e.next=12,document.querySelector(".unselect-card");case 12:s=e.sent,s&&A["a"].timeline().to(".unselect-card",{opacity:0,stagger:{amount:.5}}).fromTo(".select-card",{position:"absolute",left:"".concat(i),top:"".concat(a)},{xPercent:-50,left:"50%",yPercent:-50,top:"50%",position:"absolute",duration:1,scale:1.5}).to(".front-flip",{rotateY:-180}).to(".back-flip",{rotateY:0,duration:.5,onComplete:function(){u(n)}},"<");case 14:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(){r.value=null}return{flip:r,flipCard:s,backPos:f,choiceTouchMove:a}},mounted:function(){window.innerHeight>800&&document.querySelector(".q6").classList.add("paddingY"),window.innerWidth,this.setChoiceDimension(.8)},methods:{setChoiceDimension:function(e){var t=document.querySelectorAll(".q6-card");console.log({cards:t});var n=window.innerWidth-40-2,c=window.innerHeight*e-45-10,o=n/2*(25/17)*2<=c;console.log({useW:o}),o?t.forEach((function(e){e.style.width="".concat(n/2,"px"),e.style.height="".concat(n/2*(25/17),"px")})):t.forEach((function(e){e.style.height="".concat(c/2,"px"),e.style.width="".concat(c/2*.68,"px")}))}}};n("96a3");const ct=h()(nt,[["render",et],["__scopeId","data-v-867ed216"]]);var ot=ct,rt=n("95c0"),it=n.n(rt),at=function(e){return Object(c["D"])("data-v-64e60f91"),e=e(),Object(c["B"])(),e},ut={class:"q7-title"},st={class:"q7-section"},dt={class:"q7-progress"},lt={class:"q7-progress-top",ref:"swipeOne"},ft={class:"q7-progress-eagle"},bt={class:"q7-progress-instruction"},ht={class:"q7-progress-bottom",ref:"swipeTwo"},pt={ref:"audio"},Ot=at((function(){return Object(c["h"])("source",{src:it.a,type:"audio/wav"},null,-1)})),jt=Object(c["j"])(" Your browser does not support the audio element. "),vt=[Ot,jt];function gt(e,t,n,o,r,i){var a=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",{class:"q7 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",ut,Object(c["L"])(n.questionText),1),Object(c["h"])("div",st,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{class:"q7-section-option",key:e},[0===t?(Object(c["A"])(),Object(c["g"])("div",{key:0,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"top"},null,4)):(Object(c["A"])(),Object(c["g"])("div",{key:1,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"bottom"},null,4))])})),128))]),Object(c["h"])("div",dt,[Object(c["h"])("div",lt,null,512),Object(c["h"])("div",{class:"q7-progress-container",style:Object(c["r"])(o.iconTransform),onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onTouchmove:t[1]||(t[1]=Object(c["T"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onTouchend:t[2]||(t[2]=Object(c["T"])((function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)}),["prevent"])),onMouseenter:t[3]||(t[3]=Object(c["T"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onMousemove:t[4]||(t[4]=Object(c["T"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onMouseleave:t[5]||(t[5]=function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)})},[Object(c["h"])("div",ft,[Object(c["k"])(a,{name:3,fill:"#fff",duration:{}}),Object(c["h"])("p",bt,Object(c["L"])(n.currentQuestion.instruction),1)])],36),Object(c["h"])("div",ht,null,512)]),Object(c["h"])("audio",pt,vt,512)],4)}var mt=n("f148"),qt={name:"fourtyk-q7",components:{SvgIcon:ye["a"],VideoBox:qe},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e){var t={animation:"mainlogo 0.8s infinite alternate"},n=e.currentQuestion.id,o=e.questionChoices,r=Object(c["c"])((function(){return"linear-gradient(\n          0,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(O.redOffset,"%,\n          transparent ").concat(O.transparentOffsetY,"%\n        );")})),i=Object(c["c"])((function(){return"linear-gradient(\n           180deg,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(O.greyOffset,"%,\n          transparent ").concat(O.transparentOffsetYGrey,"%\n        );")})),a=Object(c["c"])((function(){return"".concat(O.duration,"ms")})),u=Object(mt["a"])("v",n,o),s=u.swipeOne,d=u.swipeTwo,l=u.audio,f=u.onMiddleTouchStart,b=u.onMiddleTouchMove,h=u.onMiddleTouchEnd,p=u.iconTransform,O=u.maskTransform;return Object(c["x"])((function(){})),Object(c["y"])((function(){var e=document.querySelector("canvas");e.remove()})),{animation:t,swipeOne:s,swipeTwo:d,onMiddleTouchStart:f,onMiddleTouchMove:b,onMiddleTouchEnd:h,iconTransform:p,maskTransform:O,maskValue:r,greyMask:i,duration:a,audio:l}}};n("929d");const yt=h()(qt,[["render",gt],["__scopeId","data-v-64e60f91"]]);var Tt=yt,kt=n("be84"),Mt={name:"40k-question",components:{FourtykQ1:O,FourtykQ2:B,FourtykQ3:Me,FourtykQ4:Ee,FourtykQ5:$e,FourtykQ6:ot,FourtykQ7:Tt},setup:function(){var e=Object(kt["a"])(),t=e.questionId,n=e.questionBackground,c=e.currentQuestion,o=e.updateParams,r=e.store;return{questionId:t,questionBackground:n,currentQuestion:c,updateParams:o,store:r}}};const xt=h()(Mt,[["render",o]]);t["default"]=xt},"622f":function(e,t,n){},"6f10":function(e,t,n){"use strict";n("780c")},7326:function(e,t,n){"use strict";n("fc84")},"780c":function(e,t,n){},8034:function(e,t,n){},9261:function(e,t,n){},"929d":function(e,t,n){"use strict";n("39b1")},9333:function(e,t,n){"use strict";n("622f")},"95c0":function(e,t,n){e.exports=n.p+"media/explode.780a16d9.wav"},"96a3":function(e,t,n){"use strict";n("b607")},"9b2f":function(e,t,n){"use strict";n("d498")},b607:function(e,t,n){},c07a:function(e,t,n){"use strict";n("9261")},d498:function(e,t,n){},e29e:function(e,t,n){},f148:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("a9e3");var c=n("7a23"),o=n("6c02"),r=n("bbd5"),i=n("1da1"),a=(n("96cf"),n("26b3")),u=n("aaef"),s=n("335a"),d=n("2808");function l(e,t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])("/user_quizzes",{user_quiz:{category_id:t}},n);case 2:c=e.sent,s["a"].session.set(u["a"],c.id),console.log({quizCategory:c}),c&&d["a"].track("Started Quiz",{category:1===t?"40k":"AOS",user_quiz_id:c.id});case 6:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var b=n("1caf"),h=n("5502"),p=n("032f"),O=n("2431"),j=n("cffa");function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"h",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Object(p["b"])(),a=i.getCookie(u["b"]),d=Object(r["b"])(),f=Object(c["F"])(null),v=Object(c["F"])(null),g=Object(c["F"])(null),m=Object(c["F"])(null),q=Object(c["E"])({left:!1,right:!1}),y=Object(c["E"])({transparentOffset:60,transparentOffsetY:55,transparentOffsetYGrey:55,redOffset:25,greyOffset:25,blkOffset:45,duration:0}),T=Object(o["e"])(),k=Object(h["e"])(),M={};function x(e){d?(M.startX=e.touches[0].pageX,M.startY=e.touches[0].pageY):(M.startX=e.pageX,M.startY=e.pageY),M.directionLocked=""}function w(t){var n,c;M.directionLocked="h"===e?"h":"v",d?(n=t.touches[0].pageX-M.startX,c=t.touches[0].pageY-M.startY):(n=t.pageX-M.startX,c=t.pageY-M.startY),"v"===M.directionLocked?_(c):S(n)}function C(){"v"===M.directionLocked?I():A()}function S(e){e>0?(M.percentX=e/M.widthL,q.right=!0,q.left=!1):(M.percentX=e/M.widthR,q.left=!0,q.right=!1),m.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"0ms"},y.blkOffset=45-.45*M.percentX*100,y.transparentOffset=60-.4*M.percentX*100,y.duration=0}function _(e){e>0?(M.percentY=e/M.heightB,y.greyOffset=Math.max(25+.25*M.percentY*100,25),y.transparentOffsetYGrey=Math.max(55+.45*M.percentY*100,55)):(M.percentY=e/M.heightT,y.redOffset=Math.max(25-.25*M.percentY*100,25),y.transparentOffsetY=Math.max(55-.45*M.percentY*100,55)),m.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"0ms"},y.duration=0}function A(){if(Math.abs(M.percentX)<.95){var e=0;q.left=!1,q.right=!1,m.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"300ms"},y.transparentOffset=60,y.blkOffset=45,y.duration=300}else s["a"].session.set("__currentquiz__",1),M.percentX>0?(l(1,a),k.commit("setCategory","40k"),T.push({path:"/questions/40k/1"})):(l(2,a),k.commit("setCategory","aos"),T.push({path:"/questions/aos/1"}))}function I(){if(Math.abs(M.percentY)<.75){var e=0;m.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"300ms"},y.transparentOffsetY=55,y.transparentOffsetYGrey=55,y.redOffset=25,y.greyOffset=25,y.duration=300}else M.percentY<0?(Object(b["a"])({questionId:t,choiceId:n[0].id},a),Q("top")):(Object(b["a"])({questionId:t,choiceId:n[1].id},a),Q("bottom")),s["a"].session.set("__currentquiz__",7)}function Q(e){var t=document.querySelector(".".concat(e)),n=document.querySelector(".".concat(e," div"));Object(O["a"])(t,!1,!1),j["a"].timeline().to(n,{opacity:0,duration:.2,onStart:function(){f.value.play()}}).to(t,{opacity:0,duration:2,ease:"expo.out",onComplete:function(){T.push({path:"/reveal"})}})}return Object(c["x"])((function(){M.widthL=Number(Object(r["c"])(getComputedStyle(v.value).width,0,-2)),M.widthR=Number(Object(r["c"])(getComputedStyle(g.value).width,0,-2)),M.heightT=Number(Object(r["c"])(getComputedStyle(v.value).height,0,-2)),M.heightB=Number(Object(r["c"])(getComputedStyle(g.value).height,0,-2))})),{onMiddleTouchStart:x,onMiddleTouchMove:w,onMiddleTouchEnd:C,iconTransform:m,swipeOne:v,swipeTwo:g,audio:f,maskTransform:y,beatAnimate:q}}},fc84:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2b020624.41f77356.js.map