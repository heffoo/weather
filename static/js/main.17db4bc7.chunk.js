(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{24:function(e,t,a){e.exports=a(43)},29:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),i=(a(29),a(20)),o=a(10),s=a.n(o),m=a(13),u=a(8),p={apiUrl:"http://api.openweathermap.org/data/2.5/weather",apiUrlSecond:"http://api.openweathermap.org/data/2.5/forecast",apiUrlThird:"https://api.openweathermap.org/data/2.5/onecall"},d=(a(31),function(e){var t=e.fivedays;return c.a.createElement("section",{className:"different-days-block"},c.a.createElement("div",{className:"block-scroll-wrapper"},c.a.createElement("div",{className:"block-scroll"},t&&t.list.map((function(e){return c.a.createElement("div",{key:e.dt,className:"day-block"},c.a.createElement("div",null,c.a.createElement("p",null,new Date(1e3*e.dt).toLocaleString("ru",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"})),c.a.createElement("p",null,Math.ceil("".concat(e.main.temp)),"\xb0")),c.a.createElement("img",{alt:"",className:"weather-block-img",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}))})))))}),E=a(7),b=a(1),f=a(12),h=a(22),v=a.n(h),w=(a(35),function(e){var t=e.dailyweather;return c.a.createElement("section",{className:"different-days-block"},c.a.createElement("div",{className:"block-scroll-wrapper"},c.a.createElement("div",{className:"block-scroll"},t&&t.daily.map((function(e){return c.a.createElement("div",{key:e.dt,className:"day-block"},c.a.createElement("div",null,c.a.createElement("p",null,new Date(1e3*e.dt).toLocaleString("ru",{month:"long",day:"numeric"})),c.a.createElement("p",null,Math.ceil("".concat(e.temp.day)),"\xb0")),c.a.createElement("img",{className:"weather-block-img",alt:"",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}))})))))});a(36);function y(){var e=Object(i.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n  "]);return y=function(){return e},e}var g=function(){var e,t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)("\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440"),o=Object(u.a)(i,2),h=o[0],g=o[1],N=Object(n.useState)(),k=Object(u.a)(N,2),j=k[0],x=k[1],O=Object(n.useState)(),S=Object(u.a)(O,2),I=S[0],P=S[1],U=Object(n.useState)(!0),C=Object(u.a)(U,2),A=C[0],D=C[1],M=p,B=r&&r.lon,q=r&&r.lat,J="5f892c8a0b4c47ee1b455fa5bbc9851f",L=encodeURIComponent,R={APPID:J,q:"".concat(h),units:"metric",lang:"ru"},T={APPID:J,units:"metric",q:"".concat(h),lang:"ru"},z="?"+Object.keys(T).map((function(e){return L(e)+"="+L(T[e])})).join("&"),K="?"+Object.keys(R).map((function(e){return L(e)+"="+L(R[e])})).join("&"),_=function(){e=document.getElementById("input").value.trim(),g(e),document.getElementById("input").value=""};function F(e){return G.apply(this,arguments)}function G(){return(G=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=8;break}return console.log(a),D(!1),e.abrupt("return",!1);case 8:return D(!1),e.next=11,a.json();case 11:return n=e.sent,e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("".concat(M.apiUrl).concat(K));case 2:if(t=e.sent){e.next=8;break}return alert("type a correct city"),e.abrupt("return");case 8:return l(t),e.t0=x,e.next=12,F("".concat(M.apiUrlSecond).concat(z));case 12:if(e.t1=e.sent,(0,e.t0)(e.t1),B=t.coord.lon,q=t.coord.lat,a={APPID:J,lat:q,lon:B,units:"metric",exclude:"hourly"},n="?"+Object.keys(a).map((function(e){return L(e)+"="+L(a[e])})).join("&"),I){e.next=24;break}return e.t2=P,e.next=22,F("".concat(M.apiUrlThird).concat(n));case 22:e.t3=e.sent,(0,e.t2)(e.t3);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]);var H,Q=Object(f.css)(y());return function(){var e=r&&r.weather[0].main;H="Clouds"===e?"\u041e\u0431\u043b\u0430\u0447\u043d\u043e":"Rain"===e?"\u0414\u043e\u0436\u0434\u044c":"Clear"===e?"\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e":e}(),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"search-place"},c.a.createElement("input",{type:"text",className:"city-input",id:"input",onKeyPress:function(e){return"Enter"===e.key&&_()}}),c.a.createElement("input",{type:"button",className:"city-button",value:"\ud83d\udd0d",onClick:_}),c.a.createElement("p",null,"\u0433\u043e\u0440\u043e\u0434: ",r&&r.name)," ",c.a.createElement("div",{className:A?"sweet-loading-show":"sweet-loading"},c.a.createElement(v.a,{css:Q,size:10,color:"#ffffff"}))),c.a.createElement("div",{className:"wrapper"},r?c.a.createElement("div",null,c.a.createElement("div",{className:"main-info"},c.a.createElement("div",null,c.a.createElement("div",{className:"temp"}," ",Math.ceil(r.main.temp),"\xb0")," ",c.a.createElement("p",null,"\u041f\u043e \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044f\u043c: ",Math.ceil(r.main.feels_like)," \xb0")," "),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"clouds"},c.a.createElement("h1",null," ",H),c.a.createElement("p",null," ",r&&r.weather[0].description," ")),c.a.createElement("br",null),c.a.createElement("img",{className:"weather-img",alt:r.weather[0].description,src:"http://openweathermap.org/img/wn/".concat(r.weather[0].icon,"@2x.png")}))):"",c.a.createElement("br",null)),c.a.createElement("div",{className:"down"},c.a.createElement("div",{className:"coords"},"\u0448\u0438\u0440\u043e\u0442\u0430 ",r&&r.coord.lon," ",c.a.createElement("br",null),"\u0434\u043e\u043b\u0433\u043e\u0442\u0430 ",r&&r.coord.lat,c.a.createElement("br",null),"\u0432\u0435\u0442\u0435\u0440 ",r&&r.wind.speed,"\u043c\u0441/c",c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("div",{className:"btn-wrapper"},c.a.createElement(E.b,{exact:!0,to:"/",activeClassName:"active",className:"day-btn"},"\u043f\u043e\u0447\u0430\u0441\u043e\u0432\u043e\u0439"),c.a.createElement(E.b,{to:"/old",activeClassName:"active",className:"day-btn"},"\u043f\u043e \u0434\u043d\u044f\u043c")),c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/"},c.a.createElement(d,{params:T,temp:void 0,fivedays:j})),c.a.createElement(b.a,{path:"/old"},c.a.createElement(w,{dailyweather:I})))))))};a(42);var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E.a,null,c.a.createElement(N,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.17db4bc7.chunk.js.map