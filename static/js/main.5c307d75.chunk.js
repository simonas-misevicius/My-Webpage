(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{73:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(38),i=n.n(r),s=n(17),j=n(4),u=n(74),b=n(75),o=n(1);function l(){return n(47).get("https://simonasrest.azurewebsites.net/api/Todo").then((function(e){console.log(e.data[0].name)})),Object(o.jsxs)(u.a,{children:[Object(o.jsx)(b.a,{children:Object(o.jsx)("h2",{className:"text-center",children:"Ongoing project to show my web programming skills."})}),Object(o.jsx)("br",{}),Object(o.jsx)(b.a,{children:Object(o.jsx)("h2",{className:"text-center ",children:"Click links at the top of the page to see different small programs."})})]})}var d=n(21),O=n(5);function h(e){var t=e.addToList,n=void 0===t?function(e){return e}:t,a=Object(c.useState)(""),r=Object(O.a)(a,2),i=r[0],s=r[1],j=Object(c.useState)(""),u=Object(O.a)(j,2),b=u[0],l=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{id:"numInput",value:i,onChange:function(e){s(e.target.value)},type:"number",placeholder:"123"}),Object(o.jsx)("input",{id:"textInput",value:b,onChange:function(e){l(e.target.value)},type:"text",placeholder:"abc"}),Object(o.jsx)("button",{id:"addButton",onClick:function(){""!=i&&""!=b&&n(i,b)},children:"ADD"}),""==i||""==b?Object(o.jsx)("p",{children:"Missing input"}):null]})}function x(e){var t=e.item,n=e.rowId,a=e.removeFromList,r=e.editList,i=Object(c.useState)(t.number),s=Object(O.a)(i,2),j=s[0],u=s[1],b=Object(c.useState)(t.name),l=Object(O.a)(b,2),d=l[0],h=l[1];Object(c.useEffect)((function(){u(t.number),h(t.name)}),[t]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{id:"numEdit",value:j,onChange:function(e){u(e.target.value)},type:"number"}),Object(o.jsx)("input",{id:"textEdit",value:d,onChange:function(e){h(e.target.value)},type:"text"}),Object(o.jsx)("button",{id:"deleteButton","data-remove":n,onClick:a,children:"Delete"}),Object(o.jsx)("button",{id:"editButton","data-edit":n,onClick:function(e){if(""!==j&&""!==d){var t=e.target.dataset.edit;r(t,d,j)}},children:"Edit"}),""===j||""===d?Object(o.jsx)("p",{children:"Missing input"}):null]})}var m=n(76);function p(e){var t=e.data,n=Object(c.useState)(t),a=Object(O.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),j=Object(O.a)(s,2),l=j[0],p=j[1],f=function(e){var t=parseInt(e.target.dataset.remove),n=r.filter((function(e,n){return n!==t}));i(n)},v=function(e,t,n){var c=parseInt(e),a=[].concat(Object(d.a)(r.slice(0,e)),[{name:t,number:n}],Object(d.a)(r.slice(c+1)));i(a)};return Object(o.jsxs)(u.a,{children:[Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["Search",Object(o.jsx)("input",{id:"filter",value:l,onChange:function(e){return p(e.target.value)},type:"text"})]}),Object(o.jsx)(m.a,{lg:6,children:Object(o.jsx)(h,{addToList:function(e,t){var n=[].concat(Object(d.a)(r),[{name:t,number:e}]);i(n)}})}),Object(o.jsx)(m.a,{children:Object(o.jsx)("button",{id:"sort",onClick:function(){var e=r.slice(0).sort((function(e,t){return e.name.localeCompare(t.name)}));i(e)},children:"Sort by name"})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:r.map((function(e,t){return""===l||e.name.startsWith(l)?Object(o.jsx)("li",{children:Object(o.jsx)(x,{item:e,rowId:t,removeFromList:f,editList:v})},t):null}))})}),Object(o.jsx)("br",{})," ",Object(o.jsxs)("h4",{id:"sum",children:["Sum is ",r.reduce((function(e,t){return e+parseInt(t.number)}),0)]})]})}var f=n(77);var v=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(f.a,{variant:"pills",children:[Object(o.jsx)(f.a.Item,{children:Object(o.jsx)(f.a.Link,{eventKey:"link-1",as:s.b,to:"/",children:"Home"})}),Object(o.jsx)(f.a.Item,{children:Object(o.jsx)(f.a.Link,{eventKey:"link-2",as:s.b,to:"/mylist",children:"List example"})})]}),Object(o.jsx)("br",{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(l,{})}),Object(o.jsx)(j.a,{path:"/mylist",children:Object(o.jsx)(p,{data:[{name:"abc",number:123},{name:"def",number:235}]})})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(72);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(v,{})})}),document.getElementById("root")),g()}},[[73,1,2]]]);
//# sourceMappingURL=main.5c307d75.chunk.js.map