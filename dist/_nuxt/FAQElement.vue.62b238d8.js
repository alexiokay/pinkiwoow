import{f as l,x as p,o as r,E as n,O as c,W as i,ag as u,u as s,a5 as f}from"./entry.2673ef6e.js";const d={class:"objective flex flex-col space-y-4 justify-center w-full h-auto"},m={key:0,class:"text-lg text-[#343434]"},v=l({__name:"FAQElement",props:{title:{type:String,required:!0},description:{type:String,required:!0},isOpen:{type:Boolean,required:!1}},setup(a){const t=a;let e=p(!1);return t.isOpen&&(e.value=t.isOpen),(x,o)=>(r(),n("div",d,[c("p",{class:"text-[#1e1e1e] text-2xl hover:cursor-pointer font-semibold",onClick:o[0]||(o[0]=_=>u(e)?e.value=!s(e):e=!s(e))},i(t.title),1),s(e)?(r(),n("p",m,i(t.description),1)):f("",!0)]))}});export{v as _};