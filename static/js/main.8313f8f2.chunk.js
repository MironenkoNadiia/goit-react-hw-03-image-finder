(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__1ZYDW","ImageGalleryItem-image":"imageGalleryItem_ImageGalleryItem-image__3Lg-E"}},16:function(e,t,a){e.exports={Button:"button_Button__iJB_v"}},17:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__1osmQ"}},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(13),i=a.n(o),s=a(3),l=a(4),m=a(6),h=a(5),u=a(7),d=a.n(u),g=a(18),j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.handleNameChange=function(t){e.setState({name:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.name.trim())return d()("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430");e.props.onSubmit(e.state.name),e.setState({name:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("button",{type:"submit",className:"SearchForm-button",children:[Object(n.jsx)(g.a,{style:{marginRight:8}}),Object(n.jsx)("span",{children:"Search"})]}),Object(n.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleNameChange,autoComplete:"off",placeholder:"Search images and photos"})]})})}}]),a}(r.Component),b=a(10),p=a(14),f=a.n(p);var O=function(e){var t=e.webSrc,a=void 0===t?"":t,r=e.largeImageURL,c=void 0===r?"":r,o=e.onClick,i=e.alt,s=void 0===i?"":i;return Object(n.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:a,alt:s,onClick:function(){return o(c)},className:"ImageGalleryItem-image"})})},v=(a(26),a(15)),y=a.n(v),x=a(16),I=a.n(x);var k=function(e){var t=e.incrementPage;return Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:I.a.Button,onClick:t,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})})},S=a(9),w=a.n(S),_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onBackdropClick,a=e.image;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("section",{className:w.a.Overlay,onClick:t,children:Object(n.jsx)("div",{className:w.a.Modal,children:Object(n.jsx)("img",{src:a,alt:"backdropImage"})})})})}}]),a}(r.Component),C=a(17),L=a.n(C),R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1,name:"",images:[],status:"Idle",largeImageURL:"",showModal:!1},e.onIncrementPage=function(){e.setState({page:e.state.page+1})},e.handleImageClick=function(t){e.setState({largeImageURL:t,showModal:!0})},e.handleBackdropCLick=function(t){"SECTION"!==t.target.tagName?(!0===e.state.showModal&&document.addEventListener("keydown",(function(t){"Escape"!==t.code||e.setState({showModal:!1})})),!1===e.state.showModal&&document.removeEventListener("keydown")):e.setState({showModal:!1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.name,r=this.props.name,c="19297457-6b61957df3c7b30b2bbaf73bd";if(n!==r){var o="https://pixabay.com/api/?q=".concat(r,"&page=1&key=").concat(c,"&image_type=photo&orientation=horizontal&per_page=12");fetch(o).then((function(e){if(e.ok)return e.json()})).then((function(e){0===e.hits.length&&d()("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),e.hits.length>0&&a.setState({images:e.hits,status:"Resolved"})})).catch((function(e){return a.setState({error:e,status:"Rejected"})}))}if(window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.page!==this.state.page){this.setState({status:"Pending"});var i="https://pixabay.com/api/?q=".concat(r,"&page=").concat(this.state.page,"&key=").concat(c,"&image_type=photo&orientation=horizontal&per_page=12");fetch(i).then((function(e){if(e.ok)return e.json()})).then((function(e){a.setState((function(t){return{images:[].concat(Object(b.a)(t.images),Object(b.a)(e.hits)),status:"Resolved"}}))})).catch((function(e){return a.setState({error:e,status:"Rejected"})}))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.largeImageURL,r=t.images,c=t.showModal,o=t.status;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:L.a.ImageGallery,children:r.map((function(t){var a=t.id,r=t.webformatURL,c=t.largeImageURL,o=t.tags;return Object(n.jsx)(O,{webSrc:r,alt:o,largeImageURL:c,onClick:e.handleImageClick},a)}))}),"Pending"===o&&Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),(r.length>0||"Resolved"===o)&&Object(n.jsx)(k,{incrementPage:this.onIncrementPage}),c&&Object(n.jsx)(_,{image:a,onBackdropClick:this.handleBackdropCLick})]})}}]),a}(r.Component),G=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:""},e.handleFormSubmit=function(t){e.setState({name:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(R,{name:this.state.name})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Overlay:"modal_Overlay__2kzmq",Modal:"modal_Modal__3pdhi"}}},[[48,1,2]]]);
//# sourceMappingURL=main.8313f8f2.chunk.js.map