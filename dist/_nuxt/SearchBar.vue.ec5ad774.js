import{o as s,E as c,N as r,f as i,y as d,Z as u,u as m}from"./entry.2d4efcb3.js";const b={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},g=r("path",{fill:"currentColor",d:"m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"},null,-1),h=[g];function p(l,o){return s(),c("svg",b,h)}const v={name:"ri-search-line",render:p},_=r("input",{class:"w-full h-full pl-2 text-gray-500 focus:text-black focus:outline-none focus:ring-0 focus:border-0",type:"text",placeholder:"Search"},null,-1),y=i({__name:"SearchBar",setup(l){const o=()=>{const e=document.getElementById("overlay"),t=document.getElementById("navbar-navigation"),n=document.getElementById("navbar-wrapper"),a=document.getElementById("navbar-content1");e==null||e.classList.remove("hidden-overlay"),e==null||e.classList.add("visible-overlay"),n.style.backgroundColor="rgba(0, 0, 0, 0)",a.style.backgroundColor="white",t.style.opacity="0.4",console.log(e==null?void 0:e.classList)};return d(()=>{const e=document.getElementById("overlay"),t=document.getElementById("navbar-navigation"),n=document.getElementById("navbar-wrapper"),a=document.getElementById("navbar-content1");e==null||e.addEventListener("click",()=>{e==null||e.classList.remove("visible-overlay"),e==null||e.classList.add("hidden-overlay"),n.style.backgroundColor="white",a.style.backgroundColor="white",t.style.opacity="1",console.log(e==null?void 0:e.classList)})}),(e,t)=>(s(),c("div",{class:"flex items-center justify-start text-xl space-x-3",id:"searchbar",onClick:o},[u(m(v),{class:"w-8 h-8 text-black"}),_]))}});export{y as _};
