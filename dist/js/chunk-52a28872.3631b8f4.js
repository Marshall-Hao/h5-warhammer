(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52a28872"],{"0213":function(e,t,n){"use strict";n("cb29");var c=n("7a23"),o=["href","fill","stroke"];function r(e,t,n,r,i,a){return Object(c["A"])(),Object(c["g"])("svg",{class:Object(c["q"])(n.icon)},[Object(c["h"])("use",{href:r.iconName,style:Object(c["r"])(n.duration),fill:n.fill,stroke:n.stroke},null,12,o)],2)}n("a9e3"),n("99af"),n("b0c0");var i={name:"svg-icon",props:{name:[Number,String],prefix:{type:String,default:"war-q3"},duration:{type:Object,default:{animation:"logo3 3s infinite alternate"}},fill:{type:String,default:"black"},stroke:{type:String,default:"rgba(72, 138, 20, 0)"},icon:{type:String,default:"icon"}},setup:function(e){var t="#".concat(e.prefix).concat(e.name);return{iconName:t}}},a=(n("3b3f"),n("d959")),u=n.n(a);const s=u()(i,[["render",r],["__scopeId","data-v-2875fd7a"]]);t["a"]=s},1913:function(e,t,n){"use strict";n("8034")},"1ceb":function(e,t,n){},2175:function(e,t,n){e.exports=n.p+"media/laser.1110d61c.wav"},"39b1":function(e,t,n){},"3b3f":function(e,t,n){"use strict";n("1ceb")},4303:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,i){return Object(c["A"])(),Object(c["e"])(Object(c["J"])("fourtyk-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"])}var r={class:"q1 fixed-no-scroll"},i={class:"q1-title"},a={class:"q1-section"},u={class:"q1-section-choices"},s=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function d(e,t,n,o,d,l){return Object(c["A"])(),Object(c["g"])("div",r,[Object(c["h"])("div",{class:"q1-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",i,Object(c["L"])(n.questionText),1),Object(c["h"])("section",a,[Object(c["h"])("div",u,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(c["q"])({"selected-q1":o.selected===t}),style:Object(c["r"])("background-image:url(".concat(e.image,")"))},[Object(c["h"])("div",{onTouchstart:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,40,s)],6)})),128))])])])}var l=n("ef6d"),f={name:"fourtyk-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c,1500),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,selected:u}}},b=(n("7326"),n("d959")),h=n.n(b);const p=h()(f,[["render",d],["__scopeId","data-v-070d92ca"]]);var O=p,j=n("2175"),v=n.n(j),g={class:"q2 fixed-no-scroll"},m={class:"q2-title"},y={class:"q2-section"},q={class:"q2-section-choices",ref:"q"},T=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],k={ref:"audio"},M=Object(c["h"])("source",{src:v.a,type:"audio/wav"},null,-1),w=Object(c["j"])(" Your browser does not support the audio element. "),x=[M,w];function S(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",g,[Object(c["h"])("div",{class:"q2-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",m,Object(c["L"])(n.questionText),1),Object(c["h"])("section",y,[Object(c["h"])("div",q,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(t,n){return Object(c["A"])(),Object(c["g"])("div",{key:t,style:Object(c["r"])({backgroundImage:"url(".concat(t.image,")")}),class:Object(c["q"])({"selected-q":o.selected===n}),onTouchstart:Object(c["T"])((function(e){return o.choiceTouchStartParticle(n,e,t.id)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onTouchend:Object(c["T"])((function(e){return o.choiceTouchEnd(t.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(t){return e.choiceTouchStart(n)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onMousedown:function(e){return o.choiceTouchEnd(t.id)}},[Object(c["h"])("div",{class:Object(c["q"])(["q2-section-choices-mask",{"selected-q":o.selected===n}])},null,2)],46,T)})),128))],512)]),Object(c["h"])("audio",k,x,512)])}var C=n("1da1"),_=(n("96cf"),n("2431")),A={name:"fourtyk-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,o=e.currentQuestion.id,r=Object(c["F"])(null),i=Object(c["F"])(null),a=Object(l["a"])(n,o,2100),u=a.choiceTouchMove,s=a.choiceTouchEnd,d=a.choiceTouchStart,f=a.selected;function b(e,t,n){return h.apply(this,arguments)}function h(){return h=Object(C["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d(t),Object(_["a"])(n.target),i.value.play();case 3:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}return{q:r,audio:i,choiceTouchMove:u,choiceTouchEnd:s,choiceTouchStartParticle:b,selected:f}}};n("fdd0");const I=h()(A,[["render",S]]);var Q=I,B={class:"q3 fixed-no-scroll"},Y={class:"q3-section"},E={class:"q3-section-title"},L={class:"q3-section-choices"},P=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function R(e,t,n,o,r,i){var a=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",B,[Object(c["h"])("div",{class:"q3-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("div",Y,[Object(c["h"])("h1",E,Object(c["L"])(n.questionText),1),Object(c["h"])("div",L,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q3-section-choice",{"select-q3":o.selected===t}]),onTouchstart:Object(c["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["T"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},[2!==t?(Object(c["A"])(),Object(c["e"])(a,{key:0,name:t+1,duration:{}},null,8,["name"])):(Object(c["A"])(),Object(c["e"])(a,{key:1,name:t+1,duration:{},icon:"icon-special"},null,8,["name"]))],42,P)})),128))])])])}var F=["src"];function X(e,t,n,o,r,i){var a=Object(c["I"])("fly-box");return Object(c["A"])(),Object(c["e"])(a,{lineColor:n.lineColor,starColor:n.starColor,duration:n.duration},{default:Object(c["R"])((function(){return[Object(c["h"])("img",{src:n.posterUrl,style:Object(c["r"])(n.style)},null,12,F)]})),_:1},8,["lineColor","starColor","duration"])}n("a9e3"),n("99af");var z,N=function(e){return Object(c["D"])("data-v-6c21862b"),e=e(),Object(c["B"])(),e},G={class:"fly-box",ref:"flyBoxRef"},D=["width","height","viewBox"],W=["id","d"],V=["id"],$=["fill"],U=["dur","path"],H=["id"],J=N((function(){return Object(c["h"])("stop",{offset:"0","stop-color":"#fff","stop-opacity":"1"},null,-1)})),Z=N((function(){return Object(c["h"])("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)})),K=[J,Z],ee=["href","stroke"],te=["href","stroke","mask"],ne={class:"fly-box-content"};function ce(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",G,[(Object(c["A"])(),Object(c["g"])("svg",{width:o.width,height:o.height,viewBox:"0 0 ".concat(o.width," ").concat(o.height)},[Object(c["h"])("defs",null,[Object(c["h"])("path",{id:o.pathId,d:o.path,fill:"none"},null,8,W),Object(c["h"])("mask",{id:o.maskId},[Object(c["h"])("circle",{r:"50",cx:"0",cy:"0",fill:"url(#".concat(o.radialId,")")},[Object(c["h"])("animateMotion",{dur:"".concat(n.duration,"s"),path:o.path,rotate:"auto",repeatCount:"indefinite"},null,8,U)],8,$)],8,V),Object(c["h"])("radialGradient",{id:o.radialId,cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},K,8,H)]),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"1",stroke:n.lineColor},null,8,ee),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"3",stroke:n.starColor,mask:"url(#".concat(o.maskId,")")},null,8,te)],8,D)),Object(c["h"])("div",ne,[Object(c["H"])(e.$slots,"default",{},void 0,!0)])],512)}var oe=new Uint8Array(16);function re(){if(!z&&(z="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return z(oe)}var ie=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ae(e){return"string"===typeof e&&ie.test(e)}for(var ue=ae,se=[],de=0;de<256;++de)se.push((de+256).toString(16).substr(1));function le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(se[e[t+0]]+se[e[t+1]]+se[e[t+2]]+se[e[t+3]]+"-"+se[e[t+4]]+se[e[t+5]]+"-"+se[e[t+6]]+se[e[t+7]]+"-"+se[e[t+8]]+se[e[t+9]]+"-"+se[e[t+10]]+se[e[t+11]]+se[e[t+12]]+se[e[t+13]]+se[e[t+14]]+se[e[t+15]]).toLowerCase();if(!ue(n))throw TypeError("Stringified UUID is invalid");return n}var fe=le;function be(e,t,n){e=e||{};var c=e.random||(e.rng||re)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=c[o];return t}return fe(c)}var he=be,pe={name:"fly-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2}},setup:function(){var e=Object(c["F"])(0),t=Object(c["F"])(0),n=Object(c["F"])(null),o=he(),r="fly-box-path-".concat(o),i="radial-graident-".concat(o),a="fly-box-mask-".concat(o),u=Object(c["c"])((function(){return"M0 5 L".concat(e.value," 5 L").concat(e.value," ").concat(t.value-5," L5 ").concat(t.value-5," Z")}));function s(){var c=n.value;e.value=c.clientWidth,t.value=c.clientHeight}return Object(c["z"])((function(){s()})),Object(c["x"])((function(){s()})),{width:e,height:t,path:u,flyBoxRef:n,pathId:r,radialId:i,maskId:a}}};n("c07a");const Oe=h()(pe,[["render",ce],["__scopeId","data-v-6c21862b"]]);var je=Oe,ve={name:"video-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2},posterUrl:String,style:{type:Object,default:{transform:"scale(1.112, 1.1)"}}},components:{FlyBox:je}};n("9333");const ge=h()(ve,[["render",X],["__scopeId","data-v-db8ca160"]]);var me=ge,ye=n("0213"),qe={name:"fourtyk-q3",components:{VideoBox:me,SvgIcon:ye["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(l["a"])(n,c),r=o.choiceTouchMove,i=o.choiceTouchEnd,a=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:i,choiceTouchStart:a,selected:u}}};n("1913");const Te=h()(qe,[["render",R],["__scopeId","data-v-1c5c8869"]]);var ke=Te,Me={class:"q4"},we={class:"q4-bg"},xe=Object(c["i"])('<div class="q4-intro" data-v-3a9c243d><p data-v-3a9c243d>Press</p><div data-v-3a9c243d><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-3a9c243d><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-3a9c243d><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-3a9c243d></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-3a9c243d></animate></polyline></svg><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-3a9c243d><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-3a9c243d><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-3a9c243d></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-3a9c243d></animate></polyline></svg></div></div>',1);function Se(e,t,n,o,r,i){var a=Object(c["I"])("LuckyWheel");return Object(c["A"])(),Object(c["g"])("div",Me,[Object(c["h"])("div",we,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover"}),class:Object(c["q"])([{selected:r.selected===t,unselected:r.selected!==t},"q4-bg-choice"])},[Object(c["h"])("div",{class:Object(c["q"])({selected:r.selected===t,unselected:r.selected!==t})},null,2)],6)})),128))]),xe,Object(c["k"])(a,{class:"q4-luckwheel",ref:"myLucky",width:"40rem",height:"40rem",prizes:r.prizes,blocks:r.blocks,defaultConfig:r.defaultConfig,onEnd:i.endCallback},null,8,["prizes","blocks","defaultConfig","onEnd"]),Object(c["h"])("div",{class:"q4-button",onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return i.startWheel&&i.startWheel.apply(i,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return i.startWheel&&i.startWheel.apply(i,arguments)})},null,32)])}n("caad"),n("2532");var Ce=n("1caf"),_e=n("aaef"),Ae=n("335a"),Ie=n("6c02"),Qe=n("cffa"),Be={name:"fourtyk-q4",data:function(){return{blocks:[{padding:"0px"},{padding:"0px",imgs:[{src:this.currentQuestion.selector_image,top:"26",width:"80%",rotate:!0}]}],prizes:[{title:"0"},{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"11"}],defaultConfig:{speed:30},choice1:["1","2","3"],choice2:["0","11","10"],choice3:["4","5","6"],choice4:["7","8","9"],selected:null}},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],methods:{startWheel:function(){var e=this;this.$refs.myLucky.play(),setTimeout((function(){var t=Math.floor(11*Math.random());e.$refs.myLucky.stop(t)}),4e3)},endCallback:function(e){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){var c,o,r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=t.$cookie.getCookie(_e["b"]),o=e.title,r=t.currentQuestion.id,t.choice1.includes(o)?(i=t.questionChoices[0].id,t.selected=0):t.choice2.includes(o)?(i=t.questionChoices[1].id,t.selected=1):t.choice3.includes(o)?(i=t.questionChoices[2].id,t.selected=2):(i=t.questionChoices[3].id,t.selected=3),t.$emit("updateParams",5),Object(Ce["a"])({questionId:r,choiceId:i},c),n.next=8,t.$nextTick;case 8:a=document.querySelector(".unselected"),console.log(a),Qe["a"].to(".selected",{scale:1.05,duration:1.5,ease:"expo.out",onComplete:function(){t.goNextPage()}});case 11:case"end":return n.stop()}}),n)})))()},goNextPage:function(){Ae["a"].session.set("__currentquiz__",4),this.$router.push({path:"/questions/40k/5"})}},setup:function(){var e=Object(Ie["d"])(),t=Object(Ie["e"])();Object(Ie["c"])((function(){var n=Ae["a"].session.get("__currentquiz__");console.log(Number(e.params.id),n),Number(e.params.id)>n&&t.push({path:"/questions/40k/".concat(n+1)})}))}};n("9b2f");const Ye=h()(Be,[["render",Se],["__scopeId","data-v-3a9c243d"]]);var Ee=Ye,Le=function(e){return Object(c["D"])("data-v-90c83b7c"),e=e(),Object(c["B"])(),e},Pe={class:"q5"},Re={class:"q5-title"},Fe=Le((function(){return Object(c["h"])("div",{class:"q5-rotate"},null,-1)})),Xe={class:"q5-select"},ze=["onTouchstart","onMousedown"];function Ne(e,t,n,o,r,i){var a=Object(c["I"])("scene");return Object(c["A"])(),Object(c["g"])("div",Pe,[Object(c["h"])("div",Re,Object(c["L"])(n.questionText),1),Object(c["k"])(a,{scene:o.scene},null,8,["scene"]),Fe,Object(c["h"])("div",{class:"q5-confirm",onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return o.next&&o.next.apply(o,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return o.next&&o.next.apply(o,arguments)})}," confirm ",32),Object(c["h"])("ul",Xe,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("li",{key:e,class:Object(c["q"])({"select-q":o.selected===t}),onTouchstart:Object(c["T"])((function(n){return o.changeScene(e,t)}),["prevent"]),onMousedown:function(n){return o.changeScene(e,t)}},Object(c["L"])(t+1),43,ze)})),128))])])}var Ge=n("bece"),De=n("539c"),We={name:"fourtyk-q5",components:{Scene:Ge["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){var t=e.currentQuestion.id,n=e.questionChoices[0].image,c=e.questionChoices[0].id,o=Object(De["a"])(t,n,c),r=o.changeScene,i=o.next,a=o.scene,u=o.selected;return{changeScene:r,next:i,scene:a,selected:u}}};n("6f10");const Ve=h()(We,[["render",Ne],["__scopeId","data-v-90c83b7c"]]);var $e=Ve,Ue={class:"q6-title"},He={class:"q6-section"},Je={class:"q6-grid"},Ze={class:"q6-card-front-content"},Ke=["onTouchstart","onMouseenter","onMousemove"];function et(e,t,n,o,r,i){return Object(c["A"])(),Object(c["g"])("div",{class:"q6 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",Ue,Object(c["L"])(n.questionText),1),Object(c["h"])("div",He,[Object(c["h"])("div",Je,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q6-card",{"select-card":o.flip===n,"unselect-card":o.flip!==n}])},[Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-back",{"back-flip":o.flip===n}]),style:Object(c["r"])({background:"url(".concat(e.image,")"),backgroundSize:"cover",borderRadius:"1.3rem"}),onMouseleave:t[0]||(t[0]=function(){return o.backPos&&o.backPos.apply(o,arguments)})},null,38),Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-front",{"front-flip":o.flip===n}])},[Object(c["h"])("div",Ze,[Object(c["h"])("div",{class:"q6-card-front-btn",onTouchstart:Object(c["T"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(t){return o.flipCard(n,e.id)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return o.choiceTouchMove(n)}),["prevent"])},null,40,Ke)])],2)],2)})),128))])])],4)}n("d3b7"),n("159b");var tt=n("2d08"),nt={name:"fourtyk-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,o=e.currentQuestion.id,r=Object(c["F"])(null),i=Object(l["a"])(n,o,2500),a=i.choiceTouchMove,u=i.choiceTouchEnd;function s(e,t){return d.apply(this,arguments)}function d(){return d=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var o,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.value=t,e.next=3,Object(c["p"])();case 3:return e.next=5,Object(c["p"])();case 5:return e.next=7,document.querySelector(".select-card");case 7:return o=e.sent,i=Object(tt["a"])(o).left,a=Object(tt["a"])(o).top,e.next=12,document.querySelector(".unselect-card");case 12:s=e.sent,s&&Qe["a"].timeline().to(".unselect-card",{opacity:0,stagger:{amount:.5}}).fromTo(".select-card",{position:"absolute",left:"".concat(i),top:"".concat(a)},{xPercent:-50,left:"50%",yPercent:-50,top:"50%",position:"absolute",duration:1,scale:1.5}).to(".front-flip",{rotateY:-180}).to(".back-flip",{rotateY:0,duration:.5,onComplete:function(){u(n)}},"<");case 14:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(){r.value=null}return{flip:r,flipCard:s,backPos:f,choiceTouchMove:a}},mounted:function(){window.innerHeight>800&&document.querySelector(".q6").classList.add("paddingY"),window.innerWidth,this.setChoiceDimension(.8)},methods:{setChoiceDimension:function(e){var t=document.querySelectorAll(".q6-card");console.log({cards:t});var n=window.innerWidth-40-2,c=window.innerHeight*e-45-10,o=n/2*(25/17)*2<=c;console.log({useW:o}),o?t.forEach((function(e){e.style.width="".concat(n/2,"px"),e.style.height="".concat(n/2*(25/17),"px")})):t.forEach((function(e){e.style.height="".concat(c/2,"px"),e.style.width="".concat(c/2*.68,"px")}))}}};n("96a3");const ct=h()(nt,[["render",et],["__scopeId","data-v-867ed216"]]);var ot=ct,rt=n("95c0"),it=n.n(rt),at=function(e){return Object(c["D"])("data-v-64e60f91"),e=e(),Object(c["B"])(),e},ut={class:"q7-title"},st={class:"q7-section"},dt={class:"q7-progress"},lt={class:"q7-progress-top",ref:"swipeOne"},ft={class:"q7-progress-eagle"},bt={class:"q7-progress-instruction"},ht={class:"q7-progress-bottom",ref:"swipeTwo"},pt={ref:"audio"},Ot=at((function(){return Object(c["h"])("source",{src:it.a,type:"audio/wav"},null,-1)})),jt=Object(c["j"])(" Your browser does not support the audio element. "),vt=[Ot,jt];function gt(e,t,n,o,r,i){var a=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",{class:"q7 fixed-no-scroll",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",ut,Object(c["L"])(n.questionText),1),Object(c["h"])("div",st,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{class:"q7-section-option",key:e},[0===t?(Object(c["A"])(),Object(c["g"])("div",{key:0,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"top"},null,4)):(Object(c["A"])(),Object(c["g"])("div",{key:1,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:"bottom"},null,4))])})),128))]),Object(c["h"])("div",dt,[Object(c["h"])("div",lt,null,512),Object(c["h"])("div",{class:"q7-progress-container",style:Object(c["r"])(o.iconTransform),onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onTouchmove:t[1]||(t[1]=Object(c["T"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onTouchend:t[2]||(t[2]=Object(c["T"])((function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)}),["prevent"])),onMouseenter:t[3]||(t[3]=Object(c["T"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onMousemove:t[4]||(t[4]=Object(c["T"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onMouseleave:t[5]||(t[5]=function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)})},[Object(c["h"])("div",ft,[Object(c["k"])(a,{name:3,fill:"#fff",duration:{}}),Object(c["h"])("p",bt,Object(c["L"])(n.currentQuestion.instruction),1)])],36),Object(c["h"])("div",ht,null,512)]),Object(c["h"])("audio",pt,vt,512)],4)}var mt=n("f148"),yt={name:"fourtyk-q7",components:{SvgIcon:ye["a"],VideoBox:me},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e){var t={animation:"mainlogo 0.8s infinite alternate"},n=e.currentQuestion.id,o=e.questionChoices,r=Object(c["c"])((function(){return"linear-gradient(\n          0,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(O.redOffset,"%,\n          transparent ").concat(O.transparentOffsetY,"%\n        );")})),i=Object(c["c"])((function(){return"linear-gradient(\n           180deg,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.8) ".concat(O.greyOffset,"%,\n          transparent ").concat(O.transparentOffsetYGrey,"%\n        );")})),a=Object(c["c"])((function(){return"".concat(O.duration,"ms")})),u=Object(mt["a"])("v",n,o),s=u.swipeOne,d=u.swipeTwo,l=u.audio,f=u.onMiddleTouchStart,b=u.onMiddleTouchMove,h=u.onMiddleTouchEnd,p=u.iconTransform,O=u.maskTransform;return Object(c["x"])((function(){})),Object(c["y"])((function(){var e=document.querySelector("canvas");e.remove()})),{animation:t,swipeOne:s,swipeTwo:d,onMiddleTouchStart:f,onMiddleTouchMove:b,onMiddleTouchEnd:h,iconTransform:p,maskTransform:O,maskValue:r,greyMask:i,duration:a,audio:l}}};n("929d");const qt=h()(yt,[["render",gt],["__scopeId","data-v-64e60f91"]]);var Tt=qt,kt=n("be84"),Mt={name:"40k-question",components:{FourtykQ1:O,FourtykQ2:Q,FourtykQ3:ke,FourtykQ4:Ee,FourtykQ5:$e,FourtykQ6:ot,FourtykQ7:Tt},setup:function(){var e=Object(kt["a"])(),t=e.questionId,n=e.questionBackground,c=e.currentQuestion,o=e.updateParams,r=e.store;return{questionId:t,questionBackground:n,currentQuestion:c,updateParams:o,store:r}}};const wt=h()(Mt,[["render",o]]);t["default"]=wt},"622f":function(e,t,n){},"6f10":function(e,t,n){"use strict";n("780c")},7326:function(e,t,n){"use strict";n("fc84")},"780c":function(e,t,n){},8034:function(e,t,n){},9261:function(e,t,n){},"929d":function(e,t,n){"use strict";n("39b1")},9333:function(e,t,n){"use strict";n("622f")},"95c0":function(e,t,n){e.exports=n.p+"media/explode.780a16d9.wav"},"96a3":function(e,t,n){"use strict";n("b607")},"9b2f":function(e,t,n){"use strict";n("d498")},b607:function(e,t,n){},c07a:function(e,t,n){"use strict";n("9261")},cf8c:function(e,t,n){},d498:function(e,t,n){},f148:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("a9e3");var c=n("7a23"),o=n("6c02"),r=n("bbd5"),i=n("1da1"),a=(n("96cf"),n("26b3")),u=n("aaef"),s=n("335a"),d=n("2808");function l(e,t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])("/user_quizzes",{user_quiz:{category_id:t}},n);case 2:c=e.sent,s["a"].session.set(u["a"],c.id),console.log({quizCategory:c}),c&&d["a"].track("Started Quiz",{category:1===t?"40k":"AOS",user_quiz_id:c.id});case 6:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var b=n("1caf"),h=n("5502"),p=n("032f"),O=n("2431"),j=n("cffa");function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"h",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Object(p["b"])(),a=i.getCookie(u["b"]),d=Object(r["b"])(),f=Object(c["F"])(null),v=Object(c["F"])(null),g=Object(c["F"])(null),m=Object(c["F"])(null),y=Object(c["E"])({left:!1,right:!1}),q=Object(c["E"])({transparentOffset:60,transparentOffsetY:55,transparentOffsetYGrey:55,redOffset:25,greyOffset:25,blkOffset:45,duration:0}),T=Object(o["e"])(),k=Object(h["e"])(),M={};function w(e){d?(M.startX=e.touches[0].pageX,M.startY=e.touches[0].pageY):(M.startX=e.pageX,M.startY=e.pageY),M.directionLocked=""}function x(t){var n,c;M.directionLocked="h"===e?"h":"v",d?(n=t.touches[0].pageX-M.startX,c=t.touches[0].pageY-M.startY):(n=t.pageX-M.startX,c=t.pageY-M.startY),"v"===M.directionLocked?_(c):C(n)}function S(){"v"===M.directionLocked?I():A()}function C(e){e>0?(M.percentX=e/M.widthL,y.right=!0,y.left=!1):(M.percentX=e/M.widthR,y.left=!0,y.right=!1),m.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"0ms"},q.blkOffset=45-.45*M.percentX*100,q.transparentOffset=60-.4*M.percentX*100,q.duration=0}function _(e){e>0?(M.percentY=e/M.heightB,q.greyOffset=Math.max(25+.25*M.percentY*100,25),q.transparentOffsetYGrey=Math.max(55+.45*M.percentY*100,55)):(M.percentY=e/M.heightT,q.redOffset=Math.max(25-.25*M.percentY*100,25),q.transparentOffsetY=Math.max(55-.45*M.percentY*100,55)),m.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"0ms"},q.duration=0}function A(){if(Math.abs(M.percentX)<.95){var e=0;y.left=!1,y.right=!1,m.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"300ms"},q.transparentOffset=60,q.blkOffset=45,q.duration=300}else s["a"].session.set("__currentquiz__",1),M.percentX>0?(l(1,a),k.commit("setCategory","40k"),T.push({path:"/questions/40k/1"})):(l(2,a),k.commit("setCategory","aos"),T.push({path:"/questions/aos/1"}))}function I(){if(Math.abs(M.percentY)<.75){var e=0;m.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"300ms"},q.transparentOffsetY=55,q.transparentOffsetYGrey=55,q.redOffset=25,q.greyOffset=25,q.duration=300}else{var c=document.querySelector("audio");c.play(),M.percentY<0?(Object(b["a"])({questionId:t,choiceId:n[0].id},a),Q("top")):(Object(b["a"])({questionId:t,choiceId:n[1].id},a),Q("bottom")),s["a"].session.set("__currentquiz__",7)}}function Q(e){var t=document.querySelector(".".concat(e)),n=document.querySelector(".".concat(e," div"));Object(O["a"])(t,!1,!1),j["a"].timeline().to(n,{opacity:0,duration:.2,onStart:function(){f.value.play()}}).to(t,{opacity:0,duration:2,ease:"expo.out",onComplete:function(){T.push({path:"/reveal"})}})}return Object(c["x"])((function(){M.widthL=Number(Object(r["c"])(getComputedStyle(v.value).width,0,-2)),M.widthR=Number(Object(r["c"])(getComputedStyle(g.value).width,0,-2)),M.heightT=Number(Object(r["c"])(getComputedStyle(v.value).height,0,-2)),M.heightB=Number(Object(r["c"])(getComputedStyle(g.value).height,0,-2))})),{onMiddleTouchStart:w,onMiddleTouchMove:x,onMiddleTouchEnd:S,iconTransform:m,swipeOne:v,swipeTwo:g,audio:f,maskTransform:q,beatAnimate:y}}},fc84:function(e,t,n){},fdd0:function(e,t,n){"use strict";n("cf8c")}}]);
//# sourceMappingURL=chunk-52a28872.3631b8f4.js.map