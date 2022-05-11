import{_ as $}from"./avatar.981317ad.js";import{be as S,bE as I,d as C,r as P,a as F,M as D,b2 as k,q as v,aC as p,x as L,y as z,bF as O,C as j,h as d,aL as b,bG as W,o as y,b as q,w as x,l as _,c as h,m as E,e as G,g as H,bH as U,f as X,b3 as Y,P as J}from"./index.a36190ed.js";import{u as K}from"./use-locale.40cf2c9b.js";import{t as T}from"./toNumber.4a58334a.js";import{_ as Q}from"./Space.1d40ed16.js";var B=1/0,Z=17976931348623157e292;function ee(e){if(!e)return e===0?e:0;if(e=T(e),e===B||e===-B){var t=e<0?-1:1;return t*Z}return e===e?e:0}function te(e){var t=ee(e),a=t%1;return t===t?a?t-a:t:0}var ae=I.isFinite,ne=Math.min;function se(e){var t=Math[e];return function(a,n){if(a=T(a),n=n==null?0:ne(te(n),292),n&&ae(a)){var i=(S(a)+"e").split("e"),o=t(i[0]+"e"+(+i[1]+n));return i=(S(o)+"e").split("e"),+(i[0]+"e"+(+i[1]-n))}return t(a)}}var oe=se("round"),ie=oe;const re=e=>1-Math.pow(1-e,5);function le(e){const{from:t,to:a,duration:n,onUpdate:i,onFinish:o}=e,s=()=>{const u=performance.now(),c=Math.min(u-f,n),l=t+(a-t)*re(c/n);if(c===n){o();return}i(l),requestAnimationFrame(s)},f=performance.now();s()}const ue={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3}};var ce=C({name:"NumberAnimation",props:ue,setup(e){const{localeRef:t}=K("name"),{duration:a}=e,n=P(e.from),i=F(()=>{const{locale:r}=e;return r!==void 0?r:t.value});let o=!1;const s=r=>{n.value=r},f=()=>{n.value=e.to,o=!1},u=(r=e.from,m=e.to)=>{o=!0,n.value=e.from,r!==m&&le({from:r,to:m,duration:a,onUpdate:s,onFinish:f})},c=F(()=>{var r;const g=ie(n.value,e.precision).toFixed(e.precision).split("."),N=new Intl.NumberFormat(i.value),V=(r=N.formatToParts(.5).find(M=>M.type==="decimal"))===null||r===void 0?void 0:r.value,R=e.showSeparator?N.format(Number(g[0])):g[0],A=g[1];return{integer:R,decimal:A,decimalSeparator:V}});function l(){o||u()}return D(()=>{k(()=>{e.active&&u()})}),Object.assign({formattedValue:c},{play:l})},render(){const{formattedValue:{integer:e,decimal:t,decimalSeparator:a}}=this;return[e,t?a:null,t]}}),fe=v("statistic",[p("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),v("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[p("prefix",`
 margin: 0 4px 0 0;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[v("icon",{verticalAlign:"-0.125em"})]),p("content",`
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),p("suffix",`
 margin: 0 0 0 4px;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[v("icon",{verticalAlign:"-0.125em"})])])]);const de=Object.assign(Object.assign({},z.props),{tabularNums:Boolean,label:String,value:[String,Number]});var me=C({name:"Statistic",props:de,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:a}=L(e),n=z("Statistic","-statistic",fe,O,e,t),i=F(()=>{const{self:{labelFontWeight:s,valueFontWeight:f,valuePrefixTextColor:u,labelTextColor:c,valueSuffixTextColor:l,valueTextColor:w,labelFontSize:r},common:{cubicBezierEaseInOut:m}}=n.value;return{"--n-bezier":m,"--n-label-font-size":r,"--n-label-font-weight":s,"--n-label-text-color":c,"--n-value-font-weight":f,"--n-value-prefix-text-color":u,"--n-value-suffix-text-color":l,"--n-value-text-color":w}}),o=a?j("statistic",void 0,i,e):void 0;return{mergedClsPrefix:t,cssVars:a?void 0:i,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{mergedClsPrefix:t,$slots:{default:a,label:n,prefix:i,suffix:o}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${t}-statistic`,this.themeClass],style:this.cssVars},b(n,s=>d("div",{class:`${t}-statistic__label`},this.label||s)),d("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},b(i,s=>s&&d("span",{class:`${t}-statistic-value__prefix`},s)),this.value!==void 0?d("span",{class:`${t}-statistic-value__content`},this.value):b(a,s=>s&&d("span",{class:`${t}-statistic-value__content`},s)),b(o,s=>s&&d("span",{class:`${t}-statistic-value__suffix`},s))))}});const _e={class:"flex-y-center justify-between"},ve={class:"flex-y-center"},pe={class:"pl-12px"},be={class:"text-18px font-semibold"},xe=_("p",{class:"leading-30px text-[#999]"},"\u4ECA\u65E5\u591A\u4E91\u8F6C\u6674\uFF0C20\u2103 - 25\u2103\uFF01",-1),Ne=C({setup(e){const t=W(),a=[{id:0,label:"\u65B0\u589E\u7528\u6237",value:"15",detail:"\u4F4D"},{id:1,label:"\u65B0\u589E\u8BA2\u5355",value:"5890",detail:"\u5355"},{id:2,label:"\u603B\u6D41\u6C34",value:"8835048",detail:"\u5143"}];return(n,i)=>{const o=$,s=ce,f=me,u=Q,c=J;return y(),q(c,{bordered:!1,class:"rounded-16px shadow-sm"},{default:x(()=>[_("div",_e,[_("div",ve,[h(o,{class:"text-70px"}),_("div",pe,[_("h3",be,"\u65E9\u5B89\uFF0C"+E(G(t).userInfo.userName)+", \u4ECA\u5929\u53C8\u662F\u5145\u6EE1\u6D3B\u529B\u7684\u4E00\u5929\uFF01",1),xe])]),h(u,{size:24,wrap:!1},{default:x(()=>[(y(),H(Y,null,U(a,l=>h(f,{key:l.id,label:l.label,"tabular-nums":"",class:"whitespace-nowrap"},{suffix:x(()=>[X(E(l.detail),1)]),default:x(()=>[h(s,{from:0,to:Number(l.value),"show-separator":""},null,8,["to"])]),_:2},1032,["label"])),64))]),_:1})])]),_:1})}}});export{Ne as _};
