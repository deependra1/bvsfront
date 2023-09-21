"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[884],{75506:function(e,n,t){t.d(n,{_:function(){return d}});var i=t(74165),r=t(15861),a=t(56573),s=t(65470),o=t.n(s),l=t(77287),c=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers.Authorization="Bearer ".concat((0,l.hP)()),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),c.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var u=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,l.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var t=e.data.access;n.response.config.headers.Authorization="Bearer "+t,localStorage.setItem("auth",JSON.stringify({access:t,refresh:(0,l.YV)(),user:(0,l.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function d(e){return c.get(e).then((function(e){return e.data}))}o()(c,u),n.Z=c},39884:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var i=t(9478),r=t(9019),a=t(61113),s=t(19536),o=t(66212),l=t(29439),c=t(1413),u=t(45987),d=t(47313),h=t(42832),m=t(23306),f=t(49914),p=t(15480),Z=t(69099),x=t(17592),y=t(94469),v=t(33604),g=t(96467),j=t(4117),b=t(47131),_=t(11198),w=t(65954),C=t(51997),S=t(6316),P=t(1010),F=t(75506),k=t(90842),z=t(7410),M=t(3463),D=t(46417),R=["children","onClose"],A=(0,x.ZP)(y.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function V(e){var n=e.children,t=e.onClose,i=(0,u.Z)(e,R);return(0,D.jsxs)(v.Z,(0,c.Z)((0,c.Z)({sx:{m:0,p:2}},i),{},{children:[n,t?(0,D.jsx)(b.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,D.jsx)(_.Z,{})}):null]}))}function B(){var e=d.useState(!1),n=(0,l.Z)(e,2),t=n[0],i=n[1],s=(0,k.Ds)().enqueueSnackbar,o=d.useState({}),c=(0,l.Z)(o,2),u=c[0],x=c[1],y=(0,P.ZP)("/family/",F._,{revalidateOnMount:!0}),v=y.data,_=y.error,R=y.isLoading,B=y.mutate,L=[{field:"family_type",headerName:"Family Type",width:200,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(b.Z,{onClick:function(){return E(e)},sx:{color:"#9c27b0"},children:(0,D.jsx)(w.Z,{})}),(0,D.jsx)(b.Z,{onClick:function(){return I(e.id)},sx:{color:"#f44336"},children:(0,D.jsx)(C.Z,{})})]})}}],N=function(){i(!1)},E=function(e){x(e.row),i(!0)},I=function(e){confirm("Are you sure to delete family?")&&F.Z.delete("/family/".concat(e,"/")).then((function(){s("Famaly Deleted successfully!!!",{variant:"success"}),B()})).catch((function(){s("something wents wrong!!!",{variant:"error"})}))};return R?(0,D.jsx)("div",{children:"Loading..."}):_?(0,D.jsx)("div",{children:"Error on Family "}):(0,D.jsxs)("div",{children:[(0,D.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,D.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,D.jsx)(a.Z,{variant:"h3",gutterBottom:!0,children:"Family Detail"})}),(0,D.jsx)(r.ZP,{item:!0,xs:12,md:6}),(0,D.jsx)(r.ZP,{item:!0,xs:12,md:2,children:(0,D.jsx)(Z.Z,{variant:"outlined",onClick:function(){i(!0)},children:"Add Family"})})]}),(0,D.jsx)(S._,{rows:v,columns:L,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,D.jsxs)(A,{onClose:N,"aria-labelledby":"customized-dialog-title",open:t,children:[(0,D.jsx)(V,{id:"customized-dialog-title",onClose:N,children:u.id?"Update Family Group":"Add Family Group"}),(0,D.jsx)(z.J9,{enableReinitialize:!0,initialValues:{family_type:(null===u||void 0===u?void 0:u.family_type)||""},validationSchema:M.Ry().shape({family_type:M.Z_().required("Famaly type is required")}),onSubmit:function(e,n){var t=n.setErrors,r=n.setStatus,a=n.setSubmitting;u.id?F.Z.put("/family/".concat(u.id,"/"),e).then((function(){s("Family updated successfully!!!",{variant:"success"}),r({success:!1}),a(!1),B(),x({})})).catch((function(e){s("Something went wrong while adding the family!!!",{variant:"error"}),r({success:!1}),t({submit:e.message}),a(!1)})):F.Z.post("/family/",e).then((function(){s("Family added successfully!!!",{variant:"success"}),r({success:!1}),a(!1),B()})).catch((function(e){s("Something went wrong while adding the family!!!",{variant:"error"}),r({success:!1}),t({submit:e.message}),a(!1)})),i(!1)},children:function(e){var n=e.errors,t=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,s=e.touched,o=e.values,l=e.handleBlur;return(0,D.jsxs)(z.l0,{noValidate:!0,children:[(0,D.jsx)(g.Z,{dividers:!0,children:(0,D.jsx)(r.ZP,{container:!0,spacing:3,children:(0,D.jsx)(r.ZP,{item:!0,xs:12,children:(0,D.jsxs)(h.Z,{spacing:1,children:[(0,D.jsx)(m.Z,{htmlFor:"family_type",children:"Family*"}),(0,D.jsx)(f.Z,{fullWidth:!0,id:"family_type",type:"text",value:o.family_type,name:"family_type",onBlur:l,onChange:t,placeholder:"Enter family type",error:Boolean(s.family_type&&n.family_type)}),s.family_type&&n.family_type&&(0,D.jsx)(p.Z,{error:!0,id:"standard-weight-helper-text-family_type",children:n.family_type})]})})})}),(0,D.jsxs)(j.Z,{children:[(0,D.jsx)(Z.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:a,onClick:i,color:"primary",children:u.id?"Update":"Save"}),(0,D.jsx)(Z.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:N,children:"Cancel"})]})]})}})]})]})}var L=function(){return(0,D.jsx)(i.Z,{title:"Donor Information",children:(0,D.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,D.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,D.jsx)(a.Z,{variant:"h1",align:"center",children:"BVS-NEPAL"})}),(0,D.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,D.jsx)(a.Z,{variant:"h3",align:"center",children:"Family Information"})}),(0,D.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,D.jsx)(s.Z,{children:(0,D.jsx)(o.Z,{label:"Family",color:"primary"})})}),(0,D.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,D.jsx)(B,{})})]})})}},11198:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=s},51997:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s},65954:function(e,n,t){var i=t(91941);n.Z=void 0;var r=i(t(45045)),a=t(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s},33604:function(e,n,t){var i=t(1413),r=t(45987),a=t(47313),s=t(83061),o=t(21921),l=t(61113),c=t(17592),u=t(77342),d=t(93174),h=t(63909),m=t(46417),f=["className","id"],p=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),Z=a.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiDialogTitle"}),l=t.className,c=t.id,Z=(0,r.Z)(t,f),x=t,y=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},d.a,n)}(x),v=a.useContext(h.Z).titleId,g=void 0===v?c:v;return(0,m.jsx)(p,(0,i.Z)({component:"h2",className:(0,s.Z)(y.root,l),ownerState:x,ref:n,variant:"h6",id:null!=c?c:g},Z))}));n.Z=Z}}]);