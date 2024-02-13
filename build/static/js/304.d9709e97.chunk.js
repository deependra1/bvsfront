"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[304],{49304:function(e,n,i){i.r(n),i.d(n,{default:function(){return R}});var o=i(64611),l=i(9019),r=i(61113),t=i(42832),a=i(58467),s=i(1010),d=i(75506),c=i(19536),u=i(66212),h=i(29439),m=i(1413),_=i(45987),f=i(47313),p=i(23306),x=i(24631),w=i(15480),g=i(16529),Z=i(51405),j=i(49914),v=i(69099),y=i(17592),b=i(94469),C=i(33604),P=i(96467),S=i(4117),B=i(47131),F=i(11198),N=i(65954),E=i(51997),k=i(35099),D=i(90842),A=i(7410),W=i(3463),I=i(46417),O=["children","onClose"],q=(0,y.ZP)(b.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function L(e){var n=e.children,i=e.onClose,o=(0,_.Z)(e,O);return(0,I.jsxs)(C.Z,(0,m.Z)((0,m.Z)({sx:{m:0,p:2}},o),{},{children:[n,i?(0,I.jsx)(B.Z,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,I.jsx)(F.Z,{})}):null]}))}function M(){var e=f.useState(!1),n=(0,h.Z)(e,2),i=n[0],o=n[1],c=(0,a.UO)().patientId,u=(0,D.Ds)().enqueueSnackbar,m=f.useState(c),_=(0,h.Z)(m,2),y=_[0],b=_[1],C=f.useState({}),F=(0,h.Z)(C,2),O=F[0],M=F[1],R=f.useState(""),z=(0,h.Z)(R,2),H=z[0],U=z[1];f.useEffect((function(){b(c)}),[c]);var V=(0,s.ZP)("/patient/".concat(y,"/pshychosocial/"),d._,{revalidateOnMount:!0}),T=V.data,G=V.error,J=V.isLoading,Y=V.mutate,K=(0,s.ZP)("/follow-up-summary/",d._,{revalidateOnMount:!0}),Q=K.data,X=K.error,$=K.isLoading,ee=[{field:"client_history",headerName:"Client History",width:100,editable:!0},{field:"client_complain",headerName:"Client Complain",width:100,editable:!0},{field:"intervention",headerName:"Intervention",width:100,editable:!0},{field:"changes_after_intervention",headerName:"Changes After Intervention",width:100,editable:!0},{field:"detailed_followup_report",headerName:"Detailed Followup Report",width:100,editable:!0},{field:"followup_summary",headerName:"Followup Summary",width:100,editable:!0,valueGetter:function(e){return"".concat(e.row.followup_summary.follow_up_summary||"")}},{field:"mode_of_followup",headerName:"Mode of Followup",width:100,editable:!0},{field:"followed_by",headerName:"Followed By",width:100,editable:!0},{field:"number_of_counseling",headerName:"Number of Counseling",width:100,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:100,renderCell:function(e){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(B.Z,{onClick:function(){return ie(e)},sx:{color:"#9c27b0"},children:(0,I.jsx)(N.Z,{})}),(0,I.jsx)(B.Z,{onClick:function(){return oe(e.id)},sx:{color:"#f44336"},children:(0,I.jsx)(E.Z,{})})]})}}],ne=function(){M({}),U(""),o(!1)},ie=function(e){M(e.row),U(e.row.followup_summary.id),o(!0)},oe=function(e){confirm("Are you sure to delete pshychosocial data?")&&d.Z.delete("/patient/".concat(c,"/pshychosocial/").concat(e,"/")).then((function(){u("pshychosocial Deleted successfully!!!",{variant:"success"}),Y()})).catch((function(){u("something wents wrong!!!",{variant:"error"})}))};return J||$?(0,I.jsx)("div",{children:"Loading..."}):G||X?(0,I.jsx)("div",{children:"Error on Treatment"}):(0,I.jsxs)("div",{children:[(0,I.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,I.jsx)(r.Z,{variant:"h3",gutterBottom:!0,children:"Pshychosocial Detail"})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:2,children:(0,I.jsx)(v.Z,{variant:"outlined",onClick:function(){o(!0)},disabled:T.length>0,children:"Add Pshychosocial"})})]}),(0,I.jsx)(k._,{rows:T,columns:ee,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0}),(0,I.jsxs)(q,{onClose:ne,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,I.jsx)(L,{id:"customized-dialog-title",onClose:ne,children:O.id?"Update Pshyosocial Data":"Add Pshyosocial Data"}),(0,I.jsx)(A.J9,{enableReinitialize:!0,initialValues:{patient:c,client_history:(null===O||void 0===O?void 0:O.client_history)||"",client_complain:(null===O||void 0===O?void 0:O.client_complain)||"",intervention:(null===O||void 0===O?void 0:O.intervention)||"",changes_after_intervention:(null===O||void 0===O?void 0:O.changes_after_intervention)||"",detailed_followup_report:(null===O||void 0===O?void 0:O.detailed_followup_report)||"",followup_summary:H||"",mode_of_followup:(null===O||void 0===O?void 0:O.mode_of_followup)||"",followed_by:(null===O||void 0===O?void 0:O.followed_by)||"",number_of_counseling:(null===O||void 0===O?void 0:O.number_of_counseling)||""},validationSchema:W.Ry().shape({client_history:W.Z_().required("Client History is required"),followup_summary:W.Z_().required("Followup Summary is required"),number_of_counseling:W.Rx().typeError().required("Number of counseling is required")}),onSubmit:function(e,n){var i=n.setErrors,l=n.setStatus,r=n.setSubmitting;O.id?d.Z.put("/patient/".concat(c,"/pshychosocial/").concat(O.id,"/"),e).then((function(){u("pshychosocial updated successfully!!!",{variant:"success"}),l({success:!1}),r(!1),Y(),M({}),U("")})).catch((function(e){u("Something went wrong while adding the pshychosocial!!!",{variant:"error"}),l({success:!1}),i({submit:e.message}),r(!1)})):d.Z.post("/patient/".concat(c,"/pshychosocial/"),e).then((function(){u("Patient added successfully!!!",{variant:"success"}),l({success:!1}),r(!1),Y()})).catch((function(e){u("Something went wrong while adding the patient!!!",{variant:"error"}),l({success:!1}),i({submit:e.message}),r(!1)})),o(!1)},children:function(e){var n=e.errors,i=e.handleChange,o=e.handleSubmit,r=e.isSubmitting,a=e.touched,s=e.values,d=e.handleBlur;return(0,I.jsxs)(A.l0,{noValidate:!0,children:[(0,I.jsx)(P.Z,{dividers:!0,children:(0,I.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"client_history",children:"Client History"}),(0,I.jsx)(x.Z,{fullWidth:!0,multiline:!0,rows:3,value:s.client_history,name:"client_history",onBlur:d,onChange:i,placeholder:"Enter client_history name",error:Boolean(a.client_history&&n.client_history)}),a.client_history&&n.client_history&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-client_history",children:n.client_history})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"client_complain",children:"Client Complain"}),(0,I.jsx)(x.Z,{fullWidth:!0,multiline:!0,rows:3,value:s.client_complain,name:"client_complain",onBlur:d,onChange:i,placeholder:"Enter client_complain name",error:Boolean(a.client_complain&&n.client_complain)}),a.client_complain&&n.client_complain&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-client_complain",children:n.client_complain})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"intervention",children:"Intervention"}),(0,I.jsx)(x.Z,{fullWidth:!0,multiline:!0,rows:3,value:s.intervention,name:"intervention",onBlur:d,onChange:i,placeholder:"Enter intervention name",error:Boolean(a.intervention&&n.intervention)}),a.intervention&&n.intervention&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-intervention",children:n.intervention})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"changes_after_intervention",children:" Changes After Intervention"}),(0,I.jsx)(x.Z,{fullWidth:!0,multiline:!0,rows:3,value:s.changes_after_intervention,name:"changes_after_intervention",onBlur:d,onChange:i,placeholder:"Enter changes_after_intervention name",error:Boolean(a.changes_after_intervention&&n.changes_after_intervention)}),a.changes_after_intervention&&n.changes_after_intervention&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-changes_after_intervention",children:n.changes_after_intervention})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"detailed_followup_report",children:"Detailed Followup Report"}),(0,I.jsx)(x.Z,{fullWidth:!0,multiline:!0,rows:3,value:s.detailed_followup_report,name:"detailed_followup_report",onBlur:d,onChange:i,placeholder:"Enter detailed_followup_report name",error:Boolean(a.detailed_followup_report&&n.detailed_followup_report)}),a.detailed_followup_report&&n.detailed_followup_report&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-detailed_followup_report",children:n.detailed_followup_report})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"mode_of_followup",children:" Mode of Followup"}),(0,I.jsx)(x.Z,{fullWidth:!0,multiline:!0,rows:3,value:s.mode_of_followup,name:"mode_of_followup",onBlur:d,onChange:i,placeholder:"Enter mode_of_followup name",error:Boolean(a.mode_of_followup&&n.mode_of_followup)}),a.mode_of_followup&&n.mode_of_followup&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-mode_of_followup",children:n.mode_of_followup})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"followup_summary",children:"Followup Summary"}),(0,I.jsx)(g.Z,{fullWidth:!0,labelId:"followup_summary",id:"followup_summary",value:s.followup_summary,name:"followup_summary",onChange:i,error:Boolean(a.followup_summary&&n.followup_summary),children:Q.map((function(e){return(0,I.jsx)(Z.Z,{value:e.id,children:e.follow_up_summary},e.id)}))}),a.followup_summary&&n.followup_summary&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-followup_summary",children:n.followup_summary})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"followed_by",children:"Followed By"}),(0,I.jsx)(j.Z,{fullWidth:!0,id:"followed_by",type:"text",value:s.followed_by,name:"followed_by",onBlur:d,onChange:i,placeholder:"Enter followed_by name",error:Boolean(a.followed_by&&n.followed_by)}),a.followed_by&&n.followed_by&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-followed_by",children:n.followed_by})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,I.jsxs)(t.Z,{spacing:1,children:[(0,I.jsx)(p.Z,{htmlFor:"number_of_counseling",children:"Number of Counseling"}),(0,I.jsx)(j.Z,{fullWidth:!0,id:"number_of_counseling",type:"number",value:s.number_of_counseling,name:"number_of_counseling",onBlur:d,onChange:i,placeholder:"Number of Counseling",error:Boolean(a.number_of_counseling&&n.number_of_counseling)}),a.number_of_counseling&&n.number_of_counseling&&(0,I.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-number_of_counseling",children:n.number_of_counseling})]})})]})}),(0,I.jsxs)(S.Z,{children:[(0,I.jsx)(v.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:r,onClick:o,color:"primary",children:O.id?"Update":"Save"}),(0,I.jsx)(v.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:ne,children:"Cancel"})]})]})}})]})]})}var R=function(){var e=(0,a.UO)().patientId,n=(0,s.ZP)("/patient/".concat(e,"/"),d._),i=n.data,h=n.error;return n.isLoading?(0,I.jsx)("div",{children:"Loading..."}):h?(0,I.jsx)("div",{children:"Error on Treatment"}):(0,I.jsx)(o.Z,{title:"Patients Phychosocial Detail",children:(0,I.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(r.Z,{variant:"h1",align:"center",children:"BVS-NEPAL"})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(r.Z,{variant:"h3",align:"center",children:i.registration_location})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:5,children:(0,I.jsxs)(t.Z,{direction:"row",spacing:2,children:[(0,I.jsx)(r.Z,{variant:"h5",color:"primary",children:"Patient Name:"}),(0,I.jsxs)(r.Z,{variant:"h6",children:[i.fname," ",i.mname," ",i.lname]})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:3}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,I.jsxs)(t.Z,{direction:"row",spacing:2,children:[(0,I.jsx)(r.Z,{variant:"h5",align:"right",color:"primary",children:"Registration No:"}),(0,I.jsx)(r.Z,{variant:"h6",align:"right",children:i.registration_number})]})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(c.Z,{children:(0,I.jsx)(u.Z,{label:"PHYCHOSOCIAL",color:"primary"})})}),(0,I.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(M,{})})]})})}}}]);