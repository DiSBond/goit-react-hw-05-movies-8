"use strict";(self.webpackChunkgoit_react_hw_05_movies_8=self.webpackChunkgoit_react_hw_05_movies_8||[]).push([[106],{106:function(e,n,i){i.r(n);var t,r=i(885),s=i(168),c=i(842),o=i(791),l=i(731),a=i(470),h=i(184),d=(0,c.Z)(l.OL)(t||(t=(0,s.Z)(["\n  color: black;\n\n  &.active {\n    color: orange;\n  }\n"])));n.default=function(e){var n,i,t=e.apiKey,s=(0,o.useState)({}),c=(0,r.Z)(s,2),l=c[0],u=c[1],j=(0,a.TH)(),v=(0,a.UO)().id;(0,o.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(v,"?api_key=").concat(t,"&language=en-US")).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){return u(e)}))}),[t,v]);var x=null!==(n=null===(i=j.state)||void 0===i?void 0:i.from)&&void 0!==n?n:"/";return(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{children:(0,h.jsx)(d,{to:x,children:"Go back"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:function(){if(l.poster_path)return"https://image.tmdb.org/t/p/w500".concat(l.poster_path)}(),alt:""}),(0,h.jsx)("h1",{children:l.title?l.title:l.name}),(0,h.jsxs)("p",{children:["User Score: ",l.vote_average]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:l.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{children:l.genres&&l.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(d,{to:"cast",state:{from:x},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(d,{to:"reviews",state:{from:x},children:"Reviews"})})]})]}),(0,h.jsx)("div",{children:(0,h.jsx)(o.Suspense,{fallback:null,children:(0,h.jsx)(a.j3,{})})})]})}}}]);
//# sourceMappingURL=106.a12b0ccd.chunk.js.map