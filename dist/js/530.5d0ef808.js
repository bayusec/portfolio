"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[530],{9530:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var a=i(3396),l=i(7139),A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdQAAAHUB48IHZQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH6SURBVFiFvde9a1RBFAXw3zVqwCZIEAxKBBEVRbDxA/wEK0FIYSWChf+EtbUWYqGFhQRsDEjKFFYiamEkKNioWCVYSECx8Au9FrtF3LzdnZ0NOTA8OO/NOYc3M/e+F5mpBBEROI/D2If92ItfeI937etrzGWpcGb2HTiJl8jCMY/TRdp9jLdhZgDjzjGLHVUBsBnPhjBf+TZGawLc7yO8iMd41F73Hz2evTdQAEz1EFvAuYY5E5juMe/yIAFmu4h8wJY+++Z2l7lzRQEwrnW0OgX+4lTBidmEzw3zv2BD5/MbrMZkW6QTNzPzaQP/HzLzN5433BrDwU5yY4PAQkRcwHHs0noj87jez3wFJrrw451ElBasUkTEHq2K2ISdmbm0kmhagmHMR3Gjy+03neYoK8WF5Xornuh+DK8MXIoHMJ/E2x7md7SXe80DaO3spRrzoQPgKJZrzYcKgN34Oox5dQCMaBWbbuZ3S8yHCXCmh/l0qXlmcykuwYku/CyuZjtlCdYywCIuZeafQYRqAxxr4F5k5s9BhWoDvGrgHtQIVTWjdsO5hiP4joeZeWvdAqwlqrthRIxExPaIGFv3ABExhY/4hOWImImIVR83RagsRE2d72KNVu0SHGjgDtUIrekX0XoGWGjg5quUKvfAWa1ilPim9TNS3IBWjn96AJGZBgdGYgAAAABJRU5ErkJggg==";const s={class:"mx-auto w-2/3 h-4/5 mt-[10%]"},o={class:"flex flex-col"},r={class:"flex flex-col bg-black/20 my-10 text-white rounded-lg pb-10"},d=(0,a._)("div",{class:"self-end"},[(0,a._)("a",{title:"Explicación",href:"https://es.wikipedia.org/wiki/Cifrado_de_Trithemius",target:"_blank"},[(0,a._)("img",{alt:"Explicación",class:"m-3 mx-3 rounded-lg bg-white/20 p-1",width:"25",height:"25",src:A})])],-1),n={class:"self-center mt-1"};function c(t,e,i,A,c,m){const h=(0,a.up)("GitsAnimation2");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",o,[(0,a._)("div",r,[d,(0,a._)("div",n,[(0,a.Uk)(" Email cifrado: "+(0,l.zw)(c.codificado)+" ",1),c.status?((0,a.wg)(),(0,a.j4)(h,{key:0,class:"pt-10 text-2xl"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Email descifrado: "+(0,l.zw)(c.email),1)])),_:1})):(0,a.kq)("",!0)])]),(0,a._)("button",{class:"border-2 text-4xl rounded-lg text-white",onClick:e[0]||(e[0]=(...t)=>m.showEmail&&m.showEmail(...t))},"Descifrar")])])}var m=i(6812),h={name:"ContactView",components:{GitsAnimation2:m.Z},data(){return{status:!1,email:"",codificado:"ECCQCZ@MTIRV.NAZ"}},methods:{showEmail(){this.email=this.decodeEmail("ECCQCZ@MTIRV.NAZ"),this.status=!0},decodeEmail(t){const e=Array(26).fill(0),i=e.map(((t,e)=>String.fromCharCode(e+65))),a=t.split("");let l=0,A=0;const s=i.length,o=a.map(((t,e)=>{if(0==t.trim().length)return A+=1," ";let a=i.findIndex((e=>e==t));return-1==a?(A+=1,t):(l=a-e+A,l<0&&(l=s- -1*l),l>s&&(l-=s),i[l]?i[l]:void 0)}));return o.join("").toLowerCase()}}},u=i(89);const w=(0,u.Z)(h,[["render",c]]);var g=w}}]);
//# sourceMappingURL=530.5d0ef808.js.map