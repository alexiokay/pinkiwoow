import{I as b}from"./shopping-cart-simple-fill.32586e0b.js";import{I as h}from"./heart-fill.55fd8b6b.js";import{u,a as x}from"./Cart.aa83bce7.js";import{f as y,x as w,o as a,E as n,N as t,a5 as m,Z as d,u as g,a4 as v,W as I}from"./entry.2d4efcb3.js";const k={class:"col-1 w-2/4 h-auto flex flex-col space-y-3"},S={class:"absolute top-4 right-4 w-[6rem] h-auto space-y-3 flex flex-col items-end justify-center text-sm"},q={key:0,class:"w-[4.7rem] h-4 bg-green-600 text-white flex items-center justify-center text-sm"},_=t("p",{class:"mb-[1px]"},"NOWO\u015A\u0106",-1),j=[_],C={key:1,class:"w-[6rem] h-4 bg-blue-600 text-white flex items-center justify-center text-sm"},B=t("p",{class:"mb-[1px]"},"BESTSELLER",-1),N=[B],E={class:"group w-full h-full flex absolute bottom-0 flex-row justify-end items-end space-x-2 p-1"},P={class:"item-button1 group-hover:animate-showUp animate-hideDown flex text-gray-600 h-10 w-10 bg-transparent border-[1px] border-gray-600 items-center justify-center"},T={class:"flex justify-center items-center"},D=y({__name:"AlbumItem",props:{title:{type:String,required:!0},price:{type:Number,required:!0},img:{type:String,required:!0},img2:{type:String,required:!1},bestseller:{type:Boolean,required:!1},new:{type:Boolean,required:!1},stripePriceId:{type:String,required:!0}},setup(e){const r=e,c=(o,s)=>{s.target.style.backgroundImage=`url(${o})`};let l=w(u());l.value=u();const p=()=>({id:x.exports(),title:r.title,price:r.price,quantity:1,image:r.img,stripePriceId:r.stripePriceId}),f=()=>{l.value.addToCart(p())};return(o,s)=>(a(),n("div",k,[t("div",{class:"album-cover-image squared overflow-hidden",style:v({backgroundImage:`url(${e.img})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}),onMouseenter:s[0]||(s[0]=i=>c(e.img2?e.img2:e.img,i)),onMouseleave:s[1]||(s[1]=i=>c(e.img,i))},[t("div",S,[e.new?(a(),n("div",q,j)):m("",!0),e.bestseller?(a(),n("div",C,N)):m("",!0)]),t("div",E,[t("button",P,[d(g(h),{class:""})]),t("button",{class:"item-button2 group-hover:animate-showUp flex h-10 w-10 bg-gray-600 hover:bg-black items-center justify-center",onClick:f},[d(g(b),{class:"text-white"})])])],36),t("div",T,I(o.$props.title),1)]))}});export{D as _};
