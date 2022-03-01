import{_ as Ee}from"./index.07864614.js";import{o as we,c as Se,t as Ce}from"./vendor.d705d69a.js";var H={exports:{}},se=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},xe=se,E=Object.prototype.toString;function M(r){return Array.isArray(r)}function I(r){return typeof r=="undefined"}function Oe(r){return r!==null&&!I(r)&&r.constructor!==null&&!I(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function ie(r){return E.call(r)==="[object ArrayBuffer]"}function Re(r){return E.call(r)==="[object FormData]"}function $e(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ie(r.buffer),e}function Ae(r){return typeof r=="string"}function Ne(r){return typeof r=="number"}function oe(r){return r!==null&&typeof r=="object"}function N(r){if(E.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function ge(r){return E.call(r)==="[object Date]"}function Te(r){return E.call(r)==="[object File]"}function Pe(r){return E.call(r)==="[object Blob]"}function ue(r){return E.call(r)==="[object Function]"}function Ue(r){return oe(r)&&ue(r.pipe)}function _e(r){return E.call(r)==="[object URLSearchParams]"}function Be(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Le(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function J(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),M(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function F(){var r={};function e(n,s){N(r[s])&&N(n)?r[s]=F(r[s],n):N(n)?r[s]=F({},n):M(n)?r[s]=n.slice():r[s]=n}for(var t=0,a=arguments.length;t<a;t++)J(arguments[t],e);return r}function je(r,e,t){return J(e,function(n,s){t&&typeof n=="function"?r[s]=xe(n,t):r[s]=n}),r}function De(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:M,isArrayBuffer:ie,isBuffer:Oe,isFormData:Re,isArrayBufferView:$e,isString:Ae,isNumber:Ne,isObject:oe,isPlainObject:N,isUndefined:I,isDate:ge,isFile:Te,isBlob:Pe,isFunction:ue,isStream:Ue,isURLSearchParams:_e,isStandardBrowserEnv:Le,forEach:J,merge:F,extend:je,trim:Be,stripBOM:De},C=h;function K(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var fe=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(C.isURLSearchParams(t))n=t.toString();else{var s=[];C.forEach(t,function(f,m){f===null||typeof f=="undefined"||(C.isArray(f)?m=m+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),s.push(K(m)+"="+K(l))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},qe=h;function T(){this.handlers=[]}T.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};T.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};T.prototype.forEach=function(e){qe.forEach(this.handlers,function(a){a!==null&&e(a)})};var ke=T,Ie=h,Fe=function(e,t){Ie.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},le=function(e,t,a,n,s){return e.config=t,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},He=le,ce=function(e,t,a,n,s){var o=new Error(e);return He(o,t,a,n,s)},Me=ce,Je=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(Me("Request failed with status code "+a.status,a.config,null,a.request,a))},$=h,ze=$.isStandardBrowserEnv()?function(){return{write:function(t,a,n,s,o,u){var f=[];f.push(t+"="+encodeURIComponent(a)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(s)&&f.push("path="+s),$.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ve=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},We=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Xe=Ve,Ke=We,Ge=function(e,t){return e&&!Xe(t)?Ke(e,t):t},j=h,Ye=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Qe=function(e){var t={},a,n,s;return e&&j.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=j.trim(u.substr(0,s)).toLowerCase(),n=j.trim(u.substr(s+1)),a){if(t[a]&&Ye.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},G=h,Ze=G.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=G.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function z(r){this.message=r}z.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};z.prototype.__CANCEL__=!0;var P=z,A=h,er=Je,rr=ze,tr=fe,nr=Ge,ar=Qe,sr=Ze,D=ce,ir=_,or=P,Y=function(e){return new Promise(function(a,n){var s=e.data,o=e.headers,u=e.responseType,f;function m(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}A.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+y)}var d=nr(e.baseURL,e.url);i.open(e.method.toUpperCase(),tr(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function W(){if(!!i){var v="getAllResponseHeaders"in i?ar(i.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?i.responseText:i.response,w={data:S,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};er(function(L){a(L),m()},function(L){n(L),m()},w),i=null}}if("onloadend"in i?i.onloadend=W:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(W)},i.onabort=function(){!i||(n(D("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(D("Network Error",e,null,i)),i=null},i.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||ir.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(D(S,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},A.isStandardBrowserEnv()){var X=(e.withCredentials||sr(d))&&e.xsrfCookieName?rr.read(e.xsrfCookieName):void 0;X&&(o[e.xsrfHeaderName]=X)}"setRequestHeader"in i&&A.forEach(o,function(S,w){typeof s=="undefined"&&w.toLowerCase()==="content-type"?delete o[w]:i.setRequestHeader(w,S)}),A.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(v){!i||(n(!v||v&&v.type?new or("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),s||(s=null),i.send(s)})},c=h,Q=Fe,ur=le,fr={"Content-Type":"application/x-www-form-urlencoded"};function Z(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function lr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Y),r}function cr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:lr(),transformRequest:[function(e,t){return Q(t,"Accept"),Q(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(Z(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(Z(t,"application/json"),cr(e)):e}],transformResponse:[function(e){var t=this.transitional||U.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?ur(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){U.headers[e]={}});c.forEach(["post","put","patch"],function(e){U.headers[e]=c.merge(fr)});var _=U,dr=h,hr=_,pr=function(e,t,a){var n=this||hr;return dr.forEach(a,function(o){e=o.call(n,e,t)}),e},de=function(e){return!!(e&&e.__CANCEL__)},ee=h,q=pr,mr=de,vr=_,yr=P;function k(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new yr("canceled")}var br=function(e){k(e),e.headers=e.headers||{},e.data=q.call(e,e.data,e.headers,e.transformRequest),e.headers=ee.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ee.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||vr.adapter;return t(e).then(function(n){return k(e),n.data=q.call(e,n.data,n.headers,e.transformResponse),n},function(n){return mr(n)||(k(e),n&&n.response&&(n.response.data=q.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,he=function(e,t){t=t||{};var a={};function n(i,l){return p.isPlainObject(i)&&p.isPlainObject(l)?p.merge(i,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function s(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!p.isUndefined(t[i]))return n(void 0,t[i])}function u(i){if(p.isUndefined(t[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function f(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var y=m[l]||s,d=y(l);p.isUndefined(d)&&y!==f||(a[l]=d)}),a},pe={version:"0.26.0"},Er=pe.version,V={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){V[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var re={};V.transitional=function(e,t,a){function n(s,o){return"[Axios v"+Er+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return function(s,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!re[o]&&(re[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,u):!0}};function wr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var s=a[n],o=e[s];if(o){var u=r[s],f=u===void 0||o(u,s,r);if(f!==!0)throw new TypeError("option "+s+" must be "+f);continue}if(t!==!0)throw Error("Unknown option "+s)}}var Sr={assertOptions:wr,validators:V},me=h,Cr=fe,te=ke,ne=br,B=he,ve=Sr,x=ve.validators;function R(r){this.defaults=r,this.interceptors={request:new te,response:new te}}R.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=B(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&ve.assertOptions(a,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(s=s&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!s){var f=[ne,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var m=t;n.length;){var i=n.shift(),l=n.shift();try{m=i(m)}catch(y){l(y);break}}try{u=ne(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};R.prototype.getUri=function(e){return e=B(this.defaults,e),Cr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};me.forEach(["delete","get","head","options"],function(e){R.prototype[e]=function(t,a){return this.request(B(a||{},{method:e,url:t,data:(a||{}).data}))}});me.forEach(["post","put","patch"],function(e){R.prototype[e]=function(t,a,n){return this.request(B(n||{},{method:e,url:t,data:a}))}});var xr=R,Or=P;function O(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(o){t.subscribe(o),n=o}).then(a);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new Or(n),e(t.reason))})}O.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};O.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};O.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};O.source=function(){var e,t=new O(function(n){e=n});return{token:t,cancel:e}};var Rr=O,$r=function(e){return function(a){return e.apply(null,a)}},Ar=h,Nr=function(e){return Ar.isObject(e)&&e.isAxiosError===!0},ae=h,gr=se,g=xr,Tr=he,Pr=_;function ye(r){var e=new g(r),t=gr(g.prototype.request,e);return ae.extend(t,g.prototype,e),ae.extend(t,e),t.create=function(n){return ye(Tr(r,n))},t}var b=ye(Pr);b.Axios=g;b.Cancel=P;b.CancelToken=Rr;b.isCancel=de;b.VERSION=pe.version;b.all=function(e){return Promise.all(e)};b.spread=$r;b.isAxiosError=Nr;H.exports=b;H.exports.default=b;var Ur=H.exports;const _r={methods:{getUserData(){if(localStorage.getItem("acr21"))return this.$router.replace("/");Ur.post("https://aparchinmoy.herokuapp.com/user",{uid:this.$route.query.uid}).then(r=>{localStorage.setItem("acr21",r),this.$router.replace("/")}).catch(()=>{this.$router.replace("/restricted")})}},created(){this.getUserData()}},Br={class:"grid h-screen place-items-center"},Lr=Ce("button",{class:"btn btn-circle loading"},null,-1),jr=[Lr];function Dr(r,e,t,a,n,s){return we(),Se("div",Br,jr)}var Ir=Ee(_r,[["render",Dr]]);export{Ir as default};
