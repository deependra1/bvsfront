(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[927],{88983:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(63866),o=r(46417);function a(e){var t=e.children;e.type;return(0,o.jsx)(n.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}a.defaultProps={type:"scale"}},75506:function(e,t,r){"use strict";r.d(t,{_:function(){return u}});var n=r(74165),o=r(15861),a=r(56573),s=r(65470),i=r.n(s),c=r(77287),l=a.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});l.interceptors.request.use(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers.Authorization="Bearer ".concat((0,c.hP)()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var d=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.Z.post("/auth/refresh/",{refresh:(0,c.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var r=e.data.access;t.response.config.headers.Authorization="Bearer "+r,localStorage.setItem("auth",JSON.stringify({access:r,refresh:(0,c.YV)(),user:(0,c.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function u(e){return l.get(e).then((function(e){return e.data}))}i()(l,d),t.Z=l},44927:function(e,t,r){"use strict";r.r(t);var n=r(74165),o=r(15861),a=r(29439),s=r(47313),i=r(9019),c=r(42832),l=r(23306),d=r(49914),u=r(41727),p=r(47131),h=r(15480),f=r(69099),v=r(3463),m=r(7410),x=r(88983),g=r(90842),w=r(31741),Z=r(44874),b=r(77287),y=r(9478),S=r(75506),I=r(46417);t.default=function(){var e=s.useState(!1),t=(0,a.Z)(e,2),r=t[0],C=t[1],z=(0,b._y)(),_=(0,b.PR)(),j=(0,g.Ds)().enqueueSnackbar,R=function(){C(!r)},k=function(e){e.preventDefault()};return console.log(_),(0,I.jsx)(y.Z,{title:"Sample Card",children:(0,I.jsx)(m.J9,{initialValues:{old_password:"",new_password:"",retype_password:"",submit:null},validationSchema:v.Ry().shape({old_password:v.Z_().max(255).required("Password is required"),new_password:v.Z_().max(255).required("Password is required"),retype_password:v.Z_().max(255).label("confirm password").required().oneOf([v.iH("new_password"),null],"Passwords must match")}),onSubmit:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var o,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.setErrors,a=r.setStatus,s=r.setSubmitting,S.Z.put("/auth/password-change/".concat(_.id,"/"),t).then((function(){j("Password changes successfully!!!",{variant:"success"}),a({success:!1}),s(!1),z.logout()})).catch((function(e){j("Something went wrong while adding !!",{variant:"error"}),a({success:!1}),o({submit:e.message}),s(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.handleBlur,o=e.handleChange,a=e.handleSubmit,s=e.isSubmitting,v=e.touched,m=e.values;return(0,I.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,I.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(c.Z,{spacing:1,children:[(0,I.jsx)(l.Z,{htmlFor:"old_password",children:"Old Password"}),(0,I.jsx)(d.Z,{fullWidth:!0,error:Boolean(v.old_password&&t.old_password),id:"-old_password",type:r?"text":"password",value:m.old_password,name:"old_password",onBlur:n,onChange:o,endAdornment:(0,I.jsx)(u.Z,{position:"end",children:(0,I.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:k,edge:"end",size:"large",children:r?(0,I.jsx)(w.Z,{}):(0,I.jsx)(Z.Z,{})})}),placeholder:"Enter old password"}),v.old_password&&t.old_password&&(0,I.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-old_password",children:t.old_password})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(c.Z,{spacing:1,children:[(0,I.jsx)(l.Z,{htmlFor:"new_password",children:"New Password"}),(0,I.jsx)(d.Z,{fullWidth:!0,error:Boolean(v.new_password&&t.new_password),id:"-new_password",type:r?"text":"password",value:m.new_password,name:"new_password",onBlur:n,onChange:o,endAdornment:(0,I.jsx)(u.Z,{position:"end",children:(0,I.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:k,edge:"end",size:"large",children:r?(0,I.jsx)(w.Z,{}):(0,I.jsx)(Z.Z,{})})}),placeholder:"Enter new password"}),v.new_password&&t.new_password&&(0,I.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-new_password",children:t.new_password})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(c.Z,{spacing:1,children:[(0,I.jsx)(l.Z,{htmlFor:"retype_password",children:"Retype Password"}),(0,I.jsx)(d.Z,{fullWidth:!0,error:Boolean(v.retype_password&&t.retype_password),id:"-retype_password",type:r?"text":"password",value:m.retype_password,name:"retype_password",onBlur:n,onChange:o,endAdornment:(0,I.jsx)(u.Z,{position:"end",children:(0,I.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:k,edge:"end",size:"large",children:r?(0,I.jsx)(w.Z,{}):(0,I.jsx)(Z.Z,{})})}),placeholder:"Retype password"}),v.retype_password&&t.retype_password&&(0,I.jsx)(h.Z,{error:!0,id:"standard-weight-helper-text-retype_password",children:t.retype_password})]})}),t.submit&&(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsx)(h.Z,{error:!0,children:t.submit})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsx)(x.Z,{children:(0,I.jsx)(f.Z,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Change Password"})})})]})})}})})}},69099:function(e,t,r){"use strict";r.d(t,{Z:function(){return z}});var n=r(45987),o=r(4942),a=r(1413),s=r(47313),i=r(83061),c=r(29023),l=r(21921),d=r(17551),u=r(17592),p=r(77342),h=r(38743),f=r(91615),v=r(77430),m=r(32298);function x(e){return(0,m.Z)("MuiButton",e)}var g=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var w=s.createContext({}),Z=r(46417),b=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=function(e){return(0,a.Z)((0,a.Z)((0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}}),"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}}),"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},S=(0,u.ZP)(h.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["".concat(r.variant).concat((0,f.Z)(r.color))],t["size".concat((0,f.Z)(r.size))],t["".concat(r.variant,"Size").concat((0,f.Z)(r.size))],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})((function(e){var t,r,n,s=e.theme,i=e.ownerState,c="light"===s.palette.mode?s.palette.grey[300]:s.palette.grey[800],l="light"===s.palette.mode?s.palette.grey.A100:s.palette.grey[700];return(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},s.typography.button),{},(t={minWidth:64,padding:"6px 16px",borderRadius:(s.vars||s).shape.borderRadius,transition:s.transitions.create(["background-color","box-shadow","border-color","color"],{duration:s.transitions.duration.short}),"&:hover":(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({textDecoration:"none",backgroundColor:s.vars?"rgba(".concat(s.vars.palette.text.primaryChannel," / ").concat(s.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(s.palette.text.primary,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===i.variant&&"inherit"!==i.color&&{backgroundColor:s.vars?"rgba(".concat(s.vars.palette[i.color].mainChannel," / ").concat(s.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(s.palette[i.color].main,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),"outlined"===i.variant&&"inherit"!==i.color&&{border:"1px solid ".concat((s.vars||s).palette[i.color].main),backgroundColor:s.vars?"rgba(".concat(s.vars.palette[i.color].mainChannel," / ").concat(s.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(s.palette[i.color].main,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),"contained"===i.variant&&{backgroundColor:s.vars?s.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(s.vars||s).shadows[4],"@media (hover: none)":{boxShadow:(s.vars||s).shadows[2],backgroundColor:(s.vars||s).palette.grey[300]}}),"contained"===i.variant&&"inherit"!==i.color&&{backgroundColor:(s.vars||s).palette[i.color].dark,"@media (hover: none)":{backgroundColor:(s.vars||s).palette[i.color].main}}),"&:active":(0,a.Z)({},"contained"===i.variant&&{boxShadow:(s.vars||s).shadows[8]})},(0,o.Z)(t,"&.".concat(g.focusVisible),(0,a.Z)({},"contained"===i.variant&&{boxShadow:(s.vars||s).shadows[6]})),(0,o.Z)(t,"&.".concat(g.disabled),(0,a.Z)((0,a.Z)({color:(s.vars||s).palette.action.disabled},"outlined"===i.variant&&{border:"1px solid ".concat((s.vars||s).palette.action.disabledBackground)}),"contained"===i.variant&&{color:(s.vars||s).palette.action.disabled,boxShadow:(s.vars||s).shadows[0],backgroundColor:(s.vars||s).palette.action.disabledBackground})),t),"text"===i.variant&&{padding:"6px 8px"}),"text"===i.variant&&"inherit"!==i.color&&{color:(s.vars||s).palette[i.color].main}),"outlined"===i.variant&&{padding:"5px 15px",border:"1px solid currentColor"}),"outlined"===i.variant&&"inherit"!==i.color&&{color:(s.vars||s).palette[i.color].main,border:s.vars?"1px solid rgba(".concat(s.vars.palette[i.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(s.palette[i.color].main,.5))}),"contained"===i.variant&&{color:s.vars?s.vars.palette.text.primary:null==(r=(n=s.palette).getContrastText)?void 0:r.call(n,s.palette.grey[300]),backgroundColor:s.vars?s.vars.palette.Button.inheritContainedBg:c,boxShadow:(s.vars||s).shadows[2]}),"contained"===i.variant&&"inherit"!==i.color&&{color:(s.vars||s).palette[i.color].contrastText,backgroundColor:(s.vars||s).palette[i.color].main}),"inherit"===i.color&&{color:"inherit",borderColor:"currentColor"}),"small"===i.size&&"text"===i.variant&&{padding:"4px 5px",fontSize:s.typography.pxToRem(13)}),"large"===i.size&&"text"===i.variant&&{padding:"8px 11px",fontSize:s.typography.pxToRem(15)}),"small"===i.size&&"outlined"===i.variant&&{padding:"3px 9px",fontSize:s.typography.pxToRem(13)}),"large"===i.size&&"outlined"===i.variant&&{padding:"7px 21px",fontSize:s.typography.pxToRem(15)}),"small"===i.size&&"contained"===i.variant&&{padding:"4px 10px",fontSize:s.typography.pxToRem(13)}),"large"===i.size&&"contained"===i.variant&&{padding:"8px 22px",fontSize:s.typography.pxToRem(15)}),i.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,o.Z)(t,"&:active",{boxShadow:"none"}),(0,o.Z)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),I=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var r=e.ownerState;return[t.startIcon,t["iconSize".concat((0,f.Z)(r.size))]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2}),y(t))})),C=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var r=e.ownerState;return[t.endIcon,t["iconSize".concat((0,f.Z)(r.size))]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2}),y(t))})),z=s.forwardRef((function(e,t){var r=s.useContext(w),o=(0,c.Z)(r,e),d=(0,p.Z)({props:o,name:"MuiButton"}),u=d.children,h=d.color,v=void 0===h?"primary":h,m=d.component,g=void 0===m?"button":m,y=d.className,z=d.disabled,_=void 0!==z&&z,j=d.disableElevation,R=void 0!==j&&j,k=d.disableFocusRipple,P=void 0!==k&&k,q=d.endIcon,E=d.focusVisibleClassName,W=d.fullWidth,B=void 0!==W&&W,O=d.size,M=void 0===O?"medium":O,F=d.startIcon,N=d.type,T=d.variant,V=void 0===T?"text":T,L=(0,n.Z)(d,b),A=(0,a.Z)((0,a.Z)({},d),{},{color:v,component:g,disabled:_,disableElevation:R,disableFocusRipple:P,fullWidth:B,size:M,type:N,variant:V}),Q=function(e){var t=e.color,r=e.disableElevation,n=e.fullWidth,o=e.size,s=e.variant,i=e.classes,c={root:["root",s,"".concat(s).concat((0,f.Z)(t)),"size".concat((0,f.Z)(o)),"".concat(s,"Size").concat((0,f.Z)(o)),"inherit"===t&&"colorInherit",r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,f.Z)(o))],endIcon:["endIcon","iconSize".concat((0,f.Z)(o))]},d=(0,l.Z)(c,x,i);return(0,a.Z)((0,a.Z)({},i),d)}(A),D=F&&(0,Z.jsx)(I,{className:Q.startIcon,ownerState:A,children:F}),H=q&&(0,Z.jsx)(C,{className:Q.endIcon,ownerState:A,children:q});return(0,Z.jsxs)(S,(0,a.Z)((0,a.Z)({ownerState:A,className:(0,i.Z)(r.className,Q.root,y),component:g,disabled:_,focusRipple:!P,focusVisibleClassName:(0,i.Z)(Q.focusVisible,E),ref:t,type:N},L),{},{classes:Q,children:[D,u,H]}))}))},65470:function(e,t,r){var n;e.exports=(n=r(44411),function(){"use strict";var e={593:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.resendFailedRequest=t.getRetryInstance=t.unsetCache=t.createRequestQueueInterceptor=t.createRefreshCall=t.shouldInterceptError=t.mergeOptions=t.defaultOptions=void 0;var n=r(300);t.defaultOptions={statusCodes:[401],pauseInstanceWhileRefreshing:!1},t.mergeOptions=function(e,t){return Object.assign(Object.assign(Object.assign({},e),{pauseInstanceWhileRefreshing:t.skipWhileRefreshing}),t)},t.shouldInterceptError=function(e,t,r,n){var o,a;return!!e&&!(null===(o=e.config)||void 0===o?void 0:o.skipAuthRefresh)&&!!(t.interceptNetworkError&&!e.response&&0===e.request.status||e.response&&((null==t?void 0:t.shouldRefresh)?t.shouldRefresh(e):null===(a=t.statusCodes)||void 0===a?void 0:a.includes(parseInt(e.response.status))))&&(e.response||(e.response={config:e.config}),!t.pauseInstanceWhileRefreshing||!n.skipInstances.includes(r))},t.createRefreshCall=function(e,t,r){return r.refreshCall||(r.refreshCall=t(e),"function"==typeof r.refreshCall.then)?r.refreshCall:(console.warn("axios-auth-refresh requires `refreshTokenCall` to return a promise."),Promise.reject())},t.createRequestQueueInterceptor=function(e,t,r){return void 0===t.requestQueueInterceptorId&&(t.requestQueueInterceptorId=e.interceptors.request.use((function(e){return t.refreshCall.catch((function(){throw new n.default.Cancel("Request call failed")})).then((function(){return r.onRetry?r.onRetry(e):e}))}))),t.requestQueueInterceptorId},t.unsetCache=function(e,t){e.interceptors.request.eject(t.requestQueueInterceptorId),t.requestQueueInterceptorId=void 0,t.refreshCall=void 0,t.skipInstances=t.skipInstances.filter((function(t){return t!==e}))},t.getRetryInstance=function(e,t){return t.retryInstance||e},t.resendFailedRequest=function(e,t){return e.config.skipAuthRefresh=!0,t(e.response.config)}},300:function(e){e.exports=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}var o={};return function(){var e=o;Object.defineProperty(e,"__esModule",{value:!0});var t=r(593);e.default=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("function"!=typeof r)throw new Error("axios-auth-refresh requires `refreshAuthCall` to be a function that returns a promise.");var o={skipInstances:[],refreshCall:void 0,requestQueueInterceptorId:void 0};return e.interceptors.response.use((function(e){return e}),(function(a){if(n=(0,t.mergeOptions)(t.defaultOptions,n),!(0,t.shouldInterceptError)(a,n,e,o))return Promise.reject(a);n.pauseInstanceWhileRefreshing&&o.skipInstances.push(e);var s=(0,t.createRefreshCall)(a,r,o);return(0,t.createRequestQueueInterceptor)(e,o,n),s.catch((function(e){return Promise.reject(e)})).then((function(){return(0,t.resendFailedRequest)(a,(0,t.getRetryInstance)(e,n))})).finally((function(){return(0,t.unsetCache)(e,o)}))}))}}(),o}())},44411:function(e,t,r){"use strict";e.exports=r.p+"static/media/axios.e7d77f0967a69d31d7fc.cjs"}}]);