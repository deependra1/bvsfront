"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[758],{92758:function(e,t,i){i.r(t),i.d(t,{default:function(){return U}});var n=i(64611),r=i(29439),o=i(1413),a=i(45987),d=i(47313),s=i(9019),l=i(61113),c=i(42832),_=i(23306),h=i(49914),u=i(15480),m=i(16529),p=i(51405),f=i(69099),x=i(17592),g=i(94469),j=i(33604),Z=i(96467),v=i(4117),b=i(47131),y=i(11198),w=i(65954),P=i(51997),C=i(35099),D=i(58467),k=i(1010),B=i(75506),N=i(90842),R=i(7410),S=i(3463),z=i(45904),q=i(23208),F=i(333),M=i(10658),A=i.n(M),T=i(46417),W=["children","onClose"],E=(0,x.ZP)(g.Z)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}}));function Y(e){var t=e.children,i=e.onClose,n=(0,a.Z)(e,W);return(0,T.jsxs)(j.Z,(0,o.Z)((0,o.Z)({sx:{m:0,p:2}},n),{},{children:[t,i?(0,T.jsx)(b.Z,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,T.jsx)(y.Z,{})}):null]}))}function G(){var e=d.useState(!1),t=(0,r.Z)(e,2),i=t[0],n=t[1],o=(0,D.UO)().patientId,a=(0,N.Ds)().enqueueSnackbar,x=d.useState(o),g=(0,r.Z)(x,2),j=g[0],y=g[1],M=d.useState({}),W=(0,r.Z)(M,2),G=W[0],L=W[1],O=d.useState(""),U=(0,r.Z)(O,2),V=U[0],H=U[1];d.useEffect((function(){y(o)}),[o]);var I=(0,k.ZP)("/patient/".concat(j,"/treatment/"),B._,{revalidateOnMount:!0}),J=I.data,K=I.error,Q=I.isLoading,X=I.mutate,$=(0,k.ZP)("/hospital/",B._,{revalidateOnMount:!0}),ee=$.data,te=$.error,ie=$.isLoading,ne=[{field:"mode_of_transport",headerName:"Transport",width:150,editable:!0},{field:"distance",headerName:"Distance",width:150,editable:!0},{field:"hospital",headerName:"Hospital",width:150,editable:!0,valueGetter:function(e){return"".concat(e.row.hospital.hospital_name||"")}},{field:"doctor_name",headerName:"Doctor",width:150,editable:!0},{field:"hospitalized_date",headerName:"Hospitalized",width:150,editable:!0,valueGetter:function(e){return"".concat(e.row.hospitalized_date?A()(e.row.hospitalized_date).format("YYYY-MM-DD"):"")}},{field:"dischared_date",headerName:"Dischared",width:150,editable:!0,valueGetter:function(e){return"".concat(e.row.dischared_date?A()(e.row.dischared_date).format("YYYY-MM-DD"):"")}},{field:"expired_date",headerName:"Expired",width:150,editable:!0,valueGetter:function(e){return"".concat(e.row.expired_date?A()(e.row.expired_date).format("YYYY-MM-DD"):"")}},{field:"duration_of_stay",headerName:"Duration",width:150,editable:!0},{field:"no_of_surgery",headerName:"Surgery",width:150,editable:!0},{field:"no_of_skin_graft",headerName:"Skin Graft",width:150,editable:!0},{field:"no_of_debridement",headerName:"Debridement",width:150,editable:!0},{field:"no_of_amputation",headerName:"Amputation",width:150,editable:!0},{field:"no_of_dressing",headerName:"Dressing",width:150,editable:!0},{field:"no_of_nutritional",headerName:"Nutration",width:150,editable:!0},{field:"medical_support",headerName:"Medical",width:150,editable:!0},{field:"actions",headerName:"Actions",type:"actions",width:150,renderCell:function(e){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(b.Z,{onClick:function(){return oe(e)},sx:{color:"#9c27b0"},children:(0,T.jsx)(w.Z,{})}),(0,T.jsx)(b.Z,{onClick:function(){return ae(e.id)},sx:{color:"#f44336"},children:(0,T.jsx)(P.Z,{})})]})}}],re=function(){L({}),H(""),n(!1)},oe=function(e){L(e.row),H(e.row.hospital.id),n(!0)},ae=function(e){confirm("Are you sure to delete treatment data?")&&B.Z.delete("/patient/".concat(o,"/treatment/").concat(e,"/")).then((function(){a("Patient Deleted successfully!!!",{variant:"success"}),X()})).catch((function(){a("something wents wrong!!!",{variant:"error"})}))};return Q||ie?(0,T.jsx)("div",{children:"Loading..."}):K||te?(0,T.jsx)("div",{children:"Error on Data"}):(0,T.jsxs)("div",{children:[(0,T.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,T.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,T.jsx)(l.Z,{variant:"h3",gutterBottom:!0,children:"Treatment Detail"})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:6}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:2,children:(0,T.jsx)(f.Z,{variant:"outlined",onClick:function(){n(!0)},disabled:J.length>0,children:"Add Treatment"})})]}),(0,T.jsx)(C._,{rows:J,columns:ne,initialState:{pagination:{paginationModel:{pageSize:10}}},pageSizeOptions:[10],disableRowSelectionOnClick:!0}),(0,T.jsxs)(E,{onClose:re,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,T.jsx)(Y,{id:"customized-dialog-title",onClose:re,children:G.id?"Update Treatment Data":"Add Treatment Data"}),(0,T.jsx)(R.J9,{enableReinitialize:!0,initialValues:{patient:o,hospitalized_date:G.id?A()(G.hospitalized_date):null,hospital:V||"",doctor_name:(null===G||void 0===G?void 0:G.doctor_name)||"",dischared_date:G.id?A()(G.dischared_date):null,expired_date:G.id?A()(G.expired_date):null,mode_of_transport:(null===G||void 0===G?void 0:G.mode_of_transport)||"",distance:(null===G||void 0===G?void 0:G.distance)||null,time:(null===G||void 0===G?void 0:G.time)||null,duration_of_stay:(null===G||void 0===G?void 0:G.duration_of_stay)||null,no_of_surgery:(null===G||void 0===G?void 0:G.no_of_surgery)||null,no_of_skin_graft:(null===G||void 0===G?void 0:G.no_of_skin_graft)||null,no_of_debridement:(null===G||void 0===G?void 0:G.no_of_debridement)||null,no_of_amputation:(null===G||void 0===G?void 0:G.no_of_amputation)||null,no_of_dressing:(null===G||void 0===G?void 0:G.no_of_dressing)||null,no_of_nutritional:(null===G||void 0===G?void 0:G.no_of_nutritional)||null,medical_support:(null===G||void 0===G?void 0:G.medical_support)||null},validationSchema:S.Ry().shape({hospital:S.Z_().required("Required"),hospitalized_date:S.hT().typeError("Required").required("Required"),doctor_name:S.Z_().required("Required"),mode_of_transport:S.Z_().required("Required"),distance:S.Rx().positive().integer().notRequired().nullable(),time:S.Rx().positive().notRequired().nullable(),duration_of_stay:S.Rx().positive().integer().notRequired().nullable(),no_of_surgery:S.Rx().positive().integer().notRequired().nullable(),no_of_skin_graft:S.Rx().positive().integer().notRequired().nullable(),no_of_debridement:S.Rx().positive().integer().notRequired().nullable(),no_of_amputation:S.Rx().positive().integer().notRequired().nullable(),no_of_dressing:S.Rx().positive().integer().notRequired().nullable(),no_of_nutritional:S.Rx().positive().integer().notRequired().nullable(),medical_support:S.Rx().positive().integer().notRequired().nullable()}),onSubmit:function(e,t){var i=t.setErrors,r=t.setStatus,d=t.setSubmitting;e.duration_of_stay=A()(e.dischared_date||e.expired_date).diff(A()(e.hospitalized_date),"days"),G.id?B.Z.put("/patient/".concat(o,"/treatment/").concat(G.id,"/"),e).then((function(){a("Patient updated successfully!!!",{variant:"success"}),r({success:!1}),d(!1),X(),L({}),n(!1)})).catch((function(e){a("Something went wrong while adding the patient!!!",{variant:"error"}),r({success:!1}),i({submit:e.message}),d(!1)})):B.Z.post("/patient/".concat(o,"/treatment/"),e).then((function(){a("Patient added successfully!!!",{variant:"success"}),r({success:!1}),d(!1),X()})).catch((function(e){a("Something went wrong while adding the patient!!!",{variant:"error"}),r({success:!1}),i({submit:e.message}),d(!1)})),n(!1)},children:function(e){var t=e.errors,i=e.handleChange,n=e.handleSubmit,r=e.isSubmitting,o=e.touched,a=e.values,d=e.setFieldValue,l=e.handleBlur;return(0,T.jsxs)(R.l0,{noValidate:!0,children:[(0,T.jsx)(Z.Z,{dividers:!0,children:(0,T.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,T.jsx)(s.ZP,{item:!0,xs:12,md:2,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"mode_of_transport",children:"Mode of Transport*"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"mode_of_transport",type:"text",value:a.mode_of_transport,name:"mode_of_transport",onBlur:l,onChange:i,placeholder:"Mode of Transport",error:Boolean(o.mode_of_transport&&t.mode_of_transport)}),o.mode_of_transport&&t.mode_of_transport&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-mode_of_transport",children:t.mode_of_transport})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:2,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"distance",children:"Distance*"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"distance",type:"number",value:a.distance,name:"distance",onBlur:l,onChange:i,placeholder:"in km",error:Boolean(o.distance&&t.distance)}),o.distance&&t.distance&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-distance",children:t.distance})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:2,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"time",children:"Time*"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"time",type:"number",value:a.time,name:"time",onBlur:l,onChange:i,placeholder:"in hour",error:Boolean(o.time&&t.time)}),o.time&&t.time&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-time",children:t.time})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"hospital",children:"Hospital*"}),(0,T.jsx)(m.Z,{fullWidth:!0,labelId:"hospital",id:"hospital",value:a.hospital,name:"hospital",onChange:i,error:Boolean(o.hospital&&t.hospital),children:ee.map((function(e){return(0,T.jsx)(p.Z,{value:e.id,children:e.hospital_name},e.id)}))}),o.hospital&&t.hospital&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-hospital",children:t.hospital})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"doctor_name",children:"Doctor Name*"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"doctor_name",type:"text",value:a.doctor_name,name:"doctor_name",onBlur:l,onChange:i,placeholder:"Enter doctor_name name",error:Boolean(o.doctor_name&&t.doctor_name)}),o.doctor_name&&t.doctor_name&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-doctor_name",children:t.doctor_name})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"dob",children:"Admission Date at hospital*"}),(0,T.jsxs)(q._,{dateAdapter:z.y,children:[(0,T.jsx)(F.M,{name:"hospitalized_date",views:["year","month","day"],value:a.hospitalized_date,onChange:function(e){return d("hospitalized_date",e,!0)},error:Boolean(o.hospitalized_date&&t.hospitalized_date)}),o.hospitalized_date&&t.hospitalized_date&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-hospitalized_date",children:t.hospitalized_date})]})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"dischared_date",children:"Dischared Date*"}),(0,T.jsxs)(q._,{dateAdapter:z.y,children:[(0,T.jsx)(F.M,{name:"dischared_date",views:["year","month","day"],value:a.dischared_date,onChange:function(e){return d("dischared_date",e,!0)},error:Boolean(o.dischared_date&&t.dischared_date)}),o.dischared_date&&t.dischared_date&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-dischared_date",children:t.dischared_date})]})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"expired_date",children:"Expired Date"}),(0,T.jsx)(q._,{dateAdapter:z.y,children:(0,T.jsx)(F.M,{name:"expired_date",value:a.expired_date,onChange:function(e){return d("expired_date",e,!0)}})})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"duration_of_stay",children:"Duration of Stay*"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"duration_of_stay",type:"number",value:a.hospitalized_date&&(a.dischared_date||a.expired_date)&&A()(a.dischared_date||a.expired_date).diff(A()(a.hospitalized_date),"days"),name:"duration_of_stay",onBlur:l,onChange:i,placeholder:"in days",error:Boolean(o.duration_of_stay&&t.duration_of_stay),disabled:!0}),o.duration_of_stay&&t.duration_of_stay&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-duration_of_stay",children:t.duration_of_stay})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"no_of_surgery",children:"Number of Surgery"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"no_of_surgery",type:"number",value:a.no_of_surgery,name:"no_of_surgery",onBlur:l,onChange:i,placeholder:"Surgery",error:Boolean(o.no_of_surgery&&t.no_of_surgery)}),o.no_of_surgery&&t.no_of_surgery&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-no_of_surgery",children:t.no_of_surgery})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"no_of_skin_graft",children:"Number of Skin Graft"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"no_of_skin_graft",type:"number",value:a.no_of_skin_graft,name:"no_of_skin_graft",onBlur:l,onChange:i,placeholder:"Skin Graft",error:Boolean(o.no_of_skin_graft&&t.no_of_skin_graft)}),o.no_of_skin_graft&&t.no_of_skin_graft&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-no_of_skin_graft",children:t.no_of_skin_graft})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"no_of_debridement",children:"Number of Debridement"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"no_of_debridement",type:"number",value:a.no_of_debridement,name:"no_of_debridement",onBlur:l,onChange:i,placeholder:"Debridement",error:Boolean(o.no_of_debridement&&t.no_of_debridement)}),o.no_of_debridement&&t.no_of_debridement&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-no_of_debridement",children:t.no_of_debridement})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"no_of_amputation",children:"Number of Amputation"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"no_of_amputation",type:"number",value:a.no_of_amputation,name:"no_of_amputation",onBlur:l,onChange:i,placeholder:"Amputation",error:Boolean(o.no_of_amputation&&t.no_of_amputation)}),o.no_of_amputation&&t.no_of_amputation&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-no_of_amputation",children:t.no_of_amputation})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"no_of_dressing",children:"Number of Dressing"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"no_of_dressing",type:"number",value:a.no_of_dressing,name:"no_of_dressing",onBlur:l,onChange:i,placeholder:"Dressing",error:Boolean(o.no_of_dressing&&t.no_of_dressing)}),o.no_of_dressing&&t.no_of_dressing&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-no_of_dressing",children:t.no_of_dressing})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"no_of_nutritional",children:"Number of Nutrational"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"no_of_nutritional",type:"number",value:a.no_of_nutritional,name:"no_of_nutritional",onBlur:l,onChange:i,placeholder:"Nutrational",error:Boolean(o.no_of_nutritional&&t.no_of_nutritional)}),o.no_of_nutritional&&t.no_of_nutritional&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-no_of_nutritional",children:t.no_of_nutritional})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,T.jsxs)(c.Z,{spacing:1,children:[(0,T.jsx)(_.Z,{htmlFor:"medical_support",children:"Medical Support"}),(0,T.jsx)(h.Z,{fullWidth:!0,id:"medical_support",type:"number",value:a.medical_support,name:"medical_support",onBlur:l,onChange:i,placeholder:"Medical Support",error:Boolean(o.medical_support&&t.medical_support)}),o.medical_support&&t.medical_support&&(0,T.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-medical_support",children:t.medical_support})]})})]})}),(0,T.jsxs)(v.Z,{children:[(0,T.jsx)(f.Z,{autoFocus:!0,variant:"outlined",disableElevation:!0,disabled:r,onClick:n,color:"primary",children:G.id?"Update":"Save"}),(0,T.jsx)(f.Z,{autoFocus:!0,variant:"outlined",color:"error",onClick:re,children:"Cancel"})]})]})}})]})]})}var L=i(19536),O=i(66212),U=function(){var e=(0,D.UO)().patientId,t=(0,k.ZP)("/patient/".concat(e,"/"),B._),i=t.data,r=t.error;return t.isLoading?(0,T.jsx)("div",{children:"Loading..."}):r?(0,T.jsx)("div",{children:"Error on Treatment"}):(0,T.jsx)(n.Z,{title:"Patients Treatment Detail",children:(0,T.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,T.jsx)(s.ZP,{item:!0,xs:12,md:12,children:(0,T.jsx)(l.Z,{variant:"h1",align:"center",children:"BVS-NEPAL"})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:12,children:(0,T.jsx)(l.Z,{variant:"h3",align:"center",children:i.registration_location})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:5,children:(0,T.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(l.Z,{variant:"h5",color:"primary",children:"Patient Name:"}),(0,T.jsxs)(l.Z,{variant:"h6",children:[i.fname," ",i.mname," ",i.lname]})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:3}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,T.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(l.Z,{variant:"h5",align:"right",color:"primary",children:"Registration No:"}),(0,T.jsx)(l.Z,{variant:"h6",align:"right",children:i.registration_number})]})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:12,children:(0,T.jsx)(L.Z,{children:(0,T.jsx)(O.Z,{label:"TREATMENT",color:"primary"})})}),(0,T.jsx)(s.ZP,{item:!0,xs:12,md:12,children:(0,T.jsx)(G,{})})]})})}}}]);