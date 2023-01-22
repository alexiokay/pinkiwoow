import{j as A,l as m,_ as E,k as j,f as q,t as x,m as Q,w as T,p as R,h as L,i as N}from"./entry.2d4efcb3.js";import{a as D,j as B,b as I,c as g,s as F}from"./utils.f63a3a69.js";const v=(t,e)=>e.split(".").reduce((r,n)=>r&&r[n],t),b=(t,e)=>Object.keys(t).filter(e).reduce((r,n)=>Object.assign(r,{[n]:t[n]}),{}),M=t=>e=>Array.isArray(e)?e.map(r=>t(r)):t(e),k=t=>{const e=[],r=[];for(const n of t)["$","_"].includes(n)?e.push(n):r.push(n);return{prefixes:e,properties:r}},V=(t=[])=>e=>{if(t.length===0||!e)return e;const{prefixes:r,properties:n}=k(t);return b(e,i=>!n.includes(i)&&!r.includes(i[0]))},X=(t=[])=>e=>{if(t.length===0||!e)return e;const{prefixes:r,properties:n}=k(t);return b(e,i=>n.includes(i)||r.includes(i[0]))},H=(t,e)=>{const r=new Intl.Collator(e.$locale,{numeric:e.$numeric,caseFirst:e.$caseFirst,sensitivity:e.$sensitivity}),n=Object.keys(e).filter(i=>!i.startsWith("$"));for(const i of n)t=t.sort((s,u)=>{const a=[v(s,i),v(u,i)].map(l=>{if(l!==null)return l instanceof Date?l.toISOString():l});return e[i]===-1&&a.reverse(),r.compare(a[0],a[1])});return t},Z=(t,e="Expected an array")=>{if(!Array.isArray(t))throw new TypeError(e)},p=t=>Array.isArray(t)?t:t?[t]:[],G=["sort","where","only","without"],_=(t,e)=>{const r={...e};for(const s of G)r[s]&&(r[s]=p(r[s]));const n=(s,u=a=>a)=>(...a)=>(r[s]=u(...a),i),i={params:()=>r,only:n("only",p),without:n("without",p),where:n("where",s=>[...p(r.where),s]),sort:n("sort",s=>[...p(r.sort),...p(s)]),limit:n("limit",s=>parseInt(String(s),10)),skip:n("skip",s=>parseInt(String(s),10)),find:()=>t(i),findOne:()=>(r.first=!0,t(i)),findSurround:(s,u)=>(r.surround={query:s,...u},t(i)),locale:s=>i.where({_locale:s})};return i};function C(t){return JSON.stringify(t,J)}function J(t,e){return e instanceof RegExp?`--REGEX ${e.toString()}`:e}const K=t=>{let e=C(t);return e=typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e),e=e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(e.match(/.{1,100}/g)||[]).join("/")},$=t=>async e=>{var u,a,l;const{content:r}=A().public;t&&(e.params().first&&(e.params().where||[]).length===0?e.where({_path:I(t)}):e.where({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=e.params().sort)!=null&&u.length||e.sort({_file:1,$numeric:!0}),r.locales.length&&((l=(a=e.params().where)==null?void 0:a.find(f=>f._locale))!=null&&l._locale||e.locale(r.defaultLocale));const n=e.params(),i=r.experimental.stripQueryParameters?g(`/query/${`${m(n)}.${r.integrity}`}/${K(n)}.json`):g(`/query/${m(n)}.${r.integrity}.json`);if(F())return(await E(()=>import("./client-db.829c2a2d.js"),["./client-db.829c2a2d.js","./entry.2d4efcb3.js","./entry.0f59c0d7.css","./utils.f63a3a69.js","./index.68c44503.js","./_commonjsHelpers.cebfa718.js"],import.meta.url).then(f=>f.useContentDatabase())).fetch(e);const s=await $fetch(i,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:C(n),previewToken:j("previewToken").value}});if(typeof s=="string"&&s.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return s};function S(t,...e){return typeof t=="string"?_($(D(B(t,...e)))):_($(),t)}const U=q({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(t){const{path:e,only:r,without:n,where:i,sort:s,limit:u,skip:a,locale:l,find:c}=x(t),f=Q(()=>{var o;return(o=e.value)==null?void 0:o.includes("/_")});T(()=>t,()=>h(),{deep:!0});const{data:y,refresh:h}=await R(`content-query-${m(t)}`,()=>{let o;return e.value?o=S(e.value):o=S(),r.value&&(o=o.only(r.value)),n.value&&(o=o.without(n.value)),i.value&&(o=o.where(i.value)),s.value&&(o=o.sort(s.value)),u.value&&(o=o.limit(u.value)),a.value&&(o=o.skip(a.value)),l.value&&(o=o.where({_locale:l.value})),c.value==="one"?o.findOne():c.value==="surround"?e.value?o.findSurround(e.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),o.find()):o.find()});return{isPartial:f,data:y,refresh:h}},render(t){var w;const e=L(),{data:r,refresh:n,isPartial:i,path:s,only:u,without:a,where:l,sort:c,limit:f,skip:y,locale:h,find:o}=t,d={path:s,only:u,without:a,where:l,sort:c,limit:f,skip:y,locale:h,find:o};if(d.find==="one"){if(!r&&(e==null?void 0:e["not-found"]))return e["not-found"]({props:d,...this.$attrs});if((e==null?void 0:e.empty)&&(r==null?void 0:r._type)==="markdown"&&!((w=r==null?void 0:r.body)!=null&&w.children.length))return e.empty({props:d,...this.$attrs})}else if((!r||!r.length)&&e!=null&&e["not-found"])return e["not-found"]({props:d,...this.$attrs});return e!=null&&e.default?e.default({data:r,refresh:n,isPartial:i,props:d,...this.$attrs}):((O,P)=>N("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:O,data:P},null,2)))("default",{data:r,props:d,isPartial:i})}}),ee=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{ee as C,U as _,Z as a,p as b,M as c,X as d,K as e,_ as f,v as g,C as j,H as s,V as w};
