(this.webpackJsonpapps=this.webpackJsonpapps||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/angel.3a20d12e.png"},109:function(e,t,a){e.exports=a.p+"static/media/bolnoy.007c104e.png"},110:function(e,t,a){e.exports=a.p+"static/media/dead.61525782.png"},163:function(e,t,a){e.exports=a(260)},253:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);a(164),a(190),a(192),a(193),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232);var l=a(0),n=a.n(l),r=a(86),c=a.n(r),i=a(111),m=a(87),o=a(88),s=a(38),d=a(113),E=a(112),u=a(2),h=(a(251),a(95)),b=a.n(h),p=a(96),y=a.n(p),g=a(97),v=a.n(g),f=a(98),k=a.n(f),x=a(99),S=a.n(x),B=a(35),w=a.n(B),C=a(100),z=a.n(C),_=(a(252),a(101)),A=a.n(_),N=a(102),V=a.n(N),M=a(103),O=a.n(M),T=a(57),W=a.n(T),j=a(104),D=a.n(j),K=a(105),I=a.n(K),P=a(106),H=a.n(P),R=a(58),U=a.n(R),L=a(107),J=a.n(L),q=a(39),F=a.n(q),G=a(108),Q=a.n(G),Z=a(109),X=a.n(Z),Y=a(110),$=a.n(Y),ee=(a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(21)),te=a.n(ee);te.a.send("VKWebAppInit"),te.a.send("VKWebAppAddToFavorites",{}),te.a.send("VKWebAppShare",{link:"https://vk.com/app7408073"}),te.a.send("VKWebAppShowWallPostBox",{message:"Test VKWebAppShowWallPostBox"});var ae={backgroundColor:"var(--accent)"},le=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={activeStory:"home",scheme:"bright_light",text:"",snackbar:null,activeModal:null,modalHistory:[]},l.onStoryChange=l.onStoryChange.bind(Object(s.a)(l)),l.openBase=l.openBase.bind(Object(s.a)(l)),l.modalBack=function(){l.setActiveModal(l.state.modalHistory[l.state.modalHistory.length-2])},l}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.openBase()}},{key:"openBase",value:function(){var e=this;this.state.snackbar||this.setState({snackbar:n.a.createElement(u.x,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})},before:n.a.createElement(u.a,{size:24,style:ae},n.a.createElement(F.a,{fill:"#fff",width:14,height:14}))},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435")})}},{key:"componentDidMount",value:function(){var e=this;te.a.subscribe((function(t){var a=t.detail,l=a.type,n=a.data;"VKWebAppUpdateConfig"===l&&e.setState({scheme:n.scheme})}))}},{key:"UpdateTheme",value:function(){"bright_light"===this.state.scheme||"client_light"===this.state.scheme?(this.setState({scheme:"space_gray"}),te.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==this.state.scheme&&"client_dark"!==this.state.scheme||(this.setState({scheme:"bright_light"}),te.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(i.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this,t=n.a.createElement(u.r,{activeModal:this.state.activeModal,onClose:this.modalBack},n.a.createElement(u.p,{id:"settings",onClose:this.modalBack,header:n.a.createElement(u.q,{right:n.a.createElement(u.u,{onClick:this.modalBack},n.a.createElement(W.a,null))},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e")},n.a.createElement(u.j,null,n.a.createElement(u.k,null,n.a.createElement(u.b,{mode:"secondary",size:"xl",onClick:function(){return e.UpdateTheme()}},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443")),n.a.createElement(u.k,null,n.a.createElement(u.b,{before:n.a.createElement(J.a,null),mode:"secondary",size:"xl",onClick:function(){alert(1)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435")),n.a.createElement(u.k,null,n.a.createElement(u.b,{before:n.a.createElement(U.a,null),mode:"secondary",size:"xl",onClick:function(){return te.a.send("VKWebAppShare")}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f")),n.a.createElement(u.k,null,n.a.createElement(u.b,{before:n.a.createElement(U.a,null),mode:"secondary",size:"xl",onClick:function(){return te.a.send("VKWebAppShowWallPostBox")}},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u043f\u043e\u0441\u0442")))),n.a.createElement(u.p,{id:"sars",header:n.a.createElement(u.q,{right:n.a.createElement(u.u,{onClick:this.modalBack},n.a.createElement(W.a,null))},"\u041f\u043e\u0434\u043e\u0437\u0440\u0435\u043d\u0438\u0435")},n.a.createElement(u.j,null,n.a.createElement(u.k,null,n.a.createElement(u.b,{mode:"primary",className:"SarsSos",size:"xl",href:"tel:+112",target:"_blank"},"SOS")),n.a.createElement(u.k,null,n.a.createElement(u.b,{mode:"commerce",className:"SarsCall",size:"xl",href:"tel:+73525231503",target:"_blank"},"\u0417\u0432\u043e\u043d\u043e\u043a \u0432 \u0413\u0411\u0423")),n.a.createElement(u.k,null,n.a.createElement(u.b,{mode:"commerce",className:"SarsCall",size:"xl",href:"tel:+73525231503",target:"_blank"},"\u0417\u0432\u043e\u043d\u043e\u043a \u0432 \u0421\u043a\u043e\u0440\u0443\u044e \u041f\u043e\u043c\u043e\u0449\u044c")))));return n.a.createElement(u.f,{isWebView:!0,scheme:this.state.scheme},n.a.createElement(u.i,{activeStory:this.state.activeStory,tabbar:n.a.createElement(u.y,null,n.a.createElement(u.z,{onClick:this.onStoryChange,selected:"home"===this.state.activeStory,"data-story":"home",text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},n.a.createElement(y.a,null)),n.a.createElement(u.z,{onClick:this.onStoryChange,selected:"covid"===this.state.activeStory,"data-story":"covid",label:"73",text:"COVID"},n.a.createElement(b.a,null)),n.a.createElement(u.z,{onClick:this.onStoryChange,selected:"taxi"===this.state.activeStory,"data-story":"taxi",text:"\u0422\u0430\u043a\u0441\u0438"},n.a.createElement(v.a,null)),n.a.createElement(u.z,{onClick:this.onStoryChange,selected:"weather"===this.state.activeStory,"data-story":"weather",text:"\u041f\u043e\u0433\u043e\u0434\u0430"},n.a.createElement(S.a,null)),n.a.createElement(u.z,{onClick:this.onStoryChange,selected:"still"===this.state.activeStory,"data-story":"still",text:"\u0415\u0449\u0451"},n.a.createElement(k.a,null)))},n.a.createElement(u.A,{id:"home",activePanel:"home"},n.a.createElement(u.s,{id:"home"},n.a.createElement(u.t,null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),n.a.createElement(u.n,null,n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"shadow"},n.a.createElement(u.o,{mode:"secondary"},"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u0437\u0430 18 \u043c\u0430\u044f"),n.a.createElement(u.w,null),n.a.createElement(u.h,{style:{paddingTop:12,paddingBottom:12}},"\u0412 \u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0440\u043e\u0441\u0442 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043d\u043e\u0439 \u0438\u043d\u0444\u0435\u043a\u0446\u0438\u0435\u0439 (\u0437\u0430 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435 \u0441\u0443\u0442\u043a\u0438 \u043e\u043d \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b 9,2%, \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0435\u0439 51%).",n.a.createElement("br",null),n.a.createElement("br",null),"\u041d\u0430 18 \u043c\u0430\u044f \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e 11 \u043d\u043e\u0432\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 COVID-19.",n.a.createElement("br",null),n.a.createElement("br",null),"\u0418\u0437 \u043d\u0438\u0445 \u043f\u044f\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u2013 \u0437\u0430\u0432\u043e\u0437\u043d\u044b\u0435: \u0438\u0437 \u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0433\u0430, \u041c\u043e\u0441\u043a\u0432\u044b \u0438 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430. \u042d\u0442\u043e \u0436\u0438\u0442\u0435\u043b\u0438 \u041f\u0435\u0442\u0443\u0445\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430, \u0421\u0430\u0444\u0430\u043a\u0443\u043b\u0435\u0432\u043e, \u041a\u0443\u0440\u0433\u0430\u043d\u0430 \u0438 \u0441\u0435\u043b\u0430 \u041f\u043e\u043b\u043e\u0432\u0438\u043d\u043d\u043e\u0435 \u041f\u043e\u043b\u043e\u0432\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430.",n.a.createElement("br",null),n.a.createElement("br",null),"\u0428\u0435\u0441\u0442\u044c \u0433\u0440\u0430\u0436\u0434\u0430\u043d \u0437\u0430\u0431\u043e\u043b\u0435\u043b\u0438 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430. \u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u043b\u0443\u0447\u0430\u044f \u2013 \u0436\u0438\u0442\u0435\u043b\u0438 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e \u0438 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430, \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0441\u043b\u0443\u0447\u0430\u044e \u0432 \u0433. \u041a\u0443\u0440\u0433\u0430\u043d\u0435 \u0438 \u042e\u0440\u0433\u0430\u043c\u044b\u0448\u0441\u043a\u043e\u043c \u0440\u0430\u0439\u043e\u043d\u0435.",n.a.createElement("br",null),n.a.createElement("br",null),"\u0413\u0420\u0410\u0416\u0414\u0410\u041d\u0415, \u0411\u0415\u0420\u0415\u0413\u0418\u0422\u0415 \u0421\u0415\u0411\u042f \u0418 \u0421\u0412\u041e\u0418\u0425 \u0411\u041b\u0418\u0417\u041a\u0418\u0425. \u0418\u0417\u0411\u0415\u0413\u0410\u0419\u0422\u0415 \u041f\u041e\u0421\u0415\u0429\u0415\u041d\u0418\u042f \u041c\u041d\u041e\u0413\u041e\u041b\u042e\u0414\u041d\u042b\u0425 \u041c\u0415\u0421\u0422 \u0412\u0421\u0415\u041c\u0418 \u0421\u041f\u041e\u0421\u041e\u0411\u0410\u041c\u0418. \u0418\u0421\u041f\u041e\u041b\u042c\u0417\u0423\u0419\u0422\u0415 \u041c\u0415\u0414. \u041f\u0415\u0420\u0427\u0410\u0422\u041a\u0418 \u0418 \u041c\u0415\u0414. \u041c\u0410\u0421\u041a\u0423. \u0421 \u0423\u0412\u0410\u0416\u0415\u041d\u0418\u0415\u041c \u0410\u0414\u041c\u0418\u041d\u0418\u0421\u0422\u0420\u0410\u0422\u041e\u0420 Dalmatovo 360!"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"shadow"},n.a.createElement(u.o,{mode:"secondary"},"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u0437\u0430 17 \u043c\u0430\u044f"),n.a.createElement(u.w,null),n.a.createElement(u.h,{style:{paddingTop:12,paddingBottom:12}},"\u0412\u0441\u0442\u0440\u0435\u0447\u0430\u0439\u0442\u0435, \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u043d\u043e\u0432\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e. Release Beta Ver: 3.0.0!"),n.a.createElement("div",{style:{height:1}})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement(u.A,{id:"covid",activePanel:"covid",modal:t},n.a.createElement(u.s,{id:"covid"},n.a.createElement(u.t,null,"COVID-19"),n.a.createElement(u.n,null,n.a.createElement(u.h,null,n.a.createElement(u.m,{className:"CovidBanner",slideWidth:"100%",align:"center",style:{height:240}},n.a.createElement(u.c,{size:"l"},n.a.createElement(u.v,{icon:n.a.createElement("img",{className:"Covid",src:Q.a}),header:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e: 46"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445",n.a.createElement("br",null),"\u0437\u0430",n.a.createElement("br",null),"\u0432\u0435\u0441\u044c \u043f\u0435\u0440\u0438\u043e\u0434."),n.a.createElement("div",{style:{width:96,height:170}})),n.a.createElement(u.c,{size:"l"},n.a.createElement(u.v,{icon:n.a.createElement("img",{className:"Covid",src:X.a}),header:"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u043e: 73"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u044e\u0434\u0435\u0439,",n.a.createElement("br",null),"\u043a\u043e\u0442\u043e\u0440\u044b\u0435",n.a.createElement("br",null),"\u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0438."),n.a.createElement("div",{style:{width:96,height:170}})),n.a.createElement(u.c,{size:"l"},n.a.createElement(u.v,{icon:n.a.createElement("img",{className:"Covid",src:$.a}),header:"\u0423\u043c\u0435\u0440\u043b\u043e: 0"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043c\u0435\u0440\u0448\u0438\u0445",n.a.createElement("br",null),"\u043b\u044e\u0434\u0435\u0439 \u0437\u0430",n.a.createElement("br",null),"\u0432\u0435\u0441\u044c \u043f\u0435\u0440\u0438\u043e\u0434."),n.a.createElement("div",{style:{width:96,height:170}})))),n.a.createElement("div",{style:{height:1}}),n.a.createElement("br",null),n.a.createElement(u.j,null,n.a.createElement(u.l,{header:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430",mode:"warning"},"\u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u0432\u0430\u0439\u043f \u043f\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0435 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443."))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(u.j,null,n.a.createElement(u.l,{header:"!\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",mode:"error"},"\u0415\u0441\u0442\u044c \u043f\u043e\u0434\u043e\u0437\u0440\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441? \u0421\u043a\u043e\u0440\u0435\u0435 \u043d\u0430\u0436\u0438\u043c\u0430\u0439\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435!")),n.a.createElement(u.h,null,n.a.createElement(u.b,{before:n.a.createElement(w.a,null),className:"SarsBtn",size:"xl",mode:"primary",onClick:function(){return e.setActiveModal("sars")}},"\u0412\u044b\u0437\u0432\u0430\u0442\u044c")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement(u.A,{id:"taxi",activePanel:"taxi"},n.a.createElement(u.s,{id:"taxi"},n.a.createElement(u.t,null,"\u0422\u0430\u043a\u0441\u0438"),n.a.createElement(u.n,null,n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(u.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(352)-523-16-20",href:"tel:+73525231620",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "\u0412\u0438\u0440\u0430\u0436"'),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(u.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(922)-574-60-06",href:"tel:+79225746006",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "\u041b\u044e\u043a\u0441"'),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(u.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(922)-677-70-93",href:"tel:+79226777093",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "\u0420\u043e\u043c\u0430\u0448\u043a\u0430"'),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(u.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(963)-862-11-11",href:"tel:+79638621111",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "Maxim"'),n.a.createElement("div",{style:{height:1}})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(u.j,{href:"https://vk.me/dalmatovo360",target:"_blank"},n.a.createElement(u.l,{header:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",mode:"error"},'\u041d\u0435\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0442\u0430\u043a\u0441\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0438\u043b\u0438 \u043d\u0435 \u0442\u0430\u043a \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f? \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b "\u0415\u0449\u0451".')))),n.a.createElement(u.A,{id:"weather",activePanel:"weather"},n.a.createElement(u.s,{id:"weather"},n.a.createElement(u.t,null,"\u041f\u043e\u0433\u043e\u0434\u0430"),n.a.createElement("br",null),n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"shadow"},n.a.createElement("br",null),n.a.createElement("iframe",{src:"https://www.meteoblue.com/ru/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0/widget/daily/%d0%94%d0%b0%d0%bb%d0%bc%d0%b0%d1%82%d0%be%d0%b2%d0%be_%d0%a0%d0%be%d1%81%d1%81%d0%b8%d1%8f_1507565?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=light",frameborder:"0",width:"100%",height:"450"}),n.a.createElement("div",{style:{height:1}}))))),n.a.createElement(u.A,{id:"still",activePanel:"still",modal:t},n.a.createElement(u.s,{id:"still"},n.a.createElement(u.t,null,"\u0415\u0449\u0451"),n.a.createElement("br",null),n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(u.e,{before:n.a.createElement(z.a,null),description:"Release Beta 3.0.0"},"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(u.d,null,n.a.createElement(u.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(u.e,{before:n.a.createElement(V.a,null),description:"\u0412\u0441, 17 \u043c\u0430\u044f",indicator:n.a.createElement(u.g,{mode:"primary"},"23:01")},"\u041a\u043e\u0433\u0434\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c:"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(u.w,{wide:!0}),n.a.createElement(u.n,{separator:"hide",header:n.a.createElement(u.o,{mode:"secondary"},"\u0411\u0435\u0441\u0435\u0434\u044b")},n.a.createElement(u.h,null,n.a.createElement(u.b,{before:n.a.createElement(A.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"https://vk.me/join/AJQ1d9MUBResBwGHgBuiS/L/",target:"_blank"},"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u0432 \u0431\u0435\u0441\u0435\u0434\u0443")),n.a.createElement(u.o,{mode:"secondary"},"\u0421\u0432\u044f\u0437\u044c"),n.a.createElement(u.h,null,n.a.createElement(u.b,{before:n.a.createElement(O.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"mailto:maksimenkoegorlvovich1@gmail.com",target:"_blank"},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443")),n.a.createElement(u.h,null,n.a.createElement(u.b,{before:n.a.createElement(H.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"https://vk.cc/atSZGl",target:"_blank"},"\u0422\u0435\u0445\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430")),n.a.createElement(u.o,{mode:"secondary"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"),n.a.createElement(u.h,null,n.a.createElement(u.b,{before:n.a.createElement(D.a,null),className:"AllBtn",size:"xl",mode:"outline",onClick:function(){return e.setActiveModal("settings")}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),n.a.createElement(u.h,null,n.a.createElement(u.b,{before:n.a.createElement(I.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"https://vk.com/dalmatovo360",target:"_blank"},"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e")),n.a.createElement("br",null))))))}}]),a}(n.a.Component);c.a.render(n.a.createElement(le,null),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.a4d41043.chunk.js.map