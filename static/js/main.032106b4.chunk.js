(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(t,e,n){t.exports=n(65)},37:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(28),c=n.n(r),l=n(18),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(13),h=n(11);n(37);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#FFF",textDecoration:"none"},y=function(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"Todo List"),o.a.createElement(m.b,{style:b,to:"/"},"Home")," | ",o.a.createElement(m.b,{style:b,to:"/about"},"About"))},g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",boarderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:j},"x")))}}]),e}(a.Component),j={background:"#FF0000",color:"#FFF",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},E=g,v=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return o.a.createElement(E,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(a.Component),O=n(31),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.onChange=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addItem(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(a.Component);var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList app V1.0.0. It is part of a React Crash Course"))},C=n(14),S=n.n(C),F=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})}),console.log("Item id is = "+t)},n.delTodo=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/${id}").then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addItem=function(t){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(y,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}),o.a.createElement(k,{addItem:t.addItem}))}}),o.a.createElement(h.a,{path:"/about",component:x}))))}}]),e}(a.Component);c.a.render(o.a.createElement(F,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.032106b4.chunk.js.map