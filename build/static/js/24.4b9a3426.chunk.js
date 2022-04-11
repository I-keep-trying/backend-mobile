(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[24,23],{685:function(e,t,r){"use strict";r.r(t);var c=r(576),i=r(5),a=r.n(i),s=r(79),d=r(165),l=r(655),n=r(614),h=r.n(n),j=r(618),m=(r(615),r(616),r(51));function x(e){var t=e.country,r=Object(i.useState)("time zone error"),a=Object(c.a)(r,2),n=a[0],x=a[1],o=Object(s.c)((function(e){return e.unit.unit})),b=Object(s.c)((function(e){return e.weather})),_=Object(s.c)((function(e){return e.time}));Object(i.useMemo)((function(){var e=new Date,t={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:_.zoneName,timeZoneName:"short"};x(e.toLocaleString(window.navigator.language,t))}),[]);var O=b.current.weather[0].icon,u=j.a[O].path;return d.isMobile||d.isTablet?Object(m.jsxs)("div",{className:"widget-right weather-right--type1 widget-right--blue",children:[Object(m.jsx)("div",{className:"widget-right__header widget-right__header--blue",children:Object(m.jsx)("div",{className:"widget-right__layout",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{className:"widget-right__title",children:["Date and Time in ",t.capital," "]}),Object(m.jsxs)("p",{children:[" ",n," "]})]})})}),Object(m.jsxs)("div",{className:"widget-right__header widget-right__header--blue",children:[Object(m.jsx)("div",{className:"widget-right__layout",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"widget-right__title",children:" "}),Object(m.jsxs)("p",{children:[b.current.weather[0].description," "]})]})}),Object(m.jsx)("img",{src:u,width:"128",height:"128",alt:"Weather in ".concat(t.name),className:"weather-right__icon"})]}),Object(m.jsx)("div",{className:"weather-right weather-right--blue",children:Object(m.jsxs)("div",{className:"weather-right__layout",children:[Object(m.jsxs)("div",{className:"weather-right__temperatureMobile",children:[Math.round(b.current.temp),Object(m.jsxs)("span",{children:["\xb0","metric"===o?"C":"F"]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"weather-right-card",children:Object(m.jsx)("table",{className:"weather-right__table",children:Object(m.jsxs)("tbody",{children:[Object(m.jsx)("tr",{className:"weather-right__items",children:Object(m.jsx)("th",{colSpan:"2",className:"weather-right__item",children:"Details"})}),Object(m.jsxs)("tr",{className:"weather-right__items",children:[Object(m.jsx)("td",{className:"weather-right__item",children:"Feels like"}),Object(m.jsxs)("td",{className:"weather-right__item",children:[Math.round(b.current.feels_like),Object(m.jsxs)("span",{children:["\xb0","metric"===o?"C":"F"]})]})]}),Object(m.jsxs)("tr",{className:"weather-right__items",children:[Object(m.jsx)("td",{className:"weather-right__item",children:"Clouds"}),Object(m.jsxs)("td",{className:"weather-right__item",children:[b.current.clouds,Object(m.jsx)("span",{children:"%"})]})]}),Object(m.jsxs)("tr",{className:"weather-right__items",children:[Object(m.jsx)("td",{className:"weather-right__item",children:"Wind"}),Object(m.jsxs)("td",{className:"weather-right__item",children:[Math.round(b.current.wind_speed),"metric"===o?"m/s":"mph"]})]}),Object(m.jsxs)("tr",{className:"weather-right-card__items",children:[Object(m.jsx)("td",{className:"weather-right__item",children:"Humidity"}),Object(m.jsxs)("td",{className:"weather-right__item",children:[b.current.humidity,"%"]})]}),Object(m.jsxs)("tr",{className:"weather-right-card__items",children:[Object(m.jsx)("td",{className:"weather-right__item",children:"Pressure"}),Object(m.jsxs)("td",{className:"weather-right__item",children:[b.current.pressure," hPa"]})]})]})})})})]})}),Object(m.jsx)("div",{className:"widget-right__footer widget-right__footer--blue",children:Object(m.jsxs)("div",{className:"widget-right__layout",children:[Object(m.jsx)("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("div",{className:"widget-right__logo_black_small"})}),Object(m.jsx)("div",{className:"widget-right__date",children:h.a.unix(b.current.dt).format("YYYY-MM-DD, h:mm a")})]})})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"widget-left-menu widget-left-menu--brown",children:Object(m.jsx)("div",{className:"widget-left-menu__layout",children:Object(m.jsxs)("h3",{children:["Current Date and Time in ",t.capital[0]]})})}),Object(m.jsx)(l.a,{floated:"left",children:Object(m.jsx)("span",{className:"calendar__item",children:n})}),Object(m.jsx)("div",{className:"widget-left-menu widget-left-menu--brown",children:Object(m.jsxs)("div",{className:"widget-left-menu__layout",children:[Object(m.jsx)("h2",{className:"widget-left-menu__header",children:t.capital[0]}),Object(m.jsx)("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("div",{className:"widget-left-menu__logo_black"})})]})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)(l.a,{floated:"left",children:[Object(m.jsx)("div",{className:"weather-left-card__row2",children:Object(m.jsx)("p",{className:"weather-left-card__means",children:"Current Conditions"})}),Object(m.jsxs)("div",{className:"weather-left-card__row1",children:[Object(m.jsx)("img",{src:u,alt:"Weather in ".concat(t.name.common),className:"weather-left-card__img"}),Object(m.jsx)("div",{className:"weather-left-card__col",children:Object(m.jsxs)("p",{className:"weather-left-card__number",children:[Math.round(b.current.temp),Object(m.jsxs)("span",{children:["\xb0","metric"===o?"C":"F"]})]})})]}),Object(m.jsxs)("div",{className:"weather-left-card__row2",children:[Object(m.jsx)("p",{className:"weather-left-card__means",children:b.current.weather[0].description}),Object(m.jsxs)("p",{className:"weather-left-card__wind",children:["Wind: ",Math.round(b.current.wind_speed),"metric"===o?" m/s":" mph"]})]})]}),Object(m.jsxs)(l.a,{id:"weather",floated:"right",children:[Object(m.jsx)("div",{className:"weather-left-card__means",children:"Forecast"}),Object(m.jsxs)("div",{className:"widget-left__calendar",children:[Object(m.jsx)("ul",{className:"calendar",children:b.daily.map((function(e,t){return Object(m.jsxs)("li",{className:"calendar__item",children:[h.a.unix(b.current.dt).format("MMM D")===h.a.unix(e.dt).format("MMM D")?"Today":h.a.unix(e.dt).format("ddd"),Object(m.jsx)("br",{})," ",h.a.unix(e.dt).format("MMM D"),Object(m.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(e.dt).format("ddd")})]},t)}))}),Object(m.jsx)("div",{id:"graphic2",className:"widget-left__graphic",children:Object(m.jsxs)("svg",{className:"axis",width:"420",height:"79",fill:"#FEB020",children:[Object(m.jsx)("g",{children:Object(m.jsx)("path",{d:"M15,23.615384615384613L72.14285714285714,30.42307692307692L129.28571428571428,30.42307692307692L186.42857142857142,21.346153846153847L243.57142857142856,41.76923076923077L300.7142857142857,44.03846153846154L357.85714285714283,39.5L415,34.96153846153847L415,53.11538461538461L357.85714285714283,53.11538461538461L300.7142857142857,57.65384615384615L243.57142857142856,53.11538461538461L186.42857142857142,48.57692307692308L129.28571428571428,50.84615384615385L72.14285714285714,50.84615384615385L15,44.03846153846154L15,23.615384615384613"})}),Object(m.jsxs)("text",{x:"15",y:"19.115384615384613",textAnchor:"middle",children:[Math.round(b.daily[0].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"15",y:"61.03846153846154",textAnchor:"middle",children:[Math.round(b.daily[0].temp.min),"\xb0"]}),Object(m.jsxs)("text",{x:"72.14285714285714",y:"25.92307692307692",textAnchor:"middle",children:[Math.round(b.daily[1].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"72.14285714285714",y:"67.84615384615384",textAnchor:"middle",children:[Math.round(b.daily[1].temp.min),"\xb0"]}),Object(m.jsxs)("text",{x:"129.28571428571428",y:"25.92307692307692",textAnchor:"middle",children:[Math.round(b.daily[2].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"129.28571428571428",y:"67.84615384615384",textAnchor:"middle",children:[Math.round(b.daily[2].temp.min),"\xb0"]}),Object(m.jsxs)("text",{x:"186.42857142857142",y:"16.846153846153847",textAnchor:"middle",children:[Math.round(b.daily[3].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"186.42857142857142",y:"65.57692307692308",textAnchor:"middle",children:[Math.round(b.daily[3].temp.min),"\xb0"]}),Object(m.jsxs)("text",{x:"243.57142857142856",y:"37.26923076923077",textAnchor:"middle",children:[Math.round(b.daily[4].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"243.57142857142856",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(b.daily[4].temp.min),"\xb0"]}),Object(m.jsxs)("text",{x:"300.7142857142857",y:"39.53846153846154",textAnchor:"middle",children:[Math.round(b.daily[5].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"300.7142857142857",y:"74.65384615384616",textAnchor:"middle",children:[Math.round(b.daily[5].temp.min),"\xb0"]}),Object(m.jsxs)("text",{x:"357.85714285714283",y:"35",textAnchor:"middle",children:[Math.round(b.daily[6].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"357.85714285714283",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(b.daily[6].temp.min),"\xb0"]}),Object(m.jsxs)("text",{x:"415",y:"30.461538461538467",textAnchor:"middle",children:[Math.round(b.daily[7].temp.max),"\xb0"]}),Object(m.jsxs)("text",{x:"415",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(b.daily[7].temp.min),"\xb0"]})]})})]})]})]})]})}var o=a.a.memo(x);t.default=o}}]);
//# sourceMappingURL=24.4b9a3426.chunk.js.map