(this["webpackJsonpsocial-site"]=this["webpackJsonpsocial-site"]||[]).push([[0],{35:function(e,t,n){},49:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(16),i=n.n(s),o=(n(49),n(20)),r=n(32),l=n(19),d=(n(50),n(43)),j=(n(35),n(22)),u=n(38),b=n(18),O=n(26),h=n(5);var p=function(e){return Object(h.jsx)(h.Fragment,{children:(console.log(e),e.pages.map((function(t){return Object(h.jsx)(u.a,{children:Object(h.jsx)(j.a,{style:{width:"30rem"},children:Object(h.jsxs)(j.a.Body,{children:[Object(h.jsx)(j.a.Header,{className:"username",children:t.id}),Object(h.jsx)(j.a.Text,{style:{textAlign:"justify"},children:t.post}),Object(h.jsxs)(u.a,{children:[Object(h.jsx)(b.a,{xs:"auto",children:Object(h.jsx)(O.a,{onClick:function(){return e.buttonHandler(t.postId)},children:"Like"})}),Object(h.jsx)(b.a,{xs:"auto",children:Object(h.jsx)("h5",{children:t.likes})})]})]})})},t.postId)})))})},f=n(15),x=n(30),g=n.n(x);n(54);var m=function(e){var t=Object(c.useState)({postId:0,id:"",post:"",likes:0}),n=Object(l.a)(t,2),a=n[0],s=n[1];g.a.options={closeButton:!0,debug:!1,extendedTimeOut:"3000",hideDuration:"1000",hideEasing:"linear",hideMethod:"fadeOut",newestOnTop:!1,onclick:null,positionClass:"toast-top-full-width",preventDuplicates:!0,progressBar:!0,showDuration:"3000",showEasing:"swing",showMethod:"fadeIn",timeOut:"5000"},g.a.clear();var i=function(e){var t=Object(o.a)({},a);t[e.target.name]=e.target.value,s(t)};return Object(c.useEffect)((function(){s({postId:e.id,id:"",post:"",likes:0})}),[e.id]),Object(h.jsx)("div",{className:"add-container",children:Object(h.jsxs)(f.a,{onSubmit:function(t){return function(t){t.preventDefault(),s({postId:e.id,id:"",post:"",likes:0});var n=a.postId+1;e.changeId(n),e.onSubmit(a),g.a.success("Post added"),s({postId:n,id:"",post:"",likes:0})}(t)},children:[Object(h.jsxs)(f.a.Group,{controlId:"taskID",children:[Object(h.jsx)(f.a.Label,{children:"Username"}),Object(h.jsx)(f.a.Control,{name:"id",type:"text",placeholder:"Username",value:a.id,onChange:function(e){i(e)}})]}),Object(h.jsxs)(f.a.Group,{controlId:"userPost",children:[Object(h.jsx)(f.a.Label,{children:"Post"}),Object(h.jsx)(f.a.Control,{name:"post",type:"text",placeholder:"Post",value:a.post,onChange:function(e){i(e)}})]}),Object(h.jsx)("br",{}),Object(h.jsx)(O.a,{variant:"primary",type:"submit",children:"Add Post"})]})})},v=n(31),I=n(6),S=n(44),k=n(21);var y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(l.a)(s,2),j=i[0],u=i[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("list");a(JSON.parse(e)||[])}),[]),Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(Object(r.a)(n)))}),[n]),Object(c.useEffect)((function(){var e=localStorage.getItem("id"),t=JSON.parse(e);null!==t&&(console.log(typeof t[0]),u(t[0]))}),[]),Object(c.useEffect)((function(){localStorage.setItem("id",JSON.stringify([j]))}),[j]),Object(h.jsxs)(v.a,{children:[Object(h.jsxs)(k.a,{id:"navbar-header",expand:"md",children:[Object(h.jsx)(k.a.Brand,{children:"Social App"}),Object(h.jsx)(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(k.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(S.a,{className:"mr-auto",children:[Object(h.jsx)(v.b,{className:"nav-link",to:"/",children:"View"}),Object(h.jsx)(v.b,{className:"nav-link",to:"/add",children:"Add"})]})})]}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(I.c,{children:[Object(h.jsx)(I.a,{path:"/add",children:Object(h.jsx)(m,{onSubmit:function(e){return function(e){console.log(e),a((function(t){return[].concat(Object(r.a)(t),[e])})),localStorage.setItem("list",JSON.stringify([].concat(Object(r.a)(n),[e])))}(e)},id:j,changeId:u})}),Object(h.jsx)(I.a,{exact:!0,path:"/",children:Object(h.jsx)(p,{pages:n,buttonHandler:function(e){return function(e){var t=n.map((function(t){return t.postId===e?Object(o.a)(Object(o.a)({},t),{},{likes:t.likes+1}):t}));a(t)}(e)}})}),Object(h.jsx)(I.a,{path:"/",children:"Error: 404 not found"})]})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),w()}},[[61,1,2]]]);
//# sourceMappingURL=main.41222cfe.chunk.js.map