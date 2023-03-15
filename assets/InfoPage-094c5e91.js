import{s as n,a as e,j as t,N as T,r as m,g as j,h as v,k as z}from"./index-3bc16952.js";import{p as i}from"./index-4d501b15.js";import{a as L,b as B}from"./api-70e61b21.js";const R=n.div`
  padding: 64px 25px 85px 25px;
  @media screen and (min-width: 768px) {
    padding-top: 76px;
    padding-bottom: 142px;
  }
`,C=n.img`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`,E=n.p`
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
`,F=n.p`
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
`,N=n.ul`
  width: 312px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 412px;
  }
`,r=n.li`
  /* height: 64px; */

  padding: 9px 0 12px 16px;
`,a=n.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`,s=n.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.25px;
  color: rgba(110, 121, 140, 1);
`,f=n.div`
  width: 312px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 412px;
  }
`,u=({name:c,status:l,species:p,type:x,gender:g,image:h,origin:d})=>e(R,{children:[e(f,{children:[t(C,{src:h}),t(E,{children:c})]}),e(f,{children:[t(F,{children:"Information"}),e(N,{children:[e(r,{children:[t(a,{children:"Gender"}),t(s,{children:g})]}),e(r,{children:[t(a,{children:"Status"}),t(s,{children:l})]}),e(r,{children:[t(a,{children:"Specie"}),t(s,{children:p})]}),e(r,{children:[t(a,{children:"Origin"}),t(s,{children:d})]}),e(r,{children:[t(a,{children:"Type"}),t(s,{children:x.length===0?"Information are absent ":x})]})]})]})]});u.propTypes={name:i.string,status:i.string,species:i.string,type:i.string,gender:i.string,image:i.string,origin:i.string};const S=n(T)`
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
`,G=n.p`
  margin-left: 8px;
  font-size: 18px;
  line-height: 21.04px;
  font-weight: 700;
  font-family: Karla;
`,D=()=>{var h;const[c,l]=m.useState(null),{characterId:p}=j(),g=((h=v().state)==null?void 0:h.from)??"/";if(m.useEffect(()=>{(async()=>{try{const o=await B(p);l(o.data)}catch(o){console.log(o)}})()},[p]),c){const{name:d,status:o,species:w,type:y,gender:b,image:I,origin:k}=c;return e(z,{children:[e(S,{to:g,type:"button",children:[t(L,{}),t(G,{children:"Go Back"})]}),t(u,{name:d,status:o,species:w,type:y,gender:b,image:I,origin:k.name})]})}};export{D as default};
