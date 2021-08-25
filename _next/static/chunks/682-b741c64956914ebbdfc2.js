"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{16867:function(e,n,t){t.d(n,{u:function(){return S}});var r=t(19642),i=t(67294),u=t(133),o=t(58529),a=t(60852),c=t(35989),l=t(92506);var f,s=t(3980);function d(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){e.current=!1}),[]),e.current}function v(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,r.Ul)(e.splice(0));!(n=t()).done;){var i=n.value;i()}}};return n}function p(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function m(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function h(e,n,t,r,i,u){var o=v(),a=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return m.apply(void 0,[e].concat(i)),p.apply(void 0,[e].concat(n,t)),o.nextFrame((function(){m.apply(void 0,[e].concat(t)),p.apply(void 0,[e].concat(r)),o.add(function(e,n){var t=v();if(!e)return t.dispose;var r=getComputedStyle(e),i=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=i[0],o=i[1];return 0!==u?t.setTimeout((function(){n(f.Finished)}),u+o):n(f.Finished),t.add((function(){return n(f.Cancelled)})),t.dispose}(e,(function(t){return m.apply(void 0,[e].concat(r,n)),p.apply(void 0,[e].concat(i)),a(t)})))})),o.add((function(){return m.apply(void 0,[e].concat(n,t,r,i))})),o.add((function(){return a(f.Cancelled)})),o.dispose}function b(e){return void 0===e&&(e=""),(0,i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(f||(f={}));var y,g=(0,i.createContext)(null);g.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(y||(y={}));var E=(0,i.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((function(e){return e.state===y.Visible})).length>0}function C(e){var n=(0,i.useRef)(e),t=(0,i.useRef)([]),r=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,i.useEffect)((function(){n.current=e}),[e]);var a=(0,i.useCallback)((function(e,i){var a;void 0===i&&(i=o.l4.Hidden);var c=t.current.findIndex((function(n){return n.id===e}));-1!==c&&((0,u.E)(i,((a={})[o.l4.Unmount]=function(){t.current.splice(c,1)},a[o.l4.Hidden]=function(){t.current[c].state=y.Hidden},a)),!w(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),c=(0,i.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==y.Visible&&(n.state=y.Visible):t.current.push({id:e,state:y.Visible}),function(){return a(e,o.l4.Unmount)}}),[t,a]);return(0,i.useMemo)((function(){return{children:t,register:c,unregister:a}}),[c,a,t])}function T(){}E.displayName="NestingContext";var F=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function A(e){for(var n,t={},i=(0,r.Ul)(F);!(n=i()).done;){var u,o=n.value;t[o]=null!=(u=e[o])?u:T}return t}var V=o.AN.RenderStrategy;function H(e){var n,t=e.beforeEnter,v=e.afterEnter,p=e.beforeLeave,m=e.afterLeave,T=e.enter,F=e.enterFrom,H=e.enterTo,S=e.entered,L=e.leave,x=e.leaveFrom,R=e.leaveTo,M=(0,r.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),O=(0,i.useRef)(null),j=(0,i.useState)(y.Visible),k=j[0],N=j[1],U=M.unmount?o.l4.Unmount:o.l4.Hidden,Z=function(){var e=(0,i.useContext)(g);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),q=Z.show,D=Z.appear,I=function(){var e=(0,i.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),Y=I.register,_=I.unregister,P=d(),J=(0,l.M)(),K=(0,i.useRef)(!1),B=C((function(){K.current||(N(y.Hidden),_(J),ne.current.afterLeave())}));(0,a.e)((function(){if(J)return Y(J)}),[Y,J]),(0,a.e)((function(){var e;U===o.l4.Hidden&&J&&(q&&k!==y.Visible?N(y.Visible):(0,u.E)(k,((e={})[y.Hidden]=function(){return _(J)},e[y.Visible]=function(){return Y(J)},e)))}),[k,J,Y,_,q,U]);var $=b(T),z=b(F),G=b(H),Q=b(S),W=b(L),X=b(x),ee=b(R),ne=function(e){var n=(0,i.useRef)(A(e));return(0,i.useEffect)((function(){n.current=A(e)}),[e]),n}({beforeEnter:t,afterEnter:v,beforeLeave:p,afterLeave:m}),te=(0,c.H)();(0,i.useEffect)((function(){if(te&&k===y.Visible&&null===O.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[O,k,te]);var re=P&&!D;(0,a.e)((function(){var e=O.current;if(e&&!re)return K.current=!0,q&&ne.current.beforeEnter(),q||ne.current.beforeLeave(),q?h(e,$,z,G,Q,(function(e){K.current=!1,e===f.Finished&&ne.current.afterEnter()})):h(e,W,X,ee,Q,(function(e){K.current=!1,e===f.Finished&&(w(B)||(N(y.Hidden),_(J),ne.current.afterLeave()))}))}),[ne,J,K,_,B,O,re,q,$,z,G,W,X,ee]);var ie={ref:O},ue=M;return i.createElement(E.Provider,{value:B},i.createElement(s.up,{value:(0,u.E)(k,(n={},n[y.Visible]=s.ZM.Open,n[y.Hidden]=s.ZM.Closed,n))},(0,o.sY)({props:(0,r.gY)({},ue,ie),defaultTag:"div",features:V,visible:k===y.Visible,name:"Transition.Child"})))}function S(e){var n,t=e.show,a=e.appear,c=void 0!==a&&a,l=e.unmount,f=(0,r.gK)(e,["show","appear","unmount"]),v=(0,s.oJ)();void 0===t&&null!==v&&(t=(0,u.E)(v,((n={})[s.ZM.Open]=!0,n[s.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var p=(0,i.useState)(t?y.Visible:y.Hidden),m=p[0],h=p[1],b=C((function(){h(y.Hidden)})),T=d(),F=(0,i.useMemo)((function(){return{show:t,appear:c||!T}}),[t,c,T]);(0,i.useEffect)((function(){t?h(y.Visible):w(b)||h(y.Hidden)}),[t,b]);var A={unmount:l};return i.createElement(E.Provider,{value:b},i.createElement(g.Provider,{value:F},(0,o.sY)({props:(0,r.gY)({},A,{as:i.Fragment,children:i.createElement(H,Object.assign({},A,f))}),defaultTag:i.Fragment,features:V,visible:m===y.Visible,name:"Transition"})))}S.Child=function(e){var n=null!==(0,i.useContext)(g),t=null!==(0,s.oJ)();return!n&&t?i.createElement(S,Object.assign({},e)):i.createElement(H,Object.assign({},e))},S.Root=S},19915:function(e,n,t){function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,u=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){i=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw u}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return i}})}}]);