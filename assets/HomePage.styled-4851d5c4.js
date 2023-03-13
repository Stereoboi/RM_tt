import{G as w,s as t,N as b,k as v,e as k,r as y,g as L,a as p,j as a,J as C,l as j,n as A,Z as I}from"./index-3cff79b8.js";function R(i){return w({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(i)}const $=t.li`
  width: 312px;
  height: 308px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  svg {
    opacity: 0;
  }
  &:hover,
  &:focus {
    svg {
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0px 5px 14px 2px rgb(18 110 33 / 71%);
  }
  @media screen and (min-width: 1024px) {
    width: 240px;
    height: 244px;
  }
`,z=t.img`
  object-fit: cover;
  object-position: center 35%;

  width: 312px;
  height: 232px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  @media screen and (min-width: 1024px) {
    width: 240px;
    height: 168px;
  }
`,F=t.ul`
  padding: 12px 16px;
`,s=t.li``,G=t.p`
  font-family: Roboto;
  color: black;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.6px;
  letter-spacing: 0.15px;
  margin-bottom: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 208px;
`,J=t.p`
  font-family: Roboto;
  color: black;
  font-weight: 400;
  font-size: 14px;
  line-height: 26.88px;
  letter-spacing: 0.25px;
`,M=t(b)`
  text-decoration: none;
`,N=t.button`
  position: absolute;
  background-color: transparent;

  svg {
    fill: ${i=>{if(i.isAdded)return"red"}};
    width: 23px;
    height: 23px;
  }
`,B=({id:i,name:e,species:n,image:o})=>{const[r,T]=v(k),[x,c]=y.useState(!1),l=L(),g=(d,h,m,u)=>{const f=C(j,r.uid);A(I(f,`${d}`),{id:d,name:h,species:m,image:u})};return p($,{children:[a(N,{type:"button",id:i,isAdded:x,onClick:()=>{c(!0),console.log(),g(i,e,n,o)},children:a(R,{})}),p(M,{to:`/character/${i}`,state:{from:l},children:[a(z,{src:o}),p(F,{children:[a(s,{children:a(G,{children:e})}),a(s,{children:a(J,{children:n})})]})]})]})},S=t.ul`
  margin: 0 auto;
  display: grid;
  /* justify-content: center; */
  justify-items: center;

  grid-row-gap: 32px;
  grid-column-gap: 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 24px 20px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 24px 20px;
  }
`,H=({characterList:i})=>a(S,{children:i.map(({id:e,name:n,species:o,image:r})=>a(B,{name:n,species:o,image:r,id:e},e))}),W=t.div`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 88px;
  max-width: 767px;

  /* @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 23px;
    padding-bottom: 100px;
    max-width: 1023px;
  } */
  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    padding-left: 210px;
    padding-right: 210px;
    padding-top: 26px;
    padding-bottom: 188px;
    max-width: 1440px;
  }
`;export{H as C,W as M};
