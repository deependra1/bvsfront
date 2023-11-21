"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[706],{75506:function(e,n,t){t.d(n,{_:function(){return d}});var r=t(74165),i=t(15861),a=t(56573),s=t(65470),o=t.n(s),c=t(77287),u=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});u.interceptors.request.use(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers.Authorization="Bearer ".concat((0,c.hP)()),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),u.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,c.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var t=e.data.access;n.response.config.headers.Authorization="Bearer "+t,localStorage.setItem("auth",JSON.stringify({access:t,refresh:(0,c.YV)(),user:(0,c.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function d(e){return u.get(e).then((function(e){return e.data}))}o()(u,l),n.Z=u},11706:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(64611),i=t(9019),a=t(29439),s=t(1413),o=t(45987),c=t(47313),u=t(61113),l=t(42832),d=t(23306),h=t(49914),p=t(15480),f=t(69099),Z=t(17592),v=t(94469),x=t(33604),m=t(96467),g=t(4117),b=t(47131),j=t(11198),y=t(65954),_=t(51997),w=t(35099),C=t(1010),S=t(75506),P=t(90842),k=t(7410),B=t(3463),z=t(46417),M=["children","onClose"],T=(0,Z.ZP)(v.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function R(e){var n=e.children,t=e.onClose,r=(0,o.Z)(e,M);return(0,z.jsxs)(x.Z,(0,s.Z)((0,s.Z)({sx:{m:0,p:2}},r),{},{children:[n,t?(0,z.jsx)(b.Z,{"aria-label":"close",onClick:t,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,z.jsx)(j.Z,{})}):null]}))}function A(){var e=c.useState(!1),n=(0,a.Z)(e,2),t=n[0],r=n[1],s=(0,P.Ds)().enqueueSnackbar,o=c.useState({}),Z=(0,a.Z)(o,2),v=Z[0],x=Z[1],j=(0,C.ZP)("/burn_type/",S._,{revalidateOnMount:!0}),M=j.data,A=j.error,D=j.isLoading,N=j.mutate,V=[{field:"burn_type",headerName:"Type of Burn",width:200,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(b.Z,{onClick:function(){return E(e)},sx:{color:"#9c27b0"},children:(0,z.jsx)(y.Z,{})}),(0,z.jsx)(b.Z,{onClick:function(){return U(e.id)},sx:{color:"#f44336"},children:(0,z.jsx)(_.Z,{})})]})}}],L=function(){x({}),r(!1)},E=function(e){x(e.row),r(!0)},U=function(e){confirm("Are you sure to delete?")&&S.Z.delete("/burn_type/".concat(e,"/")).then((function(){s("Deleted successfully!!!",{variant:"success"}),N()})).catch((function(){s("Something wents wrong!!!",{variant:"error"})}))};return D?(0,z.jsx)("div",{children:"Loading..."}):A?(0,z.jsx)("div",{children:"Error on Burn Type"}):(0,z.jsxs)("div",{children:[(0,z.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(u.Z,{variant:"h3",gutterBottom:!0,children:"Burn Type"})}),(0,z.jsx)(i.ZP,{item:!0,xs:12,md:6}),(0,z.jsx)(i.ZP,{item:!0,xs:12,md:2,children:(0,z.jsx)(f.Z,{variant:"outlined",onClick:function(){r(!0)},children:"Add New"})})]}),(0,z.jsx)(w._,{rows:M,columns:V,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,z.jsxs)(T,{onClose:L,"aria-labelledby":"customized-dialog-title",open:t,children:[(0,z.jsx)(R,{id:"customized-dialog-title",onClose:L,children:v.id?"Update Burn Type":"Add Burn Type"}),(0,z.jsx)(k.J9,{enableReinitialize:!0,initialValues:{burn_type:(null===v||void 0===v?void 0:v.burn_type)||""},validationSchema:B.Ry().shape({burn_type:B.Z_().required("Burn Type is required")}),onSubmit:function(e,n){var t=n.setErrors,i=n.setStatus,a=n.setSubmitting;v.id?S.Z.put("/burn_type/".concat(v.id,"/"),e).then((function(){s("Updated successfully!!!",{variant:"success"}),i({success:!1}),a(!1),N(),x({})})).catch((function(e){s("Something went wrong while adding !!",{variant:"error"}),i({success:!1}),t({submit:e.message}),a(!1)})):S.Z.post("/burn_type/",e).then((function(){s("Added successfully!!!",{variant:"success"}),i({success:!1}),a(!1),N()})).catch((function(e){s("Something went wrong while adding !!",{variant:"error"}),i({success:!1}),t({submit:e.message}),a(!1)})),r(!1)},children:function(e){var n=e.errors,t=e.handleChange,r=e.handleSubmit,a=e.isSubmitting,s=e.touched,o=e.values,c=e.handleBlur;return(0,z.jsxs)(k.l0,{noValidate:!0,children:[(0,z.jsx)(m.Z,{dividers:!0,children:(0,z.jsx)(i.ZP,{container:!0,spacing:3,children:(0,z.jsx)(i.ZP,{item:!0,xs:12,children:(0,z.jsxs)(l.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{htmlFor:"burn_type",children:"Burn Type*"}),(0,z.jsx)(h.Z,{fullWidth:!0,id:"burn_type",type:"text",value:o.burn_type,name:"burn_type",onBlur:c,onChange:t,placeholder:"Enter burn type",error:Boolean(s.burn_type&&n.burn_type)}),s.burn_type&&n.burn_type&&(0,z.jsx)(p.Z,{error:!0,id:"standard-weight-helper-text-burn_type",children:n.burn_type})]})})})}),(0,z.jsxs)(g.Z,{children:[(0,z.jsx)(f.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:a,onClick:r,color:"primary",children:v.id?"Update":"Save"}),(0,z.jsx)(f.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:L,children:"Cancel"})]})]})}})]})]})}var D=function(){return(0,z.jsx)(r.Z,{title:"Burn Type",children:(0,z.jsx)(i.ZP,{container:!0,spacing:3,children:(0,z.jsx)(i.ZP,{item:!0,xs:12,md:12,children:(0,z.jsx)(A,{})})})})}},11198:function(e,n,t){var r=t(91941);n.Z=void 0;var i=r(t(45045)),a=t(46417),s=(0,i.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=s},51997:function(e,n,t){var r=t(91941);n.Z=void 0;var i=r(t(45045)),a=t(46417),s=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s},65954:function(e,n,t){var r=t(91941);n.Z=void 0;var i=r(t(45045)),a=t(46417),s=(0,i.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s},33604:function(e,n,t){var r=t(1413),i=t(45987),a=t(47313),s=t(83061),o=t(21921),c=t(61113),u=t(17592),l=t(77342),d=t(93174),h=t(63909),p=t(46417),f=["className","id"],Z=(0,u.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),v=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiDialogTitle"}),c=t.className,u=t.id,v=(0,i.Z)(t,f),x=t,m=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},d.a,n)}(x),g=a.useContext(h.Z).titleId,b=void 0===g?u:g;return(0,p.jsx)(Z,(0,r.Z)({component:"h2",className:(0,s.Z)(m.root,c),ownerState:x,ref:n,variant:"h6",id:null!=u?u:b},v))}));n.Z=v}}]);