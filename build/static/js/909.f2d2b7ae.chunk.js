"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[909],{80909:function(e,i,n){n.r(i),n.d(i,{default:function(){return w}});var r=n(9019),s=n(42832),t=n(61113),a=n(46475),l=n(74165),c=n(15861),o=(n(47313),n(2135)),d=n(23306),u=n(49914),m=n(15480),h=n(90891),x=n(69099),p=n(3463),j=n(7410),f=n(88983),g=n(56573),Z=n(90842),b=n(46417),v=function(){var e=(0,Z.Ds)().enqueueSnackbar;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(j.J9,{initialValues:{email:"",submit:null},validationSchema:p.Ry().shape({email:p.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var i=(0,c.Z)((0,l.Z)().mark((function i(n,r){var s,t,a;return(0,l.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:s=r.setErrors,t=r.setStatus,a=r.setSubmitting,g.Z.post("https://bvsnepal.org/api/auth/forgot-password/forgot_password/",n).then((function(){e("Password reset email send successfully!!!",{variant:"success"}),t({success:!1}),a(!1)})).catch((function(i){e("Something went wrong !!!",{variant:"error"}),t({success:!1}),s({submit:i.request.response}),a(!1)}));case 2:case"end":return i.stop()}}),i)})));return function(e,n){return i.apply(this,arguments)}}(),children:function(e){var i=e.errors,n=e.handleBlur,t=e.handleChange,a=e.handleSubmit,l=e.isSubmitting,c=e.touched,p=e.values;return(0,b.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,b.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,b.jsx)(r.ZP,{item:!0,xs:12,children:(0,b.jsxs)(s.Z,{spacing:1,children:[(0,b.jsx)(d.Z,{htmlFor:"email-login",children:"Email Address"}),(0,b.jsx)(u.Z,{id:"email-login",type:"email",value:p.email,name:"email",onBlur:n,onChange:t,placeholder:"Enter email address",fullWidth:!0,error:Boolean(c.email&&i.email)}),c.email&&i.email&&(0,b.jsx)(m.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:i.email})]})}),(0,b.jsx)(r.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,b.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,b.jsx)("div",{}),(0,b.jsx)(h.Z,{variant:"h6",component:o.rU,to:"/login",color:"text.primary",children:"Back to login"})]})}),i.submit&&(0,b.jsx)(r.ZP,{item:!0,xs:12,children:(0,b.jsx)(m.Z,{error:!0,children:i.submit})}),(0,b.jsx)(r.ZP,{item:!0,xs:12,children:(0,b.jsx)(f.Z,{children:(0,b.jsx)(x.Z,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Forget"})})})]})})}})})},w=function(){return(0,b.jsx)(a.Z,{children:(0,b.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,b.jsx)(r.ZP,{item:!0,xs:12,children:(0,b.jsx)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,b.jsx)(t.Z,{variant:"h3",children:"Forget Password"})})}),(0,b.jsx)(r.ZP,{item:!0,xs:12,children:(0,b.jsx)(v,{})})]})})}}}]);