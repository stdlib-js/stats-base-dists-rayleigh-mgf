// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor,v=Math.ceil;function p(r){return r<0?v(r):y(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY;function A(r){return r===w||r===b}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var s=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var U=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,a;if(null==r)return s.call(r);t=r[d],a=d,n=null!=(o=r)&&m.call(o,a);try{r[d]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[d]=t:delete r[d],e}:function(r){return s.call(r)},h="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var N,j="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I=N,O="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V=P,W="function"==typeof Uint16Array;var M="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var Y,C={uint16:k,uint8:V};(Y=new C.uint16(1))[0]=4660;var q,z,B=52===new C.uint8(Y.buffer)[0];!0===B?(q=1,z=0):(q=0,z=1);var D={HIGH:q,LOW:z},J=new H(1),K=new I(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,n,t,e){return J[0]=r,n[e]=K[Q],n[e+t]=K[R],n}function Z(r){return X(r,[0,0],1,0)}c(Z,"assign",X);var $,rr,nr=!0===B?1:0,tr=new H(1),er=new I(tr.buffer);function or(r){return tr[0]=r,er[nr]}!0===B?($=1,rr=0):($=0,rr=1);var ar={HIGH:$,LOW:rr},ur=new H(1),ir=new I(ur.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,n){return ir[fr]=r,ir[cr]=n,ur[0]}var yr=[0,0];function vr(r,n,t,e){return l(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return vr(r,[0,0],1,0)}),"assign",vr);var pr=[0,0],br=[0,0];function wr(r,n){var t,e,o,a,u,i;return 0===n||0===r||l(r)||A(r)?r:(vr(r,pr,1,0),n+=pr[1],n+=function(r){var n=or(r);return(n=(2146435072&n)>>>20)-1023|0}(r=pr[0]),n<-1074?(o=0,a=r,Z.assign(o,yr,1,0),u=yr[0],u&=2147483647,i=or(a),lr(u|=i&=2147483648,yr[1])):n>1023?r<0?b:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Z.assign(r,br,1,0),t=br[0],t&=2148532223,e*lr(t|=n+1023<<20,br[1])))}function Ar(r){var n;return l(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,a,u;return wr(1-(n-(e=r-n)*(a=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=p(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}var _r=!0===B?0:1,sr=new H(1),mr=new I(sr.buffer);var dr=.8450629115104675;function Ur(r){var n,t,e,o,a,u,i;return l(r)?NaN:r===w?1:r===b?-1:0===r?r:(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375?t<3.725290298461914e-9?t<2848094538889218e-321?.125*(8*r+1.0270333367641007*r):r+.1283791670955126*r:(o=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),a=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),r+r*(o/a)):t<1.25?(u=(a=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,i=1+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),n?-dr-u/i:dr+u/i):t>=6?n?-1:1:(a=1/(t*t),t<2.857142857142857?(o=a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a)):(o=a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)),e=function(r,n){return sr[0]=r,mr[_r]=n>>>0,sr[0]}(t,0),o=Ar(-e*e-.5625)*Ar((e-t)*(e+t)+o/a),n?o/t-1:1-o/t))}var hr=1.4142135623730951;function gr(r,n){var t,e;return l(r)||l(n)||n<0?NaN:(e=1+(t=r*n)*Ar(t*t/2),e*=1.2533141373155003*(Ur(t/hr)+1))}function Nr(r){return l(r)||r<0?(n=NaN,function(){return n}):function(n){var t,e;if(l(n))return NaN;return e=1+(t=n*r)*Ar(t*t/2),e*=1.2533141373155003*(Ur(t/hr)+1)};var n}c(gr,"factory",Nr);export{gr as default,Nr as factory};
//# sourceMappingURL=mod.js.map
