"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Welcome",l={unversionedId:"intro",id:"intro",title:"Welcome",description:"The OntoUML.org - DEV is a website that aggregates user documentation for OntoUML projects on GitHub. In this sense, each documentation includes both technical and normative details, as well as tutorials and user guides.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/OntoUML/ontouml.github.io/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},s={},c=[{value:"Contributing with documentation",id:"contributing-with-documentation",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Start the website",id:"start-the-website",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"OntoUML.org - DEV")," is a website that aggregates user documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OntoUML"},"OntoUML projects on GitHub"),". In this sense, each documentation includes both technical and normative details, as well as tutorials and user guides."),(0,o.kt)("p",null,"Use the side panel to navigate to the project of your interest, or continue on this page to learn how to contribute to this website."),(0,o.kt)("h2",{id:"contributing-with-documentation"},"Contributing with documentation"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"OntoUML.org - DEV")," website is developed using the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," framework, an open source documentation generator built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),"/Javascript."),(0,o.kt)("p",null,"Even though knowledge on these technologies is welcome, it is not strictly necessary, since all pages are written using Markdown files."),(0,o.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,o.kt)("h2",{id:"start-the-website"},"Start the website"),(0,o.kt)("p",null,"On your first execution, you will need to install all project dependencies using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ontouml.github.io\nnpm ci\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. Then the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm ci")," command install the necessary dependencies in the appropriate versions."),(0,o.kt)("p",null,"Once all dependencies are installed, you can run a development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."),(0,o.kt)("p",null,"The documentation of each project must be contained inside a dedicated folder within ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/"),"."),(0,o.kt)("p",null,"Once finished your contributions, open a pull request to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OntoUML/ontouml.github.io"},"ontouml.github.io")," repository for deployment."))}d.isMDXComponent=!0}}]);