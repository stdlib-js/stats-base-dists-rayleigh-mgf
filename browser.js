// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(t){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&a&&a.call(t,n,r.set),t};var l=n;function y(t){return t!=t}var p=Math.floor,v=Math.ceil;function b(t){return t<0?v(t):p(t)}var d=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY;function w(t){return t===_||t===d}var A,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"";A=s&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,u;if(null==t)return m.call(t);r=t[U],u=U,n=null!=(o=t)&&h.call(o,u);try{t[U]=void 0}catch(n){return m.call(t)}return e=m.call(t),n?t[U]=r:delete t[U],e}:function(t){return m.call(t)};var g,j=A,N="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(N&&r instanceof Uint32Array||"[object Uint32Array]"===j(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=g,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,n,r;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),r=n,t=(F&&r instanceof Float64Array||"[object Float64Array]"===j(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var t,n,r;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),r=n,t=(x&&r instanceof Uint8Array||"[object Uint8Array]"===j(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?M:function(){throw new Error("not implemented")};var V,W=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),r=n,t=(k&&r instanceof Uint16Array||"[object Uint16Array]"===j(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?C:function(){throw new Error("not implemented")};var q,z={uint16:V,uint8:W};(q=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(q.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(t,n){return Q[0]=n,t[0]=R[X],t[1]=R[Z],t}function tt(t,n){return 1===arguments.length?$([0,0],t):$(t,n)}var nt,rt,et=!0===J?1:0,ot=new P(1),ut=new E(ot.buffer);function it(t){return ot[0]=t,ut[et]}!0===J?(nt=1,rt=0):(nt=0,rt=1);var at={HIGH:nt,LOW:rt},ft=new P(1),ct=new E(ft.buffer),lt=at.HIGH,yt=at.LOW;function pt(t,n){return ct[lt]=t,ct[yt]=n,ft[0]}var vt=[0,0];function bt(t,n){return y(n)||w(n)?(t[0]=n,t[1]=0,t):0!==n&&function(t){return Math.abs(t)}(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)}var dt=[0,0],_t=[0,0];function wt(t,n){var r,e,o,u,i;return 0===n||0===t||y(t)||w(t)?t:(function(t,n){1===arguments.length?bt([0,0],t):bt(t,n)}(dt,t),n+=dt[1],n+=function(t){var n=it(t);return(n=(2146435072&n)>>>20)-1023|0}(t=dt[0]),n<-1074?(o=t,tt(vt,0),u=vt[0],u&=2147483647,i=it(o),pt(u|=i&=2147483648,vt[1])):n>1023?t<0?d:_:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tt(_t,t),r=_t[0],r&=2148532223,e*pt(r|=n+1023<<20,_t[1])))}var At=1.4426950408889634,st=1/(1<<28);function mt(t){var n;return y(t)||t===_?t:t===d?0:t>709.782712893384?_:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<st?1+t:function(t,n,r){var e,o,u,i;return wt(1-(n-(e=t-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),r)}(t-.6931471803691238*(n=b(t<0?At*t-.5:At*t+.5)),1.9082149292705877e-10*n,n)}var ht=!0===J?0:1,Ut=new P(1),gt=new E(Ut.buffer),jt=.8450629115104675;function Nt(t){var n,r,e,o,u,i,a;return y(t)?NaN:t===_?1:t===d?-1:0===t?t:(t<0?(n=!0,r=-t):(n=!1,r=t),r<.84375?r<3.725290298461914e-9?r<2848094538889218e-321?.125*(8*t+1.0270333367641007*t):t+.1283791670955126*t:(o=.12837916709551256+(e=t*t)*function(t){return 0===t?-.3250421072470015:t*(t*(-23763016656650163e-21*t-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(.00013249473800432164+-3960228278775368e-21*t)))}(e),t+t*(o/u)):r<1.25?(i=(u=r-1)*function(t){return 0===t?.41485611868374833:.41485611868374833+t*(t*(.31834661990116175+t*(t*(.035478304325618236+-.002166375594868791*t)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,a=1+u*function(t){return 0===t?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t))))}(u),n?-jt-i/a:jt+i/a):r>=6?n?-1:1:(u=1/(r*r),r<2.857142857142857?(o=u*function(t){return 0===t?-.6938585727071818:t*(t*(t*(t*(t*(-9.814329344169145*t-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(t){return 0===t?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+-.0604244152148581*t))))))}(u)):(o=u*function(t){return 0===t?-.799283237680523:t*(t*(t*(t*(-483.5191916086514*t-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(t){return 0===t?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+-22.44095244658582*t)))))}(u)),e=function(t,n){return Ut[0]=t,gt[ht]=n>>>0,Ut[0]}(r,0),o=mt(-e*e-.5625)*mt((e-r)*(e+r)+o/u),n?o/r-1:1-o/r))}var It=1.2533141373155003,Ot=1.4142135623730951;function St(t,n){var r,e;return y(t)||y(n)||n<0?NaN:(e=1+(r=t*n)*mt(r*r/2),e*=It*(Nt(r/Ot)+1))}function Et(t){return y(t)||t<0?(n=NaN,function(){return n}):function(n){var r,e;return y(n)?NaN:(e=1+(r=n*t)*mt(r*r/2),e*=It*(Nt(r/Ot)+1))};var n}l(St,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Et}),t.default=St,t.factory=Et,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).mgf={});
//# sourceMappingURL=browser.js.map
