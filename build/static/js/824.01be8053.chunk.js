"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[824],{99824:function(n,e,i){i.r(e),i.d(e,{default:function(){return U}});var t=i(64611),r=i(9019),a=i(42832),d=i(61113),o=i(58467),s=i(1010),c=i(75506),l=i(19536),u=i(66212),h=i(29439),m=i(1413),g=i(45987),x=i(47313),f=i(23306),v=i(49914),Z=i(15480),j=i(16529),p=i(51405),_=i(69099),b=i(17592),w=i(94469),P=i(33604),C=i(96467),S=i(4117),y=i(47131),F=i(11198),k=i(65954),D=i(51997),N=i(35099),O=i(90842),A=i(7410),B=i(3463),E=i(46417),R=["children","onClose"],z=(0,b.ZP)(w.Z)((function(n){var e=n.theme;return{"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}}));function M(n){var e=n.children,i=n.onClose,t=(0,g.Z)(n,R);return(0,E.jsxs)(P.Z,(0,m.Z)((0,m.Z)({sx:{m:0,p:2}},t),{},{children:[e,i?(0,E.jsx)(y.Z,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:function(n){return n.palette.grey[500]}},children:(0,E.jsx)(F.Z,{})}):null]}))}function L(){var n=x.useState(!1),e=(0,h.Z)(n,2),i=e[0],t=e[1],l=(0,o.UO)().patientId,u=(0,O.Ds)().enqueueSnackbar,m=x.useState(l),g=(0,h.Z)(m,2),b=g[0],w=g[1],P=x.useState({}),F=(0,h.Z)(P,2),R=F[0],L=F[1],U=x.useState(""),q=(0,h.Z)(U,2),I=q[0],W=q[1];x.useEffect((function(){w(l)}),[l]);var T=(0,s.ZP)("/patient/".concat(b,"/funding/"),c._,{revalidateOnMount:!0}),V=T.data,G=T.error,J=T.isLoading,H=T.mutate,K=(0,s.ZP)("/donor/",c._,{revalidateOnMount:!0}).data,Q=[{field:"service_title",headerName:"Provided Services",width:150,editable:!0},{field:"donorName",headerName:"Donor",width:100,editable:!0,valueGetter:function(n){return"".concat(n.row.donor.donor_name||"")}},{field:"funding_amount",headerName:"Funding Amount",width:150,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(n){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(y.Z,{onClick:function(){return Y(n)},sx:{color:"#9c27b0"},children:(0,E.jsx)(k.Z,{})}),(0,E.jsx)(y.Z,{onClick:function(){return $(n.id)},sx:{color:"#f44336"},children:(0,E.jsx)(D.Z,{})})]})}}],X=function(){L({}),W(""),t(!1)},Y=function(n){L(n.row),W(n.row.donor.id),t(!0)},$=function(n){confirm("Are you sure to delete funding data?")&&c.Z.delete("/patient/".concat(l,"/funding/").concat(n,"/")).then((function(){u("Funding Deleted successfully!!!",{variant:"success"}),H()})).catch((function(){u("something wents wrong!!!",{variant:"error"})}))};return J?(0,E.jsx)("div",{children:"Loading..."}):G?(0,E.jsx)("div",{children:"Error on Treatment"}):(0,E.jsxs)("div",{children:[(0,E.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,E.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,E.jsx)(d.Z,{variant:"h3",gutterBottom:!0,children:"Donor Detail"})}),(0,E.jsx)(r.ZP,{item:!0,xs:12,md:6}),(0,E.jsx)(r.ZP,{item:!0,xs:12,md:2,children:(0,E.jsx)(_.Z,{variant:"outlined",onClick:function(){t(!0)},children:"Add Donor"})})]}),(0,E.jsx)(N._,{rows:V,columns:Q,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,E.jsxs)(z,{onClose:X,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,E.jsx)(M,{id:"customized-dialog-title",onClose:X,children:R.id?"Update Funding Data":"Add Funding Data"}),(0,E.jsx)(A.J9,{enableReinitialize:!0,initialValues:{patient:l,donor:I||"",funding_amount:(null===R||void 0===R?void 0:R.funding_amount)||"",service_title:(null===R||void 0===R?void 0:R.service_title)||""},validationSchema:B.Ry().shape({funding_amount:B.Rx().required("Required valid amount")}),onSubmit:function(n,e){var i=e.setErrors,r=e.setStatus,a=e.setSubmitting;R.id?c.Z.put("/patient/".concat(l,"/funding/").concat(R.id,"/"),n).then((function(){u("Funding data updated successfully!!!",{variant:"success"}),r({success:!1}),a(!1),H(),L({}),W("")})).catch((function(n){u("Something went wrong while adding the patient!!!",{variant:"error"}),r({success:!1}),i({submit:n.message}),a(!1)})):c.Z.post("/patient/".concat(l,"/funding/"),n).then((function(){u("Funding added successfully!!!",{variant:"success"}),r({success:!1}),a(!1),H()})).catch((function(n){u("Something went wrong while adding the funding data!!!",{variant:"error"}),r({success:!1}),i({submit:n.message}),a(!1)})),t(!1)},children:function(n){var e=n.errors,i=n.handleChange,t=n.handleSubmit,d=n.isSubmitting,o=n.touched,s=n.values,c=n.handleBlur;return(0,E.jsxs)(A.l0,{noValidate:!0,children:[(0,E.jsx)(C.Z,{dividers:!0,children:(0,E.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,E.jsx)(r.ZP,{item:!0,xs:12,children:(0,E.jsxs)(a.Z,{spacing:1,children:[(0,E.jsx)(f.Z,{htmlFor:"service_title",children:"Service Provided*"}),(0,E.jsx)(v.Z,{fullWidth:!0,id:"service_title",type:"text",value:s.service_title,name:"service_title",onBlur:c,onChange:i,placeholder:"Enter provided services",error:Boolean(o.service_title&&e.service_title)}),o.service_title&&e.service_title&&(0,E.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-service_title",children:e.service_title})]})}),(0,E.jsx)(r.ZP,{item:!0,xs:12,children:(0,E.jsxs)(a.Z,{spacing:1,children:[(0,E.jsx)(f.Z,{htmlFor:"donor",children:"Funded By*"}),(0,E.jsx)(j.Z,{fullWidth:!0,labelId:"donor",id:"donor",value:s.donor,name:"donor",onChange:i,children:K.map((function(n){return(0,E.jsx)(p.Z,{value:n.id,children:n.donor_name},n.id)}))})]})}),(0,E.jsx)(r.ZP,{item:!0,xs:12,children:(0,E.jsxs)(a.Z,{spacing:1,children:[(0,E.jsx)(f.Z,{htmlFor:"funding_amount",children:"Funding Amount*"}),(0,E.jsx)(v.Z,{fullWidth:!0,id:"funding_amount",type:"number",value:s.funding_amount,name:"funding_amount",onBlur:c,onChange:i,placeholder:"Enter funding amount",error:Boolean(o.funding_amount&&e.funding_amount)}),o.funding_amount&&e.funding_amount&&(0,E.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-funding_amount",children:e.funding_amount})]})})]})}),(0,E.jsxs)(S.Z,{children:[(0,E.jsx)(_.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:d,onClick:t,color:"primary",children:R.id?"Update":"Save"}),(0,E.jsx)(_.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:X,children:"Cancel"})]})]})}})]})]})}var U=function(){var n=(0,o.UO)().patientId,e=(0,s.ZP)("/patient/".concat(n,"/"),c._),i=e.data,h=e.error;return e.isLoading?(0,E.jsx)("div",{children:"Loading..."}):h?(0,E.jsx)("div",{children:"Error on Treatment"}):(0,E.jsx)(t.Z,{title:"Patients Funding Detail",children:(0,E.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,E.jsx)(r.ZP,{item:!0,xs:12,md:5,children:(0,E.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,E.jsx)(d.Z,{variant:"h5",color:"primary",children:"Patient Name:"}),(0,E.jsxs)(d.Z,{variant:"h6",children:[i.fname," ",i.mname," ",i.lname]})]})}),(0,E.jsx)(r.ZP,{item:!0,xs:12,md:3}),(0,E.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,E.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,E.jsx)(d.Z,{variant:"h5",align:"right",color:"primary",children:"Registration No:"}),(0,E.jsx)(d.Z,{variant:"h6",align:"right",children:i.registration_number})]})}),(0,E.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,E.jsx)(l.Z,{children:(0,E.jsx)(u.Z,{label:"DONOR",color:"primary"})})}),(0,E.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,E.jsx)(L,{})})]})})}}}]);