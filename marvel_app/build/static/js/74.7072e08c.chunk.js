"use strict";(self.webpackChunkmarvel_react_app=self.webpackChunkmarvel_react_app||[]).push([[74],{293:(e,t,s)=>{s.d(t,{A:()=>n});const a=s.p+"static/media/giphy.9b522a077d09fe14729a.webp";var i=s(579);const n=()=>(0,i.jsx)("img",{src:a,alt:"error",className:"error"})},115:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(591),i=s(793),n=s(43),c=s(475),r=s(897),l=s(649),o=s(293),m=s(644),d=s(579);const h=()=>{const[e,t]=(0,n.useState)([]),[s,a]=(0,n.useState)(0),[i,h]=(0,n.useState)(!0),[u,j]=(0,n.useState)(!1),{getAllComics:p,loading:v,clearError:x,process:b,setProcess:g}=(0,r.A)();(0,n.useEffect)((()=>{p().then((e=>t((t=>[...t,...e.map((e=>({...e,active:!1})))])))).finally((()=>{h(!1)})),w(),x()}),[]);const w=()=>e.map((s=>{const a=s.active?"selected":null;let i={objectFit:"cover"};const n=()=>{(s=>{const a=e.map((e=>e.id===s?{...e,active:!0}:{...e,active:!1}));t(a)})(s.id)};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s.thumbnail&&(i={objectFit:"unset"});return(0,d.jsxs)(c.N_,{to:"/comics/".concat(s.id),tabIndex:0,className:a,onClick:n,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||n()},children:[(0,d.jsx)("img",{src:s.thumbnail,style:i,alt:"comics"}),(0,d.jsx)("div",{className:"comicsTitle",children:s.title}),(0,d.jsx)("div",{className:"price",children:s.price})]},s.id)}));let f=v&&!i?(0,d.jsx)(m.A,{}):(0,d.jsx)("button",{className:"button button__main button__long",onClick:()=>(e=>{p(e).then((e=>{e.length<8&&j(!0),t((t=>[...t,...e.map((e=>({...e,active:!1})))]))})).then((()=>g("confirmed"))),a((e=>e+8))})(s+8),children:(0,d.jsx)("div",{className:"inner",children:"load more"})});return u&&(f=null),(0,d.jsxs)("div",{children:[(0,d.jsx)("ul",{className:"comicsWrapper",children:((e,t)=>{switch(e){case"waiting":case"loading":return i?(()=>{const e=[];for(let t=0;t<8;t++)e.push((0,d.jsxs)("li",{children:[(0,d.jsx)(l.A,{variant:"rectangular",width:225,height:346,animation:"wave"}),(0,d.jsx)(l.A,{height:36,animation:"wave"}),(0,d.jsx)(l.A,{width:"30%",animation:"wave"})]},t));return e})():(0,d.jsx)(t,{});case"confirmed":return w();case"error":return(0,d.jsx)(o.A,{});default:throw new Error("Quelque chose s'est mal passe")}})(b,(()=>w()))}),f]})},u=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.m,{children:[(0,d.jsx)("meta",{name:"description",content:"Site about Marvel Universe and its heroes"}),(0,d.jsx)("title",{children:"Marvel Comics"})]}),(0,d.jsx)(i.A,{}),(0,d.jsx)(h,{})]})}}]);
//# sourceMappingURL=74.7072e08c.chunk.js.map