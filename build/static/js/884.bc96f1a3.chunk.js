"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[884],{75506:function(e,t,n){n.d(t,{_:function(){return d}});var i=n(74165),r=n(15861),a=n(56573),s=n(65470),o=n.n(s),l=n(77287),c=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers.Authorization="Bearer ".concat((0,l.hP)()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var u=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,l.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var n=e.data.access;t.response.config.headers.Authorization="Bearer "+n,localStorage.setItem("auth",JSON.stringify({access:n,refresh:(0,l.YV)(),user:(0,l.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function d(e){return c.get(e).then((function(e){return e.data}))}o()(c,u),t.Z=c},39884:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var i=n(64611),r=n(9019),a=n(29439),s=n(1413),o=n(45987),l=n(47313),c=n(61113),u=n(42832),d=n(23306),h=n(49914),f=n(15480),p=n(69099),m=n(17592),y=n(94469),Z=n(33604),v=n(96467),x=n(4117),g=n(47131),j=n(11198),_=n(65954),b=n(51997),w=n(35099),C=n(1010),S=n(75506),F=n(90842),P=n(7410),k=n(3463),z=n(46417),M=["children","onClose"],R=(0,m.ZP)(y.Z)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function D(e){var t=e.children,n=e.onClose,i=(0,o.Z)(e,M);return(0,z.jsxs)(Z.Z,(0,s.Z)((0,s.Z)({sx:{m:0,p:2}},i),{},{children:[t,n?(0,z.jsx)(g.Z,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,z.jsx)(j.Z,{})}):null]}))}function A(){var e=l.useState(!1),t=(0,a.Z)(e,2),n=t[0],i=t[1],s=(0,F.Ds)().enqueueSnackbar,o=l.useState({}),m=(0,a.Z)(o,2),y=m[0],Z=m[1],j=(0,C.ZP)("/family/",S._,{revalidateOnMount:!0}),M=j.data,A=j.error,V=j.isLoading,B=j.mutate,L=[{field:"family_type",headerName:"Family Type",width:200,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(g.Z,{onClick:function(){return E(e)},sx:{color:"#9c27b0"},children:(0,z.jsx)(_.Z,{})}),(0,z.jsx)(g.Z,{onClick:function(){return T(e.id)},sx:{color:"#f44336"},children:(0,z.jsx)(b.Z,{})})]})}}],N=function(){Z({}),i(!1)},E=function(e){Z(e.row),i(!0)},T=function(e){confirm("Are you sure to delete family?")&&S.Z.delete("/family/".concat(e,"/")).then((function(){s("Famaly Deleted successfully!!!",{variant:"success"}),B()})).catch((function(){s("something wents wrong!!!",{variant:"error"})}))};return V?(0,z.jsx)("div",{children:"Loading..."}):A?(0,z.jsx)("div",{children:"Error on Family "}):(0,z.jsxs)("div",{children:[(0,z.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(c.Z,{variant:"h3",gutterBottom:!0,children:"Family Detail"})}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:6}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:2,children:(0,z.jsx)(p.Z,{variant:"outlined",onClick:function(){i(!0)},children:"Add Family"})})]}),(0,z.jsx)(w._,{rows:M,columns:L,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,z.jsxs)(R,{onClose:N,"aria-labelledby":"customized-dialog-title",open:n,children:[(0,z.jsx)(D,{id:"customized-dialog-title",onClose:N,children:y.id?"Update Family Group":"Add Family Group"}),(0,z.jsx)(P.J9,{enableReinitialize:!0,initialValues:{family_type:(null===y||void 0===y?void 0:y.family_type)||""},validationSchema:k.Ry().shape({family_type:k.Z_().required("Famaly type is required")}),onSubmit:function(e,t){var n=t.setErrors,r=t.setStatus,a=t.setSubmitting;y.id?S.Z.put("/family/".concat(y.id,"/"),e).then((function(){s("Family updated successfully!!!",{variant:"success"}),r({success:!1}),a(!1),B(),Z({})})).catch((function(e){s("Something went wrong while adding the family!!!",{variant:"error"}),r({success:!1}),n({submit:e.message}),a(!1)})):S.Z.post("/family/",e).then((function(){s("Family added successfully!!!",{variant:"success"}),r({success:!1}),a(!1),B()})).catch((function(e){s("Something went wrong while adding the family!!!",{variant:"error"}),r({success:!1}),n({submit:e.message}),a(!1)})),i(!1)},children:function(e){var t=e.errors,n=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,s=e.touched,o=e.values,l=e.handleBlur;return(0,z.jsxs)(P.l0,{noValidate:!0,children:[(0,z.jsx)(v.Z,{dividers:!0,children:(0,z.jsx)(r.ZP,{container:!0,spacing:3,children:(0,z.jsx)(r.ZP,{item:!0,xs:12,children:(0,z.jsxs)(u.Z,{spacing:1,children:[(0,z.jsx)(d.Z,{htmlFor:"family_type",children:"Family*"}),(0,z.jsx)(h.Z,{fullWidth:!0,id:"family_type",type:"text",value:o.family_type,name:"family_type",onBlur:l,onChange:n,placeholder:"Enter family type",error:Boolean(s.family_type&&t.family_type)}),s.family_type&&t.family_type&&(0,z.jsx)(f.Z,{error:!0,id:"standard-weight-helper-text-family_type",children:t.family_type})]})})})}),(0,z.jsxs)(x.Z,{children:[(0,z.jsx)(p.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:a,onClick:i,color:"primary",children:y.id?"Update":"Save"}),(0,z.jsx)(p.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:N,children:"Cancel"})]})]})}})]})]})}var V=function(){return(0,z.jsx)(i.Z,{title:"Family Types",children:(0,z.jsx)(r.ZP,{container:!0,spacing:3,children:(0,z.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,z.jsx)(A,{})})})})}},11198:function(e,t,n){var i=n(91941);t.Z=void 0;var r=i(n(45045)),a=n(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=s},51997:function(e,t,n){var i=n(91941);t.Z=void 0;var r=i(n(45045)),a=n(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=s},65954:function(e,t,n){var i=n(91941);t.Z=void 0;var r=i(n(45045)),a=n(46417),s=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=s},33604:function(e,t,n){var i=n(1413),r=n(45987),a=n(47313),s=n(83061),o=n(21921),l=n(61113),c=n(17592),u=n(77342),d=n(93174),h=n(63909),f=n(46417),p=["className","id"],m=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),y=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiDialogTitle"}),l=n.className,c=n.id,y=(0,r.Z)(n,p),Z=n,v=function(e){var t=e.classes;return(0,o.Z)({root:["root"]},d.a,t)}(Z),x=a.useContext(h.Z).titleId,g=void 0===x?c:x;return(0,f.jsx)(m,(0,i.Z)({component:"h2",className:(0,s.Z)(v.root,l),ownerState:Z,ref:t,variant:"h6",id:null!=c?c:g},y))}));t.Z=y}}]);