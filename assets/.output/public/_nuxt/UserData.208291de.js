import{a as c,b as t,e as o,k as a,l as r,o as l,t as n}from"./entry.e6ba869e.js";import{_ as i}from"./_plugin-vue_export-helper.a1a6add7.js";const d={data(){return{json:{},data:{},lang:"en"}},mounted(){this.json=JSON.parse(localStorage.getItem("data")),this.lang=localStorage.getItem("lang"),this.data=this.json[this.lang]}},_={class:"h-full flex flex-col pt-52 sm:pt-24 items-center"},p={class:"space-y-8 py-10"},u={class:"flex justify-center"},h={class:"w-80 sm:w-64 py-2 px-4 text-white rounded-md bg-blue-500 hover:bg-blue-600"},m={class:"flex justify-center"},f={class:"w-80 sm:w-64 text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600"};function x(g,b,y,w,e,v){const s=r;return l(),c("div",_,[t("div",p,[t("div",u,[o(s,{to:"/CreateUser"},{default:a(()=>[t("button",h,n(e.data.createuser),1)]),_:1})]),t("div",m,[o(s,{to:"/DisplayUser"},{default:a(()=>[t("button",f,n(e.data.displayuser),1)]),_:1})])])])}const N=i(d,[["render",x]]);export{N as default};