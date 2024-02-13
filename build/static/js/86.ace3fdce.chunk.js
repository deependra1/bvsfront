"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[86],{6086:function(e,n,i){i.r(n),i.d(n,{default:function(){return M}});var r=i(64611),t=i(9019),s=i(29439),a=i(1413),c=i(45987),u=i(47313),o=i(61113),l=i(42832),d=i(23306),h=i(49914),x=i(15480),f=i(69099),m=i(17592),b=i(94469),g=i(33604),Z=i(96467),j=i(4117),p=i(47131),v=i(11198),_=i(65954),C=i(51997),w=i(35099),S=i(1010),k=i(75506),y=i(90842),B=i(7410),P=i(3463),D=i(46417),z=["children","onClose"],A=(0,m.ZP)(b.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function E(e){var n=e.children,i=e.onClose,r=(0,c.Z)(e,z);return(0,D.jsxs)(g.Z,(0,a.Z)((0,a.Z)({sx:{m:0,p:2}},r),{},{children:[n,i?(0,D.jsx)(p.Z,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,D.jsx)(v.Z,{})}):null]}))}function F(){var e=u.useState(!1),n=(0,s.Z)(e,2),i=n[0],r=n[1],a=(0,y.Ds)().enqueueSnackbar,c=u.useState({}),m=(0,s.Z)(c,2),b=m[0],g=m[1],v=(0,S.ZP)("/burn_cause/",k._,{revalidateOnMount:!0}),z=v.data,F=v.error,M=v.isLoading,R=v.mutate,q=[{field:"burn_cause",headerName:"Cause of Burn",width:200,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p.Z,{onClick:function(){return O(e)},sx:{color:"#9c27b0"},children:(0,D.jsx)(_.Z,{})}),(0,D.jsx)(p.Z,{onClick:function(){return U(e.id)},sx:{color:"#f44336"},children:(0,D.jsx)(C.Z,{})})]})}}],N=function(){g({}),r(!1)},O=function(e){g(e.row),r(!0)},U=function(e){confirm("Are you sure to delete ?")&&k.Z.delete("/burn_cause/".concat(e,"/")).then((function(){a("Deleted successfully!!!",{variant:"success"}),R()})).catch((function(){a("Something wents wrong!!!",{variant:"error"})}))};return M?(0,D.jsx)("div",{children:"Loading..."}):F?(0,D.jsx)("div",{children:"Error on Ethnic group"}):(0,D.jsxs)("div",{children:[(0,D.jsxs)(t.ZP,{container:!0,spacing:3,children:[(0,D.jsx)(t.ZP,{item:!0,xs:12,md:4,children:(0,D.jsx)(o.Z,{variant:"h3",gutterBottom:!0,children:"Cause of Burn Detail"})}),(0,D.jsx)(t.ZP,{item:!0,xs:12,md:6}),(0,D.jsx)(t.ZP,{item:!0,xs:12,md:2,children:(0,D.jsx)(f.Z,{variant:"outlined",onClick:function(){r(!0)},children:"Add New"})})]}),(0,D.jsx)(w._,{rows:z,columns:q,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,D.jsxs)(A,{onClose:N,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,D.jsx)(E,{id:"customized-dialog-title",onClose:N,children:b.id?"Update Cause of Burn":"Add Cause of Burn"}),(0,D.jsx)(B.J9,{enableReinitialize:!0,initialValues:{burn_cause:(null===b||void 0===b?void 0:b.burn_cause)||""},validationSchema:P.Ry().shape({burn_cause:P.Z_().required("Required")}),onSubmit:function(e,n){var i=n.setErrors,t=n.setStatus,s=n.setSubmitting;b.id?k.Z.put("/burn_cause/".concat(b.id,"/"),e).then((function(){a("Updated successfully!!!",{variant:"success"}),t({success:!1}),s(!1),R(),g({})})).catch((function(e){a("Something went wrong while adding the occupation!!!",{variant:"error"}),t({success:!1}),i({submit:e.message}),s(!1)})):k.Z.post("/burn_cause/",e).then((function(){a("Data added successfully!!!",{variant:"success"}),t({success:!1}),s(!1),R()})).catch((function(e){a("Something went wrong while adding data!!!",{variant:"error"}),t({success:!1}),i({submit:e.message}),s(!1)})),r(!1)},children:function(e){var n=e.errors,i=e.handleChange,r=e.handleSubmit,s=e.isSubmitting,a=e.touched,c=e.values,u=e.handleBlur;return(0,D.jsxs)(B.l0,{noValidate:!0,children:[(0,D.jsx)(Z.Z,{dividers:!0,children:(0,D.jsx)(t.ZP,{container:!0,spacing:3,children:(0,D.jsx)(t.ZP,{item:!0,xs:12,children:(0,D.jsxs)(l.Z,{spacing:1,children:[(0,D.jsx)(d.Z,{htmlFor:"burn_cause",children:"Cause of Burn*"}),(0,D.jsx)(h.Z,{fullWidth:!0,id:"burn_cause",type:"text",value:c.burn_cause,name:"burn_cause",onBlur:u,onChange:i,placeholder:"Enter cause of burn",error:Boolean(a.burn_cause&&n.burn_cause)}),a.burn_cause&&n.burn_cause&&(0,D.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-burn_cause",children:n.burn_cause})]})})})}),(0,D.jsxs)(j.Z,{children:[(0,D.jsx)(f.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:s,onClick:r,color:"primary",children:b.id?"Update":"Save"}),(0,D.jsx)(f.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:N,children:"Cancel"})]})]})}})]})]})}var M=function(){return(0,D.jsx)(r.Z,{title:"Burn Cause",children:(0,D.jsx)(t.ZP,{container:!0,spacing:3,children:(0,D.jsx)(t.ZP,{item:!0,xs:12,md:12,children:(0,D.jsx)(F,{})})})})}}}]);