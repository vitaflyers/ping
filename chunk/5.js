(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"119":function(e,t,a){},"125":function(e,t,a){"use strict";a.r(t);var n=a(16),r=a.n(n),c=a(2),o=a(10),i=a(19),u=a(6),s=a(15),l=a.n(s),p=a(97),h=a(98),m=a(30);function request(e,t){return _request.apply(this,arguments)}function _request(){return(_request=Object(i.a)(r.a.mark((function _callee2(e,t){var a,n,c,o,u;return r.a.wrap((function _callee2$(s){for(;;)switch(s.prev=s.next){case 0:return n=(a=t||{}).payload,void 0===n?{}:n,c=a.method,o=void 0===c?"GET":c,u={},s.abrupt("return",Object(m.request)({"url":e,"method":o,"header":u}).then(function(){var e=Object(i.a)(r.a.mark((function _callee(e){return r.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve(e));case 1:case"end":return t.stop()}}),_callee)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return Promise.resolve({"data":{"flag":!1}})})));case 3:case"end":return s.stop()}}),_callee2)})))).apply(this,arguments)}a(119);var f=[{"url":"https://api88.yijiahaohuo.com/Public/yizhen/?service=Selection.IndexRecommend&Key=d3ebe81f&Terminal=iOS&version=test","text":"Selection.IndexRecommend","type":"https"},{"url":"http://api88.yijiahaohuo.com/Public/yizhen/?service=Selection.IndexRecommend&Key=d3ebe81f&Terminal=iOS&version=test","text":"Selection.IndexRecommend","type":"http"},{"url":"https://api88.yijiahaohuo.com/","text":"api88","type":"https"},{"url":"http://api88.yijiahaohuo.com/","text":"api88","type":"http"},{"url":"https://aapi.yijiahaohuo.com/","text":"aapi","type":"https"},{"url":"http://aapi.yijiahaohuo.com/","text":"aapi","type":"http"},{"url":"https://jcapi.yijiahaohuo.com/","text":"jcapi","type":"https"},{"url":"http://jcapi.yijiahaohuo.com/","text":"jcapi","type":"http"}];t.default=function Index(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],m=Object(s.useState)({}),d=Object(u.a)(m,2),y=d[0],b=d[1],j=Object(s.useState)(!1),w=Object(u.a)(j,2),v=w[0],x=w[1],k=Object(s.useState)([]),O=Object(u.a)(k,2),_=O[0],E=O[1],q=Object(s.useState)(0),S=Object(u.a)(q,2),g=S[0],T=S[1],C=function(){var e=Object(i.a)(r.a.mark((function _callee(){var e,t;return r.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:x(!0),E([]),e=r.a.mark((function _loop(e){var t,a,n,i,u;return r.a.wrap((function _loop$(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).getTime(),e.next=3,request(y.url);case 3:a=e.sent,n=a.data,i=(new Date).getTime(),u=i-t,E((function(e){return[].concat(Object(o.a)(e),[Object(c.a)(Object(c.a)({},n),{},{"cost":u})])}));case 8:case"end":return e.stop()}}),_loop)})),t=0;case 4:if(!(t<10)){a.next=9;break}return a.delegateYield(e(t),"t0",6);case 6:t++,a.next=4;break;case 9:x(!1);case 10:case"end":return a.stop()}}),_callee)})));return function getRequest(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){a&&function measureBW(e,t){var a,n,r,c=t=t||1,o=function measureBWSimple(){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState&&200===o.status&&(r||(r=o.responseText.length),--c<=0)){n=Date.now();var i=r*t/((n-a)/1e3)/1024;e&&e(Math.floor(i))}},o.open("GET","//jcapi.utest.yijiahaohuo.com/v1/?service=Area.AreaList&platform=4&t="+Math.random(),!0),o.send()};a=Date.now();for(var i=t;i>0;i--)o()}((function(e){T(e)}),10)}),[a]);return l.a.createElement(p.q,{"className":"net-work"},l.a.createElement(h.g,{"onClickLeftIcon":function onBacek(){window.location.href="/ping/"},"color":"#000","title":"Newwork","leftIconType":"chevron-left"}),l.a.createElement(h.c,{"show":a,"mask":!0,"onClose":function onClose(){n(!1),T(0)},"width":"80%","right":!0,"className":"modal-network"},l.a.createElement(h.a,{"mode":"center","isOpened":v}),l.a.createElement(p.q,{"className":"modal-text"},"- ",y.url),l.a.createElement(h.b,{"type":"primary","onClick":function onQuery(){C()},"disabled":v,"className":"query-btn"},"测试当前请求, 网速: ",g," kb/s"),_.map((function(e,t){return l.a.createElement(p.q,{"key":t,"className":"query-info"},"第".concat(t+1," 次请求： 耗时"),e.cost>2e3&&l.a.createElement(p.o,{"className":"error-text"},e.cost,"s"),e.cost<=2e3&&l.a.createElement(p.o,null,e.cost,"s"))}))),l.a.createElement(h.e,null,f.map((function(e,t){return l.a.createElement(h.f,{"arrow":"right","note":"".concat(e.type," 协议"),"title":e.text,"onClick":function onClick(){!function onClick(e){b(e),E([]),n(!0)}(e)},"key":t})}))))}}}]);