(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9c54058"],{"01f7":function(t,e,n){},"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,l,u,s){var f=n+t.length,d=l.length,v=c;return void 0!==u&&(u=r(u),v=o),i.call(s,v,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":o=u[i.slice(1,-1)];break;default:var c=+i;if(0===c)return r;if(c>d){var s=a(c/10);return 0===s?r:s<=d?void 0===l[s-1]?i.charAt(1):l[s-1]+i.charAt(1):r}o=l[c-1]}return void 0===o?"":o}))}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"16a3":function(t,e,n){"use strict";n("cd8c")},"246d":function(t,e,n){"use strict";n("24d6")},"24d6":function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),o=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("0cb2"),s=n("14c3"),f=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=r.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(n,r){var a=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!p&&x||"string"===typeof r&&-1===r.indexOf(g)){var c=n(e,t,this,r);if(c.done)return c.value}var h=a(t),b=String(this),E="function"===typeof r;E||(r=String(r));var y=h.global;if(y){var _=h.unicode;h.lastIndex=0}var k=[];while(1){var m=s(h,b);if(null===m)break;if(k.push(m),!y)break;var R=String(m[0]);""===R&&(h.lastIndex=l(b,i(h.lastIndex),_))}for(var S="",w=0,O=0;O<k.length;O++){m=k[O];for(var $=String(m[0]),I=f(d(o(m.index),b.length),0),T=[],C=1;C<m.length;C++)T.push(v(m[C]));var P=m.groups;if(E){var A=[$].concat(T,I,b);void 0!==P&&A.push(P);var U=String(r.apply(void 0,A))}else U=u($,b,I,T,P,r);I>=w&&(S+=b.slice(w,I)+U,w=I+$.length)}return S+b.slice(w)}]}))},"53d7":function(t,e,n){"use strict";n("01f7")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=n("5692"),o=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),l=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=u||f||s;d&&(l=function(t){var e,n,a,i,l=this,d=s&&l.sticky,v=r.call(l),p=l.source,x=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,x++),n=new RegExp("^(?:"+p+")",v)),f&&(n=new RegExp("^"+p+"$(?!\\s)",v)),u&&(e=l.lastIndex),a=o.call(d?n:l,g),d?a?(a.input=a.input.slice(x),a[0]=a[0].slice(x),a.index=l.lastIndex,l.lastIndex+=a[0].length):l.lastIndex=0:u&&a&&(l.lastIndex=l.global?a.index+a[0].length:e),f&&a&&a.length>1&&c.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=l},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},cd8c:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9112"),c=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),s=i("replace"),f=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),d=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,s){var v=i(t),p=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),x=p&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!p||!x||"replace"===t&&(!l||!u||f)||"split"===t&&!d){var g=/./[v],h=n(v,""[t],(function(t,e,n,r,a){return e.exec===RegExp.prototype.exec?p&&!a?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=h[0],E=h[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}s&&o(RegExp.prototype[v],"sham",!0)}},f3e2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("v-space"),n("Footer")],1)},a=[],i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{title:"Flexbox Visualizer",subtitle:"© 2020 Florian Woelki"}},[n("p",[t._v(" Built with "),n("i",{staticClass:"fas fa-heart animated pulse"}),t._v(" with "),n("a",{attrs:{target:"_blank",href:"https://github.com/FlorianWoelki/vue-cirrus/"}},[t._v("Vue-Cirrus")])])])},c=[],l=(n("53d7"),n("2877")),u={},s=Object(l["a"])(u,o,c,!1,null,null,null),f=s.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navbar",{ref:"navbar",attrs:{clear:!t.isMobileDevice(),fixed:"",dark:t.darkMode},scopedSlots:t._u([{key:"brandTitle",fn:function(){return[n("router-link",{attrs:{to:"/"}},[n("h6",[t._v("Flexbox Visualizer")])])]},proxy:!0}])},[n("v-nav-region",{attrs:{position:"left"}},[n("v-navbar-item",{attrs:{target:"_blank",href:"https://github.com/FlorianWoelki/flex-vis"}},[n("i",{staticClass:"fab fa-github-alt fa-lg"})]),n("v-nav-dropdown",{attrs:{animated:""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Flex Options")]},proxy:!0}])},t._l(t.flexOptionsSorted,(function(e){return n("v-nav-dropdown-item",{key:e,attrs:{href:"#/flexOptions/"+t.flexOptionsRoutes(e)}},[t._v(" "+t._s(e)+" ")])})),1)],1),n("v-nav-region",{attrs:{position:"right"}},[n("div",{staticClass:"custom-nav-item"},[n("v-toggle",{staticStyle:{"text-align":"initial","padding-left":"0"},attrs:{dataCheckIcon:"🌑",dataUncheckIcon:"🌕"},on:{change:function(e){return t.toggleDarkMode()}}})],1)])],1)},v=[],p=n("d4ec"),x=n("bee2"),g=n("262e"),h=n("2caf"),b=(n("ac1f"),n("5319"),n("9ab4")),E=n("60a3"),y=function(t){Object(g["a"])(n,t);var e=Object(h["a"])(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.flexOptions=["order","flex-direction","flex-grow","flex-wrap","flex-shrink","justify-content","flex","align-self","align-items","align-content"],t}return Object(x["a"])(n,[{key:"mounted",value:function(){if(!this.isMobileDevice()){var t=this.$refs.navbar.$el;window.addEventListener("scroll",(function(e){var n=this.scrollY;null!==t&&(n>=50?t.classList.remove("header-clear"):t.classList.add("header-clear"))}))}}},{key:"isMobileDevice",value:function(){return window.innerWidth<=769}},{key:"darkMode",get:function(){return this.$store.state.darkMode}},{key:"flexOptionsSorted",get:function(){var t=this.flexOptions;return t.sort((function(t,e){return t>e?1:e>t?-1:0})),t}},{key:"toggleDarkMode",value:function(){this.$store.commit("toggleDarkMode")}},{key:"flexOptionsRoutes",value:function(t){return t.replace("-","")}}]),n}(i["a"]);y=b["a"]([E["a"]],y);var _=y,k=_,m=(n("16a3"),Object(l["a"])(k,d,v,!1,null,null,null)),R=m.exports,S=i["a"].extend({components:{Navbar:R,Footer:f}}),w=S,O=(n("246d"),Object(l["a"])(w,r,a,!1,null,null,null));e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-b9c54058.2c206270.js.map