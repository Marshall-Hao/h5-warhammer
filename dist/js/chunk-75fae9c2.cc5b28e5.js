(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75fae9c2"],{"0213":function(e,t,n){"use strict";n("cb29");var c=n("7a23"),o={class:"icon"},r=["href","fill","stroke"];function a(e,t,n,a,i,u){return Object(c["y"])(),Object(c["g"])("svg",o,[Object(c["h"])("use",{href:a.iconName,style:Object(c["r"])(n.duration),fill:n.fill,stroke:n.stroke},null,12,r)])}n("a9e3"),n("99af"),n("b0c0");var i={name:"svg-icon",props:{name:[Number,String],prefix:{type:String,default:"war-q3"},duration:{type:Object,default:{animation:"logo3 2s infinite alternate"}},fill:{type:String,default:"black"},stroke:{type:String,default:"rgba(72, 138, 20, 0)"}},setup:function(e){var t="#".concat(e.prefix).concat(e.name);return{iconName:t}}},u=(n("3f63"),n("d959")),s=n.n(u);const l=s()(i,[["render",a],["__scopeId","data-v-4bb4ad34"]]);t["a"]=l},"0309":function(e,t,n){"use strict";n("a144")},"0ea8":function(e,t,n){},"1c02":function(e,t,n){"use strict";n("99af");var c=n("7a23"),o=function(e){return Object(c["B"])("data-v-27a5ad30"),e=e(),Object(c["z"])(),e},r={class:"fly-box",ref:"flyBoxRef"},a=["width","height","viewBox"],i=["id","d"],u=["id"],s=["fill"],l=["dur","path"],d=["id"],b=o((function(){return Object(c["h"])("stop",{offset:"0","stop-color":"#fff","stop-opacity":"1"},null,-1)})),f=o((function(){return Object(c["h"])("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)})),h=[b,f],p=["href","stroke"],O=["href","stroke","mask"],v={class:"fly-box-content"};function j(e,t,n,o,b,f){return Object(c["y"])(),Object(c["g"])("div",r,[(Object(c["y"])(),Object(c["g"])("svg",{width:o.width,height:o.height,viewBox:"0 0 ".concat(o.width," ").concat(o.height)},[Object(c["h"])("defs",null,[Object(c["h"])("path",{id:o.pathId,d:o.path,fill:"none"},null,8,i),Object(c["h"])("mask",{id:o.maskId},[Object(c["h"])("circle",{r:"50",cx:"0",cy:"0",fill:"url(#".concat(o.radialId,")")},[Object(c["h"])("animateMotion",{dur:"".concat(n.duration,"s"),path:o.path,rotate:"auto",repeatCount:"indefinite"},null,8,l)],8,s)],8,u),Object(c["h"])("radialGradient",{id:o.radialId,cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},h,8,d)]),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"1",stroke:n.lineColor},null,8,p),Object(c["h"])("use",{href:"#".concat(o.pathId),"stroke-width":"3",stroke:n.starColor,mask:"url(#".concat(o.maskId,")")},null,8,O)],8,a)),Object(c["h"])("div",v,[Object(c["F"])(e.$slots,"default",{},void 0,!0)])],512)}n("a9e3");var m,g=new Uint8Array(16);function y(){if(!m&&(m="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(g)}var q=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function T(e){return"string"===typeof e&&q.test(e)}for(var k=T,M=[],w=0;w<256;++w)M.push((w+256).toString(16).substr(1));function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(M[e[t+0]]+M[e[t+1]]+M[e[t+2]]+M[e[t+3]]+"-"+M[e[t+4]]+M[e[t+5]]+"-"+M[e[t+6]]+M[e[t+7]]+"-"+M[e[t+8]]+M[e[t+9]]+"-"+M[e[t+10]]+M[e[t+11]]+M[e[t+12]]+M[e[t+13]]+M[e[t+14]]+M[e[t+15]]).toLowerCase();if(!k(n))throw TypeError("Stringified UUID is invalid");return n}var S=C;function x(e,t,n){e=e||{};var c=e.random||(e.rng||y)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=c[o];return t}return S(c)}var P=x,_={name:"fly-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2}},setup:function(){var e=Object(c["D"])(0),t=Object(c["D"])(0),n=Object(c["D"])(null),o=P(),r="fly-box-path-".concat(o),a="radial-graident-".concat(o),i="fly-box-mask-".concat(o),u=Object(c["c"])((function(){return"M5 5 L".concat(e.value-5," 5 L").concat(e.value-5," ").concat(t.value-5," L5 ").concat(t.value-5," Z")}));function s(){var c=n.value;e.value=c.clientWidth,t.value=c.clientHeight}return Object(c["w"])((function(){s()})),{width:e,height:t,path:u,flyBoxRef:n,pathId:r,radialId:a,maskId:i}}},E=(n("fcc1"),n("d959")),I=n.n(E);const Q=I()(_,[["render",j],["__scopeId","data-v-27a5ad30"]]);t["a"]=Q},"211c":function(e,t,n){"use strict";n("7a38")},"39c6":function(e,t,n){"use strict";n("f1da")},"3f63":function(e,t,n){"use strict";n("b4c2")},4303:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,r,a){return Object(c["y"])(),Object(c["e"])(Object(c["H"])("fourtyk-q".concat(o.questionId)),{currentQuestion:o.currentQuestion,questionBackground:o.questionBackground,questionText:o.currentQuestion&&o.currentQuestion.text,questionChoices:o.currentQuestion&&o.currentQuestion.choices,onUpdateParams:o.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"])}var r={class:"q1"},a={class:"q1-title"},i={class:"q1-section"},u={class:"q1-section-choices"},s=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],l=Object(c["i"])('<svg width="0" height="0" data-v-07c1d943><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-07c1d943><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-07c1d943></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="200" data-v-07c1d943><animate id="scale1" attributeName="scale" attributeType="XML" from="200" to="10" dur="2s" fill="freeze" begin="0; scale3.end" data-v-07c1d943></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="10" to="1" dur="2.5s" fill="freeze" begin="scale1.end" data-v-07c1d943></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="1" to="200" dur="2s" fill="freeze" begin="scale2.end" data-v-07c1d943></animate></feDisplacementMap></filter></svg>',1);function d(e,t,n,o,d,b){return Object(c["y"])(),Object(c["g"])("div",r,[Object(c["h"])("div",{class:"q1-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",a,Object(c["J"])(n.questionText),1),Object(c["h"])("section",i,[Object(c["h"])("div",u,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["E"])(n.questionChoices,(function(e,t){return Object(c["y"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(c["q"])({"selected-q":o.selected===t}),style:Object(c["r"])("background-image:url(".concat(e.image,")")),onTouchstart:Object(c["P"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(c["P"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["P"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["P"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["P"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},null,46,s)})),128))])]),l])}var b=n("ef6d"),f={name:"fourtyk-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(b["a"])(n,c),r=o.choiceTouchMove,a=o.choiceTouchEnd,i=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:a,choiceTouchStart:i,selected:u}}},h=(n("211c"),n("d959")),p=n.n(h);const O=p()(f,[["render",d],["__scopeId","data-v-07c1d943"]]);var v=O,j={class:"q2"},m={class:"q2-title"},g={class:"q2-section"},y={class:"q2-section-choices"},q=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"];function T(e,t,n,o,r,a){return Object(c["y"])(),Object(c["g"])("div",j,[Object(c["h"])("div",{class:"q2-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",m,Object(c["J"])(n.questionText),1),Object(c["h"])("section",g,[Object(c["h"])("div",y,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["E"])(n.questionChoices,(function(e,t){return Object(c["y"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),onTouchstart:Object(c["P"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(c["P"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["P"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["P"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["P"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},[Object(c["h"])("div",{class:Object(c["q"])(["q2-section-choices-mask",{"selected-q":o.selected===t}])},null,2)],44,q)})),128))])])])}var k={name:"fourtyk-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(b["a"])(n,c),r=o.choiceTouchMove,a=o.choiceTouchEnd,i=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:a,choiceTouchStart:i,selected:u}}};n("39c6");const M=p()(k,[["render",T]]);var w=M,C={class:"q3"},S={class:"q3-section"},x={class:"q3-section-video"},P={class:"q3-section-title"},_={class:"q3-section-choices"},E=["onTouchstart","onTouchmove","onTouchend","onMouseenter","onMousemove","onMousedown"],I=Object(c["i"])('<svg width="0" height="0" data-v-454f7ba5><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-454f7ba5><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-454f7ba5></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="10" data-v-454f7ba5><animate id="scale1" attributeName="scale" attributeType="XML" from="50" to="5" dur="2s" fill="freeze" begin="0; scale3.end" data-v-454f7ba5></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="5" to="0" dur="2.5s" fill="freeze" begin="scale1.end" data-v-454f7ba5></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="0" to="50" dur="2s" fill="freeze" begin="scale2.end" data-v-454f7ba5></animate></feDisplacementMap></filter></svg>',1);function Q(e,t,n,o,r,a){var i=Object(c["G"])("video-box"),u=Object(c["G"])("svg-icon");return Object(c["y"])(),Object(c["g"])("div",C,[Object(c["h"])("div",{class:"q3-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("div",S,[Object(c["h"])("div",x,[Object(c["k"])(i,{lineColor:"rgb(67,80,102)",starColor:"#BC3F2F",duration:"5",style:Object(c["r"])({transform:"scale(1.115,1.19)"}),posterUrl:n.currentQuestion.instruction_image},null,8,["lineColor","style","posterUrl"])]),Object(c["h"])("h1",P,Object(c["J"])(n.questionText),1),Object(c["h"])("div",_,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["E"])(n.questionChoices,(function(e,t){return Object(c["y"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q3-section-choice",{"selected-q":o.selected===t}]),onTouchstart:Object(c["P"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onTouchmove:Object(c["P"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onTouchend:Object(c["P"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["P"])((function(e){return o.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["P"])((function(e){return o.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return o.choiceTouchEnd(e.id)}},[Object(c["k"])(u,{name:t+1},null,8,["name"])],42,E)})),128))])]),I])}var B=["src"];function N(e,t,n,o,r,a){var i=Object(c["G"])("fly-box");return Object(c["y"])(),Object(c["e"])(i,{lineColor:n.lineColor,starColor:n.starColor,duration:n.duration},{default:Object(c["O"])((function(){return[Object(c["h"])("img",{src:n.posterUrl,style:Object(c["r"])(n.style)},null,12,B)]})),_:1},8,["lineColor","starColor","duration"])}n("a9e3");var z=n("1c02"),X={name:"video-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2},posterUrl:String,style:{type:Object,default:{transform:"scale(1.112, 1.1)"}}},components:{FlyBox:z["a"]}};n("9333");const F=p()(X,[["render",N],["__scopeId","data-v-db8ca160"]]);var L=F,Y=n("0213"),D={name:"fourtyk-q3",components:{VideoBox:L,SvgIcon:Y["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,o=Object(b["a"])(n,c),r=o.choiceTouchMove,a=o.choiceTouchEnd,i=o.choiceTouchStart,u=o.selected;return{choiceTouchMove:r,choiceTouchEnd:a,choiceTouchStart:i,selected:u}}};n("4b19");const G=p()(D,[["render",Q],["__scopeId","data-v-454f7ba5"]]);var U=G,R={class:"q4"},A={class:"q4-bg"},J=Object(c["i"])('<svg width="0" height="0" data-v-158d1b84><filter id="fractal" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%" data-v-158d1b84><feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.032 0.02" numOctaves="1" data-v-158d1b84><animate id="wave1" attributeName="baseFrequency" attributeType="XML" from="0.032 0.02" to="0.022 0.01" dur="3.5s" fill="freeze" begin="0; wave2.end" data-v-158d1b84></animate><animate id="wave2" attributeName="baseFrequency" attributeType="XML" from="0.022 0.01" to="0.032 0.02" dur="3.5s" fill="freeze" begin="wave1.end" data-v-158d1b84></animate></feTurbulence><feDisplacementMap in="SourceGraphic" scale="15" data-v-158d1b84></feDisplacementMap></filter></svg>',1);function V(e,t,n,o,r,a){var i=Object(c["G"])("LuckyWheel");return Object(c["y"])(),Object(c["g"])("div",R,[Object(c["h"])("div",A,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["E"])(n.questionChoices,(function(e,t){return Object(c["y"])(),Object(c["g"])("div",{key:e,style:Object(c["r"])({background:"url(".concat(e.image,")")}),class:Object(c["q"])({"selected-q":r.selected===t})},null,6)})),128))]),Object(c["k"])(i,{class:"q4-luckwheel",ref:"myLucky",width:"400px",height:"400px",prizes:r.prizes,blocks:r.blocks,defaultConfig:r.defaultConfig,onEnd:a.endCallback},null,8,["prizes","blocks","defaultConfig","onEnd"]),Object(c["h"])("div",{class:"q4-button",onTouchstart:t[0]||(t[0]=Object(c["P"])((function(){return a.startWheel&&a.startWheel.apply(a,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return a.startWheel&&a.startWheel.apply(a,arguments)})},null,32),J])}n("caad"),n("2532");var W=n("1caf"),$=n("aaef"),H=n("335a"),Z=n("6c02"),K={name:"fourtyk-q4",data:function(){return{blocks:[{padding:"0px"},{padding:"0px",imgs:[{src:this.currentQuestion.selector_image,top:"26",width:"80%",rotate:!0}]}],prizes:[{title:"0"},{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"11"}],defaultConfig:{speed:15},choice1:["1","2","3"],choice2:["0","11","10"],choice3:["4","5","6"],choice4:["7","8","9"],selected:""}},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],methods:{startWheel:function(){var e=this;this.$refs.myLucky.play(),setTimeout((function(){var t=Math.floor(11*Math.random());e.$refs.myLucky.stop(t)}),4e3)},endCallback:function(e){var t,n=this.$cookie.getCookie($["c"]),c=e.title,o=this.currentQuestion.id;this.choice1.includes(c)?(t=this.questionChoices[0].id,this.selected=0):this.choice2.includes(c)?(t=this.questionChoices[1].id,this.selected=1):this.choice3.includes(c)?(t=this.questionChoices[2].id,this.selected=2):(t=this.questionChoices[3].id,this.selected=3),this.$emit("updateParams",5),Object(W["a"])({questionId:o,choiceId:t},n),this.goNextPage()},goNextPage:function(){var e=this;H["a"].session.set("__currentquiz__",4),setTimeout((function(){e.$router.push({path:"/questions/40k/5"})}),1e3)}},setup:function(){var e=Object(Z["d"])(),t=Object(Z["e"])();Object(Z["c"])((function(){var n=H["a"].session.get("__currentquiz__");console.log(Number(e.params.id),n),Number(e.params.id)>n&&t.push({path:"/questions/40k/".concat(n+1)})}))}};n("60fe");const ee=p()(K,[["render",V],["__scopeId","data-v-158d1b84"]]);var te=ee,ne={class:"q5"},ce={class:"q5-title"},oe={class:"q5-select"},re=["onTouchstart","onMousedown"];function ae(e,t,n,o,r,a){var i=Object(c["G"])("scene");return Object(c["y"])(),Object(c["g"])("div",ne,[Object(c["h"])("div",ce,Object(c["J"])(n.questionText),1),Object(c["k"])(i,{scene:o.scene},null,8,["scene"]),Object(c["h"])("div",{class:"q5-confirm",onTouchstart:t[0]||(t[0]=Object(c["P"])((function(){return o.next&&o.next.apply(o,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return o.next&&o.next.apply(o,arguments)})}," confirm ",32),Object(c["h"])("ul",oe,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["E"])(n.questionChoices,(function(e,t){return Object(c["y"])(),Object(c["g"])("li",{key:e,class:Object(c["q"])({"select-q":o.selected===t}),onTouchstart:Object(c["P"])((function(n){return o.changeScene(e,t)}),["prevent"]),onMousedown:function(n){return o.changeScene(e,t)}},Object(c["J"])(t+1),43,re)})),128))])])}var ie=n("bece"),ue=n("539c"),se={name:"fourtyk-q5",components:{Scene:ie["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){var t=e.currentQuestion.id,n=e.questionChoices[0].image,c=e.questionChoices[0].id,o=Object(ue["a"])(t,n,c),r=o.changeScene,a=o.next,i=o.scene,u=o.selected;return{changeScene:r,next:a,scene:i,selected:u}}};n("6556");const le=p()(se,[["render",ae],["__scopeId","data-v-9c01647e"]]);var de=le,be=function(e){return Object(c["B"])("data-v-b081b134"),e=e(),Object(c["z"])(),e},fe={class:"q6-title"},he={class:"q6-section"},pe=["onTouchstart","onTouchmove","onMouseenter","onMousemove"],Oe=["onTouchend","onMouseleave"],ve=be((function(){return Object(c["h"])("div",{class:"q6-card-front-content"},[Object(c["h"])("div",{class:"q6-card-front-btn"},"Flip")],-1)})),je=[ve],me={class:"q6-text"},ge=Object(c["i"])('<svg width="0" height="0" data-v-b081b134><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-b081b134><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-b081b134></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="10" data-v-b081b134><animate id="scale1" attributeName="scale" attributeType="XML" from="10" to="5" dur="2s" fill="freeze" begin="0; scale3.end" data-v-b081b134></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="5" to="0" dur="2.5s" fill="freeze" begin="scale1.end" data-v-b081b134></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="0" to="10" dur="2s" fill="freeze" begin="scale2.end" data-v-b081b134></animate></feDisplacementMap></filter></svg>',1);function ye(e,t,n,o,r,a){return Object(c["y"])(),Object(c["g"])("div",{class:"q6",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",fe,Object(c["J"])(n.questionText),1),Object(c["h"])("div",he,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["E"])(n.questionChoices,(function(e,n){return Object(c["y"])(),Object(c["g"])("div",{key:e,class:"q6-card",onTouchstart:Object(c["P"])((function(e){return o.flipCard(n)}),["prevent"]),onTouchmove:Object(c["P"])((function(e){return o.choiceTouchMove(n)}),["prevent"]),onMouseenter:Object(c["P"])((function(e){return o.flipCard(n)}),["prevent"]),onMousemove:Object(c["P"])((function(e){return o.choiceTouchMove(n)}),["prevent"])},[Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-back",{"back-flip":o.flip===n}]),style:Object(c["r"])({background:"url(".concat(e.image,")"),backgroundSize:"cover"}),onTouchmove:t[0]||(t[0]=Object(c["P"])((function(){return o.backPos&&o.backPos.apply(o,arguments)}),["prevent"])),onTouchend:Object(c["P"])((function(t){return o.choiceTouchEnd(e.id)}),["prevent"]),onMousemove:t[1]||(t[1]=Object(c["P"])((function(){return o.backPos&&o.backPos.apply(o,arguments)}),["prevent"])),onMouseleave:function(t){return o.choiceTouchEnd(e.id)}},null,46,Oe),Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-front",{"front-flip":o.flip===n}])},je,2)],40,pe)})),128))]),Object(c["h"])("p",me,Object(c["J"])(n.currentQuestion.instruction),1),ge],4)}var qe={name:"fourtyk-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,o=e.currentQuestion.id,r=Object(c["D"])(null),a=Object(b["a"])(n,o),i=a.choiceTouchMove,u=a.choiceTouchEnd;function s(e){r.value=e}function l(){r.value=null}return{flip:r,flipCard:s,backPos:l,choiceTouchMove:i,choiceTouchEnd:u}}};n("0309");const Te=p()(qe,[["render",ye],["__scopeId","data-v-b081b134"]]);var ke=Te,Me=(n("99af"),function(e){return Object(c["B"])("data-v-3ed078e8"),e=e(),Object(c["z"])(),e}),we={class:"q7-title"},Ce={class:"q7-section"},Se={class:"q7-progress"},xe={class:"q7-progress-top",ref:"swipeOne"},Pe={class:"q7-progress-eagle"},_e={class:"q7-progress-bottom",ref:"swipeTwo"},Ee={class:"q7-progress-instruction"},Ie={width:"0",height:"0"},Qe={id:"smoke"},Be={ref:"turbulence",id:"turbulence",type:"fractalNoise",baseFrequency:".03",numOctaves:"20"},Ne=Me((function(){return Object(c["h"])("feDisplacementMap",{in:"SourceGraphic",scale:"30"},null,-1)}));function ze(e,t,n,o,r,a){var i=Object(c["G"])("video-box"),u=Object(c["G"])("svg-icon");return Object(c["y"])(),Object(c["g"])("div",{class:"q7",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",we,Object(c["J"])(n.questionText),1),Object(c["h"])("div",Ce,[(Object(c["y"])(!0),Object(c["g"])(c["a"],null,Object(c["E"])(n.questionChoices,(function(e){return Object(c["y"])(),Object(c["g"])("div",{class:"q7-section-option",key:e},[Object(c["k"])(i,{posterUrl:e.image,duration:4,starColor:"#BC3F2F",lineColor:"#65798b"},null,8,["posterUrl"])])})),128))]),Object(c["h"])("div",Se,[Object(c["h"])("div",xe,[Object(c["h"])("div",{class:"q7-progress-top-mask",style:Object(c["r"])("background: ".concat(o.maskValue,";transition:all ").concat(o.duration,";"))},null,4)],512),Object(c["h"])("div",{class:"q7-progress-container",style:Object(c["r"])(o.iconTransform),onTouchstart:t[0]||(t[0]=Object(c["P"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onTouchmove:t[1]||(t[1]=Object(c["P"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onTouchend:t[2]||(t[2]=Object(c["P"])((function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)}),["prevent"])),onMouseenter:t[3]||(t[3]=Object(c["P"])((function(){return o.onMiddleTouchStart&&o.onMiddleTouchStart.apply(o,arguments)}),["prevent"])),onMousemove:t[4]||(t[4]=Object(c["P"])((function(){return o.onMiddleTouchMove&&o.onMiddleTouchMove.apply(o,arguments)}),["prevent"])),onMouseleave:t[5]||(t[5]=function(){return o.onMiddleTouchEnd&&o.onMiddleTouchEnd.apply(o,arguments)})},[Object(c["h"])("div",Pe,[Object(c["k"])(u,{name:3,fill:"#fff",duration:o.animation},null,8,["duration"])])],36),Object(c["h"])("div",_e,[Object(c["h"])("div",{class:"q7-progress-bottom-mask",style:Object(c["r"])("background: ".concat(o.greyMask,";transition:all ").concat(o.duration,";"))},null,4)],512),Object(c["h"])("p",Ee,Object(c["J"])(n.currentQuestion.instruction),1)]),(Object(c["y"])(),Object(c["g"])("svg",Ie,[Object(c["h"])("filter",Qe,[Object(c["h"])("feTurbulence",Be,null,512),Ne])]))],4)}n("d3b7"),n("25f0");var Xe=n("f148"),Fe={name:"fourtyk-q7",components:{SvgIcon:Y["a"],VideoBox:L},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e){var t,n,o,r={animation:"mainlogo 0.8s infinite alternate"},a=Object(c["D"])(null),i=1,u=Math.PI/180,s=e.currentQuestion.id,l=e.questionChoices,d=Object(c["c"])((function(){return"linear-gradient(\n          0,\n          rgba(229, 23, 49, 1),\n          rgba(229, 23, 49, 0.9) ".concat(y.redOffset,"%,\n          transparent ").concat(y.transparentOffsetY,"%\n        );")})),b=Object(c["c"])((function(){return"linear-gradient(\n           180deg,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.9) ".concat(y.greyOffset,"%,\n          transparent ").concat(y.transparentOffsetYGrey,"%\n        );")})),f=Object(c["c"])((function(){return"".concat(y.duration,"ms")})),h=Object(Xe["a"])("v",s,l),p=h.swipeOne,O=h.swipeTwo,v=h.onMiddleTouchStart,j=h.onMiddleTouchMove,m=h.onMiddleTouchEnd,g=h.iconTransform,y=h.maskTransform;function q(){i+=.35,n=.035,o=.015,n+=.01*Math.cos(i*u),o+=.009*Math.sin(i*u),t=n.toString()+" "+o.toString(),a.value.setAttributeNS(null,"baseFrequency",t),window.requestAnimationFrame(q)}return Object(c["w"])((function(){window.requestAnimationFrame(q)})),{animation:r,swipeOne:p,swipeTwo:O,onMiddleTouchStart:v,onMiddleTouchMove:j,onMiddleTouchEnd:m,iconTransform:g,turbulence:a,maskTransform:y,maskValue:d,greyMask:b,duration:f}}};n("7711");const Le=p()(Fe,[["render",ze],["__scopeId","data-v-3ed078e8"]]);var Ye=Le,De=n("be84"),Ge={name:"40k-question",components:{FourtykQ1:v,FourtykQ2:w,FourtykQ3:U,FourtykQ4:te,FourtykQ5:de,FourtykQ6:ke,FourtykQ7:Ye},setup:function(){var e=Object(De["a"])(),t=e.questionId,n=e.questionBackground,c=e.currentQuestion,o=e.updateParams,r=e.store;return{questionId:t,questionBackground:n,currentQuestion:c,updateParams:o,store:r}}};const Ue=p()(Ge,[["render",o]]);t["default"]=Ue},"4b19":function(e,t,n){"use strict";n("0ea8")},"60fe":function(e,t,n){"use strict";n("eb62")},"622f":function(e,t,n){},6556:function(e,t,n){"use strict";n("be39")},7711:function(e,t,n){"use strict";n("ad20")},"7a38":function(e,t,n){},"81d5":function(e,t,n){"use strict";var c=n("7b0b"),o=n("23cb"),r=n("07fa");e.exports=function(e){var t=c(this),n=r(t),a=arguments.length,i=o(a>1?arguments[1]:void 0,n),u=a>2?arguments[2]:void 0,s=void 0===u?n:o(u,n);while(s>i)t[i++]=e;return t}},9333:function(e,t,n){"use strict";n("622f")},a144:function(e,t,n){},ad20:function(e,t,n){},b0c0:function(e,t,n){var c=n("83ab"),o=n("5e77").EXISTS,r=n("e330"),a=n("9bf2").f,i=Function.prototype,u=r(i.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=r(s.exec),d="name";c&&!o&&a(i,d,{configurable:!0,get:function(){try{return l(s,u(this))[1]}catch(e){return""}}})},b4c2:function(e,t,n){},be39:function(e,t,n){},cb29:function(e,t,n){var c=n("23e7"),o=n("81d5"),r=n("44d2");c({target:"Array",proto:!0},{fill:o}),r("fill")},eb62:function(e,t,n){},f148:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("a9e3");var c=n("7a23"),o=n("6c02"),r=n("bbd5"),a=n("1da1"),i=(n("96cf"),n("26b3")),u=n("aaef"),s=n("335a");function l(e,t){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])("/user_quizzes",{user_quiz:{category_id:t}},n);case 2:c=e.sent,s["a"].session.set(u["a"],c.id),console.log(c);case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}var b=n("1caf"),f=n("5502"),h=n("032f");function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"h",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Object(h["b"])(),i=a.getCookie(u["c"]),d=Object(r["b"])(),p=Object(c["D"])(null),O=Object(c["D"])(null),v=Object(c["D"])(null),j=Object(c["C"])({left:!1,right:!1}),m=Object(c["C"])({transparentOffset:60,transparentOffsetY:55,transparentOffsetYGrey:55,redOffset:25,greyOffset:25,blkOffset:45,duration:0}),g=Object(o["e"])(),y=Object(f["e"])(),q={};function T(e){d?(q.startX=e.touches[0].pageX,q.startY=e.touches[0].pageY):(q.startX=e.pageX,q.startY=e.pageY),q.directionLocked=""}function k(t){var n,c;q.directionLocked="h"===e?"h":"v",d?(n=t.touches[0].pageX-q.startX,c=t.touches[0].pageY-q.startY):(n=t.pageX-q.startX,c=t.pageY-q.startY),"v"===q.directionLocked?C(c):w(n)}function M(){"v"===q.directionLocked?x():S()}function w(e){e>0?(q.percentX=e/q.widthL,j.right=!0,j.left=!1):(q.percentX=e/q.widthR,j.left=!0,j.right=!1),v.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"0ms"},m.blkOffset=45-.45*q.percentX*100,m.transparentOffset=60-.4*q.percentX*100,m.duration=0}function C(e){e>0?(q.percentY=e/q.heightB,m.greyOffset=Math.max(25+.25*q.percentY*100,25),m.transparentOffsetYGrey=Math.max(55+.45*q.percentY*100,55)):(q.percentY=e/q.heightT,m.redOffset=Math.max(25-.25*q.percentY*100,25),m.transparentOffsetY=Math.max(55-.45*q.percentY*100,55)),v.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"0ms"},m.duration=0}function S(){if(Math.abs(q.percentX)<.95){var e=0;j.left=!1,j.right=!1,v.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"300ms"},m.transparentOffset=60,m.blkOffset=45,m.duration=300}else s["a"].session.set("__currentquiz__",1),q.percentX>0?(l(1,i),y.commit("setCategory","40k"),g.push({path:"/questions/40k/1"})):(l(2,i),y.commit("setCategory","aos"),g.push({path:"/questions/aos/1"}))}function x(){if(Math.abs(q.percentY)<.95){var e=0;v.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"300ms"},m.transparentOffsetY=55,m.transparentOffsetYGrey=55,m.redOffset=25,m.greyOffset=25,m.duration=300}else q.percentY<0?Object(b["a"])({questionId:t,choiceId:n[0].id},i):Object(b["a"])({questionId:t,choiceId:n[1].id},i),s["a"].session.set("__currentquiz__",7),g.push({path:"/reveal"})}return Object(c["w"])((function(){q.widthL=Number(Object(r["c"])(getComputedStyle(p.value).width,0,-2)),q.widthR=Number(Object(r["c"])(getComputedStyle(O.value).width,0,-2)),q.heightT=Number(Object(r["c"])(getComputedStyle(p.value).height,0,-2)),q.heightB=Number(Object(r["c"])(getComputedStyle(O.value).height,0,-2))})),{onMiddleTouchStart:T,onMiddleTouchMove:k,onMiddleTouchEnd:M,iconTransform:v,swipeOne:p,swipeTwo:O,maskTransform:m,beatAnimate:j}}},f1da:function(e,t,n){},f291:function(e,t,n){},fcc1:function(e,t,n){"use strict";n("f291")}}]);
//# sourceMappingURL=chunk-75fae9c2.cc5b28e5.js.map