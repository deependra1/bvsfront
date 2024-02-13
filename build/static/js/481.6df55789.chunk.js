"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[481],{95481:function(e,n,i){i.r(n),i.d(n,{default:function(){return F}});var t=i(64611),r=i(9019),c=i(29439),o=i(1413),s=i(45987),a=i(47313),l=i(61113),u=i(42832),d=i(23306),h=i(49914),p=i(15480),g=i(69099),x=i(17592),m=i(94469),Z=i(33604),j=i(96467),f=i(4117),v=i(47131),_=i(11198),b=i(65954),C=i(51997),w=i(35099),S=i(1010),E=i(75506),k=i(90842),P=i(7410),y=i(3463),G=i(46417),z=["children","onClose"],A=(0,x.ZP)(m.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function D(e){var n=e.children,i=e.onClose,t=(0,s.Z)(e,z);return(0,G.jsxs)(Z.Z,(0,o.Z)((0,o.Z)({sx:{m:0,p:2}},t),{},{children:[n,i?(0,G.jsx)(v.Z,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,G.jsx)(_.Z,{})}):null]}))}function B(){var e=a.useState(!1),n=(0,c.Z)(e,2),i=n[0],t=n[1],o=(0,k.Ds)().enqueueSnackbar,s=a.useState({}),x=(0,c.Z)(s,2),m=x[0],Z=x[1],_=(0,S.ZP)("/ethnic/",E._,{revalidateOnMount:!0}),z=_.data,B=_.error,F=_.isLoading,M=_.mutate,q=[{field:"ethnic_group",headerName:"Ethnic Group",width:200,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(v.Z,{onClick:function(){return R(e)},sx:{color:"#9c27b0"},children:(0,G.jsx)(b.Z,{})}),(0,G.jsx)(v.Z,{onClick:function(){return L(e.id)},sx:{color:"#f44336"},children:(0,G.jsx)(C.Z,{})})]})}}],O=function(){Z({}),t(!1)},R=function(e){Z(e.row),t(!0)},L=function(e){confirm("Are you sure to delete ethnic group?")&&E.Z.delete("/ethnic/".concat(e,"/")).then((function(){o("Ethnic Group Deleted successfully!!!",{variant:"success"}),M()})).catch((function(){o("something wents wrong!!!",{variant:"error"})}))};return F?(0,G.jsx)("div",{children:"Loading..."}):B?(0,G.jsx)("div",{children:"Error on Ethnic group"}):(0,G.jsxs)("div",{children:[(0,G.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,G.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,G.jsx)(l.Z,{variant:"h3",gutterBottom:!0,children:"Ethnic Group Detail"})}),(0,G.jsx)(r.ZP,{item:!0,xs:12,md:6}),(0,G.jsx)(r.ZP,{item:!0,xs:12,md:2,children:(0,G.jsx)(g.Z,{variant:"outlined",onClick:function(){t(!0)},children:"Add Ethnic Group"})})]}),(0,G.jsx)(w._,{rows:z,columns:q,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,G.jsxs)(A,{onClose:O,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,G.jsx)(D,{id:"customized-dialog-title",onClose:O,children:m.id?"Update Ethnic Group":"Add Ethnic Group"}),(0,G.jsx)(P.J9,{enableReinitialize:!0,initialValues:{ethnic_group:(null===m||void 0===m?void 0:m.ethnic_group)||""},validationSchema:y.Ry().shape({ethnic_group:y.Z_().required("Ethnic group is required")}),onSubmit:function(e,n){var i=n.setErrors,r=n.setStatus,c=n.setSubmitting;m.id?E.Z.put("/ethnic/".concat(m.id,"/"),e).then((function(){o("Patient updated successfully!!!",{variant:"success"}),r({success:!1}),c(!1),M(),Z({})})).catch((function(e){o("Something went wrong while adding the occupation!!!",{variant:"error"}),r({success:!1}),i({submit:e.message}),c(!1)})):E.Z.post("/ethnic/",e).then((function(){o("Ethnic group added successfully!!!",{variant:"success"}),r({success:!1}),c(!1),M()})).catch((function(e){o("Something went wrong while adding the ethnic group!!!",{variant:"error"}),r({success:!1}),i({submit:e.message}),c(!1)})),t(!1)},children:function(e){var n=e.errors,i=e.handleChange,t=e.handleSubmit,c=e.isSubmitting,o=e.touched,s=e.values,a=e.handleBlur;return(0,G.jsxs)(P.l0,{noValidate:!0,children:[(0,G.jsx)(j.Z,{dividers:!0,children:(0,G.jsx)(r.ZP,{container:!0,spacing:3,children:(0,G.jsx)(r.ZP,{item:!0,xs:12,children:(0,G.jsxs)(u.Z,{spacing:1,children:[(0,G.jsx)(d.Z,{htmlFor:"ethnic",children:"Ethnic Group*"}),(0,G.jsx)(h.Z,{fullWidth:!0,id:"ethnic",type:"text",value:s.ethnic_group,name:"ethnic_group",onBlur:a,onChange:i,placeholder:"Enter ethnic name",error:Boolean(o.ethnic_group&&n.ethnic_group)}),o.ethnic_group&&n.ethnic_group&&(0,G.jsx)(p.Z,{error:!0,id:"standard-weight-helper-text-ethnic_group",children:n.ethnic_group})]})})})}),(0,G.jsxs)(f.Z,{children:[(0,G.jsx)(g.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:c,onClick:t,color:"primary",children:m.id?"Update":"Save"}),(0,G.jsx)(g.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:O,children:"Cancel"})]})]})}})]})]})}var F=function(){return(0,G.jsx)(t.Z,{title:"Ethnic Group",children:(0,G.jsx)(r.ZP,{container:!0,spacing:3,children:(0,G.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,G.jsx)(B,{})})})})}}}]);