import{S as p}from"./Wheeler.vue_vue_type_style_index_0_lang.05b0ec64.js";import{P as u,L as w}from"./lazy.3e63ee7c.js";import{f as m,G as f,o as l,L as r,U as e,Y as h,Z as g,$ as a}from"./entry.267e7f08.js";/* empty css                                               */const _={class:"relative h-auto overflow-hidden"},v={class:"swiper-container"},y={class:"swiper-wrapper"},x={class:"h-[54rem] w-full flex flex-col"},b=["src"],B=e("div",{class:"swiper-lazy-preloader"},null,-1),P={class:"text-lg font-robotolight font-bold text-black mt-3"},k=e("div",{class:"swiper-pagination absolute left-0 right-0 bottom-[-58rem] ml-auto mr-auto"},null,-1),q=m({__name:"Swiper",props:{slides:{type:Array,required:!0}},setup(c){const n=c;return f(()=>{new p(".swiper-container",{modules:[u,w],preloadImages:!1,spaceBetween:4,lazy:{loadPrevNext:!0,loadPrevNextAmount:2},slidesPerGroup:1,loopFillGroupWithBlank:!0,breakpoints:{0:{slidesPerView:2,spaceBetween:4},569:{slidesPerView:3,spaceBetween:8},767:{slidesPerView:4.5,spaceBetween:12}}});function o(s){var i=document.querySelectorAll(s),t=0;if(length=i.length,length===n.slides.length)for(;t<length;t++)t>0&&t<length-1&&(i[t].style.display="none")}o(".swiper-pagination-bullet"),window.addEventListener("resize",s=>{console.log("page is fully loaded"),o(".swiper-pagination-bullet")}),document.querySelector(".swiper-container").classList.add("noselect")}),(o,d)=>(l(),r("div",_,[e("div",v,[e("div",y,[(l(!0),r(h,null,g(n.slides,s=>(l(),r("div",{class:"swiper-slide hover:cursor-pointer flex flex-col",key:s.name},[e("div",x,[e("img",{class:"swiper-image swiper-lazy overflow-hidden rounded-lg object-contain w-full h-full",src:s.img},null,8,b),B]),e("p",P,a(s.name),1),e("p",null,a(s.price)+" Z\u0141",1)]))),128))]),k])]))}});export{q as default};