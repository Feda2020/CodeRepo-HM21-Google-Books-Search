(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{27:function(e,a,t){e.exports=t(63)},32:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),i=t(10),o=t(1),s=t(11);t(32);var m=function(e){var a=e.children;return l.a.createElement("div",{style:{textAlign:"center",height:300},className:"jumbotron"},a)},u=t(8),d=t.n(u),f=function(e){return new Promise((function(a,t){d.a.get("https://www.googleapis.com/books/v1/volumes?q=$"+e+"&key=AIzaSyAd41IpsA_TBZgXDvWoPLnJ7_TlIv_1JWs").then((function(e){var t=e.data.items.map((function(e){var a=e.volumeInfo.imageLinks,t=void 0===a?null:a,n=t?t.thumbnail:null;return{id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:n,link:e.volumeInfo.previewLink}}));a(t)})).catch((function(e){return t(e)}))}))},E=function(){return d.a.get("/api/books")},v=function(e){return d.a.delete("/api/books/"+e)},h=function(e){return d.a.post("/api/books",e)};t(50);var g=function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("div",{className:"title-author"},l.a.createElement("h2",{className:"title"},e.title),e.authors?l.a.createElement("h5",{className:"authors"},e.authors):""),l.a.createElement("div",{className:"image-description"},e.image?l.a.createElement("div",{className:"image"},l.a.createElement("img",{className:"card-img",src:e.image,alt:"book thumbnail"})):"",e.description?l.a.createElement("p",{className:"description"},e.description):""))};t(51);var b=function(e){var a=e.children;return l.a.createElement("div",null,a)};var p=function(e){return l.a.createElement("button",{className:"save-btn btn btn-success",tabIndex:"0",onClick:function(){return e.handleSaveSubmit(e.bookData)},style:{float:"right",marginBottom:10}},e.children)};var N=function(e){return l.a.createElement("a",Object.assign({className:"view-btn btn btn-secondary",href:e.link,target:"_blank",tabIndex:"0"},e,{style:{float:"right",marginRight:10,color:"#ffffff"}})," ",l.a.createElement("i",{className:"far fa-eye"}))};function k(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function y(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function S(e){var a=e.size,t=e.children;return l.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}t(52);function x(e){var a=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},a))}function I(e){var a=e.children;return l.a.createElement("li",{className:"list-group-item"},a)}t(53);function j(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function w(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}t(54);var B=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),o=i[0],u=i[1];function d(e){h({_id:e.id,title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link})}return l.a.createElement(k,{fluid:!0},l.a.createElement(y,null,l.a.createElement("div",{className:"hero"},l.a.createElement(m,null,l.a.createElement("h1",null,"Google Books Search"),l.a.createElement("h5",null,"from Google Books API"))),l.a.createElement(S,{size:"md-12"},l.a.createElement("form",{className:"d-flex"},l.a.createElement(j,{onChange:function(e){var a=e.target.value;u(a.replace(/\s/g,""))},name:"title",style:{textAlign:"center",backgroundColor:"rgb(232,240,254)"},placeholder:'For example, "Catcher In The Rye"'}),l.a.createElement(w,{style:{textAlign:"center",backgroundColor:"rgb(232,240,254)"},onClick:function(e){e.preventDefault(),o&&f(o).then((function(e){r(e)})).catch((function(e){return console.log(e)}))}},l.a.createElement("i",{className:"fas fa-search"})))),l.a.createElement(S,{size:"md-12"},l.a.createElement(b,null,l.a.createElement("h4",{className:"text-center"},"Search Results"),t.length>0?l.a.createElement(x,null,t.map((function(e){return l.a.createElement(I,{key:e.id},l.a.createElement(b,null,l.a.createElement(p,{handleSaveSubmit:d,bookData:e},l.a.createElement("i",{className:"fas fa-heart"})),l.a.createElement(N,{link:e.link}),l.a.createElement(g,{key:e.id,title:e.title,authors:e.authors,image:e.image,description:e.description})))}))):l.a.createElement("p",{className:"display-message text-center mt-5"},"No Results")))))};t(55);var O=function(e){return l.a.createElement("button",{className:"delete-btn btn",tabIndex:"0",onClick:function(){return e.handleDeleteSubmit(e.id)},style:{float:"right",marginBottom:10}},l.a.createElement("i",{className:"fas fa-trash"}),e.children)};var A=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];function c(e){v(e),r(t.filter((function(a){return a._id!=e})))}return Object(n.useEffect)((function(){E().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(k,{fluid:!0},l.a.createElement(y,null,l.a.createElement("div",{className:"hero"},l.a.createElement(m,null,l.a.createElement("h1",null,"React Google Books Search"),l.a.createElement("h5",null,"Searched & Saved Books of Interest"))),l.a.createElement(S,{size:"md-12"},l.a.createElement(b,null,t.length>0?l.a.createElement(x,null,t.map((function(e){return l.a.createElement(I,{key:e.id},l.a.createElement(b,null,l.a.createElement(O,{handleDeleteSubmit:c,id:e._id}),l.a.createElement(N,{link:e.link}),l.a.createElement(g,{key:e.id,title:e.title,authors:e.authors,image:e.image,description:e.description})))}))):l.a.createElement("p",{className:"display-message text-center mt-5"},"Nothing Saved Yet")))))};var C=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(y,null,l.a.createElement(S,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},l.a.createElement("i",{class:"fas fa-meh-rolling-eyes"})))))))};t(56);var _=function(){return l.a.createElement("div",{className:"navbar-container fixed-top"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light"},l.a.createElement("h5",{className:"logo"},"Google Books Search"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link scroll",to:"/"},"Search",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link scroll",to:"/saved"},"Saved"))))))};t(62);var z=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(_,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:["/","/search"]},l.a.createElement(B,null)),l.a.createElement(o.a,{exact:!0,path:["/","/saved"]},l.a.createElement(A,null)),l.a.createElement(o.a,null,l.a.createElement(C,null)))))};c.a.render(l.a.createElement(z,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bc8a3c3b.chunk.js.map