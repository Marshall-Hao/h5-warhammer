(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17cdeb14"],{"0b42":function(e,t,n){var r=n("da84"),c=n("e8b5"),a=n("68ee"),o=n("861d"),i=n("b622"),u=i("species"),s=r.Array;e.exports=function(e){var t;return c(e)&&(t=e.constructor,a(t)&&(t===s||c(t.prototype))?t=void 0:o(t)&&(t=t[u],null===t&&(t=void 0))),void 0===t?s:t}},"107c":function(e,t,n){var r=n("d039"),c=n("da84"),a=c.RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("da84"),c=n("c65b"),a=n("825a"),o=n("1626"),i=n("c6b6"),u=n("9263"),s=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=c(n,e,t);return null!==r&&a(r),r}if("RegExp"===i(e))return c(u,e,t);throw s("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),c=n("fdbc"),a=n("785a"),o=n("17c2"),i=n("9112"),u=function(e){if(e&&e.forEach!==o)try{i(e,"forEach",o)}catch(t){e.forEach=o}};for(var s in c)c[s]&&u(r[s]&&r[s].prototype);u(a)},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,c=n("a640"),a=c("forEach");e.exports=a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1caf":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("1da1"),c=(n("96cf"),n("26b3")),a=n("aaef"),o=n("335a");function i(e,t){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.questionId,i=t.choiceId,u=o["a"].session.get(a["a"]),e.next=4,Object(c["a"])("/user_quizzes/".concat(u,"/user_answers\n    "),{user_answer:{question_id:r,choice_id:i}},n);case 4:s=e.sent,console.log(s);case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}},"1dde":function(e,t,n){var r=n("d039"),c=n("b622"),a=n("2d00"),o=c("species");e.exports=function(e){return a>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,n){"use strict";var r=n("23e7"),c=n("e330"),a=n("5a34"),o=n("1d80"),i=n("577e"),u=n("ab13"),s=c("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~s(i(o(this)),i(a(e)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var r=n("e330"),c=n("5e77").PROPER,a=n("6eeb"),o=n("825a"),i=n("3a9b"),u=n("577e"),s=n("d039"),f=n("ad6d"),d="toString",l=RegExp.prototype,b=l[d],p=r(f),v=s((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),h=c&&b.name!=d;(v||h)&&a(RegExp.prototype,d,(function(){var e=o(this),t=u(e.source),n=e.flags,r=u(void 0===n&&i(l,e)&&!("flags"in l)?p(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),a=n("b622"),o=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==c(e))}},"466d":function(e,t,n){"use strict";var r=n("c65b"),c=n("d784"),a=n("825a"),o=n("50c4"),i=n("577e"),u=n("1d80"),s=n("dc4a"),f=n("8aa5"),d=n("14c3");c("match",(function(e,t,n){return[function(t){var n=u(this),c=void 0==t?void 0:s(t,e);return c?r(c,t,n):new RegExp(t)[e](i(n))},function(e){var r=a(this),c=i(e),u=n(t,r,c);if(u.done)return u.value;if(!r.global)return d(r,c);var s=r.unicode;r.lastIndex=0;var l,b=[],p=0;while(null!==(l=d(r,c))){var v=i(l[0]);b[p]=v,""===v&&(r.lastIndex=f(c,o(r.lastIndex),s)),p++}return 0===p?null:b}]}))},"539c":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("a9e3"),n("caad"),n("2532");var r=n("7a23"),c=n("6c02"),a=n("1caf"),o=n("032f"),i=n("aaef"),u=n("335a");function s(e,t,n){Object(c["c"])((function(){var e=u["a"].session.get("__currentquiz__");console.log(Number(l.params.id),e),Number(l.params.id)>e&&d.push({path:"/questions/40k/".concat(e+1)})}));var s=Object(o["b"])(),f=s.getCookie(i["c"]),d=Object(c["e"])(),l=Object(c["d"])(),b=l.path.includes("40k"),p=n,v=Object(r["F"])(t),h=Object(r["F"])(0);function g(e,t){v.value=e.image,h.value=t,p=e.id}function x(){Object(a["a"])({questionId:e,choiceId:p},f),u["a"].session.set("__currentquiz__",5),b?d.push({path:"/questions/40k/6"}):d.push({path:"/questions/aos/6"})}return{changeScene:g,next:x,scene:v,selected:h}}},"57e8":function(e,t,n){e.exports=n.p+"56f586361c6badfeea4ec900f7f7791d.fbx"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),c=n("1d80"),a=n("577e"),o=n("5899"),i=r("".replace),u="["+o+"]",s=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),d=function(e){return function(t){var n=a(c(t));return 1&e&&(n=i(n,s,"")),2&e&&(n=i(n,f,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5a34":function(e,t,n){var r=n("da84"),c=n("44e7"),a=r.TypeError;e.exports=function(e){if(c(e))throw a("The method doesn't accept regular expressions");return e}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},7156:function(e,t,n){var r=n("1626"),c=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var o,i;return a&&r(o=t.constructor)&&o!==n&&c(i=o.prototype)&&i!==n.prototype&&a(e,i),e}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").find,a=n("44d2"),o="find",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},8418:function(e,t,n){"use strict";var r=n("a04b"),c=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?c.f(e,o,a(0,n)):e[o]=n}},8887:function(e,t,n){"use strict";n("c1b7")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),c=n("e330"),a=n("577e"),o=n("ad6d"),i=n("9f7f"),u=n("5692"),s=n("7c73"),f=n("69f3").get,d=n("fce3"),l=n("107c"),b=u("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,h=c("".charAt),g=c("".indexOf),x=c("".replace),m=c("".slice),O=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),I=i.BROKEN_CARET,j=void 0!==/()??/.exec("")[1],y=O||j||I||d||l;y&&(v=function(e){var t,n,c,i,u,d,l,y=this,_=f(y),E=a(e),w=_.raw;if(w)return w.lastIndex=y.lastIndex,t=r(v,w,E),y.lastIndex=w.lastIndex,t;var R=_.groups,k=I&&y.sticky,N=r(o,y),A=y.source,S=0,T=E;if(k&&(N=x(N,"y",""),-1===g(N,"g")&&(N+="g"),T=m(E,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==h(E,y.lastIndex-1))&&(A="(?: "+A+")",T=" "+T,S++),n=new RegExp("^(?:"+A+")",N)),j&&(n=new RegExp("^"+A+"$(?!\\s)",N)),O&&(c=y.lastIndex),i=r(p,k?n:y,T),k?i?(i.input=m(i.input,S),i[0]=m(i[0],S),i.index=y.lastIndex,y.lastIndex+=i[0].length):y.lastIndex=0:O&&i&&(y.lastIndex=y.global?i.index+i[0].length:c),j&&i&&i.length>1&&r(b,i[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i&&R)for(i.groups=d=s(null),u=0;u<R.length;u++)l=R[u],d[l[0]]=i[l[1]];return i}),e.exports=v},"99af":function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),a=n("d039"),o=n("e8b5"),i=n("861d"),u=n("7b0b"),s=n("07fa"),f=n("8418"),d=n("65f0"),l=n("1dde"),b=n("b622"),p=n("2d00"),v=b("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",x=c.TypeError,m=p>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),O=l("concat"),I=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},j=!m||!O;r({target:"Array",proto:!0,forced:j},{concat:function(e){var t,n,r,c,a,o=u(this),i=d(o,0),l=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?o:arguments[t],I(a)){if(c=s(a),l+c>h)throw x(g);for(n=0;n<c;n++,l++)n in a&&f(i,l,a[n])}else{if(l>=h)throw x(g);f(i,l++,a)}return i.length=l,i}})},"9f7f":function(e,t,n){var r=n("d039"),c=n("da84"),a=c.RegExp,o=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=o||r((function(){return!a("a","y").sticky})),u=o||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:i,UNSUPPORTED_Y:o}},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),c=n("da84"),a=n("e330"),o=n("94ca"),i=n("6eeb"),u=n("1a2d"),s=n("7156"),f=n("3a9b"),d=n("d9b5"),l=n("c04e"),b=n("d039"),p=n("241c").f,v=n("06cf").f,h=n("9bf2").f,g=n("408a"),x=n("58a8").trim,m="Number",O=c[m],I=O.prototype,j=c.TypeError,y=a("".slice),_=a("".charCodeAt),E=function(e){var t=l(e,"number");return"bigint"==typeof t?t:w(t)},w=function(e){var t,n,r,c,a,o,i,u,s=l(e,"number");if(d(s))throw j("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=x(s),t=_(s,0),43===t||45===t){if(n=_(s,2),88===n||120===n)return NaN}else if(48===t){switch(_(s,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+s}for(a=y(s,2),o=a.length,i=0;i<o;i++)if(u=_(a,i),u<48||u>c)return NaN;return parseInt(a,r)}return+s};if(o(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var R,k=function(e){var t=arguments.length<1?0:O(E(e)),n=this;return f(I,n)&&b((function(){g(n)}))?s(Object(t),n,k):t},N=r?p(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;N.length>A;A++)u(O,R=N[A])&&!u(k,R)&&h(k,R,v(O,R));k.prototype=I,I.constructor=k,i(c,m,k)}},ab13:function(e,t,n){var r=n("b622"),c=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(r){}}return!1}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b727:function(e,t,n){var r=n("0366"),c=n("e330"),a=n("44ad"),o=n("7b0b"),i=n("07fa"),u=n("65f0"),s=c([].push),f=function(e){var t=1==e,n=2==e,c=3==e,f=4==e,d=6==e,l=7==e,b=5==e||d;return function(p,v,h,g){for(var x,m,O=o(p),I=a(O),j=r(v,h),y=i(I),_=0,E=g||u,w=t?E(p,y):n||l?E(p,0):void 0;y>_;_++)if((b||_ in I)&&(x=I[_],m=j(x,_,O),e))if(t)w[_]=m;else if(m)switch(e){case 3:return!0;case 5:return x;case 6:return _;case 2:s(w,x)}else switch(e){case 4:return!1;case 7:s(w,x)}return d?-1:c||f?f:w}};e.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},bbd5:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));n("fb6a"),n("d3b7"),n("ac1f"),n("466d");function r(e,t,n){return e.slice(t,n)}var c=null;function a(e,t,n){return function(){clearTimeout(c),c=setTimeout((function(){e(n)}),t)}}function o(){var e=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i];return e.some((function(e){return navigator.userAgent.match(e)}))}},be84:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("caad"),n("2532"),n("a9e3"),n("7db0"),n("d3b7");var r=n("7a23"),c=n("6c02"),a=n("5502"),o=n("335a");function i(){var e=Object(c["d"])(),t=e.path.includes("40k"),n=Object(a["e"])(),i=Object(r["F"])(e.params.id),u=(i.value,Object(r["c"])((function(){return t?o["a"].session.get("__40kquestion".concat(i.value,"__")):o["a"].session.get("__aosquestion".concat(i.value,"__"))})));console.log(u.value);var s=Object(r["c"])((function(){return u.value&&u.value.page_template_number===Number(i.value)?u.value:(e=t?n.getters.currentFourtyKQuestion.find((function(e){return e.page_template_number===Number(i.value)})):n.getters.currentAosQuestion.find((function(e){return e.page_template_number===Number(i.value)})),e);var e})),f=Object(r["c"])((function(){var e="url(".concat(s.value&&s.value.bg_image,")");return{backgroundImage:e}}));function d(e){i.value=e}return Object(r["v"])((function(){d(e.params.id)})),{questionId:i,questionBackground:f,currentQuestion:s,updateParams:d,store:n}}},bece:function(e,t,n){"use strict";var r=n("7a23"),c={class:"scene"};function a(e,t,n,a,o,i){var u=Object(r["I"])("Camera"),s=Object(r["I"])("HemisphereLight"),f=Object(r["I"])("DirectionalLight"),d=Object(r["I"])("SphereGeometry"),l=Object(r["I"])("Texture"),b=Object(r["I"])("BasicMaterial"),p=Object(r["I"])("Mesh"),v=Object(r["I"])("FbxModel"),h=Object(r["I"])("Scene"),g=Object(r["I"])("RenderPass"),x=Object(r["I"])("FilmPass"),m=Object(r["I"])("EffectComposer"),O=Object(r["I"])("Renderer");return Object(r["A"])(),Object(r["g"])("div",c,[Object(r["k"])(O,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":{autoRotate:!0,enableDamping:!0,enableZoom:!1}},{default:Object(r["R"])((function(){return[Object(r["k"])(u,{position:{z:160},aspect:o.ratio,fov:75},null,8,["aspect"]),Object(r["k"])(h,{background:"#000",ref:"scene"},{default:Object(r["R"])((function(){return[Object(r["k"])(s),Object(r["k"])(f,{position:{x:0,y:200,z:100},"cast-shadow":"","shadow-camera":{top:180,bottom:-120,left:-120,right:120}}),Object(r["k"])(p,{scale:{x:16,y:16,z:-16},"receive-shadow":""},{default:Object(r["R"])((function(){return[Object(r["k"])(d,{ref:"mesh",radius:1,"width-segments":200,"height-segments":200},null,512),Object(r["k"])(b,null,{default:Object(r["R"])((function(){return[Object(r["k"])(l,{src:n.scene},null,8,["src"])]})),_:1})]})),_:1}),Object(r["k"])(v,{src:n.logo,scale:n.scale,onLoad:i.onLoad},null,8,["src","scale","onLoad"])]})),_:1},512),Object(r["k"])(m,null,{default:Object(r["R"])((function(){return[Object(r["k"])(g),Object(r["k"])(x,{noiseIntensity:.2,scanlinesIntensity:.01},null,8,["noiseIntensity","scanlinesIntensity"])]})),_:1})]})),_:1},512)])}var o=n("af1e"),i={name:"scene",components:{Renderer:o["n"],Camera:o["d"],Scene:o["o"],HemisphereLight:o["i"],DirectionalLight:o["e"],Mesh:o["j"],SphereGeometry:o["r"],BasicMaterial:o["b"],Texture:o["t"],FbxModel:o["g"],EffectComposer:o["f"],RenderPass:o["m"],FilmPass:o["h"]},data:function(){return{ratio:1}},props:{scene:{default:null},logo:{default:n("57e8")},scale:{type:Object,default:{x:.005,y:.005,z:.005}}},mounted:function(){this.ratio=window.innerWidth/window.innerHeight;var e=this.$refs.mesh.geometry;e.scale(16,16,-16)},methods:{onLoad:function(e){e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}))}}},u=(n("8887"),n("d959")),s=n.n(u);const f=s()(i,[["render",a],["__scopeId","data-v-78832861"]]);t["a"]=f},c1b7:function(e,t,n){},caad:function(e,t,n){"use strict";var r=n("23e7"),c=n("4d64").includes,a=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),c=n("6eeb"),a=n("9263"),o=n("d039"),i=n("b622"),u=n("9112"),s=i("species"),f=RegExp.prototype;e.exports=function(e,t,n,d){var l=i(e),b=!o((function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})),p=b&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[l]=/./[l]),n.exec=function(){return t=!0,null},n[l](""),!t}));if(!b||!p||n){var v=r(/./[l]),h=t(l,""[e],(function(e,t,n,c,o){var i=r(e),u=t.exec;return u===a||u===f.exec?b&&!o?{done:!0,value:v(t,n,c)}:{done:!0,value:i(n,t,c)}:{done:!1}}));c(String.prototype,e,h[0]),c(f,l,h[1])}d&&u(f[l],"sham",!0)}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},ef6d:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n("a9e3"),n("caad"),n("2532"),n("99af");var r=n("7a23"),c=n("6c02"),a=n("bbd5"),o=n("1caf"),i=n("032f"),u=n("aaef"),s=n("335a");function f(e,t){Object(c["c"])((function(){var e=s["a"].session.get("__currentquiz__");console.log(Number(l.params.id),e),Number(l.params.id)>e&&(b?d.push({path:"/questions/40k/".concat(e+1)}):d.push({path:"/questions/aos/".concat(e+1)}))}));var n=Object(i["b"])(),f=n.getCookie(u["c"]),d=Object(c["e"])(),l=Object(c["d"])(),b=l.path.includes("40k"),p=Object(r["F"])(null);function v(e){p.value=e}function h(e){p.value=e}function g(e){Object(a["a"])(x.bind(e),1e3,e)()}function x(n){Object(o["a"])({questionId:t,choiceId:n},f);var r=Number(l.params.id);e("updateParams",r+1),m(r,b?"40k":"aos")}function m(e,t){s["a"].session.set("__currentquiz__",e),7!==e?d.push({path:"/questions/".concat(t,"/").concat(e+1)}):d.push({path:"/reveal"})}return{choiceTouchMove:h,choiceTouchEnd:g,choiceTouchStart:v,selected:p}}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),a=n("e8b5"),o=n("68ee"),i=n("861d"),u=n("23cb"),s=n("07fa"),f=n("fc6a"),d=n("8418"),l=n("b622"),b=n("1dde"),p=n("f36a"),v=b("slice"),h=l("species"),g=c.Array,x=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var n,r,c,l=f(this),b=s(l),v=u(e,b),m=u(void 0===t?b:t,b);if(a(l)&&(n=l.constructor,o(n)&&(n===g||a(n.prototype))?n=void 0:i(n)&&(n=n[h],null===n&&(n=void 0)),n===g||void 0===n))return p(l,v,m);for(r=new(void 0===n?g:n)(x(m-v,0)),c=0;v<m;v++,c++)v in l&&d(r,c,l[v]);return r.length=c,r}})},fce3:function(e,t,n){var r=n("d039"),c=n("da84"),a=c.RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-17cdeb14.8af5c65a.js.map