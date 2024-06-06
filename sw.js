if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>r(e,n),f={module:{uri:n},exports:o,require:c};i[n]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-d37740a6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"29afa754c9f1ee884b469e9e0defc56f"},{url:"logobcr1.png",revision:"09ac16f33f51d8124f090218b890ec4f"},{url:"manifest.json",revision:"77b447c18884c5699c00a1541ed88e04"},{url:"script.js",revision:"edefd35f07634798f682479a1fcd9c97"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

/*const STATIC_CACHE='static';

const APP_SHELL=[
    "/",
    "index.html",
    "script.js",
    "logobcr1.png"
]

//intercepta y cachea archivos
self.addEventListener("install",(e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then( (cache)=> cache.addAll(APP_SHELL) );

    e.waitUntil(cacheStatic);
});

self.addEventListener("script", e => {

    console.log("script detectado");

    //console.log("fetch detectado: ",e.request);
});*/