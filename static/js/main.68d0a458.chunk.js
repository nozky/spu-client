(this["webpackJsonpsolar-power-philippines"]=this["webpackJsonpsolar-power-philippines"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(19),s=n.n(a),i=(n(38),n(8)),l=n(5),o=n(3),u=n(59),j=n(62),d=n(60),b=n(61),p=(n(24),n(39),n.p+"static/media/solarActive.1978514e.png"),h=n.p+"static/media/solarInactive.96e48d21.png",O=n(9),m=n(1),x=new O.Icon({iconUrl:p,shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),f=new O.Icon({iconUrl:h,shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),v=function(e){var t=e.spu,n=Object(r.useState)([12.8797,121.774]),c=Object(o.a)(n,2),a=c[0];c[1];return Array.isArray(t)?Object(m.jsxs)(u.a,{style:{width:"100%",height:"100%"},zoom:6,center:a,scrollWheelZoom:!0,children:[Object(m.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){var t=[e.position.lat,e.position.lng];return!0===e.deleted?null:Object(m.jsx)(d.a,{position:t,icon:e.active?x:f,children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:e.details.name}),"  ",Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:"System power:"})," ",e.details.power<1?e.details.power.toFixed(3):e.details.power.toFixed(0)," kw ",Object(m.jsx)("br",{}),e.details.info," ",Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:"Contact:"})," ",Object(m.jsx)("a",{href:"mailto: ".concat(e.email),children:e.email})," ",Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:"Active:"})," ",e.active?"Yes":"No"]})},e._id)}))]}):Object(m.jsx)("div",{style:{textAlign:"center",padding:"3em"},children:Object(m.jsx)("h2",{children:" Something is went wrong!"})})},g=(n(41),n(29)),w=(n(42),function(e){var t=e.userCount;return Object(m.jsxs)("div",{className:"user-count",children:[Object(m.jsx)(g.a,{})," ",t]})}),y=function(e){var t=e.userCount;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(w,{userCount:t}),Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{style:{color:"yellow"},children:"S"}),Object(m.jsx)("span",{style:{color:"red"},children:"P"}),"P"]}),Object(m.jsxs)("p",{children:[" ",Object(m.jsx)("span",{children:"Solar"})," Power Philippines"]})]})},S=(n(43),function(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("p",{children:"Solar Power Philippines License: MIT 2021 Version: 1.0"})})}),N=(n(44),n(45),function(e){var t=e.className,n=e.handle,r=e.icon,c=e.title;return Object(m.jsxs)("div",{className:t,onClick:n,children:[Object(m.jsx)("p",{style:{fontSize:"12px",textAlign:"center"},children:c}),Object(m.jsx)("div",{className:"icon",onClick:n,children:r})]})}),P=n(31),k=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){e.current&&(e.current.querySelector(".navCloseBtn").addEventListener("click",(function(){e.current.classList.remove("show")})),e.current.addEventListener("click",(function(){e.current.classList.remove("show")})))})),Object(m.jsxs)("div",{className:"nav",ref:e,children:[Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/",children:"Map"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/login",children:"Profile"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/signup",children:"Sign Up"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/about",children:"About"})})]}),Object(m.jsx)(N,{className:"navCloseBtn",icon:Object(m.jsx)(P.a,{})})]})},C=n(6),A=n.n(C),F=n(10),z=function(){var e=Object(F.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://spu-server.herokuapp.com/",{headers:{"Content-type":"application/json",Authorization:"spupnozky11171981?"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),U=(n(52),function(){return Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)("h2",{children:"Loading..."})})}),q=(n(53),n(32)),D=function(){var e=Object(r.useRef)(),t=Object(r.useState)(!0),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){e.current&&e.current.querySelector(".menu").addEventListener("click",(function(){return e.current.querySelector(".nav").classList.add("show")}))})),Object(r.useEffect)((function(){z().then((function(e){return u(e)})),a(!1)}),[]),Object(r.useEffect)((function(){0===l.length?a(!0):a(!1)}),[l]),!0===c?Object(m.jsx)(U,{}):Object(m.jsxs)("div",{className:"app",ref:e,children:[Object(m.jsx)(y,{userCount:l.length}),Object(m.jsx)("main",{children:Object(m.jsx)(v,{spu:l})}),Object(m.jsx)(k,{}),Object(m.jsx)(N,{title:"Menu",className:"menu",icon:Object(m.jsx)(q.a,{})}),Object(m.jsx)(S,{})]})},M=(n(54),function(){return Object(m.jsxs)("section",{className:"about",children:[Object(m.jsxs)("div",{className:"about-head",children:[Object(m.jsx)("h2",{children:"SPP"}),Object(m.jsx)("p",{children:"Solar Power Philippines"})]}),Object(m.jsxs)("div",{className:"about-text space",children:[Object(m.jsx)("p",{children:"Solar Power Philippine is made so we can have a visual representation of how many people already using solar power."}),Object(m.jsx)("p",{children:"This is not limited to any group, it is for everyone consumption."})]}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Maintained by: A member of Solar Power Philippines"})}),Object(m.jsxs)("div",{className:"btn",children:[Object(m.jsx)("p",{children:"Please email of any concern"}),Object(m.jsx)("a",{href:"mailto:spup2021@gmail.com?subject=Mail from Our Site",children:"Send mail"})]}),Object(m.jsxs)("div",{className:"space",children:[Object(m.jsx)("p",{children:"Security notice: Please do not put your actual email password, instead create a new one."}),Object(m.jsx)("p",{children:"All Password is being hash or encrpted, even me as a developer will not be able to access your information."})]}),Object(m.jsx)("div",{className:"btn",children:Object(m.jsx)(i.b,{to:"/",children:"Map"})}),Object(m.jsx)("footer",{children:Object(m.jsx)("p",{children:"Solar Power Philippines license: MIT 2021"})})]})}),E=n(4),I=(n(55),function(){var e=Object(F.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"register",{method:"POST",headers:{"Content-type":"application/json",Authorization:"spupnozky11171981?"},body:JSON.stringify(n)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),L=function(){var e=Object(F.a)(A.a.mark((function e(t){var n,r,c,a,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://nominatim.openstreetmap.org/?addressdetails=1&q=".concat(t,"&format=json&limit=1"),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,a=parseFloat(c[0].lat),s=parseFloat(c[0].lon),e.abrupt("return",{lat:a,lng:s});case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),alert("Cannot find address");case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),T=n(20),B=new O.Icon({iconUrl:p,shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),V=function(){var e=Object(r.useState)({lat:12.8797,lng:121.774}),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(10),s=Object(o.a)(a,2),l=s[0],p=s[1],h=Object(r.useState)(null),O=Object(o.a)(h,2),x=O[0],f=O[1],v=Object(r.useState)(null),g=Object(o.a)(v,2),w=g[0],y=g[1];Object(r.useEffect)((function(){try{navigator.geolocation.getCurrentPosition((function(e,t){if(t)return null;p(8),c((function(t){return{lat:e.coords.latitude,lng:e.coords.longitude}}))}))}catch(e){console.log(e)}}),[]),Object(r.useEffect)((function(){try{if(null===x)return null;x.flyTo({lat:n.lat,lng:n.lng},x.getZoom(),[n])}catch(e){console.log(e)}}),[n,x]);return Object(m.jsxs)("div",{className:"signup",children:[Object(m.jsxs)("div",{className:"signup-head",children:[Object(m.jsx)("h2",{children:"Sign Up"}),Object(m.jsx)("p",{children:"Solar Power Philippines"})]}),Object(m.jsxs)("div",{className:"map-wrapper",children:[Object(m.jsxs)("div",{className:"searchPlace",children:[Object(m.jsx)("input",{type:"text",name:"searchPlace",id:"searchPlace",className:"searchPlace",onChange:function(e){return y((function(t){return e.target.value}))},placeholder:"Search: Street City Province Country"}),Object(m.jsx)("i",{onClick:function(){return function(e){L(e).then((function(e){e&&c((function(t){return e}))}))}(w)},children:Object(m.jsx)(T.a,{})})]}),Object(m.jsx)("div",{className:"form-map",children:Object(m.jsxs)(u.a,{style:{width:"100%",height:"100%"},zoom:l,center:[n.lat,n.lng],scrollWheelZoom:!0,whenCreated:function(e){return f(e)},children:[Object(m.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(m.jsx)(d.a,{position:[n.lat,n.lng],icon:B,children:Object(m.jsx)(b.a,{children:"Your Selected Location here!"})})]})}),Object(m.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=e.currentTarget,n=t.username,r=t.email,c=t.password,a=t.rpassword,s=t.name,i=t.power,l=t.info,o=t.lat,u=t.lng;if(c.value!==a.value)return alert("password does not match!"),null;console.log("Build data...");var j={username:n.value,email:r.value,passcode:c.value,details:{name:s.value,power:i.value,info:l.value},position:{lat:o.value,lng:u.value},active:!0,deleted:!1,registeredDate:new Date};console.log("submitting data"),I("https://spu-server.herokuapp.com/",j).then((function(e){return e.json()})).then((function(e){"success"!==e.name?(console.log(e.name),alert("Entry - ".concat(JSON.stringify(e.keyValue)," alreay exist!"))):(console.log(e.name),alert("Thank you for singing up. Go Solar PHilippines Users!"))}))}(e)},className:"form-info",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username"}),Object(m.jsx)("input",{type:"text",name:"username",id:"username",required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",required:!0,placeholder:"Do not use your email password"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"rpassword",children:"Repeat Password"}),Object(m.jsx)("input",{type:"password",name:"rpassword",id:"rpassword",required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",id:"name",required:!0,placeholder:" (Any System Name )"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"power",children:"Power(kw)"}),Object(m.jsx)("input",{type:"number",step:"any",name:"power",id:"power",required:!0,placeholder:" (Number: 0.000 ex: 0.500 for watts)"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"info",children:"More Information"}),Object(m.jsx)("textarea",{name:"info",id:"info",cols:"40",rows:"8",placeholder:"(Optional)"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lat",children:"Latitude"}),Object(m.jsx)("input",{type:"number",step:"any",name:"lat",id:"lat",value:n.lat,onChange:function(e){return c((function(t){return Object(E.a)(Object(E.a)({},t),{},{lat:e.target.value})}))},required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lng",children:"Longitude"}),Object(m.jsx)("input",{type:"number",step:"any",name:"lng",id:"lng",value:n.lng,onChange:function(e){return c((function(t){return Object(E.a)(Object(E.a)({},t),{},{lng:e.target.value})}))},required:!0})]}),Object(m.jsxs)("div",{className:"submit-btn",children:[Object(m.jsx)("button",{type:"submit",children:"Submit"}),Object(m.jsx)("button",{type:"reset",children:"Clear"})]})]}),Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("p",{className:"back",children:Object(m.jsx)(i.b,{to:"/",children:"Back to Map"})})})]})]})},W=(n(56),function(){var e=Object(F.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://spu-server.herokuapp.com/login",{method:"POST",headers:{"Content-type":"application/json",Authorization:"spupnozky11171981?"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({}),s=Object(o.a)(a,2),u=s[0],j=s[1],d=Object(r.useState)({}),b=Object(o.a)(d,2),p=b[0],h=b[1],O=function(){var e=Object(F.a)(A.a.mark((function e(t){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,W(p);case 3:if(!(n=e.sent).ok){e.next=12;break}return e.next=7,n.json();case 7:r=e.sent,j(r),c(!0),e.next=13;break;case 12:alert("Invalid information! Please check and try again.");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(m.jsx)(l.a,{to:{pathname:"/profile",state:n,userDetails:u,userInfo:p}}):Object(m.jsxs)("div",{className:"login",children:[Object(m.jsxs)("div",{className:"login-head",children:[Object(m.jsx)("h1",{children:"SPP"}),Object(m.jsx)("p",{children:"Solar Power Philippines"})]}),Object(m.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"username",children:"User Name"}),Object(m.jsx)("input",{type:"text",id:"username",name:"username",placeholder:"User Name (case sensitive)",onChange:function(e){return h((function(t){return Object(E.a)(Object(E.a)({},t),{},{username:e.target.value})}))}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password (case sensitive)",onChange:function(e){return h((function(t){return Object(E.a)(Object(E.a)({},t),{},{password:e.target.value})}))}})]}),Object(m.jsx)("div",{className:"login-buttons",children:Object(m.jsx)("button",{className:"btn",children:"Log In"})})]}),Object(m.jsx)("div",{className:"home",children:Object(m.jsx)(i.b,{to:"/",children:"Back to Map"})}),Object(m.jsxs)("div",{className:"login-signup",children:[Object(m.jsx)("p",{children:"No Account yet? "}),Object(m.jsx)("p",{children:"Sign Up! It's free!"}),Object(m.jsx)(i.b,{to:"/signup",children:"Sign Up Now!"})]})]})},Z=n(15),R=(n(57),function(){var e=Object(F.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"update",{method:"PUT",headers:{"Content-type":"application/json",Authorization:"spupnozky11171981?"},body:JSON.stringify(n)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Y=function(){var e=Object(F.a)(A.a.mark((function e(t){var n,r,c,a,s,i,l,o,u,j,d,b,p;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.currentTarget,r=n.username,c=n.email,a=n.password,s=n.rpassword,i=n.name,l=n.power,o=n.info,u=n.lat,j=n.lng,d=n.isActive,b=n.isDeleted,a.value===s.value){e.next=5;break}return alert("password does not match!"),e.abrupt("return",null);case 5:return p={username:r.value,email:c.value,passcode:a.value,details:{name:i.value,power:l.value,info:o.value},position:{lat:u.value,lng:j.value},active:d.value,deleted:b.value,registeredDate:new Date},e.next=8,R("https://spu-server.herokuapp.com/",p);case 8:e.sent.ok&&alert("Update successful!");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=e.location,n=(Object(Z.a)(e,["location"]),t.userDetails),c=n.username,a=n.email,s=n.details,l=n.position,h=n.active,x=n.deleted,f=Object(r.useState)({lat:l.lat,lng:l.lng}),v=Object(o.a)(f,2),g=v[0],w=v[1],y=Object(r.useState)(8),S=Object(o.a)(y,2),N=S[0],P=S[1],k=Object(r.useState)(null),C=Object(o.a)(k,2),A=C[0],F=C[1],z=Object(r.useState)(null),U=Object(o.a)(z,2),q=U[0],D=U[1],M=Object(r.useState)(h),I=Object(o.a)(M,2),B=I[0],V=I[1],W=Object(r.useState)(x),J=Object(o.a)(W,2),R=J[0],G=J[1],H=Object(r.useState)(""),_=Object(o.a)(H,2),K=_[0],Q=_[1],X=new O.Icon({iconUrl:p,shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});Object(r.useEffect)((function(){try{if(null===A)return null;P(8),A.flyTo({lat:g.lat,lng:g.lng},A.getZoom(),[g])}catch(e){console.log(e)}}),[g,A]),Object(r.useEffect)((function(){Q(R?"This account will be deleted after a few days and you can no longer recover.":"")}),[R]);return Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsxs)("div",{className:"profile-head",children:[Object(m.jsx)("h2",{children:"Update Profile"}),Object(m.jsx)("p",{children:"Solar Power Philippines"})]}),Object(m.jsxs)("div",{className:"map-wrapper",children:[Object(m.jsxs)("div",{className:"searchPlace",children:[Object(m.jsx)("input",{type:"text",name:"searchPlace",id:"searchPlace",className:"searchPlace",onChange:function(e){return D((function(t){return e.target.value}))},placeholder:"Search: Street City Province Country"}),Object(m.jsx)("i",{onClick:function(){return function(e){L(e).then((function(e){e&&w((function(t){return e}))}))}(q)},children:Object(m.jsx)(T.a,{})})]}),Object(m.jsx)("div",{className:"form-map",children:Object(m.jsxs)(u.a,{style:{width:"100%",height:"100%"},zoom:N,center:[g.lat,g.lng],scrollWheelZoom:!0,whenCreated:function(e){return F(e)},children:[Object(m.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(m.jsx)(d.a,{position:[g.lat,g.lng],icon:X,children:Object(m.jsx)(b.a,{children:"Your Selected Location here!"})})]})}),Object(m.jsxs)("form",{onSubmit:function(e){return Y(e)},className:"form-info",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username"}),Object(m.jsx)("input",{type:"text",name:"username",id:"username",value:c,readOnly:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",defaultValue:a,required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",defaultValue:t.userInfo.password})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"rpassword",children:"Repeat Password"}),Object(m.jsx)("input",{type:"password",name:"rpassword",id:"rpassword",required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",id:"name",defaultValue:s.name,required:!0,placeholder:" (System name)"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"power",children:"Power(kw)"}),Object(m.jsx)("input",{type:"number",step:"any",name:"power",id:"power",defaultValue:s.power,required:!0,placeholder:" (Number: 0.000)"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"info",children:"More Information"}),Object(m.jsx)("textarea",{name:"info",id:"info",cols:"40",rows:"8",defaultValue:s.info,placeholder:"(Optional)"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lat",children:"Latitude"}),Object(m.jsx)("input",{type:"number",step:"any",name:"lat",id:"lat",value:g.lat,onChange:function(e){return w((function(t){return Object(E.a)(Object(E.a)({},t),{},{lat:e.target.value})}))},required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"lng",children:"Longitude"}),Object(m.jsx)("input",{type:"number",step:"any",name:"lng",id:"lng",value:g.lng,onChange:function(e){return w((function(t){return Object(E.a)(Object(E.a)({},t),{},{lat:e.target.value})}))},required:!0})]}),Object(m.jsx)("div",{className:"delete-message",style:{color:"red"},children:K}),Object(m.jsxs)("div",{className:"submit-btn",children:[Object(m.jsx)("button",{id:"submit",name:"submit",type:"submit",children:"Update"}),Object(m.jsx)("button",{id:"isActive",name:"isActive",type:"button",value:B,onClick:function(){return V(!B)},children:B?"Deactivate":"Activate"}),Object(m.jsx)("button",{id:"isDeleted",name:"isDeleted",type:"button",value:R,style:{color:"red"},onClick:function(){return G(!R)},children:R?"Undo Del":"Delete"})]})]}),Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)(i.b,{to:"/",children:"Back to Map"})})]})]})},H=function(e){var t=e.component,n=Object(Z.a)(e,["component"]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.b,Object(E.a)(Object(E.a)({},n),{},{render:function(e){return Object(E.a)({},n).location.state?Object(m.jsx)(t,Object(E.a)({},e)):Object(m.jsx)(l.a,{to:"/login"})}}))})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/signup",component:V}),Object(m.jsx)(l.b,{path:"/login",component:J}),Object(m.jsx)(l.b,{path:"/about",component:M}),Object(m.jsx)(H,{path:"/profile",component:G}),Object(m.jsx)(l.b,{path:"/",component:D})]})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.68d0a458.chunk.js.map