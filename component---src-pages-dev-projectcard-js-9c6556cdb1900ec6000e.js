(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[7819],{2716:function(e,t,o){"use strict";var n=o(7294),r=o(9925).default.div.withConfig({displayName:"BackgroundColor__Container",componentId:"sc-1gocrb7-0"})(["height:100%;width:100%;background:",";"],(function(e){return e.bgColor}));t.Z=function(e){return n.createElement(r,{bgColor:e.bgColor},e.children)}},7681:function(e,t,o){"use strict";var n=o(7294),r=o(9925),c=o(2273),a=r.default.div.withConfig({displayName:"FullPageSection__ContentPositionWrap",componentId:"sc-165qusv-0"})(["display:flex;min-width:100%;"," ",""],c.Z.centerCol,(function(e){return e.background})),i=r.default.section.withConfig({displayName:"FullPageSection__ContentContainer",componentId:"sc-165qusv-1"})(["display:flex;flex-flow:",";width:100%;max-width:var(--maxPageWidth);min-height:calc(100vh - (var(--contentMargin) * 2));"," margin-top:var(--contentMargin);margin-bottom:var(--contentMargin);"],(function(e){return e.flow?e.flow:"column"}),(function(e){return e.contentPosition?e.contentPosition:""}));t.Z=function(e){return n.createElement(a,{background:e.background,id:e.id},n.createElement(i,{flow:e.flow,contentPosition:e.contentPosition},e.children))}},4031:function(e,t,o){"use strict";var n=o(7294),r=o(9925),c=r.default.div.withConfig({displayName:"Aspect__AspectContainer",componentId:"sc-bj15ce-0"})(["display:flex;width:100%;position:relative;padding-top:",";"],(function(e){return e.aspect})),a=r.default.div.withConfig({displayName:"Aspect__ContentContainer",componentId:"sc-bj15ce-1"})(["display:flex;position:absolute;top:0;left:0;bottom:0;right:0;"]);t.Z=function(e){var t=100*e.height/e.width+"%";return n.createElement(c,{aspect:t},n.createElement(a,null,e.children))}},6041:function(e,t,o){"use strict";var n=o(7294),r=o(7384),c=o(7681),a=o(9414),i=o(2273),l=o(9925),s=o(5444),d=o(7308),m=o.n(d),p=(0,l.default)(s.rU).withConfig({displayName:"dev-page-layout__BackLink",componentId:"sc-1nett9h-0"})(["all:unset;"," font-size:14px;margin:var(--halfGutter);color:var(--dark-gray);display:flex;&:hover{cursor:pointer;color:var(--super-dark-gray);}&:active{color:var(--neon-green);}"],i.Z.fonts.code);t.Z=function(e){return n.createElement(r.Z,{location:e.location},n.createElement(c.Z,null,n.createElement(a.Z,null,n.createElement(p,{to:"/#development-pages"},n.createElement(m(),{style:{maxWidth:"10px",marginRight:"8px",marginTop:"2px"}}),"Back to Development Overview"," "),n.createElement("h1",null,e.title),e.children)))}},7384:function(e,t,o){"use strict";var n=o(7294),r=o(2273),c=o(1078),a=o(1561),i=o(2411),l=o(7753),s=o(1941);t.Z=function(e){return r.Z.SetCSSGlobals(),n.createElement(n.Fragment,null,n.createElement(c.Z,null),n.createElement(a.Z,{location:e.location}),n.createElement(s.Z,{pageCSS:e.pageCSS},e.children),n.createElement(i.Z,null),n.createElement(l.Z,null))}},4466:function(e,t,o){"use strict";o.r(t);var n=o(7294),r=o(9925),c=(o(2716),o(4031)),a=o(9414),i=o(4669),l=o(5444),s=o(6041),d=o(2273),m=o(6125),p=r.default.div.withConfig({displayName:"projectcard__ProjectContent",componentId:"sc-arm1oh-0"})(["display:flex;flex-flow:column;margin:var(--gutter);width:100%;height:calc(100% - 2 * var(--gutter));z-index:70;"]),f=r.default.div.withConfig({displayName:"projectcard__ZoomOuter",componentId:"sc-arm1oh-1"})(["display:flex;width:100%;height:100%;transition:all 200ms ease-out 100ms;z-index:70;:hover{margin:calc(var(--halfGutter) * -1);width:calc(100% + var(--gutter));height:calc(100% + var(--gutter));}"]),h=r.default.div.withConfig({displayName:"projectcard__ZoomInner",componentId:"sc-arm1oh-2"})(["display:flex;width:100%;height:100%;transition:all 200ms ease-out 100ms;z-index:70;:hover{padding:var(--halfGutter);width:calc(100% - var(--gutter));height:calc(100% - var(--gutter));}"]),u=r.default.div.withConfig({displayName:"projectcard__ImageContainer",componentId:"sc-arm1oh-3"})(["position:relative;width:100%;height:100%;overflow:hidden;"]),g=r.default.div.withConfig({displayName:"projectcard__ContentContainer",componentId:"sc-arm1oh-4"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),w=(0,r.default)(l.rU).withConfig({displayName:"projectcard__ProjectLink",componentId:"sc-arm1oh-5"})(["display:flex;width:100%;all:unset;&:hover{cursor:pointer;}"]),v=r.default.h1.withConfig({displayName:"projectcard__ProjectTitle",componentId:"sc-arm1oh-6"})([""," "," font-size:24px;margin:0;margin-bottom:8px;color:",";"],d.Z.fonts.display,d.Z.shadows.softShadow,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),y=r.default.p.withConfig({displayName:"projectcard__ProjectSubtitle",componentId:"sc-arm1oh-7"})([""," "," letter-spacing:-0.4px;font-size:14px;margin:0;color:",";"],d.Z.fonts.display,d.Z.shadows.softShadow,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),C=(0,r.css)([""," "," font-size:10px;margin:0;"],d.Z.fonts.code,d.Z.shadows.softShadow),x=r.default.p.withConfig({displayName:"projectcard__TypeTag",componentId:"sc-arm1oh-8"})([""," margin-right:8px;color:",";"],C,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),E=r.default.p.withConfig({displayName:"projectcard__StatusTag",componentId:"sc-arm1oh-9"})([""," &.active{color:var(--neon-green);}&.inactive{color:var(--neon-yellow);}"],C),S=r.default.p.withConfig({displayName:"projectcard__YearTag",componentId:"sc-arm1oh-10"})([""," margin-left:8px;color:",";"],C,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),_=r.default.p.withConfig({displayName:"projectcard__InstitutionTag",componentId:"sc-arm1oh-11"})([""," color:",";"],C,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),b=r.default.p.withConfig({displayName:"projectcard__TopicTag",componentId:"sc-arm1oh-12"})([""," margin-right:8px;color:",";"],C,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),Z=r.default.p.withConfig({displayName:"projectcard__ToolTag",componentId:"sc-arm1oh-13"})([""," margin-right:8px;color:",";"],C,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),k=r.default.p.withConfig({displayName:"projectcard__Description",componentId:"sc-arm1oh-14"})([""," font-size:12px;margin:0;margin-bottom:8px;color:",";"],d.Z.fonts.sans,(function(e){return e.colorScheme?e.colorScheme.textColor:"var(--soft-black)"})),I=function(e){return n.createElement(w,{to:e.to?e.to:"/"},n.createElement(c.Z,{width:4,height:3},n.createElement(a.Z,null,n.createElement(f,null,n.createElement(u,null,e.bgImage?e.bgImage:"",n.createElement(g,null,n.createElement(h,null,n.createElement(p,null,n.createElement(i.Z,{flow:"row",style:{height:"20%",justifyContent:"space-between"},grow:1},n.createElement(i.Z,{flow:"row"},n.createElement(x,{colorScheme:e.colorScheme},e.type?e.type:""),n.createElement(E,{className:e.status?e.status:"",colorScheme:e.colorScheme},e.status&&e.status)),n.createElement(i.Z,{flow:"row"},n.createElement(_,{colorScheme:e.colorScheme},e.institution&&e.institution),e.years&&e.years.map((function(t){return n.createElement(S,{key:t,colorScheme:e.colorScheme},t)})))),n.createElement(i.Z,{flow:"column",style:{height:"40%"}},n.createElement(v,{colorScheme:e.colorScheme},e.title&&e.title),n.createElement(y,{colorScheme:e.colorScheme},e.subtitle&&e.subtitle)),n.createElement(i.Z,{flow:"row",style:{height:"30%"},contentPosition:d.Z.positions.leftDown,responsive:d.Z.responsive.hideUnder,hideUnder:300,grow:1},n.createElement(k,{colorScheme:e.colorScheme},e.description&&e.description)),n.createElement(i.Z,{flow:"row wrap",style:{height:"10%"},contentPosition:d.Z.positions.leftDown,grow:1},e.tags.topics&&e.tags.topics.map((function(t){return n.createElement(b,{key:t,colorScheme:e.colorScheme},t)})),e.tags.tools&&e.tags.tools.map((function(t){return n.createElement(Z,{key:t,colorScheme:e.colorScheme},t)})))))))))))},j={textColor:"var(--hard-white)"};t.default=function(e){return n.createElement(s.Z,{location:e.location,title:"Project Card"},n.createElement(i.Z,{col:4,grow:"1"},n.createElement(I,{type:"website",title:"5 Axis Laser Cutter",subtitle:"A project about react frontend",years:[2021,2022],status:"active",institution:"CIC",description:"A project to build react frontend website.",colorScheme:j,bgImage:n.createElement(m.S,{src:"../../content/projects/five-axis-laser-cutter/tile-image-01.png",alt:"cafe",style:{position:"relative",top:"0",left:"0",width:"100%",zIndex:"40",height:"content-fit",pointerEvents:"none"},__imageData:o(6778)}),tags:{tools:["react","gatsby","styled-components","javascript","html5","css3"],topics:["portfolio","cv"]}})))}},7308:function(e,t,o){var n=o(7294);function r(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:1px;}.cls-2{stroke-linecap:square;}")),n.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:1},n.createElement("g",{id:"icons"},[n.createElement("path",{className:"cls-1",d:"M1.4,6.89H9.86V0",key:0}),n.createElement("line",{className:"cls-2",x1:"1.4",y1:"6.89",x2:"4",y2:"9.49",key:1}),n.createElement("line",{className:"cls-2",x1:"1.4",y1:"6.89",x2:"4",y2:"4.28",key:2})]))])}r.defaultProps={viewBox:"0 0 10.85 10.89"},e.exports=r,r.default=r},6778:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080818","images":{"fallback":{"src":"/static/d80c10f570e6784c9fd1d935d3f45011/6addd/tile-image-01.png","srcSet":"/static/d80c10f570e6784c9fd1d935d3f45011/4e4d4/tile-image-01.png 100w,\\n/static/d80c10f570e6784c9fd1d935d3f45011/2c67b/tile-image-01.png 200w,\\n/static/d80c10f570e6784c9fd1d935d3f45011/6addd/tile-image-01.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/d80c10f570e6784c9fd1d935d3f45011/f6ea0/tile-image-01.webp 100w,\\n/static/d80c10f570e6784c9fd1d935d3f45011/b5535/tile-image-01.webp 200w,\\n/static/d80c10f570e6784c9fd1d935d3f45011/f5c71/tile-image-01.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-dev-projectcard-js-9c6556cdb1900ec6000e.js.map