(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(3),r=a.n(s),l=a(4),o=a(5),d=a(7),i=a(6),u=(a(13),a(1)),m=a.n(u),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={selected:"",space:" "},e.saveHandler=function(t){e.setState({selected:t})},e.clearSelected=function(){e.setState({selected:""})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"selected"},n.a.createElement("h1",null,"Selected good: -",this.state.space+this.state.selected),n.a.createElement("button",{type:"submit",className:m()("product__delete",{mark__delete:this.state.selected}),onClick:function(){e.clearSelected(e.state.selected)}},"X")),n.a.createElement("div",{className:"products"},p.map((function(t){return n.a.createElement("button",{type:"submit",className:m()("product",{product__mark:e.state.selected===t}),key:t,onClick:function(){e.saveHandler(t)}},t)}))))}}]),a}(n.a.Component);r.a.render(n.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7ccd9819.chunk.js.map