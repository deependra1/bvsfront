"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[652],{35652:function(e,n,i){i.r(n),i.d(n,{default:function(){return L}});var t=i(64611),r=i(9019),a=i(42832),s=i(61113),o=i(58467),c=i(1010),l=i(75506),d=i(19536),u=i(66212),h=i(29439),x=i(1413),g=i(45987),m=i(47313),Z=i(23306),j=i(16529),p=i(51405),f=i(49914),v=i(15480),w=i(69099),b=i(17592),C=i(94469),P=i(33604),S=i(96467),q=i(4117),_=i(47131),y=i(11198),k=i(65954),R=i(51997),D=i(35099),A=i(90842),E=i(7410),O=i(3463),z=i(46417),F=["children","onClose"],M=(0,b.ZP)(C.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function N(e){var n=e.children,i=e.onClose,t=(0,g.Z)(e,F);return(0,z.jsxs)(P.Z,(0,x.Z)((0,x.Z)({sx:{m:0,p:2}},t),{},{children:[n,i?(0,z.jsx)(_.Z,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,z.jsx)(y.Z,{})}):null]}))}function B(){var e=m.useState(!1),n=(0,h.Z)(e,2),i=n[0],t=n[1],d=(0,o.UO)().patientId,u=(0,A.Ds)().enqueueSnackbar,x=m.useState(d),g=(0,h.Z)(x,2),b=g[0],C=g[1],P=m.useState({}),y=(0,h.Z)(P,2),F=y[0],B=y[1],L=m.useState(""),U=(0,h.Z)(L,2),I=U[0],Q=U[1];m.useEffect((function(){C(d)}),[d]);var T=(0,c.ZP)("/patient/".concat(b,"/reintegration/"),l._,{revalidateOnMount:!0}),V=T.data,W=T.error,G=T.isLoading,J=T.mutate,H=(0,c.ZP)("/question/",l._,{revalidateOnMount:!0}).data;console.log(H);var K=[{field:"question",headerName:"Question",width:550,editable:!0,valueGetter:function(e){return"".concat(e.row.question.questionnaire||"")}},{field:"answer",headerName:"Answer",width:250,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(_.Z,{onClick:function(){return Y(e)},sx:{color:"#9c27b0"},children:(0,z.jsx)(k.Z,{})}),(0,z.jsx)(_.Z,{onClick:function(){return $(e.id)},sx:{color:"#f44336"},children:(0,z.jsx)(R.Z,{})})]})}}],X=function(){B({}),Q(""),t(!1)},Y=function(e){B(e.row),Q(e.row.question.id),t(!0)},$=function(e){confirm("Are you sure to delete reintegration data?")&&l.Z.delete("/patient/".concat(d,"/reintegration/").concat(e,"/")).then((function(){u("reintegration Deleted successfully!!!",{variant:"success"}),J()})).catch((function(){u("something wents wrong!!!",{variant:"error"})}))};return G?(0,z.jsx)("div",{children:"Loading..."}):W?(0,z.jsx)("div",{children:"Error on Treatment"}):(0,z.jsxs)("div",{children:[(0,z.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(s.Z,{variant:"h3",gutterBottom:!0,children:"Reintegration Detail"})}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:6}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:2,children:(0,z.jsx)(w.Z,{variant:"outlined",onClick:function(){t(!0)},children:"Add Reintegration"})})]}),(0,z.jsx)(D._,{rows:V,columns:K,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,z.jsxs)(M,{onClose:X,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,z.jsx)(N,{id:"customized-dialog-title",onClose:X,children:F.id?"Update reintegration Data":"Add reintegration Data"}),(0,z.jsx)(E.J9,{enableReinitialize:!0,initialValues:{patient:d,question:I||"",answer:(null===F||void 0===F?void 0:F.answer)||""},validationSchema:O.Ry().shape({answer:O.Z_().required("Required valid answer")}),onSubmit:function(e,n){var i=n.setErrors,r=n.setStatus,a=n.setSubmitting;F.id?l.Z.put("/patient/".concat(d,"/reintegration/").concat(F.id,"/"),e).then((function(){u("reintegration data updated successfully!!!",{variant:"success"}),r({success:!1}),a(!1),J(),B({}),Q("")})).catch((function(e){u("Something went wrong while adding the reintegration!!!",{variant:"error"}),r({success:!1}),i({submit:e.message}),a(!1)})):l.Z.post("/patient/".concat(d,"/reintegration/"),e).then((function(){u("reintegration added successfully!!!",{variant:"success"}),r({success:!1}),a(!1),J()})).catch((function(e){u("Something went wrong while adding the reintegration data!!!",{variant:"error"}),r({success:!1}),i({submit:e.message}),a(!1)})),t(!1)},children:function(e){var n=e.errors,i=e.handleChange,t=e.handleSubmit,s=e.isSubmitting,o=e.touched,c=e.values,l=e.handleBlur;return(0,z.jsxs)(E.l0,{noValidate:!0,children:[(0,z.jsx)(S.Z,{dividers:!0,children:(0,z.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(r.ZP,{item:!0,xs:12,children:(0,z.jsxs)(a.Z,{spacing:1,children:[(0,z.jsx)(Z.Z,{htmlFor:"question",children:"Questionnaire*"}),(0,z.jsx)(j.Z,{fullWidth:!0,labelId:"question",id:"question",value:c.question,name:"question",onChange:i,children:H.map((function(e){return(0,z.jsx)(p.Z,{value:e.id,children:e.questionnaire},e.id)}))})]})}),(0,z.jsx)(r.ZP,{item:!0,xs:12,children:(0,z.jsxs)(a.Z,{spacing:1,children:[(0,z.jsx)(Z.Z,{htmlFor:"reintegration",children:"Answer*"}),(0,z.jsx)(f.Z,{fullWidth:!0,id:"reintegration",type:"text",value:c.answer,name:"answer",onBlur:l,onChange:i,placeholder:"Enter reintegration amount",error:Boolean(o.answer&&n.answer)}),o.answer&&n.answer&&(0,z.jsx)(v.Z,{error:!0,id:"standard-weight-helper-text-answer",children:n.answer})]})})]})}),(0,z.jsxs)(q.Z,{children:[(0,z.jsx)(w.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:s,onClick:t,color:"primary",children:F.id?"Update":"Save"}),(0,z.jsx)(w.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:X,children:"Cancel"})]})]})}})]})]})}var L=function(){var e=(0,o.UO)().patientId,n=(0,c.ZP)("/patient/".concat(e,"/"),l._),i=n.data,h=n.error;return n.isLoading?(0,z.jsx)("div",{children:"Loading..."}):h?(0,z.jsx)("div",{children:"Error on Treatment"}):(0,z.jsx)(t.Z,{title:"Patients Reintegration Detail",children:(0,z.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(r.ZP,{item:!0,xs:12,md:5,children:(0,z.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,z.jsx)(s.Z,{variant:"h5",color:"primary",children:"Patient Name:"}),(0,z.jsxs)(s.Z,{variant:"h6",children:[i.fname," ",i.mname," ",i.lname]})]})}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:3}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:4,children:(0,z.jsxs)(a.Z,{direction:"row",spacing:2,children:[(0,z.jsx)(s.Z,{variant:"h5",align:"right",color:"primary",children:"Registration No:"}),(0,z.jsx)(s.Z,{variant:"h6",align:"right",children:i.registration_number})]})}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,z.jsx)(d.Z,{children:(0,z.jsx)(u.Z,{label:"Reintegration",color:"primary"})})}),(0,z.jsx)(r.ZP,{item:!0,xs:12,md:12,children:(0,z.jsx)(B,{})})]})})}}}]);