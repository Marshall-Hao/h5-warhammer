(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-424f638c"],{"0213":function(a,t,e){"use strict";e("cb29");var r=e("7a23"),n=["href","fill","stroke"];function i(a,t,e,i,b,c){return Object(r["A"])(),Object(r["g"])("svg",{class:Object(r["q"])(e.icon)},[Object(r["h"])("use",{href:i.iconName,style:Object(r["r"])(e.duration),fill:e.fill,stroke:e.stroke},null,12,n)],2)}e("a9e3"),e("99af"),e("b0c0");var b={name:"svg-icon",props:{name:[Number,String],prefix:{type:String,default:"war-q3"},duration:{type:Object,default:{animation:"logo3 3s infinite alternate"}},fill:{type:String,default:"black"},stroke:{type:String,default:"rgba(72, 138, 20, 0)"},icon:{type:String,default:"icon"}},setup:function(a){var t="#".concat(a.prefix).concat(a.name);return{iconName:t}}},c=(e("3b3f"),e("d959")),o=e.n(c);const d=o()(b,[["render",i],["__scopeId","data-v-2875fd7a"]]);t["a"]=d},"06c0":function(a,t,e){"use strict";e("9450")},"1ceb":function(a,t,e){},"3b3f":function(a,t,e){"use strict";e("1ceb")},"408a":function(a,t,e){var r=e("e330");a.exports=r(1..valueOf)},5899:function(a,t){a.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(a,t,e){var r=e("e330"),n=e("1d80"),i=e("577e"),b=e("5899"),c=r("".replace),o="["+b+"]",d=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),u=function(a){return function(t){var e=i(n(t));return 1&a&&(e=c(e,d,"")),2&a&&(e=c(e,l,"")),e}};a.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(a,t,e){var r=e("1626"),n=e("861d"),i=e("d2bb");a.exports=function(a,t,e){var b,c;return i&&r(b=t.constructor)&&b!==e&&n(c=b.prototype)&&c!==e.prototype&&i(a,c),a}},"81d5":function(a,t,e){"use strict";var r=e("7b0b"),n=e("23cb"),i=e("07fa");a.exports=function(a){var t=r(this),e=i(t),b=arguments.length,c=n(b>1?arguments[1]:void 0,e),o=b>2?arguments[2]:void 0,d=void 0===o?e:n(o,e);while(d>c)t[c++]=a;return t}},9450:function(a,t,e){},"99af":function(a,t,e){"use strict";var r=e("23e7"),n=e("da84"),i=e("d039"),b=e("e8b5"),c=e("861d"),o=e("7b0b"),d=e("07fa"),l=e("8418"),u=e("65f0"),s=e("1dde"),v=e("b622"),p=e("2d00"),f=v("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",m=n.TypeError,O=p>=51||!i((function(){var a=[];return a[f]=!1,a.concat()[0]!==a})),j=s("concat"),y=function(a){if(!c(a))return!1;var t=a[f];return void 0!==t?!!t:b(a)},N=!O||!j;r({target:"Array",proto:!0,forced:N},{concat:function(a){var t,e,r,n,i,b=o(this),c=u(b,0),s=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?b:arguments[t],y(i)){if(n=d(i),s+n>h)throw m(g);for(e=0;e<n;e++,s++)e in i&&l(c,s,i[e])}else{if(s>=h)throw m(g);l(c,s++,i)}return c.length=s,c}})},a9e3:function(a,t,e){"use strict";var r=e("83ab"),n=e("da84"),i=e("e330"),b=e("94ca"),c=e("6eeb"),o=e("1a2d"),d=e("7156"),l=e("3a9b"),u=e("d9b5"),s=e("c04e"),v=e("d039"),p=e("241c").f,f=e("06cf").f,h=e("9bf2").f,g=e("408a"),m=e("58a8").trim,O="Number",j=n[O],y=j.prototype,N=n.TypeError,w=i("".slice),I=i("".charCodeAt),S=function(a){var t=s(a,"number");return"bigint"==typeof t?t:k(t)},k=function(a){var t,e,r,n,i,b,c,o,d=s(a,"number");if(u(d))throw N("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=m(d),t=I(d,0),43===t||45===t){if(e=I(d,2),88===e||120===e)return NaN}else if(48===t){switch(I(d,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+d}for(i=w(d,2),b=i.length,c=0;c<b;c++)if(o=I(i,c),o<48||o>n)return NaN;return parseInt(i,r)}return+d};if(b(O,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var E,x=function(a){var t=arguments.length<1?0:j(S(a)),e=this;return l(y,e)&&v((function(){g(e)}))?d(Object(t),e,x):t},G=r?p(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;G.length>T;T++)o(j,E=G[T])&&!o(x,E)&&h(x,E,f(j,E));x.prototype=y,y.constructor=x,c(n,O,x)}},b08c:function(a,t,e){},b0c0:function(a,t,e){var r=e("83ab"),n=e("5e77").EXISTS,i=e("e330"),b=e("9bf2").f,c=Function.prototype,o=i(c.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(d.exec),u="name";r&&!n&&b(c,u,{configurable:!0,get:function(){try{return l(d,o(this))[1]}catch(a){return""}}})},bd91:function(a,t,e){"use strict";e.r(t);var r=e("7a23"),n=function(a){return Object(r["D"])("data-v-1a16eb03"),a=a(),Object(r["B"])(),a},i={class:"terms-all"},b={class:"terms-sound"},c=n((function(){return Object(r["h"])("svg",{width:"16.5",height:"24",viewBox:"0 0 110 200"},[Object(r["h"])("polyline",{points:"100 0, 0 100, 100 200,110 190,25 100, 110 10 ",fill:"rgb(165, 147, 93)","stroke-linecap":"round"},[Object(r["h"])("animate",{id:"l41",attributeName:"fill",attributeType:"XML",from:"rgb(255, 255, 255)",to:"rgb(165, 147, 93)",dur:"2s",begin:"0; l42.end"}),Object(r["h"])("animate",{id:"l42",attributeName:"fill",attributeType:"XML",from:"rgb(165, 147, 93)",to:"rgb(255, 255, 255)",dur:"2s",begin:"l41.end"})])],-1)})),o=[c],d=Object(r["i"])('<section class="terms" data-v-1a16eb03><h2 class="terms-title" data-v-1a16eb03>网站使用条款</h2><h3 class="terms-sub" data-v-1a16eb03>吉韦优趣（上海）商业有限公司</h3><p data-v-1a16eb03> 本页面（连同页面中所提及的文件）将介绍您作为访客或注册用户使用本网站（我们的网站）时所需遵守的使用条款。 在开始使用本网站之前，请仔细阅读这些使用条款。 使用本网站即表示您接受并同意遵守这些条款。如果您不同意这些使用条款，请不要使用本网站。 </p><h3 class="terms-sub" data-v-1a16eb03>关于我们</h3><p data-v-1a16eb03> 本网站由吉韦优趣（上海）商业有限公司运营。 我们是一家在中国注册的有限公司，公司编号为 91310000577401984P，注册地址位于上海市黄浦区徐家汇路 153-155 号。 </p><h3 class="terms-sub" data-v-1a16eb03>访问我们的网站</h3><p data-v-1a16eb03> 我们的网站可允许临时访问。对于网站所提供的服务，我们保留随时取消或修改的权利，恕不另行通知。如果出于任何原因，我们的网站在任何时候或任何时段无法使用，我们不对此承担责任。 网站中的某些或全部内容有时会仅限注册用户访问。 如果您选择了或我们向您提供了用户识别码、密码或其他任何与我们的安全措施相关的信息，请务必对此类信息进行保密，不得向任何第三方透露。如果我们认为您违反了我们的使用条款，我们有权禁用任何用户识别码或密码，无论该识别码或密码是您自己选择的还是我们提供的。 您需负责做好浏览我们的网站所需的一切安排。您还需负责确保通过您的网络连接访问我们网站的任何人士了解并遵守这些使用条款。 </p><h3 class="terms-sub" data-v-1a16eb03>可接受的使用</h3><p data-v-1a16eb03>您仅可将我们的网站用于合法用途。您不得以下述方式使用我们的网站：</p><ul type="square" data-v-1a16eb03><li data-v-1a16eb03>违反任何适用的地方、国家或国际法律或法规的任何方式。</li><li data-v-1a16eb03>任何非法或欺诈手段，或具有任何非法或欺诈目的或效果的任何方式。</li><li data-v-1a16eb03> 以跟踪、伤害、骚扰或虐待任何人为目的，或试图以任何方式跟踪、伤害、骚扰或虐待任何人。 </li><li data-v-1a16eb03> 传输或促使发送任何未经请求或未经授权的广告或宣传资料，或任何其他形式的类似招揽行为（垃圾邮件）。 </li><li data-v-1a16eb03> 故意传输任何数据，发送或上传任何包含病毒、特洛伊木马、蠕虫、定时炸弹、按键记录程序、间谍软件、广告软件或任何其他有害程序，或包含旨在破坏任何计算机软件或硬件运行的类似计算机代码的材料。 </li><li data-v-1a16eb03> 传输任何诽谤、淫秽、攻击性、仇恨、煽动性、可能欺骗任何人或侵犯任何第三方权利的材料。 </li></ul><p data-v-1a16eb03>您还同意：</p><ul data-v-1a16eb03><li data-v-1a16eb03>未经我们明确许可，不得转载、复制或拷贝我们网站的任何部分。</li><li data-v-1a16eb03>不提供不准确、虚构或误导性的信息。</li><li data-v-1a16eb03> 不得未经授权访问、干扰、损害或破坏下列各项： <ul data-v-1a16eb03><li data-v-1a16eb03>我们网站的任何部分</li><li data-v-1a16eb03>存储我们网站的任何设备或网络</li><li data-v-1a16eb03>提供我们的网站时使用的任何软件；或</li><li data-v-1a16eb03>任何第三方拥有或使用的任何设备或网络或软件</li></ul></li></ul><h3 class="terms-sub" data-v-1a16eb03>知识产权</h3><p data-v-1a16eb03> 除非另有规定，我们或我们的集团公司是本网站及网站所发布材料中所有知识产权的所有人或许可持有人。这些内容受世界各国商标法、版权法和版权条约保护。我们保留所有此类权利。 我们网站上所述的商标为我们、我们的集团公司或我们的许可人所拥有。 除非另有规定，本网站上的所有资料，包括但不限于图像、作品、文本、音频剪辑和视频剪辑，均为本集团公司 Games Workshop Limited 所拥有和控制，未经许可不得以任何方式拷贝、转载、再版、上传、发布、传输或分发（有关授权使用，请参阅下文“可下载资料许可”）。出于任何目的修改材料或未经授权使用这些材料均视为侵犯我们的合法权利。严禁未经授权在任何其他网站上发布我们的任何知识产权，包括我们产品的任何图像或其他作品。 </p><h3 data-v-1a16eb03>可下载资料许可</h3><p data-v-1a16eb03> 本部分内容为您收到电子作品、壁纸、测试结果、PDF 文件或其他可从本网站下载的资料（下称“可下载资料”）时所适用的条款和条件。双方同意，考虑到您对本网站的使用情况，GW 根据以下条款授予您使用可下载资料的许可： 本许可订立的双方为：(1) Games Workshop Limited，位于 Willow Road，Lenton，Nottingham，NG7 2WS，United Kingdom（下称“GW”）；及 (2) 从 GW 网站下载资料的接收者（下称“您”）。<br data-v-1a16eb03> 1.GW 授予您个人、非独占、不可转让、免版税的许可，从而通过以下方式使用可下载资料： <br data-v-1a16eb03> 1.1 将可下载资料存储于您个人拥有的任何电子设备及/或存储媒体（例如个人电脑、电子书阅读器、手机、移动硬盘、U 盘、CD 或 DVD）；及 <br data-v-1a16eb03> 1.2 使用适当的电子设备和/或通过任何适当的存储媒体访问可下载资料。 2.为免生疑问，您仅获许可使用上述第 1 款所述的可下载资料。您不得以任何其他方式使用或存储可下载资料。如果您这样做，GW 有权终止本许可。<br data-v-1a16eb03> 3.除第 2 款的一般限制外，如果您以任何未经明确许可的方式使用或存储可下载资料（或其任何部分），GW 有权终止本许可。其中包括（但绝不限于）以下情况：<br data-v-1a16eb03> 3.1 您将可下载资料提供给未获得使用或存储许可的任何公司、个人或其他法人；<br data-v-1a16eb03> 3.2 您在 BT 种子网站上提供可下载资料，或与任何未获得使用或存储许可的公司、个人或其他法人同谋“做种”或共享可下载资料；<br data-v-1a16eb03> 3.3 您复印或以任何实体形式复制可下载资料，并将其分发给未获得使用或存储许可的任何公司、个人或其他法人；<br data-v-1a16eb03> 3.4 您试图对可能应用于可下载资料的任何防复制技术进行逆向工程、绕过、更改、修改、删除或以其他方式进行任何更改；<br data-v-1a16eb03> 3.5 您将可下载资料用于商业目的或与任何业务或商业活动有关的情况，或允许其他公司、个人或法人这么做。<br data-v-1a16eb03> 4.您承认，可下载资料的所有版权、商标和其他知识产权都属于并将继续属于 GW 的独有财产。<br data-v-1a16eb03> 5.本许可终止时（不论以任何方式终止），您应立即从您的电脑和存储媒体中永久删除可下载资料的所有副本，并销毁可下载资料的所有纸质复印件。<br data-v-1a16eb03> 6.GW 有权通过向您发出书面通知，随时修改这些条款和条件。<br data-v-1a16eb03> 7.这些条款和条件受中国法律管辖，并应受中国法院管辖。<br data-v-1a16eb03> 8.如果本许可的任何部分不合法，或因法律变更而变得不合法，则应删除该部分，并用尽可能接近原意但不违法的措辞替换。<br data-v-1a16eb03> 9.无论出于何种原因，GW未能行使其在本许可下的权利，均不得以任何方式被视为放弃其权利，特别是，GW 保留在您违反第 2 款或第 3 款的情况下随时终止本许可的权利。 </p><h3 data-v-1a16eb03>依赖发布的信息</h3><p data-v-1a16eb03> 任何材料在我们的网站上发布，并不表示我们建议您依赖这些材料。因此，我们概不承担因我们网站的任何访客，或获知其任何内容的任何人士依赖该等材料而产生的任何责任。 </p><h3 data-v-1a16eb03>网站更新</h3><p data-v-1a16eb03> 我们会定期更新我们的网站，并且可能随时更改有关内容。若有需要，我们可能会暂停对我们网站的访问，或无限期关闭网站。 我们网站上的任何材料可能在任何指定时间过期，且我们概无义务更新这些材料。 </p><h3 data-v-1a16eb03>我们的责任</h3><p data-v-1a16eb03> 就我们网站上呈现的材料而言，对于其准确性并无任何担保、条件或保证。 我们不保证本网站、其内容或使其可用的服务器没有错误、无病毒或无其他有害组件，也不保证您对本网站的使用将不受干扰。 在法律允许的范围内，我们、我们集团公司的其他成员以及与我们有关的任何第三方，特此明确排除： </p><ul data-v-1a16eb03><li data-v-1a16eb03>成文法、普通法或衡平法暗示的所有条件、保证及其他条款。</li><li data-v-1a16eb03> 任何用户因使用、无法使用或因使用我们的网站、与之链接的任何网站和发布在其上的任何材料而产生的任何直接、间接或后果性损失或损害的任何责任，包括但不限于对收入或收益损失、业务损失、利润或合同损失、预期储蓄损失、数据损失、商誉损失、管理或办公时间浪费以及任何其他损失或损害的任何责任，无论这些损失和损害是否由可预见的侵权（包括疏忽）、违约其他原因引起。 </li></ul><p data-v-1a16eb03> 这并不影响我们对因我们的疏忽引起的死亡或人身伤害承担的责任，或我们对欺诈性不实陈述承担的责任，也不影响适用法律规定无法排除或限制的任何其他责任。在这种情况下，我们的法律责任将限于适用法律允许的最大限度。 </p><h3 data-v-1a16eb03>病毒、黑客攻击及其他违规行为</h3><p data-v-1a16eb03> 不得滥用我们的网站，不得故意引入病毒、木马、蠕虫、逻辑炸弹、恶意资料或存在技术破坏性的资料。不得试图在未经授权的情况下访问我们的网站、存储网站信息的服务器，以及任何与我们的网站相连接的服务器、电脑或数据库。不得通过“拒绝服务攻击”或“分布式拒绝服务攻击”方式来攻击我们的网站。 我们会向相关执法机构报告任何此类违规行为，并与此类机构合作，向他们披露您的身份。一旦出现此类违规行为，您使用我们网站的权利将立即停止。 在您使用本网站或下载本网站或其任何链接网站上发布的任何资料时，对于可能感染您的计算机设备、计算机程序、数据或其他专有材料的分布式拒绝服务攻击、病毒或其他存在技术破坏性的方式所造成的损失或破坏，我们概不承担责任。 </p><h3 data-v-1a16eb03>链接到我们网站</h3><p data-v-1a16eb03> 您可以出于个人（非商业）原因链接到我们的网站或其中的任何页面，前提是您以公平合法的方式进行，并且不损害我们的声誉或利用我们的声誉。但是，您不得建立一个链接，以暗示我们与您存在任何形式的关联、对您进行了批准或背书，而这些关联、批准或背书实际并不存在。 我们保留撤销链接许可的权利，恕不另行通知。您放置链接的网站必须在所有方面遵守本使用条款中所载的内容标准。 如果您希望将我们网站上的材料用于除上述用途之外的任何其他用途，请按下文中列出的联系方式，将该请求发送给我们。 </p><h3 data-v-1a16eb03>我们网站上的链接</h3><p data-v-1a16eb03> 我们网站所包含的其他网站链接或第三方资源链接仅供您参考之用。我们尚未审查所有这些网站，也无法控制这些网站或资源的内容。 我们不对这些网站或资源的内容进行背书或做出任何陈述；也不对您因使用这些网站或资源所产生的任何损失或损害负责。 </p><h3 data-v-1a16eb03>暂停和终止</h3><p data-v-1a16eb03> 如果我们认为您违反了这些使用条款，我们可以采取我们认为适当的行动，并可能导致我们采取以下所有或任何行动 </p><ul data-v-1a16eb03><li data-v-1a16eb03>立即、临时或永久撤销您使用我们网站受限部分的权利</li><li data-v-1a16eb03>向您发出警告。</li><li data-v-1a16eb03> 就违反条款引起的所有费用、责任和损失（包括但不限于合理的行政和法律费用）通过法律诉讼向您提出索赔。您特此同意就此对我们进行赔偿。 </li><li data-v-1a16eb03>对您采取进一步法律行动。</li><li data-v-1a16eb03>在我们合理认为有必要时，向执法机构披露这些信息。</li></ul><p data-v-1a16eb03> 我们对违反这些使用条款所采取的行动概不承担责任。除上述所载的应对措施外，我们还可能采取我们合理认为适当的任何其他行动。 </p><h3 data-v-1a16eb03>司法管辖权与适用法律</h3><p data-v-1a16eb03> 中国法院将对因访问我们网站引起或与之相关的任何索赔拥有司法管辖权，但我们保留在您居住的国家/地区或任何其他相关国家/地区对您违反这些条件提起诉讼的权利，并且这些使用条款受中国法律管辖。 </p><h3 data-v-1a16eb03>内容变更</h3><p data-v-1a16eb03> 我们可能随时通过修改本网页的内容来修订我们的使用条款。请随时查看本网页，了解任何相关的修改内容，因为这些条款对您具有约束力。同时，这些使用条款中的某些规定可能会被网站其他地方公布的条款或通知所取代。 </p><h3 data-v-1a16eb03>您的疑虑</h3><p data-v-1a16eb03> 如果您对我们网站上所载的材料有任何疑虑，请通过 <a href="mailto:chinawarhammercommunity@gwplc.com" data-v-1a16eb03>chinawarhammercommunity@gwplc.com</a> 联系我们。 </p><p data-v-1a16eb03>感谢您访问我们的网站。</p></section>',1);function l(a,t,e,n,c,l){var u=Object(r["I"])("switch-sound");return Object(r["A"])(),Object(r["g"])("div",i,[Object(r["h"])("div",b,[Object(r["k"])(u)]),Object(r["h"])("div",{class:"terms-back",onClick:t[0]||(t[0]=Object(r["T"])((function(){return l.goBack&&l.goBack.apply(l,arguments)}),["prevent"]))},o),d])}var u=e("d875"),s={name:"terms",components:{SwitchSound:u["a"]},methods:{goBack:function(){this.$router.push({path:"/landing"})}}},v=(e("06c0"),e("d959")),p=e.n(v);const f=p()(s,[["render",l],["__scopeId","data-v-1a16eb03"]]);t["default"]=f},cb29:function(a,t,e){var r=e("23e7"),n=e("81d5"),i=e("44d2");r({target:"Array",proto:!0},{fill:n}),i("fill")},d781:function(a,t,e){"use strict";e("b08c")},d875:function(a,t,e){"use strict";var r=e("7a23"),n={class:"line"};function i(a,t,e,i,b,c){var o=Object(r["I"])("svg-icon");return Object(r["A"])(),Object(r["g"])("div",{class:"sound",onClick:t[0]||(t[0]=Object(r["T"])((function(){return c.toggleSound&&c.toggleSound.apply(c,arguments)}),["prevent"]))},[Object(r["S"])(Object(r["h"])("div",n,null,512),[[r["O"],!a.play]]),Object(r["k"])(o,{prefix:"war-",name:"sound",fill:"#C9C9C9",stroke:"white",duration:{}})])}var b=e("5530"),c=e("5502"),o=e("0213"),d={name:"switch-sound",components:{SvgIcon:o["a"]},computed:Object(b["a"])({},Object(c["e"])(["play"])),methods:Object(b["a"])({toggleSound:function(){this.togglePlay()}},Object(c["d"])(["togglePlay"]))},l=(e("d781"),e("d959")),u=e.n(l);const s=u()(d,[["render",i],["__scopeId","data-v-66b3178a"]]);t["a"]=s}}]);
//# sourceMappingURL=chunk-424f638c.6807cab0.js.map