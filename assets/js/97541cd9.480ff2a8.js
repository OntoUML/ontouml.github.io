(self.webpackChunkontouml_docs=self.webpackChunkontouml_docs||[]).push([[137],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5966:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,hide_table_of_contents:!0},s="Installation",c={unversionedId:"ontouml-js/installation",id:"ontouml-js/installation",isDocsHomePage:!1,title:"Installation",description:"Introduction",source:"@site/docs/ontouml-js/installation.md",sourceDirName:"ontouml-js",slug:"/ontouml-js/installation",permalink:"/docs/ontouml-js/installation",editUrl:"https://github.com/OntoUML/ontouml.github.io/edit/main/docs/ontouml-js/installation.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Creating Models",permalink:"/docs/ontouml-js/model"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Getting Start",id:"getting-start",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ontouml-js")," project exists to meet the needs of developers in implementing OntoUML-based solution as services. This TypeScript module comprises a library designed to support the development of any OntoUML solution for OaaS, including an extensive API for model creation and manipulation, as well as serialization and de-serialization functionality. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ontouml-js")," currently supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"ontouml-server")," and all services currently provided by it. "),(0,a.kt)("h2",{id:"getting-start"},"Getting Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// npm users\nnpm install ontouml-js --save\n\n// yarn users\nyarn add ontouml-js\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This package is designed to support manipulating OntoUML models and their serialization into ",(0,a.kt)("inlineCode",{parentName:"p"},"ontouml-schema")," compliant JSON files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Project, serializationUtils } from 'ontouml-js';\n\n// Every OntoUML element can be created from a constructor that can receive a partial object as references for its creation\nconst project = new Project({ name: 'My Project' }); // creates an OntoUML projects\n\n// Projects contain an instance of Package  dubbed model that contains all model elements in the project\n// Container elements, e.g., projects and packages, also serve as factories for their contents\nconst model = project.createModel({ name: 'Model a.k.a. Root Package' }); // creates a \"model\" Package\n\n// Instead of partial objects, \"factory\" methods receive more suitable lists of arguments to facilitating populating elements\nconst person = model.createKind('Person');\nconst school = model.createKind('School');\nconst date = model.createDatatype('Date');\nconst enrollment = model.createRelator('Enrollment');\nconst studiesAt = model.createMaterialRelation(person, school, 'studies at');\n\nmodel.createMediationRelation(enrollment, person);\nmodel.createMediationRelation(enrollment, school);\n\n// our API is constantly updated to include helpful methods to facilitate building OntoUML models\nstudiesAt.getTargetEnd().name = 'school';\nstudiesAt.getTargetEnd().setCardinalityToMany();\nstudiesAt.getSourceEnd().name = 'student';\nstudiesAt.getSourceEnd().cardinality = '1..*';\n\nenrollment.createAttribute(date, 'enrollment date');\n\n// Containers also include methods to easily support retrieving their contents\nmodel.getAllAttributes(); // returns all contained attributes\nmodel.getAllClasses(); // returns all contained classes\nmodel.getAllGeneralizations(); // returns all contained generalizations\n\n// Any element can be easily serialized into JSON, and properly serialized elements can be deserialized just as easily\nconst projectSerialization = JSON.stringify(project);\nconst projectCopy = serializationUtils.parse(projectSerialization);\n")))}p.isMDXComponent=!0}}]);