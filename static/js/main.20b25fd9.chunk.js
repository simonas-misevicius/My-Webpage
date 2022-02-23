(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n(0),a=n.n(r),s=n(28),i=n.n(s),j=n(45),o=n(11),u=n(179),l=n(180),b=n(2);function d(){return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(l.a,{children:Object(b.jsx)("h2",{className:"text-center",children:"Ongoing project to show my web programming skills."})}),Object(b.jsx)("br",{}),Object(b.jsx)(l.a,{children:Object(b.jsx)("h2",{className:"text-center ",children:"Click links at the top of the page to see different small programs."})}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Webpage repository https://github.com/simonas-misevicius/My-Webpage"}),Object(b.jsx)("h5",{children:"Webpage hosted on github pages. Used single page routing. Other libraries more explained in repository readme page."}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Apollo server repository https://github.com/simonas-misevicius/apollo-server"}),Object(b.jsx)("h5",{children:"Project uses serverless database technologie. Database is in AWS. Apollo server is responsible for executing webpage requests on database. Apollo server also lives in AWS as Lambda function. Apollo server uses graphQL language to construct queries and mutations. Also uses schema-resolver-datasource model."}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"https://github.com/simonas-misevicius/WebServicePicture"}),Object(b.jsx)("h5",{children:"Made with .Net. Hosted on Azure. Uses model-controller model. Uses inmemory database."}),Object(b.jsx)("br",{})]})}var O=n(7);function h(e){e.path;var t=e.request,n=e.name,c=Object(r.useState)(0),a=Object(O.a)(c,2),s=a[0],i=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{value:s,onChange:function(e){i(e.target.value)},type:"number"}),Object(b.jsx)("button",{onClick:function(){""==s&&"number"!=typeof s||t(s,n)},children:n})]})}var p=n(67),m=n(93);function x(){var e=Object(r.useState)(),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(p.usePromiseTracker)().promiseInProgress,i=n(110),j=function(e,t){var n="https://simonasrest.azurewebsites.net/api/Images/1/";null==e?n+=t:n=n+t+"/"+e.toString(),Object(p.trackPromise)(i.get(n).then((function(e){a(e.data.imageBytes)})).catch((function(e){console.log(e)})))};Object(r.useEffect)((function(){j(null,"Reset")}),[]);var o="data:image/jpg;base64,"+c;return Object(b.jsxs)(u.a,{children:[Object(b.jsx)("h1",{className:"text-center",children:"Small example of consuming web api, which exposes image processing functions."}),null==c?null:Object(b.jsx)("img",{src:o,alt:"Example"}),!0===s?Object(b.jsx)(m.ClipLoader,{}):null,Object(b.jsx)("br",{}),Object(b.jsx)(h,{request:j,name:"Brightness"}),Object(b.jsx)("br",{}),Object(b.jsx)(h,{request:j,name:"Hue"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){return j(null,"Reset")},children:"Reset"})]})}var f=n(30),v=n(190),g=n(187),w=n(5),y=n(186);function k(e){var t=e.ReturnToList,n=e.rowInfo,c=e.refetch,r=e.Edit,a=e.uppers;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r,{rowInfo:n,handlesuccess:function(){c(),t(0,null,null)},uppers:a}),Object(b.jsx)("button",{onClick:function(){t(0,null,null)},children:"Cancel"})]})}function S(e){var t=e.data,n=e.List,c=e.refetch,a=e.Edit,s=Object(r.useState)({showEdit:0,name:null,id:null,upperName:null,upperId:null}),i=Object(O.a)(s,2),j=i[0],o=i[1],u=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;o({showEdit:e,name:t,id:n,upperName:c,upperId:r})};return 1==j.showEdit?Object(b.jsx)(k,{ReturnToList:u,rowInfo:j,refetch:c,Edit:a,uppers:t.uppers}):Object(b.jsx)(n,{data:t,EditRow:u,refetch:c})}var I=n(181);function E(e){var t=e.rowData,n=e.mutationString,c=e.MyRow,a=e.upperName,s=e.upperId,i=e.EditRow,j=e.checkData,o=Object(v.a)(n),u=Object(I.a)(o),d=Object(O.a)(u,2),h=d[0],p=d[1],m=p.data;p.loading,p.error;return Object(r.useEffect)((function(){m&&j(m)})),Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(y.a,{children:Object(b.jsx)(c,{rowData:t,upperName:a})}),Object(b.jsx)(y.a,{children:Object(b.jsx)("button",{onClick:function(){h({variables:{id:t.id}})},children:"Remove item"})}),Object(b.jsx)(y.a,{children:Object(b.jsx)("button",{onClick:function(){i(t,a,s)},children:"Edit item"})})]})})}function D(e){var t=e.rowData,n=e.upperName;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(y.a,{children:t.namel}),Object(b.jsxs)(y.a,{children:[" ",n]})]})})}var C;function R(e){var t=e.data,n=e.EditRow,c=e.refetch,r=function(e,t,c){n(1,e.namel,e.id,t,c)},a=function(e){e.removeLower.success&&c()};return Object(b.jsx)("ul",{children:t.uppers.map((function(e,t){if(null!=e.lowers[0].id)return e.lowers.map((function(n,c){return Object(b.jsx)("li",{children:Object(b.jsx)(E,{rowData:n,mutationString:"\nmutation Mutation($id: ID!) {\n  removeLower(id: $id) {\n    success\n  }\n}",MyRow:D,upperName:e.name,upperId:e.id,EditRow:r,checkData:a})},10*t+c)}))}))})}var $=Object(v.a)(C||(C=Object(f.a)(["\n  mutation Mutation($name: String!) {\n    addUpper(name: $name) {\n      success\n    }\n  }\n"])));function L(e){var t=e.refetch,n=Object(I.a)($),c=Object(O.a)(n,2),a=c[0],s=c[1],i=s.data,j=(s.loading,s.error,Object(r.useState)("")),o=Object(O.a)(j,2),u=o[0],l=o[1];return i&&t(),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({variables:{name:u}})},children:[Object(b.jsx)("input",{value:u,onChange:function(e){l(e.target.value)},type:"text"}),Object(b.jsx)("button",{type:"submit",children:"Add person"})]})}var F,M=n(59),N=n(38),A=Object(v.a)(F||(F=Object(f.a)(["\n  mutation Mutation($name: String!, $keyId: ID!) {\n    addLower(name: $name, keyId: $keyId) {\n      success\n    }\n  }\n"])));function P(e){var t,n=e.uppers,c=e.refetch,a=Object(I.a)(A),s=Object(O.a)(a,2),i=s[0],j=s[1],o=(j.data,j.loading,j.error,Object(r.useState)("")),u=Object(O.a)(o,2),l=u[0],d=u[1],h=Object(r.useState)(""),p=Object(O.a)(h,2),m=p[0],x=p[1],f=Object(N.d)();return null!=n&&(t=n.map((function(e,t){return{value:e.id,label:e.name}}))),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i({variables:{name:m,keyId:l.value}}).then((function(e){e.data;c()})).catch((function(e){f.error("Missing input!")}))},children:[Object(b.jsx)("input",{value:m,onChange:function(e){x(e.target.value)},type:"text"}),Object(b.jsx)("button",{type:"submit",children:"Add object"}),Object(b.jsx)(M.a,{defaultValue:l,onChange:d,options:t})]})})}function T(e){var t=e.rowData;return Object(b.jsx)(b.Fragment,{children:t.name})}var q,U="\nmutation Mutation($id: ID!) {\n  removeUpper(id: $id) {\n    success\n  }\n}";function W(e){var t=e.data,n=e.EditRow,c=e.refetch,r=Object(N.d)(),a=function(e){n(1,e.name,e.id)},s=function(e){e.removeUpper.success?c():r.show("Remove lowers first")};return Object(b.jsx)("ul",{children:t.uppers.map((function(e,t){return null!=e.lowers[0].id?Object(b.jsxs)("li",{children:[Object(b.jsx)(E,{rowData:e,mutationString:U,MyRow:T,callEditRow:a,checkData:s}),Object(b.jsx)("ul",{children:e.lowers.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("div",{children:e.namel})},t)}))})]},t):Object(b.jsx)("li",{children:Object(b.jsx)(E,{rowData:e,mutationString:U,MyRow:T,callEditRow:a,checkData:s})},t)}))})}var B,z=Object(v.a)(q||(q=Object(f.a)(["\n  mutation Mutation($name: String!, $id: ID!) {\n    editUpper(name: $name, id: $id) {\n      success\n    }\n  }\n"])));function H(e){var t=e.rowInfo,n=e.handlesuccess,c=Object(I.a)(z),a=Object(O.a)(c,2),s=a[0],i=a[1],j=i.data,o=(i.loading,i.error,Object(r.useState)(t.name)),u=Object(O.a)(o,2),l=u[0],d=u[1];return Object(r.useEffect)((function(){j&&n()})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s({variables:{name:l,id:t.id}})},children:[Object(b.jsx)("input",{value:l,onChange:function(e){d(e.target.value)},type:"text"}),Object(b.jsx)("button",{type:"submit",children:"Save"})]})})}var K,J=Object(v.a)(B||(B=Object(f.a)(["\n  mutation Mutation($name: String!, $keyId: ID!, $id: ID!) {\n    editLower(name: $name, keyId: $keyId, id: $id) {\n      success\n    }\n  }\n"])));function V(e){var t=e.rowInfo,n=e.handlesuccess,c=e.uppers,a=Object(I.a)(J),s=Object(O.a)(a,2),i=s[0],j=s[1],o=j.data,u=(j.loading,j.error,Object(r.useState)(t.name)),l=Object(O.a)(u,2),d=l[0],h=l[1],p=Object(r.useState)({value:t.upperId,label:t.upperName}),m=Object(O.a)(p,2),x=m[0],f=m[1],v=c.map((function(e,t){return{value:e.id,label:e.name}}));return Object(r.useEffect)((function(){o&&n()})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i({variables:{name:d,keyId:x.value,id:t.id}})},children:[Object(b.jsx)("input",{value:d,onChange:function(e){h(e.target.value)},type:"text"}),Object(b.jsx)("button",{type:"submit",children:"Save"})]}),Object(b.jsx)(M.a,{defaultValue:x,onChange:f,options:v})]})}var Q=Object(v.a)(K||(K=Object(f.a)(["\n  query {\n    uppers {\n      name\n      id\n      lowers {\n        namel\n        id\n        upperkey\n      }\n    }\n  }\n"])));function _(){var e=Object(g.a)(Q,{fetchPolicy:"network-only",notifyOnNetworkStatusChange:!0}),t=e.loading,n=e.error,c=e.data,r=e.refetch;return e.networkStatus===w.a.refetch?Object(b.jsx)("p",{children:"Refetching..."}):t?Object(b.jsx)("p",{children:"Loading..."}):n?Object(b.jsx)("p",{children:"Error "}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(l.a,{children:[Object(b.jsx)(y.a,{children:Object(b.jsx)(L,{refetch:r})}),Object(b.jsx)(y.a,{children:Object(b.jsx)(P,{uppers:c.uppers,refetch:r})})]}),Object(b.jsx)("br",{}),null!=c.uppers?Object(b.jsxs)(l.a,{children:[Object(b.jsx)(y.a,{children:Object(b.jsx)(S,{data:c,List:W,refetch:r,Edit:H})}),Object(b.jsx)(y.a,{children:Object(b.jsx)(S,{data:c,List:R,refetch:r,Edit:V})})]}):null]})})}function G(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h5",{children:"Funcionality for using two tables connected with foreign key. Foreign key field selection made with dropdown list. Made with reusable components."}),Object(b.jsx)("br",{}),Object(b.jsx)(_,{})]})}var X=n(189);var Y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(X.a,{variant:"pills",children:[Object(b.jsx)(X.a.Item,{children:Object(b.jsx)(X.a.Link,{eventKey:"link-1",as:j.b,to:"/",children:"Home"})}),Object(b.jsx)(X.a.Item,{children:Object(b.jsx)(X.a.Link,{eventKey:"link-4",as:j.b,to:"/serverless",children:"Serverless DB"})}),Object(b.jsx)(X.a.Item,{children:Object(b.jsx)(X.a.Link,{eventKey:"link-3",as:j.b,to:"/webservice",children:"Consume Web Service"})})]}),Object(b.jsx)("br",{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(d,{})}),Object(b.jsx)(o.a,{path:"/webservice",children:Object(b.jsx)(x,{})}),Object(b.jsx)(o.a,{path:"/serverless",children:Object(b.jsx)(G,{})})]})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},ee=(n(172),n(174)),te=n(191),ne=n(188),ce=n(97),re={position:N.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:N.c.SCALE},ae=new ee.a({uri:"https://0jl96uttif.execute-api.us-east-1.amazonaws.com/dev/graphql",cache:new te.a});i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(ne.a,{client:ae,children:Object(b.jsx)(N.a,Object(c.a)(Object(c.a)({template:ce.a},re),{},{children:Object(b.jsx)(Y,{})}))})})}),document.getElementById("root")),Z()}},[[173,1,2]]]);
//# sourceMappingURL=main.20b25fd9.chunk.js.map