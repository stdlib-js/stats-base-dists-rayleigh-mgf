// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(i.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),v&&u&&u.call(r,t,n.set),r};var c=t;function l(r){return r!=r}var y=Math.floor,v=Math.ceil;function p(r){return r<0?v(r):y(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY;function A(r){return r===w||r===b}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var m=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var U,h="function"==typeof Symbol?Symbol.toStringTag:"";U=_&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return m.call(r);n=r[h],a=h,t=null!=(o=r)&&d.call(o,a);try{r[h]=void 0}catch(t){return m.call(r)}return e=m.call(r),t?r[h]=n:delete r[h],e}:function(r){return m.call(r)};var s=U,N="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null;var g,I="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,t,n;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(N&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O=g,S="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null;var F,H="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E([1,3.14,-3.14,NaN]),n=t,r=(S&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T=F,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var L,V="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,256,257]),n=t,r=(G&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W=L,M="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var x,Y="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:x,uint8:W};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new T(1),Q=new O(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,t){return K[0]=t,r[0]=Q[R],r[1]=Q[X],r}function $(r,t){return 1===arguments.length?Z([0,0],r):Z(r,t)}var rr,tr,nr=!0===D?1:0,er=new T(1),or=new O(er.buffer);function ar(r){return er[0]=r,or[nr]}!0===D?(rr=1,tr=0):(rr=0,tr=1);var ur={HIGH:rr,LOW:tr},ir=new T(1),fr=new O(ir.buffer),cr=ur.HIGH,lr=ur.LOW;function yr(r,t){return fr[cr]=r,fr[lr]=t,ir[0]}var vr=[0,0];function pr(r,t){return l(t)||A(t)?(r[0]=t,r[1]=0,r):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var br=[0,0],wr=[0,0];function Ar(r,t){var n,e,o,a,u;return 0===t||0===r||l(r)||A(r)?r:(function(r,t){1===arguments.length?pr([0,0],r):pr(r,t)}(br,r),t+=br[1],t+=function(r){var t=ar(r);return(t=(2146435072&t)>>>20)-1023|0}(r=br[0]),t<-1074?(o=r,$(vr,0),a=vr[0],a&=2147483647,u=ar(o),yr(a|=u&=2147483648,vr[1])):t>1023?r<0?b:w:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$(wr,r),n=wr[0],n&=2148532223,e*yr(n|=t+1023<<20,wr[1])))}function _r(r){var t;return l(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,u;return Ar(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=p(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}var mr=!0===D?0:1,dr=new T(1),Ur=new O(dr.buffer);var hr=.8450629115104675;function sr(r){var t,n,e,o,a,u,i;return l(r)?NaN:r===w?1:r===b?-1:0===r?r:(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375?n<3.725290298461914e-9?n<2848094538889218e-321?.125*(8*r+1.0270333367641007*r):r+.1283791670955126*r:(o=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),a=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),r+r*(o/a)):n<1.25?(u=(a=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,i=1+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),t?-hr-u/i:hr+u/i):n>=6?t?-1:1:(a=1/(n*n),n<2.857142857142857?(o=a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a)):(o=a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)),e=function(r,t){return dr[0]=r,Ur[mr]=t>>>0,dr[0]}(n,0),o=_r(-e*e-.5625)*_r((e-n)*(e+n)+o/a),t?o/n-1:1-o/n))}var Nr=1.4142135623730951;function jr(r,t){var n,e;return l(r)||l(t)||t<0?NaN:(e=1+(n=r*t)*_r(n*n/2),e*=1.2533141373155003*(sr(n/Nr)+1))}function gr(r){return l(r)||r<0?(t=NaN,function(){return t}):function(t){var n,e;if(l(t))return NaN;return e=1+(n=t*r)*_r(n*n/2),e*=1.2533141373155003*(sr(n/Nr)+1)};var t}c(jr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:gr});export{jr as default,gr as factory};
//# sourceMappingURL=mod.js.map