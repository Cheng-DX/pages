import{d as E,r as P,a8 as Uo,h as d,bE as No,at as Gn,q as _,p as z,aC as F,x as Xe,bh as Oo,y as _e,b$ as jo,a3 as ze,a9 as ge,a as w,C as ft,Y as it,M as hn,H as Vt,$ as we,c0 as je,c1 as De,c2 as We,c3 as tt,c4 as He,c5 as dt,c6 as nt,X as Ke,V as ut,b2 as ht,c7 as wt,c8 as tn,c9 as nn,ca as on,b8 as Wo,aI as Ko,v as W,b5 as fn,cb as qo,G as Re,B as pe,aa as Zn,T as pn,J as at,aQ as Xo,aW as te,_ as ot,D as Ct,cc as mn,a1 as Yo,a2 as Go,a0 as Zo,K as Tt,aR as Jo,af as Qe,aM as vn,bn as Ht,s as Qo,cd as er,ab as tr,ac as nr,bW as Jn,b0 as Qn,ce as or,aX as eo,cf as rr,bk as ar,cg as lr,aZ as ir,Z as Le,a_ as sr,ch as Mn,aN as In,aF as Pt,aG as rt,b3 as ce,ci as cr,bm as bn,aV as Kt,aH as $t,cj as dr,ck as ur,bg as Dn,A as qt,ae as Pe,aS as Xt,aL as Ve,bi as hr,N as fr,cl as pr,cm as mr,bc as Yt,ag as Tn,cn as vr,aU as br,co as Ee,bI as oe,o as b,g as T,b as L,w as S,I as xe,e as i,n as Se,c as v,O as me,l as O,L as ve,m as Ae,f as ye,bH as qe,cp as to,cq as gr,cr as no,bT as xr,bR as oo,bK as ro,cs as _r,ct as St,cu as yr,cv as Rt,i as ao,cw as wr,E as lo,cx as pt,k as zt,bQ as Lt,cy as Cr,bG as $r,cz as et,cA as Pn,cB as gn,j as kr,cC as Sr,cD as zr,cE as Ar,cF as Rr,cG as io,bZ as Fr,b_ as Br}from"./index.a36190ed.js";import{c as Er,d as Mr,b as Ir,a as Dr,_ as Tr}from"./DarkModeSwitch.6192f6e1.js";import{C as Pr,B as Lr,_ as Vr,a as Hr,b as Ur}from"./index.cb1a70e4.js";import{_ as Ye}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as mt}from"./Divider.bdae0606.js";import{_ as xn,u as lt,f as Ln}from"./Input.d2404834.js";import{_ as vt}from"./Space.1d40ed16.js";import{g as Nr,i as Vn,j as rn,k as Or,l as jr,m as Wr,d as Ut,b as _n,f as Kr,u as an,o as qr,_ as so,e as Xr}from"./Dropdown.4d3c173c.js";import{u as Nt}from"./useBoolean.3e9c7eae.js";import{a as co,_ as uo}from"./Grid.3f511424.js";import{t as Hn}from"./toNumber.4a58334a.js";import{u as ho}from"./use-locale.40cf2c9b.js";import{_ as Yr}from"./avatar.981317ad.js";import"./use-houdini.d0a3a68c.js";import"./get-slot.ef4c002f.js";import"./next-frame-once.3f36dc6b.js";function fo(e,t,n){t/=100,n/=100;const o=t*Math.min(n,1-n)+n;return[e,o?(2-2*n/o)*100:0,o*100]}function Dt(e,t,n){t/=100,n/=100;const o=n-n*t/2,r=Math.min(o,1-o);return[e,r?(n-o)/r*100:0,o*100]}function Oe(e,t,n){t/=100,n/=100;let o=(r,a=(r+e/60)%6)=>n-n*t*Math.max(Math.min(a,4-a,1),0);return[o(5)*255,o(3)*255,o(1)*255]}function ln(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),r=o-Math.min(e,t,n),a=r&&(o==e?(t-n)/r:o==t?2+(n-e)/r:4+(e-t)/r);return[60*(a<0?a+6:a),o&&r/o*100,o*100]}function sn(e,t,n){e/=255,t/=255,n/=255;let o=Math.max(e,t,n),r=o-Math.min(e,t,n),a=1-Math.abs(o+o-r-1),l=r&&(o==e?(t-n)/r:o==t?2+(n-e)/r:4+(e-t)/r);return[60*(l<0?l+6:l),a?r/a*100:0,(o+o-r)*50]}function cn(e,t,n){t/=100,n/=100;let o=t*Math.min(n,1-n),r=(a,l=(a+e/30)%12)=>n-o*Math.max(Math.min(l-3,9-l,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}const Gr=typeof window!="undefined",Zr=Vn(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Vn("&::-webkit-scrollbar",{width:0,height:0})]);var Jr=E({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const n=Uo();return Zr.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Nr,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var a;(a=e.value)===null||a===void 0||a.scrollTo(...r)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Qr=function(){return No.Date.now()},Gt=Qr,ea="Expected a function",ta=Math.max,na=Math.min;function oa(e,t,n){var o,r,a,l,s,c,h=0,f=!1,p=!1,u=!0;if(typeof e!="function")throw new TypeError(ea);t=Hn(t)||0,Gn(n)&&(f=!!n.leading,p="maxWait"in n,a=p?ta(Hn(n.maxWait)||0,t):a,u="trailing"in n?!!n.trailing:u);function y(N){var q=o,A=r;return o=r=void 0,h=N,l=e.apply(A,q),l}function C(N){return h=N,s=setTimeout(k,t),f?y(N):l}function $(N){var q=N-c,A=N-h,V=t-q;return p?na(V,a-A):V}function x(N){var q=N-c,A=N-h;return c===void 0||q>=t||q<0||p&&A>=a}function k(){var N=Gt();if(x(N))return M(N);s=setTimeout(k,$(N))}function M(N){return s=void 0,u&&o?y(N):(o=r=void 0,l)}function U(){s!==void 0&&clearTimeout(s),h=0,o=c=r=s=void 0}function Q(){return s===void 0?l:M(Gt())}function le(){var N=Gt(),q=x(N);if(o=arguments,r=this,c=N,q){if(s===void 0)return C(c);if(p)return clearTimeout(s),s=setTimeout(k,t),y(c)}return s===void 0&&(s=setTimeout(k,t)),l}return le.cancel=U,le.flush=Q,le}var ra="Expected a function";function Zt(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(ra);return Gn(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),oa(e,t,{leading:o,maxWait:t,trailing:r})}var po=E({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),aa=E({name:"Remove",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},d("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),la=E({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),ia=_("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[z(">",[_("input",[z("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),z("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),_("button",[z("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[F("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),z("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[F("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),z("*",[z("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[z(">",[_("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),_("base-selection",[_("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),_("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),F("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),z("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[z(">",[_("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),_("base-selection",[_("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),_("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),F("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const sa={};var ca=E({name:"InputGroup",props:sa,setup(e){const{mergedClsPrefixRef:t}=Xe(e);return Oo("-input-group",ia,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:`${e}-input-group`},this.$slots)}}),da=_("breadcrumb",`
 white-space: nowrap;
`,[z("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),z("a",`
 color: inherit;
 text-decoration: inherit;
 `),_("breadcrumb-item",{fontSize:"var(--n-font-size)",transition:"color .3s var(--n-bezier)",display:"inline-block"},[_("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),F("link",{cursor:"pointer",transition:"color .3s var(--n-bezier)",color:"var(--n-item-text-color)"}),F("separator",{margin:"0 8px",color:"var(--n-separator-color)",transition:"color .3s var(--n-bezier)"}),z("&:hover",[_("icon",{color:"var(--n-item-text-color-hover)"}),F("link",{color:"var(--n-item-text-color-hover)"})]),z("&:active",[_("icon",{color:"var(--n-item-text-color-pressed)"}),F("link",{color:"var(--n-item-text-color-pressed)"})]),z("&:last-child",[F("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `),_("icon",{color:"var(--n-item-text-color-active)"}),F("separator",{display:"none"})])])]);const mo=it("n-breadcrumb"),ua=Object.assign(Object.assign({},_e.props),{separator:{type:String,default:"/"}});var ha=E({name:"Breadcrumb",props:ua,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Xe(e),o=_e("Breadcrumb","-breadcrumb",da,jo,e,t);ze(mo,{separatorRef:ge(e,"separator"),mergedClsPrefixRef:t});const r=w(()=>{const{common:{cubicBezierEaseInOut:l},self:{separatorColor:s,itemTextColor:c,itemTextColorHover:h,itemTextColorPressed:f,itemTextColorActive:p,fontSize:u,fontWeightActive:y}}=o.value;return{"--n-font-size":u,"--n-bezier":l,"--n-item-text-color":c,"--n-item-text-color-hover":h,"--n-item-text-color-pressed":f,"--n-item-text-color-active":p,"--n-separator-color":s,"--n-font-weight-active":y}}),a=n?ft("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}});const fa=Gr?window:null,pa=(e=fa)=>{const t=()=>{const{hash:r,host:a,hostname:l,href:s,origin:c,pathname:h,port:f,protocol:p,search:u}=(e==null?void 0:e.location)||{};return{hash:r,host:a,hostname:l,href:s,origin:c,pathname:h,port:f,protocol:p,search:u}},n=()=>{o.value=t()},o=P(t());return hn(()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))}),Vt(()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))}),o},ma={separator:String,href:String};var va=E({name:"BreadcrumbItem",props:ma,setup(e,{slots:t}){const n=we(mo,null);if(!n)return()=>null;const{separatorRef:o,mergedClsPrefixRef:r}=n,a=pa(),l=w(()=>e.href?"a":"span"),s=w(()=>a.value.href===e.href?"location":null);return()=>{var c;const{value:h}=r;return d("li",{class:`${h}-breadcrumb-item`},d(l.value,{class:`${h}-breadcrumb-item__link`,"aria-current":s.value,href:e.href},t),d("span",{class:`${h}-breadcrumb-item__separator`,"aria-hidden":"true"},t.separator?t.separator():(c=e.separator)!==null&&c!==void 0?c:o.value))}}});function ba(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function kt(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function ga(e){return e=Math.round(e),e>=360?359:e<0?0:e}function xa(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const _a={rgb:{hex(e){return je(De(e))},hsl(e){const[t,n,o,r]=De(e);return We([...sn(t,n,o),r])},hsv(e){const[t,n,o,r]=De(e);return tt([...ln(t,n,o),r])}},hex:{rgb(e){return He(De(e))},hsl(e){const[t,n,o,r]=De(e);return We([...sn(t,n,o),r])},hsv(e){const[t,n,o,r]=De(e);return tt([...ln(t,n,o),r])}},hsl:{hex(e){const[t,n,o,r]=dt(e);return je([...cn(t,n,o),r])},rgb(e){const[t,n,o,r]=dt(e);return He([...cn(t,n,o),r])},hsv(e){const[t,n,o,r]=dt(e);return tt([...fo(t,n,o),r])}},hsv:{hex(e){const[t,n,o,r]=nt(e);return je([...Oe(t,n,o),r])},rgb(e){const[t,n,o,r]=nt(e);return He([...Oe(t,n,o),r])},hsl(e){const[t,n,o,r]=nt(e);return We([...Dt(t,n,o),r])}}};function vo(e,t,n){return n=n||kt(e),n?n===t?e:_a[n][t](e):null}const ct="12px",ya=12,Ze="6px",wa=6,Ca="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var $a=E({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function n(a){!t.value||(Ke("mousemove",document,o),Ke("mouseup",document,r),o(a))}function o(a){const{value:l}=t;if(!l)return;const{width:s,left:c}=l.getBoundingClientRect(),h=ga((a.clientX-c-wa)/(s-ya)*360);e.onUpdateHue(h)}function r(){var a;ut("mousemove",document,o),ut("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:ct,borderRadius:Ze}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Ca,height:ct,borderRadius:Ze,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:Ze,right:Ze,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Ze})`,borderRadius:Ze,width:ct,height:ct}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Ze,width:ct,height:ct}})))))}});const _t="12px",ka=12,Je="6px";var Sa=E({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function n(a){!t.value||!e.rgba||(Ke("mousemove",document,o),Ke("mouseup",document,r),o(a))}function o(a){const{value:l}=t;if(!l)return;const{width:s,left:c}=l.getBoundingClientRect(),h=(a.clientX-c)/(s-ka);e.onUpdateAlpha(xa(h))}function r(){var a;ut("mousemove",document,o),ut("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:w(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:_t,borderRadius:Je},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:Je,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:Je,right:Je,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Je})`,borderRadius:Je,width:_t,height:_t}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:He(this.rgba),borderRadius:Je,width:_t,height:_t}}))))}});const Ft="12px",Bt="6px";var za=E({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=P(null);function n(a){!t.value||(Ke("mousemove",document,o),Ke("mouseup",document,r),o(a))}function o(a){const{value:l}=t;if(!l)return;const{width:s,height:c,left:h,bottom:f}=l.getBoundingClientRect(),p=(f-a.clientY)/c,u=(a.clientX-h)/s,y=100*(u>1?1:u<0?0:u),C=100*(p>1?1:p<0?0:p);e.onUpdateSV(y,C)}function r(){var a;ut("mousemove",document,o),ut("mouseup",document,r),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:w(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Ft,height:Ft,borderRadius:Bt,left:`calc(${this.displayedSv[0]}% - ${Bt})`,bottom:`calc(${this.displayedSv[1]}% - ${Bt})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Bt,width:Ft,height:Ft}})))}});const yn=it("n-color-picker");function Aa(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Ra(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Fa(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Ba(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Ea(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}const Ma={paddingSmall:"0 4px"};var Un=E({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=P(""),{themeRef:n}=we(yn,null);ht(()=>{t.value=o()});function o(){const{value:l}=e;if(l===null)return"";const{label:s}=e;return s==="HEX"?l:s==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function r(l){t.value=l}function a(l){let s,c;switch(e.label){case"HEX":c=Ba(l),c&&e.onUpdateValue(l),t.value=o();break;case"H":s=Ra(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"S":case"L":case"V":s=Fa(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"A":s=Ea(l),s===!1?t.value=o():e.onUpdateValue(s);break;case"R":case"G":case"B":s=Aa(l),s===!1?t.value=o():e.onUpdateValue(s);break}}return{mergedTheme:n,inputValue:t,handleInputChange:a,handleInputUpdateValue:r}},render(){const{mergedTheme:e}=this;return d(xn,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Ma,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Ia=E({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?je:wt)(n));return}let r;switch(e.valueArr===null?r=[0,0,0,0]:r=Array.from(e.valueArr),e.mode){case"hsv":r[t]=n,e.onUpdateValue((o?tt:on)(r));break;case"rgb":r[t]=n,e.onUpdateValue((o?He:nn)(r));break;case"hsl":r[t]=n,e.onUpdateValue((o?We:tn)(r));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(ca,null,{default:()=>{const{mode:n,valueArr:o,showAlpha:r}=this;if(n==="hex"){let a=null;try{a=o===null?null:(r?je:wt)(o)}catch{}return d(Un,{label:"HEX",showAlpha:r,value:a,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(n+(r?"a":"")).split("").map((a,l)=>d(Un,{label:a.toUpperCase(),value:o===null?null:o[l],onUpdateValue:s=>{this.handleUnitUpdateValue(l,s)}}))}}))}}),Da=E({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=we(yn,null);return()=>{const{hsla:o,value:r,clsPrefix:a,onClick:l,disabled:s}=e,c=t.label||n.value;return d("div",{class:[`${a}-color-picker-trigger`,s&&`${a}-color-picker-trigger--disabled`],onClick:s?void 0:l},d("div",{class:`${a}-color-picker-trigger__fill`},d("div",{class:`${a}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?We(o):""}}),r&&o?d("div",{class:`${a}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},c?c(r):r):null))}}});function Ta(e,t){if(t==="hsv"){const[n,o,r,a]=nt(e);return He([...Oe(n,o,r),a])}return e}function Pa(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var La=E({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=w(()=>e.swatches.map(a=>{const l=kt(a);return{value:a,mode:l,legalValue:Ta(a,l)}}));function n(a){const{mode:l}=e;let{value:s,mode:c}=a;return c||(c="hex",/^[a-zA-Z]+$/.test(s)?s=Pa(s):(Wo("color-picker",`color ${s} in swatches is invalid.`),s="#000000")),c===l?s:vo(s,l,c)}function o(a){e.onUpdateColor(n(a))}function r(a,l){a.key==="Enter"&&o(l)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:r}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:n=>this.handleSwatchKeyDown(n,t)},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Va=E({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=kt(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var o;const r=n.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,vo(r.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Ha=z([_("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),_("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Ko(),_("input",`
 text-align: center;
 `)]),_("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[z("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[F("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),z("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),_("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[F("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),_("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[F("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[W("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),_("color-picker-preview",`
 display: flex;
 `,[F("sliders",`
 flex: 1 0 auto;
 `),F("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),F("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),F("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),_("color-picker-input",`
 display: flex;
 align-items: center;
 `,[_("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),F("mode",`
 width: 72px;
 text-align: center;
 `)]),_("color-picker-control",`
 padding: 12px;
 `),_("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[_("button","margin-left: 8px;")]),_("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[F("value",`
 white-space: nowrap;
 position: relative;
 `),F("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),W("disabled","cursor: not-allowed"),_("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[z("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),_("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[_("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[F("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),z("&:focus",`
 outline: none;
 `,[F("fill",[z("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Ua=Object.assign(Object.assign({},_e.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:rn.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Na=E({name:"ColorPicker",props:Ua,setup(e,{slots:t}){const n=P(null);let o=null;const r=fn(e),{mergedSizeRef:a,mergedDisabledRef:l}=r,{localeRef:s}=ho("global"),{mergedClsPrefixRef:c,namespaceRef:h,inlineThemeDisabled:f}=Xe(e),p=_e("ColorPicker","-color-picker",Ha,qo,e,c);ze(yn,{themeRef:p,renderLabelRef:ge(e,"renderLabel"),colorPickerSlots:t});const u=P(e.defaultShow),y=lt(ge(e,"show"),u);function C(m){const{onUpdateShow:I,"onUpdate:show":j}=e;I&&te(I,m),j&&te(j,m),u.value=m}const{defaultValue:$}=e,x=P($===void 0?ba(e.modes,e.showAlpha):$),k=lt(ge(e,"value"),x),M=P([k.value]),U=P(0),Q=w(()=>kt(k.value)),{modes:le}=e,N=P(kt(k.value)||le[0]||"rgb");function q(){const{modes:m}=e,{value:I}=N,j=m.findIndex(Y=>Y===I);~j?N.value=m[(j+1)%m.length]:N.value="rgb"}let A,V,g,K,G,se,de,re;const B=w(()=>{const{value:m}=k;if(!m)return null;switch(Q.value){case"hsv":return nt(m);case"hsl":return[A,V,g,re]=dt(m),[...fo(A,V,g),re];case"rgb":case"hex":return[G,se,de,re]=De(m),[...ln(G,se,de),re]}}),Ce=w(()=>{const{value:m}=k;if(!m)return null;switch(Q.value){case"rgb":case"hex":return De(m);case"hsv":return[A,V,K,re]=nt(m),[...Oe(A,V,K),re];case"hsl":return[A,V,g,re]=dt(m),[...cn(A,V,g),re]}}),$e=w(()=>{const{value:m}=k;if(!m)return null;switch(Q.value){case"hsl":return dt(m);case"hsv":return[A,V,K,re]=nt(m),[...Dt(A,V,K),re];case"rgb":case"hex":return[G,se,de,re]=De(m),[...sn(G,se,de),re]}}),Ue=w(()=>{switch(N.value){case"rgb":case"hex":return Ce.value;case"hsv":return B.value;case"hsl":return $e.value}}),Fe=P(0),ke=P(1),ue=P([0,0]);function Be(m,I){const{value:j}=B,Y=Fe.value,ee=j?j[3]:1;ue.value=[m,I];const{showAlpha:X}=e;switch(N.value){case"hsv":ne((X?tt:on)([Y,m,I,ee]),"cursor");break;case"hsl":ne((X?We:tn)([...Dt(Y,m,I),ee]),"cursor");break;case"rgb":ne((X?He:nn)([...Oe(Y,m,I),ee]),"cursor");break;case"hex":ne((X?je:wt)([...Oe(Y,m,I),ee]),"cursor");break}}function Me(m){Fe.value=m;const{value:I}=B;if(!I)return;const[,j,Y,ee]=I,{showAlpha:X}=e;switch(N.value){case"hsv":ne((X?tt:on)([m,j,Y,ee]),"cursor");break;case"rgb":ne((X?He:nn)([...Oe(m,j,Y),ee]),"cursor");break;case"hex":ne((X?je:wt)([...Oe(m,j,Y),ee]),"cursor");break;case"hsl":ne((X?We:tn)([...Dt(m,j,Y),ee]),"cursor");break}}function Ne(m){switch(N.value){case"hsv":[A,V,K]=B.value,ne(tt([A,V,K,m]),"cursor");break;case"rgb":[G,se,de]=Ce.value,ne(He([G,se,de,m]),"cursor");break;case"hex":[G,se,de]=Ce.value,ne(je([G,se,de,m]),"cursor");break;case"hsl":[A,V,g]=$e.value,ne(We([A,V,g,m]),"cursor");break}ke.value=m}function ne(m,I){I==="cursor"?o=m:o=null;const{nTriggerFormChange:j,nTriggerFormInput:Y}=r,{onUpdateValue:ee,"onUpdate:value":X}=e;ee&&te(ee,m),X&&te(X,m),j(),Y(),x.value=m}function Ge(m){ne(m,"input"),Ct(be)}function be(m=!0){const{value:I}=k;if(I){const{nTriggerFormChange:j,nTriggerFormInput:Y}=r,{onComplete:ee}=e;ee&&ee(I);const{value:X}=M,{value:fe}=U;m&&(X.splice(fe+1,X.length,I),U.value=fe+1),j(),Y()}}function st(){const{value:m}=U;m-1<0||(ne(M.value[m-1],"input"),be(!1),U.value=m-1)}function Ie(){const{value:m}=U;m<0||m+1>=M.value.length||(ne(M.value[m+1],"input"),be(!1),U.value=m+1)}function D(){C(!1)}const H=w(()=>U.value>=1),Z=w(()=>{const{value:m}=M;return m.length>1&&U.value<m.length-1});Re(y,m=>{m||(M.value=[k.value],U.value=0)}),ht(()=>{if(!(o&&o===k.value)){const{value:m}=B;m&&(Fe.value=m[0],ke.value=m[3],ue.value=[m[1],m[2]])}o=null});const J=w(()=>{const{value:m}=a,{common:{cubicBezierEaseInOut:I},self:{textColor:j,color:Y,panelFontSize:ee,boxShadow:X,border:fe,borderRadius:ie,dividerColor:Te,[pe("height",m)]:jt,[pe("fontSize",m)]:Wt}}=p.value;return{"--n-bezier":I,"--n-text-color":j,"--n-color":Y,"--n-panel-font-size":ee,"--n-font-size":Wt,"--n-box-shadow":X,"--n-border":fe,"--n-border-radius":ie,"--n-height":jt,"--n-divider-color":Te}}),ae=f?ft("color-picker",w(()=>a.value[0]),J,e):void 0;function R(){var m;const{value:I}=Ce,{value:j}=Fe,{internalActions:Y,modes:ee,actions:X}=e,{value:fe}=p,{value:ie}=c;return d("div",{class:[`${ie}-color-picker-panel`,ae==null?void 0:ae.themeClass.value],onDragstart:Te=>{Te.preventDefault()},style:f?void 0:J.value},d("div",{class:`${ie}-color-picker-control`},d(za,{clsPrefix:ie,rgba:I,displayedHue:j,displayedSv:ue.value,onUpdateSV:Be,onComplete:be}),d("div",{class:`${ie}-color-picker-preview`},d("div",{class:`${ie}-color-picker-preview__sliders`},d($a,{clsPrefix:ie,hue:j,onUpdateHue:Me,onComplete:be}),e.showAlpha?d(Sa,{clsPrefix:ie,rgba:I,alpha:ke.value,onUpdateAlpha:Ne,onComplete:be}):null),e.showPreview?d(Va,{clsPrefix:ie,mode:N.value,color:Ce.value&&wt(Ce.value),onUpdateColor:Te=>ne(Te,"input")}):null),d(Ia,{clsPrefix:ie,showAlpha:e.showAlpha,mode:N.value,modes:ee,onUpdateMode:q,value:k.value,valueArr:Ue.value,onUpdateValue:Ge}),((m=e.swatches)===null||m===void 0?void 0:m.length)&&d(La,{clsPrefix:ie,mode:N.value,swatches:e.swatches,onUpdateColor:Te=>ne(Te,"input")})),X!=null&&X.length?d("div",{class:`${ie}-color-picker-action`},X.includes("confirm")&&d(ot,{size:"small",onClick:D,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.confirm})):null,t.action?d("div",{class:`${ie}-color-picker-action`},{default:t.action}):Y?d("div",{class:`${ie}-color-picker-action`},Y.includes("undo")&&d(ot,{size:"small",onClick:st,disabled:!H.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.undo}),Y.includes("redo")&&d(ot,{size:"small",onClick:Ie,disabled:!Z.value,theme:fe.peers.Button,themeOverrides:fe.peerOverrides.Button},{default:()=>s.value.redo})):null)}return{mergedClsPrefix:c,namespace:h,selfRef:n,hsla:$e,rgba:Ce,mergedShow:y,mergedDisabled:l,isMounted:Zn(),adjustedTo:rn(e),mergedValue:k,handleTriggerClick(){C(!0)},handleClickOutside(m){var I;!((I=n.value)===null||I===void 0)&&I.contains(m.target)||C(!1)},renderPanel:R,cssVars:f?void 0:J,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(Or,null,{default:()=>[d(jr,null,{default:()=>d(Da,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(Wr,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===rn.tdkey,to:this.adjustedTo},{default:()=>d(pn,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?at(this.renderPanel(),[[Xo,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Oa=E({name:"NDrawerContent",inheritAttrs:!1,props:{show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=P(e.show),n=P(null),o=we(mn);ht(()=>{e.show&&(t.value=!0)});function r(){var a;t.value=!1,(a=e.onAfterLeave)===null||a===void 0||a.call(e)}return ze(Yo,n),ze(Go,null),ze(Zo,null),{bodyRef:n,mergedClsPrefix:o.mergedClsPrefixRef,isMounted:o.isMountedRef,mergedTheme:o.mergedThemeRef,displayed:t,transitionName:w(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:r}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?at(d("div",{role:"none"},d(Jo,{disabled:!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>d(pn,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>at(d("div",Qe(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,`${t}-drawer--${this.placement}-placement`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.nativeScrollbar?d("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):d(vn,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),[[Tt,this.show]])})})),[[Tt,this.displayDirective==="if"||this.displayed||this.show]]):null}});const{cubicBezierEaseIn:ja,cubicBezierEaseOut:Wa}=Ht;function Ka({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-right"}={}){return[z(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${ja}`}),z(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Wa}`}),z(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),z(`&.${n}-transition-enter-from`,{transform:"translateX(100%)"}),z(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),z(`&.${n}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:qa,cubicBezierEaseOut:Xa}=Ht;function Ya({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-left"}={}){return[z(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${qa}`}),z(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Xa}`}),z(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),z(`&.${n}-transition-enter-from`,{transform:"translateX(-100%)"}),z(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),z(`&.${n}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Ga,cubicBezierEaseOut:Za}=Ht;function Ja({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-top"}={}){return[z(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Ga}`}),z(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Za}`}),z(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),z(`&.${n}-transition-enter-from`,{transform:"translateY(-100%)"}),z(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),z(`&.${n}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Qa,cubicBezierEaseOut:el}=Ht;function tl({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-bottom"}={}){return[z(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Qa}`}),z(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${el}`}),z(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),z(`&.${n}-transition-enter-from`,{transform:"translateY(100%)"}),z(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),z(`&.${n}-transition-leave-to`,{transform:"translateY(100%)"})]}var nl=z([_("drawer",`
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Ka(),Ya(),Ja(),tl(),W("native-scrollbar",[_("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),_("drawer-content-wrapper",`
 box-sizing: border-box;
 `),_("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[W("native-scrollbar",[_("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),_("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),_("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),_("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[F("close",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-close-size);
 `)]),_("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),W("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `),W("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `),W("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `),W("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `)]),z("body",[z(">",[_("drawer-container",{position:"fixed"})])]),_("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[z("> *",{pointerEvents:"all"})]),_("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Qo({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]);const ol=Object.assign(Object.assign({},_e.props),{show:Boolean,width:{type:[Number,String],default:251},height:{type:[Number,String],default:251},placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function});var rl=E({name:"Drawer",inheritAttrs:!1,props:ol,setup(e){const{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:o}=Xe(e),r=Zn(),a=_e("Drawer","-drawer",nl,er,e,t),l=w(()=>{const{placement:C}=e;if(C==="top"||C==="bottom")return"";const{width:$}=e;return Ln($)}),s=w(()=>{const{placement:C}=e;if(C==="left"||C==="right")return"";const{height:$}=e;return Ln($)}),c=w(()=>[{width:l.value,height:s.value},e.drawerStyle]);function h(C){const{onMaskClick:$,maskClosable:x}=e;x&&p(!1),$&&$(C)}function f(){var C;(C=e.onEsc)===null||C===void 0||C.call(e),e.closeOnEsc&&p(!1)}function p(C){const{onHide:$,onUpdateShow:x,"onUpdate:show":k}=e;x&&te(x,C),k&&te(k,C),$&&!C&&te($,C)}ze(mn,{isMountedRef:r,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:p});const u=w(()=>{const{common:{cubicBezierEaseInOut:C,cubicBezierEaseIn:$,cubicBezierEaseOut:x},self:{color:k,textColor:M,boxShadow:U,lineHeight:Q,headerPadding:le,footerPadding:N,bodyPadding:q,titleFontSize:A,titleTextColor:V,titleFontWeight:g,headerBorderBottom:K,footerBorderTop:G,closeColor:se,closeColorHover:de,closeColorPressed:re,closeSize:B}}=a.value;return{"--n-line-height":Q,"--n-color":k,"--n-text-color":M,"--n-box-shadow":U,"--n-bezier":C,"--n-bezier-out":x,"--n-bezier-in":$,"--n-header-padding":le,"--n-body-padding":q,"--n-footer-padding":N,"--n-title-text-color":V,"--n-title-font-size":A,"--n-title-font-weight":g,"--n-header-border-bottom":K,"--n-footer-border-top":G,"--n-close-color":se,"--n-close-color-hover":de,"--n-close-color-pressed":re,"--n-close-size":B}}),y=o?ft("drawer",void 0,u,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:c,handleMaskClick:h,handleEsc:f,mergedTheme:a,cssVars:o?void 0:u,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return d(nr,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),at(d("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},d(pn,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?d("div",{"aria-hidden":!0,class:`${e}-drawer-mask`,onClick:this.handleMaskClick}):null}),d(Oa,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,onEsc:this.handleEsc}),this.$slots)),[[tr,{zIndex:this.zIndex,enabled:this.show}]])}})}});const al={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean};var ll=E({name:"DrawerContent",props:al,setup(){const e=we(mn,null);e||Jn("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function n(){t(!1)}return{handleCloseClick:n,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:o,bodyStyle:r,bodyContentStyle:a,headerStyle:l,footerStyle:s,scrollbarProps:c,closable:h,$slots:f}=this;return d("div",{role:"none",class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},f.header||e||h?d("div",{class:`${t}-drawer-header`,style:l,role:"none"},d("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},f.header!==void 0?f.header():e),h&&d(Qn,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`})):null,n?d("div",{class:`${t}-drawer-body`,style:r,role:"none"},d("div",{class:`${t}-drawer-body-content-wrapper`,style:a,role:"none"},f)):d(vn,Object.assign({themeOverrides:o.peerOverrides.Scrollbar,theme:o.peers.Scrollbar},c,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:a}),f),f.footer?d("div",{class:`${t}-drawer-footer`,style:s,role:"none"},f.footer()):null)}});const il=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},sl=or({name:"InputNumber",common:eo,peers:{Button:rr,Input:ar},self:il});var cl=sl;const dl=e=>{const{primaryColor:t,opacityDisabled:n,borderRadius:o,textColor3:r}=e,a="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},lr),{iconColor:r,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:a,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${ir(t,{alpha:.2})}`})},ul={name:"Switch",common:eo,self:dl};var hl=ul;function fl(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function pl(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function Jt(e){return e==null?!0:!Number.isNaN(e)}function ml(e){return e==null?"":String(e)}function Qt(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}var vl=z([_("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `)]);const Nn=800,On=100,bl=Object.assign(Object.assign({},_e.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]});var gl=E({name:"InputNumber",props:bl,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:n,mergedRtlRef:o}=Xe(e),r=_e("InputNumber","-input-number",vl,cl,e,n),{localeRef:a}=ho("InputNumber"),l=fn(e),{mergedSizeRef:s,mergedDisabledRef:c,mergedStatusRef:h}=l,f=P(null),p=P(null),u=P(null),y=P(e.defaultValue),C=ge(e,"value"),$=lt(C,y),x=P(""),k=R=>{const m=[e.min,e.max,e.step,R].map(I=>{const j=String(I).split(".")[1];return j?j.length:0});return Math.max(...m)},M=Le(()=>{const{placeholder:R}=e;return R!==void 0?R:a.value.placeholder}),U=Le(()=>{const R=Qt(e.step);return R!==null?R===0?1:Math.abs(R):1}),Q=Le(()=>{const R=Qt(e.min);return R!==null?R:null}),le=Le(()=>{const R=Qt(e.max);return R!==null?R:null}),N=R=>{const{value:m}=$;if(R===m){A();return}const{"onUpdate:value":I,onUpdateValue:j,onChange:Y}=e,{nTriggerFormInput:ee,nTriggerFormChange:X}=l;Y&&te(Y,R),j&&te(j,R),I&&te(I,R),y.value=R,ee(),X()},q=(R=0,m=!0,I=!1)=>{const{value:j}=x;if(I&&pl(j))return!1;const Y=fl(j);if(Y===null)return m&&N(null),null;if(Jt(Y)){const ee=k(Y);let X=parseFloat((Y+R).toFixed(ee));if(Jt(X)){const{value:fe}=le,{value:ie}=Q;if(fe!==null&&X>fe){if(!m||I)return!1;X=fe}if(ie!==null&&X<ie){if(!m||I)return!1;X=ie}return e.validator&&!e.validator(X)?!1:(m&&N(X),X)}}return!1},A=()=>{const{value:R}=$;Jt(R)?x.value=ml(R):x.value=String(R)};A();const V=Le(()=>q(0,!1)===!1),g=Le(()=>{const{value:R}=$;if(e.validator&&R===null)return!1;const{value:m}=U;return q(-m,!1)!==!1}),K=Le(()=>{const{value:R}=$;if(e.validator&&R===null)return!1;const{value:m}=U;return q(+m,!1)!==!1});function G(R){const{onFocus:m}=e,{nTriggerFormFocus:I}=l;m&&te(m,R),I()}function se(R){var m,I;if(R.target===((m=f.value)===null||m===void 0?void 0:m.wrapperElRef))return;const j=q();if(j!==!1){const X=(I=f.value)===null||I===void 0?void 0:I.inputElRef;X&&(X.value=String(j||"")),$.value===j&&A()}else A();const{onBlur:Y}=e,{nTriggerFormBlur:ee}=l;Y&&te(Y,R),ee()}function de(R){const{onClear:m}=e;m&&te(m,R)}function re(){const{value:R}=K;if(!R){ne();return}const{value:m}=$;if(m===null)e.validator||N(Ue());else{const{value:I}=U;q(I)}}function B(){const{value:R}=g;if(!R){Ne();return}const{value:m}=$;if(m===null)e.validator||N(Ue());else{const{value:I}=U;q(-I)}}const Ce=G,$e=se;function Ue(){if(e.validator)return null;const{value:R}=Q,{value:m}=le;return R!==null?Math.max(0,R):m!==null?Math.min(0,m):0}function Fe(R){de(R),N(null)}function ke(R){var m,I,j;!((m=u.value)===null||m===void 0)&&m.$el.contains(R.target)&&R.preventDefault(),!((I=p.value)===null||I===void 0)&&I.$el.contains(R.target)&&R.preventDefault(),(j=f.value)===null||j===void 0||j.activate()}let ue=null,Be=null,Me=null;function Ne(){Me&&(window.clearTimeout(Me),Me=null),ue&&(window.clearInterval(ue),ue=null)}function ne(){be&&(window.clearTimeout(be),be=null),Be&&(window.clearInterval(Be),Be=null)}function Ge(){Me=window.setTimeout(()=>{ue=window.setInterval(()=>{B()},On)},Nn),Ke("mouseup",document,()=>{window.setTimeout(Ne,0)})}let be=null;function st(){be=window.setTimeout(()=>{Be=window.setInterval(()=>{re()},On)},Nn),Ke("mouseup",document,()=>{window.setTimeout(ne,0)})}const Ie=()=>{Be||re()},D=()=>{ue||B()};function H(R){var m,I;if(R.code==="Enter"||R.code==="NumpadEnter"){if(R.target===((m=f.value)===null||m===void 0?void 0:m.wrapperElRef))return;q()!==!1&&((I=f.value)===null||I===void 0||I.deactivate())}else if(R.code==="ArrowUp"){if(e.keyboard.ArrowUp===!1)return;R.preventDefault(),q()!==!1&&re()}else if(R.code==="ArrowDown"){if(e.keyboard.ArrowDown===!1)return;R.preventDefault(),q()!==!1&&B()}}function Z(R){x.value=R,e.updateValueOnInput&&q(0,!0,!0)}Re($,()=>{A()});const J={focus:()=>{var R;return(R=f.value)===null||R===void 0?void 0:R.focus()},blur:()=>{var R;return(R=f.value)===null||R===void 0?void 0:R.blur()}},ae=sr("InputNumber",o,n);return Object.assign(Object.assign({},J),{rtlEnabled:ae,inputInstRef:f,minusButtonInstRef:p,addButtonInstRef:u,mergedClsPrefix:n,mergedBordered:t,uncontrolledValue:y,mergedValue:$,mergedPlaceholder:M,displayedValueInvalid:V,mergedSize:s,mergedDisabled:c,displayedValue:x,addable:K,minusable:g,mergedStatus:h,handleFocus:Ce,handleBlur:$e,handleClear:Fe,handleMouseDown:ke,handleAddClick:Ie,handleMinusClick:D,handleAddMousedown:st,handleMinusMousedown:Ge,handleKeyDown:H,handleUpdateDisplayedValue:Z,mergedTheme:r,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:w(()=>{const{self:{iconColorDisabled:R}}=r.value,[m,I,j,Y]=De(R);return{textColorTextDisabled:`rgb(${m}, ${I}, ${j})`,opacityDisabled:`${Y}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this;return d("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},d(xn,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var n;return(n=t.prefix)===null||n===void 0?void 0:n.call(t)},suffix:()=>{var n;return this.showButton?[t.suffix&&d("span",{class:`${e}-input-number-suffix`},{default:t.suffix}),d(Mn,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>In(t["minus-icon"],()=>[d(Pt,{clsPrefix:e},{default:()=>d(aa,null)})])}),d(Mn,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>In(t["add-icon"],()=>[d(Pt,{clsPrefix:e},{default:()=>d(po,null)})])})]:(n=t.suffix)===null||n===void 0?void 0:n.call(t)}}))}});const xl=it("n-layout-sider"),At=it("n-menu"),wn=it("n-submenu"),Cn=it("n-menu-item-group"),Et=8;function $n(e){const t=we(At),{props:n,mergedCollapsedRef:o}=t,r=we(wn,null),a=we(Cn,null),l=w(()=>n.mode==="horizontal"),s=w(()=>l.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=w(()=>{var u;return Math.max((u=n.collapsedIconSize)!==null&&u!==void 0?u:n.iconSize,n.iconSize)}),h=w(()=>{var u;return!l.value&&e.root&&o.value&&(u=n.collapsedIconSize)!==null&&u!==void 0?u:n.iconSize}),f=w(()=>{if(l.value)return;const{collapsedWidth:u,indent:y,rootIndent:C}=n,{root:$,isGroup:x}=e,k=C===void 0?y:C;if($)return o.value?u/2-c.value/2:k;if(a)return y/2+a.paddingLeftRef.value;if(r)return(x?y/2:y)+r.paddingLeftRef.value}),p=w(()=>{const{collapsedWidth:u,indent:y,rootIndent:C}=n,{value:$}=c,{root:x}=e;return l.value||!x||!o.value?Et:(C===void 0?y:C)+$+Et-(u+$)/2});return{dropdownPlacement:s,activeIconSize:h,maxIconSize:c,paddingLeft:f,iconMarginRight:p,NMenu:t,NSubmenu:r}}const kn={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},bo=Object.assign(Object.assign({},kn),{tmNodes:{type:Array,required:!0}}),_l=E({name:"MenuOptionGroup",props:bo,setup(e){ze(wn,null);const t=$n(e);ze(Cn,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:n,props:o}=we(At);return function(){const{value:r}=n,a=t.paddingLeft.value;return d("div",{class:`${r}-menu-item-group`,role:"group"},d("span",{class:`${r}-menu-item-group-title`,style:a!==void 0?`padding-left: ${a}px;`:void 0},rt(e.title),e.extra?d(ce,null," ",rt(e.extra)):null),d("div",null,e.tmNodes.map(l=>Sn(l,o))))}}});var go=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=we(At);return{menuProps:t,style:w(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:w(()=>{const{maxIconSize:n,activeIconSize:o,iconMarginRight:r}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${o}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:o,renderExtra:r,expandIcon:a}}=this,l=n?n(t.rawNode):rt(this.icon);return d("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},o?o(t.rawNode):rt(this.title),this.extra||r?d("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):rt(this.extra)):null),this.showArrow?d(Pt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):d(la,null)}):null)}});const xo=Object.assign(Object.assign({},kn),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),yl=E({name:"Submenu",props:xo,setup(e){const t=$n(e),{NMenu:n,NSubmenu:o}=t,{props:r,mergedCollapsedRef:a,mergedThemeRef:l}=n,s=w(()=>{const{disabled:u}=e;return o!=null&&o.mergedDisabledRef.value||r.disabled?!0:u}),c=P(!1);ze(wn,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),ze(Cn,null);function h(){const{onClick:u}=e;u&&u()}function f(){s.value||(a.value||n.toggleExpand(e.internalKey),h())}function p(u){c.value=u}return{menuProps:r,mergedTheme:l,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:Le(()=>n.activePathRef.value.includes(e.internalKey)),collapsed:w(()=>r.mode==="horizontal"?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:w(()=>!s.value&&(r.mode==="horizontal"||a.value)),handlePopoverShowChange:p,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:n,renderLabel:o}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:c,mergedDisabled:h,maxIconSize:f,activeIconSize:p,title:u,childActive:y,icon:C,handleClick:$,dropdownShow:x,iconMarginRight:k,tmNode:M}=this;return d(go,{tmNode:M,paddingLeft:s,collapsed:c,disabled:h,iconMarginRight:k,maxIconSize:f,activeIconSize:p,title:u,showArrow:!l,childActive:y,clsPrefix:t,icon:C,hover:x,onClick:$})},a=()=>d(cr,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:d("div",{class:`${t}-submenu-children`,role:"menu"},l.map(c=>Sn(c,this.menuProps)))}});return this.root?d(Ut,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:o}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:a())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),a())}}),_o=Object.assign(Object.assign({},kn),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),wl=E({name:"MenuOption",props:_o,setup(e){const t=$n(e),{NSubmenu:n,NMenu:o}=t,{props:r,mergedClsPrefixRef:a,mergedCollapsedRef:l}=o,s=n?n.mergedDisabledRef:{value:!1},c=w(()=>s.value||e.disabled);function h(p){const{onClick:u}=e;u&&u(p)}function f(p){c.value||(o.doSelect(e.internalKey,e.tmNode.rawNode),h(p))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:o.mergedThemeRef,menuProps:r,dropdownEnabled:Le(()=>e.root&&l.value&&r.mode!=="horizontal"&&!c.value),selected:w(()=>o.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:o}}=this;return d("div",{role:"menuitem",class:[`${e}-menu-item`]},d(_n,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>o?o(n.rawNode):rt(this.title),trigger:()=>d(go,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var Cl=E({name:"MenuDivider",setup(){const e=we(At),{mergedClsPrefixRef:t,isHorizontalRef:n}=e;return()=>n.value?null:d("div",{class:`${t.value}-menu-divider`})}});const $l=bn(bo),kl=bn(_o),Sl=bn(xo);function zl(e){return e.type==="divider"||e.type==="render"}function Al(e){return e.type==="divider"}function Sn(e,t){const{rawNode:n}=e;if(zl(n))return Al(n)?d(Cl,Object.assign({key:e.key},n.props)):void 0;const{labelField:o}=t,{key:r,level:a,isGroup:l}=e,s=Object.assign(Object.assign({},n),{title:n.title||n[o],extra:n.titleExtra||n.extra,key:r,internalKey:r,level:a,root:a===0,isGroup:l});return e.children?e.isGroup?d(_l,Kt(s,$l,{tmNodes:e.children,key:r})):d(yl,Kt(s,Sl,{key:r,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):d(wl,Kt(s,kl,{key:r,tmNode:e}))}var Rl=z([_("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[W("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[_("submenu","margin: 0;"),_("menu-item","margin: 0;"),_("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[z("&::before","display: none;"),W("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),_("menu-item-content",[W("selected",[F("icon","color: var(--n-item-icon-color-active-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-horizontal);"),F("extra","color: var(--n-item-text-color-active-horizontal);")])]),W("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),F("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),F("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),$t("disabled",[W("selected, child-active",[yt(null,[F("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-hover-horizontal);"),F("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),yt("border-bottom: 2px solid var(--n-border-color-horizontal);",[F("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),_("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),F("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])])]),_("menu-item-content-header",[z("a","color: var(--n-item-text-color-horizontal);")])])]),W("collapsed",[_("menu-item",[W("selected",[z("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)])]),_("menu-item-content",[_("menu-item-content-header","opacity: 0;"),F("arrow","opacity: 0;"),F("icon","color: var(--n-item-icon-color-collapsed);")])]),_("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),_("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[z("> *","z-index: 1;"),z("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),W("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),W("collapsed",[F("arrow","transform: rotate(0);")]),W("selected",[z("&::before","background-color: var(--n-item-color-active);"),F("arrow","color: var(--n-arrow-color-active);"),F("icon","color: var(--n-item-icon-color-active);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[z("a","color: var(--n-item-text-color-active);"),F("extra","color: var(--n-item-text-color-active);")])]),W("child-active",[_("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[z("a",`
 color: var(--n-item-text-color-child-active);
 `),F("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),F("arrow",`
 color: var(--n-arrow-color-child-active);
 `),F("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),$t("disabled",[W("selected, child-active",[yt(null,[F("arrow","color: var(--n-arrow-color-active-hover);"),F("icon","color: var(--n-item-icon-color-active-hover);"),_("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[z("a","color: var(--n-item-text-color-active-hover);"),F("extra","color: var(--n-item-text-color-active-hover);")])])]),W("selected",[yt(null,[z("&::before","background-color: var(--n-item-color-active-hover);")])]),yt(null,[z("&::before","background-color: var(--n-item-color-hover);"),F("arrow",`
 color: var(--n-arrow-color-hover);
 `),F("icon",`
 color: var(--n-item-icon-color-hover);
 `),_("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[z("a",`
 color: var(--n-item-text-color-hover);
 `),F("extra",`
 color: var(--n-item-text-color-hover);
 `)])])]),F("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),F("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),_("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[z("a",`
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),F("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),_("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[_("menu-item-content",`
 height: var(--n-item-height);
 `),_("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[dr({duration:".2s"})])]),_("menu-item-group",[_("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),_("menu-tooltip",[z("a",`
 color: inherit;
 text-decoration: none;
 `)]),_("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function yt(e,t){return[W("hover",e,t),z("&:hover",e,t)]}const Fl=Object.assign(Object.assign({},_e.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var zn=E({name:"Menu",props:Fl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Xe(e),o=_e("Menu","-menu",Rl,ur,e,t),r=we(xl,null),a=w(()=>{var A;const{collapsed:V}=e;if(V!==void 0)return V;if(r){const{collapseModeRef:g,collapsedRef:K}=r;if(g.value==="width")return(A=K.value)!==null&&A!==void 0?A:!1}return!1}),l=w(()=>{const{keyField:A,childrenField:V}=e;return Kr(e.items||e.options,{getChildren(g){return g[V]},getKey(g){var K;return(K=g[A])!==null&&K!==void 0?K:g.name}})}),s=w(()=>new Set(l.value.treeNodes.map(A=>A.key))),{watchProps:c}=e,h=P(null);c!=null&&c.includes("defaultValue")?ht(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const f=ge(e,"value"),p=lt(f,h),u=P([]),y=()=>{u.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(p.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ht(y):y();const C=an(e,["expandedNames","expandedKeys"]),$=lt(C,u),x=w(()=>l.value.treeNodes),k=w(()=>l.value.getPath(p.value).keyPath);ze(At,{props:e,mergedCollapsedRef:a,mergedThemeRef:o,mergedValueRef:p,mergedExpandedKeysRef:$,activePathRef:k,mergedClsPrefixRef:t,isHorizontalRef:w(()=>e.mode==="horizontal"),invertedRef:ge(e,"inverted"),doSelect:M,toggleExpand:Q});function M(A,V){const{"onUpdate:value":g,onUpdateValue:K,onSelect:G}=e;K&&te(K,A,V),g&&te(g,A,V),G&&te(G,A,V),h.value=A}function U(A){const{"onUpdate:expandedKeys":V,onUpdateExpandedKeys:g,onExpandedNamesChange:K,onOpenNamesChange:G}=e;V&&te(V,A),g&&te(g,A),K&&te(K,A),G&&te(G,A),u.value=A}function Q(A){const V=Array.from($.value),g=V.findIndex(K=>K===A);if(~g)V.splice(g,1);else{if(e.accordion&&s.value.has(A)){const K=V.findIndex(G=>s.value.has(G));K>-1&&V.splice(K,1)}V.push(A)}U(V)}const le=A=>{const V=l.value.getPath(A!=null?A:p.value,{includeSelf:!1}).keyPath;if(!V.length)return;const g=Array.from($.value),K=new Set([...g,...V]);e.accordion&&s.value.forEach(G=>{K.has(G)&&!V.includes(G)&&K.delete(G)}),U(Array.from(K))},N=w(()=>{const{inverted:A}=e,{common:{cubicBezierEaseInOut:V},self:g}=o.value,{borderRadius:K,borderColorHorizontal:G,fontSize:se,itemHeight:de,dividerColor:re}=g,B={"--n-divider-color":re,"--n-bezier":V,"--n-font-size":se,"--n-border-color-horizontal":G,"--n-border-radius":K,"--n-item-height":de};return A?(B["--n-group-text-color"]=g.groupTextColorInverted,B["--n-color"]=g.colorInverted,B["--n-item-text-color"]=g.itemTextColorInverted,B["--n-item-text-color-hover"]=g.itemTextColorHoverInverted,B["--n-item-text-color-active"]=g.itemTextColorActiveInverted,B["--n-item-text-color-child-active"]=g.itemTextColorChildActiveInverted,B["--n-item-text-color-active-hover"]=g.itemTextColorActiveHoverInverted,B["--n-item-icon-color"]=g.itemIconColorInverted,B["--n-item-icon-color-hover"]=g.itemIconColorHoverInverted,B["--n-item-icon-color-active"]=g.itemIconColorActiveInverted,B["--n-item-icon-color-active-hover"]=g.itemIconColorActiveHoverInverted,B["--n-item-icon-color-child-active"]=g.itemIconColorChildActiveInverted,B["--n-item-icon-color-collapsed"]=g.itemIconColorCollapsedInverted,B["--n-item-text-color-horizontal"]=g.itemTextColorHorizontalInverted,B["--n-item-text-color-hover-horizontal"]=g.itemTextColorHoverHorizontalInverted,B["--n-item-text-color-active-horizontal"]=g.itemTextColorActiveHorizontalInverted,B["--n-item-text-color-child-active-horizontal"]=g.itemTextColorChildActiveHorizontalInverted,B["--n-item-text-color-active-hover-horizontal"]=g.itemTextColorActiveHoverHorizontalInverted,B["--n-item-icon-color-horizontal"]=g.itemIconColorHorizontalInverted,B["--n-item-icon-color-hover-horizontal"]=g.itemIconColorHoverHorizontalInverted,B["--n-item-icon-color-active-horizontal"]=g.itemIconColorActiveHorizontalInverted,B["--n-item-icon-color-active-hover-horizontal"]=g.itemIconColorActiveHoverHorizontalInverted,B["--n-item-icon-color-child-active-horizontal"]=g.itemIconColorChildActiveHorizontalInverted,B["--n-arrow-color"]=g.arrowColorInverted,B["--n-arrow-color-hover"]=g.arrowColorHoverInverted,B["--n-arrow-color-active"]=g.arrowColorActiveInverted,B["--n-arrow-color-active-hover"]=g.arrowColorActiveHoverInverted,B["--n-arrow-color-child-active"]=g.arrowColorChildActiveInverted,B["--n-item-color-hover"]=g.itemColorHoverInverted,B["--n-item-color-active"]=g.itemColorActiveInverted,B["--n-item-color-active-hover"]=g.itemColorActiveHoverInverted,B["--n-item-color-active-collapsed"]=g.itemColorActiveCollapsedInverted):(B["--n-group-text-color"]=g.groupTextColor,B["--n-color"]=g.color,B["--n-item-text-color"]=g.itemTextColor,B["--n-item-text-color-hover"]=g.itemTextColorHover,B["--n-item-text-color-active"]=g.itemTextColorActive,B["--n-item-text-color-child-active"]=g.itemTextColorChildActive,B["--n-item-text-color-active-hover"]=g.itemTextColorActiveHover,B["--n-item-icon-color"]=g.itemIconColor,B["--n-item-icon-color-hover"]=g.itemIconColorHover,B["--n-item-icon-color-active"]=g.itemIconColorActive,B["--n-item-icon-color-active-hover"]=g.itemIconColorActiveHover,B["--n-item-icon-color-child-active"]=g.itemIconColorChildActive,B["--n-item-icon-color-collapsed"]=g.itemIconColorCollapsed,B["--n-item-text-color-horizontal"]=g.itemTextColorHorizontal,B["--n-item-text-color-hover-horizontal"]=g.itemTextColorHoverHorizontal,B["--n-item-text-color-active-horizontal"]=g.itemTextColorActiveHorizontal,B["--n-item-text-color-child-active-horizontal"]=g.itemTextColorChildActiveHorizontal,B["--n-item-text-color-active-hover-horizontal"]=g.itemTextColorActiveHoverHorizontal,B["--n-item-icon-color-horizontal"]=g.itemIconColorHorizontal,B["--n-item-icon-color-hover-horizontal"]=g.itemIconColorHoverHorizontal,B["--n-item-icon-color-active-horizontal"]=g.itemIconColorActiveHorizontal,B["--n-item-icon-color-active-hover-horizontal"]=g.itemIconColorActiveHoverHorizontal,B["--n-item-icon-color-child-active-horizontal"]=g.itemIconColorChildActiveHorizontal,B["--n-arrow-color"]=g.arrowColor,B["--n-arrow-color-hover"]=g.arrowColorHover,B["--n-arrow-color-active"]=g.arrowColorActive,B["--n-arrow-color-active-hover"]=g.arrowColorActiveHover,B["--n-arrow-color-child-active"]=g.arrowColorChildActive,B["--n-item-color-hover"]=g.itemColorHover,B["--n-item-color-active"]=g.itemColorActive,B["--n-item-color-active-hover"]=g.itemColorActiveHover,B["--n-item-color-active-collapsed"]=g.itemColorActiveCollapsed),B}),q=n?ft("menu",w(()=>e.inverted?"a":"b"),N,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:C,uncontrolledExpanededKeys:u,mergedExpandedKeys:$,uncontrolledValue:h,mergedValue:p,activePath:k,tmNodes:x,mergedTheme:o,mergedCollapsed:a,cssVars:n?void 0:N,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender,showOption:le}},render(){const{mergedClsPrefix:e,mode:t,themeClass:n,onRender:o}=this;return o==null||o(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>Sn(r,this.$props)))}});const Bl=Object.assign(Object.assign({},_e.props),{xScrollable:Boolean,onScroll:Function}),El=E({name:"Scrollbar",props:Bl,setup(){const e=P(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var o;(o=e.value)===null||o===void 0||o.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var o;(o=e.value)===null||o===void 0||o.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return d(vn,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});var Ot=El,Ml=_("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[F("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),F("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),F("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),_("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Dn({originalTransform:"translateX(-50%) translateY(-50%)"})]),F("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),F("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),F("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z("&:focus",[F("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),W("round",[F("rail",{borderRadius:"calc(var(--n-rail-height) / 2)"},[F("button",{borderRadius:"calc(var(--n-button-height) / 2)"})])]),$t("disabled",[$t("icon",[W("pressed",[F("rail",[F("button",{maxWidth:"var(--n-button-width-pressed)"})])]),F("rail",[z("&:active",[F("button",{maxWidth:"var(--n-button-width-pressed)"})])]),W("active",[W("pressed",[F("rail",[F("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])]),F("rail",[z("&:active",[F("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])])])])]),W("active",[F("rail",[F("button",{left:"calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)"})])]),F("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[F("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Dn()]),F("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),W("active",[F("rail","background-color: var(--n-rail-color-active);")]),W("disabled",[F("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)]),W("loading",[F("rail",`
 pointer-events: none;
 `)])]);const Il=Object.assign(Object.assign({},_e.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,onChange:[Function,Array]});var An=E({name:"Switch",props:Il,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Xe(e),o=_e("Switch","-switch",Ml,hl,e,t),r=fn(e),{mergedSizeRef:a,mergedDisabledRef:l}=r,s=P(e.defaultValue),c=ge(e,"value"),h=lt(c,s),f=w(()=>h.value===e.checkedValue),p=P(!1),u=P(!1),y=w(()=>{const{railStyle:A}=e;if(!!A)return A({focused:u.value,checked:f.value})});function C(A){const{"onUpdate:value":V,onChange:g,onUpdateValue:K}=e,{nTriggerFormInput:G,nTriggerFormChange:se}=r;V&&te(V,A),K&&te(K,A),g&&te(g,A),s.value=A,G(),se()}function $(){const{nTriggerFormFocus:A}=r;A()}function x(){const{nTriggerFormBlur:A}=r;A()}function k(){e.loading||l.value||(h.value!==e.checkedValue?C(e.checkedValue):C(e.uncheckedValue))}function M(){u.value=!0,$()}function U(){u.value=!1,x(),p.value=!1}function Q(A){e.loading||l.value||A.code==="Space"&&(h.value!==e.checkedValue?C(e.checkedValue):C(e.uncheckedValue),p.value=!1)}function le(A){e.loading||l.value||A.code==="Space"&&(A.preventDefault(),p.value=!0)}const N=w(()=>{const{value:A}=a,{self:{opacityDisabled:V,railColor:g,railColorActive:K,buttonBoxShadow:G,buttonColor:se,boxShadowFocus:de,loadingColor:re,textColor:B,iconColor:Ce,[pe("buttonHeight",A)]:$e,[pe("buttonWidth",A)]:Ue,[pe("buttonWidthPressed",A)]:Fe,[pe("railHeight",A)]:ke,[pe("railWidth",A)]:ue,[pe("railBorderRadius",A)]:Be,[pe("buttonBorderRadius",A)]:Me},common:{cubicBezierEaseInOut:Ne}}=o.value,ne=qt((Pe(ke)-Pe($e))/2),Ge=qt(Math.max(Pe(ke),Pe($e))),be=Pe(ke)>Pe($e)?ue:qt(Pe(ue)+Pe($e)-Pe(ke));return{"--n-bezier":Ne,"--n-button-border-radius":Me,"--n-button-box-shadow":G,"--n-button-color":se,"--n-button-width":Ue,"--n-button-width-pressed":Fe,"--n-button-height":$e,"--n-height":Ge,"--n-offset":ne,"--n-opacity-disabled":V,"--n-rail-border-radius":Be,"--n-rail-color":g,"--n-rail-color-active":K,"--n-rail-height":ke,"--n-rail-width":ue,"--n-width":be,"--n-box-shadow-focus":de,"--n-loading-color":re,"--n-text-color":B,"--n-icon-color":Ce}}),q=n?ft("switch",w(()=>a.value[0]),N,e):void 0;return{handleClick:k,handleBlur:U,handleFocus:M,handleKeyup:Q,handleKeydown:le,mergedRailStyle:y,pressed:p,mergedClsPrefix:t,mergedValue:h,checked:f,mergedDisabled:l,cssVars:n?void 0:N,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:o,onRender:r,$slots:a}=this;r==null||r();const{checked:l,unchecked:s,icon:c,"checked-icon":h,"unchecked-icon":f}=a,p=!(Xt(c)&&Xt(h)&&Xt(f));return d("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},Ve(l,u=>Ve(s,y=>u||y?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),u),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),y)):null)),d("div",{class:`${e}-switch__button`},Ve(c,u=>Ve(h,y=>Ve(f,C=>d(hr,null,{default:()=>this.loading?d(fr,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(y||u)?d("div",{class:`${e}-switch__button-icon`,key:y?"checked-icon":"icon"},y||u):!this.checked&&(C||u)?d("div",{class:`${e}-switch__button-icon`,key:C?"unchecked-icon":"icon"},C||u):null})))),Ve(l,u=>u&&d("div",{key:"checked",class:`${e}-switch__checked`},u)),Ve(s,u=>u&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},u)))))}});const Rn=it("n-tabs"),yo={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var Dl=E({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:yo,setup(e){const t=we(Rn,null);return t||Jn("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return d("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Tl=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},pr(yo,["displayDirective"]));var dn=E({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Tl,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:o,closableRef:r,tabStyleRef:a,tabChangeIdRef:l,onBeforeLeaveRef:s,triggerRef:c,handleAdd:h,activateTab:f,handleClose:p}=we(Rn);return{trigger:c,mergedClosable:w(()=>{if(e.internalAddable)return!1;const{closable:u}=e;return u===void 0?r.value:u}),style:a,clsPrefix:t,value:n,type:o,handleClose(u){u.stopPropagation(),!e.disabled&&p(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){h();return}const{name:u}=e,y=++l.id;if(u!==n.value){const{value:C}=s;C?Promise.resolve(C(e.name,n.value)).then($=>{$&&l.id===y&&f(u)}):f(u)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:o,label:r,tab:a,value:l,mergedClosable:s,style:c,trigger:h,$slots:{default:f}}=this,p=r!=null?r:a;return d("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${t}-tabs-tab-pad`}):null,d("div",Object.assign({key:n,"data-name":n,"data-disabled":o?!0:void 0},Qe({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:h==="click"?this.activateTab:void 0,onMouseenter:h==="hover"?this.activateTab:void 0,style:e?void 0:c},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${t}-tabs-tab__label`},e?d(ce,null,d("div",{class:`${t}-tabs-tab__height-placeholder`},"\xA0"),d(Pt,{clsPrefix:t},{default:()=>d(po,null)})):f?f():typeof p=="object"?p:rt(p!=null?p:n)),s&&this.type==="card"?d(Qn,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),Pl=_("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[_("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[_("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[_("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[W("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),W("flex",[_("tabs-nav",{width:"100%"},[_("tabs-wrapper",{width:"100%"},[_("tabs-tab",{marginRight:0})])])]),_("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[F("prefix, suffix",`
 display: flex;
 align-items: center;
 `),F("prefix","padding-right: 16px;"),F("suffix","padding-left: 16px;")]),_("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[W("shadow-before",[z("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),W("shadow-after",[z("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),z("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),z("&::before",`
 left: 0;
 `),z("&::after",`
 right: 0;
 `)]),_("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),_("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),_("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),_("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[W("disabled",{cursor:"not-allowed"}),F("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),F("label",`
 display: flex;
 align-items: center;
 `)]),_("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[W("transition-disabled",`
 transition: none;
 `),W("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),_("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),_("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[z("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),z("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),z("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),z("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),z("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),_("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),W("line-type, bar-type",[_("tabs-tab",`
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[z("&:hover",{color:"var(--n-tab-text-color-hover)"}),W("active",{color:"var(--n-tab-text-color-active)"}),W("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),_("tabs-nav",[W("line-type",[F("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),W("card-type",[F("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[W("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[F("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),$t("disabled",[z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),W("closable","padding-right: 6px;"),W("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),W("disabled","color: var(--n-tab-text-color-disabled);")]),_("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const Ll=Object.assign(Object.assign({},_e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var Vl=E({name:"Tabs",props:Ll,setup(e,{slots:t}){var n,o,r,a;const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=Xe(e),c=_e("Tabs","-tabs",Pl,mr,e,l),h=P(null),f=P(null),p=P(null),u=P(null),y=P(null),C=P(!0),$=P(!0),x=an(e,["labelSize","size"]),k=an(e,["activeName","value"]),M=P((o=(n=k.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&o!==void 0?o:t.default?(a=(r=Yt(t.default())[0])===null||r===void 0?void 0:r.props)===null||a===void 0?void 0:a.name:null),U=lt(k,M),Q={id:0},le=w(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Re(U,()=>{Q.id=0,A()});function N(){var D;const{value:H}=U;return H===null?null:(D=h.value)===null||D===void 0?void 0:D.querySelector(`[data-name="${H}"]`)}function q(D){if(e.type==="card")return;const{value:H}=f;if(!!H&&D){const Z=`${l.value}-tabs-bar--disabled`,{barWidth:J}=e;if(D.dataset.disabled==="true"?H.classList.add(Z):H.classList.remove(Z),J&&D.offsetWidth>=J){const ae=Math.floor((D.offsetWidth-J)/2)+D.offsetLeft;H.style.left=`${ae}px`,H.style.maxWidth=`${J}px`}else H.style.left=`${D.offsetLeft}px`,H.style.maxWidth=`${D.offsetWidth}px`;H.style.width="8192px"}}function A(){if(e.type==="card")return;const D=N();D&&q(D)}const V=P(null);let g=0;function K(){const D=V.value;if(D){g=D.getBoundingClientRect().height;const H=`${g}px`;D.style.height=H,D.style.maxHeight=H}}function G(D){const H=V.value;if(H){const Z=D.getBoundingClientRect().height;H.style.maxHeight=`${Z}px`,H.style.height=`${Math.max(g,Z)}px`}}function se(){const D=V.value;D&&(D.style.maxHeight="",D.style.height="")}const de={value:[]},re=P("next");function B(D){const H=U.value;let Z="next";for(const J of de.value){if(J===H)break;if(J===D){Z="prev";break}}re.value=Z,Ce(D)}function Ce(D){const{onActiveNameChange:H,onUpdateValue:Z,"onUpdate:value":J}=e;H&&te(H,D),Z&&te(Z,D),J&&te(J,D),M.value=D}function $e(D){const{onClose:H}=e;H&&te(H,D)}let Ue=!0,Fe=0;const ke=Zt(function(H){var Z;if(H.contentRect.width===0&&H.contentRect.height===0||Fe===H.contentRect.width)return;Fe=H.contentRect.width;const{type:J}=e;if((J==="line"||J==="bar")&&Ue){const{value:ae}=f;if(!ae)return;const R=`${l.value}-tabs-bar--transition-disabled`;ae.classList.add(R),A(),ae.classList.remove(R)}J!=="segment"&&ne((Z=y.value)===null||Z===void 0?void 0:Z.$el)},64),ue=P(!1);function Be(D){var H;const{target:Z,contentRect:{width:J}}=D,ae=Z.parentElement.offsetWidth;if(!ue.value)ae<J&&(ue.value=!0);else{const{value:R}=u;if(!R)return;ae-J>R.$el.offsetWidth&&(ue.value=!1)}ne((H=y.value)===null||H===void 0?void 0:H.$el)}const Me=Zt(Be,64);function Ne(){const{onAdd:D}=e;D&&D(),Ct(()=>{const H=N(),{value:Z}=y;!H||!Z||Z.scrollTo({left:H.offsetLeft,top:0,behavior:"smooth"})})}function ne(D){if(!D)return;const{scrollLeft:H,scrollWidth:Z,offsetWidth:J}=D;C.value=H<=0,$.value=H+J>=Z}const Ge=Zt(D=>{ne(D.target)},64);ze(Rn,{triggerRef:ge(e,"trigger"),tabStyleRef:ge(e,"tabStyle"),paneClassRef:ge(e,"paneClass"),paneStyleRef:ge(e,"paneStyle"),mergedClsPrefixRef:l,typeRef:ge(e,"type"),closableRef:ge(e,"closable"),valueRef:U,tabChangeIdRef:Q,onBeforeLeaveRef:ge(e,"onBeforeLeave"),activateTab:B,handleClose:$e,handleAdd:Ne}),qr(()=>{A()}),ht(()=>{const{value:D}=p;if(!D)return;const{value:H}=l,Z=`${H}-tabs-nav-scroll-wrapper--shadow-before`,J=`${H}-tabs-nav-scroll-wrapper--shadow-after`;C.value?D.classList.remove(Z):D.classList.add(Z),$.value?D.classList.remove(J):D.classList.add(J)});const be={syncBarPosition:()=>{A()}},st=w(()=>{const{value:D}=x,{type:H}=e,Z={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[H],J=`${D}${Z}`,{self:{barColor:ae,closeColor:R,closeColorHover:m,closeColorPressed:I,tabColor:j,tabBorderColor:Y,paneTextColor:ee,tabFontWeight:X,tabBorderRadius:fe,tabFontWeightActive:ie,colorSegment:Te,fontWeightStrong:jt,tabColorSegment:Wt,[pe("panePadding",D)]:Eo,[pe("tabPadding",J)]:Mo,[pe("tabGap",J)]:Io,[pe("tabTextColor",H)]:Do,[pe("tabTextColorActive",H)]:To,[pe("tabTextColorHover",H)]:Po,[pe("tabTextColorDisabled",H)]:Lo,[pe("tabFontSize",D)]:Vo},common:{cubicBezierEaseInOut:Ho}}=c.value;return{"--n-bezier":Ho,"--n-color-segment":Te,"--n-bar-color":ae,"--n-tab-font-size":Vo,"--n-tab-text-color":Do,"--n-tab-text-color-active":To,"--n-tab-text-color-disabled":Lo,"--n-tab-text-color-hover":Po,"--n-pane-text-color":ee,"--n-tab-border-color":Y,"--n-tab-border-radius":fe,"--n-close-color":R,"--n-close-color-hover":m,"--n-close-color-pressed":I,"--n-tab-color":j,"--n-tab-font-weight":X,"--n-tab-font-weight-active":ie,"--n-tab-padding":Mo,"--n-tab-gap":Io,"--n-pane-padding":Eo,"--n-font-weight-strong":jt,"--n-tab-color-segment":Wt}}),Ie=s?ft("tabs",w(()=>`${x.value[0]}${e.type[0]}`),st,e):void 0;return Object.assign({mergedClsPrefix:l,mergedValue:U,renderedNames:new Set,tabsPaneWrapperRef:V,tabsElRef:h,barElRef:f,addTabInstRef:u,xScrollInstRef:y,scrollWrapperElRef:p,addTabFixed:ue,tabWrapperStyle:le,handleNavResize:ke,mergedSize:x,handleScroll:Ge,handleTabsResize:Me,cssVars:s?void 0:st,themeClass:Ie==null?void 0:Ie.themeClass,animationDirection:re,renderNameListRef:de,onAnimationBeforeLeave:K,onAnimationEnter:G,onAnimationAfterEnter:se,onRender:Ie==null?void 0:Ie.onRender},be)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:n,addable:o,mergedSize:r,renderNameListRef:a,onRender:l,$slots:{default:s,prefix:c,suffix:h}}=this;l==null||l();const f=s?Yt(s()).filter(x=>x.type.__TAB_PANE__===!0):[],p=s?Yt(s()).filter(x=>x.type.__TAB__===!0):[],u=!p.length,y=t==="card",C=t==="segment",$=!y&&!C&&this.justifyContent;return a.value=[],d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${r}-size`,$&&`${e}-tabs--flex`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},Ve(c,x=>x&&d("div",{class:`${e}-tabs-nav__prefix`},x)),C?d("div",{class:`${e}-tabs-rail`},u?f.map((x,k)=>(a.value.push(x.props.name),d(dn,Object.assign({},x.props,{internalCreatedByPane:!0,internalLeftPadded:k!==0}),x.children?{default:x.children.tab}:void 0))):p.map((x,k)=>(a.value.push(x.props.name),k===0?x:Kn(x)))):d(Tn,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},d(Jr,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const x=d("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},$?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),u?f.map((M,U)=>(a.value.push(M.props.name),en(d(dn,Object.assign({},M.props,{internalCreatedByPane:!0,internalLeftPadded:U!==0&&!$}),M.children?{default:M.children.tab}:void 0)))):p.map((M,U)=>(a.value.push(M.props.name),en(U!==0&&!$?Kn(M):M))),!n&&o&&y?Wn(o,(u?f.length:p.length)!==0):null,$?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let k=x;return y&&o&&(k=d(Tn,{onResize:this.handleTabsResize},{default:()=>x})),d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},k,y?d("div",{class:`${e}-tabs-pad`}):null,y?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),n&&o&&y?Wn(o,!0):null,Ve(h,x=>x&&d("div",{class:`${e}-tabs-nav__suffix`},x))),u&&(this.animated?d("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},jn(f,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):jn(f,this.mergedValue,this.renderedNames)))}});function jn(e,t,n,o,r,a,l){const s=[];return e.forEach(c=>{const{name:h,displayDirective:f,"display-directive":p}=c.props,u=C=>f===C||p===C,y=t===h;if(c.key!==void 0&&(c.key=h),y||u("show")||u("show:lazy")&&n.has(h)){n.has(h)||n.add(h);const C=!u("if");s.push(C?at(c,[[Tt,y]]):c)}}),l?d(vr,{name:`${l}-transition`,onBeforeLeave:o,onEnter:r,onAfterEnter:a},{default:()=>s}):s}function Wn(e,t){return d(dn,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Kn(e){const t=br(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function en(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}var Hl=[{label:"\u7EA2\u8272\u7CFB",data:[{label:"\u7EFE",color:"#A98175"},{label:"\u6A80",color:"#B36D61"},{label:"\u6817\u8272",color:"#60281E"},{label:"\u7384",color:"#622A1D"},{label:"\u80ED\u8102",color:"#9D2933"},{label:"\u6BB7\u7EA2",color:"#BE002F"},{label:"\u67A3\u7EA2",color:"#C32136"},{label:"\u8D64",color:"#C3272B"},{label:"\u7EEF\u7EA2",color:"#C83C23"},{label:"\u8D6B\u8D64",color:"#C91F37"},{label:"\u6A31\u6843\u7EA2",color:"#C93756"},{label:"\u831C\u8272",color:"#CB3A56"},{label:"\u6D77\u68E0\u7EA2",color:"#DB5A6B"},{label:"\u9161\u7EA2",color:"#DC3023"},{label:"\u5983\u8272",color:"#ED5736"},{label:"\u5AE3\u7EA2",color:"#EF7A82"},{label:"\u54C1\u7EA2",color:"#F00056"},{label:"\u77F3\u69B4\u7EA2",color:"#F20C00"},{label:"\u94F6\u7EA2",color:"#F05654"},{label:"\u5F64",color:"#F35336"},{label:"\u6843\u7EA2",color:"#F47983"},{label:"\u9161\u989C",color:"#F9906F"},{label:"\u6D0B\u7EA2",color:"#FF0097"},{label:"\u5927\u7EA2",color:"#FF2121"},{label:"\u706B\u7EA2",color:"#FF2D51"},{label:"\u708E",color:"#FF3300"},{label:"\u6731\u7EA2",color:"#FF4C00"},{label:"\u4E39",color:"#FF4E20"},{label:"\u7C89\u7EA2",color:"#FFB3A7"},{label:"\u85D5\u8377",color:"#E4C6D0"},{label:"\u85D5",color:"#EDD1D8"},{label:"\u6C34\u7EA2",color:"#F3D3E7"},{label:"\u9C7C\u809A\u767D",color:"#FCEFE8"}]},{label:"\u6A59\u8272\u7CFB",data:[{label:"\u8910\u8272",color:"#6E511E"},{label:"\u68D5\u9ED1",color:"#7C4B00"},{label:"\u8D6D\u8272",color:"#955539"},{label:"\u68D5\u7EA2",color:"#9B4400"},{label:"\u8D6D",color:"#9C5333"},{label:"\u9A7C\u8272",color:"#A88462"},{label:"\u68D5\u8272",color:"#B25D25"},{label:"\u8336\u8272",color:"#B35C44"},{label:"\u7425\u73C0",color:"#CA6924"},{label:"\u9EC4\u680C",color:"#E29C45"},{label:"\u6A59\u8272",color:"#FA8C35"},{label:"\u6A58\u7EA2",color:"#FF7500"},{label:"\u6A58\u9EC4",color:"#FF8936"},{label:"\u674F\u7EA2",color:"#FF8C31"},{label:"\u6A59\u9EC4",color:"#FFA400"},{label:"\u674F\u9EC4",color:"#FFA631"},{label:"\u59DC\u9EC4",color:"#FFC773"}]},{label:"\u9EC4\u8272\u7CFB",data:[{label:"\u9EE7",color:"#5D513C"},{label:"\u9ECE",color:"#75664D"},{label:"\u68D5\u7EFF",color:"#827100"},{label:"\u79CB\u8272",color:"#896C39"},{label:"\u82CD\u9EC4",color:"#A29B7C"},{label:"\u4E4C\u91D1",color:"#A78E44"},{label:"\u68D5\u9EC4",color:"#AE7000"},{label:"\u660F\u9EC4",color:"#C89B40"},{label:"\u67AF\u9EC4",color:"#D3B17D"},{label:"\u79CB\u9999\u8272",color:"#D9B611"},{label:"\u91D1",color:"#EACD76"},{label:"\u7259",color:"#EEDEB0"},{label:"\u7F03\u8272",color:"#F0C239"},{label:"\u8D64\u91D1",color:"#F2BE45"},{label:"\u9E2D\u9EC4",color:"#FAFF72"},{label:"\u9E45\u9EC4",color:"#FFF143"},{label:"\u7F1F",color:"#F2ECDE"},{label:"\u8C61\u7259\u767D",color:"#FFFBF0"}]},{label:"\u7EFF\u8272\u7CFB",data:[{label:"\u7AF9\u9752",color:"#789262"},{label:"\u9EEF",color:"#41555D"},{label:"\u9EDB\u7EFF",color:"#426666"},{label:"\u677E\u82B1\u7EFF",color:"#057748"},{label:"\u7EFF\u6C88",color:"#0C8918"},{label:"\u6DF1\u7EFF",color:"#009900"},{label:"\u9752\u8471",color:"#0AA344"},{label:"\u94DC\u7EFF",color:"#549688"},{label:"\u82CD\u7FE0",color:"#519A73"},{label:"\u677E\u67CF\u7EFF",color:"#21A675"},{label:"\u8471\u9752",color:"#0EB83A"},{label:"\u6CB9\u7EFF",color:"#00BC12"},{label:"\u7EFF",color:"#00E500"},{label:"\u8349\u7EFF",color:"#40DE5A"},{label:"\u8C46\u9752",color:"#96CE54"},{label:"\u8C46\u7EFF",color:"#9ED048"},{label:"\u8471\u7EFF",color:"#9ED900"},{label:"\u8471\u9EC4",color:"#A3D900"},{label:"\u67F3\u7EFF",color:"#AFDD22"},{label:"\u5AE9\u7EFF",color:"#BDDD22"},{label:"\u67F3\u9EC4",color:"#C9DD22"},{label:"\u677E\u82B1",color:"#BCE672"},{label:"\u6A31\u8349\u8272",color:"#EAFF56"}]},{label:"\u9752\u8272\u7CFB",data:[{label:"\u6C34",color:"#88ADA6"},{label:"\u9752\u78A7",color:"#48C0A3"},{label:"\u78A7",color:"#1BD1A5"},{label:"\u77F3\u9752",color:"#7BCFA6"},{label:"\u9752\u7FE0",color:"#00E079"},{label:"\u9752",color:"#00E09E"},{label:"\u78A7\u7EFF",color:"#2ADD9C"},{label:"\u7389",color:"#2EDFA3"},{label:"\u7FE1\u7FE0",color:"#3DE1AD"},{label:"\u7F25",color:"#7FECAD"},{label:"\u78A7\u84DD",color:"#3EEDE7"},{label:"\u6E56\u7EFF",color:"#25F8CD"},{label:"\u827E\u7EFF",color:"#A4E2C6"},{label:"\u9752\u767D",color:"#C0EBD7"},{label:"\u6C34\u7EFF",color:"#D4F2E7"},{label:"\u9E2D\u5375\u9752",color:"#E0EEE8"},{label:"\u7D20",color:"#E0F0E9"},{label:"\u837C\u767D",color:"#F3F9F1"}]},{label:"\u84DD\u8272\u7CFB",data:[{label:"\u85CF\u84DD",color:"#3B2E7E"},{label:"\u5B9D\u84DD",color:"#4B5CC4"},{label:"\u7EC0\u9752",color:"#003371"},{label:"\u85CF\u9752",color:"#2E4E7E"},{label:"\u975B\u84DD",color:"#065279"},{label:"\u975B\u9752",color:"#177CB0"},{label:"\u7FA4\u9752",color:"#4C8DAE"},{label:"\u84DD",color:"#44CEF6"},{label:"\u6E56\u84DD",color:"#30DFF3"},{label:"\u851A\u84DD",color:"#70F3FF"},{label:"\u6708\u767D",color:"#D6ECF0"},{label:"\u6C34\u84DD",color:"#D2F0F4"},{label:"\u83B9\u767D",color:"#E3F9FD"},{label:"\u96EA\u767D",color:"#F0FCFF"}]},{label:"\u7D2B\u8272\u7CFB",data:[{label:"\u9EDB",color:"#4A4266"},{label:"\u7D2B\u6A80",color:"#4C211B"},{label:"\u7D2B\u68E0",color:"#56004F"},{label:"\u9EDB\u7D2B",color:"#574266"},{label:"\u7EDB\u7D2B",color:"#8C4356"},{label:"\u7D2B\u9171",color:"#815463"},{label:"\u9171\u7D2B",color:"#815476"},{label:"\u9EDD",color:"#6B6882"},{label:"\u9752\u83B2",color:"#801DAE"},{label:"\u7D2B",color:"#8D4BBB"},{label:"\u96EA\u9752",color:"#B0A4E3"},{label:"\u4E01\u9999",color:"#CCA4E3"}]},{label:"\u7070\u8272\u7CFB",data:[{label:"\u9ED1",color:"#000000"},{label:"\u6F06\u9ED1",color:"#161823"},{label:"\u8C61\u7259\u9ED1",color:"#312520"},{label:"\u4E4C\u9ED1",color:"#392F41"},{label:"\u7384\u9752",color:"#3D3B4F"},{label:"\u7F01",color:"#493131"},{label:"\u9EDD\u9ED1",color:"#665757"},{label:"\u9E26\u9752",color:"#424C50"},{label:"\u9EDB\u84DD",color:"#425066"},{label:"\u82CD\u9ED1",color:"#395260"},{label:"\u58A8",color:"#50616D"},{label:"\u7070",color:"#808080"},{label:"\u82CD",color:"#75878A"},{label:"\u58A8\u7070",color:"#758A99"},{label:"\u82CD\u9752",color:"#7397AB"},{label:"\u84DD\u7070",color:"#A1AFC9"},{label:"\u8001\u94F6",color:"#BACAC6"},{label:"\u87F9\u58F3\u9752",color:"#BBCDC5"},{label:"\u82CD\u767D",color:"#D1D9E0"},{label:"\u6DE1\u9752",color:"#D3E0F3"},{label:"\u94F6\u767D",color:"#E9E7EF"},{label:"\u971C",color:"#E9F1F6"},{label:"\u94C5\u767D",color:"#F0F0F4"},{label:"\u7CBE\u767D",color:"#FFFFFF"}]}];const wo=Hl;function Ul(e){return wo.some(t=>t.data.some(o=>o.color===e))}function Nl(e,t,n){return Ol(e,t).map(a=>$o(a,n))}function Ol(e,t){const n=[];return t.some(o=>{const r=e.includes(o.routeName);return r&&n.push(...Co(e,o)),r}),n}function Co(e,t){const n=[];return e===t.routeName&&n.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(n.push(t),n.push(...t.children.map(o=>Co(e,o)).flat(1))),n}function $o(e,t){var r;const n=Boolean(e.children&&e.children.length),o={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:n};return e.icon&&(o.icon=e.icon),n&&(o.children=(r=e.children)==null?void 0:r.map(a=>$o(a,t))),o}function jl(){const e=Ee(),t=oe(),n=w(()=>{const c="vertical",h="horizontal";return t.layout.mode.includes(c)?c:h}),o={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},r=w(()=>o[t.layout.mode]),a=w(()=>t.layout.mode!=="horizontal"),l=w(()=>{const{width:c,mixWidth:h,mixChildMenuWidth:f}=t.sider,p=t.layout.mode==="vertical-mix";let u=p?h:c;return p&&e.mixSiderFixed&&(u+=f),u}),s=w(()=>{const{collapsedWidth:c,mixCollapsedWidth:h,mixChildMenuWidth:f}=t.sider,p=t.layout.mode==="vertical-mix";let u=p?h:c;return p&&e.mixSiderFixed&&(u+=f),u});return{mode:n,headerProps:r,siderVisible:a,siderWidth:l,siderCollapsedWidth:s}}function Wl(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const ko=/\s*,(?![^(]*\))\s*/g,Kl=/\s+/g;function ql(e,t){const n=[];return t.split(ko).forEach(o=>{let r=Wl(o);if(r){if(r===1){e.forEach(l=>{n.push(o.replace("&",l))});return}}else{e.forEach(l=>{n.push((l&&l+" ")+o)});return}let a=[o];for(;r--;){const l=[];a.forEach(s=>{e.forEach(c=>{l.push(s.replace("&",c))})}),a=l}a.forEach(l=>n.push(l))}),n}function Xl(e,t){const n=[];return t.split(ko).forEach(o=>{e.forEach(r=>{n.push((r&&r+" ")+o)})}),n}function Yl(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=ql(t,n):t=Xl(t,n))}),t.join(", ").replace(Kl," ")}function qn(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function Fn(e){return document.querySelector(`style[cssr-id="${e}"]`)}function Gl(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Mt(e){return e?/^\s*@(s|m)/.test(e):!1}const Zl=/[A-Z]/g;function So(e){return e.replace(Zl,t=>"-"+t.toLowerCase())}function Jl(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${So(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function Ql(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function Xn(e,t,n,o){if(!t)return"";const r=Ql(t,n,o);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const a=Object.keys(r);if(a.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const l=e?[e+" {"]:[];return a.forEach(s=>{const c=r[s];if(s==="raw"){l.push(`
`+c+`
`);return}s=So(s),c!=null&&l.push(`  ${s}${Jl(c)}`)}),e&&l.push("}"),l.join(`
`)}function un(e,t,n){!e||e.forEach(o=>{if(Array.isArray(o))un(o,t,n);else if(typeof o=="function"){const r=o(t);Array.isArray(r)?un(r,t,n):r&&n(r)}else o&&n(o)})}function zo(e,t,n,o,r,a){const l=e.$;let s="";if(!l||typeof l=="string")Mt(l)?s=l:t.push(l);else if(typeof l=="function"){const f=l({context:o.context,props:r});Mt(f)?s=f:t.push(f)}else if(l.before&&l.before(o.context),!l.$||typeof l.$=="string")Mt(l.$)?s=l.$:t.push(l.$);else if(l.$){const f=l.$({context:o.context,props:r});Mt(f)?s=f:t.push(f)}const c=Yl(t),h=Xn(c,e.props,o,r);s?(n.push(`${s} {`),a&&h&&a.insertRule(`${s} {
${h}
}
`)):(a&&h&&a.insertRule(h),!a&&h.length&&n.push(h)),e.children&&un(e.children,{context:o.context,props:r},f=>{if(typeof f=="string"){const p=Xn(c,{raw:f},o,r);a?a.insertRule(p):n.push(p)}else zo(f,t,n,o,r,a)}),t.pop(),s&&n.push("}"),l&&l.after&&l.after(o.context)}function Ao(e,t,n,o=!1){const r=[];return zo(e,[],r,t,n,o?e.instance.__styleSheet:void 0),o?"":r.join(`

`)}function ei(e){for(var t=0,n,o=0,r=e.length;r>=4;++o,r-=4)n=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(o+2)&255)<<16;case 2:t^=(e.charCodeAt(o+1)&255)<<8;case 1:t^=e.charCodeAt(o)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function ti(e,t,n){const{els:o}=t;if(n===void 0)o.forEach(qn),t.els=[];else{const r=Fn(n);r&&o.includes(r)&&(qn(r),t.els=o.filter(a=>a!==r))}}function Yn(e,t){e.push(t)}function ni(e,t,n,o,r,a,l,s,c){if(a&&!c){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const u=window.__cssrContext;u[n]||(u[n]=!0,Ao(t,e,o,a));return}let h;if(n===void 0&&(h=t.render(o),n=ei(h)),c){c.adapter(n,h!=null?h:t.render(o));return}const f=Fn(n);if(f!==null&&!l)return f;const p=f!=null?f:Gl(n);if(h===void 0&&(h=t.render(o)),p.textContent=h,f!==null)return f;if(s){const u=document.head.querySelector(`meta[name="${s}"]`);if(u)return document.head.insertBefore(p,u),Yn(t.els,p),p}return r?document.head.insertBefore(p,document.head.querySelector("style, link")):document.head.appendChild(p),Yn(t.els,p),p}function oi(e){return Ao(this,this.instance,e)}function ri(e={}){const{id:t,ssr:n,props:o,head:r=!1,silent:a=!1,force:l=!1,anchorMetaName:s}=e;return ni(this.instance,this,t,o,r,a,l,s,n)}function ai(e={}){const{id:t}=e;ti(this.instance,this,t)}const It=function(e,t,n,o){return{instance:e,$:t,props:n,children:o,els:[],render:oi,mount:ri,unmount:ai}},li=function(e,t,n,o){return Array.isArray(t)?It(e,{$:null},null,t):Array.isArray(n)?It(e,t,null,n):Array.isArray(o)?It(e,t,n,o):It(e,t,n,null)};function ii(e={}){let t=null;const n={c:(...o)=>li(n,...o),use:(o,...r)=>o.install(n,...r),find:Fn,context:{},config:e,get __styleSheet(){if(!t){const o=document.createElement("style");return document.head.appendChild(o),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return n}function si(e){const t=P(0),n=w(()=>`transform: translateX(${-t.value}px);`);function o(h){t.value=h}function r(){var h;const f=((h=document.scrollingElement)==null?void 0:h.scrollLeft)||0;o(f)}function a(){r()}function l(){document.addEventListener("scroll",r)}function s(){document.removeEventListener("scroll",r)}function c(){a(),l()}return Re(e,h=>{h?c():s()},{immediate:!0}),Vt(()=>{s()}),n}function bt(){const{c:e}=ii();let t;function n(o,r,a=[]){t=e(o,r,a),t.render(),t.mount()}return Vt(()=>{t==null||t.unmount()}),{cssRender:n}}const ci=E({props:{fixed:{type:Boolean,default:!0},zIndex:{default:1001},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:n}=bt(),o=w(()=>{const{fixed:r,zIndex:a,minWidth:l,height:s,paddingLeft:c,transitionDuration:h,transitionTimingFunction:f}=t;return`position: ${r?"fixed":"static"};z-index: ${a};min-width: ${l}px;height: ${s}px;padding-left: ${c}px;transition-duration: ${h}ms;transition-timing-function: ${f};`});return n(".soybean-admin-layout__header",{left:0,top:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(b(),T("header",{class:"soybean-admin-layout__header",style:me(i(o))},[xe(r.$slots,"default")],4))}}),di=E({props:{fixed:{type:Boolean,default:!0},top:{default:56},zIndex:{default:999},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:n}=bt(),o=w(()=>{const{fixed:r,top:a,zIndex:l,minWidth:s,height:c,paddingLeft:h,transitionDuration:f,transitionTimingFunction:p}=t;return`position: ${r?"fixed":"static"};top: ${a}px;z-index: ${l};min-width: ${s}px;height: ${c}px;padding-left: ${h}px;transition-duration: ${f}ms;transition-timing-function: ${p};`});return n(".soybean-admin-layout__tab",{left:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(b(),T("div",{class:"soybean-admin-layout__tab",style:me(i(o))},[xe(r.$slots,"default")],4))}}),ui=E({props:{zIndex:{default:1002},width:{default:200},paddingTop:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:n}=bt(),o=w(()=>{const{zIndex:r,width:a,paddingTop:l,transitionDuration:s,transitionTimingFunction:c}=t;return`z-index: ${r};width: ${a}px;padding-top: ${l}px;transition-duration: ${s}ms;transition-timing-function: ${c};`});return n(".soybean-admin-layout__sider",{position:"fixed",left:0,top:0,boxSizing:"border-box",width:"100%",height:"100%",transitionProperty:"all"}),(r,a)=>(b(),T("aside",{class:"soybean-admin-layout__sider",style:me(i(o))},[xe(r.$slots,"default")],4))}}),hi=E({props:{paddingTop:{default:0},paddingBottom:{default:0},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:n}=bt(),o=w(()=>{const{paddingTop:r,paddingBottom:a,paddingLeft:l,transitionDuration:s,transitionTimingFunction:c}=t;return`padding-top: ${r}px;padding-bottom: ${a}px;padding-left: ${l}px;transition-duration: ${s}ms;transition-timing-function: ${c};`});return n(".soybean-admin-layout__main",{flexGrow:1,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(b(),T("main",{style:me(i(o)),class:"soybean-admin-layout__main"},[xe(r.$slots,"default")],4))}}),fi=E({props:{fixed:{type:Boolean,default:!0},zIndex:{default:999},minWidth:{default:1200},height:{default:56},paddingLeft:{default:0},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:n}=bt(),o=w(()=>{const{fixed:r,zIndex:a,minWidth:l,height:s,paddingLeft:c,transitionDuration:h,transitionTimingFunction:f}=t;return`position: ${r?"fixed":"static"};z-index: ${a};min-width: ${l}px;height: ${s}px;padding-left: ${c}px;transition-duration: ${h}ms;transition-timing-function: ${f};`});return n(".soybean-admin-layout__footer",{left:0,bottom:0,flexShrink:0,boxSizing:"border-box",width:"100%",transitionProperty:"padding-left"}),(r,a)=>(b(),T("footer",{class:"soybean-admin-layout__footer",style:me(i(o))},[xe(r.$slots,"default")],4))}}),Bn=E({props:{mode:{default:"vertical"},minWidth:{default:1200},headerVisible:{type:Boolean,default:!0},headerHeight:{default:56},tabVisible:{type:Boolean,default:!0},tabHeight:{default:44},fixedHeaderAndTab:{type:Boolean,default:!0},footerVisible:{type:Boolean,default:!0},footerHeight:{default:48},fixedFooter:{type:Boolean,default:!0},siderVisible:{type:Boolean,default:!0},siderWidth:{default:200},siderCollapsedWidth:{default:64},siderCollapse:{type:Boolean,default:!1},transitionDuration:{default:300},transitionTimingFunction:{default:"ease-in-out"}},setup(e){const t=e,{cssRender:n}=bt(),o=w(()=>t.fixedHeaderAndTab||t.fixedFooter),r=si(o),a=w(()=>t.fixedHeaderAndTab?r.value:""),l=w(()=>t.fixedFooter?r.value:""),s=w(()=>{const{transitionDuration:M,transitionTimingFunction:U}=t;return{transitionDuration:M,transitionTimingFunction:U}}),c=w(()=>t.mode==="vertical"),h=1001,f=999,p=w(()=>c.value?1002:1e3),u=999,y=w(()=>{const{siderCollapse:M,siderWidth:U,siderCollapsedWidth:Q}=t,le=M?Q:U;return t.siderVisible?le:0}),C=w(()=>c.value?y.value:0),$=w(()=>!c.value&&t.headerVisible?t.headerHeight:0),x=w(()=>{let M=0;return t.fixedHeaderAndTab&&(t.headerVisible&&(M+=t.headerHeight),t.tabVisible&&(M+=t.tabHeight)),M}),k=w(()=>t.fixedFooter&&t.footerVisible?t.footerHeight:0);return n(".soybean-admin-layout",{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),(M,U)=>(b(),T("div",{class:"soybean-admin-layout",style:me({minWidth:e.minWidth+"px"})},[e.headerVisible?(b(),L(i(ci),Qe({key:0},i(s),{fixed:e.fixedHeaderAndTab,"z-index":h,"min-width":e.minWidth,height:e.headerHeight,"padding-left":i(C),style:i(a)}),{default:S(()=>[xe(M.$slots,"header")]),_:3},16,["fixed","min-width","height","padding-left","style"])):Se("",!0),e.tabVisible?(b(),L(i(di),Qe({key:1},i(s),{fixed:e.fixedHeaderAndTab,"z-index":f,"min-width":e.minWidth,top:e.headerHeight,height:e.tabHeight,"padding-left":i(y),style:i(a)}),{default:S(()=>[xe(M.$slots,"tab")]),_:3},16,["fixed","min-width","top","height","padding-left","style"])):Se("",!0),e.siderVisible?(b(),L(i(ui),Qe({key:2},i(s),{"z-index":i(p),width:i(y),"padding-top":i($)}),{default:S(()=>[xe(M.$slots,"sider")]),_:3},16,["z-index","width","padding-top"])):Se("",!0),v(i(hi),Qe(i(s),{"padding-top":i(x),"padding-bottom":i(k),"padding-left":i(y)}),{default:S(()=>[xe(M.$slots,"default")]),_:3},16,["padding-top","padding-bottom","padding-left"]),e.footerVisible?(b(),L(i(fi),Qe({key:3},i(s),{fixed:e.fixedFooter,"z-index":u,"min-width":e.minWidth,height:e.footerHeight,"padding-left":i(y),style:i(l)}),{default:S(()=>[xe(M.$slots,"footer")]),_:3},16,["fixed","min-width","height","padding-left","style"])):Se("",!0)],4))}});function pi(e){e.component("AdminLayout",Bn)}Bn.install=pi;const mi={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},vi=O("path",{fill:"currentColor",d:"m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},null,-1),bi=[vi];function gi(e,t){return b(),T("svg",mi,bi)}var xi={name:"ant-design-setting-outlined",render:gi};const _i={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},yi=O("path",{fill:"currentColor",d:"m563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"},null,-1),wi=[yi];function Ci(e,t){return b(),T("svg",_i,wi)}var $i={name:"ant-design-close-outlined",render:Ci};const ki=E({setup(e){const t=Ee();return(n,o)=>{const r=$i,a=xi,l=ot;return b(),L(l,{type:"primary",class:ve([[{"!right-330px":i(t).settingDrawerVisible},i(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-240px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:i(t).toggleSettingDrawerVisible},{default:S(()=>[i(t).settingDrawerVisible?(b(),L(r,{key:0,class:"text-24px"})):(b(),L(a,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),Si={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},zi=O("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),Ai=O("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1),Ri=[zi,Ai];function Fi(e,t){return b(),T("svg",Si,Ri)}var Bi={name:"ic-round-hdr-auto",render:Fi};const Ei={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Mi=O("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1),Ii=[Mi];function Di(e,t){return b(),T("svg",Ei,Ii)}var Ti={name:"ic-baseline-do-not-disturb",render:Di};const Pi={class:"flex-y-center justify-between"},he=E({props:{label:null},setup(e){return(t,n)=>(b(),T("div",Pi,[O("span",null,Ae(e.label),1),xe(t.$slots,"default")]))}}),Li=ye("\u4E3B\u9898"),Vi={class:"flex-center"},Hi=E({setup(e){const t=oe();return(n,o)=>{const r=mt,a=Er,l=Mr,s=An,c=Ti,h=Bi,f=vt;return b(),T(ce,null,[v(r,{"title-placement":"center"},{default:S(()=>[Li]),_:1}),v(f,{vertical:"",size:"large"},{default:S(()=>[v(he,{label:"\u6DF1\u8272\u4E3B\u9898"},{default:S(()=>[O("div",Vi,[v(s,{value:i(t).darkMode,"onUpdate:value":i(t).setDarkMode},{checked:S(()=>[v(a,{class:"text-14px text-primary"})]),unchecked:S(()=>[v(l,{class:"text-14px text-primary"})]),_:1},8,["value","onUpdate:value"])])]),_:1}),v(he,{label:"\u8DDF\u968F\u7CFB\u7EDF"},{default:S(()=>[v(s,{value:i(t).followSystemTheme,"onUpdate:value":i(t).setFollowSystemTheme},{checked:S(()=>[v(c,{class:"text-14px text-primary"})]),unchecked:S(()=>[v(h,{class:"text-14px text-primary"})]),_:1},8,["value","onUpdate:value"])]),_:1})]),_:1})],64)}}});var Ui=Ye(Hi,[["__scopeId","data-v-625f8ac6"]]);const Ni={class:"layout-checkbox__shadow relative w-56px h-48px bg-white rounded-4px overflow-hidden"},Oi=E({props:{mode:null,label:null,checked:{type:Boolean}},setup(e){const t=e,n={vertical:{placement:"bottom-start",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},o=w(()=>n[t.mode]);return(r,a)=>{const l=_n;return b(),T("div",{class:ve(["border-2px rounded-6px cursor-pointer hover:border-primary",[e.checked?"border-primary":"border-transparent"]])},[v(l,{placement:i(o).placement,trigger:"hover"},{trigger:S(()=>[O("div",Ni,[O("div",{class:ve(["absolute-lt bg-[#273352]",i(o).menuClass])},null,2),O("div",{class:ve(["absolute-rb bg-[#f0f2f5]",i(o).mainClass])},null,2)])]),default:S(()=>[O("span",null,Ae(e.label),1)]),_:1},8,["placement"])],2)}}});var ji=Ye(Oi,[["__scopeId","data-v-2126b1d8"]]);const Wi=ye("\u5E03\u5C40\u6A21\u5F0F"),Ki=E({setup(e){const t=oe();return(n,o)=>{const r=mt,a=vt;return b(),T(ce,null,[v(r,{"title-placement":"center"},{default:S(()=>[Wi]),_:1}),v(a,{justify:"space-between"},{default:S(()=>[(b(!0),T(ce,null,qe(i(t).layout.modeList,l=>(b(),L(i(ji),{key:l.value,mode:l.value,label:l.label,checked:l.value===i(t).layout.mode,onClick:s=>i(t).setLayoutMode(l.value)},null,8,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),qi={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Xi=O("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1),Yi=[Xi];function Gi(e,t){return b(),T("svg",qi,Yi)}var Zi={name:"ic-outline-check",render:Gi};const Ro=E({props:{color:null,checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,n=["#ffffff","#fff","rgb(255,255,255)"],o=w(()=>n.includes(t.color));return(r,a)=>{const l=Zi;return b(),T("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:me({backgroundColor:e.color})},[e.checked?(b(),L(l,{key:0,class:ve([e.iconClass,i(o)?"text-gray-700":"text-white"])},null,8,["class"])):Se("",!0)],4)}}}),Ji={class:"flex-x-center"},Qi=ye("\u4E2D\u56FD\u4F20\u7EDF\u989C\u8272"),es={class:"text-center"},ts=E({props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const n=oe();function o(){t("close")}return(r,a)=>{const l=Ir,s=co,c=uo,h=Dl,f=Vl,p=to;return b(),L(p,{show:e.visible,preset:"card",class:"w-640px h-480px",onClose:o},{default:S(()=>[O("div",Ji,[v(l,{type:"primary",size:24},{default:S(()=>[Qi]),_:1})]),v(f,null,{default:S(()=>[(b(!0),T(ce,null,qe(i(wo),u=>(b(),L(h,{key:u.label,name:u.label,tab:u.label},{default:S(()=>[v(c,{cols:8,"x-gap":16,"y-gap":8},{default:S(()=>[(b(!0),T(ce,null,qe(u.data,y=>(b(),L(s,{key:y.label},{default:S(()=>[v(Ro,{class:"!w-full !h-36px !rounded-4px",color:y.color,checked:y.color===i(n).themeColor,"icon-class":"text-20px",onClick:C=>i(n).setThemeColor(y.color)},null,8,["color","checked","onClick"]),O("p",es,Ae(y.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),ns=ye("\u7CFB\u7EDF\u4E3B\u9898"),os=ye("\u66F4\u591A\u989C\u8272"),rs=E({setup(e){const t=oe(),{bool:n,setTrue:o,setFalse:r}=Nt(),a=w(()=>Ul(t.themeColor)),l=w(()=>a.value?"primary":"default");return(s,c)=>{const h=mt,f=co,p=uo,u=Na,y=ot,C=vt;return b(),T(ce,null,[v(h,{"title-placement":"center"},{default:S(()=>[ns]),_:1}),v(p,{cols:8,"x-gap":8,"y-gap":12},{default:S(()=>[(b(!0),T(ce,null,qe(i(t).themeColorList,$=>(b(),L(f,{key:$,class:"flex-x-center"},{default:S(()=>[v(i(Ro),{color:$,checked:$===i(t).themeColor,onClick:x=>i(t).setThemeColor($)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),v(C,{vertical:!0,class:"pt-12px"},{default:S(()=>[v(u,{value:i(t).themeColor,"show-alpha":!1,onUpdateValue:i(t).setThemeColor},null,8,["value","onUpdateValue"]),v(y,{block:!0,type:i(l),onClick:i(o)},{default:S(()=>[os]),_:1},8,["type","onClick"])]),_:1}),v(i(ts),{visible:i(n),onClose:i(r)},null,8,["visible","onClose"])],64)}}}),as=ye("\u754C\u9762\u529F\u80FD"),ls=E({setup(e){const t=oe();return(n,o)=>{const r=mt,a=An,l=so,s=gl,c=vt;return b(),T(ce,null,[v(r,{"title-placement":"center"},{default:S(()=>[as]),_:1}),v(c,{vertical:"",size:"large"},{default:S(()=>[v(he,{label:"\u4FA7\u8FB9\u680F\u53CD\u8F6C\u8272"},{default:S(()=>[v(a,{value:i(t).sider.inverted,"onUpdate:value":i(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u5934\u90E8\u53CD\u8F6C\u8272"},{default:S(()=>[v(a,{value:i(t).header.inverted,"onUpdate:value":i(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u56FA\u5B9A\u5934\u90E8\u548C\u591A\u9875\u7B7E"},{default:S(()=>[v(a,{value:i(t).fixedHeaderAndTab,"onUpdate:value":i(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u9876\u90E8\u83DC\u5355\u4F4D\u7F6E"},{default:S(()=>[v(l,{class:"w-120px",size:"small",value:i(t).menu.horizontalPosition,options:i(t).menu.horizontalPositionList,"onUpdate:value":i(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1}),v(he,{label:"\u5934\u90E8\u9AD8\u5EA6"},{default:S(()=>[v(s,{class:"w-120px",size:"small",value:i(t).header.height,step:1,"onUpdate:value":i(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u591A\u9875\u7B7E\u9AD8\u5EA6"},{default:S(()=>[v(s,{class:"w-120px",size:"small",value:i(t).tab.height,step:1,"onUpdate:value":i(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u591A\u9875\u7B7E\u7F13\u5B58"},{default:S(()=>[v(a,{value:i(t).tab.isCache,"onUpdate:value":i(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u4FA7\u8FB9\u680F\u5C55\u5F00\u5BBD\u5EA6"},{default:S(()=>[v(s,{class:"w-120px",size:"small",value:i(t).sider.width,step:10,"onUpdate:value":i(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u5DE6\u4FA7\u6DF7\u5408\u4FA7\u8FB9\u680F\u5C55\u5F00\u5BBD\u5EA6"},{default:S(()=>[v(s,{class:"w-120px",size:"small",value:i(t).sider.mixWidth,step:5,"onUpdate:value":i(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u56FA\u5B9A\u5E95\u90E8"},{default:S(()=>[v(a,{value:i(t).footer.fixed,"onUpdate:value":i(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1})]),_:1})],64)}}}),is=ye("\u754C\u9762\u663E\u793A"),ss=E({setup(e){const t=oe();return(n,o)=>{const r=mt,a=An,l=so,s=vt;return b(),T(ce,null,[v(r,{"title-placement":"center"},{default:S(()=>[is]),_:1}),v(s,{vertical:"",size:"large"},{default:S(()=>[v(he,{label:"\u9762\u5305\u5C51"},{default:S(()=>[v(a,{value:i(t).header.crumb.visible,"onUpdate:value":i(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u9762\u5305\u5C51\u56FE\u6807"},{default:S(()=>[v(a,{value:i(t).header.crumb.showIcon,"onUpdate:value":i(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u591A\u9875\u7B7E"},{default:S(()=>[v(a,{value:i(t).tab.visible,"onUpdate:value":i(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u591A\u9875\u7B7E\u98CE\u683C"},{default:S(()=>[v(l,{class:"w-120px",size:"small",value:i(t).tab.mode,options:i(t).tab.modeList,"onUpdate:value":i(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1}),v(he,{label:"\u9875\u9762\u5207\u6362\u52A8\u753B"},{default:S(()=>[v(a,{value:i(t).page.animate,"onUpdate:value":i(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1}),v(he,{label:"\u9875\u9762\u5207\u6362\u52A8\u753B\u7C7B\u578B"},{default:S(()=>[v(l,{class:"w-120px",size:"small",value:i(t).page.animateMode,options:i(t).page.animateModeList,"onUpdate:value":i(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1})]),_:1})],64)}}}),cs=ye("\u4E3B\u9898\u914D\u7F6E"),ds=ye("\u62F7\u8D1D\u5F53\u524D\u914D\u7F6E"),us=ye("\u91CD\u7F6E\u5F53\u524D\u914D\u7F6E"),hs=E({setup(e){const t=oe(),n=P(),o=P(r());function r(){return JSON.stringify(t.$state)}function a(){var c;t.resetThemeStore(),(c=window.$message)==null||c.success("\u5DF2\u91CD\u7F6E\u914D\u7F6E\uFF0C\u8BF7\u91CD\u65B0\u62F7\u8D1D\uFF01")}function l(){if(!n.value)return;new Pr(n.value).on("success",()=>{var h;(h=window.$dialog)==null||h.success({title:"\u64CD\u4F5C\u6210\u529F",content:"\u590D\u5236\u6210\u529F,\u8BF7\u66FF\u6362 src/settings/theme.json\u7684\u5185\u5BB9\uFF01",positiveText:"\u786E\u5B9A"})})}const s=Re(()=>t.$state,()=>{o.value=r()},{deep:!0});return hn(()=>{l()}),Vt(()=>{s()}),(c,h)=>{const f=mt,p=ot,u=vt;return b(),T(ce,null,[v(f,{"title-placement":"center"},{default:S(()=>[cs]),_:1}),at(O("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":h[0]||(h[0]=y=>o.value=y),class:"absolute opacity-0"},null,512),[[gr,o.value]]),v(u,{vertical:""},{default:S(()=>[O("div",{ref_key:"copyRef",ref:n,"data-clipboard-target":"#themeConfigCopyTarget"},[v(p,{type:"primary",block:!0},{default:S(()=>[ds]),_:1})],512),v(p,{type:"warning",block:!0,onClick:a},{default:S(()=>[us]),_:1})]),_:1})],64)}}}),fs=E({setup(e){const t=Ee();return(n,o)=>{const r=ll,a=rl;return b(),T(ce,null,[v(a,{show:i(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:i(t).closeSettingDrawer},{default:S(()=>[v(r,{title:"\u4E3B\u9898\u914D\u7F6E","native-scrollbar":!1},{default:S(()=>[v(i(Ui)),v(i(Ki)),v(i(rs)),v(i(ls)),v(i(ss)),v(i(hs))]),_:1})]),_:1},8,["show","onMaskClick"]),v(i(ki))],64)}}}),gt=E({props:{inverted:{type:Boolean,default:!1}},setup(e){return(t,n)=>(b(),T("div",{class:ve(["dark:bg-[#18181c] dark:text-white dark:text-opacity-82 transition-all duration-300 ease-in-out",e.inverted?"bg-[#001428] text-white":"bg-white text-[#333639]"])},[xe(t.$slots,"default")],2))}}),En=E({props:{showTitle:{type:Boolean}},setup(e){const{title:t}=oo(),n=no("root");return(o,r)=>{const a=Dr;return b(),L(i(xr),{to:i(n),class:"flex-center w-full nowrap-hidden"},{default:S(()=>[v(a,{class:"text-32px text-primary"}),at(O("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},Ae(i(t)),513),[[Tt,e.showTitle]])]),_:1},8,["to"])}}}),ps={key:0},xt=E({props:{tooltipContent:{default:""},placement:{default:"bottom"},contentClass:{default:""},inverted:{type:Boolean,default:!1}},setup(e){const t=e,n=w(()=>Boolean(t.tooltipContent)),o=w(()=>[t.contentClass,t.inverted?"hover:bg-primary":"hover:bg-[#f6f6f6]"].join(" "));return(r,a)=>{const l=_n;return i(n)?(b(),T("div",ps,[v(l,{placement:e.placement,trigger:"hover"},{trigger:S(()=>[O("div",{class:ve(["flex-center h-full cursor-pointer dark:hover:bg-[#333]",i(o)])},[xe(r.$slots,"default")],2)]),default:S(()=>[ye(" "+Ae(e.tooltipContent),1)]),_:3},8,["placement"])])):(b(),T("div",{key:1,class:ve(["flex-center cursor-pointer dark:hover:bg-[#333]",i(o)])},[xe(r.$slots,"default")],2))}}}),ms={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},vs=O("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"},null,-1),bs=[vs];function gs(e,t){return b(),T("svg",ms,bs)}var Fo={name:"uil-search",render:gs};const xs={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},_s=O("path",{fill:"currentColor",d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"},null,-1),ys=[_s];function ws(e,t){return b(),T("svg",xs,ys)}var Bo={name:"ant-design-enter-outlined",render:ws};const Cs={class:"pb-12px"},$s=["onMouseenter"],ks={class:"flex-1 ml-5px"},Ss=E({props:{value:null,options:null},emits:["update:value","enter"],setup(e,{emit:t}){const n=e,o=oe(),r=w({get(){return n.value},set(s){t("update:value",s)}});async function a(s){r.value=s.path}function l(){t("enter")}return(s,c)=>{const h=Bo,f=Ot;return b(),L(f,null,{default:S(()=>[O("div",Cs,[(b(!0),T(ce,null,qe(e.options,p=>{var u,y,C;return b(),T("div",{key:p.path,class:"bg-[#e5e7eb] dark:bg-dark h-56px mt-8px px-14px rounded-4px cursor-pointer flex-y-center justify-between",style:me({background:p.path===i(r)?i(o).themeColor:"",color:p.path===i(r)?"#fff":""}),onClick:l,onMouseenter:$=>a(p)},[v(i(ro),{icon:(y=(u=p.meta)==null?void 0:u.icon)!=null?y:"mdi:bookmark-minus-outline"},null,8,["icon"]),O("span",ks,Ae((C=p.meta)==null?void 0:C.title),1),v(h,{class:"icon text-20px p-2px mr-3px"})],44,$s)}),128))])]),_:1})}}}),zs={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},As=O("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),Rs=[As];function Fs(e,t){return b(),T("svg",zs,Rs)}var Bs={name:"mdi-close",render:Fs};const Es={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ms=O("path",{fill:"currentColor",d:"M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"},null,-1),Is=[Ms];function Ds(e,t){return b(),T("svg",Es,Is)}var Ts={name:"mdi-arrow-down-thin",render:Ds};const Ps={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ls=O("path",{fill:"currentColor",d:"M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"},null,-1),Vs=[Ls];function Hs(e,t){return b(),T("svg",Ps,Vs)}var Us={name:"mdi-arrow-up-thin",render:Hs};const Ns={},Os={class:"px-24px h-44px flex-y-center"},js={class:"mr-14px"},Ws=ye(" \u786E\u8BA4 "),Ks={class:"mr-14px"},qs=ye(" \u5207\u6362 "),Xs=ye(" \u5173\u95ED ");function Ys(e,t){const n=Bo,o=Us,r=Ts,a=Bs;return b(),T("div",Os,[O("span",js,[v(n,{class:"icon text-20px p-2px mr-3px"}),Ws]),O("span",Ks,[v(o,{class:"icon text-20px p-2px mr-5px"}),v(r,{class:"icon text-20px p-2px mr-3px"}),qs]),O("span",null,[v(a,{class:"icon text-20px p-2px mr-3px"}),Xs])])}var Gs=Ye(Ns,[["render",Ys],["__scopeId","data-v-e5dbd186"]]);const Zs={class:"mt-20px"},Js=E({props:{value:{type:Boolean}},emits:["update:value"],setup(e,{emit:t}){const n=e,o=_r(),r=St(),a=P(""),l=P(""),s=yr([]),c=P(),h=wr(p,300),f=w({get(){return n.value},set(x){t("update:value",x)}});Re(f,async x=>{var k;x&&(await Ct(),(k=c.value)==null||k.focus())});function p(){var x;s.value=r.searchMenus.filter(k=>{var M;return a.value&&((M=k.meta)==null?void 0:M.title.toLocaleLowerCase().includes(a.value.toLocaleLowerCase().trim()))}),((x=s.value)==null?void 0:x.length)>0?l.value=s.value[0].path:l.value=""}function u(){f.value=!1,setTimeout(()=>{s.value=[],a.value=""},200)}function y(){const{length:x}=s.value;if(x===0)return;const k=s.value.findIndex(M=>M.path===l.value);k===0?l.value=s.value[x-1].path:l.value=s.value[k-1].path}function C(){const{length:x}=s.value;if(x===0)return;const k=s.value.findIndex(M=>M.path===l.value);k+1===x?l.value=s.value[0].path:l.value=s.value[k+1].path}function $(){var M;const{length:x}=s.value;if(x===0||l.value==="")return;const k=s.value.find(U=>U.path===l.value);(M=k==null?void 0:k.meta)!=null&&M.href?window.open(l.value,"__blank"):(o.push(l.value),u())}return Rt("Escape",u),Rt("Enter",$),Rt("ArrowUp",y),Rt("ArrowDown",C),(x,k)=>{const M=Fo,U=xn,Q=Xr,le=to;return b(),L(le,{show:i(f),"onUpdate:show":k[2]||(k[2]=N=>ao(f)?f.value=N:null),segmented:{footer:"soft"},closable:!1,preset:"card","footer-style":"padding: 0; margin: 0",class:"w-630px fixed left-0 right-0 top-50px",onAfterLeave:u},{footer:S(()=>[v(Gs)]),default:S(()=>[v(U,{ref_key:"inputRef",ref:c,value:a.value,"onUpdate:value":k[0]||(k[0]=N=>a.value=N),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",onInput:i(h)},{prefix:S(()=>[v(M,{class:"text-15px text-[#c2c2c2]"})]),_:1},8,["value","onInput"]),O("div",Zs,[i(s).length===0?(b(),L(Q,{key:0,description:"\u6682\u65E0\u641C\u7D22\u7ED3\u679C"})):(b(),L(Ss,{key:1,value:l.value,"onUpdate:value":k[1]||(k[1]=N=>l.value=N),options:i(s),onEnter:$},null,8,["value","options"]))])]),_:1},8,["show"])}}}),Qs=E({setup(e){const{bool:t,toggle:n}=Nt(),o=oe();function r(){n()}return(a,l)=>{const s=Fo,c=xt;return b(),T("div",null,[v(c,{class:"w-40px h-full","tooltip-content":"\u641C\u7D22",inverted:i(o).header.inverted,onClick:r},{default:S(()=>[v(s,{class:"text-20px"})]),_:1},8,["inverted"]),v(i(Js),{value:i(t),"onUpdate:value":l[0]||(l[0]=h=>ao(t)?t.value=h:null)},null,8,["value"])])}}}),ec={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},tc=lo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M19 12H10" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M19 19H5" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M19 5H5" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M7 15L4 12" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M7 9L4 12" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path></g>',1),nc=[tc];function oc(e,t){return b(),T("svg",ec,nc)}var rc={name:"line-md-menu-fold-left",render:oc};const ac={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},lc=lo('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M14 12H5" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M19 19H5" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M19 5H5" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M21 15L18 12" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M21 9L18 12" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path></g>',1),ic=[lc];function sc(e,t){return b(),T("svg",ac,ic)}var cc={name:"line-md-menu-unfold-left",render:sc};const dc=E({setup(e){const t=Ee(),n=oe();return(o,r)=>{const a=cc,l=rc,s=xt;return b(),L(s,{class:"w-40px h-full",inverted:i(n).header.inverted,onClick:i(t).toggleSiderCollapse},{default:S(()=>[i(t).siderCollapse?(b(),L(a,{key:0,class:"text-16px"})):(b(),L(l,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),uc=E({setup(e){const t=pt(),n=oe(),o=St(),{routerPush:r}=zt(),a=w(()=>Nl(t.name,o.menus,no("root")));function l(s){r({name:s})}return(s,c)=>{const h=Ut,f=va,p=ha;return b(),L(p,{class:"px-12px"},{default:S(()=>[(b(!0),T(ce,null,qe(i(a),u=>(b(),L(f,{key:u.key},{default:S(()=>[u.hasChildren?(b(),L(h,{key:0,options:u.children,onSelect:l},{default:S(()=>[O("span",null,[i(n).header.crumb.showIcon?(b(),L(Lt(u.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):Se("",!0),O("span",null,Ae(u.label),1)])]),_:2},1032,["options"])):(b(),T(ce,{key:1},[i(n).header.crumb.showIcon?(b(),L(Lt(u.icon),{key:0,class:ve(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":i(n).header.inverted}])},null,8,["class"])):Se("",!0),O("span",{class:ve({"text-#BBBBBB":i(n).header.inverted})},Ae(u.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),hc=E({setup(e){const t=pt(),n=St(),o=oe(),{routerPush:r}=zt(),a=w(()=>n.menus),l=w(()=>t.name);function s(c,h){r(h.routePath)}return(c,h)=>{const f=zn;return b(),L(f,{value:i(l),mode:"horizontal",options:i(a),inverted:i(o).header.inverted,"onUpdate:value":s},null,8,["value","options","inverted"])}}}),fc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},pc=O("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),mc=[pc];function vc(e,t){return b(),T("svg",fc,mc)}var bc={name:"mdi-github",render:vc};const gc=E({setup(e){const t=oe();function n(){window.open("https://github.com/Cheng-DX/teamwork-2022","_blank")}return(o,r)=>{const a=bc,l=xt;return b(),L(l,{"tooltip-content":"github",class:"w-40px h-full",inverted:i(t).header.inverted,onClick:n},{default:S(()=>[v(a,{class:"text-20px"})]),_:1},8,["inverted"])}}}),xc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},_c=O("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),yc=[_c];function wc(e,t){return b(),T("svg",xc,yc)}var Cc={name:"gridicons-fullscreen",render:wc};const $c={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},kc=O("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),Sc=[kc];function zc(e,t){return b(),T("svg",$c,Sc)}var Ac={name:"gridicons-fullscreen-exit",render:zc};const Rc=E({setup(e){const{isFullscreen:t,toggle:n}=Cr(),o=oe();return(r,a)=>{const l=Ac,s=Cc,c=xt;return b(),L(c,{class:"w-40px h-full","tooltip-content":"\u5168\u5C4F",inverted:i(o).header.inverted,onClick:i(n)},{default:S(()=>[i(t)?(b(),L(l,{key:0,class:"text-18px"})):(b(),L(s,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),Fc=E({setup(e){const t=oe();return(n,o)=>{const r=Tr,a=xt;return b(),L(a,{class:"w-40px",inverted:i(t).header.inverted,"tooltip-content":"\u4E3B\u9898\u6A21\u5F0F"},{default:S(()=>[v(r,{dark:i(t).darkMode,class:"wh-full","onUpdate:dark":i(t).setDarkMode},null,8,["dark","onUpdate:dark"])]),_:1},8,["inverted"])}}}),Bc={class:"pl-8px text-16px font-medium"},Ec=E({setup(e){const t=$r(),n=oe(),o=[{label:"\u7528\u6237\u4E2D\u5FC3",key:"user-center",icon:et("carbon:user-avatar")},{type:"divider",key:"divider"},{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:et("carbon:logout")}];function r(a){var s;a==="logout"&&((s=window.$dialog)==null||s.info({title:"\u63D0\u793A",content:"\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{t.resetAuthStore()}}))}return(a,l)=>{const s=Yr,c=xt,h=Ut;return b(),L(h,{options:o,onSelect:r},{default:S(()=>[v(c,{class:"px-12px",inverted:i(n).header.inverted},{default:S(()=>[v(s,{class:"text-32px"}),O("span",Bc,Ae(i(t).userInfo.userName),1)]),_:1},8,["inverted"])]),_:1})}}}),Mc={key:1,class:"flex-1-hidden flex-y-center h-full"},Ic={class:"flex justify-end h-full"},Dc=E({props:{showLogo:null,showHeaderMenu:null,showMenuCollapse:null},setup(e){const t=oe();return(n,o)=>{const r=gt;return b(),L(r,{class:"global-header flex-y-center h-full",inverted:i(t).header.inverted},{default:S(()=>[e.showLogo?(b(),L(En,{key:0,"show-title":!0,class:"h-full",style:me({width:i(t).sider.width+"px"})},null,8,["style"])):Se("",!0),e.showHeaderMenu?(b(),T("div",{key:2,class:"flex-1-hidden flex-y-center h-full",style:me({justifyContent:i(t).menu.horizontalPosition})},[v(i(hc))],4)):(b(),T("div",Mc,[e.showMenuCollapse?(b(),L(i(dc),{key:0})):Se("",!0),i(t).header.crumb.visible?(b(),L(i(uc),{key:1})):Se("",!0)])),O("div",Ic,[v(Qs),v(i(gc)),v(i(Rc)),v(i(Fc)),v(i(Ec))])]),_:1},8,["inverted"])}}});var Tc=Ye(Dc,[["__scopeId","data-v-492ea6bc"]]);const Pc=E({props:{options:null},setup(e,{expose:t}){const n=e,o=P(),r=P(),a=P(),l=w(()=>Boolean(n.options.scrollY));function s(){!o.value||(r.value=new Lr(o.value,n.options))}const{width:c}=Pn(o),{width:h,height:f}=Pn(a);return Re([()=>c.value,()=>h.value,()=>f.value],()=>{r.value&&r.value.refresh()}),hn(()=>{s()}),t({instance:r}),(p,u)=>(b(),T("div",{ref_key:"bsWrap",ref:o,class:"h-full text-left"},[O("div",{ref_key:"bsContent",ref:a,class:ve(["inline-block",{"h-full":!i(l)}])},[xe(p.$slots,"default")],2)],512))}}),Lc=E({props:{visible:{type:Boolean,default:!1},currentPath:{default:""},x:null,y:null},emits:["update:visible"],setup(e,{emit:t}){const n=e,o=Ee(),r=gn(),a=w({get(){return n.visible},set(f){t("update:visible",f)}});function l(){a.value=!1}const s=w(()=>[{label:"\u91CD\u65B0\u52A0\u8F7D",key:"reload-current",disabled:n.currentPath!==r.activeTab,icon:et("ant-design:reload-outlined")},{label:"\u5173\u95ED",key:"close-current",disabled:n.currentPath===r.homeTab.path,icon:et("ant-design:close-outlined")},{label:"\u5173\u95ED\u5176\u4ED6",key:"close-other",icon:et("ant-design:column-width-outlined")},{label:"\u5173\u95ED\u5DE6\u4FA7",key:"close-left",icon:et("mdi:format-horizontal-align-left")},{label:"\u5173\u95ED\u53F3\u4FA7",key:"close-right",icon:et("mdi:format-horizontal-align-right")}]),c=new Map([["reload-current",()=>{o.reloadPage()}],["close-current",()=>{r.removeTab(n.currentPath)}],["close-other",()=>{r.clearTab([n.currentPath])}],["close-left",()=>{r.clearLeftTab(n.currentPath)}],["close-right",()=>{r.clearRightTab(n.currentPath)}]]);function h(f){const p=f,u=c.get(p);u&&u(),l()}return(f,p)=>{const u=Ut;return b(),L(u,{show:i(a),options:i(s),placement:"bottom-start",x:e.x,y:e.y,onClickoutside:l,onSelect:h},null,8,["show","options","x","y"])}}}),Vc=E({emits:["scroll"],setup(e,{emit:t}){const n=oe(),o=gn(),r=w(()=>n.tab.mode==="chrome"),a=w(()=>r.value?Vr:Hr),l=P();async function s(){if(await Ct(),l.value&&l.value.children.length&&l.value.children[o.activeTabIndex]){const y=l.value.children[o.activeTabIndex],{x:C,width:$}=y.getBoundingClientRect(),x=C+$/2;setTimeout(()=>{t("scroll",x)},50)}}const c=kr({visible:!1,x:0,y:0,currentPath:""});function h(){c.visible=!0}function f(){c.visible=!1}function p(y,C,$){Object.assign(c,{x:y,y:C,currentPath:$})}async function u(y,C){y.preventDefault();const{clientX:$,clientY:x}=y;f(),p($,x,C),await Ct(),h()}return Re(()=>o.activeTabIndex,()=>{s()},{immediate:!0}),Sr(window,"beforeunload",()=>{zr(o.tabs)}),(y,C)=>(b(),T(ce,null,[O("div",{ref_key:"tabRef",ref:l,class:ve(["h-full",[i(r)?"flex items-end":"flex-y-center"]])},[(b(!0),T(ce,null,qe(i(o).tabs,($,x)=>(b(),L(Lt(i(a)),{key:$.path,"is-active":i(o).activeTab===$.path,"primary-color":i(n).themeColor,closable:$.path!==i(o).homeTab.path,"dark-mode":i(n).darkMode,class:ve({"!mr-0":i(r)&&x===i(o).tabs.length-1,"mr-10px":!i(r)}),onClick:k=>i(o).handleClickTab($.path),onClose:k=>i(o).removeTab($.path),onContextmenu:k=>u(k,$.path)},{default:S(()=>[$.meta.icon?(b(),L(i(ro),{key:0,icon:$.meta.icon,class:"inline-block align-text-bottom mr-4px text-16px"},null,8,["icon"])):Se("",!0),ye(" "+Ae($.meta.title),1)]),_:2},1032,["is-active","primary-color","closable","dark-mode","class","onClick","onClose","onContextmenu"]))),128))],2),v(i(Lc),{visible:i(c).visible,"onUpdate:visible":C[0]||(C[0]=$=>i(c).visible=$),"current-path":i(c).currentPath,x:i(c).x,y:i(c).y},null,8,["visible","current-path","x","y"])],64))}}),Hc=E({setup(e){const t=pt(),n=oe(),o=gn(),r=Ar(),a=P(),{width:l,left:s}=Rr(a),c=P(),h=Boolean(r.device.type);function f(u){var $;const C=u-s.value-l.value/2;if(c.value){const{maxScrollX:x,x:k}=c.value.instance,M=x-k,U=C>0?Math.max(-C,M):Math.min(-C,-k);($=c.value)==null||$.instance.scrollBy(U,0,300)}}function p(){o.iniTabStore(t)}return Re(()=>t.path,()=>{o.addTab(t),o.setActiveTab(t.path)}),p(),(u,y)=>{const C=Pc,$=gt;return b(),L($,{class:"global-tab flex-y-center w-full pl-16px",style:me({height:i(n).tab.height+"px"})},{default:S(()=>[O("div",{ref_key:"bsWrapper",ref:a,class:"flex-1-hidden h-full"},[v(C,{ref_key:"bsScroll",ref:c,options:{scrollX:!0,scrollY:!1,click:i(h)}},{default:S(()=>[v(i(Vc),{onScroll:f})]),_:1},8,["options"])],512)]),_:1},8,["style"])}}});var Uc=Ye(Hc,[["__scopeId","data-v-1a119b0b"]]);const Nc=E({setup(e){const t=pt(),n=Ee(),o=oe(),r=St(),{routerPush:a}=zt(),l=w(()=>t.name),s=P([]);function c(f,p){a(p.routePath)}function h(f){s.value=f}return Re(()=>t.name,()=>{s.value=io(l.value,r.menus)},{immediate:!0}),(f,p)=>{const u=zn,y=Ot;return b(),L(y,{class:"flex-1-hidden"},{default:S(()=>[v(u,{value:i(l),collapsed:i(n).siderCollapse,"collapsed-width":i(o).sider.collapsedWidth,"collapsed-icon-size":22,options:i(r).menus,"expanded-keys":s.value,indent:18,inverted:i(o).sider.inverted,"onUpdate:value":c,"onUpdate:expandedKeys":h},null,8,["value","collapsed","collapsed-width","options","expanded-keys","inverted"])]),_:1})}}}),Oc=E({setup(e){const t=Ee(),n=oe(),o=w(()=>n.layout.mode==="horizontal-mix"),r=w(()=>!t.siderCollapse&&n.layout.mode!=="vertical-mix");return(a,l)=>{const s=gt;return b(),L(s,{class:"flex-col-stretch h-full",inverted:i(n).sider.inverted},{default:S(()=>[i(o)?Se("",!0):(b(),L(i(En),{key:0,"show-title":i(r),style:me({height:i(n).header.height+"px"})},null,8,["show-title","style"])),v(i(Nc))]),_:1},8,["inverted"])}}}),jc=E({props:{routeName:null,label:null,activeRouteName:null,icon:{type:Function,default:void 0},isMini:{type:Boolean,default:!1}},setup(e){const t=e,{bool:n,setTrue:o,setFalse:r}=Nt(),a=w(()=>t.routeName===t.activeRouteName);return(l,s)=>(b(),T("div",{class:"mb-6px px-4px cursor-pointer",onMouseenter:s[0]||(s[0]=(...c)=>i(o)&&i(o)(...c)),onMouseleave:s[1]||(s[1]=(...c)=>i(r)&&i(r)(...c))},[O("div",{class:ve(["flex-center flex-col py-12px rounded-2px bg-transparent transition-colors duration-300 ease-in-out",{"text-primary !bg-primary_active":i(a),"text-primary":i(n)}])},[(b(),L(Lt(e.icon),{class:ve([e.isMini?"text-16px":"text-20px"])},null,8,["class"])),O("p",{class:ve(["text-12px overflow-hidden transition-height duration-300 ease-in-out",[e.isMini?"h-0 pt-0":"h-24px pt-4px"]])},Ae(e.label),3)],2)],32))}}),Wc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Kc=O("path",{fill:"currentColor",d:"M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2Z"},null,-1),qc=[Kc];function Xc(e,t){return b(),T("svg",Wc,qc)}var Yc={name:"mdi-pin",render:Xc};const Gc={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Zc=O("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73l-6-6M16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1v8Z"},null,-1),Jc=[Zc];function Qc(e,t){return b(),T("svg",Gc,Jc)}var ed={name:"mdi-pin-off",render:Qc};const td={class:"text-primary pl-8px text-16px font-bold"},nd=E({props:{visible:{type:Boolean},menus:null},setup(e){const t=e,n=pt(),o=Ee(),r=oe(),{routerPush:a}=zt(),{title:l}=oo(),s=w(()=>t.visible&&t.menus.length||o.mixSiderFixed),c=w(()=>n.name),h=P([]);function f(u,y){a(y.routePath)}function p(u){h.value=u}return Re(()=>n.name,()=>{h.value=io(c.value,t.menus)},{immediate:!0}),(u,y)=>{const C=ed,$=Yc,x=zn,k=Ot,M=gt;return b(),T("div",{class:"relative h-full transition-width duration-300 ease-in-out",style:me({width:i(o).mixSiderFixed?i(r).sider.mixChildMenuWidth+"px":"0px"})},[v(M,{class:"drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden",style:me({width:i(s)?i(r).sider.mixChildMenuWidth+"px":"0px"})},{default:S(()=>[O("header",{class:"header-height flex-y-center justify-between",style:me({height:i(r).header.height+"px"})},[O("h2",td,Ae(i(l)),1),O("div",{class:"px-8px text-16px text-gray-600 cursor-pointer",onClick:y[0]||(y[0]=(...U)=>i(o).toggleMixSiderFixed&&i(o).toggleMixSiderFixed(...U))},[i(o).mixSiderFixed?(b(),L(C,{key:0})):(b(),L($,{key:1}))])],4),v(k,{class:"flex-1-hidden"},{default:S(()=>[v(x,{value:i(c),options:e.menus,"expanded-keys":h.value,indent:18,"onUpdate:value":f,"onUpdate:expandedKeys":p},null,8,["value","options","expanded-keys"])]),_:1})]),_:1},8,["style"])],4)}}});var od=Ye(nd,[["__scopeId","data-v-05f946ac"]]);const rd={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1em",height:"1em"},ad=O("path",{fill:"currentColor",d:"M208.5 199.5a12 12 0 0 1 0 17a12.1 12.1 0 0 1-17 0l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L137 128ZM57 128l71.5-71.5a12 12 0 0 0-17-17l-80 80a12 12 0 0 0 0 17l80 80a12.1 12.1 0 0 0 17 0a12 12 0 0 0 0-17Z"},null,-1),ld=[ad];function id(e,t){return b(),T("svg",rd,ld)}var sd={name:"ph-caret-double-left-bold",render:id};const cd={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1em",height:"1em"},dd=O("path",{fill:"currentColor",d:"m144.5 136.5l-80 80a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17L119 128L47.5 56.5a12 12 0 0 1 17-17l80 80a12 12 0 0 1 0 17Zm80-17l-80-80a12 12 0 0 0-17 17L199 128l-71.5 71.5a12 12 0 0 0 0 17a12.1 12.1 0 0 0 17 0l80-80a12 12 0 0 0 0-17Z"},null,-1),ud=[dd];function hd(e,t){return b(),T("svg",cd,ud)}var fd={name:"ph-caret-double-right-bold",render:hd};const pd=E({setup(e){const t=Ee();return(n,o)=>{const r=fd,a=sd,l=ot;return b(),L(l,{text:!0,class:"h-36px",onClick:i(t).toggleSiderCollapse},{default:S(()=>[i(t).siderCollapse?(b(),L(r,{key:0,class:"text-16px"})):(b(),L(a,{key:1,class:"text-16px"}))]),_:1},8,["onClick"])}}}),md={class:"flex-1 flex-col-stretch h-full"},vd=E({setup(e){const t=pt(),n=Ee(),o=oe(),r=St(),{routerPush:a}=zt(),{bool:l,setTrue:s,setFalse:c}=Nt(),h=P("");function f(x){h.value=x}const p=w(()=>r.menus.map(x=>{const{routeName:k,label:M}=x,U=x==null?void 0:x.icon,Q=Boolean(x.children&&x.children.length);return{routeName:k,label:M,icon:U,hasChildren:Q}}));function u(){p.value.some(x=>{const k=t.name,M=k==null?void 0:k.includes(x.routeName);return M&&f(x.routeName),M})}function y(x,k){f(x),k?s():a({name:x})}function C(){u(),c()}const $=w(()=>{const x=[];return r.menus.some(k=>{var U;const M=k.routeName===h.value&&Boolean((U=k.children)==null?void 0:U.length);return M&&x.push(...k.children||[]),M}),x});return Re(()=>t.name,()=>{u()},{immediate:!0}),(x,k)=>{const M=Ot,U=gt;return b(),L(U,{class:"flex h-full",inverted:i(o).sider.inverted,onMouseleave:C},{default:S(()=>[O("div",md,[v(i(En),{"show-title":!1,style:me({height:i(o).header.height+"px"})},null,8,["style"]),v(M,{class:"flex-1-hidden"},{default:S(()=>[(b(!0),T(ce,null,qe(i(p),Q=>(b(),L(i(jc),{key:Q.routeName,"route-name":Q.routeName,"active-route-name":h.value,label:Q.label,icon:Q.icon,"is-mini":i(n).siderCollapse,onClick:le=>y(Q.routeName,Q.hasChildren)},null,8,["route-name","active-route-name","label","icon","is-mini","onClick"]))),128))]),_:1}),v(i(pd))]),v(i(od),{visible:i(l),menus:i($)},null,8,["visible","menus"])]),_:1},8,["inverted"])}}}),bd=E({setup(e){const t=oe(),n=w(()=>t.layout.mode==="vertical-mix");return(o,r)=>i(n)?(b(),L(i(vd),{key:0,class:"global-sider"})):(b(),L(i(Oc),{key:1,class:"global-sider"}))}});var gd=Ye(bd,[["__scopeId","data-v-1c23afa2"]]);const xd={},_d=O("span",null,"Copyright \xA92021 Soybean Admin",-1);function yd(e,t){const n=gt;return b(),L(n,{class:"flex-center h-full"},{default:S(()=>[_d]),_:1})}var wd=Ye(xd,[["render",yd]]);const Vd=E({setup(e){const t=Ee(),n=oe(),{mode:o,headerProps:r,siderVisible:a,siderWidth:l,siderCollapsedWidth:s}=jl();return(c,h)=>(b(),T(ce,null,[v(i(Bn),{mode:i(o),"min-width":i(n).layout.minWidth,"fixed-header-and-tab":i(n).fixedHeaderAndTab,"header-height":i(n).header.height,"tab-visible":i(n).tab.visible,"tab-height":i(n).tab.height,"sider-visible":i(a),"sider-width":i(l),"sider-collapsed-width":i(s),"sider-collapse":i(t).siderCollapse,"fixed-footer":i(n).footer.fixed},{header:S(()=>[v(i(Tc),Fr(Br(i(r))),null,16)]),tab:S(()=>[v(i(Uc))]),sider:S(()=>[v(i(gd))]),footer:S(()=>[v(i(wd))]),default:S(()=>[v(i(Ur))]),_:1},8,["mode","min-width","fixed-header-and-tab","header-height","tab-visible","tab-height","sider-visible","sider-width","sider-collapsed-width","sider-collapse","fixed-footer"]),v(i(fs))],64))}});export{Vd as default};
