(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-flexOptions-Order"],{"210d":function(t,e,a){},"5fe2":function(t,e,a){},adb6:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{c:"5"}},[a("div",{staticClass:"showcase",style:t.focusOneItem?null:t.applyStyles},[t.focusOneItem?a("div",{staticClass:"square",style:t.applyStyles,attrs:{id:"focused-square"}},[t._v("1")]):a("div",{staticClass:"square"},[t._v("1")]),a("div",{staticClass:"square"},[t._v("2")]),a("div",{staticClass:"square"},[t._v("3")]),a("div",{staticClass:"square"},[t._v("4")])])]),a("v-col",{attrs:{c:"5",o:"2"}},[a("v-dropdown",{attrs:{dark:t.darkMode},scopedSlots:t._u([{key:"button",fn:function(){return[a("v-btn",{attrs:{dropdown:"",color:"link"}},[t._v(" "+t._s(t.dropdownButtonTitle)+" "),a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-wrapper fa-caret-down"})])])]},proxy:!0}])},t._l(t.flexOptions,(function(e){return a("v-dropdown-item",{key:e,on:{click:function(a){return t.changeFlexOption(e)}}},[t._v(" "+t._s(e)+" ")])})),1),a("p",[t._v("Default: "),a("kbd",[t._v(t._s(t.defaultFlexValue))])]),a("v-space",{attrs:{large:""}}),a("CodeShowcase",{attrs:{flexOption:t.flexOption,flexAttribute:t.flexAttribute,customContent:t.customContent,isFlexItem:t.isFlexItem}},[t._t("default")],2)],1)],1)},n=[];function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i=a("d4ec"),l=a("bee2"),c=a("99de"),r=a("7e84"),u=a("262e"),d=a("9ab4"),p=a("2b0e"),f=a("60a3"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[t._v("    "),a("code",{class:"code-showcase"+(t.darkMode?" dark":""),attrs:{"data-lang":"CSS"}},[t._v("\n"),t.isFlexItem?a("span",{staticClass:"css-class"},[t._v(".flex-item")]):a("span",{staticClass:"css-class"},[t._v(".container")]),t._v(" {\n  "),a("span",{staticClass:"css-key"},[t._v("display")]),t._v(": "),a("span",{staticClass:"css-value"},[t._v("flex")]),t._v(";"),t.customContent?a("br"):t._e(),t._v("  "),t.customContent?t._t("default"):t._e(),t._v("\n  "),a("span",{staticClass:"css-key"},[t._v(t._s(this.flexAttribute))]),t._v(": "),a("span",{staticClass:"css-value"},[t._v(t._s(this.flexOption))]),t._v(";\n}\n    ")],2),t._v("\n  ")])},b=[],O=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(l["a"])(e,[{key:"darkMode",get:function(){return this.$store.state.darkMode}}]),e}(p["a"]);d["a"]([Object(f["b"])()],O.prototype,"flexOption",void 0),d["a"]([Object(f["b"])({default:!1})],O.prototype,"customContent",void 0),d["a"]([Object(f["b"])({default:!1})],O.prototype,"isFlexItem",void 0),d["a"]([Object(f["b"])()],O.prototype,"flexAttribute",void 0),O=d["a"]([Object(f["a"])({})],O);var _=O,x=_,y=(a("d1ec"),a("2877")),h=Object(y["a"])(x,v,b,!1,null,null,null),j=h.exports,m=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.flexOption=t.defaultFlexValue,t}return Object(u["a"])(e,t),Object(l["a"])(e,[{key:"changeFlexOption",value:function(t){this.flexOption=t}},{key:"darkMode",get:function(){return this.$store.state.darkMode}},{key:"applyStyles",get:function(){return o({},this.flexAttribute,this.flexOption)}}]),e}(p["a"]);d["a"]([Object(f["b"])({default:"Alignments"})],m.prototype,"dropdownButtonTitle",void 0),d["a"]([Object(f["b"])()],m.prototype,"focusOneItem",void 0),d["a"]([Object(f["b"])({default:null})],m.prototype,"defaultFlexValue",void 0),d["a"]([Object(f["b"])()],m.prototype,"customContent",void 0),d["a"]([Object(f["b"])()],m.prototype,"isFlexItem",void 0),d["a"]([Object(f["b"])({default:null})],m.prototype,"flexAttribute",void 0),d["a"]([Object(f["b"])({default:null})],m.prototype,"flexOptions",void 0),m=d["a"]([Object(f["a"])({components:{CodeShowcase:j}})],m);var C=m,k=C,w=(a("e4fe"),Object(y["a"])(k,s,n,!1,null,null,null));e["a"]=w.exports},d1ec:function(t,e,a){"use strict";var s=a("210d"),n=a.n(s);n.a},d332:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex-option-showcase"},[a("v-space"),a("v-space",{attrs:{xlarge:""}}),a("v-container",[a("h1",[t._v("Order")]),a("v-divider",{attrs:{short:""}}),a("p",{staticClass:"definition"},[t._v(" The "),a("kbd",[t._v("order")]),t._v(" property displays the flex item in a field of choice. ")]),a("Visualizer",{attrs:{defaultFlexValue:"0",flexAttribute:"order",flexOptions:t.flexOptions,focusOneItem:!0,isFlexItem:!0}})],1)],1)},n=[],o=a("d4ec"),i=a("99de"),l=a("7e84"),c=a("262e"),r=a("9ab4"),u=a("2b0e"),d=a("60a3"),p=a("adb6"),f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(i["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.flexOptions=["0","1","2","3"],t}return Object(c["a"])(e,t),e}(u["a"]);f=r["a"]([Object(d["a"])({components:{Visualizer:p["a"]},layout:"navLayout"})],f);var v=f,b=v,O=a("2877"),_=Object(O["a"])(b,s,n,!1,null,null,null);e["default"]=_.exports},e4fe:function(t,e,a){"use strict";var s=a("5fe2"),n=a.n(s);n.a}}]);
//# sourceMappingURL=page-flexOptions-Order.ccfdebbf.js.map