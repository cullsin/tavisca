(window.webpackJsonpadmin=window.webpackJsonpadmin||[]).push([[0],{44:function(e,t,n){e.exports=n(75)},53:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return d}));var r="SET_TASK_REQUEST",a="SET_TASK_SUCCESS",c="DELETE_TASK_REQUEST",o="DELETE_TASK_SUCCESS",u="FETCH_TASK_REQUEST",s="FETCH_TASK_SUCCESS",i="MOVE_TASK_REQUEST",d="MOVE_TASK_SUCCESS"},75:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(16),o=n.n(c),u=n(24),s=n(38),i=(n(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=n(43),f=n(9),l=n(23),b=n(39),v=n.n(b),w=n(40),h=n.n(w),j=n(3),y=n.n(j),O=n(42),x=n(4),E=n(14),S=n(41),m=n.n(S).a.create({baseURL:"https://api.sidis.pothu.in"}),k=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.post("/card/save",t).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.post("/card/delete",t).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.keyword;return m.get("/card/list?keyword="+t).then((function(e){return e}))},_=function(e,t){return t?{json:e.data.records[t]}:{json:e.data.records}},C=n(8),A="LOADING_PROGRESS",R="LOADING_SUCCESS",U=y.a.mark(P),D=y.a.mark(F),L=y.a.mark(G),K=y.a.mark(H),Q=y.a.mark(N),W=y.a.mark(I);function P(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(C.e,H);case 2:case"end":return e.stop()}}),U)}function F(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(C.c,N);case 2:case"end":return e.stop()}}),D)}function G(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(C.a,I);case 2:case"end":return e.stop()}}),L)}function H(e){var t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.d)({type:A});case 2:return r.next=4,Object(x.b)(k,e.payload);case 4:return t=r.sent,n=_(t).json,r.next=8,Object(x.d)({type:C.f,payload:n});case 8:return r.next=10,Object(x.d)({type:R});case 10:case"end":return r.stop()}}),K)}function N(e){var t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.d)({type:A});case 2:return r.next=4,Object(x.b)(T,e.payload);case 4:return t=r.sent,n=_(t,"list").json,r.next=8,Object(x.d)({type:C.d,payload:n});case 8:return r.next=10,Object(x.d)({type:R});case 10:case"end":return r.stop()}}),Q)}function I(e){var t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.d)({type:A});case 2:return r.next=4,Object(x.b)(g,e.payload);case 4:return t=r.sent,n=_(t).json,r.next=8,Object(x.d)({type:C.b,payload:n});case 8:return r.next=10,Object(x.d)({type:R});case 10:case"end":return r.stop()}}),W)}var z=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.post("/task/save",t).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.post("/task/delete",t).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){var t=e.offset,n=e.keyword,r=e.card.id;return m.get("/task/list?keyword="+n+"&card_id="+r+"&offset="+t).then((function(e){return e}))},M=function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.post("/task/move",t).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=n(6),$=y.a.mark(re),q=y.a.mark(ae),X=y.a.mark(ce),Y=y.a.mark(oe),Z=y.a.mark(ue),ee=y.a.mark(se),te=y.a.mark(ie),ne=y.a.mark(de);function re(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(V.g,ue);case 2:case"end":return e.stop()}}),$)}function ae(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(V.c,se);case 2:case"end":return e.stop()}}),q)}function ce(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(V.a,ie);case 2:case"end":return e.stop()}}),X)}function oe(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(V.e,de);case 2:case"end":return e.stop()}}),Y)}function ue(e){var t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.d)({type:A});case 2:return r.next=4,Object(x.b)(z,e.payload);case 4:return t=r.sent,n=_(t).json,r.next=8,Object(x.d)({type:V.h,payload:n});case 8:return r.next=10,Object(x.d)({type:R});case 10:case"end":return r.stop()}}),Z)}function se(e){var t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.d)({type:A});case 2:return r.next=4,Object(x.b)(J,e.payload);case 4:return t=r.sent,n=_(t).json,r.next=8,Object(x.d)({type:V.d,payload:n});case 8:return r.next=10,Object(x.d)({type:R});case 10:case"end":return r.stop()}}),ee)}function ie(e){var t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.d)({type:A});case 2:return r.next=4,Object(x.b)(B,e.payload);case 4:return t=r.sent,n=_(t).json,r.next=8,Object(x.d)({type:V.b,payload:n});case 8:return r.next=10,Object(x.d)({type:R});case 10:case"end":return r.stop()}}),te)}function de(e){var t,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(x.d)({type:A});case 2:return r.next=4,Object(x.b)(M,e.payload);case 4:return t=r.sent,n=_(t).json,r.next=8,Object(x.d)({type:V.f,payload:n});case 8:return r.next=10,Object(x.d)({type:R});case 10:case"end":return r.stop()}}),ne)}var pe=y.a.mark(le),fe=[P,F,G,re,ae,ce,oe];function le(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=fe.map((function(e){return Object(x.c)(e)})),t.next=3,Object(x.a)(Object(O.a)(e));case 3:case"end":return t.stop()}}),pe)}var be=le,ve=n(22),we={items:{}},he=Object(f.c)({loading:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:we;switch((1<arguments.length?arguments[1]:void 0).type){case A:return Object(ve.a)({},e,{items:{isLoading:!0}});case R:return Object(ve.a)({},e,{items:{isLoading:!1}});default:return e}},card:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case C.e:case C.a:case C.c:return{items:{}};case C.f:return{setCard:t.payload||[]};case C.d:return{list:t.payload||[]};case C.b:return{delete:t.payload||[]};default:return e}},task:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case V.g:case V.a:case V.c:case V.e:return{items:{}};case V.h:return{setTask:t.payload||[]};case V.d:return{list:t.payload||[]};case V.b:return{delete:t.payload||[]};case V.f:return{move:t.payload||[]};default:return e}}}),je={key:"root",storage:h.a,stateReconciler:v.a},ye=Object(l.a)(je,he),Oe=Object(p.a)(),xe=Object(f.e)(ye,Object(f.a)(Oe)),Ee=Object(l.b)(xe);Oe.run(be);var Se=n(36),me=n(15);Se.b.add(me.b,me.d,me.e,me.c,me.a);var ke=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,160))}));Object(r.lazy)((function(){return Promise.resolve().then(n.t.bind(null,53,7))}));var ge=a.a.createElement(r.Suspense,{fallback:a.a.createElement("h1",null," Task Runner is loading ")},a.a.createElement(u.a,{store:xe},a.a.createElement(s.PersistGate,{persistor:Ee},a.a.createElement(ke,null))));o.a.render(ge,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t,n="".concat("","/service-worker.js");i?(t=n,e,fetch(t).then((function(e){var n=e.headers.get("content-type");404===e.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(t,void 0)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")})),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}()},8:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s}));var r="SET_CARD_REQUEST",a="SET_CARD_SUCCESS",c="DELETE_CARD_REQUEST",o="DELETE_CARD_SUCCESS",u="FETCH_CARD_REQUEST",s="FETCH_CARD_SUCCESS"}},[[44,1,2]]]);