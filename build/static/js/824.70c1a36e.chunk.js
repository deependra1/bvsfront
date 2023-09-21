"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[824],{75506:function(e,n,t){t.d(n,{_:function(){return u}});var i=t(74165),r=t(15861),a=t(56573),o=t(65470),s=t.n(o),d=t(77287),c=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers.Authorization="Bearer ".concat((0,d.hP)()),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),c.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,d.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var t=e.data.access;n.response.config.headers.Authorization="Bearer "+t,localStorage.setItem("auth",JSON.stringify({access:t,refresh:(0,d.YV)(),user:(0,d.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function u(e){return c.get(e).then((function(e){return e.data}))}s()(c,l),n.Z=c},99824:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var i=t(9478),r=t(9019),a=t(42832),o=t(61113),s=t(58467),d=t(1010),c=t(75506),l=t(19536),u=t(66212),h=t(29439),m=t(1413),f=t(45987),v=t(47313),g=t(23306),p=t(49914),x=t(15480),Z=t(16529),j=t(51405),_=t(69099),b=t(17592),w=t(94469),P=t(33604),S=t(96467),C=t(4117),y=t(47131),D=t(11198),F=t(65954),k=t(51997),R=t(6316),z=t(90842),M=t(7410),N=t(3463),A=t(46417),B=["children","onClose"],O=(0,b.ZP)(w.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function E(e){var n=e.children,t=e.onClose,i=(0,f.Z)(e,B);return(0,A.jsxs)(P.Z,(0,m.Z)((0,m.Z)({sx:{m:0,p:2}},i),{},{children:[n,t?(0,A.jsx)(y.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,A.jsx)(D.Z,{})}):null]}))}function L(){var e=v.useState(!1),n=(0,h.Z)(e,2),t=n[0],i=n[1],l=(0,s.UO)().patientId,u=(0,z.Ds)().enqueueSnackbar,m=v.useState(l),f=(0,h.Z)(m,2),b=f[0],w=f[1],P=v.useState({}),D=(0,h.Z)(P,2),B=D[0],L=D[1],V=v.useState(""),I=(0,h.Z)(V,2),U=I[0],T=I[1];v.useEffect((function(){w(l)}),[l]);var q=(0,d.ZP)("/patient/".concat(b,"/funding/"),c._,{revalidateOnMount:!0}),W=q.data,H=q.error,J=q.isLoading,Y=q.mutate,G=(0,d.ZP)("/donor/",c._,{revalidateOnMount:!0}).data,K=[{field:"service_title",headerName:"Provided Services",width:150,editable:!0},{field:"donorName",headerName:"Donor",width:100,editable:!0,valueGetter:function(e){return"".concat(e.row.donor.donor_name||"")}},{field:"funding_amount",headerName:"Funding Amount",width:150,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(y.Z,{onClick:function(){return X(e)},sx:{color:"#9c27b0"},children:(0,A.jsx)(F.Z,{})}),(0,A.jsx)(y.Z,{onClick:function(){return $(e.id)},sx:{color:"#f44336"},children:(0,A.jsx)(k.Z,{})})]})}}],Q=function(){L({}),T(""),i(!1)},X=function(e){L(e.row),T(e.row.donor.id),i(!0)},$=function(e){confirm("Are you sure to delete funding data?")&&c.Z.delete("/patient/".concat(l,"/funding/").concat(e,"/")).then((function(){u("Funding Deleted successfully!!!",{variant:"success"}),Y()})).catch((function(){u("something wents wrong!!!",{variant:"error"})}))};return J?(0,A.jsx)("div",{children:"Loading..."}):H?(0,A.jsx)("div",{children:"Error on Treatment"}):(0,A.jsxs)("div",{children:[(0,A.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,A.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,A.jsx)(o.Z,{variant:"h3",gutterBottom:!0,children:"Donor Detail"})}),(0,A.jsx)(r.ZP,{item:!0,xs:12,md:6}),(0,A.jsx)(r.ZP,{item:!0,xs:12,md:2,children:(0,A.jsx)(_.Z,{variant:"outlined",onClick:function(){i(!0)},children:"Add Donor"})})]}),(0,A.jsx)(R._,{rows:W,columns:K,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,A.jsxs)(O,{onClose:Q,"aria-labelledby":"customized-dialog-title",open:t,children:[(0,A.jsx)(E,{id:"customized-dialog-title",onClose:Q,children:B.id?"Update Funding Data":"Add Funding Data"}),(0,A.jsx)(M.J9,{enableReinitialize:!0,initialValues:{patient:l,donor:U||"",funding_amount:(null===B||void 0===B?void 0:B.funding_amount)||"",service_title:(null===B||void 0===B?void 0:B.service_title)||""},validationSchema:N.Ry().shape({funding_amount:N.Rx().required("Required valid amount")}),onSubmit:function(e,n){var t=n.setErrors,r=n.setStatus,a=n.setSubmitting;B.id?c.Z.put("/patient/".concat(l,"/funding/").concat(B.id,"/"),e).then((function(){u("Funding data updated successfully!!!",{variant:"success"}),r({success:!1}),a(!1),Y(),L({}),T("")})).catch((function(e){u("Something went wrong while adding the patient!!!",{variant:"error"}),r({success:!1}),t({submit:e.message}),a(!1)})):c.Z.post("/patient/".concat(l,"/funding/"),e).then((function(){u("Funding added successfully!!!",{variant:"success"}),r({success:!1}),a(!1),Y()})).catch((function(e){u("Something went wrong while adding the funding data!!!",{variant:"error"}),r({success:!1}),t({submit:e.message}),a(!1)})),i(!1)},children:function(e){var n=e.errors,t=e.handleChange,i=e.handleSubmit,o=e.isSubmitting,s=e.touched,d=e.values,c=e.handleBlur;return(0,A.jsxs)(M.l0,{noValidate:!0,children:[(0,A.jsx)(S.Z,{dividers:!0,children:(0,A.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,A.jsx)(r.ZP,{item:!0,xs:12,children:(0,A.jsxs)(a.Z,{spacing:1,children:[(0,A.jsx)(g.Z,{htmlFor:"service_title",children:"Service Provided*"}),(0,A.jsx)(p.Z,{fullWidth:!0,id:"service_title",type:"text",value:d.service_title,name:"service_title",onBlur:c,onChange:t,placeholder:"Enter provided services",error:Boolean(s.service_title&&n.service_title)}),s.service_title&&n.service_title&&(0,A.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-service_title",children:n.service_title})]})}),(0,A.jsx)(r.ZP,{item:!0,xs:12,children:(0,A.jsxs)(a.Z,{spacing:1,children:[(0,A.jsx)(g.Z,{htmlFor:"donor",children:"Funded By*"}),(0,A.jsx)(Z.Z,{fullWidth:!0,labelId:"donor",id:"donor",value:d.donor,name:"donor",onChange:t,children:G.map((function(e){return(0,A.jsx)(j.Z,{value:e.id,children:e.donor_name},e.id)}))})]})}),(0,A.jsx)(r.ZP,{item:!0,xs:12,children:(0,A.jsxs)(a.Z,{spacing:1,children:[(0,A.jsx)(g.Z,{htmlFor:"funding_amount",children:"Funding Amount*"}),(0,A.jsx)(p.Z,{fullWidth:!0,id:"funding_amount",type:"number",value:d.funding_amount,name:"funding_amount",onBlur:c,onChange:t,placeholder:"Enter funding amount",error:Boolean(s.funding_amount&&n.funding_amount)}),s.funding_amount&&n.funding_amount&&(0,A.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-funding_amount",children:n.funding_amount})]})})]})}),(0,A.jsxs)(C.Z,{children:[(0,A.jsx)(_.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:o,onClick:i,color:"primary",children:B.id?"Update":"Save"}),(0,A.jsx)(_.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:Q,children:"Cancel"})]})]})}})]})]})}var V=function(){var e=(0,s.UO)().patientId,n=(0,d.ZP)("/patient/".concat(e,"/"),c._),t=n.data,h=n.error;return n.isLoading?(0,A.jsx)("div",{children:"Loading..."}):h?(0,A.jsx)("div",{children:"Error on Treatment"}):(0,A.jsx)(i.Z,{title:"Patients Funding Detail",children:(0,A.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,A.jsx)(r.ZP,{item:!0,xs:12,md:5,children:(0,A.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,A.jsx)(o.Z,{variant:"h5",color:"primary",children:"Patient Name:"}),(0,A.jsxs)(o.Z,{variant:"h6",children:[t.fname," ",t.mname," ",t.lname]})]})}),(0,A.jsx)(r.ZP,{item:!0,xs:12,md:3}),(0,A.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,A.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,A.jsx)(o.Z,{variant:"h5",align:"right",color:"primary",children:"Registration No:"}),(0,A.jsx)(o.Z,{variant:"h6",align:"right",children:t.registration_number})]})}),(0,A.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,A.jsx)(l.Z,{children:(0,A.jsx)(u.Z,{label:"DONOR",color:"primary"})})}),(0,A.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,A.jsx)(L,{})})]})})}},11198:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),o=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=o},51997:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),o=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o},65954:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),o=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=o},33604:function(e,n,t){var i=t(1413),r=t(45987),a=t(47313),o=t(83061),s=t(21921),d=t(61113),c=t(17592),l=t(77342),u=t(93174),h=t(63909),m=t(46417),f=["className","id"],v=(0,c.ZP)(d.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),g=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiDialogTitle"}),d=t.className,c=t.id,g=(0,r.Z)(t,f),p=t,x=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},u.a,n)}(p),Z=a.useContext(h.Z).titleId,j=void 0===Z?c:Z;return(0,m.jsx)(v,(0,i.Z)({component:"h2",className:(0,o.Z)(x.root,d),ownerState:p,ref:n,variant:"h6",id:null!=c?c:j},g))}));n.Z=g}}]);