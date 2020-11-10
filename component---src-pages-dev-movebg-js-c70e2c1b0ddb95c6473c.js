(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    "/rLW": function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t("dI71"),
        o = t("q1tI"),
        i = t.n(o),
        r = (t("nDTf"), t("BEva")),
        c = t("BJ7y"),
        u = (t("7p3S"), t("vOnD")),
        m = t("r1fl"),
        d = t.n(m),
        l = u.b.div.withConfig({
          displayName: "MovingBackground__PositionWrap",
          componentId: "dulaun-0",
        })([
          "width:100%;height:40%;overflow:hidden;display:flex;background-color:coral;",
        ]),
        p = u.b.div.withConfig({
          displayName: "MovingBackground__BackgroundWrap",
          componentId: "dulaun-1",
        })(
          [
            "",
            " --image-x:0;--image-y:0;display:flex;background-image:url(",
            ");background-repeat:no-repeat;background-size:calc(100% + 2 * ",
            ");background-position:center;margin:-",
            ";width:calc(100% + 2 * ",
            ");transform:translate( calc(var(--image-x)),calc(var(--image-y)) );transition:transform 0.1s;",
          ],
          function (e) {
            return e.maxMovement;
          },
          d.a,
          function (e) {
            return e.maxMovement;
          },
          function (e) {
            return e.maxMovement;
          },
          function (e) {
            return e.maxMovement;
          }
        ),
        s = u.b.div.withConfig({
          displayName: "MovingBackground__SizeWrap",
          componentId: "dulaun-2",
        })([""]),
        g = u.b.div.withConfig({
          displayName: "MovingBackground__ContentWrap",
          componentId: "dulaun-3",
        })([""]),
        f = (function (e) {
          function n() {
            return e.call(this) || this;
          }
          Object(a.a)(n, e);
          var t = n.prototype;
          return (
            (t.componentDidMount = function () {
              var e = this;
              (this.root = document.documentElement),
                (this.image = document.querySelector(
                  "#image-" + this.props.id
                )),
                this.image.addEventListener("mousemove", function (n) {
                  var t = n.pageX - e.image.offsetLeft,
                    a = n.pageY - e.image.offsetTop;
                  (t = e.image.offsetWidth / 2 - t),
                    (a = e.image.offsetHeight / 2 - a),
                    (t /= 20),
                    (a /= 20),
                    e.image.style.setProperty("--image-x", -t + "px"),
                    e.image.style.setProperty("--image-y", -a + "px");
                });
            }),
            (t.render = function () {
              return i.a.createElement(
                l,
                null,
                i.a.createElement(
                  p,
                  { id: "image-" + this.props.id, maxMovement: "5%" },
                  i.a.createElement(
                    s,
                    null,
                    i.a.createElement(g, null, this.props.children)
                  )
                )
              );
            }),
            n
          );
        })(o.Component),
        v = (function (e) {
          function n() {
            return e.call(this) || this;
          }
          Object(a.a)(n, e);
          var t = n.prototype;
          return (
            (t.didComponentMount = function () {}),
            (t.render = function () {
              return i.a.createElement(
                r.a,
                null,
                i.a.createElement(
                  c.a,
                  null,
                  i.a.createElement(f, { id: "1337" })
                )
              );
            }),
            n
          );
        })(o.Component);
      n.default = v;
    },
  },
]);
//# sourceMappingURL=component---src-pages-dev-movebg-js-c70e2c1b0ddb95c6473c.js.map
