"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[243],{75243:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var i=r(9019),s=r(42832),a=r(61113),t=r(74165),l=r(15861),o=r(29439),c=r(47313),d=r(2135),u=r(23306),m=r(49914),h=r(15480),x=r(41727),p=r(47131),Z=r(83929),f=r(44758),g=r(90891),j=r(69099),w=r(3463),v=r(7410),b=r(88983),y=r(31741),C=r(44874),z=r(77287),P=r(46417),_=function(){var e=c.useState(!1),n=(0,o.Z)(e,2),r=n[0],_=n[1],E=(0,z._y)(),k=c.useState(!1),q=(0,o.Z)(k,2),S=q[0],L=q[1],B=function(){L(!S)},M=function(e){e.preventDefault()};return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(v.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:w.Ry().shape({email:w.Z_().email("Must be a valid email").max(255).required("Email is required"),password:w.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,l.Z)((0,t.Z)().mark((function e(n,r){var i,s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.setErrors,s=r.setStatus,a=r.setSubmitting;try{E.login(n).catch((function(e){e.message&&i(e.request.response)})),s({success:!1}),a(!1)}catch(t){s({success:!1}),i({submit:t.message}),a(!1)}case 2:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,l=e.handleChange,o=e.handleSubmit,c=e.isSubmitting,w=e.touched,v=e.values;return(0,P.jsx)("form",{noValidate:!0,onSubmit:o,children:(0,P.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,P.jsx)(i.ZP,{item:!0,xs:12,children:(0,P.jsxs)(s.Z,{spacing:1,children:[(0,P.jsx)(u.Z,{htmlFor:"email-login",children:"Email Address"}),(0,P.jsx)(m.Z,{id:"email-login",type:"email",value:v.email,name:"email",onBlur:t,onChange:l,placeholder:"Enter email address",fullWidth:!0,error:Boolean(w.email&&n.email)}),w.email&&n.email&&(0,P.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,P.jsx)(i.ZP,{item:!0,xs:12,children:(0,P.jsxs)(s.Z,{spacing:1,children:[(0,P.jsx)(u.Z,{htmlFor:"password-login",children:"Password"}),(0,P.jsx)(m.Z,{fullWidth:!0,error:Boolean(w.password&&n.password),id:"-password-login",type:S?"text":"password",value:v.password,name:"password",onBlur:t,onChange:l,endAdornment:(0,P.jsx)(x.Z,{position:"end",children:(0,P.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:B,onMouseDown:M,edge:"end",size:"large",children:S?(0,P.jsx)(y.Z,{}):(0,P.jsx)(C.Z,{})})}),placeholder:"Enter password"}),w.password&&n.password&&(0,P.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]})}),(0,P.jsx)(i.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,P.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,P.jsx)(Z.Z,{control:(0,P.jsx)(f.Z,{checked:r,onChange:function(e){return _(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,P.jsx)(a.Z,{variant:"h6",children:"Keep me sign in"})}),(0,P.jsx)(g.Z,{variant:"h6",component:d.rU,to:"/forget-password",color:"text.primary",children:"Forgot Password?"})]})}),n.submit&&(0,P.jsx)(i.ZP,{item:!0,xs:12,children:(0,P.jsx)(h.Z,{error:!0,children:n.submit})}),(0,P.jsx)(i.ZP,{item:!0,xs:12,children:(0,P.jsx)(b.Z,{children:(0,P.jsx)(j.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})}})})},E=r(46475),k=function(){return(0,P.jsx)(E.Z,{children:(0,P.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,P.jsx)(i.ZP,{item:!0,xs:12,children:(0,P.jsx)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,P.jsx)(a.Z,{variant:"h3",children:"Login"})})}),(0,P.jsx)(i.ZP,{item:!0,xs:12,children:(0,P.jsx)(_,{})})]})})}},44874:function(e,n,r){r.d(n,{Z:function(){return o}});var i=r(1413),s=r(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},t=r(20262),l=function(e,n){return s.createElement(t.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};l.displayName="EyeInvisibleOutlined";var o=s.forwardRef(l)},31741:function(e,n,r){r.d(n,{Z:function(){return o}});var i=r(1413),s=r(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},t=r(20262),l=function(e,n){return s.createElement(t.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};l.displayName="EyeOutlined";var o=s.forwardRef(l)}}]);