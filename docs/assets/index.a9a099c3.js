import{r as h,V as N,d as w,T as y,o as $,j as T,g as B,u,bK as D,a4 as E,c as F,w as _,bB as U,a as d,h as S,t as V,_ as L}from"./index.2c320f72.js";import{f as R,b as j,_ as G,a as K}from"./rule.a5db4623.js";import{u as q}from"./useSmsCode.9c0b78a9.js";import{_ as H}from"./Input.73cccce0.js";import{_ as J}from"./Space.6ec3dacc.js";import"./useBoolean.97a0ae87.js";import"./use-locale.85fd1138.js";import"./get-slot.ef4c002f.js";function O(s=152,o=40){const t=h(),a=h("");function c(n){a.value=n}function e(){!t.value||(a.value=Q(t.value,s,o))}return N(()=>{e()}),{domRef:t,imgCode:a,setImgCode:c,getImgCode:e}}function i(s,o){return Math.floor(Math.random()*(o-s)+s)}function v(s,o){const t=i(s,o),a=i(s,o),c=i(s,o);return`rgb(${t},${a},${c})`}function Q(s,o,t){let a="";const c="0123456789",e=s.getContext("2d");if(!e)return a;e.fillStyle=v(180,230),e.fillRect(0,0,o,t);for(let n=0;n<4;n+=1){const m=c[i(0,c.length)];a+=m;const l=i(18,41),p=i(-30,30);e.font=`${l}px Simhei`,e.textBaseline="top",e.fillStyle=v(80,150),e.save(),e.translate(30*n+23,15),e.rotate(p*Math.PI/180),e.fillText(m,-15+5,-15),e.restore()}for(let n=0;n<5;n+=1)e.beginPath(),e.moveTo(i(0,o),i(0,t)),e.lineTo(i(0,o),i(0,t)),e.strokeStyle=v(180,230),e.closePath(),e.stroke();for(let n=0;n<41;n+=1)e.beginPath(),e.arc(i(0,o),i(0,t),1,0,2*Math.PI),e.closePath(),e.fillStyle=v(150,200),e.fill();return a}const W=w({props:{code:{default:""}},emits:["update:code"],setup(s,{expose:o,emit:t}){const a=s,{domRef:c,imgCode:e,setImgCode:n,getImgCode:m}=O();return y(()=>a.code,l=>{n(l)}),y(e,l=>{t("update:code",l)}),o({getImgCode:m}),(l,p)=>($(),T("div",null,[B("canvas",{ref_key:"domRef",ref:c,width:"152",height:"40",class:"cursor-pointer",onClick:p[0]||(p[0]=(...b)=>u(m)&&u(m)(...b))},null,512)]))}}),X={class:"flex-y-center w-full"},Y=B("div",{class:"w-18px"},null,-1),Z={class:"pl-8px"},ee=S(" \u786E\u5B9A "),oe=S("\u8FD4\u56DE"),de=w({setup(s){const o=D(),{toLoginModule:t}=U(),{label:a,isCounting:c,loading:e,getSmsCode:n}=q(),m=h(null),l=E({phone:"",code:"",imgCode:""}),p=h(""),b={phone:R.phone,code:R.code,imgCode:j(p)};function I(){n(l.phone)}function A(x){!m.value||(x.preventDefault(),m.value.validate(r=>{var g,C;r?(C=window.$message)==null||C.error("\u9A8C\u8BC1\u5931\u8D25"):(g=window.$message)==null||g.success("\u9A8C\u8BC1\u901A\u8FC7!")}))}return(x,r)=>{const g=H,C=K,k=L,M=W,P=J,z=G;return $(),F(z,{ref_key:"formRef",ref:m,model:u(l),rules:b,size:"large","show-label":!1},{default:_(()=>[d(C,{path:"phone"},{default:_(()=>[d(g,{value:u(l).phone,"onUpdate:value":r[0]||(r[0]=f=>u(l).phone=f),placeholder:"\u624B\u673A\u53F7\u7801"},null,8,["value"])]),_:1}),d(C,{path:"code"},{default:_(()=>[B("div",X,[d(g,{value:u(l).code,"onUpdate:value":r[1]||(r[1]=f=>u(l).code=f),placeholder:"\u9A8C\u8BC1\u7801"},null,8,["value"]),Y,d(k,{size:"large",disabled:u(c),loading:u(e),onClick:I},{default:_(()=>[S(V(u(a)),1)]),_:1},8,["disabled","loading"])])]),_:1}),d(C,{path:"imgCode"},{default:_(()=>[d(g,{value:u(l).imgCode,"onUpdate:value":r[2]||(r[2]=f=>u(l).imgCode=f),placeholder:"\u9A8C\u8BC1\u7801,\u70B9\u51FB\u56FE\u7247\u5237\u65B0"},null,8,["value"]),B("div",Z,[d(M,{code:p.value,"onUpdate:code":r[3]||(r[3]=f=>p.value=f)},null,8,["code"])])]),_:1}),d(P,{vertical:!0,size:18},{default:_(()=>[d(k,{type:"primary",size:"large",block:!0,round:!0,loading:u(o).loginLoading,onClick:A},{default:_(()=>[ee]),_:1},8,["loading"]),d(k,{size:"large",block:!0,round:!0,onClick:r[4]||(r[4]=f=>u(t)("pwd-login"))},{default:_(()=>[oe]),_:1})]),_:1})]),_:1},8,["model"])}}});export{de as default};
