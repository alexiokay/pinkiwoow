import{S as m}from"./Wheeler.vue.c6295899.js";import{P as w,L as g}from"./lazy.13d8ab6e.js";import{f as h,M as f,y,o as r,E as l,N as s,U as v,V as x,W as n,u as a,a5 as p}from"./entry.2d4efcb3.js";/* empty css                   */const P={class:"relative h-auto overflow-hidden"},b={class:"swiper-container"},B={class:"swiper-wrapper"},k={class:"h-[54rem] w-full flex flex-col"},S=["src","alt"],C=s("div",{class:"swiper-lazy-preloader"},null,-1),L={class:"text-lg font-robotolight font-bold text-black mt-3"},N={key:0},V={key:1},z=s("div",{class:"swiper-pagination absolute left-0 right-0 bottom-[-58rem] ml-auto mr-auto"},null,-1),G=h({__name:"Swiper",props:{slides:{type:Array,required:!0}},setup(u){const d=u,i=f();return y(()=>{new m(".swiper-container",{modules:[w,g],preloadImages:!1,spaceBetween:4,lazy:{loadPrevNext:!0,loadPrevNextAmount:2},slidesPerGroup:1,loopFillGroupWithBlank:!0,breakpoints:{0:{slidesPerView:2,spaceBetween:4},569:{slidesPerView:3,spaceBetween:8},767:{slidesPerView:4.5,spaceBetween:12}}});function c(e){var o=document.querySelectorAll(e),t=0;if(length=o.length,length===d.slides.length)for(;t<length;t++)t>0&&t<length-1&&(o[t].style.display="none")}c(".swiper-pagination-bullet"),window.addEventListener("resize",e=>{console.log("page is fully loaded"),c(".swiper-pagination-bullet")}),document.querySelector(".swiper-container").classList.add("noselect")}),(c,_)=>(r(),l("div",P,[s("div",b,[s("div",B,[(r(!0),l(v,null,x(d.slides,e=>{var o,t;return r(),l("div",{class:"swiper-slide hover:cursor-pointer flex flex-col",key:e.title},[s("div",k,[s("img",{class:"swiper-image swiper-lazy overflow-hidden rounded-lg object-contain w-full h-full",src:(o=e.image)==null?void 0:o.url,alt:(t=e.image)==null?void 0:t.alt},null,8,S),C]),s("p",L,n(e.title),1),a(i).getCurrency==="EUR"?(r(),l("p",N,n(e.price_model.price_eur)+" "+n(a(i).getCurrency),1)):p("",!0),a(i).getCurrency==="PLN"&&e.price_model.price_pln!==null?(r(),l("p",V,n(e.price_model.price_pln)+" "+n(a(i).getCurrency),1)):p("",!0)])}),128))]),z])]))}});export{G as default};
