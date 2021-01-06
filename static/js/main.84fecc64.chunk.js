(this["webpackJsonpintroduce-movie-app"]=this["webpackJsonpintroduce-movie-app"]||[]).push([[0],{38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(32),r=a.n(c),i=a(14),o=(a(43),a(10)),m=a(1),s=a(7),u=a(15),v=a.n(u),d=(a(60),a(16)),E=a.n(d);var _=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,r=e.poster,i=e.rating;return l.a.createElement("div",{className:"movie"},l.a.createElement("img",{src:r,alt:n,title:n}),l.a.createElement("div",{className:"movie__data"},l.a.createElement("h3",{className:"movie__title"},n),l.a.createElement("h5",{className:"movie__year"},a),l.a.createElement("h5",{className:"movie__rating"},"Rating: ",i),l.a.createElement(E.a,{classNames:"movie__stars",edit:!1,count:5,size:24,isHalf:!0,value:i/2}),l.a.createElement("p",{className:"movie__summary"},c.slice(0,180),"..."),l.a.createElement("a",{className:"movie__detail",href:"/movies/".concat(t)},"\uc790\uc138\ud788\ubcf4\uae30")))},p=a(11),f=a(33);function h(){var e=Object(o.a)(["\n  .movies {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 50px;\n    padding-top: 70px;\n  }\n"]);return h=function(){return e},e}var g=p.a.div(h());var b=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(s.a)(r,2),o=i[0],m=i[1],u=Object(n.useState)(null),d=Object(s.a)(u,2),E=d[0],p=d[1],h=Object(n.useState)(20),b=Object(s.a)(h,2),j=b[0],y=b[1];return Object(n.useEffect)((function(){v.a.get("https://yts.mx/api/v2/list_movies.json?limit=".concat(j)).then((function(e){p(null),m(!0),console.log(e),c(e.data.data.movies)})).catch((function(e){p(e)})).finally((function(){m(!1)}))}),[j]),o?l.a.createElement("div",null,"\ub85c\ub529\uc911..."):E?l.a.createElement("div",null,"\uc5d0\ub7ec\ubc1c\uc0dd"):a?(console.log("movies",a),l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null,l.a.createElement(f.a,{dataLength:4,hasMore:!0,next:function(){return y(j+4)}},l.a.createElement("ul",{className:"movies"},a.map((function(e){return l.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating})}))))))):null};function j(){var e=Object(o.a)(["\n  .home {\n    margin: 20px;\n  }\n"]);return j=function(){return e},e}var y=p.a.div(j()),N=function(){return l.a.createElement(y,null,l.a.createElement("div",{className:"home"},l.a.createElement("h1",null,"\uc0ac\uc6a9\ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc0f \ud504\ub808\uc784 \uc6cc\ud06c"),l.a.createElement("ul",null,l.a.createElement("li",null,"axios : ^0.20.0"),l.a.createElement("li",null,"react-router-dom : ^5.2.0"),l.a.createElement("li",null,"style-components : ^5.2.0"),l.a.createElement("li",null,"react-rating-stars-component : ^2.2.0"),l.a.createElement("li",null,"react-infinite-scroll-component : ^5.1.0"))))},k=a(18),O=a.n(k),x=a(37);a(67);var w=function(e){var t=e.match,a=e.history,c=t.params.id;console.log(t);var r=Object(n.useState)(null),i=Object(s.a)(r,2),o=i[0],m=i[1],u=Object(n.useState)(null),d=Object(s.a)(u,2),_=d[0],p=d[1],f=Object(n.useState)(null),h=Object(s.a)(f,2),g=h[0],b=h[1];return Object(n.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(null),m(null),p(!0),e.next=6,v.a.get("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(c));case 6:t=e.sent,m(t.data.data.movie),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),b(e.t0);case 13:p(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),_?l.a.createElement("div",null,"\ub85c\ub529\uc911..."):g?l.a.createElement("div",null,"\uc5d0\ub7ec\ubc1c\uc0dd"):o?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"movie__one"},l.a.createElement("img",{src:o.medium_cover_image,alt:o.title,title:o.title}),l.a.createElement("div",{className:"movie__one__data"},l.a.createElement("h3",{className:"movie__one__title"},o.title),l.a.createElement("h5",{className:"movie__one__like"},"Like: ",o.like_count),l.a.createElement("h5",{className:"movie__one__download"},"Download: ",o.download_count),l.a.createElement("h5",{className:"movie__one__rating"},"Rating: ",o.rating),l.a.createElement(E.a,{classNames:"movie__one__stars",edit:!1,count:5,size:24,isHalf:!0,value:o.rating/2}),l.a.createElement("p",{className:"movie__one__summary"},o.description_full),l.a.createElement("button",{className:"backBtn",onClick:function(){return a.push("/movies")}},"\ub9ac\uc2a4\ud2b8\ub85c \ub3cc\uc544\uac00\uae30")))):null};function S(){var e=Object(o.a)(["\n  .links {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    background: #dfdfdf;\n    width: 100%;\n    height: 60px;\n  }\n  .link {\n    list-style: none;\n    margin-left: 30px;\n  }\n  .link a {\n    text-decoration: none;\n    color: black;\n  }\n  .link a:hover {\n    color: #3b88c3;\n  }\n"]);return S=function(){return e},e}var B=p.a.div(S());var F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,null,l.a.createElement("ul",{className:"links"},l.a.createElement("li",{className:"link"},l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("li",{className:"link"},l.a.createElement(i.b,{to:"/movies"},"Movies"))),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:N}),l.a.createElement(m.a,{exact:!0,path:"/movies",component:b}),l.a.createElement(m.a,{path:"/movies/:id",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(i.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.84fecc64.chunk.js.map