import{M as w,d as x,y as z,z as b,N as R,e as $,G as B,O as j,P as h,Q as C,B as y}from"./index.2c320f72.js";import{g as M}from"./get-slot.ef4c002f.js";const P=()=>w,_={name:"Space",self:P};var E=_;const L=Object.assign(Object.assign({},b.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var A=x({name:"Space",props:L,setup(a){const{mergedClsPrefixRef:i,mergedRtlRef:g}=z(a),t=b("Space","-space",void 0,E,a,i);return{rtlEnabled:R("Space",g,i),mergedClsPrefix:i,margin:$(()=>{const{size:e}=a;if(Array.isArray(e))return{horizontal:e[0],vertical:e[1]};if(typeof e=="number")return{horizontal:e,vertical:e};const{self:{[B("gap",e)]:m}}=t.value,{row:o,col:l}=j(m);return{horizontal:h(l),vertical:h(o)}})}},render(){const{vertical:a,align:i,inline:g,justify:t,itemStyle:u,margin:e,wrap:m,mergedClsPrefix:o,rtlEnabled:l}=this,f=C(M(this));if(!f.length)return null;const d=`${e.horizontal}px`,c=`${e.horizontal/2}px`,v=`${e.vertical}px`,r=`${e.vertical/2}px`,s=f.length-1,p=t.startsWith("space-");return y("div",{role:"none",class:[`${o}-space`,l&&`${o}-space--rtl`],style:{display:g?"inline-flex":"flex",flexDirection:a?"column":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!m||a?"nowrap":"wrap",marginTop:a?"":`-${r}`,marginBottom:a?"":`-${r}`,alignItems:i}},f.map((S,n)=>y("div",{role:"none",style:[u,{maxWidth:"100%"},a?{marginBottom:n!==s?v:""}:l?{marginLeft:p?t==="space-between"&&n===s?"":c:n!==s?d:"",marginRight:p?t==="space-between"&&n===0?"":c:"",paddingTop:r,paddingBottom:r}:{marginRight:p?t==="space-between"&&n===s?"":c:n!==s?d:"",marginLeft:p?t==="space-between"&&n===0?"":c:"",paddingTop:r,paddingBottom:r}]},S)))}});export{A as _};
