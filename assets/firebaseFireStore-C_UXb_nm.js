import{L as t,_ as e,C as n,r as s,F as r,e as i,c as o,t as a,k as h,u,S as c,b as l,v as d,l as f,w as g}from"./firebaseApp-BcsjuigZ.js";var p,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=y||{},v=m||self;function w(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function E(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var T="closure_uid_"+(1e9*Math.random()>>>0),_=0;function b(t,e,n){return t.call.apply(t.bind,arguments)}function S(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function I(t,e,n){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:S).apply(null,arguments)}function C(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function A(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function D(){this.s=this.s,this.o=this.o}D.prototype.s=!1,D.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,T)&&t[T]||(t[T]=++_))},D.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function N(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function x(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(w(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function R(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};v.addEventListener("test",t,e),v.removeEventListener("test",t,e)}catch(n){}return t}();function M(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=v.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return-1!=O().indexOf(t)}function F(t){return F[" "](t),t}F[" "]=function(){};var V,U,j,q=P("Opera"),B=P("Trident")||P("MSIE"),z=P("Edge"),K=z||B,$=P("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),G=-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge");function Q(){var t=v.document;return t?t.documentMode:void 0}t:{var H="",W=(U=O(),$?/rv:([^\);]+)(\)|;)/.exec(U):z?/Edge\/([\d\.]+)/.exec(U):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(U):G?/WebKit\/(\S+)/.exec(U):q?/(?:Version)[ \/]?(\S+)/.exec(U):void 0);if(W&&(H=W?W[1]:""),B){var X=Q();if(null!=X&&X>parseFloat(H)){V=String(X);break t}}V=H}if(v.document&&B){var Y=Q();j=Y||(parseInt(V,10)||void 0)}else j=void 0;var J=j;function Z(t,e){if(R.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{F(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.$.h.call(this)}}A(Z,R);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function st(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++nt,this.fa=this.ia=!1}function rt(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function it(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ut(t){this.src=t,this.g={},this.h=0}function ct(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=k(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lt(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}ut.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=lt(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new st(e,this.src,i,!!s,r)).ia=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function gt(t,e,n,s,r){if(s&&s.once)return mt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,s,r);return null}return n=bt(n),t&&t[et]?t.O(e,n,E(s)?!!s.capture:!!s,r):pt(t,e,n,!1,s,r)}function pt(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=E(r)?!!r.capture:!!r,a=Tt(t);if(a||(t[dt]=a=new ut(t)),(n=a.add(e,n,s,o,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Et;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)L||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function mt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)mt(t,e[i],n,s,r);return null}return n=bt(n),t&&t[et]?t.P(e,n,E(s)?!!s.capture:!!s,r):pt(t,e,n,!0,s,r)}function yt(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yt(t,e[i],n,s,r);else s=E(s)?!!s.capture:!!s,n=bt(n),t&&t[et]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=lt(i=t.g[e],n,s,r))&&(rt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lt(e,n,s,r)),(n=-1<t?e[t]:null)&&vt(n))}function vt(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[et])ct(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Tt(e))?(ct(n,t),0==n.h&&(n.src=null,e[dt]=null)):rt(t)}}}function wt(t){return t in ft?ft[t]:ft[t]="on"+t}function Et(t,e){if(t.fa)t=!0;else{e=new Z(e,this);var n=t.listener,s=t.la||t.src;t.ia&&vt(t),t=n.call(s,e)}return t}function Tt(t){return(t=t[dt])instanceof ut?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"==typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function St(){D.call(this),this.i=new ut(this),this.S=this,this.J=null}function It(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"==typeof e)e=new R(e,t);else if(e instanceof R)e.target=e.target||t;else{var r=e;ht(e=new R(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ct(o,s,!0,e)&&r}if(r=Ct(o=e.g=t,s,!0,e)&&r,r=Ct(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=Ct(o=e.g=n[i],s,!1,e)&&r}function Ct(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&ct(t.i,o),r=!1!==a.call(h,s)&&r}}return r&&!s.defaultPrevented}A(St,D),St.prototype[et]=!0,St.prototype.removeEventListener=function(t,e,n,s){yt(this,t,e,n,s)},St.prototype.N=function(){if(St.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)rt(n[s]);delete e.g[t],e.h--}}this.J=null},St.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},St.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var At=v.JSON.stringify;function Dt(){var t=Ot;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var kt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Nt),(t=>t.reset()));class Nt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Rt(t){v.setTimeout((()=>{throw t}),0)}let Lt,Mt=!1,Ot=new class{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Pt=()=>{const t=v.Promise.resolve(void 0);Lt=()=>{t.then(Ft)}};var Ft=()=>{for(var t;t=Dt();){try{t.h.call(t.g)}catch(n){Rt(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mt=!1};function Vt(t,e){St.call(this),this.h=t||1,this.g=e||v,this.j=I(this.qb,this),this.l=Date.now()}function Ut(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function jt(t,e,n){if("function"==typeof t)n&&(t=I(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=I(t.handleEvent,t)}return 2147483647<Number(e)?-1:v.setTimeout(t,e||0)}function qt(t){t.g=jt((()=>{t.g=null,t.i&&(t.i=!1,qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}A(Vt,St),(p=Vt.prototype).ga=!1,p.T=null,p.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(Ut(this),this.start()))}},p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},p.N=function(){Vt.$.N.call(this),Ut(this),delete this.g};class Bt extends D{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qt(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){D.call(this),this.h=t,this.g={}}A(zt,D);var Kt=[];function $t(t,e,n,s){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var r=0;r<n.length;r++){var i=gt(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gt(t){it(t.g,(function(t,e){this.g.hasOwnProperty(e)&&vt(t)}),t),t.g={}}function Qt(){this.g=!0}function Ht(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return At(n)}catch(a){return e}}(t,n)+(s?" "+s:"")}))}zt.prototype.N=function(){zt.$.N.call(this),Gt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Ea=function(){this.g=!1},Qt.prototype.info=function(){};var Wt={},Xt=null;function Yt(){return Xt=Xt||new St}function Jt(t){R.call(this,Wt.Ta,t)}function Zt(t){const e=Yt();It(e,new Jt(e))}function te(t,e){R.call(this,Wt.STAT_EVENT,t),this.stat=e}function ee(t){const e=Yt();It(e,new te(e,t))}function ne(t,e){R.call(this,Wt.Ua,t),this.size=e}function se(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return v.setTimeout((function(){t()}),e)}Wt.Ta="serverreachability",A(Jt,R),Wt.STAT_EVENT="statevent",A(te,R),Wt.Ua="timingevent",A(ne,R);var re={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ie={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function oe(){}function ae(t){return t.h||(t.h=t.i())}function he(){}oe.prototype.h=null;var ue,ce={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function le(){R.call(this,"d")}function de(){R.call(this,"c")}function fe(){}function ge(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new zt(this),this.P=me,t=K?125:void 0,this.V=new Vt(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pe}function pe(){this.i=null,this.g="",this.h=!1}A(le,R),A(de,R),A(fe,oe),fe.prototype.g=function(){return new XMLHttpRequest},fe.prototype.i=function(){return{}},ue=new fe;var me=45e3,ye={},ve={};function we(t,e,n){t.L=1,t.A=Ve(Le(e)),t.u=n,t.S=!0,Ee(t,null)}function Ee(t,e){t.G=Date.now(),Se(t),t.B=Le(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),Ye(n.i,"t",s),t.o=0,n=t.l.J,t.h=new pe,t.g=Jn(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Bt(I(t.Pa,t,t.g),t.O)),$t(t.U,t.g,"readystatechange",t.nb),e=t.I?ot(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Zt(),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),h=0;h<a.length;h++){var u=a[h].split("=");if(1<u.length){var c=u[0];u=u[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function Te(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function _e(t,e,n){let s,r=!0;for(;!t.J&&t.o<n.length;){if(s=be(t,n),s==ve){4==e&&(t.s=4,ee(14),r=!1),Ht(t.j,t.m,null,"[Incomplete Response]");break}if(s==ye){t.s=4,ee(15),Ht(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Ht(t.j,t.m,s,null),ke(t,s)}Te(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,ee(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kn(e),e.M=!0,ee(11))):(Ht(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),Ae(t))}function be(t,e){var n=t.o,s=e.indexOf("\n",n);return-1==s?ve:(n=Number(e.substring(n,s)),isNaN(n)?ye:(s+=1)+n>e.length?ve:(e=e.slice(s,s+n),t.o=s+n,e))}function Se(t){t.Y=Date.now()+t.P,Ie(t,t.P)}function Ie(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=se(I(t.lb,t),e)}function Ce(t){t.C&&(v.clearTimeout(t.C),t.C=null)}function Ae(t){0==t.l.H||t.J||Qn(t.l,t)}function De(t){Ce(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ut(t.V),Gt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ke(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||rn(n.i,t)))if(!t.K&&rn(n.i,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Gn(n),Pn(n)}zn(n),ee(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=se(I(n.ib,n),6e3));if(1>=sn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else Wn(n,11)}else if((t.K||n.g==t)&&Gn(n),!M(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=u[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(s=1.5*c,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.i;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(on(i,i.h),i.h=null))}if(s.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,Fe(s.I,s.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((s=n).wa=Yn(s,s.J?s.pa:null,s.Y),o.K){an(s.i,o);var a=o,h=s.L;h&&a.setTimeout(h),a.C&&(Ce(a),Se(a)),s.g=o}else Bn(s);0<n.j.length&&Vn(n)}else"stop"!=u[0]&&"close"!=u[0]||Wn(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Wn(n,7):On(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Zt()}catch(u){}}function Ne(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(w(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(w(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(w(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}(p=ge.prototype).setTimeout=function(t){this.P=t},p.nb=function(t){t=t.target;const e=this.M;e&&3==kn(t)?e.l():this.Pa(t)},p.Pa=function(t){try{if(t==this.g)t:{const c=kn(this.g);var e=this.g.Ia();this.g.da();if(!(3>c)&&(3!=c||K||this.g&&(this.h.h||this.g.ja()||Nn(this.g)))){this.J||4!=c||7==e||Zt(),Ce(this);var n=this.g.da();this.ca=n;e:if(Te(this)){var s=Nn(this.g);t="";var r=s.length,i=4==kn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){De(this),Ae(this);var o="";break e}this.h.i=new v.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.s=3,ee(12),De(this),Ae(this);break t}Ht(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ke(this,n)}this.S?(_e(this,c,o),K&&this.i&&3==c&&($t(this.U,this.V,"tick",this.mb),this.V.start())):(Ht(this.j,this.m,o,null),ke(this,o)),4==c&&De(this),this.i&&!this.J&&(4==c?Qn(this.l,this):(this.i=!1,Se(this)))}else(function(t){const e={};t=(t.g&&2<=kn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(M(t[s]))continue;var n=xt(t[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),De(this),Ae(this)}}}catch(c){}},p.mb=function(){if(this.g){var t=kn(this.g),e=this.g.ja();this.o<e.length&&(Ce(this),_e(this,t,e),this.i&&4!=t&&Se(this))}},p.cancel=function(){this.J=!0,De(this)},p.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&(Zt(),ee(17)),De(this),this.s=2,Ae(this)):Ie(this,this.Y-t)};var xe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Re(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Re){this.h=t.h,Me(this,t.j),this.s=t.s,this.g=t.g,Oe(this,t.m),this.l=t.l;var e=t.i,n=new Qe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pe(this,n),this.o=t.o}else t&&(e=String(t).match(xe))?(this.h=!1,Me(this,e[1]||"",!0),this.s=Ue(e[2]||""),this.g=Ue(e[3]||"",!0),Oe(this,e[4]),this.l=Ue(e[5]||"",!0),Pe(this,e[6]||"",!0),this.o=Ue(e[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}function Le(t){return new Re(t)}function Me(t,e,n){t.j=n?Ue(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pe(t,e,n){e instanceof Qe?(t.i=e,function(t,e){e&&!t.j&&(He(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(We(this,e),Ye(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=je(e,$e)),t.i=new Qe(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function Ve(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ue(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function je(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,qe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(je(e,Be,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(je(e,Be,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(je(n,"/"==n.charAt(0)?Ke:ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",je(n,Ge)),t.join("")};var Be=/[#\/\?@]/g,ze=/[#\?:]/g,Ke=/[#\?]/g,$e=/[#\?@]/g,Ge=/#/g;function Qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function He(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function We(t,e){He(t),e=Je(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Xe(t,e){return He(t),e=Je(t,e),t.g.has(e)}function Ye(t,e,n){We(t,e),0<n.length&&(t.i=null,t.g.set(Je(t,e),N(n)),t.h+=n.length)}function Je(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(p=Qe.prototype).add=function(t,e){He(this),this.i=null,t=Je(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},p.forEach=function(t,e){He(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},p.ta=function(){He(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},p.Z=function(t){He(this);let e=[];if("string"==typeof t)Xe(this,t)&&(e=e.concat(this.g.get(Je(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},p.set=function(t,e){return He(this),this.i=null,Xe(this,t=Je(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},p.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};var Ze=class{constructor(t,e){this.g=t,this.map=e}};function tn(t){this.l=t||en,v.PerformanceNavigationTiming?t=0<(t=v.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var en=10;function nn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function sn(t){return t.h?1:t.g?t.g.size:0}function rn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function on(t,e){t.g?t.g.add(e):t.h=e}function an(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function hn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return N(t.i)}tn.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var un=class{stringify(t){return v.JSON.stringify(t,void 0)}parse(t){return v.JSON.parse(t,void 0)}};function cn(){this.g=new un}function ln(t,e,n){const s=n||"";try{Ne(t,(function(t,n){let r=t;E(t)&&(r=At(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function dn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function fn(t){this.l=t.ec||null,this.j=t.ob||!1}function gn(t,e){St.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}A(fn,oe),fn.prototype.g=function(){return new gn(this.l,this.j)},fn.prototype.i=function(t){return function(){return t}}({}),A(gn,St);var pn=0;function mn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function yn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vn(t)}function vn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(p=gn.prototype).open=function(t,e){if(this.readyState!=pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vn(this)},p.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||v).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,yn(this)),this.readyState=pn},p.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==v.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},p.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yn(this):vn(this),3==this.readyState&&mn(this)}},p.Za=function(t){this.g&&(this.response=this.responseText=t,yn(this))},p.Ya=function(t){this.g&&(this.response=t,yn(this))},p.ka=function(){this.g&&yn(this)},p.setRequestHeader=function(t,e){this.v.append(t,e)},p.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},p.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var wn=v.JSON.parse;function En(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tn,this.L=this.M=!1}A(En,St);var Tn="",_n=/^https?$/i,bn=["POST","PUT"];function Sn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,In(t),An(t)}function In(t){t.F||(t.F=!0,It(t,"complete"),It(t,"error"))}function Cn(t){if(t.h&&void 0!==y&&(!t.C[1]||4!=kn(t)||2!=t.da()))if(t.v&&4==kn(t))jt(t.La,0,t);else if(It(t,"readystatechange"),4==kn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var r=String(t.I).match(xe)[1]||null;!r&&v.self&&v.self.location&&(r=v.self.location.protocol.slice(0,-1)),s=!_n.test(r?r.toLowerCase():"")}n=s}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var i=2<kn(t)?t.g.statusText:""}catch(o){i=""}t.j=i+" ["+t.da()+"]",In(t)}}finally{An(t)}}}function An(t,e){if(t.g){Dn(t);const s=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||It(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function Dn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(v.clearTimeout(t.A),t.A=null)}function kn(t){return t.g?t.g.readyState:0}function Nn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Tn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function xn(t){let e="";return it(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Rn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=xn(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Fe(t,e,n))}function Ln(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mn(t){this.Ga=0,this.j=[],this.l=new Qt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ln("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ln("baseRetryDelayMs",5e3,t),this.hb=Ln("retryDelaySeedMs",1e4,t),this.eb=Ln("forwardChannelMaxRetries",2,t),this.xa=Ln("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new tn(t&&t.concurrentRequestLimit),this.Ja=new cn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function On(t){if(Fn(t),3==t.H){var e=t.W++,n=Le(t.I);if(Fe(n,"SID",t.K),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),jn(t,n),(e=new ge(t,t.l,e)).L=2,e.A=Ve(Le(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(e.A.toString(),"")}catch(s){}!n&&v.Image&&((new Image).src=e.A,n=!0),n||(e.g=Jn(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Se(e)}Xn(t)}function Pn(t){t.g&&(Kn(t),t.g.cancel(),t.g=null)}function Fn(t){Pn(t),t.u&&(v.clearTimeout(t.u),t.u=null),Gn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&v.clearTimeout(t.m),t.m=null)}function Vn(t){if(!nn(t.i)&&!t.m){t.m=!0;var e=t.Na;Lt||Pt(),Mt||(Lt(),Mt=!0),Ot.add(e,t),t.C=0}}function Un(t,e){var n;n=e?e.m:t.W++;const s=Le(t.I);Fe(s,"SID",t.K),Fe(s,"RID",n),Fe(s,"AID",t.V),jn(t,s),t.o&&t.s&&Rn(s,t.o,t.s),n=new ge(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=qn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),on(t.i,n),we(n,s,e)}function jn(t,e){t.na&&it(t.na,(function(t,n){Fe(e,n,t)})),t.h&&Ne({},(function(t,n){Fe(e,n,t)}))}function qn(t,e,n){n=Math.min(t.j.length,n);var s=t.h?I(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const h=r[a].map;if(n-=e,0>n)e=Math.max(0,r[a].g-100),o=!1;else try{ln(h,t,"req"+n+"_")}catch(i){s&&s(h)}}if(o){s=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,s}function Bn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Lt||Pt(),Mt||(Lt(),Mt=!0),Ot.add(e,t),t.A=0}}function zn(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=se(I(t.Ma,t),Hn(t,t.A)),t.A++,!0)}function Kn(t){null!=t.B&&(v.clearTimeout(t.B),t.B=null)}function $n(t){t.g=new ge(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Le(t.wa);Fe(e,"RID","rpc"),Fe(e,"SID",t.K),Fe(e,"AID",t.V),Fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Fe(e,"TO",t.qa),Fe(e,"TYPE","xmlhttp"),jn(t,e),t.o&&t.s&&Rn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ve(Le(e)),n.u=null,n.S=!0,Ee(n,t)}function Gn(t){null!=t.v&&(v.clearTimeout(t.v),t.v=null)}function Qn(t,e){var n=null;if(t.g==e){Gn(t),Kn(t),t.g=null;var s=2}else{if(!rn(t.i,e))return;n=e.F,an(t.i,e),s=1}if(0!=t.H)if(e.i)if(1==s){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;It(s=Yt(),new ne(s,n)),Vn(t)}else Bn(t);else if(3==(r=e.s)||0==r&&0<e.ca||!(1==s&&function(t,e){return!(sn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=se(I(t.Na,t,e),Hn(t,t.C)),t.C++,0)))}(t,e)||2==s&&zn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Wn(t,5);break;case 4:Wn(t,10);break;case 3:Wn(t,6);break;default:Wn(t,2)}}function Hn(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wn(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var s=I(t.pb,t);n||(n=new Re("//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||Me(n,"https"),Ve(n)),function(t,e){const n=new Qt;if(v.Image){const s=new Image;s.onload=C(dn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=C(dn,n,s,"TestLoadImage: error",!1,e),s.onabort=C(dn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=C(dn,n,s,"TestLoadImage: timeout",!1,e),v.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else ee(2);t.H=0,t.h&&t.h.za(e),Xn(t),Fn(t)}function Xn(t){if(t.H=0,t.ma=[],t.h){const e=hn(t.i);0==e.length&&0==t.j.length||(x(t.ma,e),x(t.ma,t.j),t.i.i.length=0,N(t.j),t.j.length=0),t.h.ya()}}function Yn(t,e,n){var s=n instanceof Re?Le(n):new Re(n);if(""!=s.g)e&&(s.g=e+"."+s.g),Oe(s,s.m);else{var r=v.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Re(null);s&&Me(i,s),e&&(i.g=e),r&&Oe(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Fe(s,n,e),Fe(s,"VER",t.ra),jn(t,s),s}function Jn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new En(new fn({ob:n})):new En(t.va)).Oa(t.J),e}function Zn(){}function ts(){if(B&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function es(t,e){St.call(this),this.g=new Mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!M(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!M(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new rs(this)}function ns(t){le.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ss(){de.call(this),this.status=1}function rs(t){this.g=t}function is(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function os(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;o=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=(n=(r=(i=(e=n+(o<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^n&(r^i))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^e&(n^r))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(i^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^i&(n^r))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^i&(n^r))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(i^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^e&(r^i))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^i)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^i)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(e^n^r)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~i))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~i))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~i))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(i|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(e=n+((o=e+(r^(n|~i))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(e|~r))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=i+((o=r+(e^(i|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}function as(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=0|t[r];s&&i==e||(n[r]=i,s=!1)}this.g=n}(p=En.prototype).Oa=function(t){this.M=t},p.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ue.g(),this.C=this.u?ae(this.u):ae(ue),this.g.onreadystatechange=I(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){return void Sn(this,i)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=v.FormData&&t instanceof v.FormData,!(0<=k(bn,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Dn(this),0<this.B&&((this.L=function(t){return B&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.ua,this)):this.A=jt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Sn(this,i)}},p.ua=function(){void 0!==y&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))},p.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),An(this))},p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),An(this,!0)),En.$.N.call(this)},p.La=function(){this.s||(this.G||this.v||this.l?Cn(this):this.kb())},p.kb=function(){Cn(this)},p.isActive=function(){return!!this.g},p.da=function(){try{return 2<kn(this)?this.g.status:-1}catch(U){return-1}},p.ja=function(){try{return this.g?this.g.responseText:""}catch(U){return""}},p.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),wn(e)}},p.Ia=function(){return this.m},p.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(p=Mn.prototype).ra=8,p.H=1,p.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ge(this,this.l,t);let i=this.s;if(this.U&&(i?(i=ot(i),ht(i,this.U)):i=this.U),null!==this.o||this.O||(r.I=i,i=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=qn(this,r,e),Fe(n=Le(this.I),"RID",t),Fe(n,"CVER",22),this.F&&Fe(n,"X-HTTP-Session-Id",this.F),jn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(xn(i)))+"&"+e:this.o&&Rn(n,this.o,i)),on(this.i,r),this.bb&&Fe(n,"TYPE","init"),this.P?(Fe(n,"$req",e),Fe(n,"SID","null"),r.aa=!0,we(r,n,null)):we(r,n,e),this.H=2}}else 3==this.H&&(t?Un(this,t):0==this.j.length||nn(this.i)||Un(this))},p.Ma=function(){if(this.u=null,$n(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=se(I(this.jb,this),t)}},p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ee(10),Pn(this),$n(this))},p.ib=function(){null!=this.v&&(this.v=null,Pn(this),zn(this),ee(19))},p.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ee(2)):(this.l.info("Failed to ping google.com"),ee(1))},p.isActive=function(){return!!this.h&&this.h.isActive(this)},(p=Zn.prototype).Ba=function(){},p.Aa=function(){},p.za=function(){},p.ya=function(){},p.isActive=function(){return!0},p.Va=function(){},ts.prototype.g=function(t,e){return new es(t,e)},A(es,St),es.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ee(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Yn(t,null,t.Y),Vn(t)},es.prototype.close=function(){On(this.g)},es.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=At(t),t=n);e.j.push(new Ze(e.fb++,t)),3==e.H&&Vn(e)},es.prototype.N=function(){this.g.h=null,delete this.j,On(this.g),delete this.g,es.$.N.call(this)},A(ns,le),A(ss,de),A(rs,Zn),rs.prototype.Ba=function(){It(this.g,"a")},rs.prototype.Aa=function(t){It(this.g,new ns(t))},rs.prototype.za=function(t){It(this.g,new ss)},rs.prototype.ya=function(){It(this.g,"b")},A(is,(function(){this.blockSize=-1})),is.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},is.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(0==r)for(;i<=n;)os(this,t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){os(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){os(this,s),r=0;break}}this.h=r,this.i+=e},is.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var hs={};function us(t){return-128<=t&&128>t?function(t,e){var n=hs;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new as([0|t],0>t?-1:0)})):new as([0|t],0>t?-1:0)}function cs(t){if(isNaN(t)||!isFinite(t))return ds;if(0>t)return ys(cs(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ls;return new as(e,0)}var ls=4294967296,ds=us(0),fs=us(1),gs=us(16777216);function ps(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function ms(t){return-1==t.h}function ys(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new as(n,~t.h).add(fs)}function vs(t,e){return t.add(ys(e))}function ws(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Es(t,e){this.g=t,this.h=e}function Ts(t,e){if(ps(e))throw Error("division by zero");if(ps(t))return new Es(ds,ds);if(ms(t))return e=Ts(ys(t),e),new Es(ys(e.g),ys(e.h));if(ms(e))return e=Ts(t,ys(e)),new Es(ys(e.g),e.h);if(30<t.g.length){if(ms(t)||ms(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fs,s=e;0>=s.X(t);)n=_s(n),s=_s(s);var r=bs(n,1),i=bs(s,1);for(s=bs(s,2),n=bs(n,2);!ps(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=bs(s,1),n=bs(n,1)}return e=vs(t,r.R(e)),new Es(r,e)}for(r=ds;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(i=cs(n)).R(e);ms(o)||0<o.X(t);)o=(i=cs(n-=s)).R(e);ps(i)&&(i=fs),r=r.add(i),t=vs(t,o)}return new Es(r,t)}function _s(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new as(n,t.h)}function bs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new as(r,t.h)}(p=as.prototype).ea=function(){if(ms(this))return-ys(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ls+s)*e,e*=ls}return t},p.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(ps(this))return"0";if(ms(this))return"-"+ys(this).toString(t);for(var e=cs(Math.pow(t,6)),n=this,s="";;){var r=Ts(n,e).g,i=((0<(n=vs(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(ps(n=r))return i+s;for(;6>i.length;)i="0"+i;s=i+s}},p.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},p.X=function(t){return ms(t=vs(this,t))?-1:ps(t)?0:1},p.abs=function(){return ms(this)?ys(this):this},p.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(65535&this.D(r))+(65535&t.D(r)),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new as(n,-2147483648&n[n.length-1]?-1:0)},p.R=function(t){if(ps(this)||ps(t))return ds;if(ms(this))return ms(t)?ys(this).R(ys(t)):ys(ys(this).R(t));if(ms(t))return ys(this.R(ys(t)));if(0>this.X(gs)&&0>t.X(gs))return cs(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=65535&this.D(s),a=t.D(r)>>>16,h=65535&t.D(r);n[2*s+2*r]+=o*h,ws(n,2*s+2*r),n[2*s+2*r+1]+=i*h,ws(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,ws(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,ws(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new as(n,0)},p.gb=function(t){return Ts(this,t).h},p.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new as(n,this.h&t.h)},p.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new as(n,this.h|t.h)},p.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new as(n,this.h^t.h)},ts.prototype.createWebChannel=ts.prototype.g,es.prototype.send=es.prototype.u,es.prototype.open=es.prototype.m,es.prototype.close=es.prototype.close,re.NO_ERROR=0,re.TIMEOUT=8,re.HTTP_ERROR=6,ie.COMPLETE="complete",he.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",St.prototype.listen=St.prototype.O,En.prototype.listenOnce=En.prototype.P,En.prototype.getLastError=En.prototype.Sa,En.prototype.getLastErrorCode=En.prototype.Ia,En.prototype.getStatus=En.prototype.da,En.prototype.getResponseJson=En.prototype.Wa,En.prototype.getResponseText=En.prototype.ja,En.prototype.send=En.prototype.ha,En.prototype.setWithCredentials=En.prototype.Oa,is.prototype.digest=is.prototype.l,is.prototype.reset=is.prototype.reset,is.prototype.update=is.prototype.j,as.prototype.add=as.prototype.add,as.prototype.multiply=as.prototype.R,as.prototype.modulo=as.prototype.gb,as.prototype.compare=as.prototype.X,as.prototype.toNumber=as.prototype.ea,as.prototype.toString=as.prototype.toString,as.prototype.getBits=as.prototype.D,as.fromNumber=cs,as.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return ys(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=cs(Math.pow(n,8)),r=ds,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),a=parseInt(e.substring(i,i+o),n);8>o?(o=cs(Math.pow(n,o)),r=r.R(o).add(cs(a))):r=(r=r.R(s)).add(cs(a))}return r};var Ss=re,Is=ie,Cs=Wt,As=10,Ds=11,ks=he,Ns=En,xs=is,Rs=as;const Ls="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ms.UNAUTHENTICATED=new Ms(null),Ms.GOOGLE_CREDENTIALS=new Ms("google-credentials-uid"),Ms.FIRST_PARTY=new Ms("first-party-uid"),Ms.MOCK_USER=new Ms("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Os="10.8.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new t("@firebase/firestore");function Fs(){return Ps.logLevel}function Vs(t,...e){if(Ps.logLevel<=h.DEBUG){const n=e.map(qs);Ps.debug(`Firestore (${Os}): ${t}`,...n)}}function Us(t,...e){if(Ps.logLevel<=h.ERROR){const n=e.map(qs);Ps.error(`Firestore (${Os}): ${t}`,...n)}}function js(t,...e){if(Ps.logLevel<=h.WARN){const n=e.map(qs);Ps.warn(`Firestore (${Os}): ${t}`,...n)}}function qs(t){if("string"==typeof t)return t;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Us(e),new Error(e)}function zs(t,e){t||Bs()}function Ks(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Gs extends r{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ws{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ms.UNAUTHENTICATED)))}shutdown(){}}class Xs{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ys{constructor(t){this.t=t,this.currentUser=Ms.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Qs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Qs,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Vs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Vs("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Qs)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Vs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(zs("string"==typeof e.accessToken),new Hs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return zs(null===t||"string"==typeof t),new Ms(t)}}class Js{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Ms.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zs{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Js(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Ms.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class er{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Vs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Vs("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Vs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?s(t):Vs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(zs("string"==typeof t.token),this.R=t.token,new tr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=nr(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%62))}return n}}function rr(t,e){return t<e?-1:t>e?1:0}function ir(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Gs($s.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Gs($s.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Gs($s.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Gs($s.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return or.fromMillis(Date.now())}static fromDate(t){return or.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new or(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rr(this.nanoseconds,t.nanoseconds):rr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ar(t)}static min(){return new ar(new or(0,0))}static max(){return new ar(new or(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Bs(),void 0===n?n=t.length-e:n>t.length-e&&Bs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===hr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ur extends hr{construct(t,e,n){return new ur(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Gs($s.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ur(e)}static emptyPath(){return new ur([])}}const cr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lr extends hr{construct(t,e,n){return new lr(t,e,n)}static isValidIdentifier(t){return cr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new lr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new Gs($s.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Gs($s.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Gs($s.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new Gs($s.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lr(e)}static emptyPath(){return new lr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.path=t}static fromPath(t){return new dr(ur.fromString(t))}static fromName(t){return new dr(ur.fromString(t).popFirst(5))}static empty(){return new dr(ur.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ur.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ur.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dr(new ur(t.slice()))}}function fr(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new gr(ar.min(),dr.empty(),-1)}static max(){return new gr(ar.max(),dr.empty(),-1)}}function pr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=dr.comparator(t.documentKey,e.documentKey),0!==n?n:rr(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const mr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t){if(t.code!==$s.FAILED_PRECONDITION||t.message!==mr)throw t;Vs("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Bs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new wr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof wr?e:wr.resolve(e)}catch(e){return wr.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):wr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):wr.reject(e)}static resolve(t){return new wr(((e,n)=>{e(t)}))}static reject(t){return new wr(((e,n)=>{n(t)}))}static waitFor(t){return new wr(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=wr.resolve(!1);for(const n of t)e=e.next((t=>t?wr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new wr(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const h=a;e(t[h]).next((t=>{i[h]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new wr(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Qs,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new br(t,e.error)):this.V.resolve()},this.transaction.onerror=e=>{const n=Dr(e.target.error);this.V.reject(new br(t,n))}}static open(t,e,n,s){try{return new Er(e,t.transaction(s,n))}catch(r){throw new br(e,r)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(Vs("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ir(e)}}class Tr{constructor(t,e,n){this.name=t,this.version=e,this.p=n,12.2===Tr.S(f())&&Us("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return Vs("SimpleDb","Removing database:",t),Cr(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!g())return!1;if(Tr.C())return!0;const t=f(),e=Tr.S(t),n=0<e&&e<10,s=Tr.v(t),r=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static C(){var t;return"undefined"!=typeof process&&"YES"===(null===(t=process.__PRIVATE_env)||void 0===t?void 0:t.F)}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(t){return this.db||(Vs("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=t=>{const n=t.target.result;e(n)},s.onblocked=()=>{n(new br(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=e=>{const s=e.target.error;"VersionError"===s.name?n(new Gs($s.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===s.name?n(new Gs($s.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):n(new br(t,s))},s.onupgradeneeded=t=>{Vs("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.p.N(e,s.transaction,t.oldVersion,this.version).next((()=>{Vs("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const r="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.O(t);const e=Er.open(this.db,t,r?"readonly":"readwrite",n),i=s(e).next((t=>(e.g(),t))).catch((t=>(e.abort(t),wr.reject(t)))).toPromise();return i.catch((()=>{})),await e.m,i}catch(o){const t=o,e="FirebaseError"!==t.name&&i<3;if(Vs("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class _r{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Cr(this.k.delete())}}class br extends Gs{constructor(t,e){super($s.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Sr(t){return"IndexedDbTransactionError"===t.name}class Ir{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(Vs("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(Vs("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Cr(n)}add(t){return Vs("SimpleDb","ADD",this.store.name,t,t),Cr(this.store.add(t))}get(t){return Cr(this.store.get(t)).next((e=>(void 0===e&&(e=null),Vs("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return Vs("SimpleDb","DELETE",this.store.name,t),Cr(this.store.delete(t))}count(){return Vs("SimpleDb","COUNT",this.store.name),Cr(this.store.count())}W(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if("function"==typeof s.getAll){const t=s.getAll(n.range);return new wr(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}{const t=this.cursor(n),e=[];return this.G(t,((t,n)=>{e.push(n)})).next((()=>e))}}j(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new wr(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}H(t,e){Vs("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.J=!1;const s=this.cursor(n);return this.G(s,((t,e,n)=>n.delete()))}Y(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.G(s,e)}Z(t){const e=this.cursor({});return new wr(((n,s)=>{e.onerror=t=>{const e=Dr(t.target.error);s(e)},e.onsuccess=e=>{const s=e.target.result;s?t(s.primaryKey,s.value).next((t=>{t?s.continue():n()})):n()}}))}G(t,e){const n=[];return new wr(((s,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void s();const i=new _r(r),o=e(r.primaryKey,r.value,i);if(o instanceof wr){const t=o.catch((t=>(i.done(),wr.reject(t))));n.push(t)}i.isDone?s():null===i.$?r.continue():r.continue(i.$)}})).next((()=>wr.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.J?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Cr(t){return new wr(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Dr(t.target.error);n(e)}}))}let Ar=!1;function Dr(t){const e=Tr.S(f());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new Gs("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ar||(Ar=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function Nr(t){return null==t}function xr(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kr._e=-1;class Or{constructor(t,e){this.comparator=t,this.root=e||Fr.EMPTY}insert(t,e){return new Or(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Fr.BLACK,null,null))}remove(t){return new Or(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Fr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pr(this.root,t,this.comparator,!0)}}class Pr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Fr{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Fr.RED,this.left=null!=s?s:Fr.EMPTY,this.right=null!=r?r:Fr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Fr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Fr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Fr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Fr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Fr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Bs();if(this.right.isRed())throw Bs();const t=this.left.check();if(t!==this.right.check())throw Bs();return t+(this.isRed()?0:1)}}Fr.EMPTY=null,Fr.RED=!0,Fr.BLACK=!1,Fr.EMPTY=new class{constructor(){this.size=0}get key(){throw Bs()}get value(){throw Bs()}get color(){throw Bs()}get left(){throw Bs()}get right(){throw Bs()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(t){this.comparator=t,this.data=new Or(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ur(this.data.getIterator())}getIteratorFrom(t){return new Ur(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Vr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Vr(this.comparator);return e.data=t,e}}class Ur{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this.fields=t,t.sort(lr.comparator)}static empty(){return new jr([])}unionWith(t){let e=new Vr(lr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new jr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ir(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new qr("Invalid base64 string: "+e):e}}(t);return new Br(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Br(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Br.EMPTY_BYTE_STRING=new Br("");const zr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(zs(!!t),"string"==typeof t){let e=0;const n=zr.exec(t);if(zs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$r(t.seconds),nanos:$r(t.nanos)}}function $r(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Gr(t){return"string"==typeof t?Br.fromBase64String(t):Br.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hr(t){const e=t.mapValue.fields.__previous_value__;return Qr(e)?Hr(e):e}function Wr(t){const e=Kr(t.mapValue.fields.__local_write_time__.timestampValue);return new or(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e,n,s,r,i,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class Yr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Yr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Yr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qr(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:10:Bs()}function ti(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wr(t).isEqual(Wr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Kr(t.timestampValue),s=Kr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Gr(t.bytesValue).isEqual(Gr(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $r(t.geoPointValue.latitude)===$r(e.geoPointValue.latitude)&&$r(t.geoPointValue.longitude)===$r(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $r(t.integerValue)===$r(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=$r(t.doubleValue),s=$r(e.doubleValue);return n===s?xr(n)===xr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ir(t.arrayValue.values||[],e.arrayValue.values||[],ti);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Rr(n)!==Rr(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!ti(n[r],s[r])))return!1;return!0}(t,e);default:return Bs()}var s}function ei(t,e){return void 0!==(t.values||[]).find((t=>ti(t,e)))}function ni(t,e){if(t===e)return 0;const n=Zr(t),s=Zr(e);if(n!==s)return rr(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return rr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=$r(t.integerValue||t.doubleValue),s=$r(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return si(t.timestampValue,e.timestampValue);case 4:return si(Wr(t),Wr(e));case 5:return rr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Gr(t),s=Gr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=rr(n[r],s[r]);if(0!==t)return t}return rr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=rr($r(t.latitude),$r(e.latitude));return 0!==n?n:rr($r(t.longitude),$r(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=ni(n[r],s[r]);if(t)return t}return rr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Jr.mapValue&&e===Jr.mapValue)return 0;if(t===Jr.mapValue)return 1;if(e===Jr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=rr(s[o],i[o]);if(0!==t)return t;const e=ni(n[s[o]],r[i[o]]);if(0!==e)return e}return rr(s.length,i.length)}(t.mapValue,e.mapValue);default:throw Bs()}}function si(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rr(t,e);const n=Kr(t),s=Kr(e),r=rr(n.seconds,s.seconds);return 0!==r?r:rr(n.nanos,s.nanos)}function ri(t){return ii(t)}function ii(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Kr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gr(t.bytesValue).toBase64():"referenceValue"in t?function(t){return dr.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=ii(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${ii(t.fields[r])}`;return n+"}"}(t.mapValue):Bs()}function oi(t){return!!t&&"integerValue"in t}function ai(t){return!!t&&"arrayValue"in t}function hi(t){return!!t&&"nullValue"in t}function ui(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ci(t){return!!t&&"mapValue"in t}function li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=li(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=li(t.arrayValue.values[n]);return e}return Object.assign({},t)}class di{constructor(t){this.value=t}static empty(){return new di({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ci(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=li(e)}setAll(t){let e=lr.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=li(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());ci(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ti(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ci(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Lr(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new di(li(this.value))}}function fi(t){const e=[];return Lr(t.fields,((t,n)=>{const s=new lr([t]);if(ci(n)){const t=fi(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new jr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gi{constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new gi(t,0,ar.min(),ar.min(),ar.min(),di.empty(),0)}static newFoundDocument(t,e,n,s){return new gi(t,1,e,ar.min(),n,s,0)}static newNoDocument(t,e){return new gi(t,2,e,ar.min(),ar.min(),di.empty(),0)}static newUnknownDocument(t,e){return new gi(t,3,e,ar.min(),ar.min(),di.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ar.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=di.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=di.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ar.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){this.position=t,this.inclusive=e}}function mi(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?dr.comparator(dr.fromName(o.referenceValue),n.key):ni(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function yi(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ti(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e="asc"){this.field=t,this.dir=e}}function wi(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{}class Ti extends Ei{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Di(t,e,n):"array-contains"===e?new Ri(t,n):"in"===e?new Li(t,n):"not-in"===e?new Mi(t,n):"array-contains-any"===e?new Oi(t,n):new Ti(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ki(t,n):new Ni(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ni(e,this.value)):null!==e&&Zr(this.value)===Zr(e)&&this.matchesComparison(ni(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Bs()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends Ei{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new _i(t,e)}matches(t){return bi(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function bi(t){return"and"===t.op}function Si(t){return function(t){for(const e of t.filters)if(e instanceof _i)return!1;return!0}(t)&&bi(t)}function Ii(t){if(t instanceof Ti)return t.field.canonicalString()+t.op.toString()+ri(t.value);if(Si(t))return t.filters.map((t=>Ii(t))).join(",");{const e=t.filters.map((t=>Ii(t))).join(",");return`${t.op}(${e})`}}function Ci(t,e){return t instanceof Ti?(n=t,(s=e)instanceof Ti&&n.op===s.op&&n.field.isEqual(s.field)&&ti(n.value,s.value)):t instanceof _i?function(t,e){return e instanceof _i&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Ci(n,e.filters[s])),!0)}(t,e):void Bs();var n,s}function Ai(t){return t instanceof Ti?`${(e=t).field.canonicalString()} ${e.op} ${ri(e.value)}`:t instanceof _i?function(t){return t.op.toString()+" {"+t.getFilters().map(Ai).join(" ,")+"}"}(t):"Filter";var e}class Di extends Ti{constructor(t,e,n){super(t,e,n),this.key=dr.fromName(n.referenceValue)}matches(t){const e=dr.comparator(t.key,this.key);return this.matchesComparison(e)}}class ki extends Ti{constructor(t,e){super(t,"in",e),this.keys=xi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ni extends Ti{constructor(t,e){super(t,"not-in",e),this.keys=xi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function xi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>dr.fromName(t.referenceValue)))}class Ri extends Ti{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ai(e)&&ei(e.arrayValue,this.value)}}class Li extends Ti{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ei(this.value.arrayValue,e)}}class Mi extends Ti{constructor(t,e){super(t,"not-in",e)}matches(t){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ei(this.value.arrayValue,e)}}class Oi extends Ti{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ai(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ei(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ce=null}}function Fi(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Pi(t,e,n,s,r,i,o)}function Vi(t){const e=Ks(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Ii(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Nr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ri(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ri(t))).join(",")),e.ce=t}return e.ce}function Ui(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wi(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ci(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yi(t.startAt,e.startAt)&&yi(t.endAt,e.endAt)}function ji(t){return dr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Bi(t){return new qi(t)}function zi(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ki(t){const e=Ks(t);if(null===e.le){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new Vr(lr.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new vi(s,n))})),t.has(lr.keyField().canonicalString())||e.le.push(new vi(lr.keyField(),n))}return e.le}function $i(t){const e=Ks(t);return e.he||(e.he=function(t,e){if("F"===t.limitType)return Fi(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new vi(t.field,e)}));const n=t.endAt?new pi(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new pi(t.startAt.position,t.startAt.inclusive):null;return Fi(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}(e,Ki(t))),e.he}function Gi(t,e,n){return new qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qi(t,e){return Ui($i(t),$i(e))&&t.limitType===e.limitType}function Hi(t){return`${Vi($i(t))}|lt:${t.limitType}`}function Wi(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ai(t))).join(", ")}]`),Nr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ri(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ri(t))).join(",")),`Target(${e})`}($i(t))}; limitType=${t.limitType})`}function Xi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):dr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ki(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=mi(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,Ki(n),s)||n.endAt&&!function(t,e,n){const s=mi(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,Ki(n),s)));var n,s}function Yi(t){return(e,n)=>{let s=!1;for(const r of Ki(t)){const t=Ji(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Ji(t,e,n){const s=t.field.isKeyField()?dr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?ni(s,r):Bs()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Bs()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Lr(this.inner,((e,n)=>{for(const[s,r]of n)t(s,r)}))}isEmpty(){return Mr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Or(dr.comparator);function eo(){return to}const no=new Or(dr.comparator);function so(...t){let e=no;for(const n of t)e=e.insert(n.key,n);return e}function ro(t){let e=no;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function io(){return ao()}function oo(){return ao()}function ao(){return new Zi((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ho=new Or(dr.comparator),uo=new Vr(dr.comparator);function co(...t){let e=uo;for(const n of t)e=e.add(n);return e}const lo=new Vr(rr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(e)?"-0":e}}function go(t){return{integerValue:""+t}}function po(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?go(e):fo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}function yo(t,e,n){return t instanceof Eo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Qr(e)&&(e=Hr(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof To?_o(t,e):t instanceof bo?So(t,e):function(t,e){const n=wo(t,e),s=Co(n)+Co(t.Ie);return oi(n)&&oi(t.Ie)?go(s):fo(t.serializer,s)}(t,e)}function vo(t,e,n){return t instanceof To?_o(t,e):t instanceof bo?So(t,e):n}function wo(t,e){return t instanceof Io?oi(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null;var n,s}class Eo extends mo{}class To extends mo{constructor(t){super(),this.elements=t}}function _o(t,e){const n=Ao(e);for(const s of t.elements)n.some((t=>ti(t,s)))||n.push(s);return{arrayValue:{values:n}}}class bo extends mo{constructor(t){super(),this.elements=t}}function So(t,e){let n=Ao(e);for(const s of t.elements)n=n.filter((t=>!ti(t,s)));return{arrayValue:{values:n}}}class Io extends mo{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Co(t){return $r(t.integerValue||t.doubleValue)}function Ao(t){return ai(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Do{constructor(t,e){this.version=t,this.transformResults=e}}class ko{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ko}static exists(t){return new ko(void 0,t)}static updateTime(t){return new ko(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function No(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class xo{}function Ro(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Bo(t.key,ko.none()):new Fo(t.key,t.data,ko.none());{const n=t.data,s=di.empty();let r=new Vr(lr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new Vo(t.key,s,new jr(r.toArray()),ko.none())}}function Lo(t,e,n){var s;t instanceof Fo?function(t,e,n){const s=t.value.clone(),r=jo(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Vo?function(t,e,n){if(!No(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=jo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Uo(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function Mo(t,e,n,s){return t instanceof Fo?function(t,e,n,s){if(!No(t.precondition,e))return n;const r=t.value.clone(),i=qo(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof Vo?function(t,e,n,s){if(!No(t.precondition,e))return n;const r=qo(t.fieldTransforms,s,e),i=e.data;return i.setAll(Uo(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):(r=e,i=n,No(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i);var r,i}function Oo(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=wo(s.transform,t||null);null!=r&&(null===n&&(n=di.empty()),n.set(s.field,r))}return n||null}function Po(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&ir(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof To&&s instanceof To||n instanceof bo&&s instanceof bo?ir(n.elements,s.elements,ti):n instanceof Io&&s instanceof Io?ti(n.Ie,s.Ie):n instanceof Eo&&s instanceof Eo);var n,s}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,s}class Fo extends xo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vo extends xo{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Uo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function jo(t,e,n){const s=new Map;zs(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,vo(o,a,n[r]))}return s}function qo(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,yo(t,i,e))}return s}class Bo extends xo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zo extends xo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Lo(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Mo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Mo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=oo();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Ro(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(ar.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),co())}isEqual(t){return this.batchId===t.batchId&&ir(this.mutations,t.mutations,((t,e)=>Po(t,e)))&&ir(this.baseMutations,t.baseMutations,((t,e)=>Po(t,e)))}}class $o{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){zs(t.mutations.length===n.length);let s=function(){return ho}();const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new $o(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho,Wo;function Xo(t){if(void 0===t)return Us("GRPC error has no .code"),$s.UNKNOWN;switch(t){case Ho.OK:return $s.OK;case Ho.CANCELLED:return $s.CANCELLED;case Ho.UNKNOWN:return $s.UNKNOWN;case Ho.DEADLINE_EXCEEDED:return $s.DEADLINE_EXCEEDED;case Ho.RESOURCE_EXHAUSTED:return $s.RESOURCE_EXHAUSTED;case Ho.INTERNAL:return $s.INTERNAL;case Ho.UNAVAILABLE:return $s.UNAVAILABLE;case Ho.UNAUTHENTICATED:return $s.UNAUTHENTICATED;case Ho.INVALID_ARGUMENT:return $s.INVALID_ARGUMENT;case Ho.NOT_FOUND:return $s.NOT_FOUND;case Ho.ALREADY_EXISTS:return $s.ALREADY_EXISTS;case Ho.PERMISSION_DENIED:return $s.PERMISSION_DENIED;case Ho.FAILED_PRECONDITION:return $s.FAILED_PRECONDITION;case Ho.ABORTED:return $s.ABORTED;case Ho.OUT_OF_RANGE:return $s.OUT_OF_RANGE;case Ho.UNIMPLEMENTED:return $s.UNIMPLEMENTED;case Ho.DATA_LOSS:return $s.DATA_LOSS;default:return Bs()}}(Wo=Ho||(Ho={}))[Wo.OK=0]="OK",Wo[Wo.CANCELLED=1]="CANCELLED",Wo[Wo.UNKNOWN=2]="UNKNOWN",Wo[Wo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wo[Wo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wo[Wo.NOT_FOUND=5]="NOT_FOUND",Wo[Wo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wo[Wo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wo[Wo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wo[Wo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wo[Wo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wo[Wo.ABORTED=10]="ABORTED",Wo[Wo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wo[Wo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wo[Wo.INTERNAL=13]="INTERNAL",Wo[Wo.UNAVAILABLE=14]="UNAVAILABLE",Wo[Wo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yo=new Rs([4294967295,4294967295],0);function Jo(t){const e=(new TextEncoder).encode(t),n=new xs;return n.update(e),new Uint8Array(n.digest())}function Zo(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rs([n,s],0),new Rs([r,i],0)]}class ta{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ea(`Invalid padding: ${e}`);if(n<0)throw new ea(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ea(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ea(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Rs.fromNumber(this.Te)}de(t,e,n){let s=t.add(e.multiply(Rs.fromNumber(n)));return 1===s.compare(Yo)&&(s=new Rs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Jo(t),[n,s]=Zo(e);for(let r=0;r<this.hashCount;r++){const t=this.de(n,s,r);if(!this.Ae(t))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),i=new ta(r,s,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Te)return;const e=Jo(t),[n,s]=Zo(e);for(let r=0;r<this.hashCount;r++){const t=this.de(n,s,r);this.Re(t)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,sa.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new na(ar.min(),s,new Or(rr),eo(),co())}}class sa{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new sa(n,e,co(),co(),co())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,n,s){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=s}}class ia{constructor(t,e){this.targetId=t,this.fe=e}}class oa{constructor(t,e,n=Br.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class aa{constructor(){this.ge=0,this.pe=ca(),this.ye=Br.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=co(),e=co(),n=co();return this.pe.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Bs()}})),new sa(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=ca()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,zs(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class ha{constructor(t){this.Le=t,this.ke=new Map,this.qe=eo(),this.Qe=ua(),this.Ke=new Or(rr)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:Bs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,s=this.Ye(e);if(s){const r=s.target;if(ji(r))if(0===n){const t=new dr(r.path);this.We(e,t,gi.newNoDocument(t,ar.min()))}else zs(1===n);else{const s=this.Ze(e);if(s!==n){const n=this.Xe(t),r=n?this.et(n,t,s):1;if(0!==r){this.He(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:r=0}=e;let i,o;try{i=Gr(n).toUint8Array()}catch(a){if(a instanceof qr)return js("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new ta(i,s,r)}catch(a){return js(a instanceof ea?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach((n=>{const r=this.Le.nt(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.We(e,n,null),s++)})),s}it(t){const e=new Map;this.ke.forEach(((n,s)=>{const r=this.Ye(s);if(r){if(n.current&&ji(r.target)){const e=new dr(r.target.path);null!==this.qe.get(e)||this.st(s,e)||this.We(s,e,gi.newNoDocument(e,t))}n.De&&(e.set(s,n.ve()),n.Fe())}}));let n=co();this.Qe.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const s=new na(t,e,this.Ke,this.qe,n);return this.qe=eo(),this.Qe=ua(),this.Ke=new Or(rr),s}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new aa,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Vr(rr),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||Vs("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new aa),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ua(){return new Or(dr.comparator)}function ca(){return new Or(dr.comparator)}const la=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),da=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fa=(()=>({and:"AND",or:"OR"}))();class ga{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function pa(t,e){return t.useProto3Json||Nr(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ya(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function va(t,e){return ma(t,e.toTimestamp())}function wa(t){return zs(!!t),ar.fromTimestamp(function(t){const e=Kr(t);return new or(e.seconds,e.nanos)}(t))}function Ea(t,e){return Ta(t,e).canonicalString()}function Ta(t,e){const n=(s=t,new ur(["projects",s.projectId,"databases",s.database])).child("documents");var s;return void 0===e?n:n.child(e)}function _a(t){const e=ur.fromString(t);return zs(ja(e)),e}function ba(t,e){return Ea(t.databaseId,e.path)}function Sa(t,e){const n=_a(e);if(n.get(1)!==t.databaseId.projectId)throw new Gs($s.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Gs($s.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new dr(Aa(n))}function Ia(t,e){return Ea(t.databaseId,e)}function Ca(t){return new ur(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Aa(t){return zs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Da(t,e,n){return{name:ba(t,e),fields:n.value.mapValue.fields}}function ka(t,e){return{documents:[Ia(t,e.path)]}}function Na(t,e){const n={structuredQuery:{}},s=e.path;let r;null!==e.collectionGroup?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Ia(t,r);const i=function(t){if(0!==t.length)return Va(_i.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:Pa((e=t).field),direction:La(e.dir)};var e}))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=pa(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(h=e.startAt).inclusive,values:h.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ut:n,parent:r};var h}function xa(t){let e=function(t){const e=_a(t);return 4===e.length?ur.emptyPath():Aa(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){zs(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Ra(t);return e instanceof _i&&Si(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new vi(Fa((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Nr(e)?null:e}(n.limit));let h=null;n.startAt&&(h=function(t){const e=!!t.before,n=t.values||[];return new pi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new pi(n,e)}(n.endAt)),function(t,e,n,s,r,i,o,a){return new qi(t,e,n,s,r,i,o,a)}(e,r,o,i,a,"F",h,u)}function Ra(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fa(t.unaryFilter.field);return Ti.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fa(t.unaryFilter.field);return Ti.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fa(t.unaryFilter.field);return Ti.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Fa(t.unaryFilter.field);return Ti.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Bs()}}(t):void 0!==t.fieldFilter?(e=t,Ti.create(Fa(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Bs()}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return _i.create(t.compositeFilter.filters.map((t=>Ra(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Bs()}}(t.compositeFilter.op))}(t):Bs();var e}function La(t){return la[t]}function Ma(t){return da[t]}function Oa(t){return fa[t]}function Pa(t){return{fieldPath:t.canonicalString()}}function Fa(t){return lr.fromServerFormat(t.fieldPath)}function Va(t){return t instanceof Ti?function(t){if("=="===t.op){if(ui(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NAN"}};if(hi(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ui(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NOT_NAN"}};if(hi(t.value))return{unaryFilter:{field:Pa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pa(t.field),op:Ma(t.op),value:t.value}}}(t):t instanceof _i?function(t){const e=t.getFilters().map((t=>Va(t)));return 1===e.length?e[0]:{compositeFilter:{op:Oa(t.op),filters:e}}}(t):Bs()}function Ua(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ja(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e,n,s,r=ar.min(),i=ar.min(),o=Br.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new qa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this.ct=t}}function za(t){const e=xa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Gi(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this._n=new $a}addToCollectionParentIndex(t,e){return this._n.add(e),wr.resolve()}getCollectionParents(t,e){return wr.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return wr.resolve()}deleteFieldIndex(t,e){return wr.resolve()}deleteAllFieldIndexes(t){return wr.resolve()}createTargetIndexes(t,e){return wr.resolve()}getDocumentsMatchingTarget(t,e){return wr.resolve(null)}getIndexType(t,e){return wr.resolve(0)}getFieldIndexes(t,e){return wr.resolve([])}getNextCollectionGroupToUpdate(t){return wr.resolve(null)}getMinOffset(t,e){return wr.resolve(gr.min())}getMinOffsetFromCollectionGroup(t,e){return wr.resolve(gr.min())}updateCollectionGroup(t,e,n){return wr.resolve()}updateIndexEntries(t,e){return wr.resolve()}}class $a{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Vr(ur.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Vr(ur.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ga(0)}static Bn(){return new Ga(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.changes=new Zi((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?wr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Mo(n.mutation,t,jr.empty(),or.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,co()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=co()){const s=io();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=so();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=io();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,co())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=eo();const i=ao(),o=ao();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Vo)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Mo(o.mutation,e,o.mutation.getFieldMask(),or.now())):i.set(e.key,jr.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ha(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ao();let s=new Or(((t,e)=>t-e)),r=co();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||jr.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||co()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,h=s.value,u=oo();h.forEach((t=>{if(!r.has(t)){const s=Ro(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return wr.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,s){return r=e,dr.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s);var r}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):wr.resolve(io());let o=-1,a=r;return i.next((e=>wr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?wr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,co()))).next((t=>({batchId:o,changes:ro(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new dr(e)).next((t=>{let e=so();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const r=e.collectionGroup;let i=so();return this.indexManager.getCollectionParents(t,r).next((o=>wr.forEach(o,(o=>{const a=(h=e,u=o.child(r),new qi(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt));var h,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,s).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,s)))).next((t=>{r.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,gi.newInvalidDocument(s)))}));let n=so();return t.forEach(((t,s)=>{const i=r.get(t);void 0!==i&&Mo(i.mutation,s,jr.empty(),or.now()),Xi(e,s)&&(n=n.insert(t,s))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return wr.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,{id:(n=e).id,version:n.version,createTime:wa(n.createTime)}),wr.resolve();var n}getNamedQuery(t,e){return wr.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,{name:(n=e).name,query:za(n.bundledQuery),readTime:wa(n.readTime)}),wr.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.overlays=new Or(dr.comparator),this.hr=new Map}getOverlay(t,e){return wr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=io();return wr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ht(t,e,s)})),wr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),wr.resolve()}getOverlaysForCollection(t,e,n){const s=io(),r=e.length+1,i=new dr(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return wr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Or(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=io(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=io(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return wr.resolve(o)}ht(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Go(e,n));let r=this.hr.get(e);void 0===r&&(r=co(),this.hr.set(e,r)),this.hr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.Pr=new Vr(Za.Ir),this.Tr=new Vr(Za.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new Za(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new Za(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new dr(new ur([])),n=new Za(e,t),s=new Za(e,t+1),r=[];return this.Tr.forEachInRange([n,s],(t=>{this.Ar(t),r.push(t.key)})),r}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new dr(new ur([])),n=new Za(e,t),s=new Za(e,t+1);let r=co();return this.Tr.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Za(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Za{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return dr.comparator(t.key,e.key)||rr(t.pr,e.pr)}static Er(t,e){return rr(t.pr,e.pr)||dr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Vr(Za.Ir)}checkEmpty(t){return wr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ko(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.wr=this.wr.add(new Za(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return wr.resolve(i)}lookupMutationBatch(t,e){return wr.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),r=s<0?0:s;return wr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return wr.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return wr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Za(e,0),s=new Za(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,s],(t=>{const e=this.Sr(t.pr);r.push(e)})),wr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Vr(rr);return e.forEach((t=>{const e=new Za(t,0),s=new Za(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,s],(t=>{n=n.add(t.pr)}))})),wr.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;dr.isDocumentKey(r)||(r=r.child(""));const i=new Za(new dr(r),0);let o=new Vr(rr);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.pr)),!0)}),i),wr.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){zs(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return wr.forEach(e.mutations,(s=>{const r=new Za(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new Za(e,0),s=this.wr.firstAfterOrEqual(n);return wr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,wr.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.vr=t,this.docs=new Or(dr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return wr.resolve(n?n.document.mutableCopy():gi.newInvalidDocument(e))}getEntries(t,e){let n=eo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():gi.newInvalidDocument(t))})),wr.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let r=eo();const i=e.path,o=new dr(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||pr(fr(o),n)<=0||(s.has(o.key)||Xi(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return wr.resolve(r)}getAllFromCollectionGroup(t,e,n,s){Bs()}Fr(t,e){return wr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new nh(this)}getSize(t){return wr.resolve(this.size)}}class nh extends Qa{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)})),wr.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t){this.persistence=t,this.Mr=new Zi((t=>Vi(t)),Ui),this.lastRemoteSnapshotVersion=ar.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ja,this.targetCount=0,this.Br=Ga.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),wr.resolve()}getLastRemoteSnapshotVersion(t){return wr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return wr.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),wr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),wr.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Ga(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,wr.resolve()}updateTargetData(t,e){return this.qn(e),wr.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,wr.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Mr.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),wr.waitFor(r).next((()=>s))}getTargetCount(t){return wr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return wr.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),wr.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),wr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),wr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return wr.resolve(n)}containsKey(t,e){return wr.resolve(this.Nr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e){this.Lr={},this.overlays={},this.kr=new kr(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new sh(this),this.indexManager=new Ka,this.remoteDocumentCache=new eh((t=>this.referenceDelegate.Kr(t))),this.serializer=new Ba(e),this.$r=new Xa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ya,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new th(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Vs("MemoryPersistence","Starting transaction:",t);const s=new ih(this.kr.next());return this.referenceDelegate.Ur(),n(s).next((t=>this.referenceDelegate.Wr(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Gr(t,e){return wr.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class ih extends yr{constructor(t){super(),this.currentSequenceNumber=t}}class oh{constructor(t){this.persistence=t,this.zr=new Ja,this.jr=null}static Hr(t){return new oh(t)}get Jr(){if(this.jr)return this.jr;throw Bs()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),wr.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),wr.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),wr.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return wr.forEach(this.Jr,(n=>{const s=dr.fromPath(n);return this.Yr(t,s).next((t=>{t||e.removeEntry(s,ar.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return wr.or([()=>wr.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=co(),s=co();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ah(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=d()?8:Tr.v(f())>0?6:4}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const r={result:null};return this.ji(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Hi(t,e,s,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new hh;return this.Ji(t,e,n).next((s=>{if(r.result=s,this.Ui)return this.Yi(t,e,n,s.size)}))})).next((()=>r.result))}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(Fs()<=h.DEBUG&&Vs("QueryEngine","SDK will not create cache indexes for query:",Wi(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),wr.resolve()):(Fs()<=h.DEBUG&&Vs("QueryEngine","Query:",Wi(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(Fs()<=h.DEBUG&&Vs("QueryEngine","The SDK decides to create cache indexes for query:",Wi(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$i(e))):wr.resolve())}ji(t,e){if(zi(e))return wr.resolve(null);let n=$i(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Gi(e,null,"F"),n=$i(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=co(...s);return this.zi.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Zi(e,s);return this.Xi(e,i,r,n.readTime)?this.ji(t,Gi(e,null,"F")):this.es(t,i,e,n)}))))})))))}Hi(t,e,n,s){return zi(e)||s.isEqual(ar.min())?wr.resolve(null):this.zi.getDocuments(t,n).next((r=>{const i=this.Zi(e,r);return this.Xi(e,i,n,s)?wr.resolve(null):(Fs()<=h.DEBUG&&Vs("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wi(e)),this.es(t,i,e,function(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ar.fromTimestamp(1e9===s?new or(n+1,0):new or(n,s));return new gr(r,dr.empty(),e)}(s,-1)).next((t=>t)))}))}Zi(t,e){let n=new Vr(Yi(t));return e.forEach(((e,s)=>{Xi(t,s)&&(n=n.add(s))})),n}Xi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(t,e,n){return Fs()<=h.DEBUG&&Vs("QueryEngine","Using full collection scan to execute query:",Wi(e)),this.zi.getDocumentsMatchingQuery(t,e,gr.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Or(rr),this.rs=new Zi((t=>Vi(t)),Ui),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wa(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function lh(t,e){const n=Ks(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=co();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function dh(t){const e=Ks(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}function fh(t,e){const n=Ks(t),s=e.snapshotVersion;let r=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.os.newChangeBuffer({trackRemovals:!0});r=n.ns;const o=[];e.targetChanges.forEach(((i,a)=>{const h=r.get(a);if(!h)return;o.push(n.Qr.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(t,i.addedDocuments,a))));let u=h.withSequenceNumber(t.currentSequenceNumber);var c,l,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(Br.EMPTY_BYTE_STRING,ar.min()).withLastLimboFreeSnapshotVersion(ar.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),l=u,d=i,(0===(c=h).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Qr.updateTargetData(t,u))}));let a=eo(),h=co();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n){let s=co(),r=co();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=eo();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(ar.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):Vs("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{cs:s,ls:r}}))}(t,i,e.documentUpdates).next((t=>{a=t.cs,h=t.ls}))),!s.isEqual(ar.min())){const e=n.Qr.getLastRemoteSnapshotVersion(t).next((e=>n.Qr.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return wr.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,h))).next((()=>a))})).then((t=>(n.ns=r,t)))}function gh(t,e){const n=Ks(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function ph(t,e,n){const s=Ks(t),r=s.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(o){if(!Sr(o))throw o;Vs("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ns=s.ns.remove(e),s.rs.delete(r.target)}function mh(t,e,n){const s=Ks(t);let r=ar.min(),i=co();return s.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const s=Ks(t),r=s.rs.get(n);return void 0!==r?wr.resolve(s.ns.get(r)):s.Qr.getTargetData(e,n)}(s,t,$i(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.ts.getDocumentsMatchingQuery(t,e,n?r:ar.min(),n?i:co()))).next((t=>(function(t,e,n){let s=t.ss.get(e)||ar.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.ss.set(e,s)}(s,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,hs:i})))))}class yh{constructor(){this.activeTargetIds=lo}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vh{constructor(){this.no=new yh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new yh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{io(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Vs("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Vs("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th=null;function _h(){return null===Th?Th=268435456+Math.round(2147483648*Math.random()):Th++,"0x"+Th.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const bh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="WebChannelConnection";class Ch extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${s}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${s}`}get wo(){return!1}So(t,e,n,s,r){const i=_h(),o=this.bo(t,e.toUriEncodedString());Vs("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,s,r),this.Co(t,o,a,n).then((e=>(Vs("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw js("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,s,r,i){return this.So(t,e,n,s,r)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Os,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=bh[t];return`${this.fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,n,s){const r=_h();return new Promise(((i,o)=>{const a=new Ns;a.setWithCredentials(!0),a.listenOnce(Is.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ss.NO_ERROR:const e=a.getResponseJson();Vs(Ih,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),i(e);break;case Ss.TIMEOUT:Vs(Ih,`RPC '${t}' ${r} timed out`),o(new Gs($s.DEADLINE_EXCEEDED,"Request time out"));break;case Ss.HTTP_ERROR:const n=a.getStatus();if(Vs(Ih,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values($s).indexOf(e)>=0?e:$s.UNKNOWN}(e.status);o(new Gs(t,e.message))}else o(new Gs($s.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Gs($s.UNAVAILABLE,"Connection failed."));break;default:Bs()}}finally{Vs(Ih,`RPC '${t}' ${r} completed.`)}}));const h=JSON.stringify(s);Vs(Ih,`RPC '${t}' ${r} sending request:`,s),a.send(e,"POST",h,n,15)}))}Fo(t,e,n){const s=_h(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new ts,o=Yt(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=r.join("");Vs(Ih,`Creating RPC '${t}' stream ${s}: ${u}`,a);const c=i.createWebChannel(u,a);let l=!1,d=!1;const f=new Sh({lo:e=>{d?Vs(Ih,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(Vs(Ih,`Opening RPC '${t}' stream ${s} transport.`),c.open(),l=!0),Vs(Ih,`RPC '${t}' stream ${s} sending:`,e),c.send(e))},ho:()=>c.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return g(c,ks.EventType.OPEN,(()=>{d||Vs(Ih,`RPC '${t}' stream ${s} transport opened.`)})),g(c,ks.EventType.CLOSE,(()=>{d||(d=!0,Vs(Ih,`RPC '${t}' stream ${s} transport closed`),f.Vo())})),g(c,ks.EventType.ERROR,(e=>{d||(d=!0,js(Ih,`RPC '${t}' stream ${s} transport errored:`,e),f.Vo(new Gs($s.UNAVAILABLE,"The operation could not be completed")))})),g(c,ks.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];zs(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){Vs(Ih,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Ho[t];if(void 0!==e)return Xo(e)}(e),r=o.message;void 0===n&&(n=$s.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,f.Vo(new Gs(n,r)),c.close()}else Vs(Ih,`RPC '${t}' stream ${s} received:`,r),f.mo(r)}})),g(o,Cs.STAT_EVENT,(e=>{e.stat===As?Vs(Ih,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===Ds&&Vs(Ih,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}function Ah(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){return new ga(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e,n=1e3,s=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=s,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),s=Math.max(0,e-n);s>0&&Vs("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e,n,s,r,i,o,a){this.oi=t,this.$o=n,this.Uo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new kh(t,e)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===$s.RESOURCE_EXHAUSTED?(Us(e.toString()),Us("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===$s.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new Gs($s.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return Vs("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(Vs("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xh extends Nh{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:Bs(),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(zs(void 0===e||"string"==typeof e),Br.fromBase64String(e||"")):(zs(void 0===e||e instanceof Uint8Array),Br.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,h=a&&function(t){const e=void 0===t.code?$s.UNKNOWN:Xo(t.code);return new Gs(e,t.message||"")}(a);n=new oa(r,i,o,h||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Sa(t,s.document.name),i=wa(s.document.updateTime),o=s.document.createTime?wa(s.document.createTime):ar.min(),a=new di({mapValue:{fields:s.document.fields}}),h=gi.newFoundDocument(r,i,o,a),u=s.targetIds||[],c=s.removedTargetIds||[];n=new ra(u,c,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Sa(t,s.document),i=s.readTime?wa(s.readTime):ar.min(),o=gi.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Sa(t,s.document),i=s.removedTargetIds||[];n=new ra([],i,r,null)}else{if(!("filter"in e))return Bs();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:r}=t,i=new Qo(s,r),o=t.targetId;n=new ia(o,i)}}var s;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return ar.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ar.min():e.readTime?wa(e.readTime):ar.min()}(t);return this.listener.u_(e,n)}c_(t){const e={};e.database=Ca(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=ji(s)?{documents:ka(t,s)}:{query:Na(t,s).ut},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ya(t,e.resumeToken);const s=pa(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(ar.min())>0){n.readTime=ma(t,e.snapshotVersion.toTimestamp());const s=pa(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Bs()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.t_(e)}l_(t){const e={};e.database=Ca(this.serializer),e.removeTarget=t,this.t_(e)}}class Rh extends Nh{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(zs(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=function(t,e){return t&&t.length>0?(zs(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?wa(t.updateTime):wa(e);return n.isEqual(ar.min())&&(n=wa(e)),new Do(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=wa(t.commitTime);return this.listener.T_(n,e)}return zs(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Ca(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Fo)n={update:Da(t,e.key,e.value)};else if(e instanceof Bo)n={delete:ba(t,e.key)};else if(e instanceof Vo)n={update:Da(t,e.key,e.data),updateMask:Ua(e.fieldMask)};else{if(!(e instanceof zo))return Bs();n={verify:ba(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Eo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof To)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof bo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Io)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw Bs()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(r=e.precondition).updateTime?{updateTime:va(s,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Bs())),n;var s,r}(this.serializer,t)))};this.t_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new Gs($s.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.So(t,Ta(e,n),s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$s.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Gs($s.UNKNOWN,t.toString())}))}vo(t,e,n,s,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.vo(t,Ta(e,n),s,i,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$s.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Gs($s.UNKNOWN,t.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class Mh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Us(e),this.g_=!1):Vs("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io((t=>{n.enqueueAndForget((async()=>{Kh(this)&&(Vs("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ks(t);e.v_.add(4),await Fh(e),e.x_.set("Unknown"),e.v_.delete(4),await Ph(e)}(this))}))})),this.x_=new Mh(n,s)}}async function Ph(t){if(Kh(t))for(const e of t.F_)await e(!0)}async function Fh(t){for(const e of t.F_)await e(!1)}function Vh(t,e){const n=Ks(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),zh(n)?Bh(n):au(n).Jo()&&jh(n,e))}function Uh(t,e){const n=Ks(t),s=au(n);n.C_.delete(e),s.Jo()&&qh(n,e),0===n.C_.size&&(s.Jo()?s.Xo():Kh(n)&&n.x_.set("Unknown"))}function jh(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ar.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}au(t).c_(e)}function qh(t,e){t.O_.Oe(e),au(t).l_(e)}function Bh(t){t.O_=new ha({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),au(t).start(),t.x_.p_()}function zh(t){return Kh(t)&&!au(t).Ho()&&t.C_.size>0}function Kh(t){return 0===Ks(t).v_.size}function $h(t){t.O_=void 0}async function Gh(t){t.C_.forEach(((e,n)=>{jh(t,e)}))}async function Qh(t,e){$h(t),zh(t)?(t.x_.S_(e),Bh(t)):t.x_.set("Unknown")}async function Hh(t,e,n){if(t.x_.set("Online"),e instanceof oa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.C_.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.C_.delete(s),t.O_.removeTarget(s))}(t,e)}catch(s){Vs("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wh(t,s)}else if(e instanceof ra?t.O_.$e(e):e instanceof ia?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ar.min()))try{const e=await dh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.O_.it(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.C_.get(s);r&&t.C_.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.C_.get(e);if(!s)return;t.C_.set(e,s.withResumeToken(Br.EMPTY_BYTE_STRING,s.snapshotVersion)),qh(t,e);const r=new qa(s.target,e,n,s.sequenceNumber);jh(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(r){Vs("RemoteStore","Failed to raise snapshot:",r),await Wh(t,r)}}async function Wh(t,e,n){if(!Sr(e))throw e;t.v_.add(1),await Fh(t),t.x_.set("Offline"),n||(n=()=>dh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Vs("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Ph(t)}))}function Xh(t,e){return e().catch((n=>Wh(t,n,e)))}async function Yh(t){const e=Ks(t),n=hu(e);let s=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Jh(e);)try{const t=await gh(e.localStore,s);if(null===t){0===e.D_.length&&n.Xo();break}s=t.batchId,Zh(e,t)}catch(r){await Wh(e,r)}tu(e)&&eu(e)}function Jh(t){return Kh(t)&&t.D_.length<10}function Zh(t,e){t.D_.push(e);const n=hu(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function tu(t){return Kh(t)&&!hu(t).Ho()&&t.D_.length>0}function eu(t){hu(t).start()}async function nu(t){hu(t).d_()}async function su(t){const e=hu(t);for(const n of t.D_)e.I_(n.mutations)}async function ru(t,e,n){const s=t.D_.shift(),r=$o.from(s,e,n);await Xh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Yh(t)}async function iu(t,e){e&&hu(t).P_&&await async function(t,e){if(function(t){switch(t){default:return Bs();case $s.CANCELLED:case $s.UNKNOWN:case $s.DEADLINE_EXCEEDED:case $s.RESOURCE_EXHAUSTED:case $s.INTERNAL:case $s.UNAVAILABLE:case $s.UNAUTHENTICATED:return!1;case $s.INVALID_ARGUMENT:case $s.NOT_FOUND:case $s.ALREADY_EXISTS:case $s.PERMISSION_DENIED:case $s.FAILED_PRECONDITION:case $s.ABORTED:case $s.OUT_OF_RANGE:case $s.UNIMPLEMENTED:case $s.DATA_LOSS:return!0}}(n=e.code)&&n!==$s.ABORTED){const n=t.D_.shift();hu(t).Zo(),await Xh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Yh(t)}var n}(t,e),tu(t)&&eu(t)}async function ou(t,e){const n=Ks(t);n.asyncQueue.verifyOperationInProgress(),Vs("RemoteStore","RemoteStore received new credentials");const s=Kh(n);n.v_.add(3),await Fh(n),s&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Ph(n)}function au(t){return t.N_||(t.N_=function(t,e,n){const s=Ks(t);return s.R_(),new xh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Po:Gh.bind(null,t),To:Qh.bind(null,t),u_:Hh.bind(null,t)}),t.F_.push((async e=>{e?(t.N_.Zo(),zh(t)?Bh(t):t.x_.set("Unknown")):(await t.N_.stop(),$h(t))}))),t.N_}function hu(t){return t.B_||(t.B_=function(t,e,n){const s=Ks(t);return s.R_(),new Rh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Po:nu.bind(null,t),To:iu.bind(null,t),E_:su.bind(null,t),T_:ru.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await Yh(t)):(await t.B_.stop(),t.D_.length>0&&(Vs("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uu{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new Qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new uu(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Gs($s.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(t,e){if(Us("AsyncQueue",`${e}: ${t}`),Sr(t))return new Gs($s.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||dr.comparator(e.key,n.key):(t,e)=>dr.comparator(t.key,e.key),this.keyedMap=so(),this.sortedSet=new Or(this.comparator)}static emptySet(t){return new lu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof lu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new lu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.L_=new Or(dr.comparator)}track(t){const e=t.doc.key,n=this.L_.get(e);n?0!==t.type&&3===n.type?this.L_=this.L_.insert(e,t):3===t.type&&1!==n.type?this.L_=this.L_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.L_=this.L_.remove(e):1===t.type&&2===n.type?this.L_=this.L_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):Bs():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class fu{constructor(t,e,n,s,r,i,o,a,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new fu(t,e,lu.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.q_=void 0,this.Q_=[]}}class pu{constructor(){this.queries=new Zi((t=>Hi(t)),Qi),this.onlineState="Unknown",this.K_=new Set}}async function mu(t,e){const n=Ks(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new gu),r)try{i.q_=await n.onListen(s)}catch(o){const t=cu(o,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(t)}n.queries.set(s,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&Eu(n)}async function yu(t,e){const n=Ks(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.Q_.indexOf(e);t>=0&&(i.Q_.splice(t,1),r=0===i.Q_.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function vu(t,e){const n=Ks(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.Q_)t.W_(r)&&(s=!0);e.q_=r}}s&&Eu(n)}function wu(t,e,n){const s=Ks(t),r=s.queries.get(e);if(r)for(const i of r.Q_)i.onError(n);s.queries.delete(e)}function Eu(t){t.K_.forEach((t=>{t.next()}))}class Tu{constructor(t,e,n){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new fu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Y_(t){t=fu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.key=t}}class bu{constructor(t){this.key=t}}class Su{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=co(),this.mutatedKeys=co(),this.ua=Yi(t),this.ca=new lu(this.ua)}get la(){return this.oa}ha(t,e){const n=e?e.Pa:new du,s=e?e.ca:this.ca;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,h="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),c=Xi(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?l!==d&&(n.track({type:3,doc:c}),f=!0):this.Ia(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.ua(c,a)>0||h&&this.ua(c,h)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||h)&&(o=!0)),f&&(c?(i=i.add(c),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{ca:i,Pa:n,Xi:o,mutatedKeys:r}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const r=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const i=t.Pa.k_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Bs()}};return n(t)-n(e)}(t.type,e.type)||this.ua(t.doc,e.doc))),this.Ta(n),s=null!=s&&s;const o=e&&!s?this.Ea():[],a=0===this.aa.size&&this.current&&!s?1:0,h=a!==this._a;return this._a=a,0!==i.length||h?{snapshot:new fu(this.query,t.ca,r,i,t.mutatedKeys,0===a,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:o}:{da:o}}U_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new du,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach((t=>this.oa=this.oa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.oa=this.oa.delete(t))),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=co(),this.ca.forEach((t=>{this.Aa(t.key)&&(this.aa=this.aa.add(t.key))}));const e=[];return t.forEach((t=>{this.aa.has(t)||e.push(new bu(t))})),this.aa.forEach((n=>{t.has(n)||e.push(new _u(n))})),e}Ra(t){this.oa=t.hs,this.aa=co();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return fu.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class Iu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Cu{constructor(t){this.key=t,this.ma=!1}}class Au{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.fa={},this.ga=new Zi((t=>Hi(t)),Qi),this.pa=new Map,this.ya=new Set,this.wa=new Or(dr.comparator),this.Sa=new Map,this.ba=new Ja,this.Da={},this.Ca=new Map,this.va=Ga.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function Du(t,e){const n=function(t){const e=Ks(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$u.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lu.bind(null,e),e.fa.u_=vu.bind(null,e.eventManager),e.fa.xa=wu.bind(null,e.eventManager),e}(t);let s,r;const i=n.ga.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Va();else{const t=await function(t,e){const n=Ks(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Qr.getTargetData(t,e).next((r=>r?(s=r,wr.resolve(s)):n.Qr.allocateTargetId(t).next((r=>(s=new qa(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.Qr.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.ns.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(t.targetId,t),n.rs.set(e,t.targetId)),t}))}(n.localStore,$i(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await async function(t,e,n,s,r){t.Ma=(e,n,s)=>async function(t,e,n,s){let r=e.view.ha(n);r.Xi&&(r=await mh(t.localStore,e.query,!1).then((({documents:t})=>e.view.ha(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=s&&null!=s.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,i,o);return ju(t,e.targetId,a.da),a.snapshot}(t,e,n,s);const i=await mh(t.localStore,e,!0),o=new Su(e,i.hs),a=o.ha(i.documents),h=sa.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,h);ju(t,n,u.da);const c=new Iu(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}(n,e,s,"current"===i,t.resumeToken),n.isPrimaryClient&&Vh(n.remoteStore,t)}return r}async function ku(t,e){const n=Ks(t),s=n.ga.get(e),r=n.pa.get(s.targetId);if(r.length>1)return n.pa.set(s.targetId,r.filter((t=>!Qi(t,e)))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ph(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Uh(n.remoteStore,s.targetId),Vu(n,s.targetId)})).catch(vr)):(Vu(n,s.targetId),await ph(n.localStore,s.targetId,!0))}async function Nu(t,e,n){const s=function(t){const e=Ks(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ou.bind(null,e),e}(t);try{const t=await function(t,e){const n=Ks(t),s=or.now(),r=e.reduce(((t,e)=>t.add(e.key)),co());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=eo(),h=co();return n.os.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(h=h.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Oo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Vo(t.key,e,fi(e.value.mapValue),ko.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,h);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:ro(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Da[t.currentUser.toKey()];s||(s=new Or(rr)),s=s.insert(e,n),t.Da[t.currentUser.toKey()]=s}(s,t.batchId,n),await zu(s,t.changes),await Yh(s.remoteStore)}catch(r){const t=cu(r,"Failed to persist write");n.reject(t)}}async function xu(t,e){const n=Ks(t);try{const t=await fh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Sa.get(e);s&&(zs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ma=!0:t.modifiedDocuments.size>0?zs(s.ma):t.removedDocuments.size>0&&(zs(s.ma),s.ma=!1))})),await zu(n,t,e)}catch(s){await vr(s)}}function Ru(t,e,n){const s=Ks(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ga.forEach(((n,s)=>{const r=s.view.U_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Ks(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const r of n.Q_)r.U_(e)&&(s=!0)})),s&&Eu(n)}(s.eventManager,e),t.length&&s.fa.u_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Lu(t,e,n){const s=Ks(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Sa.get(e),i=r&&r.key;if(i){let t=new Or(dr.comparator);t=t.insert(i,gi.newNoDocument(i,ar.min()));const n=co().add(i),r=new na(ar.min(),new Map,new Or(rr),t,n);await xu(s,r),s.wa=s.wa.remove(i),s.Sa.delete(e),Bu(s)}else await ph(s.localStore,e,!1).then((()=>Vu(s,e,n))).catch(vr)}async function Mu(t,e){const n=Ks(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Ks(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=wr.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);zs(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=co();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);Fu(n,s,null),Pu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zu(n,t)}catch(r){await vr(r)}}async function Ou(t,e,n){const s=Ks(t);try{const t=await function(t,e){const n=Ks(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(zs(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Fu(s,e,n),Pu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zu(s,t)}catch(r){await vr(r)}}function Pu(t,e){(t.Ca.get(e)||[]).forEach((t=>{t.resolve()})),t.Ca.delete(e)}function Fu(t,e,n){const s=Ks(t);let r=s.Da[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.Da[s.currentUser.toKey()]=r}}function Vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.pa.get(e))t.ga.delete(s),n&&t.fa.xa(s,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach((e=>{t.ba.containsKey(e)||Uu(t,e)}))}function Uu(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);null!==n&&(Uh(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Bu(t))}function ju(t,e,n){for(const s of n)s instanceof _u?(t.ba.addReference(s.key,e),qu(t,s)):s instanceof bu?(Vs("SyncEngine","Document no longer in limbo: "+s.key),t.ba.removeReference(s.key,e),t.ba.containsKey(s.key)||Uu(t,s.key)):Bs()}function qu(t,e){const n=e.key,s=n.path.canonicalString();t.wa.get(n)||t.ya.has(s)||(Vs("SyncEngine","New document in limbo: "+n),t.ya.add(s),Bu(t))}function Bu(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new dr(ur.fromString(e)),s=t.va.next();t.Sa.set(s,new Cu(n)),t.wa=t.wa.insert(n,s),Vh(t.remoteStore,new qa($i(Bi(n.path)),s,"TargetPurposeLimboResolution",kr._e))}}async function zu(t,e,n){const s=Ks(t),r=[],i=[],o=[];s.ga.isEmpty()||(s.ga.forEach(((t,a)=>{o.push(s.Ma(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=ah.Ki(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.fa.u_(r),await async function(t,e){const n=Ks(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>wr.forEach(e,(e=>wr.forEach(e.qi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>wr.forEach(e.Qi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(s){if(!Sr(s))throw s;Vs("LocalStore","Failed to update sequence numbers: "+s)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ns.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.ns=n.ns.insert(t,r)}}}(s.localStore,i))}async function Ku(t,e){const n=Ks(t);if(!n.currentUser.isEqual(e)){Vs("SyncEngine","User change. New user:",e.toKey());const t=await lh(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(s=n).Ca.forEach((t=>{t.forEach((t=>{t.reject(new Gs($s.CANCELLED,r))}))})),s.Ca.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await zu(n,t.us)}var s,r}function $u(t,e){const n=Ks(t),s=n.Sa.get(e);if(s&&s.ma)return co().add(s.key);{let t=co();const s=n.pa.get(e);if(!s)return t;for(const e of s){const s=n.ga.get(e);t=t.unionWith(s.view.la)}return t}}class Gu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Dh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,s){return new ch(t,e,n,s)}(this.persistence,new uh,t.initialUser,this.serializer)}createPersistence(t){return new rh(oh.Hr,this.serializer)}createSharedClientState(t){return new vh}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ru(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ku.bind(null,this.syncEngine),await async function(t,e){const n=Ks(t);e?(n.v_.delete(2),await Ph(n)):e||(n.v_.add(2),await Fh(n),n.x_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new pu}createDatastore(t){const e=Dh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Ch(s));var s;return function(t,e,n,s){return new Lh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Ru(this.syncEngine,t,0),i=Eh.D()?new Eh:new wh,new Oh(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Au(t,e,n,s,r,i);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(t){const e=Ks(t);Vs("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await Fh(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Us("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ms.UNAUTHENTICATED,this.clientId=sr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Vs("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Vs("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Gs($s.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Xu(t,e){t.asyncQueue.verifyOperationInProgress(),Vs("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await lh(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Yu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Vs("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const s=e;if(!function(t){return"FirebaseError"===t.name?t.code===$s.FAILED_PRECONDITION||t.code===$s.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(s))throw s;js("Error using user provided cache. Falling back to memory cache: "+s),await Xu(t,new Gu)}}else Vs("FirestoreClient","Using default OfflineComponentProvider"),await Xu(t,new Gu);return t._offlineComponents}(t);Vs("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>ou(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ou(e.remoteStore,n))),t._onlineComponents=e}async function Ju(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Vs("FirestoreClient","Using user provided OnlineComponentProvider"),await Yu(t,t._uninitializedComponentsProvider._online)):(Vs("FirestoreClient","Using default OnlineComponentProvider"),await Yu(t,new Qu))),t._onlineComponents}async function Zu(t){const e=await Ju(t),n=e.eventManager;return n.onListen=Du.bind(null,e.syncEngine),n.onUnlisten=ku.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ec=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e,n){if(!n)throw new Gs($s.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sc(t){if(!dr.isDocumentKey(t))throw new Gs($s.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rc(t){if(dr.isDocumentKey(t))throw new Gs($s.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ic(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Bs()}function oc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Gs($s.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new Gs($s.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Gs($s.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Gs($s.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new Gs($s.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tc(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Gs($s.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Gs($s.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Gs($s.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class hc{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ac({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Gs($s.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Gs($s.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ac(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ws;switch(t.type){case"firstParty":return new Zs(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Gs($s.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ec.get(t);e&&(Vs("ComponentProvider","Removing Datastore"),ec.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new uc(this.firestore,t,this._query)}}class cc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cc(this.firestore,t,this._key)}}class lc extends uc{constructor(t,e,n){super(t,e,Bi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cc(this.firestore,null,new dr(t))}withConverter(t){return new lc(this.firestore,t,this._path)}}function dc(t,e,...n){if(t=l(t),nc("collection","path",e),t instanceof hc){const s=ur.fromString(e,...n);return rc(s),new lc(t,null,s)}{if(!(t instanceof cc||t instanceof lc))throw new Gs($s.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ur.fromString(e,...n));return rc(s),new lc(t.firestore,null,s)}}function fc(t,e,...n){if(t=l(t),1===arguments.length&&(e=sr.newId()),nc("doc","path",e),t instanceof hc){const s=ur.fromString(e,...n);return sc(s),new cc(t,null,new dr(s))}{if(!(t instanceof cc||t instanceof lc))throw new Gs($s.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ur.fromString(e,...n));return sc(s),new cc(t.firestore,t instanceof lc?t.converter:null,new dr(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new kh(this,"async_queue_retry"),this._u=()=>{const t=Ah();t&&Vs("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=Ah();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=Ah();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise((()=>{}));const e=new Qs;return this.uu((()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.eu.push(t),this.cu())))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Sr(t))throw t;Vs("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo((()=>this.cu()))}}uu(t){const e=this.Xa.then((()=>(this.iu=!0,t().catch((t=>{this.ru=t,this.iu=!1;throw Us("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.iu=!1,t))))));return this.Xa=e,e}enqueueAfterDelay(t,e,n){this.au(),this.ou.indexOf(t)>-1&&(e=0);const s=uu.createAndSchedule(this,t,e,n,(t=>this.lu(t)));return this.nu.push(s),s}au(){this.ru&&Bs()}verifyOperationInProgress(){}async hu(){let t;do{t=this.Xa,await t}while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then((()=>{this.nu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.nu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.hu()}))}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class pc extends hc{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new gc,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vc(this),this._firestoreClient.terminate()}}function mc(t,e){const n="object"==typeof t?t:i(),s="string"==typeof t?t:e||"(default)",r=o(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=a("firestore");t&&function(t,e,n,s={}){var r;const i=(t=oc(t,hc))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Ms.MOCK_USER;else{e=u(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new Gs($s.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ms(i)}t._authCredentials=new Xs(new Hs(e,n))}}(r,...t)}return r}function yc(t){return t._firestoreClient||vc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vc(t){var e,n,s;const r=t._freezeSettings(),i=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",h=t._persistenceKey,new Xr(o,a,h,(u=r).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,tc(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,h,u;t._firestoreClient=new Wu(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=r.localCache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wc(Br.fromBase64String(t))}catch(e){throw new Gs($s.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wc(Br.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Gs($s.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Gs($s.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Gs($s.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rr(this._lat,t._lat)||rr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=/^__.*__$/;class Sc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Vo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fo(t,this.data,e,this.fieldTransforms)}}function Ic(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Bs()}}class Cc{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Eu(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Cc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Au({path:n,Vu:!1});return s.mu(t),s}fu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.Au({path:n,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Fc(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(0===t.length)throw this.pu("Document fields must not be empty");if(Ic(this.du)&&bc.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Ac{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Dh(t)}Su(t,e,n,s=!1){return new Cc({du:t,methodName:e,wu:n,path:lr.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dc(t){const e=t._freezeSettings(),n=Dh(t._databaseId);return new Ac(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kc(t,e,n,s,r,i={}){const o=t.Su(i.merge||i.mergeFields?2:0,e,n,r);Lc("Data must be an object, but it was:",o,s);const a=xc(s,o);let h,u;if(i.merge)h=new jr(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Mc(e,s,n);if(!o.contains(r))throw new Gs($s.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Vc(t,r)||t.push(r)}h=new jr(t),u=o.fieldTransforms.filter((t=>h.covers(t.field)))}else h=null,u=o.fieldTransforms;return new Sc(new di(a),h,u)}function Nc(t,e){if(Rc(t=l(t)))return Lc("Unsupported field value:",e,t),xc(t,e);if(t instanceof Tc)return function(t,e){if(!Ic(e.du))throw e.pu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.pu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&4!==e.du)throw e.pu("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=Nc(r,e.gu(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=l(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return po(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=or.fromDate(t);return{timestampValue:ma(e.serializer,n)}}if(t instanceof or){const n=new or(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ma(e.serializer,n)}}if(t instanceof _c)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wc)return{bytesValue:ya(e.serializer,t._byteString)};if(t instanceof cc){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.pu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ea(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.pu(`Unsupported field value: ${ic(t)}`)}(t,e)}function xc(t,e){const n={};return Mr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,((t,s)=>{const r=Nc(s,e.Ru(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Rc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof or||t instanceof _c||t instanceof wc||t instanceof cc||t instanceof Tc)}function Lc(t,e,n){if(!Rc(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=ic(n);throw"an object"===s?e.pu(t+" a custom object"):e.pu(t+" "+s)}var s}function Mc(t,e,n){if((e=l(e))instanceof Ec)return e._internalPath;if("string"==typeof e)return Pc(t,e);throw Fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Oc=new RegExp("[~\\*/\\[\\]]");function Pc(t,e,n){if(e.search(Oc)>=0)throw Fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ec(...e.split("."))._internalPath}catch(s){throw Fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(i||o)&&(h+=" (found",i&&(h+=` in field ${s}`),o&&(h+=` in document ${r}`),h+=")"),new Gs($s.INVALID_ARGUMENT,a+t+h)}function Vc(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new cc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new jc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class jc extends Uc{data(){return super.data()}}function qc(t,e){return"string"==typeof e?Pc(t,e):e instanceof Ec?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{convertValue(t,e="none"){switch(Zr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $r(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Gr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Bs()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Lr(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new _c($r(t.latitude),$r(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Hr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Wr(t));default:return null}}convertTimestamp(t){const e=Kr(t);return new or(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ur.fromString(t);zs(ja(n));const s=new Yr(n.get(1),n.get(3)),r=new dr(n.popFirst(5));return s.isEqual(e)||Us(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Kc extends Uc{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $c extends Kc{data(t={}){return super.data(t)}}class Gc{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new zc(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new $c(this._firestore,this._userDataWriter,n.key,n,new zc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Gs($s.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new $c(t._firestore,t._userDataWriter,n.doc.key,n.doc,new zc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new $c(t._firestore,t._userDataWriter,e.doc.key,e.doc,new zc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Qc(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Qc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Bs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){t=oc(t,cc);const e=oc(t.firestore,pc);return function(t,e,n={}){const s=new Qs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new Hu({next:i=>{e.enqueueAndForget((()=>yu(t,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new Gs($s.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new Gs($s.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:t=>r.reject(t)}),o=new Tu(Bi(n.path),i,{includeMetadataChanges:!0,Z_:!0});return mu(t,o)}(await Zu(t),t.asyncQueue,e,n,s))),s.promise}(yc(e),t._key).then((n=>function(t,e,n){const s=n.docs.get(e._key),r=new Wc(t);return new Kc(t,r,e._key,s,new zc(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class Wc extends Bc{constructor(t){super(),this.firestore=t}convertBytes(t){return new wc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new cc(this.firestore,null,e)}}function Xc(t){t=oc(t,uc);const e=oc(t.firestore,pc),n=yc(e),s=new Wc(e);return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Gs($s.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),function(t,e,n={}){const s=new Qs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new Hu({next:n=>{e.enqueueAndForget((()=>yu(t,o))),n.fromCache&&"server"===s.source?r.reject(new Gs($s.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Tu(n,i,{includeMetadataChanges:!0,Z_:!0});return mu(t,o)}(await Zu(t),t.asyncQueue,e,n,s))),s.promise}(n,t._query).then((n=>new Gc(e,s,t,n)))}function Yc(t,e,n){t=oc(t,cc);const s=oc(t.firestore,pc),r=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e,n);return function(t,e){return function(t,e){const n=new Qs;return t.asyncQueue.enqueueAndForget((async()=>Nu(await function(t){return Ju(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(yc(t),e)}(s,[kc(Dc(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,ko.none())])}!function(t,r=!0){Os=c,e(new n("firestore",((t,{instanceIdentifier:e,options:n})=>{const s=t.getProvider("app").getImmediate(),i=new pc(new Ys(t.getProvider("auth-internal")),new er(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Gs($s.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(t.options.projectId,e)}(s,e),s);return n=Object.assign({useFetchStreams:r},n),i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),s(Ls,"4.4.3",t),s(Ls,"4.4.3","esm2017")}();export{Xc as a,Hc as b,dc as c,fc as d,mc as g,Yc as s};
