(this.webpackJsonpapps=this.webpackJsonpapps||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/angel.3a20d12e.png"},115:function(e,t,a){e.exports=a.p+"static/media/bolnoy.007c104e.png"},116:function(e,t,a){e.exports=a.p+"static/media/dead.61525782.png"},167:function(e,t,a){e.exports=a(265)},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);a(168),a(194),a(196),a(197),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236);var l=a(0),n=a.n(l),r=a(88),c=a.n(r),i=a(117),m=a(89),o=a(90),s=a(35),d=a(119),u=a(118),E=a(2),h=(a(255),a(99)),b=a.n(h),p=a(100),g=a.n(p),f=a(101),y=a.n(f),v=a(102),k=a.n(v),C=a(103),x=a.n(C),S=a(36),w=a.n(S),B=a(104),_=a.n(B),z=(a(256),a(105)),A=a.n(z),V=a(106),N=a.n(V),D=a(107),O=a.n(D),W=a(57),j=a.n(W),T=a(108),I=a.n(T),M=a(109),K=a.n(M),F=a(110),H=a.n(F),P=a(58),R=a.n(P),U=a(111),J=a.n(U),L=a(39),G=a.n(L),q=a(112),Q=a.n(q),Z=a(113),X=a.n(Z),Y=a(59),$=a.n(Y),ee=a(60),te=a.n(ee),ae=a(114),le=a.n(ae),ne=a(115),re=a.n(ne),ce=a(116),ie=a.n(ce),me=(a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(21)),oe=a.n(me);oe.a.send("VKWebAppInit"),oe.a.send("VKWebAppGetUserInfo",{});var se={backgroundColor:"var(--accent)"},de=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={activeStory:"home",scheme:"bright_light",text:"",search:"",snackbar:null,activeModal:null,modalHistory:[]},l.onStoryChange=l.onStoryChange.bind(Object(s.a)(l)),l.openBase=l.openBase.bind(Object(s.a)(l)),l.onChange=l.onChange.bind(Object(s.a)(l)),l.modalBack=function(){l.setActiveModal(l.state.modalHistory[l.state.modalHistory.length-2])},l}return Object(o.a)(a,[{key:"onChange",value:function(e){this.setState({search:e.target.value})}},{key:"componentDidMount",value:function(){this.openBase()}},{key:"openBase",value:function(){var e=this;this.state.snackbar||this.setState({snackbar:n.a.createElement(E.y,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})},before:n.a.createElement(E.a,{size:24,style:se},n.a.createElement(G.a,{fill:"#fff",width:14,height:14}))},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435")})}},{key:"componentDidMount",value:function(){var e=this;oe.a.subscribe((function(t){var a=t.detail,l=a.type,n=a.data;"VKWebAppUpdateConfig"===l&&e.setState({scheme:n.scheme})}))}},{key:"UpdateTheme",value:function(){"bright_light"===this.state.scheme||"client_light"===this.state.scheme?(this.setState({scheme:"space_gray"}),oe.a.send("VKWebAppSetViewSettings",{status_bar_style:"light",action_bar_color:"#000"})):"space_gray"!==this.state.scheme&&"client_dark"!==this.state.scheme||(this.setState({scheme:"bright_light"}),oe.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#fff"}))}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(i.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){var e=this,t=n.a.createElement(E.r,{activeModal:this.state.activeModal,onClose:this.modalBack},n.a.createElement(E.p,{id:"settings",onClose:this.modalBack,header:n.a.createElement(E.q,{right:n.a.createElement(E.u,{onClick:this.modalBack},n.a.createElement(j.a,null))},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e")},n.a.createElement(E.j,null,n.a.createElement(E.k,null,n.a.createElement(E.b,{mode:"secondary",size:"xl",onClick:function(){return e.UpdateTheme()}},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443")),n.a.createElement(E.k,null,n.a.createElement(E.e,{asideContent:n.a.createElement(E.z,{onClick:function(){return oe.a.send("VKWebAppAllowNotifications",{})}})},"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")),n.a.createElement(E.k,null,n.a.createElement(E.b,{before:n.a.createElement(J.a,null),mode:"secondary",size:"xl",onClick:function(){return oe.a.send("VKWebAppAddToFavorites",{})}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435")),n.a.createElement(E.k,null,n.a.createElement(E.b,{before:n.a.createElement(R.a,null),mode:"secondary",size:"xl",onClick:function(){return oe.a.send("VKWebAppShare",{link:"https://vk.com/app7408073"})}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f")),n.a.createElement(E.k,null,n.a.createElement(E.b,{before:n.a.createElement(R.a,null),mode:"secondary",size:"xl",onClick:function(){return oe.a.send("VKWebAppShowWallPostBox",{link:"https://vk.com/app7408073",message:"\u042f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u043b\u0443\u0447\u0448\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u043d\u0430\u0448\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430. \u0417\u0434\u0435\u0441\u044c \u0437\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0443\u0432\u0435\u0434\u043c\u043b\u0435\u043d\u0438\u0439 \u0434\u0430\u044e\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u043e\u043d\u043b\u0430\u0439\u043d \u043a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440 MORE TV. \u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435."})}},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u043f\u043e\u0441\u0442")),n.a.createElement(E.k,null,n.a.createElement(E.b,{before:n.a.createElement(Q.a,null),mode:"secondary",size:"xl",onClick:function(){return oe.a.send("VKWebAppShowStoryBox",{background_type:"image",url:"https://psv4.userapi.com/c856216/u460096569/docs/d6/c90bc4a005dd/story.jpg"})}},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e")),n.a.createElement(E.k,null,n.a.createElement(E.b,{before:n.a.createElement(X.a,null),mode:"secondary",size:"xl",onClick:function(){return oe.a.send("VKWebAppAddToHomeScreen")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d")))),n.a.createElement(E.p,{id:"sars",header:n.a.createElement(E.q,{right:n.a.createElement(E.u,{onClick:this.modalBack},n.a.createElement(j.a,null))},"\u041f\u043e\u0434\u043e\u0437\u0440\u0435\u043d\u0438\u0435")},n.a.createElement(E.j,null,n.a.createElement(E.k,null,n.a.createElement(E.b,{mode:"primary",className:"SarsSos",size:"xl",href:"tel:+112",target:"_blank"},"SOS")),n.a.createElement(E.k,null,n.a.createElement(E.b,{mode:"commerce",className:"SarsCall",size:"xl",href:"tel:+73525231503",target:"_blank"},"\u0417\u0432\u043e\u043d\u043e\u043a \u0432 \u0413\u0411\u0423")),n.a.createElement(E.k,null,n.a.createElement(E.b,{mode:"commerce",className:"SarsCall",size:"xl",href:"tel:+73525231503",target:"_blank"},"\u0417\u0432\u043e\u043d\u043e\u043a \u0432 \u0421\u043a\u043e\u0440\u0443\u044e \u041f\u043e\u043c\u043e\u0449\u044c")))));return n.a.createElement(E.f,{isWebView:!0,scheme:this.state.scheme},n.a.createElement(E.i,{activeStory:this.state.activeStory,tabbar:n.a.createElement(E.A,null,n.a.createElement(E.B,{onClick:this.onStoryChange,selected:"home"===this.state.activeStory,"data-story":"home",text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},n.a.createElement(g.a,null)),n.a.createElement(E.B,{onClick:this.onStoryChange,selected:"covid"===this.state.activeStory,"data-story":"covid",label:"81",text:"COVID"},n.a.createElement(b.a,null)),n.a.createElement(E.B,{onClick:this.onStoryChange,selected:"taxi"===this.state.activeStory,"data-story":"taxi",text:"\u0422\u0430\u043a\u0441\u0438"},n.a.createElement(y.a,null)),n.a.createElement(E.B,{onClick:this.onStoryChange,selected:"weather"===this.state.activeStory,"data-story":"weather",text:"\u041f\u043e\u0433\u043e\u0434\u0430"},n.a.createElement(x.a,null)),n.a.createElement(E.B,{onClick:this.onStoryChange,selected:"still"===this.state.activeStory,"data-story":"still",text:"\u0415\u0449\u0451"},n.a.createElement(k.a,null)))},n.a.createElement(E.C,{id:"home",activePanel:"home"},n.a.createElement(E.s,{id:"home"},n.a.createElement(E.t,{separator:!1},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),n.a.createElement(E.w,{value:this.state.search,onChange:this.onChange,after:null}),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"shadow"},n.a.createElement(E.o,{mode:"secondary"},"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u0437\u0430 19 \u043c\u0430\u044f"),n.a.createElement(E.x,null),n.a.createElement(E.h,{style:{paddingTop:12,paddingBottom:12}},"\u041f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u0430\u043c\u0438 \u043a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u0430 \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0441 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043e\u043c. \u041f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0433\u043e\u0442\u043e\u0432\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043c\u044b \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 25-30%. \u0418\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0445\u0432\u0430\u0442\u0438\u0442 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0432 \u0441\u0436\u0430\u0442\u044b\u0435 \u0441\u0440\u043e\u043a\u0438. \xab\u0412 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c\u0438 \u041c\u0438\u043d\u0437\u0434\u0440\u0430\u0432\u0430, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0441 C\u041eVID-19 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u0430\u043c\u0438, \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u043c\u0438 \u043d\u0430 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430\u0445 \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb, - \u043e\u0442\u043c\u0435\u0442\u0438\u043b \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440 \u0410\u041e \xab\u0424\u0430\u0440\u043c-\u0426\u0435\u043d\u0442\u0440\xbb - \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u0421\u0435\u0440\u0433\u0435\u0439 \u041a\u043b\u044b\u043a\u043e\u0432.",n.a.createElement("br",null),n.a.createElement("br",null),"\u0412 \u0430\u043f\u0440\u0435\u043b\u0435 \u0424\u043e\u043d\u0434 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0420\u043e\u0441\u0441\u0438\u0438 \u043e\u0434\u043e\u0431\u0440\u0438\u043b \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u0437\u0430\u0435\u043c \u0432 \u0441\u0443\u043c\u043c\u0435 500 \u043c\u043b\u043d. \u0440\u0443\u0431\u043b\u0435\u0439 \u043f\u043e \u043d\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \xab\u041f\u0440\u043e\u0442\u0438\u0432\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u044d\u043f\u0438\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u044f\u043c\xbb. \u042d\u0442\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0430\u0441\u043e\u0432 \u0441\u044b\u0440\u044c\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043e\u0431\u044a\u0435\u043c\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0439 \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430\u043c \u0438 \u0441\u0442\u0430\u0446\u0438\u043e\u043d\u0430\u0440\u0430\u043c \u0434\u043b\u044f \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043d\u043e\u0439 \u0438\u043d\u0444\u0435\u043a\u0446\u0438\u0438.",n.a.createElement("br",null),n.a.createElement("br",null),"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043a\u043e\u043b\u043e 300 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u043e\u0432, 14 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u043e\u0448\u043b\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u041c\u0438\u043d\u0437\u0434\u0440\u0430\u0432\u043e\u043c \u0434\u043b\u044f \u043b\u0435\u0447\u0435\u043d\u0438\u044f COVID-19.",n.a.createElement("br",null),n.a.createElement("br",null),"#\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f\u041e\u0431\u043b\u0430\u0441\u0442\u044c",n.a.createElement("br",null),n.a.createElement(E.a,{onClick:function(){return oe.a.send("VKWebAppShowImages",{images:["https://sun1-93.userapi.com/c855432/v855432366/230cbc/i4t9hJ9DehE.jpg"]})},size:{width:1280,height:934},align:"center",mode:"image",src:"https://sun1-93.userapi.com/c855432/v855432366/230cbc/i4t9hJ9DehE.jpg"})),n.a.createElement("div",{style:{height:1}}),n.a.createElement(E.x,null),n.a.createElement(E.h,{className:"ContainerNews"},n.a.createElement($.a,{width:25,height:25,fill:"#FF0000"}),n.a.createElement(te.a,{onClick:function(){return oe.a.send("VKWebAppShowWallPostBox",{attachments:"https://sun1-93.userapi.com/c855432/v855432366/230cbc/i4t9hJ9DehE.jpg",message:"#\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f\u041e\u0431\u043b\u0430\u0441\u0442\u044c \u041f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u0430\u043c\u0438 \u043a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u0430 \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0441 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043e\u043c. \u041f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0433\u043e\u0442\u043e\u0432\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043c\u044b \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 25-30%. \u0418\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0445\u0432\u0430\u0442\u0438\u0442 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0432 \u0441\u0436\u0430\u0442\u044b\u0435 \u0441\u0440\u043e\u043a\u0438. \xab\u0412 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c\u0438 \u041c\u0438\u043d\u0437\u0434\u0440\u0430\u0432\u0430, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0441 C\u041eVID-19 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u0430\u043c\u0438, \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u044b\u043c\u0438 \u043d\u0430 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430\u0445 \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb, - \u043e\u0442\u043c\u0435\u0442\u0438\u043b \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440 \u0410\u041e \xab\u0424\u0430\u0440\u043c-\u0426\u0435\u043d\u0442\u0440\xbb - \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u0421\u0435\u0440\u0433\u0435\u0439 \u041a\u043b\u044b\u043a\u043e\u0432. \u0412 \u0430\u043f\u0440\u0435\u043b\u0435 \u0424\u043e\u043d\u0434 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0420\u043e\u0441\u0441\u0438\u0438 \u043e\u0434\u043e\u0431\u0440\u0438\u043b \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439 \u0437\u0430\u0435\u043c \u0432 \u0441\u0443\u043c\u043c\u0435 500 \u043c\u043b\u043d. \u0440\u0443\u0431\u043b\u0435\u0439 \u043f\u043e \u043d\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \xab\u041f\u0440\u043e\u0442\u0438\u0432\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u044d\u043f\u0438\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u044f\u043c\xbb. \u042d\u0442\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0430\u0441\u043e\u0432 \u0441\u044b\u0440\u044c\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043e\u0431\u044a\u0435\u043c\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0439 \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430\u043c \u0438 \u0441\u0442\u0430\u0446\u0438\u043e\u043d\u0430\u0440\u0430\u043c \u0434\u043b\u044f \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043d\u043e\u0439 \u0438\u043d\u0444\u0435\u043a\u0446\u0438\u0438. \u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u041e\u0410\u041e \xab\u0421\u0438\u043d\u0442\u0435\u0437\xbb \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043a\u043e\u043b\u043e 300 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u043e\u0432, 14 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u043e\u0448\u043b\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u041c\u0438\u043d\u0437\u0434\u0440\u0430\u0432\u043e\u043c \u0434\u043b\u044f \u043b\u0435\u0447\u0435\u043d\u0438\u044f COVID-19. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0430 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e: vk.com/app7408073  "})},width:25,height:25,fill:"#0000FF"})))),n.a.createElement(E.n,null,n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"shadow"},n.a.createElement(E.o,{mode:"secondary"},"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u0437\u0430 18 \u043c\u0430\u044f"),n.a.createElement(E.x,null),n.a.createElement(E.h,{style:{paddingTop:12,paddingBottom:12}},"\u0412 \u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0440\u043e\u0441\u0442 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043d\u043e\u0439 \u0438\u043d\u0444\u0435\u043a\u0446\u0438\u0435\u0439 (\u0437\u0430 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435 \u0441\u0443\u0442\u043a\u0438 \u043e\u043d \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b 9,2%, \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0435\u0439 51%).",n.a.createElement("br",null),n.a.createElement("br",null),"\u041d\u0430 18 \u043c\u0430\u044f \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e 11 \u043d\u043e\u0432\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 COVID-19.",n.a.createElement("br",null),n.a.createElement("br",null),"\u0418\u0437 \u043d\u0438\u0445 \u043f\u044f\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u2013 \u0437\u0430\u0432\u043e\u0437\u043d\u044b\u0435: \u0438\u0437 \u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0433\u0430, \u041c\u043e\u0441\u043a\u0432\u044b \u0438 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430. \u042d\u0442\u043e \u0436\u0438\u0442\u0435\u043b\u0438 \u041f\u0435\u0442\u0443\u0445\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430, \u0421\u0430\u0444\u0430\u043a\u0443\u043b\u0435\u0432\u043e, \u041a\u0443\u0440\u0433\u0430\u043d\u0430 \u0438 \u0441\u0435\u043b\u0430 \u041f\u043e\u043b\u043e\u0432\u0438\u043d\u043d\u043e\u0435 \u041f\u043e\u043b\u043e\u0432\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430.",n.a.createElement("br",null),n.a.createElement("br",null),"\u0428\u0435\u0441\u0442\u044c \u0433\u0440\u0430\u0436\u0434\u0430\u043d \u0437\u0430\u0431\u043e\u043b\u0435\u043b\u0438 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430. \u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u043b\u0443\u0447\u0430\u044f \u2013 \u0436\u0438\u0442\u0435\u043b\u0438 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e \u0438 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430, \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0441\u043b\u0443\u0447\u0430\u044e \u0432 \u0433. \u041a\u0443\u0440\u0433\u0430\u043d\u0435 \u0438 \u042e\u0440\u0433\u0430\u043c\u044b\u0448\u0441\u043a\u043e\u043c \u0440\u0430\u0439\u043e\u043d\u0435.",n.a.createElement("br",null),n.a.createElement("br",null),"\u0413\u0420\u0410\u0416\u0414\u0410\u041d\u0415, \u0411\u0415\u0420\u0415\u0413\u0418\u0422\u0415 \u0421\u0415\u0411\u042f \u0418 \u0421\u0412\u041e\u0418\u0425 \u0411\u041b\u0418\u0417\u041a\u0418\u0425. \u0418\u0417\u0411\u0415\u0413\u0410\u0419\u0422\u0415 \u041f\u041e\u0421\u0415\u0429\u0415\u041d\u0418\u042f \u041c\u041d\u041e\u0413\u041e\u041b\u042e\u0414\u041d\u042b\u0425 \u041c\u0415\u0421\u0422 \u0412\u0421\u0415\u041c\u0418 \u0421\u041f\u041e\u0421\u041e\u0411\u0410\u041c\u0418. \u0418\u0421\u041f\u041e\u041b\u042c\u0417\u0423\u0419\u0422\u0415 \u041c\u0415\u0414. \u041f\u0415\u0420\u0427\u0410\u0422\u041a\u0418 \u0418 \u041c\u0415\u0414. \u041c\u0410\u0421\u041a\u0423. \u0421 \u0423\u0412\u0410\u0416\u0415\u041d\u0418\u0415\u041c \u0410\u0414\u041c\u0418\u041d\u0418\u0421\u0422\u0420\u0410\u0422\u041e\u0420 Dalmatovo 360!"),n.a.createElement("div",{style:{height:1}}),n.a.createElement(E.x,null),n.a.createElement(E.h,{className:"ContainerNews"},n.a.createElement($.a,{width:25,height:25,fill:"#FF0000"}),n.a.createElement(te.a,{onClick:function(){return oe.a.send("VKWebAppShowWallPostBox",{message:"\u0412 \u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0440\u043e\u0441\u0442 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u043d\u043e\u0439 \u0438\u043d\u0444\u0435\u043a\u0446\u0438\u0435\u0439 (\u0437\u0430 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0435 \u0441\u0443\u0442\u043a\u0438 \u043e\u043d \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b 9,2%, \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0435\u0439 51%).  \u041d\u0430 18 \u043c\u0430\u044f \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e 11 \u043d\u043e\u0432\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 COVID-19.  \u0418\u0437 \u043d\u0438\u0445 \u043f\u044f\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u2013 \u0437\u0430\u0432\u043e\u0437\u043d\u044b\u0435: \u0438\u0437 \u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0433\u0430, \u041c\u043e\u0441\u043a\u0432\u044b \u0438 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430. \u042d\u0442\u043e \u0436\u0438\u0442\u0435\u043b\u0438 \u041f\u0435\u0442\u0443\u0445\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430, \u0421\u0430\u0444\u0430\u043a\u0443\u043b\u0435\u0432\u043e, \u041a\u0443\u0440\u0433\u0430\u043d\u0430 \u0438 \u0441\u0435\u043b\u0430 \u041f\u043e\u043b\u043e\u0432\u0438\u043d\u043d\u043e\u0435 \u041f\u043e\u043b\u043e\u0432\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430.  \u0428\u0435\u0441\u0442\u044c \u0433\u0440\u0430\u0436\u0434\u0430\u043d \u0437\u0430\u0431\u043e\u043b\u0435\u043b\u0438 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430. \u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u043b\u0443\u0447\u0430\u044f \u2013 \u0436\u0438\u0442\u0435\u043b\u0438 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e \u0438 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0439\u043e\u043d\u0430, \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0441\u043b\u0443\u0447\u0430\u044e \u0432 \u0433. \u041a\u0443\u0440\u0433\u0430\u043d\u0435 \u0438 \u042e\u0440\u0433\u0430\u043c\u044b\u0448\u0441\u043a\u043e\u043c \u0440\u0430\u0439\u043e\u043d\u0435. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0430 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e: vk.com/app7408073"})},width:25,height:25,fill:"#0000FF"})))),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"shadow"},n.a.createElement(E.o,{mode:"secondary"},"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u0437\u0430 17 \u043c\u0430\u044f"),n.a.createElement(E.x,null),n.a.createElement(E.h,{style:{paddingTop:12,paddingBottom:12}},"\u0412\u0441\u0442\u0440\u0435\u0447\u0430\u0439\u0442\u0435, \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u043d\u043e\u0432\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e. Release Beta Ver: 3.0.0!"),n.a.createElement("div",{style:{height:1}})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement(E.C,{id:"covid",activePanel:"covid",modal:t},n.a.createElement(E.s,{id:"covid"},n.a.createElement(E.t,null,"COVID-19"),n.a.createElement(E.n,null,n.a.createElement(E.h,null,n.a.createElement(E.m,{className:"CovidBanner",slideWidth:"100%",align:"center",style:{height:240}},n.a.createElement(E.c,{size:"l"},n.a.createElement(E.v,{icon:n.a.createElement("img",{className:"Covid",src:le.a}),header:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e: 52"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445",n.a.createElement("br",null),"\u0437\u0430",n.a.createElement("br",null),"\u0432\u0435\u0441\u044c \u043f\u0435\u0440\u0438\u043e\u0434."),n.a.createElement("div",{style:{width:96,height:170}})),n.a.createElement(E.c,{size:"l"},n.a.createElement(E.v,{icon:n.a.createElement("img",{className:"Covid",src:re.a}),header:"\u0417\u0430\u0440\u0430\u0436\u0435\u043d\u043e: 81"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u044e\u0434\u0435\u0439,",n.a.createElement("br",null),"\u043a\u043e\u0442\u043e\u0440\u044b\u0435",n.a.createElement("br",null),"\u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u0438."),n.a.createElement("div",{style:{width:96,height:170}})),n.a.createElement(E.c,{size:"l"},n.a.createElement(E.v,{icon:n.a.createElement("img",{className:"Covid",src:ie.a}),header:"\u0423\u043c\u0435\u0440\u043b\u043e: 0"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043c\u0435\u0440\u0448\u0438\u0445",n.a.createElement("br",null),"\u043b\u044e\u0434\u0435\u0439 \u0437\u0430",n.a.createElement("br",null),"\u0432\u0435\u0441\u044c \u043f\u0435\u0440\u0438\u043e\u0434."),n.a.createElement("div",{style:{width:96,height:170}})))),n.a.createElement("div",{style:{height:1}}),n.a.createElement("br",null),n.a.createElement(E.j,null,n.a.createElement(E.l,{header:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430",mode:"warning"},"\u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0441\u0432\u0430\u0439\u043f \u043f\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0435 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443."))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(E.j,null,n.a.createElement(E.l,{header:"!\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",mode:"error"},"\u0415\u0441\u0442\u044c \u043f\u043e\u0434\u043e\u0437\u0440\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441? \u0421\u043a\u043e\u0440\u0435\u0435 \u043d\u0430\u0436\u0438\u043c\u0430\u0439\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435!")),n.a.createElement(E.h,null,n.a.createElement(E.b,{before:n.a.createElement(w.a,null),className:"SarsBtn",size:"xl",mode:"primary",onClick:function(){return e.setActiveModal("sars")}},"\u0412\u044b\u0437\u0432\u0430\u0442\u044c")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement(E.C,{id:"taxi",activePanel:"taxi"},n.a.createElement(E.s,{id:"taxi"},n.a.createElement(E.t,null,"\u0422\u0430\u043a\u0441\u0438"),n.a.createElement(E.n,null,n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(E.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(352)-523-16-20",href:"tel:+73525231620",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "\u0412\u0438\u0440\u0430\u0436"'),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(E.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(922)-574-60-06",href:"tel:+79225746006",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "\u041b\u044e\u043a\u0441"'),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(E.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(922)-677-70-93",href:"tel:+79226777093",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "\u0420\u043e\u043c\u0430\u0448\u043a\u0430"'),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(E.e,{expandable:!0,before:n.a.createElement(w.a,null),description:"+7-(963)-862-11-11",href:"tel:+79638621111",target:"_blank"},'\u0422\u0430\u043a\u0441\u0438 "Maxim"'),n.a.createElement("div",{style:{height:1}})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(E.j,{href:"https://vk.me/dalmatovo360",target:"_blank"},n.a.createElement(E.l,{header:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",mode:"error"},'\u041d\u0435\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0442\u0430\u043a\u0441\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0438\u043b\u0438 \u043d\u0435 \u0442\u0430\u043a \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f? \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b "\u0415\u0449\u0451".')))),n.a.createElement(E.C,{id:"weather",activePanel:"weather"},n.a.createElement(E.s,{id:"weather"},n.a.createElement(E.t,null,"\u041f\u043e\u0433\u043e\u0434\u0430"),n.a.createElement("br",null),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"shadow"},n.a.createElement("br",null),n.a.createElement("iframe",{src:"https://www.meteoblue.com/ru/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0/widget/daily/%d0%94%d0%b0%d0%bb%d0%bc%d0%b0%d1%82%d0%be%d0%b2%d0%be_%d0%a0%d0%be%d1%81%d1%81%d0%b8%d1%8f_1507565?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=light",frameborder:"0",width:"100%",height:"450"}),n.a.createElement("div",{style:{height:1}}))))),n.a.createElement(E.C,{id:"still",activePanel:"still",modal:t},n.a.createElement(E.s,{id:"still"},n.a.createElement(E.t,null,"\u0415\u0449\u0451"),n.a.createElement("br",null),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(E.e,{before:n.a.createElement(_.a,null),description:"Release Beta 3.0.1"},"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(E.d,null,n.a.createElement(E.c,{size:"l",mode:"outline",className:"TaxiBtn"},n.a.createElement(E.e,{before:n.a.createElement(N.a,null),description:"\u0412\u0442, 19 \u043c\u0430\u044f",indicator:n.a.createElement(E.g,{mode:"primary"},"18:34")},"\u041a\u043e\u0433\u0434\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c:"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(E.x,{wide:!0}),n.a.createElement(E.n,{separator:"hide",header:n.a.createElement(E.o,{mode:"secondary"},"\u0411\u0435\u0441\u0435\u0434\u044b")},n.a.createElement(E.h,null,n.a.createElement(E.b,{before:n.a.createElement(A.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"https://vk.me/join/AJQ1d9MUBResBwGHgBuiS/L/",target:"_blank"},"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u0432 \u0431\u0435\u0441\u0435\u0434\u0443")),n.a.createElement(E.o,{mode:"secondary"},"\u0421\u0432\u044f\u0437\u044c"),n.a.createElement(E.h,null,n.a.createElement(E.b,{before:n.a.createElement(O.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"mailto:maksimenkoegorlvovich1@gmail.com",target:"_blank"},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443")),n.a.createElement(E.h,null,n.a.createElement(E.b,{before:n.a.createElement(H.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"https://vk.cc/atSZGl",target:"_blank"},"\u0422\u0435\u0445\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430")),n.a.createElement(E.o,{mode:"secondary"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"),n.a.createElement(E.h,null,n.a.createElement(E.b,{before:n.a.createElement(I.a,null),className:"AllBtn",size:"xl",mode:"outline",onClick:function(){return e.setActiveModal("settings")}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),n.a.createElement(E.h,null,n.a.createElement(E.b,{before:n.a.createElement(K.a,null),className:"AllBtn",size:"xl",mode:"outline",href:"https://vk.com/dalmatovo360",target:"_blank"},"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e")),n.a.createElement("br",null))))))}}]),a}(n.a.Component);c.a.render(n.a.createElement(de,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.1a606ab7.chunk.js.map