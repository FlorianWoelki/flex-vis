(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-flexOptions-FlexWrap"],{"1dde":function(t,e,a){var r=a("d039"),n=a("b622"),o=a("2d00"),s=n("species");t.exports=function(t){return o>=51||!r((function(){var e=[],a=e.constructor={};return a[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"5fe2":function(t,e,a){},8418:function(t,e,a){"use strict";var r=a("c04e"),n=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var s=r(e);s in t?n.f(t,s,o(0,a)):t[s]=a}},"8b3f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"flex-option-showcase"},[a("v-space"),a("v-space",{attrs:{xlarge:""}}),a("v-container",[a("h1",[t._v("Flex Wrap")]),a("v-divider",{attrs:{short:""}}),a("p",{staticClass:"definition"},[t._v(" The "),a("kbd",[t._v("flex-wrap")]),t._v(" property defines if the flex item should be on one line or should wrap to the next line, if needed. ")]),a("Visualizer",{attrs:{dropdownButtonTitle:"Wrap",defaultFlexValue:"nowrap",flexAttribute:"flex-wrap",flexOptions:t.flexOptions,focusOneItem:!0,isFlexItem:!0}})],1)],1)},n=[],o=a("d4ec"),s=a("262e"),i=a("2caf"),l=a("9ab4"),c=a("2b0e"),u=a("60a3"),d=a("adb6"),f=function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.flexOptions=["nowrap","wrap","wrap-reverse"],t}return a}(c["default"]);f=l["a"]([Object(u["a"])({components:{Visualizer:d["a"]},layout:"navLayout"})],f);var p=f,v=p,b=a("2877"),y=Object(b["a"])(v,r,n,!1,null,null,null);e["default"]=y.exports},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),o=a("e8b5"),s=a("861d"),i=a("7b0b"),l=a("50c4"),c=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),v=f("isConcatSpreadable"),b=9007199254740991,y="Maximum allowed index exceeded",x=p>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=d("concat"),O=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},w=!x||!h;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,r,n,o,s=i(this),d=u(s,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],O(o)){if(n=l(o.length),f+n>b)throw TypeError(y);for(a=0;a<n;a++,f++)a in o&&c(d,f,o[a])}else{if(f>=b)throw TypeError(y);c(d,f++,o)}return d.length=f,d}})},adb6:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{level:""}},[a("v-col",{attrs:{c:"5"}},[t.differentSize?a("div",{staticClass:"showcase different-sizes",class:{dark:t.darkMode}},[a("div",{staticClass:"showcase-wrapper",style:Object.assign({},t.applyStyles,{width:t.containerWidth+"%","flex-flow":t.$slots.default?"row wrap":null})},[t.focusOneItem?a("div",{staticClass:"square",style:t.applyStyles,attrs:{id:"focused-square"}},[t._v("1")]):a("div",{staticClass:"square"},[t._v("1")]),a("div",{staticClass:"square"},[t._v("2")])])]):a("div",{staticClass:"showcase",class:{dark:t.darkMode}},[a("div",{staticClass:"showcase-wrapper",style:Object.assign({},t.applyStyles,{width:t.containerWidth+"%","flex-flow":t.$slots.default?"row wrap":null})},[t.focusOneItem?a("div",{staticClass:"square",style:t.applyStyles,attrs:{id:"focused-square"}},[t._v("1")]):a("div",{staticClass:"square"},[t._v("1")]),a("div",{staticClass:"square",style:t.styleForAlternateSquares},[t._v("2")]),a("div",{staticClass:"square",style:t.styleForAlternateSquares},[t._v("3")]),a("div",{staticClass:"square",style:t.styleForAlternateSquares},[t._v("4")])])])]),a("v-col",{attrs:{c:"5",o:"2"}},[a("div",{staticClass:"u-flex u-flex-column"},[a("div",{staticClass:"mb-4 width-slider u-flex u-flex-column"},[a("p",{class:"mb-0 "+(t.darkMode?"text-gray-600":"text-gray-700")},[t._v("Container width: "+t._s(t.containerWidth)+"%")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.containerWidth,expression:"containerWidth"}],attrs:{type:"range",min:"1",max:"100"},domProps:{value:t.containerWidth},on:{__r:function(e){t.containerWidth=e.target.value}}})]),a("div",[a("v-dropdown",{attrs:{dark:t.darkMode},scopedSlots:t._u([{key:"button",fn:function(){return[a("v-btn",{attrs:{dropdown:"",color:"link"}},[t._v(" "+t._s(t.dropdownButtonTitle)+" "),a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-wrapper fa-caret-down"})])])]},proxy:!0}])},t._l(t.flexOptions,(function(e){return a("v-dropdown-item",{key:e,on:{click:function(a){return t.changeFlexOption(e)}}},[t._v(" "+t._s(e)+" ")])})),1),a("p",{class:t.darkMode?"text-gray-600":"text-gray-700"},[t._v(" Default: "),a("kbd",[t._v(t._s(t.defaultFlexValue))]),t._t("additionalInformation")],2)],1),a("CodeShowcase",{attrs:{flexOption:t.flexOption,flexAttribute:t.flexAttribute,isFlexItem:t.isFlexItem}},[t._t("default")],2)],1)])],1)},n=[];function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s=a("d4ec"),i=a("bee2"),l=a("262e"),c=a("2caf"),u=a("9ab4"),d=a("2b0e"),f=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-code",{attrs:{value:t.code,lang:"css",dark:t.darkMode}})},v=[],b=(a("99af"),function(t){Object(l["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"darkMode",get:function(){return this.$store.state.darkMode}},{key:"code",get:function(){return"".concat(this.isFlexItem?".flex-item":".container"," {\n  display: flex;\n  ").concat(this.flexAttribute,": ").concat(this.flexOption,";").concat(this.$slots.default?"\n  ".concat(this.$slots.default[0].text):"","\n}")}}]),a}(d["default"]));u["a"]([Object(f["b"])({type:String,required:!0})],b.prototype,"flexOption",void 0),u["a"]([Object(f["b"])({type:Boolean,default:!1})],b.prototype,"isFlexItem",void 0),u["a"]([Object(f["b"])({type:String,required:!0})],b.prototype,"flexAttribute",void 0),b=u["a"]([f["a"]],b);var y=b,x=y,h=a("2877"),O=Object(h["a"])(x,p,v,!1,null,null,null),w=O.exports,m=function(t){Object(l["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.flexOption=t.defaultFlexValue,t.containerWidth=100,t}return Object(i["a"])(a,[{key:"changeFlexOption",value:function(t){this.flexOption=t}},{key:"darkMode",get:function(){return this.$store.state.darkMode}},{key:"applyStyles",get:function(){return o({},this.flexAttribute,this.flexOption)}}]),a}(d["default"]);u["a"]([Object(f["b"])({type:String,default:"Alignments"})],m.prototype,"dropdownButtonTitle",void 0),u["a"]([Object(f["b"])({type:Boolean,default:!1})],m.prototype,"focusOneItem",void 0),u["a"]([Object(f["b"])({type:String,default:""})],m.prototype,"defaultFlexValue",void 0),u["a"]([Object(f["b"])({type:Boolean,default:!1})],m.prototype,"differentSize",void 0),u["a"]([Object(f["b"])({type:Boolean,default:!1})],m.prototype,"isFlexItem",void 0),u["a"]([Object(f["b"])({type:String,default:""})],m.prototype,"flexAttribute",void 0),u["a"]([Object(f["b"])({type:Array,default:[]})],m.prototype,"flexOptions",void 0),u["a"]([Object(f["b"])({type:String,default:""})],m.prototype,"styleForAlternateSquares",void 0),m=u["a"]([Object(f["a"])({components:{CodeShowcase:w}})],m);var _=m,j=_,g=(a("e4fe"),Object(h["a"])(j,r,n,!1,null,null,null));e["a"]=g.exports},e4fe:function(t,e,a){"use strict";a("5fe2")}}]);
//# sourceMappingURL=page-flexOptions-FlexWrap.328fac45.js.map