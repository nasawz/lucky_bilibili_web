(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{126:function(e,t,n){},127:function(e,t){},135:function(e,t){},142:function(e,t){},158:function(e){e.exports={app_name:"startup"}},159:function(e){e.exports={app_name:"startup"}},235:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(65),c=n(80),l=n(245),i=(n(87),n(47)),u=n(48),o=n(54),s=n(49),f=n(55),d=n(116),m=n.n(d),g=n(246),b=n(91),h=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("div",null,a.createElement(g.a,{size:b.a.large}))}}]),t}(a.Component),v=m()({loader:function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,239))},loading:h}),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.match;return a.createElement("div",{className:"content"},a.createElement(c.d,null,a.createElement(c.a,{exact:!0,from:"".concat(e.url,"/"),to:"".concat(e.url,"home")}),a.createElement(c.b,{path:"".concat(e.url,"home"),component:v})))}}]),t}(a.Component);n(126);var O=function(){return a.createElement("div",{className:"NavBar"},a.createElement("div",{className:"logo ms-font-xl"},a.createElement("strong",null,"B\u7ad9\u62bd\u5956\u52a9\u624b")))},j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match;e.location;return a.createElement("div",{className:"App"},a.createElement("div",{className:"header"},a.createElement(O,null)),a.createElement("div",{className:"body"},a.createElement(p,{match:t})))}}]),t}(a.Component),E=n(0);Object(E.u)({palette:{themePrimary:"#01a0a6",themeLighterAlt:"#f1fbfb",themeLighter:"#cbeff1",themeLight:"#a0e2e4",themeTertiary:"#52c5c9",themeSecondary:"#17abb0",themeDarkAlt:"#019095",themeDark:"#017a7e",themeDarker:"#015a5d",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#bab8b7",neutralSecondary:"#a3a2a0",neutralPrimaryAlt:"#8d8b8a",neutralPrimary:"#323130",neutralDark:"#605e5d",black:"#494847",white:"#ffffff"}});var w=Object(c.g)(function(e){var t=e.match;return a.createElement(l.a,null,a.createElement(c.d,null,a.createElement(c.b,{path:"".concat(t.url),component:j})))}),y=n(111),k=n(109),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.locale,n=e.translations;return a.createElement(y.a,{locale:t,key:t,messages:n},this.props.children)}}]),t}(a.Component),L=Object(k.b)(function(e){return{locale:e.intl.locale,translations:e.intl.translations}})(x),A=n(146),_=n(96),D=n.n(_),N=n(97),T=n(34),I=n(98),P=n.n(I),C={en:n(158),zh:n(159)},V=n(160),z=n(161);Object(y.b)(V),Object(y.b)(z);var B=function(e){return T.has(C,e)?C[e]:C.en},S=P.a.get("locale")?P.a.get("locale"):function(){var e=["zh","en"];return T.chain(window.navigator).pick(["languages","language","browserLanguage","userLanguage","systemLanguage"]).values().flatten().compact().map(function(e){return e.substr(0,2)}).find(function(t){return T.includes(e,t)}).value()||"en"}(),F={state:{locale:S,translations:B(S)},reducers:{_changeLocale:function(e,t){return P.a.set("locale",t),Object.assign({},e,{locale:t,translations:B(t)})},setData:function(e,t){return Object.assign({},e,{locale:t.locale,translations:B(t.locale)})}},effects:function(e){return{changeLocale:function(){var t=Object(N.a)(D.a.mark(function t(n,a){return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.intl._changeLocale(n),this.setIntl({cb:null,params:T.merge(a,{intl:{locale:n}})},a);case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}}},G=n(58),J=n(162),Q=n.n(J),q=n(163),H=n.n(q),K=n(192),M={envId:window.__globalData.cloudbaseenv.ENV_ID},R=K.a.init({env:M.envId});P.a.addPlugin(Q.a);var U={state:{vlog:{info:{title:""},replies:[]},awards:[{title:"\u5956\u54c1\u540d\u79f0",count:1,uuid:H.a.v1()}],setting:{once:!1,fans:!1,include:"",time_end:null,exclude:[]}},actions:function(e){var t=e.model,n=e.setState;return{addAward:function(){var e={title:"\u5956\u54c1\u540d\u79f0",count:1,uuid:H.a.v1()},a=t().awards;n({awards:T.concat(a,[e])})},removeAward:function(e){var a=t().awards;n({awards:T.difference(a,[e])})},changeAward:function(e){var a=t().awards,r=T.keyBy(a,"uuid");r[e.uuid]=Object.assign({},r[e.uuid],e);var c=T.values(r);n({awards:c})},changeOnce:function(e){var a=t().setting;n({setting:Object.assign({},a,{once:e})})},changeFans:function(e){var a=t().setting;n({setting:Object.assign({},a,{fans:e})})},changeInclude:function(e){var a=t().setting;n({setting:Object.assign({},a,{include:e})})},setTimeEnd:function(e){var a=t().setting;n({setting:Object.assign({},a,{time_end:e})})},clearTimeEnd:function(){var e=t().setting;n({setting:Object.assign({},e,{time_end:null})})},addExclude:function(e){var a=t().setting,r=a.exclude;n({setting:Object.assign({},a,{exclude:T.concat(r,[e])})})},removeExclude:function(e){var a=t().setting,r=a.exclude;n({setting:Object.assign({},a,{exclude:T.difference(r,[e])})})},changeTitle:function(e){var a=t().vlog;n({vlog:Object.assign({},a,{info:{title:e}})})},catchVlogAsync:function(){var e=Object(N.a)(D.a.mark(function e(t){var a,r,c;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=P.a.get("VLOG~".concat(t))){e.next=9;break}return e.next=5,R.callFunction({name:"catch-vlog",data:{url:t}});case 5:r=e.sent,a=r.result,c=(new Date).getTime()+6e4,P.a.set("VLOG~".concat(t),a,c);case 9:n({vlog:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()}}};Object(G.a)("vlog",U);var W=Object(A.init)({models:{intl:F,common:{state:{version:"0.1.0"},reducers:{},effects:function(e){return{}}}}});function X(e){return a.createElement(k.a,{store:W},a.createElement(r.a,null,a.createElement(L,null,a.createElement(c.d,null,a.createElement(c.b,{path:"/",component:w})))))}n.d(t,"default",function(){return X})},87:function(e,t,n){}}]);
//# sourceMappingURL=6.42ec779a.chunk.js.map