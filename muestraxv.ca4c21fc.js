! function n(o, r, a) {
    function s(t, e) {
        if (!r[t]) {
            if (!o[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (l) return l(t, !0);
                throw (i = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", i
            }
            i = r[t] = {
                exports: {}
            }, o[t][0].call(i.exports, function(e) {
                return s(o[t][1][e] || e)
            }, i, i.exports, n, o, r, a)
        }
        return r[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < a.length; e++) s(a[e]);
    return s
}({
    1: [function(e, t, i) {
        "use strict";

        function o(e) {
            return function(e) {
                if (Array.isArray(e)) return n(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Map" === (i = "Object" === i && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
            return n
        }

        function r(e, t) {
            for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }

        function a(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
        var s, l, u, d = (s = c, (l = [{
            key: "registerWindowEvent",
            value: function() {}
        }, {
            key: "unregisterWindowEvent",
            value: function() {
                var e;
                "undefined" == typeof window || !window._zoomUpdateEvents || 0 <= (e = window._zoomUpdateEvents.indexOf(this.triggerWindowEvent)) && window._zoomUpdateEvents.splice(e, 1)
            }
        }, {
            key: "dispose",
            value: function() {
                this.recheckMode = null, this.unregisterWindowEvent()
            }
        }, {
            key: "afterRender",
            value: function(e, t) {
                var i, n, o = this;
                !t.parentElement || ((n = (i = t.parentElement.parentElement).querySelectorAll("li")) || n.length) && (this.builderApi.isInOnboarding() ? i.classList.add("kv-ee-no-animation") : i.classList.remove("kv-ee-no-animation"), this.settings.isCarouselSection ? setTimeout(function() {
                    o.checkMobileMode(i), o.setHeaderHeight(e, t)
                }, 300) : !this.builderApi.isInOnboarding() || t.offsetHeight ? (this.checkMobileMode(i), this.setHeaderHeight(e, t), window.addEventListener("resize", function() {
                    o.__resizeTimeout && window.clearTimeout(o.__resizeTimeout), o.__resizeTimeout = window.setTimeout(function() {
                        o.checkMobileMode(i), o.setHeaderHeight(e, t)
                    }, o.resizeWaitTimeout)
                }), this.recheckMode = this.builderApi.debounce(function() {
                    o.checkMobileMode(i), o.setHeaderHeight(e, t)
                }, 300)) : setTimeout(function() {
                    o.checkMobileMode(i), o.setHeaderHeight(e, t)
                }, 2e3))
            }
        }, {
            key: "setSectionPadding",
            value: function(e, t) {
                e.nextElementSibling.querySelector(".kv-background").style.top = -t + "px"
            }
        }, {
            key: "setHeaderHeightInternal",
            value: function(e, t) {
                var i = "navigation" === this.builderApi.controller.parentController.model.category && this.isRuntimeSite;
                if (0 < e.offsetHeight || i) {
                    i = this.builderApi.controller.parentController.model.layout.section.id;
                    if ("dubemo66" === i) return n = e.querySelector("header"), void(t.style.height = n.offsetHeight + "px");
                    var n = (n = e.querySelector(".kv-ee-navigation") || e.querySelector("header")).offsetHeight,
                        e = this.isPreviewOrPublishedWebsite && "navigation-1" === i && !this.settings.model._toggle["global.logo"] ? Math.ceil(n + e.offsetHeight) : Math.max(n, e.offsetHeight);
                    t.style.height = e + "px", document.documentElement.style.setProperty("--navigation-height", e + "px")
                }
            }
        }, {
            key: "setHeaderHeight",
            value: function(e, r) {
                var a = this,
                    e = e.model.isFloatingSection || !1 === e.model.cover && !0 === e.model.fixedNavigation;
                r.parentElement && e && !this.settings.isCarouselSection && function() {
                    for (var e = r.parentElement.parentElement, t = r.querySelectorAll("img"), i = 0; i < t.length; i++) {
                        var n = t[i].src,
                            o = new window.Image;
                        o.onload = function() {
                            setTimeout(function() {
                                a.setHeaderHeightInternal(r, e)
                            })
                        }, o.src = n
                    }
                    a.setHeaderHeightInternal(r, e), setTimeout(function() {
                        r.classList.contains("kv-scrolled") || a.setHeaderHeightInternal(r, e)
                    }, 1e3)
                }()
            }
        }, {
            key: "getNavigationWidth",
            value: function(e) {
                var t = 0;
                return e.forEach(function(e) {
                    t += e.offsetWidth
                }), t + 40
            }
        }, {
            key: "determineContainerWidth",
            value: function(e, t) {
                var i = e.querySelector("nav") || e,
                    n = e.querySelector('[data-dynamic-navigation-element="logo"]'),
                    o = e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),
                    o = o ? o.offsetWidth : 0,
                    n = n ? n.offsetWidth : 0,
                    i = i.offsetWidth - o;
                return {
                    containerSize: i,
                    logoWidth: n,
                    ctaWidth: o,
                    headerWith: e.offsetWidth,
                    navigationToWide: t + n + o >= e.offsetWidth - 20,
                    headerToWide: i + n >= e.offsetWidth
                }
            }
        }, {
            key: "shouldMinimizeMenu",
            value: function(e) {
                if (((null == e ? void 0 : e.clientWidth) || window.innerWidth) < this.mobileBreakpoint) return !0;
                var t = e.querySelectorAll(".kv-ee-menu-item-wrapper > li");
                this.currentElementWidth = this.getNavigationWidth(t);
                var i = this.determineContainerWidth(e, this.currentElementWidth),
                    t = i.containerSize,
                    e = i.headerToWide,
                    i = i.navigationToWide;
                return t < 100 && !this.builderApi.controller.getSiteController().hasSectionBasedNavigation() || e || i
            }
        }, {
            key: "checkMobileMode",
            value: function(e) {
                var t = (t = e.querySelector(".kv-ee-check-mobile")) || e;
                window.innerWidth < this.mobileBreakpoint ? t.classList.contains("kv-ee-mobile") || t.classList.add("kv-ee-mobile") : (t.classList.remove("kv-ee-mobile"), e = this.shouldMinimizeMenu(e), t = t.classList, e && t.add("kv-ee-mobile"), e || t.remove("kv-ee-mobile"))
            }
        }, {
            key: "updateProperty",
            value: function(e, t, i) {
                var n;
                "layout.section.id" !== t || (t = o((n = document.querySelector(".kv-page-content")).classList).find(function(e) {
                    return e.includes("with-navigation")
                })) && (n.classList.remove(t), n.classList.add("kv-ee-with-" + i))
            }
        }]) && r(s.prototype, l), u && r(s, u), c);

        function c(e, t) {
            var i = this;
            (function(e) {
                if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function")
            })(this), a(this, "getRenderModel", function() {
                return {}
            }), a(this, "triggerWindowEvent", function() {
                i.recheckMode && i.recheckMode()
            }), this.isRuntimeSite = t.isRuntimeSite, this.builderApi = e, this.currentElementWidth = 0, this.checkTimeout = 0, this.settings = t;
            e = !this.editor && window.self !== window.top;
            this.isPreviewOrPublishedWebsite = t.isRuntimeSite, this.mobileBreakpoint = 991, this.resizeWaitTimeout = e ? 0 : 300, "undefined" != typeof window && (window._zoomUpdateEvents = window._zoomUpdateEvents || [], window._zoomUpdateEvents.push(this.triggerWindowEvent))
        }
        window.__features = window.__features || {}, window.__features.navigation = d
    }, {}]
}, {}, [1]);;
! function o(r, u, i) {
    function a(n, e) {
        if (!u[n]) {
            if (!r[n]) {
                var t = "function" == typeof require && require;
                if (!e && t) return t(n, !0);
                if (c) return c(n, !0);
                throw (t = new Error("Cannot find module '" + n + "'")).code = "MODULE_NOT_FOUND", t
            }
            t = u[n] = {
                exports: {}
            }, r[n][0].call(t.exports, function(e) {
                return a(r[n][1][e] || e)
            }, t, t.exports, o, r, u, i)
        }
        return u[n].exports
    }
    for (var c = "function" == typeof require && require, e = 0; e < i.length; e++) a(i[e]);
    return a
}({
    1: [function(e, n, t) {
        "use strict";

        function o(e, n) {
            for (var t, o = 0; o < n.length; o++)(t = n[o]).enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
        var r, u, i, a = (r = c, (u = [{
            key: "initializeForSection",
            value: function() {}
        }, {
            key: "updateProperty",
            value: function() {}
        }, {
            key: "afterRender",
            value: function(e, n) {
                var t = n.querySelector('[data-type="countdown"]');
                //console.log("Inicio");
                //console.log(t.dataset.value);
                t && (n = new Date(t.dataset.value), this.startCountdown(t, n))
            }
        }, {
            key: "startCountdown",
            value: function(n, t) {
                function e() {
                    r = Date.now();
                    //console.log("La fecha es: ", Date.now()); //Mio
                    var e = o.getTimeSpan(r, t);
                    e.secondsTotal <= 0 && clearInterval(u), o.setTimespanTo(e, n)
                }
                var o = this,
                    r = Date.now(),
                    u = null,
                    u = window.setInterval(e, 1e3);
                e()
            }
        }, {
            key: "getTimeSpan",
            value: function(e, n) {
                //console.log(n-e); //Mio
                e = Math.round((n - e) / 1e3);
                //console.log("Hola");//Mio
                console.log(e);//Mio
                if(e <= -1 ){
                    //Mensaje de que ya terminó el conteo 
                }
                return {
                    secondsTotal: e = e < 0 ? 0 : e,
                    days: Math.floor(e / 86400),
                    hours: Math.floor(e / 3600) % 24,
                    minutes: Math.floor(e / 60) % 60,
                    seconds: Math.floor(e % 60)
                }
            }
        }, {
            key: "setTimespanTo",
            value: function(e, n) {
                var t = n.querySelector(".kv-ee-countdown-days .kv-ee-countdown-unit"),
                    o = n.querySelector(".kv-ee-countdown-hours .kv-ee-countdown-unit"),
                    r = n.querySelector(".kv-ee-countdown-minutes .kv-ee-countdown-unit"),
                    n = n.querySelector(".kv-ee-countdown-seconds .kv-ee-countdown-unit");
                t && (t.innerHTML = e.days || 0), o && (o.innerHTML = e.hours || 0), r && (r.innerHTML = e.minutes || 0), n && (n.innerHTML = e.seconds || 0)
            }
        }]) && o(r.prototype, u), i && o(r, i), c);

        function c(e, n) {
            (function(e) {
                if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function")
            })(this), this.builderApi = e, this.isRuntimeSite = n.isRuntimeSite
        }
        window.__features = window.__features || {}, window.__features.countdown = a
    }, {}]
}, {}, [1]);;
window._featureSettings = {
    "navigation": {
        "settings": {}
    },
    "countdown": {
        "settings": {}
    }
};