(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{4147:t=>{t.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},8489:t=>{t.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},383:(t,e,s)=>{"use strict";s.d(e,{E:()=>j});var i="undefined"==typeof window||"Deno"in globalThis;function r(){}function n(t,e){return"function"==typeof t?t(e):t}function a(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==u(a,e.options))return!1}else if(!c(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!r||r===e.state.fetchStatus)&&(!n||!!n(e))}function o(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(h(e.options.mutationKey)!==h(n))return!1}else if(!c(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function u(t,e){return(e?.queryKeyHashFn||h)(t)}function h(t){return JSON.stringify(t,(t,e)=>d(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function c(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!c(t[s],e[s]))}function l(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function d(t){if(!f(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(f(s)&&s.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function f(t){return"[object Object]"===Object.prototype.toString.call(t)}function p(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function y(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var m=Symbol();function v(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==m?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}var b=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}(),g=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},C=new class extends g{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}},O=new class extends g{#i=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!i&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#i!==t&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}};function w(t){return Math.min(1e3*2**t,3e4)}function q(t){return(t??"online")!=="online"||O.isOnline()}var S=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function P(t){return t instanceof S}function F(t){let e,s=!1,r=0,n=!1,a=function(){let t,e;let s=new Promise((s,i)=>{t=s,e=i});function i(t){Object.assign(s,t),delete s.resolve,delete s.reject}return s.status="pending",s.catch(()=>{}),s.resolve=e=>{i({status:"fulfilled",value:e}),t(e)},s.reject=t=>{i({status:"rejected",reason:t}),e(t)},s}(),o=()=>C.isFocused()&&("always"===t.networkMode||O.isOnline())&&t.canRun(),u=()=>q(t.networkMode)&&t.canRun(),h=s=>{n||(n=!0,t.onSuccess?.(s),e?.(),a.resolve(s))},c=s=>{n||(n=!0,t.onError?.(s),e?.(),a.reject(s))},l=()=>new Promise(s=>{e=t=>{(n||o())&&s(t)},t.onPause?.()}).then(()=>{e=void 0,n||t.onContinue?.()}),d=()=>{let e;if(n)return;let a=0===r?t.initialPromise:void 0;try{e=a??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(h).catch(e=>{if(n)return;let a=t.retry??(i?0:3),u=t.retryDelay??w,h="function"==typeof u?u(r,e):u,f=!0===a||"number"==typeof a&&r<a||"function"==typeof a&&a(r,e);if(s||!f){c(e);return}r++,t.onFail?.(r,e),new Promise(t=>{setTimeout(t,h)}).then(()=>o()?void 0:l()).then(()=>{s?c(e):d()})})};return{promise:a,cancel:e=>{n||(c(new S(e)),t.abort?.())},continue:()=>(e?.(),a),cancelRetry:()=>{s=!0},continueRetry:()=>{s=!1},canStart:u,start:()=>(u()?d():l().then(d),a)}}var D=class{#r;destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.gcTime)&&t>=0&&t!==1/0&&(this.#r=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i?1/0:3e5))}clearGcTimeout(){this.#r&&(clearTimeout(this.#r),this.#r=void 0)}},E=class extends D{#n;#a;#o;#u;#h;#c;#l;constructor(t){super(),this.#l=!1,this.#c=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#u=t.client,this.#o=this.#u.getQueryCache(),this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#n=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#n,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#h?.promise}setOptions(t){this.options={...this.#c,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){var s,i;let r=(s=this.state.data,"function"==typeof(i=this.options).structuralSharing?i.structuralSharing(s,t):!1!==i.structuralSharing?function t(e,s){if(e===s)return e;let i=l(e)&&l(s);if(i||d(e)&&d(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),o=a.length,u=i?[]:{},h=0;for(let n=0;n<o;n++){let o=i?n:a[n];(!i&&r.includes(o)||i)&&void 0===e[o]&&void 0===s[o]?(u[o]=void 0,h++):(u[o]=t(e[o],s[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return n===o&&h===n?e:u}return s}(s,t):t);return this.#d({data:r,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),r}setState(t,e){this.#d({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#h?.promise;return this.#h?.cancel(t),e?e.then(r).catch(r):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#n)}isActive(){return this.observers.some(t=>{var e;return!1!==("function"==typeof(e=t.options.enabled)?e(this):e)})}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===m||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!Math.max(this.state.dataUpdatedAt+(t||0)-Date.now(),0)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#h&&(this.#l?this.#h.cancel({revert:!0}):this.#h.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#d({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#h)return this.#h.continueRetry(),this.#h.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#l=!0,s.signal)})},r={fetchOptions:e,options:this.options,queryKey:this.queryKey,client:this.#u,state:this.state,fetchFn:()=>{let t=v(this.options,e),s={client:this.#u,queryKey:this.queryKey,meta:this.meta};return(i(s),this.#l=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};i(r),this.options.behavior?.onFetch(r,this),this.#a=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==r.fetchOptions?.meta)&&this.#d({type:"fetch",meta:r.fetchOptions?.meta});let n=t=>{P(t)&&t.silent||this.#d({type:"error",error:t}),P(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#h=F({initialPromise:e?.initialPromise,fn:r.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){n(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){n(t);return}this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:n,onFail:(t,e)=>{this.#d({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#d({type:"pause"})},onContinue:()=>{this.#d({type:"continue"})},retry:r.options.retry,retryDelay:r.options.retryDelay,networkMode:r.options.networkMode,canRun:()=>!0}),this.#h.start()}#d(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":var s;return{...e,...(s=e.data,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:q(this.options.networkMode)?"fetching":"paused",...void 0===s&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if(P(i)&&i.revert&&this.#a)return{...this.#a,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),b.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}},A=class extends g{constructor(t={}){super(),this.config=t,this.#f=new Map}#f;build(t,e,s){let i=e.queryKey,r=e.queryHash??u(i,e),n=this.get(r);return n||(n=new E({client:t,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(n)),n}add(t){this.#f.has(t.queryHash)||(this.#f.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#f.get(t.queryHash);e&&(t.destroy(),e===t&&this.#f.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){b.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#f.get(t)}getAll(){return[...this.#f.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>a(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>a(t,e)):e}notify(t){b.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){b.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){b.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},M=class extends D{#p;#y;#h;constructor(t){super(),this.mutationId=t.mutationId,this.#y=t.mutationCache,this.#p=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#p.includes(t)||(this.#p.push(t),this.clearGcTimeout(),this.#y.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#p=this.#p.filter(e=>e!==t),this.scheduleGc(),this.#y.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#p.length||("pending"===this.state.status?this.scheduleGc():this.#y.remove(this))}continue(){return this.#h?.continue()??this.execute(this.state.variables)}async execute(t){this.#h=F({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#d({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#d({type:"pause"})},onContinue:()=>{this.#d({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#y.canRun(this)});let e="pending"===this.state.status,s=!this.#h.canStart();try{if(!e){this.#d({type:"pending",variables:t,isPaused:s}),await this.#y.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#d({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#h.start();return await this.#y.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#y.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#d({type:"success",data:i}),i}catch(e){try{throw await this.#y.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#y.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#d({type:"error",error:e})}}finally{this.#y.runNext(this)}}#d(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),b.batch(()=>{this.#p.forEach(e=>{e.onMutationUpdate(t)}),this.#y.notify({mutation:this,type:"updated",action:t})})}},Q=class extends g{constructor(t={}){super(),this.config=t,this.#m=new Set,this.#v=new Map,this.#b=0}#m;#v;#b;build(t,e,s){let i=new M({mutationCache:this,mutationId:++this.#b,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#m.add(t);let e=R(t);if("string"==typeof e){let s=this.#v.get(e);s?s.push(t):this.#v.set(e,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#m.delete(t)){let e=R(t);if("string"==typeof e){let s=this.#v.get(e);if(s){if(s.length>1){let e=s.indexOf(t);-1!==e&&s.splice(e,1)}else s[0]===t&&this.#v.delete(e)}}}this.notify({type:"removed",mutation:t})}canRun(t){let e=R(t);if("string"!=typeof e)return!0;{let s=this.#v.get(e),i=s?.find(t=>"pending"===t.state.status);return!i||i===t}}runNext(t){let e=R(t);if("string"!=typeof e)return Promise.resolve();{let s=this.#v.get(e)?.find(e=>e!==t&&e.state.isPaused);return s?.continue()??Promise.resolve()}}clear(){b.batch(()=>{this.#m.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#m.clear(),this.#v.clear()})}getAll(){return Array.from(this.#m)}find(t){let e={exact:!0,...t};return this.getAll().find(t=>o(e,t))}findAll(t={}){return this.getAll().filter(e=>o(t,e))}notify(t){b.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return b.batch(()=>Promise.all(t.map(t=>t.continue().catch(r))))}};function R(t){return t.options.scope?.id}function x(t){return{onFetch:(e,s)=>{let i=e.options,r=e.fetchOptions?.meta?.fetchMore?.direction,n=e.state.data?.pages||[],a=e.state.data?.pageParams||[],o={pages:[],pageParams:[]},u=0,h=async()=>{let s=!1,h=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},c=v(e.options,e.fetchOptions),l=async(t,i,r)=>{if(s)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);let n={client:e.client,queryKey:e.queryKey,pageParam:i,direction:r?"backward":"forward",meta:e.options.meta};h(n);let a=await c(n),{maxPages:o}=e.options,u=r?y:p;return{pages:u(t.pages,a,o),pageParams:u(t.pageParams,i,o)}};if(r&&n.length){let t="backward"===r,e={pages:n,pageParams:a},s=(t?function(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}:T)(i,e);o=await l(e,s,t)}else{let e=t??n.length;do{let t=0===u?a[0]??i.initialPageParam:T(i,o);if(u>0&&null==t)break;o=await l(o,t),u++}while(u<e)}return o};e.options.persister?e.fetchFn=()=>e.options.persister?.(h,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=h}}}function T(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}var j=class{#g;#y;#c;#C;#O;#w;#q;#S;constructor(t={}){this.#g=t.queryCache||new A,this.#y=t.mutationCache||new Q,this.#c=t.defaultOptions||{},this.#C=new Map,this.#O=new Map,this.#w=0}mount(){this.#w++,1===this.#w&&(this.#q=C.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#g.onFocus())}),this.#S=O.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#g.onOnline())}))}unmount(){this.#w--,0===this.#w&&(this.#q?.(),this.#q=void 0,this.#S?.(),this.#S=void 0)}isFetching(t){return this.#g.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#y.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#g.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),s=this.#g.build(this,e),i=s.state.data;return void 0===i?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime(n(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return this.#g.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#g.get(i.queryHash),n=r?.state.data,a="function"==typeof e?e(n):e;if(void 0!==a)return this.#g.build(this,i).setData(a,{...s,manual:!0})}setQueriesData(t,e,s){return b.batch(()=>this.#g.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#g.get(e.queryHash)?.state}removeQueries(t){let e=this.#g;b.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#g,i={type:"active",...t};return b.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t,e={}){let s={revert:!0,...e};return Promise.all(b.batch(()=>this.#g.findAll(t).map(t=>t.cancel(s)))).then(r).catch(r)}invalidateQueries(t,e={}){return b.batch(()=>{if(this.#g.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")return Promise.resolve();let s={...t,type:t?.refetchType??t?.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t,e={}){let s={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(b.batch(()=>this.#g.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(r)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(r)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#g.build(this,e);return s.isStaleByTime(n(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(r).catch(r)}fetchInfiniteQuery(t){return t.behavior=x(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(r).catch(r)}ensureInfiniteQueryData(t){return t.behavior=x(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return O.isOnline()?this.#y.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#g}getMutationCache(){return this.#y}getDefaultOptions(){return this.#c}setDefaultOptions(t){this.#c=t}setQueryDefaults(t,e){this.#C.set(h(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#C.values()],s={};return e.forEach(e=>{c(t,e.queryKey)&&Object.assign(s,e.defaultOptions)}),s}setMutationDefaults(t,e){this.#O.set(h(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#O.values()],s={};return e.forEach(e=>{c(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#c.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=u(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===m&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#c.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#g.clear(),this.#y.clear()}}},5906:(t,e,s)=>{"use strict";s.d(e,{Ht:()=>a});var i=s(2115),r=s(5155),n=i.createContext(void 0),a=t=>{let{client:e,children:s}=t;return i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,r.jsx)(n.Provider,{value:e,children:s})}}}]);