(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    xT29: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("JX7q"),
        c = n("dI71"),
        o = n("q1tI"),
        r = n.n(o),
        i = n("vOnD"),
        s = n("nDTf"),
        l = n("BEva"),
        p = n("BJ7y"),
        d =
          (n("7p3S"),
          Object(i.a)(["transform:rotateX(16deg) rotateY(-184deg);"])),
        m = Object(i.a)(["transform:rotateX(16deg) rotateY(4deg);"]),
        h = Object(i.a)(["transform:rotateX(0deg) rotateY(0deg);"]),
        u = Object(i.a)([
          "box-shadow:rgba(0,0,0,0.024) 0px 0px 0px 1px,rgba(0,0,0,0.05) 0px 1px 0px 0px,rgba(0,0,0,0.03) 0px 0px 8px 0px,rgba(0,0,0,0.1) 0px 20px 30px 0px;",
        ]),
        f = i.b.div.withConfig({
          displayName: "contact__FlipCard",
          componentId: "sc-1y2h84a-0",
        })(
          [
            "&.size{background-color:transparent;width:8.5cm;height:5.5cm;perspective:800px;}&.content{position:relative;width:100%;height:100%;transition:transform 1s;transform-style:preserve-3d;",
            "}&.size .content{",
            "}&.size:hover .content{",
            "}&.front,.back{position:absolute;width:100%;height:100%;backface-visibility:hidden;}&.front,.back,.content{border-radius:4px;}&.front{background-color:var(--hard-white);}&.back{transform:rotateY(180deg);background-color:var(--neon-yellow);}",
          ],
          u,
          function (e) {
            return e.flipped ? "" + d : "" + m;
          },
          h
        ),
        b = (function (e) {
          function t() {
            return e.call(this) || this;
          }
          return (
            Object(c.a)(t, e),
            (t.prototype.render = function () {
              return r.a.createElement(
                f,
                { className: "size", flipped: this.props.flipped },
                r.a.createElement(
                  f,
                  { className: "content", flipped: this.props.flipped },
                  r.a.createElement(
                    f,
                    { className: "front" },
                    r.a.createElement("h1", null, "Niklas Buhl"),
                    r.a.createElement("p", null, "Tel:"),
                    r.a.createElement("p", null, "Mail:")
                  ),
                  r.a.createElement(
                    f,
                    { className: "back" },
                    r.a.createElement("h1", null, "Billede")
                  )
                )
              );
            }),
            t
          );
        })(o.Component),
        y = i.b.div.withConfig({
          displayName: "contact__Element",
          componentId: "sc-1y2h84a-1",
        })(["display:flex;"]),
        _ = Object(i.b)(y).withConfig({
          displayName: "contact___StyledElement6",
          componentId: "sc-1y2h84a-2",
        })(["height:25%;", ""], function (e) {
          return e._css4;
        }),
        g = Object(i.b)(y).withConfig({
          displayName: "contact___StyledElement5",
          componentId: "sc-1y2h84a-3",
        })(["width:25%;", ""], function (e) {
          return e._css3;
        }),
        E = Object(i.b)(y).withConfig({
          displayName: "contact___StyledElement4",
          componentId: "sc-1y2h84a-4",
        })(["width:50%;", ""], function (e) {
          return e._css2;
        }),
        w = Object(i.b)(y).withConfig({
          displayName: "contact___StyledElement3",
          componentId: "sc-1y2h84a-5",
        })(["width:25%;"]),
        C = Object(i.b)(y).withConfig({
          displayName: "contact___StyledElement2",
          componentId: "sc-1y2h84a-6",
        })(["", ""], function (e) {
          return e._css;
        }),
        x = Object(i.b)(y).withConfig({
          displayName: "contact___StyledElement",
          componentId: "sc-1y2h84a-7",
        })(["height:25%;"]),
        v = Object(i.b)("h3").withConfig({
          displayName: "contact___StyledH",
          componentId: "sc-1y2h84a-8",
        })(["color:var(--gray);", ""], function (e) {
          return e._css5;
        }),
        N = (function (e) {
          function t() {
            var t;
            return (
              ((t = e.call(this) || this).state = { flipBusinessCard: !1 }),
              (t.flipBusinessCard = t.flipBusinessCard.bind(Object(a.a)(t))),
              t
            );
          }
          Object(c.a)(t, e);
          var n = t.prototype;
          return (
            (n.flipBusinessCard = function () {
              console.log("Flip business card."),
                this.setState(function (e) {
                  return { flipBusinessCard: !e.flipBusinessCard };
                });
            }),
            (n.render = function () {
              return r.a.createElement(
                l.a,
                null,
                r.a.createElement(
                  p.a,
                  {
                    innerStyle:
                      "\n            flex-direction: column;\n          ",
                  },
                  r.a.createElement(
                    x,
                    null,
                    r.a.createElement("h1", null, "Contact")
                  ),
                  r.a.createElement(
                    C,
                    { _css: "height: 50%;" },
                    r.a.createElement(w, null),
                    r.a.createElement(
                      E,
                      { _css2: s.a.position.centerCenter },
                      r.a.createElement(b, {
                        flipped: this.state.flipBusinessCard,
                      })
                    ),
                    r.a.createElement(
                      g,
                      { _css3: s.a.position.centerCenter },
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: this.flipBusinessCard,
                          style: { height: "48px", widht: "96px" },
                        },
                        "Flip"
                      )
                    )
                  ),
                  r.a.createElement(
                    _,
                    { _css4: s.a.position.centerCenter },
                    r.a.createElement(
                      "a",
                      { href: "../Niklas%20Buhl%20vCard.vcf" },
                      r.a.createElement(
                        v,
                        { _css5: s.a.shadow.hollow },
                        "Download vCard"
                      )
                    ),
                    r.a.createElement(
                      "p",
                      { className: "code" },
                      "Add me to your contacts"
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = N;
    },
  },
]);
//# sourceMappingURL=component---src-pages-dev-contact-js-835e9138419185edb605.js.map
