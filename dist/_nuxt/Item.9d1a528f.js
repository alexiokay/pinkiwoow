import{_ as x}from"./index.vue.f8b69ad0.js";import"./Wheeler.vue.c6295899.js";import{I as y}from"./shopping-cart-simple-fill.e74ed6b5.js";import{I as _}from"./heart-fill.bd89a59a.js";import{u,a as w}from"./Cart.95ca3e8d.js";import{f as v,x as I,o as i,E as a,O as t,a4 as q,a5 as d,Z as n,u as g,W as l,U as S}from"./entry.69b75ede.js";import"./ContentNavigation.1e63ec52.js";import"./Star.vue.7c1326c6.js";import"./_commonjsHelpers.cebfa718.js";import"./ContentQuery.4118f818.js";import"./utils.e538b51e.js";/* empty css                      *//* empty css                    */import"./client-only.f30d5020.js";/* empty css                  *//* empty css                   */import"./ContentDoc.ef38a9de.js";import"./ContentRenderer.7fc321fd.js";import"./ContentRendererMarkdown.76d9fd34.js";import"./index.68c44503.js";import"./ContentList.75b677d9.js";import"./ContentSlot.0e2353c3.js";import"./DocumentDrivenEmpty.93b2133c.js";import"./DocumentDrivenNotFound.7305ecb6.js";import"./Markdown.84316910.js";import"./ProseCode.36034ab5.js";import"./_plugin-vue_export-helper.a1a6add7.js";const k={class:"col-1 w-2/4 relative h-full flex flex-col space-y-3"},j={class:"absolute top-4 right-4 w-[6rem] h-auto space-y-3 flex flex-col items-end justify-center text-sm"},C={key:0,class:"w-[4.7rem] h-4 bg-green-600 text-white flex items-center justify-center text-sm"},B=t("p",{class:"mb-[1px]"},"NOWO\u015A\u0106",-1),N=[B],E={key:1,class:"w-[6rem] h-4 bg-blue-600 text-white flex items-center justify-center text-sm"},$=t("p",{class:"mb-[1px]"},"BESTSELLER",-1),P=[$],T={class:"group w-full h-full flex absolute bottom-0 right-0 flex-row justify-end items-end space-x-2 p-1"},O={class:"item-button1 group-hover:animate-showUp animate-hideDown flex text-gray-600 h-10 w-10 bg-transparent border-[1px] border-gray-600 items-center justify-center"},R={class:"flex flex-col font-montserrat justify-center items-center"},U={class:"text-2xl font-semibold"},ce=v({__name:"Item",props:{title:{type:String,required:!0},price:{type:Number,required:!0},description:{type:String,required:!1},image:{type:String,required:!0},image2:{type:String,required:!1},bestseller:{type:Boolean,required:!1},new:{type:Boolean,required:!1},stripeProductId:{type:String,required:!0},rated:{type:Number,required:!0}},setup(m){const e=m,p=(o,r)=>{r.target.style.backgroundImage=`url(${o})`};let c=I(u());c.value=u();const f=()=>({id:w.exports(),title:e.title,price:e.price,quantity:1,image:e.image,stripeProductId:e.stripeProductId}),b=()=>{c.value.addToCart(f())};return(o,r)=>{const h=x;return i(),a(S,null,[t("div",k,[t("div",{class:"album-cover-image squared overflow-hidden",style:q({backgroundImage:`url(${e.image})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}),onMouseenter:r[0]||(r[0]=s=>p(e.image2?e.image2:e.image,s)),onMouseleave:r[1]||(r[1]=s=>p(e.image,s))},[t("div",j,[m.new?(i(),a("div",C,N)):d("",!0),e.bestseller?(i(),a("div",E,P)):d("",!0)]),t("div",T,[t("button",O,[n(g(_),{class:""})]),t("button",{class:"item-button2 group-hover:animate-showUp flex h-10 w-10 bg-gray-600 hover:bg-black items-center justify-center",onClick:b},[n(g(y),{class:"text-white"})])])],36)]),t("div",R,[t("p",U,l(o.$props.title),1),t("p",null,l(e.description),1),t("p",null,l(o.$props.price)+" Z\u0141",1),n(h,{class:"mt-4",width:"small",rated:e.rated,editable:!1},null,8,["rated"])])],64)}}});export{ce as default};
