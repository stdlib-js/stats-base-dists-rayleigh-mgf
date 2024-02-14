// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erf@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-half-pi@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";function d(t,m){var d,o;return s(t)||s(m)||m<0?NaN:(o=1+(d=t*m)*e(d*d/2),o*=r*(n(d/i)+1))}function o(t){return s(t)||t<0?m(NaN):function(m){var d,o;if(s(m))return NaN;return o=1+(d=m*t)*e(d*d/2),o*=r*(n(d/i)+1)}}t(d,"factory",o);export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
