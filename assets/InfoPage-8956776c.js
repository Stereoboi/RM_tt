import{s as n,a as e,j as t,N as I,r as m,f as k,g as T,h as j}from"./index-3cff79b8.js";import{a as v,b as z}from"./api-a37e930d.js";const L=n.div`
  padding: 64px 25px 85px 25px;
  @media screen and (min-width: 768px) {
    padding-top: 76px;
    padding-bottom: 142px;
  }
`,B=n.img`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`,R=n.p`
  margin-top: 34px;
  margin-bottom: 34px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 32px;
  line-height: 29.5px;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 48px;
    font-size: 48px;
    line-height: 48px;
  }
`,C=n.p`
  margin-bottom: 16px;

  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 20.4px;
  letter-spacing: 0.15px;
  color: rgba(110, 121, 140, 1);
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
  }
`,F=n.ul`
  width: 312px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 412px;
  }
`,o=n.li`
  /* height: 64px; */

  padding: 9px 0 12px 16px;
`,r=n.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`,a=n.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.25px;
  color: rgba(110, 121, 140, 1);
`,g=n.div`
  width: 312px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 412px;
  }
`,N=({name:c,status:d,species:p,type:l,gender:x,image:s,origin:h})=>e(L,{children:[e(g,{children:[t(B,{src:s}),t(R,{children:c})]}),e(g,{children:[t(C,{children:"Information"}),e(F,{children:[e(o,{children:[t(r,{children:"Gender"}),t(a,{children:x})]}),e(o,{children:[t(r,{children:"Status"}),t(a,{children:d})]}),e(o,{children:[t(r,{children:"Specie"}),t(a,{children:p})]}),e(o,{children:[t(r,{children:"Origin"}),t(a,{children:h})]}),e(o,{children:[t(r,{children:"Type"}),t(a,{children:l.length===0?"Information are absent ":l})]})]})]})]}),S=n(I)`
  position: absolute;
  left: 50px;
  top: 81px;
  display: flex;
  width: 150px;
  align-items: center;
  text-decoration: none;
  color: black;
  transition: color 250ms ease-in-out;
  &:hover {
    color: green;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`,E=n.p`
  margin-left: 8px;
  font-size: 18px;
  line-height: 21.04px;
  font-weight: 700;
  font-family: Karla;
`,W=()=>{var s;const[c,d]=m.useState(null),{characterId:p}=k(),x=((s=T().state)==null?void 0:s.from)??"/";if(m.useEffect(()=>{(async()=>{try{const i=await z(p);d(i.data)}catch(i){console.log(i)}})()},[p]),c){const{name:h,status:i,species:f,type:u,gender:w,image:b,origin:y}=c;return e(j,{children:[e(S,{to:x,type:"button",children:[t(v,{}),t(E,{children:"Go Back"})]}),t(N,{name:h,status:i,species:f,type:u,gender:w,image:b,origin:y.name})]})}};export{W as default};
