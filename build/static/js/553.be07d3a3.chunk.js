"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[553],{75506:function(e,r,n){n.d(r,{_:function(){return l}});var t=n(74165),i=n(15861),a=n(56573),s=n(65470),c=n.n(s),o=n(77287),u=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});u.interceptors.request.use(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.headers.Authorization="Bearer ".concat((0,o.hP)()),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),u.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var h=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,o.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var n=e.data.access;r.response.config.headers.Authorization="Bearer "+n,localStorage.setItem("auth",JSON.stringify({access:n,refresh:(0,o.YV)(),user:(0,o.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();function l(e){return u.get(e).then((function(e){return e.data}))}c()(u,h),r.Z=u},8553:function(e,r,n){n.r(r);var t=n(9478),i=n(9019),a=n(61113),s=n(42832),c=n(58467),o=n(1010),u=n(75506),h=n(19536),l=n(66212),d=n(46417);r.default=function(){var e=(0,c.UO)().patientId,r=(0,o.ZP)("/patient/".concat(e,"/"),u._),n=r.data,p=r.error;return r.isLoading?(0,d.jsx)("div",{children:"Loading..."}):p?(0,d.jsx)("div",{children:"Error on Treatment"}):(0,d.jsx)(t.Z,{title:"Patients Detail",children:(0,d.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,d.jsx)(a.Z,{variant:"h1",align:"center",children:"BVS-NEPAL"})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,d.jsx)(a.Z,{variant:"h3",align:"center",children:n.registration_location})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,md:5,children:(0,d.jsxs)(s.Z,{direction:"row",spacing:2,children:[(0,d.jsx)(a.Z,{variant:"h5",color:"primary",children:"Patient Name:"}),(0,d.jsxs)(a.Z,{variant:"h6",children:[n.fname," ",n.mname," ",n.lname]})]})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,md:3}),(0,d.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,d.jsxs)(s.Z,{direction:"row",spacing:2,children:[(0,d.jsx)(a.Z,{variant:"h5",align:"right",color:"primary",children:"Registration No:"}),(0,d.jsx)(a.Z,{variant:"h6",align:"right",children:n.registration_number})]})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,d.jsx)(h.Z,{children:(0,d.jsx)(l.Z,{label:"TREATMENT",color:"primary"})})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,md:12})]})})}}}]);