(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[759],{75506:function(e,t,r){"use strict";r.d(t,{_:function(){return h}});var n=r(74165),s=r(15861),i=r(56573),o=r(65470),l=r.n(o),c=r(77287),a=i.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});a.interceptors.request.use(function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers.Authorization="Bearer ".concat((0,c.hP)()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var d=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.Z.post("/auth/refresh/",{refresh:(0,c.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var r=e.data.access;t.response.config.headers.Authorization="Bearer "+r,localStorage.setItem("auth",JSON.stringify({access:r,refresh:(0,c.YV)(),user:(0,c.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function h(e){return a.get(e).then((function(e){return e.data}))}l()(a,d),t.Z=a},65759:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ee}});var n=r(64611),s=r(9019),i=r(42832),o=r(1413),l=r(45987),c=r(47313),a=r(83061),d=r(21921),h=r(77342),p=r(17592),u=r(77430),x=r(32298);function f(e){return(0,x.Z)("MuiTableContainer",e)}(0,u.Z)("MuiTableContainer",["root"]);var Z=r(46417),j=["className","component"],g=(0,p.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),m=c.forwardRef((function(e,t){var r=(0,h.Z)({props:e,name:"MuiTableContainer"}),n=r.className,s=r.component,i=void 0===s?"div":s,c=(0,l.Z)(r,j),p=(0,o.Z)((0,o.Z)({},r),{},{component:i}),u=function(e){var t=e.classes;return(0,d.Z)({root:["root"]},f,t)}(p);return(0,Z.jsx)(g,(0,o.Z)({ref:t,as:i,className:(0,a.Z)(u.root,n),ownerState:p},c))})),v=r(70501),b=r(27416);function _(e){return(0,x.Z)("MuiTable",e)}(0,u.Z)("MuiTable",["root","stickyHeader"]);var y=["className","component","padding","size","stickyHeader"],w=(0,p.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)((0,o.Z)({},t.typography.body2),{},{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},r.stickyHeader&&{borderCollapse:"separate"})})),R="table",C=c.forwardRef((function(e,t){var r=(0,h.Z)({props:e,name:"MuiTable"}),n=r.className,s=r.component,i=void 0===s?R:s,p=r.padding,u=void 0===p?"normal":p,x=r.size,f=void 0===x?"medium":x,j=r.stickyHeader,g=void 0!==j&&j,m=(0,l.Z)(r,y),v=(0,o.Z)((0,o.Z)({},r),{},{component:i,padding:u,size:f,stickyHeader:g}),C=function(e){var t=e.classes,r={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,d.Z)(r,_,t)}(v),k=c.useMemo((function(){return{padding:u,size:f,stickyHeader:g}}),[u,f,g]);return(0,Z.jsx)(b.Z.Provider,{value:k,children:(0,Z.jsx)(w,(0,o.Z)({as:i,role:i===R?null:"table",ref:t,className:(0,a.Z)(C.root,n),ownerState:v},m))})})),k=r(56062);function I(e){return(0,x.Z)("MuiTableHead",e)}(0,u.Z)("MuiTableHead",["root"]);var T=["className","component"],P=(0,p.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),M={variant:"head"},N="thead",H=c.forwardRef((function(e,t){var r=(0,h.Z)({props:e,name:"MuiTableHead"}),n=r.className,s=r.component,i=void 0===s?N:s,c=(0,l.Z)(r,T),p=(0,o.Z)((0,o.Z)({},r),{},{component:i}),u=function(e){var t=e.classes;return(0,d.Z)({root:["root"]},I,t)}(p);return(0,Z.jsx)(k.Z.Provider,{value:M,children:(0,Z.jsx)(P,(0,o.Z)({as:i,className:(0,a.Z)(u.root,n),ref:t,role:i===N?null:"rowgroup",ownerState:p},c))})})),q=r(4942),O=r(17551);function z(e){return(0,x.Z)("MuiTableRow",e)}var S=(0,u.Z)("MuiTableRow",["root","selected","hover","head","footer"]),A=["className","component","hover","selected"],F=(0,p.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.head&&t.head,r.footer&&t.footer]}})((function(e){var t,r=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,q.Z)(t,"&.".concat(S.hover,":hover"),{backgroundColor:(r.vars||r).palette.action.hover}),(0,q.Z)(t,"&.".concat(S.selected),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,O.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity),"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,O.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity)}}),t})),B=c.forwardRef((function(e,t){var r=(0,h.Z)({props:e,name:"MuiTableRow"}),n=r.className,s=r.component,i=void 0===s?"tr":s,p=r.hover,u=void 0!==p&&p,x=r.selected,f=void 0!==x&&x,j=(0,l.Z)(r,A),g=c.useContext(k.Z),m=(0,o.Z)((0,o.Z)({},r),{},{component:i,hover:u,selected:f,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),v=function(e){var t=e.classes,r={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,d.Z)(r,z,t)}(m);return(0,Z.jsx)(F,(0,o.Z)({as:i,ref:t,className:(0,a.Z)(v.root,n),role:"tr"===i?null:"row",ownerState:m},j))})),E=B,Q=r(67478);function D(e){return(0,x.Z)("MuiTableBody",e)}(0,u.Z)("MuiTableBody",["root"]);var W=["className","component"],L=(0,p.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),U={variant:"body"},V="tbody",Y=c.forwardRef((function(e,t){var r=(0,h.Z)({props:e,name:"MuiTableBody"}),n=r.className,s=r.component,i=void 0===s?V:s,c=(0,l.Z)(r,W),p=(0,o.Z)((0,o.Z)({},r),{},{component:i}),u=function(e){var t=e.classes;return(0,d.Z)({root:["root"]},D,t)}(p);return(0,Z.jsx)(k.Z.Provider,{value:U,children:(0,Z.jsx)(L,(0,o.Z)({className:(0,a.Z)(u.root,n),as:i,ref:t,role:i===V?null:"rowgroup",ownerState:p},c))})})),G=r(58467),J=r(1010),X=r(75506),$=r(19536),K=r(66212),ee=function(){var e=(0,G.UO)().patientId,t=(0,J.ZP)("/patient/".concat(e,"/"),X._),r=t.data,o=t.error;return t.isLoading?(0,Z.jsx)("div",{children:"Loading..."}):o?(0,Z.jsx)("div",{children:"Error on Treatment"}):(0,Z.jsx)(n.Z,{title:"Patients Detail",children:(0,Z.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,Z.jsx)(s.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{direction:"row",spacing:2,children:(0,Z.jsx)(m,{component:v.Z,children:(0,Z.jsxs)(C,{"aria-label":"simple table",children:[(0,Z.jsx)(H,{children:(0,Z.jsxs)(E,{children:[(0,Z.jsx)(Q.Z,{children:"BVS Nepal"}),(0,Z.jsx)(Q.Z,{align:"right",colSpan:"2",children:"Patient Details"})]})}),(0,Z.jsxs)(Y,{children:[(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Fiscal Year"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.fiscal_year})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Registration No"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.registration_number})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Registration date"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.registration_date})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Patient Name"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsxs)(Q.Z,{align:"left",children:[r.fname," ",r.mname," ",r.lname]})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Permanent Address"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsxs)(Q.Z,{align:"left",children:["Nepal"===r.country&&(0,Z.jsxs)(Z.Fragment,{children:[r.local,"-",r.ward,", ",r.tole,", ",r.district,", ",r.provence,","," ",r.country]}),"Foreign"===r.country&&(0,Z.jsx)(Z.Fragment,{children:r.foreign_address})]})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Incident At"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsxs)(Q.Z,{align:"left",children:["Nepal"===r.country2&&(0,Z.jsxs)(Z.Fragment,{children:[r.local2,"-",r.ward2,", ",r.tole2,", ",r.district2,", ",r.provence2,","," ",r.country2]}),"Foreign"===r.country2&&(0,Z.jsx)(Z.Fragment,{children:r.foreign_address2})]})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Date of Birth"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.date_of_birth})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Age At Incident"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsxs)(Q.Z,{align:"left",children:[r.age_at_incident,"-",r.month_at_incident]})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Gender"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.gender})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Citizenship/Birth Certificate No."}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.citizenship_no})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Patients Contact No."}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.patient_contact})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Patients Optional Contact No."}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.optional_contact})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Patients Parents Contact No."}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.parents_contact})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Patients Education"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.patient_education})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Language"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.patient_language})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Occupation"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.patient_occupation.occupation_name})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Suppose Occupation"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.suppose_occupation.occupation_name})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Parents Occupation"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.parents_occupation.occupation_name})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Ethnic Group"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.ethnic_group.ethnic_group})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Religion"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.religion.religion})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Family Type"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.family_type.family_type})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"Material Status"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.material_status})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"number_of_child"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.number_of_child})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"number_of_siblings"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.number_of_siblings})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"economic_status"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.economic_status})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"family_support"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.family_support})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"pregnant_women"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.pregnant_women})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"lactating_mother"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.lactating_mother})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"with_disabilities"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.with_disabilities})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"mental_illness"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.mental_illness})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"epilepsy"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.epilepsy})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"hiv_positive"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.hiv_positive})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"echo_other"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.echo_other})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"date_of_incident"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.date_of_incident})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"area_of_burn"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.area_of_burn})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"percentage_of_burn"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.percentage_of_burn})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"degree_of_burn"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.degree_of_burn})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"burn_cause"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.burn_cause.burn_cause})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"burn_type"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.burn_type.burn_type})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"place_of_incident"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.place_of_incident})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"description_of_incident"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.description_of_incident})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"person_at_hospital"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.person_at_hospital})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"relation_to_parent"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.relation_to_parent})]}),(0,Z.jsxs)(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,Z.jsx)(Q.Z,{component:"th",scope:"row",children:"person_contact"}),(0,Z.jsx)(Q.Z,{children:":"}),(0,Z.jsx)(Q.Z,{align:"left",children:r.person_contact})]})]})]})})})}),(0,Z.jsx)(s.ZP,{item:!0,xs:12,md:12,children:(0,Z.jsx)($.Z,{children:(0,Z.jsx)(K.Z,{label:"TREATMENT",color:"primary"})})}),(0,Z.jsx)(s.ZP,{item:!0,xs:12,md:12})]})})}},67478:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(45987),s=r(4942),i=r(1413),o=r(47313),l=r(83061),c=r(21921),a=r(17551),d=r(91615),h=r(27416),p=r(56062),u=r(77342),x=r(17592),f=r(77430),Z=r(32298);function j(e){return(0,Z.Z)("MuiTableCell",e)}var g=(0,f.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),m=r(46417),v=["align","className","component","padding","scope","size","sortDirection","variant"],b=(0,x.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["size".concat((0,d.Z)(r.size))],"normal"!==r.padding&&t["padding".concat((0,d.Z)(r.padding))],"inherit"!==r.align&&t["align".concat((0,d.Z)(r.align))],r.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},t.typography.body2),{},{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,a.$n)((0,a.Fq)(t.palette.divider,1),.88):(0,a._j)((0,a.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===r.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium}),"body"===r.variant&&{color:(t.vars||t).palette.text.primary}),"footer"===r.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)}),"small"===r.size&&(0,s.Z)({padding:"6px 16px"},"&.".concat(g.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}})),"checkbox"===r.padding&&{width:48,padding:"0 0 0 4px"}),"none"===r.padding&&{padding:0}),"left"===r.align&&{textAlign:"left"}),"center"===r.align&&{textAlign:"center"}),"right"===r.align&&{textAlign:"right",flexDirection:"row-reverse"}),"justify"===r.align&&{textAlign:"justify"}),r.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),_=o.forwardRef((function(e,t){var r,s=(0,u.Z)({props:e,name:"MuiTableCell"}),a=s.align,x=void 0===a?"inherit":a,f=s.className,Z=s.component,g=s.padding,_=s.scope,y=s.size,w=s.sortDirection,R=s.variant,C=(0,n.Z)(s,v),k=o.useContext(h.Z),I=o.useContext(p.Z),T=I&&"head"===I.variant,P=_;"td"===(r=Z||(T?"th":"td"))?P=void 0:!P&&T&&(P="col");var M=R||I&&I.variant,N=(0,i.Z)((0,i.Z)({},s),{},{align:x,component:r,padding:g||(k&&k.padding?k.padding:"normal"),size:y||(k&&k.size?k.size:"medium"),sortDirection:w,stickyHeader:"head"===M&&k&&k.stickyHeader,variant:M}),H=function(e){var t=e.classes,r=e.variant,n=e.align,s=e.padding,i=e.size,o={root:["root",r,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat((0,d.Z)(n)),"normal"!==s&&"padding".concat((0,d.Z)(s)),"size".concat((0,d.Z)(i))]};return(0,c.Z)(o,j,t)}(N),q=null;return w&&(q="asc"===w?"ascending":"descending"),(0,m.jsx)(b,(0,i.Z)({as:r,ref:t,className:(0,l.Z)(H.root,f),"aria-sort":q,scope:P,ownerState:N},C))}))},27416:function(e,t,r){"use strict";var n=r(47313).createContext();t.Z=n},56062:function(e,t,r){"use strict";var n=r(47313).createContext();t.Z=n},65470:function(e,t,r){var n;e.exports=(n=r(44411),function(){"use strict";var e={593:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.resendFailedRequest=t.getRetryInstance=t.unsetCache=t.createRequestQueueInterceptor=t.createRefreshCall=t.shouldInterceptError=t.mergeOptions=t.defaultOptions=void 0;var n=r(300);t.defaultOptions={statusCodes:[401],pauseInstanceWhileRefreshing:!1},t.mergeOptions=function(e,t){return Object.assign(Object.assign(Object.assign({},e),{pauseInstanceWhileRefreshing:t.skipWhileRefreshing}),t)},t.shouldInterceptError=function(e,t,r,n){var s,i;return!!e&&!(null===(s=e.config)||void 0===s?void 0:s.skipAuthRefresh)&&!!(t.interceptNetworkError&&!e.response&&0===e.request.status||e.response&&((null==t?void 0:t.shouldRefresh)?t.shouldRefresh(e):null===(i=t.statusCodes)||void 0===i?void 0:i.includes(parseInt(e.response.status))))&&(e.response||(e.response={config:e.config}),!t.pauseInstanceWhileRefreshing||!n.skipInstances.includes(r))},t.createRefreshCall=function(e,t,r){return r.refreshCall||(r.refreshCall=t(e),"function"==typeof r.refreshCall.then)?r.refreshCall:(console.warn("axios-auth-refresh requires `refreshTokenCall` to return a promise."),Promise.reject())},t.createRequestQueueInterceptor=function(e,t,r){return void 0===t.requestQueueInterceptorId&&(t.requestQueueInterceptorId=e.interceptors.request.use((function(e){return t.refreshCall.catch((function(){throw new n.default.Cancel("Request call failed")})).then((function(){return r.onRetry?r.onRetry(e):e}))}))),t.requestQueueInterceptorId},t.unsetCache=function(e,t){e.interceptors.request.eject(t.requestQueueInterceptorId),t.requestQueueInterceptorId=void 0,t.refreshCall=void 0,t.skipInstances=t.skipInstances.filter((function(t){return t!==e}))},t.getRetryInstance=function(e,t){return t.retryInstance||e},t.resendFailedRequest=function(e,t){return e.config.skipAuthRefresh=!0,t(e.response.config)}},300:function(e){e.exports=n}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}var s={};return function(){var e=s;Object.defineProperty(e,"__esModule",{value:!0});var t=r(593);e.default=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("function"!=typeof r)throw new Error("axios-auth-refresh requires `refreshAuthCall` to be a function that returns a promise.");var s={skipInstances:[],refreshCall:void 0,requestQueueInterceptorId:void 0};return e.interceptors.response.use((function(e){return e}),(function(i){if(n=(0,t.mergeOptions)(t.defaultOptions,n),!(0,t.shouldInterceptError)(i,n,e,s))return Promise.reject(i);n.pauseInstanceWhileRefreshing&&s.skipInstances.push(e);var o=(0,t.createRefreshCall)(i,r,s);return(0,t.createRequestQueueInterceptor)(e,s,n),o.catch((function(e){return Promise.reject(e)})).then((function(){return(0,t.resendFailedRequest)(i,(0,t.getRetryInstance)(e,n))})).finally((function(){return(0,t.unsetCache)(e,s)}))}))}}(),s}())},44411:function(e,t,r){"use strict";e.exports=r.p+"static/media/axios.e7d77f0967a69d31d7fc.cjs"}}]);