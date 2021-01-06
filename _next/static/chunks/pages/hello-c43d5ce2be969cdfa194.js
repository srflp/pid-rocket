_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,i=t.hasQuery,a=void 0!==i&&i;return r||o&&a}},"7W2i":function(t,e,r){var n=r("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"8Kt/":function(t,e,r){"use strict";r("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var n,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r("q1tI")),i=(n=r("Xuae"))&&n.__esModule?n:{default:n},a=r("lwAK"),u=r("FYa8"),s=r("/0+H");function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var c=p[u];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?i=!1:r.add(c);else{var f=o.props[c],l=n[c]||new Set;l.has(f)?i=!1:(l.add(f),n[c]=l)}}}return i}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}function d(t){var e=t.children,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},e)}d.rewind=function(){};var v=d;e.default=v},A7ll:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}r.d(e,"a",(function(){return s}));var a=r("rePB"),u=function(){function t(){n(this,t),Object(a.a)(this,"_velocity",void 0),Object(a.a)(this,"_acceleration",void 0),Object(a.a)(this,"_y",void 0),Object(a.a)(this,"_gravity",-9.81),Object(a.a)(this,"_mass",1),this._acceleration=0,this._velocity=0,this._y=0}return i(t,[{key:"updateAcceleration",value:function(t){this._acceleration=this._gravity+t/this._mass}},{key:"updateVelocity",value:function(){this._velocity+=this._acceleration}},{key:"updatePosition",value:function(){this._y+=this._velocity}},{key:"y",get:function(){return this._y}}]),t}(),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;n(this,t),Object(a.a)(this,"timeStep",void 0),Object(a.a)(this,"simTime",void 0),Object(a.a)(this,"maxThrust",void 0),Object(a.a)(this,"destination",void 0),Object(a.a)(this,"kP",void 0),Object(a.a)(this,"kI",void 0),Object(a.a)(this,"kD",void 0),Object(a.a)(this,"data",void 0),Object(a.a)(this,"error",void 0),Object(a.a)(this,"integralError",void 0),Object(a.a)(this,"errorLast",void 0),Object(a.a)(this,"derivativeError",void 0),Object(a.a)(this,"output",void 0),Object(a.a)(this,"rocket",void 0),this.timeStep=.002,this.simTime=e,this.maxThrust=15,this.destination=10,this.kP=.25,this.kI=40,this.kD=.0008099999999999997,this.data={poses:[],times:[]},this.rocket=new u,this.error=0,this.integralError=0,this.errorLast=0,this.derivativeError=0,this.output=0}return i(t,[{key:"calculateThrust",value:function(t){return this.error=this.destination-t,this.integralError+=this.error*this.timeStep,this.derivativeError=(this.error-this.errorLast)/this.timeStep,this.errorLast=this.error,this.output=this.kP*this.error+this.kI*this.integralError+this.kD*this.derivativeError,this.output>=this.maxThrust?this.output=this.maxThrust:this.output<=0&&(this.output=0),this.output}},{key:"generateData",value:function(){for(var t=0;t<this.simTime;t+=this.timeStep){t=Number(t.toFixed(3));var e=this.calculateThrust(this.rocket.y);this.rocket.updateAcceleration(e),this.rocket.updateVelocity(),this.rocket.updatePosition(),this.data.poses.push(this.rocket.y),this.data.times.push(t)}return this.data}}]),t}()},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},Nsbk:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),a=r("Bnag");t.exports=function(t){return n(t)||o(t)||i(t)||a()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},W8MJ:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},Xuae:function(t,e,r){"use strict";var n=r("RIqP"),o=r("lwsE"),i=r("W8MJ"),a=(r("PJYZ"),r("7W2i")),u=r("a1gu"),s=r("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}e.__esModule=!0,e.default=void 0;var f=r("q1tI"),l=function(t){a(r,t);var e=c(r);function r(t){var i;return o(this,r),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);e.default=l},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},a1gu:function(t,e,r){var n=r("cDf5"),o=r("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},g4pe:function(t,e,r){t.exports=r("8Kt/")},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},rePB:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},uEiV:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hello",function(){return r("uXoR")}])},uXoR:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return s}));var n=r("nKUr"),o=r("g4pe"),i=r.n(o),a=r("q1tI"),u=r("A7ll");function s(){var t=Object(a.useState)(0),e=(t[0],t[1],(new u.a).generateData());return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{children:Object(n.jsx)("title",{children:"Hello"})}),Object(n.jsx)("pre",{children:JSON.stringify(e,null,2)})]})}}},[["uEiV",0,1]]]);