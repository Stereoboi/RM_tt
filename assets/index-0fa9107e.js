function NS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function RS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ws={},PS={get exports(){return Ws},set exports(t){Ws=t}},ql={},k={},DS={get exports(){return k},set exports(t){k=t}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),OS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),LS=Symbol.for("react.strict_mode"),bS=Symbol.for("react.profiler"),MS=Symbol.for("react.provider"),US=Symbol.for("react.context"),FS=Symbol.for("react.forward_ref"),VS=Symbol.for("react.suspense"),zS=Symbol.for("react.memo"),jS=Symbol.for("react.lazy"),em=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var Hy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wy=Object.assign,Ky={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Hy}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gy(){}Gy.prototype=Zi.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Hy}var Gd=Kd.prototype=new Gy;Gd.constructor=Kd;Wy(Gd,Zi.prototype);Gd.isPureReactComponent=!0;var tm=Array.isArray,qy=Object.prototype.hasOwnProperty,qd={current:null},Qy={key:!0,ref:!0,__self:!0,__source:!0};function Yy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qy.call(e,r)&&!Qy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:qd.current}}function HS(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function WS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nm=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WS(""+t.key):e.toString(36)}function xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case OS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mc(o,0):r,tm(i)?(n="",t!=null&&(n=t.replace(nm,"$&/")+"/"),xa(i,e,n,"",function(u){return u})):i!=null&&(Qd(i)&&(i=HS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+mc(s,a);o+=xa(s,e,n,l,i)}else if(l=BS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+mc(s,a++),o+=xa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var r=[],i=0;return xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Na={transition:null},GS={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Na,ReactCurrentOwner:qd};Z.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Zi;Z.Fragment=$S;Z.Profiler=bS;Z.PureComponent=Kd;Z.StrictMode=LS;Z.Suspense=VS;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qy.call(e,l)&&!Qy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MS,_context:t},t.Consumer=t};Z.createElement=Yy;Z.createFactory=function(t){var e=Yy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:FS,render:t}};Z.isValidElement=Qd;Z.lazy=function(t){return{$$typeof:jS,_payload:{_status:-1,_result:t},_init:KS}};Z.memo=function(t,e){return{$$typeof:zS,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Na.transition;Na.transition={};try{t()}finally{Na.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return Et.current.useCallback(t,e)};Z.useContext=function(t){return Et.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};Z.useEffect=function(t,e){return Et.current.useEffect(t,e)};Z.useId=function(){return Et.current.useId()};Z.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return Et.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};Z.useRef=function(t){return Et.current.useRef(t)};Z.useState=function(t){return Et.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return Et.current.useTransition()};Z.version="18.2.0";(function(t){t.exports=Z})(DS);const vt=RS(k),uh=NS({__proto__:null,default:vt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=k,QS=Symbol.for("react.element"),YS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,JS=qS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function Xy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XS.call(e,r)&&!ZS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QS,type:t,key:s,ref:o,props:i,_owner:JS.current}}ql.Fragment=YS;ql.jsx=Xy;ql.jsxs=Xy;(function(t){t.exports=ql})(PS);const ch=Ws.Fragment,ue=Ws.jsx,Xn=Ws.jsxs;var hh={},dh={},e_={get exports(){return dh},set exports(t){dh=t}},$t={},fh={},t_={get exports(){return fh},set exports(t){fh=t}},Jy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,V){var B=A.length;A.push(V);e:for(;0<B;){var fe=B-1>>>1,N=A[fe];if(0<i(N,V))A[fe]=V,A[B]=N,B=fe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],B=A.pop();if(B!==V){A[0]=B;e:for(var fe=0,N=A.length,O=N>>>1;fe<O;){var $=2*(fe+1)-1,H=A[$],w=$+1,ee=A[w];if(0>i(H,B))w<N&&0>i(ee,H)?(A[fe]=ee,A[w]=B,fe=w):(A[fe]=H,A[$]=B,fe=$);else if(w<N&&0>i(ee,B))A[fe]=ee,A[w]=B,fe=w;else break e}}return V}function i(A,V){var B=A.sortIndex-V.sortIndex;return B!==0?B:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=A)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(A){if(v=!1,m(A),!y)if(n(l)!==null)y=!0,gn(_);else{var V=n(u);V!==null&&mt(E,V.startTime-A)}}function _(A,V){y=!1,v&&(v=!1,p(D),D=-1),g=!0;var B=f;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||A&&!Ve());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,f=h.priorityLevel;var N=fe(h.expirationTime<=V);V=t.unstable_now(),typeof N=="function"?h.callback=N:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var $=n(u);$!==null&&mt(E,$.startTime-V),O=!1}return O}finally{h=null,f=B,g=!1}}var R=!1,P=null,D=-1,X=5,z=-1;function Ve(){return!(t.unstable_now()-z<X)}function Oe(){if(P!==null){var A=t.unstable_now();z=A;var V=!0;try{V=P(!0,A)}finally{V?Ke():(R=!1,P=null)}}else R=!1}var Ke;if(typeof d=="function")Ke=function(){d(Oe)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,nt=xt.port2;xt.port1.onmessage=Oe,Ke=function(){nt.postMessage(null)}}else Ke=function(){S(Oe,0)};function gn(A){P=A,R||(R=!0,Ke())}function mt(A,V){D=S(function(){A(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,gn(_))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var B=f;f=V;try{return A()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=f;f=A;try{return V()}finally{f=B}},t.unstable_scheduleCallback=function(A,V,B){var fe=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?fe+B:fe):B=fe,A){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=B+N,A={id:c++,callback:V,priorityLevel:A,startTime:B,expirationTime:N,sortIndex:-1},B>fe?(A.sortIndex=B,e(u,A),n(l)===null&&A===n(u)&&(v?(p(D),D=-1):v=!0,mt(E,B-fe))):(A.sortIndex=N,e(l,A),y||g||(y=!0,gn(_))),A},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(A){var V=f;return function(){var B=f;f=V;try{return A.apply(this,arguments)}finally{f=B}}}})(Jy);(function(t){t.exports=Jy})(t_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=k,Dt=fh;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ev=new Set,Ks={};function Jr(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(Ks[t]=e,t=0;t<e.length;t++)ev.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,n_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},im={};function r_(t){return ph.call(im,t)?!0:ph.call(rm,t)?!1:n_.test(t)?im[t]=!0:(rm[t]=!0,!1)}function i_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function s_(t,e,n,r){if(e===null||typeof e>"u"||i_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yd,Xd);et[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yd,Xd);et[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yd,Xd);et[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jd(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(s_(e,n,i,r)&&(n=null),r||i===null?r_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),tv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),rv=Symbol.for("react.offscreen"),sm=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,gc;function _s(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var yc=!1;function vc(t,e){if(!t||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function o_(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case mh:return"Profiler";case Zd:return"StrictMode";case gh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nv:return(t.displayName||"Context")+".Consumer";case tv:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:vh(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return vh(t(e))}catch{}}return null}function a_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vh(e);case 8:return e===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l_(t){var e=iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=l_(t))}function sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wh(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ov(t,e){e=e.checked,e!=null&&Jd(t,"checked",e,!1)}function Eh(t,e){ov(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function Ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ks(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function av(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u_=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){u_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function cv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function hv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var c_=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Th(t,e){if(e){if(c_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ah=null,Ii=null,Ci=null;function cm(t){if(t=Po(t)){if(typeof Ah!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Zl(e),Ah(t.stateNode,t.type,e))}}function dv(t){Ii?Ci?Ci.push(t):Ci=[t]:Ii=t}function fv(){if(Ii){var t=Ii,e=Ci;if(Ci=Ii=null,cm(t),e)for(t=0;t<e.length;t++)cm(e[t])}}function pv(t,e){return t(e)}function mv(){}var wc=!1;function gv(t,e,n){if(wc)return t(e,n);wc=!0;try{return pv(t,e,n)}finally{wc=!1,(Ii!==null||Ci!==null)&&(mv(),fv())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var xh=!1;if(Cn)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){xh=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{xh=!1}function h_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Rs=!1,Ya=null,Xa=!1,Nh=null,d_={onError:function(t){Rs=!0,Ya=t}};function f_(t,e,n,r,i,s,o,a,l){Rs=!1,Ya=null,h_.apply(d_,arguments)}function p_(t,e,n,r,i,s,o,a,l){if(f_.apply(this,arguments),Rs){if(Rs){var u=Ya;Rs=!1,Ya=null}else throw Error(T(198));Xa||(Xa=!0,Nh=u)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(Zr(t)!==t)throw Error(T(188))}function m_(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hm(i),t;if(s===r)return hm(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function vv(t){return t=m_(t),t!==null?wv(t):null}function wv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wv(t);if(e!==null)return e;t=t.sibling}return null}var Ev=Dt.unstable_scheduleCallback,dm=Dt.unstable_cancelCallback,g_=Dt.unstable_shouldYield,y_=Dt.unstable_requestPaint,xe=Dt.unstable_now,v_=Dt.unstable_getCurrentPriorityLevel,rf=Dt.unstable_ImmediatePriority,Sv=Dt.unstable_UserBlockingPriority,Ja=Dt.unstable_NormalPriority,w_=Dt.unstable_LowPriority,_v=Dt.unstable_IdlePriority,Ql=null,ln=null;function E_(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:k_,S_=Math.log,__=Math.LN2;function k_(t){return t>>>=0,t===0?32:31-(S_(t)/__|0)|0}var sa=64,oa=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ts(a):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function T_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=T_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kv(){var t=sa;return sa<<=1,!(sa&4194240)&&(sa=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Tv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iv,of,Cv,Av,xv,Ph=!1,aa=[],Jn=null,Zn=null,er=null,Qs=new Map,Ys=new Map,jn=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fm(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Po(e),e!==null&&of(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function x_(t,e,n,r,i){switch(e){case"focusin":return Jn=ms(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=ms(Zn,t,e,n,r,i),!0;case"mouseover":return er=ms(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qs.set(s,ms(Qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,ms(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function Nv(t){var e=xr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=yv(n),e!==null){t.blockedOn=e,xv(t.priority,function(){Cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=Po(n),e!==null&&of(e),t.blockedOn=n,!1;e.shift()}return!0}function pm(t,e,n){Ra(t)&&n.delete(e)}function N_(){Ph=!1,Jn!==null&&Ra(Jn)&&(Jn=null),Zn!==null&&Ra(Zn)&&(Zn=null),er!==null&&Ra(er)&&(er=null),Qs.forEach(pm),Ys.forEach(pm)}function gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ph||(Ph=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,N_)))}function Xs(t){function e(i){return gs(i,t)}if(0<aa.length){gs(aa[0],t);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&gs(Jn,t),Zn!==null&&gs(Zn,t),er!==null&&gs(er,t),Qs.forEach(e),Ys.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Nv(n),n.blockedOn===null&&jn.shift()}var Ai=Ln.ReactCurrentBatchConfig,el=!0;function R_(t,e,n,r){var i=ce,s=Ai.transition;Ai.transition=null;try{ce=1,af(t,e,n,r)}finally{ce=i,Ai.transition=s}}function P_(t,e,n,r){var i=ce,s=Ai.transition;Ai.transition=null;try{ce=4,af(t,e,n,r)}finally{ce=i,Ai.transition=s}}function af(t,e,n,r){if(el){var i=Dh(t,e,n,r);if(i===null)Rc(t,e,r,tl,n),fm(t,r);else if(x_(i,t,e,n,r))r.stopPropagation();else if(fm(t,r),e&4&&-1<A_.indexOf(t)){for(;i!==null;){var s=Po(i);if(s!==null&&Iv(s),s=Dh(t,e,n,r),s===null&&Rc(t,e,r,tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rc(t,e,r,null,n)}}var tl=null;function Dh(t,e,n,r){if(tl=null,t=nf(r),t=xr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function Rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v_()){case rf:return 1;case Sv:return 4;case Ja:case w_:return 16;case _v:return 536870912;default:return 16}default:return 16}}var qn=null,lf=null,Pa=null;function Pv(){if(Pa)return Pa;var t,e=lf,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pa=i.slice(t,1<r?1-r:void 0)}function Da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function mm(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?la:mm,this.isPropagationStopped=mm,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=Lt(es),Ro=ke({},es,{view:0,detail:0}),D_=Lt(Ro),Sc,_c,ys,Yl=ke({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ys&&(ys&&t.type==="mousemove"?(Sc=t.screenX-ys.screenX,_c=t.screenY-ys.screenY):_c=Sc=0,ys=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),gm=Lt(Yl),O_=ke({},Yl,{dataTransfer:0}),$_=Lt(O_),L_=ke({},Ro,{relatedTarget:0}),kc=Lt(L_),b_=ke({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),M_=Lt(b_),U_=ke({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F_=Lt(U_),V_=ke({},es,{data:0}),ym=Lt(V_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function cf(){return H_}var W_=ke({},Ro,{key:function(t){if(t.key){var e=z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K_=Lt(W_),G_=ke({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Lt(G_),q_=ke({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),Q_=Lt(q_),Y_=ke({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),X_=Lt(Y_),J_=ke({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=Lt(J_),ek=[9,13,27,32],hf=Cn&&"CompositionEvent"in window,Ps=null;Cn&&"documentMode"in document&&(Ps=document.documentMode);var tk=Cn&&"TextEvent"in window&&!Ps,Dv=Cn&&(!hf||Ps&&8<Ps&&11>=Ps),wm=String.fromCharCode(32),Em=!1;function Ov(t,e){switch(t){case"keyup":return ek.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function nk(t,e){switch(t){case"compositionend":return $v(e);case"keypress":return e.which!==32?null:(Em=!0,wm);case"textInput":return t=e.data,t===wm&&Em?null:t;default:return null}}function rk(t,e){if(hi)return t==="compositionend"||!hf&&Ov(t,e)?(t=Pv(),Pa=lf=qn=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dv&&e.locale!=="ko"?null:e.data;default:return null}}var ik={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ik[t.type]:e==="textarea"}function Lv(t,e,n,r){dv(r),e=nl(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Js=null;function sk(t){Kv(t,0)}function Xl(t){var e=pi(t);if(sv(e))return t}function ok(t,e){if(t==="change")return e}var bv=!1;if(Cn){var Tc;if(Cn){var Ic="oninput"in document;if(!Ic){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),Ic=typeof _m.oninput=="function"}Tc=Ic}else Tc=!1;bv=Tc&&(!document.documentMode||9<document.documentMode)}function km(){Ds&&(Ds.detachEvent("onpropertychange",Mv),Js=Ds=null)}function Mv(t){if(t.propertyName==="value"&&Xl(Js)){var e=[];Lv(e,Js,t,nf(t)),gv(sk,e)}}function ak(t,e,n){t==="focusin"?(km(),Ds=e,Js=n,Ds.attachEvent("onpropertychange",Mv)):t==="focusout"&&km()}function lk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Js)}function uk(t,e){if(t==="click")return Xl(e)}function ck(t,e){if(t==="input"||t==="change")return Xl(e)}function hk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:hk;function Zs(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ph.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Im(t,e){var n=Tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tm(n)}}function Uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fv(){for(var t=window,e=Qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qa(t.document)}return e}function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dk(t){var e=Fv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(r!==null&&df(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Im(n,s);var o=Im(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fk=Cn&&"documentMode"in document&&11>=document.documentMode,di=null,Oh=null,Os=null,$h=!1;function Cm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$h||di==null||di!==Qa(r)||(r=di,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Zs(Os,r)||(Os=r,r=nl(Oh,"onSelect"),0<r.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Cc={},Vv={};Cn&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Jl(t){if(Cc[t])return Cc[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return Cc[t]=e[n];return t}var zv=Jl("animationend"),jv=Jl("animationiteration"),Bv=Jl("animationstart"),Hv=Jl("transitionend"),Wv=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){Wv.set(t,e),Jr(e,[t])}for(var Ac=0;Ac<Am.length;Ac++){var xc=Am[Ac],pk=xc.toLowerCase(),mk=xc[0].toUpperCase()+xc.slice(1);wr(pk,"on"+mk)}wr(zv,"onAnimationEnd");wr(jv,"onAnimationIteration");wr(Bv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Hv,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function xm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,p_(r,e,void 0,t),t.currentTarget=null}function Kv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;xm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;xm(i,a,u),s=l}}}if(Xa)throw t=Nh,Xa=!1,Nh=null,t}function ge(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var r=t+"__bubble";n.has(r)||(Gv(e,t,2,!1),n.add(r))}function Nc(t,e,n){var r=0;e&&(r|=4),Gv(n,t,r,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[ca]){t[ca]=!0,ev.forEach(function(n){n!=="selectionchange"&&(gk.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,Nc("selectionchange",!1,e))}}function Gv(t,e,n,r){switch(Rv(e)){case 1:var i=R_;break;case 4:i=P_;break;default:i=af}n=i.bind(null,e,n,t),i=void 0,!xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gv(function(){var u=s,c=nf(n),h=[];e:{var f=Wv.get(t);if(f!==void 0){var g=uf,y=t;switch(t){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":g=K_;break;case"focusin":y="focus",g=kc;break;case"focusout":y="blur",g=kc;break;case"beforeblur":case"afterblur":g=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Q_;break;case zv:case jv:case Bv:g=M_;break;case Hv:g=X_;break;case"scroll":g=D_;break;case"wheel":g=Z_;break;case"copy":case"cut":case"paste":g=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vm}var v=(e&4)!==0,S=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,m;d!==null;){m=d;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=qs(d,p),E!=null&&v.push(to(d,E,m)))),S)break;d=d.return}0<v.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Ch&&(y=n.relatedTarget||n.fromElement)&&(xr(y)||y[An]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?xr(y):null,y!==null&&(S=Zr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=gm,E="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=vm,E="onPointerLeave",p="onPointerEnter",d="pointer"),S=g==null?f:pi(g),m=y==null?f:pi(y),f=new v(E,d+"leave",g,n,c),f.target=S,f.relatedTarget=m,E=null,xr(c)===u&&(v=new v(p,d+"enter",y,n,c),v.target=m,v.relatedTarget=S,E=v),S=E,g&&y)t:{for(v=g,p=y,d=0,m=v;m;m=si(m))d++;for(m=0,E=p;E;E=si(E))m++;for(;0<d-m;)v=si(v),d--;for(;0<m-d;)p=si(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=si(v),p=si(p)}v=null}else v=null;g!==null&&Nm(h,f,g,v,!1),y!==null&&S!==null&&Nm(h,S,y,v,!0)}}e:{if(f=u?pi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var _=ok;else if(Sm(f))if(bv)_=ck;else{_=lk;var R=ak}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=uk);if(_&&(_=_(t,u))){Lv(h,_,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Sh(f,"number",f.value)}switch(R=u?pi(u):window,t){case"focusin":(Sm(R)||R.contentEditable==="true")&&(di=R,Oh=u,Os=null);break;case"focusout":Os=Oh=di=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,Cm(h,n,c);break;case"selectionchange":if(fk)break;case"keydown":case"keyup":Cm(h,n,c)}var P;if(hf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else hi?Ov(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Dv&&n.locale!=="ko"&&(hi||D!=="onCompositionStart"?D==="onCompositionEnd"&&hi&&(P=Pv()):(qn=c,lf="value"in qn?qn.value:qn.textContent,hi=!0)),R=nl(u,D),0<R.length&&(D=new ym(D,t,null,n,c),h.push({event:D,listeners:R}),P?D.data=P:(P=$v(n),P!==null&&(D.data=P)))),(P=tk?nk(t,n):rk(t,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(c=new ym("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}Kv(h,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qs(t,n),s!=null&&r.unshift(to(t,s,i)),s=qs(t,e),s!=null&&r.push(to(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qs(n,s),l!=null&&o.unshift(to(n,l,a))):i||(l=qs(n,s),l!=null&&o.push(to(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yk=/\r\n?/g,vk=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(yk,`
`).replace(vk,"")}function ha(t,e,n){if(e=Rm(e),Rm(t)!==e&&n)throw Error(T(425))}function rl(){}var Lh=null,bh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,wk=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,Ek=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(t){return Pm.resolve(null).then(t).catch(Sk)}:Uh;function Sk(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),on="__reactFiber$"+ts,no="__reactProps$"+ts,An="__reactContainer$"+ts,Fh="__reactEvents$"+ts,_k="__reactListeners$"+ts,kk="__reactHandles$"+ts;function xr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[on])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[on]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Zl(t){return t[no]||null}var Vh=[],mi=-1;function Er(t){return{current:t}}function ye(t){0>mi||(t.current=Vh[mi],Vh[mi]=null,mi--)}function pe(t,e){mi++,Vh[mi]=t.current,t.current=e}var mr={},dt=Er(mr),It=Er(!1),Vr=mr;function Li(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function il(){ye(It),ye(dt)}function Om(t,e,n){if(dt.current!==mr)throw Error(T(168));pe(dt,e),pe(It,n)}function qv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,a_(t)||"Unknown",i));return ke({},n,r)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Vr=dt.current,pe(dt,t),pe(It,It.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=qv(t,e,Vr),r.__reactInternalMemoizedMergedChildContext=t,ye(It),ye(dt),pe(dt,t)):ye(It),pe(It,n)}var vn=null,eu=!1,Dc=!1;function Qv(t){vn===null?vn=[t]:vn.push(t)}function Tk(t){eu=!0,Qv(t)}function Sr(){if(!Dc&&vn!==null){Dc=!0;var t=0,e=ce;try{var n=vn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,eu=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),Ev(rf,Sr),i}finally{ce=e,Dc=!1}}return null}var gi=[],yi=0,ol=null,al=0,Mt=[],Ut=0,zr=null,wn=1,En="";function Ir(t,e){gi[yi++]=al,gi[yi++]=ol,ol=t,al=e}function Yv(t,e,n){Mt[Ut++]=wn,Mt[Ut++]=En,Mt[Ut++]=zr,zr=t;var r=wn;t=En;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-en(e)+i|n<<i|r,En=s+t}else wn=1<<s|n<<i|r,En=t}function ff(t){t.return!==null&&(Ir(t,1),Yv(t,1,0))}function pf(t){for(;t===ol;)ol=gi[--yi],gi[yi]=null,al=gi[--yi],gi[yi]=null;for(;t===zr;)zr=Mt[--Ut],Mt[Ut]=null,En=Mt[--Ut],Mt[Ut]=null,wn=Mt[--Ut],Mt[Ut]=null}var Pt=null,Rt=null,ve=!1,Xt=null;function Xv(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:wn,overflow:En}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Rt=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(ve){var e=Rt;if(e){var n=e;if(!Lm(t,e)){if(zh(t))throw Error(T(418));e=tr(n.nextSibling);var r=Pt;e&&Lm(t,e)?Xv(r,n):(t.flags=t.flags&-4097|2,ve=!1,Pt=t)}}else{if(zh(t))throw Error(T(418));t.flags=t.flags&-4097|2,ve=!1,Pt=t}}}function bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function da(t){if(t!==Pt)return!1;if(!ve)return bm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=Rt)){if(zh(t))throw Jv(),Error(T(418));for(;e;)Xv(t,e),e=tr(e.nextSibling)}if(bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Pt?tr(t.stateNode.nextSibling):null;return!0}function Jv(){for(var t=Rt;t;)t=tr(t.nextSibling)}function bi(){Rt=Pt=null,ve=!1}function mf(t){Xt===null?Xt=[t]:Xt.push(t)}var Ik=Ln.ReactCurrentBatchConfig;function Qt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ll=Er(null),ul=null,vi=null,gf=null;function yf(){gf=vi=ul=null}function vf(t){var e=ll.current;ye(ll),t._currentValue=e}function Bh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xi(t,e){ul=t,gf=vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},vi===null){if(ul===null)throw Error(T(308));vi=t,ul.dependencies={lanes:0,firstContext:t}}else vi=vi.next=t;return e}var Nr=null;function wf(t){Nr===null?Nr=[t]:Nr.push(t)}function Zv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wf(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,wf(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sf(t,n)}}function Mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=ke({},h,f);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=h}}function Um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var t0=new Zy.Component().refs;function Hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=ir(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(tn(e,t,i,r),Oa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=ir(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(tn(e,t,i,r),Oa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=ir(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(tn(e,t,r,n),Oa(e,t,r))}};function Fm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,s):!0}function n0(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=Ct(e)?Vr:dt.current,r=e.contextTypes,s=(r=r!=null)?Li(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function Wh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=t0,Ef(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=Ct(e)?Vr:dt.current,i.context=Li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tu.enqueueReplaceState(i,i.state,null),cl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===t0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zm(t){var e=t._init;return e(t._payload)}function r0(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=sr(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,E){return d===null||d.tag!==6?(d=Fc(m,p.mode,E),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,E){var _=m.type;return _===ci?c(p,d,m.props.children,E,m.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Vn&&zm(_)===d.type)?(E=i(d,m.props),E.ref=vs(p,d,m),E.return=p,E):(E=Fa(m.type,m.key,m.props,null,p.mode,E),E.ref=vs(p,d,m),E.return=p,E)}function u(p,d,m,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Vc(m,p.mode,E),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,E,_){return d===null||d.tag!==7?(d=br(m,p.mode,E,_),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fc(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case na:return m=Fa(d.type,d.key,d.props,null,p.mode,m),m.ref=vs(p,null,d),m.return=p,m;case ui:return d=Vc(d,p.mode,m),d.return=p,d;case Vn:var E=d._init;return h(p,E(d._payload),m)}if(ks(d)||fs(d))return d=br(d,p.mode,m,null),d.return=p,d;fa(p,d)}return null}function f(p,d,m,E){var _=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(p,d,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case na:return m.key===_?l(p,d,m,E):null;case ui:return m.key===_?u(p,d,m,E):null;case Vn:return _=m._init,f(p,d,_(m._payload),E)}if(ks(m)||fs(m))return _!==null?null:c(p,d,m,E,null);fa(p,m)}return null}function g(p,d,m,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(d,p,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case na:return p=p.get(E.key===null?m:E.key)||null,l(d,p,E,_);case ui:return p=p.get(E.key===null?m:E.key)||null,u(d,p,E,_);case Vn:var R=E._init;return g(p,d,m,R(E._payload),_)}if(ks(E)||fs(E))return p=p.get(m)||null,c(d,p,E,_,null);fa(d,E)}return null}function y(p,d,m,E){for(var _=null,R=null,P=d,D=d=0,X=null;P!==null&&D<m.length;D++){P.index>D?(X=P,P=null):X=P.sibling;var z=f(p,P,m[D],E);if(z===null){P===null&&(P=X);break}t&&P&&z.alternate===null&&e(p,P),d=s(z,d,D),R===null?_=z:R.sibling=z,R=z,P=X}if(D===m.length)return n(p,P),ve&&Ir(p,D),_;if(P===null){for(;D<m.length;D++)P=h(p,m[D],E),P!==null&&(d=s(P,d,D),R===null?_=P:R.sibling=P,R=P);return ve&&Ir(p,D),_}for(P=r(p,P);D<m.length;D++)X=g(P,p,D,m[D],E),X!==null&&(t&&X.alternate!==null&&P.delete(X.key===null?D:X.key),d=s(X,d,D),R===null?_=X:R.sibling=X,R=X);return t&&P.forEach(function(Ve){return e(p,Ve)}),ve&&Ir(p,D),_}function v(p,d,m,E){var _=fs(m);if(typeof _!="function")throw Error(T(150));if(m=_.call(m),m==null)throw Error(T(151));for(var R=_=null,P=d,D=d=0,X=null,z=m.next();P!==null&&!z.done;D++,z=m.next()){P.index>D?(X=P,P=null):X=P.sibling;var Ve=f(p,P,z.value,E);if(Ve===null){P===null&&(P=X);break}t&&P&&Ve.alternate===null&&e(p,P),d=s(Ve,d,D),R===null?_=Ve:R.sibling=Ve,R=Ve,P=X}if(z.done)return n(p,P),ve&&Ir(p,D),_;if(P===null){for(;!z.done;D++,z=m.next())z=h(p,z.value,E),z!==null&&(d=s(z,d,D),R===null?_=z:R.sibling=z,R=z);return ve&&Ir(p,D),_}for(P=r(p,P);!z.done;D++,z=m.next())z=g(P,p,D,z.value,E),z!==null&&(t&&z.alternate!==null&&P.delete(z.key===null?D:z.key),d=s(z,d,D),R===null?_=z:R.sibling=z,R=z);return t&&P.forEach(function(Oe){return e(p,Oe)}),ve&&Ir(p,D),_}function S(p,d,m,E){if(typeof m=="object"&&m!==null&&m.type===ci&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case na:e:{for(var _=m.key,R=d;R!==null;){if(R.key===_){if(_=m.type,_===ci){if(R.tag===7){n(p,R.sibling),d=i(R,m.props.children),d.return=p,p=d;break e}}else if(R.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Vn&&zm(_)===R.type){n(p,R.sibling),d=i(R,m.props),d.ref=vs(p,R,m),d.return=p,p=d;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===ci?(d=br(m.props.children,p.mode,E,m.key),d.return=p,p=d):(E=Fa(m.type,m.key,m.props,null,p.mode,E),E.ref=vs(p,d,m),E.return=p,p=E)}return o(p);case ui:e:{for(R=m.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Vc(m,p.mode,E),d.return=p,p=d}return o(p);case Vn:return R=m._init,S(p,d,R(m._payload),E)}if(ks(m))return y(p,d,m,E);if(fs(m))return v(p,d,m,E);fa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Fc(m,p.mode,E),d.return=p,p=d),o(p)):n(p,d)}return S}var Mi=r0(!0),i0=r0(!1),Do={},un=Er(Do),ro=Er(Do),io=Er(Do);function Rr(t){if(t===Do)throw Error(T(174));return t}function Sf(t,e){switch(pe(io,e),pe(ro,t),pe(un,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kh(e,t)}ye(un),pe(un,e)}function Ui(){ye(un),ye(ro),ye(io)}function s0(t){Rr(io.current);var e=Rr(un.current),n=kh(e,t.type);e!==n&&(pe(ro,t),pe(un,n))}function _f(t){ro.current===t&&(ye(un),ye(ro))}var Se=Er(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function kf(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var $a=Ln.ReactCurrentDispatcher,$c=Ln.ReactCurrentBatchConfig,jr=0,_e=null,$e=null,je=null,dl=!1,$s=!1,so=0,Ck=0;function it(){throw Error(T(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function If(t,e,n,r,i,s){if(jr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?Rk:Pk,t=n(r,i),$s){s=0;do{if($s=!1,so=0,25<=s)throw Error(T(301));s+=1,je=$e=null,e.updateQueue=null,$a.current=Dk,t=n(r,i)}while($s)}if($a.current=fl,e=$e!==null&&$e.next!==null,jr=0,je=$e=_e=null,dl=!1,e)throw Error(T(300));return t}function Cf(){var t=so!==0;return so=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?_e.memoizedState=je=t:je=je.next=t,je}function Ht(){if($e===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=je===null?_e.memoizedState:je.next;if(e!==null)je=e,$e=t;else{if(t===null)throw Error(T(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},je===null?_e.memoizedState=je=t:je=je.next=t}return je}function oo(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,_e.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o0(){}function a0(t,e){var n=_e,r=Ht(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Af(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,ao(9,u0.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(T(349));jr&30||l0(n,e,i)}return i}function l0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,r){e.value=n,e.getSnapshot=r,h0(e)&&d0(t)}function c0(t,e,n){return n(function(){h0(e)&&d0(t)})}function h0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function d0(t){var e=xn(t,1);e!==null&&tn(e,t,1,-1)}function jm(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=Nk.bind(null,_e,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f0(){return Ht().memoizedState}function La(t,e,n,r){var i=sn();_e.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Tf(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}_e.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function Bm(t,e){return La(8390656,8,t,e)}function Af(t,e){return nu(2048,8,t,e)}function p0(t,e){return nu(4,2,t,e)}function m0(t,e){return nu(4,4,t,e)}function g0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y0(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,g0.bind(null,e,t),n)}function xf(){}function v0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w0(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function E0(t,e,n){return jr&21?(nn(n,e)||(n=kv(),_e.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function Ak(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=$c.transition;$c.transition={};try{t(!1),e()}finally{ce=n,$c.transition=r}}function S0(){return Ht().memoizedState}function xk(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_0(t))k0(e,n);else if(n=Zv(t,e,n,r),n!==null){var i=wt();tn(n,t,r,i),T0(n,e,r)}}function Nk(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(t))k0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,wf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Zv(t,e,i,r),n!==null&&(i=wt(),tn(n,t,r,i),T0(n,e,r))}}function _0(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function k0(t,e){$s=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sf(t,n)}}var fl={readContext:Bt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Rk={readContext:Bt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,g0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xk.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:jm,useDebugValue:xf,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=jm(!1),e=t[0];return t=Ak.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=sn();if(ve){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Be===null)throw Error(T(349));jr&30||l0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bm(c0.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,u0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=Be.identifierPrefix;if(ve){var n=En,r=wn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ck++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Pk={readContext:Bt,useCallback:v0,useContext:Bt,useEffect:Af,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:w0,useReducer:Lc,useRef:f0,useState:function(){return Lc(oo)},useDebugValue:xf,useDeferredValue:function(t){var e=Ht();return E0(e,$e.memoizedState,t)},useTransition:function(){var t=Lc(oo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:S0,unstable_isNewReconciler:!1},Dk={readContext:Bt,useCallback:v0,useContext:Bt,useEffect:Af,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:w0,useReducer:bc,useRef:f0,useState:function(){return bc(oo)},useDebugValue:xf,useDeferredValue:function(t){var e=Ht();return $e===null?e.memoizedState=t:E0(e,$e.memoizedState,t)},useTransition:function(){var t=bc(oo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:S0,unstable_isNewReconciler:!1};function Fi(t,e){try{var n="",r=e;do n+=o_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ok=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ml||(ml=!0,nd=r),Kh(t,e)},n}function C0(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kh(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ok;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Gk.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Km(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var $k=Ln.ReactCurrentOwner,Tt=!1;function gt(t,e,n,r){e.child=t===null?i0(e,null,n,r):Mi(e,t.child,n,r)}function Gm(t,e,n,r,i){n=n.render;var s=e.ref;return xi(e,i),r=If(t,e,n,r,s,i),n=Cf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ve&&n&&ff(e),e.flags|=1,gt(t,e,r,i),e.child)}function qm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A0(t,e,s,r,i)):(t=Fa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function A0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zs(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return Gh(t,e,n,r,i)}function x0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ei,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Ei,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Ei,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Ei,Nt),Nt|=r;return gt(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gh(t,e,n,r,i){var s=Ct(n)?Vr:dt.current;return s=Li(e,s),xi(e,i),n=If(t,e,n,r,s,i),r=Cf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ve&&r&&ff(e),e.flags|=1,gt(t,e,n,i),e.child)}function Qm(t,e,n,r,i){if(Ct(n)){var s=!0;sl(e)}else s=!1;if(xi(e,i),e.stateNode===null)ba(t,e),n0(e,n,r),Wh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=Ct(n)?Vr:dt.current,u=Li(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vm(e,o,r,u),zn=!1;var f=e.memoizedState;o.state=f,cl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||It.current||zn?(typeof c=="function"&&(Hh(e,n,c,r),l=e.memoizedState),(a=zn||Fm(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,e0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=Ct(n)?Vr:dt.current,l=Li(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Vm(e,o,r,l),zn=!1,f=e.memoizedState,o.state=f,cl(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||It.current||zn?(typeof g=="function"&&(Hh(e,n,g,r),y=e.memoizedState),(u=zn||Fm(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return qh(t,e,n,r,s,i)}function qh(t,e,n,r,i,s){N0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),Nn(t,e,s);r=e.stateNode,$k.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mi(e,t.child,null,s),e.child=Mi(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function R0(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),Sf(t,e.containerInfo)}function Ym(t,e,n,r,i){return bi(),mf(i),e.flags|=256,gt(t,e,n,r),e.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Se,i&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yh(n),e.memoizedState=Qh,t):Nf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Lk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qh,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nf(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,r){return r!==null&&mf(r),Mi(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Mc(Error(T(422))),pa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mi(e,t.child,null,o),e.child.memoizedState=Yh(o),e.memoizedState=Qh,s);if(!(e.mode&1))return pa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Mc(s,r,void 0),pa(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),tn(r,t,i,-1))}return Lf(),r=Mc(Error(T(421))),pa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=tr(i.nextSibling),Pt=e,ve=!0,Xt=null,t!==null&&(Mt[Ut++]=wn,Mt[Ut++]=En,Mt[Ut++]=zr,wn=t.id,En=t.overflow,zr=e),e=Nf(e,r.children),e.flags|=4096,e)}function Xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bh(t.return,e,n)}function Uc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function D0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,n,e);else if(t.tag===19)Xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bk(t,e,n){switch(e.tag){case 3:R0(e),bi();break;case 5:s0(e);break;case 1:Ct(e.type)&&sl(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(ll,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?P0(t,e,n):(pe(Se,Se.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);pe(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return D0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,x0(t,e,n)}return Nn(t,e,n)}var O0,Xh,$0,L0;O0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};$0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(un.current);var s=null;switch(n){case"input":i=wh(t,i),r=wh(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=_h(t,i),r=_h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rl)}Th(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};L0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ws(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mk(t,e,n){var r=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Ct(e.type)&&il(),st(e),null;case 3:return r=e.stateNode,Ui(),ye(It),ye(dt),kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(sd(Xt),Xt=null))),Xh(t,e),st(e),null;case 5:_f(e);var i=Rr(io.current);if(n=e.type,t!==null&&e.stateNode!=null)$0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return st(e),null}if(t=Rr(un.current),da(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[no]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)ge(Is[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":om(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":lm(r,s),ge("invalid",r)}Th(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ha(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ha(r.textContent,a,t),i=["children",""+a]):Ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":ra(r),am(r,s,!0);break;case"textarea":ra(r),um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[no]=r,O0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ih(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)ge(Is[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":om(t,r),i=wh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ge("invalid",t);break;case"textarea":lm(t,r),i=_h(t,r),ge("invalid",t);break;default:i=r}Th(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Gs(t,l):typeof l=="number"&&Gs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&Jd(t,s,l,o))}switch(n){case"input":ra(t),am(t,r,!1);break;case"textarea":ra(t),um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)L0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Rr(io.current),Rr(un.current),da(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:ha(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return st(e),null;case 13:if(ye(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Rt!==null&&e.mode&1&&!(e.flags&128))Jv(),bi(),e.flags|=98560,s=!1;else if(s=da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[on]=e}else bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Xt!==null&&(sd(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?be===0&&(be=3):Lf())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Ui(),Xh(t,e),t===null&&eo(e.stateNode.containerInfo),st(e),null;case 10:return vf(e.type._context),st(e),null;case 17:return Ct(e.type)&&il(),st(e),null;case 19:if(ye(Se),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ws(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>Vi&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return st(e),null}else 2*xe()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Se.current,pe(Se,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return $f(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function Uk(t,e){switch(pf(e),e.tag){case 1:return Ct(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),ye(It),ye(dt),kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(ye(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Se),null;case 4:return Ui(),null;case 10:return vf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var ma=!1,at=!1,Fk=typeof WeakSet=="function"?WeakSet:Set,L=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Jh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Jm=!1;function Vk(t,e){if(Lh=el,t=Fv(),df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bh={focusedElem:t,selectionRange:n},el=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Qt(e.type,v),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){Ie(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=Jm,Jm=!1,y}function Ls(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jh(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[no],delete e[Fh],delete e[_k],delete e[kk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M0(t){return t.tag===5||t.tag===3||t.tag===4}function Zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var Ye=null,Yt=!1;function Un(t,e,n){for(n=n.child;n!==null;)U0(t,e,n),n=n.sibling}function U0(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:at||wi(n,e);case 6:var r=Ye,i=Yt;Ye=null,Un(t,e,n),Ye=r,Yt=i,Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),Xs(t)):Pc(Ye,n.stateNode));break;case 4:r=Ye,i=Yt,Ye=n.stateNode.containerInfo,Yt=!0,Un(t,e,n),Ye=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(n,e,o),i=i.next}while(i!==r)}Un(t,e,n);break;case 1:if(!at&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,e,a)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Un(t,e,n),at=r):Un(t,e,n);break;default:Un(t,e,n)}}function eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fk),e.forEach(function(r){var i=Qk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Yt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Yt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(Ye===null)throw Error(T(160));U0(s,o,i),Ye=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F0(e,t),e=e.sibling}function F0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),rn(t),r&4){try{Ls(3,t,t.return),ru(3,t)}catch(v){Ie(t,t.return,v)}try{Ls(5,t,t.return)}catch(v){Ie(t,t.return,v)}}break;case 1:qt(e,t),rn(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(qt(e,t),rn(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{Gs(i,"")}catch(v){Ie(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ov(i,s),Ih(a,o);var u=Ih(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?hv(i,h):c==="dangerouslySetInnerHTML"?uv(i,h):c==="children"?Gs(i,h):Jd(i,c,h,u)}switch(a){case"input":Eh(i,s);break;case"textarea":av(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ti(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ti(i,!!s.multiple,s.defaultValue,!0):Ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[no]=s}catch(v){Ie(t,t.return,v)}}break;case 6:if(qt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ie(t,t.return,v)}}break;case 3:if(qt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(v){Ie(t,t.return,v)}break;case 4:qt(e,t),rn(t);break;case 13:qt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Df=xe())),r&4&&eg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(at=(u=at)||c,qt(e,t),at=u):qt(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(f=L,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ls(4,f,f.return);break;case 1:wi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ie(r,n,v)}}break;case 5:wi(f,f.return);break;case 22:if(f.memoizedState!==null){ng(h);continue}}g!==null?(g.return=f,L=g):ng(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cv("display",o))}catch(v){Ie(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ie(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qt(e,t),rn(t),r&4&&eg(t);break;case 21:break;default:qt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(M0(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gs(i,""),r.flags&=-33);var s=Zm(t);td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zm(t);ed(t,a,o);break;default:throw Error(T(161))}}catch(l){Ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zk(t,e,n){L=t,V0(t)}function V0(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ma;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=ma;var u=at;if(ma=o,(at=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?rg(i):l!==null?(l.return=o,L=l):rg(i);for(;s!==null;)L=s,V0(s),s=s.sibling;L=i,ma=a,at=u}tg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):tg(t)}}function tg(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Um(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Um(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Xs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}at||e.flags&512&&Zh(e)}catch(f){Ie(e,e.return,f)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function ng(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function rg(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){Ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ie(e,i,l)}}var s=e.return;try{Zh(e)}catch(l){Ie(e,s,l)}break;case 5:var o=e.return;try{Zh(e)}catch(l){Ie(e,o,l)}}}catch(l){Ie(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var jk=Math.ceil,pl=Ln.ReactCurrentDispatcher,Rf=Ln.ReactCurrentOwner,zt=Ln.ReactCurrentBatchConfig,ne=0,Be=null,Pe=null,Je=0,Nt=0,Ei=Er(0),be=0,lo=null,Br=0,iu=0,Pf=0,bs=null,kt=null,Df=0,Vi=1/0,yn=null,ml=!1,nd=null,rr=null,ga=!1,Qn=null,gl=0,Ms=0,rd=null,Ma=-1,Ua=0;function wt(){return ne&6?xe():Ma!==-1?Ma:Ma=xe()}function ir(t){return t.mode&1?ne&2&&Je!==0?Je&-Je:Ik.transition!==null?(Ua===0&&(Ua=kv()),Ua):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Rv(t.type)),t):1}function tn(t,e,n,r){if(50<Ms)throw Ms=0,rd=null,Error(T(185));No(t,n,r),(!(ne&2)||t!==Be)&&(t===Be&&(!(ne&2)&&(iu|=n),be===4&&Bn(t,Je)),At(t,r),n===1&&ne===0&&!(e.mode&1)&&(Vi=xe()+500,eu&&Sr()))}function At(t,e){var n=t.callbackNode;I_(t,e);var r=Za(t,t===Be?Je:0);if(r===0)n!==null&&dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dm(n),e===1)t.tag===0?Tk(ig.bind(null,t)):Qv(ig.bind(null,t)),Ek(function(){!(ne&6)&&Sr()}),n=null;else{switch(Tv(r)){case 1:n=rf;break;case 4:n=Sv;break;case 16:n=Ja;break;case 536870912:n=_v;break;default:n=Ja}n=q0(n,z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z0(t,e){if(Ma=-1,Ua=0,ne&6)throw Error(T(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=Za(t,t===Be?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yl(t,r);else{e=r;var i=ne;ne|=2;var s=B0();(Be!==t||Je!==e)&&(yn=null,Vi=xe()+500,Lr(t,e));do try{Wk();break}catch(a){j0(t,a)}while(1);yf(),pl.current=s,ne=i,Pe!==null?e=0:(Be=null,Je=0,e=be)}if(e!==0){if(e===2&&(i=Rh(t),i!==0&&(r=i,e=id(t,i))),e===1)throw n=lo,Lr(t,0),Bn(t,r),At(t,xe()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Bk(i)&&(e=yl(t,r),e===2&&(s=Rh(t),s!==0&&(r=s,e=id(t,s))),e===1))throw n=lo,Lr(t,0),Bn(t,r),At(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Cr(t,kt,yn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=Df+500-xe(),10<e)){if(Za(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uh(Cr.bind(null,t,kt,yn),e);break}Cr(t,kt,yn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jk(r/1960))-r,10<r){t.timeoutHandle=Uh(Cr.bind(null,t,kt,yn),r);break}Cr(t,kt,yn);break;case 5:Cr(t,kt,yn);break;default:throw Error(T(329))}}}return At(t,xe()),t.callbackNode===n?z0.bind(null,t):null}function id(t,e){var n=bs;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=yl(t,e),t!==2&&(e=kt,kt=n,e!==null&&sd(e)),t}function sd(t){kt===null?kt=t:kt.push.apply(kt,t)}function Bk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Pf,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function ig(t){if(ne&6)throw Error(T(327));Ni();var e=Za(t,0);if(!(e&1))return At(t,xe()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var r=Rh(t);r!==0&&(e=r,n=id(t,r))}if(n===1)throw n=lo,Lr(t,0),Bn(t,e),At(t,xe()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,kt,yn),At(t,xe()),null}function Of(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Vi=xe()+500,eu&&Sr())}}function Hr(t){Qn!==null&&Qn.tag===0&&!(ne&6)&&Ni();var e=ne;ne|=1;var n=zt.transition,r=ce;try{if(zt.transition=null,ce=1,t)return t()}finally{ce=r,zt.transition=n,ne=e,!(ne&6)&&Sr()}}function $f(){Nt=Ei.current,ye(Ei)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wk(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Ui(),ye(It),ye(dt),kf();break;case 5:_f(r);break;case 4:Ui();break;case 13:ye(Se);break;case 19:ye(Se);break;case 10:vf(r.type._context);break;case 22:case 23:$f()}n=n.return}if(Be=t,Pe=t=sr(t.current,null),Je=Nt=e,be=0,lo=null,Pf=iu=Br=0,kt=bs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function j0(t,e){do{var n=Pe;try{if(yf(),$a.current=fl,dl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dl=!1}if(jr=0,je=$e=_e=null,$s=!1,so=0,Rf.current=null,n===null||n.return===null){be=1,lo=e,Pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Wm(o);if(g!==null){g.flags&=-257,Km(g,o,a,s,e),g.mode&1&&Hm(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Hm(s,u,e),Lf();break e}l=Error(T(426))}}else if(ve&&a.mode&1){var S=Wm(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Km(S,o,a,s,e),mf(Fi(l,a));break e}}s=l=Fi(l,a),be!==4&&(be=2),bs===null?bs=[s]:bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=I0(s,l,e);Mm(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rr===null||!rr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=C0(s,a,e);Mm(s,E);break e}}s=s.return}while(s!==null)}W0(n)}catch(_){e=_,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function B0(){var t=pl.current;return pl.current=fl,t===null?fl:t}function Lf(){(be===0||be===3||be===2)&&(be=4),Be===null||!(Br&268435455)&&!(iu&268435455)||Bn(Be,Je)}function yl(t,e){var n=ne;ne|=2;var r=B0();(Be!==t||Je!==e)&&(yn=null,Lr(t,e));do try{Hk();break}catch(i){j0(t,i)}while(1);if(yf(),ne=n,pl.current=r,Pe!==null)throw Error(T(261));return Be=null,Je=0,be}function Hk(){for(;Pe!==null;)H0(Pe)}function Wk(){for(;Pe!==null&&!g_();)H0(Pe)}function H0(t){var e=G0(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?W0(t):Pe=e,Rf.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Uk(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Pe=null;return}}else if(n=Mk(n,e,Nt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);be===0&&(be=5)}function Cr(t,e,n){var r=ce,i=zt.transition;try{zt.transition=null,ce=1,Kk(t,e,n,r)}finally{zt.transition=i,ce=r}return null}function Kk(t,e,n,r){do Ni();while(Qn!==null);if(ne&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===Be&&(Pe=Be=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,q0(Ja,function(){return Ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=ce;ce=1;var a=ne;ne|=4,Rf.current=null,Vk(t,n),F0(n,t),dk(bh),el=!!Lh,bh=Lh=null,t.current=n,zk(n),y_(),ne=a,ce=o,zt.transition=s}else t.current=n;if(ga&&(ga=!1,Qn=t,gl=i),s=t.pendingLanes,s===0&&(rr=null),E_(n.stateNode),At(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ml)throw ml=!1,t=nd,nd=null,t;return gl&1&&t.tag!==0&&Ni(),s=t.pendingLanes,s&1?t===rd?Ms++:(Ms=0,rd=t):Ms=0,Sr(),null}function Ni(){if(Qn!==null){var t=Tv(gl),e=zt.transition,n=ce;try{if(zt.transition=null,ce=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,gl=0,ne&6)throw Error(T(331));var i=ne;for(ne|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Ls(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var f=c.sibling,g=c.return;if(b0(c),c===u){L=null;break}if(f!==null){f.return=g,L=f;break}L=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ls(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var d=t.current;for(L=d;L!==null;){o=L;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,L=m;else e:for(o=d;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(_){Ie(a,a.return,_)}if(a===o){L=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,L=E;break e}L=a.return}}if(ne=i,Sr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Ql,t)}catch{}r=!0}return r}finally{ce=n,zt.transition=e}}return!1}function sg(t,e,n){e=Fi(n,e),e=I0(t,e,1),t=nr(t,e,1),e=wt(),t!==null&&(No(t,1,e),At(t,e))}function Ie(t,e,n){if(t.tag===3)sg(t,t,n);else for(;e!==null;){if(e.tag===3){sg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=Fi(n,t),t=C0(e,t,1),e=nr(e,t,1),t=wt(),e!==null&&(No(e,1,t),At(e,t));break}}e=e.return}}function Gk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Je&n)===n&&(be===4||be===3&&(Je&130023424)===Je&&500>xe()-Df?Lr(t,0):Pf|=n),At(t,e)}function K0(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=wt();t=xn(t,e),t!==null&&(No(t,e,n),At(t,n))}function qk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K0(t,n)}function Qk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),K0(t,n)}var G0;G0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,bk(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,ve&&e.flags&1048576&&Yv(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ba(t,e),t=e.pendingProps;var i=Li(e,dt.current);xi(e,n),i=If(null,e,r,t,i,n);var s=Cf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ef(e),i.updater=tu,e.stateNode=i,i._reactInternals=e,Wh(e,r,t,n),e=qh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&ff(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Xk(r),t=Qt(r,t),i){case 0:e=Gh(null,e,r,t,n);break e;case 1:e=Qm(null,e,r,t,n);break e;case 11:e=Gm(null,e,r,t,n);break e;case 14:e=qm(null,e,r,Qt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Gh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Qm(t,e,r,i,n);case 3:e:{if(R0(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,e0(t,e),cl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fi(Error(T(423)),e),e=Ym(t,e,r,n,i);break e}else if(r!==i){i=Fi(Error(T(424)),e),e=Ym(t,e,r,n,i);break e}else for(Rt=tr(e.stateNode.containerInfo.firstChild),Pt=e,ve=!0,Xt=null,n=i0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){e=Nn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return s0(e),t===null&&jh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mh(r,i)?o=null:s!==null&&Mh(r,s)&&(e.flags|=32),N0(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return P0(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mi(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Gm(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(ll,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!It.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xi(e,n),i=Bt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),qm(t,e,r,i,n);case 15:return A0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),ba(t,e),e.tag=1,Ct(r)?(t=!0,sl(e)):t=!1,xi(e,n),n0(e,r,i),Wh(e,r,i,n),qh(null,e,r,!0,t,n);case 19:return D0(t,e,n);case 22:return x0(t,e,n)}throw Error(T(156,e.tag))};function q0(t,e){return Ev(t,e)}function Yk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new Yk(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xk(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return br(n.children,i,s,e);case Zd:o=8,i|=8;break;case mh:return t=Vt(12,n,e,i|2),t.elementType=mh,t.lanes=s,t;case gh:return t=Vt(13,n,e,i),t.elementType=gh,t.lanes=s,t;case yh:return t=Vt(19,n,e,i),t.elementType=yh,t.lanes=s,t;case rv:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tv:o=10;break e;case nv:o=9;break e;case ef:o=11;break e;case tf:o=14;break e;case Vn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function br(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=rv,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Vc(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mf(t,e,n,r,i,s,o,a,l){return t=new Jk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ef(s),t}function Zk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Q0(t){if(!t)return mr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Ct(n))return qv(t,n,e)}return e}function Y0(t,e,n,r,i,s,o,a,l){return t=Mf(n,r,!0,t,i,s,o,a,l),t.context=Q0(null),n=t.current,r=wt(),i=ir(n),s=Tn(r,i),s.callback=e??null,nr(n,s,i),t.current.lanes=i,No(t,i,r),At(t,r),t}function ou(t,e,n,r){var i=e.current,s=wt(),o=ir(i);return n=Q0(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(tn(t,i,o,s),Oa(t,i,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uf(t,e){og(t,e),(t=t.alternate)&&og(t,e)}function eT(){return null}var X0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}au.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));ou(t,e,null,null)};au.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){ou(null,t,null,null)}),e[An]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=Av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Nv(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ag(){}function tT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vl(o);s.call(u)}}var o=Y0(e,r,t,0,null,!1,!1,"",ag);return t._reactRootContainer=o,t[An]=o.current,eo(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vl(l);a.call(u)}}var l=Mf(t,0,!1,null,null,!1,!1,"",ag);return t._reactRootContainer=l,t[An]=l.current,eo(t.nodeType===8?t.parentNode:t),Hr(function(){ou(e,l,n,r)}),l}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vl(o);a.call(l)}}ou(e,o,t,i)}else o=tT(n,e,t,i,r);return vl(o)}Iv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(sf(e,n|1),At(e,xe()),!(ne&6)&&(Vi=xe()+500,Sr()))}break;case 13:Hr(function(){var r=xn(t,1);if(r!==null){var i=wt();tn(r,t,1,i)}}),Uf(t,1)}};of=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=wt();tn(e,t,134217728,n)}Uf(t,134217728)}};Cv=function(t){if(t.tag===13){var e=ir(t),n=xn(t,e);if(n!==null){var r=wt();tn(n,t,e,r)}Uf(t,e)}};Av=function(){return ce};xv=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Ah=function(t,e,n){switch(e){case"input":if(Eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(T(90));sv(r),Eh(r,i)}}}break;case"textarea":av(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};pv=Of;mv=Hr;var nT={usingClientEntryPoint:!1,Events:[Po,pi,Zl,dv,fv,Of]},Es={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rT={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vv(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||eT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Ql=ya.inject(rT),ln=ya}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(T(200));return Zk(t,e,null,n)};$t.createRoot=function(t,e){if(!Vf(t))throw Error(T(299));var n=!1,r="",i=X0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mf(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,eo(t.nodeType===8?t.parentNode:t),new Ff(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=vv(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Hr(t)};$t.hydrate=function(t,e,n){if(!lu(e))throw Error(T(200));return uu(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=X0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y0(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};$t.render=function(t,e,n){if(!lu(e))throw Error(T(200));return uu(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!lu(t))throw Error(T(40));return t._reactRootContainer?(Hr(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};$t.unstable_batchedUpdates=Of;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return uu(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$t})(e_);var lg=dh;hh.createRoot=lg.createRoot,hh.hydrateRoot=lg.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uo.apply(this,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const ug="popstate";function iT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ei(i.location.hash.substr(1));return od("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:wl(s))}function r(i,s){cu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return oT(e,n,r,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sT(){return Math.random().toString(36).substr(2,8)}function cg(t,e){return{usr:t.state,key:t.key,idx:e}}function od(t,e,n,r){return n===void 0&&(n=null),uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ei(e):e,{state:n,key:e&&e.key||r||sT()})}function wl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Yn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(uo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Yn.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:a,location:v.location,delta:p})}function f(S,p){a=Yn.Push;let d=od(v.location,S,p);n&&n(d,S),u=c()+1;let m=cg(d,u),E=v.createHref(d);try{o.pushState(m,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function g(S,p){a=Yn.Replace;let d=od(v.location,S,p);n&&n(d,S),u=c();let m=cg(d,u),E=v.createHref(d);o.replaceState(m,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:wl(S);return De(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ug,h),l=S,()=>{i.removeEventListener(ug,h),l=null}},createHref(S){return e(i,S)},createURL:y,encodeLocation(S){let p=y(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(S){return o.go(S)}};return v}var hg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hg||(hg={}));function aT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ei(e):e,i=zf(r.pathname||"/",n);if(i==null)return null;let s=J0(t);lT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=yT(s[a],ET(i));return o}function J0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),J0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:mT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Z0(s.path))i(s,o,l)}),e}function Z0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Z0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function lT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uT=/^:\w+$/,cT=3,hT=2,dT=1,fT=10,pT=-2,dg=t=>t==="*";function mT(t,e){let n=t.split("/"),r=n.length;return n.some(dg)&&(r+=pT),e&&(r+=hT),n.filter(i=>!dg(i)).reduce((i,s)=>i+(uT.test(s)?cT:s===""?dT:fT),r)}function gT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=vT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:or([i,c.pathname]),pathnameBase:TT(or([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return s}function vT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=ST(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ET(t){try{return decodeURI(t)}catch(e){return cu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ST(t,e){try{return decodeURIComponent(t)}catch(n){return cu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function _T(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ei(t):t;return{pathname:n?n.startsWith("/")?n:kT(n,e):e,search:IT(r),hash:CT(i)}}function kT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function t1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ei(t):(i=uo({},t),De(!i.pathname||!i.pathname.includes("?"),zc("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),zc("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),zc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=_T(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=t=>t.join("/").replace(/\/\/+/g,"/"),TT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function AT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const NT=typeof Object.is=="function"?Object.is:xT,{useState:RT,useEffect:PT,useLayoutEffect:DT,useDebugValue:OT}=uh;function $T(t,e,n){const r=e(),[{inst:i},s]=RT({inst:{value:r,getSnapshot:e}});return DT(()=>{i.value=r,i.getSnapshot=e,jc(i)&&s({inst:i})},[t,r,e]),PT(()=>(jc(i)&&s({inst:i}),t(()=>{jc(i)&&s({inst:i})})),[t]),OT(r),r}function jc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!NT(n,r)}catch{return!0}}function LT(t,e,n){return e()}const bT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MT=!bT,UT=MT?LT:$T;"useSyncExternalStore"in uh&&(t=>t.useSyncExternalStore)(uh);const n1=k.createContext(null),hu=k.createContext(null),ns=k.createContext(null),du=k.createContext(null),_r=k.createContext({outlet:null,matches:[]}),r1=k.createContext(null);function ad(){return ad=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ad.apply(this,arguments)}function FT(t,e){let{relative:n}=e===void 0?{}:e;rs()||De(!1);let{basename:r,navigator:i}=k.useContext(ns),{hash:s,pathname:o,search:a}=Bf(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:or([r,o])),i.createHref({pathname:l,search:a,hash:s})}function rs(){return k.useContext(du)!=null}function is(){return rs()||De(!1),k.useContext(du).location}function jf(){rs()||De(!1);let{basename:t,navigator:e}=k.useContext(ns),{matches:n}=k.useContext(_r),{pathname:r}=is(),i=JSON.stringify(e1(n).map(a=>a.pathnameBase)),s=k.useRef(!1);return k.useEffect(()=>{s.current=!0}),k.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=t1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:or([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const VT=k.createContext(null);function zT(t){let e=k.useContext(_r).outlet;return e&&k.createElement(VT.Provider,{value:t},e)}function w$(){let{matches:t}=k.useContext(_r),e=t[t.length-1];return e?e.params:{}}function Bf(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(_r),{pathname:i}=is(),s=JSON.stringify(e1(r).map(o=>o.pathnameBase));return k.useMemo(()=>t1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function jT(t,e){rs()||De(!1);let{navigator:n}=k.useContext(ns),r=k.useContext(hu),{matches:i}=k.useContext(_r),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=is(),u;if(e){var c;let v=typeof e=="string"?ei(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||De(!1),u=v}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",g=aT(t,{pathname:f}),y=KT(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:or([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:or([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?k.createElement(du.Provider,{value:{location:ad({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Yn.Pop}},y):y}function BT(){let t=YT(),e=AT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}class HT extends k.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(_r.Provider,{value:this.props.routeContext},k.createElement(r1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WT(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(n1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(_r.Provider,{value:e},r)}function KT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||De(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=k.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=k.createElement(BT,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let f=s;return l?f=u:o.route.Component?f=k.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),k.createElement(WT,{match:o,routeContext:{outlet:s,matches:c},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?k.createElement(HT,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var fg;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(fg||(fg={}));var El;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(El||(El={}));function GT(t){let e=k.useContext(hu);return e||De(!1),e}function qT(t){let e=k.useContext(_r);return e||De(!1),e}function QT(t){let e=qT(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function YT(){var t;let e=k.useContext(r1),n=GT(El.UseRouteError),r=QT(El.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function i1(t){let{to:e,replace:n,state:r,relative:i}=t;rs()||De(!1);let s=k.useContext(hu),o=jf();return k.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function XT(t){return zT(t.context)}function oi(t){De(!1)}function JT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Yn.Pop,navigator:s,static:o=!1}=t;rs()&&De(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ei(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:g="default"}=r,y=k.useMemo(()=>{let v=zf(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:f,key:g},navigationType:i}},[a,u,c,h,f,g,i]);return y==null?null:k.createElement(ns.Provider,{value:l},k.createElement(du.Provider,{children:n,value:y}))}function ZT(t){let{children:e,location:n}=t,r=k.useContext(n1),i=r&&!e?r.router.routes:ld(e);return jT(i,n)}var pg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(pg||(pg={}));new Promise(()=>{});function ld(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;if(r.type===k.Fragment){n.push.apply(n,ld(r.props.children,e));return}r.type!==oi&&De(!1),!r.props.index||!r.props.children||De(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ld(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sl.apply(this,arguments)}function s1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tI(t,e){return t.button===0&&(!e||e==="_self")&&!eI(t)}function ud(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function nI(t,e){let n=ud(t);if(e)for(let r of e.keys())n.has(r)||e.getAll(r).forEach(i=>{n.append(r,i)});return n}const rI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],iI=["aria-current","caseSensitive","className","end","style","to","children"];function sI(t){let{basename:e,children:n,window:r}=t,i=k.useRef();i.current==null&&(i.current=iT({window:r,v5Compat:!0}));let s=i.current,[o,a]=k.useState({action:s.action,location:s.location});return k.useLayoutEffect(()=>s.listen(a),[s]),k.createElement(JT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const oI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lI=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=s1(e,rI),{basename:f}=k.useContext(ns),g,y=!1;if(typeof u=="string"&&aI.test(u)&&(g=u,oI)){let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),E=zf(m.pathname,f);m.origin===d.origin&&E!=null?u=E+m.search+m.hash:y=!0}let v=FT(u,{relative:i}),S=uI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||S(d)}return k.createElement("a",Sl({},h,{href:g||v,onClick:y||s?r:p,ref:n,target:l}))}),o1=k.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=s1(e,iI),h=Bf(l,{relative:c.relative}),f=is(),g=k.useContext(hu),{navigator:y}=k.useContext(ns),v=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,S=f.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(S=S.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let d=S===v||!o&&S.startsWith(v)&&S.charAt(v.length)==="/",m=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),E=d?r:void 0,_;typeof s=="function"?_=s({isActive:d,isPending:m}):_=[s,d?"active":null,m?"pending":null].filter(Boolean).join(" ");let R=typeof a=="function"?a({isActive:d,isPending:m}):a;return k.createElement(lI,Sl({},c,{"aria-current":E,className:_,ref:n,style:R,to:l}),typeof u=="function"?u({isActive:d,isPending:m}):u)});var mg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(mg||(mg={}));var gg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gg||(gg={}));function uI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=jf(),l=is(),u=Bf(t,{relative:o});return k.useCallback(c=>{if(tI(c,n)){c.preventDefault();let h=r!==void 0?r:wl(l)===wl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function E$(t){let e=k.useRef(ud(t)),n=k.useRef(!1),r=is(),i=k.useMemo(()=>nI(r.search,n.current?null:e.current),[r.search]),s=jf(),o=k.useCallback((a,l)=>{const u=ud(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}var _l={},cI={get exports(){return _l},set exports(t){_l=t}},he={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=Symbol.for("react.element"),Wf=Symbol.for("react.portal"),fu=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),yu=Symbol.for("react.context"),hI=Symbol.for("react.server_context"),vu=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),_u=Symbol.for("react.lazy"),dI=Symbol.for("react.offscreen"),a1;a1=Symbol.for("react.module.reference");function Kt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Hf:switch(t=t.type,t){case fu:case mu:case pu:case wu:case Eu:return t;default:switch(t=t&&t.$$typeof,t){case hI:case yu:case vu:case _u:case Su:case gu:return t;default:return e}}case Wf:return e}}}he.ContextConsumer=yu;he.ContextProvider=gu;he.Element=Hf;he.ForwardRef=vu;he.Fragment=fu;he.Lazy=_u;he.Memo=Su;he.Portal=Wf;he.Profiler=mu;he.StrictMode=pu;he.Suspense=wu;he.SuspenseList=Eu;he.isAsyncMode=function(){return!1};he.isConcurrentMode=function(){return!1};he.isContextConsumer=function(t){return Kt(t)===yu};he.isContextProvider=function(t){return Kt(t)===gu};he.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hf};he.isForwardRef=function(t){return Kt(t)===vu};he.isFragment=function(t){return Kt(t)===fu};he.isLazy=function(t){return Kt(t)===_u};he.isMemo=function(t){return Kt(t)===Su};he.isPortal=function(t){return Kt(t)===Wf};he.isProfiler=function(t){return Kt(t)===mu};he.isStrictMode=function(t){return Kt(t)===pu};he.isSuspense=function(t){return Kt(t)===wu};he.isSuspenseList=function(t){return Kt(t)===Eu};he.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===fu||t===mu||t===pu||t===wu||t===Eu||t===dI||typeof t=="object"&&t!==null&&(t.$$typeof===_u||t.$$typeof===Su||t.$$typeof===gu||t.$$typeof===yu||t.$$typeof===vu||t.$$typeof===a1||t.getModuleId!==void 0)};he.typeOf=Kt;(function(t){t.exports=he})(cI);function fI(t){function e(N,O,$,H,w){for(var ee=0,x=0,Te=0,se=0,le,Y,Ge=0,_t=0,re,rt=re=le=0,oe=0,qe=0,hs=0,Qe=0,ea=$.length,ds=ea-1,Gt,G="",Ae="",fc="",pc="",Mn;oe<ea;){if(Y=$.charCodeAt(oe),oe===ds&&x+se+Te+ee!==0&&(x!==0&&(Y=x===47?10:47),se=Te=ee=0,ea++,ds++),x+se+Te+ee===0){if(oe===ds&&(0<qe&&(G=G.replace(f,"")),0<G.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:G+=$.charAt(oe)}Y=59}switch(Y){case 123:for(G=G.trim(),le=G.charCodeAt(0),re=1,Qe=++oe;oe<ea;){switch(Y=$.charCodeAt(oe)){case 123:re++;break;case 125:re--;break;case 47:switch(Y=$.charCodeAt(oe+1)){case 42:case 47:e:{for(rt=oe+1;rt<ds;++rt)switch($.charCodeAt(rt)){case 47:if(Y===42&&$.charCodeAt(rt-1)===42&&oe+2!==rt){oe=rt+1;break e}break;case 10:if(Y===47){oe=rt+1;break e}}oe=rt}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;oe++<ds&&$.charCodeAt(oe)!==Y;);}if(re===0)break;oe++}switch(re=$.substring(Qe,oe),le===0&&(le=(G=G.replace(h,"").trim()).charCodeAt(0)),le){case 64:switch(0<qe&&(G=G.replace(f,"")),Y=G.charCodeAt(1),Y){case 100:case 109:case 115:case 45:qe=O;break;default:qe=gn}if(re=e(O,qe,re,Y,w+1),Qe=re.length,0<A&&(qe=n(gn,G,hs),Mn=a(3,re,qe,O,Ke,Oe,Qe,Y,w,H),G=qe.join(""),Mn!==void 0&&(Qe=(re=Mn.trim()).length)===0&&(Y=0,re="")),0<Qe)switch(Y){case 115:G=G.replace(R,o);case 100:case 109:case 45:re=G+"{"+re+"}";break;case 107:G=G.replace(d,"$1 $2"),re=G+"{"+re+"}",re=nt===1||nt===2&&s("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=G+re,H===112&&(re=(Ae+=re,""))}else re="";break;default:re=e(O,n(O,G,hs),re,H,w+1)}fc+=re,re=hs=qe=rt=le=0,G="",Y=$.charCodeAt(++oe);break;case 125:case 59:if(G=(0<qe?G.replace(f,""):G).trim(),1<(Qe=G.length))switch(rt===0&&(le=G.charCodeAt(0),le===45||96<le&&123>le)&&(Qe=(G=G.replace(" ",":")).length),0<A&&(Mn=a(1,G,O,N,Ke,Oe,Ae.length,H,w,H))!==void 0&&(Qe=(G=Mn.trim()).length)===0&&(G="\0\0"),le=G.charCodeAt(0),Y=G.charCodeAt(1),le){case 0:break;case 64:if(Y===105||Y===99){pc+=G+$.charAt(oe);break}default:G.charCodeAt(Qe-1)!==58&&(Ae+=i(G,le,Y,G.charCodeAt(2)))}hs=qe=rt=le=0,G="",Y=$.charCodeAt(++oe)}}switch(Y){case 13:case 10:x===47?x=0:1+le===0&&H!==107&&0<G.length&&(qe=1,G+="\0"),0<A*B&&a(0,G,O,N,Ke,Oe,Ae.length,H,w,H),Oe=1,Ke++;break;case 59:case 125:if(x+se+Te+ee===0){Oe++;break}default:switch(Oe++,Gt=$.charAt(oe),Y){case 9:case 32:if(se+ee+x===0)switch(Ge){case 44:case 58:case 9:case 32:Gt="";break;default:Y!==32&&(Gt=" ")}break;case 0:Gt="\\0";break;case 12:Gt="\\f";break;case 11:Gt="\\v";break;case 38:se+x+ee===0&&(qe=hs=1,Gt="\f"+Gt);break;case 108:if(se+x+ee+xt===0&&0<rt)switch(oe-rt){case 2:Ge===112&&$.charCodeAt(oe-3)===58&&(xt=Ge);case 8:_t===111&&(xt=_t)}break;case 58:se+x+ee===0&&(rt=oe);break;case 44:x+Te+se+ee===0&&(qe=1,Gt+="\r");break;case 34:case 39:x===0&&(se=se===Y?0:se===0?Y:se);break;case 91:se+x+Te===0&&ee++;break;case 93:se+x+Te===0&&ee--;break;case 41:se+x+ee===0&&Te--;break;case 40:if(se+x+ee===0){if(le===0)switch(2*Ge+3*_t){case 533:break;default:le=1}Te++}break;case 64:x+Te+se+ee+rt+re===0&&(re=1);break;case 42:case 47:if(!(0<se+ee+Te))switch(x){case 0:switch(2*Y+3*$.charCodeAt(oe+1)){case 235:x=47;break;case 220:Qe=oe,x=42}break;case 42:Y===47&&Ge===42&&Qe+2!==oe&&($.charCodeAt(Qe+2)===33&&(Ae+=$.substring(Qe,oe+1)),Gt="",x=0)}}x===0&&(G+=Gt)}_t=Ge,Ge=Y,oe++}if(Qe=Ae.length,0<Qe){if(qe=O,0<A&&(Mn=a(2,Ae,qe,N,Ke,Oe,Qe,H,w,H),Mn!==void 0&&(Ae=Mn).length===0))return pc+Ae+fc;if(Ae=qe.join(",")+"{"+Ae+"}",nt*xt!==0){switch(nt!==2||s(Ae,2)||(xt=0),xt){case 111:Ae=Ae.replace(E,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace(m,"::-webkit-input-$1")+Ae.replace(m,"::-moz-$1")+Ae.replace(m,":-ms-input-$1")+Ae}xt=0}}return pc+Ae+fc}function n(N,O,$){var H=O.trim().split(S);O=H;var w=H.length,ee=N.length;switch(ee){case 0:case 1:var x=0;for(N=ee===0?"":N[0]+" ";x<w;++x)O[x]=r(N,O[x],$).trim();break;default:var Te=x=0;for(O=[];x<w;++x)for(var se=0;se<ee;++se)O[Te++]=r(N[se]+" ",H[x],$).trim()}return O}function r(N,O,$){var H=O.charCodeAt(0);switch(33>H&&(H=(O=O.trim()).charCodeAt(0)),H){case 38:return O.replace(p,"$1"+N.trim());case 58:return N.trim()+O.replace(p,"$1"+N.trim());default:if(0<1*$&&0<O.indexOf("\f"))return O.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+O}function i(N,O,$,H){var w=N+";",ee=2*O+3*$+4*H;if(ee===944){N=w.indexOf(":",9)+1;var x=w.substring(N,w.length-1).trim();return x=w.substring(0,N).trim()+x+";",nt===1||nt===2&&s(x,1)?"-webkit-"+x+x:x}if(nt===0||nt===2&&!s(w,1))return w;switch(ee){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(Ve,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return x=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+w+"-ms-flex-pack"+x+w;case 1005:return y.test(w)?w.replace(g,":-webkit-")+w.replace(g,":-moz-")+w:w;case 1e3:switch(x=w.substring(13).trim(),O=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(O)){case 226:x=w.replace(_,"tb");break;case 232:x=w.replace(_,"tb-rl");break;case 220:x=w.replace(_,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+x+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(O=(w=N).length-10,x=(w.charCodeAt(O)===33?w.substring(0,O):w).substring(N.indexOf(":",7)+1).trim(),ee=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:w=w.replace(x,"-webkit-"+x)+";"+w;break;case 207:case 102:w=w.replace(x,"-webkit-"+(102<ee?"inline-":"")+"box")+";"+w.replace(x,"-webkit-"+x)+";"+w.replace(x,"-ms-"+x+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return x=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+x+"-ms-flex-"+x+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(D,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(D,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(z.test(N)===!0)return(x=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),O,$,H).replace(":fill-available",":stretch"):w.replace(x,"-webkit-"+x)+w.replace(x,"-moz-"+x.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,$+H===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+w}return w}function s(N,O){var $=N.indexOf(O===1?":":"{"),H=N.substring(0,O!==3?$:10);return $=N.substring($+1,N.length-1),V(O!==2?H:H.replace(X,"$1"),$,O)}function o(N,O){var $=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return $!==O+";"?$.replace(P," or ($1)").substring(4):"("+O+")"}function a(N,O,$,H,w,ee,x,Te,se,le){for(var Y=0,Ge=O,_t;Y<A;++Y)switch(_t=mt[Y].call(c,N,Ge,$,H,w,ee,x,Te,se,le)){case void 0:case!1:case!0:case null:break;default:Ge=_t}if(Ge!==O)return Ge}function l(N){switch(N){case void 0:case null:A=mt.length=0;break;default:if(typeof N=="function")mt[A++]=N;else if(typeof N=="object")for(var O=0,$=N.length;O<$;++O)l(N[O]);else B=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(V=null,N?typeof N!="function"?nt=1:(nt=2,V=N):nt=0),u}function c(N,O){var $=N;if(33>$.charCodeAt(0)&&($=$.trim()),fe=$,$=[fe],0<A){var H=a(-1,O,$,$,Ke,Oe,0,0,0,0);H!==void 0&&typeof H=="string"&&(O=H)}var w=e(gn,$,O,0,0);return 0<A&&(H=a(-2,w,$,$,Ke,Oe,w.length,0,0,0),H!==void 0&&(w=H)),fe="",xt=0,Oe=Ke=1,w}var h=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,E=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,D=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,Ve=/([^-])(image-set\()/,Oe=1,Ke=1,xt=0,nt=1,gn=[],mt=[],A=0,V=null,B=0,fe="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var pI={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function mI(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var gI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,yg=mI(function(t){return gI.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),cd={},yI={get exports(){return cd},set exports(t){cd=t}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=typeof Symbol=="function"&&Symbol.for,Kf=We?Symbol.for("react.element"):60103,Gf=We?Symbol.for("react.portal"):60106,ku=We?Symbol.for("react.fragment"):60107,Tu=We?Symbol.for("react.strict_mode"):60108,Iu=We?Symbol.for("react.profiler"):60114,Cu=We?Symbol.for("react.provider"):60109,Au=We?Symbol.for("react.context"):60110,qf=We?Symbol.for("react.async_mode"):60111,xu=We?Symbol.for("react.concurrent_mode"):60111,Nu=We?Symbol.for("react.forward_ref"):60112,Ru=We?Symbol.for("react.suspense"):60113,vI=We?Symbol.for("react.suspense_list"):60120,Pu=We?Symbol.for("react.memo"):60115,Du=We?Symbol.for("react.lazy"):60116,wI=We?Symbol.for("react.block"):60121,EI=We?Symbol.for("react.fundamental"):60117,SI=We?Symbol.for("react.responder"):60118,_I=We?Symbol.for("react.scope"):60119;function bt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Kf:switch(t=t.type,t){case qf:case xu:case ku:case Iu:case Tu:case Ru:return t;default:switch(t=t&&t.$$typeof,t){case Au:case Nu:case Du:case Pu:case Cu:return t;default:return e}}case Gf:return e}}}function l1(t){return bt(t)===xu}de.AsyncMode=qf;de.ConcurrentMode=xu;de.ContextConsumer=Au;de.ContextProvider=Cu;de.Element=Kf;de.ForwardRef=Nu;de.Fragment=ku;de.Lazy=Du;de.Memo=Pu;de.Portal=Gf;de.Profiler=Iu;de.StrictMode=Tu;de.Suspense=Ru;de.isAsyncMode=function(t){return l1(t)||bt(t)===qf};de.isConcurrentMode=l1;de.isContextConsumer=function(t){return bt(t)===Au};de.isContextProvider=function(t){return bt(t)===Cu};de.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kf};de.isForwardRef=function(t){return bt(t)===Nu};de.isFragment=function(t){return bt(t)===ku};de.isLazy=function(t){return bt(t)===Du};de.isMemo=function(t){return bt(t)===Pu};de.isPortal=function(t){return bt(t)===Gf};de.isProfiler=function(t){return bt(t)===Iu};de.isStrictMode=function(t){return bt(t)===Tu};de.isSuspense=function(t){return bt(t)===Ru};de.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ku||t===xu||t===Iu||t===Tu||t===Ru||t===vI||typeof t=="object"&&t!==null&&(t.$$typeof===Du||t.$$typeof===Pu||t.$$typeof===Cu||t.$$typeof===Au||t.$$typeof===Nu||t.$$typeof===EI||t.$$typeof===SI||t.$$typeof===_I||t.$$typeof===wI)};de.typeOf=bt;(function(t){t.exports=de})(yI);var Qf=cd,kI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},II={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yf={};Yf[Qf.ForwardRef]=II;Yf[Qf.Memo]=u1;function vg(t){return Qf.isMemo(t)?u1:Yf[t.$$typeof]||kI}var CI=Object.defineProperty,AI=Object.getOwnPropertyNames,wg=Object.getOwnPropertySymbols,xI=Object.getOwnPropertyDescriptor,NI=Object.getPrototypeOf,Eg=Object.prototype;function c1(t,e,n){if(typeof e!="string"){if(Eg){var r=NI(e);r&&r!==Eg&&c1(t,r,n)}var i=AI(e);wg&&(i=i.concat(wg(e)));for(var s=vg(t),o=vg(e),a=0;a<i.length;++a){var l=i[a];if(!TI[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=xI(e,l);try{CI(t,l,u)}catch{}}}}return t}var RI=c1;function Jt(){return(Jt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Sg=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},hd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!_l.typeOf(t)},kl=Object.freeze([]),ar=Object.freeze({});function zi(t){return typeof t=="function"}function _g(t){return t.displayName||t.name||"Component"}function Xf(t){return t&&typeof t.styledComponentId=="string"}var ji=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Jf=typeof window<"u"&&"HTMLElement"in window,PI=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),DI={};function Wr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var OI=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Wr(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Va=new Map,Tl=new Map,Us=1,va=function(t){if(Va.has(t))return Va.get(t);for(;Tl.has(Us);)Us++;var e=Us++;return Va.set(t,e),Tl.set(e,t),e},$I=function(t){return Tl.get(t)},LI=function(t,e){e>=Us&&(Us=e+1),Va.set(t,e),Tl.set(e,t)},bI="style["+ji+'][data-styled-version="5.3.8"]',MI=new RegExp("^"+ji+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),UI=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},FI=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(MI);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(LI(u,l),UI(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},VI=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},h1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(ji))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ji,"active"),r.setAttribute("data-styled-version","5.3.8");var o=VI();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},zI=function(){function t(n){var r=this.element=h1(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Wr(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),jI=function(){function t(n){var r=this.element=h1(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),BI=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),kg=Jf,HI={isServer:!Jf,useCSSOMInjection:!PI},Il=function(){function t(n,r,i){n===void 0&&(n=ar),r===void 0&&(r={}),this.options=Jt({},HI,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Jf&&kg&&(kg=!1,function(s){for(var o=document.querySelectorAll(bI),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ji)!=="active"&&(FI(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return va(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Jt({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new BI(o):s?new zI(o):new jI(o),new OI(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(va(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(va(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(va(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=$I(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=ji+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(f){f.length>0&&(h+=f+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),WI=/(a)(d)/gi,Tg=function(t){return String.fromCharCode(t+(t>25?39:97))};function dd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Tg(e%52)+n;return(Tg(e%52)+n).replace(WI,"$1-$2")}var Si=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},d1=function(t){return Si(5381,t)};function f1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(zi(n)&&!Xf(n))return!1}return!0}var KI=d1("5.3.8"),GI=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f1(e),this.componentId=n,this.baseHash=Si(KI,n),this.baseStyle=r,Il.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Kr(this.rules,e,n,r).join(""),a=dd(Si(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Si(this.baseHash,r.hash),h="",f=0;f<u;f++){var g=this.rules[f];if(typeof g=="string")h+=g;else if(g){var y=Kr(g,e,n,r),v=Array.isArray(y)?y.join(""):y;c=Si(c,v+f),h+=v}}if(h){var S=dd(c>>>0);if(!n.hasNameForId(i,S)){var p=r(h,"."+S,void 0,i);n.insertRules(i,S,p)}s.push(S)}}return s.join(" ")},t}(),qI=/^\s*\/\/.*$/gm,QI=[":","[",".","#"];function YI(t){var e,n,r,i,s=t===void 0?ar:t,o=s.options,a=o===void 0?ar:o,l=s.plugins,u=l===void 0?kl:l,c=new fI(a),h=[],f=function(v){function S(p){if(p)try{v(p+"}")}catch{}}return function(p,d,m,E,_,R,P,D,X,z){switch(p){case 1:if(X===0&&d.charCodeAt(0)===64)return v(d+";"),"";break;case 2:if(D===0)return d+"/*|*/";break;case 3:switch(D){case 102:case 112:return v(m[0]+d),"";default:return d+(z===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),g=function(v,S,p){return S===0&&QI.indexOf(p[n.length])!==-1||p.match(i)?v:"."+e};function y(v,S,p,d){d===void 0&&(d="&");var m=v.replace(qI,""),E=S&&p?p+" "+S+" { "+m+" }":m;return e=d,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!S?"":S,E)}return c.use([].concat(u,[function(v,S,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},f,function(v){if(v===-2){var S=h;return h=[],S}}])),y.hash=u.length?u.reduce(function(v,S){return S.name||Wr(15),Si(v,S.name)},5381).toString():"",y}var p1=vt.createContext();p1.Consumer;var m1=vt.createContext(),XI=(m1.Consumer,new Il),fd=YI();function g1(){return k.useContext(p1)||XI}function y1(){return k.useContext(m1)||fd}var JI=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=fd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Wr(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=fd),this.name+e.hash},t}(),ZI=/([A-Z])/,eC=/([A-Z])/g,tC=/^ms-/,nC=function(t){return"-"+t.toLowerCase()};function Ig(t){return ZI.test(t)?t.replace(eC,nC).replace(tC,"-ms-"):t}var Cg=function(t){return t==null||t===!1||t===""};function Kr(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Kr(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Cg(t))return"";if(Xf(t))return"."+t.styledComponentId;if(zi(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Kr(l,e,n,r)}var u;return t instanceof JI?n?(t.inject(n,r),t.getName(r)):t:hd(t)?function c(h,f){var g,y,v=[];for(var S in h)h.hasOwnProperty(S)&&!Cg(h[S])&&(Array.isArray(h[S])&&h[S].isCss||zi(h[S])?v.push(Ig(S)+":",h[S],";"):hd(h[S])?v.push.apply(v,c(h[S],S)):v.push(Ig(S)+": "+(g=S,(y=h[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in pI?String(y).trim():y+"px")+";"));return f?[f+" {"].concat(v,["}"]):v}(t):t.toString()}var Ag=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function v1(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return zi(t)||hd(t)?Ag(Kr(Sg(kl,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Ag(Kr(Sg(t,n)))}var w1=function(t,e,n){return n===void 0&&(n=ar),t.theme!==n.theme&&t.theme||e||n.theme},rC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iC=/(^-|-$)/g;function Bc(t){return t.replace(rC,"-").replace(iC,"")}var E1=function(t){return dd(d1(t)>>>0)};function wa(t){return typeof t=="string"&&!0}var pd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},sC=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function oC(t,e,n){var r=t[n];pd(e)&&pd(r)?S1(r,e):t[n]=e}function S1(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(pd(o))for(var a in o)sC(a)&&oC(t,o[a],a)}return t}var co=vt.createContext();co.Consumer;function aC(t){var e=k.useContext(co),n=k.useMemo(function(){return function(r,i){if(!r)return Wr(14);if(zi(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?Wr(8):i?Jt({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?vt.createElement(co.Provider,{value:n},t.children):null}var Hc={};function _1(t,e,n){var r=Xf(t),i=!wa(t),s=e.attrs,o=s===void 0?kl:s,a=e.componentId,l=a===void 0?function(d,m){var E=typeof d!="string"?"sc":Bc(d);Hc[E]=(Hc[E]||0)+1;var _=E+"-"+E1("5.3.8"+E+Hc[E]);return m?m+"-"+_:_}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(d){return wa(d)?"styled."+d:"Styled("+_g(d)+")"}(t):u,h=e.displayName&&e.componentId?Bc(e.displayName)+"-"+e.componentId:e.componentId||l,f=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(d,m,E){return t.shouldForwardProp(d,m,E)&&e.shouldForwardProp(d,m,E)}:t.shouldForwardProp);var y,v=new GI(n,h,r?t.componentStyle:void 0),S=v.isStatic&&o.length===0,p=function(d,m){return function(E,_,R,P){var D=E.attrs,X=E.componentStyle,z=E.defaultProps,Ve=E.foldedComponentIds,Oe=E.shouldForwardProp,Ke=E.styledComponentId,xt=E.target,nt=function(H,w,ee){H===void 0&&(H=ar);var x=Jt({},w,{theme:H}),Te={};return ee.forEach(function(se){var le,Y,Ge,_t=se;for(le in zi(_t)&&(_t=_t(x)),_t)x[le]=Te[le]=le==="className"?(Y=Te[le],Ge=_t[le],Y&&Ge?Y+" "+Ge:Y||Ge):_t[le]}),[x,Te]}(w1(_,k.useContext(co),z)||ar,_,D),gn=nt[0],mt=nt[1],A=function(H,w,ee,x){var Te=g1(),se=y1(),le=w?H.generateAndInjectStyles(ar,Te,se):H.generateAndInjectStyles(ee,Te,se);return le}(X,P,gn),V=R,B=mt.$as||_.$as||mt.as||_.as||xt,fe=wa(B),N=mt!==_?Jt({},_,{},mt):_,O={};for(var $ in N)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?O.as=N[$]:(Oe?Oe($,yg,B):!fe||yg($))&&(O[$]=N[$]));return _.style&&mt.style!==_.style&&(O.style=Jt({},_.style,{},mt.style)),O.className=Array.prototype.concat(Ve,Ke,A!==Ke?A:null,_.className,mt.className).filter(Boolean).join(" "),O.ref=V,k.createElement(B,O)}(y,d,m,S)};return p.displayName=c,(y=vt.forwardRef(p)).attrs=f,y.componentStyle=v,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):kl,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(d){var m=e.componentId,E=function(R,P){if(R==null)return{};var D,X,z={},Ve=Object.keys(R);for(X=0;X<Ve.length;X++)D=Ve[X],P.indexOf(D)>=0||(z[D]=R[D]);return z}(e,["componentId"]),_=m&&m+"-"+(wa(d)?d:Bc(_g(d)));return _1(d,Jt({},E,{attrs:f,componentId:_}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?S1({},t.defaultProps,d):d}}),y.toString=function(){return"."+y.styledComponentId},i&&RI(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var md=function(t){return function e(n,r,i){if(i===void 0&&(i=ar),!_l.isValidElementType(r))return Wr(1,String(r));var s=function(){return n(r,i,v1.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Jt({},i,{},o))},s.attrs=function(o){return e(n,r,Jt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(_1,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){md[t]=md(t)});var lC=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=f1(n),Il.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Kr(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Il.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function uC(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=v1.apply(void 0,[t].concat(n)),s="sc-global-"+E1(JSON.stringify(i)),o=new lC(i,s);function a(u){var c=g1(),h=y1(),f=k.useContext(co),g=k.useRef(c.allocateGSInstance(s)).current;return c.server&&l(g,u,c,f,h),k.useLayoutEffect(function(){if(!c.server)return l(g,u,c,f,h),function(){return o.removeStyles(g,c)}},[g,u,c,f,h]),null}function l(u,c,h,f,g){if(o.isStatic)o.renderStyles(u,DI,h,g);else{var y=Jt({},c,{theme:w1(c,f,a.defaultProps)});o.renderStyles(u,y,h,g)}}return vt.memo(a)}const ti=md,cC="modulepreload",hC=function(t){return"/RM_tt/"+t},xg={},Ou=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=hC(s),s in xg)return;xg[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":cC,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Wc=ti(o1)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-family: ${t=>t.theme.fonts.main};
  &.active {
    color: white;
    background-color: green;
  }
`,dC=ti(o1)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-family: ${t=>t.theme.fonts.main};
  &.active {
    color: white;
    background-color: green;
  }
`,fC=ti.nav`
  height: 60px;
  box-shadow: rgb(18 110 33 / 71%) -2px 1px 22px 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},T1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new mC;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gC=function(t){const e=k1(t);return T1.encodeByteArray(e,!0)},Cl=function(t){return gC(t).replace(/\./g,"")},I1=function(t){try{return T1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=()=>yC().__FIREBASE_DEFAULTS__,wC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&I1(t[1]);return e&&JSON.parse(e)},Zf=()=>{try{return vC()||wC()||EC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C1=t=>{var e,n;return(n=(e=Zf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SC=t=>{const e=C1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_C=()=>{var t;return(t=Zf())===null||t===void 0?void 0:t.config},A1=t=>{var e;return(e=Zf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cl(JSON.stringify(n)),Cl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function CC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xC(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NC(){try{return typeof indexedDB=="object"}catch{return!1}}function RC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PC,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function DC(t,e){return t.replace(OC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OC=/\{\$([^}]+)}/g;function $C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Al(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ng(s)&&Ng(o)){if(!Al(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function LC(t,e){const n=new bC(t,e);return n.subscribe.bind(n)}class bC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VC(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FC(t){return t===Ar?void 0:t}function VC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const jC={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},BC=ie.INFO,HC={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},WC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=HC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ep{constructor(e){this.name=e,this._logLevel=BC,this._logHandler=WC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const KC=(t,e)=>e.some(n=>t instanceof n);let Rg,Pg;function GC(){return Rg||(Rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qC(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x1=new WeakMap,gd=new WeakMap,N1=new WeakMap,Gc=new WeakMap,tp=new WeakMap;function QC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&x1.set(n,t)}).catch(()=>{}),tp.set(e,t),e}function YC(t){if(gd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gd.set(t,e)}let yd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XC(t){yd=t(yd)}function JC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return N1.set(r,e.sort?e.sort():[e]),lr(r)}:qC().includes(t)?function(...e){return t.apply(qc(this),e),lr(x1.get(this))}:function(...e){return lr(t.apply(qc(this),e))}}function ZC(t){return typeof t=="function"?JC(t):(t instanceof IDBTransaction&&YC(t),KC(t,GC())?new Proxy(t,yd):t)}function lr(t){if(t instanceof IDBRequest)return QC(t);if(Gc.has(t))return Gc.get(t);const e=ZC(t);return e!==t&&(Gc.set(t,e),tp.set(e,t)),e}const qc=t=>tp.get(t);function eA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const tA=["get","getKey","getAll","getAllKeys","count"],nA=["put","add","delete","clear"],Qc=new Map;function Dg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qc.set(e,s),s}XC(t=>({...t,get:(e,n,r)=>Dg(e,n)||t.get(e,n,r),has:(e,n)=>!!Dg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vd="@firebase/app",Og="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new ep("@firebase/app"),sA="@firebase/app-compat",oA="@firebase/analytics-compat",aA="@firebase/analytics",lA="@firebase/app-check-compat",uA="@firebase/app-check",cA="@firebase/auth",hA="@firebase/auth-compat",dA="@firebase/database",fA="@firebase/database-compat",pA="@firebase/functions",mA="@firebase/functions-compat",gA="@firebase/installations",yA="@firebase/installations-compat",vA="@firebase/messaging",wA="@firebase/messaging-compat",EA="@firebase/performance",SA="@firebase/performance-compat",_A="@firebase/remote-config",kA="@firebase/remote-config-compat",TA="@firebase/storage",IA="@firebase/storage-compat",CA="@firebase/firestore",AA="@firebase/firestore-compat",xA="firebase",NA="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="[DEFAULT]",RA={[vd]:"fire-core",[sA]:"fire-core-compat",[aA]:"fire-analytics",[oA]:"fire-analytics-compat",[uA]:"fire-app-check",[lA]:"fire-app-check-compat",[cA]:"fire-auth",[hA]:"fire-auth-compat",[dA]:"fire-rtdb",[fA]:"fire-rtdb-compat",[pA]:"fire-fn",[mA]:"fire-fn-compat",[gA]:"fire-iid",[yA]:"fire-iid-compat",[vA]:"fire-fcm",[wA]:"fire-fcm-compat",[EA]:"fire-perf",[SA]:"fire-perf-compat",[_A]:"fire-rc",[kA]:"fire-rc-compat",[TA]:"fire-gcs",[IA]:"fire-gcs-compat",[CA]:"fire-fst",[AA]:"fire-fst-compat","fire-js":"fire-js",[xA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map,Ed=new Map;function PA(t,e){try{t.container.addComponent(e)}catch(n){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(Ed.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,t);for(const n of xl.values())PA(n,t);return!0}function np(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ur=new Oo("app","Firebase",DA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=NA;function R1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=_C()),!n)throw ur.create("no-options");const s=xl.get(i);if(s){if(Al(n,s.options)&&Al(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new zC(i);for(const l of Ed.values())o.addComponent(l);const a=new OA(n,r,o);return xl.set(i,a),a}function P1(t=wd){const e=xl.get(t);if(!e&&t===wd)return R1();if(!e)throw ur.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let i=(r=RA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(a.join(" "));return}Bi(new Gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="firebase-heartbeat-database",LA=1,ho="firebase-heartbeat-store";let Yc=null;function D1(){return Yc||(Yc=eA($A,LA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function bA(t){try{return(await D1()).transaction(ho).objectStore(ho).get(O1(t))}catch(e){if(e instanceof bn)qr.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(n.message)}}}async function $g(t,e){try{const r=(await D1()).transaction(ho,"readwrite");return await r.objectStore(ho).put(e,O1(t)),r.done}catch(n){if(n instanceof bn)qr.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qr.warn(r.message)}}}function O1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=1024,UA=30*24*60*60*1e3;class FA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=UA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lg(),{heartbeatsToSend:n,unsentEntries:r}=VA(this._heartbeatsCache.heartbeats),i=Cl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lg(){return new Date().toISOString().substring(0,10)}function VA(t,e=MA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NC()?RC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bg(t){return Cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t){Bi(new Gr("platform-logger",e=>new rA(e),"PRIVATE")),Bi(new Gr("heartbeat",e=>new FA(e),"PRIVATE")),cr(vd,Og,t),cr(vd,Og,"esm2017"),cr("fire-js","")}jA("");function rp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BA=$1,L1=new Oo("auth","Firebase",$1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new ep("@firebase/auth");function za(t,...e){Mg.logLevel<=ie.ERROR&&Mg.error(`Auth (${Lo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw ip(t,...e)}function cn(t,...e){return ip(t,...e)}function b1(t,e,n){const r=Object.assign(Object.assign({},BA()),{[e]:n});return new Oo("auth","Firebase",r).create(e,{appName:t.name})}function HA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fn(t,"argument-error"),b1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ip(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L1.create(t,...e)}function W(t,e,...n){if(!t)throw ip(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw za(e),new Error(e)}function Rn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Map;function _n(t){Rn(t instanceof Function,"Expected a class definition");let e=Ug.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ug.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t,e){const n=np(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Al(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function KA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GA(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GA()||CC()||"connection"in navigator)?navigator.onLine:!0}function QA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=IC()||AC()}get(){return qA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new bo(3e4,6e4);function JA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $u(t,e,n,r,i={}){return U1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),M1.fetch()(F1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function U1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YA),e);try{const i=new ex(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw b1(t,c,u);fn(t,c)}}catch(i){if(i instanceof bn)throw i;fn(t,"internal-error",{message:String(i)})}}async function ZA(t,e,n,r,i={}){const s=await $u(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sp(t.config,i):`${t.config.apiScheme}://${i}`}class ex{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),XA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e){return $u(t,"POST","/v1/accounts:delete",e)}async function nx(t,e){return $u(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rx(t,e=!1){const n=Wt(t),r=await n.getIdToken(e),i=op(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fs(Xc(i.auth_time)),issuedAtTime:Fs(Xc(i.iat)),expirationTime:Fs(Xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function op(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const i=I1(n);return i?JSON.parse(i):(za("Failed to decode base64 JWT payload"),null)}catch(i){return za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ix(t){const e=op(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&sx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fo(t,nx(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ux(s.providerUserInfo):[],a=lx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ax(t){const e=Wt(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ux(t){return t.map(e=>{var{providerId:n}=e,r=rp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e){const n=await U1(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ix(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new po;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fo(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rx(this,e)}reload(){return ax(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fo(this,tx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:_,providerData:R,stsTokenManager:P}=n;W(m&&P,e,"internal-error");const D=po.fromJSON(this.name,P);W(typeof m=="string",e,"internal-error"),Fn(h,e.name),Fn(f,e.name),W(typeof E=="boolean",e,"internal-error"),W(typeof _=="boolean",e,"internal-error"),Fn(g,e.name),Fn(y,e.name),Fn(v,e.name),Fn(S,e.name),Fn(p,e.name),Fn(d,e.name);const X=new Mr({uid:m,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:_,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:D,createdAt:p,lastLoginAt:d});return R&&Array.isArray(R)&&(X.providerData=R.map(z=>Object.assign({},z))),S&&(X._redirectEventId=S),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new po;i.updateFromServerResponse(n);const s=new Mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z1.type="NONE";const Vg=z1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(_n(Vg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(Vg);const o=ja(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Mr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ri(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ri(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K1(e))return"Blackberry";if(G1(e))return"Webos";if(ap(e))return"Safari";if((e.includes("chrome/")||B1(e))&&!e.includes("edge/"))return"Chrome";if(W1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j1(t=ft()){return/firefox\//i.test(t)}function ap(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B1(t=ft()){return/crios\//i.test(t)}function H1(t=ft()){return/iemobile/i.test(t)}function W1(t=ft()){return/android/i.test(t)}function K1(t=ft()){return/blackberry/i.test(t)}function G1(t=ft()){return/webos/i.test(t)}function Lu(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hx(t=ft()){var e;return Lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dx(){return xC()&&document.documentMode===10}function q1(t=ft()){return Lu(t)||W1(t)||G1(t)||K1(t)||/windows phone/i.test(t)||H1(t)}function fx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t,e=[]){let n;switch(t){case"Browser":n=zg(ft());break;case"Worker":n=`${zg(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Wt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bu(t){return Wt(t)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=LC(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gx(t,e,n){const r=bu(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Y1(e),{host:o,port:a}=yx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vx()}function Y1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yx(t){const e=Y1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bg(o)}}}function Bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e){return ZA(t,"POST","/v1/accounts:signInWithIdp",JA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="http://localhost";class Qr extends X1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:wx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Mo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Mo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Mo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mr._fromIdTokenResponse(e,r,i),o=Hg(r);return new Hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hg(r);return new Hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rl(e,n,r,i)}}function J1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,s,e,r):s})}async function Ex(t,e,n=!1){const r=await fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fo(t,J1(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=op(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e,n=!1){const r="signIn",i=await J1(t,r,e),s=await Hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function kx(t,e,n,r){return Wt(t).onIdTokenChanged(e,n,r)}function Tx(t,e,n){return Wt(t).beforeAuthStateChanged(e,n)}function Ix(t,e,n,r){return Wt(t).onAuthStateChanged(e,n,r)}const Pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){const t=ft();return ap(t)||Lu(t)}const Ax=1e3,xx=10;class ew extends Z1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cx()&&fx(),this.fallbackToPolling=q1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ew.type="LOCAL";const Nx=ew;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends Z1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tw.type="SESSION";const nw=tw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Rx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=up("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function Dx(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function Ox(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $x(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lx(){return rw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="firebaseLocalStorageDb",bx=1,Dl="firebaseLocalStorage",sw="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uu(t,e){return t.transaction([Dl],e?"readwrite":"readonly").objectStore(Dl)}function Mx(){const t=indexedDB.deleteDatabase(iw);return new Uo(t).toPromise()}function _d(){const t=indexedDB.open(iw,bx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dl,{keyPath:sw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dl)?e(r):(r.close(),await Mx(),e(await _d()))})})}async function Wg(t,e,n){const r=Uu(t,!0).put({[sw]:e,value:n});return new Uo(r).toPromise()}async function Ux(t,e){const n=Uu(t,!1).get(e),r=await new Uo(n).toPromise();return r===void 0?null:r.value}function Kg(t,e){const n=Uu(t,!0).delete(e);return new Uo(n).toPromise()}const Fx=800,Vx=3;class ow{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mu._getInstance(Lx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ox(),!this.activeServiceWorker)return;this.sender=new Px(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$x()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await Wg(e,Pl,"1"),await Kg(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ux(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uu(i,!1).getAll();return new Uo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ow.type="LOCAL";const zx=ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Bx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jx().appendChild(r)})}function Hx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e){return e?_n(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends X1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wx(t){return _x(t.auth,new cp(t),t.bypassAuthState)}function Kx(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Sx(n,new cp(t),t.bypassAuthState)}async function Gx(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Ex(n,new cp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wx;case"linkViaPopup":case"linkViaRedirect":return Gx;case"reauthViaPopup":case"reauthViaRedirect":return Kx;default:fn(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=new bo(2e3,1e4);async function S$(t,e,n){const r=bu(t);HA(t,e,lp);const i=aw(r,n);return new Pr(r,"signInViaPopup",e,i).executeNotNull()}class Pr extends lw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qx.get())};e()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx="pendingRedirect",Ba=new Map;class Yx extends lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await Xx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xx(t,e){const n=eN(e),r=Zx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Jx(t,e){Ba.set(t._key(),e)}function Zx(t){return _n(t._redirectPersistence)}function eN(t){return ja(Qx,t.config.apiKey,t.name)}async function tN(t,e,n=!1){const r=bu(t),i=aw(r,e),o=await new Yx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=10*60*1e3;class rN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gg(e))}saveEventToCache(e){this.cachedEventUids.add(Gg(e)),this.lastProcessedEventTime=Date.now()}}function Gg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e={}){return $u(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aN=/^https?/;async function lN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sN(t);for(const n of e)try{if(uN(n))return}catch{}fn(t,"unauthorized-domain")}function uN(t){const e=Sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aN.test(n))return!1;if(oN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=new bo(3e4,6e4);function qg(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hN(t){return new Promise((e,n)=>{var r,i,s;function o(){qg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qg(),n(cn(t,"network-request-failed"))},timeout:cN.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const a=Hx("iframefcb");return hn()[a]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Bx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function dN(t){return Ha=Ha||hN(t),Ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new bo(5e3,15e3),pN="__/auth/iframe",mN="emulator/auth/iframe",gN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vN(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sp(e,mN):`https://${t.config.authDomain}/${pN}`,r={apiKey:e.apiKey,appName:t.name,v:Lo},i=yN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function wN(t){const e=await dN(t),n=hn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:vN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),a=hn().setTimeout(()=>{s(o)},fN.get());function l(){hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SN=500,_N=600,kN="_blank",TN="http://localhost";class Qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IN(t,e,n,r=SN,i=_N){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},EN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ft().toLowerCase();n&&(a=B1(u)?kN:n),j1(u)&&(e=e||TN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(hx(u)&&a!=="_self")return CN(e||"",a),new Qg(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Qg(h)}function CN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="__/auth/handler",xN="emulator/auth/handler";function Yg(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lo,eventId:i};if(e instanceof lp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$C(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Mo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${NN(t)}?${$o(a).slice(1)}`}function NN({config:t}){return t.emulator?sp(t,xN):`https://${t.authDomain}/${AN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="webStorageSupport";class RN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nw,this._completeRedirectFn=tN,this._overrideRedirectResult=Jx}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Yg(e,n,r,Sd(),i);return IN(e,o,up())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Dx(Yg(e,n,r,Sd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wN(e),r=new rN(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jc,{type:Jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q1()||ap()||Lu()}}const PN=RN;var Xg="@firebase/auth",Jg="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $N(t){Bi(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{W(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q1(t)},c=new mx(a,l,u);return KA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bi(new Gr("auth-internal",e=>{const n=bu(e.getProvider("auth").getImmediate());return(r=>new DN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Xg,Jg,ON(t)),cr(Xg,Jg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=5*60,bN=A1("authIdTokenMaxAge")||LN;let Zg=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bN)return;const i=n==null?void 0:n.token;Zg!==i&&(Zg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function UN(t=P1()){const e=np(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WA(t,{popupRedirectResolver:PN,persistence:[zx,Nx,nw]}),r=A1("authTokenSyncURL");if(r){const s=MN(r);Tx(n,s,()=>s(n.currentUser)),kx(n,o=>s(o))}const i=C1("auth");return i&&gx(n,`http://${i}`),n}$N("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function FN(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function VN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _i=function(){return _i=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_i.apply(this,arguments)},cw=function(t){return{loading:t==null,value:t}},zN=function(){return function(t,e){switch(e.type){case"error":return _i(_i({},t),{error:e.error,loading:!1,value:void 0});case"reset":return cw(e.defaultValue);case"value":return _i(_i({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},jN=function(t){var e=t?t():void 0,n=k.useReducer(zN(),cw(e)),r=n[0],i=n[1],s=k.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=k.useCallback(function(l){i({type:"error",error:l})},[]),a=k.useCallback(function(l){i({type:"value",value:l})},[]);return k.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Fu=function(t,e){var n=jN(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return k.useEffect(function(){var l=Ix(t,function(u){return FN(void 0,void 0,void 0,function(){var c;return VN(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]},BN="firebase",HN="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(BN,HN,"app");var WN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,hp=hp||{},K=WN||self;function Ol(){}function Vu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KN(t){return Object.prototype.hasOwnProperty.call(t,Zc)&&t[Zc]||(t[Zc]=++GN)}var Zc="closure_uid_"+(1e9*Math.random()>>>0),GN=0;function qN(t,e,n){return t.call.apply(t.bind,arguments)}function QN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=qN:ct=QN,ct.apply(null,arguments)}function Sa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function kr(){this.s=this.s,this.o=this.o}var YN=0;kr.prototype.s=!1;kr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),YN!=0)&&KN(this)};kr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ey(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var XN=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Ol,e),K.removeEventListener("test",Ol,e)}catch{}return t}();function $l(t){return/^[\s\xa0]*$/.test(t)}var ty=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function eh(t,e){return t<e?-1:t>e?1:0}function zu(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return zu().indexOf(t)!=-1}function fp(t){return fp[" "](t),t}fp[" "]=Ol;function JN(t){var e=tR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ZN=an("Opera"),Wi=an("Trident")||an("MSIE"),dw=an("Edge"),kd=dw||Wi,fw=an("Gecko")&&!(zu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),eR=zu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function pw(){var t=K.document;return t?t.documentMode:void 0}var Ll;e:{var th="",nh=function(){var t=zu();if(fw)return/rv:([^\);]+)(\)|;)/.exec(t);if(dw)return/Edge\/([\d\.]+)/.exec(t);if(Wi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eR)return/WebKit\/(\S+)/.exec(t);if(ZN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(nh&&(th=nh?nh[1]:""),Wi){var rh=pw();if(rh!=null&&rh>parseFloat(th)){Ll=String(rh);break e}}Ll=th}var tR={};function nR(){return JN(function(){let t=0;const e=ty(String(Ll)).split("."),n=ty("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=eh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||eh(i[2].length==0,s[2].length==0)||eh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Td;if(K.document&&Wi){var ny=pw();Td=ny||parseInt(Ll,10)||void 0}else Td=void 0;var rR=Td;function mo(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fw){e:{try{fp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mo.X.h.call(this)}}tt(mo,ht);var iR={2:"touch",3:"pen",4:"mouse"};mo.prototype.h=function(){mo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vo="closure_listenable_"+(1e6*Math.random()|0),sR=0;function oR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++sR,this.ba=this.ea=!1}function ju(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mw(t){const e={};for(const n in t)e[n]=t[n];return e}const ry="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ry.length;s++)n=ry[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bu(t){this.src=t,this.g={},this.h=0}Bu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Cd(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new oR(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Id(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=hw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ju(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var mp="closure_lm_"+(1e6*Math.random()|0),ih={};function yw(t,e,n,r,i){if(r&&r.once)return ww(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yw(t,e[s],n,r,i);return null}return n=vp(n),t&&t[Vo]?t.N(e,n,Fo(r)?!!r.capture:!!r,i):vw(t,e,n,!1,r,i)}function vw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fo(i)?!!i.capture:!!i,a=yp(t);if(a||(t[mp]=a=new Bu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=aR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)XN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Sw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aR(){function t(n){return e.call(t.src,t.listener,n)}const e=lR;return t}function ww(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ww(t,e[s],n,r,i);return null}return n=vp(n),t&&t[Vo]?t.O(e,n,Fo(r)?!!r.capture:!!r,i):vw(t,e,n,!0,r,i)}function Ew(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ew(t,e[s],n,r,i);else r=Fo(r)?!!r.capture:!!r,n=vp(n),t&&t[Vo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Cd(s,n,r,i),-1<n&&(ju(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cd(e,n,r,i)),(n=-1<t?e[t]:null)&&gp(n))}function gp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Vo])Id(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Sw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yp(e))?(Id(n,t),n.h==0&&(n.src=null,e[mp]=null)):ju(t)}}}function Sw(t){return t in ih?ih[t]:ih[t]="on"+t}function lR(t,e){if(t.ba)t=!0;else{e=new mo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gp(t),t=n.call(r,e)}return t}function yp(t){return t=t[mp],t instanceof Bu?t:null}var sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function vp(t){return typeof t=="function"?t:(t[sh]||(t[sh]=function(e){return t.handleEvent(e)}),t[sh])}function He(){kr.call(this),this.i=new Bu(this),this.P=this,this.I=null}tt(He,kr);He.prototype[Vo]=!0;He.prototype.removeEventListener=function(t,e,n,r){Ew(this,t,e,n,r)};function Ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),gw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_a(o,r,!0,e)&&i}if(o=e.g=t,i=_a(o,r,!0,e)&&i,i=_a(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_a(o,r,!1,e)&&i}He.prototype.M=function(){if(He.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ju(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _a(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Id(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wp=K.JSON.stringify;function uR(){var t=Tw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cR{constructor(){this.h=this.g=null}add(e,n){const r=_w.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _w=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hR,t=>t.reset());class hR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dR(t){K.setTimeout(()=>{throw t},0)}function kw(t,e){Ad||fR(),xd||(Ad(),xd=!0),Tw.add(t,e)}var Ad;function fR(){var t=K.Promise.resolve(void 0);Ad=function(){t.then(pR)}}var xd=!1,Tw=new cR;function pR(){for(var t;t=uR();){try{t.h.call(t.g)}catch(n){dR(n)}var e=_w;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xd=!1}function Hu(t,e){He.call(this),this.h=t||1,this.g=e||K,this.j=ct(this.lb,this),this.l=Date.now()}tt(Hu,He);b=Hu.prototype;b.ca=!1;b.R=null;b.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ze(this,"tick"),this.ca&&(Ep(this),this.start()))}};b.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ep(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}b.M=function(){Hu.X.M.call(this),Ep(this),delete this.g};function Sp(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Iw(t){t.g=Sp(()=>{t.g=null,t.i&&(t.i=!1,Iw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mR extends kr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Iw(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(t){kr.call(this),this.h=t,this.g={}}tt(go,kr);var iy=[];function Cw(t,e,n,r){Array.isArray(n)||(n&&(iy[0]=n.toString()),n=iy);for(var i=0;i<n.length;i++){var s=yw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Aw(t){pp(t.g,function(e,n){this.g.hasOwnProperty(n)&&gp(e)},t),t.g={}}go.prototype.M=function(){go.X.M.call(this),Aw(this)};go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wu(){this.g=!0}Wu.prototype.Aa=function(){this.g=!1};function gR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function yR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ki(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wR(t,n)+(r?" "+r:"")})}function vR(t,e){t.info(function(){return"TIMEOUT: "+e})}Wu.prototype.info=function(){};function wR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wp(n)}catch{return e}}var ni={},sy=null;function Ku(){return sy=sy||new He}ni.Pa="serverreachability";function xw(t){ht.call(this,ni.Pa,t)}tt(xw,ht);function yo(t){const e=Ku();Ze(e,new xw(e))}ni.STAT_EVENT="statevent";function Nw(t,e){ht.call(this,ni.STAT_EVENT,t),this.stat=e}tt(Nw,ht);function yt(t){const e=Ku();Ze(e,new Nw(e,t))}ni.Qa="timingevent";function Rw(t,e){ht.call(this,ni.Qa,t),this.size=e}tt(Rw,ht);function zo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Gu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Pw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _p(){}_p.prototype.h=null;function oy(t){return t.h||(t.h=t.i())}function Dw(){}var jo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function kp(){ht.call(this,"d")}tt(kp,ht);function Tp(){ht.call(this,"c")}tt(Tp,ht);var Nd;function qu(){}tt(qu,_p);qu.prototype.g=function(){return new XMLHttpRequest};qu.prototype.i=function(){return{}};Nd=new qu;function Bo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new go(this),this.O=ER,t=kd?125:void 0,this.T=new Hu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ow}function Ow(){this.i=null,this.g="",this.h=!1}var ER=45e3,Rd={},bl={};b=Bo.prototype;b.setTimeout=function(t){this.O=t};function Pd(t,e,n){t.K=1,t.v=Yu(Pn(e)),t.s=n,t.P=!0,$w(t,null)}function $w(t,e){t.F=Date.now(),Ho(t),t.A=Pn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),jw(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Ow,t.g=uE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new mR(ct(t.La,t,t.g),t.N)),Cw(t.S,t.g,"readystatechange",t.ib),e=t.H?mw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),yo(),gR(t.j,t.u,t.A,t.m,t.U,t.s)}b.ib=function(t){t=t.target;const e=this.L;e&&kn(t)==3?e.l():this.La(t)};b.La=function(t){try{if(t==this.g)e:{const c=kn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||kd||this.g&&(this.h.h||this.g.fa()||cy(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?yo(3):yo(2)),Qu(this);var n=this.g.aa();this.Y=n;t:if(Lw(this)){var r=cy(this.g);t="";var i=r.length,s=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Vs(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yR(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$l(a)){var u=a;break t}}u=null}if(n=u)ki(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dd(this,n);else{this.i=!1,this.o=3,yt(12),Dr(this),Vs(this);break e}}this.P?(bw(this,c,o),kd&&this.i&&c==3&&(Cw(this.S,this.T,"tick",this.hb),this.T.start())):(ki(this.j,this.m,o,null),Dd(this,o)),c==4&&Dr(this),this.i&&!this.I&&(c==4?sE(this.l,this):(this.i=!1,Ho(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),Dr(this),Vs(this)}}}catch{}finally{}};function Lw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function bw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=SR(t,n),i==bl){e==4&&(t.o=4,yt(14),r=!1),ki(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Rd){t.o=4,yt(15),ki(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ki(t.j,t.m,i,null),Dd(t,i);Lw(t)&&i!=bl&&i!=Rd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pp(e),e.K=!0,yt(11))):(ki(t.j,t.m,n,"[Invalid Chunked Response]"),Dr(t),Vs(t))}b.hb=function(){if(this.g){var t=kn(this.g),e=this.g.fa();this.C<e.length&&(Qu(this),bw(this,t,e),this.i&&t!=4&&Ho(this))}};function SR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?bl:(n=Number(e.substring(n,r)),isNaN(n)?Rd:(r+=1,r+n>e.length?bl:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,Dr(this)};function Ho(t){t.V=Date.now()+t.O,Mw(t,t.O)}function Mw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zo(ct(t.gb,t),e)}function Qu(t){t.B&&(K.clearTimeout(t.B),t.B=null)}b.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vR(this.j,this.A),this.K!=2&&(yo(),yt(17)),Dr(this),this.o=2,Vs(this)):Mw(this,this.V-t)};function Vs(t){t.l.G==0||t.I||sE(t.l,t)}function Dr(t){Qu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ep(t.T),Aw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Dd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Od(n.h,t))){if(!t.J&&Od(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fl(n),Zu(n);else break e;Rp(n),yt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=zo(ct(n.cb,n),6e3));if(1>=Ww(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Or(n,11)}else if((t.J||n.g==t)&&Fl(n),!$l(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ip(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,we(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=lE(r,r.H?r.ka:null,r.V),o.J){Kw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Qu(a),Ho(a)),r.g=o}else rE(r);0<n.i.length&&ec(n)}else u[0]!="stop"&&u[0]!="close"||Or(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Or(n,7):Np(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}yo(4)}catch{}}function _R(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function kR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Uw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kR(t),r=_R(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Fw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ur(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ur){this.h=e!==void 0?e:t.h,Ml(this,t.j),this.s=t.s,this.g=t.g,Ul(this,t.m),this.l=t.l,e=t.i;var n=new vo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ay(this,n),this.o=t.o}else t&&(n=String(t).match(Fw))?(this.h=!!e,Ml(this,n[1]||"",!0),this.s=Cs(n[2]||""),this.g=Cs(n[3]||"",!0),Ul(this,n[4]),this.l=Cs(n[5]||"",!0),ay(this,n[6]||"",!0),this.o=Cs(n[7]||"")):(this.h=!!e,this.i=new vo(null,this.h))}Ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(As(e,ly,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(As(e,ly,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(As(n,n.charAt(0)=="/"?AR:CR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",As(n,NR)),t.join("")};function Pn(t){return new Ur(t)}function Ml(t,e,n){t.j=n?Cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ul(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ay(t,e,n){e instanceof vo?(t.i=e,RR(t.i,t.h)):(n||(e=As(e,xR)),t.i=new vo(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Yu(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function As(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ly=/[#\/\?@]/g,CR=/[#\?:]/g,AR=/[#\?]/g,xR=/[#\?@]/g,NR=/#/g;function vo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&TR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=vo.prototype;b.add=function(t,e){Tr(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vw(t,e){Tr(t),e=ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zw(t,e){return Tr(t),e=ss(t,e),t.g.has(e)}b.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.oa=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.W=function(t){Tr(this);let e=[];if(typeof t=="string")zw(this,t)&&(e=e.concat(this.g.get(ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Tr(this),this.i=null,t=ss(this,t),zw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function jw(t,e,n){Vw(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),dp(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RR(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Vw(this,r),jw(this,i,n))},t)),t.j=e}var PR=class{constructor(e,n){this.h=e,this.g=n}};function Bw(t){this.l=t||DR,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var DR=10;function Hw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ww(t){return t.h?1:t.g?t.g.size:0}function Od(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ip(t,e){t.g?t.g.add(e):t.h=e}function Kw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Bw.prototype.cancel=function(){if(this.i=Gw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dp(t.i)}function Cp(){}Cp.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Cp.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function OR(){this.g=new Cp}function $R(t,e,n){const r=n||"";try{Uw(t,function(i,s){let o=i;Fo(i)&&(o=wp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function LR(t,e){const n=new Wu;if(K.Image){const r=new Image;r.onload=Sa(ka,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Sa(ka,n,r,"TestLoadImage: error",!1,e),r.onabort=Sa(ka,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Sa(ka,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ka(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Wo(t){this.l=t.ac||null,this.j=t.jb||!1}tt(Wo,_p);Wo.prototype.g=function(){return new Xu(this.l,this.j)};Wo.prototype.i=function(t){return function(){return t}}({});function Xu(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ap,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Xu,He);var Ap=0;b=Xu.prototype;b.open=function(t,e){if(this.readyState!=Ap)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wo(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=Ap};b.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function qw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}b.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ko(this):wo(this),this.readyState==3&&qw(this)}};b.Va=function(t){this.g&&(this.response=this.responseText=t,Ko(this))};b.Ua=function(t){this.g&&(this.response=t,Ko(this))};b.ga=function(){this.g&&Ko(this)};function Ko(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wo(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bR=K.JSON.parse;function Ce(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qw,this.K=this.L=!1}tt(Ce,He);var Qw="",MR=/^https?$/i,UR=["POST","PUT"];b=Ce.prototype;b.Ka=function(t){this.L=t};b.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nd.g(),this.C=this.u?oy(this.u):oy(Nd),this.g.onreadystatechange=ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){uy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=hw(UR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jw(this),0<this.B&&((this.K=FR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.qa,this)):this.A=Sp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){uy(this,s)}};function FR(t){return Wi&&nR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.qa=function(){typeof hp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function uy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yw(t),Ju(t)}function Yw(t){t.D||(t.D=!0,Ze(t,"complete"),Ze(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),Ju(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ju(this,!0)),Ce.X.M.call(this)};b.Ha=function(){this.s||(this.F||this.v||this.l?Xw(this):this.fb())};b.fb=function(){Xw(this)};function Xw(t){if(t.h&&typeof hp<"u"&&(!t.C[1]||kn(t)!=4||t.aa()!=2)){if(t.v&&kn(t)==4)Sp(t.Ha,0,t);else if(Ze(t,"readystatechange"),kn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Fw)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!MR.test(i?i.toLowerCase():"")}n=r}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Yw(t)}}finally{Ju(t)}}}}function Ju(t,e){if(t.g){Jw(t);const n=t.g,r=t.C[0]?Ol:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function kn(t){return t.g?t.g.readyState:0}b.aa=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};b.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bR(e)}};function cy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Qw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ea=function(){return this.m};b.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zw(t){let e="";return pp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Zw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function eE(t){this.Ca=0,this.i=[],this.j=new Wu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ss("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ss("baseRetryDelayMs",5e3,t),this.bb=Ss("retryDelaySeedMs",1e4,t),this.$a=Ss("forwardChannelMaxRetries",2,t),this.ta=Ss("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Bw(t&&t.concurrentRequestLimit),this.Fa=new OR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}b=eE.prototype;b.ma=8;b.G=1;function Np(t){if(tE(t),t.G==3){var e=t.U++,n=Pn(t.F);we(n,"SID",t.I),we(n,"RID",e),we(n,"TYPE","terminate"),Go(t,n),e=new Bo(t,t.j,e,void 0),e.K=2,e.v=Yu(Pn(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=uE(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ho(e)}aE(t)}function Zu(t){t.g&&(Pp(t),t.g.cancel(),t.g=null)}function tE(t){Zu(t),t.u&&(K.clearTimeout(t.u),t.u=null),Fl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function ec(t){Hw(t.h)||t.m||(t.m=!0,kw(t.Ja,t),t.C=0)}function VR(t,e){return Ww(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=zo(ct(t.Ja,t,e),oE(t,t.C)),t.C++,!0)}b.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Bo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=mw(s),gw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=nE(this,i,e),n=Pn(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),Go(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Zw(s)))+"&"+e:this.o&&xp(n,this.o,s)),Ip(this.h,i),this.Ya&&we(n,"TYPE","init"),this.O?(we(n,"$req",e),we(n,"SID","null"),i.Z=!0,Pd(i,n,null)):Pd(i,n,e),this.G=2}}else this.G==3&&(t?hy(this,t):this.i.length==0||Hw(this.h)||hy(this))};function hy(t,e){var n;e?n=e.m:n=t.U++;const r=Pn(t.F);we(r,"SID",t.I),we(r,"RID",n),we(r,"AID",t.T),Go(t,r),t.o&&t.s&&xp(r,t.o,t.s),n=new Bo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=nE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ip(t.h,n),Pd(n,r,e)}function Go(t,e){t.ia&&pp(t.ia,function(n,r){we(e,r,n)}),t.l&&Uw({},function(n,r){we(e,r,n)})}function nE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ct(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{$R(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function rE(t){t.g||t.u||(t.Z=1,kw(t.Ia,t),t.A=0)}function Rp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zo(ct(t.Ia,t),oE(t,t.A)),t.A++,!0)}b.Ia=function(){if(this.u=null,iE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zo(ct(this.eb,this),t)}};b.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,yt(10),Zu(this),iE(this))};function Pp(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function iE(t){t.g=new Bo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Pn(t.sa);we(e,"RID","rpc"),we(e,"SID",t.I),we(e,"CI",t.L?"0":"1"),we(e,"AID",t.T),we(e,"TYPE","xmlhttp"),Go(t,e),t.o&&t.s&&xp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Yu(Pn(e)),n.s=null,n.P=!0,$w(n,t)}b.cb=function(){this.v!=null&&(this.v=null,Zu(this),Rp(this),yt(19))};function Fl(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function sE(t,e){var n=null;if(t.g==e){Fl(t),Pp(t),t.g=null;var r=2}else if(Od(t.h,e))n=e.D,Kw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ku(),Ze(r,new Rw(r,n)),ec(t)}else rE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&VR(t,e)||r==2&&Rp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Or(t,5);break;case 4:Or(t,10);break;case 3:Or(t,6);break;default:Or(t,2)}}}function oE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Or(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ct(t.kb,t);n||(n=new Ur("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Ml(n,"https"),Yu(n)),LR(n.toString(),r)}else yt(2);t.G=0,t.l&&t.l.va(e),aE(t),tE(t)}b.kb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function aE(t){if(t.G=0,t.la=[],t.l){const e=Gw(t.h);(e.length!=0||t.i.length!=0)&&(ey(t.la,e),ey(t.la,t.i),t.h.i.length=0,dp(t.i),t.i.length=0),t.l.ua()}}function lE(t,e,n){var r=n instanceof Ur?Pn(n):new Ur(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ul(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ur(null,void 0);r&&Ml(s,r),e&&(s.g=e),i&&Ul(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&we(r,n,e),we(r,"VER",t.ma),Go(t,r),r}function uE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new Wo({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function cE(){}b=cE.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Ra=function(){};function Vl(){if(Wi&&!(10<=Number(rR)))throw Error("Environmental error: no available transport.")}Vl.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){He.call(this),this.g=new eE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$l(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$l(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new os(this)}tt(Ot,He);Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=lE(t,null,t.V),ec(t)};Ot.prototype.close=function(){Np(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wp(t),t=n);e.i.push(new PR(e.ab++,t)),e.G==3&&ec(e)};Ot.prototype.M=function(){this.g.l=null,delete this.j,Np(this.g),delete this.g,Ot.X.M.call(this)};function hE(t){kp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(hE,kp);function dE(){Tp.call(this),this.status=1}tt(dE,Tp);function os(t){this.g=t}tt(os,cE);os.prototype.xa=function(){Ze(this.g,"a")};os.prototype.wa=function(t){Ze(this.g,new hE(t))};os.prototype.va=function(t){Ze(this.g,new dE)};os.prototype.ua=function(){Ze(this.g,"b")};Vl.prototype.createWebChannel=Vl.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Gu.NO_ERROR=0;Gu.TIMEOUT=8;Gu.HTTP_ERROR=6;Pw.COMPLETE="complete";Dw.EventType=jo;jo.OPEN="a";jo.CLOSE="b";jo.ERROR="c";jo.MESSAGE="d";He.prototype.listen=He.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var zR=function(){return new Vl},jR=function(){return Ku()},oh=Gu,BR=Pw,HR=ni,dy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},WR=Wo,Ta=Dw,KR=Ce;const fy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new ep("@firebase/firestore");function py(){return Yr.logLevel}function M(t,...e){if(Yr.logLevel<=ie.DEBUG){const n=e.map(Dp);Yr.debug(`Firestore (${as}): ${t}`,...n)}}function Dn(t,...e){if(Yr.logLevel<=ie.ERROR){const n=e.map(Dp);Yr.error(`Firestore (${as}): ${t}`,...n)}}function $d(t,...e){if(Yr.logLevel<=ie.WARN){const n=e.map(Dp);Yr.warn(`Firestore (${as}): ${t}`,...n)}}function Dp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function me(t,e){t||j()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class qR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QR{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new fE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ot(e)}}class YR{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class XR{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new YR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZR{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new JR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Me(0,0))}static max(){return new q(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Eo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const tP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Eo{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return tP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(Ee.fromString(e))}static fromName(e){return new U(Ee.fromString(e).popFirst(5))}static empty(){return new U(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new Ee(e.slice()))}}function nP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new gr(i,U.empty(),e)}function rP(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(q.min(),U.empty(),-1)}static max(){return new gr(q.max(),U.empty(),-1)}}function iP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==sP)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Op.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class So{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new So("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return t==null}function zl(t){return t===0&&1/t==-1/0}function lP(t){return typeof t=="number"&&Number.isInteger(t)&&!zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new uP("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const cP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(me(!!t),typeof t=="string"){let e=0;const n=cP.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gi(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yE(t){const e=t.mapValue.fields.__previous_value__;return gE(e)?yE(e):e}function _o(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gE(t)?4:hP(t)?9007199254740991:10:j()}function pn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=yr(r.timestampValue),o=yr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Gi(r.bytesValue).isEqual(Gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Re(r.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(r.geoPointValue.longitude)===Re(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Re(r.integerValue)===Re(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Re(r.doubleValue),o=Re(i.doubleValue);return s===o?zl(s)===zl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(my(s)!==my(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!pn(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function ko(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Re(i.integerValue||i.doubleValue),a=Re(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gy(t.timestampValue,e.timestampValue);case 4:return gy(_o(t),_o(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Gi(i),a=Gi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ae(o[l],a[l]);if(u!==0)return u}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ae(Re(i.latitude),Re(s.latitude));return o!==0?o:ae(Re(i.longitude),Re(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=qi(o[l],a[l]);if(u)return u}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ia.mapValue&&s===Ia.mapValue)return 0;if(i===Ia.mapValue)return 1;if(s===Ia.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ae(a[c],u[c]);if(h!==0)return h;const f=qi(o[a[c]],l[u[c]]);if(f!==0)return f}return ae(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function gy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=yr(t),r=yr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Qi(t){return Ld(t)}function Ld(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=yr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ld(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ld(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function bd(t){return!!t&&"integerValue"in t}function $p(t){return!!t&&"arrayValue"in t}function yy(t){return!!t&&"nullValue"in t}function vy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.position=e,this.inclusive=n}}function wy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ey(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{}class Le extends vE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fP(e,n,r):n==="array-contains"?new gP(e,r):n==="in"?new yP(e,r):n==="not-in"?new vP(e,r):n==="array-contains-any"?new wP(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pP(e,r):new mP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mn extends vE{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new mn(e,n)}matches(e){return wE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function wE(t){return t.op==="and"}function EE(t){return dP(t)&&wE(t)}function dP(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Md(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(EE(t))return t.filters.map(e=>Md(e)).join(",");{const e=t.filters.map(n=>Md(n)).join(",");return`${t.op}(${e})`}}function SE(t,e){return t instanceof Le?function(n,r){return r instanceof Le&&n.op===r.op&&n.field.isEqual(r.field)&&pn(n.value,r.value)}(t,e):t instanceof mn?function(n,r){return r instanceof mn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&SE(s,r.filters[o]),!0):!1}(t,e):void j()}function _E(t){return t instanceof Le?function(e){return`${e.field.canonicalString()} ${e.op} ${Qi(e.value)}`}(t):t instanceof mn?function(e){return e.op.toString()+" {"+e.getFilters().map(_E).join(" ,")+"}"}(t):"Filter"}class fP extends Le{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class pP extends Le{constructor(e,n){super(e,"in",n),this.keys=kE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mP extends Le{constructor(e,n){super(e,"not-in",n),this.keys=kE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class gP extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $p(n)&&ko(n.arrayValue,this.value)}}class yP extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ko(this.value.arrayValue,n)}}class vP extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ko(this.value.arrayValue,n)}}class wP extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$p(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ko(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n="asc"){this.field=e,this.dir=n}}function EP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sy(this.data.getIterator())}getIteratorFrom(e){return new Sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new Ue(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=zs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(zs(this.value))}}function TE(t){const e=[];return ls(t.fields,(n,r)=>{const i=new ut([n]);if(Wa(r)){const s=TE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,q.min(),q.min(),q.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,q.min(),q.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,q.min(),q.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function _y(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SP(t,e,n,r,i,s,o)}function Lp(t){const e=Q(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Md(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),e._t=n}return e._t}function bp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ey(t.startAt,e.startAt)&&Ey(t.endAt,e.endAt)}function Ud(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function _P(t,e,n,r,i,s,o,a){return new nc(t,e,n,r,i,s,o,a)}function IE(t){return new nc(t)}function ky(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kP(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function TP(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function IP(t){return t.collectionGroup!==null}function Di(t){const e=Q(t);if(e.wt===null){e.wt=[];const n=TP(e),r=kP(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new js(n)),e.wt.push(new js(ut.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new js(ut.keyField(),s))}}}return e.wt}function On(t){const e=Q(t);if(!e.gt)if(e.limitType==="F")e.gt=_y(e.path,e.collectionGroup,Di(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Di(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new js(s.field,o))}const r=e.endAt?new jl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new jl(e.startAt.position,e.startAt.inclusive):null;e.gt=_y(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function Fd(t,e,n){return new nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return bp(On(t),On(e))&&t.limitType===e.limitType}function CE(t){return`${Lp(On(t))}|lt:${t.limitType}`}function Vd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>_E(r)).join(", ")}]`),tc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),`Target(${n})`}(On(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Di(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=wy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Di(n),r)||n.endAt&&!function(i,s,o){const a=wy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Di(n),r))}(t,e)}function CP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AE(t){return(e,n)=>{let r=!1;for(const i of Di(t)){const s=AP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AP(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?qi(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zl(e)?"-0":e}}function NE(t){return{integerValue:""+t}}function xP(t,e){return lP(e)?NE(e):xE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this._=void 0}}function NP(t,e,n){return t instanceof Bl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof To?PE(t,e):t instanceof Io?DE(t,e):function(r,i){const s=RE(r,i),o=Ty(s)+Ty(r.It);return bd(s)&&bd(r.It)?NE(o):xE(r.Tt,o)}(t,e)}function RP(t,e,n){return t instanceof To?PE(t,e):t instanceof Io?DE(t,e):n}function RE(t,e){return t instanceof Hl?bd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Bl extends sc{}class To extends sc{constructor(e){super(),this.elements=e}}function PE(t,e){const n=OE(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends sc{constructor(e){super(),this.elements=e}}function DE(t,e){let n=OE(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Hl extends sc{constructor(e,n){super(),this.Tt=e,this.It=n}}function Ty(t){return Re(t.integerValue||t.doubleValue)}function OE(t){return $p(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof To&&r instanceof To||n instanceof Io&&r instanceof Io?Ki(n.elements,r.elements,pn):n instanceof Hl&&r instanceof Hl?pn(n.It,r.It):n instanceof Bl&&r instanceof Bl}(t.transform,e.transform)}class DP{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ka(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function $E(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bE(t.key,In.none()):new Yo(t.key,t.data,In.none());{const n=t.data,r=Ft.empty();let i=new Ue(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ri(t.key,r,new Zt(i.toArray()),In.none())}}function OP(t,e,n){t instanceof Yo?function(r,i,s){const o=r.value.clone(),a=Cy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(r,i,s){if(!Ka(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Cy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(LE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof Yo?function(i,s,o,a){if(!Ka(i.precondition,s))return o;const l=i.value.clone(),u=Ay(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ri?function(i,s,o,a){if(!Ka(i.precondition,s))return o;const l=Ay(i.fieldTransforms,a,s),u=s.data;return u.setAll(LE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ka(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function $P(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=RE(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function Iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ki(n,r,(i,s)=>PP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends oc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends oc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cy(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,RP(o,a,n[i]))}return r}function Ay(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,NP(s,o,e))}return r}class bE extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LP extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,te;function MP(t){switch(t){default:return j();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function ME(t){if(t===void 0)return Dn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ne.OK:return I.OK;case Ne.CANCELLED:return I.CANCELLED;case Ne.UNKNOWN:return I.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return I.INTERNAL;case Ne.UNAVAILABLE:return I.UNAVAILABLE;case Ne.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ne.NOT_FOUND:return I.NOT_FOUND;case Ne.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ne.ABORTED:return I.ABORTED;case Ne.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ne.DATA_LOSS:return I.DATA_LOSS;default:return j()}}(te=Ne||(Ne={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return mE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=new Fe(U.comparator);function $n(){return UP}const UE=new Fe(U.comparator);function xs(...t){let e=UE;for(const n of t)e=e.insert(n.key,n);return e}function FE(t){let e=UE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return Hs()}function VE(){return Hs()}function Hs(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const FP=new Fe(U.comparator),VP=new Ue(U.comparator);function J(...t){let e=VP;for(const n of t)e=e.add(n);return e}const zP=new Ue(ae);function zE(){return zP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(q.min(),i,zE(),$n(),J())}}class Xo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class jE{constructor(e,n){this.targetId=e,this.Rt=n}}class BE{constructor(e,n,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xy{constructor(){this.bt=0,this.vt=Ry(),this.Pt=pt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=J(),n=J(),r=J();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new Xo(this.Pt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=Ry()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class jP{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=$n(),this.Kt=Ny(),this.Gt=new Ue(ae)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.$t(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.$t(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(Ud(s))if(r===0){const o=new U(s.path);this.zt(n,o,lt.newNoDocument(o,q.min()))}else me(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Ud(a.target)){const l=new U(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,lt.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=J();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new ac(e,n,this.Gt,this.Ut,r);return this.Ut=$n(),this.Kt=Ny(),this.Gt=new Ue(ae),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new xy,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ue(ae),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new xy),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ny(){return new Fe(U.comparator)}function Ry(){return new Fe(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),WP=(()=>({and:"AND",or:"OR"}))();class KP{constructor(e,n){this.databaseId=e,this.yt=n}}function Wl(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HE(t,e){return t.yt?e.toBase64():e.toUint8Array()}function GP(t,e){return Wl(t,e.toTimestamp())}function dn(t){return me(!!t),q.fromTimestamp(function(e){const n=yr(e);return new Me(n.seconds,n.nanos)}(t))}function Mp(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function WE(t){const e=Ee.fromString(t);return me(QE(e)),e}function zd(t,e){return Mp(t.databaseId,e.path)}function ah(t,e){const n=WE(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(KE(n))}function jd(t,e){return Mp(t.databaseId,e)}function qP(t){const e=WE(t);return e.length===4?Ee.emptyPath():KE(e)}function Bd(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KE(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Py(t,e,n){return{name:zd(t,e),fields:n.value.mapValue.fields}}function QP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(me(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:ME(l.code);return new F(u,l.message||"")}(o);n=new BE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ah(t,r.document.name),s=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):q.min(),a=new Ft({mapValue:{fields:r.document.fields}}),l=lt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ga(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ah(t,r.document),s=r.readTime?dn(r.readTime):q.min(),o=lt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ah(t,r.document),s=r.removedTargetIds||[];n=new Ga([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new bP(i),o=r.targetId;n=new jE(o,s)}}return n}function YP(t,e){let n;if(e instanceof Yo)n={update:Py(t,e.key,e.value)};else if(e instanceof bE)n={delete:zd(t,e.key)};else if(e instanceof ri)n={update:Py(t,e.key,e.data),updateMask:sD(e.fieldMask)};else{if(!(e instanceof LP))return j();n={verify:zd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Bl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof To)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Io)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hl)return{fieldPath:s.field.canonicalString(),increment:o.It};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:GP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function XP(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?dn(r.updateTime):dn(i);return s.isEqual(q.min())&&(s=dn(i)),new DP(s,r.transformResults||[])}(n,e))):[]}function JP(t,e){return{documents:[jd(t,e.path)]}}function ZP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return qE(mn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ai(c.field),direction:nD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||tc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function eD(t){let e=qP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=GE(c);return h instanceof mn&&EE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new js(li(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,tc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new jl(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new jl(f,h)}(n.endAt)),_P(e,i,o,s,a,"F",l,u)}function tD(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function GE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=li(e.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=li(e.unaryFilter.field);return Le.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=li(e.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=li(e.unaryFilter.field);return Le.create(s,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(e){return Le.create(li(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return mn.create(e.compositeFilter.filters.map(n=>GE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(t):j()}function nD(t){return BP[t]}function rD(t){return HP[t]}function iD(t){return WP[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return ut.fromServerFormat(t.fieldPath)}function qE(t){return t instanceof Le?function(e){if(e.op==="=="){if(vy(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NAN"}};if(yy(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vy(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NAN"}};if(yy(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(e.field),op:rD(e.op),value:e.value}}}(t):t instanceof mn?function(e){const n=e.getFilters().map(r=>qE(r));return n.length===1?n[0]:{compositeFilter:{op:iD(e.op),filters:n}}}(t):j()}function sD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function QE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&OP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=$E(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>Iy(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>Iy(n,r))}}class Up{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=FP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Up(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,i,s=q.min(),o=q.min(),a=pt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.oe=e}}function uD(t){const e=eD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.Ze=new hD}addToCollectionParentIndex(e,n){return this.Ze.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(gr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class hD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Yi(0)}static Sn(){return new Yi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,Zt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=xs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=$n();const o=Hs(),a=Hs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ri)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Bs(c.mutation,u,c.mutation.getFieldMask(),Me.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new fD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Hs();let i=new Fe((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Zt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=VE();c.forEach(f=>{if(!s.has(f)){const g=$E(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve($r());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(c=>({batchId:a,changes:FE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=xs();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new nc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,lt.newInvalidDocument(u)))});let o=xs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Bs(u.mutation,l,Zt.empty(),Me.now()),ic(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return C.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:dn(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:uD(r.bundledQuery),readTime:dn(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.overlays=new Fe(U.comparator),this.ss=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=$r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aD(n,r));let s=this.ss.get(n);s===void 0&&(s=J(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.rs=new Ue(ze.os),this.us=new Ue(ze.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new ze(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new ze(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new U(new Ee([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new U(new Ee([])),r=new ze(n,e),i=new ze(n,e+1);let s=J();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return U.comparator(e.key,n.key)||ae(e.gs,n.gs)}static cs(e,n){return ae(e.gs,n.gs)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ue(ze.os)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(ae);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),C.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new ze(new U(s),0);let a=new Ue(ae);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),C.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return C.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}bn(e){}containsKey(e,n){const r=new ze(n,0),i=this.ps.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.Rs=e,this.docs=new Fe(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||iP(rP(c),r)<=0||(i.has(c.key)||ic(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){j()}bs(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wD(this)}getSize(e){return C.resolve(this.size)}}class wD extends dD{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.persistence=e,this.vs=new us(n=>Lp(n),bp),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Fp,this.targetCount=0,this.Ss=Yi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ps&&(this.Ps=n),C.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.xn(n),C.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Op(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new ED(this),this.indexManager=new cD,this.remoteDocumentCache=function(r){return new vD(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new lD(n),this.Os=new mD(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new yD(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new _D(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Fs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}$s(e,n){return C.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class _D extends oP{constructor(e){super(),this.currentSequenceNumber=e}}class Vp{constructor(e){this.persistence=e,this.Bs=new Fp,this.Ls=null}static qs(e){return new Vp(e)}get Us(){if(this.Ls)return this.Ls;throw j()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),C.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Us,r=>{const i=U.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return C.or([()=>C.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Fi(e,n,i,r)).next(s=>s||this.$i(e,n))}Mi(e,n){if(ky(n))return C.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fd(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,Fd(n,null,"F")):this.qi(e,u,n,l)}))})))}Fi(e,n,r,i){return ky(n)||i.isEqual(q.min())?this.$i(e,n):this.Oi.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.$i(e,n):(py()<=ie.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vd(n)),this.qi(e,o,n,nP(i,-1)))})}Bi(e,n){let r=new Ue(AE(e));return n.forEach((i,s)=>{ic(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}$i(e,n){return py()<=ie.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Vd(n)),this.Oi.getDocumentsMatchingQuery(e,n,gr.min())}qi(e,n,r,i){return this.Oi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Fe(ae),this.Gi=new us(s=>Lp(s),bp),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pD(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function ID(t,e,n,r){return new TD(t,e,n,r)}async function YE(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function CD(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=C.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);me(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XE(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function AD(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(pt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,S){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(f,g,c)&&a.push(n.Ns.updateTargetData(s,g))});let l=$n(),u=J();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(xD(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(q.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(h=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function xD(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function ND(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RD(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new Fr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function Hd(t,e,n){const r=Q(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qo(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function Dy(t,e,n){const r=Q(t);let i=q.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Q(a),h=c.Gi.get(u);return h!==void 0?C.resolve(c.Ki.get(h)):c.Ns.getTargetData(l,u)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:J())).next(a=>(PD(r,CP(e),a),{documents:a,Yi:s})))}function PD(t,e,n){let r=t.Qi.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class Oy{constructor(){this.activeTargetIds=zE()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DD{constructor(){this.Ur=new Oy,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=this.fo(e,n);M("RestConnection","Sending: ",o,r);const a={};return this._o(a,i,s),this.wo(e,o,a,r).then(l=>(M("RestConnection","Received: ",l),l),l=>{throw $d("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+as,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=$D[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){return new Promise((s,o)=>{const a=new KR;a.setWithCredentials(!0),a.listenOnce(BR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case oh.NO_ERROR:const u=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(u)),s(u);break;case oh.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case oh.HTTP_ERROR:const c=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(v)>=0?v:I.UNKNOWN}(f.status);o(new F(g,f.message))}else o(new F(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(I.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}yo(e,n,r){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=zR(),o=jR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new WR({})),this._o(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");M("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const f=new LD({Yr:y=>{h?M("Connection","Not sending because WebChannel is closed:",y):(c||(M("Connection","Opening WebChannel transport."),u.open(),c=!0),M("Connection","WebChannel sending:",y),u.send(y))},Zr:()=>u.close()}),g=(y,v,S)=>{y.listen(v,p=>{try{S(p)}catch(d){setTimeout(()=>{throw d},0)}})};return g(u,Ta.EventType.OPEN,()=>{h||M("Connection","WebChannel transport opened.")}),g(u,Ta.EventType.CLOSE,()=>{h||(h=!0,M("Connection","WebChannel transport closed"),f.oo())}),g(u,Ta.EventType.ERROR,y=>{h||(h=!0,$d("Connection","WebChannel transport errored:",y),f.oo(new F(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ta.EventType.MESSAGE,y=>{var v;if(!h){const S=y.data[0];me(!!S);const p=S,d=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(d){M("Connection","WebChannel received error:",d);const m=d.status;let E=function(R){const P=Ne[R];if(P!==void 0)return ME(P)}(m),_=d.message;E===void 0&&(E=I.INTERNAL,_="Unknown error status: "+m+" with message "+d.message),h=!0,f.oo(new F(E,_)),u.close()}else M("Connection","WebChannel received:",S),f.uo(S)}}),g(o,HR.STAT_EVENT,y=>{y.stat===dy.PROXY?M("Connection","Detected buffering proxy"):y.stat===dy.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function lh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return new KP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new JE(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new F(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MD extends ZE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=QP(this.Tt,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?dn(s.readTime):q.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Bd(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=Ud(a)?{documents:JP(i,a)}:{query:ZP(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=HE(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(o.readTime=Wl(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=tD(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Bd(this.Tt),n.removeTarget=e,this.qo(n)}}class UD extends ZE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=XP(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.eu(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Bd(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YP(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(I.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class VD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Dn(n),this.cu=!1):M("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{ii(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Q(a);l.mu.add(4),await Jo(l),l.pu.set("Unknown"),l.mu.delete(4),await uc(l)}(this))})}),this.pu=new VD(r,i)}}async function uc(t){if(ii(t))for(const e of t.gu)await e(!0)}async function Jo(t){for(const e of t.gu)await e(!1)}function eS(t,e){const n=Q(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Hp(n)?Bp(n):cs(n).Mo()&&jp(n,e))}function tS(t,e){const n=Q(t),r=cs(n);n.wu.delete(e),r.Mo()&&nS(n,e),n.wu.size===0&&(r.Mo()?r.Bo():ii(n)&&n.pu.set("Unknown"))}function jp(t,e){t.Iu.Ft(e.targetId),cs(t).Jo(e)}function nS(t,e){t.Iu.Ft(e),cs(t).Yo(e)}function Bp(t){t.Iu=new jP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),cs(t).start(),t.pu.au()}function Hp(t){return ii(t)&&!cs(t).Oo()&&t.wu.size>0}function ii(t){return Q(t).mu.size===0}function rS(t){t.Iu=void 0}async function jD(t){t.wu.forEach((e,n)=>{jp(t,e)})}async function BD(t,e){rS(t),Hp(t)?(t.pu.fu(e),Bp(t)):t.pu.set("Unknown")}async function HD(t,e,n){if(t.pu.set("Online"),e instanceof BE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kl(t,r)}else if(e instanceof Ga?t.Iu.Qt(e):e instanceof jE?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(q.min()))try{const r=await XE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(pt.EMPTY_BYTE_STRING,l.snapshotVersion)),nS(i,a);const u=new Fr(l.target,a,1,l.sequenceNumber);jp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Kl(t,r)}}async function Kl(t,e,n){if(!Qo(e))throw e;t.mu.add(1),await Jo(t),t.pu.set("Offline"),n||(n=()=>XE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await uc(t)})}function iS(t,e){return e().catch(n=>Kl(t,n,e))}async function cc(t){const e=Q(t),n=vr(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;WD(e);)try{const i=await ND(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,KD(e,i)}catch(i){await Kl(e,i)}sS(e)&&oS(e)}function WD(t){return ii(t)&&t._u.length<10}function KD(t,e){t._u.push(e);const n=vr(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function sS(t){return ii(t)&&!vr(t).Oo()&&t._u.length>0}function oS(t){vr(t).start()}async function GD(t){vr(t).su()}async function qD(t){const e=vr(t);for(const n of t._u)e.tu(n.mutations)}async function QD(t,e,n){const r=t._u.shift(),i=Up.from(r,e,n);await iS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cc(t)}async function YD(t,e){e&&vr(t).Xo&&await async function(n,r){if(i=r.code,MP(i)&&i!==I.ABORTED){const s=n._u.shift();vr(n).$o(),await iS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await cc(n)}var i}(t,e),sS(t)&&oS(t)}async function Ly(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=ii(n);n.mu.add(3),await Jo(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await uc(n)}async function XD(t,e){const n=Q(t);e?(n.mu.delete(2),await uc(n)):e||(n.mu.add(2),await Jo(n),n.pu.set("Unknown"))}function cs(t){return t.Tu||(t.Tu=function(e,n,r){const i=Q(e);return i.ru(),new MD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:jD.bind(null,t),no:BD.bind(null,t),Ho:HD.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Hp(t)?Bp(t):t.pu.set("Unknown")):(await t.Tu.stop(),rS(t))})),t.Tu}function vr(t){return t.Eu||(t.Eu=function(e,n,r){const i=Q(e);return i.ru(),new UD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:GD.bind(null,t),no:YD.bind(null,t),nu:qD.bind(null,t),eu:QD.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await cc(t)):(await t.Eu.stop(),t._u.length>0&&(M("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Wp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kp(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Qo(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.Au=new Fe(U.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):j():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xi(e,n,Oi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.bu=void 0,this.listeners=[]}}class ZD{constructor(){this.queries=new us(e=>CE(e),rc),this.onlineState="Unknown",this.vu=new Set}}async function eO(t,e){const n=Q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new JD),i)try{s.bu=await n.onListen(r)}catch(o){const a=Kp(o,`Initialization of query '${Vd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.bu&&e.Vu(s.bu)&&Gp(n)}async function tO(t,e){const n=Q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function nO(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.bu=i}}r&&Gp(n)}function rO(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Gp(t){t.vu.forEach(e=>{e.next()})}class iO{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ou||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.key=e}}class lS{constructor(e){this.key=e}}class sO{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=J(),this.mutatedKeys=J(),this.ju=AE(e),this.zu=new Oi(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new by,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=ic(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;f&&g?f.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),S=!0):this.Yu(f,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.ju(g,l)>0||u&&this.ju(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),S=!0):f&&!g&&(r.track({type:1,doc:f}),S=!0,(l||u)&&(a=!0)),S&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return g(h)-g(f)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new Xi(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new by,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=J(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new lS(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new aS(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=J();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Xi.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class oO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aO{constructor(e){this.key=e,this.ic=!1}}class lO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new us(a=>CE(a),rc),this.uc=new Map,this.cc=new Set,this.ac=new Fe(U.comparator),this.hc=new Map,this.lc=new Fp,this.fc={},this.dc=new Map,this._c=Yi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function uO(t,e){const n=wO(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await RD(n.localStore,On(e));n.isPrimaryClient&&eS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await cO(n,e,r,a==="current",o.resumeToken)}return i}async function cO(t,e,n,r,i){t.mc=(h,f,g)=>async function(y,v,S,p){let d=v.view.Hu(S);d.Li&&(d=await Dy(y.localStore,v.query,!1).then(({documents:_})=>v.view.Hu(_,d)));const m=p&&p.targetChanges.get(v.targetId),E=v.view.applyChanges(d,y.isPrimaryClient,m);return Uy(y,v.targetId,E.tc),E.snapshot}(t,h,f,g);const s=await Dy(t.localStore,e,!0),o=new sO(e,s.Yi),a=o.Hu(s.documents),l=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Uy(t,n,u.tc);const c=new oO(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function hO(t,e){const n=Q(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!rc(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),tS(n.remoteStore,r.targetId),Wd(n,r.targetId)}).catch(qo)):(Wd(n,r.targetId),await Hd(n.localStore,r.targetId,!0))}async function dO(t,e,n){const r=EO(t);try{const i=await function(s,o){const a=Q(s),l=Me.now(),u=o.reduce((f,g)=>f.add(g.key),J());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=$n(),y=J();return a.ji.getEntries(f,u).next(v=>{g=v,g.forEach((S,p)=>{p.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{c=v;const S=[];for(const p of o){const d=$P(p,c.get(p.key).overlayedDocument);d!=null&&S.push(new ri(p.key,d,TE(d.value.mapValue),In.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:FE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new Fe(ae)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Zo(r,i.changes),await cc(r.remoteStore)}catch(i){const s=Kp(i,"Failed to persist write");n.reject(s)}}async function uS(t,e){const n=Q(t);try{const r=await AD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?me(o.ic):i.removedDocuments.size>0&&(me(o.ic),o.ic=!1))}),await Zo(n,r,e)}catch(r){await qo(r)}}function My(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&Gp(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fO(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Fe(U.comparator);o=o.insert(s,lt.newNoDocument(s,q.min()));const a=J().add(s),l=new ac(q.min(),new Map,new Ue(ae),o,a);await uS(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),qp(r)}else await Hd(r.localStore,e,!1).then(()=>Wd(r,e,n)).catch(qo)}async function pO(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await CD(n.localStore,e);hS(n,r,null),cS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await qo(i)}}async function mO(t,e,n){const r=Q(t);try{const i=await function(s,o){const a=Q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(me(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);hS(r,e,n),cS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await qo(i)}}function cS(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function hS(t,e,n){const r=Q(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function Wd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||dS(t,r)})}function dS(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(tS(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),qp(t))}function Uy(t,e,n){for(const r of n)r instanceof aS?(t.lc.addReference(r.key,e),gO(t,r)):r instanceof lS?(M("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||dS(t,r.key)):j()}function gO(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(M("SyncEngine","New document in limbo: "+n),t.cc.add(r),qp(t))}function qp(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new U(Ee.fromString(e)),r=t._c.next();t.hc.set(r,new aO(n)),t.ac=t.ac.insert(n,r),eS(t.remoteStore,new Fr(On(IE(n.path)),r,2,Op.at))}}async function Zo(t,e,n){const r=Q(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=zp.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Ci,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>C.forEach(h.xi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Qo(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ki.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,y)}}}(r.localStore,s))}async function yO(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await YE(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new F(I.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.Wi)}}function vO(t,e){const n=Q(t),r=n.hc.get(e);if(r&&r.ic)return J().add(r.key);{let i=J();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function wO(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fO.bind(null,e),e.rc.Ho=nO.bind(null,e.eventManager),e.rc.gc=rO.bind(null,e.eventManager),e}function EO(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mO.bind(null,e),e}class SO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=lc(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return ID(this.persistence,new kD,e.initialUser,this.Tt)}Tc(e){return new SD(Vp.qs,this.Tt)}Ic(e){return new DD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _O{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yO.bind(null,this.syncEngine),await XD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ZD}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new bD(i));var i;return function(s,o,a,l){return new FD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>My(this.syncEngine,a,0),o=$y.C()?new $y:new OD,new zD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new lO(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);M("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Jo(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=pE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function IO(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await YE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function CO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AO(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Ly(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Ly(e.remoteStore,s)),t.onlineComponents=e}async function AO(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await IO(t,new SO)),t.offlineComponents}async function fS(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await CO(t,new _O)),t.onlineComponents}function xO(t){return fS(t).then(e=>e.syncEngine)}async function NO(t){const e=await fS(t),n=e.eventManager;return n.onListen=uO.bind(null,e.syncEngine),n.onUnlisten=hO.bind(null,e.syncEngine),n}function RO(t,e,n={}){const r=new hr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new kO({next:h=>{s.enqueueAndForget(()=>tO(i,c)),h.fromCache&&a.source==="server"?l.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new iO(o,u,{includeMetadataChanges:!0,Ou:!0});return eO(i,c)}(await NO(t),t.asyncQueue,e,n,r)),r.promise}const Fy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PO(t,e,n,r){if(e===!0&&r===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vy(t){if(!U.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zy(t){if(U.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function Co(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qp(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,PO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GR;switch(n.type){case"gapi":const r=n.client;return new XR(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fy.get(e);n&&(M("ComponentProvider","Removing Datastore"),Fy.delete(e),n.terminate())}(this),Promise.resolve()}}function DO(t,e,n,r={}){var i;const s=(t=Co(t,hc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&$d("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ot.MOCK_USER;else{o=TC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ot(l)}t._authCredentials=new qR(new fE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class dc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dc(this.firestore,e,this._query)}}class dr extends dc{constructor(e,n,r){super(e,n,IE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new U(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function k$(t,e,...n){if(t=Wt(t),pS("collection","path",e),t instanceof hc){const r=Ee.fromString(e,...n);return zy(r),new dr(t,null,r)}{if(!(t instanceof jt||t instanceof dr))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return zy(r),new dr(t.firestore,null,r)}}function T$(t,e,...n){if(t=Wt(t),arguments.length===1&&(e=pE.R()),pS("doc","path",e),t instanceof hc){const r=Ee.fromString(e,...n);return Vy(r),new jt(t,null,new U(r))}{if(!(t instanceof jt||t instanceof dr))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Vy(r),new jt(t.firestore,t instanceof dr?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new JE(this,"async_queue_retry"),this.Hc=()=>{const n=lh();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=lh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new hr;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Qo(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Wp.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&j()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class Yp extends hc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new OO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gS(this),this._firestoreClient.terminate()}}function $O(t,e){const n=typeof t=="object"?t:P1(),r=typeof t=="string"?t:e||"(default)",i=np(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=SC("firestore");s&&DO(i,...s)}return i}function mS(t){return t._firestoreClient||gS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new aP(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new TO(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ji(pt.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ji(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=/^__.*__$/;class bO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}function vS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Zp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Zp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Gl(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(vS(this.ra)&&LO.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class MO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||lc(e)}wa(e,n,r,i=!1){return new Zp({ra:e,methodName:n,_a:r,path:ut.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function UO(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new MO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FO(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);_S("Data must be an object, but it was:",o,r);const a=ES(r,o);let l,u;if(s.merge)l=new Zt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=VO(e,h,n);if(!o.contains(f))throw new F(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);jO(c,f)||c.push(f)}l=new Zt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new bO(new Ft(a),l,u)}function wS(t,e){if(SS(t=Wt(t)))return _S("Unsupported field value:",e,t),ES(t,e);if(t instanceof yS)return function(n,r){if(!vS(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=wS(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xP(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Me.fromDate(n);return{timestampValue:Wl(r.Tt,i)}}if(n instanceof Me){const i=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wl(r.Tt,i)}}if(n instanceof Jp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ji)return{bytesValue:HE(r.Tt,n._byteString)};if(n instanceof jt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${Qp(n)}`)}(t,e)}function ES(t,e){const n={};return mE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,i)=>{const s=wS(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function SS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Jp||t instanceof Ji||t instanceof jt||t instanceof yS)}function _S(t,e,n){if(!SS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Qp(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function VO(t,e,n){if((e=Wt(e))instanceof Xp)return e._internalPath;if(typeof e=="string")return kS(t,e);throw Gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const zO=new RegExp("[~\\*/\\[\\]]");function kS(t,e,n){if(e.search(zO)>=0)throw Gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xp(...e.split("."))._internalPath}catch{throw Gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(I.INVALID_ARGUMENT,a+t+l)}function jO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(IS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BO extends TS{data(){return super.data()}}function IS(t,e){return typeof e=="string"?kS(t,e):e instanceof Xp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WO{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const r={};return ls(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Jp(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);me(QE(r));const i=new So(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GO extends TS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(IS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qa extends GO{data(e={}){return super.data(e)}}class qO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Aa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new Aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new qa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Aa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Aa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:QO(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}class YO extends WO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function I$(t){t=Co(t,dc);const e=Co(t.firestore,Yp),n=mS(e),r=new YO(e);return HO(t._query),RO(n,t._query).then(i=>new qO(e,r,t,i))}function C$(t,e,n){t=Co(t,jt);const r=Co(t.firestore,Yp),i=KO(t.converter,e,n);return XO(r,[FO(UO(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,In.none())])}function XO(t,e){return function(n,r){const i=new hr;return n.asyncQueue.enqueueAndForget(async()=>dO(await xO(n),r,i)),i.promise}(mS(t),e)}(function(t,e=!0){(function(n){as=n})(Lo),Bi(new Gr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Yp(new QR(n.getProvider("auth-internal")),new ZR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),cr(fy,"3.8.4",t),cr(fy,"3.8.4","esm2017")})();console.log({}.VITE_APP_ID);const JO={apiKey:{}.VITE_API_KEY,authDomain:{}.VITE_AUTH_DOMAIN,projectId:{}.VITE_PROJECT_ID,storageBucket:{}.VITE_STORAGE_BUCKED,messagingSenderId:{}.VITE_MESSAGING_SENDER_ID,appId:{}.VITE_APP_ID},CS=R1(JO),Ao=UN(CS),A$=$O(CS);var AS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},By=vt.createContext&&vt.createContext(AS),fr=globalThis&&globalThis.__assign||function(){return fr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},fr.apply(this,arguments)},ZO=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function xS(t){return t&&t.map(function(e,n){return vt.createElement(e.tag,fr({key:n},e.attr),xS(e.child))})}function e$(t){return function(e){return vt.createElement(t$,fr({attr:fr({},t.attr)},e),xS(t.child))}}function t$(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=ZO(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),vt.createElement("svg",fr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:fr(fr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&vt.createElement("title",null,s),t.children)};return By!==void 0?vt.createElement(By.Consumer,null,function(n){return e(n)}):e(AS)}function n$(t){return e$({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Login"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"}},{tag:"path",attr:{d:"M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"}}]}]}]})(t)}const r$=ti.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,i$=ti.img`
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`,s$=ti.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-right: 10px;
`,o$=ti.button`
  /* background-color: green; */
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  text-transform: uppercase;

  &:hover {
    /* color: white;
    background-color: green; */
    cursor: pointer;
    box-shadow: rgba(18, 110, 33, 0.71) 0px 0px 20px 0px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,a$=()=>{const[t,e]=Fu(Ao);return Xn(r$,{children:[ue(s$,{children:t.displayName}),ue(i$,{src:t.photoURL,referrerPolicy:"no-referrer"}),Xn(o$,{onClick:()=>Ao.signOut(),children:["Sign Out",ue(n$,{})]})]})},l$=()=>{const[t,e]=Fu(Ao);return Xn(fC,{children:[t&&Xn(ch,{children:[ue(Wc,{to:"/",end:!0,children:"Home"}),ue(Wc,{to:"/collection",end:!0,children:"Collection"}),ue(a$,{})]}),!t&&Xn(ch,{children:[ue(Wc,{to:"/",end:!0,children:"Home"}),ue(dC,{to:"/auth",end:!0,children:"Login"})]})]})},u$=()=>Xn(ch,{children:[ue(l$,{}),ue(k.Suspense,{children:ue(XT,{})})]}),c$=({component:t,redirectTo:e="/"})=>{const[n]=Fu(Ao);return n?ue(i1,{to:e}):t},h$=({component:t,redirectTo:e="/auth"})=>{const[n]=Fu(Ao);return n?t:ue(i1,{to:e})},d$=k.lazy(()=>Ou(()=>import("./HomePage-df665904.js"),["assets/HomePage-df665904.js","assets/api-447a868d.js","assets/HomePage.styled-23117004.js"])),f$=k.lazy(()=>Ou(()=>import("./AuthPage-2f6a086f.js"),[])),p$=k.lazy(()=>Ou(()=>import("./InfoPage-1bb078d3.js"),["assets/InfoPage-1bb078d3.js","assets/api-447a868d.js"])),m$=k.lazy(()=>Ou(()=>import("./CollectionPage-9bd4bcb1.js"),["assets/CollectionPage-9bd4bcb1.js","assets/HomePage.styled-23117004.js"]));function g$(){return ue(ZT,{children:Xn(oi,{path:"/",element:ue(u$,{}),children:[ue(oi,{index:!0,element:ue(d$,{})}),ue(oi,{path:"character/:characterId",element:ue(p$,{})}),ue(oi,{path:"/auth",element:ue(c$,{redirectTo:"/",component:ue(f$,{})})}),ue(oi,{path:"collection",element:ue(h$,{redirectTo:"/auth",component:ue(m$,{})})})]})})}const y$={colors:{white:"rgba(255, 255, 255, 1)",black:"rgba(17, 17, 17, 1)",accent:"rgba(245, 146, 86, 1)",hover:"rgba(255, 113, 47, 1)",background:"rgba(255, 255, 255)",mainText:"rgba(47, 48, 64, 1)",pageTitleText:"rgba(24, 28, 39, 1)",searchText:"rgba(83, 83, 83, 1)",newsText:"rgba(17, 19, 33, 1)",muted:"rgba(17, 17, 17, 0.6)",active:"rgba(255, 97, 1, 1)",shadow:"rgba(49, 21, 4, 0.07)"},media:{mobileMin:"(min-width: 320px)",mobileMax:"(max-width: 767px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)"},space:[0,2,4,8,16,32,64,128,256],fontSizes:{xxs:"12px",xs:"14px",s:"16px",xxm:"18px",xm:"20px",m:"24px",l:"28px",xl:"32px",xxl:"36px",xxxl:"48px",bodyPositiveSize:"68px"},fontWeights:{normal:400,semiBold:500,bold:700},lineHeights:{body:1.36,title:1.36},borders:{none:"none",normal:"1px solid",bold:"2px solid"},radii:{none:"0",normal:"20px",large:"40px",round:"50%"},fonts:{backLink:"Karla",main:"Roboto"},transition:"250ms cubic-bezier(0.4, 0, 0.2, 1)"},v$=uC`
html {
  box-sizing: border-box;
  width: 100vw;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  overflow-x: hidden;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: ${t=>t.theme.fonts.main};
  background-color: ${t=>t.theme.colors.background};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${t=>t.theme.colors.background};
    border-radius: ${t=>t.theme.borders.normal};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${t=>t.theme.colors.accent};
    border-radius: ${t=>t.theme.borders.normal};
  }

}

ul, ol{
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button{
  cursor: pointer;
  border: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

`;hh.createRoot(document.getElementById("root")).render(ue(vt.StrictMode,{children:ue(sI,{children:Xn(aC,{theme:y$,children:[ue(g$,{}),ue(v$,{})]})})}));export{Hn as F,e$ as G,k$ as J,o1 as N,uh as R,T$ as Z,Xn as a,vt as b,Wn as c,S$ as d,Ao as e,w$ as f,is as g,ch as h,yg as i,ue as j,Fu as k,A$ as l,mI as m,C$ as n,k as r,ti as s,E$ as u,I$ as z};
