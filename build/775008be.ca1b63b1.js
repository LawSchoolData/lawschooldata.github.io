(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(f,i(i({ref:t},s),{},{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(102)),l={slug:"big-update",title:"Lots of updates for LSData",author:"cryptanon",author_title:"LSData creator",author_url:"https://www.lawschooldata.org/users/creep/cryptanon",author_image_url:"https://www.lawschooldata.org/images/bundlebee-mascot-sml.png",tags:["updates","devlog","lsdata"]},i={permalink:"/blog/big-update",source:"@site/blog/2021-01-04-updates.md",description:"This post is a boring, unorganized changelog with some rambling thoughts.",date:"2021-01-04T00:00:00.000Z",tags:[{label:"updates",permalink:"/blog/tags/updates"},{label:"devlog",permalink:"/blog/tags/devlog"},{label:"lsdata",permalink:"/blog/tags/lsdata"}],title:"Lots of updates for LSData",readingTime:1.245,truncated:!1,nextItem:{title:"Hello, world!",permalink:"/blog/hello"}},c=[],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This post is a boring, unorganized changelog with some rambling thoughts."),Object(o.b)("h4",{id:"coming-soon"},"Coming soon"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Guest blog posts from current law students and alumni"),Object(o.b)("li",{parentName:"ul"},"Thorough how-to documentation on how to navigate the law school process"),Object(o.b)("li",{parentName:"ul"},"Personal statement sharing"),Object(o.b)("li",{parentName:"ul"},"Color-blind mode"),Object(o.b)("li",{parentName:"ul"},"Status checkers for UT Austin, UC Davis, and Yale"),Object(o.b)("li",{parentName:"ul"},"Aliases for school search")),Object(o.b)("h4",{id:"added"},"Added"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Early Decision, priority track, fee waiver, in-state residency"),Object(o.b)("li",{parentName:"ul"},"granular URM entry"),Object(o.b)("li",{parentName:"ul"},"before/after status comparison"),Object(o.b)("li",{parentName:"ul"},"collapsed statuses by default, which expand when going red"),Object(o.b)("li",{parentName:"ul"},"formatting cleanup of status table"),Object(o.b)("li",{parentName:"ul"},"removed ability for people to put dates in the future"),Object(o.b)("li",{parentName:"ul"},"clicking user link on the school page opens in a new tab")),Object(o.b)("p",null,"I'm struggling to fit all the status content within a single table. If there's too much stuff or the content is too wordy, the table gets really wide, users have to scroll, and UX suffers. The technically easiest solution would be to make the tables the full width of the page but then the tables collide with ads, and we need those. It really sucks to sacrifice UX for ad revenue though -- feels slimy. Hopefully the icon and ellipsis changes I made will be a decent middle ground."),Object(o.b)("p",null,"There's a lot of other stuff going on in the background with LSData and BundleBee. It's nice to think about something that isn't black letter law but the freedom and problem scope is also a bit overwhelming. Good luck with your cycles y'all."))}u.isMDXComponent=!0}}]);