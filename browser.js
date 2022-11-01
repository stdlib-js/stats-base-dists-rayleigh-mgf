// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&i&&i.call(t,n,r.set),t};function l(t,n,r){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return t!=t}var p=Math.floor,v=Math.ceil;function b(t){return t<0?v(t):p(t)}var d=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY;function s(t){return t===_||t===d}var w,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",g=A&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,u;if(null==t)return m.call(t);r=t[U],u=U,n=null!=(o=t)&&h.call(o,u);try{t[U]=void 0}catch(n){return m.call(t)}return e=m.call(t),n?t[U]=r:delete t[U],e}:function(t){return m.call(t)},j="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var t,n,r;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===g(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,S=w,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var t,n,r;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),r=n,t=(E&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=n,t=(P&&r instanceof Uint8Array||"[object Uint8Array]"===g(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?L:function(){throw new Error("not implemented")};var M,V=H,W="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var t,n,r;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),r=n,t=(W&&r instanceof Uint16Array||"[object Uint16Array]"===g(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:M,uint8:V};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new S(K.buffer),R=J.HIGH,X=J.LOW;function Z(t,n){return K[0]=n,t[0]=Q[R],t[1]=Q[X],t}function $(t,n){return 1===arguments.length?Z([0,0],t):Z(t,n)}var tt,nt,rt=!0===D?1:0,et=new G(1),ot=new S(et.buffer);function ut(t){return et[0]=t,ot[rt]}!0===D?(tt=1,nt=0):(tt=0,nt=1);var it={HIGH:tt,LOW:nt},at=new G(1),ft=new S(at.buffer),ct=it.HIGH,lt=it.LOW;function yt(t,n){return ft[ct]=t,ft[lt]=n,at[0]}var pt=[0,0];function vt(t,n,r,e){return y(t)||s(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}l((function(t){return vt(t,[0,0],1,0)}),"assign",vt);var bt=[0,0],dt=[0,0];function _t(t,n){var r,e,o,u,i;return 0===n||0===t||y(t)||s(t)?t:(vt(t,bt,1,0),n+=bt[1],n+=function(t){var n=ut(t);return(n=(2146435072&n)>>>20)-1023|0}(t=bt[0]),n<-1074?(o=t,$(pt,0),u=pt[0],u&=2147483647,i=ut(o),yt(u|=i&=2147483648,pt[1])):n>1023?t<0?d:_:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$(dt,t),r=dt[0],r&=2148532223,e*yt(r|=n+1023<<20,dt[1])))}var st=1.4426950408889634,wt=1/(1<<28);function At(t){var n;return y(t)||t===_?t:t===d?0:t>709.782712893384?_:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<wt?1+t:function(t,n,r){var e,o,u,i;return _t(1-(n-(e=t-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),r)}(t-.6931471803691238*(n=b(t<0?st*t-.5:st*t+.5)),1.9082149292705877e-10*n,n)}var mt=!0===D?0:1,ht=new G(1),Ut=new S(ht.buffer),gt=.8450629115104675;function jt(t){var n,r,e,o,u,i,a;return y(t)?NaN:t===_?1:t===d?-1:0===t?t:(t<0?(n=!0,r=-t):(n=!1,r=t),r<.84375?r<3.725290298461914e-9?r<2848094538889218e-321?.125*(8*t+1.0270333367641007*t):t+.1283791670955126*t:(o=.12837916709551256+(e=t*t)*function(t){return 0===t?-.3250421072470015:t*(t*(-23763016656650163e-21*t-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(.00013249473800432164+-3960228278775368e-21*t)))}(e),t+t*(o/u)):r<1.25?(i=(u=r-1)*function(t){return 0===t?.41485611868374833:.41485611868374833+t*(t*(.31834661990116175+t*(t*(.035478304325618236+-.002166375594868791*t)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,a=1+u*function(t){return 0===t?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t))))}(u),n?-gt-i/a:gt+i/a):r>=6?n?-1:1:(u=1/(r*r),r<2.857142857142857?(o=u*function(t){return 0===t?-.6938585727071818:t*(t*(t*(t*(t*(-9.814329344169145*t-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(t){return 0===t?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+-.0604244152148581*t))))))}(u)):(o=u*function(t){return 0===t?-.799283237680523:t*(t*(t*(t*(-483.5191916086514*t-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(t){return 0===t?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+-22.44095244658582*t)))))}(u)),e=function(t,n){return ht[0]=t,Ut[mt]=n>>>0,ht[0]}(r,0),o=At(-e*e-.5625)*At((e-r)*(e+r)+o/u),n?o/r-1:1-o/r))}var Nt=1.2533141373155003,It=1.4142135623730951;function Ot(t,n){var r,e;return y(t)||y(n)||n<0?NaN:(e=1+(r=t*n)*At(r*r/2),e*=Nt*(jt(r/It)+1))}function St(t){return y(t)||t<0?(n=NaN,function(){return n}):function(n){var r,e;return y(n)?NaN:(e=1+(r=n*t)*At(r*r/2),e*=Nt*(jt(r/It)+1))};var n}l(Ot,"factory",St),t.default=Ot,t.factory=St,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).mgf={});
//# sourceMappingURL=browser.js.map
