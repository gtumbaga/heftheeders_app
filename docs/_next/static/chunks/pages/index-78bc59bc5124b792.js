(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1509)}])},1509:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return H}});var t=s(5893),n=s(9008),c=s.n(n);s(5675);var l=s(7294),i=s(5005),r=s(1676),o=s(3382),d=s.n(o),h=e=>{let{onSubmit:a}=e,[s,n]=(0,l.useState)(""),[c,o]=(0,l.useState)(""),h=(0,l.useCallback)(()=>{a(s,c)});return(0,t.jsx)("div",{className:d().LoginForm,children:(0,t.jsxs)(r.Z,{children:[(0,t.jsx)("h1",{className:"mb-3",children:"Login"}),(0,t.jsxs)(r.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,t.jsx)(r.Z.Label,{children:"Email address"}),(0,t.jsx)(r.Z.Control,{type:"email",placeholder:"Enter email",value:s,onChange:e=>{n(e.target.value)}}),(0,t.jsx)(r.Z.Text,{className:"text-muted",children:"We'll always share your email with any marketers. jk."})]}),(0,t.jsxs)(r.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,t.jsx)(r.Z.Label,{children:"Password"}),(0,t.jsx)(r.Z.Control,{type:"password",placeholder:"Password",value:c,onChange:e=>{o(e.target.value)}})]}),(0,t.jsx)(i.Z,{variant:"primary",onClick:h,children:"Login"})]})})},u=s(5121),m=s(8640),x=s.n(m);function j(e){let{children:a}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("main",{className:x().Theme,children:(0,t.jsx)("div",{className:"gCard",children:a})})})}var g=s(8023),f=s(8863),p=s(2133),v=s(4309),N=s.n(v),k=()=>{let[e,a]=(0,l.useState)(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:N().Header,bg:"dark",variant:"dark",children:[(0,t.jsx)("div",{className:"topRow",children:(0,t.jsx)(i.Z,{className:"btn-primary btn-hamburger",onClick:()=>a(!0),title:"Menu",children:(0,t.jsx)(p.Z,{size:30})})}),(0,t.jsx)("div",{className:"bottomRow",children:(0,t.jsx)("div",{children:"row 2"})}),(0,t.jsxs)(f.Z,{show:e,onHide:()=>a(!1),children:[(0,t.jsx)(f.Z.Header,{closeButton:!0,children:(0,t.jsx)(f.Z.Title,{children:"Heft Heeders"})}),(0,t.jsx)(f.Z.Body,{children:(0,t.jsxs)(g.Z,{className:"mr-auto",children:[(0,t.jsx)(g.Z.Link,{href:"#features",children:"Features"}),(0,t.jsx)(g.Z.Link,{href:"#pricing",children:"Pricing"})]})})]})]})})},_=s(1273),w=s.n(_),y=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:w().Footer,children:"This is the footer"})}),b=s(1225),D=s.n(b),F=()=>(0,t.jsxs)("div",{className:D().LoadingWidget,children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}),O=s(8122),S=s.n(O);s(8464);var C=e=>{let{weekData:a,currentDay:s,onClickDay:n}=e,c=e=>{if(!e)return"";{console.log("date in bubbles",e);let a=e.split("-"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(a[1])-1];return"".concat(s," ").concat(a[2])}},i=c(Object.keys(a)[0]),r=c(Object.keys(a)[6]),o=(0,l.useCallback)(e=>{n(e-1)});return(0,t.jsxs)("div",{className:S().Bubbles,children:[(0,t.jsxs)("div",{className:"weekOf mb-2",children:["Week of: ",i," - ",r]}),(0,t.jsxs)("div",{className:"dayGrid chosen-".concat(s),children:[(0,t.jsx)("div",{className:"day day-1",onClick:()=>o(1),children:(0,t.jsx)("div",{className:"circle",children:(0,t.jsx)("i",{children:"M"})})}),(0,t.jsx)("div",{className:"day day-2",onClick:()=>o(2),children:(0,t.jsx)("div",{className:"circle",children:(0,t.jsxs)("i",{children:["T",(0,t.jsx)("span",{className:"small",children:"u"})]})})}),(0,t.jsx)("div",{className:"day day-3",onClick:()=>o(3),children:(0,t.jsx)("div",{className:"circle",children:(0,t.jsx)("i",{children:"W"})})}),(0,t.jsx)("div",{className:"day day-4",onClick:()=>o(4),children:(0,t.jsx)("div",{className:"circle",children:(0,t.jsxs)("i",{children:["T",(0,t.jsx)("span",{className:"small",children:"h"})]})})}),(0,t.jsx)("div",{className:"day day-5",onClick:()=>o(5),children:(0,t.jsx)("div",{className:"circle",children:(0,t.jsx)("i",{children:"F"})})}),(0,t.jsx)("div",{className:"day day-6",onClick:()=>o(6),children:(0,t.jsx)("div",{className:"circle",children:(0,t.jsxs)("i",{children:["S",(0,t.jsx)("span",{className:"small",children:"a"})]})})}),(0,t.jsx)("div",{className:"day day-7",onClick:()=>o(7),children:(0,t.jsx)("div",{className:"circle",children:(0,t.jsxs)("i",{children:["S",(0,t.jsx)("span",{className:"small",children:"u"})]})})})]})]})},Z=s(3538),T=s.n(Z),E=()=>(0,t.jsx)("div",{className:T().Stats,children:"stats"}),L=s(8836),I=s.n(L),B=()=>(0,t.jsx)("div",{className:I().DayBreakout,children:"Day Breakout"}),M=()=>{let[e,a]=(0,l.useState)(!0),[s,n]=(0,l.useState)(!1),[c,i]=(0,l.useState)(null),[r,o]=(0,l.useState)(null),[d,m]=(0,l.useState)({}),[x,g]=(0,l.useState)(null),[f,p]=(0,l.useState)(null);(0,l.useEffect)(()=>{let e=localStorage.getItem("token");e?(i(e),a(!0),u.Z.get("".concat("https://hh-api.omga.be","/api/user"),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>{e&&e.data.id&&console.log("auth verification response",e.data),n(!0),a(!1)})):a(!1)},[]),(0,l.useEffect)(()=>{if(!0===s&&c){a(!0);let e=new Date;console.log("current date, unmodified",e.valueOf());let s=new Date;s.setTime(parseInt(e.valueOf())+-864e6),console.log("current date, setdate",s);let t=e.getDay(),n=0;n=t<1?-6:-((t-1)*1);let l=new Date(new Date().setTime(parseInt(e.valueOf())+864e5*n)),i=new Date(new Date().setTime(parseInt(l.valueOf())+864e5)),r=new Date(new Date().setTime(parseInt(l.valueOf())+1728e5)),d=new Date(new Date().setTime(parseInt(l.valueOf())+2592e5)),h=new Date(new Date().setTime(parseInt(l.valueOf())+3456e5)),x=new Date(new Date().setTime(parseInt(l.valueOf())+432e6)),j=new Date(new Date().setTime(parseInt(l.valueOf())+5184e5)),f=["".concat(l.getFullYear(),"-").concat(l.getMonth()+1,"-").concat(l.getDate()),"".concat(i.getFullYear(),"-").concat(i.getMonth()+1,"-").concat(i.getDate()),"".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate()),"".concat(d.getFullYear(),"-").concat(d.getMonth()+1,"-").concat(d.getDate()),"".concat(h.getFullYear(),"-").concat(h.getMonth()+1,"-").concat(h.getDate()),"".concat(x.getFullYear(),"-").concat(x.getMonth()+1,"-").concat(x.getDate()),"".concat(j.getFullYear(),"-").concat(j.getMonth()+1,"-").concat(j.getDate())],v="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate());p(f.indexOf(v)),g(v),o([...f]);let N={};f.forEach(e=>{N[e]={items_breakfast:[],items_lunch:[],items_dinner:[],items_snacks:[],items_activity:[]}}),console.log("date data:",f),console.log("day of week:",t),console.log("dayadjust",n);let k="".concat("https://hh-api.omga.be","/api/week/").concat(f[0]);u.Z.get(k,{headers:{Authorization:"Bearer ".concat(c)}}).then(e=>{e&&!0==e.data.success&&console.log("got week data",e.data),e.data.days.forEach(e=>{console.log("iteration of dayData",e),N[e.this_day]={items_breakfast:JSON.parse(e.items_breakfast),items_lunch:JSON.parse(e.items_lunch),items_dinner:JSON.parse(e.items_dinner),items_snacks:JSON.parse(e.items_snacks),items_activity:JSON.parse(e.items_activity)}}),console.log("tmpWeekData",N),m({...N}),a(!1)})}},[s]),(0,l.useEffect)(()=>{d&&console.log("week data has beenset",d)},[d]);let v=(0,l.useCallback)(async(e,a)=>{let s="".concat("https://hh-api.omga.be","/api/login"),t={email:e,password:a};console.log("axios gonna use payload:",s,t);let c=await u.Z.post(s,t);c&&!0==c.data.success?(console.log("successful response is:",c),localStorage.setItem("token",c.data.data.token),n(!0)):console.log("response is:",c)}),N=(0,l.useCallback)(e=>{p(e)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k,{}),(0,t.jsxs)(j,{children:[e&&(0,t.jsx)(F,{}),!e&&!s&&(0,t.jsx)(h,{onSubmit:v}),!e&&s&&d&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{weekData:d,currentDay:f,onClickDay:N}),(0,t.jsx)(E,{}),(0,t.jsx)(B,{})]})]}),(0,t.jsx)(y,{})]})};function H(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c(),{children:[(0,t.jsx)("title",{children:"Heft Heeders"}),(0,t.jsx)("meta",{name:"description",content:"For those of us that shall heed our heft"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(M,{})]})}},8122:function(e){e.exports={Bubbles:"Bubbles_Bubbles__rwGmH"}},8836:function(){},3382:function(e){e.exports={LoginForm:"LoginForm_LoginForm__OPDEh"}},3538:function(){},1225:function(e){e.exports={LoadingWidget:"LoadingWidget_LoadingWidget__6mmGx"}},1273:function(e){e.exports={Footer:"footer_Footer__XVHgF"}},4309:function(e){e.exports={Header:"header_Header__vQ4cs"}},8640:function(e){e.exports={Theme:"theme_Theme__NWi7x"}}},function(e){e.O(0,[606,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);