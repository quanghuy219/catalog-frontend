(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(84)},48:function(e,t,a){},77:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),i=(a(48),a(14)),s=a(11),u=a(38),l=a.n(u),m=a(39),d=a.n(m),h=a(40),b=a(87),p=a(88),g=a(85),f=a(2),v=a(5),O=a(6),j=a(7),y=a(4),E=a(8),k=a(3),C=a(65),S=a(13),N="https://catalog-backend.herokuapp.com",I=function(){function e(){Object(v.a)(this,e)}return Object(O.a)(e,[{key:"get",value:function(e){return fetch("".concat(N).concat(e)).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw e})})}},{key:"post",value:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};if(a){var r=localStorage.getItem("token");n.headers.Authorization="Bearer ".concat(r)}return fetch("".concat(N).concat(e),n).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw e})})}},{key:"put",value:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};if(a){var r=localStorage.getItem("token");n.headers.Authorization="Bearer ".concat(r)}return fetch("".concat(N).concat(e),n).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw e})})}},{key:"delete",value:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};if(a){var r=localStorage.getItem("token");n.headers.Authorization="Bearer ".concat(r)}return fetch("".concat(N).concat(e),n).then(function(e){var t=e.json();return e.ok?t:t.then(function(e){throw e})})}}]),e}(),w=new(function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"login",value:function(e,a){return Object(S.a)(Object(y.a)(t.prototype),"post",this).call(this,e,a,!1)}}]),t}(I)),D="LOGIN",T="LOGOUT";var _=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).onClickLogout=a.onClickLogout.bind(Object(k.a)(Object(k.a)(a))),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"onClickLogout",value:function(){Object(f.a)({},this.props).logout()}},{key:"render",value:function(){var e,t=Object(f.a)({},this.props);return e=t.user.name?r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item nav-username"},t.user.name),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{type:"submit",className:"btn btn-danger nav-button",onClick:this.onClickLogout},"Logout"))):r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/login",className:"btn btn-default nav-button"},"Login"))),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},r.a.createElement(C.a,{className:"navbar-brand",to:"/"},"Catalog"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse navbar-items",id:"navbarContent"},r.a.createElement("ul",{className:"navbar-nav"},e)))}}]),t}(r.a.Component),x=Object(s.b)(function(e){return{user:e.user}},function(e){return{logout:function(){return e(function(e){var t=localStorage.getItem("user"),a=localStorage.getItem("token");t&&localStorage.removeItem("user"),a&&localStorage.removeItem("token"),e({type:T})})}}})(_),R=a(86),L=new(function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"post",value:function(e){return Object(S.a)(Object(y.a)(t.prototype),"post",this).call(this,"/api/items",e)}},{key:"put",value:function(e,a){return Object(S.a)(Object(y.a)(t.prototype),"put",this).call(this,"/api/items/".concat(e),a)}},{key:"delete",value:function(e){return Object(S.a)(Object(y.a)(t.prototype),"delete",this).call(this,"/api/items/".concat(e))}}]),t}(I)),B="FETCH_ITEMS",F="CREATE_ITEM";function A(e,t){var a={message:e.message?e.message:"Something went wrong!",error:e.error?e.error:{}};t({type:"ERROR",message:a.message,error:a.error}),"token"in a.error&&t({type:"LOGOUT"})}function P(e){return L.get("/api/items/".concat(e)).then(function(e){return e.data})}var J=new(function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"get",value:function(e){return Object(S.a)(Object(y.a)(t.prototype),"get",this).call(this,e)}}]),t}(I)),M="FETCH_CATEGORIES";function G(){return function(e){return J.get("/api/categories").then(function(t){return e({type:M,categories:t.data.categories})})}}var W=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).showItemByCategory=a.showItemByCategory.bind(Object(k.a)(Object(k.a)(a))),e.fetchItems(),e.fetchCategories(),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"showItemByCategory",value:function(e){Object(f.a)({},this.props).fetchItemsByCategory(e)}},{key:"render",value:function(){var e=this,t=Object(f.a)({},this.props);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4 col-5",style:{borderRight:"1px solid #bbbec1"}},r.a.createElement("h4",{className:"col-header"},"Categories"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(R.a,{to:"/",onClick:function(){return t.fetchItems()}},"All")),t.categories.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(R.a,{to:"#".concat(t.name.replace(" ","-")),activeStyle:{color:"red"},onClick:function(){e.showItemByCategory(t.id)}},t.name))}))),r.a.createElement("div",{className:"col-md-8 col-sm-8 col-7"},t.user.name?r.a.createElement(C.a,{to:"/new-item"},"Add Item"):"",r.a.createElement("h4",{className:"col-header"},"Latest Items"),r.a.createElement("ul",null,t.items.items.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(C.a,{to:"/item/".concat(e.id)},e.name),r.a.createElement("span",null,"(",e.category.name,")"))}))))}}]),t}(r.a.Component);W.defaultProps={fetchItems:null,fetchCategories:null};var z=Object(s.b)(function(e){return{items:e.items,categories:e.categories,user:e.user}},function(e){return{fetchItems:function(){return e(function(e){return L.get("/api/items").then(function(t){return e({type:B,items:t.data.items})})})},fetchCategories:function(){return e(G())},fetchItemsByCategory:function(t){return e(function(e){return function(t){return L.get("/api/categories/".concat(e,"/items")).then(function(e){return t({type:B,items:e.data.items})}).catch(function(e){A(e,t)})}}(t))}}})(W),U=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={name:e.name,description:e.description},a.isEditing=e.isEditing,a.handleChangeName=a.handleChangeName.bind(Object(k.a)(Object(k.a)(a))),a.handleChangeDescription=a.handleChangeDescription.bind(Object(k.a)(Object(k.a)(a))),a.handleChangeCategory=a.handleChangeCategory.bind(Object(k.a)(Object(k.a)(a))),a.submit=a.submit.bind(Object(k.a)(Object(k.a)(a))),a.edit=a.edit.bind(Object(k.a)(Object(k.a)(a))),a.create=a.create.bind(Object(k.a)(Object(k.a)(a))),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){Object(f.a)({},this.props).fetchCategories()}},{key:"componentWillReceiveProps",value:function(e){var t=Object(f.a)({},e);"item"in t?this.setState(Object(f.a)({},t.item)):this.setState({category_id:t.categories[0].id})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"handleChangeCategory",value:function(e){this.setState({category_id:parseInt(e.target.value,10)})}},{key:"submit",value:function(){var e=Object(f.a)({},this.state);return!(!e.name||!e.description)&&(this.isEditing?this.edit():this.create())}},{key:"create",value:function(){var e=this,t=Object(f.a)({},this.props),a=Object(f.a)({},this.state);t.createItem(a).then(function(a){e.setState({name:"",description:""}),a&&t.history.push("/item/".concat(a.item.id))})}},{key:"edit",value:function(){var e=this,t=Object(f.a)({},this.props),a=Object(f.a)({},this.state);t.updateItem(a.id,a).then(function(a){e.setState({name:"",description:""}),a&&t.onEditSuccess()})}},{key:"render",value:function(){var e=Object(f.a)({},this.state),t=Object(f.a)({},this.props);return r.a.createElement("div",null,r.a.createElement("h2",null,"New Item"),r.a.createElement("form",{method:"post",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name",r.a.createElement("input",{type:"text",id:"name",className:"form-control text-input",name:"name",value:e.name,onChange:this.handleChangeName,maxLength:"100",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Category",r.a.createElement("select",{id:"category",className:"form-control",name:"category_id",value:e.category_id,onChange:this.handleChangeCategory},t.categories.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description",r.a.createElement("textarea",{id:"description",className:"form-control text-input",name:"description",rows:"10",value:e.description,onChange:this.handleChangeDescription,required:!0}))),r.a.createElement("input",{type:"hidden",name:"item_id",value:"{{item.id}}"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.submit},"Submit")))}}]),t}(r.a.Component);U.defaultProps={name:"",description:"",isEditing:!1};var q=Object(s.b)(function(e){return{categories:e.categories,user:e.user}},function(e){return{fetchCategories:function(){return e(G())},createItem:function(t){return e((a=t,function(e){return L.post(a).then(function(t){return e({type:F,item:t.data.item}),t.data}).catch(function(t){A(t,e)})}));var a},updateItem:function(t,a){return e(function(e,t){return function(a){return L.put(e,t).then(function(e){return e.data}).catch(function(e){A(e,a)})}}(t,a))}}})(U),H=a(42),$=a.n(H),K=a(17),Q=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={},a.onSigninSuccess=a.onSigninSuccess.bind(Object(k.a)(Object(k.a)(a))),a.onSigninFailure=a.onSigninFailure.bind(Object(k.a)(Object(k.a)(a))),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"onSigninSuccess",value:function(e){var t=Object(f.a)({},this.props);t.login(e).then(function(){return t.history.push("/")})}},{key:"onSigninFailure",value:function(){K.toast.error("Something went wrong. Please try again later")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Sign in with Google Account"),r.a.createElement($.a,{className:"g-signin",scope:"openid email profile",clientId:"631390474610-5kpt48ufa9uh64g364asa6f716739p0d.apps.googleusercontent.com",accessType:"offline",responseType:"code",prompt:"select_account",onSuccess:this.onSigninSuccess,onFailure:this.onSigninFailure}),r.a.createElement("div",{id:"result"}))}}]),t}(r.a.Component),V=Object(s.b)(function(e){return{error:e.error,user:e.user}},function(e){return{login:function(t){return e(function(e){return function(t){return w.login("/api/login",e).then(function(e){var a={name:e.data.user.name,id:e.data.user.id},n=e.data.token;return localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",n),t({type:D,name:a.name,id:a.id,token:n}),a}).catch(function(e){var a={message:e.message?e.message:"Something went wrong!",error:e.error?e.error:{}};return t({type:"ERROR",message:a.message,error:a.error})})}}(t))}}})(Q),X=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={name:"",description:"",user_id:0,id:0},a.itemID=e.match.params.item_id,a.delete=a.delete.bind(Object(k.a)(Object(k.a)(a))),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(f.a)({},this.props);P(this.itemID).then(function(t){return e.setState(Object(f.a)({},t.item))}).catch(function(){return t.history.push("/")})}},{key:"delete",value:function(){var e=Object(f.a)({},this.props);e.deleteItem(this.itemID).then(function(){return e.history.push("/")})}},{key:"render",value:function(){var e=Object(f.a)({},this.state),t=Object(f.a)({},this.props),a="";return e.user_id===t.user.id&&(a=r.a.createElement("div",{className:"edit-group"},r.a.createElement(C.a,{className:"btn-edit",to:"/item/".concat(e.id,"/edit")},"Edit"),r.a.createElement(C.a,{className:"btn-edit",to:"#/","data-toggle":"modal","data-target":"#confirmDelete"},"Delete"))),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("pre",null,e.description),a,r.a.createElement("div",{className:"modal fade",id:"confirmDelete",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},"Do you really want to delete your item?"),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.delete,"data-dismiss":"modal"},"Delete"))))))}}]),t}(r.a.Component),Y=Object(s.b)(function(e){return{user:e.user}},function(e){return{deleteItem:function(t){return e(function(e){return function(t){return L.delete(e).then(function(e){return e.data}).catch(function(e){A(e,t)})}}(t))}}})(X),Z=(a(36),function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=Object(f.a)({},e.error),a=t.message;t.error;K.toast.error(a)}},{key:"render",value:function(){return r.a.createElement(K.ToastContainer,{hideProgressBar:!0,autoClose:3e3})}}]),t}(r.a.Component));Z.defaultProps={error:{}};var ee=Object(s.b)(function(e){return{error:e.error}},null)(Z),te=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={name:"",description:""},a.onSuccess=a.onSuccess.bind(Object(k.a)(Object(k.a)(a))),a}return Object(E.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(f.a)({},this.props);this.itemID=t.match.params.item_id,P(this.itemID).then(function(a){return e.setState(Object(f.a)({},a.item),function(){Object(f.a)({},e.state).user_id!==t.user.id&&t.history.push("/")})})}},{key:"onSuccess",value:function(){Object(f.a)({},this.props).history.push("/item/".concat(this.itemID))}},{key:"render",value:function(){var e=Object(f.a)({},this.state),t={id:e.id,name:e.name,description:e.description,category_id:e.category_id};return console.log(t),r.a.createElement(q,{item:t,isEditing:!0,onEditSuccess:this.onSuccess})}}]),t}(r.a.Component),ae=Object(s.b)(function(e){return{categories:e.categories,user:e.user}},function(e){return{fetchCategories:function(){return e(G())}}})(te);a(77);var ne=function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement("div",{className:"container main-panel"},r.a.createElement(p.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:z}),r.a.createElement(g.a,{exact:!0,path:"/login",component:V}),r.a.createElement(g.a,{exact:!0,path:"/item/:item_id",component:Y}),r.a.createElement(g.a,{exact:!0,path:"/new-item",component:q}),r.a.createElement(g.a,{exact:!0,path:"/item/:item_id/edit",component:ae}),r.a.createElement(g.a,{component:z}))),r.a.createElement(ee,null)))},re=a(18),ce={items:[],page:0,offset:10},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{items:Object(re.a)(t.items)};case F:return{items:[t.item].concat(Object(re.a)(e.items))};default:return e}},ie=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{};ie.token=localStorage.getItem("token");var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{id:t.id,name:t.name,token:t.token};case T:return{};default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(re.a)(t.categories);default:return e}},le={error:{},message:""},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return{message:t.message,error:Object(f.a)({},t.error)};default:return e}},de=Object(i.c)({items:oe,user:se,categories:ue,error:me});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79),a(81);var he=Object(i.d)(de,Object(i.a)(l.a,d.a,h.a));o.a.render(r.a.createElement(s.a,{store:he},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.1e3c1581.chunk.js.map