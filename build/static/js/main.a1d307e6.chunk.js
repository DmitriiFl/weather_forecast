(this.webpackJsonpweather_forecast =
  this.webpackJsonpweather_forecast || []).push([
  [0],
  {
    193: function (t, e, r) {},
    194: function (t, e, r) {},
    351: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(0),
        c = r.n(n),
        a = r(36),
        i = r.n(a),
        u = (r(193), r(194), r(56)),
        o = r.n(u),
        s = r(161),
        h = r(162),
        j = r.n(h),
        b = (function () {
          var t = Object(s.a)(
            o.a.mark(function t(e) {
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        "7e5fa846ad285bc10f4916311a521180",
                        (t.next = 3),
                        j.a
                          .get(
                            "https://api.openweathermap.org/data/2.5/forecast?q="
                              .concat(e, "&appid=")
                              .concat(
                                "7e5fa846ad285bc10f4916311a521180",
                                "&units=metric"
                              )
                          )
                          .then(function (t) {
                            return t.data.list.map(function (t) {
                              return {
                                name: t.dt_txt,
                                temperature: t.main.temp,
                              };
                            });
                          })
                          .catch(function (t) {
                            return Promise.reject(t);
                          })
                      );
                    case 3:
                      return t.abrupt("return", t.sent);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        f = "SET_CITY",
        d = "SET_WEATHER",
        p = "SET_ERROR",
        O = "REMOVE_ERROR",
        l = function (t) {
          return { type: d, weather: t };
        },
        m = r(37),
        w = r(13),
        x = Object(m.b)(function (t) {
          return { city: t.city, error: t.error, weather: t.weather };
        })(function (t) {
          var e = t.city,
            r = t.error,
            n = t.dispatch,
            c = function (t) {
              n(
                (function (t) {
                  return { type: f, city: t };
                })(t)
              );
            },
            a = function (t) {
              t.preventDefault(),
                b(e)
                  .then(function (t) {
                    n(l(t)), n({ type: O });
                  })
                  .catch(function (t) {
                    n(
                      (function (t) {
                        return { type: p, error: t };
                      })(t)
                    ),
                      n(l([]));
                  });
            };
          return Object(w.jsxs)("div", {
            className: "search",
            children: [
              Object(w.jsxs)("form", {
                children: [
                  Object(w.jsx)("input", {
                    onChange: function (t) {
                      return c(t.target.value);
                    },
                    type: "text",
                    name: "city",
                    placeholder: "Enter city name",
                    value: e,
                  }),
                  Object(w.jsx)("button", {
                    type: "submit",
                    onClick: function (t) {
                      return a(t);
                    },
                    children: "Search",
                  }),
                ],
              }),
              !1 !== r &&
                Object(w.jsx)("div", {
                  className: "error",
                  children: "".concat(
                    (function (t) {
                      var e = "".concat(t.name, ". ").concat(t.message, ".");
                      return (
                        t.response.status < 500 &&
                          (e += " The city was not found"),
                        e
                      );
                    })(r)
                  ),
                }),
            ],
          });
        }),
        y = r(358),
        v = r(353),
        g = r(181),
        E = r(182),
        T = r(70),
        R = r(67),
        _ = r(184),
        C = Object(m.b)(function (t) {
          return { weather: t.weather };
        })(function (t) {
          var e = t.weather;
          return Object(w.jsx)("div", {
            className: "chart",
            children: Object(w.jsx)(y.a, {
              width: "100%",
              height: 300,
              children: Object(w.jsxs)(v.a, {
                data: e,
                margin: { top: 5, right: 30, left: 20, bottom: 5 },
                children: [
                  Object(w.jsx)(g.a, { dataKey: "name" }),
                  Object(w.jsx)(E.a, { width: 20 }),
                  Object(w.jsx)(T.a, {}),
                  Object(w.jsx)(R.a, {}),
                  Object(w.jsx)(_.a, {
                    dataKey: "temperature",
                    fill: "#82ca9d",
                    name: "Temperature",
                    barGap: 200,
                  }),
                ],
              }),
            }),
          });
        });
      var S = Object(m.b)(function (t) {
          return { weather: t.weather };
        })(function (t) {
          var e = t.weather;
          return Object(w.jsxs)("div", {
            className: "container",
            children: [
              Object(w.jsx)(x, {}),
              e.length > 0 && Object(w.jsx)(C, {}),
            ],
          });
        }),
        k = function (t) {
          t &&
            t instanceof Function &&
            r
              .e(3)
              .then(r.bind(null, 359))
              .then(function (e) {
                var r = e.getCLS,
                  n = e.getFID,
                  c = e.getFCP,
                  a = e.getLCP,
                  i = e.getTTFB;
                r(t), n(t), c(t), a(t), i(t);
              });
        },
        F = r(80),
        N = r(34),
        I = { city: "", weather: [], error: !1 },
        P = Object(F.b)(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : I,
            e = arguments.length > 1 ? arguments[1] : void 0;
          switch (e.type) {
            case f:
              return Object(N.a)(Object(N.a)({}, t), {}, { city: e.city });
            case d:
              return Object(N.a)(
                Object(N.a)({}, t),
                {},
                { weather: e.weather }
              );
            case p:
              return Object(N.a)(Object(N.a)({}, t), {}, { error: e.error });
            case O:
              return Object(N.a)(Object(N.a)({}, t), {}, { error: !1 });
            default:
              return t;
          }
        });
      i.a.render(
        Object(w.jsx)(c.a.StrictMode, {
          children: Object(w.jsx)(m.a, {
            store: P,
            children: Object(w.jsx)(S, {}),
          }),
        }),
        document.getElementById("root")
      ),
        k();
    },
  },
  [[351, 1, 2]],
]);
//# sourceMappingURL=main.a1d307e6.chunk.js.map
