(self.webpackChunkontouml_docs=self.webpackChunkontouml_docs||[]).push([[632],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return p}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),s=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),f=s(n),p=r,d=f["".concat(c,".").concat(p)]||f[p]||m[p]||i;return n?o.createElement(d,a(a({ref:e},l),{},{components:n})):o.createElement(d,a({ref:e},l))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6306:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:1,hide_table_of_contents:!0},c="OntoUML to gUFO",s={unversionedId:"ontouml-js/transformations/ontouml2gufo",id:"ontouml-js/transformations/ontouml2gufo",isDocsHomePage:!1,title:"OntoUML to gUFO",description:"OntoUML JS packages provides a transformation to gUFO, a lightweight implementation of the Unified Foundational Ontology (UFO) suitable for Semantic Web OWL 2 DL applications. You can find a complete documentation about gUFO here.",source:"@site/docs/ontouml-js/transformations/ontouml2gufo.md",sourceDirName:"ontouml-js/transformations",slug:"/ontouml-js/transformations/ontouml2gufo",permalink:"/docs/ontouml-js/transformations/ontouml2gufo",editUrl:"https://github.com/OntoUML/ontouml.github.io/edit/main/docs/ontouml-js/transformations/ontouml2gufo.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Verifying Models",permalink:"/docs/ontouml-js/verification"},next:{title:"OntoUML to Database",permalink:"/docs/ontouml-js/transformations/ontouml2db"}},l=[{value:"Getting Start",id:"getting-start",children:[]}],m={toc:l};function f(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ontouml-to-gufo"},"OntoUML to gUFO"),(0,i.kt)("p",null,"OntoUML JS packages provides a transformation to gUFO, a lightweight implementation of the Unified Foundational Ontology (UFO) suitable for Semantic Web OWL 2 DL applications. You can find a complete documentation about gUFO ",(0,i.kt)("a",{parentName:"p",href:"https://nemo-ufes.github.io/gufo/"},"here"),"."),(0,i.kt)("h2",{id:"getting-start"},"Getting Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Project, Ontouml2Gufo } from 'ontouml-js';\n\nconst project = new Project();\nconst model = project.createModel();\n\nmodel.createKind('Person', { id: '123' });\n\nconst options = {\n  baseIri: 'http://example.com#',\n  basePrefix: 'ex',\n  format: 'N-Triple',\n  uriFormatBy: 'id',\n  createObjectProperty: true,\n  createInverses: false,\n  prefixPackages: false,\n  customPackageMapping: {\n    University: {\n      prefix: 'uni',\n      uri: 'http://university.org/'\n    }\n  }\n};\n\nconst ontouml2gufo = new Ontouml2Gufo(model, options);\n\nontouml2gufo.transform();\n\nconsole.log(ontouml2gufo.getOwlCode());\n")))}f.isMDXComponent=!0}}]);