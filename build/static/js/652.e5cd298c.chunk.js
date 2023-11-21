"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[652],{75506:function(e,n,t){t.d(n,{_:function(){return u}});var i=t(74165),r=t(15861),a=t(56573),s=t(65470),o=t.n(s),c=t(77287),l=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});l.interceptors.request.use(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers.Authorization="Bearer ".concat((0,c.hP)()),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),l.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var d=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,c.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var t=e.data.access;n.response.config.headers.Authorization="Bearer "+t,localStorage.setItem("auth",JSON.stringify({access:t,refresh:(0,c.YV)(),user:(0,c.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function u(e){return l.get(e).then((function(e){return e.data}))}o()(l,d),n.Z=l},35652:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var i=t(64611),r=t(9019),a=t(42832),s=t(61113),o=t(58467),c=t(1010),l=t(75506),d=t(19536),u=t(66212),h=t(29439),p=t(1413),Z=t(45987),x=t(47313),f=t(23306),g=t(16529),m=t(51405),v=t(49914),j=t(15480),w=t(69099),b=t(17592),P=t(94469),C=t(33604),S=t(96467),y=t(4117),q=t(47131),R=t(11198),_=t(65954),k=t(51997),z=t(35099),M=t(90842),D=t(7410),A=t(3463),N=t(46417),L=["children","onClose"],E=(0,b.ZP)(P.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function O(e){var n=e.children,t=e.onClose,i=(0,Z.Z)(e,L);return(0,N.jsxs)(C.Z,(0,p.Z)((0,p.Z)({sx:{m:0,p:2}},i),{},{children:[n,t?(0,N.jsx)(q.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,N.jsx)(R.Z,{})}):null]}))}function V(){var e=x.useState(!1),n=(0,h.Z)(e,2),t=n[0],i=n[1],d=(0,o.UO)().patientId,u=(0,M.Ds)().enqueueSnackbar,p=x.useState(d),Z=(0,h.Z)(p,2),b=Z[0],P=Z[1],C=x.useState({}),R=(0,h.Z)(C,2),L=R[0],V=R[1],B=x.useState(""),I=(0,h.Z)(B,2),U=I[0],F=I[1];x.useEffect((function(){P(d)}),[d]);var T=(0,c.ZP)("/patient/".concat(b,"/reintegration/"),l._,{revalidateOnMount:!0}),H=T.data,J=T.error,Q=T.isLoading,W=T.mutate,Y=(0,c.ZP)("/question/",l._,{revalidateOnMount:!0}).data;console.log(Y);var G=[{field:"question",headerName:"Question",width:550,editable:!0,valueGetter:function(e){return"".concat(e.row.question.questionnaire||"")}},{field:"answer",headerName:"Answer",width:250,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(q.Z,{onClick:function(){return X(e)},sx:{color:"#9c27b0"},children:(0,N.jsx)(_.Z,{})}),(0,N.jsx)(q.Z,{onClick:function(){return $(e.id)},sx:{color:"#f44336"},children:(0,N.jsx)(k.Z,{})})]})}}],K=function(){V({}),F(""),i(!1)},X=function(e){V(e.row),F(e.row.question.id),i(!0)},$=function(e){confirm("Are you sure to delete reintegration data?")&&l.Z.delete("/patient/".concat(d,"/reintegration/").concat(e,"/")).then((function(){u("reintegration Deleted successfully!!!",{variant:"success"}),W()})).catch((function(){u("something wents wrong!!!",{variant:"error"})}))};return Q?(0,N.jsx)("div",{children:"Loading..."}):J?(0,N.jsx)("div",{children:"Error on Treatment"}):(0,N.jsxs)("div",{children:[(0,N.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,N.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,N.jsx)(s.Z,{variant:"h3",gutterBottom:!0,children:"Reintegration Detail"})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,md:6}),(0,N.jsx)(r.ZP,{item:!0,xs:12,md:2,children:(0,N.jsx)(w.Z,{variant:"outlined",onClick:function(){i(!0)},children:"Add Reintegration"})})]}),(0,N.jsx)(z._,{rows:H,columns:G,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,N.jsxs)(E,{onClose:K,"aria-labelledby":"customized-dialog-title",open:t,children:[(0,N.jsx)(O,{id:"customized-dialog-title",onClose:K,children:L.id?"Update reintegration Data":"Add reintegration Data"}),(0,N.jsx)(D.J9,{enableReinitialize:!0,initialValues:{patient:d,question:U||"",answer:(null===L||void 0===L?void 0:L.answer)||""},validationSchema:A.Ry().shape({answer:A.Z_().required("Required valid answer")}),onSubmit:function(e,n){var t=n.setErrors,r=n.setStatus,a=n.setSubmitting;L.id?l.Z.put("/patient/".concat(d,"/reintegration/").concat(L.id,"/"),e).then((function(){u("reintegration data updated successfully!!!",{variant:"success"}),r({success:!1}),a(!1),W(),V({}),F("")})).catch((function(e){u("Something went wrong while adding the reintegration!!!",{variant:"error"}),r({success:!1}),t({submit:e.message}),a(!1)})):l.Z.post("/patient/".concat(d,"/reintegration/"),e).then((function(){u("reintegration added successfully!!!",{variant:"success"}),r({success:!1}),a(!1),W()})).catch((function(e){u("Something went wrong while adding the reintegration data!!!",{variant:"error"}),r({success:!1}),t({submit:e.message}),a(!1)})),i(!1)},children:function(e){var n=e.errors,t=e.handleChange,i=e.handleSubmit,s=e.isSubmitting,o=e.touched,c=e.values,l=e.handleBlur;return(0,N.jsxs)(D.l0,{noValidate:!0,children:[(0,N.jsx)(S.Z,{dividers:!0,children:(0,N.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsxs)(a.Z,{spacing:1,children:[(0,N.jsx)(f.Z,{htmlFor:"question",children:"Questionnaire*"}),(0,N.jsx)(g.Z,{fullWidth:!0,labelId:"question",id:"question",value:c.question,name:"question",onChange:t,children:Y.map((function(e){return(0,N.jsx)(m.Z,{value:e.id,children:e.questionnaire},e.id)}))})]})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsxs)(a.Z,{spacing:1,children:[(0,N.jsx)(f.Z,{htmlFor:"reintegration",children:"Answer*"}),(0,N.jsx)(v.Z,{fullWidth:!0,id:"reintegration",type:"text",value:c.answer,name:"answer",onBlur:l,onChange:t,placeholder:"Enter reintegration amount",error:Boolean(o.answer&&n.answer)}),o.answer&&n.answer&&(0,N.jsx)(j.Z,{error:!0,id:"standard-weight-helper-text-answer",children:n.answer})]})})]})}),(0,N.jsxs)(y.Z,{children:[(0,N.jsx)(w.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:s,onClick:i,color:"primary",children:L.id?"Update":"Save"}),(0,N.jsx)(w.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:K,children:"Cancel"})]})]})}})]})]})}var B=function(){var e=(0,o.UO)().patientId,n=(0,c.ZP)("/patient/".concat(e,"/"),l._),t=n.data,h=n.error;return n.isLoading?(0,N.jsx)("div",{children:"Loading..."}):h?(0,N.jsx)("div",{children:"Error on Treatment"}):(0,N.jsx)(i.Z,{title:"Patients Reintegration Detail",children:(0,N.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,N.jsx)(r.ZP,{item:!0,xs:12,md:5,children:(0,N.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,N.jsx)(s.Z,{variant:"h5",color:"primary",children:"Patient Name:"}),(0,N.jsxs)(s.Z,{variant:"h6",children:[t.fname," ",t.mname," ",t.lname]})]})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,md:3}),(0,N.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,N.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,N.jsx)(s.Z,{variant:"h5",align:"right",color:"primary",children:"Registration No:"}),(0,N.jsx)(s.Z,{variant:"h6",align:"right",children:t.registration_number})]})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,N.jsx)(d.Z,{children:(0,N.jsx)(u.Z,{label:"Reintegration",color:"primary"})})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,N.jsx)(V,{})})]})})}},11198:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=s},51997:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s},65954:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s},33604:function(e,n,t){var i=t(1413),r=t(45987),a=t(47313),s=t(83061),o=t(21921),c=t(61113),l=t(17592),d=t(77342),u=t(93174),h=t(63909),p=t(46417),Z=["className","id"],x=(0,l.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),f=a.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiDialogTitle"}),c=t.className,l=t.id,f=(0,r.Z)(t,Z),g=t,m=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},u.a,n)}(g),v=a.useContext(h.Z).titleId,j=void 0===v?l:v;return(0,p.jsx)(x,(0,i.Z)({component:"h2",className:(0,s.Z)(m.root,c),ownerState:g,ref:n,variant:"h6",id:null!=l?l:j},f))}));n.Z=f}}]);