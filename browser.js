// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).iterEllipe=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,r=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,c=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var a,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(t,n)||f.call(t,n)?(a=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=a):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&i&&i.call(t,n,r.set),t};var a=n;function l(t,n,r){a(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,n){return null!=t&&d.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var n,r,e;if(null==t)return s.call(t);r=t[w],n=m(t,w);try{t[w]=void 0}catch(n){return s.call(t)}return e=s.call(t),n?t[w]=r:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",I);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function B(t){return null!==t&&"object"==typeof t}function G(t){var n,r,e,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=I.exec(e.toString()))return n[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!V(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(B));var k="function"==typeof y||"object"==typeof P||"function"==typeof F?function(t){return G(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?G(t).toLowerCase():n};function C(t){return"function"===k(t)}function L(t){var n=typeof t;return null!==t&&("object"===n||"function"===n)&&C(t.next)}function M(t){return"number"==typeof t}var Y=Number,q=Y.prototype.toString;var R=b();function X(t){return"object"==typeof t&&(t instanceof Y||(R?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function z(t){return M(t)||X(t)}l(z,"isPrimitive",M),l(z,"isObject",X);var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var H,J=Object.getPrototypeOf;H=C(Object.getPrototypeOf)?J:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var K=H;var Q=Object.prototype;function W(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),K(t))}(t),!n||!m(t,"constructor")&&m(n,"constructor")&&C(n.constructor)&&"[object Function]"===j(n.constructor)&&m(n,"isPrototypeOf")&&C(n.isPrototypeOf)&&(n===Q||function(t){var n;for(n in t)if(!m(t,n))return!1;return!0}(t)))}function Z(t,n){return W(n)?(m(n,"invalid")&&(t.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(t,n,r){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!C(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,r)))throw u;return l(o={},"next",c),l(o,"return",f),D&&C(t[D])&&l(o,D,a),o;function c(){var r;return i?{done:!0}:(r=t.next()).done?(i=!0,r):{value:M(r.value)?n(r.value):e.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function a(){return $(t[D](),n,e)}}var tt=Math.sqrt,nt=1.5707963267948966,rt="function"==typeof Uint32Array;var et="function"==typeof Uint32Array?Uint32Array:null;var ot,ut="function"==typeof Uint32Array?Uint32Array:void 0;ot=function(){var t,n,r;if("function"!=typeof et)return!1;try{n=new et(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(rt&&r instanceof Uint32Array||"[object Uint32Array]"===j(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?ut:function(){throw new Error("not implemented")};var it=ot,ct="function"==typeof Float64Array;var ft="function"==typeof Float64Array?Float64Array:null;var at,lt="function"==typeof Float64Array?Float64Array:void 0;at=function(){var t,n,r;if("function"!=typeof ft)return!1;try{n=new ft([1,3.14,-3.14,NaN]),r=n,t=(ct&&r instanceof Float64Array||"[object Float64Array]"===j(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?lt:function(){throw new Error("not implemented")};var yt=at,pt="function"==typeof Uint8Array;var vt="function"==typeof Uint8Array?Uint8Array:null;var bt,st="function"==typeof Uint8Array?Uint8Array:void 0;bt=function(){var t,n,r;if("function"!=typeof vt)return!1;try{n=new vt(n=[1,3.14,-3.14,256,257]),r=n,t=(pt&&r instanceof Uint8Array||"[object Uint8Array]"===j(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?st:function(){throw new Error("not implemented")};var dt=bt,mt="function"==typeof Uint16Array;var wt="function"==typeof Uint16Array?Uint16Array:null;var jt,At="function"==typeof Uint16Array?Uint16Array:void 0;jt=function(){var t,n,r;if("function"!=typeof wt)return!1;try{n=new wt(n=[1,3.14,-3.14,65536,65537]),r=n,t=(mt&&r instanceof Uint16Array||"[object Uint16Array]"===j(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?At:function(){throw new Error("not implemented")};var gt,_t={uint16:jt,uint8:dt};(gt=new _t.uint16(1))[0]=4660;var ht=52===new _t.uint8(gt.buffer)[0],Ot=!0===ht?1:0,Ut=new yt(1),St=new it(Ut.buffer);function Et(t){return Ut[0]=t,St[Ot]}var Nt=!0===ht?1:0,Tt=new yt(1),Ft=new it(Tt.buffer);var Pt=Y.NEGATIVE_INFINITY;var xt=.6931471803691238,It=1.9082149292705877e-10,Vt=1048575;function Bt(t){var n,r,e,o,u,i,c,f,a,l,y,p;return 0===t?Pt:function(t){return t!=t}(t)||t<0?NaN:(u=0,(r=Et(t))<1048576&&(u-=54,r=Et(t*=0x40000000000000)),r>=2146435072?t+t:(u+=(r>>20)-1023|0,u+=(f=(r&=Vt)+614244&1048576|0)>>20|0,c=(t=function(t,n){return Tt[0]=t,Ft[Nt]=n>>>0,Tt[0]}(t,r|1072693248^f))-1,(Vt&2+r)<3?0===c?0===u?0:u*xt+u*It:(i=c*c*(.5-.3333333333333333*c),0===u?c-i:u*xt-(i-u*It-c)):(f=r-398458|0,a=440401-r|0,o=(y=(p=(l=c/(2+c))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),i=e+o,(f|=a)>0?(n=.5*c*c,0===u?c-(n-l*(n+i)):u*xt-(n-(l*(n+i)+u*It)-c)):0===u?c-l*(c-i):u*xt-(l*(c-i)-u*It-c))))}var Gt=Number.POSITIVE_INFINITY;function kt(t){var n,r,e,o,u,i,c;return c=t,t<0&&(c=t/(t-1),n=!0),0===c?nt:1===c?1:c>1?NaN:(c<.1?i=function(t){return 0===t?1.5509733517804722:1.5509733517804722+t*(t*(t*(t*(t*(t*(t*(t*(-.004809187786009338*t-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(c-.05):c<.2?i=function(t){return 0===t?1.5101218320928198:1.5101218320928198+t*(t*(t*(t*(t*(t*(t*(t*(t*(-.011197445703074968*t-.011799303775587354)-.012759847429264804)-.01426196082884252)-.016650786739707237)-.020644781177568104)-.027965493064761784)-.04372994401908431)-.09012382040477457)-.41711633390586755)}(c-.15):c<.3?i=function(t){return 0===t?1.4674622093394272:1.4674622093394272+t*(t*(t*(t*(t*(t*(t*(t*(t*(-.03478996038640416*t-.03237139531475812)-.0309169840192389)-.030527000890325277)-.031495443512532785)-.03452772850528084)-.04139162772734022)-.05737184359324173)-.10515555766694255)-.43657629094633776)}(c-.25):c<.4?i=function(t){return 0===t?1.4226911334908792:1.4226911334908792+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-.1607911206912746*t-.12705358515769605)-.102539850131046)-.084959075171781)-.07279389536257878)-.06519703281557247)-.06208433913173031)-.06471427847205)-.07813854509440948)-.12525053982206188)-.4595135196210487)}(c-.35):c<.5?i=function(t){return 0===t?1.3754019718711163:1.3754019718711163+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1.3088332057585401*t-.8605232357272398)-.5757544060278792)-.39351311430437586)-.27617433306775174)-.20049532364269734)-.15221716396203505)-.12295422312026907)-.10884095252313576)-.11184944491702783)-.15331170134854022)-.4872021832731848)}(c-.45):c<.6?i=function(t){return 0===t?1.3250244979582302:1.3250244979582302+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-11.97703130208884*t-6.446753640156048)-3.5316967730957227)-1.9767211439543984)-1.1363431218392293)-.675948400853106)-.42069845728100574)-.27879895311853475)-.20275465292641914)-.17162372682201127)-.19490643048212622)-.5217276475575667)}(c-.55):c<.7?i=function(t){return 0===t?1.2707074796501499:1.2707074796501499+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1137.38082216936*t-463.5938853480342)-191.34894807629848)-80.15895841905397)-34.18120574251449)-14.89436036517319)-6.6675959033810015)-3.089708310445187)-1.498870837987561)-.7749476413813975)-.4403978408504232)-.2922441735330774)-.2621607934324926)-.5668391682878666)}(c-.65):c<.8?i=function(t){return 0===t?1.2110560275684594:1.2110560275684594+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1104011.3443115912*t-315126.04064491636)-90799.48341621365)-26448.19586059192)-7801.945954775964)-2336.1253314403966)-712.1364793277636)-221.879685319235)-71.04099935893065)-23.55507217389693)-8.18168822157359)-3.0320566617452474)-1.23755558451305)-.5922782353119346)-.38716640952066916)-.6303064132874558)}(c-.75):c<.85?i=function(t){return 0===t?1.1613071521962828:1.1613071521962828+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-1920033.4136826345*t-396650.4505013548)-83182.69029154233)-17761.7071017094)-3877.0058473132895)-869.8602699308701)-202.18187354340904)-49.25672530759985)-12.815909243378957)-3.679383613496635)-1.2436930610777865)-.5805514744654373)-.7011002845552895)}(c-.825):c<.9?i=function(t){return 0===t?1.1246173251197522:1.1246173251197522+t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(t*(-36409256888.1214*t-5198725846.725541)-749380758.1942496)-109209938.52030899)-16120097.815816568)-2415611.0887010912)-368596.11674161063)-57502.51612140314)-9222.313478526092)-1532.66588382523)-267.09866751957054)-49.7490054655148)-10.239717411543843)-2.4900973094503946)-.8447940536449113)-.7708450563609095)}(c-.875):(r=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(o=.95-c),e=function(t){return 0===t?1.5509733517804722:1.5509733517804722+t*(t*(t*(t*(t*(t*(t*(t*(-.004809187786009338*t-.00580742401295609)-.007246728512402157)-.009442372874146548)-.01305950773199331)-.0197180433173655)-.034318853117591995)-.07849861944294194)-.4003010201031985)}(o),u=function(t){var n,r,e,o,u,i;return i=t,t<0&&(i=t/(t-1),n=!0),0===i?nt:1===i?Gt:i>1?NaN:(i<.1?u=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(i-.05):i<.2?u=function(t){return 0===t?1.63525673226458:1.63525673226458+t*(.4711906261487323+t*(.3097284108314996+t*(.2522083117731357+t*(.22672562321968465+t*(.21577444672958598+t*(.21310877187734892+t*(.21602912460518828+t*(.2232558316330579+t*(.23418050129420992+t*(.24855768297226408+.26636380989261754*t))))))))))}(i-.15):i<.3?u=function(t){return 0===t?1.685750354812596:1.685750354812596+t*(.5417318486132803+t*(.40152443839069024+t*(.3696424734208891+t*(.37606071535458363+t*(.4052358870851259+t*(.45329438175399905+t*(.5205189476511842+t*(.609426039204995+t*(.7242635222829089+t*(.8710138477098124+1.057652872753547*t))))))))))}(i-.25):i<.4?u=function(t){return 0===t?1.7443505972256133:1.7443505972256133+t*(.6348642753719353+t*(.5398425641644455+t*(.5718927051937874+t*(.6702951362654062+t*(.8325865900109772+t*(1.0738574482479333+t*(1.4220914606754977+t*(1.9203871834023047+t*(2.6325525483316543+t*(3.6521097473190394+t*(5.115867135558866+7.224080007363877*t)))))))))))}(i-.35):i<.5?u=function(t){return 0===t?1.8138839368169826:1.8138839368169826+t*(.7631632457005573+t*(.7619286053215958+t*(.9510746536684279+t*(1.315180671703161+t*(1.9285606934774109+t*(2.9375093425313787+t*(4.594894405442878+t*(7.33007122188172+t*(11.871512597425301+t*(19.45851374822938+t*(32.20638657246427+t*(53.73749198700555+90.27388602941*t))))))))))))}(i-.45):i<.6?u=function(t){return 0===t?1.8989249102715535:1.8989249102715535+t*(.9505217946182445+t*(1.1510775899590158+t*(1.7502391069863006+t*(2.952676812636875+t*(5.285800396121451+t*(9.83248571665998+t*(18.787148683275596+t*(36.61468615273698+t*(72.45292395127771+t*(145.1079577347069+t*(293.4786396308497+t*(598.385181505501+t*(1228.4200130758634+2536.5297553827645*t)))))))))))))}(i-.55):i<.7?u=function(t){return 0===t?2.0075983984243764:2.0075983984243764+t*(1.2484572312123474+t*(1.9262346570764797+t*(3.7512896400875877+t*(8.119944554932045+t*(18.665721308735552+t*(44.603924842914374+t*(109.50920543094983+t*(274.2779548232414+t*(697.5598008606327+t*(1795.7160145002472+t*(4668.38171679039+t*(12235.762468136643+t*(32290.17809718321+t*(85713.07608195965+t*(228672.1890493117+612757.2711915852*t)))))))))))))))}(i-.65):i<.8?u=function(t){return 0===t?2.1565156474996434:2.1565156474996434+t*(1.7918056418494632+t*(3.8267512874657132+t*(10.386724683637972+t*(31.403314054680703+t*(100.92370394986955+t*(337.3268282632273+t*(1158.7079305678278+t*(4060.9907421936323+t*(14454.001840343448+t*(52076.661075994045+t*(189493.65914621568+t*(695184.5762413896+t*(2567994.048255285+t*(9541921.966748387+t*(35634927.44218076+t*(133669298.46120408+t*(503352186.68662846+t*(1901975729.53866+7208915015.330104*t))))))))))))))))))}(i-.75):i<.85?u=function(t){return 0===t?2.3181226217125106:2.3181226217125106+t*(2.6169201502912327+t*(7.897935075731356+t*(30.502397154466724+t*(131.48693655235286+t*(602.9847637356492+t*(2877.024617809973+t*(14110.519919151804+t*(70621.4408815654+t*(358977.266582531+t*(1847238.2637239718+t*(9600515.416049214+t*(50307677.08502367+t*(265444188.6527128+t*(1408862325.0287027+7515687935.373775*t))))))))))))))}(i-.825):i<.9?u=function(t){return 0===t?2.473596173751344:2.473596173751344+t*(3.727624244118099+t*(15.607393035549306+t*(84.12850842805888+t*(506.98181970406137+t*(3252.2770581451236+t*(21713.242419574344+t*(149037.04518909327+t*(1043999.3310899908+t*(7427974.817042039+t*(53503839.67558661+t*(389249886.99487084+t*(2855288351.1008105+t*(21090077038.76684+t*(156699833947.7902+t*(1170222242422.44+t*(8777948323668.9375+t*(66101242752484.95+t*(499488053713388.8+0x86813c6c7adde8*t))))))))))))))))))}(i-.875):(o=function(t){return 0===t?0:0+t*(.0625+t*(.03125+t*(.0205078125+t*(.01513671875+t*(.011934280395507812+t*(.009816169738769531+t*(.008315593004226685+t*(.007199153304100037+t*(.00633745662344154+t*(.00565311038371874+t*(.005097046040418718+t*(.004636680381850056+t*(.004249547423822886+.003919665602267974*t)))))))))))))}(e=1-i),r=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(e-.05),u=-Bt(o)*(.3183098861837907*r)),n?u/tt(1-t):u)}(c),i=(nt+u*(r-e))/r),n?i*tt(1-t):i)}return function(t){return $(t,kt)}}));
//# sourceMappingURL=browser.js.map
