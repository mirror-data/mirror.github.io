(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(346)}])},346:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Le}});var t=n(603),i=n(5893),o=n(7294),a=n(3549),l=n(8427),s=n(1485),c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,r,n)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,r)=>{for(var n in r||(r={}))f.call(r,n)&&h(e,n,r[n]);if(u)for(var n of u(r))g.call(r,n)&&h(e,n,r[n]);return e};const b={xs:18,sm:22,md:28,lg:34,xl:44};function x({variant:e,theme:r,color:n,gradient:t}){const i=r.fn.variant({color:n,variant:e,gradient:t});return"gradient"===e?{border:0,backgroundImage:i.background,color:i.color,"&:hover":r.fn.hover({backgroundSize:"200%"})}:m({border:`1px solid ${i.border}`,backgroundColor:i.background,color:i.color},r.fn.hover({backgroundColor:i.hover}))}var v=(0,s.k)(((e,{color:r,size:n,radius:t,variant:i,gradient:o})=>{return{root:(a=m({},x({variant:i,theme:e,color:r,gradient:o})),l={position:"relative",height:e.fn.size({size:n,sizes:b}),minHeight:e.fn.size({size:n,sizes:b}),width:e.fn.size({size:n,sizes:b}),minWidth:e.fn.size({size:n,sizes:b}),borderRadius:e.fn.radius(t),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center","&:active":e.activeStyles,"&:disabled, &[data-disabled]":{color:e.colors.gray["dark"===e.colorScheme?6:4],cursor:"not-allowed",backgroundColor:"transparent"===i?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),borderColor:"transparent"===i?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(t),cursor:"not-allowed"}}},d(a,p(l)))};var a,l})),y=n(966),w=n(4736),j=Object.defineProperty,z=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,P=(e,r,n)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,S=(e,r)=>{for(var n in r||(r={}))O.call(r,n)&&P(e,n,r[n]);if(z)for(var n of z(r))k.call(r,n)&&P(e,n,r[n]);return e};const C={color:"gray",size:"md",variant:"subtle",loading:!1},N=(0,o.forwardRef)(((e,r)=>{const n=(0,a.N4)("ActionIcon",C,e),{className:t,color:i,children:l,radius:s,size:c,variant:d,gradient:p,disabled:u,loaderProps:f,loading:g,unstyled:h}=n,m=((e,r)=>{var n={};for(var t in e)O.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&z)for(var t of z(e))r.indexOf(t)<0&&k.call(e,t)&&(n[t]=e[t]);return n})(n,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled"]),{classes:x,cx:j,theme:P}=v({size:c,radius:s,color:i,variant:d,gradient:p},{name:"ActionIcon",unstyled:h}),N=P.fn.variant({color:i,variant:d}),E=o.createElement(y.a,S({color:N.color,size:P.fn.size({size:c,sizes:b})-12},f));return o.createElement(w.k,S({className:j(x.root,t),ref:r,disabled:u,"data-disabled":u||void 0,"data-loading":g||void 0,unstyled:h},m),g?E:l)}));N.displayName="@mantine/core/ActionIcon";const E=(0,l.F)(N);var I=n(3455);function W(e){return Array.isArray(e)?e:[e]}var T=Object.defineProperty,_=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,L=(e,r,n)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;const B={w:0,h:0},Z=(0,o.forwardRef)(((e,r)=>{const n=(0,a.N4)("Space",B,e),{w:t,h:i,sx:l}=n,s=((e,r)=>{var n={};for(var t in e)D.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&_)for(var t of _(e))r.indexOf(t)<0&&R.call(e,t)&&(n[t]=e[t]);return n})(n,["w","h","sx"]);return o.createElement(I.x,((e,r)=>{for(var n in r||(r={}))D.call(r,n)&&L(e,n,r[n]);if(_)for(var n of _(r))R.call(r,n)&&L(e,n,r[n]);return e})({ref:r,sx:[e=>{const r=e.fn.size({size:t,sizes:e.spacing}),n=e.fn.size({size:i,sizes:e.spacing});return{width:r,height:n,minWidth:r,minHeight:n}},...W(l)]},s))}));Z.displayName="@mantine/core/Space";var A=Object.defineProperty,F=Object.defineProperties,H=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,$=(e,r,n)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,Q=(e,r)=>{for(var n in r||(r={}))G.call(r,n)&&$(e,n,r[n]);if(M)for(var n of M(r))X.call(r,n)&&$(e,n,r[n]);return e};function V({underline:e,strikethrough:r}){const n=[];return e&&n.push("underline"),r&&n.push("line-through"),n.length>0?n.join(" "):"none"}function q({theme:e,color:r,variant:n}){return"dimmed"===r?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:"string"===typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:r}).background:"link"===n?e.colors[e.primaryColor]["dark"===e.colorScheme?4:7]:r||"inherit"}function J(e){return"number"===typeof e?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}var K=(0,s.k)(((e,{color:r,variant:n,size:t,lineClamp:i,inline:o,inherit:a,underline:l,gradient:s,weight:c,transform:d,align:p,strikethrough:u,italic:f})=>{const g=e.fn.variant({variant:"gradient",gradient:s});return{root:Q((h=Q(Q(Q({},e.fn.fontStyles()),e.fn.focusStyles()),J(i)),m={color:q({color:r,theme:e,variant:n}),fontFamily:a?"inherit":e.fontFamily,fontSize:a||void 0===t?"inherit":e.fn.size({size:t,sizes:e.fontSizes}),lineHeight:a?"inherit":o?1:e.lineHeight,textDecoration:V({underline:l,strikethrough:u}),WebkitTapHighlightColor:"transparent",fontWeight:a?"inherit":c,textTransform:d,textAlign:p,fontStyle:f?"italic":void 0},F(h,H(m))),e.fn.hover("link"===n&&void 0===l?{textDecoration:"underline"}:void 0)),gradient:{backgroundImage:g.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};var h,m})),U=Object.defineProperty,Y=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,ne=(e,r,n)=>r in e?U(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;const te={variant:"text"},ie=(0,o.forwardRef)(((e,r)=>{const n=(0,a.N4)("Text",te,e),{className:t,size:i,weight:l,transform:s,color:c,align:d,variant:p,lineClamp:u,gradient:f,inline:g,inherit:h,underline:m,strikethrough:b,italic:x,classNames:v,styles:y,unstyled:w,span:j}=n,z=((e,r)=>{var n={};for(var t in e)ee.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&Y)for(var t of Y(e))r.indexOf(t)<0&&re.call(e,t)&&(n[t]=e[t]);return n})(n,["className","size","weight","transform","color","align","variant","lineClamp","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span"]),{classes:O,cx:k}=K({variant:p,color:c,size:i,lineClamp:u,inline:g,inherit:h,underline:m,strikethrough:b,italic:x,weight:l,transform:s,align:d,gradient:f},{unstyled:w,name:"Text"});return o.createElement(I.x,((e,r)=>{for(var n in r||(r={}))ee.call(r,n)&&ne(e,n,r[n]);if(Y)for(var n of Y(r))re.call(r,n)&&ne(e,n,r[n]);return e})({ref:r,className:k(O.root,{[O.gradient]:"gradient"===p},t),component:j?"span":"div"},z))}));ie.displayName="@mantine/core/Text";const oe=(0,l.F)(ie);var ae=(0,s.k)(((e,{fluid:r,size:n,sizes:t})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:r?"100%":e.fn.size({size:n,sizes:t}),marginLeft:"auto",marginRight:"auto"}}))),le=ae,se=Object.defineProperty,ce=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ue=(e,r,n)=>r in e?se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;const fe={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},ge=(0,o.forwardRef)(((e,r)=>{const n=(0,a.N4)("Container",fe,e),{className:t,fluid:i,size:l,unstyled:s,sizes:c}=n,d=((e,r)=>{var n={};for(var t in e)de.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&ce)for(var t of ce(e))r.indexOf(t)<0&&pe.call(e,t)&&(n[t]=e[t]);return n})(n,["className","fluid","size","unstyled","sizes"]),{classes:p,cx:u}=le({fluid:i,size:l,sizes:c},{unstyled:s,name:"Container"});return o.createElement(I.x,((e,r)=>{for(var n in r||(r={}))de.call(r,n)&&ue(e,n,r[n]);if(ce)for(var n of ce(r))pe.call(r,n)&&ue(e,n,r[n]);return e})({className:u(p.root,t),ref:r},d))}));ge.displayName="@mantine/core/Container";var he=n(9008),me=n.n(he),be=n(6042);function xe(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}var ve=n(4924),ye="@media (max-width: 960px)",we=(0,s.k)((function(e){return{jumbotron:{},paperTitle:{lineHeight:1.3},paperTitleEmoji:{position:"absolute",left:-32,"@media (max-width: 1200px)":{position:"initial"}},inner:(0,ve.Z)({position:"relative",paddingTop:80},ye,{paddingTop:40}),description:(0,ve.Z)({marginTop:1.5*e.spacing.xl,fontSize:24,maxWidth:800,color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[7]},ye,{fontSize:18}),controls:(0,ve.Z)({marginTop:1.5*e.spacing.xl},ye,{marginTop:e.spacing.xl}),control:(0,ve.Z)({height:64,paddingLeft:46,paddingRight:46,fontSize:20},ye,{height:54,paddingLeft:18,paddingRight:18,flex:1}),controlPrimary:{border:0,fontWeight:700},githubControl:{borderColor:"transparent",backgroundColor:e.colors.dark[6],color:e.white,fontWeight:700,"&:hover":{backgroundColor:e.colors.dark[5],color:e.white}},feature:{display:"flex",flexDirection:"column",alignItems:"flex-start","@media (max-width: 800px)":{flexDirection:"row"}},featureBody:{marginTop:e.spacing.xs,"@media (max-width: 800px)":{marginTop:0,marginLeft:e.spacing.lg}},featureTitle:{color:"dark"===e.colorScheme?e.white:e.black},featureIcon:{color:e.white,borderRadius:e.radius.md,display:"flex",justifyContent:"center",alignItems:"center",minWidth:50,height:50,"& svg":{display:"block"}}}})),je=n(6869);const ze={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var Oe=(0,s.k)(((e,{spacing:r,position:n,noWrap:t,grow:i,align:o,count:a})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:o||"center",flexWrap:t?"nowrap":"wrap",justifyContent:ze[n],gap:e.fn.size({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:i?`calc(${100/a}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/a}px)`:void 0,flexGrow:i?1:0}}}))),ke=Object.defineProperty,Pe=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Ne=(e,r,n)=>r in e?ke(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;const Ee={position:"left",spacing:"md"},Ie=(0,o.forwardRef)(((e,r)=>{const n=(0,a.N4)("Group",Ee,e),{className:t,position:i,align:l,children:s,noWrap:c,grow:d,spacing:p,unstyled:u}=n,f=((e,r)=>{var n={};for(var t in e)Se.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&Pe)for(var t of Pe(e))r.indexOf(t)<0&&Ce.call(e,t)&&(n[t]=e[t]);return n})(n,["className","position","align","children","noWrap","grow","spacing","unstyled"]),g=function(e){return o.Children.toArray(e).filter(Boolean)}(s),{classes:h,cx:m}=Oe({align:l,grow:d,noWrap:c,spacing:p,position:i,count:g.length},{unstyled:u,name:"Group"});return o.createElement(I.x,((e,r)=>{for(var n in r||(r={}))Se.call(r,n)&&Ne(e,n,r[n]);if(Pe)for(var n of Pe(r))Ce.call(r,n)&&Ne(e,n,r[n]);return e})({className:m(h.root,t),ref:r},f),g)}));Ie.displayName="@mantine/core/Group";var We=n(7789),Te=n(3991);function _e(){var e=we().classes,r={size:48,weight:700,align:"center"};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(oe,xe((0,be.Z)({},r),{component:"span",className:e.paperTitleEmoji,children:"\ud83e\ude9e"})),(0,i.jsxs)(oe,xe((0,be.Z)({},r),{component:"span",className:e.paperTitle,children:[(0,i.jsx)(oe,xe((0,be.Z)({component:"span",variant:"gradient",gradient:{from:"indigo",to:"green",deg:90}},r),{children:" Mirror: "})),"Plug-and-Play Data Query, Summarization and Visualization with Natural Language Interface"]}))]})}function De(){var e=we(),r=e.classes;e.cx;return(0,i.jsx)("div",{className:r.jumbotron,children:(0,i.jsxs)(ge,{size:1140,className:r.inner,children:[(0,i.jsx)(_e,{}),(0,i.jsx)(Z,{h:28}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{href:"https://www.canwenxu.net/",children:(0,i.jsx)(je.z,{variant:"subtle",sx:{padding:0},children:(0,i.jsx)(oe,{size:28,component:"span",children:"Canwen Xu"})})}),(0,i.jsx)("a",{href:"https://github.com/wph95",children:(0,i.jsx)(je.z,{variant:"subtle",sx:{padding:0},children:(0,i.jsx)(oe,{size:28,component:"span",sx:{paddingLeft:14},children:"Penghan Wang"})})})]}),(0,i.jsx)(Z,{h:28}),(0,i.jsxs)(Ie,{children:[(0,i.jsx)("a",{href:"https://github.com/mirror-data/mirror/",children:(0,i.jsx)(je.z,{leftIcon:(0,i.jsx)(Te.oBr,{}),variant:"outline",children:"Code"})}),(0,i.jsxs)(je.z,{leftIcon:(0,i.jsx)(Te.XhR,{}),variant:"outline",color:"gray",children:["Paper",(0,i.jsx)(We.C,{variant:"gradient",sx:{position:"absolute",top:-12},gradient:{from:"indigo",to:"cyan"},children:"Coming soon"})]})]}),(0,i.jsx)(Z,{h:28}),(0,i.jsxs)(oe,{size:24,component:"span",children:["We propose ",(0,i.jsx)(oe,{component:"span",variant:"gradient",gradient:{from:"indigo",to:"green",deg:90},size:24,weight:700,children:" Mirror"}),", a language model-powered open-source platform for data exploration and analysis. We provide an easy-to-use natural language interface to automatically query the database. By generating executable SQL command, Mirror can retrieve relevant data and automatically summarize it in natural language. Mirror is also capable of generating visualization to better illustrate the results. With its human-in-the-loop design, Mirror can help people better understand their data, no matter they are experienced data analyst or marketing professionals without any programming knowledge."]})]})})}var Re=n(1509),Le=function(){var e=(0,t.Z)((0,Re._)({key:"color-scheme",defaultValue:"light"}),2),r=e[0],n=e[1];return(0,i.jsxs)("div",{children:[(0,i.jsxs)(me(),{children:[(0,i.jsx)("title",{children:"Mirror"}),(0,i.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83e\ude9e</text></svg>"})]}),(0,i.jsx)(E,{onClick:function(){return n((function(e){return"dark"===e?"light":"dark"}))},variant:"outline",size:"lg",sx:{position:"absolute",top:20,right:20,zIndex:5},children:"dark"===r?(0,i.jsx)(Te.O31,{}):(0,i.jsx)(Te.zG9,{})}),(0,i.jsxs)(I.x,{sx:function(e){return{position:"relative",zIndex:1,boxShadow:e.shadows.sm}},children:[(0,i.jsx)(De,{}),(0,i.jsx)(Z,{h:40}),(0,i.jsx)(oe,{align:"center",size:32,weight:"700",children:"DEMO"}),(0,i.jsx)(Z,{h:32}),(0,i.jsxs)(ge,{size:1140,children:[(0,i.jsx)("div",{style:{padding:"55.9% 0 0 0",position:"relative"},children:(0,i.jsx)("iframe",{src:"https://player.vimeo.com/video/763220134?h=3111c6157e&badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"mirror-0.1.mov"})}),(0,i.jsx)("script",{src:"https://player.vimeo.com/api/player.js"})]}),(0,i.jsx)(Z,{h:160})]})]})}}},function(e){e.O(0,[584,515,774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);