import{aX as V,bV as W,q as n,v,p as x,aC as a,d as b,x as B,y as T,a3 as J,h as s,Y as O,$ as H,bW as K,a as y,B as f,C as M,aL as C,aN as k,b as Y,w as g,o as $,c as p,l as S,g as D,bH as G,b3 as q,P as X,af as Q}from"./index.a36190ed.js";import{f as U}from"./Input.d2404834.js";import{u as Z}from"./use-houdini.d0a3a68c.js";import{_ as ee,a as te}from"./Grid.3f511424.js";import{N as ie}from"./Dropdown.4d3c173c.js";import{_ as ne}from"./DataTable.c0fdf3f8.js";import"./use-locale.40cf2c9b.js";import"./next-frame-once.3f36dc6b.js";import"./get-slot.ef4c002f.js";import"./Checkbox.85643a3f.js";import"./RadioGroup.d9bb2c2f.js";const oe=e=>{const{textColor3:i,infoColor:o,errorColor:r,successColor:t,warningColor:l,textColor1:c,textColor2:m,railColor:d,fontWeightStrong:u,fontSize:h}=e;return Object.assign(Object.assign({},W),{contentFontSize:h,titleFontWeight:u,circleBorder:`2px solid ${i}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${t}`,circleBorderWarning:`2px solid ${l}`,iconColor:i,iconColorInfo:o,iconColorError:r,iconColorSuccess:t,iconColorWarning:l,titleTextColor:c,contentTextColor:m,metaTextColor:i,lineColor:d})},re={name:"Timeline",common:V,self:oe};var le=re;const w=1.25;var ae=n("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${w};
`,[v("horizontal",`
 flex-direction: row;
 `,[x(">",[n("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[x(">",[n("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)]),n("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),v("right-placement",[n("timeline-item",[n("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),v("left-placement",[n("timeline-item",[n("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 left: 0;
 `)])]),n("timeline-item",`
 position: relative;
 `,[x("&:last-child",[n("timeline-item-timeline",[a("line",`
 display: none;
 `)]),n("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),n("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 margin-bottom: 6px;
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),v("dashed-line-type",[n("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),n("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${w} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]);const se=Object.assign(Object.assign({},T.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),P=O("n-timeline");var ce=b({name:"Timeline",props:se,setup(e,{slots:i}){const{mergedClsPrefixRef:o}=B(e),r=T("Timeline","-timeline",ae,le,e,o);return J(P,{props:e,mergedThemeRef:r,mergedClsPrefixRef:o}),()=>{const{value:t}=o;return s("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},i)}}});const me={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}};var de=b({name:"TimelineItem",props:me,setup(e){const i=H(P);i||K("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Z();const{inlineThemeDisabled:o}=B(),r=y(()=>{const{props:{size:l,iconSize:c},mergedThemeRef:m}=i,{type:d}=e,{self:{titleTextColor:u,contentTextColor:h,metaTextColor:z,lineColor:_,titleFontWeight:F,contentFontSize:N,[f("iconSize",l)]:L,[f("titleMargin",l)]:E,[f("titleFontSize",l)]:R,[f("circleBorder",d)]:j,[f("iconColor",d)]:A},common:{cubicBezierEaseInOut:I}}=m.value;return{"--n-bezier":I,"--n-circle-border":j,"--n-icon-color":A,"--n-content-font-size":N,"--n-content-text-color":h,"--n-line-color":_,"--n-meta-text-color":z,"--n-title-font-size":R,"--n-title-font-weight":F,"--n-title-margin":E,"--n-title-text-color":u,"--n-icon-size":U(c)||L}}),t=o?M("timeline-item",y(()=>{const{props:{size:l,iconSize:c}}=i,{type:m}=e;return`${l[0]}${c||"a"}${m[0]}`}),r,i.props):void 0;return{mergedClsPrefix:i.mergedClsPrefixRef,cssVars:o?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:i,onRender:o,$slots:r}=this;return o==null||o(),s("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},s("div",{class:`${e}-timeline-item-timeline`},s("div",{class:`${e}-timeline-item-timeline__line`}),C(r.icon,t=>t?s("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:i}},t):s("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:i}}))),s("div",{class:`${e}-timeline-item-content`},C(r.header,t=>t||this.title?s("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),s("div",{class:`${e}-timeline-item-content__content`},k(r.default,()=>[this.content])),s("div",{class:`${e}-timeline-item-content__meta`},k(r.footer,()=>[this.time]))))}});const pe={class:"h-360px"},ue={class:"h-360px"},$e=b({setup(e){const i=[{type:"default",title:"\u554A",content:"",time:"2021-10-10 20:46"},{type:"success",title:"\u6210\u529F",content:"\u54EA\u91CC\u6210\u529F",time:"2021-10-10 20:46"},{type:"error",title:"\u9519\u8BEF",content:"\u54EA\u91CC\u9519\u8BEF",time:"2021-10-10 20:46"},{type:"warning",title:"\u8B66\u544A",content:"\u54EA\u91CC\u8B66\u544A",time:"2021-10-10 20:46"},{type:"info",title:"\u4FE1\u606F",content:"\u662F\u7684",time:"2021-10-10 20:46"}],o=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render(t){return t.tags.map(c=>s(ie,{style:{marginRight:"6px"},type:"info"},{default:()=>c}))}}],r=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{key:3,name:"Soybean",age:25,address:"China Shenzhen",tags:["handsome","programmer"]},{key:4,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:5,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:6,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];return(t,l)=>{const c=de,m=ce,d=X,u=te,h=ne,z=ee;return $(),Y(z,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:g(()=>[p(u,{span:"0:24 640:24 1024:8"},{default:g(()=>[p(d,{title:"\u65F6\u95F4\u7EBF",bordered:!1,class:"rounded-16px shadow-sm"},{default:g(()=>[S("div",pe,[p(m,null,{default:g(()=>[($(),D(q,null,G(i,_=>p(c,Q({key:_.type},_),null,16)),64))]),_:1})])]),_:1})]),_:1}),p(u,{span:"0:24 640:24 1024:16"},{default:g(()=>[p(d,{title:"\u8868\u683C",bordered:!1,class:"rounded-16px shadow-sm"},{default:g(()=>[S("div",ue,[p(h,{size:"small",columns:o,data:r})])]),_:1})]),_:1})]),_:1})}}});export{$e as default};
