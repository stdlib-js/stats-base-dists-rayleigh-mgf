"use strict";var i=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var q=i(function(P,v){
var n=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-erf/dist'),x=require('@stdlib/constants-float64-sqrt-half-pi/dist'),R=require('@stdlib/constants-float64-sqrt-two/dist');function y(u,r){var a,e;return n(u)||n(r)||r<0?NaN:(a=u*r,e=1+a*N(a*a/2),e*=x*(p(a/R)+1),e)}v.exports=y
});var c=i(function(d,o){
var Q=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),S=require('@stdlib/math-base-special-exp/dist'),T=require('@stdlib/math-base-special-erf/dist'),_=require('@stdlib/constants-float64-sqrt-half-pi/dist'),F=require('@stdlib/constants-float64-sqrt-two/dist');function A(u){if(f(u)||u<0)return Q(NaN);return r;function r(a){var e,t;return f(a)?NaN:(e=a*u,t=1+e*S(e*e/2),t*=_*(T(e/F)+1),t)}}o.exports=A
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=q(),I=c();H(s,"factory",I);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
