"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[535],{75506:function(e,n,r){r.d(n,{_:function(){return u}});var t=r(74165),o=r(15861),a=r(56573),i=r(65470),s=r.n(i),d=r(77287),c=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers.Authorization="Bearer ".concat((0,d.hP)()),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),c.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var l=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,d.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var r=e.data.access;n.response.config.headers.Authorization="Bearer "+r,localStorage.setItem("auth",JSON.stringify({access:r,refresh:(0,d.YV)(),user:(0,d.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function u(e){return c.get(e).then((function(e){return e.data}))}s()(c,l),n.Z=c},5535:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var t=r(64611),o=r(9019),a=r(29439),i=r(1413),s=r(45987),d=r(47313),c=r(61113),l=r(42832),u=r(23306),h=r(49914),m=r(15480),f=r(69099),p=r(17592),Z=r(94469),x=r(33604),v=r(96467),g=r(4117),j=r(47131),_=r(11198),b=r(65954),w=r(51997),C=r(35099),D=r(1010),S=r(75506),P=r(90842),y=r(7410),k=r(3463),z=r(46417),M=["children","onClose"],A=(0,p.ZP)(Z.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function R(e){var n=e.children,r=e.onClose,t=(0,s.Z)(e,M);return(0,z.jsxs)(x.Z,(0,i.Z)((0,i.Z)({sx:{m:0,p:2}},t),{},{children:[n,r?(0,z.jsx)(j.Z,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,z.jsx)(_.Z,{})}):null]}))}function B(){var e=d.useState(!1),n=(0,a.Z)(e,2),r=n[0],t=n[1],i=(0,P.Ds)().enqueueSnackbar,s=d.useState({}),p=(0,a.Z)(s,2),Z=p[0],x=p[1],_=(0,D.ZP)("/donor/",S._,{revalidateOnMount:!0}),M=_.data,B=_.error,N=_.isLoading,V=_.mutate,E=[{field:"donor_name",headerName:"Donor Name",width:200,editable:!0},{field:"donor_address",headerName:"Donor Address",width:100,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(j.Z,{onClick:function(){return F(e)},sx:{color:"#9c27b0"},children:(0,z.jsx)(b.Z,{})}),(0,z.jsx)(j.Z,{onClick:function(){return T(e.id)},sx:{color:"#f44336"},children:(0,z.jsx)(w.Z,{})})]})}}],L=function(){x({}),t(!1)},F=function(e){x(e.row),t(!0)},T=function(e){confirm("Are you sure to delete donro information?")&&S.Z.delete("/donor/".concat(e,"/")).then((function(){i("Patient Deleted successfully!!!",{variant:"success"}),V()})).catch((function(){i("something wents wrong!!!",{variant:"error"})}))};return N?(0,z.jsx)("div",{children:"Loading..."}):B?(0,z.jsx)("div",{children:"Error on Doner"}):(0,z.jsxs)("div",{children:[(0,z.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(c.Z,{variant:"h3",gutterBottom:!0,children:"Donor Detail"})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:6}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,children:(0,z.jsx)(f.Z,{variant:"outlined",onClick:function(){t(!0)},children:"Add Donor"})})]}),(0,z.jsx)(C._,{rows:M,columns:E,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,z.jsxs)(A,{onClose:L,"aria-labelledby":"customized-dialog-title",open:r,children:[(0,z.jsx)(R,{id:"customized-dialog-title",onClose:L,children:Z.id?"Update Treatment Data":"Add Treatment Data"}),(0,z.jsx)(y.J9,{enableReinitialize:!0,initialValues:{donor_name:(null===Z||void 0===Z?void 0:Z.donor_name)||"",donor_address:(null===Z||void 0===Z?void 0:Z.donor_address)||""},validationSchema:k.Ry().shape({donor_name:k.Z_().required("Donor name is required")}),onSubmit:function(e,n){var r=n.setErrors,o=n.setStatus,a=n.setSubmitting;Z.id?S.Z.put("/donor/".concat(Z.id,"/"),e).then((function(){i("Patient updated successfully!!!",{variant:"success"}),o({success:!1}),a(!1),V(),x({})})).catch((function(e){i("Something went wrong while adding the donor!!!",{variant:"error"}),o({success:!1}),r({submit:e.message}),a(!1)})):S.Z.post("/donor/",e).then((function(){i("Donor added successfully!!!",{variant:"success"}),o({success:!1}),a(!1),V()})).catch((function(e){i("Something went wrong while adding the patient!!!",{variant:"error"}),o({success:!1}),r({submit:e.message}),a(!1)})),t(!1)},children:function(e){var n=e.errors,r=e.handleChange,t=e.handleSubmit,a=e.isSubmitting,i=e.touched,s=e.values,d=e.handleBlur;return(0,z.jsxs)(y.l0,{noValidate:!0,children:[(0,z.jsx)(v.Z,{dividers:!0,children:(0,z.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(l.Z,{spacing:1,children:[(0,z.jsx)(u.Z,{htmlFor:"donor",children:"Donor*"}),(0,z.jsx)(h.Z,{fullWidth:!0,id:"donor",type:"text",value:s.donor_name,name:"donor_name",onBlur:d,onChange:r,placeholder:"Enter donor name",error:Boolean(i.donor_name&&n.donor_name)}),i.donor_name&&n.donor_name&&(0,z.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-donor_name",children:n.donor_name})]})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(l.Z,{spacing:1,children:[(0,z.jsx)(u.Z,{htmlFor:"donor_address",children:"Donate Address"}),(0,z.jsx)(h.Z,{fullWidth:!0,id:"donor_address",type:"text",value:s.donor_address,name:"donor_address",onBlur:d,onChange:r,placeholder:"Enter donor_address name",error:Boolean(i.donor_address&&n.donor_address)}),i.donor_address&&n.donor_address&&(0,z.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-donor_address",children:n.donor_address})]})})]})}),(0,z.jsxs)(g.Z,{children:[(0,z.jsx)(f.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:a,onClick:t,color:"primary",children:Z.id?"Update":"Save"}),(0,z.jsx)(f.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:L,children:"Cancel"})]})]})}})]})]})}var N=function(){return(0,z.jsx)(t.Z,{title:"Donor Information",children:(0,z.jsx)(o.ZP,{container:!0,spacing:3,children:(0,z.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,z.jsx)(B,{})})})})}},11198:function(e,n,r){var t=r(91941);n.Z=void 0;var o=t(r(45045)),a=r(46417),i=(0,o.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=i},51997:function(e,n,r){var t=r(91941);n.Z=void 0;var o=t(r(45045)),a=r(46417),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},65954:function(e,n,r){var t=r(91941);n.Z=void 0;var o=t(r(45045)),a=r(46417),i=(0,o.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=i},33604:function(e,n,r){var t=r(1413),o=r(45987),a=r(47313),i=r(83061),s=r(21921),d=r(61113),c=r(17592),l=r(77342),u=r(93174),h=r(63909),m=r(46417),f=["className","id"],p=(0,c.ZP)(d.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),Z=a.forwardRef((function(e,n){var r=(0,l.Z)({props:e,name:"MuiDialogTitle"}),d=r.className,c=r.id,Z=(0,o.Z)(r,f),x=r,v=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},u.a,n)}(x),g=a.useContext(h.Z).titleId,j=void 0===g?c:g;return(0,m.jsx)(p,(0,t.Z)({component:"h2",className:(0,i.Z)(v.root,d),ownerState:x,ref:n,variant:"h6",id:null!=c?c:j},Z))}));n.Z=Z}}]);