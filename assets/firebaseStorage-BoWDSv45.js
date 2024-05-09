import{b as e,c as t,t as n,e as r,_ as s,C as o,r as i,u as a,S as u,F as c}from"./firebaseApp-BcsjuigZ.js";
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
 */const l="firebasestorage.googleapis.com",h="storageBucket";
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
class d extends c{constructor(e,t,n=0){super(m(e),`Firebase Storage: ${t} (${m(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return m(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var _,p,f,g;function m(e){return"storage/"+e}function R(){return new d(_.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function E(e){return new d(_.INVALID_ARGUMENT,e)}function T(){return new d(_.APP_DELETED,"The Firebase app was deleted.")}function w(e){throw new d(_.INTERNAL_ERROR,"Internal error: "+e)}
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
 */(p=_||(_={})).UNKNOWN="unknown",p.OBJECT_NOT_FOUND="object-not-found",p.BUCKET_NOT_FOUND="bucket-not-found",p.PROJECT_NOT_FOUND="project-not-found",p.QUOTA_EXCEEDED="quota-exceeded",p.UNAUTHENTICATED="unauthenticated",p.UNAUTHORIZED="unauthorized",p.UNAUTHORIZED_APP="unauthorized-app",p.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",p.INVALID_CHECKSUM="invalid-checksum",p.CANCELED="canceled",p.INVALID_EVENT_NAME="invalid-event-name",p.INVALID_URL="invalid-url",p.INVALID_DEFAULT_BUCKET="invalid-default-bucket",p.NO_DEFAULT_BUCKET="no-default-bucket",p.CANNOT_SLICE_BLOB="cannot-slice-blob",p.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",p.NO_DOWNLOAD_URL="no-download-url",p.INVALID_ARGUMENT="invalid-argument",p.INVALID_ARGUMENT_COUNT="invalid-argument-count",p.APP_DELETED="app-deleted",p.INVALID_ROOT_OPERATION="invalid-root-operation",p.INVALID_FORMAT="invalid-format",p.INTERNAL_ERROR="internal-error",p.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class b{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=b.makeFromUrl(e,t)}catch(s){return new b(e,"")}if(""===n.path)return n;throw r=e,new d(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let u=0;u<a.length;u++){const t=a[u],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let s=r[t.indices.path];s||(s=""),n=new b(e,s),t.postModify(n);break}}if(null==n)throw function(e){return new d(_.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class k{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function v(e){return"string"==typeof e||e instanceof String}function O(e,t,n,r){if(r<t)throw E(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw E(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function I(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function N(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
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
 */(g=f||(f={}))[g.NO_ERROR=0]="NO_ERROR",g[g.NETWORK_ERROR=1]="NETWORK_ERROR",g[g.ABORT=2]="ABORT";
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
class C{constructor(e,t,n,r,s,o,i,a,u,c,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new A(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===f.NO_ERROR,s=n.getStatus();if(!t||
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
function(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return n||r||s}(s,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===f.ABORT;return void e(!1,new A(!1,null,t))}const o=-1!==this.successCodes_.indexOf(s);e(!0,new A(o,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(o){r(o)}else if(null!==s){const e=R();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?T():new d(_.CANCELED,"User canceled the upload/download."))}else{r(new d(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new A(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,o=null,i=!1,a=0;function u(){return 2===a}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(_,u())}),t)}function d(){o&&clearTimeout(o)}function _(e,...t){if(c)return void d();if(e)return d(),void l.call(null,e,...t);if(u()||i)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function f(e){p||(p=!0,d(),c||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),o=setTimeout((()=>{i=!0,f(!0)}),n),f}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class A{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
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
function U(e){let t;try{t=JSON.parse(e)}catch(r){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
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
 */function x(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function y(e,t){return t}class D{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||y}}let P=null;function L(){if(P)return P;const e=[];e.push(new D("bucket")),e.push(new D("generation")),e.push(new D("metageneration")),e.push(new D("name","fullPath",!0));const t=new D("name");t.xform=function(e,t){return function(e){return!v(e)||e.length<2?e:x(e)}(t)},e.push(t);const n=new D("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new D("timeCreated")),e.push(new D("updated")),e.push(new D("md5Hash",null,!0)),e.push(new D("cacheControl",null,!0)),e.push(new D("contentDisposition",null,!0)),e.push(new D("contentEncoding",null,!0)),e.push(new D("contentLanguage",null,!0)),e.push(new D("contentType",null,!0)),e.push(new D("metadata","customMetadata",!0)),P=e,P}function S(e,t,n){const r={type:"file"},s=n.length;for(let o=0;o<s;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new b(n,r);return t._makeStorageReference(s)}})}(r,e),r}class F{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function M(e,t){return function(n,r){const s=function(e,t,n){const r=U(t);return null===r?null:S(e,r,n)}(e,r,t);return function(e){if(!e)throw R()}(null!==s),function(e,t,n,r){const s=U(t);if(null===s)return null;if(!v(s.downloadTokens))return null;const o=s.downloadTokens;if(0===o.length)return null;const i=encodeURIComponent;return o.split(",").map((t=>{const s=e.bucket,o=e.fullPath;return I("/b/"+i(s)+"/o/"+i(o),n,r)+N({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function V(e){return function(t,n){let r;var s,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new d(_.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(_.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new d(_.QUOTA_EXCEEDED,"Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new d(_.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function $(e){const t=V(e);return function(n,r){let s=t(n,r);var o;return 404===n.getStatus()&&(o=e.path,s=new d(_.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")),s.serverResponse=r.serverResponse,s}}class B{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw w("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw w("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw w("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw w("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw w("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class j extends B{initXhr(){this.xhr_.responseType="text"}}function q(){return new j}
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
 */class H{constructor(e,t){this._service=e,this._location=t instanceof b?t:b.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new H(e,t)}get root(){const e=new b(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new b(this._location.bucket,e);return new H(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new d(_.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function K(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=I(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new F(r,"GET",M(e,n),s);return o.errorHandler=$(t),o}(e.storage,e._location,L());return e.storage.makeRequestWithTokens(t,q).then((e=>{if(null===e)throw new d(_.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function W(e,t){if(e instanceof Z){const n=e;if(null==n._bucket)throw new d(_.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");const r=new H(n,n._bucket);return null!=t?W(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new b(e._location.bucket,n);return new H(e.storage,r)}
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
 */(e,t):e}function X(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Z)return new H(e,t);throw E("To use ref(service, url), the first argument must be a Storage instance.")}return W(e,t)}function z(e,t){const n=null==t?void 0:t[h];return null==n?null:b.makeFromBucketSpec(n,e)}class Z{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?b.makeFromBucketSpec(r,this._host):z(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=b.makeFromBucketSpec(this._url,e):this._bucket=z(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){O("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){O("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new H(this,e)}_makeRequest(e,t,n,r,s=!0){if(this._deleted)return new k(T());{const o=function(e,t,n,r,s,o,i=!0){const a=N(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new C(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,i)}(e,this._appId,n,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const G="@firebase/storage",J="0.12.2",Y="storage";function Q(t){return K(t=e(t))}function ee(t,n){return X(t=e(t),n)}function te(s=r(),o){s=e(s);const i=t(s,Y).getImmediate({identifier:o}),u=n("storage");return u&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:a(s,e.app.options.projectId))}(e,t,n,r)}(i,...u),i}function ne(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Z(n,r,s,t,u)}s(new o(Y,ne,"PUBLIC").setMultipleInstances(!0)),i(G,J,""),i(G,J,"esm2017");export{Q as a,te as g,ee as r};
