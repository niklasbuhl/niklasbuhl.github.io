(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[9678],{2716:function(e,t,o){"use strict";var n=o(7294),a=o(9925).default.div.withConfig({displayName:"BackgroundColor__Container",componentId:"sc-1gocrb7-0"})(["height:100%;width:100%;background:",";"],(function(e){return e.bgColor}));t.Z=function(e){return n.createElement(a,{bgColor:e.bgColor},e.children)}},1248:function(e,t,o){"use strict";var n=o(7294),a=o(9925).default.button.withConfig({displayName:"ScrollButton__ButtonStyle",componentId:"sc-1n4ppl9-0"})(["all:unset;&:hover{cursor:pointer;}",""],(function(e){return e.buttonStyle}));t.Z=function(e){return n.createElement(a,{buttonStyle:e.buttonStyle,onClick:function(){if(e.scrollToId){console.log("Scroll To ID: "+e.scrollToId);var t=document.getElementById(e.scrollToId),o=e.offset,n=t.getBoundingClientRect().top+window.pageYOffset-o;window.scrollTo({top:n,behavior:"smooth"})}else e.scrollPixels&&(console.log("Scroll Pixels: "+e.scrollPixels),window.scrollBy({top:e.scrollPixels,left:0,behavior:"smooth"}))}},e.children)}},6160:function(e,t,o){"use strict";var n=o(7294),a=o(9925),r=(o(2716),o(4031)),l=o(9414),i=o(4669),c=o(5444),s=o(2273),m=a.default.div.withConfig({displayName:"ProjectCardv2__ProjectContent",componentId:"sc-b00pkn-0"})(["display:flex;flex-flow:column;margin:var(--gutter);width:100%;height:calc(100% - 2 * var(--gutter));z-index:70;"]),d=a.default.div.withConfig({displayName:"ProjectCardv2__ZoomOuter",componentId:"sc-b00pkn-1"})(["display:flex;width:100%;height:100%;transition:all 200ms ease-out 100ms;z-index:70;:hover{margin:calc(var(--halfGutter) * -1);width:calc(100% + var(--gutter));height:calc(100% + var(--gutter));}"]),p=a.default.div.withConfig({displayName:"ProjectCardv2__ZoomInner",componentId:"sc-b00pkn-2"})(["display:flex;width:100%;height:100%;transition:all 200ms ease-out 100ms;z-index:70;:hover{padding:var(--halfGutter);width:calc(100% - var(--gutter));height:calc(100% - var(--gutter));}"]),f=a.default.div.withConfig({displayName:"ProjectCardv2__ImageContainer",componentId:"sc-b00pkn-3"})(["position:relative;width:100%;height:100%;overflow:hidden;z-index:40;pointer-events:none;"]),u=a.default.div.withConfig({displayName:"ProjectCardv2__ContentContainer",componentId:"sc-b00pkn-4"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),h=(0,a.default)(c.rU).withConfig({displayName:"ProjectCardv2__ProjectLink",componentId:"sc-b00pkn-5"})(["display:flex;width:100%;all:unset;&:hover{cursor:pointer;}"]),g=a.default.h1.withConfig({displayName:"ProjectCardv2__ProjectTitle",componentId:"sc-b00pkn-6"})([""," "," font-size:24px;margin:0;margin-bottom:8px;color:",";"],s.Z.fonts.display,s.Z.shadows.softShadow,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),w=a.default.p.withConfig({displayName:"ProjectCardv2__ProjectSubtitle",componentId:"sc-b00pkn-7"})([""," "," letter-spacing:-0.4px;font-size:14px;margin:0;color:",";"],s.Z.fonts.display,s.Z.shadows.softShadow,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),y=(0,a.css)([""," "," font-size:10px;margin:0;"],s.Z.fonts.code,s.Z.shadows.softShadow),v=a.default.p.withConfig({displayName:"ProjectCardv2__TypeTag",componentId:"sc-b00pkn-8"})([""," margin-right:8px;color:",";"],y,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),E=a.default.p.withConfig({displayName:"ProjectCardv2__StatusTag",componentId:"sc-b00pkn-9"})([""," &.active{color:var(--neon-green);}&.inactive{color:var(--neon-yellow);}"],y),x=a.default.p.withConfig({displayName:"ProjectCardv2__YearTag",componentId:"sc-b00pkn-10"})([""," color:",";"],y,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),k=a.default.p.withConfig({displayName:"ProjectCardv2__InstitutionTag",componentId:"sc-b00pkn-11"})([""," margin-right:4px;color:",";"],y,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),b=a.default.p.withConfig({displayName:"ProjectCardv2__TopicTag",componentId:"sc-b00pkn-12"})([""," margin-right:8px;color:",";"],y,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),C=a.default.p.withConfig({displayName:"ProjectCardv2__ToolTag",componentId:"sc-b00pkn-13"})([""," margin-right:8px;color:",";"],y,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),S=(a.default.p.withConfig({displayName:"ProjectCardv2__Description",componentId:"sc-b00pkn-14"})([""," font-size:12px;margin:0;margin-bottom:8px;color:",";"],s.Z.fonts.sans,(function(e){return e.colorSchema?e.colorSchema.textColor:"var(--soft-black)"})),{textColor:"var(--hard-white)"}),_={textColor:"var(--neon-purple)"},I={textColor:"var(--soft-black)"};t.Z=function(e){var t,o=!1,a=!1;switch(e.years.length>1?(o=e.years[0],a=e.years[e.years.length-1]):o=e.years[0],console.log(e.colorSchema),e.colorSchema){case"light":t=S;break;case"neonPurple":t=_;break;default:t=I}return console.log(t),n.createElement(h,{to:e.to?e.to:"/"},n.createElement(r.Z,{width:4,height:3},n.createElement(l.Z,null,n.createElement(d,null,n.createElement(f,null,e.bgImage?e.bgImage:"",n.createElement(u,null,n.createElement(p,null,n.createElement(m,null,n.createElement(i.Z,{flow:"row",style:{height:"17%",justifyContent:"space-between"},grow:0},n.createElement(i.Z,{flow:"row"},n.createElement(v,{colorSchema:t},e.type?e.type[0]:""),n.createElement(E,{className:e.status?e.status:"",colorSchema:t},e.status&&e.status)),n.createElement(i.Z,{flow:"row"},n.createElement(k,{colorSchema:t},e.institution?e.institution[0]:""),o&&n.createElement(x,{key:o,colorSchema:t},o),a&&n.createElement(x,{key:a,colorSchema:t}," - "+a))),n.createElement(i.Z,{flow:"column",style:{height:"100%"}},n.createElement(g,{colorSchema:t},e.title&&e.title),n.createElement(w,{colorSchema:t},e.subtitle&&e.subtitle)),n.createElement(i.Z,{flow:"row wrap",style:{height:"10%"},contentPosition:s.Z.positions.leftDown,grow:1},e.tags.topics&&e.tags.topics.map((function(e){return n.createElement(b,{key:e,colorSchema:t},e)})),e.tags.tools&&e.tags.tools.map((function(e){return n.createElement(C,{key:e,colorSchema:t},e)})))))))))))}},7681:function(e,t,o){"use strict";var n=o(7294),a=o(9925),r=o(2273),l=a.default.div.withConfig({displayName:"FullPageSection__ContentPositionWrap",componentId:"sc-165qusv-0"})(["display:flex;min-width:100%;"," ",""],r.Z.centerCol,(function(e){return e.background})),i=a.default.section.withConfig({displayName:"FullPageSection__ContentContainer",componentId:"sc-165qusv-1"})(["display:flex;flex-flow:",";width:100%;max-width:var(--maxPageWidth);min-height:calc(100vh - (var(--contentMargin) * 2));"," margin-top:var(--contentMargin);margin-bottom:var(--contentMargin);"],(function(e){return e.flow?e.flow:"column"}),(function(e){return e.contentPosition?e.contentPosition:""}));t.Z=function(e){return n.createElement(l,{background:e.background,id:e.id},n.createElement(i,{flow:e.flow,contentPosition:e.contentPosition},e.children))}},4031:function(e,t,o){"use strict";var n=o(7294),a=o(9925),r=a.default.div.withConfig({displayName:"Aspect__AspectContainer",componentId:"sc-bj15ce-0"})(["display:flex;width:100%;position:relative;padding-top:",";"],(function(e){return e.aspect})),l=a.default.div.withConfig({displayName:"Aspect__ContentContainer",componentId:"sc-bj15ce-1"})(["display:flex;position:absolute;top:0;left:0;bottom:0;right:0;"]);t.Z=function(e){var t=100*e.height/e.width+"%";return n.createElement(r,{aspect:t},n.createElement(l,null,e.children))}},4627:function(e,t){"use strict";var o={getWorkEmail:function(){return"hello@world.com"},getWorkPhone:function(){return"12345678"},getPrivateEmail:function(){return"hello@you.dk"},getPrivatePhone:function(){return"12345678"}};t.Z=o},7384:function(e,t,o){"use strict";var n=o(7294),a=o(2273),r=o(1078),l=o(1561),i=o(2411),c=o(7753),s=o(1941);t.Z=function(e){return a.Z.SetCSSGlobals(),n.createElement(n.Fragment,null,n.createElement(r.Z,null),n.createElement(l.Z,{location:e.location}),n.createElement(s.Z,{pageCSS:e.pageCSS},e.children),n.createElement(i.Z,null),n.createElement(c.Z,null))}},3578:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return D}});var n=o(7294),a=o(7384),r=o(5444),l=o(7681),i=o(9925),c=o(2273),s=o(9414),m=o(4669),d=o(348),p=o.n(d),f=o(2675),u=o.n(f),h=o(8974),g=o(1248),w=(0,i.default)(p()).withConfig({displayName:"AnimatedScrollMouse__StyledMouse",componentId:"sc-1x3afat-0"})(["width:100%;max-width:19px;"]),y=(0,i.default)(u()).withConfig({displayName:"AnimatedScrollMouse__StyledArrow",componentId:"sc-1x3afat-1"})(["transform:rotate(90deg);position:relative;max-width:8px;animation-name:prototype;animation-duration:1s;animation-iteration-count:infinite;@keyframes prototype{0%{top:0px;}50%{top:7px;}100%{top 0px;}}@-webkit-keyframes prototype{0%{-webkit-top:0px;}50%{-webkit-top:7px;}100%{-webkit-top 0px;}}"]),v=i.default.div.withConfig({displayName:"AnimatedScrollMouse__ArrowContainer",componentId:"sc-1x3afat-2"})(["display:flex;justify-content:center;height:20px;width:100%;"]),E=i.default.div.withConfig({displayName:"AnimatedScrollMouse__Container",componentId:"sc-1x3afat-3"})(["display:flex;width:fit-content;flex-flow:column;align-items:center;transition:opacity 0.2s ease-in-out;opacity:1;&.hide{opacity:0;}"]),x=function(e){var t=(0,n.useRef)(null),o=(0,n.useState)(0),a=(o[0],o[1]),r=(0,n.useState)(0),l=r[0],i=r[1],c=(0,n.useState)(!1);c[0],c[1];return(0,n.useEffect)((function(){var o=t.current.getBoundingClientRect().bottom+240;a(o);var n=o+e.hideOnScroll;i(n)}),[]),n.createElement(g.Z,{scrollPixels:e.scrollPixels,scrollToId:e.scrollToId,offset:e.offset},n.createElement(E,{ref:t,className:e.eventsContext.scroll+e.eventsContext.height>l&&"hide"},n.createElement(w,null),n.createElement(v,null,n.createElement(y,null))))},k=function(e){return n.createElement(h.Z.Consumer,null,(function(t){return n.createElement(x,{eventsContext:t,scrollPixels:e.scrollPixels,scrollToId:e.scrollToId,offset:e.offset,hideOnScroll:e.hideOnScroll},e.children)}))},b=(0,i.default)(r.rU).withConfig({displayName:"AllDevPages__StyledDevLink",componentId:"sc-1do6xm3-0"})([""," font-size:14px;margin-left:var(--halfGutter);margin-bottom:var(--halfGutter);background:var(--light-gray);width:fit-content;padding:4px;color:var(--soft-black);text-decoration:none;&:hover{background:var(--gray);}"],c.Z.fonts.code),C=i.default.div.withConfig({displayName:"AllDevPages__Container",componentId:"sc-1do6xm3-1"})(["display:flex;flex-flow:row wrap;width:100%;height:fit-content;"]),S=function(){var e=(0,n.useState)((0,r.K2)("591751618").allFile.nodes)[0];return n.createElement(C,null,e.map((function(e){return n.createElement(b,{key:e.id,to:"/dev/"+e.name},e.name,".js")})))},_=o(5824),I=o.n(_),N=o(224),Z=o.n(N),P=o(4627),j=o(6160),T=o(6125),B=i.default.ul.withConfig({displayName:"FeaturedProjects__Ul",componentId:"sc-11cm7z1-0"})(["display:flex;flex-flow:row wrap;"]),z=function(){var e=(0,n.useState)((0,r.K2)("4027865203").allMdx.edges)[0];return n.createElement(n.Fragment,null,n.createElement(B,null,e.map((function(e){var t=e.node;return console.log(t.frontmatter.tileTextColorScheme),n.createElement(m.Z,{type:"li",key:t.id,col:4,grow:"1"},n.createElement(j.Z,{to:"/projects/"+t.slug,type:t.frontmatter.types,title:t.frontmatter.title,subtitle:t.frontmatter.subtitle,years:t.frontmatter.years,status:t.frontmatter.status,institution:t.frontmatter.institutions,description:t.frontmatter.description,colorSchema:t.frontmatter.tileTextColorScheme,bgImage:n.createElement(T.G,{image:(0,T.d)(t.frontmatter.tileImage),alt:"tile image",style:{pointEvents:"none",zIndex:"40"}}),tags:{tools:t.frontmatter.keywords.tools,topics:t.frontmatter.keywords.topics}}))}))))},A=i.default.main.withConfig({displayName:"pages__FrontPage",componentId:"sc-ifild7-0"})([".header1{"," font-size:48px;margin-bottom:32px;}.p1{"," font-size:18px;line-height:1.6;}.intro-by-day{"," letter-spacing:-1px;font-weight:400;font-size:32px;line-height:1.4;}.intro-by-night{"," letter-spacing:-1px;font-weight:400;font-size:32px;line-height:1.4;color:var(--neon-purple);}.website-overview-description{"," font-size:24px;span,a{"," color:var(--neon-purple);font-weight:600;}}.bold{font-weight:500;}"],c.Z.fonts.display,c.Z.fonts.sans,c.Z.fonts.display,c.Z.fonts.code,c.Z.fonts.display,c.Z.fonts.code),L=i.default.span.withConfig({displayName:"pages__Bold600",componentId:"sc-ifild7-1"})(["font-weight:600;"]),D=function(e){return n.createElement(a.Z,{location:e.location},n.createElement(A,null,n.createElement(l.Z,null,n.createElement(m.Z,{flow:"row wrap",grow:1},n.createElement(m.Z,null,n.createElement("h1",{className:"header1",style:{color:"black"}},"Hi, I'm Niklas Buhl")),n.createElement(m.Z,null,n.createElement("p",{className:"intro-by-day"},"I work as a"," ",n.createElement("span",{style:{fontWeight:"600"}},"Full-stack Web Application Developer"),n.createElement("br",null),"at"," ",n.createElement("a",{href:"",style:{color:"var(--soft-black)"}},"IBM Client Innovation Center")," ","by day."),n.createElement("p",{className:"intro-by-day"},"I studied Embedded Systems Engineering",n.createElement("br",null),"and Design Engineering.")),n.createElement(m.Z,{contentPosition:c.Z.positions.centerDown},n.createElement("p",{className:"intro-by-night"},"By night I am a ",n.createElement(L,null,"creative coder"),", new media artisan, maker, environmentalist and technology literacy advocate.")),n.createElement(m.Z,{flow:"row",grow:1,contentPosition:c.Z.positions.centerDown},n.createElement(k,{scrollToId:"website-introduction",hideOnScroll:480,offset:108})))),n.createElement(l.Z,null,n.createElement("h1",{className:"header1",id:"website-introduction"},"Website Introduction"),n.createElement("p",{className:"website-overview-description"},"Would you like to ",n.createElement(r.rU,{to:"/workwithme"},"/work with me"),"? I am currently employed by IBM, we are always open for project leads. In my spare time I do non-work related projects. If you have an idea please do not hesitate to reach out."),n.createElement("p",{className:"website-overview-description",style:{}},"Here are some of my"," ",n.createElement(g.Z,{scrollToId:"featured-projects",offset:108,style:{width:"300px"}},n.createElement("span",{style:{textDecoration:"underline"}},"featured projects"),n.createElement(I(),{style:{width:"12px",maxWidth:"12px",marginLeft:"8px",marginRight:"4px"}})),". You can explore all of my ",n.createElement(r.rU,{to:"/projects"},"/projects")," ","here."),n.createElement("p",{className:"website-overview-description"},"You can read more ",n.createElement(r.rU,{to:"/about"},"/about")," me or view my"," ",n.createElement(r.rU,{to:"/cv"},"/cv"),"."),n.createElement("p",{className:"website-overview-description"},"Would you like to get in touch? You can find my"," ",n.createElement(r.rU,{to:"/contact"},"/contact")," details here. You can always reach me and"," ",n.createElement("a",{href:"mailto:"+P.Z.getWorkEmail()},"Say Hello",n.createElement(Z(),{style:{display:"flex-inline",position:"relative",maxWidth:"14px",marginLeft:"8px",marginRight:"4px",top:"2px"}})),"."),n.createElement("p",{className:"website-overview-description"},"Except when I am in the wild, preferably catching waves.")),n.createElement(l.Z,null,n.createElement(s.Z,null,n.createElement("h1",{className:"header1",id:"featured-projects"},"Featured Projects"),n.createElement(z,null))),n.createElement(l.Z,{id:"development-pages"},n.createElement(s.Z,null,n.createElement("h1",{className:"header1"},"Always Tinkering"),n.createElement("p",null,"This website is (always) under (re)construction. I get new ideas, test things out. This is an overview are my development pages."),n.createElement("p",{style:{marginBottom:"48px"}},"DISCLAIMER Some of them might be broken and crash the website, then please just refresh the page or go to the front page."),n.createElement(S,null)))))}},2675:function(e,t,o){var n=o(7294);function a(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".arrow-02-scroll-animation-1{fill:#4920f5;}")),n.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:1},n.createElement("g",{id:"icons"},[n.createElement("rect",{className:"arrow-02-scroll-animation-1",x:"1.96",y:"1.96",width:"1.96",height:"1.96",key:0}),n.createElement("rect",{className:"arrow-02-scroll-animation-1",x:"3.92",y:"3.92",width:"1.96",height:"1.96",key:1}),n.createElement("rect",{className:"arrow-02-scroll-animation-1",x:"1.96",y:"5.88",width:"1.96",height:"1.96",key:2}),n.createElement("rect",{className:"arrow-02-scroll-animation-1",width:"1.96",height:"1.96",key:3}),n.createElement("rect",{className:"arrow-02-scroll-animation-1",y:"7.84",width:"1.96",height:"1.96",key:4})]))])}a.defaultProps={viewBox:"0 0 5.88 9.8"},e.exports=a,a.default=a},5824:function(e,t,o){var n=o(7294);function a(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".arrow-04-down-front-page-1{fill:#4920f5;}.arrow-04-down-front-page-2{fill:none;stroke:#4920f5;stroke-linecap:square;stroke-miterlimit:10;stroke-width:1.96px;}")),n.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:1},n.createElement("g",{id:"icons"},[n.createElement("rect",{className:"arrow-04-down-front-page-1",x:"5.88",y:"7.84",width:"1.96",height:"1.96",transform:"translate(15.68 1.96) rotate(90)",key:0}),n.createElement("rect",{className:"arrow-04-down-front-page-1",x:"3.92",y:"9.8",width:"1.96",height:"1.96",transform:"translate(15.68 5.88) rotate(90)",key:1}),n.createElement("rect",{className:"arrow-04-down-front-page-1",x:"1.96",y:"7.84",width:"1.96",height:"1.96",transform:"translate(11.76 5.88) rotate(90)",key:2}),n.createElement("rect",{className:"arrow-04-down-front-page-1",x:"7.84",y:"5.88",width:"1.96",height:"1.96",transform:"translate(15.68 -1.96) rotate(90)",key:3}),n.createElement("rect",{className:"arrow-04-down-front-page-1",y:"5.88",width:"1.96",height:"1.96",transform:"translate(7.84 5.88) rotate(90)",key:4}),n.createElement("line",{className:"arrow-04-down-front-page-2",x1:"4.9",y1:"4.9",x2:"4.9",y2:"0.98",key:5})]))])}a.defaultProps={viewBox:"0 0 9.8 11.76"},e.exports=a,a.default=a},224:function(e,t,o){var n=o(7294);function a(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".open-mail-01-front-page-1,.open-mail-01-front-page-2{fill:none;stroke:#4920f5;stroke-miterlimit:10;stroke-width:1.6px;}.open-mail-01-front-page-2{stroke-linecap:square;}")),n.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:1},n.createElement("g",{id:"icons"},[n.createElement("line",{className:"open-mail-01-front-page-1",x1:"4.6",y1:"6.11",x2:"9.73",y2:"0.98",key:0}),n.createElement("line",{className:"open-mail-01-front-page-2",x1:"9.73",y1:"0.98",x2:"6.05",y2:"0.98",key:1}),n.createElement("line",{className:"open-mail-01-front-page-2",x1:"9.73",y1:"0.98",x2:"9.73",y2:"4.66",key:2}),n.createElement("polyline",{className:"open-mail-01-front-page-2",points:"9.73 9.81 7.67 9.81 3.99 13.48 3.99 9.81 3.99 9.77 0.98 9.77 0.98 1.02",key:3})]))])}a.defaultProps={viewBox:"0 0 10.71 15.85"},e.exports=a,a.default=a},348:function(e,t,o){var n=o(7294);function a(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".mouse-01-scroll-animation-1{fill:none;stroke:#5301ff;stroke-miterlimit:10;stroke-width:1.96px;}")),n.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:1},n.createElement("g",{id:"icons"},[n.createElement("rect",{className:"mouse-01-scroll-animation-1",x:"0.98",y:"0.98",width:"16.44",height:"26.39",key:0}),n.createElement("line",{className:"mouse-01-scroll-animation-1",x1:"9.2",y1:"5.43",x2:"9.2",y2:"9.35",key:1})]))])}a.defaultProps={viewBox:"0 0 18.4 28.35"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-index-js-730d835f39febcdbcdaf.js.map