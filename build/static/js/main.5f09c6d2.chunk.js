(this["webpackJsonprestaurant-app"]=this["webpackJsonprestaurant-app"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(20),a=c.n(r),i=(c(55),c(8)),j=(c(56),c(41),c(79)),o=c(81),l=c(80),d=c(48),b=c(72),h=c(75),u=c(78),x=c(49),O=c(34),p=c(6),m=c(82),f=c(1);function g(){return Object(f.jsxs)(m.a,{children:[Object(f.jsxs)(m.a.Body,{children:[Object(f.jsx)(m.a.Title,{children:"Maickel Siqueira"}),Object(f.jsx)(m.a.Text,{className:"text-muted",children:"Student at Seneca college."})]}),Object(f.jsxs)(m.a.Footer,{children:["Check my other projects at my portfolio:"," ",Object(f.jsx)("a",{href:"https://www.maickel.ca",children:"website"})]})]})}var v=c(16),w=c.n(v),N=c(22),y=c(73),k=c(84),C=c(74),S={uri:"https://web422-assignment1-msiqueira.herokuapp.com/api/restaurants",perPage:10},F=c(70),B=c(71);function M(){return Object(f.jsx)(F.a,{className:"text-center h4 mt-5",children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsxs)("div",{className:"text-center h3 mt-2",children:[Object(f.jsx)(B.a,{animation:"border",variant:"secondary",className:"mr-3"})," ","Loading."]}),Object(f.jsx)("p",{children:"Wait a few seconds. If it takes too long please refresh."})]})})}var P=c(76),T={age:function(e){return e.reduce((function(e,t){return e+t.score}),0)/e.length},parseDate:function(e){var t=new Date(e),c=t.getDate(),s=t.getMonth()+1,n=t.getFullYear();return"".concat(s,"/").concat(c,"/").concat(n)},fixCase:function(e){return e.split(" ").map((function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" ")}},z=c(15);function L(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(F.a,{children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsxs)("p",{className:"text-center h3 mt-2",children:["No restaurants found ",e.search,"."]}),Object(f.jsx)("p",{children:"Please retry."}),Object(f.jsx)("br",{}),Object(f.jsx)(z.Link,{to:"/restaurants",children:Object(f.jsx)(b.a,{variant:"secondary",size:"sm",children:"Clear"})})]})})})}function A(e){var t=Object(s.useState)(null),c=Object(i.a)(t,2),n=c[0],r=c[1],a=Object(s.useState)(!0),j=Object(i.a)(a,2),o=j[0],l=j[1];if(Object(s.useEffect)((function(){function t(){return(t=Object(N.a)(w.a.mark((function t(){var c,s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,fetch("".concat(S.uri,"/").concat(e.id));case 3:return s=t.sent,t.next=6,s.json();case 6:(c=t.sent).hasOwnProperty("_id")?r(c):r(null),l(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.id]),o)return Object(f.jsx)(M,{});if(n)return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{children:Object(f.jsxs)(m.a.Body,{children:[Object(f.jsx)(m.a.Title,{children:n.name}),Object(f.jsxs)(m.a.Text,{className:"text-muted",children:[n.address.building," ",n.address.street," -",n.borough]})]})}),Object(f.jsxs)(y.a,{style:{height:"400px"},center:[n.address.coord[1],n.address.coord[0]],zoom:13,scrollWheelZoom:!1,children:[Object(f.jsx)(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(f.jsx)(C.a,{position:[n.address.coord[1],n.address.coord[0]]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"Ratings"}),Object(f.jsx)("hr",{}),Object(f.jsx)(h.a,{fluid:!0,children:Object(f.jsx)(P.a,{children:n.grades.map((function(e,t){return Object(f.jsxs)(m.a,{className:"mr-4",children:[Object(f.jsxs)(m.a.Header,{children:["Grade: ",e.grade]}),Object(f.jsxs)(m.a.Body,{children:["Completed: ",T.parseDate(e.date)]})]},t)}))})})]});var d="with id ".concat(e.id);return Object(f.jsx)(L,{search:d})}var D=c(45),R=c.n(D),I=c(83),q=c(77);function Y(e){var t=Object(p.k)();return Object(f.jsxs)(q.a,{striped:!0,bordered:!0,hover:!0,className:"white-background",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Name"}),Object(f.jsx)("th",{scope:"col",children:"Address"}),Object(f.jsx)("th",{scope:"col",children:"Borough"}),Object(f.jsx)("th",{scope:"col",children:"Cuisine"})]})}),Object(f.jsx)("tbody",{children:e.restaurants.map((function(e,c){return Object(f.jsxs)("tr",{"data-id":e._id,onClick:function(){t.push("/restaurant/".concat(e._id))},children:[Object(f.jsx)("td",{className:"col-4",children:e.name}),Object(f.jsxs)("td",{className:"col-3",children:[e.address.building," ",e.address.street]}),Object(f.jsx)("td",{className:"col-2",children:e.borough}),Object(f.jsx)("td",{className:"col-4 text-nowrap",children:e.cuisine})]},c)}))})]})}function _(e){var t=Object(s.useState)(null),c=Object(i.a)(t,2),n=c[0],r=c[1],a=Object(s.useState)(1),j=Object(i.a)(a,2),l=j[0],d=j[1],b=Object(s.useState)(""),h=Object(i.a)(b,2),u=h[0],x=h[1],O=Object(s.useState)(!0),p=Object(i.a)(O,2),g=p[0],v=p[1],y=R.a.parse(e.query);Object(s.useEffect)((function(){var e=y.borough?"&borough=".concat(T.fixCase(y.borough)):"";function t(){return(t=Object(N.a)(w.a.mark((function t(){var c,s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.next=3,fetch("".concat(S.uri,"?page=").concat(l,"&perPage=").concat(S.perPage).concat(e));case 3:return c=t.sent,t.next=6,c.json();case 6:s=t.sent,r(s),v(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e=encodeURI(e),console.log(e),x(y.borough),function(){t.apply(this,arguments)}()}),[l,y.borough]);var k=1===l;if(g)return Object(f.jsx)(M,{});if(n&&n.length>1)return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{children:Object(f.jsxs)(m.a.Body,{children:[Object(f.jsx)(m.a.Title,{children:"Restaurant List"}),Object(f.jsxs)(m.a.Text,{className:"text-muted",children:["Full list of restaurants. Optionally sorted by borough:"," ",u]})]})}),Object(f.jsx)("br",{}),Object(f.jsx)(Y,{restaurants:n}),Object(f.jsx)(o.a,{"aria-label":"Restaurant navigation",className:"justify-content-center",children:Object(f.jsxs)(I.a,{children:[Object(f.jsx)(I.a.Prev,{disabled:k,onClick:function(e){e.preventDefault(),l>1&&d(l-1)}}),Object(f.jsx)(I.a.Item,{children:l}),Object(f.jsx)(I.a.Next,{onClick:function(e){e.preventDefault(),d(l+1)}})]})})]});var C="in this borough ".concat(u);return Object(f.jsx)(L,{search:C})}function E(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(F.a,{children:Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("p",{className:"text-center h3 mt-2",children:"404. Page Not Found"}),Object(f.jsxs)("p",{className:"mt-3",children:["We can't find what you were looking for..."," ",Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-emoji-frown ml-2",viewBox:"0 0 16 16",children:[Object(f.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(f.jsx)("path",{d:"M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})]})]})]})})})}function W(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),a=Object(i.a)(r,2),j=a[0],o=a[1],l=Object(p.k)();if(Object(s.useEffect)((function(){function e(){return(e=Object(N.a)(w.a.mark((function e(){var t,c,s,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),t=Math.trunc(100*Math.random()+1),e.next=4,fetch("".concat(S.uri,"?page=").concat(t,"&perPage=").concat(S.perPage));case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,r=Math.trunc(10*Math.random()),s[r].hasOwnProperty("_id")?n(s[r]):n(null),o(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),j)return Object(f.jsx)(M,{});if(c)return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h.a,{children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(m.a.Img,{variant:"top",src:"thomas-habr-6NmnrAJPq7M-unsplash.jpg",alt:"N.Y. skyline"}),Object(f.jsxs)(m.a.Body,{className:"mid-background",children:[Object(f.jsx)("h2",{className:"text-center text-light",children:"New York Restaurants"}),Object(f.jsx)(m.a.Text,{className:"text-center text-light",children:"An extensive list of restaurants in New York."})]})]})}),Object(f.jsx)("br",{}),Object(f.jsx)(h.a,{children:Object(f.jsx)(m.a,{children:Object(f.jsxs)(m.a.Body,{children:[Object(f.jsxs)(m.a.Title,{className:"text-center",children:[" ","Feeling overwhelmed with so many choices? Try this one:"]}),Object(f.jsxs)(m.a.Text,{className:"d-flex justify-content-between",children:[Object(f.jsxs)("span",{children:[Object(f.jsxs)("strong",{children:[c.name," "]})," ",Object(f.jsxs)("span",{className:"text-muted",children:["located at",c.address.building," ",c.address.street," -"," ",c.borough]})]}),Object(f.jsx)(b.a,{className:"light-background",onClick:function(){l.push("/restaurant/".concat(c._id))},children:"More information"})]}),Object(f.jsxs)(y.a,{style:{height:"200px"},center:[c.address.coord[1],c.address.coord[0]],zoom:13,scrollWheelZoom:!1,children:[Object(f.jsx)(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(f.jsx)(C.a,{position:[c.address.coord[1],c.address.coord[0]]})]})]})})})]});return Object(f.jsx)(L,{search:"Sorry. Something went wrong."})}var J=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(p.k)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(j.a,{className:"dark-background",expand:"lg",children:[Object(f.jsx)(O.LinkContainer,{to:"/",children:Object(f.jsx)(j.a.Brand,{className:"text-light",children:"New York Restaurants"})}),Object(f.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(f.jsxs)(o.a,{className:"mr-auto",children:[Object(f.jsx)(O.LinkContainer,{to:"/restaurants/",children:Object(f.jsx)(o.a.Link,{className:"text-light",children:"Full List"})}),Object(f.jsx)(O.LinkContainer,{to:"/about",children:Object(f.jsx)(o.a.Link,{className:"text-light",children:"About"})})]}),Object(f.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),r.push("/restaurants?borough=".concat(encodeURI(c))),n("")},inline:!0,children:[Object(f.jsx)(d.a,{type:"text",placeholder:"Borough",className:"mr-sm-2",value:c,onChange:function(e){return n(e.target.value)}}),Object(f.jsxs)(b.a,{type:"submit",variant:"outline-warning",children:[Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16",className:"mr-2 mb-1",children:Object(f.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})," ","Search"]})]})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)(h.a,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(x.a,{children:Object(f.jsxs)(p.g,{children:[Object(f.jsx)(p.d,{exact:!0,path:"/",render:function(){return Object(f.jsx)(W,{})}}),Object(f.jsx)(p.d,{exact:!0,path:"/about",render:function(){return Object(f.jsx)(g,{})}}),Object(f.jsx)(p.d,{path:"/restaurants",render:function(e){return Object(f.jsx)(_,{query:e.location.search})}}),Object(f.jsx)(p.d,{path:"/restaurant/:id",render:function(e){return Object(f.jsx)(A,{id:e.match.params.id})}}),Object(f.jsx)(p.d,{render:function(){return Object(f.jsx)(E,{})}})]})})})})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(z.BrowserRouter,{children:Object(f.jsx)(J,{})})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.5f09c6d2.chunk.js.map