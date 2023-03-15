import{G as p,s as o,d as x,F as u,j as t,a as r,e as a,f as c}from"./index-3bc16952.js";function f(n){return p({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(n)}function m(n){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"}}]})(n)}const v=o.div`
  width: 450px;
  margin-top: 150px;
  font-weight: 700;
  border-radius: 4px;
  box-shadow: 0px 2px 14px 3px rgba(62, 163, 74, 1);
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 515px) {
    width: 320px;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-right: 1px;
    padding-left: 1px;
    ${""}
  }
`,w=o.h2`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--color-dark-grey);
  @media screen and (max-width: 767px) {
    font-size: 20px;
    ${""}
  }
`,b=o.h3`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--color-dark-grey);
  @media screen and (max-width: 767px) {
    font-size: 18px;
    ${""}
  }
`,y=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 35px;
`,l=o.button`
  align-items: center;
  ${""}
  border-radius: 4px;
  border: 2px solid transparent;
  width: 250px;
  height: 40px;
  font-weight: 700;
  line-height: 1.88;
  color: white;
  background-color: #364150;
  cursor: pointer;
  font-family: inherit;
  transition: all 250ms ease-in-out;
  &:not(:last-child) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    ${""}
    box-shadow: 0px 2px 14px 3px rgba(62, 163, 74, 1);
  }
`,C=o.div`
  padding: 15px;
`,d=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,s=o.span`
  padding-left: 10px;
`;function F(){const n=new x,h=async()=>{try{const i=(await a(c,n)).user.uid;localStorage.setItem("USER_KEY",i)}catch(e){console.log(e)}},g=new u;return t(v,{children:r(C,{children:[t(w,{children:"Join today"}),t(b,{children:"Sign in with one of the providers"}),r(y,{children:[t(l,{onClick:h,children:r(d,{children:[t(f,{size:20}),t(s,{children:"Sign in with Google"})]})}),t(l,{onClick:async()=>{try{const i=(await a(c,g)).user.uid;localStorage.setItem("USER_KEY",i)}catch(e){console.log(e)}},children:r(d,{children:[t(m,{size:20,color:"#1977F3"}),t(s,{children:"Sign in with Facebook"})]})})]})]})})}const A=()=>t(F,{});export{A as default};
