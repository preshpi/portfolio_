import{b as c,u as q,j as w,m as L,a as f}from"./index-94a40de8.js";import{e as U}from"./index-f4bd556f.js";let R={data:""},Y=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||R,B=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,G=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,b=(e,t)=>{let a="",o="",s="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":o+=r[1]=="f"?b(n,r):r+"{"+b(n,r[1]=="k"?"":t)+"}":typeof n=="object"?o+=b(n,t?t.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=b.p?b.p(r,n):r+":"+n+";")}return a+(t&&s?t+"{"+s+"}":s)+o},h={},T=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+T(e[a]);return t}return e},W=(e,t,a,o,s)=>{let r=T(e),n=h[r]||(h[r]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(r));if(!h[n]){let l=r!==e?e:(d=>{let p,u,m=[{}];for(;p=B.exec(d.replace(G,""));)p[4]?m.shift():p[3]?(u=p[3].replace(S," ").trim(),m.unshift(m[0][u]=m[0][u]||{})):m[0][p[1]]=p[2].replace(S," ").trim();return m[0]})(e);h[n]=b(s?{["@keyframes "+n]:l}:l,a?"":"."+n)}let i=a&&h.g?h.g:null;return a&&(h.g=h[n]),((l,d,p,u)=>{u?d.data=d.data.replace(u,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(h[n],t,o,i),n},Z=(e,t,a)=>e.reduce((o,s,r)=>{let n=t[r];if(n&&n.call){let i=n(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return o+s+(n??"")},"");function F(e){let t=this||{},a=e.call?e(t.p):e;return W(a.unshift?a.raw?Z(a,[].slice.call(arguments,1),t.p):a.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):a,Y(t.target),t.g,t.o,t.k)}let _,I,A;F.bind({g:1});let y=F.bind({k:1});function J(e,t,a,o){b.p=t,_=e,I=a,A=o}function v(e,t){let a=this||{};return function(){let o=arguments;function s(r,n){let i=Object.assign({},r),l=i.className||s.className;a.p=Object.assign({theme:I&&I()},i),a.o=/ *go\d+/.test(l),i.className=F.apply(a,o)+(l?" "+l:""),t&&(i.ref=n);let d=e;return e[0]&&(d=i.as||e,delete i.as),A&&d[0]&&A(i),_(d,i)}return t?t(s):s}}var Q=e=>typeof e=="function",O=(e,t)=>Q(e)?e(t):e,V=(()=>{let e=0;return()=>(++e).toString()})(),H=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),X=20,$=new Map,K=1e3,z=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),k({type:4,toastId:e})},K);$.set(e,t)},ee=e=>{let t=$.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,X)};case 1:return t.toast.id&&ee(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?z(o):e.toasts.forEach(r=>{z(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},j=[],C={toasts:[],pausedAt:void 0},k=e=>{C=P(C,e),j.forEach(t=>{t(C)})},te={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ae=(e={})=>{let[t,a]=c.useState(C);c.useEffect(()=>(j.push(a),()=>{let s=j.indexOf(a);s>-1&&j.splice(s,1)}),[t]);let o=t.toasts.map(s=>{var r,n;return{...e,...e[s.type],...s,duration:s.duration||((r=e[s.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||te[s.type],style:{...e.style,...(n=e[s.type])==null?void 0:n.style,...s.style}}});return{...t,toasts:o}},re=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||V()}),E=e=>(t,a)=>{let o=re(t,e,a);return k({type:2,toast:o}),o.id},g=(e,t)=>E("blank")(e,t);g.error=E("error");g.success=E("success");g.loading=E("loading");g.custom=E("custom");g.dismiss=e=>{k({type:3,toastId:e})};g.remove=e=>k({type:4,toastId:e});g.promise=(e,t,a)=>{let o=g.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(s=>(g.success(O(t.success,s),{id:o,...a,...a==null?void 0:a.success}),s)).catch(s=>{g.error(O(t.error,s),{id:o,...a,...a==null?void 0:a.error})}),e};var se=(e,t)=>{k({type:1,toast:{id:e,height:t}})},oe=()=>{k({type:5,time:Date.now()})},ie=e=>{let{toasts:t,pausedAt:a}=ae(e);c.useEffect(()=>{if(a)return;let r=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&g.dismiss(i.id);return}return setTimeout(()=>g.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,a]);let o=c.useCallback(()=>{a&&k({type:6,time:Date.now()})},[a]),s=c.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},p=t.filter(x=>(x.position||d)===(r.position||d)&&x.height),u=p.findIndex(x=>x.id===r.id),m=p.filter((x,D)=>D<u&&x.visible).length;return p.filter(x=>x.visible).slice(...i?[m+1]:[0,m]).reduce((x,D)=>x+(D.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:se,startPause:oe,endPause:o,calculateOffset:s}}},ne=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,le=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,de=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ce=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,me=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ge=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,fe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ge} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,xe=v("div")`
  position: absolute;
`,he=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ye=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ye} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ve=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(be,null,t):t:a==="blank"?null:c.createElement(he,null,c.createElement(ue,{...o}),a!=="loading"&&c.createElement(xe,null,a==="error"?c.createElement(ce,{...o}):c.createElement(fe,{...o})))},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ke=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",Ne="0%{opacity:1;} 100%{opacity:0;}",$e=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,je=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ce=(e,t)=>{let a=e.includes("top")?1:-1,[o,s]=H()?[Ee,Ne]:[we(a),ke(a)];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Oe=c.memo(({toast:e,position:t,style:a,children:o})=>{let s=e.height?Ce(e.position||t||"top-center",e.visible):{opacity:0},r=c.createElement(ve,{toast:e}),n=c.createElement(je,{...e.ariaProps},O(e.message,e));return c.createElement($e,{className:e.className,style:{...s,...a,...e.style}},typeof o=="function"?o({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});J(c.createElement);var Fe=({id:e,className:t,style:a,onHeightUpdate:o,children:s})=>{let r=c.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;o(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.createElement("div",{ref:r,className:t,style:a},s)},De=(e,t)=>{let a=e.includes("top"),o=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:H()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...o,...s}},Ie=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,N=16,Ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:s,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=ie(a);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:N,left:N,right:N,bottom:N,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||t,u=l.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),m=De(p,u);return c.createElement(Fe,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Ie:"",style:m},d.type==="custom"?O(d.message,d):s?s(d):c.createElement(Oe,{toast:d,position:p}))}))},M=g;function ze(){const[e,t]=c.useState(""),[a,o]=c.useState(""),[s,r]=c.useState(""),n=()=>M.error("Error occured!"),i=()=>M.success("Successfully sent!"),l=c.useRef(),d=q(),p=u=>{u.preventDefault(),e.length===0||a.length===0||s.length===0?n():(i(),U.sendForm("service_aakyhrk","template_scsfe35",l.current,"rBHPqsGP1vYUCEoP9").then(m=>{console.log(m.text),console.log("sent")},m=>{console.log(m.text)})),t(""),o(""),r("")};return w(L.div,{initial:{opacity:0},animate:d,exit:{opacity:0,transition:{ease:"easeInOut"}},className:"mt-[32px] mx-auto w-[80%]",children:[w("div",{className:"text-center grid items-center justify-center place-items-center",children:[w("span",{className:"text-primary dark:text-gray leading-[30px] font-[700] md:leading-[50px] text-[24px] md:text-[35px]",children:["Want to work with me?",f("p",{className:"text-secondary dark:text-white mt-2",children:"let's Connect"})]}),w("p",{className:"text-[14px] md:text-[20px] leading-[24px] md:leading-[35px] text-para dark:text-gray word-break mt-[24px] md:w-[550px] w-[350px] whitespace-no-wrap",children:["I am open to"," ",f("span",{className:"text-secondary dark:text-gray font-bold",children:"remote"})," ","and"," ",f("span",{className:"text-secondary dark:text-gray font-bold",children:"onsite full-time, part-time"})," ","roles. If you've got anything you think I'd be interested in then"," ",f("span",{className:"text-secondary dark:text-gray font-bold",children:"fill the form."})]})]}),w("form",{ref:l,className:"space-y-6 mt-[34px]",onSubmit:p,children:[w("div",{className:"items-center justify-center place-items-center grid gap-8",children:[f("input",{type:"text",name:"user_name",value:e,placeholder:"Enter your name",required:!0,onChange:u=>t(u.target.value),className:"border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[320px] md:w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"}),f("input",{type:"email",name:"user_email",value:a,placeholder:"Enter your mail",required:!0,onChange:u=>o(u.target.value),className:"border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[320px] md:w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"}),f("textarea",{name:"message",id:"message",value:s,placeholder:"Message",required:!0,onChange:u=>r(u.target.value),className:"border-[#2D2929] dark:border-white border-[3px] p-4 outline-none w-[320px] md:w-[500px] h-[100px] md:h-[150px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"}),f("button",{className:"items-center justify-center place-items-center grid",type:"submit",children:w("span",{className:"relative w-[320px] md:w-[500px] h-[60px] group  px-6 py-3 font-bold",children:[f("span",{className:"absolute inset-0 w-[320px] md:w-[500px] h-[60px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"}),f("span",{className:"absolute inset-0 w-[320px] md:w-[500px] h-[60px] bg-darkgrey dark:bg-white"}),f("span",{className:"text-resume dark:text-darkgrey text-[16px] text-center font-[700] leading-[24px] relative group-hover:opacity-85",children:"CONNECT"})]})})]}),f(Ae,{position:"top-center",toastOptions:{duration:3e3,iconTheme:{primary:"green",secondary:"white"},role:"status",ariaLive:"polite"}})]})]})}export{ze as default};
