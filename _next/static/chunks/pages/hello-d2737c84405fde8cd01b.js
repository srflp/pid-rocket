_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery,a=void 0!==i&&i;return n||o&&a}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?i=!1:(l.add(f),r[s]=l)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},e)}h.rewind=function(){};var y=h;e.default=y},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),l=function(t){a(n,t);var e=s(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=l},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},g4pe:function(t,e,n){t.exports=n("8Kt/")},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oWtG:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return s}));var a=n("rePB"),u=function(){function t(){r(this,t),Object(a.a)(this,"velocity",void 0),Object(a.a)(this,"acceleration",void 0),Object(a.a)(this,"y",void 0),Object(a.a)(this,"gravity",-9.81),Object(a.a)(this,"mass",1),this.acceleration=0,this.velocity=0,this.y=0}return i(t,[{key:"updateProperties",value:function(t){this.acceleration=this.gravity+t/this.mass,this.velocity+=this.acceleration,this.y+=this.velocity}},{key:"getY",value:function(){return this.y}}]),t}(),c=function(){function t(e){r(this,t),Object(a.a)(this,"integralError",0),Object(a.a)(this,"errorLast",0),Object(a.a)(this,"options",void 0),this.options=e}return i(t,[{key:"calculateThrust",value:function(t){var e=this.options,n=e.timeStep,r=e.destination,o=e.maxThrust,i=e.kP,a=e.kI,u=e.kD,c=r-t;this.integralError+=c*n;var s=(c-this.errorLast)/n;this.errorLast=c;var f=i*c+a*this.integralError+u*s;return f>=o?f=o:f<=0&&(f=0),f}}]),t}(),s=function(){function t(e){r(this,t),Object(a.a)(this,"options",void 0),Object(a.a)(this,"rocket",void 0),Object(a.a)(this,"rocketPID",void 0),this.options=e,this.rocket=new u,this.rocketPID=new c(e)}return i(t,[{key:"generateData",value:function(){for(var t=this.options,e=t.simTime,n=t.timeStep,r={poses:[],times:[]},o=0;o<e;o+=n){o=Number(o.toFixed(3));var i=this.rocketPID.calculateThrust(this.rocket.getY());this.rocket.updateProperties(i),r.poses.push(this.rocket.getY()),r.times.push(o)}return r}}]),t}()},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},uEiV:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hello",function(){return n("uXoR")}])},uXoR:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n("nKUr"),o=n("g4pe"),i=n.n(o),a=n("q1tI"),u=n("oWtG"),c={timeStep:.002,simTime:1,maxThrust:15,destination:10,kP:.25,kI:40,kD:.0008099999999999997};function s(){var t=Object(a.useState)(0),e=(t[0],t[1],new u.a(c).generateData());return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:"Hello"})}),Object(r.jsx)("pre",{children:JSON.stringify(e,null,2)})]})}}},[["uEiV",0,1]]]);