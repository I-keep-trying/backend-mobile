(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[17],{593:function(e){e.exports=JSON.parse('[{"id":"FZUe47mEY9PCOzYmMxzYY","region":"All","subregions":[]},{"id":"p3QkwaBBJbQm4-oi_qzIQ","region":"Africa","subregions":["Northern Africa","Middle Africa","Western Africa","Southern Africa","Eastern Africa"]},{"id":"oEXPulND1myYNkk691COU","region":"Americas","subregions":["Caribbean","South America","Central America","North America"]},{"id":"Tnrp40V1CE3AB_yBKxmxK","region":"Antarctic","subregions":["Antarctic"]},{"id":"MywTm4_IEp2XZtAfPKRGg","region":"Asia","subregions":["Southern Asia","Western Asia","South-Eastern Asia","Eastern Asia","Central Asia"]},{"id":"qxmsAgkNwgqb5xqff-ddc","region":"Europe","subregions":["Northern Europe","Southern Europe","Western Europe","Eastern Europe","Central Europe"]},{"id":"3HyqK4xy8_nAO7Up9TwSN","region":"Oceania","subregions":["Polynesia","Australia and New Zealand","Melanesia","Micronesia"]}]')},631:function(e,t,n){},719:function(e,t,n){"use strict";n.r(t);var i=n(578),r=n(5),c=n(79),o=n(642),a=n(736),s=n(713),l=n(680),u=n(706),j=n(641),b=n(740),d=n(735),O=n(71),h=n(593),g=(n(631),n.p+"static/media/ua-coa.4f804af0.svg"),f=n(51);t.default=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],m=t[1],x=Object(r.useState)("All"),p=Object(i.a)(x,2),A=p[0],C=p[1],v=Object(r.useState)(""),k=Object(i.a)(v,2),I=k[0],y=k[1],E=Object(r.useState)({id:"FZUe47mEY9PCOzYmMxzYY",region:"All",subregions:[]}),S=Object(i.a)(E,2),Y=S[0],z=S[1],M=Object(c.c)((function(e){return e})),w=(Object(c.c)((function(e){return e.weather})),Object(c.c)((function(e){return e.countries.filtered}))),N=Object(c.c)((function(e){return e.unit.unit}));console.log("unit",N);var F=Object(c.b)();Object(r.useEffect)((function(){""!==n&&z({id:"FZUe47mEY9PCOzYmMxzYY",region:"All",subregions:[]})}),[n]);var P=function(e){e.preventDefault();var t=e.target.value;F(Object(O.g)(t)),m(t)},q=function(e,t){F(Object(O.h)(e,t))},U=function(e){F(Object(O.c)(e.region)),C(e.region),y(e.subregions[0]),z(e),m("")},Z=function(e){return"ascending"===M.countries.sortConfig.direction&&M.countries.sortConfig.key===e?Object(f.jsx)(o.a,{name:"caret up"}):"descending"===M.countries.sortConfig.direction&&M.countries.sortConfig.key===e?Object(f.jsx)(o.a,{name:"caret down"}):void 0};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(a.a,{attached:"top",inverted:!0,borderless:!0,children:[Object(f.jsx)(a.a.Item,{id:"app-title",header:!0,onClick:function(){F(Object(O.i)())},children:Object(f.jsx)("p",{children:" World Countries Mobile "})}),Object(f.jsxs)(a.a.Item,{id:"flag-menu",children:[Object(f.jsx)(s.a,{alt:"ukraine flag",srcSet:"".concat(g," 100w"),size:"mini",src:g,as:"a",href:"https://theeasternborder.lv/"})," "]}),Object(f.jsx)(a.a.Menu,{position:"right",children:Object(f.jsx)(a.a.Item,{onClick:function(){F(Object(O.j)(N))},children:Object(f.jsx)(l.a,{color:"blue",children:"metric"===N?"imperial":"metric"})})})]}),Object(f.jsx)(a.a,{id:"mobile-header",inverted:!0,vertical:!0,fluid:!0,children:Object(f.jsx)(a.a.Item,{id:"mobile-header-item",children:Object(f.jsx)(u.a,{inverted:!0,size:"mini",icon:Object(f.jsx)(o.a,{link:!0,name:n.length>0?"close":"search",onClick:n.length>0?function(){F(Object(O.g)("")),m("")}:P}),type:"search",value:n,placeholder:"Search by name",onChange:P})})}),Object(f.jsx)(a.a,{id:"mobile-header2",inverted:!0,vertical:!0,fluid:!0,children:Object(f.jsxs)(a.a.Item,{id:"mobile-header2-item",children:[w.length,1===w.length?" record found":" records found"]})}),1===w.length?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.a,{inverted:!0,children:Object(f.jsx)(b.a,{labelPosition:"left",icon:"left chevron",basic:!0,color:"yellow",fluid:!0,content:"All Countries",onClick:function(){return F(Object(O.g)(""))}})})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(a.a,{inverted:!0,borderless:!0,size:"tiny",children:[Object(f.jsx)(d.a,{item:!0,text:"Sort",children:Object(f.jsxs)(d.a.Menu,{children:[Object(f.jsxs)(d.a.Item,{onClick:function(){return q("name")},children:[Z("name"),"Name"]}),Object(f.jsxs)(d.a.Item,{onClick:function(){return q("capital")},children:[Z("capital"),"Capital"]}),Object(f.jsxs)(d.a.Item,{onClick:function(){return q("region")},children:[Z("region"),"Region"]}),Object(f.jsxs)(d.a.Item,{onClick:function(){return q("subregion")},children:[Z("subregion"),"Subregion"]}),Object(f.jsxs)(d.a.Item,{onClick:function(){return q("population")},children:[Z("population"),"Population"]}),Object(f.jsxs)(d.a.Item,{onClick:function(){return q("area")},children:[Z("area"),"Area"]})]})}),Object(f.jsxs)(a.a.Item,{position:"right",children:["Sorted by: ",M.countries.sortConfig.key,", ",M.countries.sortConfig.direction]})]}),Object(f.jsxs)(a.a,{inverted:!0,borderless:!0,size:"tiny",children:[Object(f.jsx)(a.a.Item,{position:"left",children:"Filter by"}),Object(f.jsx)(d.a,{item:!0,text:""!==n?"All":A,children:Object(f.jsx)(d.a.Menu,{children:h.map((function(e){return"All"===n?Object(f.jsx)(d.a.Item,{text:"All",value:"All",active:"All"===A,onClick:function(){return U(e)}},e.id):Object(f.jsx)(d.a.Item,{text:e.region,value:e.region,active:A===e.region,onClick:function(){return U(e)}},e.id)}))})})]})]}),"All"!==Y.region?Object(f.jsxs)(a.a,{inverted:!0,borderless:!0,size:"tiny",children:[Object(f.jsx)(a.a.Item,{position:"left",children:"Subregion: "}),Object(f.jsx)(d.a,{item:!0,text:I,children:Object(f.jsx)(d.a.Menu,{children:Y.subregions.map((function(e,t){return Object(f.jsx)(d.a.Item,{text:e,value:e,active:I===e,onClick:function(){return t=e,F(Object(O.d)(t)),y(t),void m("");var t}},t)}))})})]}):Object(f.jsx)(f.Fragment,{})]})}}}]);
//# sourceMappingURL=17.1a59e05b.chunk.js.map