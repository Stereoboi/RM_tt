import{G as h,s as o,N as y,l as k,f as L,r as j,h as I,a as x,j as a,Q as l,J as A,n as B,p as F,Z}from"./index-51cb5fa9.js";function R(t){return h({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}}]})(t)}function z(t){return h({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"}}]})(t)}const M=o.li`
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
      fill: rgb(18, 110, 33);
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
`,$=o.img`
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
`,G=o.ul`
  padding: 12px 16px;
`,g=o.li``,J=o.p`
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
`,N=o.p`
  font-family: Roboto;
  color: black;
  font-weight: 400;
  font-size: 14px;
  line-height: 26.88px;
  letter-spacing: 0.25px;
`,S=o(y)`
  text-decoration: none;
`,T=o.button`
  position: absolute;
  background-color: transparent;
  bottom: 0;
  right: 0;
  svg {
    /* fill: ${t=>{if(t.isAdded)return console.log("asd"),"red"}}; */

    width: 23px;
    height: 23px;
  }
`,H=o.button`
  position: absolute;
  background-color: transparent;
  bottom: 0;
  right: 0;
  svg {
    width: 23px;
    height: 23px;
  }
`,E=({id:t,name:i,species:n,image:e,deleteCard:p,removed:s})=>{const[r,Y]=k(L),[m,u]=j.useState(!1),f=I(),b=(d,c,w,v)=>{const C=A(B,r.uid);F(Z(C,`${d}`),{id:d,name:c,species:w,image:v})};return x(M,{children:[!m&&a(T,{type:"button",id:t,onClick:()=>{if(!r){l.info("you need to Sign up to click this");return}l.success("Character added to your collection"),u(!0),b(t,i,n,e)},children:a(R,{})}),s&&a(H,{type:"button",id:t,onClick:async d=>{l.info("It seems you don't like him anymore");const c=d.currentTarget.id;await p(c)},children:a(z,{})}),x(S,{to:`/character/${t}`,state:{from:f},children:[a($,{src:e}),x(G,{children:[a(g,{children:a(J,{children:i})}),a(g,{children:a(N,{children:n})})]})]})]})},Q=o.ul`
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
`,O=({characterList:t,deleteCard:i,removed:n})=>a(Q,{children:t.map(({id:e,name:p,species:s,image:r})=>a(E,{name:p,species:s,image:r,id:e,deleteCard:i,removed:n},e))}),P=o.div`
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
`;export{O as C,P as M};
