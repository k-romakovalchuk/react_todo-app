(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c(6),l=c.n(n),a=(c(13),c(14),c(15),c(8)),r=c(2),s=c(0),i=function(e){var t=e.todosCallback,c=Object(o.useState)(""),n=Object(r.a)(c,2),l=n[0],a=n[1];return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"todos"}),Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==l&&t({id:Math.random(),title:l,completed:!1}),a("")},children:Object(s.jsx)("input",{"data-cy":"createTodo",type:"text",className:"new-todo",value:l,placeholder:"What needs to be done?",onChange:function(e){return a(e.target.value)}})})]})},d=c(7),u=c.n(d),j=function(e){var t=e.todo,c=e.todos,o=e.todosCall;return Object(s.jsx)("button",{type:"button",className:"destroy",onClick:function(){o(c.filter((function(e){return e.id!==t.id})))}})},b=function(e){var t=e.todo,c=e.mainTodos;return Object(s.jsx)("input",{type:"checkbox",className:"toggle",id:"toggle-view",checked:!0===t.completed,onChange:function(){c(t)}})},f=function(e){var t=e.todo,c=e.todos,n=e.todosCallback,l=e.mainTodos,a=Object(o.useState)(!1),i=Object(r.a)(a,2),d=i[0],f=i[1],m=Object(o.useState)(t.title),O=Object(r.a)(m,2),p=O[0],h=O[1];return Object(s.jsxs)("li",{className:u()({completed:!0===t.completed},{editing:!0===d}),onDoubleClick:function(){return f(!0)},children:[Object(s.jsxs)("div",{className:"view",children:[Object(s.jsx)(b,{todo:t,mainTodos:l}),Object(s.jsx)("label",{htmlFor:"toggle-view",children:t.title}),Object(s.jsx)(j,{todo:t,todos:c,todosCall:n})]}),Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==p&&(t.title=p),f(!1)},children:Object(s.jsx)("input",{type:"text",className:"edit",value:p,onChange:function(e){return h(e.target.value)},onKeyDown:function(e){"Escape"===e.key&&f(!1)},onBlur:function(){""!==p&&(t.title=p),f(!1)}})})]})},m=function(e){var t=e.todos,c=e.todosCallback,n=e.mainTodos,l=Object(o.useState)(!1),a=Object(r.a)(l,2),i=a[0],d=a[1];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),Object(s.jsx)("label",{htmlFor:"toggle-all",role:"presentation",onClick:function(){return d((function(e){return!e}))}}),!1===i&&Object(s.jsx)("ul",{className:"todo-list","data-cy":"todoList",children:t.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(f,{mainTodos:n,todo:e,todos:t,todosCallback:c})},e.id)}))})]})},O=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],l=Object(o.useState)("all"),d=Object(r.a)(l,2),u=d[0],j=d[1];Object(o.useEffect)((function(){var e=localStorage.getItem("todos");return localStorage.setItem("todos",JSON.stringify(c)),null===e||void 0===e?[]:JSON.parse(e)}),[c]);var b=Object(o.useCallback)((function(e){return n(e)}),[c]),f=[];switch(u){case"all":f=c.filter((function(e){return e}));break;case"active":f=c.filter((function(e){return!1===e.completed}));break;case"completed":f=c.filter((function(e){return!0===e.completed}))}return Object(s.jsxs)("div",{className:"todoapp",children:[Object(s.jsx)(i,{todosCallback:function(e){return n((function(t){return[].concat(Object(a.a)(t),[e])}))}}),Object(s.jsx)(m,{mainTodos:function(e){return n((function(t){return t.map((function(t){return t.id===e.id&&(t.completed=!t.completed),t}))}))},todos:f,todosCallback:b}),0!==c.length&&Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsxs)("span",{className:"todo-count","data-cy":"todosCounter",children:[c.filter((function(e){return!1===e.completed})).length," ","items left"]}),Object(s.jsxs)("ul",{className:"filters",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/",className:"all"===u?"selected":"",onClick:function(){return j("all")},children:"All"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/active",className:"active"===u?"selected":"",onClick:function(){return j("active")},children:"Active"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/completed",className:"completed"===u?"selected":"",onClick:function(){return j("completed")},children:"Completed"})})]}),0!==c.filter((function(e){return!0===e.completed})).length&&Object(s.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){var e=c.filter((function(e){return!1===e.completed}));n(e)},children:"Clear completed"})]})]})};l.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fe4af3d1.chunk.js.map