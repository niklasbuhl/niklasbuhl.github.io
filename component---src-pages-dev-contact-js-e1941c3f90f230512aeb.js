(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[2004],{7681:function(e,t,n){"use strict";var r=n(7294),a=n(9925),l=n(2273),i=a.default.div.withConfig({displayName:"FullPageSection__ContentPositionWrap",componentId:"sc-165qusv-0"})(["display:flex;min-width:100%;"," ",""],l.Z.centerCol,(function(e){return e.background})),o=a.default.section.withConfig({displayName:"FullPageSection__ContentContainer",componentId:"sc-165qusv-1"})(["display:flex;flex-flow:",";width:100%;max-width:var(--maxPageWidth);min-height:calc(100vh - (var(--contentMargin) * 2));"," margin-top:var(--contentMargin);margin-bottom:var(--contentMargin);"],(function(e){return e.flow?e.flow:"column"}),(function(e){return e.contentPosition?e.contentPosition:""}));t.Z=function(e){return r.createElement(i,{background:e.background,id:e.id},r.createElement(o,{flow:e.flow,contentPosition:e.contentPosition},e.children))}},6041:function(e,t,n){"use strict";var r=n(7294),a=n(7384),l=n(7681),i=n(9414),o=n(2273),c=n(9925),s=n(5444),p=n(7308),u=n.n(p),d=(0,c.default)(s.rU).withConfig({displayName:"dev-page-layout__BackLink",componentId:"sc-1nett9h-0"})(["all:unset;"," font-size:14px;margin:var(--halfGutter);color:var(--dark-gray);display:flex;&:hover{cursor:pointer;color:var(--super-dark-gray);}&:active{color:var(--neon-green);}"],o.Z.fonts.code);t.Z=function(e){return r.createElement(a.Z,{location:e.location},r.createElement(l.Z,null,r.createElement(i.Z,null,r.createElement(d,{to:"/#development-pages"},r.createElement(u(),{style:{maxWidth:"10px",marginRight:"8px",marginTop:"2px"}}),"Back to Development Overview"," "),r.createElement("h1",null,e.title),e.children)))}},7384:function(e,t,n){"use strict";var r=n(7294),a=n(2273),l=n(1078),i=n(1561),o=n(2411),c=n(7753),s=n(1941);t.Z=function(e){return a.Z.SetCSSGlobals(),r.createElement(r.Fragment,null,r.createElement(l.Z,null),r.createElement(i.Z,{location:e.location}),r.createElement(s.Z,{pageCSS:e.pageCSS},e.children),r.createElement(o.Z,null),r.createElement(c.Z,null))}},7822:function(e,t,n){"use strict";n.r(t);var r=n(7326),a=n(4578),l=n(7294),i=n(9925),o=n(5444),c=n(6041),s=n(7681),p=(0,i.css)(["transform:rotateX(16deg) rotateY(-184deg);"]),u=(0,i.css)(["transform:rotateX(16deg) rotateY(4deg);"]),d=(0,i.css)(["transform:rotateX(0deg) rotateY(0deg);"]),m=(0,i.css)(["box-shadow:rgba(0,0,0,0.024) 0px 0px 0px 1px,rgba(0,0,0,0.05) 0px 1px 0px 0px,rgba(0,0,0,0.03) 0px 0px 8px 0px,rgba(0,0,0,0.1) 0px 20px 30px 0px;"]),f=i.default.div.withConfig({displayName:"contact__FlipCard",componentId:"sc-1y2h84a-0"})(["&.size{background-color:transparent;width:8.5cm;height:5.5cm;perspective:800px;}&.content{position:relative;width:100%;height:100%;transition:transform 1s;transform-style:preserve-3d;","}&.size .content{","}&.size:hover .content{","}&.front,.back{position:absolute;width:100%;height:100%;backface-visibility:hidden;}&.front,.back,.content{border-radius:8px;}&.front{background-color:var(--hard-white);}&.back{transform:rotateY(180deg);background-color:var(--neon-yellow);}"],m,(function(e){return e.flipped?""+p:""+u}),d),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return l.createElement(f,{className:"size",flipped:this.props.flipped},l.createElement(f,{className:"content",flipped:this.props.flipped},l.createElement(f,{className:"front"},l.createElement("h1",null,"Niklas Buhl"),l.createElement("p",null,"Tel: 60 19 87 44"),l.createElement("p",null,"Mail: niklas.buhl-cic@ibm.com")),l.createElement(f,{className:"back"},l.createElement("h1",null,"Graphics"))))},t}(l.Component),g=function(e){function t(){var t;return(t=e.call(this)||this).state={flipBusinessCard:!1},t.flipBusinessCard=t.flipBusinessCard.bind((0,r.Z)(t)),t}(0,a.Z)(t,e);var n=t.prototype;return n.flipBusinessCard=function(){console.log("Flip business card."),this.setState((function(e){return{flipBusinessCard:!e.flipBusinessCard}}))},n.render=function(){return l.createElement(c.Z,{title:"Examples",location:this.props.location},l.createElement(s.Z,null,l.createElement(o.rU,{to:"/dev"},"Back to Development Overview"),l.createElement("h1",null,"Contact Card"),l.createElement(h,{flipped:this.state.flipBusinessCard}),l.createElement("button",{type:"button",onClick:this.flipBusinessCard,style:{height:"48px",width:"96px"}},"Flip")))},t}(l.Component);t.default=g},7308:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:1px;}.cls-2{stroke-linecap:square;}")),r.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:1},r.createElement("g",{id:"icons"},[r.createElement("path",{className:"cls-1",d:"M1.4,6.89H9.86V0",key:0}),r.createElement("line",{className:"cls-2",x1:"1.4",y1:"6.89",x2:"4",y2:"9.49",key:1}),r.createElement("line",{className:"cls-2",x1:"1.4",y1:"6.89",x2:"4",y2:"4.28",key:2})]))])}a.defaultProps={viewBox:"0 0 10.85 10.89"},e.exports=a,a.default=a},7326:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-dev-contact-js-e1941c3f90f230512aeb.js.map