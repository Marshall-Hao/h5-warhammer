(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cce31b1c"],{"0213":function(e,t,n){"use strict";n("cb29");var c=n("7a23"),a={class:"icon"},o=["href","fill","stroke"];function r(e,t,n,r,i,s){return Object(c["A"])(),Object(c["g"])("svg",a,[Object(c["h"])("use",{href:r.iconName,style:Object(c["r"])(n.duration),fill:n.fill,stroke:n.stroke},null,12,o)])}n("a9e3"),n("99af"),n("b0c0");var i={name:"svg-icon",props:{name:[Number,String],prefix:{type:String,default:"war-q3"},duration:{type:Object,default:{animation:"logo3 3s infinite alternate"}},fill:{type:String,default:"black"},stroke:{type:String,default:"rgba(72, 138, 20, 0)"}},setup:function(e){var t="#".concat(e.prefix).concat(e.name);return{iconName:t}}},s=(n("1a6b"),n("d959")),u=n.n(s);const l=u()(i,[["render",r],["__scopeId","data-v-5e6389d3"]]);t["a"]=l},1249:function(e,t,n){},"1a6b":function(e,t,n){"use strict";n("4f55")},"1c02":function(e,t,n){"use strict";n("99af");var c=n("7a23"),a=function(e){return Object(c["D"])("data-v-5838054c"),e=e(),Object(c["B"])(),e},o={class:"fly-box",ref:"flyBoxRef"},r=["width","height","viewBox"],i=["id","d"],s=["id"],u=["fill"],l=["dur","path"],d=["id"],f=a((function(){return Object(c["h"])("stop",{offset:"0","stop-color":"#fff","stop-opacity":"1"},null,-1)})),b=a((function(){return Object(c["h"])("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)})),h=[f,b],p=["href","stroke"],v=["href","stroke","mask"],O={class:"fly-box-content"};function m(e,t,n,a,f,b){return Object(c["A"])(),Object(c["g"])("div",o,[(Object(c["A"])(),Object(c["g"])("svg",{width:a.width,height:a.height,viewBox:"0 0 ".concat(a.width," ").concat(a.height)},[Object(c["h"])("defs",null,[Object(c["h"])("path",{id:a.pathId,d:a.path,fill:"none"},null,8,i),Object(c["h"])("mask",{id:a.maskId},[Object(c["h"])("circle",{r:"50",cx:"0",cy:"0",fill:"url(#".concat(a.radialId,")")},[Object(c["h"])("animateMotion",{dur:"".concat(n.duration,"s"),path:a.path,rotate:"auto",repeatCount:"indefinite"},null,8,l)],8,u)],8,s),Object(c["h"])("radialGradient",{id:a.radialId,cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},h,8,d)]),Object(c["h"])("use",{href:"#".concat(a.pathId),"stroke-width":"1",stroke:n.lineColor},null,8,p),Object(c["h"])("use",{href:"#".concat(a.pathId),"stroke-width":"3",stroke:n.starColor,mask:"url(#".concat(a.maskId,")")},null,8,v)],8,r)),Object(c["h"])("div",O,[Object(c["H"])(e.$slots,"default",{},void 0,!0)])],512)}n("a9e3");var g,j=new Uint8Array(16);function y(){if(!g&&(g="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(j)}var q=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function T(e){return"string"===typeof e&&q.test(e)}for(var k=T,M=[],w=0;w<256;++w)M.push((w+256).toString(16).substr(1));function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(M[e[t+0]]+M[e[t+1]]+M[e[t+2]]+M[e[t+3]]+"-"+M[e[t+4]]+M[e[t+5]]+"-"+M[e[t+6]]+M[e[t+7]]+"-"+M[e[t+8]]+M[e[t+9]]+"-"+M[e[t+10]]+M[e[t+11]]+M[e[t+12]]+M[e[t+13]]+M[e[t+14]]+M[e[t+15]]).toLowerCase();if(!k(n))throw TypeError("Stringified UUID is invalid");return n}var x=C;function S(e,t,n){e=e||{};var c=e.random||(e.rng||y)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=c[a];return t}return x(c)}var I=S,_={name:"fly-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2}},setup:function(){var e=Object(c["F"])(0),t=Object(c["F"])(0),n=Object(c["F"])(null),a=I(),o="fly-box-path-".concat(a),r="radial-graident-".concat(a),i="fly-box-mask-".concat(a),s=Object(c["c"])((function(){return"M5 5 L".concat(e.value-5," 5 L").concat(e.value-5," ").concat(t.value-5," L5 ").concat(t.value-5," Z")}));function u(){var c=n.value;e.value=c.clientWidth,t.value=c.clientHeight}return Object(c["z"])((function(){u()})),Object(c["x"])((function(){u()})),{width:e,height:t,path:s,flyBoxRef:n,pathId:o,radialId:r,maskId:i}}},A=(n("5314"),n("d959")),L=n.n(A);const B=L()(_,[["render",m],["__scopeId","data-v-5838054c"]]);t["a"]=B},4303:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function a(e,t,n,a,o,r){return Object(c["A"])(),Object(c["e"])(Object(c["J"])("fourtyk-q".concat(a.questionId)),{currentQuestion:a.currentQuestion,questionBackground:a.questionBackground,questionText:a.currentQuestion&&a.currentQuestion.text,questionChoices:a.currentQuestion&&a.currentQuestion.choices,onUpdateParams:a.updateParams},null,8,["currentQuestion","questionBackground","questionText","questionChoices","onUpdateParams"])}var o={class:"q1"},r={class:"q1-title"},i={class:"q1-section"},s={class:"q1-section-choices"},u=["onTouchstart"],l=["onClick","onMouseenter","onMousemove","onMousedown"],d=Object(c["i"])('<svg width="0" height="0" data-v-a37e9974><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-a37e9974><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-a37e9974></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="200" data-v-a37e9974><animate id="scale1" attributeName="scale" attributeType="XML" from="200" to="10" dur="2s" fill="freeze" begin="0; scale3.end" data-v-a37e9974></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="10" to="1" dur="2.5s" fill="freeze" begin="scale1.end" data-v-a37e9974></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="1" to="200" dur="2s" fill="freeze" begin="scale2.end" data-v-a37e9974></animate></feDisplacementMap></filter></svg>',1);function f(e,t,n,a,f,b){return Object(c["A"])(),Object(c["g"])("div",o,[Object(c["h"])("div",{class:"q1-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",r,Object(c["L"])(n.questionText),1),Object(c["h"])("section",i,[Object(c["h"])("div",s,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,class:Object(c["q"])({"selected-q":a.selected===t}),style:Object(c["r"])("background-image:url(".concat(e.image,")")),onTouchstart:function(e){return a.choiceTouchMove(t)}},[Object(c["h"])("div",{onClick:Object(c["T"])((function(t){return a.choiceTouchEnd(e.id)}),["prevent"]),onMouseenter:Object(c["T"])((function(e){return a.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return a.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return a.choiceTouchEnd(e.id)}},null,40,l)],46,u)})),128))])]),d])}var b=n("ef6d"),h={name:"fourtyk-q1",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,a=Object(b["a"])(n,c),o=a.choiceTouchMove,r=a.choiceTouchEnd,i=a.choiceTouchStart,s=a.selected;return{choiceTouchMove:o,choiceTouchEnd:r,choiceTouchStart:i,selected:s}}},p=(n("6c86"),n("d959")),v=n.n(p);const O=v()(h,[["render",f],["__scopeId","data-v-a37e9974"]]);var m=O,g={class:"q2"},j={class:"q2-title"},y={class:"q2-section"},q={class:"q2-section-choices"},T=["onTouchmove","onClick","onMouseenter","onMousemove","onMousedown"];function k(e,t,n,a,o,r){return Object(c["A"])(),Object(c["g"])("div",g,[Object(c["h"])("div",{class:"q2-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("h1",j,Object(c["L"])(n.questionText),1),Object(c["h"])("section",y,[Object(c["h"])("div",q,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{ref_for:!0,ref:"q",key:e,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),onTouchmove:Object(c["T"])((function(e){return a.choiceTouchMove(t)}),["prevent"]),onClick:function(t){return a.choiceTouchEnd(e.id)},onMouseenter:Object(c["T"])((function(e){return a.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return a.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return a.choiceTouchEnd(e.id)}},[Object(c["h"])("div",{class:Object(c["q"])(["q2-section-choices-mask",{"selected-q":a.selected===t}])},null,2)],44,T)})),128))])])])}var M={name:"fourtyk-q2",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,a=Object(b["a"])(n,c),o=a.choiceTouchMove,r=a.choiceTouchEnd,i=a.choiceTouchStart,s=a.selected;return{choiceTouchMove:o,choiceTouchEnd:r,choiceTouchStart:i,selected:s}}};n("5c8d");const w=v()(M,[["render",k]]);var C=w,x={class:"q3"},S={class:"q3-section"},I={class:"q3-section-video"},_={class:"q3-section-title"},A={class:"q3-section-choices"},L=["onTouchmove","onClick","onMouseenter","onMousemove","onMousedown"],B=Object(c["i"])('<svg width="0" height="0" data-v-618d99f7><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-618d99f7><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-618d99f7></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="10" data-v-618d99f7><animate id="scale1" attributeName="scale" attributeType="XML" from="50" to="5" dur="2s" fill="freeze" begin="0; scale3.end" data-v-618d99f7></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="5" to="0" dur="2.5s" fill="freeze" begin="scale1.end" data-v-618d99f7></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="0" to="50" dur="2s" fill="freeze" begin="scale2.end" data-v-618d99f7></animate></feDisplacementMap></filter></svg>',1);function N(e,t,n,a,o,r){var i=Object(c["I"])("video-box"),s=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",x,[Object(c["h"])("div",{class:"q3-background",style:Object(c["r"])(n.questionBackground)},null,4),Object(c["h"])("div",S,[Object(c["h"])("div",I,[Object(c["k"])(i,{lineColor:"rgb(67,80,102)",starColor:"#BC3F2F",duration:"5",style:Object(c["r"])({transform:"scale(1.115,1.19)"}),posterUrl:n.currentQuestion.instruction_image},null,8,["lineColor","style","posterUrl"])]),Object(c["h"])("h1",_,Object(c["L"])(n.questionText),1),Object(c["h"])("div",A,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:Object(c["q"])(["q3-section-choice",{"selected-q":a.selected===t}]),onTouchmove:Object(c["T"])((function(e){return a.choiceTouchMove(t)}),["prevent"]),onClick:function(t){return a.choiceTouchEnd(e.id)},onMouseenter:Object(c["T"])((function(e){return a.choiceTouchStart(t)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return a.choiceTouchMove(t)}),["prevent"]),onMousedown:function(t){return a.choiceTouchEnd(e.id)}},[Object(c["k"])(s,{name:t+1,duration:{}},null,8,["name"])],42,L)})),128))])]),B])}var F=["src"];function Q(e,t,n,a,o,r){var i=Object(c["I"])("fly-box");return Object(c["A"])(),Object(c["e"])(i,{lineColor:n.lineColor,starColor:n.starColor,duration:n.duration},{default:Object(c["R"])((function(){return[Object(c["h"])("img",{src:n.posterUrl,style:Object(c["r"])(n.style)},null,12,F)]})),_:1},8,["lineColor","starColor","duration"])}n("a9e3");var X=n("1c02"),E={name:"video-box",props:{lineColor:{type:String,default:"#235fa7"},starColor:{type:String,default:"#4fd2dd"},duration:{type:[String,Number],default:2},posterUrl:String,style:{type:Object,default:{transform:"scale(1.112, 1.1)"}}},components:{FlyBox:X["a"]}};n("9333");const z=v()(E,[["render",Q],["__scopeId","data-v-db8ca160"]]);var Y=z,G=n("0213"),P={name:"fourtyk-q3",components:{VideoBox:Y,SvgIcon:G["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,c=e.currentQuestion.id,a=Object(b["a"])(n,c),o=a.choiceTouchMove,r=a.choiceTouchEnd,i=a.choiceTouchStart,s=a.selected;return{choiceTouchMove:o,choiceTouchEnd:r,choiceTouchStart:i,selected:s}}};n("9415");const D=v()(P,[["render",N],["__scopeId","data-v-618d99f7"]]);var U=D,R={class:"q4"},V={class:"q4-bg"},W=Object(c["i"])('<div class="q4-intro" data-v-134a329c><p data-v-134a329c>Press</p><div data-v-134a329c><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-134a329c><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-134a329c><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-134a329c></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-134a329c></animate></polyline></svg><svg width="16.5" height="30" viewBox="0 0 110 200" data-v-134a329c><polyline points="100 0, 0 100, 100 200,110 190,25 100, 110 10 " fill="rgb(255, 255, 255)" stroke-linecap="round" data-v-134a329c><animate id="l41" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255,0.9)" to="rgb(255, 255, 255)" dur="2s" begin="0; l42.end" data-v-134a329c></animate><animate id="l42" attributeName="fill" attributeType="XML" from="rgb(255, 255, 255)" to="rgb(255, 255, 255,0.9)" dur="2s" begin="l41.end" data-v-134a329c></animate></polyline></svg></div></div>',1),$=Object(c["i"])('<svg width="0" height="0" data-v-134a329c><filter id="fractal" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%" data-v-134a329c><feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.032 0.02" numOctaves="1" data-v-134a329c><animate id="wave1" attributeName="baseFrequency" attributeType="XML" from="0.032 0.02" to="0.022 0.01" dur="3.5s" fill="freeze" begin="0; wave2.end" data-v-134a329c></animate><animate id="wave2" attributeName="baseFrequency" attributeType="XML" from="0.022 0.01" to="0.032 0.02" dur="3.5s" fill="freeze" begin="wave1.end" data-v-134a329c></animate></feTurbulence><feDisplacementMap in="SourceGraphic" scale="15" data-v-134a329c></feDisplacementMap></filter></svg>',1);function J(e,t,n,a,o,r){var i=Object(c["I"])("LuckyWheel");return Object(c["A"])(),Object(c["g"])("div",R,[Object(c["h"])("div",V,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("div",{key:e,style:Object(c["r"])({backgroundImage:"url(".concat(e.image,")")}),class:Object(c["q"])({"selected-q":o.selected===t})},null,6)})),128))]),W,Object(c["k"])(i,{class:"q4-luckwheel",ref:"myLucky",width:"400px",height:"400px",prizes:o.prizes,blocks:o.blocks,defaultConfig:o.defaultConfig,onEnd:r.endCallback},null,8,["prizes","blocks","defaultConfig","onEnd"]),Object(c["h"])("div",{class:"q4-button",onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return r.startWheel&&r.startWheel.apply(r,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return r.startWheel&&r.startWheel.apply(r,arguments)})},null,32),$])}n("caad"),n("2532");var H=n("1caf"),Z=n("aaef"),K=n("335a"),ee=n("6c02"),te={name:"fourtyk-q4",data:function(){return{blocks:[{padding:"0px"},{padding:"0px",imgs:[{src:this.currentQuestion.selector_image,top:"26",width:"80%",rotate:!0}]}],prizes:[{title:"0"},{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},{title:"11"}],defaultConfig:{speed:20},choice1:["1","2","3"],choice2:["0","11","10"],choice3:["4","5","6"],choice4:["7","8","9"],selected:""}},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],methods:{startWheel:function(){var e=this;this.$refs.myLucky.play(),setTimeout((function(){var t=Math.floor(11*Math.random());e.$refs.myLucky.stop(t)}),4e3)},endCallback:function(e){var t,n=this.$cookie.getCookie(Z["c"]),c=e.title,a=this.currentQuestion.id;this.choice1.includes(c)?(t=this.questionChoices[0].id,this.selected=0):this.choice2.includes(c)?(t=this.questionChoices[1].id,this.selected=1):this.choice3.includes(c)?(t=this.questionChoices[2].id,this.selected=2):(t=this.questionChoices[3].id,this.selected=3),this.$emit("updateParams",5),Object(H["a"])({questionId:a,choiceId:t},n),this.goNextPage()},goNextPage:function(){var e=this;K["a"].session.set("__currentquiz__",4),setTimeout((function(){e.$router.push({path:"/questions/40k/5"})}),1e3)}},setup:function(){var e=Object(ee["d"])(),t=Object(ee["e"])();Object(ee["c"])((function(){var n=K["a"].session.get("__currentquiz__");console.log(Number(e.params.id),n),Number(e.params.id)>n&&t.push({path:"/questions/40k/".concat(n+1)})}))}};n("6508");const ne=v()(te,[["render",J],["__scopeId","data-v-134a329c"]]);var ce=ne,ae={class:"q5"},oe={class:"q5-title"},re={class:"q5-select"},ie=["onTouchstart","onMousedown"];function se(e,t,n,a,o,r){var i=Object(c["I"])("scene");return Object(c["A"])(),Object(c["g"])("div",ae,[Object(c["h"])("div",oe,Object(c["L"])(n.questionText),1),Object(c["k"])(i,{scene:a.scene},null,8,["scene"]),Object(c["h"])("div",{class:"q5-confirm",onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return a.next&&a.next.apply(a,arguments)}),["prevent"])),onMousedown:t[1]||(t[1]=function(){return a.next&&a.next.apply(a,arguments)})}," confirm ",32),Object(c["h"])("ul",re,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,t){return Object(c["A"])(),Object(c["g"])("li",{key:e,class:Object(c["q"])({"select-q":a.selected===t}),onTouchstart:Object(c["T"])((function(n){return a.changeScene(e,t)}),["prevent"]),onMousedown:function(n){return a.changeScene(e,t)}},Object(c["L"])(t+1),43,ie)})),128))])])}var ue=n("bece"),le=n("539c"),de={name:"fourtyk-q5",components:{Scene:ue["a"]},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},setup:function(e){var t=e.currentQuestion.id,n=e.questionChoices[0].image,c=e.questionChoices[0].id,a=Object(le["a"])(t,n,c),o=a.changeScene,r=a.next,i=a.scene,s=a.selected;return{changeScene:o,next:r,scene:i,selected:s}}};n("bf86");const fe=v()(de,[["render",se],["__scopeId","data-v-567b0283"]]);var be=fe,he=function(e){return Object(c["D"])("data-v-db0af298"),e=e(),Object(c["B"])(),e},pe={class:"q6-title"},ve={class:"q6-section"},Oe=["onClick","onTouchmove","onMouseenter","onMousemove"],me=he((function(){return Object(c["h"])("div",{class:"q6-card-front-content"},[Object(c["h"])("div",{class:"q6-card-front-btn"},"Flip")],-1)})),ge=[me],je={class:"q6-text"},ye=Object(c["i"])('<svg width="0" height="0" data-v-db0af298><filter id="fractal2" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%" data-v-db0af298><feTurbulence type="fractalNoise" baseFrequency="0.995" numOctaves="10" seed="1" result="img" data-v-db0af298></feTurbulence><feDisplacementMap in="SourceGraphic" in2="img" xChannelSelector="R" yChannelSelector="G" scale="10" data-v-db0af298><animate id="scale1" attributeName="scale" attributeType="XML" from="10" to="5" dur="2s" fill="freeze" begin="0; scale3.end" data-v-db0af298></animate><animate id="scale2" attributeName="scale" attributeType="XML" from="5" to="0" dur="2.5s" fill="freeze" begin="scale1.end" data-v-db0af298></animate><animate id="scale3" attributeName="scale" attributeType="XML" from="0" to="10" dur="2s" fill="freeze" begin="scale2.end" data-v-db0af298></animate></feDisplacementMap></filter></svg><svg width="0" height="0" data-v-db0af298><filter id="fractal" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%" data-v-db0af298><feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.032 0.02" numOctaves="1" data-v-db0af298><animate id="wave1" attributeName="baseFrequency" attributeType="XML" from="0.032 0.02" to="0.022 0.01" dur="3.5s" fill="freeze" begin="0; wave2.end" data-v-db0af298></animate><animate id="wave2" attributeName="baseFrequency" attributeType="XML" from="0.022 0.01" to="0.032 0.02" dur="3.5s" fill="freeze" begin="wave1.end" data-v-db0af298></animate></feTurbulence><feDisplacementMap in="SourceGraphic" scale="15" data-v-db0af298></feDisplacementMap></filter></svg>',2);function qe(e,t,n,a,o,r){return Object(c["A"])(),Object(c["g"])("div",{class:"q6",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",pe,Object(c["L"])(n.questionText),1),Object(c["h"])("div",ve,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e,n){return Object(c["A"])(),Object(c["g"])("div",{key:e,class:"q6-card",onClick:function(t){return a.flipCard(n,e.id)},onTouchmove:Object(c["T"])((function(e){return a.choiceTouchMove(n)}),["prevent"]),onMouseenter:Object(c["T"])((function(t){return a.flipCard(n,e.id)}),["prevent"]),onMousemove:Object(c["T"])((function(e){return a.choiceTouchMove(n)}),["prevent"])},[Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-back",{"back-flip":a.flip===n}]),style:Object(c["r"])({background:"url(".concat(e.image,")"),backgroundSize:"cover"}),onTouchend:t[0]||(t[0]=Object(c["T"])((function(){return a.backPos&&a.backPos.apply(a,arguments)}),["prevent"])),onMouseleave:t[1]||(t[1]=function(){return a.backPos&&a.backPos.apply(a,arguments)})},null,38),Object(c["h"])("div",{class:Object(c["q"])(["q6-card-side q6-card-front",{"front-flip":a.flip===n}])},ge,2)],40,Oe)})),128))]),Object(c["h"])("p",je,Object(c["L"])(n.currentQuestion.instruction),1),ye],4)}var Te={name:"fourtyk-q6",props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e,t){var n=t.emit,a=e.currentQuestion.id,o=Object(c["F"])(null),r=Object(b["a"])(n,a),i=r.choiceTouchMove,s=r.choiceTouchEnd;function u(e,t){s(t),o.value=e}function l(){o.value=null}return{flip:o,flipCard:u,backPos:l,choiceTouchMove:i}}};n("a886");const ke=v()(Te,[["render",qe],["__scopeId","data-v-db0af298"]]);var Me=ke,we=(n("99af"),function(e){return Object(c["D"])("data-v-80dcf2fe"),e=e(),Object(c["B"])(),e}),Ce={class:"q7-title"},xe={class:"q7-section"},Se={class:"q7-progress"},Ie={class:"q7-progress-top",ref:"swipeOne"},_e={class:"q7-progress-eagle"},Ae={class:"q7-progress-bottom",ref:"swipeTwo"},Le={class:"q7-progress-instruction"},Be={width:"0",height:"0"},Ne={id:"smoke"},Fe={ref:"turbulence",id:"turbulence",type:"fractalNoise",baseFrequency:".03",numOctaves:"20"},Qe=we((function(){return Object(c["h"])("feDisplacementMap",{in:"SourceGraphic",scale:"30"},null,-1)}));function Xe(e,t,n,a,o,r){var i=Object(c["I"])("video-box"),s=Object(c["I"])("svg-icon");return Object(c["A"])(),Object(c["g"])("div",{class:"q7",style:Object(c["r"])(n.questionBackground)},[Object(c["h"])("h1",Ce,Object(c["L"])(n.questionText),1),Object(c["h"])("div",xe,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(n.questionChoices,(function(e){return Object(c["A"])(),Object(c["g"])("div",{class:"q7-section-option",key:e},[Object(c["k"])(i,{posterUrl:e.image,duration:4,starColor:"#BC3F2F",lineColor:"#65798b"},null,8,["posterUrl"])])})),128))]),Object(c["h"])("div",Se,[Object(c["h"])("div",Ie,[Object(c["h"])("div",{class:"q7-progress-top-mask",style:Object(c["r"])("background: ".concat(a.maskValue,";transition:all ").concat(a.duration,";"))},null,4)],512),Object(c["h"])("div",{class:"q7-progress-container",style:Object(c["r"])(a.iconTransform),onTouchstart:t[0]||(t[0]=Object(c["T"])((function(){return a.onMiddleTouchStart&&a.onMiddleTouchStart.apply(a,arguments)}),["prevent"])),onTouchmove:t[1]||(t[1]=Object(c["T"])((function(){return a.onMiddleTouchMove&&a.onMiddleTouchMove.apply(a,arguments)}),["prevent"])),onTouchend:t[2]||(t[2]=Object(c["T"])((function(){return a.onMiddleTouchEnd&&a.onMiddleTouchEnd.apply(a,arguments)}),["prevent"])),onMouseenter:t[3]||(t[3]=Object(c["T"])((function(){return a.onMiddleTouchStart&&a.onMiddleTouchStart.apply(a,arguments)}),["prevent"])),onMousemove:t[4]||(t[4]=Object(c["T"])((function(){return a.onMiddleTouchMove&&a.onMiddleTouchMove.apply(a,arguments)}),["prevent"])),onMouseleave:t[5]||(t[5]=function(){return a.onMiddleTouchEnd&&a.onMiddleTouchEnd.apply(a,arguments)})},[Object(c["h"])("div",_e,[Object(c["k"])(s,{name:3,fill:"#fff",duration:a.animation},null,8,["duration"])])],36),Object(c["h"])("div",Ae,[Object(c["h"])("div",{class:"q7-progress-bottom-mask",style:Object(c["r"])("background: ".concat(a.greyMask,";transition:all ").concat(a.duration,";"))},null,4)],512),Object(c["h"])("p",Le,Object(c["L"])(n.currentQuestion.instruction),1)]),(Object(c["A"])(),Object(c["g"])("svg",Be,[Object(c["h"])("filter",Ne,[Object(c["h"])("feTurbulence",Fe,null,512),Qe])]))],4)}n("d3b7"),n("25f0");var Ee=n("f148"),ze={name:"fourtyk-q7",components:{SvgIcon:G["a"],VideoBox:Y},props:{currentQuestion:Object,questionBackground:Object,questionText:String,questionChoices:Array},emits:["updateParams"],setup:function(e){var t,n,a,o={animation:"mainlogo 0.8s infinite alternate"},r=Object(c["F"])(null),i=1,s=Math.PI/180,u=e.currentQuestion.id,l=e.questionChoices,d=Object(c["c"])((function(){return"linear-gradient(\n          0,\n          rgba(229, 23, 49, 1),\n          rgba(229, 23, 49, 0.9) ".concat(y.redOffset,"%,\n          transparent ").concat(y.transparentOffsetY,"%\n        );")})),f=Object(c["c"])((function(){return"linear-gradient(\n           180deg,\n          rgb(222, 210, 233),\n          rgba(222, 210, 233, 0.9) ".concat(y.greyOffset,"%,\n          transparent ").concat(y.transparentOffsetYGrey,"%\n        );")})),b=Object(c["c"])((function(){return"".concat(y.duration,"ms")})),h=Object(Ee["a"])("v",u,l),p=h.swipeOne,v=h.swipeTwo,O=h.onMiddleTouchStart,m=h.onMiddleTouchMove,g=h.onMiddleTouchEnd,j=h.iconTransform,y=h.maskTransform;function q(){i+=.35,n=.035,a=.015,n+=.01*Math.cos(i*s),a+=.009*Math.sin(i*s),t=n.toString()+" "+a.toString(),r.value.setAttributeNS(null,"baseFrequency",t),window.requestAnimationFrame(q)}return Object(c["x"])((function(){window.requestAnimationFrame(q)})),{animation:o,swipeOne:p,swipeTwo:v,onMiddleTouchStart:O,onMiddleTouchMove:m,onMiddleTouchEnd:g,iconTransform:j,turbulence:r,maskTransform:y,maskValue:d,greyMask:f,duration:b}}};n("793d");const Ye=v()(ze,[["render",Xe],["__scopeId","data-v-80dcf2fe"]]);var Ge=Ye,Pe=n("be84"),De={name:"40k-question",components:{FourtykQ1:m,FourtykQ2:C,FourtykQ3:U,FourtykQ4:ce,FourtykQ5:be,FourtykQ6:Me,FourtykQ7:Ge},setup:function(){var e=Object(Pe["a"])(),t=e.questionId,n=e.questionBackground,c=e.currentQuestion,a=e.updateParams,o=e.store;return{questionId:t,questionBackground:n,currentQuestion:c,updateParams:a,store:o}}};const Ue=v()(De,[["render",a]]);t["default"]=Ue},"4f55":function(e,t,n){},5314:function(e,t,n){"use strict";n("8e94")},"5c8d":function(e,t,n){"use strict";n("9809")},"622f":function(e,t,n){},6508:function(e,t,n){"use strict";n("ffb7")},"6c86":function(e,t,n){"use strict";n("7ad8")},"793d":function(e,t,n){"use strict";n("a6a3")},"7ad8":function(e,t,n){},"81d5":function(e,t,n){"use strict";var c=n("7b0b"),a=n("23cb"),o=n("07fa");e.exports=function(e){var t=c(this),n=o(t),r=arguments.length,i=a(r>1?arguments[1]:void 0,n),s=r>2?arguments[2]:void 0,u=void 0===s?n:a(s,n);while(u>i)t[i++]=e;return t}},8256:function(e,t,n){},"8e94":function(e,t,n){},9333:function(e,t,n){"use strict";n("622f")},9415:function(e,t,n){"use strict";n("dbde")},9809:function(e,t,n){},a6a3:function(e,t,n){},a886:function(e,t,n){"use strict";n("1249")},b0c0:function(e,t,n){var c=n("83ab"),a=n("5e77").EXISTS,o=n("e330"),r=n("9bf2").f,i=Function.prototype,s=o(i.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),d="name";c&&!a&&r(i,d,{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(e){return""}}})},bf86:function(e,t,n){"use strict";n("8256")},cb29:function(e,t,n){var c=n("23e7"),a=n("81d5"),o=n("44d2");c({target:"Array",proto:!0},{fill:a}),o("fill")},dbde:function(e,t,n){},f148:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("a9e3");var c=n("7a23"),a=n("6c02"),o=n("bbd5"),r=n("1da1"),i=(n("96cf"),n("26b3")),s=n("aaef"),u=n("335a");function l(e,t){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])("/user_quizzes",{user_quiz:{category_id:t}},n);case 2:c=e.sent,u["a"].session.set(s["a"],c.id),console.log(c);case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}var f=n("1caf"),b=n("5502"),h=n("032f");function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"h",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(h["b"])(),i=r.getCookie(s["c"]),d=Object(o["b"])(),p=Object(c["F"])(null),v=Object(c["F"])(null),O=Object(c["F"])(null),m=Object(c["E"])({left:!1,right:!1}),g=Object(c["E"])({transparentOffset:60,transparentOffsetY:55,transparentOffsetYGrey:55,redOffset:25,greyOffset:25,blkOffset:45,duration:0}),j=Object(a["e"])(),y=Object(b["e"])(),q={};function T(e){d?(q.startX=e.touches[0].pageX,q.startY=e.touches[0].pageY):(q.startX=e.pageX,q.startY=e.pageY),q.directionLocked=""}function k(t){var n,c;q.directionLocked="h"===e?"h":"v",d?(n=t.touches[0].pageX-q.startX,c=t.touches[0].pageY-q.startY):(n=t.pageX-q.startX,c=t.pageY-q.startY),"v"===q.directionLocked?C(c):w(n)}function M(){"v"===q.directionLocked?S():x()}function w(e){e>0?(q.percentX=e/q.widthL,m.right=!0,m.left=!1):(q.percentX=e/q.widthR,m.left=!0,m.right=!1),O.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"0ms"},g.blkOffset=45-.45*q.percentX*100,g.transparentOffset=60-.4*q.percentX*100,g.duration=0}function C(e){e>0?(q.percentY=e/q.heightB,g.greyOffset=Math.max(25+.25*q.percentY*100,25),g.transparentOffsetYGrey=Math.max(55+.45*q.percentY*100,55)):(q.percentY=e/q.heightT,g.redOffset=Math.max(25-.25*q.percentY*100,25),g.transparentOffsetY=Math.max(55-.45*q.percentY*100,55)),O.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"0ms"},g.duration=0}function x(){if(Math.abs(q.percentX)<.95){var e=0;m.left=!1,m.right=!1,O.value={transform:"translate3d(".concat(e,"px,0,0)"),transitionDuration:"300ms"},g.transparentOffset=60,g.blkOffset=45,g.duration=300}else u["a"].session.set("__currentquiz__",1),q.percentX>0?(l(1,i),y.commit("setCategory","40k"),j.push({path:"/questions/40k/1"})):(l(2,i),y.commit("setCategory","aos"),j.push({path:"/questions/aos/1"}))}function S(){if(Math.abs(q.percentY)<.95){var e=0;O.value={transform:"translate3d(0,".concat(e,"px,0)"),transitionDuration:"300ms"},g.transparentOffsetY=55,g.transparentOffsetYGrey=55,g.redOffset=25,g.greyOffset=25,g.duration=300}else q.percentY<0?Object(f["a"])({questionId:t,choiceId:n[0].id},i):Object(f["a"])({questionId:t,choiceId:n[1].id},i),u["a"].session.set("__currentquiz__",7),j.push({path:"/reveal"})}return Object(c["x"])((function(){q.widthL=Number(Object(o["c"])(getComputedStyle(p.value).width,0,-2)),q.widthR=Number(Object(o["c"])(getComputedStyle(v.value).width,0,-2)),q.heightT=Number(Object(o["c"])(getComputedStyle(p.value).height,0,-2)),q.heightB=Number(Object(o["c"])(getComputedStyle(v.value).height,0,-2))})),{onMiddleTouchStart:T,onMiddleTouchMove:k,onMiddleTouchEnd:M,iconTransform:O,swipeOne:p,swipeTwo:v,maskTransform:g,beatAnimate:m}}},ffb7:function(e,t,n){}}]);
//# sourceMappingURL=chunk-cce31b1c.b37f885f.js.map