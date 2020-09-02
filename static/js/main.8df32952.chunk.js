(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=(a(15),a(2)),i=a.n(s),o=a(5),m=a(6),d=a(7),u=a(9),h=a(8),p=function(e){return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputSearch",className:"lead font-weight-bold"},"Movie title"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement("input",{id:"inputSearch",className:"form-control",onChange:e.changeSearchHandler,type:"text"}))),r.a.createElement("p",{className:"mt-3 text-danger lead font-weight-bold"},e.error)))))},f=a(1),E=function(e){var t=Object(f.a)({},e.state),a=t.nominations.map((function(e){return e.imdbID})),n=t.search.map((function(t,n){return r.a.createElement("li",{className:"d-table-row m-4",key:n},r.a.createElement("p",{className:"d-table-cell"},t.Title," (",t.Year,")"),r.a.createElement("button",{className:"d-table-cell btn btn-success",onClick:function(){return e.nominationsAddHandler(n)},disabled:!!a.find((function(e){return e===t.imdbID}))},"Nominate"))}));return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"lead font-weight-bold"},"Results for '",t.searchTitle,"'"),r.a.createElement("ul",{className:"d-table"},n))))},b=function(e){var t=Object(f.a)({},e.state),a=t.nominationsLimit?"You are not able nominate more films":null,n=t.nominations.map((function(t,a){return r.a.createElement("li",{className:"d-table-row m-4",key:a},r.a.createElement("p",{className:"d-table-cell"},t.Title," (",t.Year,")"),r.a.createElement("button",{className:"d-table-cell btn btn-warning",onClick:function(){return e.nominationsDeleteHandler(a)}},"Remove"))}));return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"lead font-weight-bold"},"Nominations"),r.a.createElement("p",{className:"text-warning lead font-weight-bold"},a),r.a.createElement("ul",{className:"d-table"},n))))};function v(e){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://www.omdbapi.com/?apikey=b1e6176f&type=movie&s=".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:[],nominations:[],searchTitle:"",nominationsLimit:!1,error:""},e.changeSearchHandler=function(t){var a=t.target.value;v(a).then((function(t){"True"===t.Response?e.setState({search:t.Search,searchTitle:a,error:""}):e.setState({search:[],searchTitle:a,error:t.Error})}))},e.nominationsAddHandler=function(t){var a=e.state,n=a.search,r=a.nominations,l=a.nominationsLimit;(l=!(r.length<5))?e.setState({nominationsLimit:l}):(r.push(n[t]),e.setState({nominations:r}))},e.nominationsDeleteHandler=function(t){var a=e.state,n=a.nominations,r=a.nominationsLimit;r=!(n.length<=5),n.splice(t,1),e.setState({nominations:n,nominationsLimit:r})},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container pt-4"},r.a.createElement("h1",null,"The Shoppies"),r.a.createElement("div",{className:"row"},r.a.createElement(p,{changeSearchHandler:this.changeSearchHandler,error:this.state.error})),r.a.createElement("div",{className:"row"},r.a.createElement(E,{state:this.state,nominationsAddHandler:this.nominationsAddHandler}),r.a.createElement(b,{state:this.state,nominationsDeleteHandler:this.nominationsDeleteHandler})))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8df32952.chunk.js.map