(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),a=n.n(c),r=n(12),o=n.n(r),i=(n(23),n(13)),l=n(14),h=n(17),d=n(16),u=n(15),j=n.n(u),m=(n(42),function(e){return Object(s.jsxs)("div",{className:"card-item",children:[Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:"https://via.placeholder.com/150/09f/fff.png%20C/O%20https://placeholder.com/"})}),Object(s.jsxs)("div",{className:"details-section",children:[Object(s.jsx)("h1",{children:e.monster.name}),Object(s.jsx)("h4",{children:e.monster.email})]})]})}),f=(n(43),function(e){return Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e,t){return Object(s.jsx)(m,{monster:e},t)}))})}),p=(n(44),function(e){var t=e.placeholder,n=e.type,c=e.handleChange;return Object(s.jsx)("input",{className:"search-input",type:n,onChange:c,placeholder:t})}),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState({searchField:e.target.value})},s.state={name:"hello to hamidreza",monsters:[],searchField:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e.setState({monsters:t.data})})).catch((function(e){alert(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("h1",{id:"title",children:"list of monsters"}),Object(s.jsx)(p,{placeholder:"search monster ...",type:"search",handleChange:this.handleChange}),Object(s.jsx)(f,{monsters:c})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.20c549df.chunk.js.map