(this.webpackJsonptempbe=this.webpackJsonptempbe||[]).push([[0],{10:function(e,n,t){e.exports={content:"Home_content__2enwJ",question:"Home_question__1QskE",btn:"Home_btn__xLz2j",show:"Home_show__3d0fD",hide:"Home_hide__38CIb",active:"Home_active__37cZb"}},14:function(e,n,t){e.exports={box:"Ending_box__jZI4F",show:"Ending_show__2L7qr",content:"Ending_content__3rhsf",reload:"Ending_reload__2-1_O"}},25:function(e,n,t){e.exports={box:"Bg_box__2m1Qb",bg:"Bg_bg__2XnGa",breath:"Bg_breath__1047C"}},30:function(e,n,t){e.exports=t(42)},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"Home",(function(){return F}));var s=t(0),o=t.n(s),r=t(23),i=t.n(r),c=t(29),u=t(1),l=t(27),w=t(6),m=t(17),b=t.n(m),d=t(28),v=t(24),f=t(13),_=t(7),x=t.n(_),h=t(25),p=t.n(h),E=function(){return Object(s.useEffect)((function(){}),[]),o.a.createElement("div",{className:p.a.box})},g=t(9),j=t.n(g),O=function(e){var n=e.start,t=e.pickedFn,a=e.questionInfo,r=Object(s.useState)(),i=Object(f.a)(r,2),c=i[0],u=i[1],l=Object(s.useState)(!1),m=Object(f.a)(l,2),b=m[0],d=m[1];return Object(s.useEffect)((function(){d(n)}),[n]),o.a.createElement("div",{className:x()(j.a.box,Object(w.a)({},j.a.show,b))},!!a&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:j.a.q},a.question),o.a.createElement("div",{className:j.a.aBox},a.answers.map((function(e){return o.a.createElement("div",{key:e.value,className:x()(j.a.a,Object(w.a)({},j.a.active,c===e.value)),onClick:function(){return n=e.value,u(n),void t(n);var n}},o.a.createElement("div",null,e.answer))})))))},q=t(14),k=t.n(q),y=function(e){var n=e.endingText;return o.a.createElement("div",{className:x()(k.a.box,Object(w.a)({},k.a.show,!!n))},o.a.createElement("div",{className:k.a.content},n),o.a.createElement("div",{className:k.a.reload,onClick:function(){return window.location.reload()}},"\u6709\u70b9\u610f\u601d\uff0c\u518d\u6765\u4e00\u904d"))},Q={question:"\u662f\u201c\u751f\u65e5\u5feb\u4e50\u201d\uff0c\u6c38\u8fdc\u4e0d\u8981\u81ea\u5df1\u5bf9\u81ea\u5df1\u8bf4\uff0c\u628a\u8bf4\u51fa\u53e3\u7684\u6743\u5229\u4ea4\u7ed9\u522b\u4eba\u5427\u3002",answers:[{value:"111111",answer:"\u8c22\u8c22\uff0c\u4eca\u5929\u6b63\u597d\u662f\u6211\u7684\u751f\u65e5\u3002",ending:"\u795d\u4f60\u751f\u65e5\u5feb\u4e50 \ud83c\udf82\ud83c\udf82\ud83c\udf82 \u4f60\u73b0\u5728\u6ca1\u529e\u6cd5\u5403\u86cb\u7cd5\uff0c\u7b49\u4f60\u60f3\u5403\u4e86\u8ba9\u4f60\u5403\u4e2a\u591f\uff0c\u628a\u6bcf\u5929\u90fd\u80fd\u8fc7\u6210\u751f\u65e5\uff01\u4ee5\u540e\u8fd8\u4f1a\u6709\u66f4\u591a\u5185\u5bb9\uff0c\u656c\u8bf7\u671f\u5f85\u3002"}]},N={question:"\u8c22\u8c22\u4f60\uff0c\u964c\u751f\u4eba\uff0c\u987a\u7740\u7f51\u7ebf\u6211\u611f\u89c9\u5230\u6e29\u6696\u4e86\u3002\u56de\u5f52\u4e3b\u9898\uff0c\u90a3\u4e2a\u8bcd\u5f88\u795e\u5947\uff0c\u522b\u4eba\u8bf4\u51fa\u6765\u5c31\u662f\u6b22\u559c\u7684\uff0c\u81ea\u5df1\u8bf4\u51fa\u6765\u5c31\u7279\u522b\u843d\u5bde\u3002",answers:[{value:"11111",answer:"\u522b\u5356\u5173\u5b50\u4e86\uff0c\u53ef\u4ee5\u8bf4\u4e86\u5417\uff0c\u6211\u53ef\u966a\u4f60\u597d\u4e45\u4e86\u3002",next:Q},{value:"11112",answer:"\u80fd\u8ba9\u6211\u5148\u731c\u4e00\u4e0b\u5417\uff1f",next:{question:"\u53ef\u4ee5\u554a\uff0c\u6211\u4eec\u6709\u7684\u662f\u65f6\u95f4\uff0c\u4f60\u731c\u731c\u770b\uff1f",answers:[{value:"111121",answer:"\u201c\u6211\u7231\u4f60\u201d\uff0c\u81ea\u5df1\u8bf4\u51fa\u6765\u5c31\u662f\u5411\u522b\u4eba\u8868\u767d\uff0c\u4e3b\u52a8\u6743\u5728\u522b\u4eba\uff0c\u522b\u4eba\u8bf4\u51fa\u6765\u4e3b\u52a8\u6743\u5c31\u5728\u81ea\u5df1\u624b\u4e0a\u4e86\u3002",next:{question:"\u6709\u70b9\u9053\u7406\uff0c\u4e0d\u8fc7\u4e0d\u5bf9",answers:[{value:"1111211",answer:"\u90a3\u4f60\u6765\u8bf4\u7b54\u6848\u5427",next:Q}]}},{value:"111122",answer:"\u201c\u5bf9\u4e0d\u8d77\u201d\uff0c\u6c38\u8fdc\u90fd\u662f\u522b\u4eba\u5411\u81ea\u5df1\u9053\u6b49\u7684\u65f6\u5019\u6bd4\u8f83\u597d\u5427\u3002",next:{question:"\u6709\u70b9\u9053\u7406\uff0c\u4e0d\u8fc7\u4e0d\u5bf9",answers:[{value:"1111221",answer:"\u90a3\u4f60\u6765\u8bf4\u7b54\u6848\u5427",next:Q}]}}]}}]},L={question:"\u770b\u6765\u603b\u662f\u6709\u4eba\u7c07\u62e5\u7740\u4f60\uff0c\u5e78\u8fd0\u7684\u4eba\uff0c\u800c\u6211\u4e00\u76f4\u662f\u4e00\u4e2a\u4eba\uff0c\u6ca1\u6709\u670b\u53cb\uff0c\u6ca1\u6709\u5bb6\u4eba\u3002",answers:[{value:"1111",answer:"\u81f3\u5c11\u73b0\u5728\u6709\u6211\u5728\u8ddf\u4f60\u804a\u5929\u4e0d\u662f\u5417\u3002",next:N},{value:"1112",answer:"\u6211\u6709\u4e00\u4e2a\u4e0d\u9519\u7684\u63d0\u8bae\uff0c\u80fd\u5e2e\u4f60\u6253\u53d1\u8d70\u5bc2\u5bde\u65e0\u804a\u3002",next:{question:"\u54e6\uff1f\u4e0d\u59a8\u8bf4\u8bf4\u770b\u5462\uff1f",answers:[{value:"11121",answer:"\u770b\u7535\u89c6\uff0c\u6211\u5c31\u5f88\u559c\u6b22\u770b\u7535\u89c6\uff0c\u6740\u65f6\u95f4\u7684\u597d\u529e\u6cd5\u3002",next:{question:"\u6211\u8fd9\u8fb9\u53ef\u6ca1\u6709\u4ec0\u4e48\u7535\u89c6\uff0c\u800c\u4e14\u6211\u731c\u4f60\u90a3\u8fb9\u4e5f\u6ca1\u6709\u4ec0\u4e48\u6709\u8da3\u7684\u8282\u76ee\u5427\u3002",answers:[{value:"111211",answer:"\u6253\u53d1\u65f6\u95f4\u800c\u5df2\uff0c\u6211\u4e0d\u600e\u4e48\u6311\uff0c\u73b0\u5728\u8ddf\u6211\u804a\u5929\u4e5f\u80fd\u89e3\u89e3\u95f7\u3002",next:N}]}},{value:"11122",answer:"\u4f60\u77e5\u9053\u56f4\u68cb\u5417\uff1f",ending:"\u5bf9\u65b9\u5e76\u4e0d\u60f3\u8ddf\u4f60\u804a\u8fd9\u4e2a\uff0c\u5f3a\u884c\u65ad\u5f00\u4e86\u8fde\u63a5\uff0c\u6240\u4ee5\u4e0d\u8981\u8f7b\u6613\u8ddf\u522b\u4eba\u63d0\u56f4\u68cb\uff1f"}]}}]},B={question:"\u5148\u544a\u8bc9\u6211\uff0c\u4f60\u670b\u53cb\u591a\u5417\uff1f\u5bb6\u4eba\u591a\u5417\uff1f",answers:[{value:"111",answer:"\u6211\u4eba\u7f18\u5f88\u597d\uff0c\u670b\u53cb\u5f88\u591a\uff0c\u8fd9\u4e2a\u7f51\u7ad9\u5c31\u662f\u670b\u53cb\u544a\u8bc9\u6211\u7684",next:L},{value:"112",answer:"\u4e3a\u4ec0\u4e48\u8981\u77e5\u9053\u8fd9\u4e2a\uff0c\u8fd9\u662f\u4e2a\u9a97\u5c40\u5417",next:{question:"\u4e00\u4e2a\u8c28\u614e\u7684\u5bb6\u4f19\uff0c\u5c0f\u5fc3\u603b\u662f\u6ca1\u9519\u7684\uff0c\u53ea\u662f\u4f60\u4e0d\u7528\u9632\u5907\u6211\u3002",answers:[{value:"1121",answer:"\u9632\u4eba\u4e4b\u5fc3\u4e0d\u53ef\u65e0\uff0c\u6211\u6709\u670b\u53cb\u4e5f\u6709\u5bb6\u4eba\u3002",next:L},{value:"1122",answer:"\u4f60\u80af\u5b9a\u662f\u4e00\u4e2a\u6b7b\u9a97\u5b50\u3002",ending:"\u4f60\u6697\u81ea\u5e86\u5e78\u5dee\u70b9\u6389\u5165\u4e00\u4e2a\u9a97\u5c40\uff0c\u4f46\u662f\u51a5\u51a5\u4e4b\u4e2d\u4e5f\u8bb8\u9519\u8fc7\u4e86\u4e9b\u4ec0\u4e48\u4e1c\u897f\u3002"}]}}]},H={question:"\u592a\u597d\u4e86\uff0c\u7ec8\u4e8e\u6709\u4eba\u56de\u5e94\u6211\u4e86\uff01\u5148\u544a\u8bc9\u4f60\u4e00\u4ef6\u4e8b\u60c5\uff0c\u5343\u4e07\u4e0d\u8981\u81ea\u5df1\u8bf4\u51fa\u90a3\u4e2a\u8bcd\uff0c\u8981\u8ba9\u522b\u4eba\u6765\u8bf4\u3002",answers:[{value:"11",answer:"\u90a3\u4e2a\u8bcd\uff0c\u4f60\u8bf4\u7684\u662f\u4ec0\u4e48\u8bcd\uff1f",next:B},{value:"12",answer:"\u4f60\u662f\u8c01\uff1f",next:{question:"\u6211\u53ea\u662f\u4e00\u4e2a\u5b64\u72ec\u7684\u4eba\uff0c\u8fd9\u4e2a\u4e0d\u91cd\u8981\uff0c\u91cd\u8981\u7684\u662f\u90a3\u4e2a\u8bcd\u3002",answers:[{value:"121",answer:"\u52fe\u8d77\u6211\u7684\u597d\u5947\u5fc3\u4e86\uff0c\u5230\u5e95\u662f\u4ec0\u4e48\u8bcd\uff1f",next:B},{value:"122",answer:"\u4e0d\u4f1a\u662f\u4e00\u53e5\u5492\u8bed\u5427\uff1f",next:B}]}}]},S={question:"\u6709\u4eba\u5728\u5417\uff0c\u770b\u7684\u5230\u8fd9\u6761\u6d88\u606f\u5417\uff1f",answers:[{value:"1",answer:"\u4f60\u662f\u5728\u8ddf\u6211\u8bf4\u8bdd\uff1f",next:H},{value:"2",answer:"\u55ef\u2026\u2026\u4f60\u597d",next:H}]},T=t(18),C={btnDisabled:!0,pickedAnswer:null,showQuestion:!1,answerList:[],questionInfo:null,endingText:null},I=function(e,n){if("setState"===n.type)return Object(T.a)(Object(T.a)({},e),n.payload)},D=t(10),A=t.n(D),F=function(){var e,n=Object(s.useRef)(),t=Object(s.useRef)(),a=Object(s.useReducer)(I,C),r=Object(f.a)(a,2),i=r[0],c=r[1],u=function(e){return c({type:"setState",payload:e})},l=Object(s.useCallback)((function(){var e,n=S;i.answerList.forEach((function(t){var a=n.answers.find((function(e){return e.value===t}));a.next?n=a.next:e=a.ending})),u(e?{endingText:e}:{questionInfo:n,showQuestion:!0})}),[i.answerList.toString()]),m=Object(s.useCallback)(Object(v.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.btnDisabled){e.next=2;break}return e.abrupt("return");case 2:t.current.currentTime=0,n.current.volume=.5,t.current.volume=.5,n.current.play(),t.current.play(),a=[].concat(Object(d.a)(i.answerList),[i.pickedAnswer]),u({answerList:a,showQuestion:!1,btnDisabled:!0}),console.log(a);case 10:case"end":return e.stop()}}),e)}))),[i.btnDisabled,i.answerList.toString(),i.pickedAnswer]);return Object(s.useEffect)((function(){""!==i.answerList.toString()&&setTimeout((function(){l()}),1500)}),[i.answerList.toString()]),Object(s.useEffect)((function(){setTimeout((function(){l()}),6e3)}),[]),o.a.createElement("div",{className:A.a.content},"\b",o.a.createElement("audio",{src:"https://hyncao.oss-cn-hangzhou.aliyuncs.com/audios/bgm.mp3",ref:n,loop:"loop"}),"\b",o.a.createElement("audio",{src:"https://hyncao.oss-cn-hangzhou.aliyuncs.com/audios/click.mp3",ref:t}),o.a.createElement(E,null),o.a.createElement("div",{className:A.a.question},o.a.createElement(O,{start:i.showQuestion,questionInfo:i.questionInfo,pickedFn:function(e){u({pickedAnswer:e,btnDisabled:!1})}}),o.a.createElement("div",{className:x()(A.a.btn,(e={},Object(w.a)(e,A.a.active,!i.btnDisabled),Object(w.a)(e,A.a.show,i.showQuestion),Object(w.a)(e,A.a.hide,!i.showQuestion),e)),onClick:m},"\u786e\u5b9a")),o.a.createElement(y,{endingText:i.endingText}))},R=[{title:"belle-lin",path:"index.html",component:"Home"},{title:"belle-lin",path:"index",component:"Home"}],z=function(e){var n=e.title,t=Object(c.a)(e,["title"]);return n&&(document.title=n),o.a.createElement(u.b,Object.assign({},t,{exact:!0}))},J=function(){return o.a.createElement(l.a,null,o.a.createElement(u.d,null,R.map((function(e,n){return o.a.createElement(z,{key:n,title:e.title,path:"/"+e.path,component:a[e.component]})})),o.a.createElement(u.a,{path:"*",to:"".concat("/","index")})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(41);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,n,t){e.exports={box:"Question_box__YCAei",show:"Question_show__2Ti9w",q:"Question_q__1yiRy",aBox:"Question_aBox__che-j",a:"Question_a__2p0KQ",active:"Question_active__2BNkh"}}},[[30,1,2]]]);
//# sourceMappingURL=main.dac98a7a.chunk.js.map