"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[111],{75506:function(e,t,r){r.d(t,{_:function(){return d}});var n=r(74165),a=r(15861),i=r(56573),o=r(65470),l=r.n(o),c=r(77287),s=i.Z.create({baseURL:"https://bvsnepal.org/api",headers:{"Content-Type":"application/json"}});s.interceptors.request.use(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers.Authorization="Bearer ".concat((0,c.hP)()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.Z.post("/auth/refresh/",{refresh:(0,c.YV)()},{baseURL:"https://bvsnepal.org/api"}).then((function(e){var r=e.data.access;t.response.config.headers.Authorization="Bearer "+r,localStorage.setItem("auth",JSON.stringify({access:r,refresh:(0,c.YV)(),user:(0,c.PR)()}))})).catch((function(){localStorage.removeItem("auth")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function d(e){return s.get(e).then((function(e){return e.data}))}l()(s,u),t.Z=s},50111:function(e,t,r){r.r(t),r.d(t,{default:function(){return ie}});var n=r(64611),a=r(47313),i=r(1010),o=r(64229),l=r(44537),c=r(74618),s=r(57829),u=r(88211),d=r(96694),f=r(36720),h=r(27841),p=r(24179),m=r(46417),w=["className","children"],b=(0,d.Z)("div",{name:"MuiDataGrid",slot:"ToolbarContainer",overridesResolver:function(e,t){return t.toolbarContainer}})((function(e){var t=e.theme;return{display:"flex",alignItems:"center",flexWrap:"wrap",gap:t.spacing(1),padding:t.spacing(.5,.5,0)}})),v=a.forwardRef((function(e,t){var r=e.className,n=e.children,a=(0,c.Z)(e,w),i=(0,p.B)(),o=function(e){var t=e.classes;return(0,f.Z)({root:["toolbarContainer"]},h.d,t)}(i);return n?(0,m.jsx)(b,(0,l.Z)({ref:t,className:(0,u.Z)(r,o.root),ownerState:i},a,{children:n})):null})),g=r(17677),_=r(68335),x=r(60543),N=r(23331),y=r(23194),Z=["onClick"],C=a.forwardRef((function(e,t){var r,n=e.onClick,a=(0,c.Z)(e,Z),i=(0,g.Z)(),o=(0,g.Z)(),s=(0,y.l)(),u=(0,p.B)(),d=(0,_.P)(s,x.e);if(u.disableColumnSelector)return null;var f=d.open&&d.panelId===o;return(0,m.jsx)(u.slots.baseButton,(0,l.Z)({ref:t,id:i,size:"small","aria-label":s.current.getLocaleText("toolbarColumnsLabel"),"aria-haspopup":"menu","aria-expanded":f,"aria-controls":f?o:void 0,startIcon:(0,m.jsx)(u.slots.columnSelectorIcon,{})},a,{onClick:function(e){d.open&&d.openedPanelValue===N.y.columns?s.current.hidePreferences():s.current.showPreferences(N.y.columns,o,i),null==n||n(e)}},null==(r=u.slotProps)?void 0:r.baseButton,{children:s.current.getLocaleText("toolbarColumns")}))})),P=r(29439),k=r(61930),j=r(82802),F=r(14560),T=r(51405),L=r(74748),S=r(75289),I=r(84254),B=r(9351),D=["onClick"],O=a.forwardRef((function(e,t){var r,n=e.onClick,i=(0,c.Z)(e,D),o=(0,y.l)(),s=(0,p.B)(),u=(0,_.P)(o,S.Jz),d=(0,k.Z)(),f=(0,k.Z)(),w=a.useState(!1),b=(0,P.Z)(w,2),v=b[0],g=b[1],x=a.useRef(null),N=(0,j.Z)(t,x),Z=[{icon:(0,m.jsx)(s.slots.densityCompactIcon,{}),label:o.current.getLocaleText("toolbarDensityCompact"),value:"compact"},{icon:(0,m.jsx)(s.slots.densityStandardIcon,{}),label:o.current.getLocaleText("toolbarDensityStandard"),value:"standard"},{icon:(0,m.jsx)(s.slots.densityComfortableIcon,{}),label:o.current.getLocaleText("toolbarDensityComfortable"),value:"comfortable"}],C=a.useMemo((function(){switch(u){case"compact":return(0,m.jsx)(s.slots.densityCompactIcon,{});case"comfortable":return(0,m.jsx)(s.slots.densityComfortableIcon,{});default:return(0,m.jsx)(s.slots.densityStandardIcon,{})}}),[u,s]);if(s.disableDensitySelector)return null;var O=Z.map((function(e,t){return(0,m.jsxs)(T.Z,{onClick:function(){return t=e.value,o.current.setDensity(t),void g(!1);var t},selected:e.value===u,children:[(0,m.jsx)(L.Z,{children:e.icon}),e.label]},t)}));return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(s.slots.baseButton,(0,l.Z)({ref:N,size:"small",startIcon:C,"aria-label":o.current.getLocaleText("toolbarDensityLabel"),"aria-haspopup":"menu","aria-expanded":v,"aria-controls":v?f:void 0,id:d},i,{onClick:function(e){g((function(e){return!e})),null==n||n(e)}},null==(r=s.slotProps)?void 0:r.baseButton,{children:o.current.getLocaleText("toolbarDensity")})),(0,m.jsx)(B.r,{open:v,target:x.current,onClickAway:function(e){var t;x.current===e.target||null!=(t=x.current)&&t.contains(e.target)||g(!1)},position:"bottom-start",children:(0,m.jsx)(F.Z,{id:f,className:h._.menuList,"aria-labelledby":d,onKeyDown:function(e){(0,I.id)(e.key)&&e.preventDefault(),(0,I.Mh)(e.key)&&g(!1)},autoFocusItem:v,children:O})})]})})),R=r(17592),G=r(22667),M=r(25733),A=r(5850),z=r(58581),q=["componentsProps"],Q=(0,R.ZP)("ul",{name:"MuiDataGrid",slot:"ToolbarFilterList",overridesResolver:function(e,t){return t.toolbarFilterList}})((function(e){var t=e.theme;return{margin:t.spacing(1,1,.5),padding:t.spacing(0,1)}})),V=a.forwardRef((function(e,t){var r,n,i=e.componentsProps,o=void 0===i?{}:i,s=(0,c.Z)(e,q),u=o.button||{},d=(0,y.l)(),w=(0,p.B)(),b=(0,_.P)(d,z.DY),v=(0,_.P)(d,A.WH),g=(0,_.P)(d,x.e),Z=function(e){var t=e.classes;return(0,f.Z)({root:["toolbarFilterList"]},h.d,t)}(w),C=(0,k.Z)(),P=(0,k.Z)(),j=a.useMemo((function(){if(g.open)return d.current.getLocaleText("toolbarFiltersTooltipHide");if(0===b.length)return d.current.getLocaleText("toolbarFiltersTooltipShow");var e=function(e){return v[e.field].filterOperators.find((function(t){return t.value===e.operator})).label||d.current.getLocaleText("filterOperator".concat((0,G.Z)(e.operator))).toString()},t=function(e){var t=v[e.field].filterOperators.find((function(t){return t.value===e.operator})).getValueAsString;return t?t(e.value):e.value};return(0,m.jsxs)("div",{children:[d.current.getLocaleText("toolbarFiltersTooltipActive")(b.length),(0,m.jsx)(Q,{className:Z.root,ownerState:w,children:b.map((function(r,n){return(0,l.Z)({},v[r.field]&&(0,m.jsx)("li",{children:"".concat(v[r.field].headerName||r.field,"\n                  ").concat(e(r),"\n                  ").concat(null!=r.value?t(r):"")},n))}))})]})}),[d,w,g.open,b,v,Z]);if(w.disableColumnFilter)return null;var F=g.open&&g.panelId===P;return(0,m.jsx)(w.slots.baseTooltip,(0,l.Z)({title:j,enterDelay:1e3},s,null==(r=w.slotProps)?void 0:r.baseTooltip,{children:(0,m.jsx)(w.slots.baseButton,(0,l.Z)({ref:t,id:C,size:"small","aria-label":d.current.getLocaleText("toolbarFiltersLabel"),"aria-controls":F?P:void 0,"aria-expanded":F,"aria-haspopup":!0,startIcon:(0,m.jsx)(M.Z,{badgeContent:b.length,color:"primary",children:(0,m.jsx)(w.slots.openFilterButtonIcon,{})})},u,{onClick:function(e){var t,r=g.open,n=g.openedPanelValue;r&&n===N.y.filters?d.current.hidePreferences():d.current.showPreferences(N.y.filters,P,C),null==(t=u.onClick)||t.call(u,e)}},null==(n=w.slotProps)?void 0:n.baseButton,{children:d.current.getLocaleText("toolbarFilters")}))}))})),E=r(41584),Y=r(4942),H=r(24631),W=r(37858),J=r(18879),U=["quickFilterParser","quickFilterFormatter","debounceMs"],K=(0,R.ZP)(H.Z,{name:"MuiDataGrid",slot:"ToolbarQuickFilter",overridesResolver:function(e,t){return t.toolbarQuickFilter}})((function(e){var t,r=e.theme;return t={width:"auto",paddingBottom:r.spacing(.5),"& input":{marginLeft:r.spacing(.5)},"& .MuiInput-underline:before":{borderBottom:"1px solid ".concat((r.vars||r).palette.divider)}},(0,Y.Z)(t,"& input[type=search]::-ms-clear,\n& input[type=search]::-ms-reveal",{display:"none",width:0,height:0}),(0,Y.Z)(t,'& input[type="search"]::-webkit-search-decoration,\n  & input[type="search"]::-webkit-search-cancel-button,\n  & input[type="search"]::-webkit-search-results-button,\n  & input[type="search"]::-webkit-search-results-decoration',{display:"none"}),t})),X=function(e){return e.split(" ").filter((function(e){return""!==e}))},$=function(e){return e.join(" ")};function ee(e){var t,r,n=e.quickFilterParser,i=void 0===n?X:n,o=e.quickFilterFormatter,s=void 0===o?$:o,u=e.debounceMs,d=void 0===u?500:u,f=(0,c.Z)(e,U),h=(0,y.l)(),w=(0,p.B)(),b=(0,_.P)(h,z.Az),v=a.useState((function(){return s(null!=b?b:[])})),g=(0,P.Z)(v,2),x=g[0],N=g[1],Z=a.useRef(b);a.useEffect((function(){(0,J.xb)(Z.current,b)||(Z.current=b,N((function(e){return(0,J.xb)(i(e),b)?e:s(null!=b?b:[])})))}),[b,s,i]);var C=a.useCallback((function(e){var t=i(e);Z.current=t,h.current.setQuickFilterValues(t)}),[h,i]),k=a.useMemo((function(){return(0,W.Z)(C,d)}),[C,d]),j=a.useCallback((function(e){var t=e.target.value;N(t),k(t)}),[k]),F=a.useCallback((function(){N(""),C("")}),[C]);return(0,m.jsx)(K,(0,l.Z)({as:w.slots.baseTextField,ownerState:w,variant:"standard",value:x,onChange:j,placeholder:h.current.getLocaleText("toolbarQuickFilterPlaceholder"),"aria-label":h.current.getLocaleText("toolbarQuickFilterLabel"),type:"search"},f,{InputProps:(0,l.Z)({startAdornment:(0,m.jsx)(w.slots.quickFilterIcon,{fontSize:"small"}),endAdornment:(0,m.jsx)(w.slots.baseIconButton,(0,l.Z)({"aria-label":h.current.getLocaleText("toolbarQuickFilterDeleteIconLabel"),size:"small",sx:{visibility:x?"visible":"hidden"},onClick:F},null==(t=w.slotProps)?void 0:t.baseIconButton,{children:(0,m.jsx)(w.slots.quickFilterClearIcon,{fontSize:"small"})}))},f.InputProps)},null==(r=w.slotProps)?void 0:r.baseTextField))}var te=["className","csvOptions","printOptions","excelOptions","showQuickFilter","quickFilterProps"],re=a.forwardRef((function(e,t){var r=e.csvOptions,n=e.printOptions,a=e.excelOptions,i=e.showQuickFilter,o=void 0!==i&&i,u=e.quickFilterProps,d=void 0===u?{}:u,f=(0,c.Z)(e,te),h=(0,p.B)();return h.disableColumnFilter&&h.disableColumnSelector&&h.disableDensitySelector&&!o?null:(0,m.jsxs)(v,(0,l.Z)({ref:t},f,{children:[(0,m.jsx)(C,{}),(0,m.jsx)(V,{}),(0,m.jsx)(O,{}),(0,m.jsx)(E.Zh,{csvOptions:r,printOptions:n,excelOptions:a}),(0,m.jsx)(s.Z,{sx:{flex:1}}),o&&(0,m.jsx)(ee,(0,l.Z)({},d))]}))})),ne=r(75506),ae=function(){var e=(0,i.ZP)("/patient",ne._,{refreshInterval:1e3}),t=e.data,r=e.error,n=e.isLoading;return r?(0,m.jsx)("div",{children:"Failed to load"}):n?(0,m.jsx)("div",{children:"Loading..."}):(console.log(t),(0,m.jsx)("div",{children:(0,m.jsx)(o._,{rows:t,columns:[{field:"registration_number",headerName:"Registration Number",width:150,editable:!0},{field:"fiscal_year",headerName:"Fiscal Year",width:100,editable:!0},{field:"registration_date",headerName:"Registration Date",width:150,editable:!0},{field:"fullName",headerName:"Full name",width:200,valueGetter:function(e){return"".concat(e.row.fname||""," ").concat(e.row.mname||""," ").concat(e.row.lname||"")}},{field:"date_of_birth",headerName:"DOB",width:100},{field:"age",headerName:"Age(Y-M)",width:75,valueGetter:function(e){return"".concat(e.row.age_at_incident||""," - ").concat(e.row.month_at_incident||""," ")}},{field:"gender",headerName:"Gender",width:100},{field:"citizenship_no",headerName:"Citizenship No",width:100},{field:"patient_contact",headerName:"Contact",width:100},{field:"optional_contact",headerName:"Opt. Contact",width:100},{field:"patient_education",headerName:"Education",width:100},{field:"patient_language",headerName:"Language",width:100},{field:"patient_occupation",headerName:"Occupation",width:100,valueGetter:function(e){return"".concat(e.row.patient_occupation.occupation_name||"")}},{field:"ethnic_group",headerName:"Ethnicity",width:100,valueGetter:function(e){return"".concat(e.row.ethnic_group.ethnic_group||"")}},{field:"religion",headerName:"Religion",width:100,valueGetter:function(e){return"".concat(e.row.religion.religion||"")}},{field:"material_status",headerName:"Material",width:100},{field:"permanentAddress",headerName:"P Address",width:250,valueGetter:function(e){return"Nepal"===e.row.country?"".concat(e.row.tole||""," ",","," ").concat(e.row.local||""," ","-"," ").concat(e.row.ward||""," ",","," ").concat(e.row.district||""," ",","," ").concat(e.row.provence||""):"Foreign"===e.row.country?"".concat(e.row.foreign_address||""," "):void 0}},{field:"tempAddress",headerName:"Incident At",width:250,valueGetter:function(e){return"Nepal"===e.row.country2?"".concat(e.row.tole2||""," ",","," ").concat(e.row.local2||""," ","-"," ").concat(e.row.ward2||""," ",","," ").concat(e.row.district2||""," ",","," ").concat(e.row.provence2||""):"Foreign"===e.row.country2?"".concat(e.row.foreign_address2||""," "):void 0}},{field:"parents_contact",headerName:"Parents Contact",width:100},{field:"suppose_occupation",headerName:"Suppose Occupation",width:100,valueGetter:function(e){return"".concat(e.row.suppose_occupation.occupation_name||"")}},{field:"parents_occupation",headerName:"Parents Occupation",width:100,valueGetter:function(e){return"".concat(e.row.parents_occupation.occupation_name||"")}},{field:"family_type",headerName:"Family Type",width:100,valueGetter:function(e){return"".concat(e.row.family_type.family_type||"")}},{field:"number_of_child",headerName:"Number of Child",width:100},{field:"number_of_siblings",headerName:"Number of Siblings",width:100},{field:"economic_status",headerName:"Economic Status",width:100},{field:"family_support",headerName:"Family Support",width:100},{field:"pregnant_women",headerName:"Pregnant Women",width:100},{field:"lactating_mother",headerName:"Lactating Mother",width:100},{field:"with_disabilities",headerName:"With Disabilities",width:100},{field:"mental_illness",headerName:"Mental Illness",width:100},{field:"epilepsy",headerName:"Epilepsy",width:100},{field:"hiv_positive",headerName:"HIV",width:100},{field:"echo_other",headerName:"Other",width:100},{field:"date_of_incident",headerName:"Date of Incident",width:100},{field:"area_of_burn",headerName:"Area of Burn",width:100},{field:"percentage_of_burn",headerName:"Percentage Of Burn",width:100},{field:"degree_of_burn",headerName:"Degree Of Burn",width:100},{field:"burn_cause",headerName:"Burn Cause",width:100,valueGetter:function(e){return"".concat(e.row.burn_cause.burn_cause||"")}},{field:"burn_type",headerName:"Burn Type",width:100,valueGetter:function(e){return"".concat(e.row.burn_type.burn_type||"")}},{field:"place_of_incident",headerName:"Place of Incident",width:100},{field:"description_of_incident",headerName:"Description of Incident",width:100},{field:"person_at_hospital",headerName:"Person at Hospital",width:100},{field:"relation_to_parent",headerName:"Relation to Patient",width:100},{field:"person_contact",headerName:"Person Contact",width:100},{field:"treatment_count",headerName:"Treatment Count",width:100},{field:"funding_count",headerName:"Funding Count",width:100},{field:"physiotherapie_count",headerName:"Physiotherapie Count",width:100},{field:"psychosocials_count",headerName:"Psychosocials Count",width:100},{field:"total_funding",headerName:"Total Funding",width:100},{field:"total_surgery",headerName:"Total Surgery",width:100},{field:"total_skin_graft",headerName:"Total Skin Graft",width:100},{field:"total_debridement",headerName:"Total Debridement",width:100},{field:"total_amputation",headerName:"Total Amputation",width:100},{field:"total_dressing",headerName:"Total Dressing",width:100},{field:"total_nutritional",headerName:"Nutritional Support",width:100},{field:"total_medical_support",headerName:"Medical Support",width:100}],loading:n,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0,slots:{toolbar:re}})}))},ie=function(){return(0,m.jsx)(n.Z,{title:"Patients List",children:(0,m.jsx)(ae,{})})}}}]);