"use strict";var i=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var q=i(function(P,v){
var n=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-erf/dist'),x=require('@stdlib/constants-float64-sqrt-half-pi/dist'),R=require('@stdlib/constants-float64-sqrt-two/dist');function y(a,r){var e,u;return n(a)||n(r)||r<0?NaN:(e=a*r,u=1+e*N(e*e/2),u*=x*(p(e/R)+1),u)}v.exports=y
});var c=i(function(d,o){
var Q=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),S=require('@stdlib/math-base-special-exp/dist'),T=require('@stdlib/math-base-special-erf/dist'),_=require('@stdlib/constants-float64-sqrt-half-pi/dist'),F=require('@stdlib/constants-float64-sqrt-two/dist');function A(a){if(f(a)||a<0)return Q(NaN);return r;function r(e){var u,t;return f(e)?NaN:(u=e*a,t=1+u*S(u*u/2),t*=_*(T(u/F)+1),t)}}o.exports=A
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=q(),I=c();H(s,"factory",I);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
