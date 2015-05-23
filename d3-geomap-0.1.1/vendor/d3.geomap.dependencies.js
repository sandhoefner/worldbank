! function() {
    function n(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }

    function t(n) {
        return null === n ? 0 / 0 : +n
    }

    function e(n) {
        return !isNaN(n)
    }

    function r(n) {
        return {
            left: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) < 0 ? r = i + 1 : u = i
                }
                return r
            },
            right: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) > 0 ? u = i : r = i + 1
                }
                return r
            }
        }
    }

    function u(n) {
        return n.length
    }

    function i(n) {
        for (var t = 1; n * t % 1;) t *= 10;
        return t
    }

    function o(n, t) {
        for (var e in t) Object.defineProperty(n.prototype, e, {
            value: t[e],
            enumerable: !1
        })
    }

    function a() {
        this._ = Object.create(null)
    }

    function c(n) {
        return (n += "") === da || n[0] === ma ? ma + n : n
    }

    function l(n) {
        return (n += "")[0] === ma ? n.slice(1) : n
    }

    function s(n) {
        return c(n) in this._
    }

    function f(n) {
        return (n = c(n)) in this._ && delete this._[n]
    }

    function h() {
        var n = [];
        for (var t in this._) n.push(l(t));
        return n
    }

    function g() {
        var n = 0;
        for (var t in this._) ++n;
        return n
    }

    function p() {
        for (var n in this._) return !1;
        return !0
    }

    function v() {
        this._ = Object.create(null)
    }

    function d(n, t, e) {
        return function() {
            var r = e.apply(t, arguments);
            return r === t ? n : r
        }
    }

    function m(n, t) {
        if (t in n) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e = 0, r = ya.length; r > e; ++e) {
            var u = ya[e] + t;
            if (u in n) return u
        }
    }

    function y() {}

    function M() {}

    function x(n) {
        function t() {
            for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
            return n
        }
        var e = [],
            r = new a;
        return t.on = function(t, u) {
            var i, o = r.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
                on: u
            })), n)
        }, t
    }

    function b() {
        ta.event.preventDefault()
    }

    function _() {
        for (var n, t = ta.event; n = t.sourceEvent;) t = n;
        return t
    }

    function w(n) {
        for (var t = new M, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = x(t);
        return t.of = function(e, r) {
            return function(u) {
                try {
                    var i = u.sourceEvent = ta.event;
                    u.target = n, ta.event = u, t[u.type].apply(e, r)
                } finally {
                    ta.event = i
                }
            }
        }, t
    }

    function S(n) {
        return xa(n, ka), n
    }

    function k(n) {
        return "function" == typeof n ? n : function() {
            return ba(n, this)
        }
    }

    function E(n) {
        return "function" == typeof n ? n : function() {
            return _a(n, this)
        }
    }

    function A(n, t) {
        function e() {
            this.removeAttribute(n)
        }

        function r() {
            this.removeAttributeNS(n.space, n.local)
        }

        function u() {
            this.setAttribute(n, t)
        }

        function i() {
            this.setAttributeNS(n.space, n.local, t)
        }

        function o() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
        }

        function a() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
        }
        return n = ta.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
    }

    function N(n) {
        return n.trim().replace(/\s+/g, " ")
    }

    function C(n) {
        return new RegExp("(?:^|\\s+)" + ta.requote(n) + "(?:\\s+|$)", "g")
    }

    function z(n) {
        return (n + "").trim().split(/^|\s+/)
    }

    function q(n, t) {
        function e() {
            for (var e = -1; ++e < u;) n[e](this, t)
        }

        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < u;) n[e](this, r)
        }
        n = z(n).map(L);
        var u = n.length;
        return "function" == typeof t ? r : e
    }

    function L(n) {
        var t = C(n);
        return function(e, r) {
            if (u = e.classList) return r ? u.add(n) : u.remove(n);
            var u = e.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", N(u + " " + n))) : e.setAttribute("class", N(u.replace(t, " ")))
        }
    }

    function T(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function u() {
            this.style.setProperty(n, t, e)
        }

        function i() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
        }
        return null == t ? r : "function" == typeof t ? i : u
    }

    function R(n, t) {
        function e() {
            delete this[n]
        }

        function r() {
            this[n] = t
        }

        function u() {
            var e = t.apply(this, arguments);
            null == e ? delete this[n] : this[n] = e
        }
        return null == t ? e : "function" == typeof t ? u : r
    }

    function D(n) {
        return "function" == typeof n ? n : (n = ta.ns.qualify(n)).local ? function() {
            return this.ownerDocument.createElementNS(n.space, n.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, n)
        }
    }

    function P() {
        var n = this.parentNode;
        n && n.removeChild(this)
    }

    function U(n) {
        return {
            __data__: n
        }
    }

    function j(n) {
        return function() {
            return Sa(this, n)
        }
    }

    function F(t) {
        return arguments.length || (t = n),
            function(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
    }

    function H(n, t) {
        for (var e = 0, r = n.length; r > e; e++)
            for (var u, i = n[e], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, e);
        return n
    }

    function O(n) {
        return xa(n, Aa), n
    }

    function Y(n) {
        var t, e;
        return function(r, u, i) {
            var o, a = n[i].update,
                c = a.length;
            for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
            return o
        }
    }

    function I(n, t, e) {
        function r() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$), delete this[o])
        }

        function u() {
            var u = c(t, ra(arguments));
            r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
        }

        function i() {
            var t, e = new RegExp("^__on([^.]+)" + ta.requote(n) + "$");
            for (var r in this)
                if (t = r.match(e)) {
                    var u = this[r];
                    this.removeEventListener(t[1], u, u.$), delete this[r]
                }
        }
        var o = "__on" + n,
            a = n.indexOf("."),
            c = Z;
        a > 0 && (n = n.slice(0, a));
        var l = Ca.get(n);
        return l && (n = l, c = V), a ? t ? u : r : t ? y : i
    }

    function Z(n, t) {
        return function(e) {
            var r = ta.event;
            ta.event = e, t[0] = this.__data__;
            try {
                n.apply(this, t)
            } finally {
                ta.event = r
            }
        }
    }

    function V(n, t) {
        var e = Z(n, t);
        return function(n) {
            var t = this,
                r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
        }
    }

    function X() {
        var n = ".dragsuppress-" + ++qa,
            t = "click" + n,
            e = ta.select(oa).on("touchmove" + n, b).on("dragstart" + n, b).on("selectstart" + n, b);
        if (za) {
            var r = ia.style,
                u = r[za];
            r[za] = "none"
        }
        return function(i) {
            if (e.on(n, null), za && (r[za] = u), i) {
                var o = function() {
                    e.on(t, null)
                };
                e.on(t, function() {
                    b(), o()
                }, !0), setTimeout(o, 0)
            }
        }
    }

    function $(n, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > La && (oa.scrollX || oa.scrollY)) {
                e = ta.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var u = e[0][0].getScreenCTM();
                La = !(u.f || u.e), e.remove()
            }
            return La ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y]
        }
        var i = n.getBoundingClientRect();
        return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
    }

    function B() {
        return ta.event.changedTouches[0].identifier
    }

    function W() {
        return ta.event.target
    }

    function J() {
        return oa
    }

    function G(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }

    function K(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
    }

    function Q(n) {
        return n > 1 ? 0 : -1 > n ? Da : Math.acos(n)
    }

    function nt(n) {
        return n > 1 ? ja : -1 > n ? -ja : Math.asin(n)
    }

    function tt(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }

    function et(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }

    function rt(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }

    function ut(n) {
        return (n = Math.sin(n / 2)) * n
    }

    function it() {}

    function ot(n, t, e) {
        return this instanceof ot ? (this.h = +n, this.s = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof ot ? new ot(n.h, n.s, n.l) : xt("" + n, bt, ot) : new ot(n, t, e)
    }

    function at(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
        }

        function u(n) {
            return Math.round(255 * r(n))
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, new dt(u(n + 120), u(n), u(n - 120))
    }

    function ct(n, t, e) {
        return this instanceof ct ? (this.h = +n, this.c = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof ct ? new ct(n.h, n.c, n.l) : n instanceof st ? ht(n.l, n.a, n.b) : ht((n = _t((n = ta.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new ct(n, t, e)
    }

    function lt(n, t, e) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new st(e, Math.cos(n *= Fa) * t, Math.sin(n) * t)
    }

    function st(n, t, e) {
        return this instanceof st ? (this.l = +n, this.a = +t, void(this.b = +e)) : arguments.length < 2 ? n instanceof st ? new st(n.l, n.a, n.b) : n instanceof ct ? lt(n.h, n.c, n.l) : _t((n = dt(n)).r, n.g, n.b) : new st(n, t, e)
    }

    function ft(n, t, e) {
        var r = (n + 16) / 116,
            u = r + t / 500,
            i = r - e / 200;
        return u = gt(u) * Ja, r = gt(r) * Ga, i = gt(i) * Ka, new dt(vt(3.2404542 * u - 1.5371385 * r - .4985314 * i), vt(-.969266 * u + 1.8760108 * r + .041556 * i), vt(.0556434 * u - .2040259 * r + 1.0572252 * i))
    }

    function ht(n, t, e) {
        return n > 0 ? new ct(Math.atan2(e, t) * Ha, Math.sqrt(t * t + e * e), n) : new ct(0 / 0, 0 / 0, n)
    }

    function gt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }

    function pt(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }

    function vt(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }

    function dt(n, t, e) {
        return this instanceof dt ? (this.r = ~~n, this.g = ~~t, void(this.b = ~~e)) : arguments.length < 2 ? n instanceof dt ? new dt(n.r, n.g, n.b) : xt("" + n, dt, at) : new dt(n, t, e)
    }

    function mt(n) {
        return new dt(n >> 16, 255 & n >> 8, 255 & n)
    }

    function yt(n) {
        return mt(n) + ""
    }

    function Mt(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }

    function xt(n, t, e) {
        var r, u, i, o = 0,
            a = 0,
            c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
            case "hsl":
                return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb":
                return t(St(u[0]), St(u[1]), St(u[2]))
        }
        return (i = tc.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c))
    }

    function bt(n, t, e) {
        var r, u, i = Math.min(n /= 255, t /= 255, e /= 255),
            o = Math.max(n, t, e),
            a = o - i,
            c = (o + i) / 2;
        return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), new ot(r, u, c)
    }

    function _t(n, t, e) {
        n = wt(n), t = wt(t), e = wt(e);
        var r = pt((.4124564 * n + .3575761 * t + .1804375 * e) / Ja),
            u = pt((.2126729 * n + .7151522 * t + .072175 * e) / Ga),
            i = pt((.0193339 * n + .119192 * t + .9503041 * e) / Ka);
        return st(116 * u - 16, 500 * (r - u), 200 * (u - i))
    }

    function wt(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }

    function St(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }

    function kt(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }

    function Et(n) {
        return n
    }

    function At(n) {
        return function(t, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Nt(t, e, n, r)
        }
    }

    function Nt(n, t, e, r) {
        function u() {
            var n, t = c.status;
            if (!t && zt(c) || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(i, c)
                } catch (r) {
                    return o.error.call(i, r), void 0
                }
                o.load.call(i, n)
            } else o.error.call(i, c)
        }
        var i = {},
            o = ta.dispatch("beforesend", "progress", "load", "error"),
            a = {},
            c = new XMLHttpRequest,
            l = null;
        return !oa.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
            c.readyState > 3 && u()
        }, c.onprogress = function(n) {
            var t = ta.event;
            ta.event = n;
            try {
                o.progress.call(i, c)
            } finally {
                ta.event = t
            }
        }, i.header = function(n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
        }, i.mimeType = function(n) {
            return arguments.length ? (t = null == n ? null : n + "", i) : t
        }, i.responseType = function(n) {
            return arguments.length ? (l = n, i) : l
        }, i.response = function(n) {
            return e = n, i
        }, ["get", "post"].forEach(function(n) {
            i[n] = function() {
                return i.send.apply(i, [n].concat(ra(arguments)))
            }
        }), i.send = function(e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
                for (var s in a) c.setRequestHeader(s, a[s]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on("error", u).on("load", function(n) {
                u(null, n)
            }), o.beforesend.call(i, c), c.send(null == r ? null : r), i
        }, i.abort = function() {
            return c.abort(), i
        }, ta.rebind(i, o, "on"), null == r ? i : i.get(Ct(r))
    }

    function Ct(n) {
        return 1 === n.length ? function(t, e) {
            n(null == t ? e : null)
        } : n
    }

    function zt(n) {
        var t = n.responseType;
        return t && "text" !== t ? n.response : n.responseText
    }

    function qt() {
        var n = Lt(),
            t = Tt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(ic), ic = setTimeout(qt, t)), uc = 0) : (uc = 1, ac(qt))
    }

    function Lt() {
        var n = Date.now();
        for (oc = ec; oc;) n >= oc.t && (oc.f = oc.c(n - oc.t)), oc = oc.n;
        return n
    }

    function Tt() {
        for (var n, t = ec, e = 1 / 0; t;) t.f ? t = n ? n.n = t.n : ec = t.n : (t.t < e && (e = t.t), t = (n = t).n);
        return rc = n, e
    }

    function Rt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }

    function Dt(n, t) {
        var e = Math.pow(10, 3 * va(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / e
            } : function(n) {
                return n * e
            },
            symbol: n
        }
    }

    function Pt(n) {
        var t = n.decimal,
            e = n.thousands,
            r = n.grouping,
            u = n.currency,
            i = r && e ? function(n, t) {
                for (var u = n.length, i = [], o = 0, a = r[0], c = 0; u > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)), i.push(n.substring(u -= a, u + a)), !((c += a + 1) > t));) a = r[o = (o + 1) % r.length];
                return i.reverse().join(e)
            } : Et;
        return function(n) {
            var e = lc.exec(n),
                r = e[1] || " ",
                o = e[2] || ">",
                a = e[3] || "-",
                c = e[4] || "",
                l = e[5],
                s = +e[6],
                f = e[7],
                h = e[8],
                g = e[9],
                p = 1,
                v = "",
                d = "",
                m = !1,
                y = !0;
            switch (h && (h = +h.substring(1)), (l || "0" === r && "=" === o) && (l = r = "0", o = "="), g) {
                case "n":
                    f = !0, g = "g";
                    break;
                case "%":
                    p = 100, d = "%", g = "f";
                    break;
                case "p":
                    p = 100, d = "%", g = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === c && (v = "0" + g.toLowerCase());
                case "c":
                    y = !1;
                case "d":
                    m = !0, h = 0;
                    break;
                case "s":
                    p = -1, g = "r"
            }
            "$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = sc.get(g) || Ut;
            var M = l && f;
            return function(n) {
                var e = d;
                if (m && n % 1) return "";
                var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === a ? "" : a;
                if (0 > p) {
                    var c = ta.formatPrefix(n, h);
                    n = c.scale(n), e = c.symbol + d
                } else n *= p;
                n = g(n, h);
                var x, b, _ = n.lastIndexOf(".");
                if (0 > _) {
                    var w = y ? n.lastIndexOf("e") : -1;
                    0 > w ? (x = n, b = "") : (x = n.substring(0, w), b = n.substring(w))
                } else x = n.substring(0, _), b = t + n.substring(_ + 1);
                !l && f && (x = i(x, 1 / 0));
                var S = v.length + x.length + b.length + (M ? 0 : u.length),
                    k = s > S ? new Array(S = s - S + 1).join(r) : "";
                return M && (x = i(k + x, k.length ? s - b.length : 1 / 0)), u += v, n = x + b, ("<" === o ? u + n + k : ">" === o ? k + u + n : "^" === o ? k.substring(0, S >>= 1) + u + n + k.substring(S) : u + (M ? n : k + n)) + e
            }
        }
    }

    function Ut(n) {
        return n + ""
    }

    function jt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Ft(n, t, e) {
        function r(t) {
            var e = n(t),
                r = i(e, 1);
            return r - t > t - e ? e : r
        }

        function u(e) {
            return t(e = n(new hc(e - 1)), 1), e
        }

        function i(n, e) {
            return t(n = new hc(+n), e), n
        }

        function o(n, r, i) {
            var o = u(n),
                a = [];
            if (i > 1)
                for (; r > o;) e(o) % i || a.push(new Date(+o)), t(o, 1);
            else
                for (; r > o;) a.push(new Date(+o)), t(o, 1);
            return a
        }

        function a(n, t, e) {
            try {
                hc = jt;
                var r = new jt;
                return r._ = n, o(r, t, e)
            } finally {
                hc = Date
            }
        }
        n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
        var c = n.utc = Ht(n);
        return c.floor = c, c.round = Ht(r), c.ceil = Ht(u), c.offset = Ht(i), c.range = a, n
    }

    function Ht(n) {
        return function(t, e) {
            try {
                hc = jt;
                var r = new jt;
                return r._ = t, n(r, e)._
            } finally {
                hc = Date
            }
        }
    }

    function Ot(n) {
        function t(n) {
            function t(t) {
                for (var e, u, i, o = [], a = -1, c = 0; ++a < r;) 37 === n.charCodeAt(a) && (o.push(n.slice(c, a)), null != (u = pc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = N[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1);
                return o.push(n.slice(c, a)), o.join("")
            }
            var r = n.length;
            return t.parse = function(t) {
                var r = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    },
                    u = e(r, n, t, 0);
                if (u != t.length) return null;
                "p" in r && (r.H = r.H % 12 + 12 * r.p);
                var i = null != r.Z && hc !== jt,
                    o = new(i ? jt : hc);
                return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (0 | r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o
            }, t.toString = function() {
                return n
            }, t
        }

        function e(n, t, e, r) {
            for (var u, i, o, a = 0, c = t.length, l = e.length; c > a;) {
                if (r >= l) return -1;
                if (u = t.charCodeAt(a++), 37 === u) {
                    if (o = t.charAt(a++), i = C[o in pc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1
                } else if (u != e.charCodeAt(r++)) return -1
            }
            return r
        }

        function r(n, t, e) {
            _.lastIndex = 0;
            var r = _.exec(t.slice(e));
            return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function u(n, t, e) {
            x.lastIndex = 0;
            var r = x.exec(t.slice(e));
            return r ? (n.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function i(n, t, e) {
            E.lastIndex = 0;
            var r = E.exec(t.slice(e));
            return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function o(n, t, e) {
            S.lastIndex = 0;
            var r = S.exec(t.slice(e));
            return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function a(n, t, r) {
            return e(n, N.c.toString(), t, r)
        }

        function c(n, t, r) {
            return e(n, N.x.toString(), t, r)
        }

        function l(n, t, r) {
            return e(n, N.X.toString(), t, r)
        }

        function s(n, t, e) {
            var r = M.get(t.slice(e, e += 2).toLowerCase());
            return null == r ? -1 : (n.p = r, e)
        }
        var f = n.dateTime,
            h = n.date,
            g = n.time,
            p = n.periods,
            v = n.days,
            d = n.shortDays,
            m = n.months,
            y = n.shortMonths;
        t.utc = function(n) {
            function e(n) {
                try {
                    hc = jt;
                    var t = new hc;
                    return t._ = n, r(t)
                } finally {
                    hc = Date
                }
            }
            var r = t(n);
            return e.parse = function(n) {
                try {
                    hc = jt;
                    var t = r.parse(n);
                    return t && t._
                } finally {
                    hc = Date
                }
            }, e.toString = r.toString, e
        }, t.multi = t.utc.multi = ae;
        var M = ta.map(),
            x = It(v),
            b = Zt(v),
            _ = It(d),
            w = Zt(d),
            S = It(m),
            k = Zt(m),
            E = It(y),
            A = Zt(y);
        p.forEach(function(n, t) {
            M.set(n.toLowerCase(), t)
        });
        var N = {
                a: function(n) {
                    return d[n.getDay()]
                },
                A: function(n) {
                    return v[n.getDay()]
                },
                b: function(n) {
                    return y[n.getMonth()]
                },
                B: function(n) {
                    return m[n.getMonth()]
                },
                c: t(f),
                d: function(n, t) {
                    return Yt(n.getDate(), t, 2)
                },
                e: function(n, t) {
                    return Yt(n.getDate(), t, 2)
                },
                H: function(n, t) {
                    return Yt(n.getHours(), t, 2)
                },
                I: function(n, t) {
                    return Yt(n.getHours() % 12 || 12, t, 2)
                },
                j: function(n, t) {
                    return Yt(1 + fc.dayOfYear(n), t, 3)
                },
                L: function(n, t) {
                    return Yt(n.getMilliseconds(), t, 3)
                },
                m: function(n, t) {
                    return Yt(n.getMonth() + 1, t, 2)
                },
                M: function(n, t) {
                    return Yt(n.getMinutes(), t, 2)
                },
                p: function(n) {
                    return p[+(n.getHours() >= 12)]
                },
                S: function(n, t) {
                    return Yt(n.getSeconds(), t, 2)
                },
                U: function(n, t) {
                    return Yt(fc.sundayOfYear(n), t, 2)
                },
                w: function(n) {
                    return n.getDay()
                },
                W: function(n, t) {
                    return Yt(fc.mondayOfYear(n), t, 2)
                },
                x: t(h),
                X: t(g),
                y: function(n, t) {
                    return Yt(n.getFullYear() % 100, t, 2)
                },
                Y: function(n, t) {
                    return Yt(n.getFullYear() % 1e4, t, 4)
                },
                Z: ie,
                "%": function() {
                    return "%"
                }
            },
            C = {
                a: r,
                A: u,
                b: i,
                B: o,
                c: a,
                d: Qt,
                e: Qt,
                H: te,
                I: te,
                j: ne,
                L: ue,
                m: Kt,
                M: ee,
                p: s,
                S: re,
                U: Xt,
                w: Vt,
                W: $t,
                x: c,
                X: l,
                y: Wt,
                Y: Bt,
                Z: Jt,
                "%": oe
            };
        return t
    }

    function Yt(n, t, e) {
        var r = 0 > n ? "-" : "",
            u = (r ? -n : n) + "",
            i = u.length;
        return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
    }

    function It(n) {
        return new RegExp("^(?:" + n.map(ta.requote).join("|") + ")", "i")
    }

    function Zt(n) {
        for (var t = new a, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
        return t
    }

    function Vt(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 1));
        return r ? (n.w = +r[0], e + r[0].length) : -1
    }

    function Xt(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e));
        return r ? (n.U = +r[0], e + r[0].length) : -1
    }

    function $t(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e));
        return r ? (n.W = +r[0], e + r[0].length) : -1
    }

    function Bt(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 4));
        return r ? (n.y = +r[0], e + r[0].length) : -1
    }

    function Wt(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 2));
        return r ? (n.y = Gt(+r[0]), e + r[0].length) : -1
    }

    function Jt(n, t, e) {
        return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1
    }

    function Gt(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }

    function Kt(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 2));
        return r ? (n.m = r[0] - 1, e + r[0].length) : -1
    }

    function Qt(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 2));
        return r ? (n.d = +r[0], e + r[0].length) : -1
    }

    function ne(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 3));
        return r ? (n.j = +r[0], e + r[0].length) : -1
    }

    function te(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 2));
        return r ? (n.H = +r[0], e + r[0].length) : -1
    }

    function ee(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 2));
        return r ? (n.M = +r[0], e + r[0].length) : -1
    }

    function re(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 2));
        return r ? (n.S = +r[0], e + r[0].length) : -1
    }

    function ue(n, t, e) {
        vc.lastIndex = 0;
        var r = vc.exec(t.slice(e, e + 3));
        return r ? (n.L = +r[0], e + r[0].length) : -1
    }

    function ie(n) {
        var t = n.getTimezoneOffset(),
            e = t > 0 ? "-" : "+",
            r = 0 | va(t) / 60,
            u = va(t) % 60;
        return e + Yt(r, "0", 2) + Yt(u, "0", 2)
    }

    function oe(n, t, e) {
        dc.lastIndex = 0;
        var r = dc.exec(t.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function ae(n) {
        for (var t = n.length, e = -1; ++e < t;) n[e][0] = this(n[e][0]);
        return function(t) {
            for (var e = 0, r = n[e]; !r[1](t);) r = n[++e];
            return r[0](t)
        }
    }

    function ce() {}

    function le(n, t, e) {
        var r = e.s = n + t,
            u = r - n,
            i = r - u;
        e.t = n - i + (t - u)
    }

    function se(n, t) {
        n && xc.hasOwnProperty(n.type) && xc[n.type](n, t)
    }

    function fe(n, t, e) {
        var r, u = -1,
            i = n.length - e;
        for (t.lineStart(); ++u < i;) r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }

    function he(n, t) {
        var e = -1,
            r = n.length;
        for (t.polygonStart(); ++e < r;) fe(n[e], t, 1);
        t.polygonEnd()
    }

    function ge() {
        function n(n, t) {
            n *= Fa, t = t * Fa / 2 + Da / 4;
            var e = n - r,
                o = e >= 0 ? 1 : -1,
                a = o * e,
                c = Math.cos(t),
                l = Math.sin(t),
                s = i * l,
                f = u * c + s * Math.cos(a),
                h = s * o * Math.sin(a);
            _c.add(Math.atan2(h, f)), r = n, u = c, i = l
        }
        var t, e, r, u, i;
        wc.point = function(o, a) {
            wc.point = n, r = (t = o) * Fa, u = Math.cos(a = (e = a) * Fa / 2 + Da / 4), i = Math.sin(a)
        }, wc.lineEnd = function() {
            n(t, e)
        }
    }

    function pe(n) {
        var t = n[0],
            e = n[1],
            r = Math.cos(e);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
    }

    function ve(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }

    function de(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }

    function me(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2]
    }

    function ye(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }

    function Me(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t, n[1] /= t, n[2] /= t
    }

    function xe(n) {
        return [Math.atan2(n[1], n[0]), nt(n[2])]
    }

    function be(n, t) {
        return va(n[0] - t[0]) < Ta && va(n[1] - t[1]) < Ta
    }

    function _e(n, t) {
        n *= Fa;
        var e = Math.cos(t *= Fa);
        we(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
    }

    function we(n, t, e) {
        ++Sc, Ec += (n - Ec) / Sc, Ac += (t - Ac) / Sc, Nc += (e - Nc) / Sc
    }

    function Se() {
        function n(n, u) {
            n *= Fa;
            var i = Math.cos(u *= Fa),
                o = i * Math.cos(n),
                a = i * Math.sin(n),
                c = Math.sin(u),
                l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
            kc += l, Cc += l * (t + (t = o)), zc += l * (e + (e = a)), qc += l * (r + (r = c)), we(t, e, r)
        }
        var t, e, r;
        Dc.point = function(u, i) {
            u *= Fa;
            var o = Math.cos(i *= Fa);
            t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Dc.point = n, we(t, e, r)
        }
    }

    function ke() {
        Dc.point = _e
    }

    function Ee() {
        function n(n, t) {
            n *= Fa;
            var e = Math.cos(t *= Fa),
                o = e * Math.cos(n),
                a = e * Math.sin(n),
                c = Math.sin(t),
                l = u * c - i * a,
                s = i * o - r * c,
                f = r * a - u * o,
                h = Math.sqrt(l * l + s * s + f * f),
                g = r * o + u * a + i * c,
                p = h && -Q(g) / h,
                v = Math.atan2(h, g);
            Lc += p * l, Tc += p * s, Rc += p * f, kc += v, Cc += v * (r + (r = o)), zc += v * (u + (u = a)), qc += v * (i + (i = c)), we(r, u, i)
        }
        var t, e, r, u, i;
        Dc.point = function(o, a) {
            t = o, e = a, Dc.point = n, o *= Fa;
            var c = Math.cos(a *= Fa);
            r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), we(r, u, i)
        }, Dc.lineEnd = function() {
            n(t, e), Dc.lineEnd = ke, Dc.point = _e
        }
    }

    function Ae(n, t) {
        function e(e, r) {
            return e = n(e, r), t(e[0], e[1])
        }
        return n.invert && t.invert && (e.invert = function(e, r) {
            return e = t.invert(e, r), e && n.invert(e[0], e[1])
        }), e
    }

    function Ne() {
        return !0
    }

    function Ce(n, t, e, r, u) {
        var i = [],
            o = [];
        if (n.forEach(function(n) {
                if (!((t = n.length - 1) <= 0)) {
                    var t, e = n[0],
                        r = n[t];
                    if (be(e, r)) {
                        u.lineStart();
                        for (var a = 0; t > a; ++a) u.point((e = n[a])[0], e[1]);
                        return u.lineEnd(), void 0
                    }
                    var c = new qe(e, n, null, !0),
                        l = new qe(e, null, c, !1);
                    c.o = l, i.push(c), o.push(l), c = new qe(r, n, null, !1), l = new qe(r, null, c, !0), c.o = l, i.push(c), o.push(l)
                }
            }), o.sort(t), ze(i), ze(o), i.length) {
            for (var a = 0, c = e, l = o.length; l > a; ++a) o[a].e = c = !c;
            for (var s, f, h = i[0];;) {
                for (var g = h, p = !0; g.v;)
                    if ((g = g.n) === h) return;
                s = g.z, u.lineStart();
                do {
                    if (g.v = g.o.v = !0, g.e) {
                        if (p)
                            for (var a = 0, l = s.length; l > a; ++a) u.point((f = s[a])[0], f[1]);
                        else r(g.x, g.n.x, 1, u);
                        g = g.n
                    } else {
                        if (p) {
                            s = g.p.z;
                            for (var a = s.length - 1; a >= 0; --a) u.point((f = s[a])[0], f[1])
                        } else r(g.x, g.p.x, -1, u);
                        g = g.p
                    }
                    g = g.o, s = g.z, p = !p
                } while (!g.v);
                u.lineEnd()
            }
        }
    }

    function ze(n) {
        if (t = n.length) {
            for (var t, e, r = 0, u = n[0]; ++r < t;) u.n = e = n[r], e.p = u, u = e;
            u.n = e = n[0], e.p = u
        }
    }

    function qe(n, t, e, r) {
        this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }

    function Le(n, t, e, r) {
        return function(u, i) {
            function o(t, e) {
                var r = u(t, e);
                n(t = r[0], e = r[1]) && i.point(t, e)
            }

            function a(n, t) {
                var e = u(n, t);
                d.point(e[0], e[1])
            }

            function c() {
                y.point = a, d.lineStart()
            }

            function l() {
                y.point = o, d.lineEnd()
            }

            function s(n, t) {
                v.push([n, t]);
                var e = u(n, t);
                x.point(e[0], e[1])
            }

            function f() {
                x.lineStart(), v = []
            }

            function h() {
                s(v[0][0], v[0][1]), x.lineEnd();
                var n, t = x.clean(),
                    e = M.buffer(),
                    r = e.length;
                if (v.pop(), p.push(v), v = null, r)
                    if (1 & t) {
                        n = e[0];
                        var u, r = n.length - 1,
                            o = -1;
                        if (r > 0) {
                            for (b || (i.polygonStart(), b = !0), i.lineStart(); ++o < r;) i.point((u = n[o])[0], u[1]);
                            i.lineEnd()
                        }
                    } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Te))
            }
            var g, p, v, d = t(i),
                m = u.invert(r[0], r[1]),
                y = {
                    point: o,
                    lineStart: c,
                    lineEnd: l,
                    polygonStart: function() {
                        y.point = s, y.lineStart = f, y.lineEnd = h, g = [], p = []
                    },
                    polygonEnd: function() {
                        y.point = o, y.lineStart = c, y.lineEnd = l, g = ta.merge(g);
                        var n = Fe(m, p);
                        g.length ? (b || (i.polygonStart(), b = !0), Ce(g, De, n, e, i)) : n && (b || (i.polygonStart(), b = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), b && (i.polygonEnd(), b = !1), g = p = null
                    },
                    sphere: function() {
                        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                    }
                },
                M = Re(),
                x = t(M),
                b = !1;
            return y
        }
    }

    function Te(n) {
        return n.length > 1
    }

    function Re() {
        var n, t = [];
        return {
            lineStart: function() {
                t.push(n = [])
            },
            point: function(t, e) {
                n.push([t, e])
            },
            lineEnd: y,
            buffer: function() {
                var e = t;
                return t = [], n = null, e
            },
            rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }
        }
    }

    function De(n, t) {
        return ((n = n.x)[0] < 0 ? n[1] - ja - Ta : ja - n[1]) - ((t = t.x)[0] < 0 ? t[1] - ja - Ta : ja - t[1])
    }

    function Pe(n) {
        var t, e = 0 / 0,
            r = 0 / 0,
            u = 0 / 0;
        return {
            lineStart: function() {
                n.lineStart(), t = 1
            },
            point: function(i, o) {
                var a = i > 0 ? Da : -Da,
                    c = va(i - e);
                va(c - Da) < Ta ? (n.point(e, r = (r + o) / 2 > 0 ? ja : -ja), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Da && (va(e - u) < Ta && (e -= u * Ta), va(i - a) < Ta && (i -= a * Ta), r = Ue(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
            },
            lineEnd: function() {
                n.lineEnd(), e = r = 0 / 0
            },
            clean: function() {
                return 2 - t
            }
        }
    }

    function Ue(n, t, e, r) {
        var u, i, o = Math.sin(n - e);
        return va(o) > Ta ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
    }

    function je(n, t, e, r) {
        var u;
        if (null == n) u = e * ja, r.point(-Da, u), r.point(0, u), r.point(Da, u), r.point(Da, 0), r.point(Da, -u), r.point(0, -u), r.point(-Da, -u), r.point(-Da, 0), r.point(-Da, u);
        else if (va(n[0] - t[0]) > Ta) {
            var i = n[0] < t[0] ? Da : -Da;
            u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
        } else r.point(t[0], t[1])
    }

    function Fe(n, t) {
        var e = n[0],
            r = n[1],
            u = [Math.sin(e), -Math.cos(e), 0],
            i = 0,
            o = 0;
        _c.reset();
        for (var a = 0, c = t.length; c > a; ++a) {
            var l = t[a],
                s = l.length;
            if (s)
                for (var f = l[0], h = f[0], g = f[1] / 2 + Da / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
                    d === s && (d = 0), n = l[d];
                    var m = n[0],
                        y = n[1] / 2 + Da / 4,
                        M = Math.sin(y),
                        x = Math.cos(y),
                        b = m - h,
                        _ = b >= 0 ? 1 : -1,
                        w = _ * b,
                        S = w > Da,
                        k = p * M;
                    if (_c.add(Math.atan2(k * _ * Math.sin(w), v * x + k * Math.cos(w))), i += S ? b + _ * Pa : b, S ^ h >= e ^ m >= e) {
                        var E = de(pe(f), pe(n));
                        Me(E);
                        var A = de(u, E);
                        Me(A);
                        var N = (S ^ b >= 0 ? -1 : 1) * nt(A[2]);
                        (r > N || r === N && (E[0] || E[1])) && (o += S ^ b >= 0 ? 1 : -1)
                    }
                    if (!d++) break;
                    h = m, p = M, v = x, f = n
                }
        }
        return (-Ta > i || Ta > i && 0 > _c) ^ 1 & o
    }

    function He(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }

        function e(n) {
            var e, i, c, l, s;
            return {
                lineStart: function() {
                    l = c = !1, s = 1
                },
                point: function(f, h) {
                    var g, p = [f, h],
                        v = t(f, h),
                        d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Da : -Da), h) : 0;
                    if (!e && (l = c = v) && n.lineStart(), v !== c && (g = r(e, p), (be(e, g) || be(p, g)) && (p[0] += Ta, p[1] += Ta, v = t(p[0], p[1]))), v !== c) s = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
                    else if (a && e && o ^ v) {
                        var m;
                        d & i || !(m = r(p, e, !0)) || (s = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
                    }!v || e && be(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d
                },
                lineEnd: function() {
                    c && n.lineEnd(), e = null
                },
                clean: function() {
                    return s | (l && c) << 1
                }
            }
        }

        function r(n, t, e) {
            var r = pe(n),
                u = pe(t),
                o = [1, 0, 0],
                a = de(r, u),
                c = ve(a, a),
                l = a[0],
                s = c - l * l;
            if (!s) return !e && n;
            var f = i * c / s,
                h = -i * l / s,
                g = de(o, a),
                p = ye(o, f),
                v = ye(a, h);
            me(p, v);
            var d = g,
                m = ve(p, d),
                y = ve(d, d),
                M = m * m - y * (ve(p, p) - 1);
            if (!(0 > M)) {
                var x = Math.sqrt(M),
                    b = ye(d, (-m - x) / y);
                if (me(b, p), b = xe(b), !e) return b;
                var _, w = n[0],
                    S = t[0],
                    k = n[1],
                    E = t[1];
                w > S && (_ = w, w = S, S = _);
                var A = S - w,
                    N = va(A - Da) < Ta,
                    C = N || Ta > A;
                if (!N && k > E && (_ = k, k = E, E = _), C ? N ? k + E > 0 ^ b[1] < (va(b[0] - w) < Ta ? k : E) : k <= b[1] && b[1] <= E : A > Da ^ (w <= b[0] && b[0] <= S)) {
                    var z = ye(d, (-m + x) / y);
                    return me(z, p), [b, xe(z)]
                }
            }
        }

        function u(t, e) {
            var r = o ? n : Da - n,
                u = 0;
            return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
        }
        var i = Math.cos(n),
            o = i > 0,
            a = va(i) > Ta,
            c = gr(n, 6 * Fa);
        return Le(t, e, c, o ? [0, -n] : [-Da, n - Da])
    }

    function Oe(n, t, e, r) {
        return function(u) {
            var i, o = u.a,
                a = u.b,
                c = o.x,
                l = o.y,
                s = a.x,
                f = a.y,
                h = 0,
                g = 1,
                p = s - c,
                v = f - l;
            if (i = n - c, p || !(i > 0)) {
                if (i /= p, 0 > p) {
                    if (h > i) return;
                    g > i && (g = i)
                } else if (p > 0) {
                    if (i > g) return;
                    i > h && (h = i)
                }
                if (i = e - c, p || !(0 > i)) {
                    if (i /= p, 0 > p) {
                        if (i > g) return;
                        i > h && (h = i)
                    } else if (p > 0) {
                        if (h > i) return;
                        g > i && (g = i)
                    }
                    if (i = t - l, v || !(i > 0)) {
                        if (i /= v, 0 > v) {
                            if (h > i) return;
                            g > i && (g = i)
                        } else if (v > 0) {
                            if (i > g) return;
                            i > h && (h = i)
                        }
                        if (i = r - l, v || !(0 > i)) {
                            if (i /= v, 0 > v) {
                                if (i > g) return;
                                i > h && (h = i)
                            } else if (v > 0) {
                                if (h > i) return;
                                g > i && (g = i)
                            }
                            return h > 0 && (u.a = {
                                x: c + h * p,
                                y: l + h * v
                            }), 1 > g && (u.b = {
                                x: c + g * p,
                                y: l + g * v
                            }), u
                        }
                    }
                }
            }
        }
    }

    function Ye(n, t, e, r) {
        function u(r, u) {
            return va(r[0] - n) < Ta ? u > 0 ? 0 : 3 : va(r[0] - e) < Ta ? u > 0 ? 2 : 1 : va(r[1] - t) < Ta ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
        }

        function i(n, t) {
            return o(n.x, t.x)
        }

        function o(n, t) {
            var e = u(n, 1),
                r = u(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
        }
        return function(a) {
            function c(n) {
                for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
                    for (var i, o = 1, a = d[u], c = a.length, l = a[0]; c > o; ++o) i = a[o], l[1] <= r ? i[1] > r && K(l, i, n) > 0 && ++t : i[1] <= r && K(l, i, n) < 0 && --t, l = i;
                return 0 !== t
            }

            function l(i, a, c, l) {
                var s = 0,
                    f = 0;
                if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t); while ((s = (s + c + 4) % 4) !== f)
                } else l.point(a[0], a[1])
            }

            function s(u, i) {
                return u >= n && e >= u && i >= t && r >= i
            }

            function f(n, t) {
                s(n, t) && a.point(n, t)
            }

            function h() {
                C.point = p, d && d.push(m = []), S = !0, w = !1, b = _ = 0 / 0
            }

            function g() {
                v && (p(y, M), x && w && A.rejoin(), v.push(A.buffer())), C.point = f, w && a.lineEnd()
            }

            function p(n, t) {
                n = Math.max(-Uc, Math.min(Uc, n)), t = Math.max(-Uc, Math.min(Uc, t));
                var e = s(n, t);
                if (d && m.push([n, t]), S) y = n, M = t, x = e, S = !1, e && (a.lineStart(), a.point(n, t));
                else if (e && w) a.point(n, t);
                else {
                    var r = {
                        a: {
                            x: b,
                            y: _
                        },
                        b: {
                            x: n,
                            y: t
                        }
                    };
                    N(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1)
                }
                b = n, _ = t, w = e
            }
            var v, d, m, y, M, x, b, _, w, S, k, E = a,
                A = Re(),
                N = Oe(n, t, e, r),
                C = {
                    point: f,
                    lineStart: h,
                    lineEnd: g,
                    polygonStart: function() {
                        a = A, v = [], d = [], k = !0
                    },
                    polygonEnd: function() {
                        a = E, v = ta.merge(v);
                        var t = c([n, r]),
                            e = k && t,
                            u = v.length;
                        (e || u) && (a.polygonStart(), e && (a.lineStart(), l(null, null, 1, a), a.lineEnd()), u && Ce(v, i, t, l, a), a.polygonEnd()), v = d = m = null
                    }
                };
            return C
        }
    }

    function Ie(n) {
        var t = 0,
            e = Da / 3,
            r = ir(n),
            u = r(t, e);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * Da / 180, e = n[1] * Da / 180) : [180 * (t / Da), 180 * (e / Da)]
        }, u
    }

    function Ze(n, t) {
        function e(n, t) {
            var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [e * Math.sin(n *= u), o - e * Math.cos(n)]
        }
        var r = Math.sin(n),
            u = (r + Math.sin(t)) / 2,
            i = 1 + r * (2 * u - r),
            o = Math.sqrt(i) / u;
        return e.invert = function(n, t) {
            var e = o - t;
            return [Math.atan2(n, e) / u, nt((i - (n * n + e * e) * u * u) / (2 * u))]
        }, e
    }

    function Ve() {
        function n(n, t) {
            Fc += u * n - r * t, r = n, u = t
        }
        var t, e, r, u;
        Zc.point = function(i, o) {
            Zc.point = n, t = r = i, e = u = o
        }, Zc.lineEnd = function() {
            n(t, e)
        }
    }

    function Xe(n, t) {
        Hc > n && (Hc = n), n > Yc && (Yc = n), Oc > t && (Oc = t), t > Ic && (Ic = t)
    }

    function $e() {
        function n(n, t) {
            o.push("M", n, ",", t, i)
        }

        function t(n, t) {
            o.push("M", n, ",", t), a.point = e
        }

        function e(n, t) {
            o.push("L", n, ",", t)
        }

        function r() {
            a.point = n
        }

        function u() {
            o.push("Z")
        }
        var i = Be(4.5),
            o = [],
            a = {
                point: n,
                lineStart: function() {
                    a.point = t
                },
                lineEnd: r,
                polygonStart: function() {
                    a.lineEnd = u
                },
                polygonEnd: function() {
                    a.lineEnd = r, a.point = n
                },
                pointRadius: function(n) {
                    return i = Be(n), a
                },
                result: function() {
                    if (o.length) {
                        var n = o.join("");
                        return o = [], n
                    }
                }
            };
        return a
    }

    function Be(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }

    function We(n, t) {
        Ec += n, Ac += t, ++Nc
    }

    function Je() {
        function n(n, r) {
            var u = n - t,
                i = r - e,
                o = Math.sqrt(u * u + i * i);
            Cc += o * (t + n) / 2, zc += o * (e + r) / 2, qc += o, We(t = n, e = r)
        }
        var t, e;
        Xc.point = function(r, u) {
            Xc.point = n, We(t = r, e = u)
        }
    }

    function Ge() {
        Xc.point = We
    }

    function Ke() {
        function n(n, t) {
            var e = n - r,
                i = t - u,
                o = Math.sqrt(e * e + i * i);
            Cc += o * (r + n) / 2, zc += o * (u + t) / 2, qc += o, o = u * n - r * t, Lc += o * (r + n), Tc += o * (u + t), Rc += 3 * o, We(r = n, u = t)
        }
        var t, e, r, u;
        Xc.point = function(i, o) {
            Xc.point = n, We(t = r = i, e = u = o)
        }, Xc.lineEnd = function() {
            n(t, e)
        }
    }

    function Qe(n) {
        function t(t, e) {
            n.moveTo(t + o, e), n.arc(t, e, o, 0, Pa)
        }

        function e(t, e) {
            n.moveTo(t, e), a.point = r
        }

        function r(t, e) {
            n.lineTo(t, e)
        }

        function u() {
            a.point = t
        }

        function i() {
            n.closePath()
        }
        var o = 4.5,
            a = {
                point: t,
                lineStart: function() {
                    a.point = e
                },
                lineEnd: u,
                polygonStart: function() {
                    a.lineEnd = i
                },
                polygonEnd: function() {
                    a.lineEnd = u, a.point = t
                },
                pointRadius: function(n) {
                    return o = n, a
                },
                result: y
            };
        return a
    }

    function nr(n) {
        function t(n) {
            return (a ? r : e)(n)
        }

        function e(t) {
            return rr(t, function(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            })
        }

        function r(t) {
            function e(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            }

            function r() {
                M = 0 / 0, S.point = i, t.lineStart()
            }

            function i(e, r) {
                var i = pe([e, r]),
                    o = n(e, r);
                u(M, x, y, b, _, w, M = o[0], x = o[1], y = e, b = i[0], _ = i[1], w = i[2], a, t), t.point(M, x)
            }

            function o() {
                S.point = e, t.lineEnd()
            }

            function c() {
                r(), S.point = l, S.lineEnd = s
            }

            function l(n, t) {
                i(f = n, h = t), g = M, p = x, v = b, d = _, m = w, S.point = i
            }

            function s() {
                u(M, x, y, b, _, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o()
            }
            var f, h, g, p, v, d, m, y, M, x, b, _, w, S = {
                point: e,
                lineStart: r,
                lineEnd: o,
                polygonStart: function() {
                    t.polygonStart(), S.lineStart = c
                },
                polygonEnd: function() {
                    t.polygonEnd(), S.lineStart = r
                }
            };
            return S
        }

        function u(t, e, r, a, c, l, s, f, h, g, p, v, d, m) {
            var y = s - t,
                M = f - e,
                x = y * y + M * M;
            if (x > 4 * i && d--) {
                var b = a + g,
                    _ = c + p,
                    w = l + v,
                    S = Math.sqrt(b * b + _ * _ + w * w),
                    k = Math.asin(w /= S),
                    E = va(va(w) - 1) < Ta || va(r - h) < Ta ? (r + h) / 2 : Math.atan2(_, b),
                    A = n(E, k),
                    N = A[0],
                    C = A[1],
                    z = N - t,
                    q = C - e,
                    L = M * z - y * q;
                (L * L / x > i || va((y * z + M * q) / x - .5) > .3 || o > a * g + c * p + l * v) && (u(t, e, r, a, c, l, N, C, E, b /= S, _ /= S, w, d, m), m.point(N, C), u(N, C, E, b, _, w, s, f, h, g, p, v, d, m))
            }
        }
        var i = .5,
            o = Math.cos(30 * Fa),
            a = 16;
        return t.precision = function(n) {
            return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
        }, t
    }

    function tr(n) {
        var t = nr(function(t, e) {
            return n([t * Ha, e * Ha])
        });
        return function(n) {
            return or(t(n))
        }
    }

    function er(n) {
        this.stream = n
    }

    function rr(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere()
            },
            lineStart: function() {
                n.lineStart()
            },
            lineEnd: function() {
                n.lineEnd()
            },
            polygonStart: function() {
                n.polygonStart()
            },
            polygonEnd: function() {
                n.polygonEnd()
            }
        }
    }

    function ur(n) {
        return ir(function() {
            return n
        })()
    }

    function ir(n) {
        function t(n) {
            return n = a(n[0] * Fa, n[1] * Fa), [n[0] * h + c, l - n[1] * h]
        }

        function e(n) {
            return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * Ha, n[1] * Ha]
        }

        function r() {
            a = Ae(o = lr(m, y, M), i);
            var n = i(v, d);
            return c = g - n[0] * h, l = p + n[1] * h, u()
        }

        function u() {
            return s && (s.valid = !1, s = null), t
        }
        var i, o, a, c, l, s, f = nr(function(n, t) {
                return n = i(n, t), [n[0] * h + c, l - n[1] * h]
            }),
            h = 150,
            g = 480,
            p = 250,
            v = 0,
            d = 0,
            m = 0,
            y = 0,
            M = 0,
            x = Pc,
            b = Et,
            _ = null,
            w = null;
        return t.stream = function(n) {
                return s && (s.valid = !1), s = or(x(o, f(b(n)))), s.valid = !0, s
            }, t.clipAngle = function(n) {
                return arguments.length ? (x = null == n ? (_ = n, Pc) : He((_ = +n) * Fa), u()) : _
            }, t.clipExtent = function(n) {
                return arguments.length ? (w = n, b = n ? Ye(n[0][0], n[0][1], n[1][0], n[1][1]) : Et, u()) : w
            }, t.scale = function(n) {
                return arguments.length ? (h = +n, r()) : h
            }, t.translate = function(n) {
                return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
            }, t.center = function(n) {
                return arguments.length ? (v = n[0] % 360 * Fa, d = n[1] % 360 * Fa, r()) : [v * Ha, d * Ha]
            }, t.rotate = function(n) {
                return arguments.length ? (m = n[0] % 360 * Fa, y = n[1] % 360 * Fa, M = n.length > 2 ? n[2] % 360 * Fa : 0, r()) : [m * Ha, y * Ha, M * Ha]
            }, ta.rebind(t, f, "precision"),
            function() {
                return i = n.apply(this, arguments), t.invert = i.invert && e, r()
            }
    }

    function or(n) {
        return rr(n, function(t, e) {
            n.point(t * Fa, e * Fa)
        })
    }

    function ar(n, t) {
        return [n, t]
    }

    function cr(n, t) {
        return [n > Da ? n - Pa : -Da > n ? n + Pa : n, t]
    }

    function lr(n, t, e) {
        return n ? t || e ? Ae(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr
    }

    function sr(n) {
        return function(t, e) {
            return t += n, [t > Da ? t - Pa : -Da > t ? t + Pa : t, e]
        }
    }

    function fr(n) {
        var t = sr(n);
        return t.invert = sr(-n), t
    }

    function hr(n, t) {
        function e(n, t) {
            var e = Math.cos(t),
                a = Math.cos(n) * e,
                c = Math.sin(n) * e,
                l = Math.sin(t),
                s = l * r + a * u;
            return [Math.atan2(c * i - s * o, a * r - l * u), nt(s * i + c * o)]
        }
        var r = Math.cos(n),
            u = Math.sin(n),
            i = Math.cos(t),
            o = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t),
                a = Math.cos(n) * e,
                c = Math.sin(n) * e,
                l = Math.sin(t),
                s = l * i - c * o;
            return [Math.atan2(c * i + l * o, a * r + s * u), nt(s * r - a * u)]
        }, e
    }

    function gr(n, t) {
        var e = Math.cos(n),
            r = Math.sin(n);
        return function(u, i, o, a) {
            var c = o * t;
            null != u ? (u = pr(e, u), i = pr(e, i), (o > 0 ? i > u : u > i) && (u += o * Pa)) : (u = n + o * Pa, i = n - .5 * c);
            for (var l, s = u; o > 0 ? s > i : i > s; s -= c) a.point((l = xe([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1])
        }
    }

    function pr(n, t) {
        var e = pe(t);
        e[0] -= n, Me(e);
        var r = Q(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ta) % (2 * Math.PI)
    }

    function vr(n, t, e) {
        var r = ta.range(n, t - Ta, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [n, t]
            })
        }
    }

    function dr(n, t, e) {
        var r = ta.range(n, t - Ta, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [t, n]
            })
        }
    }

    function mr(n) {
        return n.source
    }

    function yr(n) {
        return n.target
    }

    function Mr(n, t, e, r) {
        var u = Math.cos(t),
            i = Math.sin(t),
            o = Math.cos(r),
            a = Math.sin(r),
            c = u * Math.cos(n),
            l = u * Math.sin(n),
            s = o * Math.cos(e),
            f = o * Math.sin(e),
            h = 2 * Math.asin(Math.sqrt(ut(r - t) + u * o * ut(e - n))),
            g = 1 / Math.sin(h),
            p = h ? function(n) {
                var t = Math.sin(n *= h) * g,
                    e = Math.sin(h - n) * g,
                    r = e * c + t * s,
                    u = e * l + t * f,
                    o = e * i + t * a;
                return [Math.atan2(u, r) * Ha, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ha]
            } : function() {
                return [n * Ha, t * Ha]
            };
        return p.distance = h, p
    }

    function xr() {
        function n(n, u) {
            var i = Math.sin(u *= Fa),
                o = Math.cos(u),
                a = va((n *= Fa) - t),
                c = Math.cos(a);
            $c += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
        }
        var t, e, r;
        Bc.point = function(u, i) {
            t = u * Fa, e = Math.sin(i *= Fa), r = Math.cos(i), Bc.point = n
        }, Bc.lineEnd = function() {
            Bc.point = Bc.lineEnd = y
        }
    }

    function br(n, t) {
        function e(t, e) {
            var r = Math.cos(t),
                u = Math.cos(e),
                i = n(r * u);
            return [i * u * Math.sin(t), i * Math.sin(e)]
        }
        return e.invert = function(n, e) {
            var r = Math.sqrt(n * n + e * e),
                u = t(r),
                i = Math.sin(u),
                o = Math.cos(u);
            return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
        }, e
    }

    function _r(n, t) {
        function e(n, t) {
            o > 0 ? -ja + Ta > t && (t = -ja + Ta) : t > ja - Ta && (t = ja - Ta);
            var e = o / Math.pow(u(t), i);
            return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
        }
        var r = Math.cos(n),
            u = function(n) {
                return Math.tan(Da / 4 + n / 2)
            },
            i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
            o = r * Math.pow(u(n), i) / i;
        return i ? (e.invert = function(n, t) {
            var e = o - t,
                r = G(i) * Math.sqrt(n * n + e * e);
            return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - ja]
        }, e) : Sr
    }

    function wr(n, t) {
        function e(n, t) {
            var e = i - t;
            return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
        }
        var r = Math.cos(n),
            u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
            i = r / u + n;
        return va(u) < Ta ? ar : (e.invert = function(n, t) {
            var e = i - t;
            return [Math.atan2(n, e) / u, i - G(u) * Math.sqrt(n * n + e * e)]
        }, e)
    }

    function Sr(n, t) {
        return [n, Math.log(Math.tan(Da / 4 + t / 2))]
    }

    function kr(n) {
        var t, e = ur(n),
            r = e.scale,
            u = e.translate,
            i = e.clipExtent;
        return e.scale = function() {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.translate = function() {
            var n = u.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.clipExtent = function(n) {
            var o = i.apply(e, arguments);
            if (o === e) {
                if (t = null == n) {
                    var a = Da * r(),
                        c = u();
                    i([
                        [c[0] - a, c[1] - a],
                        [c[0] + a, c[1] + a]
                    ])
                }
            } else t && (o = null);
            return o
        }, e.clipExtent(null)
    }

    function Er(n, t) {
        return [Math.log(Math.tan(Da / 4 + t / 2)), -n]
    }

    function Ar(n) {
        return n[0]
    }

    function Nr(n) {
        return n[1]
    }

    function Cr(n) {
        for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
            for (; r > 1 && K(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;) --r;
            e[r++] = u
        }
        return e.slice(0, r)
    }

    function zr(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }

    function qr(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
    }

    function Lr(n, t, e, r) {
        var u = n[0],
            i = e[0],
            o = t[0] - u,
            a = r[0] - i,
            c = n[1],
            l = e[1],
            s = t[1] - c,
            f = r[1] - l,
            h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
        return [u + h * o, c + h * s]
    }

    function Tr(n) {
        var t = n[0],
            e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1])
    }

    function Rr() {
        tu(this), this.edge = this.site = this.circle = null
    }

    function Dr(n) {
        var t = ol.pop() || new Rr;
        return t.site = n, t
    }

    function Pr(n) {
        Xr(n), rl.remove(n), ol.push(n), tu(n)
    }

    function Ur(n) {
        var t = n.circle,
            e = t.x,
            r = t.cy,
            u = {
                x: e,
                y: r
            },
            i = n.P,
            o = n.N,
            a = [n];
        Pr(n);
        for (var c = i; c.circle && va(e - c.circle.x) < Ta && va(r - c.circle.cy) < Ta;) i = c.P, a.unshift(c), Pr(c), c = i;
        a.unshift(c), Xr(c);
        for (var l = o; l.circle && va(e - l.circle.x) < Ta && va(r - l.circle.cy) < Ta;) o = l.N, a.push(l), Pr(l), l = o;
        a.push(l), Xr(l);
        var s, f = a.length;
        for (s = 1; f > s; ++s) l = a[s], c = a[s - 1], Kr(l.edge, c.site, l.site, u);
        c = a[0], l = a[f - 1], l.edge = Jr(c.site, l.site, null, u), Vr(c), Vr(l)
    }

    function jr(n) {
        for (var t, e, r, u, i = n.x, o = n.y, a = rl._; a;)
            if (r = Fr(a, o) - i, r > Ta) a = a.L;
            else {
                if (u = i - Hr(a, o), !(u > Ta)) {
                    r > -Ta ? (t = a.P, e = a) : u > -Ta ? (t = a, e = a.N) : t = e = a;
                    break
                }
                if (!a.R) {
                    t = a;
                    break
                }
                a = a.R
            }
        var c = Dr(n);
        if (rl.insert(t, c), t || e) {
            if (t === e) return Xr(t), e = Dr(t.site), rl.insert(c, e), c.edge = e.edge = Jr(t.site, c.site), Vr(t), Vr(e), void 0;
            if (!e) return c.edge = Jr(t.site, c.site), void 0;
            Xr(t), Xr(e);
            var l = t.site,
                s = l.x,
                f = l.y,
                h = n.x - s,
                g = n.y - f,
                p = e.site,
                v = p.x - s,
                d = p.y - f,
                m = 2 * (h * d - g * v),
                y = h * h + g * g,
                M = v * v + d * d,
                x = {
                    x: (d * y - g * M) / m + s,
                    y: (h * M - v * y) / m + f
                };
            Kr(e.edge, l, p, x), c.edge = Jr(l, n, null, x), e.edge = Jr(n, p, null, x), Vr(t), Vr(e)
        }
    }

    function Fr(n, t) {
        var e = n.site,
            r = e.x,
            u = e.y,
            i = u - t;
        if (!i) return r;
        var o = n.P;
        if (!o) return -1 / 0;
        e = o.site;
        var a = e.x,
            c = e.y,
            l = c - t;
        if (!l) return a;
        var s = a - r,
            f = 1 / i - 1 / l,
            h = s / l;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + r : (r + a) / 2
    }

    function Hr(n, t) {
        var e = n.N;
        if (e) return Fr(e, t);
        var r = n.site;
        return r.y === t ? r.x : 1 / 0
    }

    function Or(n) {
        this.site = n, this.edges = []
    }

    function Yr(n) {
        for (var t, e, r, u, i, o, a, c, l, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = el, d = v.length; d--;)
            if (i = v[d], i && i.prepare())
                for (a = i.edges, c = a.length, o = 0; c > o;) s = a[o].end(), r = s.x, u = s.y, l = a[++o % c].start(), t = l.x, e = l.y, (va(r - t) > Ta || va(u - e) > Ta) && (a.splice(o, 0, new Qr(Gr(i.site, s, va(r - f) < Ta && p - u > Ta ? {
                    x: f,
                    y: va(t - f) < Ta ? e : p
                } : va(u - p) < Ta && h - r > Ta ? {
                    x: va(e - p) < Ta ? t : h,
                    y: p
                } : va(r - h) < Ta && u - g > Ta ? {
                    x: h,
                    y: va(t - h) < Ta ? e : g
                } : va(u - g) < Ta && r - f > Ta ? {
                    x: va(e - g) < Ta ? t : f,
                    y: g
                } : null), i.site, null)), ++c)
    }

    function Ir(n, t) {
        return t.angle - n.angle
    }

    function Zr() {
        tu(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Vr(n) {
        var t = n.P,
            e = n.N;
        if (t && e) {
            var r = t.site,
                u = n.site,
                i = e.site;
            if (r !== i) {
                var o = u.x,
                    a = u.y,
                    c = r.x - o,
                    l = r.y - a,
                    s = i.x - o,
                    f = i.y - a,
                    h = 2 * (c * f - l * s);
                if (!(h >= -Ra)) {
                    var g = c * c + l * l,
                        p = s * s + f * f,
                        v = (f * g - l * p) / h,
                        d = (c * p - s * g) / h,
                        f = d + a,
                        m = al.pop() || new Zr;
                    m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
                    for (var y = null, M = il._; M;)
                        if (m.y < M.y || m.y === M.y && m.x <= M.x) {
                            if (!M.L) {
                                y = M.P;
                                break
                            }
                            M = M.L
                        } else {
                            if (!M.R) {
                                y = M;
                                break
                            }
                            M = M.R
                        }
                    il.insert(y, m), y || (ul = m)
                }
            }
        }
    }

    function Xr(n) {
        var t = n.circle;
        t && (t.P || (ul = t.N), il.remove(t), al.push(t), tu(t), n.circle = null)
    }

    function $r(n) {
        for (var t, e = tl, r = Oe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;) t = e[u], (!Br(t, n) || !r(t) || va(t.a.x - t.b.x) < Ta && va(t.a.y - t.b.y) < Ta) && (t.a = t.b = null, e.splice(u, 1))
    }

    function Br(n, t) {
        var e = n.b;
        if (e) return !0;
        var r, u, i = n.a,
            o = t[0][0],
            a = t[1][0],
            c = t[0][1],
            l = t[1][1],
            s = n.l,
            f = n.r,
            h = s.x,
            g = s.y,
            p = f.x,
            v = f.y,
            d = (h + p) / 2,
            m = (g + v) / 2;
        if (v === g) {
            if (o > d || d >= a) return;
            if (h > p) {
                if (i) {
                    if (i.y >= l) return
                } else i = {
                    x: d,
                    y: c
                };
                e = {
                    x: d,
                    y: l
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: d,
                    y: l
                };
                e = {
                    x: d,
                    y: c
                }
            }
        } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)
            if (h > p) {
                if (i) {
                    if (i.y >= l) return
                } else i = {
                    x: (c - u) / r,
                    y: c
                };
                e = {
                    x: (l - u) / r,
                    y: l
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: (l - u) / r,
                    y: l
                };
                e = {
                    x: (c - u) / r,
                    y: c
                }
            } else if (v > g) {
            if (i) {
                if (i.x >= a) return
            } else i = {
                x: o,
                y: r * o + u
            };
            e = {
                x: a,
                y: r * a + u
            }
        } else {
            if (i) {
                if (i.x < o) return
            } else i = {
                x: a,
                y: r * a + u
            };
            e = {
                x: o,
                y: r * o + u
            }
        }
        return n.a = i, n.b = e, !0
    }

    function Wr(n, t) {
        this.l = n, this.r = t, this.a = this.b = null
    }

    function Jr(n, t, e, r) {
        var u = new Wr(n, t);
        return tl.push(u), e && Kr(u, n, t, e), r && Kr(u, t, n, r), el[n.i].edges.push(new Qr(u, n, t)), el[t.i].edges.push(new Qr(u, t, n)), u
    }

    function Gr(n, t, e) {
        var r = new Wr(n, null);
        return r.a = t, r.b = e, tl.push(r), r
    }

    function Kr(n, t, e, r) {
        n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
    }

    function Qr(n, t, e) {
        var r = n.a,
            u = n.b;
        this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
    }

    function nu() {
        this._ = null
    }

    function tu(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null
    }

    function eu(n, t) {
        var e = t,
            r = t.R,
            u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function ru(n, t) {
        var e = t,
            r = t.L,
            u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function uu(n) {
        for (; n.L;) n = n.L;
        return n
    }

    function iu(n, t) {
        var e, r, u, i = n.sort(ou).pop();
        for (tl = [], el = new Array(n.length), rl = new nu, il = new nu;;)
            if (u = ul, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== e || i.y !== r) && (el[i.i] = new Or(i), jr(i), e = i.x, r = i.y), i = n.pop();
            else {
                if (!u) break;
                Ur(u.arc)
            }
        t && ($r(t), Yr(t));
        var o = {
            cells: el,
            edges: tl
        };
        return rl = il = tl = el = null, o
    }

    function ou(n, t) {
        return t.y - n.y || t.x - n.x
    }

    function au(n, t, e) {
        return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
    }

    function cu(n) {
        return n.x
    }

    function lu(n) {
        return n.y
    }

    function su() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function fu(n, t, e, r, u, i) {
        if (!n(t, e, r, u, i)) {
            var o = .5 * (e + u),
                a = .5 * (r + i),
                c = t.nodes;
            c[0] && fu(n, c[0], e, r, o, a), c[1] && fu(n, c[1], o, r, u, a), c[2] && fu(n, c[2], e, a, o, i), c[3] && fu(n, c[3], o, a, u, i)
        }
    }

    function hu(n, t, e, r, u, i, o) {
        var a, c = 1 / 0;
        return function l(n, s, f, h, g) {
            if (!(s > i || f > o || r > h || u > g)) {
                if (p = n.point) {
                    var p, v = t - p[0],
                        d = e - p[1],
                        m = v * v + d * d;
                    if (c > m) {
                        var y = Math.sqrt(c = m);
                        r = t - y, u = e - y, i = t + y, o = e + y, a = p
                    }
                }
                for (var M = n.nodes, x = .5 * (s + h), b = .5 * (f + g), _ = t >= x, w = e >= b, S = w << 1 | _, k = S + 4; k > S; ++S)
                    if (n = M[3 & S]) switch (3 & S) {
                        case 0:
                            l(n, s, f, x, b);
                            break;
                        case 1:
                            l(n, x, f, h, b);
                            break;
                        case 2:
                            l(n, s, b, x, g);
                            break;
                        case 3:
                            l(n, x, b, h, g)
                    }
            }
        }(n, r, u, i, o), a
    }

    function gu(n, t) {
        n = ta.rgb(n), t = ta.rgb(t);
        var e = n.r,
            r = n.g,
            u = n.b,
            i = t.r - e,
            o = t.g - r,
            a = t.b - u;
        return function(n) {
            return "#" + Mt(Math.round(e + i * n)) + Mt(Math.round(r + o * n)) + Mt(Math.round(u + a * n))
        }
    }

    function pu(n, t) {
        var e, r = {},
            u = {};
        for (e in n) e in t ? r[e] = mu(n[e], t[e]) : u[e] = n[e];
        for (e in t) e in n || (u[e] = t[e]);
        return function(n) {
            for (e in r) u[e] = r[e](n);
            return u
        }
    }

    function vu(n, t) {
        return n = +n, t = +t,
            function(e) {
                return n * (1 - e) + t * e
            }
    }

    function du(n, t) {
        var e, r, u, i = ll.lastIndex = sl.lastIndex = 0,
            o = -1,
            a = [],
            c = [];
        for (n += "", t += "";
            (e = ll.exec(n)) && (r = sl.exec(t));)(u = r.index) > i && (u = t.slice(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
            i: o,
            x: vu(e, r)
        })), i = sl.lastIndex;
        return i < t.length && (u = t.slice(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function(n) {
            return t(n) + ""
        }) : function() {
            return t
        } : (t = c.length, function(n) {
            for (var e, r = 0; t > r; ++r) a[(e = c[r]).i] = e.x(n);
            return a.join("")
        })
    }

    function mu(n, t) {
        for (var e, r = ta.interpolators.length; --r >= 0 && !(e = ta.interpolators[r](n, t)););
        return e
    }

    function yu(n, t) {
        var e, r = [],
            u = [],
            i = n.length,
            o = t.length,
            a = Math.min(n.length, t.length);
        for (e = 0; a > e; ++e) r.push(mu(n[e], t[e]));
        for (; i > e; ++e) u[e] = n[e];
        for (; o > e; ++e) u[e] = t[e];
        return function(n) {
            for (e = 0; a > e; ++e) u[e] = r[e](n);
            return u
        }
    }

    function Mu(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }

    function xu(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }

    function bu(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }

    function _u(n) {
        return n * n
    }

    function wu(n) {
        return n * n * n
    }

    function Su(n) {
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        var t = n * n,
            e = t * n;
        return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
    }

    function ku(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }

    function Eu(n) {
        return 1 - Math.cos(n * ja)
    }

    function Au(n) {
        return Math.pow(2, 10 * (n - 1))
    }

    function Nu(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function Cu(n, t) {
        var e;
        return arguments.length < 2 && (t = .45), arguments.length ? e = t / Pa * Math.asin(1 / n) : (n = 1, e = t / 4),
            function(r) {
                return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Pa / t)
            }
    }

    function zu(n) {
        return n || (n = 1.70158),
            function(t) {
                return t * t * ((n + 1) * t - n)
            }
    }

    function qu(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }

    function Lu(n, t) {
        n = ta.hcl(n), t = ta.hcl(t);
        var e = n.h,
            r = n.c,
            u = n.l,
            i = t.h - e,
            o = t.c - r,
            a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
            function(n) {
                return lt(e + i * n, r + o * n, u + a * n) + ""
            }
    }

    function Tu(n, t) {
        n = ta.hsl(n), t = ta.hsl(t);
        var e = n.h,
            r = n.s,
            u = n.l,
            i = t.h - e,
            o = t.s - r,
            a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
            function(n) {
                return at(e + i * n, r + o * n, u + a * n) + ""
            }
    }

    function Ru(n, t) {
        n = ta.lab(n), t = ta.lab(t);
        var e = n.l,
            r = n.a,
            u = n.b,
            i = t.l - e,
            o = t.a - r,
            a = t.b - u;
        return function(n) {
            return ft(e + i * n, r + o * n, u + a * n) + ""
        }
    }

    function Du(n, t) {
        return t -= n,
            function(e) {
                return Math.round(n + t * e)
            }
    }

    function Pu(n) {
        var t = [n.a, n.b],
            e = [n.c, n.d],
            r = ju(t),
            u = Uu(t, e),
            i = ju(Fu(e, t, -u)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ha, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ha : 0
    }

    function Uu(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }

    function ju(n) {
        var t = Math.sqrt(Uu(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }

    function Fu(n, t, e) {
        return n[0] += e * t[0], n[1] += e * t[1], n
    }

    function Hu(n, t) {
        var e, r = [],
            u = [],
            i = ta.transform(n),
            o = ta.transform(t),
            a = i.translate,
            c = o.translate,
            l = i.rotate,
            s = o.rotate,
            f = i.skew,
            h = o.skew,
            g = i.scale,
            p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
                i: 1,
                x: vu(a[0], c[0])
            }, {
                i: 3,
                x: vu(a[1], c[1])
            })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({
                i: r.push(r.pop() + "rotate(", null, ")") - 2,
                x: vu(l, s)
            })) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? u.push({
                i: r.push(r.pop() + "skewX(", null, ")") - 2,
                x: vu(f, h)
            }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
                i: e - 4,
                x: vu(g[0], p[0])
            }, {
                i: e - 2,
                x: vu(g[1], p[1])
            })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length,
            function(n) {
                for (var t, i = -1; ++i < e;) r[(t = u[i]).i] = t.x(n);
                return r.join("")
            }
    }

    function Ou(n, t) {
        return t = (t -= n = +n) || 1 / t,
            function(e) {
                return (e - n) / t
            }
    }

    function Yu(n, t) {
        return t = (t -= n = +n) || 1 / t,
            function(e) {
                return Math.max(0, Math.min(1, (e - n) / t))
            }
    }

    function Iu(n) {
        for (var t = n.source, e = n.target, r = Vu(t, e), u = [t]; t !== r;) t = t.parent, u.push(t);
        for (var i = u.length; e !== r;) u.splice(i, 0, e), e = e.parent;
        return u
    }

    function Zu(n) {
        for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
        return t.push(n), t
    }

    function Vu(n, t) {
        if (n === t) return n;
        for (var e = Zu(n), r = Zu(t), u = e.pop(), i = r.pop(), o = null; u === i;) o = u, u = e.pop(), i = r.pop();
        return o
    }

    function Xu(n) {
        n.fixed |= 2
    }

    function $u(n) {
        n.fixed &= -7
    }

    function Bu(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y
    }

    function Wu(n) {
        n.fixed &= -5
    }

    function Ju(n, t, e) {
        var r = 0,
            u = 0;
        if (n.charge = 0, !n.leaf)
            for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) i = o[c], null != i && (Ju(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
            var l = t * e[n.point.index];
            n.charge += n.pointCharge = l, r += l * n.point.x, u += l * n.point.y
        }
        n.cx = r / n.charge, n.cy = u / n.charge
    }

    function Gu(n, t) {
        return ta.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ri, n
    }

    function Ku(n, t) {
        for (var e = [n]; null != (n = e.pop());)
            if (t(n), (u = n.children) && (r = u.length))
                for (var r, u; --r >= 0;) e.push(u[r])
    }

    function Qu(n, t) {
        for (var e = [n], r = []; null != (n = e.pop());)
            if (r.push(n), (i = n.children) && (u = i.length))
                for (var u, i, o = -1; ++o < u;) e.push(i[o]);
        for (; null != (n = r.pop());) t(n)
    }

    function ni(n) {
        return n.children
    }

    function ti(n) {
        return n.value
    }

    function ei(n, t) {
        return t.value - n.value
    }

    function ri(n) {
        return ta.merge(n.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                }
            })
        }))
    }

    function ui(n) {
        return n.x
    }

    function ii(n) {
        return n.y
    }

    function oi(n, t, e) {
        n.y0 = t, n.y = e
    }

    function ai(n) {
        return ta.range(n.length)
    }

    function ci(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
        return r
    }

    function li(n) {
        for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
        return r
    }

    function si(n) {
        return n.reduce(fi, 0)
    }

    function fi(n, t) {
        return n + t[1]
    }

    function hi(n, t) {
        return gi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function gi(n, t) {
        for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) i[e] = u * e + r;
        return i
    }

    function pi(n) {
        return [ta.min(n), ta.max(n)]
    }

    function vi(n, t) {
        return n.value - t.value
    }

    function di(n, t) {
        var e = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
    }

    function mi(n, t) {
        n._pack_next = t, t._pack_prev = n
    }

    function yi(n, t) {
        var e = t.x - n.x,
            r = t.y - n.y,
            u = n.r + t.r;
        return .999 * u * u > e * e + r * r
    }

    function Mi(n) {
        function t(n) {
            s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
        }
        if ((e = n.children) && (l = e.length)) {
            var e, r, u, i, o, a, c, l, s = 1 / 0,
                f = -1 / 0,
                h = 1 / 0,
                g = -1 / 0;
            if (e.forEach(xi), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2))
                for (i = e[2], wi(r, u, i), t(i), di(r, i), r._pack_prev = i, di(i, u), u = r._pack_next, o = 3; l > o; o++) {
                    wi(r, u, i = e[o]);
                    var p = 0,
                        v = 1,
                        d = 1;
                    for (a = u._pack_next; a !== u; a = a._pack_next, v++)
                        if (yi(a, i)) {
                            p = 1;
                            break
                        }
                    if (1 == p)
                        for (c = r._pack_prev; c !== a._pack_prev && !yi(c, i); c = c._pack_prev, d++);
                    p ? (d > v || v == d && u.r < r.r ? mi(r, u = a) : mi(r = c, u), o--) : (di(r, i), u = i, t(i))
                }
            var m = (s + f) / 2,
                y = (h + g) / 2,
                M = 0;
            for (o = 0; l > o; o++) i = e[o], i.x -= m, i.y -= y, M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = M, e.forEach(bi)
        }
    }

    function xi(n) {
        n._pack_next = n._pack_prev = n
    }

    function bi(n) {
        delete n._pack_next, delete n._pack_prev
    }

    function _i(n, t, e, r) {
        var u = n.children;
        if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
            for (var i = -1, o = u.length; ++i < o;) _i(u[i], t, e, r)
    }

    function wi(n, t, e) {
        var r = n.r + e.r,
            u = t.x - n.x,
            i = t.y - n.y;
        if (r && (u || i)) {
            var o = t.r + e.r,
                a = u * u + i * i;
            o *= o, r *= r;
            var c = .5 + (r - o) / (2 * a),
                l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
            e.x = n.x + c * u + l * i, e.y = n.y + c * i - l * u
        } else e.x = n.x + r, e.y = n.y
    }

    function Si(n, t) {
        return n.parent == t.parent ? 1 : 2
    }

    function ki(n) {
        var t = n.children;
        return t.length ? t[0] : n.t
    }

    function Ei(n) {
        var t, e = n.children;
        return (t = e.length) ? e[t - 1] : n.t
    }

    function Ai(n, t, e) {
        var r = e / (t.i - n.i);
        t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e
    }

    function Ni(n) {
        for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;) t = u[i], t.z += e, t.m += e, e += t.s + (r += t.c)
    }

    function Ci(n, t, e) {
        return n.a.parent === t.parent ? n.a : e
    }

    function zi(n) {
        return 1 + ta.max(n, function(n) {
            return n.y
        })
    }

    function qi(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }, 0) / n.length
    }

    function Li(n) {
        var t = n.children;
        return t && t.length ? Li(t[0]) : n
    }

    function Ti(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Ti(e[t - 1]) : n
    }

    function Ri(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        }
    }

    function Di(n, t) {
        var e = n.x + t[3],
            r = n.y + t[0],
            u = n.dx - t[1] - t[3],
            i = n.dy - t[0] - t[2];
        return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
            x: e,
            y: r,
            dx: u,
            dy: i
        }
    }

    function Pi(n) {
        var t = n[0],
            e = n[n.length - 1];
        return e > t ? [t, e] : [e, t]
    }

    function Ui(n) {
        return n.rangeExtent ? n.rangeExtent() : Pi(n.range())
    }

    function ji(n, t, e, r) {
        var u = e(n[0], n[1]),
            i = r(t[0], t[1]);
        return function(n) {
            return i(u(n))
        }
    }

    function Fi(n, t) {
        var e, r = 0,
            u = n.length - 1,
            i = n[r],
            o = n[u];
        return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
    }

    function Hi(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n
            }
        } : bl
    }

    function Oi(n, t, e, r) {
        var u = [],
            i = [],
            o = 0,
            a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
        return function(t) {
            var e = ta.bisect(n, t, 1, a) - 1;
            return i[e](u[e](t))
        }
    }

    function Yi(n, t, e, r) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Oi : ji,
                c = r ? Yu : Ou;
            return o = u(n, t, c, e), a = u(t, n, c, mu), i
        }

        function i(n) {
            return o(n)
        }
        var o, a;
        return i.invert = function(n) {
            return a(n)
        }, i.domain = function(t) {
            return arguments.length ? (n = t.map(Number), u()) : n
        }, i.range = function(n) {
            return arguments.length ? (t = n, u()) : t
        }, i.rangeRound = function(n) {
            return i.range(n).interpolate(Du)
        }, i.clamp = function(n) {
            return arguments.length ? (r = n, u()) : r
        }, i.interpolate = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, i.ticks = function(t) {
            return Xi(n, t)
        }, i.tickFormat = function(t, e) {
            return $i(n, t, e)
        }, i.nice = function(t) {
            return Zi(n, t), u()
        }, i.copy = function() {
            return Yi(n, t, e, r)
        }, u()
    }

    function Ii(n, t) {
        return ta.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function Zi(n, t) {
        return Fi(n, Hi(Vi(n, t)[2]))
    }

    function Vi(n, t) {
        null == t && (t = 10);
        var e = Pi(n),
            r = e[1] - e[0],
            u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
            i = t / r * u;
        return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
    }

    function Xi(n, t) {
        return ta.range.apply(ta, Vi(n, t))
    }

    function $i(n, t, e) {
        var r = Vi(n, t);
        if (e) {
            var u = lc.exec(e);
            if (u.shift(), "s" === u[8]) {
                var i = ta.formatPrefix(Math.max(va(r[0]), va(r[1])));
                return u[7] || (u[7] = "." + Bi(i.scale(r[2]))), u[8] = "f", e = ta.format(u.join("")),
                    function(n) {
                        return e(i.scale(n)) + i.symbol
                    }
            }
            u[7] || (u[7] = "." + Wi(u[8], r)), e = u.join("")
        } else e = ",." + Bi(r[2]) + "f";
        return ta.format(e)
    }

    function Bi(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }

    function Wi(n, t) {
        var e = Bi(t[2]);
        return n in _l ? Math.abs(e - Bi(Math.max(va(t[0]), va(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
    }

    function Ji(n, t, e, r) {
        function u(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
        }

        function i(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n)
        }

        function o(t) {
            return n(u(t))
        }
        return o.invert = function(t) {
            return i(n.invert(t))
        }, o.domain = function(t) {
            return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r
        }, o.base = function(e) {
            return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
        }, o.nice = function() {
            var t = Fi(r.map(u), e ? Math : Sl);
            return n.domain(t), r = t.map(i), o
        }, o.ticks = function() {
            var n = Pi(r),
                o = [],
                a = n[0],
                c = n[1],
                l = Math.floor(u(a)),
                s = Math.ceil(u(c)),
                f = t % 1 ? 2 : t;
            if (isFinite(s - l)) {
                if (e) {
                    for (; s > l; l++)
                        for (var h = 1; f > h; h++) o.push(i(l) * h);
                    o.push(i(l))
                } else
                    for (o.push(i(l)); l++ < s;)
                        for (var h = f - 1; h > 0; h--) o.push(i(l) * h);
                for (l = 0; o[l] < a; l++);
                for (s = o.length; o[s - 1] > c; s--);
                o = o.slice(l, s)
            }
            return o
        }, o.tickFormat = function(n, t) {
            if (!arguments.length) return wl;
            arguments.length < 2 ? t = wl : "function" != typeof t && (t = ta.format(t));
            var r, a = Math.max(.1, n / o.ticks().length),
                c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function(n) {
                return n / i(c(u(n) + r)) <= a ? t(n) : ""
            }
        }, o.copy = function() {
            return Ji(n.copy(), t, e, r)
        }, Ii(o, n)
    }

    function Gi(n, t, e) {
        function r(t) {
            return n(u(t))
        }
        var u = Ki(t),
            i = Ki(1 / t);
        return r.invert = function(t) {
            return i(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
        }, r.ticks = function(n) {
            return Xi(e, n)
        }, r.tickFormat = function(n, t) {
            return $i(e, n, t)
        }, r.nice = function(n) {
            return r.domain(Zi(e, n))
        }, r.exponent = function(o) {
            return arguments.length ? (u = Ki(t = o), i = Ki(1 / t), n.domain(e.map(u)), r) : t
        }, r.copy = function() {
            return Gi(n.copy(), t, e)
        }, Ii(r, n)
    }

    function Ki(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }

    function Qi(n, t) {
        function e(e) {
            return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]
        }

        function r(t, e) {
            return ta.range(n.length).map(function(n) {
                return t + e * n
            })
        }
        var u, i, o;
        return e.domain = function(r) {
            if (!arguments.length) return n;
            n = [], u = new a;
            for (var i, o = -1, c = r.length; ++o < c;) u.has(i = r[o]) || u.set(i, n.push(i));
            return e[t.t].apply(e, t.a)
        }, e.range = function(n) {
            return arguments.length ? (i = n, o = 0, t = {
                t: "range",
                a: arguments
            }, e) : i
        }, e.rangePoints = function(u, a) {
            arguments.length < 2 && (a = 0);
            var c = u[0],
                l = u[1],
                s = n.length < 2 ? (c = (c + l) / 2, 0) : (l - c) / (n.length - 1 + a);
            return i = r(c + s * a / 2, s), o = 0, t = {
                t: "rangePoints",
                a: arguments
            }, e
        }, e.rangeRoundPoints = function(u, a) {
            arguments.length < 2 && (a = 0);
            var c = u[0],
                l = u[1],
                s = n.length < 2 ? (c = l = Math.round((c + l) / 2), 0) : 0 | (l - c) / (n.length - 1 + a);
            return i = r(c + Math.round(s * a / 2 + (l - c - (n.length - 1 + a) * s) / 2), s), o = 0, t = {
                t: "rangeRoundPoints",
                a: arguments
            }, e
        }, e.rangeBands = function(u, a, c) {
            arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
            var l = u[1] < u[0],
                s = u[l - 0],
                f = u[1 - l],
                h = (f - s) / (n.length - a + 2 * c);
            return i = r(s + h * c, h), l && i.reverse(), o = h * (1 - a), t = {
                t: "rangeBands",
                a: arguments
            }, e
        }, e.rangeRoundBands = function(u, a, c) {
            arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a);
            var l = u[1] < u[0],
                s = u[l - 0],
                f = u[1 - l],
                h = Math.floor((f - s) / (n.length - a + 2 * c));
            return i = r(s + Math.round((f - s - (n.length - a) * h) / 2), h), l && i.reverse(), o = Math.round(h * (1 - a)), t = {
                t: "rangeRoundBands",
                a: arguments
            }, e
        }, e.rangeBand = function() {
            return o
        }, e.rangeExtent = function() {
            return Pi(t.a[0])
        }, e.copy = function() {
            return Qi(n, t)
        }, e.domain(n)
    }

    function no(r, u) {
        function i() {
            var n = 0,
                t = u.length;
            for (a = []; ++n < t;) a[n - 1] = ta.quantile(r, n / t);
            return o
        }

        function o(n) {
            return isNaN(n = +n) ? void 0 : u[ta.bisect(a, n)]
        }
        var a;
        return o.domain = function(u) {
            return arguments.length ? (r = u.map(t).filter(e).sort(n), i()) : r
        }, o.range = function(n) {
            return arguments.length ? (u = n, i()) : u
        }, o.quantiles = function() {
            return a
        }, o.invertExtent = function(n) {
            return n = u.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]]
        }, o.copy = function() {
            return no(r, u)
        }, i()
    }

    function to(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
        }

        function u() {
            return i = e.length / (t - n), o = e.length - 1, r
        }
        var i, o;
        return r.domain = function(e) {
            return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
        }, r.range = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, r.invertExtent = function(t) {
            return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
        }, r.copy = function() {
            return to(n, t, e)
        }, u()
    }

    function eo(n, t) {
        function e(e) {
            return e >= e ? t[ta.bisect(n, e)] : void 0
        }
        return e.domain = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.range = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.invertExtent = function(e) {
            return e = t.indexOf(e), [n[e - 1], n[e]]
        }, e.copy = function() {
            return eo(n, t)
        }, e
    }

    function ro(n) {
        function t(n) {
            return +n
        }
        return t.invert = t, t.domain = t.range = function(e) {
            return arguments.length ? (n = e.map(t), t) : n
        }, t.ticks = function(t) {
            return Xi(n, t)
        }, t.tickFormat = function(t, e) {
            return $i(n, t, e)
        }, t.copy = function() {
            return ro(n)
        }, t
    }

    function uo() {
        return 0
    }

    function io(n) {
        return n.innerRadius
    }

    function oo(n) {
        return n.outerRadius
    }

    function ao(n) {
        return n.startAngle
    }

    function co(n) {
        return n.endAngle
    }

    function lo(n) {
        return n && n.padAngle
    }

    function so(n, t, e, r) {
        return (n - e) * t - (t - r) * n > 0 ? 0 : 1
    }

    function fo(n, t, e, r, u) {
        var i = n[0] - t[0],
            o = n[1] - t[1],
            a = (u ? r : -r) / Math.sqrt(i * i + o * o),
            c = a * o,
            l = -a * i,
            s = n[0] + c,
            f = n[1] + l,
            h = t[0] + c,
            g = t[1] + l,
            p = (s + h) / 2,
            v = (f + g) / 2,
            d = h - s,
            m = g - f,
            y = d * d + m * m,
            M = e - r,
            x = s * g - h * f,
            b = (0 > m ? -1 : 1) * Math.sqrt(M * M * y - x * x),
            _ = (x * m - d * b) / y,
            w = (-x * d - m * b) / y,
            S = (x * m + d * b) / y,
            k = (-x * d + m * b) / y,
            E = _ - p,
            A = w - v,
            N = S - p,
            C = k - v;
        return E * E + A * A > N * N + C * C && (_ = S, w = k), [
            [_ - c, w - l],
            [_ * e / M, w * e / M]
        ]
    }

    function ho(n) {
        function t(t) {
            function o() {
                l.push("M", i(n(s), a))
            }
            for (var c, l = [], s = [], f = -1, h = t.length, g = kt(e), p = kt(r); ++f < h;) u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(), s = []);
            return s.length && o(), l.length ? l.join("") : null
        }
        var e = Ar,
            r = Nr,
            u = Ne,
            i = go,
            o = i.key,
            a = .7;
        return t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.defined = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.interpolate = function(n) {
            return arguments.length ? (o = "function" == typeof n ? i = n : (i = zl.get(n) || go).key, t) : o
        }, t.tension = function(n) {
            return arguments.length ? (a = n, t) : a
        }, t
    }

    function go(n) {
        return n.join("L")
    }

    function po(n) {
        return go(n) + "Z"
    }

    function vo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
        return e > 1 && u.push("H", r[0]), u.join("")
    }

    function mo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("V", (r = n[t])[1], "H", r[0]);
        return u.join("")
    }

    function yo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r = n[t])[0], "V", r[1]);
        return u.join("")
    }

    function Mo(n, t) {
        return n.length < 4 ? go(n) : n[1] + _o(n.slice(1, -1), wo(n, t))
    }

    function xo(n, t) {
        return n.length < 3 ? go(n) : n[0] + _o((n.push(n[0]), n), wo([n[n.length - 2]].concat(n, [n[1]]), t))
    }

    function bo(n, t) {
        return n.length < 3 ? go(n) : n[0] + _o(n, wo(n, t))
    }

    function _o(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return go(n);
        var e = n.length != t.length,
            r = "",
            u = n[0],
            i = n[1],
            o = t[0],
            a = o,
            c = 1;
        if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
            a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
            for (var l = 2; l < t.length; l++, c++) i = n[c], a = t[l], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
        }
        if (e) {
            var s = n[c];
            r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1]
        }
        return r
    }

    function wo(n, t) {
        for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
        return r
    }

    function So(n) {
        if (n.length < 3) return go(n);
        var t = 1,
            e = n.length,
            r = n[0],
            u = r[0],
            i = r[1],
            o = [u, u, u, (r = n[1])[0]],
            a = [i, i, i, r[1]],
            c = [u, ",", i, "L", No(Tl, o), ",", No(Tl, a)];
        for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Co(c, o, a);
        return n.pop(), c.push("L", r), c.join("")
    }

    function ko(n) {
        if (n.length < 4) return go(n);
        for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;) t = n[r], i.push(t[0]), o.push(t[1]);
        for (e.push(No(Tl, i) + "," + No(Tl, o)), --r; ++r < u;) t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Co(e, i, o);
        return e.join("")
    }

    function Eo(n) {
        for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;) e = n[r % u], o.push(e[0]), a.push(e[1]);
        for (t = [No(Tl, o), ",", No(Tl, a)], --r; ++r < i;) e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Co(t, o, a);
        return t.join("")
    }

    function Ao(n, t) {
        var e = n.length - 1;
        if (e)
            for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e;) r = n[l], u = l / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
        return So(n)
    }

    function No(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }

    function Co(n, t, e) {
        n.push("C", No(ql, t), ",", No(ql, e), ",", No(Ll, t), ",", No(Ll, e), ",", No(Tl, t), ",", No(Tl, e))
    }

    function zo(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }

    function qo(n) {
        for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = zo(u, i); ++t < e;) r[t] = (o + (o = zo(u = i, i = n[t + 1]))) / 2;
        return r[t] = o, r
    }

    function Lo(n) {
        for (var t, e, r, u, i = [], o = qo(n), a = -1, c = n.length - 1; ++a < c;) t = zo(n[a], n[a + 1]), va(t) < Ta ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
        for (a = -1; ++a <= c;) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
        return i
    }

    function To(n) {
        return n.length < 3 ? go(n) : n[0] + _o(n, Lo(n))
    }

    function Ro(n) {
        for (var t, e, r, u = -1, i = n.length; ++u < i;) t = n[u], e = t[0], r = t[1] - ja, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
        return n
    }

    function Do(n) {
        function t(t) {
            function c() {
                v.push("M", a(n(m), f), s, l(n(d.reverse()), f), "Z")
            }
            for (var h, g, p, v = [], d = [], m = [], y = -1, M = t.length, x = kt(e), b = kt(u), _ = e === r ? function() {
                    return g
                } : kt(r), w = u === i ? function() {
                    return p
                } : kt(i); ++y < M;) o.call(this, h = t[y], y) ? (d.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), m.push([+_.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
            return d.length && c(), v.length ? v.join("") : null
        }
        var e = Ar,
            r = Ar,
            u = 0,
            i = Nr,
            o = Ne,
            a = go,
            c = a.key,
            l = a,
            s = "L",
            f = .7;
        return t.x = function(n) {
            return arguments.length ? (e = r = n, t) : r
        }, t.x0 = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.x1 = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (u = i = n, t) : i
        }, t.y0 = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.y1 = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.defined = function(n) {
            return arguments.length ? (o = n, t) : o
        }, t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? a = n : (a = zl.get(n) || go).key, l = a.reverse || a, s = a.closed ? "M" : "L", t) : c
        }, t.tension = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t
    }

    function Po(n) {
        return n.radius
    }

    function Uo(n) {
        return [n.x, n.y]
    }

    function jo(n) {
        return function() {
            var t = n.apply(this, arguments),
                e = t[0],
                r = t[1] - ja;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }

    function Fo() {
        return 64
    }

    function Ho() {
        return "circle"
    }

    function Oo(n) {
        var t = Math.sqrt(n / Da);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function Yo(n) {
        return function() {
            var t, e;
            (t = this[n]) && (e = t[t.active]) && (--t.count ? delete t[t.active] : delete this[n], t.active += .5, e.event && e.event.interrupt.call(this, this.__data__, e.index))
        }
    }

    function Io(n, t, e) {
        return xa(n, Hl), n.namespace = t, n.id = e, n
    }

    function Zo(n, t, e, r) {
        var u = n.id,
            i = n.namespace;
        return H(n, "function" == typeof e ? function(n, o, a) {
            n[i][u].tween.set(t, r(e.call(n, n.__data__, o, a)))
        } : (e = r(e), function(n) {
            n[i][u].tween.set(t, e)
        }))
    }

    function Vo(n) {
        return null == n && (n = ""),
            function() {
                this.textContent = n
            }
    }

    function Xo(n) {
        return null == n ? "__transition__" : "__transition_" + n + "__"
    }

    function $o(n, t, e, r, u) {
        var i = n[e] || (n[e] = {
                active: 0,
                count: 0
            }),
            o = i[r];
        if (!o) {
            var c = u.time;
            o = i[r] = {
                tween: new a,
                time: c,
                delay: u.delay,
                duration: u.duration,
                ease: u.ease,
                index: t
            }, u = null, ++i.count, ta.timer(function(u) {
                function a(e) {
                    if (i.active > r) return s();
                    var u = i[i.active];
                    u && (--i.count, delete i[i.active], u.event && u.event.interrupt.call(n, n.__data__, u.index)), i.active = r, o.event && o.event.start.call(n, n.__data__, t), o.tween.forEach(function(e, r) {
                        (r = r.call(n, n.__data__, t)) && v.push(r)
                    }), h = o.ease, f = o.duration, ta.timer(function() {
                        return p.c = l(e || 1) ? Ne : l, 1
                    }, 0, c)
                }

                function l(e) {
                    if (i.active !== r) return 1;
                    for (var u = e / f, a = h(u), c = v.length; c > 0;) v[--c].call(n, a);
                    return u >= 1 ? (o.event && o.event.end.call(n, n.__data__, t), s()) : void 0
                }

                function s() {
                    return --i.count ? delete i[r] : delete n[e], 1
                }
                var f, h, g = o.delay,
                    p = oc,
                    v = [];
                return p.t = g + c, u >= g ? a(u - g) : (p.c = a, void 0)
            }, 0, c)
        }
    }

    function Bo(n, t, e) {
        n.attr("transform", function(n) {
            var r = t(n);
            return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"
        })
    }

    function Wo(n, t, e) {
        n.attr("transform", function(n) {
            var r = t(n);
            return "translate(0," + (isFinite(r) ? r : e(n)) + ")"
        })
    }

    function Jo(n) {
        return n.toISOString()
    }

    function Go(n, t, e) {
        function r(t) {
            return n(t)
        }

        function u(n, e) {
            var r = n[1] - n[0],
                u = r / e,
                i = ta.bisect(Wl, u);
            return i == Wl.length ? [t.year, Vi(n.map(function(n) {
                return n / 31536e6
            }), e)[2]] : i ? t[u / Wl[i - 1] < Wl[i] / u ? i - 1 : i] : [Kl, Vi(n, e)[2]]
        }
        return r.invert = function(t) {
            return Ko(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain(t), r) : n.domain().map(Ko)
        }, r.nice = function(n, t) {
            function e(e) {
                return !isNaN(e) && !n.range(e, Ko(+e + 1), t).length
            }
            var i = r.domain(),
                o = Pi(i),
                a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
            return a && (n = a[0], t = a[1]), r.domain(Fi(i, t > 1 ? {
                floor: function(t) {
                    for (; e(t = n.floor(t));) t = Ko(t - 1);
                    return t
                },
                ceil: function(t) {
                    for (; e(t = n.ceil(t));) t = Ko(+t + 1);
                    return t
                }
            } : n))
        }, r.ticks = function(n, t) {
            var e = Pi(r.domain()),
                i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
                    range: n
                }, t];
            return i && (n = i[0], t = i[1]), n.range(e[0], Ko(+e[1] + 1), 1 > t ? 1 : t)
        }, r.tickFormat = function() {
            return e
        }, r.copy = function() {
            return Go(n.copy(), t, e)
        }, Ii(r, n)
    }

    function Ko(n) {
        return new Date(n)
    }

    function Qo(n) {
        return JSON.parse(n.responseText)
    }

    function na(n) {
        var t = ua.createRange();
        return t.selectNode(ua.body), t.createContextualFragment(n.responseText)
    }
    var ta = {
        version: "3.5.3"
    };
    Date.now || (Date.now = function() {
        return +new Date
    });
    var ea = [].slice,
        ra = function(n) {
            return ea.call(n)
        },
        ua = document,
        ia = ua.documentElement,
        oa = window;
    try {
        ra(ia.childNodes)[0].nodeType
    } catch (aa) {
        ra = function(n) {
            for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
            return e
        }
    }
    try {
        ua.createElement("div").style.setProperty("opacity", 0, "")
    } catch (ca) {
        var la = oa.Element.prototype,
            sa = la.setAttribute,
            fa = la.setAttributeNS,
            ha = oa.CSSStyleDeclaration.prototype,
            ga = ha.setProperty;
        la.setAttribute = function(n, t) {
            sa.call(this, n, t + "")
        }, la.setAttributeNS = function(n, t, e) {
            fa.call(this, n, t, e + "")
        }, ha.setProperty = function(n, t, e) {
            ga.call(this, n, t + "", e)
        }
    }
    ta.ascending = n, ta.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, ta.min = function(n, t) {
        var e, r, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i;)
                if (null != (r = n[u]) && r >= r) {
                    e = r;
                    break
                }
            for (; ++u < i;) null != (r = n[u]) && e > r && (e = r)
        } else {
            for (; ++u < i;)
                if (null != (r = t.call(n, n[u], u)) && r >= r) {
                    e = r;
                    break
                }
            for (; ++u < i;) null != (r = t.call(n, n[u], u)) && e > r && (e = r)
        }
        return e
    }, ta.max = function(n, t) {
        var e, r, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i;)
                if (null != (r = n[u]) && r >= r) {
                    e = r;
                    break
                }
            for (; ++u < i;) null != (r = n[u]) && r > e && (e = r)
        } else {
            for (; ++u < i;)
                if (null != (r = t.call(n, n[u], u)) && r >= r) {
                    e = r;
                    break
                }
            for (; ++u < i;) null != (r = t.call(n, n[u], u)) && r > e && (e = r)
        }
        return e
    }, ta.extent = function(n, t) {
        var e, r, u, i = -1,
            o = n.length;
        if (1 === arguments.length) {
            for (; ++i < o;)
                if (null != (r = n[i]) && r >= r) {
                    e = u = r;
                    break
                }
            for (; ++i < o;) null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
        } else {
            for (; ++i < o;)
                if (null != (r = t.call(n, n[i], i)) && r >= r) {
                    e = u = r;
                    break
                }
            for (; ++i < o;) null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
        }
        return [e, u]
    }, ta.sum = function(n, t) {
        var r, u = 0,
            i = n.length,
            o = -1;
        if (1 === arguments.length)
            for (; ++o < i;) e(r = +n[o]) && (u += r);
        else
            for (; ++o < i;) e(r = +t.call(n, n[o], o)) && (u += r);
        return u
    }, ta.mean = function(n, r) {
        var u, i = 0,
            o = n.length,
            a = -1,
            c = o;
        if (1 === arguments.length)
            for (; ++a < o;) e(u = t(n[a])) ? i += u : --c;
        else
            for (; ++a < o;) e(u = t(r.call(n, n[a], a))) ? i += u : --c;
        return c ? i / c : void 0
    }, ta.quantile = function(n, t) {
        var e = (n.length - 1) * t + 1,
            r = Math.floor(e),
            u = +n[r - 1],
            i = e - r;
        return i ? u + i * (n[r] - u) : u
    }, ta.median = function(r, u) {
        var i, o = [],
            a = r.length,
            c = -1;
        if (1 === arguments.length)
            for (; ++c < a;) e(i = t(r[c])) && o.push(i);
        else
            for (; ++c < a;) e(i = t(u.call(r, r[c], c))) && o.push(i);
        return o.length ? ta.quantile(o.sort(n), .5) : void 0
    }, ta.variance = function(n, r) {
        var u, i, o = n.length,
            a = 0,
            c = 0,
            l = -1,
            s = 0;
        if (1 === arguments.length)
            for (; ++l < o;) e(u = t(n[l])) && (i = u - a, a += i / ++s, c += i * (u - a));
        else
            for (; ++l < o;) e(u = t(r.call(n, n[l], l))) && (i = u - a, a += i / ++s, c += i * (u - a));
        return s > 1 ? c / (s - 1) : void 0
    }, ta.deviation = function() {
        var n = ta.variance.apply(this, arguments);
        return n ? Math.sqrt(n) : n
    };
    var pa = r(n);
    ta.bisectLeft = pa.left, ta.bisect = ta.bisectRight = pa.right, ta.bisector = function(t) {
        return r(1 === t.length ? function(e, r) {
            return n(t(e), r)
        } : t)
    }, ta.shuffle = function(n, t, e) {
        (i = arguments.length) < 3 && (e = n.length, 2 > i && (t = 0));
        for (var r, u, i = e - t; i;) u = 0 | Math.random() * i--, r = n[i + t], n[i + t] = n[u + t], n[u + t] = r;
        return n
    }, ta.permute = function(n, t) {
        for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
        return r
    }, ta.pairs = function(n) {
        for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;) i[e] = [t = u, u = n[++e]];
        return i
    }, ta.zip = function() {
        if (!(r = arguments.length)) return [];
        for (var n = -1, t = ta.min(arguments, u), e = new Array(t); ++n < t;)
            for (var r, i = -1, o = e[n] = new Array(r); ++i < r;) o[i] = arguments[i][n];
        return e
    }, ta.transpose = function(n) {
        return ta.zip.apply(ta, n)
    }, ta.keys = function(n) {
        var t = [];
        for (var e in n) t.push(e);
        return t
    }, ta.values = function(n) {
        var t = [];
        for (var e in n) t.push(n[e]);
        return t
    }, ta.entries = function(n) {
        var t = [];
        for (var e in n) t.push({
            key: e,
            value: n[e]
        });
        return t
    }, ta.merge = function(n) {
        for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;) o += n[i].length;
        for (e = new Array(o); --u >= 0;)
            for (r = n[u], t = r.length; --t >= 0;) e[--o] = r[t];
        return e
    };
    var va = Math.abs;
    ta.range = function(n, t, e) {
        if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e) throw new Error("infinite range");
        var r, u = [],
            o = i(va(e)),
            a = -1;
        if (n *= o, t *= o, e *= o, 0 > e)
            for (;
                (r = n + e * ++a) > t;) u.push(r / o);
        else
            for (;
                (r = n + e * ++a) < t;) u.push(r / o);
        return u
    }, ta.map = function(n, t) {
        var e = new a;
        if (n instanceof a) n.forEach(function(n, t) {
            e.set(n, t)
        });
        else if (Array.isArray(n)) {
            var r, u = -1,
                i = n.length;
            if (1 === arguments.length)
                for (; ++u < i;) e.set(u, n[u]);
            else
                for (; ++u < i;) e.set(t.call(n, r = n[u], u), r)
        } else
            for (var o in n) e.set(o, n[o]);
        return e
    };
    var da = "__proto__",
        ma = "\x00";
    o(a, {
        has: s,
        get: function(n) {
            return this._[c(n)]
        },
        set: function(n, t) {
            return this._[c(n)] = t
        },
        remove: f,
        keys: h,
        values: function() {
            var n = [];
            for (var t in this._) n.push(this._[t]);
            return n
        },
        entries: function() {
            var n = [];
            for (var t in this._) n.push({
                key: l(t),
                value: this._[t]
            });
            return n
        },
        size: g,
        empty: p,
        forEach: function(n) {
            for (var t in this._) n.call(this, l(t), this._[t])
        }
    }), ta.nest = function() {
        function n(t, o, c) {
            if (c >= i.length) return r ? r.call(u, o) : e ? o.sort(e) : o;
            for (var l, s, f, h, g = -1, p = o.length, v = i[c++], d = new a; ++g < p;)(h = d.get(l = v(s = o[g]))) ? h.push(s) : d.set(l, [s]);
            return t ? (s = t(), f = function(e, r) {
                s.set(e, n(t, r, c))
            }) : (s = {}, f = function(e, r) {
                s[e] = n(t, r, c)
            }), d.forEach(f), s
        }

        function t(n, e) {
            if (e >= i.length) return n;
            var r = [],
                u = o[e++];
            return n.forEach(function(n, u) {
                r.push({
                    key: n,
                    values: t(u, e)
                })
            }), u ? r.sort(function(n, t) {
                return u(n.key, t.key)
            }) : r
        }
        var e, r, u = {},
            i = [],
            o = [];
        return u.map = function(t, e) {
            return n(e, t, 0)
        }, u.entries = function(e) {
            return t(n(ta.map, e, 0), 0)
        }, u.key = function(n) {
            return i.push(n), u
        }, u.sortKeys = function(n) {
            return o[i.length - 1] = n, u
        }, u.sortValues = function(n) {
            return e = n, u
        }, u.rollup = function(n) {
            return r = n, u
        }, u
    }, ta.set = function(n) {
        var t = new v;
        if (n)
            for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
        return t
    }, o(v, {
        has: s,
        add: function(n) {
            return this._[c(n += "")] = !0, n
        },
        remove: f,
        values: h,
        size: g,
        empty: p,
        forEach: function(n) {
            for (var t in this._) n.call(this, l(t))
        }
    }), ta.behavior = {}, ta.rebind = function(n, t) {
        for (var e, r = 1, u = arguments.length; ++r < u;) n[e = arguments[r]] = d(n, t, t[e]);
        return n
    };
    var ya = ["webkit", "ms", "moz", "Moz", "o", "O"];
    ta.dispatch = function() {
        for (var n = new M, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = x(n);
        return n
    }, M.prototype.on = function(n, t) {
        var e = n.indexOf("."),
            r = "";
        if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
            return this
        }
    }, ta.event = null, ta.requote = function(n) {
        return n.replace(Ma, "\\$&")
    };
    var Ma = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        xa = {}.__proto__ ? function(n, t) {
            n.__proto__ = t
        } : function(n, t) {
            for (var e in t) n[e] = t[e]
        },
        ba = function(n, t) {
            return t.querySelector(n)
        },
        _a = function(n, t) {
            return t.querySelectorAll(n)
        },
        wa = ia.matches || ia[m(ia, "matchesSelector")],
        Sa = function(n, t) {
            return wa.call(n, t)
        };
    "function" == typeof Sizzle && (ba = function(n, t) {
        return Sizzle(n, t)[0] || null
    }, _a = Sizzle, Sa = Sizzle.matchesSelector), ta.selection = function() {
        return Na
    };
    var ka = ta.selection.prototype = [];
    ka.select = function(n) {
        var t, e, r, u, i = [];
        n = k(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []), t.parentNode = (r = this[o]).parentNode;
            for (var c = -1, l = r.length; ++c < l;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
        }
        return S(i)
    }, ka.selectAll = function(n) {
        var t, e, r = [];
        n = E(n);
        for (var u = -1, i = this.length; ++u < i;)
            for (var o = this[u], a = -1, c = o.length; ++a < c;)(e = o[a]) && (r.push(t = ra(n.call(e, e.__data__, a, u))), t.parentNode = e);
        return S(r)
    };
    var Ea = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    ta.ns = {
        prefix: Ea,
        qualify: function(n) {
            var t = n.indexOf(":"),
                e = n;
            return t >= 0 && (e = n.slice(0, t), n = n.slice(t + 1)), Ea.hasOwnProperty(e) ? {
                space: Ea[e],
                local: n
            } : n
        }
    }, ka.attr = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node();
                return n = ta.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
            }
            for (t in n) this.each(A(t, n[t]));
            return this
        }
        return this.each(A(n, t))
    }, ka.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node(),
                    r = (n = z(n)).length,
                    u = -1;
                if (t = e.classList) {
                    for (; ++u < r;)
                        if (!t.contains(n[u])) return !1
                } else
                    for (t = e.getAttribute("class"); ++u < r;)
                        if (!C(n[u]).test(t)) return !1; return !0
            }
            for (t in n) this.each(q(t, n[t]));
            return this
        }
        return this.each(q(n, t))
    }, ka.style = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (e in n) this.each(T(e, n[e], t));
                return this
            }
            if (2 > r) return oa.getComputedStyle(this.node(), null).getPropertyValue(n);
            e = ""
        }
        return this.each(T(n, t, e))
    }, ka.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) return this.node()[n];
            for (t in n) this.each(R(t, n[t]));
            return this
        }
        return this.each(R(n, t))
    }, ka.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t
        } : null == n ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = n
        }) : this.node().textContent
    }, ka.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        } : null == n ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = n
        }) : this.node().innerHTML
    }, ka.append = function(n) {
        return n = D(n), this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        })
    }, ka.insert = function(n, t) {
        return n = D(n), t = k(t), this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
        })
    }, ka.remove = function() {
        return this.each(P)
    }, ka.data = function(n, t) {
        function e(n, e) {
            var r, u, i, o = n.length,
                f = e.length,
                h = Math.min(o, f),
                g = new Array(f),
                p = new Array(f),
                v = new Array(o);
            if (t) {
                var d, m = new a,
                    y = new Array(o);
                for (r = -1; ++r < o;) m.has(d = t.call(u = n[r], u.__data__, r)) ? v[r] = u : m.set(d, u), y[r] = d;
                for (r = -1; ++r < f;)(u = m.get(d = t.call(e, i = e[r], r))) ? u !== !0 && (g[r] = u, u.__data__ = i) : p[r] = U(i), m.set(d, !0);
                for (r = -1; ++r < o;) m.get(y[r]) !== !0 && (v[r] = n[r])
            } else {
                for (r = -1; ++r < h;) u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = U(i);
                for (; f > r; ++r) p[r] = U(e[r]);
                for (; o > r; ++r) v[r] = n[r]
            }
            p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), l.push(g), s.push(v)
        }
        var r, u, i = -1,
            o = this.length;
        if (!arguments.length) {
            for (n = new Array(o = (r = this[0]).length); ++i < o;)(u = r[i]) && (n[i] = u.__data__);
            return n
        }
        var c = O([]),
            l = S([]),
            s = S([]);
        if ("function" == typeof n)
            for (; ++i < o;) e(r = this[i], n.call(r, r.parentNode.__data__, i));
        else
            for (; ++i < o;) e(r = this[i], n);
        return l.enter = function() {
            return c
        }, l.exit = function() {
            return s
        }, l
    }, ka.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }, ka.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = j(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []), t.parentNode = (e = this[i]).parentNode;
            for (var a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return S(u)
    }, ka.order = function() {
        for (var n = -1, t = this.length; ++n < t;)
            for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
        return this
    }, ka.sort = function(n) {
        n = F.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
        return this.order()
    }, ka.each = function(n) {
        return H(this, function(t, e, r) {
            n.call(t, t.__data__, e, r)
        })
    }, ka.call = function(n) {
        var t = ra(arguments);
        return n.apply(t[0] = this, t), this
    }, ka.empty = function() {
        return !this.node()
    }, ka.node = function() {
        for (var n = 0, t = this.length; t > n; n++)
            for (var e = this[n], r = 0, u = e.length; u > r; r++) {
                var i = e[r];
                if (i) return i
            }
        return null
    }, ka.size = function() {
        var n = 0;
        return H(this, function() {
            ++n
        }), n
    };
    var Aa = [];
    ta.selection.enter = O, ta.selection.enter.prototype = Aa, Aa.append = ka.append, Aa.empty = ka.empty, Aa.node = ka.node, Aa.call = ka.call, Aa.size = ka.size, Aa.select = function(n) {
        for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
            r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
            for (var l = -1, s = u.length; ++l < s;)(i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)), e.__data__ = i.__data__) : t.push(null)
        }
        return S(o)
    }, Aa.insert = function(n, t) {
        return arguments.length < 2 && (t = Y(this)), ka.insert.call(this, n, t)
    }, ta.select = function(n) {
        var t = ["string" == typeof n ? ba(n, ua) : n];
        return t.parentNode = ia, S([t])
    }, ta.selectAll = function(n) {
        var t = ra("string" == typeof n ? _a(n, ua) : n);
        return t.parentNode = ia, S([t])
    };
    var Na = ta.select(ia);
    ka.on = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (e in n) this.each(I(e, n[e], t));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + n]) && r._;
            e = !1
        }
        return this.each(I(n, t, e))
    };
    var Ca = ta.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    Ca.forEach(function(n) {
        "on" + n in ua && Ca.remove(n)
    });
    var za = "onselectstart" in ua ? null : m(ia.style, "userSelect"),
        qa = 0;
    ta.mouse = function(n) {
        return $(n, _())
    };
    var La = /WebKit/.test(oa.navigator.userAgent) ? -1 : 0;
    ta.touch = function(n, t, e) {
        if (arguments.length < 3 && (e = t, t = _().changedTouches), t)
            for (var r, u = 0, i = t.length; i > u; ++u)
                if ((r = t[u]).identifier === e) return $(n, r)
    }, ta.behavior.drag = function() {
        function n() {
            this.on("mousedown.drag", u).on("touchstart.drag", i)
        }

        function t(n, t, u, i, o) {
            return function() {
                function a() {
                    var n, e, r = t(h, v);
                    r && (n = r[0] - M[0], e = r[1] - M[1], p |= n | e, M = r, g({
                        type: "drag",
                        x: r[0] + l[0],
                        y: r[1] + l[1],
                        dx: n,
                        dy: e
                    }))
                }

                function c() {
                    t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && ta.event.target === f), g({
                        type: "dragend"
                    }))
                }
                var l, s = this,
                    f = ta.event.target,
                    h = s.parentNode,
                    g = e.of(s, arguments),
                    p = 0,
                    v = n(),
                    d = ".drag" + (null == v ? "" : "-" + v),
                    m = ta.select(u()).on(i + d, a).on(o + d, c),
                    y = X(),
                    M = t(h, v);
                r ? (l = r.apply(s, arguments), l = [l.x - M[0], l.y - M[1]]) : l = [0, 0], g({
                    type: "dragstart"
                })
            }
        }
        var e = w(n, "drag", "dragstart", "dragend"),
            r = null,
            u = t(y, ta.mouse, J, "mousemove", "mouseup"),
            i = t(B, ta.touch, W, "touchmove", "touchend");
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r
        }, ta.rebind(n, e, "on")
    }, ta.touches = function(n, t) {
        return arguments.length < 2 && (t = _().touches), t ? ra(t).map(function(t) {
            var e = $(n, t);
            return e.identifier = t.identifier, e
        }) : []
    };
    var Ta = 1e-6,
        Ra = Ta * Ta,
        Da = Math.PI,
        Pa = 2 * Da,
        Ua = Pa - Ta,
        ja = Da / 2,
        Fa = Da / 180,
        Ha = 180 / Da,
        Oa = Math.SQRT2,
        Ya = 2,
        Ia = 4;
    ta.interpolateZoom = function(n, t) {
        function e(n) {
            var t = n * y;
            if (m) {
                var e = et(v),
                    o = i / (Ya * h) * (e * rt(Oa * t + v) - tt(v));
                return [r + o * l, u + o * s, i * e / et(Oa * t + v)]
            }
            return [r + n * l, u + n * s, i * Math.exp(Oa * t)]
        }
        var r = n[0],
            u = n[1],
            i = n[2],
            o = t[0],
            a = t[1],
            c = t[2],
            l = o - r,
            s = a - u,
            f = l * l + s * s,
            h = Math.sqrt(f),
            g = (c * c - i * i + Ia * f) / (2 * i * Ya * h),
            p = (c * c - i * i - Ia * f) / (2 * c * Ya * h),
            v = Math.log(Math.sqrt(g * g + 1) - g),
            d = Math.log(Math.sqrt(p * p + 1) - p),
            m = d - v,
            y = (m || Math.log(c / i)) / Oa;
        return e.duration = 1e3 * y, e
    }, ta.behavior.zoom = function() {
        function n(n) {
            n.on(z, s).on(Xa + ".zoom", h).on("dblclick.zoom", g).on(T, f)
        }

        function t(n) {
            return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k]
        }

        function e(n) {
            return [n[0] * k.k + k.x, n[1] * k.k + k.y]
        }

        function r(n) {
            k.k = Math.max(A[0], Math.min(A[1], n))
        }

        function u(n, t) {
            t = e(t), k.x += n[0] - t[0], k.y += n[1] - t[1]
        }

        function i(t, e, i, o) {
            t.__chart__ = {
                x: k.x,
                y: k.y,
                k: k.k
            }, r(Math.pow(2, o)), u(v = e, i), t = ta.select(t), N > 0 && (t = t.transition().duration(N)), t.call(n.event)
        }

        function o() {
            x && x.domain(M.range().map(function(n) {
                return (n - k.x) / k.k
            }).map(M.invert)), S && S.domain(_.range().map(function(n) {
                return (n - k.y) / k.k
            }).map(_.invert))
        }

        function a(n) {
            C++ || n({
                type: "zoomstart"
            })
        }

        function c(n) {
            o(), n({
                type: "zoom",
                scale: k.k,
                translate: [k.x, k.y]
            })
        }

        function l(n) {
            --C || n({
                type: "zoomend"
            }), v = null
        }

        function s() {
            function n() {
                s = 1, u(ta.mouse(r), h), c(o)
            }

            function e() {
                f.on(q, null).on(L, null), g(s && ta.event.target === i), l(o)
            }
            var r = this,
                i = ta.event.target,
                o = R.of(r, arguments),
                s = 0,
                f = ta.select(oa).on(q, n).on(L, e),
                h = t(ta.mouse(r)),
                g = X();
            Fl.call(r), a(o)
        }

        function f() {
            function n() {
                var n = ta.touches(p);
                return g = k.k, n.forEach(function(n) {
                    n.identifier in d && (d[n.identifier] = t(n))
                }), n
            }

            function e() {
                var t = ta.event.target;
                ta.select(t).on(x, o).on(_, h), w.push(t);
                for (var e = ta.event.changedTouches, r = 0, u = e.length; u > r; ++r) d[e[r].identifier] = null;
                var a = n(),
                    c = Date.now();
                if (1 === a.length) {
                    if (500 > c - y) {
                        var l = a[0];
                        i(p, l, d[l.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), b()
                    }
                    y = c
                } else if (a.length > 1) {
                    var l = a[0],
                        s = a[1],
                        f = l[0] - s[0],
                        g = l[1] - s[1];
                    m = f * f + g * g
                }
            }

            function o() {
                var n, t, e, i, o = ta.touches(p);
                Fl.call(p);
                for (var a = 0, l = o.length; l > a; ++a, i = null)
                    if (e = o[a], i = d[e.identifier]) {
                        if (t) break;
                        n = e, t = i
                    }
                if (i) {
                    var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s,
                        f = m && Math.sqrt(s / m);
                    n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * g)
                }
                y = null, u(n, t), c(v)
            }

            function h() {
                if (ta.event.touches.length) {
                    for (var t = ta.event.changedTouches, e = 0, r = t.length; r > e; ++e) delete d[t[e].identifier];
                    for (var u in d) return void n()
                }
                ta.selectAll(w).on(M, null), S.on(z, s).on(T, f), E(), l(v)
            }
            var g, p = this,
                v = R.of(p, arguments),
                d = {},
                m = 0,
                M = ".zoom-" + ta.event.changedTouches[0].identifier,
                x = "touchmove" + M,
                _ = "touchend" + M,
                w = [],
                S = ta.select(p),
                E = X();
            e(), a(v), S.on(z, null).on(T, e)
        }

        function h() {
            var n = R.of(this, arguments);
            m ? clearTimeout(m) : (p = t(v = d || ta.mouse(this)), Fl.call(this), a(n)), m = setTimeout(function() {
                m = null, l(n)
            }, 50), b(), r(Math.pow(2, .002 * Za()) * k.k), u(v, p), c(n)
        }

        function g() {
            var n = ta.mouse(this),
                e = Math.log(k.k) / Math.LN2;
            i(this, n, t(n), ta.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
        }
        var p, v, d, m, y, M, x, _, S, k = {
                x: 0,
                y: 0,
                k: 1
            },
            E = [960, 500],
            A = Va,
            N = 250,
            C = 0,
            z = "mousedown.zoom",
            q = "mousemove.zoom",
            L = "mouseup.zoom",
            T = "touchstart.zoom",
            R = w(n, "zoomstart", "zoom", "zoomend");
        return n.event = function(n) {
            n.each(function() {
                var n = R.of(this, arguments),
                    t = k;
                Ul ? ta.select(this).transition().each("start.zoom", function() {
                    k = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, a(n)
                }).tween("zoom:zoom", function() {
                    var e = E[0],
                        r = E[1],
                        u = v ? v[0] : e / 2,
                        i = v ? v[1] : r / 2,
                        o = ta.interpolateZoom([(u - k.x) / k.k, (i - k.y) / k.k, e / k.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
                    return function(t) {
                        var r = o(t),
                            a = e / r[2];
                        this.__chart__ = k = {
                            x: u - r[0] * a,
                            y: i - r[1] * a,
                            k: a
                        }, c(n)
                    }
                }).each("interrupt.zoom", function() {
                    l(n)
                }).each("end.zoom", function() {
                    l(n)
                }) : (this.__chart__ = k, a(n), c(n), l(n))
            })
        }, n.translate = function(t) {
            return arguments.length ? (k = {
                x: +t[0],
                y: +t[1],
                k: k.k
            }, o(), n) : [k.x, k.y]
        }, n.scale = function(t) {
            return arguments.length ? (k = {
                x: k.x,
                y: k.y,
                k: +t
            }, o(), n) : k.k
        }, n.scaleExtent = function(t) {
            return arguments.length ? (A = null == t ? Va : [+t[0], +t[1]], n) : A
        }, n.center = function(t) {
            return arguments.length ? (d = t && [+t[0], +t[1]], n) : d
        }, n.size = function(t) {
            return arguments.length ? (E = t && [+t[0], +t[1]], n) : E
        }, n.duration = function(t) {
            return arguments.length ? (N = +t, n) : N
        }, n.x = function(t) {
            return arguments.length ? (x = t, M = t.copy(), k = {
                x: 0,
                y: 0,
                k: 1
            }, n) : x
        }, n.y = function(t) {
            return arguments.length ? (S = t, _ = t.copy(), k = {
                x: 0,
                y: 0,
                k: 1
            }, n) : S
        }, ta.rebind(n, R, "on")
    };
    var Za, Va = [0, 1 / 0],
        Xa = "onwheel" in ua ? (Za = function() {
            return -ta.event.deltaY * (ta.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in ua ? (Za = function() {
            return ta.event.wheelDelta
        }, "mousewheel") : (Za = function() {
            return -ta.event.detail
        }, "MozMousePixelScroll");
    ta.color = it, it.prototype.toString = function() {
        return this.rgb() + ""
    }, ta.hsl = ot;
    var $a = ot.prototype = new it;
    $a.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new ot(this.h, this.s, this.l / n)
    }, $a.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new ot(this.h, this.s, n * this.l)
    }, $a.rgb = function() {
        return at(this.h, this.s, this.l)
    }, ta.hcl = ct;
    var Ba = ct.prototype = new it;
    Ba.brighter = function(n) {
        return new ct(this.h, this.c, Math.min(100, this.l + Wa * (arguments.length ? n : 1)))
    }, Ba.darker = function(n) {
        return new ct(this.h, this.c, Math.max(0, this.l - Wa * (arguments.length ? n : 1)))
    }, Ba.rgb = function() {
        return lt(this.h, this.c, this.l).rgb()
    }, ta.lab = st;
    var Wa = 18,
        Ja = .95047,
        Ga = 1,
        Ka = 1.08883,
        Qa = st.prototype = new it;
    Qa.brighter = function(n) {
        return new st(Math.min(100, this.l + Wa * (arguments.length ? n : 1)), this.a, this.b)
    }, Qa.darker = function(n) {
        return new st(Math.max(0, this.l - Wa * (arguments.length ? n : 1)), this.a, this.b)
    }, Qa.rgb = function() {
        return ft(this.l, this.a, this.b)
    }, ta.rgb = dt;
    var nc = dt.prototype = new it;
    nc.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r,
            e = this.g,
            r = this.b,
            u = 30;
        return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), new dt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new dt(u, u, u)
    }, nc.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new dt(n * this.r, n * this.g, n * this.b)
    }, nc.hsl = function() {
        return bt(this.r, this.g, this.b)
    }, nc.toString = function() {
        return "#" + Mt(this.r) + Mt(this.g) + Mt(this.b)
    };
    var tc = ta.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    tc.forEach(function(n, t) {
        tc.set(n, mt(t))
    }), ta.functor = kt, ta.xhr = At(Et), ta.dsv = function(n, t) {
        function e(n, e, i) {
            arguments.length < 3 && (i = e, e = null);
            var o = Nt(n, t, null == e ? r : u(e), i);
            return o.row = function(n) {
                return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
            }, o
        }

        function r(n) {
            return e.parse(n.responseText)
        }

        function u(n) {
            return function(t) {
                return e.parse(t.responseText, n)
            }
        }

        function i(t) {
            return t.map(o).join(n)
        }

        function o(n) {
            return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var a = new RegExp('["' + n + "\n]"),
            c = n.charCodeAt(0);
        return e.parse = function(n, t) {
            var r;
            return e.parseRows(n, function(n, e) {
                if (r) return r(n, e - 1);
                var u = new Function("d", "return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                r = t ? function(n, e) {
                    return t(u(n), e)
                } : u
            })
        }, e.parseRows = function(n, t) {
            function e() {
                if (s >= l) return o;
                if (u) return u = !1, i;
                var t = s;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < l;)
                        if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1)) break;
                            ++e
                        }
                    s = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.slice(t + 1, e).replace(/""/g, '"')
                }
                for (; l > s;) {
                    var r = n.charCodeAt(s++),
                        a = 1;
                    if (10 === r) u = !0;
                    else if (13 === r) u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
                    else if (r !== c) continue;
                    return n.slice(t, s - a)
                }
                return n.slice(t)
            }
            for (var r, u, i = {}, o = {}, a = [], l = n.length, s = 0, f = 0;
                (r = e()) !== o;) {
                for (var h = []; r !== i && r !== o;) h.push(r), r = e();
                t && null == (h = t(h, f++)) || a.push(h)
            }
            return a
        }, e.format = function(t) {
            if (Array.isArray(t[0])) return e.formatRows(t);
            var r = new v,
                u = [];
            return t.forEach(function(n) {
                for (var t in n) r.has(t) || u.push(r.add(t))
            }), [u.map(o).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return o(t[n])
                }).join(n)
            })).join("\n")
        }, e.formatRows = function(n) {
            return n.map(i).join("\n")
        }, e
    }, ta.csv = ta.dsv(",", "text/csv"), ta.tsv = ta.dsv("  ", "text/tab-separated-values");
    var ec, rc, uc, ic, oc, ac = oa[m(oa, "requestAnimationFrame")] || function(n) {
        setTimeout(n, 17)
    };
    ta.timer = function(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now());
        var u = e + t,
            i = {
                c: n,
                t: u,
                f: !1,
                n: null
            };
        rc ? rc.n = i : ec = i, rc = i, uc || (ic = clearTimeout(ic), uc = 1, ac(qt))
    }, ta.timer.flush = function() {
        Lt(), Tt()
    }, ta.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    };
    var cc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
    ta.formatPrefix = function(n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1), t && (n = ta.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), cc[8 + e / 3]
    };
    var lc = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        sc = ta.map({
            b: function(n) {
                return n.toString(2)
            },
            c: function(n) {
                return String.fromCharCode(n)
            },
            o: function(n) {
                return n.toString(8)
            },
            x: function(n) {
                return n.toString(16)
            },
            X: function(n) {
                return n.toString(16).toUpperCase()
            },
            g: function(n, t) {
                return n.toPrecision(t)
            },
            e: function(n, t) {
                return n.toExponential(t)
            },
            f: function(n, t) {
                return n.toFixed(t)
            },
            r: function(n, t) {
                return (n = ta.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
            }
        }),
        fc = ta.time = {},
        hc = Date;
    jt.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            gc.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            gc.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            gc.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            gc.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            gc.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            gc.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            gc.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            gc.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            gc.setTime.apply(this._, arguments)
        }
    };
    var gc = Date.prototype;
    fc.year = Ft(function(n) {
        return n = fc.day(n), n.setMonth(0, 1), n
    }, function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function(n) {
        return n.getFullYear()
    }), fc.years = fc.year.range, fc.years.utc = fc.year.utc.range, fc.day = Ft(function(n) {
        var t = new hc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function(n, t) {
        n.setDate(n.getDate() + t)
    }, function(n) {
        return n.getDate() - 1
    }), fc.days = fc.day.range, fc.days.utc = fc.day.utc.range, fc.dayOfYear = function(n) {
        var t = fc.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
        t = 7 - t;
        var e = fc[n] = Ft(function(n) {
            return (n = fc.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }, function(n) {
            var e = fc.year(n).getDay();
            return Math.floor((fc.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
        });
        fc[n + "s"] = e.range, fc[n + "s"].utc = e.utc.range, fc[n + "OfYear"] = function(n) {
            var e = fc.year(n).getDay();
            return Math.floor((fc.dayOfYear(n) + (e + t) % 7) / 7)
        }
    }), fc.week = fc.sunday, fc.weeks = fc.sunday.range, fc.weeks.utc = fc.sunday.utc.range, fc.weekOfYear = fc.sundayOfYear;
    var pc = {
            "-": "",
            _: " ",
            0: "0"
        },
        vc = /^\s*\d+/,
        dc = /^%/;
    ta.locale = function(n) {
        return {
            numberFormat: Pt(n),
            timeFormat: Ot(n)
        }
    };
    var mc = ta.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    ta.format = mc.numberFormat, ta.geo = {}, ce.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            le(n, this.t, yc), le(yc.s, this.s, this), this.s ? this.t += yc.t : this.s = yc.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var yc = new ce;
    ta.geo.stream = function(n, t) {
        n && Mc.hasOwnProperty(n.type) ? Mc[n.type](n, t) : se(n, t)
    };
    var Mc = {
            Feature: function(n, t) {
                se(n.geometry, t)
            },
            FeatureCollection: function(n, t) {
                for (var e = n.features, r = -1, u = e.length; ++r < u;) se(e[r].geometry, t)
            }
        },
        xc = {
            Sphere: function(n, t) {
                t.sphere()
            },
            Point: function(n, t) {
                n = n.coordinates, t.point(n[0], n[1], n[2])
            },
            MultiPoint: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) n = e[r], t.point(n[0], n[1], n[2])
            },
            LineString: function(n, t) {
                fe(n.coordinates, t, 0)
            },
            MultiLineString: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) fe(e[r], t, 0)
            },
            Polygon: function(n, t) {
                he(n.coordinates, t)
            },
            MultiPolygon: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) he(e[r], t)
            },
            GeometryCollection: function(n, t) {
                for (var e = n.geometries, r = -1, u = e.length; ++r < u;) se(e[r], t)
            }
        };
    ta.geo.area = function(n) {
        return bc = 0, ta.geo.stream(n, wc), bc
    };
    var bc, _c = new ce,
        wc = {
            sphere: function() {
                bc += 4 * Da
            },
            point: y,
            lineStart: y,
            lineEnd: y,
            polygonStart: function() {
                _c.reset(), wc.lineStart = ge
            },
            polygonEnd: function() {
                var n = 2 * _c;
                bc += 0 > n ? 4 * Da + n : n, wc.lineStart = wc.lineEnd = wc.point = y
            }
        };
    ta.geo.bounds = function() {
        function n(n, t) {
            M.push(x = [s = n, h = n]), f > t && (f = t), t > g && (g = t)
        }

        function t(t, e) {
            var r = pe([t * Fa, e * Fa]);
            if (m) {
                var u = de(m, r),
                    i = [u[1], -u[0], 0],
                    o = de(i, u);
                Me(o), o = xe(o);
                var c = t - p,
                    l = c > 0 ? 1 : -1,
                    v = o[0] * Ha * l,
                    d = va(c) > 180;
                if (d ^ (v > l * p && l * t > v)) {
                    var y = o[1] * Ha;
                    y > g && (g = y)
                } else if (v = (v + 360) % 360 - 180, d ^ (v > l * p && l * t > v)) {
                    var y = -o[1] * Ha;
                    f > y && (f = y)
                } else f > e && (f = e), e > g && (g = e);
                d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t)
            } else n(t, e);
            m = r, p = t
        }

        function e() {
            b.point = t
        }

        function r() {
            x[0] = s, x[1] = h, b.point = n, m = null
        }

        function u(n, e) {
            if (m) {
                var r = n - p;
                y += va(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else v = n, d = e;
            wc.point(n, e), t(n, e)
        }

        function i() {
            wc.lineStart()
        }

        function o() {
            u(v, d), wc.lineEnd(), va(y) > Ta && (s = -(h = 180)), x[0] = s, x[1] = h, m = null
        }

        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function c(n, t) {
            return n[0] - t[0]
        }

        function l(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var s, f, h, g, p, v, d, m, y, M, x, b = {
            point: n,
            lineStart: e,
            lineEnd: r,
            polygonStart: function() {
                b.point = u, b.lineStart = i, b.lineEnd = o, y = 0, wc.polygonStart()
            },
            polygonEnd: function() {
                wc.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > _c ? (s = -(h = 180), f = -(g = 90)) : y > Ta ? g = 90 : -Ta > y && (f = -90), x[0] = s, x[1] = h
            }
        };
        return function(n) {
            g = h = -(s = f = 1 / 0), M = [], ta.geo.stream(n, b);
            var t = M.length;
            if (t) {
                M.sort(c);
                for (var e, r = 1, u = M[0], i = [u]; t > r; ++r) e = M[r], l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) e = i[r], (o = a(u[1], e[0])) > p && (p = o, s = e[0], h = u[1])
            }
            return M = x = null, 1 / 0 === s || 1 / 0 === f ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [s, f],
                [h, g]
            ]
        }
    }(), ta.geo.centroid = function(n) {
        Sc = kc = Ec = Ac = Nc = Cc = zc = qc = Lc = Tc = Rc = 0, ta.geo.stream(n, Dc);
        var t = Lc,
            e = Tc,
            r = Rc,
            u = t * t + e * e + r * r;
        return Ra > u && (t = Cc, e = zc, r = qc, Ta > kc && (t = Ec, e = Ac, r = Nc), u = t * t + e * e + r * r, Ra > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ha, nt(r / Math.sqrt(u)) * Ha]
    };
    var Sc, kc, Ec, Ac, Nc, Cc, zc, qc, Lc, Tc, Rc, Dc = {
            sphere: y,
            point: _e,
            lineStart: Se,
            lineEnd: ke,
            polygonStart: function() {
                Dc.lineStart = Ee
            },
            polygonEnd: function() {
                Dc.lineStart = Se
            }
        },
        Pc = Le(Ne, Pe, je, [-Da, -Da / 2]),
        Uc = 1e9;
    ta.geo.clipExtent = function() {
        var n, t, e, r, u, i, o = {
            stream: function(n) {
                return u && (u.valid = !1), u = i(n), u.valid = !0, u
            },
            extent: function(a) {
                return arguments.length ? (i = Ye(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
                    [n, t],
                    [e, r]
                ]
            }
        };
        return o.extent([
            [0, 0],
            [960, 500]
        ])
    }, (ta.geo.conicEqualArea = function() {
        return Ie(Ze)
    }).raw = Ze, ta.geo.albers = function() {
        return ta.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, ta.geo.albersUsa = function() {
        function n(n) {
            var i = n[0],
                o = n[1];
            return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
        }
        var t, e, r, u, i = ta.geo.albers(),
            o = ta.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            a = ta.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            c = {
                point: function(n, e) {
                    t = [n, e]
                }
            };
        return n.invert = function(n) {
            var t = i.scale(),
                e = i.translate(),
                r = (n[0] - e[0]) / t,
                u = (n[1] - e[1]) / t;
            return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
        }, n.stream = function(n) {
            var t = i.stream(n),
                e = o.stream(n),
                r = a.stream(n);
            return {
                point: function(n, u) {
                    t.point(n, u), e.point(n, u), r.point(n, u)
                },
                sphere: function() {
                    t.sphere(), e.sphere(), r.sphere()
                },
                lineStart: function() {
                    t.lineStart(), e.lineStart(), r.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd(), e.lineEnd(), r.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart(), e.polygonStart(), r.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                }
            }
        }, n.precision = function(t) {
            return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
        }, n.scale = function(t) {
            return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
        }, n.translate = function(t) {
            if (!arguments.length) return i.translate();
            var l = i.scale(),
                s = +t[0],
                f = +t[1];
            return e = i.translate(t).clipExtent([
                [s - .455 * l, f - .238 * l],
                [s + .455 * l, f + .238 * l]
            ]).stream(c).point, r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([
                [s - .425 * l + Ta, f + .12 * l + Ta],
                [s - .214 * l - Ta, f + .234 * l - Ta]
            ]).stream(c).point, u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([
                [s - .214 * l + Ta, f + .166 * l + Ta],
                [s - .115 * l - Ta, f + .234 * l - Ta]
            ]).stream(c).point, n
        }, n.scale(1070)
    };
    var jc, Fc, Hc, Oc, Yc, Ic, Zc = {
            point: y,
            lineStart: y,
            lineEnd: y,
            polygonStart: function() {
                Fc = 0, Zc.lineStart = Ve
            },
            polygonEnd: function() {
                Zc.lineStart = Zc.lineEnd = Zc.point = y, jc += va(Fc / 2)
            }
        },
        Vc = {
            point: Xe,
            lineStart: y,
            lineEnd: y,
            polygonStart: y,
            polygonEnd: y
        },
        Xc = {
            point: We,
            lineStart: Je,
            lineEnd: Ge,
            polygonStart: function() {
                Xc.lineStart = Ke
            },
            polygonEnd: function() {
                Xc.point = We, Xc.lineStart = Je, Xc.lineEnd = Ge
            }
        };
    ta.geo.path = function() {
        function n(n) {
            return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), ta.geo.stream(n, o)), i.result()
        }

        function t() {
            return o = null, n
        }
        var e, r, u, i, o, a = 4.5;
        return n.area = function(n) {
            return jc = 0, ta.geo.stream(n, u(Zc)), jc
        }, n.centroid = function(n) {
            return Ec = Ac = Nc = Cc = zc = qc = Lc = Tc = Rc = 0, ta.geo.stream(n, u(Xc)), Rc ? [Lc / Rc, Tc / Rc] : qc ? [Cc / qc, zc / qc] : Nc ? [Ec / Nc, Ac / Nc] : [0 / 0, 0 / 0]
        }, n.bounds = function(n) {
            return Yc = Ic = -(Hc = Oc = 1 / 0), ta.geo.stream(n, u(Vc)), [
                [Hc, Oc],
                [Yc, Ic]
            ]
        }, n.projection = function(n) {
            return arguments.length ? (u = (e = n) ? n.stream || tr(n) : Et, t()) : e
        }, n.context = function(n) {
            return arguments.length ? (i = null == (r = n) ? new $e : new Qe(n), "function" != typeof a && i.pointRadius(a), t()) : r
        }, n.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
        }, n.projection(ta.geo.albersUsa()).context(null)
    }, ta.geo.transform = function(n) {
        return {
            stream: function(t) {
                var e = new er(t);
                for (var r in n) e[r] = n[r];
                return e
            }
        }
    }, er.prototype = {
        point: function(n, t) {
            this.stream.point(n, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, ta.geo.projection = ur, ta.geo.projectionMutator = ir, (ta.geo.equirectangular = function() {
        return ur(ar)
    }).raw = ar.invert = ar, ta.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * Fa, t[1] * Fa), t[0] *= Ha, t[1] *= Ha, t
        }
        return n = lr(n[0] % 360 * Fa, n[1] * Fa, n.length > 2 ? n[2] * Fa : 0), t.invert = function(t) {
            return t = n.invert(t[0] * Fa, t[1] * Fa), t[0] *= Ha, t[1] *= Ha, t
        }, t
    }, cr.invert = ar, ta.geo.circle = function() {
        function n() {
            var n = "function" == typeof r ? r.apply(this, arguments) : r,
                t = lr(-n[0] * Fa, -n[1] * Fa, 0).invert,
                u = [];
            return e(null, null, 1, {
                point: function(n, e) {
                    u.push(n = t(n, e)), n[0] *= Ha, n[1] *= Ha
                }
            }), {
                type: "Polygon",
                coordinates: [u]
            }
        }
        var t, e, r = [0, 0],
            u = 6;
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.angle = function(r) {
            return arguments.length ? (e = gr((t = +r) * Fa, u * Fa), n) : t
        }, n.precision = function(r) {
            return arguments.length ? (e = gr(t * Fa, (u = +r) * Fa), n) : u
        }, n.angle(90)
    }, ta.geo.distance = function(n, t) {
        var e, r = (t[0] - n[0]) * Fa,
            u = n[1] * Fa,
            i = t[1] * Fa,
            o = Math.sin(r),
            a = Math.cos(r),
            c = Math.sin(u),
            l = Math.cos(u),
            s = Math.sin(i),
            f = Math.cos(i);
        return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a)
    }, ta.geo.graticule = function() {
        function n() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }

        function t() {
            return ta.range(Math.ceil(i / d) * d, u, d).map(h).concat(ta.range(Math.ceil(l / m) * m, c, m).map(g)).concat(ta.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
                return va(n % d) > Ta
            }).map(s)).concat(ta.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
                return va(n % m) > Ta
            }).map(f))
        }
        var e, r, u, i, o, a, c, l, s, f, h, g, p = 10,
            v = p,
            d = 90,
            m = 360,
            y = 2.5;
        return n.lines = function() {
            return t().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                }
            })
        }, n.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
            }
        }, n.extent = function(t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
        }, n.majorExtent = function(t) {
            return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [
                [i, l],
                [u, c]
            ]
        }, n.minorExtent = function(t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
                [r, a],
                [e, o]
            ]
        }, n.step = function(t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
        }, n.majorStep = function(t) {
            return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
        }, n.minorStep = function(t) {
            return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
        }, n.precision = function(t) {
            return arguments.length ? (y = +t, s = vr(a, o, 90), f = dr(r, e, y), h = vr(l, c, 90), g = dr(i, u, y), n) : y
        }, n.majorExtent([
            [-180, -90 + Ta],
            [180, 90 - Ta]
        ]).minorExtent([
            [-180, -80 - Ta],
            [180, 80 + Ta]
        ])
    }, ta.geo.greatArc = function() {
        function n() {
            return {
                type: "LineString",
                coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
            }
        }
        var t, e, r = mr,
            u = yr;
        return n.distance = function() {
            return ta.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
        }, n.source = function(e) {
            return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
        }, n.target = function(t) {
            return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
        }, n.precision = function() {
            return arguments.length ? n : 0
        }, n
    }, ta.geo.interpolate = function(n, t) {
        return Mr(n[0] * Fa, n[1] * Fa, t[0] * Fa, t[1] * Fa)
    }, ta.geo.length = function(n) {
        return $c = 0, ta.geo.stream(n, Bc), $c
    };
    var $c, Bc = {
            sphere: y,
            point: y,
            lineStart: xr,
            lineEnd: y,
            polygonStart: y,
            polygonEnd: y
        },
        Wc = br(function(n) {
            return Math.sqrt(2 / (1 + n))
        }, function(n) {
            return 2 * Math.asin(n / 2)
        });
    (ta.geo.azimuthalEqualArea = function() {
        return ur(Wc)
    }).raw = Wc;
    var Jc = br(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, Et);
    (ta.geo.azimuthalEquidistant = function() {
        return ur(Jc)
    }).raw = Jc, (ta.geo.conicConformal = function() {
        return Ie(_r)
    }).raw = _r, (ta.geo.conicEquidistant = function() {
        return Ie(wr)
    }).raw = wr;
    var Gc = br(function(n) {
        return 1 / n
    }, Math.atan);
    (ta.geo.gnomonic = function() {
        return ur(Gc)
    }).raw = Gc, Sr.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - ja]
    }, (ta.geo.mercator = function() {
        return kr(Sr)
    }).raw = Sr;
    var Kc = br(function() {
        return 1
    }, Math.asin);
    (ta.geo.orthographic = function() {
        return ur(Kc)
    }).raw = Kc;
    var Qc = br(function(n) {
        return 1 / (1 + n)
    }, function(n) {
        return 2 * Math.atan(n)
    });
    (ta.geo.stereographic = function() {
        return ur(Qc)
    }).raw = Qc, Er.invert = function(n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - ja]
    }, (ta.geo.transverseMercator = function() {
        var n = kr(Er),
            t = n.center,
            e = n.rotate;
        return n.center = function(n) {
            return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]])
        }, n.rotate = function(n) {
            return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90])
        }, e([0, 0, 90])
    }).raw = Er, ta.geom = {}, ta.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3) return [];
            var t, u = kt(e),
                i = kt(r),
                o = n.length,
                a = [],
                c = [];
            for (t = 0; o > t; t++) a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
            for (a.sort(zr), t = 0; o > t; t++) c.push([a[t][0], -a[t][1]]);
            var l = Cr(a),
                s = Cr(c),
                f = s[0] === l[0],
                h = s[s.length - 1] === l[l.length - 1],
                g = [];
            for (t = l.length - 1; t >= 0; --t) g.push(n[a[l[t]][2]]);
            for (t = +f; t < s.length - h; ++t) g.push(n[a[s[t]][2]]);
            return g
        }
        var e = Ar,
            r = Nr;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t)
    }, ta.geom.polygon = function(n) {
        return xa(n, nl), n
    };
    var nl = ta.geom.polygon.prototype = [];
    nl.area = function() {
        for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;) n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
        return .5 * u
    }, nl.centroid = function(n) {
        var t, e, r = -1,
            u = this.length,
            i = 0,
            o = 0,
            a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
        return [i * n, o * n]
    }, nl.clip = function(n) {
        for (var t, e, r, u, i, o, a = Tr(n), c = -1, l = this.length - Tr(this), s = this[l - 1]; ++c < l;) {
            for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;) o = t[e], qr(o, s, u) ? (qr(i, s, u) || n.push(Lr(i, o, s, u)), n.push(o)) : qr(i, s, u) && n.push(Lr(i, o, s, u)), i = o;
            a && n.push(n[0]), s = u
        }
        return n
    };
    var tl, el, rl, ul, il, ol = [],
        al = [];
    Or.prototype.prepare = function() {
        for (var n, t = this.edges, e = t.length; e--;) n = t[e].edge, n.b && n.a || t.splice(e, 1);
        return t.sort(Ir), t.length
    }, Qr.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, nu.prototype = {
        insert: function(n, t) {
            var e, r, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;) n = n.L;
                    n.L = t
                } else n.R = t;
                e = n
            } else this._ ? (n = uu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
            for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (eu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ru(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ru(this, e), n = e, e = n.U), e.C = !1, r.C = !0, eu(this, r))), e = n.U;
            this._.C = !1
        },
        remove: function(n) {
            n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
            var t, e, r, u = n.U,
                i = n.L,
                o = n.R;
            if (e = i ? o ? uu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
                if (n && n.C) return n.C = !1, void 0;
                do {
                    if (n === this._) break;
                    if (n === u.L) {
                        if (t = u.R, t.C && (t.C = !1, u.C = !0, eu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, ru(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, eu(this, u), n = this._;
                            break
                        }
                    } else if (t = u.L, t.C && (t.C = !1, u.C = !0, ru(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ru(this, u), n = this._;
                        break
                    }
                    t.C = !0, n = u, u = u.U
                } while (!n.C);
                n && (n.C = !1)
            }
        }
    }, ta.geom.voronoi = function(n) {
        function t(n) {
            var t = new Array(n.length),
                r = a[0][0],
                u = a[0][1],
                i = a[1][0],
                o = a[1][1];
            return iu(e(n), a).cells.forEach(function(e, a) {
                var c = e.edges,
                    l = e.site,
                    s = t[a] = c.length ? c.map(function(n) {
                        var t = n.start();
                        return [t.x, t.y]
                    }) : l.x >= r && l.x <= i && l.y >= u && l.y <= o ? [
                        [r, o],
                        [i, o],
                        [i, u],
                        [r, u]
                    ] : [];
                s.point = n[a]
            }), t
        }

        function e(n) {
            return n.map(function(n, t) {
                return {
                    x: Math.round(i(n, t) / Ta) * Ta,
                    y: Math.round(o(n, t) / Ta) * Ta,
                    i: t
                }
            })
        }
        var r = Ar,
            u = Nr,
            i = r,
            o = u,
            a = cl;
        return n ? t(n) : (t.links = function(n) {
            return iu(e(n)).edges.filter(function(n) {
                return n.l && n.r
            }).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                }
            })
        }, t.triangles = function(n) {
            var t = [];
            return iu(e(n)).cells.forEach(function(e, r) {
                for (var u, i, o = e.site, a = e.edges.sort(Ir), c = -1, l = a.length, s = a[l - 1].edge, f = s.l === o ? s.r : s.l; ++c < l;) u = s, i = f, s = a[c].edge, f = s.l === o ? s.r : s.l, r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
            }), t
        }, t.x = function(n) {
            return arguments.length ? (i = kt(r = n), t) : r
        }, t.y = function(n) {
            return arguments.length ? (o = kt(u = n), t) : u
        }, t.clipExtent = function(n) {
            return arguments.length ? (a = null == n ? cl : n, t) : a === cl ? null : a
        }, t.size = function(n) {
            return arguments.length ? t.clipExtent(n && [
                [0, 0], n
            ]) : a === cl ? null : a && a[1]
        }, t)
    };
    var cl = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    ta.geom.delaunay = function(n) {
        return ta.geom.voronoi().triangles(n)
    }, ta.geom.quadtree = function(n, t, e, r, u) {
        function i(n) {
            function i(n, t, e, r, u, i, o, a) {
                if (!isNaN(e) && !isNaN(r))
                    if (n.leaf) {
                        var c = n.x,
                            s = n.y;
                        if (null != c)
                            if (va(c - e) + va(s - r) < .01) l(n, t, e, r, u, i, o, a);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, e, r, u, i, o, a)
                            } else n.x = e, n.y = r, n.point = t
                    } else l(n, t, e, r, u, i, o, a)
            }

            function l(n, t, e, r, u, o, a, c) {
                var l = .5 * (u + a),
                    s = .5 * (o + c),
                    f = e >= l,
                    h = r >= s,
                    g = h << 1 | f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = su()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, e, r, u, o, a, c)
            }
            var s, f, h, g, p, v, d, m, y, M = kt(a),
                x = kt(c);
            if (null != t) v = t, d = e, m = r, y = u;
            else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
                for (g = 0; p > g; ++g) s = n[g], s.x < v && (v = s.x), s.y < d && (d = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
            else
                for (g = 0; p > g; ++g) {
                    var b = +M(s = n[g], g),
                        _ = +x(s, g);
                    v > b && (v = b), d > _ && (d = _), b > m && (m = b), _ > y && (y = _), f.push(b), h.push(_)
                }
            var w = m - v,
                S = y - d;
            w > S ? y = d + w : m = v + S;
            var k = su();
            if (k.add = function(n) {
                    i(k, n, +M(n, ++g), +x(n, g), v, d, m, y)
                }, k.visit = function(n) {
                    fu(n, k, v, d, m, y)
                }, k.find = function(n) {
                    return hu(k, n[0], n[1], v, d, m, y)
                }, g = -1, null == t) {
                for (; ++g < p;) i(k, n[g], f[g], h[g], v, d, m, y);
                --g
            } else n.forEach(k.add);
            return f = h = n = s = null, k
        }
        var o, a = Ar,
            c = Nr;
        return (o = arguments.length) ? (a = cu, c = lu, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
            return arguments.length ? (a = n, i) : a
        }, i.y = function(n) {
            return arguments.length ? (c = n, i) : c
        }, i.extent = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
                [t, e],
                [r, u]
            ]
        }, i.size = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
        }, i)
    }, ta.interpolateRgb = gu, ta.interpolateObject = pu, ta.interpolateNumber = vu, ta.interpolateString = du;
    var ll = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        sl = new RegExp(ll.source, "g");
    ta.interpolate = mu, ta.interpolators = [function(n, t) {
        var e = typeof t;
        return ("string" === e ? tc.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? gu : du : t instanceof it ? gu : Array.isArray(t) ? yu : "object" === e && isNaN(t) ? pu : vu)(n, t)
    }], ta.interpolateArray = yu;
    var fl = function() {
            return Et
        },
        hl = ta.map({
            linear: fl,
            poly: ku,
            quad: function() {
                return _u
            },
            cubic: function() {
                return wu
            },
            sin: function() {
                return Eu
            },
            exp: function() {
                return Au
            },
            circle: function() {
                return Nu
            },
            elastic: Cu,
            back: zu,
            bounce: function() {
                return qu
            }
        }),
        gl = ta.map({
            "in": Et,
            out: xu,
            "in-out": bu,
            "out-in": function(n) {
                return bu(xu(n))
            }
        });
    ta.ease = function(n) {
        var t = n.indexOf("-"),
            e = t >= 0 ? n.slice(0, t) : n,
            r = t >= 0 ? n.slice(t + 1) : "in";
        return e = hl.get(e) || fl, r = gl.get(r) || Et, Mu(r(e.apply(null, ea.call(arguments, 1))))
    }, ta.interpolateHcl = Lu, ta.interpolateHsl = Tu, ta.interpolateLab = Ru, ta.interpolateRound = Du, ta.transform = function(n) {
        var t = ua.createElementNS(ta.ns.prefix.svg, "g");
        return (ta.transform = function(n) {
            if (null != n) {
                t.setAttribute("transform", n);
                var e = t.transform.baseVal.consolidate()
            }
            return new Pu(e ? e.matrix : pl)
        })(n)
    }, Pu.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var pl = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    ta.interpolateTransform = Hu, ta.layout = {}, ta.layout.bundle = function() {
        return function(n) {
            for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Iu(n[e]));
            return t
        }
    }, ta.layout.chord = function() {
        function n() {
            var n, l, f, h, g, p = {},
                v = [],
                d = ta.range(i),
                m = [];
            for (e = [], r = [], n = 0, h = -1; ++h < i;) {
                for (l = 0, g = -1; ++g < i;) l += u[h][g];
                v.push(l), m.push(ta.range(i)), n += l
            }
            for (o && d.sort(function(n, t) {
                    return o(v[n], v[t])
                }), a && m.forEach(function(n, t) {
                    n.sort(function(n, e) {
                        return a(u[t][n], u[t][e])
                    })
                }), n = (Pa - s * i) / n, l = 0, h = -1; ++h < i;) {
                for (f = l, g = -1; ++g < i;) {
                    var y = d[h],
                        M = m[y][g],
                        x = u[y][M],
                        b = l,
                        _ = l += x * n;
                    p[y + "-" + M] = {
                        index: y,
                        subindex: M,
                        startAngle: b,
                        endAngle: _,
                        value: x
                    }
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: l,
                    value: (l - f) / n
                }, l += s
            }
            for (h = -1; ++h < i;)
                for (g = h - 1; ++g < i;) {
                    var w = p[h + "-" + g],
                        S = p[g + "-" + h];
                    (w.value || S.value) && e.push(w.value < S.value ? {
                        source: S,
                        target: w
                    } : {
                        source: w,
                        target: S
                    })
                }
            c && t()
        }

        function t() {
            e.sort(function(n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var e, r, u, i, o, a, c, l = {},
            s = 0;
        return l.matrix = function(n) {
            return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u
        }, l.padding = function(n) {
            return arguments.length ? (s = n, e = r = null, l) : s
        }, l.sortGroups = function(n) {
            return arguments.length ? (o = n, e = r = null, l) : o
        }, l.sortSubgroups = function(n) {
            return arguments.length ? (a = n, e = null, l) : a
        }, l.sortChords = function(n) {
            return arguments.length ? (c = n, e && t(), l) : c
        }, l.chords = function() {
            return e || n(), e
        }, l.groups = function() {
            return r || n(), r
        }, l
    }, ta.layout.force = function() {
        function n(n) {
            return function(t, e, r, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x,
                        o = t.cy - n.y,
                        a = u - e,
                        c = i * i + o * o;
                    if (c > a * a / d) {
                        if (p > c) {
                            var l = t.charge / c;
                            n.px -= i * l, n.py -= o * l
                        }
                        return !0
                    }
                    if (t.point && c && p > c) {
                        var l = t.pointCharge / c;
                        n.px -= i * l, n.py -= o * l
                    }
                }
                return !t.charge
            }
        }

        function t(n) {
            n.px = ta.event.x, n.py = ta.event.y, a.resume()
        }
        var e, r, u, i, o, a = {},
            c = ta.dispatch("start", "tick", "end"),
            l = [1, 1],
            s = .9,
            f = vl,
            h = dl,
            g = -30,
            p = ml,
            v = .1,
            d = .64,
            m = [],
            y = [];
        return a.tick = function() {
            if ((r *= .99) < .005) return c.end({
                type: "end",
                alpha: r = 0
            }), !0;
            var t, e, a, f, h, p, d, M, x, b = m.length,
                _ = y.length;
            for (e = 0; _ > e; ++e) a = y[e], f = a.source, h = a.target, M = h.x - f.x, x = h.y - f.y, (p = M * M + x * x) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, M *= p, x *= p, h.x -= M * (d = f.weight / (h.weight + f.weight)), h.y -= x * d, f.x += M * (d = 1 - d), f.y += x * d);
            if ((d = r * v) && (M = l[0] / 2, x = l[1] / 2, e = -1, d))
                for (; ++e < b;) a = m[e], a.x += (M - a.x) * d, a.y += (x - a.y) * d;
            if (g)
                for (Ju(t = ta.geom.quadtree(m), r, o), e = -1; ++e < b;)(a = m[e]).fixed || t.visit(n(a));
            for (e = -1; ++e < b;) a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s);
            c.tick({
                type: "tick",
                alpha: r
            })
        }, a.nodes = function(n) {
            return arguments.length ? (m = n, a) : m
        }, a.links = function(n) {
            return arguments.length ? (y = n, a) : y
        }, a.size = function(n) {
            return arguments.length ? (l = n, a) : l
        }, a.linkDistance = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
        }, a.distance = a.linkDistance, a.linkStrength = function(n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
        }, a.friction = function(n) {
            return arguments.length ? (s = +n, a) : s
        }, a.charge = function(n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
        }, a.chargeDistance = function(n) {
            return arguments.length ? (p = n * n, a) : Math.sqrt(p)
        }, a.gravity = function(n) {
            return arguments.length ? (v = +n, a) : v
        }, a.theta = function(n) {
            return arguments.length ? (d = n * n, a) : Math.sqrt(d)
        }, a.alpha = function(n) {
            return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                type: "start",
                alpha: r = n
            }), ta.timer(a.tick)), a) : r
        }, a.start = function() {
            function n(n, r) {
                if (!e) {
                    for (e = new Array(c), a = 0; c > a; ++a) e[a] = [];
                    for (a = 0; l > a; ++a) {
                        var u = y[a];
                        e[u.source.index].push(u.target), e[u.target.index].push(u.source)
                    }
                }
                for (var i, o = e[t], a = -1, l = o.length; ++a < l;)
                    if (!isNaN(i = o[a][n])) return i;
                return Math.random() * r
            }
            var t, e, r, c = m.length,
                s = y.length,
                p = l[0],
                v = l[1];
            for (t = 0; c > t; ++t)(r = m[t]).index = t, r.weight = 0;
            for (t = 0; s > t; ++t) r = y[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (t = 0; c > t; ++t) r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (u = [], "function" == typeof f)
                for (t = 0; s > t; ++t) u[t] = +f.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t) u[t] = f;
            if (i = [], "function" == typeof h)
                for (t = 0; s > t; ++t) i[t] = +h.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t) i[t] = h;
            if (o = [], "function" == typeof g)
                for (t = 0; c > t; ++t) o[t] = +g.call(this, m[t], t);
            else
                for (t = 0; c > t; ++t) o[t] = g;
            return a.resume()
        }, a.resume = function() {
            return a.alpha(.1)
        }, a.stop = function() {
            return a.alpha(0)
        }, a.drag = function() {
            return e || (e = ta.behavior.drag().origin(Et).on("dragstart.force", Xu).on("drag.force", t).on("dragend.force", $u)), arguments.length ? (this.on("mouseover.force", Bu).on("mouseout.force", Wu).call(e), void 0) : e
        }, ta.rebind(a, c, "on")
    };
    var vl = 20,
        dl = 1,
        ml = 1 / 0;
    ta.layout.hierarchy = function() {
        function n(u) {
            var i, o = [u],
                a = [];
            for (u.depth = 0; null != (i = o.pop());)
                if (a.push(i), (l = e.call(n, i, i.depth)) && (c = l.length)) {
                    for (var c, l, s; --c >= 0;) o.push(s = l[c]), s.parent = i, s.depth = i.depth + 1;
                    r && (i.value = 0), i.children = l
                } else r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children;
            return Qu(u, function(n) {
                var e, u;
                t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value)
            }), a
        }
        var t = ei,
            e = ni,
            r = ti;
        return n.sort = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.children = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.value = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.revalue = function(t) {
            return r && (Ku(t, function(n) {
                n.children && (n.value = 0)
            }), Qu(t, function(t) {
                var e;
                t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
            })), t
        }, n
    }, ta.layout.partition = function() {
        function n(t, e, r, u) {
            var i = t.children;
            if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
                var o, a, c, l = -1;
                for (r = t.value ? r / t.value : 0; ++l < o;) n(a = i[l], e, c = a.value * r, u), e += c
            }
        }

        function t(n) {
            var e = n.children,
                r = 0;
            if (e && (u = e.length))
                for (var u, i = -1; ++i < u;) r = Math.max(r, t(e[i]));
            return 1 + r
        }

        function e(e, i) {
            var o = r.call(this, e, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])), o
        }
        var r = ta.layout.hierarchy(),
            u = [1, 1];
        return e.size = function(n) {
            return arguments.length ? (u = n, e) : u
        }, Gu(e, r)
    }, ta.layout.pie = function() {
        function n(o) {
            var a, c = o.length,
                l = o.map(function(e, r) {
                    return +t.call(n, e, r)
                }),
                s = +("function" == typeof r ? r.apply(this, arguments) : r),
                f = ("function" == typeof u ? u.apply(this, arguments) : u) - s,
                h = Math.min(Math.abs(f) / c, +("function" == typeof i ? i.apply(this, arguments) : i)),
                g = h * (0 > f ? -1 : 1),
                p = (f - c * g) / ta.sum(l),
                v = ta.range(c),
                d = [];
            return null != e && v.sort(e === yl ? function(n, t) {
                return l[t] - l[n]
            } : function(n, t) {
                return e(o[n], o[t])
            }), v.forEach(function(n) {
                d[n] = {
                    data: o[n],
                    value: a = l[n],
                    startAngle: s,
                    endAngle: s += a * p + g,
                    padAngle: h
                }
            }), d
        }
        var t = Number,
            e = yl,
            r = 0,
            u = Pa,
            i = 0;
        return n.value = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.sort = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.startAngle = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.endAngle = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n.padAngle = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n
    };
    var yl = {};
    ta.layout.stack = function() {
        function n(a, c) {
            if (!(h = a.length)) return a;
            var l = a.map(function(e, r) {
                    return t.call(n, e, r)
                }),
                s = l.map(function(t) {
                    return t.map(function(t, e) {
                        return [i.call(n, t, e), o.call(n, t, e)]
                    })
                }),
                f = e.call(n, s, c);
            l = ta.permute(l, f), s = ta.permute(s, f);
            var h, g, p, v, d = r.call(n, s, c),
                m = l[0].length;
            for (p = 0; m > p; ++p)
                for (u.call(n, l[0][p], v = d[p], s[0][p][1]), g = 1; h > g; ++g) u.call(n, l[g][p], v += s[g - 1][p][1], s[g][p][1]);
            return a
        }
        var t = Et,
            e = ai,
            r = ci,
            u = oi,
            i = ui,
            o = ii;
        return n.values = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.order = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : Ml.get(t) || ai, n) : e
        }, n.offset = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : xl.get(t) || ci, n) : r
        }, n.x = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.y = function(t) {
            return arguments.length ? (o = t, n) : o
        }, n.out = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var Ml = ta.map({
            "inside-out": function(n) {
                var t, e, r = n.length,
                    u = n.map(li),
                    i = n.map(si),
                    o = ta.range(r).sort(function(n, t) {
                        return u[n] - u[t]
                    }),
                    a = 0,
                    c = 0,
                    l = [],
                    s = [];
                for (t = 0; r > t; ++t) e = o[t], c > a ? (a += i[e], l.push(e)) : (c += i[e], s.push(e));
                return s.reverse().concat(l)
            },
            reverse: function(n) {
                return ta.range(n.length).reverse()
            },
            "default": ai
        }),
        xl = ta.map({
            silhouette: function(n) {
                var t, e, r, u = n.length,
                    i = n[0].length,
                    o = [],
                    a = 0,
                    c = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                    r > a && (a = r), o.push(r)
                }
                for (e = 0; i > e; ++e) c[e] = (a - o[e]) / 2;
                return c
            },
            wiggle: function(n) {
                var t, e, r, u, i, o, a, c, l, s = n.length,
                    f = n[0],
                    h = f.length,
                    g = [];
                for (g[0] = c = l = 0, e = 1; h > e; ++e) {
                    for (t = 0, u = 0; s > t; ++t) u += n[t][e][1];
                    for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; s > t; ++t) {
                        for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
                        i += o * n[t][e][1]
                    }
                    g[e] = c -= u ? i / u * a : 0, l > c && (l = c)
                }
                for (e = 0; h > e; ++e) g[e] -= l;
                return g
            },
            expand: function(n) {
                var t, e, r, u = n.length,
                    i = n[0].length,
                    o = 1 / u,
                    a = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                    if (r)
                        for (t = 0; u > t; t++) n[t][e][1] /= r;
                    else
                        for (t = 0; u > t; t++) n[t][e][1] = o
                }
                for (e = 0; i > e; ++e) a[e] = 0;
                return a
            },
            zero: ci
        });
    ta.layout.histogram = function() {
        function n(n, i) {
            for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
            if (g > 0)
                for (i = -1; ++i < h;) a = l[i], a >= s[0] && a <= s[1] && (o = c[ta.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
            return c
        }
        var t = !0,
            e = Number,
            r = pi,
            u = hi;
        return n.value = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.range = function(t) {
            return arguments.length ? (r = kt(t), n) : r
        }, n.bins = function(t) {
            return arguments.length ? (u = "number" == typeof t ? function(n) {
                return gi(n, t)
            } : kt(t), n) : u
        }, n.frequency = function(e) {
            return arguments.length ? (t = !!e, n) : t
        }, n
    }, ta.layout.pack = function() {
        function n(n, i) {
            var o = e.call(this, n, i),
                a = o[0],
                c = u[0],
                l = u[1],
                s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                    return t
                };
            if (a.x = a.y = 0, Qu(a, function(n) {
                    n.r = +s(n.value)
                }), Qu(a, Mi), r) {
                var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                Qu(a, function(n) {
                    n.r += f
                }), Qu(a, Mi), Qu(a, function(n) {
                    n.r -= f
                })
            }
            return _i(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o
        }
        var t, e = ta.layout.hierarchy().sort(vi),
            r = 0,
            u = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n.radius = function(e) {
            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
        }, n.padding = function(t) {
            return arguments.length ? (r = +t, n) : r
        }, Gu(n, e)
    }, ta.layout.tree = function() {
        function n(n, u) {
            var s = o.call(this, n, u),
                f = s[0],
                h = t(f);
            if (Qu(h, e), h.parent.m = -h.z, Ku(h, r), l) Ku(f, i);
            else {
                var g = f,
                    p = f,
                    v = f;
                Ku(f, function(n) {
                    n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n)
                });
                var d = a(g, p) / 2 - g.x,
                    m = c[0] / (p.x + a(p, g) / 2 + d),
                    y = c[1] / (v.depth || 1);
                Ku(f, function(n) {
                    n.x = (n.x + d) * m, n.y = n.depth * y
                })
            }
            return s
        }

        function t(n) {
            for (var t, e = {
                    A: null,
                    children: [n]
                }, r = [e]; null != (t = r.pop());)
                for (var u, i = t.children, o = 0, a = i.length; a > o; ++o) r.push((i[o] = u = {
                    _: i[o],
                    parent: t,
                    children: (u = i[o].children) && u.slice() || [],
                    A: null,
                    a: null,
                    z: 0,
                    m: 0,
                    c: 0,
                    s: 0,
                    t: null,
                    i: o
                }).a = u);
            return e.children[0]
        }

        function e(n) {
            var t = n.children,
                e = n.parent.children,
                r = n.i ? e[n.i - 1] : null;
            if (t.length) {
                Ni(n);
                var i = (t[0].z + t[t.length - 1].z) / 2;
                r ? (n.z = r.z + a(n._, r._), n.m = n.z - i) : n.z = i
            } else r && (n.z = r.z + a(n._, r._));
            n.parent.A = u(n, r, n.parent.A || e[0])
        }

        function r(n) {
            n._.x = n.z + n.parent.m, n.m += n.parent.m
        }

        function u(n, t, e) {
            if (t) {
                for (var r, u = n, i = n, o = t, c = u.parent.children[0], l = u.m, s = i.m, f = o.m, h = c.m; o = Ei(o), u = ki(u), o && u;) c = ki(c), i = Ei(i), i.a = n, r = o.z + f - u.z - l + a(o._, u._), r > 0 && (Ai(Ci(o, n, e), n, r), l += r, s += r), f += o.m, l += u.m, h += c.m, s += i.m;
                o && !Ei(i) && (i.t = o, i.m += f - s), u && !ki(c) && (c.t = u, c.m += l - h, e = n)
            }
            return e
        }

        function i(n) {
            n.x *= c[0], n.y = n.depth * c[1]
        }
        var o = ta.layout.hierarchy().sort(null).value(null),
            a = Si,
            c = [1, 1],
            l = null;
        return n.separation = function(t) {
            return arguments.length ? (a = t, n) : a
        }, n.size = function(t) {
            return arguments.length ? (l = null == (c = t) ? i : null, n) : l ? null : c
        }, n.nodeSize = function(t) {
            return arguments.length ? (l = null == (c = t) ? null : i, n) : l ? c : null
        }, Gu(n, o)
    }, ta.layout.cluster = function() {
        function n(n, i) {
            var o, a = t.call(this, n, i),
                c = a[0],
                l = 0;
            Qu(c, function(n) {
                var t = n.children;
                t && t.length ? (n.x = qi(t), n.y = zi(t)) : (n.x = o ? l += e(n, o) : 0, n.y = 0, o = n)
            });
            var s = Li(c),
                f = Ti(c),
                h = s.x - e(s, f) / 2,
                g = f.x + e(f, s) / 2;
            return Qu(c, u ? function(n) {
                n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
            } : function(n) {
                n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
            }), a
        }
        var t = ta.layout.hierarchy().sort(null).value(null),
            e = Si,
            r = [1, 1],
            u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null
        }, Gu(n, t)
    }, ta.layout.treemap = function() {
        function n(n, t) {
            for (var e, r, u = -1, i = n.length; ++u < i;) r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function t(e) {
            var i = e.children;
            if (i && i.length) {
                var o, a, c, l = f(e),
                    s = [],
                    h = i.slice(),
                    p = 1 / 0,
                    v = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (n(h, l.dx * l.dy / e.value), s.area = 0;
                    (c = h.length) > 0;) s.push(o = h[c - 1]), s.area += o.area, "squarify" !== g || (a = r(s, v)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, v, l, !1), v = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
                s.length && (u(s, v, l, !0), s.length = s.area = 0), i.forEach(t)
            }
        }

        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var i, o = f(t),
                    a = r.slice(),
                    c = [];
                for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
                r.forEach(e)
            }
        }

        function r(n, t) {
            for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (i > e && (i = e), e > u && (u = e));
            return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
        }

        function u(n, t, e, r) {
            var u, i = -1,
                o = n.length,
                a = e.x,
                l = e.y,
                s = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || s > e.dy) && (s = e.dy); ++i < o;) u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
                u.z = !0, u.dx += e.x + e.dx - a, e.y += s, e.dy -= s
            } else {
                for ((r || s > e.dx) && (s = e.dx); ++i < o;) u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
                u.z = !1, u.dy += e.y + e.dy - l, e.x += s, e.dx -= s
            }
        }

        function i(r) {
            var u = o || a(r),
                i = u[0];
            return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
        }
        var o, a = ta.layout.hierarchy(),
            c = Math.round,
            l = [1, 1],
            s = null,
            f = Ri,
            h = !1,
            g = "squarify",
            p = .5 * (1 + Math.sqrt(5));
        return i.size = function(n) {
            return arguments.length ? (l = n, i) : l
        }, i.padding = function(n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null == e ? Ri(t) : Di(t, "number" == typeof e ? [e, e, e, e] : e)
            }

            function e(t) {
                return Di(t, n)
            }
            if (!arguments.length) return s;
            var r;
            return f = null == (s = n) ? Ri : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
        }, i.round = function(n) {
            return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
        }, i.sticky = function(n) {
            return arguments.length ? (h = n, o = null, i) : h
        }, i.ratio = function(n) {
            return arguments.length ? (p = n, i) : p
        }, i.mode = function(n) {
            return arguments.length ? (g = n + "", i) : g
        }, Gu(i, a)
    }, ta.random = {
        normal: function(n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1), 1 > e && (n = 0),
                function() {
                    var e, r, u;
                    do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
                    return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
                }
        },
        logNormal: function() {
            var n = ta.random.normal.apply(ta, arguments);
            return function() {
                return Math.exp(n())
            }
        },
        bates: function(n) {
            var t = ta.random.irwinHall(n);
            return function() {
                return t() / n
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, e = 0; n > e; e++) t += Math.random();
                return t
            }
        }
    }, ta.scale = {};
    var bl = {
        floor: Et,
        ceil: Et
    };
    ta.scale.linear = function() {
        return Yi([0, 1], [0, 1], mu, !1)
    };
    var _l = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    ta.scale.log = function() {
        return Ji(ta.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var wl = ta.format(".0e"),
        Sl = {
            floor: function(n) {
                return -Math.ceil(-n)
            },
            ceil: function(n) {
                return -Math.floor(-n)
            }
        };
    ta.scale.pow = function() {
        return Gi(ta.scale.linear(), 1, [0, 1])
    }, ta.scale.sqrt = function() {
        return ta.scale.pow().exponent(.5)
    }, ta.scale.ordinal = function() {
        return Qi([], {
            t: "range",
            a: [
                []
            ]
        })
    }, ta.scale.category10 = function() {
        return ta.scale.ordinal().range(kl)
    }, ta.scale.category20 = function() {
        return ta.scale.ordinal().range(El)
    }, ta.scale.category20b = function() {
        return ta.scale.ordinal().range(Al)
    }, ta.scale.category20c = function() {
        return ta.scale.ordinal().range(Nl)
    };
    var kl = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(yt),
        El = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(yt),
        Al = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(yt),
        Nl = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(yt);
    ta.scale.quantile = function() {
        return no([], [])
    }, ta.scale.quantize = function() {
        return to(0, 1, [0, 1])
    }, ta.scale.threshold = function() {
        return eo([.5], [0, 1])
    }, ta.scale.identity = function() {
        return ro([0, 1])
    }, ta.svg = {}, ta.svg.arc = function() {
        function n() {
            var n = Math.max(0, +e.apply(this, arguments)),
                l = Math.max(0, +r.apply(this, arguments)),
                s = o.apply(this, arguments) - ja,
                f = a.apply(this, arguments) - ja,
                h = Math.abs(f - s),
                g = s > f ? 0 : 1;
            if (n > l && (p = l, l = n, n = p), h >= Ua) return t(l, g) + (n ? t(n, 1 - g) : "") + "Z";
            var p, v, d, m, y, M, x, b, _, w, S, k, E = 0,
                A = 0,
                N = [];
            if ((m = (+c.apply(this, arguments) || 0) / 2) && (d = i === Cl ? Math.sqrt(n * n + l * l) : +i.apply(this, arguments), g || (A *= -1), l && (A = nt(d / l * Math.sin(m))), n && (E = nt(d / n * Math.sin(m)))), l) {
                y = l * Math.cos(s + A), M = l * Math.sin(s + A), x = l * Math.cos(f - A), b = l * Math.sin(f - A);
                var C = Math.abs(f - s - 2 * A) <= Da ? 0 : 1;
                if (A && so(y, M, x, b) === g ^ C) {
                    var z = (s + f) / 2;
                    y = l * Math.cos(z), M = l * Math.sin(z), x = b = null
                }
            } else y = M = 0;
            if (n) {
                _ = n * Math.cos(f - E), w = n * Math.sin(f - E), S = n * Math.cos(s + E), k = n * Math.sin(s + E);
                var q = Math.abs(s - f + 2 * E) <= Da ? 0 : 1;
                if (E && so(_, w, S, k) === 1 - g ^ q) {
                    var L = (s + f) / 2;
                    _ = n * Math.cos(L), w = n * Math.sin(L), S = k = null
                }
            } else _ = w = 0;
            if ((p = Math.min(Math.abs(l - n) / 2, +u.apply(this, arguments))) > .001) {
                v = l > n ^ g ? 0 : 1;
                var T = null == S ? [_, w] : null == x ? [y, M] : Lr([y, M], [S, k], [x, b], [_, w]),
                    R = y - T[0],
                    D = M - T[1],
                    P = x - T[0],
                    U = b - T[1],
                    j = 1 / Math.sin(Math.acos((R * P + D * U) / (Math.sqrt(R * R + D * D) * Math.sqrt(P * P + U * U))) / 2),
                    F = Math.sqrt(T[0] * T[0] + T[1] * T[1]);
                if (null != x) {
                    var H = Math.min(p, (l - F) / (j + 1)),
                        O = fo(null == S ? [_, w] : [S, k], [y, M], l, H, g),
                        Y = fo([x, b], [_, w], l, H, g);
                    p === H ? N.push("M", O[0], "A", H, ",", H, " 0 0,", v, " ", O[1], "A", l, ",", l, " 0 ", 1 - g ^ so(O[1][0], O[1][1], Y[1][0], Y[1][1]), ",", g, " ", Y[1], "A", H, ",", H, " 0 0,", v, " ", Y[0]) : N.push("M", O[0], "A", H, ",", H, " 0 1,", v, " ", Y[0])
                } else N.push("M", y, ",", M);
                if (null != S) {
                    var I = Math.min(p, (n - F) / (j - 1)),
                        Z = fo([y, M], [S, k], n, -I, g),
                        V = fo([_, w], null == x ? [y, M] : [x, b], n, -I, g);
                    p === I ? N.push("L", V[0], "A", I, ",", I, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", g ^ so(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - g, " ", Z[1], "A", I, ",", I, " 0 0,", v, " ", Z[0]) : N.push("L", V[0], "A", I, ",", I, " 0 0,", v, " ", Z[0])
                } else N.push("L", _, ",", w)
            } else N.push("M", y, ",", M), null != x && N.push("A", l, ",", l, " 0 ", C, ",", g, " ", x, ",", b), N.push("L", _, ",", w), null != S && N.push("A", n, ",", n, " 0 ", q, ",", 1 - g, " ", S, ",", k);
            return N.push("Z"), N.join("")
        }

        function t(n, t) {
            return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n
        }
        var e = io,
            r = oo,
            u = uo,
            i = Cl,
            o = ao,
            a = co,
            c = lo;
        return n.innerRadius = function(t) {
            return arguments.length ? (e = kt(t), n) : e
        }, n.outerRadius = function(t) {
            return arguments.length ? (r = kt(t), n) : r
        }, n.cornerRadius = function(t) {
            return arguments.length ? (u = kt(t), n) : u
        }, n.padRadius = function(t) {
            return arguments.length ? (i = t == Cl ? Cl : kt(t), n) : i
        }, n.startAngle = function(t) {
            return arguments.length ? (o = kt(t), n) : o
        }, n.endAngle = function(t) {
            return arguments.length ? (a = kt(t), n) : a
        }, n.padAngle = function(t) {
            return arguments.length ? (c = kt(t), n) : c
        }, n.centroid = function() {
            var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
                t = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - ja;
            return [Math.cos(t) * n, Math.sin(t) * n]
        }, n
    };
    var Cl = "auto";
    ta.svg.line = function() {
        return ho(Et)
    };
    var zl = ta.map({
        linear: go,
        "linear-closed": po,
        step: vo,
        "step-before": mo,
        "step-after": yo,
        basis: So,
        "basis-open": ko,
        "basis-closed": Eo,
        bundle: Ao,
        cardinal: bo,
        "cardinal-open": Mo,
        "cardinal-closed": xo,
        monotone: To
    });
    zl.forEach(function(n, t) {
        t.key = n, t.closed = /-closed$/.test(n)
    });
    var ql = [0, 2 / 3, 1 / 3, 0],
        Ll = [0, 1 / 3, 2 / 3, 0],
        Tl = [0, 1 / 6, 2 / 3, 1 / 6];
    ta.svg.line.radial = function() {
        var n = ho(Ro);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    }, mo.reverse = yo, yo.reverse = mo, ta.svg.area = function() {
        return Do(Et)
    }, ta.svg.area.radial = function() {
        var n = Do(Ro);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    }, ta.svg.chord = function() {
        function n(n, a) {
            var c = t(this, i, n, a),
                l = t(this, o, n, a);
            return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
        }

        function t(n, t, e, r) {
            var u = t.call(n, e, r),
                i = a.call(n, u, r),
                o = c.call(n, u, r) - ja,
                s = l.call(n, u, r) - ja;
            return {
                r: i,
                a0: o,
                a1: s,
                p0: [i * Math.cos(o), i * Math.sin(o)],
                p1: [i * Math.cos(s), i * Math.sin(s)]
            }
        }

        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }

        function r(n, t, e) {
            return "A" + n + "," + n + " 0 " + +(e > Da) + ",1 " + t
        }

        function u(n, t, e, r) {
            return "Q 0,0 " + r
        }
        var i = mr,
            o = yr,
            a = Po,
            c = ao,
            l = co;
        return n.radius = function(t) {
            return arguments.length ? (a = kt(t), n) : a
        }, n.source = function(t) {
            return arguments.length ? (i = kt(t), n) : i
        }, n.target = function(t) {
            return arguments.length ? (o = kt(t), n) : o
        }, n.startAngle = function(t) {
            return arguments.length ? (c = kt(t), n) : c
        }, n.endAngle = function(t) {
            return arguments.length ? (l = kt(t), n) : l
        }, n
    }, ta.svg.diagonal = function() {
        function n(n, u) {
            var i = t.call(this, n, u),
                o = e.call(this, n, u),
                a = (i.y + o.y) / 2,
                c = [i, {
                    x: i.x,
                    y: a
                }, {
                    x: o.x,
                    y: a
                }, o];
            return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }
        var t = mr,
            e = yr,
            r = Uo;
        return n.source = function(e) {
            return arguments.length ? (t = kt(e), n) : t
        }, n.target = function(t) {
            return arguments.length ? (e = kt(t), n) : e
        }, n.projection = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n
    }, ta.svg.diagonal.radial = function() {
        var n = ta.svg.diagonal(),
            t = Uo,
            e = n.projection;
        return n.projection = function(n) {
            return arguments.length ? e(jo(t = n)) : t
        }, n
    }, ta.svg.symbol = function() {
        function n(n, r) {
            return (Rl.get(t.call(this, n, r)) || Oo)(e.call(this, n, r))
        }
        var t = Ho,
            e = Fo;
        return n.type = function(e) {
            return arguments.length ? (t = kt(e), n) : t
        }, n.size = function(t) {
            return arguments.length ? (e = kt(t), n) : e
        }, n
    };
    var Rl = ta.map({
        circle: Oo,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * Pl)),
                e = t * Pl;
            return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / Dl),
                e = t * Dl / 2;
            return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / Dl),
                e = t * Dl / 2;
            return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
        }
    });
    ta.svg.symbolTypes = Rl.keys();
    var Dl = Math.sqrt(3),
        Pl = Math.tan(30 * Fa);
    ka.transition = function(n) {
        for (var t, e, r = Ul || ++Ol, u = Xo(n), i = [], o = jl || {
                time: Date.now(),
                ease: Su,
                delay: 0,
                duration: 250
            }, a = -1, c = this.length; ++a < c;) {
            i.push(t = []);
            for (var l = this[a], s = -1, f = l.length; ++s < f;)(e = l[s]) && $o(e, s, u, r, o), t.push(e)
        }
        return Io(i, u, r)
    }, ka.interrupt = function(n) {
        return this.each(null == n ? Fl : Yo(Xo(n)))
    };
    var Ul, jl, Fl = Yo(Xo()),
        Hl = [],
        Ol = 0;
    Hl.call = ka.call, Hl.empty = ka.empty, Hl.node = ka.node, Hl.size = ka.size, ta.transition = function(n, t) {
        return n && n.transition ? Ul ? n.transition(t) : n : Na.transition(n)
    }, ta.transition.prototype = Hl, Hl.select = function(n) {
        var t, e, r, u = this.id,
            i = this.namespace,
            o = [];
        n = k(n);
        for (var a = -1, c = this.length; ++a < c;) {
            o.push(t = []);
            for (var l = this[a], s = -1, f = l.length; ++s < f;)(r = l[s]) && (e = n.call(r, r.__data__, s, a)) ? ("__data__" in r && (e.__data__ = r.__data__), $o(e, s, i, u, r[i][u]), t.push(e)) : t.push(null)
        }
        return Io(o, i, u)
    }, Hl.selectAll = function(n) {
        var t, e, r, u, i, o = this.id,
            a = this.namespace,
            c = [];
        n = E(n);
        for (var l = -1, s = this.length; ++l < s;)
            for (var f = this[l], h = -1, g = f.length; ++h < g;)
                if (r = f[h]) {
                    i = r[a][o], e = n.call(r, r.__data__, h, l), c.push(t = []);
                    for (var p = -1, v = e.length; ++p < v;)(u = e[p]) && $o(u, p, a, o, i), t.push(u)
                }
        return Io(c, a, o)
    }, Hl.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = j(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var e = this[i], a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return Io(u, this.namespace, this.id)
    }, Hl.tween = function(n, t) {
        var e = this.id,
            r = this.namespace;
        return arguments.length < 2 ? this.node()[r][e].tween.get(n) : H(this, null == t ? function(t) {
            t[r][e].tween.remove(n)
        } : function(u) {
            u[r][e].tween.set(n, t)
        })
    }, Hl.attr = function(n, t) {
        function e() {
            this.removeAttribute(a)
        }

        function r() {
            this.removeAttributeNS(a.space, a.local)
        }

        function u(n) {
            return null == n ? e : (n += "", function() {
                var t, e = this.getAttribute(a);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttribute(a, t(n))
                })
            })
        }

        function i(n) {
            return null == n ? r : (n += "", function() {
                var t, e = this.getAttributeNS(a.space, a.local);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttributeNS(a.space, a.local, t(n))
                })
            })
        }
        if (arguments.length < 2) {
            for (t in n) this.attr(t, n[t]);
            return this
        }
        var o = "transform" == n ? Hu : mu,
            a = ta.ns.qualify(n);
        return Zo(this, "attr." + n, t, a.local ? i : u)
    }, Hl.attrTween = function(n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(u));
            return r && function(n) {
                this.setAttribute(u, r(n))
            }
        }

        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
            return r && function(n) {
                this.setAttributeNS(u.space, u.local, r(n))
            }
        }
        var u = ta.ns.qualify(n);
        return this.tween("attr." + n, u.local ? r : e)
    }, Hl.style = function(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function u(t) {
            return null == t ? r : (t += "", function() {
                var r, u = oa.getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (r = mu(u, t), function(t) {
                    this.style.setProperty(n, r(t), e)
                })
            })
        }
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof n) {
                2 > i && (t = "");
                for (e in n) this.style(e, n[e], t);
                return this
            }
            e = ""
        }
        return Zo(this, "style." + n, t, u)
    }, Hl.styleTween = function(n, t, e) {
        function r(r, u) {
            var i = t.call(this, r, u, oa.getComputedStyle(this, null).getPropertyValue(n));
            return i && function(t) {
                this.style.setProperty(n, i(t), e)
            }
        }
        return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
    }, Hl.text = function(n) {
        return Zo(this, "text", n, Vo)
    }, Hl.remove = function() {
        var n = this.namespace;
        return this.each("end.transition", function() {
            var t;
            this[n].count < 2 && (t = this.parentNode) && t.removeChild(this)
        })
    }, Hl.ease = function(n) {
        var t = this.id,
            e = this.namespace;
        return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = ta.ease.apply(ta, arguments)), H(this, function(r) {
            r[e][t].ease = n
        }))
    }, Hl.delay = function(n) {
        var t = this.id,
            e = this.namespace;
        return arguments.length < 1 ? this.node()[e][t].delay : H(this, "function" == typeof n ? function(r, u, i) {
            r[e][t].delay = +n.call(r, r.__data__, u, i)
        } : (n = +n, function(r) {
            r[e][t].delay = n
        }))
    }, Hl.duration = function(n) {
        var t = this.id,
            e = this.namespace;
        return arguments.length < 1 ? this.node()[e][t].duration : H(this, "function" == typeof n ? function(r, u, i) {
            r[e][t].duration = Math.max(1, n.call(r, r.__data__, u, i))
        } : (n = Math.max(1, n), function(r) {
            r[e][t].duration = n
        }))
    }, Hl.each = function(n, t) {
        var e = this.id,
            r = this.namespace;
        if (arguments.length < 2) {
            var u = jl,
                i = Ul;
            try {
                Ul = e, H(this, function(t, u, i) {
                    jl = t[r][e], n.call(t, t.__data__, u, i)
                })
            } finally {
                jl = u, Ul = i
            }
        } else H(this, function(u) {
            var i = u[r][e];
            (i.event || (i.event = ta.dispatch("start", "end", "interrupt"))).on(n, t)
        });
        return this
    }, Hl.transition = function() {
        for (var n, t, e, r, u = this.id, i = ++Ol, o = this.namespace, a = [], c = 0, l = this.length; l > c; c++) {
            a.push(n = []);
            for (var t = this[c], s = 0, f = t.length; f > s; s++)(e = t[s]) && (r = e[o][u], $o(e, s, o, i, {
                time: r.time,
                ease: r.ease,
                delay: r.delay + r.duration,
                duration: r.duration
            })), n.push(e)
        }
        return Io(a, o, i)
    }, ta.svg.axis = function() {
        function n(n) {
            n.each(function() {
                var n, l = ta.select(this),
                    s = this.__chart__ || e,
                    f = this.__chart__ = e.copy(),
                    h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
                    g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : Et : t,
                    p = l.selectAll(".tick").data(h, f),
                    v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ta),
                    d = ta.transition(p.exit()).style("opacity", Ta).remove(),
                    m = ta.transition(p.order()).style("opacity", 1),
                    y = Math.max(u, 0) + o,
                    M = Ui(f),
                    x = l.selectAll(".domain").data([0]),
                    b = (x.enter().append("path").attr("class", "domain"), ta.transition(x));
                v.append("line"), v.append("text");
                var _, w, S, k, E = v.select("line"),
                    A = m.select("line"),
                    N = p.select("text").text(g),
                    C = v.select("text"),
                    z = m.select("text"),
                    q = "top" === r || "left" === r ? -1 : 1;
                if ("bottom" === r || "top" === r ? (n = Bo, _ = "x", S = "y", w = "x2", k = "y2", N.attr("dy", 0 > q ? "0em" : ".71em").style("text-anchor", "middle"), b.attr("d", "M" + M[0] + "," + q * i + "V0H" + M[1] + "V" + q * i)) : (n = Wo, _ = "y", S = "x", w = "y2", k = "x2", N.attr("dy", ".32em").style("text-anchor", 0 > q ? "end" : "start"), b.attr("d", "M" + q * i + "," + M[0] + "H0V" + M[1] + "H" + q * i)), E.attr(k, q * u), C.attr(S, q * y), A.attr(w, 0).attr(k, q * u), z.attr(_, 0).attr(S, q * y), f.rangeBand) {
                    var L = f,
                        T = L.rangeBand() / 2;
                    s = f = function(n) {
                        return L(n) + T
                    }
                } else s.rangeBand ? s = f : d.call(n, f, s);
                v.call(n, s, f), m.call(n, f, f)
            })
        }
        var t, e = ta.scale.linear(),
            r = Yl,
            u = 6,
            i = 6,
            o = 3,
            a = [10],
            c = null;
        return n.scale = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.orient = function(t) {
            return arguments.length ? (r = t in Il ? t + "" : Yl, n) : r
        }, n.ticks = function() {
            return arguments.length ? (a = arguments, n) : a
        }, n.tickValues = function(t) {
            return arguments.length ? (c = t, n) : c
        }, n.tickFormat = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.tickSize = function(t) {
            var e = arguments.length;
            return e ? (u = +t, i = +arguments[e - 1], n) : u
        }, n.innerTickSize = function(t) {
            return arguments.length ? (u = +t, n) : u
        }, n.outerTickSize = function(t) {
            return arguments.length ? (i = +t, n) : i
        }, n.tickPadding = function(t) {
            return arguments.length ? (o = +t, n) : o
        }, n.tickSubdivide = function() {
            return arguments.length && n
        }, n
    };
    var Yl = "bottom",
        Il = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    ta.svg.brush = function() {
        function n(i) {
            i.each(function() {
                var i = ta.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
                    o = i.selectAll(".background").data([0]);
                o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var a = i.selectAll(".resize").data(p, Et);
                a.exit().remove(), a.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }).style("cursor", function(n) {
                    return Zl[n]
                }).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
                var s, f = ta.transition(i),
                    h = ta.transition(o);
                c && (s = Ui(c), h.attr("x", s[0]).attr("width", s[1] - s[0]), e(f)), l && (s = Ui(l), h.attr("y", s[0]).attr("height", s[1] - s[0]), r(f)), t(f)
            })
        }

        function t(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + s[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")"
            })
        }

        function e(n) {
            n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0])
        }

        function r(n) {
            n.select(".extent").attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
        }

        function u() {
            function u() {
                32 == ta.event.keyCode && (N || (y = null, z[0] -= s[1], z[1] -= f[1], N = 2), b())
            }

            function p() {
                32 == ta.event.keyCode && 2 == N && (z[0] += s[1], z[1] += f[1], N = 0, b())
            }

            function v() {
                var n = ta.mouse(x),
                    u = !1;
                M && (n[0] += M[0], n[1] += M[1]), N || (ta.event.altKey ? (y || (y = [(s[0] + s[1]) / 2, (f[0] + f[1]) / 2]), z[0] = s[+(n[0] < y[0])], z[1] = f[+(n[1] < y[1])]) : y = null), E && d(n, c, 0) && (e(S), u = !0), A && d(n, l, 1) && (r(S), u = !0), u && (t(S), w({
                    type: "brush",
                    mode: N ? "move" : "resize"
                }))
            }

            function d(n, t, e) {
                var r, u, a = Ui(t),
                    c = a[0],
                    l = a[1],
                    p = z[e],
                    v = e ? f : s,
                    d = v[1] - v[0];
                return N && (c -= p, l -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(l, n[e])) : n[e], N ? u = (r += p) + d : (y && (p = Math.max(c, Math.min(l, 2 * y[e] - r))), r > p ? (u = r, r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, !0) : void 0
            }

            function m() {
                v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), ta.select("body").style("cursor", null), q.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), C(), w({
                    type: "brushend"
                })
            }
            var y, M, x = this,
                _ = ta.select(ta.event.target),
                w = a.of(x, arguments),
                S = ta.select(x),
                k = _.datum(),
                E = !/^(n|s)$/.test(k) && c,
                A = !/^(e|w)$/.test(k) && l,
                N = _.classed("extent"),
                C = X(),
                z = ta.mouse(x),
                q = ta.select(oa).on("keydown.brush", u).on("keyup.brush", p);
            if (ta.event.changedTouches ? q.on("touchmove.brush", v).on("touchend.brush", m) : q.on("mousemove.brush", v).on("mouseup.brush", m), S.interrupt().selectAll("*").interrupt(), N) z[0] = s[0] - z[0], z[1] = f[0] - z[1];
            else if (k) {
                var L = +/w$/.test(k),
                    T = +/^n/.test(k);
                M = [s[1 - L] - z[0], f[1 - T] - z[1]], z[0] = s[L], z[1] = f[T]
            } else ta.event.altKey && (y = z.slice());
            S.style("pointer-events", "none").selectAll(".resize").style("display", null), ta.select("body").style("cursor", _.style("cursor")), w({
                type: "brushstart"
            }), v()
        }
        var i, o, a = w(n, "brushstart", "brush", "brushend"),
            c = null,
            l = null,
            s = [0, 0],
            f = [0, 0],
            h = !0,
            g = !0,
            p = Vl[0];
        return n.event = function(n) {
            n.each(function() {
                var n = a.of(this, arguments),
                    t = {
                        x: s,
                        y: f,
                        i: i,
                        j: o
                    },
                    e = this.__chart__ || t;
                this.__chart__ = t, Ul ? ta.select(this).transition().each("start.brush", function() {
                    i = e.i, o = e.j, s = e.x, f = e.y, n({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var e = yu(s, t.x),
                        r = yu(f, t.y);
                    return i = o = null,
                        function(u) {
                            s = t.x = e(u), f = t.y = r(u), n({
                                type: "brush",
                                mode: "resize"
                            })
                        }
                }).each("end.brush", function() {
                    i = t.i, o = t.j, n({
                        type: "brush",
                        mode: "resize"
                    }), n({
                        type: "brushend"
                    })
                }) : (n({
                    type: "brushstart"
                }), n({
                    type: "brush",
                    mode: "resize"
                }), n({
                    type: "brushend"
                }))
            })
        }, n.x = function(t) {
            return arguments.length ? (c = t, p = Vl[!c << 1 | !l], n) : c
        }, n.y = function(t) {
            return arguments.length ? (l = t, p = Vl[!c << 1 | !l], n) : l
        }, n.clamp = function(t) {
            return arguments.length ? (c && l ? (h = !!t[0], g = !!t[1]) : c ? h = !!t : l && (g = !!t), n) : c && l ? [h, g] : c ? h : l ? g : null
        }, n.extent = function(t) {
            var e, r, u, a, h;
            return arguments.length ? (c && (e = t[0], r = t[1], l && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), (e != s[0] || r != s[1]) && (s = [e, r])), l && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], l.invert && (u = l(u), a = l(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (h = e, e = r, r = h))), l && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], l.invert && (u = l.invert(u), a = l.invert(a)), u > a && (h = u, u = a, a = h))), c && l ? [
                [e, u],
                [r, a]
            ] : c ? [e, r] : l && [u, a])
        }, n.clear = function() {
            return n.empty() || (s = [0, 0], f = [0, 0], i = o = null), n
        }, n.empty = function() {
            return !!c && s[0] == s[1] || !!l && f[0] == f[1]
        }, ta.rebind(n, a, "on")
    };
    var Zl = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        Vl = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Xl = fc.format = mc.timeFormat,
        $l = Xl.utc,
        Bl = $l("%Y-%m-%dT%H:%M:%S.%LZ");
    Xl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Jo : Bl, Jo.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    }, Jo.toString = Bl.toString, fc.second = Ft(function(n) {
        return new hc(1e3 * Math.floor(n / 1e3))
    }, function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }, function(n) {
        return n.getSeconds()
    }), fc.seconds = fc.second.range, fc.seconds.utc = fc.second.utc.range, fc.minute = Ft(function(n) {
        return new hc(6e4 * Math.floor(n / 6e4))
    }, function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }, function(n) {
        return n.getMinutes()
    }), fc.minutes = fc.minute.range, fc.minutes.utc = fc.minute.utc.range, fc.hour = Ft(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new hc(36e5 * (Math.floor(n / 36e5 - t) + t))
    }, function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }, function(n) {
        return n.getHours()
    }), fc.hours = fc.hour.range, fc.hours.utc = fc.hour.utc.range, fc.month = Ft(function(n) {
        return n = fc.day(n), n.setDate(1), n
    }, function(n, t) {
        n.setMonth(n.getMonth() + t)
    }, function(n) {
        return n.getMonth()
    }), fc.months = fc.month.range, fc.months.utc = fc.month.utc.range;
    var Wl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Jl = [
            [fc.second, 1],
            [fc.second, 5],
            [fc.second, 15],
            [fc.second, 30],
            [fc.minute, 1],
            [fc.minute, 5],
            [fc.minute, 15],
            [fc.minute, 30],
            [fc.hour, 1],
            [fc.hour, 3],
            [fc.hour, 6],
            [fc.hour, 12],
            [fc.day, 1],
            [fc.day, 2],
            [fc.week, 1],
            [fc.month, 1],
            [fc.month, 3],
            [fc.year, 1]
        ],
        Gl = Xl.multi([
            [".%L", function(n) {
                return n.getMilliseconds()
            }],
            [":%S", function(n) {
                return n.getSeconds()
            }],
            ["%I:%M", function(n) {
                return n.getMinutes()
            }],
            ["%I %p", function(n) {
                return n.getHours()
            }],
            ["%a %d", function(n) {
                return n.getDay() && 1 != n.getDate()
            }],
            ["%b %d", function(n) {
                return 1 != n.getDate()
            }],
            ["%B", function(n) {
                return n.getMonth()
            }],
            ["%Y", Ne]
        ]),
        Kl = {
            range: function(n, t, e) {
                return ta.range(Math.ceil(n / e) * e, +t, e).map(Ko)
            },
            floor: Et,
            ceil: Et
        };
    Jl.year = fc.year, fc.scale = function() {
        return Go(ta.scale.linear(), Jl, Gl)
    };
    var Ql = Jl.map(function(n) {
            return [n[0].utc, n[1]]
        }),
        ns = $l.multi([
            [".%L", function(n) {
                return n.getUTCMilliseconds()
            }],
            [":%S", function(n) {
                return n.getUTCSeconds()
            }],
            ["%I:%M", function(n) {
                return n.getUTCMinutes()
            }],
            ["%I %p", function(n) {
                return n.getUTCHours()
            }],
            ["%a %d", function(n) {
                return n.getUTCDay() && 1 != n.getUTCDate()
            }],
            ["%b %d", function(n) {
                return 1 != n.getUTCDate()
            }],
            ["%B", function(n) {
                return n.getUTCMonth()
            }],
            ["%Y", Ne]
        ]);
    Ql.year = fc.year.utc, fc.scale.utc = function() {
        return Go(ta.scale.linear(), Ql, ns)
    }, ta.text = At(function(n) {
        return n.responseText
    }), ta.json = function(n, t) {
        return Nt(n, "application/json", Qo, t)
    }, ta.html = function(n, t) {
        return Nt(n, "text/html", na, t)
    }, ta.xml = At(function(n) {
        return n.responseXML
    }), "function" == typeof define && define.amd ? define(ta) : "object" == typeof module && module.exports && (module.exports = ta), this.d3 = ta
}();
! function() {
    function t(t, a) {
        return {
            type: "Feature",
            id: t.id,
            properties: t.properties,
            geometry: n(t.geometry, a)
        }
    }

    function n(t, a) {
        if (!t) return null;
        if ("GeometryCollection" === t.type) return {
            type: "GeometryCollection",
            geometries: object.geometries.map(function(t) {
                return n(t, a)
            })
        };
        if (!la.hasOwnProperty(t.type)) return null;
        var r = la[t.type];
        return d3.geo.stream(t, a(r)), r.result()
    }

    function a() {}

    function r(t) {
        if ((n = t.length) < 4) return !1;
        for (var n, a = 0, r = t[n - 1][1] * t[0][0] - t[n - 1][0] * t[0][1]; ++a < n;) r += t[a - 1][1] * t[a][0] - t[a - 1][0] * t[a][1];
        return 0 >= r
    }

    function e(t, n) {
        for (var a = n[0], r = n[1], e = !1, o = 0, i = t.length, h = i - 1; i > o; h = o++) {
            var u = t[o],
                M = u[0],
                s = u[1],
                c = t[h],
                f = c[0],
                v = c[1];
            s > r ^ v > r && (f - M) * (r - s) / (v - s) + M > a && (e = !e)
        }
        return e
    }

    function o(t) {
        return t ? t / Math.sin(t) : 1
    }

    function i(t) {
        return t > 0 ? 1 : 0 > t ? -1 : 0
    }

    function h(t) {
        return t > 1 ? pa : -1 > t ? -pa : Math.asin(t)
    }

    function u(t) {
        return t > 1 ? 0 : -1 > t ? ba : Math.acos(t)
    }

    function M(t) {
        return t > 0 ? Math.sqrt(t) : 0
    }

    function s(t) {
        function n(t, n) {
            var a = Math.cos(t),
                e = Math.cos(n),
                o = Math.sin(n),
                i = e * a,
                h = -((1 - i ? Math.log(.5 * (1 + i)) / (1 - i) : -.5) + r / (1 + i));
            return [h * e * Math.sin(t), h * o]
        }
        var a = Math.tan(.5 * t),
            r = 2 * Math.log(Math.cos(.5 * t)) / (a * a);
        return n.invert = function(n, a) {
            var e, o = Math.sqrt(n * n + a * a),
                i = t * -.5,
                u = 50;
            if (!o) return [0, 0];
            do {
                var M = .5 * i,
                    s = Math.cos(M),
                    c = Math.sin(M),
                    f = Math.tan(M),
                    v = Math.log(1 / s);
                i -= e = (2 / f * v - r * f - o) / (-v / (c * c) + 1 - r / (2 * s * s))
            } while (Math.abs(e) > ga && --u > 0);
            var l = Math.sin(i);
            return [Math.atan2(n * l, o * Math.cos(i)), h(a * l / o)]
        }, n
    }

    function c() {
        var t = pa,
            n = Sa(s),
            a = n(t);
        return a.radius = function(a) {
            return arguments.length ? n(t = a * ba / 180) : 180 * (t / ba)
        }, a
    }

    function f(t, n) {
        var a = Math.cos(n),
            r = o(u(a * Math.cos(t /= 2)));
        return [2 * a * Math.sin(t) * r, Math.sin(n) * r]
    }

    function v(t) {
        function n(t, n) {
            var h = Math.cos(n),
                u = Math.cos(t /= 2);
            return [(1 + h) * Math.sin(t), (e * n > -Math.atan2(u, o) - .001 ? 0 : 10 * -e) + i + Math.sin(n) * r - (1 + h) * a * u]
        }
        var a = Math.sin(t),
            r = Math.cos(t),
            e = t > 0 ? 1 : -1,
            o = Math.tan(e * t),
            i = (1 + a - r) / 2;
        return n.invert = function(t, n) {
            var h = 0,
                u = 0,
                M = 50;
            do {
                var s = Math.cos(h),
                    c = Math.sin(h),
                    f = Math.cos(u),
                    v = Math.sin(u),
                    l = 1 + f,
                    g = l * c - t,
                    d = i + v * r - l * a * s - n,
                    b = .5 * l * s,
                    p = -c * v,
                    w = .5 * a * l * c,
                    q = r * f + a * s * v,
                    m = p * w - q * b,
                    y = .5 * (d * p - g * q) / m,
                    S = (g * w - d * b) / m;
                h -= y, u -= S
            } while ((Math.abs(y) > ga || Math.abs(S) > ga) && --M > 0);
            return e * u > -Math.atan2(Math.cos(h), o) - .001 ? [2 * h, u] : null
        }, n
    }

    function l() {
        var t = ba / 9,
            n = t > 0 ? 1 : -1,
            a = Math.tan(n * t),
            r = Sa(v),
            e = r(t),
            o = e.stream;
        return e.parallel = function(e) {
            return arguments.length ? (a = Math.tan((n = (t = e * ba / 180) > 0 ? 1 : -1) * t), r(t)) : 180 * (t / ba)
        }, e.stream = function(r) {
            var i = e.rotate(),
                h = o(r),
                u = (e.rotate([0, 0]), o(r));
            return e.rotate(i), h.sphere = function() {
                u.polygonStart(), u.lineStart();
                for (var r = -180 * n; 180 > n * r; r += 90 * n) u.point(r, 90 * n);
                for (; n * (r -= t) >= -180;) u.point(r, n * -Math.atan2(Math.cos(r * qa / 2), a) * ma);
                u.lineEnd(), u.polygonEnd()
            }, h
        }, e
    }

    function g(t) {
        return t = Math.exp(2 * t), (t - 1) / (t + 1)
    }

    function d(t) {
        return .5 * (Math.exp(t) - Math.exp(-t))
    }

    function b(t) {
        return .5 * (Math.exp(t) + Math.exp(-t))
    }

    function p(t) {
        return Math.log(t + M(t * t + 1))
    }

    function w(t) {
        return Math.log(t + M(t * t - 1))
    }

    function q(t, n) {
        var a = Math.tan(n / 2),
            r = M(1 - a * a),
            e = 1 + r * Math.cos(t /= 2),
            o = Math.sin(t) * r / e,
            i = a / e,
            h = o * o,
            u = i * i;
        return [4 / 3 * o * (3 + h - 3 * u), 4 / 3 * i * (3 + 3 * h - u)]
    }

    function m(t, n) {
        var a = Math.abs(n);
        return ba / 4 > a ? [t, Math.log(Math.tan(ba / 4 + n / 2))] : [t * Math.cos(a) * (2 * Math.SQRT2 - 1 / Math.sin(a)), i(n) * (2 * Math.SQRT2 * (a - ba / 4) - Math.log(Math.tan(a / 2)))]
    }

    function y(t) {
        function n(t, n) {
            var r = Ra(t, n);
            if (Math.abs(t) > pa) {
                var e = Math.atan2(r[1], r[0]),
                    o = Math.sqrt(r[0] * r[0] + r[1] * r[1]),
                    i = a * Math.round((e - pa) / a) + pa,
                    u = Math.atan2(Math.sin(e -= i), 2 - Math.cos(e));
                e = i + h(ba / o * Math.sin(u)) - u, r[0] = o * Math.cos(e), r[1] = o * Math.sin(e)
            }
            return r
        }
        var a = 2 * ba / t;
        return n.invert = function(t, n) {
            var r = Math.sqrt(t * t + n * n);
            if (r > pa) {
                var e = Math.atan2(n, t),
                    o = a * Math.round((e - pa) / a) + pa,
                    i = e > o ? -1 : 1,
                    h = r * Math.cos(o - e),
                    u = 1 / Math.tan(i * Math.acos((h - ba) / Math.sqrt(ba * (ba - 2 * h) + r * r)));
                e = o + 2 * Math.atan((u + i * Math.sqrt(u * u - 3)) / 3), t = r * Math.cos(e), n = r * Math.sin(e)
            }
            return Ra.invert(t, n)
        }, n
    }

    function S() {
        var t = 5,
            n = Sa(y),
            a = n(t),
            r = a.stream,
            e = .01,
            o = -Math.cos(e * qa),
            i = Math.sin(e * qa);
        return a.lobes = function(a) {
            return arguments.length ? n(t = +a) : t
        }, a.stream = function(n) {
            var u = a.rotate(),
                M = r(n),
                s = (a.rotate([0, 0]), r(n));
            return a.rotate(u), M.sphere = function() {
                s.polygonStart(), s.lineStart();
                for (var n = 0, a = 360 / t, r = 2 * ba / t, u = 90 - 180 / t, M = pa; t > n; ++n, u -= a, M -= r) s.point(Math.atan2(i * Math.cos(M), o) * ma, h(i * Math.sin(M)) * ma), -90 > u ? (s.point(-90, -180 - u - e), s.point(-90, -180 - u + e)) : (s.point(90, u + e), s.point(90, u - e));
                s.lineEnd(), s.polygonEnd()
            }, M
        }, a
    }

    function Q(t) {
        return function(n) {
            var a, r = t * Math.sin(n),
                e = 30;
            do n -= a = (n + Math.sin(n) - r) / (1 + Math.cos(n)); while (Math.abs(a) > ga && --e > 0);
            return n / 2
        }
    }

    function R(t, n, a) {
        function r(a, r) {
            return [t * a * Math.cos(r = e(r)), n * Math.sin(r)]
        }
        var e = Q(a);
        return r.invert = function(r, e) {
            var o = h(e / n);
            return [r / (t * Math.cos(o)), h((2 * o + Math.sin(2 * o)) / a)]
        }, r
    }

    function T(t, n) {
        var a = 2.00276,
            r = Ta(n);
        return [a * t / (1 / Math.cos(n) + 1.11072 / Math.cos(r)), (n + Math.SQRT2 * Math.sin(r)) / a]
    }

    function x(t) {
        var n = 0,
            a = Sa(t),
            r = a(n);
        return r.parallel = function(t) {
            return arguments.length ? a(n = t * ba / 180) : 180 * (n / ba)
        }, r
    }

    function E(t, n) {
        return [t * Math.cos(n), n]
    }

    function k(t) {
        function n(n, r) {
            var e = a + t - r,
                o = e ? n * Math.cos(r) / e : e;
            return [e * Math.sin(o), a - e * Math.cos(o)]
        }
        if (!t) return E;
        var a = 1 / Math.tan(t);
        return n.invert = function(n, r) {
            var e = Math.sqrt(n * n + (r = a - r) * r),
                o = a + t - e;
            return [e / Math.cos(o) * Math.atan2(n, r), o]
        }, n
    }

    function P(t) {
        function n(n, a) {
            for (var r = Math.sin(a), e = Math.cos(a), o = new Array(3), M = 0; 3 > M; ++M) {
                var s = t[M];
                if (o[M] = z(a - s[1], s[3], s[2], e, r, n - s[0]), !o[M][0]) return s.point;
                o[M][1] = F(o[M][1] - s.v[1])
            }
            for (var c = u.slice(), M = 0; 3 > M; ++M) {
                var f = 2 == M ? 0 : M + 1,
                    v = B(t[M].v[0], o[M][0], o[f][0]);
                o[M][1] < 0 && (v = -v), M ? 1 == M ? (v = i - v, c[0] -= o[M][0] * Math.cos(v), c[1] -= o[M][0] * Math.sin(v)) : (v = h - v, c[0] += o[M][0] * Math.cos(v), c[1] += o[M][0] * Math.sin(v)) : (c[0] += o[M][0] * Math.cos(v), c[1] -= o[M][0] * Math.sin(v))
            }
            return c[0] /= 3, c[1] /= 3, c
        }
        t = t.map(function(t) {
            return [t[0], t[1], Math.sin(t[1]), Math.cos(t[1])]
        });
        for (var a, r = t[2], e = 0; 3 > e; ++e, r = a) a = t[e], r.v = z(a[1] - r[1], r[3], r[2], a[3], a[2], a[0] - r[0]), r.point = [0, 0];
        var o = B(t[0].v[0], t[2].v[0], t[1].v[0]),
            i = B(t[0].v[0], t[1].v[0], t[2].v[0]),
            h = ba - o;
        t[2].point[1] = 0, t[0].point[0] = -(t[1].point[0] = .5 * t[0].v[0]);
        var u = [t[2].point[0] = t[0].point[0] + t[2].v[0] * Math.cos(o), 2 * (t[0].point[1] = t[1].point[1] = t[2].v[0] * Math.sin(o))];
        return n
    }

    function _() {
        var t = [
                [0, 0],
                [0, 0],
                [0, 0]
            ],
            n = Sa(P),
            a = n(t),
            r = a.rotate;
        return delete a.rotate, a.points = function(e) {
            if (!arguments.length) return t;
            t = e;
            var o = d3.geo.centroid({
                    type: "MultiPoint",
                    coordinates: t
                }),
                i = [-o[0], -o[1]];
            return r.call(a, i), n(t.map(d3.geo.rotation(i)).map(A))
        }, a.points([
            [-150, 55],
            [-35, 55],
            [-92.5, 10]
        ])
    }

    function z(t, n, a, r, e, o) {
        var i, M = Math.cos(o);
        if (Math.abs(t) > 1 || Math.abs(o) > 1) i = u(a * e + n * r * M);
        else {
            var s = Math.sin(.5 * t),
                c = Math.sin(.5 * o);
            i = 2 * h(Math.sqrt(s * s + n * r * c * c))
        }
        return Math.abs(i) > ga ? [i, Math.atan2(r * Math.sin(o), n * e - a * r * M)] : [0, 0]
    }

    function B(t, n, a) {
        return u(.5 * (t * t + n * n - a * a) / (t * n))
    }

    function F(t) {
        return t - 2 * ba * Math.floor((t + ba) / (2 * ba))
    }

    function A(t) {
        return [t[0] * qa, t[1] * qa]
    }

    function G(t, n) {
        var a = M(1 - Math.sin(n));
        return [2 / wa * t * a, wa * (1 - a)]
    }

    function j(t) {
        function n(t, n) {
            return [t, (t ? t / Math.sin(t) : 1) * (Math.sin(n) * Math.cos(t) - a * Math.cos(n))]
        }
        var a = Math.tan(t);
        return n.invert = a ? function(t, n) {
            t && (n *= Math.sin(t) / t);
            var r = Math.cos(t);
            return [t, 2 * Math.atan2(Math.sqrt(r * r + a * a - n * n) - r, a - n)]
        } : function(t, n) {
            return [t, h(t ? n * Math.tan(t) / t : n)]
        }, n
    }

    function C(t, n) {
        var a = Math.sqrt(3);
        return [a * t * (2 * Math.cos(2 * n / 3) - 1) / wa, a * wa * Math.sin(n / 3)]
    }

    function D(t) {
        function n(t, n) {
            return [t * a, Math.sin(n) / a]
        }
        var a = Math.cos(t);
        return n.invert = function(t, n) {
            return [t / a, h(n * a)]
        }, n
    }

    function L(t) {
        function n(t, n) {
            return [t * a, (1 + a) * Math.tan(.5 * n)]
        }
        var a = Math.cos(t);
        return n.invert = function(t, n) {
            return [t / a, 2 * Math.atan(n / (1 + a))]
        }, n
    }

    function O(t, n) {
        var a = Math.sqrt(8 / (3 * ba));
        return [a * t * (1 - Math.abs(n) / ba), a * n]
    }

    function H(t, n) {
        var a = Math.sqrt(4 - 3 * Math.sin(Math.abs(n)));
        return [2 / Math.sqrt(6 * ba) * t * a, i(n) * Math.sqrt(2 * ba / 3) * (2 - a)]
    }

    function I(t, n) {
        var a = Math.sqrt(ba * (4 + ba));
        return [2 / a * t * (1 + Math.sqrt(1 - 4 * n * n / (ba * ba))), 4 / a * n]
    }

    function J(t, n) {
        var a = (2 + pa) * Math.sin(n);
        n /= 2;
        for (var r = 0, e = 1 / 0; 10 > r && Math.abs(e) > ga; r++) {
            var o = Math.cos(n);
            n -= e = (n + Math.sin(n) * (o + 2) - a) / (2 * o * (1 + o))
        }
        return [2 / Math.sqrt(ba * (4 + ba)) * t * (1 + Math.cos(n)), 2 * Math.sqrt(ba / (4 + ba)) * Math.sin(n)]
    }

    function K(t, n) {
        return [t * (1 + Math.cos(n)) / Math.sqrt(2 + ba), 2 * n / Math.sqrt(2 + ba)]
    }

    function N(t, n) {
        for (var a = (1 + pa) * Math.sin(n), r = 0, e = 1 / 0; 10 > r && Math.abs(e) > ga; r++) n -= e = (n + Math.sin(n) - a) / (1 + Math.cos(n));
        return a = Math.sqrt(2 + ba), [t * (1 + Math.cos(n)) / a, 2 * n / a]
    }

    function U(t, n) {
        var a = Math.sin(t /= 2),
            r = Math.cos(t),
            e = Math.sqrt(Math.cos(n)),
            o = Math.cos(n /= 2),
            i = Math.sin(n) / (o + Math.SQRT2 * r * e),
            h = Math.sqrt(2 / (1 + i * i)),
            u = Math.sqrt((Math.SQRT2 * o + (r + a) * e) / (Math.SQRT2 * o + (r - a) * e));
        return [ka * (h * (u - 1 / u) - 2 * Math.log(u)), ka * (h * i * (u + 1 / u) - 2 * Math.atan(i))]
    }

    function V(t, n) {
        var a = Math.tan(n / 2);
        return [t * Pa * M(1 - a * a), (1 + Pa) * a]
    }

    function W(t, n) {
        var a = n / 2,
            r = Math.cos(a);
        return [2 * t / wa * Math.cos(n) * r * r, wa * Math.tan(a)]
    }

    function X(t, n) {
        function a(n, a) {
            var o = _a(n, a),
                i = o[0],
                h = o[1],
                u = i * i + h * h;
            if (u > e) {
                var M = Math.sqrt(u),
                    s = Math.atan2(h, i),
                    c = r * Math.round(s / r),
                    f = s - c,
                    v = t * Math.cos(f),
                    l = (t * Math.sin(f) - f * Math.sin(v)) / (pa - v),
                    g = Y(f, l),
                    d = (ba - t) / $(g, v, ba);
                i = M;
                var b, p = 50;
                do i -= b = (t + $(g, v, i) * d - M) / (g(i) * d); while (Math.abs(b) > ga && --p > 0);
                h = f * Math.sin(i), pa > i && (h -= l * (i - pa));
                var w = Math.sin(c),
                    q = Math.cos(c);
                o[0] = i * q - h * w, o[1] = i * w + h * q
            }
            return o
        }
        var r = 2 * ba / n,
            e = t * t;
        return a.invert = function(n, a) {
            var o = n * n + a * a;
            if (o > e) {
                var i = Math.sqrt(o),
                    h = Math.atan2(a, n),
                    u = r * Math.round(h / r),
                    M = h - u,
                    n = i * Math.cos(M);
                a = i * Math.sin(M);
                for (var s = n - pa, c = Math.sin(n), f = a / c, v = pa > n ? 1 / 0 : 0, l = 10;;) {
                    var g = t * Math.sin(f),
                        d = t * Math.cos(f),
                        b = Math.sin(d),
                        p = pa - d,
                        w = (g - f * b) / p,
                        q = Y(f, w);
                    if (Math.abs(v) < da || !--l) break;
                    f -= v = (f * c - w * s - a) / (c - 2 * s * (p * (d + f * g * Math.cos(d) - b) - g * (g - f * b)) / (p * p))
                }
                i = t + $(q, d, n) * (ba - t) / $(q, d, ba), h = u + f, n = i * Math.cos(h), a = i * Math.sin(h)
            }
            return _a.invert(n, a)
        }, a
    }

    function Y(t, n) {
        return function(a) {
            var r = t * Math.cos(a);
            return pa > a && (r -= n), Math.sqrt(1 + r * r)
        }
    }

    function Z() {
        var t = 6,
            n = 30 * qa,
            a = Math.cos(n),
            r = Math.sin(n),
            e = Sa(X),
            o = e(n, t),
            i = o.stream,
            h = .01,
            u = -Math.cos(h * qa),
            M = Math.sin(h * qa);
        return o.radius = function(o) {
            return arguments.length ? (a = Math.cos(n = o * qa), r = Math.sin(n), e(n, t)) : n * ma
        }, o.lobes = function(a) {
            return arguments.length ? e(n, t = +a) : t
        }, o.stream = function(n) {
            var e = o.rotate(),
                h = i(n),
                s = (o.rotate([0, 0]), i(n));
            return o.rotate(e), h.sphere = function() {
                s.polygonStart(), s.lineStart();
                for (var n = 0, e = 2 * ba / t, o = 0; t > n; ++n, o -= e) s.point(Math.atan2(M * Math.cos(o), u) * ma, Math.asin(M * Math.sin(o)) * ma), s.point(Math.atan2(r * Math.cos(o - e / 2), a) * ma, Math.asin(r * Math.sin(o - e / 2)) * ma);
                s.lineEnd(), s.polygonEnd()
            }, h
        }, o
    }

    function $(t, n, a) {
        for (var r = 50, e = (a - n) / r, o = t(n) + t(a), i = 1, h = n; r > i; ++i) o += 2 * t(h += e);
        return .5 * o * e
    }

    function tn(t, n, a, r, e, o, i, h) {
        function u(u, M) {
            if (!M) return [t * u / ba, 0];
            var s = M * M,
                c = t + s * (n + s * (a + s * r)),
                f = M * (e - 1 + s * (o - h + s * i)),
                v = (c * c + f * f) / (2 * f),
                l = u * Math.asin(c / v) / ba;
            return [v * Math.sin(l), M * (1 + s * h) + v * (1 - Math.cos(l))]
        }
        return arguments.length < 8 && (h = 0), u.invert = function(u, s) {
            var c, f, v = ba * u / t,
                l = s,
                g = 50;
            do {
                var d = l * l,
                    b = t + d * (n + d * (a + d * r)),
                    p = l * (e - 1 + d * (o - h + d * i)),
                    w = b * b + p * p,
                    q = 2 * p,
                    m = w / q,
                    y = m * m,
                    S = Math.asin(b / m) / ba,
                    Q = v * S;
                if (xB2 = b * b, dxBdφ = (2 * n + d * (4 * a + 6 * d * r)) * l, dyBdφ = e + d * (3 * o + 5 * d * i), dpdφ = 2 * (b * dxBdφ + p * (dyBdφ - 1)), dqdφ = 2 * (dyBdφ - 1), dmdφ = (dpdφ * q - w * dqdφ) / (q * q), cosα = Math.cos(Q), sinα = Math.sin(Q), mcosα = m * cosα, msinα = m * sinα, dαdφ = v / ba * (1 / M(1 - xB2 / y)) * (dxBdφ * m - b * dmdφ) / y, fx = msinα - u, fy = l * (1 + d * h) + m - mcosα - s, δxδφ = dmdφ * sinα + mcosα * dαdφ, δxδλ = mcosα * S, δyδφ = 1 + dmdφ - (dmdφ * cosα - msinα * dαdφ), δyδλ = msinα * S, denominator = δxδφ * δyδλ - δyδφ * δxδλ, !denominator) break;
                v -= c = (fy * δxδφ - fx * δyδφ) / denominator, l -= f = (fx * δyδλ - fy * δxδλ) / denominator
            } while ((Math.abs(c) > ga || Math.abs(f) > ga) && --g > 0);
            return [v, l]
        }, u
    }

    function nn(t, n) {
        var a = t * t,
            r = n * n;
        return [t * (1 - .162388 * r) * (.87 - 952426e-9 * a * a), n * (1 + r / 12)]
    }

    function an(t) {
        function n() {
            var t = !1,
                n = Sa(a),
                r = n(t);
            return r.quincuncial = function(a) {
                return arguments.length ? n(t = !!a) : t
            }, r
        }

        function a(n) {
            var a = n ? function(n, a) {
                var e = Math.abs(n) < pa,
                    o = t(e ? n : n > 0 ? n - ba : n + ba, a),
                    h = (o[0] - o[1]) * Math.SQRT1_2,
                    u = (o[0] + o[1]) * Math.SQRT1_2;
                if (e) return [h, u];
                var M = r * Math.SQRT1_2,
                    s = h > 0 ^ u > 0 ? -1 : 1;
                return [s * h - i(u) * M, s * u - i(h) * M]
            } : function(n, a) {
                var e = n > 0 ? -.5 : .5,
                    o = t(n + e * ba, a);
                return o[0] -= e * r, o
            };
            return t.invert && (a.invert = n ? function(n, a) {
                var e = (n + a) * Math.SQRT1_2,
                    o = (a - n) * Math.SQRT1_2,
                    i = Math.abs(e) < .5 * r && Math.abs(o) < .5 * r;
                if (!i) {
                    var h = r * Math.SQRT1_2,
                        u = e > 0 ^ o > 0 ? -1 : 1,
                        M = -u * (n + (o > 0 ? 1 : -1) * h),
                        s = -u * (a + (e > 0 ? 1 : -1) * h);
                    e = (-M - s) * Math.SQRT1_2, o = (M - s) * Math.SQRT1_2
                }
                var c = t.invert(e, o);
                return i || (c[0] += e > 0 ? ba : -ba), c
            } : function(n, a) {
                var e = n > 0 ? -.5 : .5,
                    o = t.invert(n + e * r, a),
                    i = o[0] - e * ba;
                return -ba > i ? i += 2 * ba : i > ba && (i -= 2 * ba), o[0] = i, o
            }), a
        }
        var r = t(pa, 0)[0] - t(-pa, 0)[0];
        return n.raw = a, n
    }

    function rn(t, n) {
        var a = i(t),
            r = i(n),
            e = Math.cos(n),
            o = Math.cos(t) * e,
            u = Math.sin(t) * e,
            M = Math.sin(r * n);
        t = Math.abs(Math.atan2(u, M)), n = h(o), Math.abs(t - pa) > ga && (t %= pa);
        var s = en(t > ba / 4 ? pa - t : t, n);
        return t > ba / 4 && (M = s[0], s[0] = -s[1], s[1] = -M), s[0] *= a, s[1] *= -r, s
    }

    function en(t, n) {
        if (n === pa) return [0, 0];
        var a = Math.sin(n),
            r = a * a,
            e = r * r,
            o = 1 + e,
            i = 1 + 3 * e,
            u = 1 - e,
            s = h(1 / Math.sqrt(o)),
            c = u + r * o * s,
            f = (1 - a) / c,
            v = Math.sqrt(f),
            l = f * o,
            g = Math.sqrt(l),
            d = v * u;
        if (0 === t) return [0, -(d + r * g)];
        var b = Math.cos(n),
            p = 1 / b,
            w = 2 * a * b,
            q = (-3 * r + s * i) * w,
            m = (-c * b - (1 - a) * q) / (c * c),
            y = .5 * m / v,
            S = u * y - 2 * r * v * w,
            Q = r * o * m + f * i * w,
            R = -p * w,
            T = -p * Q,
            x = -2 * p * S,
            E = 4 * t / ba;
        if (t > .222 * ba || ba / 4 > n && t > .175 * ba) {
            var k = (d + r * M(l * (1 + e) - d * d)) / (1 + e);
            if (t > ba / 4) return [k, k];
            var P = k,
                _ = .5 * k,
                z = 50;
            k = .5 * (_ + P);
            do {
                var B = Math.sqrt(l - k * k),
                    F = k * (x + R * B) + T * h(k / g) - E;
                if (!F) break;
                0 > F ? _ = k : P = k, k = .5 * (_ + P)
            } while (Math.abs(P - _) > ga && --z > 0)
        } else {
            var A, k = ga,
                z = 25;
            do {
                var G = k * k,
                    B = M(l - G),
                    j = x + R * B,
                    F = k * j + T * h(k / g) - E,
                    C = j + (T - R * G) / B;
                k -= A = B ? F / C : 0
            } while (Math.abs(A) > ga && --z > 0)
        }
        return [k, -d - r * M(l - k * k)]
    }

    function on(t, n) {
        for (var a = 0, r = 1, e = .5, o = 50;;) {
            var i = e * e,
                h = Math.sqrt(e),
                u = Math.asin(1 / Math.sqrt(1 + i)),
                M = 1 - i + e * (1 + i) * u,
                s = (1 - h) / M,
                c = Math.sqrt(s),
                f = s * (1 + i),
                v = c * (1 - i),
                l = f - t * t,
                g = Math.sqrt(l),
                d = n + v + e * g;
            if (Math.abs(r - a) < da || 0 === --o || 0 === d) break;
            d > 0 ? a = e : r = e, e = .5 * (a + r)
        }
        if (!o) return null;
        var b = Math.asin(h),
            p = Math.cos(b),
            w = 1 / p,
            q = 2 * h * p,
            m = (-3 * e + u * (1 + 3 * i)) * q,
            y = (-M * p - (1 - h) * m) / (M * M),
            S = .5 * y / c,
            Q = (1 - i) * S - 2 * e * c * q,
            R = -2 * w * Q,
            T = -w * q,
            x = -w * (e * (1 + i) * y + s * (1 + 3 * i) * q);
        return [ba / 4 * (t * (R + T * g) + x * Math.asin(t / Math.sqrt(f))), b]
    }

    function hn(t, n, a) {
        if (!t) {
            var r = un(n, 1 - a);
            return [
                [0, r[0] / r[1]],
                [1 / r[1], 0],
                [r[2] / r[1], 0]
            ]
        }
        var e = un(t, a);
        if (!n) return [
            [e[0], 0],
            [e[1], 0],
            [e[2], 0]
        ];
        var r = un(n, 1 - a),
            o = r[1] * r[1] + a * e[0] * e[0] * r[0] * r[0];
        return [
            [e[0] * r[2] / o, e[1] * e[2] * r[0] * r[1] / o],
            [e[1] * r[1] / o, -e[0] * e[2] * r[0] * r[2] / o],
            [e[2] * r[1] * r[2] / o, -a * e[0] * e[1] * r[0] / o]
        ]
    }

    function un(t, n) {
        var a, r, e, o, i;
        if (ga > n) return o = Math.sin(t), r = Math.cos(t), a = .25 * n * (t - o * r), [o - a * r, r + a * o, 1 - .5 * n * o * o, t - a];
        if (n >= 1 - ga) return a = .25 * (1 - n), r = b(t), o = g(t), e = 1 / r, i = r * d(t), [o + a * (i - t) / (r * r), e - a * o * e * (i - t), e + a * o * e * (i + t), 2 * Math.atan(Math.exp(t)) - pa + a * (i - t) / r];
        var u = [1, 0, 0, 0, 0, 0, 0, 0, 0],
            s = [Math.sqrt(n), 0, 0, 0, 0, 0, 0, 0, 0],
            c = 0;
        for (r = Math.sqrt(1 - n), i = 1; Math.abs(s[c] / u[c]) > ga && 8 > c;) a = u[c++], s[c] = .5 * (a - r), u[c] = .5 * (a + r), r = M(a * r), i *= 2;
        e = i * u[c] * t;
        do o = s[c] * Math.sin(r = e) / u[c], e = .5 * (h(o) + e); while (--c);
        return [Math.sin(e), o = Math.cos(e), o / Math.cos(e - r), e]
    }

    function Mn(t, n, a) {
        var r = Math.abs(t),
            e = Math.abs(n),
            o = d(e);
        if (r) {
            var h = 1 / Math.sin(r),
                u = 1 / (Math.tan(r) * Math.tan(r)),
                s = -(u + a * o * o * h * h - 1 + a),
                c = (a - 1) * u,
                f = .5 * (-s + Math.sqrt(s * s - 4 * c));
            return [sn(Math.atan(1 / Math.sqrt(f)), a) * i(t), sn(Math.atan(M((f / u - 1) / a)), 1 - a) * i(n)]
        }
        return [0, sn(Math.atan(o), 1 - a) * i(n)]
    }

    function sn(t, n) {
        if (!n) return t;
        if (1 === n) return Math.log(Math.tan(t / 2 + ba / 4));
        for (var a = 1, r = Math.sqrt(1 - n), e = Math.sqrt(n), o = 0; Math.abs(e) > ga; o++) {
            if (t % ba) {
                var i = Math.atan(r * Math.tan(t) / a);
                0 > i && (i += ba), t += i + ~~(t / ba) * ba
            } else t += t;
            e = (a + r) / 2, r = Math.sqrt(a * r), e = ((a = e) - r) / 2
        }
        return t / (Math.pow(2, o) * a)
    }

    function cn(t, n) {
        var a = (Math.SQRT2 - 1) / (Math.SQRT2 + 1),
            r = Math.sqrt(1 - a * a),
            e = sn(pa, r * r),
            o = -1,
            i = Math.log(Math.tan(ba / 4 + Math.abs(n) / 2)),
            h = Math.exp(o * i) / Math.sqrt(a),
            u = fn(h * Math.cos(o * t), h * Math.sin(o * t)),
            M = Mn(u[0], u[1], r * r);
        return [-M[1], (n >= 0 ? 1 : -1) * (.5 * e - M[0])]
    }

    function fn(t, n) {
        var a = t * t,
            r = n + 1,
            e = 1 - a - n * n;
        return [.5 * ((t >= 0 ? pa : -pa) - Math.atan2(e, 2 * t)), -.25 * Math.log(e * e + 4 * a) + .5 * Math.log(r * r + a)]
    }

    function vn(t, n) {
        var a = n[0] * n[0] + n[1] * n[1];
        return [(t[0] * n[0] + t[1] * n[1]) / a, (t[1] * n[0] - t[0] * n[1]) / a]
    }

    function ln(t) {
        function n(t, n) {
            var o = e(t, n);
            t = o[0], n = o[1];
            var i = Math.sin(n),
                h = Math.cos(n),
                M = Math.cos(t),
                s = u(a * i + r * h * M),
                c = Math.sin(s),
                f = Math.abs(c) > ga ? s / c : 1;
            return [f * r * Math.sin(t), (Math.abs(t) > pa ? f : -f) * (a * h - r * i * M)]
        }
        var a = Math.sin(t),
            r = Math.cos(t),
            e = gn(t);
        return e.invert = gn(-t), n.invert = function(t, n) {
            var r = Math.sqrt(t * t + n * n),
                o = -Math.sin(r),
                i = Math.cos(r),
                h = r * i,
                u = -n * o,
                s = r * a,
                c = M(h * h + u * u - s * s),
                f = Math.atan2(h * s + u * c, u * s - h * c),
                v = (r > pa ? -1 : 1) * Math.atan2(t * o, r * Math.cos(f) * i + n * Math.sin(f) * o);
            return e.invert(v, f)
        }, n
    }

    function gn(t) {
        var n = Math.sin(t),
            a = Math.cos(t);
        return function(t, r) {
            var e = Math.cos(r),
                o = Math.cos(t) * e,
                i = Math.sin(t) * e,
                u = Math.sin(r);
            return [Math.atan2(i, o * a - u * n), h(u * a + o * n)]
        }
    }

    function dn() {
        var t = 0,
            n = Sa(ln),
            a = n(t),
            r = a.rotate,
            e = a.stream,
            o = d3.geo.circle();
        return a.parallel = function(r) {
            if (!arguments.length) return 180 * (t / ba);
            var e = a.rotate();
            return n(t = r * ba / 180).rotate(e)
        }, a.rotate = function(n) {
            return arguments.length ? (r.call(a, [n[0], n[1] - 180 * (t / ba)]), o.origin([-n[0], -n[1]]), a) : (n = r.call(a), n[1] += 180 * (t / ba), n)
        }, a.stream = function(t) {
            return t = e(t), t.sphere = function() {
                t.polygonStart();
                var n, a = .01,
                    r = o.angle(90 - a)().coordinates[0],
                    e = r.length - 1,
                    i = -1;
                for (t.lineStart(); ++i < e;) t.point((n = r[i])[0], n[1]);
                for (t.lineEnd(), r = o.angle(90 + a)().coordinates[0], e = r.length - 1, t.lineStart(); --i >= 0;) t.point((n = r[i])[0], n[1]);
                t.lineEnd(), t.polygonEnd()
            }, t
        }, a
    }

    function bn(t, n) {
        function a(a, r) {
            var e = Ga(a / n, r);
            return e[0] *= t, e
        }
        return arguments.length < 2 && (n = t), 1 === n ? Ga : 1 / 0 === n ? wn : (a.invert = function(a, r) {
            var e = Ga.invert(a / t, r);
            return e[0] *= n, e
        }, a)
    }

    function pn() {
        var t = 2,
            n = Sa(bn),
            a = n(t);
        return a.coefficient = function(a) {
            return arguments.length ? n(t = +a) : t
        }, a
    }

    function wn(t, n) {
        return [t * Math.cos(n) / Math.cos(n /= 2), 2 * Math.sin(n)]
    }

    function qn(t, n) {
        for (var a, r = Math.sin(n) * (0 > n ? 2.43763 : 2.67595), e = 0; 20 > e && (n -= a = (n + Math.sin(n) - r) / (1 + Math.cos(n)), !(Math.abs(a) < ga)); e++);
        return [.85 * t * Math.cos(n *= .5), Math.sin(n) * (0 > n ? 1.93052 : 1.75859)]
    }

    function mn(t) {
        function n(n, s) {
            var c, f = Math.abs(s);
            if (f > r) {
                var v = Math.min(t - 1, Math.max(0, Math.floor((n + ba) / M)));
                n += ba * (t - 1) / t - v * M, c = d3.geo.collignon.raw(n, f), c[0] = c[0] * e / o - e * (t - 1) / (2 * t) + v * e / t, c[1] = i + 4 * (c[1] - h) * u / e, 0 > s && (c[1] = -c[1])
            } else c = a(n, s);
            return c[0] /= 2, c
        }
        var a = d3.geo.cylindricalEqualArea.raw(0),
            r = ja * ba / 180,
            e = 2 * ba,
            o = d3.geo.collignon.raw(ba, r)[0] - d3.geo.collignon.raw(-ba, r)[0],
            i = a(0, r)[1],
            h = d3.geo.collignon.raw(0, r)[1],
            u = d3.geo.collignon.raw(0, pa)[1] - h,
            M = 2 * ba / t;
        return n.invert = function(n, r) {
            n *= 2;
            var s = Math.abs(r);
            if (s > i) {
                var c = Math.min(t - 1, Math.max(0, Math.floor((n + ba) / M)));
                n = (n + ba * (t - 1) / t - c * M) * o / e;
                var f = d3.geo.collignon.raw.invert(n, .25 * (s - i) * e / u + h);
                return f[0] -= ba * (t - 1) / t - c * M, 0 > r && (f[1] = -f[1]), f
            }
            return a.invert(n, r)
        }, n
    }

    function yn() {
        function t() {
            var t = 180 / n;
            return {
                type: "Polygon",
                coordinates: [d3.range(-180, 180 + t / 2, t).map(function(t, n) {
                    return [t, 1 & n ? 90 - 1e-6 : ja]
                }).concat(d3.range(180, -180 - t / 2, -t).map(function(t, n) {
                    return [t, 1 & n ? -90 + 1e-6 : -ja]
                }))]
            }
        }
        var n = 2,
            a = Sa(mn),
            r = a(n),
            e = r.stream;
        return r.lobes = function(t) {
            return arguments.length ? a(n = +t) : n
        }, r.stream = function(n) {
            var a = r.rotate(),
                o = e(n),
                i = (r.rotate([0, 0]), e(n));
            return r.rotate(a), o.sphere = function() {
                d3.geo.stream(t(), i)
            }, o
        }, r
    }

    function Sn(t) {
        function n(n, e) {
            var h, u, f = 1 - Math.sin(e);
            if (f && 2 > f) {
                var v, l = pa - e,
                    g = 25;
                do {
                    var d = Math.sin(l),
                        b = Math.cos(l),
                        p = o + Math.atan2(d, r - b),
                        w = 1 + c - 2 * r * b;
                    l -= v = (l - s * o - r * d + w * p - .5 * f * a) / (2 * r * d * p)
                } while (Math.abs(v) > da && --g > 0);
                h = i * Math.sqrt(w), u = n * p / ba
            } else h = i * (t + f), u = n * o / ba;
            return [h * Math.sin(u), M - h * Math.cos(u)]
        }
        var a, r = 1 + t,
            e = Math.sin(1 / r),
            o = h(e),
            i = 2 * Math.sqrt(ba / (a = ba + 4 * o * r)),
            M = .5 * i * (r + Math.sqrt(t * (2 + t))),
            s = t * t,
            c = r * r;
        return n.invert = function(t, n) {
            var e = t * t + (n -= M) * n,
                f = (1 + c - e / (i * i)) / (2 * r),
                v = u(f),
                l = Math.sin(v),
                g = o + Math.atan2(l, r - f);
            return [h(t / Math.sqrt(e)) * ba / g, h(1 - 2 * (v - s * o - r * l + (1 + c - 2 * r * f) * g) / a)]
        }, n
    }

    function Qn() {
        var t = 1,
            n = Sa(Sn),
            a = n(t);
        return a.ratio = function(a) {
            return arguments.length ? n(t = +a) : t
        }, a
    }

    function Rn(t, n) {
        return n > -Ca ? (t = xa(t, n), t[1] += Da, t) : E(t, n)
    }

    function Tn(t, n) {
        return Math.abs(n) > Ca ? (t = xa(t, n), t[1] -= n > 0 ? Da : -Da, t) : E(t, n)
    }

    function xn(t, n) {
        return [3 * t / (2 * ba) * Math.sqrt(ba * ba / 3 - n * n), n]
    }

    function En(t) {
        function n(n, a) {
            if (Math.abs(Math.abs(a) - pa) < ga) return [0, 0 > a ? -2 : 2];
            var r = Math.sin(a),
                e = Math.pow((1 + r) / (1 - r), t / 2),
                o = .5 * (e + 1 / e) + Math.cos(n *= t);
            return [2 * Math.sin(n) / o, (e - 1 / e) / o]
        }
        return n.invert = function(n, a) {
            var r = Math.abs(a);
            if (Math.abs(r - 2) < ga) return n ? null : [0, i(a) * pa];
            if (r > 2) return null;
            n /= 2, a /= 2;
            var e = n * n,
                o = a * a,
                u = 2 * a / (1 + e + o);
            return u = Math.pow((1 + u) / (1 - u), 1 / t), [Math.atan2(2 * n, 1 - e - o) / t, h((u - 1) / (u + 1))]
        }, n
    }

    function kn() {
        var t = .5,
            n = Sa(En),
            a = n(t);
        return a.spacing = function(a) {
            return arguments.length ? n(t = +a) : t
        }, a
    }

    function Pn(t, n) {
        return [t * (1 + Math.sqrt(Math.cos(n))) / 2, n / (Math.cos(n / 2) * Math.cos(t / 6))]
    }

    function _n(t, n) {
        var a = t * t,
            r = n * n;
        return [t * (.975534 + r * (-.119161 + a * -.0143059 + r * -.0547009)), n * (1.00384 + a * (.0802894 + r * -.02855 + 199025e-9 * a) + r * (.0998909 + r * -.0491032))]
    }

    function zn(t, n) {
        return [Math.sin(t) / Math.cos(n), Math.tan(n) * Math.cos(t)]
    }

    function Bn(t) {
        function n(n, e) {
            var o = e - t,
                i = Math.abs(o) < ga ? n * a : Math.abs(i = ba / 4 + e / 2) < ga || Math.abs(Math.abs(i) - pa) < ga ? 0 : n * o / Math.log(Math.tan(i) / r);
            return [i, o]
        }
        var a = Math.cos(t),
            r = Math.tan(ba / 4 + t / 2);
        return n.invert = function(n, e) {
            var o, i = e + t;
            return [Math.abs(e) < ga ? n / a : Math.abs(o = ba / 4 + i / 2) < ga || Math.abs(Math.abs(o) - pa) < ga ? 0 : n * Math.log(Math.tan(o) / r) / e, i]
        }, n
    }

    function Fn(t, n) {
        return [t, 1.25 * Math.log(Math.tan(ba / 4 + .4 * n))]
    }

    function An(t) {
        function n(n, r) {
            for (var e, o = Math.cos(r), i = 2 / (1 + o * Math.cos(n)), h = i * o * Math.sin(n), u = i * Math.sin(r), M = a, s = t[M], c = s[0], f = s[1]; --M >= 0;) s = t[M], c = s[0] + h * (e = c) - u * f, f = s[1] + h * f + u * e;
            return c = h * (e = c) - u * f, f = h * f + u * e, [c, f]
        }
        var a = t.length - 1;
        return n.invert = function(n, r) {
            var e = 20,
                o = n,
                i = r;
            do {
                for (var u, M = a, s = t[M], c = s[0], f = s[1], v = 0, l = 0; --M >= 0;) s = t[M], v = c + o * (u = v) - i * l, l = f + o * l + i * u, c = s[0] + o * (u = c) - i * f, f = s[1] + o * f + i * u;
                v = c + o * (u = v) - i * l, l = f + o * l + i * u, c = o * (u = c) - i * f - n, f = o * f + i * u - r;
                var g, d, b = v * v + l * l;
                o -= g = (c * v + f * l) / b, i -= d = (f * v - c * l) / b
            } while (Math.abs(g) + Math.abs(d) > ga * ga && --e > 0);
            if (e) {
                var p = Math.sqrt(o * o + i * i),
                    w = 2 * Math.atan(.5 * p),
                    q = Math.sin(w);
                return [Math.atan2(o * q, p * Math.cos(w)), p ? h(i * q / p) : 0]
            }
        }, n
    }

    function Gn() {
        var t = La.miller,
            n = Sa(An),
            a = n(t);
        return a.coefficients = function(a) {
            return arguments.length ? n(t = "string" == typeof a ? La[a] : a) : t
        }, a
    }

    function jn(t, n) {
        var a = Math.sqrt(6),
            r = Math.sqrt(7),
            e = Math.asin(7 * Math.sin(n) / (3 * a));
        return [a * t * (2 * Math.cos(2 * e / 3) - 1) / r, 9 * Math.sin(e / 3) / r]
    }

    function Cn(t, n) {
        for (var a, r = (1 + Math.SQRT1_2) * Math.sin(n), e = n, o = 0; 25 > o && (e -= a = (Math.sin(e / 2) + Math.sin(e) - r) / (.5 * Math.cos(e / 2) + Math.cos(e)), !(Math.abs(a) < ga)); o++);
        return [t * (1 + 2 * Math.cos(e) / Math.cos(e / 2)) / (3 * Math.SQRT2), 2 * Math.sqrt(3) * Math.sin(e / 2) / Math.sqrt(2 + Math.SQRT2)]
    }

    function Dn(t, n) {
        for (var a, r = Math.sqrt(6 / (4 + ba)), e = (1 + ba / 4) * Math.sin(n), o = n / 2, i = 0; 25 > i && (o -= a = (o / 2 + Math.sin(o) - e) / (.5 + Math.cos(o)), !(Math.abs(a) < ga)); i++);
        return [r * (.5 + Math.cos(o)) * t / 1.5, r * o]
    }

    function Ln(t, n) {
        var a = n * n,
            r = a * a;
        return [t * (.8707 - .131979 * a + r * (-.013791 + r * (.003971 * a - .001529 * r))), n * (1.007226 + a * (.015085 + r * (-.044475 + .028874 * a - .005916 * r)))]
    }

    function On(t, n) {
        return [t * (1 + Math.cos(n)) / 2, 2 * (n - Math.tan(n / 2))]
    }

    function Hn(t, n) {
        var a = n * n;
        return [t, n * (Oa + a * a * (Ha + a * (Ia + Ja * a)))]
    }

    function In(t, n) {
        if (Math.abs(n) < ga) return [t, 0];
        var a = Math.tan(n),
            r = t * Math.sin(n);
        return [Math.sin(r) / a, n + (1 - Math.cos(r)) / a]
    }

    function Jn(t) {
        function n(n, r) {
            var e = a ? Math.tan(n * a / 2) / a : n / 2;
            if (!r) return [2 * e, -t];
            var o = 2 * Math.atan(e * Math.sin(r)),
                i = 1 / Math.tan(r);
            return [Math.sin(o) * i, r + (1 - Math.cos(o)) * i - t]
        }
        var a = Math.sin(t);
        return n.invert = function(n, r) {
            if (Math.abs(r += t) < ga) return [a ? 2 * Math.atan(a * n / 2) / a : n, 0];
            var e, o = n * n + r * r,
                i = 0,
                M = 10;
            do {
                var s = Math.tan(i),
                    c = 1 / Math.cos(i),
                    f = o - 2 * r * i + i * i;
                i -= e = (s * f + 2 * (i - r)) / (2 + f * c * c + 2 * (i - r) * s)
            } while (Math.abs(e) > ga && --M > 0);
            var v = n * (s = Math.tan(i)),
                l = Math.tan(Math.abs(r) < Math.abs(i + 1 / s) ? .5 * h(v) : .5 * u(v) + ba / 4) / Math.sin(i);
            return [a ? 2 * Math.atan(a * l) / a : 2 * l, i]
        }, n
    }

    function Kn(t, n) {
        var a, r = Math.min(18, 36 * Math.abs(n) / ba),
            e = Math.floor(r),
            o = r - e,
            i = (a = Ya[e])[0],
            h = a[1],
            u = (a = Ya[++e])[0],
            M = a[1],
            s = (a = Ya[Math.min(19, ++e)])[0],
            c = a[1];
        return [t * (u + o * (s - i) / 2 + o * o * (s - 2 * u + i) / 2), (n > 0 ? pa : -pa) * (M + o * (c - h) / 2 + o * o * (c - 2 * M + h) / 2)]
    }

    function Nn(t) {
        function n(n, a) {
            var r = Math.cos(a),
                e = (t - 1) / (t - r * Math.cos(n));
            return [e * r * Math.sin(n), e * Math.sin(a)]
        }
        return n.invert = function(n, a) {
            var r = n * n + a * a,
                e = Math.sqrt(r),
                o = (t - Math.sqrt(1 - r * (t + 1) / (t - 1))) / ((t - 1) / e + e / (t - 1));
            return [Math.atan2(n * o, e * Math.sqrt(1 - o * o)), e ? h(a * o / e) : 0]
        }, n
    }

    function Un(t, n) {
        function a(n, a) {
            var i = r(n, a),
                h = i[1],
                u = h * o / (t - 1) + e;
            return [i[0] * e / u, h / u]
        }
        var r = Nn(t);
        if (!n) return r;
        var e = Math.cos(n),
            o = Math.sin(n);
        return a.invert = function(n, a) {
            var i = (t - 1) / (t - 1 - a * o);
            return r.invert(i * n, i * a * e)
        }, a
    }

    function Vn() {
        var t = 1.4,
            n = 0,
            a = Sa(Un),
            r = a(t, n);
        return r.distance = function(r) {
            return arguments.length ? a(t = +r, n) : t
        }, r.tilt = function(r) {
            return arguments.length ? a(t, n = r * ba / 180) : 180 * n / ba
        }, r
    }

    function Wn(t, n) {
        var a = Math.tan(n / 2),
            r = Math.sin(ba / 4 * a);
        return [t * (.74482 - .34588 * r * r), 1.70711 * a]
    }

    function Xn(t) {
        function n(n, o) {
            var i = u(Math.cos(o) * Math.cos(n - a)),
                h = u(Math.cos(o) * Math.cos(n - r)),
                s = 0 > o ? -1 : 1;
            return i *= i, h *= h, [(i - h) / (2 * t), s * M(4 * e * h - (e - i + h) * (e - i + h)) / (2 * t)]
        }
        if (!t) return d3.geo.azimuthalEquidistant.raw;
        var a = -t / 2,
            r = -a,
            e = t * t,
            o = Math.tan(r),
            i = .5 / Math.sin(r);
        return n.invert = function(t, n) {
            var e, h, M = n * n,
                s = Math.cos(Math.sqrt(M + (e = t + a) * e)),
                c = Math.cos(Math.sqrt(M + (e = t + r) * e));
            return [Math.atan2(h = s - c, e = (s + c) * o), (0 > n ? -1 : 1) * u(Math.sqrt(e * e + h * h) * i)]
        }, n
    }

    function Yn() {
        var t = [
                [0, 0],
                [0, 0]
            ],
            n = Sa(Xn),
            a = n(0),
            r = a.rotate;
        return delete a.rotate, a.points = function(a) {
            if (!arguments.length) return t;
            t = a;
            var e = d3.geo.interpolate(a[0], a[1]),
                o = e(.5),
                i = d3.geo.rotation([-o[0], -o[1]])(a[0]),
                u = .5 * e.distance,
                M = -h(Math.sin(i[1] * qa) / Math.sin(u));
            return i[0] > 0 && (M = ba - M), r.call(i, [-o[0], -o[1], -M * ma]), n(2 * u)
        }, a
    }

    function Zn(t) {
        function n(t, n) {
            var r = d3.geo.gnomonic.raw(t, n);
            return r[0] *= a, r
        }
        var a = Math.cos(t);
        return n.invert = function(t, n) {
            return d3.geo.gnomonic.raw.invert(t / a, n)
        }, n
    }

    function $n() {
        var t = [
                [0, 0],
                [0, 0]
            ],
            n = Sa(Zn),
            a = n(0),
            r = a.rotate;
        return delete a.rotate, a.points = function(a) {
            if (!arguments.length) return t;
            t = a;
            var e = d3.geo.interpolate(a[0], a[1]),
                o = e(.5),
                i = d3.geo.rotation([-o[0], -o[1]])(a[0]),
                u = .5 * e.distance,
                M = -h(Math.sin(i[1] * qa) / Math.sin(u));
            return i[0] > 0 && (M = ba - M), r.call(i, [-o[0], -o[1], -M * ma]), n(u)
        }, a
    }

    function ta(t, n) {
        if (Math.abs(n) < ga) return [t, 0];
        var a = Math.abs(n / pa),
            r = h(a);
        if (Math.abs(t) < ga || Math.abs(Math.abs(n) - pa) < ga) return [0, i(n) * ba * Math.tan(r / 2)];
        var e = Math.cos(r),
            o = Math.abs(ba / t - t / ba) / 2,
            u = o * o,
            M = e / (a + e - 1),
            s = M * (2 / a - 1),
            c = s * s,
            f = c + u,
            v = M - c,
            l = u + M;
        return [i(t) * ba * (o * v + Math.sqrt(u * v * v - f * (M * M - c))) / f, i(n) * ba * (s * l - o * Math.sqrt((u + 1) * f - l * l)) / f]
    }

    function na(t, n) {
        if (Math.abs(n) < ga) return [t, 0];
        var a = Math.abs(n / pa),
            r = h(a);
        if (Math.abs(t) < ga || Math.abs(Math.abs(n) - pa) < ga) return [0, i(n) * ba * Math.tan(r / 2)];
        var e = Math.cos(r),
            o = Math.abs(ba / t - t / ba) / 2,
            u = o * o,
            s = e * (Math.sqrt(1 + u) - o * e) / (1 + u * a * a);
        return [i(t) * ba * s, i(n) * ba * M(1 - s * (2 * o + s))]
    }

    function aa(t, n) {
        if (Math.abs(n) < ga) return [t, 0];
        var a = n / pa,
            r = h(a);
        if (Math.abs(t) < ga || Math.abs(Math.abs(n) - pa) < ga) return [0, ba * Math.tan(r / 2)];
        var e = (ba / t - t / ba) / 2,
            o = a / (1 + Math.cos(r));
        return [ba * (i(t) * M(e * e + 1 - o * o) - e), ba * o]
    }

    function ra(t, n) {
        if (!n) return [t, 0];
        var a = Math.abs(n);
        if (!t || a === pa) return [0, n];
        var r = a / pa,
            e = r * r,
            o = (8 * r - e * (e + 2) - 5) / (2 * e * (r - 1)),
            h = o * o,
            u = r * o,
            s = e + h + 2 * u,
            c = r + 3 * o,
            f = t / pa,
            v = f + 1 / f,
            l = i(Math.abs(t) - pa) * Math.sqrt(v * v - 4),
            g = l * l,
            d = s * (e + h * g - 1) + (1 - e) * (e * (c * c + 4 * h) + 12 * u * h + 4 * h * h),
            b = (l * (s + h - 1) + 2 * M(d)) / (4 * s + g);
        return [i(t) * pa * b, i(n) * pa * M(1 + l * Math.abs(b) - b * b)]
    }

    function ea(t, n) {
        return [t * Math.sqrt(1 - 3 * n * n / (ba * ba)), n]
    }

    function oa(t, n) {
        var a = .90631 * Math.sin(n),
            r = Math.sqrt(1 - a * a),
            e = Math.sqrt(2 / (1 + r * Math.cos(t /= 3)));
        return [2.66723 * r * e * Math.sin(t), 1.24104 * a * e]
    }

    function ia(t, n) {
        var a = Math.cos(n),
            r = Math.cos(t) * a,
            e = 1 - r,
            o = Math.cos(t = Math.atan2(Math.sin(t) * a, -Math.sin(n))),
            i = Math.sin(t);
        return a = M(1 - r * r), [i * a - o * e, -o * a - i * e]
    }

    function ha(t, n) {
        var a = f(t, n);
        return [(a[0] + t / pa) / 2, (a[1] + n) / 2]
    }
    d3.geo.project = function(t, a) {
        var r = a.stream;
        if (!r) throw new Error("not yet supported");
        return (t && ua.hasOwnProperty(t.type) ? ua[t.type] : n)(t, r)
    };
    var ua = {
            Feature: t,
            FeatureCollection: function(n, a) {
                return {
                    type: "FeatureCollection",
                    features: n.features.map(function(n) {
                        return t(n, a)
                    })
                }
            }
        },
        Ma = [],
        sa = [],
        ca = {
            point: function(t, n) {
                Ma.push([t, n])
            },
            result: function() {
                var t = Ma.length ? Ma.length < 2 ? {
                    type: "Point",
                    coordinates: Ma[0]
                } : {
                    type: "MultiPoint",
                    coordinates: Ma
                } : null;
                return Ma = [], t
            }
        },
        fa = {
            lineStart: a,
            point: function(t, n) {
                Ma.push([t, n])
            },
            lineEnd: function() {
                Ma.length && (sa.push(Ma), Ma = [])
            },
            result: function() {
                var t = sa.length ? sa.length < 2 ? {
                    type: "LineString",
                    coordinates: sa[0]
                } : {
                    type: "MultiLineString",
                    coordinates: sa
                } : null;
                return sa = [], t
            }
        },
        va = {
            polygonStart: a,
            lineStart: a,
            point: function(t, n) {
                Ma.push([t, n])
            },
            lineEnd: function() {
                var t = Ma.length;
                if (t) {
                    do Ma.push(Ma[0].slice()); while (++t < 4);
                    sa.push(Ma), Ma = []
                }
            },
            polygonEnd: a,
            result: function() {
                if (!sa.length) return null;
                var t = [],
                    n = [];
                return sa.forEach(function(a) {
                    r(a) ? t.push([a]) : n.push(a)
                }), n.forEach(function(n) {
                    var a = n[0];
                    t.some(function(t) {
                        return e(t[0], a) ? (t.push(n), !0) : void 0
                    }) || t.push([n])
                }), sa = [], t.length ? t.length > 1 ? {
                    type: "MultiPolygon",
                    coordinates: t
                } : {
                    type: "Polygon",
                    coordinates: t[0]
                } : null
            }
        },
        la = {
            Point: ca,
            MultiPoint: ca,
            LineString: fa,
            MultiLineString: fa,
            Polygon: va,
            MultiPolygon: va,
            Sphere: va
        },
        ga = 1e-6,
        da = ga * ga,
        ba = Math.PI,
        pa = ba / 2,
        wa = Math.sqrt(ba),
        qa = ba / 180,
        ma = 180 / ba,
        ya = d3.geo.projection,
        Sa = d3.geo.projectionMutator;
    d3.geo.interrupt = function(t) {
        function n(n, a) {
            for (var r = 0 > a ? -1 : 1, e = h[+(0 > a)], o = 0, i = e.length - 1; i > o && n > e[o][2][0]; ++o);
            var u = t(n - e[o][1][0], a);
            return u[0] += t(e[o][1][0], r * a > r * e[o][0][1] ? e[o][0][1] : a)[0], u
        }

        function a() {
            i = h.map(function(n) {
                return n.map(function(n) {
                    var a, r = t(n[0][0], n[0][1])[0],
                        e = t(n[2][0], n[2][1])[0],
                        o = t(n[1][0], n[0][1])[1],
                        i = t(n[1][0], n[1][1])[1];
                    return o > i && (a = o, o = i, i = a), [
                        [r, o],
                        [e, i]
                    ]
                })
            })
        }

        function r() {
            for (var t = 1e-6, n = [], a = 0, r = h[0].length; r > a; ++a) {
                var o = h[0][a],
                    i = 180 * o[0][0] / ba,
                    u = 180 * o[0][1] / ba,
                    M = 180 * o[1][1] / ba,
                    s = 180 * o[2][0] / ba,
                    c = 180 * o[2][1] / ba;
                n.push(e([
                    [i + t, u + t],
                    [i + t, M - t],
                    [s - t, M - t],
                    [s - t, c + t]
                ], 30))
            }
            for (var a = h[1].length - 1; a >= 0; --a) {
                var o = h[1][a],
                    i = 180 * o[0][0] / ba,
                    u = 180 * o[0][1] / ba,
                    M = 180 * o[1][1] / ba,
                    s = 180 * o[2][0] / ba,
                    c = 180 * o[2][1] / ba;
                n.push(e([
                    [s - t, c - t],
                    [s - t, M + t],
                    [i + t, M + t],
                    [i + t, u - t]
                ], 30))
            }
            return {
                type: "Polygon",
                coordinates: [d3.merge(n)]
            }
        }

        function e(t, n) {
            for (var a, r, e, o = -1, i = t.length, h = t[0], u = []; ++o < i;) {
                a = t[o], r = (a[0] - h[0]) / n, e = (a[1] - h[1]) / n;
                for (var M = 0; n > M; ++M) u.push([h[0] + M * r, h[1] + M * e]);
                h = a
            }
            return u.push(a), u
        }

        function o(t, n) {
            return Math.abs(t[0] - n[0]) < ga && Math.abs(t[1] - n[1]) < ga
        }
        var i, h = [
            [
                [
                    [-ba, 0],
                    [0, pa],
                    [ba, 0]
                ]
            ],
            [
                [
                    [-ba, 0],
                    [0, -pa],
                    [ba, 0]
                ]
            ]
        ];
        t.invert && (n.invert = function(a, r) {
            for (var e = i[+(0 > r)], u = h[+(0 > r)], M = 0, s = e.length; s > M; ++M) {
                var c = e[M];
                if (c[0][0] <= a && a < c[1][0] && c[0][1] <= r && r < c[1][1]) {
                    var f = t.invert(a - t(u[M][1][0], 0)[0], r);
                    return f[0] += u[M][1][0], o(n(f[0], f[1]), [a, r]) ? f : null
                }
            }
        });
        var u = d3.geo.projection(n),
            M = u.stream;
        return u.stream = function(t) {
            var n = u.rotate(),
                a = M(t),
                e = (u.rotate([0, 0]), M(t));
            return u.rotate(n), a.sphere = function() {
                d3.geo.stream(r(), e)
            }, a
        }, u.lobes = function(t) {
            return arguments.length ? (h = t.map(function(t) {
                return t.map(function(t) {
                    return [
                        [t[0][0] * ba / 180, t[0][1] * ba / 180],
                        [t[1][0] * ba / 180, t[1][1] * ba / 180],
                        [t[2][0] * ba / 180, t[2][1] * ba / 180]
                    ]
                })
            }), a(), u) : h.map(function(t) {
                return t.map(function(t) {
                    return [
                        [180 * t[0][0] / ba, 180 * t[0][1] / ba],
                        [180 * t[1][0] / ba, 180 * t[1][1] / ba],
                        [180 * t[2][0] / ba, 180 * t[2][1] / ba]
                    ]
                })
            })
        }, u
    }, (d3.geo.airy = c).raw = s, f.invert = function(t, n) {
        if (!(t * t + 4 * n * n > ba * ba + ga)) {
            var a = t,
                r = n,
                e = 25;
            do {
                var o, i = Math.sin(a),
                    h = Math.sin(a / 2),
                    M = Math.cos(a / 2),
                    s = Math.sin(r),
                    c = Math.cos(r),
                    f = Math.sin(2 * r),
                    v = s * s,
                    l = c * c,
                    g = h * h,
                    d = 1 - l * M * M,
                    b = d ? u(c * M) * Math.sqrt(o = 1 / d) : o = 0,
                    p = 2 * b * c * h - t,
                    w = b * s - n,
                    q = o * (l * g + b * c * M * v),
                    m = o * (.5 * i * f - 2 * b * s * h),
                    y = .25 * o * (f * h - b * s * l * i),
                    S = o * (v * M + b * g * c),
                    Q = m * y - S * q;
                if (!Q) break;
                var R = (w * m - p * S) / Q,
                    T = (p * y - w * q) / Q;
                a -= R, r -= T
            } while ((Math.abs(R) > ga || Math.abs(T) > ga) && --e > 0);
            return [a, r]
        }
    }, (d3.geo.aitoff = function() {
        return ya(f)
    }).raw = f, (d3.geo.armadillo = l).raw = v, q.invert = function(t, n) {
        if (t *= 3 / 8, n *= 3 / 8, !t && Math.abs(n) > 1) return null;
        var a = t * t,
            r = n * n,
            e = 1 + a + r,
            o = Math.sqrt(.5 * (e - Math.sqrt(e * e - 4 * n * n))),
            u = h(o) / 3,
            M = o ? w(Math.abs(n / o)) / 3 : p(Math.abs(t)) / 3,
            s = Math.cos(u),
            c = b(M),
            f = c * c - s * s;
        return [2 * i(t) * Math.atan2(d(M) * s, .25 - f), 2 * i(n) * Math.atan2(c * Math.sin(u), .25 + f)]
    }, (d3.geo.august = function() {
        return ya(q)
    }).raw = q;
    var Qa = Math.log(1 + Math.SQRT2);
    m.invert = function(t, n) {
        if ((r = Math.abs(n)) < Qa) return [t, 2 * Math.atan(Math.exp(n)) - pa];
        var a, r, e = Math.sqrt(8),
            o = ba / 4,
            h = 25;
        do {
            var u = Math.cos(o / 2),
                M = Math.tan(o / 2);
            o -= a = (e * (o - ba / 4) - Math.log(M) - r) / (e - .5 * u * u / M)
        } while (Math.abs(a) > da && --h > 0);
        return [t / (Math.cos(o) * (e - 1 / Math.sin(o))), i(n) * o]
    }, (d3.geo.baker = function() {
        return ya(m)
    }).raw = m;
    var Ra = d3.geo.azimuthalEquidistant.raw;
    (d3.geo.berghaus = S).raw = y;
    var Ta = Q(ba),
        xa = R(Math.SQRT2 / pa, Math.SQRT2, ba);
    (d3.geo.mollweide = function() {
        return ya(xa)
    }).raw = xa, T.invert = function(t, n) {
        var a, r, e = 2.00276,
            o = e * n,
            i = 0 > n ? -ba / 4 : ba / 4,
            h = 25;
        do r = o - Math.SQRT2 * Math.sin(i), i -= a = (Math.sin(2 * i) + 2 * i - ba * Math.sin(r)) / (2 * Math.cos(2 * i) + 2 + ba * Math.cos(r) * Math.SQRT2 * Math.cos(i)); while (Math.abs(a) > ga && --h > 0);
        return r = o - Math.SQRT2 * Math.sin(i), [t * (1 / Math.cos(r) + 1.11072 / Math.cos(i)) / e, r]
    }, (d3.geo.boggs = function() {
        return ya(T)
    }).raw = T, E.invert = function(t, n) {
        return [t / Math.cos(n), n]
    }, (d3.geo.sinusoidal = function() {
        return ya(E)
    }).raw = E, (d3.geo.bonne = function() {
        return x(k).parallel(45)
    }).raw = k;
    var Ea = R(1, 4 / ba, ba);
    (d3.geo.bromley = function() {
        return ya(Ea)
    }).raw = Ea, (d3.geo.chamberlin = _).raw = P, G.invert = function(t, n) {
        var a = (a = n / wa - 1) * a;
        return [a > 0 ? t * Math.sqrt(ba / a) / 2 : 0, h(1 - a)]
    }, (d3.geo.collignon = function() {
        return ya(G)
    }).raw = G, (d3.geo.craig = function() {
        return x(j)
    }).raw = j, C.invert = function(t, n) {
        var a = Math.sqrt(3),
            r = 3 * h(n / (a * wa));
        return [wa * t / (a * (2 * Math.cos(2 * r / 3) - 1)), r]
    }, (d3.geo.craster = function() {
        return ya(C)
    }).raw = C, (d3.geo.cylindricalEqualArea = function() {
        return x(D)
    }).raw = D, (d3.geo.cylindricalStereographic = function() {
        return x(L)
    }).raw = L, O.invert = function(t, n) {
        var a = Math.sqrt(8 / (3 * ba)),
            r = n / a;
        return [t / (a * (1 - Math.abs(r) / ba)), r]
    }, (d3.geo.eckert1 = function() {
        return ya(O)
    }).raw = O, H.invert = function(t, n) {
        var a = 2 - Math.abs(n) / Math.sqrt(2 * ba / 3);
        return [t * Math.sqrt(6 * ba) / (2 * a), i(n) * h((4 - a * a) / 3)]
    }, (d3.geo.eckert2 = function() {
        return ya(H)
    }).raw = H, I.invert = function(t, n) {
        var a = Math.sqrt(ba * (4 + ba)) / 2;
        return [t * a / (1 + M(1 - n * n * (4 + ba) / (4 * ba))), n * a / 2]
    }, (d3.geo.eckert3 = function() {
        return ya(I)
    }).raw = I, J.invert = function(t, n) {
        var a = .5 * n * Math.sqrt((4 + ba) / ba),
            r = h(a),
            e = Math.cos(r);
        return [t / (2 / Math.sqrt(ba * (4 + ba)) * (1 + e)), h((r + a * (e + 2)) / (2 + pa))]
    }, (d3.geo.eckert4 = function() {
        return ya(J)
    }).raw = J, K.invert = function(t, n) {
        var a = Math.sqrt(2 + ba),
            r = n * a / 2;
        return [a * t / (1 + Math.cos(r)), r]
    }, (d3.geo.eckert5 = function() {
        return ya(K)
    }).raw = K, N.invert = function(t, n) {
        var a = 1 + pa,
            r = Math.sqrt(a / 2);
        return [2 * t * r / (1 + Math.cos(n *= r)), h((n + Math.sin(n)) / a)]
    }, (d3.geo.eckert6 = function() {
        return ya(N)
    }).raw = N, U.invert = function(t, n) {
        var a = d3.geo.august.raw.invert(t / 1.2, 1.065 * n);
        if (!a) return null;
        var r = a[0],
            e = a[1],
            o = 20;
        t /= ka, n /= ka;
        do {
            var i = r / 2,
                h = e / 2,
                u = Math.sin(i),
                M = Math.cos(i),
                s = Math.sin(h),
                c = Math.cos(h),
                f = Math.cos(e),
                v = Math.sqrt(f),
                l = s / (c + Math.SQRT2 * M * v),
                g = l * l,
                d = Math.sqrt(2 / (1 + g)),
                b = Math.SQRT2 * c + (M + u) * v,
                p = Math.SQRT2 * c + (M - u) * v,
                w = b / p,
                q = Math.sqrt(w),
                m = q - 1 / q,
                y = q + 1 / q,
                S = d * m - 2 * Math.log(q) - t,
                Q = d * l * y - 2 * Math.atan(l) - n,
                R = s && Math.SQRT1_2 * v * u * g / s,
                T = (Math.SQRT2 * M * c + v) / (2 * (c + Math.SQRT2 * M * v) * (c + Math.SQRT2 * M * v) * v),
                x = -.5 * l * d * d * d,
                E = x * R,
                k = x * T,
                P = (P = 2 * c + Math.SQRT2 * v * (M - u)) * P * q,
                _ = (Math.SQRT2 * M * c * v + f) / P,
                z = -(Math.SQRT2 * u * s) / (v * P),
                B = m * E - 2 * _ / q + d * (_ + _ / w),
                F = m * k - 2 * z / q + d * (z + z / w),
                A = l * y * E - 2 * R / (1 + g) + d * y * R + d * l * (_ - _ / w),
                G = l * y * k - 2 * T / (1 + g) + d * y * T + d * l * (z - z / w),
                j = F * A - G * B;
            if (!j) break;
            var C = (Q * F - S * G) / j,
                D = (S * A - Q * B) / j;
            r -= C, e = Math.max(-pa, Math.min(pa, e - D))
        } while ((Math.abs(C) > ga || Math.abs(D) > ga) && --o > 0);
        return Math.abs(Math.abs(e) - pa) < ga ? [0, e] : o && [r, e]
    };
    var ka = 3 + 2 * Math.SQRT2;
    (d3.geo.eisenlohr = function() {
        return ya(U)
    }).raw = U, V.invert = function(t, n) {
        var a = n / (1 + Pa);
        return [t ? t / (Pa * M(1 - a * a)) : 0, 2 * Math.atan(a)]
    };
    var Pa = Math.cos(35 * qa);
    (d3.geo.fahey = function() {
        return ya(V)
    }).raw = V, W.invert = function(t, n) {
        var a = Math.atan(n / wa),
            r = Math.cos(a),
            e = 2 * a;
        return [.5 * t * wa / (Math.cos(e) * r * r), e]
    }, (d3.geo.foucaut = function() {
        return ya(W)
    }).raw = W, d3.geo.gilbert = function(t) {
        function n(n) {
            return t([.5 * n[0], h(Math.tan(.5 * n[1] * qa)) * ma])
        }
        var a = d3.geo.equirectangular().scale(ma).translate([0, 0]);
        return t.invert && (n.invert = function(n) {
            return n = t.invert(n), n[0] *= 2, n[1] = 2 * Math.atan(Math.sin(n[1] * qa)) * ma, n
        }), n.stream = function(n) {
            n = t.stream(n);
            var r = a.stream({
                point: function(t, a) {
                    n.point(.5 * t, h(Math.tan(.5 * -a * qa)) * ma)
                },
                lineStart: function() {
                    n.lineStart()
                },
                lineEnd: function() {
                    n.lineEnd()
                },
                polygonStart: function() {
                    n.polygonStart()
                },
                polygonEnd: function() {
                    n.polygonEnd()
                }
            });
            return r.sphere = function() {
                n.sphere()
            }, r.valid = !1, r
        }, n
    };
    var _a = d3.geo.azimuthalEquidistant.raw;
    (d3.geo.gingery = Z).raw = X;
    var za = tn(2.8284, -1.6988, .75432, -.18071, 1.76003, -.38914, .042555);
    (d3.geo.ginzburg4 = function() {
        return ya(za)
    }).raw = za;
    var Ba = tn(2.583819, -.835827, .170354, -.038094, 1.543313, -.411435, .082742);
    (d3.geo.ginzburg5 = function() {
        return ya(Ba)
    }).raw = Ba;
    var Fa = tn(5 / 6 * ba, -.62636, -.0344, 0, 1.3493, -.05524, 0, .045);
    (d3.geo.ginzburg6 = function() {
        return ya(Fa)
    }).raw = Fa, nn.invert = function(t, n) {
        var a, r = t,
            e = n,
            o = 50;
        do {
            var i = e * e;
            e -= a = (e * (1 + i / 12) - n) / (1 + i / 4)
        } while (Math.abs(a) > ga && --o > 0);
        o = 50, t /= 1 - .162388 * i;
        do {
            var h = (h = r * r) * h;
            r -= a = (r * (.87 - 952426e-9 * h) - t) / (.87 - .00476213 * h)
        } while (Math.abs(a) > ga && --o > 0);
        return [r, e]
    }, (d3.geo.ginzburg8 = function() {
        return ya(nn)
    }).raw = nn;
    var Aa = tn(2.6516, -.76534, .19123, -.047094, 1.36289, -.13965, .031762);
    (d3.geo.ginzburg9 = function() {
        return ya(Aa)
    }).raw = Aa, rn.invert = function(t, n) {
        var a = i(t),
            r = i(n),
            e = -a * t,
            o = -r * n,
            u = 1 > o / e,
            M = on(u ? o : e, u ? e : o),
            s = M[0],
            c = M[1];
        u && (s = -pa - s);
        var f = Math.cos(c),
            t = Math.cos(s) * f,
            n = Math.sin(s) * f,
            v = Math.sin(c);
        return [a * (Math.atan2(n, -v) + ba), r * h(t)]
    }, d3.geo.gringorten = an(rn), cn.invert = function(t, n) {
        var a = (Math.SQRT2 - 1) / (Math.SQRT2 + 1),
            r = Math.sqrt(1 - a * a),
            e = sn(pa, r * r),
            o = -1,
            i = hn(.5 * e - n, -t, r * r),
            h = vn(i[0], i[1]),
            u = Math.atan2(h[1], h[0]) / o;
        return [u, 2 * Math.atan(Math.exp(.5 / o * Math.log(a * h[0] * h[0] + a * h[1] * h[1]))) - pa]
    }, d3.geo.guyou = an(cn), (d3.geo.hammerRetroazimuthal = dn).raw = ln;
    var Ga = d3.geo.azimuthalEqualArea.raw;
    wn.invert = function(t, n) {
        var a = 2 * h(n / 2);
        return [t * Math.cos(a / 2) / Math.cos(a), a]
    }, (d3.geo.hammer = pn).raw = bn, qn.invert = function(t, n) {
        var a = Math.abs(a = n * (0 > n ? .5179951515653813 : .5686373742600607)) > 1 - ga ? a > 0 ? pa : -pa : h(a);
        return [1.1764705882352942 * t / Math.cos(a), Math.abs(a = ((a += a) + Math.sin(a)) * (0 > n ? .4102345310814193 : .3736990601468637)) > 1 - ga ? a > 0 ? pa : -pa : h(a)]
    }, (d3.geo.hatano = function() {
        return ya(qn)
    }).raw = qn;
    var ja = 41 + 48 / 36 + 37 / 3600;
    (d3.geo.healpix = yn).raw = mn, (d3.geo.hill = Qn).raw = Sn;
    var Ca = .7109889596207567,
        Da = .0528035274542;
    Rn.invert = function(t, n) {
        return n > -Ca ? xa.invert(t, n - Da) : E.invert(t, n)
    }, (d3.geo.sinuMollweide = function() {
        return ya(Rn).rotate([-20, -55])
    }).raw = Rn, Tn.invert = function(t, n) {
        return Math.abs(n) > Ca ? xa.invert(t, n + (n > 0 ? Da : -Da)) : E.invert(t, n)
    }, (d3.geo.homolosine = function() {
        return ya(Tn)
    }).raw = Tn, xn.invert = function(t, n) {
        return [2 / 3 * ba * t / Math.sqrt(ba * ba / 3 - n * n), n]
    }, (d3.geo.kavrayskiy7 = function() {
        return ya(xn)
    }).raw = xn, (d3.geo.lagrange = kn).raw = En, Pn.invert = function(t, n) {
        var a = Math.abs(t),
            r = Math.abs(n),
            e = ba / Math.SQRT2,
            o = ga,
            i = pa;
        e > r ? i *= r / e : o += 6 * u(e / r);
        for (var h = 0; 25 > h; h++) {
            var s = Math.sin(i),
                c = M(Math.cos(i)),
                f = Math.sin(i / 2),
                v = Math.cos(i / 2),
                l = Math.sin(o / 6),
                g = Math.cos(o / 6),
                d = .5 * o * (1 + c) - a,
                b = i / (v * g) - r,
                p = c ? -.25 * o * s / c : 0,
                w = .5 * (1 + c),
                q = (1 + .5 * i * f / v) / (v * g),
                m = i / v * (l / 6) / (g * g),
                y = p * m - q * w,
                S = (d * m - b * w) / y,
                Q = (b * p - d * q) / y;
            if (i -= S, o -= Q, Math.abs(S) < ga && Math.abs(Q) < ga) break
        }
        return [0 > t ? -o : o, 0 > n ? -i : i]
    }, (d3.geo.larrivee = function() {
        return ya(Pn)
    }).raw = Pn, _n.invert = function(t, n) {
        var a = i(t) * ba,
            r = n / 2,
            e = 50;
        do {
            var o = a * a,
                h = r * r,
                u = a * r,
                M = a * (.975534 + h * (-.119161 + o * -.0143059 + h * -.0547009)) - t,
                s = r * (1.00384 + o * (.0802894 + h * -.02855 + 199025e-9 * o) + h * (.0998909 + h * -.0491032)) - n,
                c = .975534 - h * (.119161 + .0143059 * 3 * o + .0547009 * h),
                f = -u * (.238322 + .2188036 * h + .0286118 * o),
                v = u * (.1605788 + 7961e-7 * o + -0.0571 * h),
                l = 1.00384 + o * (.0802894 + 199025e-9 * o) + h * (3 * (.0998909 - .02855 * o) - .245516 * h),
                g = f * v - l * c,
                d = (s * f - M * l) / g,
                b = (M * v - s * c) / g;
            a -= d, r -= b
        } while ((Math.abs(d) > ga || Math.abs(b) > ga) && --e > 0);
        return e && [a, r]
    }, (d3.geo.laskowski = function() {
        return ya(_n)
    }).raw = _n, zn.invert = function(t, n) {
        var a = t * t,
            r = n * n,
            e = r + 1,
            o = t ? Math.SQRT1_2 * Math.sqrt((e - Math.sqrt(a * a + 2 * a * (r - 1) + e * e)) / a + 1) : 1 / Math.sqrt(e);
        return [h(t * o), i(n) * u(o)]
    }, (d3.geo.littrow = function() {
        return ya(zn)
    }).raw = zn, (d3.geo.loximuthal = function() {
        return x(Bn).parallel(40)
    }).raw = Bn, Fn.invert = function(t, n) {
        return [t, 2.5 * Math.atan(Math.exp(.8 * n)) - .625 * ba]
    }, (d3.geo.miller = function() {
        return ya(Fn)
    }).raw = Fn;
    var La = {
        alaska: [
            [.9972523, 0],
            [.0052513, -.0041175],
            [.0074606, .0048125],
            [-.0153783, -.1968253],
            [.0636871, -.1408027],
            [.3660976, -.2937382]
        ],
        gs48: [
            [.98879, 0],
            [0, 0],
            [-.050909, 0],
            [0, 0],
            [.075528, 0]
        ],
        gs50: [
            [.984299, 0],
            [.0211642, .0037608],
            [-.1036018, -.0575102],
            [-.0329095, -.0320119],
            [.0499471, .1223335],
            [.026046, .0899805],
            [7388e-7, -.1435792],
            [.0075848, -.1334108],
            [-.0216473, .0776645],
            [-.0225161, .0853673]
        ],
        miller: [
            [.9245, 0],
            [0, 0],
            [.01943, 0]
        ],
        lee: [
            [.721316, 0],
            [0, 0],
            [-.00881625, -.00617325]
        ]
    };
    (d3.geo.modifiedStereographic = Gn).raw = An, jn.invert = function(t, n) {
        var a = Math.sqrt(6),
            r = Math.sqrt(7),
            e = 3 * h(n * r / 9);
        return [t * r / (a * (2 * Math.cos(2 * e / 3) - 1)), h(3 * Math.sin(e) * a / 7)]
    }, (d3.geo.mtFlatPolarParabolic = function() {
        return ya(jn)
    }).raw = jn, Cn.invert = function(t, n) {
        var a = n * Math.sqrt(2 + Math.SQRT2) / (2 * Math.sqrt(3)),
            r = 2 * h(a);
        return [3 * Math.SQRT2 * t / (1 + 2 * Math.cos(r) / Math.cos(r / 2)), h((a + Math.sin(r)) / (1 + Math.SQRT1_2))]
    }, (d3.geo.mtFlatPolarQuartic = function() {
        return ya(Cn)
    }).raw = Cn, Dn.invert = function(t, n) {
        var a = Math.sqrt(6 / (4 + ba)),
            r = n / a;
        return Math.abs(Math.abs(r) - pa) < ga && (r = 0 > r ? -pa : pa), [1.5 * t / (a * (.5 + Math.cos(r))), h((r / 2 + Math.sin(r)) / (1 + ba / 4))]
    }, (d3.geo.mtFlatPolarSinusoidal = function() {
        return ya(Dn)
    }).raw = Dn, Ln.invert = function(t, n) {
        var a, r = n,
            e = 25;
        do {
            var o = r * r,
                i = o * o;
            r -= a = (r * (1.007226 + o * (.015085 + i * (-.044475 + .028874 * o - .005916 * i))) - n) / (1.007226 + o * (.045255 + i * (-0.311325 + .259866 * o - .005916 * 11 * i)))
        } while (Math.abs(a) > ga && --e > 0);
        return [t / (.8707 + (o = r * r) * (-.131979 + o * (-.013791 + o * o * o * (.003971 - .001529 * o)))), r]
    }, (d3.geo.naturalEarth = function() {
        return ya(Ln)
    }).raw = Ln, On.invert = function(t, n) {
        for (var a = n / 2, r = 0, e = 1 / 0; 10 > r && Math.abs(e) > ga; r++) {
            var o = Math.cos(n / 2);
            n -= e = (n - Math.tan(n / 2) - a) / (1 - .5 / (o * o))
        }
        return [2 * t / (1 + Math.cos(n)), n]
    }, (d3.geo.nellHammer = function() {
        return ya(On)
    }).raw = On;
    var Oa = 1.0148,
        Ha = .23185,
        Ia = -.14499,
        Ja = .02406,
        Ka = Oa,
        Na = 5 * Ha,
        Ua = 7 * Ia,
        Va = 9 * Ja,
        Wa = 1.790857183;
    Hn.invert = function(t, n) {
        n > Wa ? n = Wa : -Wa > n && (n = -Wa);
        var a, r = n;
        do {
            var e = r * r;
            r -= a = (r * (Oa + e * e * (Ha + e * (Ia + Ja * e))) - n) / (Ka + e * e * (Na + e * (Ua + Va * e)))
        } while (Math.abs(a) > ga);
        return [t, r]
    }, (d3.geo.patterson = function() {
        return ya(Hn)
    }).raw = Hn;
    var Xa = an(cn);
    (d3.geo.peirceQuincuncial = function() {
        return Xa().quincuncial(!0).rotate([-90, -90, 45]).clipAngle(180 - 1e-6)
    }).raw = Xa.raw, In.invert = function(t, n) {
        if (Math.abs(n) < ga) return [t, 0];
        var a, r = t * t + n * n,
            e = .5 * n,
            o = 10;
        do {
            var M = Math.tan(e),
                s = 1 / Math.cos(e),
                c = r - 2 * n * e + e * e;
            e -= a = (M * c + 2 * (e - n)) / (2 + c * s * s + 2 * (e - n) * M)
        } while (Math.abs(a) > ga && --o > 0);
        return M = Math.tan(e), [(Math.abs(n) < Math.abs(e + 1 / M) ? h(t * M) : i(t) * (u(Math.abs(t * M)) + pa)) / Math.sin(e), e]
    }, (d3.geo.polyconic = function() {
        return ya(In)
    }).raw = In, (d3.geo.rectangularPolyconic = function() {
        return x(Jn)
    }).raw = Jn;
    var Ya = [
        [.9986, -.062],
        [1, 0],
        [.9986, .062],
        [.9954, .124],
        [.99, .186],
        [.9822, .248],
        [.973, .31],
        [.96, .372],
        [.9427, .434],
        [.9216, .4958],
        [.8962, .5571],
        [.8679, .6176],
        [.835, .6769],
        [.7986, .7346],
        [.7597, .7903],
        [.7186, .8435],
        [.6732, .8936],
        [.6213, .9394],
        [.5722, .9761],
        [.5322, 1]
    ];
    Ya.forEach(function(t) {
        t[1] *= 1.0144
    }), Kn.invert = function(t, n) {
        var a = n / pa,
            r = 90 * a,
            e = Math.min(18, Math.abs(r / 5)),
            o = Math.max(0, Math.floor(e));
        do {
            var i = Ya[o][1],
                h = Ya[o + 1][1],
                u = Ya[Math.min(19, o + 2)][1],
                M = u - i,
                s = u - 2 * h + i,
                c = 2 * (Math.abs(a) - h) / M,
                f = s / M,
                v = c * (1 - f * c * (1 - 2 * f * c));
            if (v >= 0 || 1 === o) {
                r = (n >= 0 ? 5 : -5) * (v + e);
                var l, g = 50;
                do e = Math.min(18, Math.abs(r) / 5), o = Math.floor(e), v = e - o, i = Ya[o][1], h = Ya[o + 1][1], u = Ya[Math.min(19, o + 2)][1], r -= (l = (n >= 0 ? pa : -pa) * (h + v * (u - i) / 2 + v * v * (u - 2 * h + i) / 2) - n) * ma; while (Math.abs(l) > da && --g > 0);
                break
            }
        } while (--o >= 0);
        var d = Ya[o][0],
            b = Ya[o + 1][0],
            p = Ya[Math.min(19, o + 2)][0];
        return [t / (b + v * (p - d) / 2 + v * v * (p - 2 * b + d) / 2), r * qa]
    }, (d3.geo.robinson = function() {
        return ya(Kn)
    }).raw = Kn, (d3.geo.satellite = Vn).raw = Un, Wn.invert = function(t, n) {
        var a = n / 1.70711,
            r = Math.sin(ba / 4 * a);
        return [t / (.74482 - .34588 * r * r), 2 * Math.atan(a)]
    }, (d3.geo.times = function() {
        return ya(Wn)
    }).raw = Wn, (d3.geo.twoPointEquidistant = Yn).raw = Xn, (d3.geo.twoPointAzimuthal = $n).raw = Zn, ta.invert = function(t, n) {
        if (Math.abs(n) < ga) return [t, 0];
        if (Math.abs(t) < ga) return [0, pa * Math.sin(2 * Math.atan(n / ba))];
        var a = (t /= ba) * t,
            r = (n /= ba) * n,
            e = a + r,
            o = e * e,
            h = -Math.abs(n) * (1 + e),
            M = h - 2 * r + a,
            s = -2 * h + 1 + 2 * r + o,
            c = r / s + (2 * M * M * M / (s * s * s) - 9 * h * M / (s * s)) / 27,
            f = (h - M * M / (3 * s)) / s,
            v = 2 * Math.sqrt(-f / 3),
            l = u(3 * c / (f * v)) / 3;
        return [ba * (e - 1 + Math.sqrt(1 + 2 * (a - r) + o)) / (2 * t), i(n) * ba * (-v * Math.cos(l + ba / 3) - M / (3 * s))]
    }, (d3.geo.vanDerGrinten = function() {
        return ya(ta)
    }).raw = ta, na.invert = function(t, n) {
        if (!t) return [0, pa * Math.sin(2 * Math.atan(n / ba))];
        var a = Math.abs(t / ba),
            r = (1 - a * a - (n /= ba) * n) / (2 * a),
            e = r * r,
            o = Math.sqrt(e + 1);
        return [i(t) * ba * (o - r), i(n) * pa * Math.sin(2 * Math.atan2(Math.sqrt((1 - 2 * r * a) * (r + o) - a), Math.sqrt(o + r + a)))]
    }, (d3.geo.vanDerGrinten2 = function() {
        return ya(na)
    }).raw = na, aa.invert = function(t, n) {
        if (!n) return [t, 0];
        var a = n / ba,
            r = (ba * ba * (1 - a * a) - t * t) / (2 * ba * t);
        return [t ? ba * (i(t) * Math.sqrt(r * r + 1) - r) : 0, pa * Math.sin(2 * Math.atan(a))]
    }, (d3.geo.vanDerGrinten3 = function() {
        return ya(aa)
    }).raw = aa, ra.invert = function(t, n) {
        if (!t || !n) return [t, n];
        n /= ba;
        var a = i(t) * t / pa,
            r = (a * a - 1 + 4 * n * n) / Math.abs(a),
            e = r * r,
            o = 2 * n,
            h = 50;
        do {
            var u = o * o,
                M = (8 * o - u * (u + 2) - 5) / (2 * u * (o - 1)),
                s = (3 * o - u * o - 10) / (2 * u * o),
                c = M * M,
                f = o * M,
                v = o + M,
                l = v * v,
                g = o + 3 * M,
                d = l * (u + c * e - 1) + (1 - u) * (u * (g * g + 4 * c) + c * (12 * f + 4 * c)),
                b = -2 * v * (4 * f * c + (1 - 4 * u + 3 * u * u) * (1 + s) + c * (-6 + 14 * u - e + (-8 + 8 * u - 2 * e) * s) + f * (-8 + 12 * u + (-10 + 10 * u - e) * s)),
                p = Math.sqrt(d),
                w = r * (l + c - 1) + 2 * p - a * (4 * l + e),
                q = r * (2 * M * s + 2 * v * (1 + s)) + b / p - 8 * v * (r * (-1 + c + l) + 2 * p) * (1 + s) / (e + 4 * l);
            o -= δ = w / q
        } while (δ > ga && --h > 0);
        return [i(t) * (Math.sqrt(r * r + 4) + r) * ba / 4, pa * o]
    }, (d3.geo.vanDerGrinten4 = function() {
        return ya(ra)
    }).raw = ra;
    var Za = function() {
        var t = 4 * ba + 3 * Math.sqrt(3),
            n = 2 * Math.sqrt(2 * ba * Math.sqrt(3) / t);
        return R(n * Math.sqrt(3) / ba, n, t / 6)
    }();
    (d3.geo.wagner4 = function() {
        return ya(Za)
    }).raw = Za, ea.invert = function(t, n) {
        return [t / Math.sqrt(1 - 3 * n * n / (ba * ba)), n]
    }, (d3.geo.wagner6 = function() {
        return ya(ea)
    }).raw = ea, oa.invert = function(t, n) {
        var a = t / 2.66723,
            r = n / 1.24104,
            e = Math.sqrt(a * a + r * r),
            o = 2 * h(e / 2);
        return [3 * Math.atan2(t * Math.tan(o), 2.66723 * e), e && h(n * Math.sin(o) / (1.24104 * .90631 * e))]
    }, (d3.geo.wagner7 = function() {
        return ya(oa)
    }).raw = oa, ia.invert = function(t, n) {
        var a = -.5 * (t * t + n * n),
            r = Math.sqrt(-a * (2 + a)),
            e = n * a + t * r,
            o = t * a - n * r,
            i = Math.sqrt(o * o + e * e);
        return [Math.atan2(r * e, i * (1 + a)), i ? -h(r * o / i) : 0]
    }, (d3.geo.wiechel = function() {
        return ya(ia)
    }).raw = ia, ha.invert = function(t, n) {
        var a = t,
            r = n,
            e = 25;
        do {
            var o, i = Math.cos(r),
                h = Math.sin(r),
                M = Math.sin(2 * r),
                s = h * h,
                c = i * i,
                f = Math.sin(a),
                v = Math.cos(a / 2),
                l = Math.sin(a / 2),
                g = l * l,
                d = 1 - c * v * v,
                b = d ? u(i * v) * Math.sqrt(o = 1 / d) : o = 0,
                p = .5 * (2 * b * i * l + a / pa) - t,
                w = .5 * (b * h + r) - n,
                q = .5 * o * (c * g + b * i * v * s) + .5 / pa,
                m = o * (f * M / 4 - b * h * l),
                y = .125 * o * (M * l - b * h * c * f),
                S = .5 * o * (s * v + b * g * i) + .5,
                Q = m * y - S * q,
                R = (w * m - p * S) / Q,
                T = (p * y - w * q) / Q;
            a -= R, r -= T
        } while ((Math.abs(R) > ga || Math.abs(T) > ga) && --e > 0);
        return [a, r]
    }, (d3.geo.winkel3 = function() {
        return ya(ha)
    }).raw = ha
}();
! function() {
    function t(n, t) {
        function r(t) {
            var r, e = n.arcs[0 > t ? ~t : t],
                o = e[0];
            return n.transform ? (r = [0, 0], e.forEach(function(n) {
                r[0] += n[0], r[1] += n[1]
            })) : r = e[e.length - 1], 0 > t ? [r, o] : [o, r]
        }

        function e(n, t) {
            for (var r in n) {
                var e = n[r];
                delete t[e.start], delete e.start, delete e.end, e.forEach(function(n) {
                    o[0 > n ? ~n : n] = 1
                }), f.push(e)
            }
        }
        var o = {},
            i = {},
            u = {},
            f = [],
            c = -1;
        return t.forEach(function(r, e) {
            var o, i = n.arcs[0 > r ? ~r : r];
            i.length < 3 && !i[1][0] && !i[1][1] && (o = t[++c], t[c] = r, t[e] = o)
        }), t.forEach(function(n) {
            var t, e, o = r(n),
                f = o[0],
                c = o[1];
            if (t = u[f])
                if (delete u[t.end], t.push(n), t.end = c, e = i[c]) {
                    delete i[e.start];
                    var a = e === t ? t : t.concat(e);
                    i[a.start = t.start] = u[a.end = e.end] = a
                } else i[t.start] = u[t.end] = t;
            else if (t = i[c])
                if (delete i[t.start], t.unshift(n), t.start = f, e = u[f]) {
                    delete u[e.end];
                    var s = e === t ? t : e.concat(t);
                    i[s.start = e.start] = u[s.end = t.end] = s
                } else i[t.start] = u[t.end] = t;
            else t = [n], i[t.start = f] = u[t.end = c] = t
        }), e(u, i), e(i, u), t.forEach(function(n) {
            o[0 > n ? ~n : n] || f.push([n])
        }), f
    }

    function r(n, r, e) {
        function o(n) {
            var t = 0 > n ? ~n : n;
            (s[t] || (s[t] = [])).push({
                i: n,
                g: a
            })
        }

        function i(n) {
            n.forEach(o)
        }

        function u(n) {
            n.forEach(i)
        }

        function f(n) {
            "GeometryCollection" === n.type ? n.geometries.forEach(f) : n.type in l && (a = n, l[n.type](n.arcs))
        }
        var c = [];
        if (arguments.length > 1) {
            var a, s = [],
                l = {
                    LineString: i,
                    MultiLineString: u,
                    Polygon: u,
                    MultiPolygon: function(n) {
                        n.forEach(u)
                    }
                };
            f(r), s.forEach(arguments.length < 3 ? function(n) {
                c.push(n[0].i)
            } : function(n) {
                e(n[0].g, n[n.length - 1].g) && c.push(n[0].i)
            })
        } else
            for (var h = 0, p = n.arcs.length; p > h; ++h) c.push(h);
        return {
            type: "MultiLineString",
            arcs: t(n, c)
        }
    }

    function e(r, e) {
        function o(n) {
            n.forEach(function(t) {
                t.forEach(function(t) {
                    (f[t = 0 > t ? ~t : t] || (f[t] = [])).push(n)
                })
            }), c.push(n)
        }

        function i(n) {
            return l(u(r, {
                type: "Polygon",
                arcs: [n]
            }).coordinates[0]) > 0
        }
        var f = {},
            c = [],
            a = [];
        return e.forEach(function(n) {
            "Polygon" === n.type ? o(n.arcs) : "MultiPolygon" === n.type && n.arcs.forEach(o)
        }), c.forEach(function(n) {
            if (!n._) {
                var t = [],
                    r = [n];
                for (n._ = 1, a.push(t); n = r.pop();) t.push(n), n.forEach(function(n) {
                    n.forEach(function(n) {
                        f[0 > n ? ~n : n].forEach(function(n) {
                            n._ || (n._ = 1, r.push(n))
                        })
                    })
                })
            }
        }), c.forEach(function(n) {
            delete n._
        }), {
            type: "MultiPolygon",
            arcs: a.map(function(e) {
                var o = [];
                if (e.forEach(function(n) {
                        n.forEach(function(n) {
                            n.forEach(function(n) {
                                f[0 > n ? ~n : n].length < 2 && o.push(n)
                            })
                        })
                    }), o = t(r, o), (n = o.length) > 1)
                    for (var u, c = i(e[0][0]), a = 0; n > a; ++a)
                        if (c === i(o[a])) {
                            u = o[0], o[0] = o[a], o[a] = u;
                            break
                        }
                return o
            })
        }
    }

    function o(n, t) {
        return "GeometryCollection" === t.type ? {
            type: "FeatureCollection",
            features: t.geometries.map(function(t) {
                return i(n, t)
            })
        } : i(n, t)
    }

    function i(n, t) {
        var r = {
            type: "Feature",
            id: t.id,
            properties: t.properties || {},
            geometry: u(n, t)
        };
        return null == t.id && delete r.id, r
    }

    function u(n, t) {
        function r(n, t) {
            t.length && t.pop();
            for (var r, e = s[0 > n ? ~n : n], o = 0, i = e.length; i > o; ++o) t.push(r = e[o].slice()), a(r, o);
            0 > n && f(t, i)
        }

        function e(n) {
            return n = n.slice(), a(n, 0), n
        }

        function o(n) {
            for (var t = [], e = 0, o = n.length; o > e; ++e) r(n[e], t);
            return t.length < 2 && t.push(t[0].slice()), t
        }

        function i(n) {
            for (var t = o(n); t.length < 4;) t.push(t[0].slice());
            return t
        }

        function u(n) {
            return n.map(i)
        }

        function c(n) {
            var t = n.type;
            return "GeometryCollection" === t ? {
                type: t,
                geometries: n.geometries.map(c)
            } : t in l ? {
                type: t,
                coordinates: l[t](n)
            } : null
        }
        var a = v(n.transform),
            s = n.arcs,
            l = {
                Point: function(n) {
                    return e(n.coordinates)
                },
                MultiPoint: function(n) {
                    return n.coordinates.map(e)
                },
                LineString: function(n) {
                    return o(n.arcs)
                },
                MultiLineString: function(n) {
                    return n.arcs.map(o)
                },
                Polygon: function(n) {
                    return u(n.arcs)
                },
                MultiPolygon: function(n) {
                    return n.arcs.map(u)
                }
            };
        return c(t)
    }

    function f(n, t) {
        for (var r, e = n.length, o = e - t; o < --e;) r = n[o], n[o++] = n[e], n[e] = r
    }

    function c(n, t) {
        for (var r = 0, e = n.length; e > r;) {
            var o = r + e >>> 1;
            n[o] < t ? r = o + 1 : e = o
        }
        return r
    }

    function a(n) {
        function t(n, t) {
            n.forEach(function(n) {
                0 > n && (n = ~n);
                var r = o[n];
                r ? r.push(t) : o[n] = [t]
            })
        }

        function r(n, r) {
            n.forEach(function(n) {
                t(n, r)
            })
        }

        function e(n, t) {
            "GeometryCollection" === n.type ? n.geometries.forEach(function(n) {
                e(n, t)
            }) : n.type in u && u[n.type](n.arcs, t)
        }
        var o = {},
            i = n.map(function() {
                return []
            }),
            u = {
                LineString: t,
                MultiLineString: r,
                Polygon: r,
                MultiPolygon: function(n, t) {
                    n.forEach(function(n) {
                        r(n, t)
                    })
                }
            };
        n.forEach(e);
        for (var f in o)
            for (var a = o[f], s = a.length, l = 0; s > l; ++l)
                for (var h = l + 1; s > h; ++h) {
                    var p, g = a[l],
                        v = a[h];
                    (p = i[g])[f = c(p, v)] !== v && p.splice(f, 0, v), (p = i[v])[f = c(p, g)] !== g && p.splice(f, 0, g)
                }
        return i
    }

    function s(n, t) {
        function r(n) {
            i.remove(n), n[1][2] = t(n), i.push(n)
        }
        var e = v(n.transform),
            o = m(n.transform),
            i = g();
        return t || (t = h), n.arcs.forEach(function(n) {
            for (var u, f, c = [], a = 0, s = 0, l = n.length; l > s; ++s) f = n[s], e(n[s] = [f[0], f[1], 1 / 0], s);
            for (var s = 1, l = n.length - 1; l > s; ++s) u = n.slice(s - 1, s + 2), u[1][2] = t(u), c.push(u), i.push(u);
            for (var s = 0, l = c.length; l > s; ++s) u = c[s], u.previous = c[s - 1], u.next = c[s + 1];
            for (; u = i.pop();) {
                var h = u.previous,
                    p = u.next;
                u[1][2] < a ? u[1][2] = a : a = u[1][2], h && (h.next = p, h[2] = u[2], r(h)), p && (p.previous = h, p[0] = u[0], r(p))
            }
            n.forEach(o)
        }), n
    }

    function l(n) {
        for (var t, r = -1, e = n.length, o = n[e - 1], i = 0; ++r < e;) t = o, o = n[r], i += t[0] * o[1] - t[1] * o[0];
        return .5 * i
    }

    function h(n) {
        var t = n[0],
            r = n[1],
            e = n[2];
        return Math.abs((t[0] - e[0]) * (r[1] - t[1]) - (t[0] - r[0]) * (e[1] - t[1]))
    }

    function p(n, t) {
        return n[1][2] - t[1][2]
    }

    function g() {
        function n(n, t) {
            for (; t > 0;) {
                var r = (t + 1 >> 1) - 1,
                    o = e[r];
                if (p(n, o) >= 0) break;
                e[o._ = t] = o, e[n._ = t = r] = n
            }
        }

        function t(n, t) {
            for (;;) {
                var r = t + 1 << 1,
                    i = r - 1,
                    u = t,
                    f = e[u];
                if (o > i && p(e[i], f) < 0 && (f = e[u = i]), o > r && p(e[r], f) < 0 && (f = e[u = r]), u === t) break;
                e[f._ = t] = f, e[n._ = t = u] = n
            }
        }
        var r = {},
            e = [],
            o = 0;
        return r.push = function(t) {
            return n(e[t._ = o] = t, o++), o
        }, r.pop = function() {
            if (!(0 >= o)) {
                var n, r = e[0];
                return --o > 0 && (n = e[o], t(e[n._ = 0] = n, 0)), r
            }
        }, r.remove = function(r) {
            var i, u = r._;
            if (e[u] === r) return u !== --o && (i = e[o], (p(i, r) < 0 ? n : t)(e[i._ = u] = i, u)), u
        }, r
    }

    function v(n) {
        if (!n) return y;
        var t, r, e = n.scale[0],
            o = n.scale[1],
            i = n.translate[0],
            u = n.translate[1];
        return function(n, f) {
            f || (t = r = 0), n[0] = (t += n[0]) * e + i, n[1] = (r += n[1]) * o + u
        }
    }

    function m(n) {
        if (!n) return y;
        var t, r, e = n.scale[0],
            o = n.scale[1],
            i = n.translate[0],
            u = n.translate[1];
        return function(n, f) {
            f || (t = r = 0);
            var c = (n[0] - i) / e | 0,
                a = (n[1] - u) / o | 0;
            n[0] = c - t, n[1] = a - r, t = c, r = a
        }
    }

    function y() {}
    var d = {
        version: "1.6.18",
        mesh: function(n) {
            return u(n, r.apply(this, arguments))
        },
        meshArcs: r,
        merge: function(n) {
            return u(n, e.apply(this, arguments))
        },
        mergeArcs: e,
        feature: o,
        neighbors: a,
        presimplify: s
    };
    "function" == typeof define && define.amd ? define(d) : "object" == typeof module && module.exports ? module.exports = d : this.topojson = d
}();