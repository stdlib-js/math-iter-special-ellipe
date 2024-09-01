// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=s.call(e,h,"$1e"),e=s.call(e,v,"e"),e=s.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,p,"e+0$1"),e=s.call(e,y,"e-0$1"),r.alternate&&(e=s.call(e,d,"$1."),e=s.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,a,c,f,l,s,p,y,d,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(e=r[l]))c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,E(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,y=e.width,d=e.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),c+=e.arg||"",f+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(O(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function T(r){var t,n;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return S.apply(null,t)}var F,k=Object.prototype,N=k.toString,I=k.__defineGetter__,V=k.__defineSetter__,P=k.__lookupGetter__,$=k.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(P.call(r,t)||$.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,t,n.get),a&&V&&V.call(r,t,n.set),r};var C=F;function B(r,t,n){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var R=/./;function G(r){return"boolean"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function X(r,t){return null!=r&&W.call(r,t)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",z=Z()?function(r){var t,n,e;if(null==r)return M.call(r);n=r[q],t=X(r,q);try{r[q]=void 0}catch(t){return M.call(r)}return e=M.call(r),t?r[q]=n:delete r[q],e}:function(r){return M.call(r)},D=Boolean,H=Boolean.prototype.toString,J=Z();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="object"==typeof globalThis?globalThis:null,er=function(r){if(arguments.length){if(!G(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=er.document&&er.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;B(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var t,n,e,o;if(("Object"===(n=z(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=ur.exec(e.toString()))return t[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}B(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!cr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(fr));var sr="function"==typeof R||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?lr(r).toLowerCase():t};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var dr=Number,gr=dr.prototype.toString,br=Z();function vr(r){return"object"==typeof r&&(r instanceof dr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||vr(r)}B(hr,"isPrimitive",yr),B(hr,"isObject",vr);var wr,mr="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=wr,_r=Object.prototype;function Sr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(t=function(r){return null==r?null:(r=jr(r),Er(r))}(r),!t||!X(r,"constructor")&&X(t,"constructor")&&pr(t.constructor)&&"[object Function]"===z(t.constructor)&&X(t,"isPrototypeOf")&&pr(t.isPrototypeOf)&&(t===_r||function(r){var t;for(t in r)if(!X(r,t))return!1;return!0}(r)))}function xr(r,t,n){var e,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=function(r,t){return Sr(t)?(X(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(e,n),i))throw i;return B(o={},"next",(function(){var n;return a?{done:!0}:(n=r.next()).done?(a=!0,n):{value:yr(n.value)?t(n.value):e.invalid,done:!1}})),B(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&B(o,mr,(function(){return xr(r[mr](),t,e)})),o}var Or,Ur=Math.sqrt,Tr=1.5707963267948966,Fr="function"==typeof Uint32Array,kr="function"==typeof Uint32Array?Uint32Array:null,Nr="function"==typeof Uint32Array?Uint32Array:void 0;Or=function(){var r,t,n;if("function"!=typeof kr)return!1;try{t=new kr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Fr&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ir,Vr=Or,Pr="function"==typeof Float64Array,$r="function"==typeof Float64Array?Float64Array:null,Cr="function"==typeof Float64Array?Float64Array:void 0;Ir=function(){var r,t,n;if("function"!=typeof $r)return!1;try{t=new $r([1,3.14,-3.14,NaN]),n=t,r=(Pr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Br,Rr=Ir,Gr="function"==typeof Uint8Array,Lr="function"==typeof Uint8Array?Uint8Array:null,Zr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,t,n;if("function"!=typeof Lr)return!1;try{t=new Lr(t=[1,3.14,-3.14,256,257]),n=t,r=(Gr&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Mr,Wr=Br,Xr="function"==typeof Uint16Array,Yr="function"==typeof Uint16Array?Uint16Array:null,qr="function"==typeof Uint16Array?Uint16Array:void 0;Mr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Xr&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr,Dr={uint16:Mr,uint8:Wr};(zr=new Dr.uint16(1))[0]=4660;var Hr=52===new Dr.uint8(zr.buffer)[0],Jr=!0===Hr?1:0,Kr=new Rr(1),Qr=new Vr(Kr.buffer);function rt(r){return Kr[0]=r,Qr[Jr]}var tt=!0===Hr?1:0,nt=new Rr(1),et=new Vr(nt.buffer),ot=1023,it=dr.NEGATIVE_INFINITY,at=.6931471803691238,ut=1.9082149292705877e-10,ct=0x40000000000000,ft=.3333333333333333,lt=1048575,st=2146435072,pt=1048576,yt=1072693248;function dt(r){var t,n,e,o,i,a,u,c,f,l,s,p;return 0===r?it:function(r){return r!=r}(r)||r<0?NaN:(i=0,(n=rt(r))<pt&&(i-=54,n=rt(r*=ct)),n>=st?r+r:(i+=(n>>20)-ot|0,i+=(c=614244+(n&=lt)&1048576|0)>>20|0,u=(r=function(r,t){return nt[0]=r,et[tt]=t>>>0,nt[0]}(r,n|c^yt))-1,(lt&2+n)<3?0===u?0===i?0:i*at+i*ut:(a=u*u*(.5-ft*u),0===i?u-a:i*at-(a-i*ut-u)):(c=n-398458|0,f=440401-n|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=e+o,(c|=f)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*at-(t-(l*(t+a)+i*ut)-u)):0===i?u-l*(u-a):i*at-(l*(u-a)-i*ut-u))))}var gt=Number.POSITIVE_INFINITY,bt=.3183098861837907;function vt(r){var t,n,e,o,i,a,u;return u=r,r<0&&(u=r/(r-1),t=!0),0===u?Tr:1===u?1:u>1?NaN:(u<.1?a=function(r){return 0===r?1.5509733517804722:1.5509733517804722+r*(r*(r*(r*(r*(r*(r*(r*(-.004809187786009338*r-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(u-.05):u<.2?a=function(r){return 0===r?1.5101218320928198:1.5101218320928198+r*(r*(r*(r*(r*(r*(r*(r*(r*(-.011197445703074968*r-.011799303775587354)-.012759847429264804)-.01426196082884252)-.016650786739707237)-.020644781177568104)-.027965493064761784)-.04372994401908431)-.09012382040477457)-.41711633390586755)}(u-.15):u<.3?a=function(r){return 0===r?1.4674622093394272:1.4674622093394272+r*(r*(r*(r*(r*(r*(r*(r*(r*(-.03478996038640416*r-.03237139531475812)-.0309169840192389)-.030527000890325277)-.031495443512532785)-.03452772850528084)-.04139162772734022)-.05737184359324173)-.10515555766694255)-.43657629094633776)}(u-.25):u<.4?a=function(r){return 0===r?1.4226911334908792:1.4226911334908792+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-.1607911206912746*r-.12705358515769605)-.102539850131046)-.084959075171781)-.07279389536257878)-.06519703281557247)-.06208433913173031)-.06471427847205)-.07813854509440948)-.12525053982206188)-.4595135196210487)}(u-.35):u<.5?a=function(r){return 0===r?1.3754019718711163:1.3754019718711163+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1.3088332057585401*r-.8605232357272398)-.5757544060278792)-.39351311430437586)-.27617433306775174)-.20049532364269734)-.15221716396203505)-.12295422312026907)-.10884095252313576)-.11184944491702783)-.15331170134854022)-.4872021832731848)}(u-.45):u<.6?a=function(r){return 0===r?1.3250244979582302:1.3250244979582302+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-11.97703130208884*r-6.446753640156048)-3.5316967730957227)-1.9767211439543984)-1.1363431218392293)-.675948400853106)-.42069845728100574)-.27879895311853475)-.20275465292641914)-.17162372682201127)-.19490643048212622)-.5217276475575667)}(u-.55):u<.7?a=function(r){return 0===r?1.2707074796501499:1.2707074796501499+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1137.38082216936*r-463.5938853480342)-191.34894807629848)-80.15895841905397)-34.18120574251449)-14.89436036517319)-6.6675959033810015)-3.089708310445187)-1.498870837987561)-.7749476413813975)-.4403978408504232)-.2922441735330774)-.2621607934324926)-.5668391682878666)}(u-.65):u<.8?a=function(r){return 0===r?1.2110560275684594:1.2110560275684594+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1104011.3443115912*r-315126.04064491636)-90799.48341621365)-26448.19586059192)-7801.945954775964)-2336.1253314403966)-712.1364793277636)-221.879685319235)-71.04099935893065)-23.55507217389693)-8.18168822157359)-3.0320566617452474)-1.23755558451305)-.5922782353119346)-.38716640952066916)-.6303064132874558)}(u-.75):u<.85?a=function(r){return 0===r?1.1613071521962828:1.1613071521962828+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-1920033.4136826345*r-396650.4505013548)-83182.69029154233)-17761.7071017094)-3877.0058473132895)-869.8602699308701)-202.18187354340904)-49.25672530759985)-12.815909243378957)-3.679383613496635)-1.2436930610777865)-.5805514744654373)-.7011002845552895)}(u-.825):u<.9?a=function(r){return 0===r?1.1246173251197522:1.1246173251197522+r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(r*(-36409256888.1214*r-5198725846.725541)-749380758.1942496)-109209938.52030899)-16120097.815816568)-2415611.0887010912)-368596.11674161063)-57502.51612140314)-9222.313478526092)-1532.66588382523)-267.09866751957054)-49.7490054655148)-10.239717411543843)-2.4900973094503946)-.8447940536449113)-.7708450563609095)}(u-.875):(n=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(o=.95-u),e=function(r){return 0===r?1.5509733517804722:1.5509733517804722+r*(r*(r*(r*(r*(r*(r*(r*(-.004809187786009338*r-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(o),i=function(r){var t,n,e,o,i,a;return a=r,r<0&&(a=r/(r-1),t=!0),0===a?Tr:1===a?gt:a>1?NaN:(a<.1?i=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(a-.05):a<.2?i=function(r){return 0===r?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+.26636380989261754*r))))))))))}(a-.15):a<.3?i=function(r){return 0===r?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+1.057652872753547*r))))))))))}(a-.25):a<.4?i=function(r){return 0===r?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+7.224080007363877*r)))))))))))}(a-.35):a<.5?i=function(r){return 0===r?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+90.27388602941*r))))))))))))}(a-.45):a<.6?i=function(r){return 0===r?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+2536.5297553827645*r)))))))))))))}(a-.55):a<.7?i=function(r){return 0===r?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+612757.2711915852*r)))))))))))))))}(a-.65):a<.8?i=function(r){return 0===r?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994.048255285+r*(9541921.966748387+r*(35634927.44218076+r*(133669298.46120408+r*(503352186.68662846+r*(1901975729.53866+7208915015.330104*r))))))))))))))))))}(a-.75):a<.85?i=function(r){return 0===r?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1847238.2637239718+r*(9600515.416049214+r*(50307677.08502367+r*(265444188.6527128+r*(1408862325.0287027+7515687935.373775*r))))))))))))))}(a-.825):a<.9?i=function(r){return 0===r?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1043999.3310899908+r*(7427974.817042039+r*(53503839.67558661+r*(389249886.99487084+r*(2855288351.1008105+r*(21090077038.76684+r*(156699833947.7902+r*(1170222242422.44+r*(8777948323668.9375+r*(66101242752484.95+r*(499488053713388.8+0x86813c6c7adde8*r))))))))))))))))))}(a-.875):(o=function(r){return 0===r?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+.003919665602267974*r)))))))))))))}(e=1-a),n=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(e-.05),i=-dt(o)*(n*bt)),t?i/Ur(1-r):i)}(u),a=(Tr+i*(n-e))/n),t?a*Ur(1-r):a)}return function(r){return xr(r,vt)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterEllipe=t();
//# sourceMappingURL=browser.js.map
