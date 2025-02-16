/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-touchevents-video-videoautoplay-domprefixes-mq-prefixes-setclasses-shiv-testallprops-testprop !*/
!function(A, e, t) {
    function n(A, e) {
        return typeof A === e
    }
    function o() {
        var A, e, t, o, r, a, i;
        for (var l in w)
            if (w.hasOwnProperty(l)) {
                if (A = [],
                    e = w[l],
                e.name && (A.push(e.name.toLowerCase()),
                e.options && e.options.aliases && e.options.aliases.length))
                    for (t = 0; t < e.options.aliases.length; t++)
                        A.push(e.options.aliases[t].toLowerCase());
                for (o = n(e.fn, "function") ? e.fn() : e.fn,
                         r = 0; r < A.length; r++)
                    a = A[r],
                        i = a.split("."),
                        1 === i.length ? Modernizr[i[0]] = o : (!Modernizr[i[0]] || Modernizr[i[0]]instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                            Modernizr[i[0]][i[1]] = o),
                        E.push((o ? "" : "no-") + i.join("-"))
            }
    }
    function r(A) {
        var e = B.className
            , t = Modernizr._config.classPrefix || "";
        if (T && (e = e.baseVal),
            Modernizr._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            e = e.replace(n, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (e += " " + t + A.join(" " + t),
            T ? B.className.baseVal = e : B.className = e)
    }
    function a() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : T ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }
    function i() {
        var A = e.body;
        return A || (A = a(T ? "svg" : "body"),
            A.fake = !0),
            A
    }
    function l(A, t, n, o) {
        var r, l, c, s, u = "modernizr", d = a("div"), f = i();
        if (parseInt(n, 10))
            for (; n--; )
                c = a("div"),
                    c.id = o ? o[n] : u + (n + 1),
                    d.appendChild(c);
        return r = a("style"),
            r.type = "text/css",
            r.id = "s" + u,
            (f.fake ? f : d).appendChild(r),
            f.appendChild(d),
            r.styleSheet ? r.styleSheet.cssText = A : r.appendChild(e.createTextNode(A)),
            d.id = u,
        f.fake && (f.style.background = "",
            f.style.overflow = "hidden",
            s = B.style.overflow,
            B.style.overflow = "hidden",
            B.appendChild(f)),
            l = t(d, A),
            f.fake ? (f.parentNode.removeChild(f),
                B.style.overflow = s,
                B.offsetHeight) : d.parentNode.removeChild(d),
            !!l
    }
    function c(A, e) {
        return !!~("" + A).indexOf(e)
    }
    function s(A) {
        return A.replace(/([a-z])-([a-z])/g, function(A, e, t) {
            return e + t.toUpperCase()
        }).replace(/^-/, "")
    }
    function u(A, e) {
        if ("object" == typeof A)
            for (var t in A)
                M(A, t) && u(t, A[t]);
        else {
            A = A.toLowerCase();
            var n = A.split(".")
                , o = Modernizr[n[0]];
            if (2 == n.length && (o = o[n[1]]),
            "undefined" != typeof o)
                return Modernizr;
            e = "function" == typeof e ? e() : e,
                1 == n.length ? Modernizr[n[0]] = e : (!Modernizr[n[0]] || Modernizr[n[0]]instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])),
                    Modernizr[n[0]][n[1]] = e),
                r([(e && 0 != e ? "" : "no-") + n.join("-")]),
                Modernizr._trigger(A, e)
        }
        return Modernizr
    }
    function d(A, e) {
        return function() {
            return A.apply(e, arguments)
        }
    }
    function f(A, e, t) {
        var o;
        for (var r in A)
            if (A[r]in e)
                return t === !1 ? A[r] : (o = e[A[r]],
                    n(o, "function") ? d(o, t || e) : o);
        return !1
    }
    function h(A) {
        return A.replace(/([A-Z])/g, function(A, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function m(e, t, n) {
        var o;
        if ("getComputedStyle"in A) {
            o = getComputedStyle.call(A, e, t);
            var r = A.console;
            if (null !== o)
                n && (o = o.getPropertyValue(n));
            else if (r) {
                var a = r.error ? "error" : "log";
                r[a].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !t && e.currentStyle && e.currentStyle[n];
        return o
    }
    function p(e, n) {
        var o = e.length;
        if ("CSS"in A && "supports"in A.CSS) {
            for (; o--; )
                if (A.CSS.supports(h(e[o]), n))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in A) {
            for (var r = []; o--; )
                r.push("(" + h(e[o]) + ":" + n + ")");
            return r = r.join(" or "),
                l("@supports (" + r + ") { #modernizr { position: absolute; } }", function(A) {
                    return "absolute" == m(A, null, "position")
                })
        }
        return t
    }
    function g(A, e, o, r) {
        function i() {
            u && (delete S.style,
                delete S.modElem)
        }
        if (r = n(r, "undefined") ? !1 : r,
            !n(o, "undefined")) {
            var l = p(A, o);
            if (!n(l, "undefined"))
                return l
        }
        for (var u, d, f, h, m, g = ["modernizr", "tspan", "samp"]; !S.style && g.length; )
            u = !0,
                S.modElem = a(g.shift()),
                S.style = S.modElem.style;
        for (f = A.length,
                 d = 0; f > d; d++)
            if (h = A[d],
                m = S.style[h],
            c(h, "-") && (h = s(h)),
            S.style[h] !== t) {
                if (r || n(o, "undefined"))
                    return i(),
                        "pfx" == e ? h : !0;
                try {
                    S.style[h] = o
                } catch (v) {}
                if (S.style[h] != m)
                    return i(),
                        "pfx" == e ? h : !0
            }
        return i(),
            !1
    }
    function v(A, e, t, o, r) {
        var a = A.charAt(0).toUpperCase() + A.slice(1)
            , i = (A + " " + x.join(a + " ") + a).split(" ");
        return n(e, "string") || n(e, "undefined") ? g(i, e, o, r) : (i = (A + " " + C.join(a + " ") + a).split(" "),
            f(i, e, t))
    }
    function y(A, e, n) {
        return v(A, t, t, e, n)
    }
    var E = []
        , w = []
        , R = {
        _version: "3.5.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(A, e) {
            var t = this;
            setTimeout(function() {
                e(t[A])
            }, 0)
        },
        addTest: function(A, e, t) {
            w.push({
                name: A,
                fn: e,
                options: t
            })
        },
        addAsyncTest: function(A) {
            w.push({
                name: null,
                fn: A
            })
        }
    }
        , Modernizr = function() {};
    Modernizr.prototype = R,
        Modernizr = new Modernizr;
    var F = R._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    R._prefixes = F;
    var B = e.documentElement
        , T = "svg" === B.nodeName.toLowerCase();
    T || !function(A, e) {
        function t(A, e) {
            var t = A.createElement("p")
                , n = A.getElementsByTagName("head")[0] || A.documentElement;
            return t.innerHTML = "x<style>" + e + "</style>",
                n.insertBefore(t.lastChild, n.firstChild)
        }
        function n() {
            var A = y.elements;
            return "string" == typeof A ? A.split(" ") : A
        }
        function o(A, e) {
            var t = y.elements;
            "string" != typeof t && (t = t.join(" ")),
            "string" != typeof A && (A = A.join(" ")),
                y.elements = t + " " + A,
                c(e)
        }
        function r(A) {
            var e = v[A[p]];
            return e || (e = {},
                g++,
                A[p] = g,
                v[g] = e),
                e
        }
        function a(A, t, n) {
            if (t || (t = e),
                u)
                return t.createElement(A);
            n || (n = r(t));
            var o;
            return o = n.cache[A] ? n.cache[A].cloneNode() : m.test(A) ? (n.cache[A] = n.createElem(A)).cloneNode() : n.createElem(A),
                !o.canHaveChildren || h.test(A) || o.tagUrn ? o : n.frag.appendChild(o)
        }
        function i(A, t) {
            if (A || (A = e),
                u)
                return A.createDocumentFragment();
            t = t || r(A);
            for (var o = t.frag.cloneNode(), a = 0, i = n(), l = i.length; l > a; a++)
                o.createElement(i[a]);
            return o
        }
        function l(A, e) {
            e.cache || (e.cache = {},
                e.createElem = A.createElement,
                e.createFrag = A.createDocumentFragment,
                e.frag = e.createFrag()),
                A.createElement = function(t) {
                    return y.shivMethods ? a(t, A, e) : e.createElem(t)
                }
                ,
                A.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-:]+/g, function(A) {
                    return e.createElem(A),
                        e.frag.createElement(A),
                    'c("' + A + '")'
                }) + ");return n}")(y, e.frag)
        }
        function c(A) {
            A || (A = e);
            var n = r(A);
            return !y.shivCSS || s || n.hasCSS || (n.hasCSS = !!t(A, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            u || l(A, n),
                A
        }
        var s, u, d = "3.7.3", f = A.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p = "_html5shiv", g = 0, v = {};
        !function() {
            try {
                var A = e.createElement("a");
                A.innerHTML = "<xyz></xyz>",
                    s = "hidden"in A,
                    u = 1 == A.childNodes.length || function() {
                        e.createElement("a");
                        var A = e.createDocumentFragment();
                        return "undefined" == typeof A.cloneNode || "undefined" == typeof A.createDocumentFragment || "undefined" == typeof A.createElement
                    }()
            } catch (t) {
                s = !0,
                    u = !0
            }
        }();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: a,
            createDocumentFragment: i,
            addElements: o
        };
        A.html5 = y,
            c(e),
        "object" == typeof module && module.exports && (module.exports = y)
    }("undefined" != typeof A ? A : this, e);
    var G = "Moz O ms Webkit"
        , C = R._config.usePrefixes ? G.toLowerCase().split(" ") : [];
    R._domPrefixes = C,
        Modernizr.addTest("video", function() {
            var A = a("video")
                , e = !1;
            try {
                e = !!A.canPlayType,
                e && (e = new Boolean(e),
                    e.ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                    e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                    e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
                    e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""),
                    e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
            } catch (t) {}
            return e
        });
    var Q = function() {
        var e = A.matchMedia || A.msMatchMedia;
        return e ? function(A) {
                var t = e(A);
                return t && t.matches || !1
            }
            : function(e) {
                var t = !1;
                return l("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                    t = "absolute" == (A.getComputedStyle ? A.getComputedStyle(e, null) : e.currentStyle).position
                }),
                    t
            }
    }();
    R.mq = Q;
    var b = R.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart"in A || A.DocumentTouch && e instanceof DocumentTouch)
            t = !0;
        else {
            var n = ["@media (", F.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            b(n, function(A) {
                t = 9 === A.offsetTop
            })
        }
        return t
    });
    var x = R._config.usePrefixes ? G.split(" ") : [];
    R._cssomPrefixes = x;
    var M;
    !function() {
        var A = {}.hasOwnProperty;
        M = n(A, "undefined") || n(A.call, "undefined") ? function(A, e) {
                return e in A && n(A.constructor.prototype[e], "undefined")
            }
            : function(e, t) {
                return A.call(e, t)
            }
    }(),
        R._l = {},
        R.on = function(A, e) {
            this._l[A] || (this._l[A] = []),
                this._l[A].push(e),
            Modernizr.hasOwnProperty(A) && setTimeout(function() {
                Modernizr._trigger(A, Modernizr[A])
            }, 0)
        }
        ,
        R._trigger = function(A, e) {
            if (this._l[A]) {
                var t = this._l[A];
                setTimeout(function() {
                    var A, n;
                    for (A = 0; A < t.length; A++)
                        (n = t[A])(e)
                }, 0),
                    delete this._l[A]
            }
        }
        ,
        Modernizr._q.push(function() {
            R.addTest = u
        }),
        Modernizr.addAsyncTest(function() {
            function A(a) {
                o++,
                    clearTimeout(e);
                var i = a && "playing" === a.type || 0 !== r.currentTime;
                return !i && n > o ? void (e = setTimeout(A, t)) : (r.removeEventListener("playing", A, !1),
                    u("videoautoplay", i),
                    void (r.parentNode && r.parentNode.removeChild(r)))
            }
            var e, t = 200, n = 5, o = 0, r = a("video"), i = r.style;
            if (!(Modernizr.video && "autoplay"in r))
                return void u("videoautoplay", !1);
            i.position = "absolute",
                i.height = 0,
                i.width = 0;
            try {
                if (Modernizr.video.ogg)
                    r.src = "data:video/ogg;base64,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";
                else {
                    if (!Modernizr.video.h264)
                        return void u("videoautoplay", !1);
                    r.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
                }
            } catch (l) {
                return void u("videoautoplay", !1)
            }
            r.setAttribute("autoplay", ""),
                r.style.cssText = "display:none",
                B.appendChild(r),
                setTimeout(function() {
                    r.addEventListener("playing", A, !1),
                        e = setTimeout(A, t)
                }, 0)
        });
    var Z = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function() {
        delete Z.elem
    });
    var S = {
        style: Z.elem.style
    };
    Modernizr._q.unshift(function() {
        delete S.style
    });
    R.testProp = function(A, e, n) {
        return g([A], t, e, n)
    }
    ;
    R.testAllProps = v,
        R.testAllProps = y,
        Modernizr.addTest("csstransitions", y("transition", "all", !0)),
        o(),
        r(E),
        delete R.addTest,
        delete R.addAsyncTest;
    for (var Y = 0; Y < Modernizr._q.length; Y++)
        Modernizr._q[Y]();
    A.Modernizr = Modernizr
}(window, document);
