// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var t,e,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,c=parseInt(e,10),!isFinite(c)){if(!n(e))throw new Error("invalid integer. Value: "+e);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(e=(-c).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=c.toString(t),c||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function a(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,v,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function E(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,T=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,n,e,i,u,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(a(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=S.exec(r);e;)(t=r.slice(o,S.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=S.lastIndex,e=S.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function N(r){var t,n,e;if(!F(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return x.apply(null,n)}var V,k=Object.prototype,I=k.toString,P=k.__defineGetter__,C=k.__defineSetter__,L=k.__lookupGetter__,M=k.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===I.call(n))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(L.call(r,t)||M.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&C&&C.call(r,t,n.set),r};var R=V;function $(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var G=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&q.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=W()?function(r){var t,n,e;if(null==r)return Y.call(r);n=r[H],t=z(r,H);try{r[H]=void 0}catch(t){return Y.call(r)}return e=Y.call(r),t?r[H]=n:delete r[H],e}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=W();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return X(r)||tr(r)}function er(){return new Function("return this;")()}$(nr,"isPrimitive",X),$(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,cr=function(r){if(arguments.length){if(!X(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=cr.document&&cr.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;$(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=sr;function br(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(br);function vr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pr.exec(e.toString()))return t[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}$(br,"isObjectLikeArray",dr);var gr="function"==typeof G||"object"==typeof fr||"function"==typeof ar?function(r){return vr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?vr(r).toLowerCase():t};function wr(r){return"function"===gr(r)}var hr=/./;function mr(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function jr(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString,Ar=W();function _r(r){return"object"==typeof r&&(r instanceof K||(Ar?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tr(r){return jr(r)||_r(r)}function Or(){return new Function("return this;")()}mr(Tr,"isPrimitive",jr),mr(Tr,"isObject",_r);var xr="object"==typeof self?self:null,Sr="object"==typeof window?window:null,Ur="object"==typeof globalThis?globalThis:null,Br=function(r){if(arguments.length){if(!jr(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Or()}if(Ur)return Ur;if(xr)return xr;if(Sr)return Sr;throw new Error("unexpected error. Unable to resolve global object.")}(),Fr=Br.document&&Br.document.childNodes,Nr=Int8Array;function Vr(){return/^\s*function\s*([^(]*)/i}var kr=/^\s*function\s*([^(]*)/i;function Ir(r){return null!==r&&"object"==typeof r}mr(Vr,"REGEXP",kr);var Pr=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Ir);function Cr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=kr.exec(e.toString()))return t[1]}return Ir(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mr(Ir,"isObjectLikeArray",Pr);var Lr="function"==typeof hr||"object"==typeof Nr||"function"==typeof Fr?function(r){return Cr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Cr(r).toLowerCase():t};function Mr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Lr(r)}(r.next)}function Rr(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function $r(r){return"number"==typeof r}var Gr=Number,Xr=Gr.prototype.toString,Zr=W();function Wr(r){return"object"==typeof r&&(r instanceof Gr||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Yr(r){return $r(r)||Wr(r)}Rr(Yr,"isPrimitive",$r),Rr(Yr,"isObject",Wr);var qr="function"==typeof D&&"symbol"==typeof D("foo")&&z(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null,zr=/./;function Dr(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Hr(r){return"boolean"==typeof r}var Jr=Boolean.prototype.toString,Kr=W();function Qr(r){return"object"==typeof r&&(r instanceof K||(Kr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function rt(r){return Hr(r)||Qr(r)}function tt(){return new Function("return this;")()}Dr(rt,"isPrimitive",Hr),Dr(rt,"isObject",Qr);var nt="object"==typeof self?self:null,et="object"==typeof window?window:null,ot="object"==typeof globalThis?globalThis:null,it=function(r){if(arguments.length){if(!Hr(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tt()}if(ot)return ot;if(nt)return nt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")}(),ut=it.document&&it.document.childNodes,ct=Int8Array;function at(){return/^\s*function\s*([^(]*)/i}var ft=/^\s*function\s*([^(]*)/i;function lt(r){return null!==r&&"object"==typeof r}Dr(at,"REGEXP",ft);var st=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(lt);function pt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=ft.exec(e.toString()))return t[1]}return lt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Dr(lt,"isObjectLikeArray",st);var yt="function"==typeof zr||"object"==typeof ct||"function"==typeof ut?function(r){return pt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?pt(r).toLowerCase():t};function bt(r){return"function"===yt(r)}var dt=Object,vt=/./;function gt(r,t,n){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function wt(r){return"boolean"==typeof r}var ht=Boolean.prototype.toString,mt=W();function jt(r){return"object"==typeof r&&(r instanceof K||(mt?function(r){try{return ht.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Et(r){return wt(r)||jt(r)}function At(){return new Function("return this;")()}gt(Et,"isPrimitive",wt),gt(Et,"isObject",jt);var _t="object"==typeof self?self:null,Tt="object"==typeof window?window:null,Ot="object"==typeof globalThis?globalThis:null,xt=function(r){if(arguments.length){if(!wt(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return At()}if(Ot)return Ot;if(_t)return _t;if(Tt)return Tt;throw new Error("unexpected error. Unable to resolve global object.")}(),St=xt.document&&xt.document.childNodes,Ut=Int8Array;function Bt(){return/^\s*function\s*([^(]*)/i}var Ft=/^\s*function\s*([^(]*)/i;function Nt(r){return null!==r&&"object"==typeof r}gt(Bt,"REGEXP",Ft);var Vt=function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Nt);function kt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Ft.exec(e.toString()))return t[1]}return Nt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}gt(Nt,"isObjectLikeArray",Vt);var It,Pt,Ct="function"==typeof vt||"object"==typeof Ut||"function"==typeof St?function(r){return kt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?kt(r).toLowerCase():t},Lt=Object.getPrototypeOf;Pt=Object.getPrototypeOf,It="function"===Ct(Pt)?Lt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Mt=It,Rt=Object.prototype;function $t(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=dt(r),Mt(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&bt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&bt(t.isPrototypeOf)&&(t===Rt||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Gt(r,t){return $t(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Xt(r,t,n){var e,o,i,u;if(!Mr(r))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=Gt(e,n)))throw i;return $(o={},"next",c),$(o,"return",a),qr&&wr(r[qr])&&$(o,qr,f),o;function c(){var n;return u?{done:!0}:(n=r.next()).done?(u=!0,n):{value:$r(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Xt(r[qr](),t,e)}}var Zt,Wt=Math.sqrt,Yt=1.5707963267948966,qt="function"==typeof Uint32Array,zt="function"==typeof Uint32Array?Uint32Array:null,Dt="function"==typeof Uint32Array?Uint32Array:void 0;Zt=function(){var r,t;if("function"!=typeof zt)return!1;try{r=function(r){return qt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new zt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Dt:function(){throw new Error("not implemented")};var Ht,Jt=Zt,Kt="function"==typeof Float64Array,Qt="function"==typeof Float64Array?Float64Array:null,rn="function"==typeof Float64Array?Float64Array:void 0;Ht=function(){var r,t;if("function"!=typeof Qt)return!1;try{r=function(r){return Kt&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Qt([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var tn,nn=Ht,en="function"==typeof Uint8Array,on="function"==typeof Uint8Array?Uint8Array:null,un="function"==typeof Uint8Array?Uint8Array:void 0;tn=function(){var r,t;if("function"!=typeof on)return!1;try{r=function(r){return en&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new on(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?un:function(){throw new Error("not implemented")};var cn,an=tn,fn="function"==typeof Uint16Array,ln="function"==typeof Uint16Array?Uint16Array:null,sn="function"==typeof Uint16Array?Uint16Array:void 0;cn=function(){var r,t;if("function"!=typeof ln)return!1;try{r=function(r){return fn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new ln(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var pn,yn={uint16:cn,uint8:an};(pn=new yn.uint16(1))[0]=4660;var bn=52===new yn.uint8(pn.buffer)[0],dn=!0===bn?1:0,vn=new nn(1),gn=new Jt(vn.buffer);function wn(r){return vn[0]=r,gn[dn]}var hn=!0===bn?1:0,mn=new nn(1),jn=new Jt(mn.buffer),En=Gr.NEGATIVE_INFINITY,An=.6931471803691238,_n=1.9082149292705877e-10,Tn=1048575;function On(r){var t,n,e,o,i,u,c,a,f,l,s,p;return 0===r?En:function(r){return r!=r}(r)||r<0?NaN:(i=0,(n=wn(r))<1048576&&(i-=54,n=wn(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(a=614244+(n&=Tn)&1048576|0)>>20|0,c=(r=function(r,t){return mn[0]=r,jn[hn]=t>>>0,mn[0]}(r,n|1072693248^a))-1,(Tn&2+n)<3?0===c?0===i?0:i*An+i*_n:(u=c*c*(.5-.3333333333333333*c),0===i?c-u:i*An-(u-i*_n-c)):(a=n-398458|0,f=440401-n|0,o=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),u=e+o,(a|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+u)):i*An-(t-(l*(t+u)+i*_n)-c)):0===i?c-l*(c-u):i*An-(l*(c-u)-i*_n-c))))}var xn=Number.POSITIVE_INFINITY;function Sn(r){var t,n,e,o,i,u,c;return c=r,r<0&&(c=r/(r-1),t=!0),0===c?Yt:1===c?1:c>1?NaN:(c<.1?u=function(r){return 0===r?1.5509733517804722:1.5509733517804722+r*(r*(r*(r*(r*(r*(r*(r*(-.004809187786009338*r-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(c-.05):c<.2?u=function(r){return 0===r?1.5101218320928198:1.5101218320928198+r*(r*(r*(r*(r*(r*(r*(r*(r*(-.011197445703074968*r-.011799303775587354)-.012759847429264804)-.01426196082884252)-.016650786739707237)-.020644781177568104)-.027965493064761784)-.04372994401908431)-.09012382040477457)-.41711633390586755)}(c-.15):c<.3?u=function(r){return 0===r?1.4674622093394272:1.4674622093394272+r*(r*(r*(r*(r*(r*(r*(r*(r*(-.03478996038640416*r-.03237139531475812)-.0309169840192389)-.030527000890325277)-.031495443512532785)-.03452772850528084)-.04139162772734022)-.05737184359324173)-.10515555766694255)-.43657629094633776)}(c-.25):c<.4?u=function(r){return 0===r?1.4226911334908792:1.4226911334908792+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-.1607911206912746*r-.12705358515769605)-.102539850131046)-.084959075171781)-.07279389536257878)-.06519703281557247)-.06208433913173031)-.06471427847205)-.07813854509440948)-.12525053982206188)-.4595135196210487)}(c-.35):c<.5?u=function(r){return 0===r?1.3754019718711163:1.3754019718711163+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1.3088332057585401*r-.8605232357272398)-.5757544060278792)-.39351311430437586)-.27617433306775174)-.20049532364269734)-.15221716396203505)-.12295422312026907)-.10884095252313576)-.11184944491702783)-.15331170134854022)-.4872021832731848)}(c-.45):c<.6?u=function(r){return 0===r?1.3250244979582302:1.3250244979582302+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-11.97703130208884*r-6.446753640156048)-3.5316967730957227)-1.9767211439543984)-1.1363431218392293)-.675948400853106)-.42069845728100574)-.27879895311853475)-.20275465292641914)-.17162372682201127)-.19490643048212622)-.5217276475575667)}(c-.55):c<.7?u=function(r){return 0===r?1.2707074796501499:1.2707074796501499+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1137.38082216936*r-463.5938853480342)-191.34894807629848)-80.15895841905397)-34.18120574251449)-14.89436036517319)-6.6675959033810015)-3.089708310445187)-1.498870837987561)-.7749476413813975)-.4403978408504232)-.2922441735330774)-.2621607934324926)-.5668391682878666)}(c-.65):c<.8?u=function(r){return 0===r?1.2110560275684594:1.2110560275684594+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1104011.3443115912*r-315126.04064491636)-90799.48341621365)-26448.19586059192)-7801.945954775964)-2336.1253314403966)-712.1364793277636)-221.879685319235)-71.04099935893065)-23.55507217389693)-8.18168822157359)-3.0320566617452474)-1.23755558451305)-.5922782353119346)-.38716640952066916)-.6303064132874558)}(c-.75):c<.85?u=function(r){return 0===r?1.1613071521962828:1.1613071521962828+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1920033.4136826345*r-396650.4505013548)-83182.69029154233)-17761.7071017094)-3877.0058473132895)-869.8602699308701)-202.18187354340904)-49.25672530759985)-12.815909243378957)-3.679383613496635)-1.2436930610777865)-.5805514744654373)-.7011002845552895)}(c-.825):c<.9?u=function(r){return 0===r?1.1246173251197522:1.1246173251197522+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-36409256888.1214*r-5198725846.725541)-749380758.1942496)-109209938.52030899)-16120097.815816568)-2415611.0887010912)-368596.11674161063)-57502.51612140314)-9222.313478526092)-1532.66588382523)-267.09866751957054)-49.7490054655148)-10.239717411543843)-2.4900973094503946)-.8447940536449113)-.7708450563609095)}(c-.875):(n=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(o=.95-c),e=function(r){return 0===r?1.5509733517804722:1.5509733517804722+r*(r*(r*(r*(r*(r*(r*(r*(-.004809187786009338*r-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(o),i=function(r){var t,n,e,o,i,u;return u=r,r<0&&(u=r/(r-1),t=!0),0===u?Yt:1===u?xn:u>1?NaN:(u<.1?i=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(u-.05):u<.2?i=function(r){return 0===r?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+.26636380989261754*r))))))))))}(u-.15):u<.3?i=function(r){return 0===r?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+1.057652872753547*r))))))))))}(u-.25):u<.4?i=function(r){return 0===r?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+7.224080007363877*r)))))))))))}(u-.35):u<.5?i=function(r){return 0===r?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+90.27388602941*r))))))))))))}(u-.45):u<.6?i=function(r){return 0===r?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+2536.5297553827645*r)))))))))))))}(u-.55):u<.7?i=function(r){return 0===r?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+612757.2711915852*r)))))))))))))))}(u-.65):u<.8?i=function(r){return 0===r?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994.048255285+r*(9541921.966748387+r*(35634927.44218076+r*(133669298.46120408+r*(503352186.68662846+r*(1901975729.53866+7208915015.330104*r))))))))))))))))))}(u-.75):u<.85?i=function(r){return 0===r?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1847238.2637239718+r*(9600515.416049214+r*(50307677.08502367+r*(265444188.6527128+r*(1408862325.0287027+7515687935.373775*r))))))))))))))}(u-.825):u<.9?i=function(r){return 0===r?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1043999.3310899908+r*(7427974.817042039+r*(53503839.67558661+r*(389249886.99487084+r*(2855288351.1008105+r*(21090077038.76684+r*(156699833947.7902+r*(1170222242422.44+r*(8777948323668.9375+r*(66101242752484.95+r*(499488053713388.8+0x86813c6c7adde8*r))))))))))))))))))}(u-.875):(o=function(r){return 0===r?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+.003919665602267974*r)))))))))))))}(e=1-u),n=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(e-.05),i=-On(o)*(.3183098861837907*n)),t?i/Wt(1-r):i)}(c),u=(Yt+i*(n-e))/n),t?u*Wt(1-r):u)}return function(r){return Xt(r,Sn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterEllipe=t();
//# sourceMappingURL=browser.js.map
