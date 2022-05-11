import{G as H,a as _,$ as Ce,a4 as ze,Q as on,r as m,an as _e,bd as Ae,ai as Se,be as tn,d as E,h as t,bf as an,q as g,p as x,aC as c,bg as ln,bh as sn,a9 as $e,bi as un,aF as ce,N as cn,aN as J,Y as dn,bj as fn,v as z,aH as O,x as hn,y as Be,b5 as vn,Z as ge,M as pn,b2 as be,a3 as gn,a_ as bn,C as mn,aL as G,aM as xn,b3 as wn,ag as yn,bk as Cn,X as me,D as zn,B as se,aK as _n,aW as y,V as xe}from"./index.a36190ed.js";import{u as An}from"./use-locale.40cf2c9b.js";const Sn=/^(\d|\.)+$/,we=/(\d|\.)+/;function Jn(e,{c:o=1,offset:a=0,attachPx:d=!0}={}){if(typeof e=="number"){const s=(e+a)*o;return s===0?"0":`${s}px`}else if(typeof e=="string")if(Sn.test(e)){const s=(Number(e)+a)*o;return d?s===0?"0":`${s}px`:`${s}`}else{const s=we.exec(e);return s?e.replace(we,String((Number(s[0])+a)*o)):e}return e}function $n(e,o){return H(e,a=>{a!==void 0&&(o.value=a)}),_(()=>e.value===void 0?o.value:e.value)}function eo(e,o,a){var d;const s=Ce(e,null);if(s===null)return;const l=(d=ze())===null||d===void 0?void 0:d.proxy;H(a,u),u(a.value),on(()=>{u(void 0,a.value)});function u(w,h){const C=s[o];h!==void 0&&f(C,h),w!==void 0&&T(C,w)}function f(w,h){w[h]||(w[h]=[]),w[h].splice(w[h].findIndex(C=>C===l),1)}function T(w,h){w[h]||(w[h]=[]),~w[h].findIndex(C=>C===l)||w[h].push(l)}}function ro(e,o,a){if(!o)return e;const d=m(e.value);let s=null;return H(e,l=>{s!==null&&window.clearTimeout(s),l===!0?a&&!a.value?d.value=!0:s=window.setTimeout(()=>{d.value=!0},o):d.value=!1}),d}var Bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fn=/^\w*$/;function Pn(e,o){if(_e(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||Ae(e)?!0:Fn.test(e)||!Bn.test(e)||o!=null&&e in Object(o)}var En="Expected a function";function de(e,o){if(typeof e!="function"||o!=null&&typeof o!="function")throw new TypeError(En);var a=function(){var d=arguments,s=o?o.apply(this,d):d[0],l=a.cache;if(l.has(s))return l.get(s);var u=e.apply(this,d);return a.cache=l.set(s,u)||l,u};return a.cache=new(de.Cache||Se),a}de.Cache=Se;var Rn=500;function In(e){var o=de(e,function(d){return a.size===Rn&&a.clear(),d}),a=o.cache;return o}var Mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tn=/\\(\\)?/g,kn=In(function(e){var o=[];return e.charCodeAt(0)===46&&o.push(""),e.replace(Mn,function(a,d,s,l){o.push(s?l.replace(Tn,"$1"):d||a)}),o}),Dn=kn;function Ln(e,o){return _e(e)?e:Pn(e,o)?[e]:Dn(tn(e))}var Vn=1/0;function Wn(e){if(typeof e=="string"||Ae(e))return e;var o=e+"";return o=="0"&&1/e==-Vn?"-0":o}function Nn(e,o){o=Ln(o,e);for(var a=0,d=o.length;e!=null&&a<d;)e=e[Wn(o[a++])];return a&&a==d?e:void 0}function no(e,o,a){var d=e==null?void 0:Nn(e,o);return d===void 0?a:d}var On=E({name:"Eye",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Hn=E({name:"EyeOff",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),t("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),t("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),t("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),t("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Un=E({name:"ChevronDown",render(){return t("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Kn=an("clear",t("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor","fill-rule":"nonzero"},t("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),jn=g("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[x(">",[c("clear",`
 font-size: var(--n-clear-size);
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 `,[x("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),x("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),c("placeholder",`
 display: flex;
 `),c("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ln({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),ue=E({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return sn("-base-clear",jn,$e(e,"clsPrefix")),{handleMouseDown(o){o.preventDefault()}}},render(){const{clsPrefix:e}=this;return t("div",{class:`${e}-base-clear`},t(un,null,{default:()=>{var o,a;return this.show?t(ce,{clsPrefix:e,key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},{default:()=>t(Kn,null)}):t("div",{key:"icon",class:`${e}-base-clear__placeholder`},(a=(o=this.$slots).default)===null||a===void 0?void 0:a.call(o))}}))}}),Xn=E({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:o}){return()=>{const{clsPrefix:a}=e;return t(cn,{clsPrefix:a,class:`${a}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?t(ue,{clsPrefix:a,show:e.showClear,onClear:e.onClear},{default:()=>t(ce,{clsPrefix:a,class:`${a}-base-suffix__arrow`},{default:()=>J(o.default,()=>[t(Un,null)])})}):null})}}});const Fe=dn("n-input");function Yn(e){let o=0;for(const a of e)o++;return o}function Q(e){return["",void 0,null].includes(e)}var ye=E({name:"InputWordCount",setup(e,{slots:o}){const{mergedValueRef:a,maxlengthRef:d,mergedClsPrefixRef:s}=Ce(Fe),l=_(()=>{const{value:u}=a;return u===null||Array.isArray(u)?0:Yn(u)});return()=>{const{value:u}=d,{value:f}=a;return t("span",{class:`${s.value}-input-word-count`},fn(o.default,{value:f===null||Array.isArray(f)?"":f},()=>[u===void 0?l.value:`${l.value} / ${u}`]))}}}),Zn=g("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[c("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),c("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),c("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[x("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),x("&::placeholder","color: #0000;"),x("&:-webkit-autofill ~",[c("placeholder","display: none;")])]),z("round",[O("textarea","border-radius: calc(var(--n-height) / 2);")]),c("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[x("span",`
 width: 100%;
 display: inline-block;
 `)]),z("textarea",[c("placeholder","overflow: visible;")]),O("autosize","width: 100%;"),z("autosize",[c("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),g("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),c("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),c("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[x("+",[c("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),O("textarea",[c("placeholder","white-space: nowrap;")]),c("eye",`
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[g("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[g("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),c("textarea",`
 position: static;
 `),c("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),c("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[c("input-el, placeholder","text-align: center;"),c("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[g("icon",`
 color: var(--n-icon-color);
 `),g("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[c("border","border: var(--n-border-disabled);"),c("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),c("placeholder","color: var(--n-placeholder-color-disabled);"),c("separator","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),c("suffix, prefix","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),O("disabled",[c("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[x("&:hover",`
 color: var(--n-icon-color-hover);
 `),x("&:active",`
 color: var(--n-icon-color-pressed);
 `),g("icon",[x("&:hover",`
 color: var(--n-icon-color-hover);
 `),x("&:active",`
 color: var(--n-icon-color-pressed);
 `)])]),x("&:hover",[c("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[c("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),c("state-border",`
 border-color: #0000;
 z-index: 1;
 `),c("prefix","margin-right: 4px;"),c("suffix",`
 margin-left: 4px;
 `),c("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[g("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),g("base-clear",`
 font-size: var(--n-icon-size);
 `,[c("placeholder",[g("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),x(">",[g("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),g("base-icon",`
 font-size: var(--n-icon-size);
 `)]),g("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>z(`${e}-status`,[O("disabled",[g("base-loading",`
 color: var(--n-loading-color-${e})
 `),c("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),c("state-border",`
 border: var(--n-border-${e});
 `),x("&:hover",[c("state-border",`
 border: var(--n-border-hover-${e});
 `)]),x("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[c("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${e});
 `,[c("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]);const qn=Object.assign(Object.assign({},Be.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var oo=E({name:"Input",props:qn,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:a,inlineThemeDisabled:d,mergedRtlRef:s}=hn(e),l=Be("Input","-input",Zn,Cn,e,o),u=m(null),f=m(null),T=m(null),w=m(null),h=m(null),C=m(null),S=m(null),{localeRef:Pe}=An("Input"),U=m(e.defaultValue),Ee=$e(e,"value"),A=$n(Ee,U),k=vn(e),{mergedSizeRef:ee,mergedDisabledRef:R,mergedStatusRef:Re}=k,I=m(!1),D=m(!1),$=m(!1),L=m(!1);let re=null;const ne=_(()=>{const{placeholder:r,pair:n}=e;return n?Array.isArray(r)?r:r===void 0?["",""]:[r,r]:r===void 0?[Pe.value.placeholder]:[r]}),Ie=_(()=>{const{value:r}=$,{value:n}=A,{value:i}=ne;return!r&&(Q(n)||Array.isArray(n)&&Q(n[0]))&&i[0]}),Me=_(()=>{const{value:r}=$,{value:n}=A,{value:i}=ne;return!r&&i[1]&&(Q(n)||Array.isArray(n)&&Q(n[1]))}),oe=ge(()=>e.internalForceFocus||I.value),Te=ge(()=>{if(R.value||e.readonly||!e.clearable||!oe.value&&!D.value)return!1;const{value:r}=A,{value:n}=oe;return e.pair?!!(Array.isArray(r)&&(r[0]||r[1]))&&(D.value||n):!!r&&(D.value||n)}),te=_(()=>{const{showPasswordOn:r}=e;if(r)return r;if(e.showPasswordToggle)return"click"}),V=m(!1),ke=_(()=>{const{textDecoration:r}=e;return r?Array.isArray(r)?r.map(n=>({textDecoration:n})):[{textDecoration:r}]:["",""]}),fe=m(void 0),De=()=>{var r,n;if(e.type==="textarea"){const{autosize:i}=e;if(i&&(fe.value=(n=(r=S.value)===null||r===void 0?void 0:r.$el)===null||n===void 0?void 0:n.offsetWidth),!f.value||typeof i=="boolean")return;const{paddingTop:v,paddingBottom:p,lineHeight:b}=window.getComputedStyle(f.value),B=Number(v.slice(0,-2)),F=Number(p.slice(0,-2)),P=Number(b.slice(0,-2)),{value:W}=T;if(!W)return;if(i.minRows){const N=Math.max(i.minRows,1),le=`${B+F+P*N}px`;W.style.minHeight=le}if(i.maxRows){const N=`${B+F+P*i.maxRows}px`;W.style.maxHeight=N}}},Le=_(()=>{const{maxlength:r}=e;return r===void 0?void 0:Number(r)});pn(()=>{const{value:r}=A;Array.isArray(r)||ie(r)});const Ve=ze().proxy;function K(r){const{onUpdateValue:n,"onUpdate:value":i,onInput:v}=e,{nTriggerFormInput:p}=k;n&&y(n,r),i&&y(i,r),v&&y(v,r),U.value=r,p()}function j(r){const{onChange:n}=e,{nTriggerFormChange:i}=k;n&&y(n,r),U.value=r,i()}function We(r){const{onBlur:n}=e,{nTriggerFormBlur:i}=k;n&&y(n,r),i()}function Ne(r){const{onFocus:n}=e,{nTriggerFormFocus:i}=k;n&&y(n,r),i()}function Oe(r){const{onClear:n}=e;n&&y(n,r)}function He(r){const{onInputBlur:n}=e;n&&y(n,r)}function Ue(r){const{onInputFocus:n}=e;n&&y(n,r)}function Ke(){const{onDeactivate:r}=e;r&&y(r)}function je(){const{onActivate:r}=e;r&&y(r)}function Xe(r){const{onClick:n}=e;n&&y(n,r)}function Ye(r){const{onWrapperFocus:n}=e;n&&y(n,r)}function Ze(r){const{onWrapperBlur:n}=e;n&&y(n,r)}function qe(){$.value=!0}function Ge(r){$.value=!1,r.target===C.value?X(r,1):X(r,0)}function X(r,n=0,i="input"){const v=r.target.value;if(ie(v),e.type==="textarea"){const{value:b}=S;b&&b.syncUnifiedContainer()}if(re=v,$.value)return;const p=v;if(!e.pair)i==="input"?K(p):j(p);else{let{value:b}=A;Array.isArray(b)?b=[...b]:b=["",""],b[n]=p,i==="input"?K(b):j(b)}Ve.$forceUpdate()}function Qe(r){He(r),r.relatedTarget===u.value&&Ke(),r.relatedTarget!==null&&(r.relatedTarget===h.value||r.relatedTarget===C.value||r.relatedTarget===f.value)||(L.value=!1),Y(r,"blur")}function Je(r){Ue(r),I.value=!0,L.value=!0,je(),Y(r,"focus")}function er(r){e.passivelyActivated&&(Ze(r),Y(r,"blur"))}function rr(r){e.passivelyActivated&&(I.value=!0,Ye(r),Y(r,"focus"))}function Y(r,n){r.relatedTarget!==null&&(r.relatedTarget===h.value||r.relatedTarget===C.value||r.relatedTarget===f.value||r.relatedTarget===u.value)||(n==="focus"?(Ne(r),I.value=!0):n==="blur"&&(We(r),I.value=!1))}function nr(r,n){X(r,n,"change")}function or(r){Xe(r)}function tr(r){Oe(r),e.pair?(K(["",""]),j(["",""])):(K(""),j(""))}function ar(r){const{onMousedown:n}=e;n&&n(r);const{tagName:i}=r.target;if(i!=="INPUT"&&i!=="TEXTAREA"){if(e.resizable){const{value:v}=u;if(v){const{left:p,top:b,width:B,height:F}=v.getBoundingClientRect(),P=14;if(p+B-P<r.clientX&&r.clientY<p+B&&b+F-P<r.clientY&&r.clientY<b+F)return}}r.preventDefault(),I.value||he()}}function ir(){var r;D.value=!0,e.type==="textarea"&&((r=S.value)===null||r===void 0||r.handleMouseEnterWrapper())}function lr(){var r;D.value=!1,e.type==="textarea"&&((r=S.value)===null||r===void 0||r.handleMouseLeaveWrapper())}function sr(){R.value||te.value==="click"&&(V.value=!V.value)}function ur(r){if(R.value)return;r.preventDefault();const n=v=>{v.preventDefault(),xe("mouseup",document,n)};if(me("mouseup",document,n),te.value!=="mousedown")return;V.value=!0;const i=()=>{V.value=!1,xe("mouseup",document,i)};me("mouseup",document,i)}function cr(r){var n;switch((n=e.onKeydown)===null||n===void 0||n.call(e,r),r.code){case"Escape":ae();break;case"Enter":case"NumpadEnter":dr(r);break}}function dr(r){var n,i;if(e.passivelyActivated){const{value:v}=L;if(v){e.internalDeactivateOnEnter&&ae();return}r.preventDefault(),e.type==="textarea"?(n=f.value)===null||n===void 0||n.focus():(i=h.value)===null||i===void 0||i.focus()}}function ae(){e.passivelyActivated&&(L.value=!1,zn(()=>{var r;(r=u.value)===null||r===void 0||r.focus()}))}function he(){var r,n,i;R.value||(e.passivelyActivated?(r=u.value)===null||r===void 0||r.focus():((n=f.value)===null||n===void 0||n.focus(),(i=h.value)===null||i===void 0||i.focus()))}function fr(){var r;!((r=u.value)===null||r===void 0)&&r.contains(document.activeElement)&&document.activeElement.blur()}function hr(){var r,n;(r=f.value)===null||r===void 0||r.select(),(n=h.value)===null||n===void 0||n.select()}function vr(){R.value||(f.value?f.value.focus():h.value&&h.value.focus())}function pr(){const{value:r}=u;(r==null?void 0:r.contains(document.activeElement))&&r!==document.activeElement&&ae()}function ie(r){const{type:n,pair:i,autosize:v}=e;if(!i&&v)if(n==="textarea"){const{value:p}=T;p&&(p.textContent=(r!=null?r:"")+`\r
`)}else{const{value:p}=w;p&&(r?p.textContent=r:p.innerHTML="&nbsp;")}}function gr(){De()}const ve=m({top:"0"});function br(r){var n;const{scrollTop:i}=r.target;ve.value.top=`${-i}px`,(n=S.value)===null||n===void 0||n.syncUnifiedContainer()}let Z=null;be(()=>{const{autosize:r,type:n}=e;r&&n==="textarea"?Z=H(A,i=>{!Array.isArray(i)&&i!==re&&ie(i)}):Z==null||Z()});let q=null;be(()=>{e.type==="textarea"?q=H(A,r=>{var n;!Array.isArray(r)&&r!==re&&((n=S.value)===null||n===void 0||n.syncUnifiedContainer())}):q==null||q()}),gn(Fe,{mergedValueRef:A,maxlengthRef:Le,mergedClsPrefixRef:o});const mr={wrapperElRef:u,inputElRef:h,textareaElRef:f,isCompositing:$,focus:he,blur:fr,select:hr,deactivate:pr,activate:vr},xr=bn("Input",s,o),pe=_(()=>{const{value:r}=ee,{common:{cubicBezierEaseInOut:n},self:{color:i,borderRadius:v,textColor:p,caretColor:b,caretColorError:B,caretColorWarning:F,textDecorationColor:P,border:W,borderDisabled:N,borderHover:le,borderFocus:wr,placeholderColor:yr,placeholderColorDisabled:Cr,lineHeightTextarea:zr,colorDisabled:_r,colorFocus:Ar,textColorDisabled:Sr,boxShadowFocus:$r,iconSize:Br,colorFocusWarning:Fr,boxShadowFocusWarning:Pr,borderWarning:Er,borderFocusWarning:Rr,borderHoverWarning:Ir,colorFocusError:Mr,boxShadowFocusError:Tr,borderError:kr,borderFocusError:Dr,borderHoverError:Lr,clearSize:Vr,clearColor:Wr,clearColorHover:Nr,clearColorPressed:Or,iconColor:Hr,iconColorDisabled:Ur,suffixTextColor:Kr,countTextColor:jr,iconColorHover:Xr,iconColorPressed:Yr,loadingColor:Zr,loadingColorError:qr,loadingColorWarning:Gr,[se("padding",r)]:Qr,[se("fontSize",r)]:Jr,[se("height",r)]:en}}=l.value,{left:rn,right:nn}=_n(Qr);return{"--n-bezier":n,"--n-count-text-color":jr,"--n-color":i,"--n-font-size":Jr,"--n-border-radius":v,"--n-height":en,"--n-padding-left":rn,"--n-padding-right":nn,"--n-text-color":p,"--n-caret-color":b,"--n-text-decoration-color":P,"--n-border":W,"--n-border-disabled":N,"--n-border-hover":le,"--n-border-focus":wr,"--n-placeholder-color":yr,"--n-placeholder-color-disabled":Cr,"--n-icon-size":Br,"--n-line-height-textarea":zr,"--n-color-disabled":_r,"--n-color-focus":Ar,"--n-text-color-disabled":Sr,"--n-box-shadow-focus":$r,"--n-loading-color":Zr,"--n-caret-color-warning":F,"--n-color-focus-warning":Fr,"--n-box-shadow-focus-warning":Pr,"--n-border-warning":Er,"--n-border-focus-warning":Rr,"--n-border-hover-warning":Ir,"--n-loading-color-warning":Gr,"--n-caret-color-error":B,"--n-color-focus-error":Mr,"--n-box-shadow-focus-error":Tr,"--n-border-error":kr,"--n-border-focus-error":Dr,"--n-border-hover-error":Lr,"--n-loading-color-error":qr,"--n-clear-color":Wr,"--n-clear-size":Vr,"--n-clear-color-hover":Nr,"--n-clear-color-pressed":Or,"--n-icon-color":Hr,"--n-icon-color-hover":Xr,"--n-icon-color-pressed":Yr,"--n-icon-color-disabled":Ur,"--n-suffix-text-color":Kr}}),M=d?mn("input",_(()=>{const{value:r}=ee;return r[0]}),pe,e):void 0;return Object.assign(Object.assign({},mr),{wrapperElRef:u,inputElRef:h,inputMirrorElRef:w,inputEl2Ref:C,textareaElRef:f,textareaMirrorElRef:T,textareaScrollbarInstRef:S,rtlEnabled:xr,uncontrolledValue:U,mergedValue:A,passwordVisible:V,mergedPlaceholder:ne,showPlaceholder1:Ie,showPlaceholder2:Me,mergedFocus:oe,isComposing:$,activated:L,showClearButton:Te,mergedSize:ee,mergedDisabled:R,textDecorationStyle:ke,mergedClsPrefix:o,mergedBordered:a,mergedShowPasswordOn:te,placeholderStyle:ve,mergedStatus:Re,textAreaScrollContainerWidth:fe,handleTextAreaScroll:br,handleCompositionStart:qe,handleCompositionEnd:Ge,handleInput:X,handleInputBlur:Qe,handleInputFocus:Je,handleWrapperBlur:er,handleWrapperFocus:rr,handleMouseEnter:ir,handleMouseLeave:lr,handleMouseDown:ar,handleChange:nr,handleClick:or,handleClear:tr,handlePasswordToggleClick:sr,handlePasswordToggleMousedown:ur,handleWrapperKeyDown:cr,handleTextAreaMirrorResize:gr,getTextareaScrollContainer:()=>f.value,mergedTheme:l,cssVars:d?void 0:pe,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender})},render(){const{mergedClsPrefix:e,mergedStatus:o,themeClass:a,onRender:d,$slots:s}=this;return d==null||d(),t("div",{ref:"wrapperElRef",class:[`${e}-input`,a,o&&`${e}-input--${o}-status`,{[`${e}-input--rtl`]:this.rtlEnabled,[`${e}-input--disabled`]:this.mergedDisabled,[`${e}-input--textarea`]:this.type==="textarea",[`${e}-input--resizable`]:this.resizable&&!this.autosize,[`${e}-input--autosize`]:this.autosize,[`${e}-input--round`]:this.round&&this.type!=="textarea",[`${e}-input--pair`]:this.pair,[`${e}-input--focus`]:this.mergedFocus,[`${e}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},t("div",{class:`${e}-input-wrapper`},G(s.prefix,l=>l&&t("div",{class:`${e}-input__prefix`},l)),this.type==="textarea"?t(xn,{ref:"textareaScrollbarInstRef",class:`${e}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{const{textAreaScrollContainerWidth:l}=this,u={width:this.autosize&&l&&`${l}px`};return t(wn,null,t("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:`${e}-input__textarea-el`,autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],u],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?t("div",{class:`${e}-input__placeholder`,style:[this.placeholderStyle,u],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?t(yn,{onResize:this.handleTextAreaMirrorResize},{default:()=>t("div",{ref:"textareaMirrorElRef",class:`${e}-input__textarea-mirror`,key:"mirror"})}):null)}}):t("div",{class:`${e}-input__input`},t("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:`${e}-input__input-el`,style:this.textDecorationStyle[0],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,0),onChange:l=>this.handleChange(l,0)})),this.showPlaceholder1?t("div",{class:`${e}-input__placeholder`},t("span",null,this.mergedPlaceholder[0])):null,this.autosize?t("div",{class:`${e}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&G(s.suffix,l=>l||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?t("div",{class:`${e}-input__suffix`},[G(s.clear,u=>(this.clearable||u)&&t(ue,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{default:()=>u})),this.internalLoadingBeforeSuffix?null:l,this.loading!==void 0?t(Xn,{clsPrefix:e,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?l:null,this.showCount&&this.type!=="textarea"?t(ye,null,{default:u=>{var f;return(f=s.count)===null||f===void 0?void 0:f.call(s,u)}}):null,this.mergedShowPasswordOn&&this.type==="password"?t(ce,{clsPrefix:e,class:`${e}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},{default:()=>this.passwordVisible?J(s["password-visible-icon"],()=>[t(On,null)]):J(s["password-invisible-icon"],()=>[t(Hn,null)])}):null]):null)),this.pair?t("span",{class:`${e}-input__separator`},J(s.separator,()=>[this.separator])):null,this.pair?t("div",{class:`${e}-input-wrapper`},t("div",{class:`${e}-input__input`},t("input",{ref:"inputEl2Ref",type:this.type,class:`${e}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:l=>this.handleInput(l,1),onChange:l=>this.handleChange(l,1)}),this.showPlaceholder2?t("div",{class:`${e}-input__placeholder`},t("span",null,this.mergedPlaceholder[1])):null),G(s.suffix,l=>(this.clearable||l)&&t("div",{class:`${e}-input__suffix`},[this.clearable&&t(ue,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{default:()=>{var u;return(u=s.clear)===null||u===void 0?void 0:u.call(s)}}),l]))):null,this.mergedBordered?t("div",{class:`${e}-input__border`}):null,this.mergedBordered?t("div",{class:`${e}-input__state-border`}):null,this.showCount&&this.type==="textarea"?t(ye,null,{default:l=>{var u;return(u=s.count)===null||u===void 0?void 0:u.call(s,l)}}):null)}});export{Un as C,Xn as N,oo as _,ro as a,Nn as b,Ln as c,eo as d,Jn as f,no as g,Pn as i,Wn as t,$n as u};
