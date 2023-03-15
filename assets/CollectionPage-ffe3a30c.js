import{s as h,j as a,l as m,r as s,f as g,z as x,J as y,n as d,Z as C,o as R}from"./index-51cb5fa9.js";import{M as S,C as w}from"./HomePage.styled-52af4d75.js";const E=h.p`
  font-family: Roboto;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 300px;
  height: 80vh;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  color: green;
  @media screen and (min-width: 768px) {
    font-family: Roboto;
    font-size: 28px;
    width: 600px;
    color: green;
  }
`,b=()=>a(E,{children:"Your collection is empty, Morty ¯\\_(ツ)_/¯"}),M=()=>{const[r,z]=m(g),[i,c]=s.useState([]),[u,j]=s.useState(!0);s.useEffect(()=>{const e=localStorage.getItem("USER_KEY");(async()=>{const n=await x(y(d,e||r.uid));let o=[];n.forEach(l=>{const p=l.ref;o.push({...l.data(),id:p.id})}),c(o)})()},[]);const f=async e=>{try{const t=C(d,r.uid,`${e}`);await R(t),c(n=>n.filter(o=>o.id!==e))}catch(t){console.log(t)}};return a(S,{children:i.length===0?a(b,{}):a(w,{characterList:i,deleteCard:f,removed:u})})};export{M as default};
