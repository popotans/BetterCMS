﻿/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
/*EDITED BY DEVBRIDGE: IF YOU NEED TO SUPPORT OLD BROWSERS OR HAVE DIFFERENT STYLES FOR ALL BROWSERS UNCOMMENT LINE #385*/

(function () {
    if (window.CKEDITOR && window.CKEDITOR.dom) return; window.CKEDITOR || (window.CKEDITOR = function () {
        var b = { timestamp: "CAPD", version: "4.0", revision: "769d96134b", rnd: Math.floor(900 * Math.random()) + 100, _: { pending: [] }, status: "unloaded", basePath: function () {
            var a = window.CKEDITOR_BASEPATH || ""; if (!a) for (var b = document.getElementsByTagName("script"), d = 0; d < b.length; d++) { var c = b[d].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i); if (c) { a = c[1]; break } } -1 == a.indexOf(":/") && (a = 0 === a.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + a : location.href.match(/^[^\?]*\/(?:)/)[0] +
a); if (!a) throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.'; return a
        } (), getUrl: function (a) { -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = this.basePath + a); this.timestamp && ("/" != a.charAt(a.length - 1) && !/[&?]t=/.test(a)) && (a += (0 <= a.indexOf("?") ? "&" : "?") + "t=" + this.timestamp); return a }, domReady: function () {
            function a() {
                try {
                    document.addEventListener ? (document.removeEventListener("DOMContentLoaded", a,
!1), b()) : document.attachEvent && "complete" === document.readyState && (document.detachEvent("onreadystatechange", a), b())
                } catch (d) { }
            } function b() { for (var a; a = d.shift(); ) a() } var d = []; return function (b) {
                d.push(b); "complete" === document.readyState && setTimeout(a, 1); if (1 == d.length) if (document.addEventListener) document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1); else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", a); window.attachEvent("onload", a); b = !1; try {
                        b =
!window.frameElement
                    } catch (e) { } if (document.documentElement.doScroll && b) { var c = function () { try { document.documentElement.doScroll("left") } catch (b) { setTimeout(c, 1); return } a() }; c() }
                }
            }
        } ()
        }, c = window.CKEDITOR_GETURL; if (c) { var a = b.url; b.url = function (f) { return c.call(b, f) || a.call(b, f) } } return b
    } ());
    CKEDITOR.event || (CKEDITOR.event = function () { }, CKEDITOR.event.implementOn = function (b) { var c = CKEDITOR.event.prototype, a; for (a in c) b[a] == void 0 && (b[a] = c[a]) }, CKEDITOR.event.prototype = function () {
        function b(f) { var b = c(this); return b[f] || (b[f] = new a(f)) } var c = function (a) { a = a.getPrivate && a.getPrivate() || a._ || (a._ = {}); return a.events || (a.events = {}) }, a = function (a) { this.name = a; this.listeners = [] }; a.prototype = { getListenerIndex: function (a) { for (var b = 0, d = this.listeners; b < d.length; b++) if (d[b].fn == a) return b; return -1 } };
        return { define: function (a, e) { var d = b.call(this, a); CKEDITOR.tools.extend(d, e, true) }, on: function (a, e, d, c, k) { function h(b, o, n, m) { b = { name: a, sender: this, editor: b, data: o, listenerData: c, stop: n, cancel: m, removeListener: l }; return e.call(d, b) === false ? false : b.data } function l() { n.removeListener(a, e) } var m = b.call(this, a); if (m.getListenerIndex(e) < 0) { m = m.listeners; d || (d = this); isNaN(k) && (k = 10); var n = this; h.fn = e; h.priority = k; for (var o = m.length - 1; o >= 0; o--) if (m[o].priority <= k) { m.splice(o + 1, 0, h); return { removeListener: l} } m.unshift(h) } return { removeListener: l} },
            once: function () { var a = arguments[1]; arguments[1] = function (b) { b.removeListener(); return a.apply(this, arguments) }; return this.on.apply(this, arguments) }, capture: function () { CKEDITOR.event.useCapture = 1; var a = this.on.apply(this, arguments); CKEDITOR.event.useCapture = 0; return a }, fire: function () {
                var a = 0, b = function () { a = 1 }, d = 0, g = function () { d = 1 }; return function (k, h, l) {
                    var m = c(this)[k], k = a, n = d; a = d = 0; if (m) {
                        var o = m.listeners; if (o.length) for (var o = o.slice(0), i, q = 0; q < o.length; q++) {
                            if (m.errorProof) try {
                                i = o[q].call(this,
l, h, b, g)
                            } catch (y) { } else i = o[q].call(this, l, h, b, g); i === false ? d = 1 : typeof i != "undefined" && (h = i); if (a || d) break
                        }
                    } h = d ? false : typeof h == "undefined" ? true : h; a = k; d = n; return h
                }
            } (), fireOnce: function (a, b, d) { b = this.fire(a, b, d); delete c(this)[a]; return b }, removeListener: function (a, b) { var d = c(this)[a]; if (d) { var g = d.getListenerIndex(b); g >= 0 && d.listeners.splice(g, 1) } }, removeAllListeners: function () { var a = c(this), b; for (b in a) delete a[b] }, hasListeners: function (a) { return (a = c(this)[a]) && a.listeners.length > 0 }
        }
    } ());
    CKEDITOR.editor || (CKEDITOR.editor = function () { CKEDITOR._.pending.push([this, arguments]); CKEDITOR.event.call(this) }, CKEDITOR.editor.prototype.fire = function (b, c) { b in { instanceReady: 1, loaded: 1} && (this[b] = true); return CKEDITOR.event.prototype.fire.call(this, b, c, this) }, CKEDITOR.editor.prototype.fireOnce = function (b, c) { b in { instanceReady: 1, loaded: 1} && (this[b] = true); return CKEDITOR.event.prototype.fireOnce.call(this, b, c, this) }, CKEDITOR.event.implementOn(CKEDITOR.editor.prototype, !0));
    CKEDITOR.env || (CKEDITOR.env = function () {
        var b = navigator.userAgent.toLowerCase(), c = window.opera, a = { ie: eval("/*@cc_on!@*/false"), opera: !!c && c.version, webkit: b.indexOf(" applewebkit/") > -1, air: b.indexOf(" adobeair/") > -1, mac: b.indexOf("macintosh") > -1, quirks: document.compatMode == "BackCompat", mobile: b.indexOf("mobile") > -1, iOS: /(ipad|iphone|ipod)/.test(b), isCustomDomain: function () { if (!this.ie) return false; var a = document.domain, b = window.location.hostname; return a != b && a != "[" + b + "]" }, secure: location.protocol ==
"https:"
        }; a.gecko = navigator.product == "Gecko" && !a.webkit && !a.opera; if (a.webkit) b.indexOf("chrome") > -1 ? a.chrome = true : a.safari = true; var f = 0; if (a.ie) { f = a.quirks || !document.documentMode ? parseFloat(b.match(/msie (\d+)/)[1]) : document.documentMode; a.ie9Compat = f == 9; a.ie8Compat = f == 8; a.ie7Compat = f == 7; a.ie6Compat = f < 7 || a.quirks } if (a.gecko) { var e = b.match(/rv:([\d\.]+)/); if (e) { e = e[1].split("."); f = e[0] * 1E4 + (e[1] || 0) * 100 + (e[2] || 0) * 1 } } a.opera && (f = parseFloat(c.version())); a.air && (f = parseFloat(b.match(/ adobeair\/(\d+)/)[1]));
        a.webkit && (f = parseFloat(b.match(/ applewebkit\/(\d+)/)[1])); a.version = f; a.isCompatible = a.iOS && f >= 534 || !a.mobile && (a.ie && f > 6 || a.gecko && f >= 10801 || a.opera && f >= 9.5 || a.air && f >= 1 || a.webkit && f >= 522 || false); a.cssClass = "cke_browser_" + (a.ie ? "ie" : a.gecko ? "gecko" : a.opera ? "opera" : a.webkit ? "webkit" : "unknown"); if (a.quirks) a.cssClass = a.cssClass + " cke_browser_quirks"; if (a.ie) { a.cssClass = a.cssClass + (" cke_browser_ie" + (a.quirks || a.version < 7 ? "6" : a.version)); if (a.quirks) a.cssClass = a.cssClass + " cke_browser_iequirks" } if (a.gecko &&
f < 10900) a.cssClass = a.cssClass + " cke_browser_gecko18"; if (a.air) a.cssClass = a.cssClass + " cke_browser_air"; return a
    } ());
    "unloaded" == CKEDITOR.status && function () {
        CKEDITOR.event.implementOn(CKEDITOR); CKEDITOR.loadFullCore = function () { if (CKEDITOR.status != "basic_ready") CKEDITOR.loadFullCore._load = 1; else { delete CKEDITOR.loadFullCore; var b = document.createElement("script"); b.type = "text/javascript"; b.src = CKEDITOR.basePath + "ckeditor.js"; document.getElementsByTagName("head")[0].appendChild(b) } }; CKEDITOR.loadFullCoreTimeout = 0; CKEDITOR.add = function (b) { (this._.pending || (this._.pending = [])).push(b) }; (function () {
            CKEDITOR.domReady(function () {
                var b =
CKEDITOR.loadFullCore, c = CKEDITOR.loadFullCoreTimeout; if (b) { CKEDITOR.status = "basic_ready"; b && b._load ? b() : c && setTimeout(function () { CKEDITOR.loadFullCore && CKEDITOR.loadFullCore() }, c * 1E3) }
            })
        })(); CKEDITOR.status = "basic_loaded"
    } (); CKEDITOR.dom = {};
    (function () {
        var b = [], c = CKEDITOR.env.gecko ? "-moz-" : CKEDITOR.env.webkit ? "-webkit-" : CKEDITOR.env.opera ? "-o-" : CKEDITOR.env.ie ? "-ms-" : ""; CKEDITOR.on("reset", function () { b = [] }); CKEDITOR.tools = { arrayCompare: function (a, b) { if (!a && !b) return true; if (!a || !b || a.length != b.length) return false; for (var e = 0; e < a.length; e++) if (a[e] != b[e]) return false; return true }, clone: function (a) {
            var b; if (a && a instanceof Array) { b = []; for (var e = 0; e < a.length; e++) b[e] = this.clone(a[e]); return b } if (a === null || typeof a != "object" || a instanceof
String || a instanceof Number || a instanceof Boolean || a instanceof Date || a instanceof RegExp) return a; b = new a.constructor; for (e in a) b[e] = this.clone(a[e]); return b
        }, capitalize: function (a) { return a.charAt(0).toUpperCase() + a.substring(1).toLowerCase() }, extend: function (a) {
            var b = arguments.length, e, d; if (typeof (e = arguments[b - 1]) == "boolean") b--; else if (typeof (e = arguments[b - 2]) == "boolean") { d = arguments[b - 1]; b = b - 2 } for (var c = 1; c < b; c++) {
                var k = arguments[c], h; for (h in k) if (e === true || a[h] == void 0) if (!d || h in d) a[h] =
k[h]
            } return a
        }, prototypedCopy: function (a) { var b = function () { }; b.prototype = a; return new b }, isArray: function (a) { return !!a && a instanceof Array }, isEmpty: function (a) { for (var b in a) if (a.hasOwnProperty(b)) return false; return true }, cssVendorPrefix: function (a, b, e) { if (e) return c + a + ":" + b + ";" + a + ":" + b; e = {}; e[a] = b; e[c + a] = b; return e }, cssStyleToDomStyle: function () {
            var a = document.createElement("div").style, b = typeof a.cssFloat != "undefined" ? "cssFloat" : typeof a.styleFloat != "undefined" ? "styleFloat" : "float"; return function (a) {
                return a ==
"float" ? b : a.replace(/-./g, function (a) { return a.substr(1).toUpperCase() })
            }
        } (), buildStyleHtml: function (a) { for (var a = [].concat(a), b, e = [], c = 0; c < a.length; c++) if (b = a[c]) /@import|[{}]/.test(b) ? e.push("<style>" + b + "</style>") : e.push('<link type="text/css" rel=stylesheet href="' + b + '">'); return e.join("") }, htmlEncode: function (a) { return ("" + a).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;") }, htmlEncodeAttr: function (a) { return a.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }, getNextNumber: function () {
            var a =
0; return function () { return ++a }
        } (), getNextId: function () { return "cke_" + this.getNextNumber() }, override: function (a, b) { var e = b(a); e.prototype = a.prototype; return e }, setTimeout: function (a, b, e, c, g) { g || (g = window); e || (e = g); return g.setTimeout(function () { c ? a.apply(e, [].concat(c)) : a.apply(e) }, b || 0) }, trim: function () { var a = /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g; return function (b) { return b.replace(a, "") } } (), ltrim: function () { var a = /^[ \t\n\r]+/g; return function (b) { return b.replace(a, "") } } (), rtrim: function () {
            var a = /[ \t\n\r]+$/g;
            return function (b) { return b.replace(a, "") }
        } (), indexOf: function (a, b) { if (typeof b == "function") for (var c = 0, d = a.length; c < d; c++) { if (b(a[c])) return c } else { if (a.indexOf) return a.indexOf(b); c = 0; for (d = a.length; c < d; c++) if (a[c] === b) return c } return -1 }, search: function (a, b) { var c = CKEDITOR.tools.indexOf(a, b); return c >= 0 ? a[c] : null }, bind: function (a, b) { return function () { return a.apply(b, arguments) } }, createClass: function (a) {
            var b = a.$, c = a.base, d = a.privates || a._, g = a.proto, a = a.statics; !b && (b = function () {
                c && this.base.apply(this,
arguments)
            }); if (d) var k = b, b = function () { var a = this._ || (this._ = {}), b; for (b in d) { var f = d[b]; a[b] = typeof f == "function" ? CKEDITOR.tools.bind(f, this) : f } k.apply(this, arguments) }; if (c) { b.prototype = this.prototypedCopy(c.prototype); b.prototype.constructor = b; b.base = c; b.baseProto = c.prototype; b.prototype.base = function () { this.base = c.prototype.base; c.apply(this, arguments); this.base = arguments.callee } } g && this.extend(b.prototype, g, true); a && this.extend(b, a, true); return b
        }, addFunction: function (a, f) {
            return b.push(function () {
                return a.apply(f ||
this, arguments)
            }) - 1
        }, removeFunction: function (a) { b[a] = null }, callFunction: function (a) { var f = b[a]; return f && f.apply(window, Array.prototype.slice.call(arguments, 1)) }, cssLength: function () { var a = /^-?\d+\.?\d*px$/, b; return function (c) { b = CKEDITOR.tools.trim(c + "") + "px"; return a.test(b) ? b : c || "" } } (), convertToPx: function () {
            var a; return function (b) {
                if (!a) {
                    a = CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"></div>', CKEDITOR.document);
                    CKEDITOR.document.getBody().append(a)
                } if (!/%$/.test(b)) { a.setStyle("width", b); return a.$.clientWidth } return b
            }
        } (), repeat: function (a, b) { return Array(b + 1).join(a) }, tryThese: function () { for (var a, b = 0, c = arguments.length; b < c; b++) { var d = arguments[b]; try { a = d(); break } catch (g) { } } return a }, genKey: function () { return Array.prototype.slice.call(arguments).join("-") }, defer: function (a) { return function () { var b = arguments, c = this; window.setTimeout(function () { a.apply(c, b) }, 0) } }, normalizeCssText: function (a, b) {
            var c = [],
d, g = CKEDITOR.tools.parseCssText(a, true, b); for (d in g) c.push(d + ":" + g[d]); c.sort(); return c.length ? c.join(";") + ";" : ""
        }, convertRgbToHex: function (a) { return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function (a, b, c, g) { a = [b, c, g]; for (b = 0; b < 3; b++) a[b] = ("0" + parseInt(a[b], 10).toString(16)).slice(-2); return "#" + a.join("") }) }, parseCssText: function (a, b, c) {
            var d = {}; if (c) { c = new CKEDITOR.dom.element("span"); c.setAttribute("style", a); a = CKEDITOR.tools.convertRgbToHex(c.getAttribute("style") || "") } if (!a ||
a == ";") return d; a.replace(/&quot;/g, '"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, c, e) { if (b) { c = c.toLowerCase(); c == "font-family" && (e = e.toLowerCase().replace(/["']/g, "").replace(/\s*,\s*/g, ",")); e = CKEDITOR.tools.trim(e) } d[c] = e }); return d
        }
        }
    })();
    CKEDITOR.dtd = function () {
        var b = CKEDITOR.tools.extend, c = function (a, b) { for (var f = CKEDITOR.tools.clone(a), o = 1; o < arguments.length; o++) { var b = arguments[o], i; for (i in b) delete f[i] } return f }, a = {}, f = {}, e = { address: 1, article: 1, aside: 1, blockquote: 1, details: 1, div: 1, dl: 1, fieldset: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, menu: 1, nav: 1, ol: 1, p: 1, pre: 1, section: 1, table: 1, ul: 1 }, d = { command: 1, link: 1, meta: 1, noscript: 1, script: 1, style: 1 }, g = {}, k = { "#": 1 }, h = { center: 1, dir: 1, noframes: 1 };
        b(a, { a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1, canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1, embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1, label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1, progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1, span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, "var": 1, video: 1, wbr: 1 }, k, { acronym: 1, applet: 1, basefont: 1, big: 1, font: 1, isindex: 1, strike: 1, style: 1, tt: 1 }); b(f, e, a, h); c = { a: c(a, { a: 1, button: 1 }), abbr: a, address: f,
            area: g, article: b({ style: 1 }, f), aside: b({ style: 1 }, f), audio: b({ source: 1, track: 1 }, f), b: a, base: g, bdi: a, bdo: a, blockquote: f, body: f, br: g, button: c(a, { a: 1, button: 1 }), canvas: a, caption: f, cite: a, code: a, col: g, colgroup: { col: 1 }, command: g, datalist: b({ option: 1 }, a), dd: f, del: a, details: b({ summary: 1 }, f), dfn: a, div: b({ style: 1 }, f), dl: { dt: 1, dd: 1 }, dt: f, em: a, embed: g, fieldset: b({ legend: 1 }, f), figcaption: f, figure: b({ figcaption: 1 }, f), footer: f, form: f, h1: a, h2: a, h3: a, h4: a, h5: a, h6: a, head: b({ title: 1, base: 1 }, d), header: f, hgroup: { h1: 1,
                h2: 1, h3: 1, h4: 1, h5: 1, h6: 1
            }, hr: g, html: b({ head: 1, body: 1 }, f, d), i: a, iframe: k, img: g, input: g, ins: a, kbd: a, keygen: g, label: a, legend: a, li: f, link: g, map: f, mark: a, menu: b({ li: 1 }, f), meta: g, meter: c(a, { meter: 1 }), nav: f, noscript: b({ link: 1, meta: 1, style: 1 }, a), object: b({ param: 1 }, a), ol: { li: 1 }, optgroup: { option: 1 }, option: k, output: a, p: a, param: g, pre: a, progress: c(a, { progress: 1 }), q: a, rp: a, rt: a, ruby: b({ rp: 1, rt: 1 }, a), s: a, samp: a, script: k, section: b({ style: 1 }, f), select: { optgroup: 1, option: 1 }, small: a, source: g, span: a, strong: a, style: k,
            sub: a, summary: a, sup: a, table: { caption: 1, colgroup: 1, thead: 1, tfoot: 1, tbody: 1, tr: 1 }, tbody: { tr: 1 }, td: f, textarea: k, tfoot: { tr: 1 }, th: f, thead: { tr: 1 }, time: c(a, { time: 1 }), title: k, tr: { th: 1, td: 1 }, track: g, u: a, ul: { li: 1 }, "var": a, video: b({ source: 1, track: 1 }, f), wbr: g, acronym: a, applet: b({ param: 1 }, f), basefont: g, big: a, center: f, dialog: g, dir: { li: 1 }, font: a, isindex: g, noframes: f, strike: a, tt: a
        }; b(c, { $block: b({ audio: 1, dd: 1, dt: 1, li: 1, video: 1 }, e, h), $blockLimit: { article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1,
            fieldset: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, menu: 1, nav: 1, ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1
        }, $cdata: { script: 1, style: 1 }, $editable: { address: 1, article: 1, aside: 1, blockquote: 1, body: 1, details: 1, div: 1, fieldset: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, nav: 1, p: 1, pre: 1, section: 1 }, $empty: { area: 1, base: 1, basefont: 1, br: 1, col: 1, command: 1, dialog: 1, embed: 1, hr: 1, img: 1, input: 1, isindex: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1, track: 1, wbr: 1 }, $inline: a, $list: { dl: 1, ol: 1,
            ul: 1
        }, $listItem: { dd: 1, dt: 1, li: 1 }, $nonBodyContent: b({ body: 1, head: 1, html: 1 }, c.head), $nonEditable: { applet: 1, audio: 1, button: 1, embed: 1, iframe: 1, map: 1, object: 1, option: 1, param: 1, script: 1, textarea: 1, video: 1 }, $object: { applet: 1, audio: 1, button: 1, hr: 1, iframe: 1, img: 1, input: 1, object: 1, select: 1, table: 1, textarea: 1, video: 1 }, $removeEmpty: { abbr: 1, acronym: 1, b: 1, bdi: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, mark: 1, meter: 1, output: 1, q: 1, ruby: 1, s: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1,
            sub: 1, sup: 1, time: 1, tt: 1, u: 1, "var": 1
        }, $tabIndex: { a: 1, area: 1, button: 1, input: 1, object: 1, select: 1, textarea: 1 }, $tableContent: { caption: 1, col: 1, colgroup: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }, $transparent: { a: 1, audio: 1, canvas: 1, del: 1, ins: 1, map: 1, noscript: 1, object: 1, video: 1 }, $intermediate: { caption: 1, colgroup: 1, dd: 1, dt: 1, figcaption: 1, legend: 1, li: 1, optgroup: 1, option: 1, rp: 1, rt: 1, summary: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }
        }); return c
    } (); CKEDITOR.dom.event = function (b) { this.$ = b };
    CKEDITOR.dom.event.prototype = { getKey: function () { return this.$.keyCode || this.$.which }, getKeystroke: function () { var b = this.getKey(); if (this.$.ctrlKey || this.$.metaKey) b = b + CKEDITOR.CTRL; this.$.shiftKey && (b = b + CKEDITOR.SHIFT); this.$.altKey && (b = b + CKEDITOR.ALT); return b }, preventDefault: function (b) { var c = this.$; c.preventDefault ? c.preventDefault() : c.returnValue = false; b && this.stopPropagation() }, stopPropagation: function () { var b = this.$; b.stopPropagation ? b.stopPropagation() : b.cancelBubble = true }, getTarget: function () {
        var b =
this.$.target || this.$.srcElement; return b ? new CKEDITOR.dom.node(b) : null
    }, getPhase: function () { return this.$.eventPhase || 2 }, getPageOffset: function () { var b = this.getTarget().getDocument().$; return { x: this.$.pageX || this.$.clientX + (b.documentElement.scrollLeft || b.body.scrollLeft), y: this.$.pageY || this.$.clientY + (b.documentElement.scrollTop || b.body.scrollTop)} }
    }; CKEDITOR.CTRL = 1114112; CKEDITOR.SHIFT = 2228224; CKEDITOR.ALT = 4456448; CKEDITOR.EVENT_PHASE_CAPTURING = 1; CKEDITOR.EVENT_PHASE_AT_TARGET = 2;
    CKEDITOR.EVENT_PHASE_BUBBLING = 3; CKEDITOR.dom.domObject = function (b) { if (b) this.$ = b };
    CKEDITOR.dom.domObject.prototype = function () {
        var b = function (b, a) { return function (f) { typeof CKEDITOR != "undefined" && b.fire(a, new CKEDITOR.dom.event(f)) } }; return { getPrivate: function () { var b; if (!(b = this.getCustomData("_"))) this.setCustomData("_", b = {}); return b }, on: function (c) {
            var a = this.getCustomData("_cke_nativeListeners"); if (!a) { a = {}; this.setCustomData("_cke_nativeListeners", a) } if (!a[c]) {
                a = a[c] = b(this, c); this.$.addEventListener ? this.$.addEventListener(c, a, !!CKEDITOR.event.useCapture) : this.$.attachEvent &&
this.$.attachEvent("on" + c, a)
            } return CKEDITOR.event.prototype.on.apply(this, arguments)
        }, removeListener: function (b) { CKEDITOR.event.prototype.removeListener.apply(this, arguments); if (!this.hasListeners(b)) { var a = this.getCustomData("_cke_nativeListeners"), f = a && a[b]; if (f) { this.$.removeEventListener ? this.$.removeEventListener(b, f, false) : this.$.detachEvent && this.$.detachEvent("on" + b, f); delete a[b] } } }, removeAllListeners: function () {
            var b = this.getCustomData("_cke_nativeListeners"), a; for (a in b) {
                var f = b[a]; this.$.detachEvent ?
this.$.detachEvent("on" + a, f) : this.$.removeEventListener && this.$.removeEventListener(a, f, false); delete b[a]
            }
        }
        }
    } ();
    (function (b) {
        var c = {}; CKEDITOR.on("reset", function () { c = {} }); b.equals = function (a) { try { return a && a.$ === this.$ } catch (b) { return false } }; b.setCustomData = function (a, b) { var e = this.getUniqueId(); (c[e] || (c[e] = {}))[a] = b; return this }; b.getCustomData = function (a) { var b = this.$["data-cke-expando"]; return (b = b && c[b]) && a in b ? b[a] : null }; b.removeCustomData = function (a) { var b = this.$["data-cke-expando"], b = b && c[b], e, d; if (b) { e = b[a]; d = a in b; delete b[a] } return d ? e : null }; b.clearCustomData = function () {
            this.removeAllListeners();
            var a = this.$["data-cke-expando"]; a && delete c[a]
        }; b.getUniqueId = function () { return this.$["data-cke-expando"] || (this.$["data-cke-expando"] = CKEDITOR.tools.getNextNumber()) }; CKEDITOR.event.implementOn(b)
    })(CKEDITOR.dom.domObject.prototype);
    CKEDITOR.dom.node = function (b) { return b ? new CKEDITOR.dom[b.nodeType == CKEDITOR.NODE_DOCUMENT ? "document" : b.nodeType == CKEDITOR.NODE_ELEMENT ? "element" : b.nodeType == CKEDITOR.NODE_TEXT ? "text" : b.nodeType == CKEDITOR.NODE_COMMENT ? "comment" : b.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT ? "documentFragment" : "domObject"](b) : this }; CKEDITOR.dom.node.prototype = new CKEDITOR.dom.domObject; CKEDITOR.NODE_ELEMENT = 1; CKEDITOR.NODE_DOCUMENT = 9; CKEDITOR.NODE_TEXT = 3; CKEDITOR.NODE_COMMENT = 8; CKEDITOR.NODE_DOCUMENT_FRAGMENT = 11;
    CKEDITOR.POSITION_IDENTICAL = 0; CKEDITOR.POSITION_DISCONNECTED = 1; CKEDITOR.POSITION_FOLLOWING = 2; CKEDITOR.POSITION_PRECEDING = 4; CKEDITOR.POSITION_IS_CONTAINED = 8; CKEDITOR.POSITION_CONTAINS = 16;
    CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype, { appendTo: function (b, c) { b.append(this, c); return b }, clone: function (b, c) { var a = this.$.cloneNode(b), f = function (a) { a["data-cke-expando"] && (a["data-cke-expando"] = false); if (a.nodeType == CKEDITOR.NODE_ELEMENT) { c || a.removeAttribute("id", false); if (b) for (var a = a.childNodes, d = 0; d < a.length; d++) f(a[d]) } }; f(a); return new CKEDITOR.dom.node(a) }, hasPrevious: function () { return !!this.$.previousSibling }, hasNext: function () { return !!this.$.nextSibling }, insertAfter: function (b) {
        b.$.parentNode.insertBefore(this.$,
b.$.nextSibling); return b
    }, insertBefore: function (b) { b.$.parentNode.insertBefore(this.$, b.$); return b }, insertBeforeMe: function (b) { this.$.parentNode.insertBefore(b.$, this.$); return b }, getAddress: function (b) { for (var c = [], a = this.getDocument().$.documentElement, f = this.$; f && f != a; ) { var e = f.parentNode; e && c.unshift(this.getIndex.call({ $: f }, b)); f = e } return c }, getDocument: function () { return new CKEDITOR.dom.document(this.$.ownerDocument || this.$.parentNode.ownerDocument) }, getIndex: function (b) {
        var c = this.$, a = -1,
f; if (!this.$.parentNode) return a; do if (!b || !(c != this.$ && c.nodeType == CKEDITOR.NODE_TEXT && (f || !c.nodeValue))) { a++; f = c.nodeType == CKEDITOR.NODE_TEXT } while (c = c.previousSibling); return a
    }, getNextSourceNode: function (b, c, a) {
        if (a && !a.call) var f = a, a = function (a) { return !a.equals(f) }; var b = !b && this.getFirst && this.getFirst(), e; if (!b) { if (this.type == CKEDITOR.NODE_ELEMENT && a && a(this, true) === false) return null; b = this.getNext() } for (; !b && (e = (e || this).getParent()); ) { if (a && a(e, true) === false) return null; b = e.getNext() } return !b ||
a && a(b) === false ? null : c && c != b.type ? b.getNextSourceNode(false, c, a) : b
    }, getPreviousSourceNode: function (b, c, a) { if (a && !a.call) var f = a, a = function (a) { return !a.equals(f) }; var b = !b && this.getLast && this.getLast(), e; if (!b) { if (this.type == CKEDITOR.NODE_ELEMENT && a && a(this, true) === false) return null; b = this.getPrevious() } for (; !b && (e = (e || this).getParent()); ) { if (a && a(e, true) === false) return null; b = e.getPrevious() } return !b || a && a(b) === false ? null : c && b.type != c ? b.getPreviousSourceNode(false, c, a) : b }, getPrevious: function (b) {
        var c =
this.$, a; do a = (c = c.previousSibling) && c.nodeType != 10 && new CKEDITOR.dom.node(c); while (a && b && !b(a)); return a
    }, getNext: function (b) { var c = this.$, a; do a = (c = c.nextSibling) && new CKEDITOR.dom.node(c); while (a && b && !b(a)); return a }, getParent: function (b) { var c = this.$.parentNode; return c && (c.nodeType == CKEDITOR.NODE_ELEMENT || b && c.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) ? new CKEDITOR.dom.node(c) : null }, getParents: function (b) { var c = this, a = []; do a[b ? "push" : "unshift"](c); while (c = c.getParent()); return a }, getCommonAncestor: function (b) {
        if (b.equals(this)) return this;
        if (b.contains && b.contains(this)) return b; var c = this.contains ? this : this.getParent(); do if (c.contains(b)) return c; while (c = c.getParent()); return null
    }, getPosition: function (b) {
        var c = this.$, a = b.$; if (c.compareDocumentPosition) return c.compareDocumentPosition(a); if (c == a) return CKEDITOR.POSITION_IDENTICAL; if (this.type == CKEDITOR.NODE_ELEMENT && b.type == CKEDITOR.NODE_ELEMENT) {
            if (c.contains) {
                if (c.contains(a)) return CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING; if (a.contains(c)) return CKEDITOR.POSITION_IS_CONTAINED +
CKEDITOR.POSITION_FOLLOWING
            } if ("sourceIndex" in c) return c.sourceIndex < 0 || a.sourceIndex < 0 ? CKEDITOR.POSITION_DISCONNECTED : c.sourceIndex < a.sourceIndex ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING
        } for (var c = this.getAddress(), b = b.getAddress(), a = Math.min(c.length, b.length), f = 0; f <= a - 1; f++) if (c[f] != b[f]) { if (f < a) return c[f] < b[f] ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING; break } return c.length < b.length ? CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_IS_CONTAINED +
CKEDITOR.POSITION_FOLLOWING
    }, getAscendant: function (b, c) { var a = this.$, f; if (!c) a = a.parentNode; for (; a; ) { if (a.nodeName && (f = a.nodeName.toLowerCase(), typeof b == "string" ? f == b : f in b)) return new CKEDITOR.dom.node(a); a = a.parentNode } return null }, hasAscendant: function (b, c) { var a = this.$; if (!c) a = a.parentNode; for (; a; ) { if (a.nodeName && a.nodeName.toLowerCase() == b) return true; a = a.parentNode } return false }, move: function (b, c) { b.append(this.remove(), c) }, remove: function (b) {
        var c = this.$, a = c.parentNode; if (a) {
            if (b) for (; b =
c.firstChild; ) a.insertBefore(c.removeChild(b), c); a.removeChild(c)
        } return this
    }, replace: function (b) { this.insertBefore(b); b.remove() }, trim: function () { this.ltrim(); this.rtrim() }, ltrim: function () { for (var b; this.getFirst && (b = this.getFirst()); ) { if (b.type == CKEDITOR.NODE_TEXT) { var c = CKEDITOR.tools.ltrim(b.getText()), a = b.getLength(); if (c) { if (c.length < a) { b.split(a - c.length); this.$.removeChild(this.$.firstChild) } } else { b.remove(); continue } } break } }, rtrim: function () {
        for (var b; this.getLast && (b = this.getLast()); ) {
            if (b.type ==
CKEDITOR.NODE_TEXT) { var c = CKEDITOR.tools.rtrim(b.getText()), a = b.getLength(); if (c) { if (c.length < a) { b.split(c.length); this.$.lastChild.parentNode.removeChild(this.$.lastChild) } } else { b.remove(); continue } } break
        } if (!CKEDITOR.env.ie && !CKEDITOR.env.opera) (b = this.$.lastChild) && (b.type == 1 && b.nodeName.toLowerCase() == "br") && b.parentNode.removeChild(b)
    }, isReadOnly: function () {
        var b = this; this.type != CKEDITOR.NODE_ELEMENT && (b = this.getParent()); if (b && typeof b.$.isContentEditable != "undefined") return !(b.$.isContentEditable ||
b.data("cke-editable")); for (; b; ) { if (b.data("cke-editable")) break; if (b.getAttribute("contentEditable") == "false") return true; if (b.getAttribute("contentEditable") == "true") break; b = b.getParent() } return !b
    }
    }); CKEDITOR.dom.window = function (b) { CKEDITOR.dom.domObject.call(this, b) }; CKEDITOR.dom.window.prototype = new CKEDITOR.dom.domObject;
    CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype, { focus: function () { this.$.focus() }, getViewPaneSize: function () { var b = this.$.document, c = b.compatMode == "CSS1Compat"; return { width: (c ? b.documentElement.clientWidth : b.body.clientWidth) || 0, height: (c ? b.documentElement.clientHeight : b.body.clientHeight) || 0} }, getScrollPosition: function () {
        var b = this.$; if ("pageXOffset" in b) return { x: b.pageXOffset || 0, y: b.pageYOffset || 0 }; b = b.document; return { x: b.documentElement.scrollLeft || b.body.scrollLeft || 0, y: b.documentElement.scrollTop ||
b.body.scrollTop || 0
        }
    }, getFrame: function () { var b = this.$.frameElement; return b ? new CKEDITOR.dom.element.get(b) : null }
    }); CKEDITOR.dom.document = function (b) { CKEDITOR.dom.domObject.call(this, b) }; CKEDITOR.dom.document.prototype = new CKEDITOR.dom.domObject;
    CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype, { type: CKEDITOR.NODE_DOCUMENT, appendStyleSheet: function (b) { if (this.$.createStyleSheet) this.$.createStyleSheet(b); else { var c = new CKEDITOR.dom.element("link"); c.setAttributes({ rel: "stylesheet", type: "text/css", href: b }); this.getHead().append(c) } }, appendStyleText: function (b) {
        if (this.$.createStyleSheet) { var c = this.$.createStyleSheet(""); c.cssText = b } else { var a = new CKEDITOR.dom.element("style", this); a.append(new CKEDITOR.dom.text(b, this)); this.getHead().append(a) } return c ||
a.$.sheet
    }, createElement: function (b, c) { var a = new CKEDITOR.dom.element(b, this); if (c) { c.attributes && a.setAttributes(c.attributes); c.styles && a.setStyles(c.styles) } return a }, createText: function (b) { return new CKEDITOR.dom.text(b, this) }, focus: function () { this.getWindow().focus() }, getActive: function () { return new CKEDITOR.dom.element(this.$.activeElement) }, getById: function (b) { return (b = this.$.getElementById(b)) ? new CKEDITOR.dom.element(b) : null }, getByAddress: function (b, c) {
        for (var a = this.$.documentElement, f =
0; a && f < b.length; f++) { var e = b[f]; if (c) for (var d = -1, g = 0; g < a.childNodes.length; g++) { var k = a.childNodes[g]; if (!(c === true && k.nodeType == 3 && k.previousSibling && k.previousSibling.nodeType == 3)) { d++; if (d == e) { a = k; break } } } else a = a.childNodes[e] } return a ? new CKEDITOR.dom.node(a) : null
    }, getElementsByTag: function (b, c) { if ((!CKEDITOR.env.ie || document.documentMode > 8) && c) b = c + ":" + b; return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(b)) }, getHead: function () {
        var b = this.$.getElementsByTagName("head")[0]; return b =
b ? new CKEDITOR.dom.element(b) : this.getDocumentElement().append(new CKEDITOR.dom.element("head"), true)
    }, getBody: function () { return new CKEDITOR.dom.element(this.$.body) }, getDocumentElement: function () { return new CKEDITOR.dom.element(this.$.documentElement) }, getWindow: function () { var b = new CKEDITOR.dom.window(this.$.parentWindow || this.$.defaultView); return (this.getWindow = function () { return b })() }, write: function (b) {
        this.$.open("text/html", "replace"); CKEDITOR.env.isCustomDomain() && (this.$.domain = document.domain);
        this.$.write(b); this.$.close()
    }
    }); CKEDITOR.dom.nodeList = function (b) { this.$ = b }; CKEDITOR.dom.nodeList.prototype = { count: function () { return this.$.length }, getItem: function (b) { if (b < 0 || b >= this.$.length) return null; return (b = this.$[b]) ? new CKEDITOR.dom.node(b) : null } }; CKEDITOR.dom.element = function (b, c) { typeof b == "string" && (b = (c ? c.$ : document).createElement(b)); CKEDITOR.dom.domObject.call(this, b) };
    CKEDITOR.dom.element.get = function (b) { return (b = typeof b == "string" ? document.getElementById(b) || document.getElementsByName(b)[0] : b) && (b.$ ? b : new CKEDITOR.dom.element(b)) }; CKEDITOR.dom.element.prototype = new CKEDITOR.dom.node; CKEDITOR.dom.element.createFromHtml = function (b, c) { var a = new CKEDITOR.dom.element("div", c); a.setHtml(b); return a.getFirst().remove() };
    CKEDITOR.dom.element.setMarker = function (b, c, a, f) { var e = c.getCustomData("list_marker_id") || c.setCustomData("list_marker_id", CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"), d = c.getCustomData("list_marker_names") || c.setCustomData("list_marker_names", {}).getCustomData("list_marker_names"); b[e] = c; d[a] = 1; return c.setCustomData(a, f) }; CKEDITOR.dom.element.clearAllMarkers = function (b) { for (var c in b) CKEDITOR.dom.element.clearMarkers(b, b[c], 1) };
    CKEDITOR.dom.element.clearMarkers = function (b, c, a) { var f = c.getCustomData("list_marker_names"), e = c.getCustomData("list_marker_id"), d; for (d in f) c.removeCustomData(d); c.removeCustomData("list_marker_names"); if (a) { c.removeCustomData("list_marker_id"); delete b[e] } };
    (function () {
        function b(a) { for (var b = 0, e = 0, d = c[a].length; e < d; e++) b = b + (parseInt(this.getComputedStyle(c[a][e]) || 0, 10) || 0); return b } CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, { type: CKEDITOR.NODE_ELEMENT, addClass: function (a) { var b = this.$.className; b && (RegExp("(?:^|\\s)" + a + "(?:\\s|$)", "").test(b) || (b = b + (" " + a))); this.$.className = b || a }, removeClass: function (a) {
            var b = this.getAttribute("class"); if (b) {
                a = RegExp("(?:^|\\s+)" + a + "(?=\\s|$)", "i"); if (a.test(b)) (b = b.replace(a, "").replace(/^\s+/, "")) ? this.setAttribute("class",
b) : this.removeAttribute("class")
            } return this
        }, hasClass: function (a) { return RegExp("(?:^|\\s+)" + a + "(?=\\s|$)", "").test(this.getAttribute("class")) }, append: function (a, b) { typeof a == "string" && (a = this.getDocument().createElement(a)); b ? this.$.insertBefore(a.$, this.$.firstChild) : this.$.appendChild(a.$); return a }, appendHtml: function (a) { if (this.$.childNodes.length) { var b = new CKEDITOR.dom.element("div", this.getDocument()); b.setHtml(a); b.moveChildren(this) } else this.setHtml(a) }, appendText: function (a) {
            this.$.text !=
void 0 ? this.$.text = this.$.text + a : this.append(new CKEDITOR.dom.text(a))
        }, appendBogus: function () { for (var a = this.getLast(); a && a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.rtrim(a.getText()); ) a = a.getPrevious(); if (!a || !a.is || !a.is("br")) { a = CKEDITOR.env.opera ? this.getDocument().createText("") : this.getDocument().createElement("br"); CKEDITOR.env.gecko && a.setAttribute("type", "_moz"); this.append(a) } }, breakParent: function (a) {
            var b = new CKEDITOR.dom.range(this.getDocument()); b.setStartAfter(this); b.setEndAfter(a);
            a = b.extractContents(); b.insertNode(this.remove()); a.insertAfterNode(this)
        }, contains: CKEDITOR.env.ie || CKEDITOR.env.webkit ? function (a) { var b = this.$; return a.type != CKEDITOR.NODE_ELEMENT ? b.contains(a.getParent().$) : b != a.$ && b.contains(a.$) } : function (a) { return !!(this.$.compareDocumentPosition(a.$) & 16) }, focus: function () { function a() { try { this.$.focus() } catch (a) { } } return function (b) { b ? CKEDITOR.tools.setTimeout(a, 100, this) : a.call(this) } } (), getHtml: function () {
            var a = this.$.innerHTML; return CKEDITOR.env.ie ? a.replace(/<\?[^>]*>/g,
"") : a
        }, getOuterHtml: function () { if (this.$.outerHTML) return this.$.outerHTML.replace(/<\?[^>]*>/, ""); var a = this.$.ownerDocument.createElement("div"); a.appendChild(this.$.cloneNode(true)); return a.innerHTML }, getClientRect: function () { var a = CKEDITOR.tools.extend({}, this.$.getBoundingClientRect()); !a.width && (a.width = a.right - a.left); !a.height && (a.height = a.bottom - a.top); return a }, setHtml: function () {
            var a = function (a) { return this.$.innerHTML = a }; return CKEDITOR.env.ie && CKEDITOR.env.version < 9 ? function (a) {
                try {
                    return this.$.innerHTML =
a
                } catch (b) { this.$.innerHTML = ""; var c = new CKEDITOR.dom.element("body", this.getDocument()); c.$.innerHTML = a; for (c = c.getChildren(); c.count(); ) this.append(c.getItem(0)); return a }
            } : a
        } (), setText: function (a) { CKEDITOR.dom.element.prototype.setText = this.$.innerText != void 0 ? function (a) { return this.$.innerText = a } : function (a) { return this.$.textContent = a }; return this.setText(a) }, getAttribute: function () {
            var a = function (a) { return this.$.getAttribute(a, 2) }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) ?
function (a) {
    switch (a) {
        case "class": a = "className"; break; case "http-equiv": a = "httpEquiv"; break; case "name": return this.$.name; case "tabindex": a = this.$.getAttribute(a, 2); a !== 0 && this.$.tabIndex === 0 && (a = null); return a; case "checked": a = this.$.attributes.getNamedItem(a); return (a.specified ? a.nodeValue : this.$.checked) ? "checked" : null; case "hspace": case "value": return this.$[a]; case "style": return this.$.style.cssText; case "contenteditable": case "contentEditable": return this.$.attributes.getNamedItem("contentEditable").specified ?
this.$.getAttribute("contentEditable") : null
    } return this.$.getAttribute(a, 2)
} : a
        } (), getChildren: function () { return new CKEDITOR.dom.nodeList(this.$.childNodes) }, getComputedStyle: CKEDITOR.env.ie ? function (a) { return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)] } : function (a) { var b = this.getWindow().$.getComputedStyle(this.$, null); return b ? b.getPropertyValue(a) : "" }, getDtd: function () { var a = CKEDITOR.dtd[this.getName()]; this.getDtd = function () { return a }; return a }, getElementsByTag: CKEDITOR.dom.document.prototype.getElementsByTag,
            getTabIndex: CKEDITOR.env.ie ? function () { var a = this.$.tabIndex; a === 0 && (!CKEDITOR.dtd.$tabIndex[this.getName()] && parseInt(this.getAttribute("tabindex"), 10) !== 0) && (a = -1); return a } : CKEDITOR.env.webkit ? function () { var a = this.$.tabIndex; if (a == void 0) { a = parseInt(this.getAttribute("tabindex"), 10); isNaN(a) && (a = -1) } return a } : function () { return this.$.tabIndex }, getText: function () { return this.$.textContent || this.$.innerText || "" }, getWindow: function () { return this.getDocument().getWindow() }, getId: function () {
                return this.$.id ||
null
            }, getNameAtt: function () { return this.$.name || null }, getName: function () { var a = this.$.nodeName.toLowerCase(); if (CKEDITOR.env.ie && !(document.documentMode > 8)) { var b = this.$.scopeName; b != "HTML" && (a = b.toLowerCase() + ":" + a) } return (this.getName = function () { return a })() }, getValue: function () { return this.$.value }, getFirst: function (a) { var b = this.$.firstChild; (b = b && new CKEDITOR.dom.node(b)) && (a && !a(b)) && (b = b.getNext(a)); return b }, getLast: function (a) {
                var b = this.$.lastChild; (b = b && new CKEDITOR.dom.node(b)) && (a && !a(b)) &&
(b = b.getPrevious(a)); return b
            }, getStyle: function (a) { return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] }, is: function () { var a = this.getName(); if (typeof arguments[0] == "object") return !!arguments[0][a]; for (var b = 0; b < arguments.length; b++) if (arguments[b] == a) return true; return false }, isEditable: function (a) {
                var b = this.getName(); if (this.isReadOnly() || this.getComputedStyle("display") == "none" || this.getComputedStyle("visibility") == "hidden" || CKEDITOR.dtd.$nonEditable[b] || CKEDITOR.dtd.$empty[b] || this.is("a") &&
(this.data("cke-saved-name") || this.hasAttribute("name")) && !this.getChildCount()) return false; if (a !== false) { a = CKEDITOR.dtd[b] || CKEDITOR.dtd.span; return !(!a || !a["#"]) } return true
            }, isIdentical: function (a) {
                var b = this.clone(0, 1), a = a.clone(0, 1); b.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]); a.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]); if (b.$.isEqualNode) {
                    b.$.style.cssText = CKEDITOR.tools.normalizeCssText(b.$.style.cssText);
                    a.$.style.cssText = CKEDITOR.tools.normalizeCssText(a.$.style.cssText); return b.$.isEqualNode(a.$)
                } b = b.getOuterHtml(); a = a.getOuterHtml(); if (CKEDITOR.env.ie && CKEDITOR.env.version < 9 && this.is("a")) { var c = this.getParent(); if (c.type == CKEDITOR.NODE_ELEMENT) { c = c.clone(); c.setHtml(b); b = c.getHtml(); c.setHtml(a); a = c.getHtml() } } return b == a
            }, isVisible: function () {
                var a = (this.$.offsetHeight || this.$.offsetWidth) && this.getComputedStyle("visibility") != "hidden", b, c; if (a && (CKEDITOR.env.webkit || CKEDITOR.env.opera)) {
                    b =
this.getWindow(); if (!b.equals(CKEDITOR.document.getWindow()) && (c = b.$.frameElement)) a = (new CKEDITOR.dom.element(c)).isVisible()
                } return !!a
            }, isEmptyInlineRemoveable: function () { if (!CKEDITOR.dtd.$removeEmpty[this.getName()]) return false; for (var a = this.getChildren(), b = 0, c = a.count(); b < c; b++) { var d = a.getItem(b); if (!(d.type == CKEDITOR.NODE_ELEMENT && d.data("cke-bookmark")) && (d.type == CKEDITOR.NODE_ELEMENT && !d.isEmptyInlineRemoveable() || d.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(d.getText()))) return false } return true },
            hasAttributes: CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) ? function () { for (var a = this.$.attributes, b = 0; b < a.length; b++) { var c = a[b]; switch (c.nodeName) { case "class": if (this.getAttribute("class")) return true; case "data-cke-expando": continue; default: if (c.specified) return true } } return false } : function () { var a = this.$.attributes, b = a.length, c = { "data-cke-expando": 1, _moz_dirty: 1 }; return b > 0 && (b > 2 || !c[a[0].nodeName] || b == 2 && !c[a[1].nodeName]) }, hasAttribute: function () {
                function a(a) {
                    a = this.$.attributes.getNamedItem(a);
                    return !(!a || !a.specified)
                } return CKEDITOR.env.ie && CKEDITOR.env.version < 8 ? function (b) { return b == "name" ? !!this.$.name : a.call(this, b) } : a
            } (), hide: function () { this.setStyle("display", "none") }, moveChildren: function (a, b) { var c = this.$, a = a.$; if (c != a) { var d; if (b) for (; d = c.lastChild; ) a.insertBefore(c.removeChild(d), a.firstChild); else for (; d = c.firstChild; ) a.appendChild(c.removeChild(d)) } }, mergeSiblings: function () {
                function a(a, b, c) {
                    if (b && b.type == CKEDITOR.NODE_ELEMENT) {
                        for (var g = []; b.data("cke-bookmark") || b.isEmptyInlineRemoveable(); ) {
                            g.push(b);
                            b = c ? b.getNext() : b.getPrevious(); if (!b || b.type != CKEDITOR.NODE_ELEMENT) return
                        } if (a.isIdentical(b)) { for (var k = c ? a.getLast() : a.getFirst(); g.length; ) g.shift().move(a, !c); b.moveChildren(a, !c); b.remove(); k && k.type == CKEDITOR.NODE_ELEMENT && k.mergeSiblings() }
                    }
                } return function (b) { if (b === false || CKEDITOR.dtd.$removeEmpty[this.getName()] || this.is("a")) { a(this, this.getNext(), true); a(this, this.getPrevious()) } }
            } (), show: function () { this.setStyles({ display: "", visibility: "" }) }, setAttribute: function () {
                var a = function (a,
b) { this.$.setAttribute(a, b); return this }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) ? function (b, c) { b == "class" ? this.$.className = c : b == "style" ? this.$.style.cssText = c : b == "tabindex" ? this.$.tabIndex = c : b == "checked" ? this.$.checked = c : b == "contenteditable" ? a.call(this, "contentEditable", c) : a.apply(this, arguments); return this } : CKEDITOR.env.ie8Compat && CKEDITOR.env.secure ? function (b, c) {
    if (b == "src" && c.match(/^http:\/\//)) try { a.apply(this, arguments) } catch (d) { } else a.apply(this, arguments);
    return this
} : a
            } (), setAttributes: function (a) { for (var b in a) this.setAttribute(b, a[b]); return this }, setValue: function (a) { this.$.value = a; return this }, removeAttribute: function () { var a = function (a) { this.$.removeAttribute(a) }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) ? function (a) { a == "class" ? a = "className" : a == "tabindex" ? a = "tabIndex" : a == "contenteditable" && (a = "contentEditable"); this.$.removeAttribute(a) } : a } (), removeAttributes: function (a) {
                if (CKEDITOR.tools.isArray(a)) for (var b = 0; b <
a.length; b++) this.removeAttribute(a[b]); else for (b in a) a.hasOwnProperty(b) && this.removeAttribute(b)
            }, removeStyle: function (a) {
                var b = this.$.style; if (!b.removeProperty && (a == "border" || a == "margin" || a == "padding")) { var c = ["top", "left", "right", "bottom"], d; a == "border" && (d = ["color", "style", "width"]); for (var b = [], g = 0; g < c.length; g++) if (d) for (var k = 0; k < d.length; k++) b.push([a, c[g], d[k]].join("-")); else b.push([a, c[g]].join("-")); for (a = 0; a < b.length; a++) this.removeStyle(b[a]) } else {
                    b.removeProperty ? b.removeProperty(a) :
b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)); this.$.style.cssText || this.removeAttribute("style")
                }
            }, setStyle: function (a, b) { this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] = b; return this }, setStyles: function (a) { for (var b in a) this.setStyle(b, a[b]); return this }, setOpacity: function (a) { if (CKEDITOR.env.ie && CKEDITOR.env.version < 9) { a = Math.round(a * 100); this.setStyle("filter", a >= 100 ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity=" + a + ")") } else this.setStyle("opacity", a) }, unselectable: function () {
                this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select",
"none")); if (CKEDITOR.env.ie || CKEDITOR.env.opera) { this.setAttribute("unselectable", "on"); for (var a, b = this.getElementsByTag("*"), c = 0, d = b.count(); c < d; c++) { a = b.getItem(c); a.setAttribute("unselectable", "on") } }
            }, getPositionedAncestor: function () { for (var a = this; a.getName() != "html"; ) { if (a.getComputedStyle("position") != "static") return a; a = a.getParent() } return null }, getDocumentPosition: function (a) {
                var b = 0, c = 0, d = this.getDocument(), g = d.getBody(), k = d.$.compatMode == "BackCompat"; if (document.documentElement.getBoundingClientRect) {
                    var h =
this.$.getBoundingClientRect(), l = d.$.documentElement, m = l.clientTop || g.$.clientTop || 0, n = l.clientLeft || g.$.clientLeft || 0, o = true; if (CKEDITOR.env.ie) { o = d.getDocumentElement().contains(this); d = d.getBody().contains(this); o = k && d || !k && o } if (o) { b = h.left + (!k && l.scrollLeft || g.$.scrollLeft); b = b - n; c = h.top + (!k && l.scrollTop || g.$.scrollTop); c = c - m }
                } else {
                    g = this; for (d = null; g && !(g.getName() == "body" || g.getName() == "html"); ) {
                        b = b + (g.$.offsetLeft - g.$.scrollLeft); c = c + (g.$.offsetTop - g.$.scrollTop); if (!g.equals(this)) {
                            b = b + (g.$.clientLeft ||
0); c = c + (g.$.clientTop || 0)
                        } for (; d && !d.equals(g); ) { b = b - d.$.scrollLeft; c = c - d.$.scrollTop; d = d.getParent() } d = g; g = (h = g.$.offsetParent) ? new CKEDITOR.dom.element(h) : null
                    }
                } if (a) { g = this.getWindow(); d = a.getWindow(); if (!g.equals(d) && g.$.frameElement) { a = (new CKEDITOR.dom.element(g.$.frameElement)).getDocumentPosition(a); b = b + a.x; c = c + a.y } } if (!document.documentElement.getBoundingClientRect && CKEDITOR.env.gecko && !k) { b = b + (this.$.clientLeft ? 1 : 0); c = c + (this.$.clientTop ? 1 : 0) } return { x: b, y: c }
            }, scrollIntoView: function (a) {
                var b =
this.getParent(); if (b) { do { (b.$.clientWidth && b.$.clientWidth < b.$.scrollWidth || b.$.clientHeight && b.$.clientHeight < b.$.scrollHeight) && !b.is("body") && this.scrollIntoParent(b, a, 1); if (b.is("html")) { var c = b.getWindow(); try { var d = c.$.frameElement; d && (b = new CKEDITOR.dom.element(d)) } catch (g) { } } } while (b = b.getParent()) }
            }, scrollIntoParent: function (a, b, c) {
                var d, g, k, h; function l(b, o) { if (/body|html/.test(a.getName())) a.getWindow().$.scrollBy(b, o); else { a.$.scrollLeft = a.$.scrollLeft + b; a.$.scrollTop = a.$.scrollTop + o } }
                function m(a, b) { var n = { x: 0, y: 0 }; if (!a.is(o ? "body" : "html")) { var c = a.$.getBoundingClientRect(); n.x = c.left; n.y = c.top } c = a.getWindow(); if (!c.equals(b)) { c = m(CKEDITOR.dom.element.get(c.$.frameElement), b); n.x = n.x + c.x; n.y = n.y + c.y } return n } function n(a, b) { return parseInt(a.getComputedStyle("margin-" + b) || 0, 10) || 0 } !a && (a = this.getWindow()); k = a.getDocument(); var o = k.$.compatMode == "BackCompat"; a instanceof CKEDITOR.dom.window && (a = o ? k.getBody() : k.getDocumentElement()); k = a.getWindow(); g = m(this, k); var i = m(a, k), q = this.$.offsetHeight;
                d = this.$.offsetWidth; var y = a.$.clientHeight, z = a.$.clientWidth; k = g.x - n(this, "left") - i.x || 0; h = g.y - n(this, "top") - i.y || 0; d = g.x + d + n(this, "right") - (i.x + z) || 0; g = g.y + q + n(this, "bottom") - (i.y + y) || 0; if (h < 0 || g > 0) l(0, b === true ? h : b === false ? g : h < 0 ? h : g); if (c && (k < 0 || d > 0)) l(k < 0 ? k : d, 0)
            }, setState: function (a, b, c) {
                b = b || "cke"; switch (a) {
                    case CKEDITOR.TRISTATE_ON: this.addClass(b + "_on"); this.removeClass(b + "_off"); this.removeClass(b + "_disabled"); c && this.setAttribute("aria-pressed", true); c && this.removeAttribute("aria-disabled");
                        break; case CKEDITOR.TRISTATE_DISABLED: this.addClass(b + "_disabled"); this.removeClass(b + "_off"); this.removeClass(b + "_on"); c && this.setAttribute("aria-disabled", true); c && this.removeAttribute("aria-pressed"); break; default: this.addClass(b + "_off"); this.removeClass(b + "_on"); this.removeClass(b + "_disabled"); c && this.removeAttribute("aria-pressed"); c && this.removeAttribute("aria-disabled")
                }
            }, getFrameDocument: function () { var a = this.$; try { a.contentWindow.document } catch (b) { a.src = a.src } return a && new CKEDITOR.dom.document(a.contentWindow.document) },
            copyAttributes: function (a, b) { for (var c = this.$.attributes, b = b || {}, d = 0; d < c.length; d++) { var g = c[d], k = g.nodeName.toLowerCase(), h; if (!(k in b)) if (k == "checked" && (h = this.getAttribute(k))) a.setAttribute(k, h); else if (g.specified || CKEDITOR.env.ie && g.nodeValue && k == "value") { h = this.getAttribute(k); if (h === null) h = g.nodeValue; a.setAttribute(k, h) } } if (this.$.style.cssText !== "") a.$.style.cssText = this.$.style.cssText }, renameNode: function (a) {
                if (this.getName() != a) {
                    var b = this.getDocument(), a = new CKEDITOR.dom.element(a,
b); this.copyAttributes(a); this.moveChildren(a); this.getParent() && this.$.parentNode.replaceChild(a.$, this.$); a.$["data-cke-expando"] = this.$["data-cke-expando"]; this.$ = a.$
                }
            }, getChild: function () { function a(a, b) { var c = a.childNodes; if (b >= 0 && b < c.length) return c[b] } return function (b) { var c = this.$; if (b.slice) for (; b.length > 0 && c; ) c = a(c, b.shift()); else c = a(c, b); return c ? new CKEDITOR.dom.node(c) : null } } (), getChildCount: function () { return this.$.childNodes.length }, disableContextMenu: function () {
                this.on("contextmenu",
function (a) { a.data.getTarget().hasClass("cke_enable_context_menu") || a.data.preventDefault() })
            }, getDirection: function (a) { return a ? this.getComputedStyle("direction") || this.getDirection() || this.getParent() && this.getParent().getDirection(1) || this.getDocument().$.dir || "ltr" : this.getStyle("direction") || this.getAttribute("dir") }, data: function (a, b) { a = "data-" + a; if (b === void 0) return this.getAttribute(a); b === false ? this.removeAttribute(a) : this.setAttribute(a, b); return null }, getEditor: function () {
                var a = CKEDITOR.instances,
b, c; for (b in a) { c = a[b]; if (c.element.equals(this) && c.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO) return c } return null
            }
        }); var c = { width: ["border-left-width", "border-right-width", "padding-left", "padding-right"], height: ["border-top-width", "border-bottom-width", "padding-top", "padding-bottom"] }; CKEDITOR.dom.element.prototype.setSize = function (a, c, e) { if (typeof c == "number") { if (e && (!CKEDITOR.env.ie || !CKEDITOR.env.quirks)) c = c - b.call(this, a); this.setStyle(a, c + "px") } }; CKEDITOR.dom.element.prototype.getSize = function (a,
c) { var e = Math.max(this.$["offset" + CKEDITOR.tools.capitalize(a)], this.$["client" + CKEDITOR.tools.capitalize(a)]) || 0; c && (e = e - b.call(this, a)); return e }
    })(); CKEDITOR.dom.documentFragment = function (b) { b = b || CKEDITOR.document; this.$ = b.type == CKEDITOR.NODE_DOCUMENT ? b.$.createDocumentFragment() : b };
    CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype, CKEDITOR.dom.element.prototype, { type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, insertAfterNode: function (b) { b = b.$; b.parentNode.insertBefore(this.$, b.nextSibling) } }, !0, { append: 1, appendBogus: 1, getFirst: 1, getLast: 1, getParent: 1, getNext: 1, getPrevious: 1, appendTo: 1, moveChildren: 1, insertBefore: 1, insertAfterNode: 1, replace: 1, trim: 1, type: 1, ltrim: 1, rtrim: 1, getDocument: 1, getChildCount: 1, getChild: 1, getChildren: 1 });
    (function () {
        function b(a, b) {
            var c = this.range; if (this._.end) return null; if (!this._.start) { this._.start = 1; if (c.collapsed) { this.end(); return null } c.optimize() } var d, m = c.startContainer; d = c.endContainer; var n = c.startOffset, o = c.endOffset, i, q = this.guard, f = this.type, e = a ? "getPreviousSourceNode" : "getNextSourceNode"; if (!a && !this._.guardLTR) {
                var j = d.type == CKEDITOR.NODE_ELEMENT ? d : d.getParent(), s = d.type == CKEDITOR.NODE_ELEMENT ? d.getChild(o) : d.getNext(); this._.guardLTR = function (a, b) {
                    return (!b || !j.equals(a)) && (!s ||
!a.equals(s)) && (a.type != CKEDITOR.NODE_ELEMENT || !b || !a.equals(c.root))
                }
            } if (a && !this._.guardRTL) { var A = m.type == CKEDITOR.NODE_ELEMENT ? m : m.getParent(), B = m.type == CKEDITOR.NODE_ELEMENT ? n ? m.getChild(n - 1) : null : m.getPrevious(); this._.guardRTL = function (a, b) { return (!b || !A.equals(a)) && (!B || !a.equals(B)) && (a.type != CKEDITOR.NODE_ELEMENT || !b || !a.equals(c.root)) } } var p = a ? this._.guardRTL : this._.guardLTR; i = q ? function (a, b) { return p(a, b) === false ? false : q(a, b) } : p; if (this.current) d = this.current[e](false, f, i); else {
                if (a) d.type ==
CKEDITOR.NODE_ELEMENT && (d = o > 0 ? d.getChild(o - 1) : i(d, true) === false ? null : d.getPreviousSourceNode(true, f, i)); else { d = m; if (d.type == CKEDITOR.NODE_ELEMENT && !(d = d.getChild(n))) d = i(m, true) === false ? null : m.getNextSourceNode(true, f, i) } d && i(d) === false && (d = null)
            } for (; d && !this._.end; ) { this.current = d; if (!this.evaluator || this.evaluator(d) !== false) { if (!b) return d } else if (b && this.evaluator) return false; d = d[e](false, f, i) } this.end(); return this.current = null
        } function c(a) { for (var c, d = null; c = b.call(this, a); ) d = c; return d }
        CKEDITOR.dom.walker = CKEDITOR.tools.createClass({ $: function (a) { this.range = a; this._ = {} }, proto: { end: function () { this._.end = 1 }, next: function () { return b.call(this) }, previous: function () { return b.call(this, 1) }, checkForward: function () { return b.call(this, 0, 1) !== false }, checkBackward: function () { return b.call(this, 1, 1) !== false }, lastForward: function () { return c.call(this) }, lastBackward: function () { return c.call(this, 1) }, reset: function () { delete this.current; this._ = {} } } }); var a = { block: 1, "list-item": 1, table: 1, "table-row-group": 1,
            "table-header-group": 1, "table-footer-group": 1, "table-row": 1, "table-column-group": 1, "table-column": 1, "table-cell": 1, "table-caption": 1
        }; CKEDITOR.dom.element.prototype.isBlockBoundary = function (b) { b = b ? CKEDITOR.tools.extend({}, CKEDITOR.dtd.$block, b || {}) : CKEDITOR.dtd.$block; return this.getComputedStyle("float") == "none" && a[this.getComputedStyle("display")] || b[this.getName()] }; CKEDITOR.dom.walker.blockBoundary = function (a) { return function (b) { return !(b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary(a)) } }; CKEDITOR.dom.walker.listItemBoundary =
function () { return this.blockBoundary({ br: 1 }) }; CKEDITOR.dom.walker.bookmark = function (a, b) { function c(a) { return a && a.getName && a.getName() == "span" && a.data("cke-bookmark") } return function (d) { var m, n; m = d && d.type != CKEDITOR.NODE_ELEMENT && (n = d.getParent()) && c(n); m = a ? m : m || c(d); return !!(b ^ m) } }; CKEDITOR.dom.walker.whitespaces = function (a) { return function (b) { var c; b && b.type == CKEDITOR.NODE_TEXT && (c = !CKEDITOR.tools.trim(b.getText()) || CKEDITOR.env.webkit && b.getText() == "​"); return !!(a ^ c) } }; CKEDITOR.dom.walker.invisible =
function (a) { var b = CKEDITOR.dom.walker.whitespaces(); return function (c) { if (b(c)) c = 1; else { c.type == CKEDITOR.NODE_TEXT && (c = c.getParent()); c = !c.$.offsetHeight } return !!(a ^ c) } }; CKEDITOR.dom.walker.nodeType = function (a, b) { return function (c) { return !!(b ^ c.type == a) } }; CKEDITOR.dom.walker.bogus = function (a) {
    function b(a) { return !e(a) && !d(a) } return function (c) {
        var d = !CKEDITOR.env.ie ? c.is && c.is("br") : c.getText && f.test(c.getText()); if (d) {
            d = c.getParent(); c = c.getNext(b); d = d.isBlockBoundary() && (!c || c.type == CKEDITOR.NODE_ELEMENT &&
c.isBlockBoundary())
        } return !!(a ^ d)
    }
}; var f = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/, e = CKEDITOR.dom.walker.whitespaces(), d = CKEDITOR.dom.walker.bookmark(); CKEDITOR.dom.element.prototype.getBogus = function () { var a = this; do a = a.getPreviousSourceNode(); while (d(a) || e(a) || a.type == CKEDITOR.NODE_ELEMENT && a.getName() in CKEDITOR.dtd.$inline && !(a.getName() in CKEDITOR.dtd.$empty)); return a && (!CKEDITOR.env.ie ? a.is && a.is("br") : a.getText && f.test(a.getText())) ? a : false }
    })();
    CKEDITOR.dom.range = function (b) { this.endOffset = this.endContainer = this.startOffset = this.startContainer = null; this.collapsed = true; var c = b instanceof CKEDITOR.dom.document; this.document = c ? b : b.getDocument(); this.root = c ? b.getBody() : b };
    (function () {
        function b() { var a = false, b = CKEDITOR.dom.walker.whitespaces(), o = CKEDITOR.dom.walker.bookmark(true), c = CKEDITOR.dom.walker.bogus(); return function (q) { if (o(q) || b(q)) return true; if (c(q) && !a) return a = true; return q.type == CKEDITOR.NODE_TEXT && (q.hasAscendant("pre") || CKEDITOR.tools.trim(q.getText()).length) || q.type == CKEDITOR.NODE_ELEMENT && !q.is(d) ? false : true } } function c(a) {
            var b = CKEDITOR.dom.walker.whitespaces(), o = CKEDITOR.dom.walker.bookmark(1); return function (c) {
                return o(c) || b(c) ? true : !a && g(c) ||
c.type == CKEDITOR.NODE_ELEMENT && c.is(CKEDITOR.dtd.$removeEmpty)
            }
        } function a(a) { return !k(a) && !h(a) } var f = function (a) { a.collapsed = a.startContainer && a.endContainer && a.startContainer.equals(a.endContainer) && a.startOffset == a.endOffset }, e = function (a, b, o, c) {
            a.optimizeBookmark(); var d = a.startContainer, g = a.endContainer, f = a.startOffset, j = a.endOffset, e, k; if (g.type == CKEDITOR.NODE_TEXT) g = g.split(j); else if (g.getChildCount() > 0) if (j >= g.getChildCount()) { g = g.append(a.document.createText("")); k = true } else g = g.getChild(j);
            if (d.type == CKEDITOR.NODE_TEXT) { d.split(f); d.equals(g) && (g = d.getNext()) } else if (f) if (f >= d.getChildCount()) { d = d.append(a.document.createText("")); e = true } else d = d.getChild(f).getPrevious(); else { d = d.append(a.document.createText(""), 1); e = true } var f = d.getParents(), j = g.getParents(), h, p, l; for (h = 0; h < f.length; h++) { p = f[h]; l = j[h]; if (!p.equals(l)) break } for (var u = o, r, F, v, t = h; t < f.length; t++) {
                r = f[t]; u && !r.equals(d) && (F = u.append(r.clone())); for (r = r.getNext(); r; ) {
                    if (r.equals(j[t]) || r.equals(g)) break; v = r.getNext();
                    if (b == 2) u.append(r.clone(true)); else { r.remove(); b == 1 && u.append(r) } r = v
                } u && (u = F)
            } u = o; for (o = h; o < j.length; o++) { r = j[o]; b > 0 && !r.equals(g) && (F = u.append(r.clone())); if (!f[o] || r.$.parentNode != f[o].$.parentNode) for (r = r.getPrevious(); r; ) { if (r.equals(f[o]) || r.equals(d)) break; v = r.getPrevious(); if (b == 2) u.$.insertBefore(r.$.cloneNode(true), u.$.firstChild); else { r.remove(); b == 1 && u.$.insertBefore(r.$, u.$.firstChild) } r = v } u && (u = F) } if (b == 2) {
                p = a.startContainer; if (p.type == CKEDITOR.NODE_TEXT) {
                    p.$.data = p.$.data + p.$.nextSibling.data;
                    p.$.parentNode.removeChild(p.$.nextSibling)
                } a = a.endContainer; if (a.type == CKEDITOR.NODE_TEXT && a.$.nextSibling) { a.$.data = a.$.data + a.$.nextSibling.data; a.$.parentNode.removeChild(a.$.nextSibling) }
            } else {
                if (p && l && (d.$.parentNode != p.$.parentNode || g.$.parentNode != l.$.parentNode)) {
                    b = l.getIndex(); e && l.$.parentNode == d.$.parentNode && b--; if (c && p.type == CKEDITOR.NODE_ELEMENT) {
                        c = CKEDITOR.dom.element.createFromHtml('<span data-cke-bookmark="1" style="display:none">&nbsp;</span>', a.document); c.insertAfter(p); p.mergeSiblings(false);
                        a.moveToBookmark({ startNode: c })
                    } else a.setStart(l.getParent(), b)
                } a.collapse(true)
            } e && d.remove(); k && g.$.parentNode && g.remove()
        }, d = { abbr: 1, acronym: 1, b: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, q: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, tt: 1, u: 1, "var": 1 }, g = CKEDITOR.dom.walker.bogus(), k = new CKEDITOR.dom.walker.whitespaces, h = new CKEDITOR.dom.walker.bookmark, l = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/; CKEDITOR.dom.range.prototype = { clone: function () {
            var a = new CKEDITOR.dom.range(this.root);
            a.startContainer = this.startContainer; a.startOffset = this.startOffset; a.endContainer = this.endContainer; a.endOffset = this.endOffset; a.collapsed = this.collapsed; return a
        }, collapse: function (a) { if (a) { this.endContainer = this.startContainer; this.endOffset = this.startOffset } else { this.startContainer = this.endContainer; this.startOffset = this.endOffset } this.collapsed = true }, cloneContents: function () { var a = new CKEDITOR.dom.documentFragment(this.document); this.collapsed || e(this, 2, a); return a }, deleteContents: function (a) {
            this.collapsed ||
e(this, 0, null, a)
        }, extractContents: function (a) { var b = new CKEDITOR.dom.documentFragment(this.document); this.collapsed || e(this, 1, b, a); return b }, createBookmark: function (a) {
            var b, o, c, d, g = this.collapsed; b = this.document.createElement("span"); b.data("cke-bookmark", 1); b.setStyle("display", "none"); b.setHtml("&nbsp;"); if (a) { c = "cke_bm_" + CKEDITOR.tools.getNextNumber(); b.setAttribute("id", c + (g ? "C" : "S")) } if (!g) { o = b.clone(); o.setHtml("&nbsp;"); a && o.setAttribute("id", c + "E"); d = this.clone(); d.collapse(); d.insertNode(o) } d =
this.clone(); d.collapse(true); d.insertNode(b); if (o) { this.setStartAfter(b); this.setEndBefore(o) } else this.moveToPosition(b, CKEDITOR.POSITION_AFTER_END); return { startNode: a ? c + (g ? "C" : "S") : b, endNode: a ? c + "E" : o, serializable: a, collapsed: g }
        }, createBookmark2: function (a) {
            var b = this.startContainer, o = this.endContainer, c = this.startOffset, d = this.endOffset, g = this.collapsed, f, j; if (!b || !o) return { start: 0, end: 0 }; if (a) {
                if (b.type == CKEDITOR.NODE_ELEMENT) {
                    if ((f = b.getChild(c)) && f.type == CKEDITOR.NODE_TEXT && c > 0 && f.getPrevious().type ==
CKEDITOR.NODE_TEXT) { b = f; c = 0 } f && f.type == CKEDITOR.NODE_ELEMENT && (c = f.getIndex(1))
                } for (; b.type == CKEDITOR.NODE_TEXT && (j = b.getPrevious()) && j.type == CKEDITOR.NODE_TEXT; ) { b = j; c = c + j.getLength() } if (!g) { if (o.type == CKEDITOR.NODE_ELEMENT) { if ((f = o.getChild(d)) && f.type == CKEDITOR.NODE_TEXT && d > 0 && f.getPrevious().type == CKEDITOR.NODE_TEXT) { o = f; d = 0 } f && f.type == CKEDITOR.NODE_ELEMENT && (d = f.getIndex(1)) } for (; o.type == CKEDITOR.NODE_TEXT && (j = o.getPrevious()) && j.type == CKEDITOR.NODE_TEXT; ) { o = j; d = d + j.getLength() } }
            } return { start: b.getAddress(a),
                end: g ? null : o.getAddress(a), startOffset: c, endOffset: d, normalized: a, collapsed: g, is2: true
            }
        }, moveToBookmark: function (a) {
            if (a.is2) { var b = this.document.getByAddress(a.start, a.normalized), c = a.startOffset, i = a.end && this.document.getByAddress(a.end, a.normalized), a = a.endOffset; this.setStart(b, c); i ? this.setEnd(i, a) : this.collapse(true) } else {
                b = (c = a.serializable) ? this.document.getById(a.startNode) : a.startNode; a = c ? this.document.getById(a.endNode) : a.endNode; this.setStartBefore(b); b.remove(); if (a) {
                    this.setEndBefore(a);
                    a.remove()
                } else this.collapse(true)
            }
        }, getBoundaryNodes: function () {
            var a = this.startContainer, b = this.endContainer, c = this.startOffset, i = this.endOffset, d; if (a.type == CKEDITOR.NODE_ELEMENT) { d = a.getChildCount(); if (d > c) a = a.getChild(c); else if (d < 1) a = a.getPreviousSourceNode(); else { for (a = a.$; a.lastChild; ) a = a.lastChild; a = new CKEDITOR.dom.node(a); a = a.getNextSourceNode() || a } } if (b.type == CKEDITOR.NODE_ELEMENT) {
                d = b.getChildCount(); if (d > i) b = b.getChild(i).getPreviousSourceNode(true); else if (d < 1) b = b.getPreviousSourceNode();
                else { for (b = b.$; b.lastChild; ) b = b.lastChild; b = new CKEDITOR.dom.node(b) }
            } a.getPosition(b) & CKEDITOR.POSITION_FOLLOWING && (a = b); return { startNode: a, endNode: b }
        }, getCommonAncestor: function (a, b) { var c = this.startContainer, i = this.endContainer, c = c.equals(i) ? a && c.type == CKEDITOR.NODE_ELEMENT && this.startOffset == this.endOffset - 1 ? c.getChild(this.startOffset) : c : c.getCommonAncestor(i); return b && !c.is ? c.getParent() : c }, optimize: function () {
            var a = this.startContainer, b = this.startOffset; a.type != CKEDITOR.NODE_ELEMENT && (b ? b >=
a.getLength() && this.setStartAfter(a) : this.setStartBefore(a)); a = this.endContainer; b = this.endOffset; a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setEndAfter(a) : this.setEndBefore(a))
        }, optimizeBookmark: function () { var a = this.startContainer, b = this.endContainer; a.is && (a.is("span") && a.data("cke-bookmark")) && this.setStartAt(a, CKEDITOR.POSITION_BEFORE_START); b && (b.is && b.is("span") && b.data("cke-bookmark")) && this.setEndAt(b, CKEDITOR.POSITION_AFTER_END) }, trim: function (a, b) {
            var c = this.startContainer,
i = this.startOffset, d = this.collapsed; if ((!a || d) && c && c.type == CKEDITOR.NODE_TEXT) { if (i) if (i >= c.getLength()) { i = c.getIndex() + 1; c = c.getParent() } else { var g = c.split(i), i = c.getIndex() + 1, c = c.getParent(); if (this.startContainer.equals(this.endContainer)) this.setEnd(g, this.endOffset - this.startOffset); else if (c.equals(this.endContainer)) this.endOffset = this.endOffset + 1 } else { i = c.getIndex(); c = c.getParent() } this.setStart(c, i); if (d) { this.collapse(true); return } } c = this.endContainer; i = this.endOffset; if (!b && !d && c && c.type ==
CKEDITOR.NODE_TEXT) { if (i) { i >= c.getLength() || c.split(i); i = c.getIndex() + 1 } else i = c.getIndex(); c = c.getParent(); this.setEnd(c, i) }
        }, enlarge: function (a, b) {
            switch (a) {
                case CKEDITOR.ENLARGE_INLINE: var c = 1; case CKEDITOR.ENLARGE_ELEMENT: if (this.collapsed) break; var i = this.getCommonAncestor(), d = this.root, g, f, j, e, h, k = false, p, l; p = this.startContainer; l = this.startOffset; if (p.type == CKEDITOR.NODE_TEXT) { if (l) { p = !CKEDITOR.tools.trim(p.substring(0, l)).length && p; k = !!p } if (p && !(e = p.getPrevious())) j = p.getParent() } else {
                        l &&
(e = p.getChild(l - 1) || p.getLast()); e || (j = p)
                    } for (; j || e; ) {
                        if (j && !e) { !h && j.equals(i) && (h = true); if (c ? j.isBlockBoundary() : !d.contains(j)) break; if (!k || j.getComputedStyle("display") != "inline") { k = false; h ? g = j : this.setStartBefore(j) } e = j.getPrevious() } for (; e; ) {
                            p = false; if (e.type == CKEDITOR.NODE_COMMENT) e = e.getPrevious(); else {
                                if (e.type == CKEDITOR.NODE_TEXT) { l = e.getText(); /[^\s\ufeff]/.test(l) && (e = null); p = /[\s\ufeff]$/.test(l) } else if ((e.$.offsetWidth > 0 || b && e.is("br")) && !e.data("cke-bookmark")) if (k && CKEDITOR.dtd.$removeEmpty[e.getName()]) {
                                    l =
e.getText(); if (/[^\s\ufeff]/.test(l)) e = null; else for (var u = e.$.getElementsByTagName("*"), r = 0, F; F = u[r++]; ) if (!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]) { e = null; break } e && (p = !!l.length)
                                } else e = null; p && (k ? h ? g = j : j && this.setStartBefore(j) : k = true); if (e) { p = e.getPrevious(); if (!j && !p) { j = e; e = null; break } e = p } else j = null
                            }
                        } j && (j = j.getParent())
                    } p = this.endContainer; l = this.endOffset; j = e = null; h = k = false; if (p.type == CKEDITOR.NODE_TEXT) {
                        p = !CKEDITOR.tools.trim(p.substring(l)).length && p; k = !(p && p.getLength()); if (p &&
!(e = p.getNext())) j = p.getParent()
                    } else (e = p.getChild(l)) || (j = p); for (; j || e; ) {
                        if (j && !e) { !h && j.equals(i) && (h = true); if (c ? j.isBlockBoundary() : !d.contains(j)) break; if (!k || j.getComputedStyle("display") != "inline") { k = false; h ? f = j : j && this.setEndAfter(j) } e = j.getNext() } for (; e; ) {
                            p = false; if (e.type == CKEDITOR.NODE_TEXT) { l = e.getText(); /[^\s\ufeff]/.test(l) && (e = null); p = /^[\s\ufeff]/.test(l) } else if (e.type == CKEDITOR.NODE_ELEMENT) {
                                if ((e.$.offsetWidth > 0 || b && e.is("br")) && !e.data("cke-bookmark")) if (k && CKEDITOR.dtd.$removeEmpty[e.getName()]) {
                                    l =
e.getText(); if (/[^\s\ufeff]/.test(l)) e = null; else { u = e.$.getElementsByTagName("*"); for (r = 0; F = u[r++]; ) if (!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]) { e = null; break } } e && (p = !!l.length)
                                } else e = null
                            } else p = 1; p && k && (h ? f = j : this.setEndAfter(j)); if (e) { p = e.getNext(); if (!j && !p) { j = e; e = null; break } e = p } else j = null
                        } j && (j = j.getParent())
                    } if (g && f) { i = g.contains(f) ? f : g; this.setStartBefore(i); this.setEndAfter(i) } break; case CKEDITOR.ENLARGE_BLOCK_CONTENTS: case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS: j = new CKEDITOR.dom.range(this.root);
                    d = this.root; j.setStartAt(d, CKEDITOR.POSITION_AFTER_START); j.setEnd(this.startContainer, this.startOffset); j = new CKEDITOR.dom.walker(j); var v, t, w = CKEDITOR.dom.walker.blockBoundary(a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? { br: 1} : null), I = function (a) { var b = w(a); b || (v = a); return b }, c = function (a) { var b = I(a); !b && (a.is && a.is("br")) && (t = a); return b }; j.guard = I; j = j.lastBackward(); v = v || d; this.setStartAt(v, !v.is("br") && (!j && this.checkStartOfBlock() || j && v.contains(j)) ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_AFTER_END);
                    if (a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS) { j = this.clone(); j = new CKEDITOR.dom.walker(j); var G = CKEDITOR.dom.walker.whitespaces(), C = CKEDITOR.dom.walker.bookmark(); j.evaluator = function (a) { return !G(a) && !C(a) }; if ((j = j.previous()) && j.type == CKEDITOR.NODE_ELEMENT && j.is("br")) break } j = this.clone(); j.collapse(); j.setEndAt(d, CKEDITOR.POSITION_BEFORE_END); j = new CKEDITOR.dom.walker(j); j.guard = a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? c : I; v = null; j = j.lastForward(); v = v || d; this.setEndAt(v, !j && this.checkEndOfBlock() || j &&
v.contains(j) ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_BEFORE_START); t && this.setEndAfter(t)
            }
        }, shrink: function (a, b, c) {
            if (!this.collapsed) {
                var a = a || CKEDITOR.SHRINK_TEXT, i = this.clone(), d = this.startContainer, g = this.endContainer, f = this.startOffset, e = this.endOffset, k = 1, h = 1; if (d && d.type == CKEDITOR.NODE_TEXT) if (f) if (f >= d.getLength()) i.setStartAfter(d); else { i.setStartBefore(d); k = 0 } else i.setStartBefore(d); if (g && g.type == CKEDITOR.NODE_TEXT) if (e) if (e >= g.getLength()) i.setEndAfter(g); else {
                    i.setEndAfter(g);
                    h = 0
                } else i.setEndBefore(g); var i = new CKEDITOR.dom.walker(i), l = CKEDITOR.dom.walker.bookmark(); i.evaluator = function (b) { return b.type == (a == CKEDITOR.SHRINK_ELEMENT ? CKEDITOR.NODE_ELEMENT : CKEDITOR.NODE_TEXT) }; var p; i.guard = function (b, i) { if (l(b)) return true; if (a == CKEDITOR.SHRINK_ELEMENT && b.type == CKEDITOR.NODE_TEXT || i && b.equals(p) || c === false && b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary()) return false; !i && b.type == CKEDITOR.NODE_ELEMENT && (p = b); return true }; if (k) (d = i[a == CKEDITOR.SHRINK_ELEMENT ? "lastForward" :
"next"]()) && this.setStartAt(d, b ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_START); if (h) { i.reset(); (i = i[a == CKEDITOR.SHRINK_ELEMENT ? "lastBackward" : "previous"]()) && this.setEndAt(i, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_END) } return !(!k && !h)
            }
        }, insertNode: function (a) { this.optimizeBookmark(); this.trim(false, true); var b = this.startContainer, c = b.getChild(this.startOffset); c ? a.insertBefore(c) : b.append(a); a.getParent() && a.getParent().equals(this.endContainer) && this.endOffset++; this.setStartBefore(a) },
            moveToPosition: function (a, b) { this.setStartAt(a, b); this.collapse(true) }, moveToRange: function (a) { this.setStart(a.startContainer, a.startOffset); this.setEnd(a.endContainer, a.endOffset) }, selectNodeContents: function (a) { this.setStart(a, 0); this.setEnd(a, a.type == CKEDITOR.NODE_TEXT ? a.getLength() : a.getChildCount()) }, setStart: function (a, b) {
                if (a.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[a.getName()]) { b = a.getIndex(); a = a.getParent() } this.startContainer = a; this.startOffset = b; if (!this.endContainer) {
                    this.endContainer =
a; this.endOffset = b
                } f(this)
            }, setEnd: function (a, b) { if (a.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[a.getName()]) { b = a.getIndex() + 1; a = a.getParent() } this.endContainer = a; this.endOffset = b; if (!this.startContainer) { this.startContainer = a; this.startOffset = b } f(this) }, setStartAfter: function (a) { this.setStart(a.getParent(), a.getIndex() + 1) }, setStartBefore: function (a) { this.setStart(a.getParent(), a.getIndex()) }, setEndAfter: function (a) { this.setEnd(a.getParent(), a.getIndex() + 1) }, setEndBefore: function (a) {
                this.setEnd(a.getParent(),
a.getIndex())
            }, setStartAt: function (a, b) { switch (b) { case CKEDITOR.POSITION_AFTER_START: this.setStart(a, 0); break; case CKEDITOR.POSITION_BEFORE_END: a.type == CKEDITOR.NODE_TEXT ? this.setStart(a, a.getLength()) : this.setStart(a, a.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setStartBefore(a); break; case CKEDITOR.POSITION_AFTER_END: this.setStartAfter(a) } f(this) }, setEndAt: function (a, b) {
                switch (b) {
                    case CKEDITOR.POSITION_AFTER_START: this.setEnd(a, 0); break; case CKEDITOR.POSITION_BEFORE_END: a.type ==
CKEDITOR.NODE_TEXT ? this.setEnd(a, a.getLength()) : this.setEnd(a, a.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setEndBefore(a); break; case CKEDITOR.POSITION_AFTER_END: this.setEndAfter(a)
                } f(this)
            }, fixBlock: function (a, b) { var c = this.createBookmark(), i = this.document.createElement(b); this.collapse(a); this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS); this.extractContents().appendTo(i); i.trim(); CKEDITOR.env.ie || i.appendBogus(); this.insertNode(i); this.moveToBookmark(c); return i }, splitBlock: function (a) {
                var b =
new CKEDITOR.dom.elementPath(this.startContainer, this.root), c = new CKEDITOR.dom.elementPath(this.endContainer, this.root), i = b.block, d = c.block, g = null; if (!b.blockLimit.equals(c.blockLimit)) return null; if (a != "br") { if (!i) { i = this.fixBlock(true, a); d = (new CKEDITOR.dom.elementPath(this.endContainer, this.root)).block } d || (d = this.fixBlock(false, a)) } a = i && this.checkStartOfBlock(); b = d && this.checkEndOfBlock(); this.deleteContents(); if (i && i.equals(d)) if (b) {
                    g = new CKEDITOR.dom.elementPath(this.startContainer, this.root);
                    this.moveToPosition(d, CKEDITOR.POSITION_AFTER_END); d = null
                } else if (a) { g = new CKEDITOR.dom.elementPath(this.startContainer, this.root); this.moveToPosition(i, CKEDITOR.POSITION_BEFORE_START); i = null } else { d = this.splitElement(i); !CKEDITOR.env.ie && !i.is("ul", "ol") && i.appendBogus() } return { previousBlock: i, nextBlock: d, wasStartOfBlock: a, wasEndOfBlock: b, elementPath: g }
            }, splitElement: function (a) {
                if (!this.collapsed) return null; this.setEndAt(a, CKEDITOR.POSITION_BEFORE_END); var b = this.extractContents(), c = a.clone(false);
                b.appendTo(c); c.insertAfter(a); this.moveToPosition(a, CKEDITOR.POSITION_AFTER_END); return c
            }, removeEmptyBlocksAtEnd: function () {
                function a(d) { return function (a) { return b(a) || (c(a) || a.type == CKEDITOR.NODE_ELEMENT && a.isEmptyInlineRemoveable()) || d.is("table") && a.is("caption") ? false : true } } var b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(false); return function (b) {
                    for (var c = this.createBookmark(), o = this[b ? "endPath" : "startPath"](), d = o.block || o.blockLimit, n; d && !d.equals(o.root) && !d.getFirst(a(d)); ) {
                        n =
d.getParent(); this[b ? "setEndAt" : "setStartAt"](d, CKEDITOR.POSITION_AFTER_END); d.remove(1); d = n
                    } this.moveToBookmark(c)
                }
            } (), startPath: function () { return new CKEDITOR.dom.elementPath(this.startContainer, this.root) }, endPath: function () { return new CKEDITOR.dom.elementPath(this.endContainer, this.root) }, checkBoundaryOfElement: function (a, b) {
                var o = b == CKEDITOR.START, d = this.clone(); d.collapse(o); d[o ? "setStartAt" : "setEndAt"](a, o ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END); d = new CKEDITOR.dom.walker(d);
                d.evaluator = c(o); return d[o ? "checkBackward" : "checkForward"]()
            }, checkStartOfBlock: function () { var a = this.startContainer, c = this.startOffset; if (CKEDITOR.env.ie && c && a.type == CKEDITOR.NODE_TEXT) { a = CKEDITOR.tools.ltrim(a.substring(0, c)); l.test(a) && this.trim(0, 1) } this.trim(); a = new CKEDITOR.dom.elementPath(this.startContainer, this.root); c = this.clone(); c.collapse(true); c.setStartAt(a.block || a.blockLimit, CKEDITOR.POSITION_AFTER_START); a = new CKEDITOR.dom.walker(c); a.evaluator = b(); return a.checkBackward() }, checkEndOfBlock: function () {
                var a =
this.endContainer, c = this.endOffset; if (CKEDITOR.env.ie && a.type == CKEDITOR.NODE_TEXT) { a = CKEDITOR.tools.rtrim(a.substring(c)); l.test(a) && this.trim(1, 0) } this.trim(); a = new CKEDITOR.dom.elementPath(this.endContainer, this.root); c = this.clone(); c.collapse(false); c.setEndAt(a.block || a.blockLimit, CKEDITOR.POSITION_BEFORE_END); a = new CKEDITOR.dom.walker(c); a.evaluator = b(); return a.checkForward()
            }, getPreviousNode: function (a, b, c) {
                var d = this.clone(); d.collapse(1); d.setStartAt(c || this.root, CKEDITOR.POSITION_AFTER_START);
                c = new CKEDITOR.dom.walker(d); c.evaluator = a; c.guard = b; return c.previous()
            }, getNextNode: function (a, b, c) { var d = this.clone(); d.collapse(); d.setEndAt(c || this.root, CKEDITOR.POSITION_BEFORE_END); c = new CKEDITOR.dom.walker(d); c.evaluator = a; c.guard = b; return c.next() }, checkReadOnly: function () {
                function a(b, c) {
                    for (; b; ) {
                        if (b.type == CKEDITOR.NODE_ELEMENT) { if (b.getAttribute("contentEditable") == "false" && !b.data("cke-editable")) return 0; if (b.is("html") || b.getAttribute("contentEditable") == "true" && (b.contains(c) || b.equals(c))) break } b =
b.getParent()
                    } return 1
                } return function () { var b = this.startContainer, c = this.endContainer; return !(a(b, c) && a(c, b)) }
            } (), moveToElementEditablePosition: function (b, c) {
                if (b.type == CKEDITOR.NODE_ELEMENT && !b.isEditable(false)) { this.moveToPosition(b, c ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START); return true } for (var o = 0; b; ) {
                    if (b.type == CKEDITOR.NODE_TEXT) {
                        c && this.checkEndOfBlock() && l.test(b.getText()) ? this.moveToPosition(b, CKEDITOR.POSITION_BEFORE_START) : this.moveToPosition(b, c ? CKEDITOR.POSITION_AFTER_END :
CKEDITOR.POSITION_BEFORE_START); o = 1; break
                    } if (b.type == CKEDITOR.NODE_ELEMENT) if (b.isEditable()) { this.moveToPosition(b, c ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_START); o = 1 } else c && (b.is("br") && this.checkEndOfBlock()) && this.moveToPosition(b, CKEDITOR.POSITION_BEFORE_START); var d = b, g = o, f = void 0; d.type == CKEDITOR.NODE_ELEMENT && d.isEditable(false) && (f = d[c ? "getLast" : "getFirst"](a)); !g && !f && (f = d[c ? "getPrevious" : "getNext"](a)); b = f
                } return !!o
            }, moveToElementEditStart: function (a) { return this.moveToElementEditablePosition(a) },
            moveToElementEditEnd: function (a) { return this.moveToElementEditablePosition(a, true) }, getEnclosedNode: function () { var a = this.clone(); a.optimize(); if (a.startContainer.type != CKEDITOR.NODE_ELEMENT || a.endContainer.type != CKEDITOR.NODE_ELEMENT) return null; var a = new CKEDITOR.dom.walker(a), b = CKEDITOR.dom.walker.bookmark(false, true), c = CKEDITOR.dom.walker.whitespaces(true); a.evaluator = function (a) { return c(a) && b(a) }; var d = a.next(); a.reset(); return d && d.equals(a.previous()) ? d : null }, getTouchedStartNode: function () {
                var a =
this.startContainer; return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.startOffset) || a
            }, getTouchedEndNode: function () { var a = this.endContainer; return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.endOffset - 1) || a }, scrollIntoView: function () {
                var a = new CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>", this.document), b, c, d, g = this.clone(); g.optimize(); if (d = g.startContainer.type == CKEDITOR.NODE_TEXT) {
                    c = g.startContainer.getText(); b = g.startContainer.split(g.startOffset);
                    a.insertAfter(g.startContainer)
                } else g.insertNode(a); a.scrollIntoView(); if (d) { g.startContainer.setText(c); b.remove() } a.remove()
            }
        }
    })(); CKEDITOR.POSITION_AFTER_START = 1; CKEDITOR.POSITION_BEFORE_END = 2; CKEDITOR.POSITION_BEFORE_START = 3; CKEDITOR.POSITION_AFTER_END = 4; CKEDITOR.ENLARGE_ELEMENT = 1; CKEDITOR.ENLARGE_BLOCK_CONTENTS = 2; CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS = 3; CKEDITOR.ENLARGE_INLINE = 4; CKEDITOR.START = 1; CKEDITOR.END = 2; CKEDITOR.SHRINK_ELEMENT = 1; CKEDITOR.SHRINK_TEXT = 2;
    (function () {
        function b(a) { if (!(arguments.length < 1)) { this.range = a; this.forceBrBreak = 0; this.enlargeBr = 1; this.enforceRealBlocks = 0; this._ || (this._ = {}) } } function c(a, b, c) { for (a = a.getNextSourceNode(b, null, c); !f(a); ) a = a.getNextSourceNode(b, null, c); return a } var a = /^[\r\n\t ]+$/, f = CKEDITOR.dom.walker.bookmark(false, true), e = CKEDITOR.dom.walker.whitespaces(true), d = function (a) { return f(a) && e(a) }; b.prototype = { getNextParagraph: function (b) {
            b = b || "p"; if (!CKEDITOR.dtd[this.range.root.getName()][b]) return null; var e,
h, l, m, n, o; if (!this._.started) {
                h = this.range.clone(); h.shrink(CKEDITOR.NODE_ELEMENT, true); m = h.endContainer.hasAscendant("pre", true) || h.startContainer.hasAscendant("pre", true); h.enlarge(this.forceBrBreak && !m || !this.enlargeBr ? CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS : CKEDITOR.ENLARGE_BLOCK_CONTENTS); if (!h.collapsed) {
                    m = new CKEDITOR.dom.walker(h.clone()); var i = CKEDITOR.dom.walker.bookmark(true, true); m.evaluator = i; this._.nextNode = m.next(); m = new CKEDITOR.dom.walker(h.clone()); m.evaluator = i; m = m.previous(); this._.lastNode =
m.getNextSourceNode(true); if (this._.lastNode && this._.lastNode.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(this._.lastNode.getText()) && this._.lastNode.getParent().isBlockBoundary()) { i = this.range.clone(); i.moveToPosition(this._.lastNode, CKEDITOR.POSITION_AFTER_END); if (i.checkEndOfBlock()) { i = new CKEDITOR.dom.elementPath(i.endContainer, i.root); this._.lastNode = (i.block || i.blockLimit).getNextSourceNode(true) } } if (!this._.lastNode) { this._.lastNode = this._.docEndMarker = h.document.createText(""); this._.lastNode.insertAfter(m) } h =
null
                } this._.started = 1
            } i = this._.nextNode; m = this._.lastNode; for (this._.nextNode = null; i; ) {
                var q = 0, y = i.hasAscendant("pre"), z = i.type != CKEDITOR.NODE_ELEMENT, j = 0; if (z) i.type == CKEDITOR.NODE_TEXT && a.test(i.getText()) && (z = 0); else {
                    var s = i.getName(); if (i.isBlockBoundary(this.forceBrBreak && !y && { br: 1 })) { if (s == "br") z = 1; else if (!h && !i.getChildCount() && s != "hr") { e = i; l = i.equals(m); break } if (h) { h.setEndAt(i, CKEDITOR.POSITION_BEFORE_START); if (s != "br") this._.nextNode = i } q = 1 } else {
                        if (i.getFirst()) {
                            if (!h) {
                                h = this.range.clone();
                                h.setStartAt(i, CKEDITOR.POSITION_BEFORE_START)
                            } i = i.getFirst(); continue
                        } z = 1
                    }
                } if (z && !h) { h = this.range.clone(); h.setStartAt(i, CKEDITOR.POSITION_BEFORE_START) } l = (!q || z) && i.equals(m); if (h && !q) for (; !i.getNext(d) && !l; ) { s = i.getParent(); if (s.isBlockBoundary(this.forceBrBreak && !y && { br: 1 })) { q = 1; z = 0; l || s.equals(m); h.setEndAt(s, CKEDITOR.POSITION_BEFORE_END); break } i = s; z = 1; l = i.equals(m); j = 1 } z && h.setEndAt(i, CKEDITOR.POSITION_AFTER_END); i = c(i, j, m); if ((l = !i) || q && h) break
            } if (!e) {
                if (!h) {
                    this._.docEndMarker && this._.docEndMarker.remove();
                    return this._.nextNode = null
                } e = new CKEDITOR.dom.elementPath(h.startContainer, h.root); i = e.blockLimit; q = { div: 1, th: 1, td: 1 }; e = e.block; if (!e && i && !this.enforceRealBlocks && q[i.getName()] && h.checkStartOfBlock() && h.checkEndOfBlock() && !i.equals(h.root)) e = i; else if (!e || this.enforceRealBlocks && e.getName() == "li") { e = this.range.document.createElement(b); h.extractContents().appendTo(e); e.trim(); h.insertNode(e); n = o = true } else if (e.getName() != "li") {
                    if (!h.checkStartOfBlock() || !h.checkEndOfBlock()) {
                        e = e.clone(false); h.extractContents().appendTo(e);
                        e.trim(); o = h.splitBlock(); n = !o.wasStartOfBlock; o = !o.wasEndOfBlock; h.insertNode(e)
                    }
                } else if (!l) this._.nextNode = e.equals(m) ? null : c(h.getBoundaryNodes().endNode, 1, m)
            } if (n) (h = e.getPrevious()) && h.type == CKEDITOR.NODE_ELEMENT && (h.getName() == "br" ? h.remove() : h.getLast() && h.getLast().$.nodeName.toLowerCase() == "br" && h.getLast().remove()); if (o) (h = e.getLast()) && h.type == CKEDITOR.NODE_ELEMENT && h.getName() == "br" && (CKEDITOR.env.ie || h.getPrevious(f) || h.getNext(f)) && h.remove(); if (!this._.nextNode) this._.nextNode = l ||
e.equals(m) || !m ? null : c(e, 1, m); return e
        }
        }; CKEDITOR.dom.range.prototype.createIterator = function () { return new b(this) }
    })();
    CKEDITOR.command = function (b, c) {
        this.uiItems = []; this.exec = function (a) { if (this.state == CKEDITOR.TRISTATE_DISABLED) return false; this.editorFocus && b.focus(); return this.fire("exec") === false ? true : c.exec.call(this, b, a) !== false }; this.refresh = function (a, b) { if (!this.readOnly && a.readOnly) return true; if (this.context && !b.isContextFor(this.context)) { this.disable(); return true } this.enable(); return this.fire("refresh", { editor: a, path: b }) === false ? true : c.refresh && c.refresh.apply(this, arguments) !== false }; CKEDITOR.tools.extend(this,
c, { modes: { wysiwyg: 1 }, editorFocus: 1, contextSensitive: !!c.context, state: CKEDITOR.TRISTATE_OFF }); CKEDITOR.event.call(this)
    };
    CKEDITOR.command.prototype = { enable: function () { this.state == CKEDITOR.TRISTATE_DISABLED && this.setState(!this.preserveState || typeof this.previousState == "undefined" ? CKEDITOR.TRISTATE_OFF : this.previousState) }, disable: function () { this.setState(CKEDITOR.TRISTATE_DISABLED) }, setState: function (b) { if (this.state == b) return false; this.previousState = this.state; this.state = b; this.fire("state"); return true }, toggleState: function () {
        this.state == CKEDITOR.TRISTATE_OFF ? this.setState(CKEDITOR.TRISTATE_ON) : this.state == CKEDITOR.TRISTATE_ON &&
this.setState(CKEDITOR.TRISTATE_OFF)
    }
    }; CKEDITOR.event.implementOn(CKEDITOR.command.prototype, !0); CKEDITOR.ENTER_P = 1; CKEDITOR.ENTER_BR = 2; CKEDITOR.ENTER_DIV = 3;
    CKEDITOR.config = { customConfig: "config.js", autoUpdateElement: !0, language: "", defaultLanguage: "en", contentsLangDirection: "", enterMode: CKEDITOR.ENTER_P, forceEnterMode: !1, shiftEnterMode: CKEDITOR.ENTER_BR, docType: "<!DOCTYPE html>", bodyId: "", bodyClass: "", fullPage: !1, height: 200, extraPlugins: "", removePlugins: "", protectedSource: [], tabIndex: 0, width: "", baseFloatZIndex: 1E4, blockedKeystrokes: [CKEDITOR.CTRL + 66, CKEDITOR.CTRL + 73, CKEDITOR.CTRL + 85] };
    (function () {
        CKEDITOR.focusManager = function (b) { if (b.focusManager) return b.focusManager; this.hasFocus = false; this.currentActive = null; this._ = { editor: b }; return this }; CKEDITOR.focusManager._ = { blurDelay: 200 }; CKEDITOR.focusManager.prototype = { focus: function () { this._.timer && clearTimeout(this._.timer); if (!this.hasFocus && !this._.locked) { var b = CKEDITOR.currentInstance; b && b.focusManager.blur(1); this.hasFocus = true; (b = this._.editor.container) && b.addClass("cke_focus"); this._.editor.fire("focus") } }, lock: function () {
            this._.locked =
1
        }, unlock: function () { delete this._.locked }, blur: function (b) { function c() { if (this.hasFocus) { this.hasFocus = false; var a = this._.editor.container; a && a.removeClass("cke_focus"); this._.editor.fire("blur") } } if (!this._.locked) { this._.timer && clearTimeout(this._.timer); var a = CKEDITOR.focusManager._.blurDelay; b || !a ? c.call(this) : this._.timer = CKEDITOR.tools.setTimeout(function () { delete this._.timer; c.call(this) }, a, this) } }, add: function (b, c) {
            var a = b.getCustomData("focusmanager"); if (!a || a != this) {
                a && a.remove(b); var a =
"focus", f = "blur"; if (c) if (CKEDITOR.env.ie) { a = "focusin"; f = "focusout" } else CKEDITOR.event.useCapture = 1; var e = { blur: function () { b.equals(this.currentActive) && this.blur() }, focus: function () { this.currentActive = b; this.focus() } }; b.on(a, e.focus, this); b.on(f, e.blur, this); if (c) CKEDITOR.event.useCapture = 0; b.setCustomData("focusmanager", this); b.setCustomData("focusmanager_handlers", e)
            }
        }, remove: function (b) {
            b.removeCustomData("focusmanager"); var c = b.removeCustomData("focusmanager_handlers"); b.removeListener("blur",
c.blur); b.removeListener("focus", c.focus)
        }
        }
    })(); CKEDITOR.keystrokeHandler = function (b) { if (b.keystrokeHandler) return b.keystrokeHandler; this.keystrokes = {}; this.blockedKeystrokes = {}; this._ = { editor: b }; return this };
    (function () { var b, c = function (a) { var a = a.data, c = a.getKeystroke(), d = this.keystrokes[c], g = this._.editor; b = g.fire("key", { keyCode: c }) === false; if (!b) { d && (b = g.execCommand(d, { from: "keystrokeHandler" }) !== false); b || (b = !!this.blockedKeystrokes[c]) } b && a.preventDefault(true); return !b }, a = function (a) { if (b) { b = false; a.data.preventDefault(true) } }; CKEDITOR.keystrokeHandler.prototype = { attach: function (b) { b.on("keydown", c, this); if (CKEDITOR.env.opera || CKEDITOR.env.gecko && CKEDITOR.env.mac) b.on("keypress", a, this) } } })();
    (function () {
        CKEDITOR.lang = { languages: { af: 1, ar: 1, bg: 1, bn: 1, bs: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, el: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, en: 1, eo: 1, es: 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, "fr-ca": 1, fr: 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, is: 1, it: 1, ja: 1, ka: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mn: 1, ms: 1, nb: 1, nl: 1, no: 1, pl: 1, "pt-br": 1, pt: 1, ro: 1, ru: 1, sk: 1, sl: 1, "sr-latn": 1, sr: 1, sv: 1, th: 1, tr: 1, uk: 1, vi: 1, "zh-cn": 1, zh: 1 }, load: function (b, c, a) {
            if (!b || !CKEDITOR.lang.languages[b]) b = this.detect(c, b); this[b] ? a(b, this[b]) : CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/" +
b + ".js"), function () { a(b, this[b]) }, this)
        }, detect: function (b, c) { var a = this.languages, c = c || navigator.userLanguage || navigator.language || b, f = c.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/), e = f[1], f = f[2]; a[e + "-" + f] ? e = e + "-" + f : a[e] || (e = null); CKEDITOR.lang.detect = e ? function () { return e } : function (a) { return a }; return e || b }
        }
    })();
    CKEDITOR.scriptLoader = function () {
        var b = {}, c = {}; return { load: function (a, f, e, d) {
            var g = typeof a == "string"; g && (a = [a]); e || (e = CKEDITOR); var k = a.length, h = [], l = [], m = function (a) { f && (g ? f.call(e, a) : f.call(e, h, l)) }; if (k === 0) m(true); else {
                var n = function (a, b) { (b ? h : l).push(a); if (--k <= 0) { d && CKEDITOR.document.getDocumentElement().removeStyle("cursor"); m(b) } }, o = function (a, o) { b[a] = 1; var d = c[a]; delete c[a]; for (var i = 0; i < d.length; i++) d[i](a, o) }, i = function (a) {
                    if (b[a]) n(a, true); else {
                        var d = c[a] || (c[a] = []); d.push(n); if (!(d.length >
1)) { var i = new CKEDITOR.dom.element("script"); i.setAttributes({ type: "text/javascript", src: a }); if (f) if (CKEDITOR.env.ie) i.$.onreadystatechange = function () { if (i.$.readyState == "loaded" || i.$.readyState == "complete") { i.$.onreadystatechange = null; o(a, true) } }; else { i.$.onload = function () { setTimeout(function () { o(a, true) }, 0) }; i.$.onerror = function () { o(a, false) } } i.appendTo(CKEDITOR.document.getHead()) }
                    }
                }; d && CKEDITOR.document.getDocumentElement().setStyle("cursor", "wait"); for (var q = 0; q < k; q++) i(a[q])
            }
        }
        }
    } ();
    CKEDITOR.resourceManager = function (b, c) { this.basePath = b; this.fileName = c; this.registered = {}; this.loaded = {}; this.externals = {}; this._ = { waitingList: {}} };
    CKEDITOR.resourceManager.prototype = { add: function (b, c) { if (this.registered[b]) throw '[CKEDITOR.resourceManager.add] The resource name "' + b + '" is already registered.'; var a = this.registered[b] = c || {}; a.name = b; a.path = this.getPath(b); CKEDITOR.fire(b + CKEDITOR.tools.capitalize(this.fileName) + "Ready", a); return this.get(b) }, get: function (b) { return this.registered[b] || null }, getPath: function (b) { var c = this.externals[b]; return CKEDITOR.getUrl(c && c.dir || this.basePath + b + "/") }, getFilePath: function (b) {
        var c = this.externals[b];
        return CKEDITOR.getUrl(this.getPath(b) + (c && typeof c.file == "string" ? c.file : this.fileName + ".js"))
    }, addExternal: function (b, c, a) { for (var b = b.split(","), f = 0; f < b.length; f++) this.externals[b[f]] = { dir: c, file: a} }, load: function (b, c, a) {
        CKEDITOR.tools.isArray(b) || (b = b ? [b] : []); for (var f = this.loaded, e = this.registered, d = [], g = {}, k = {}, h = 0; h < b.length; h++) { var l = b[h]; if (l) if (!f[l] && !e[l]) { var m = this.getFilePath(l); d.push(m); m in g || (g[m] = []); g[m].push(l) } else k[l] = this.get(l) } CKEDITOR.scriptLoader.load(d, function (b,
o) { if (o.length) throw '[CKEDITOR.resourceManager.load] Resource name "' + g[o[0]].join(",") + '" was not found at "' + o[0] + '".'; for (var d = 0; d < b.length; d++) for (var e = g[b[d]], h = 0; h < e.length; h++) { var l = e[h]; k[l] = this.get(l); f[l] = 1 } c.call(a, k) }, this)
    }
    }; CKEDITOR.plugins = new CKEDITOR.resourceManager("plugins/", "plugin");
    CKEDITOR.plugins.load = CKEDITOR.tools.override(CKEDITOR.plugins.load, function (b) {
        var c = {}; return function (a, f, e) {
            var d = {}, g = function (a) {
                b.call(this, a, function (a) {
                    CKEDITOR.tools.extend(d, a); var b = [], k; for (k in a) { var n = a[k], o = n && n.requires; if (!c[k]) { if (n.icons) for (var i = n.icons.split(","), q = 0; q < i.length; q++) CKEDITOR.skin.addIcon(i[q], n.path + "icons/" + i[q] + ".png"); c[k] = 1 } if (o) { o.split && (o = o.split(",")); for (n = 0; n < o.length; n++) d[o[n]] || b.push(o[n]) } } if (b.length) g.call(this, b); else {
                        for (k in d) {
                            n = d[k]; if (n.onLoad &&
!n.onLoad._called) { n.onLoad() === false && delete d[k]; n.onLoad._called = 1 }
                        } f && f.call(e || window, d)
                    }
                }, this)
            }; g.call(this, a)
        }
    }); CKEDITOR.plugins.setLang = function (b, c, a) { var f = this.get(b), b = f.langEntries || (f.langEntries = {}), f = f.lang || (f.lang = []); f.split && (f = f.split(",")); CKEDITOR.tools.indexOf(f, c) == -1 && f.push(c); b[c] = a }; CKEDITOR.ui = function (b) { if (b.ui) return b.ui; this.items = {}; this.instances = {}; this.editor = b; this._ = { handlers: {} }; return this };
    CKEDITOR.ui.prototype = { add: function (b, c, a) { a.name = b.toLowerCase(); var f = this.items[b] = { type: c, command: a.command || null, args: Array.prototype.slice.call(arguments, 2) }; CKEDITOR.tools.extend(f, a) }, get: function (b) { return this.instances[b] }, create: function (b) { var c = this.items[b], a = c && this._.handlers[c.type], f = c && c.command && this.editor.getCommand(c.command), a = a && a.create.apply(this, c.args); this.instances[b] = a; f && f.uiItems.push(a); if (a && !a.type) a.type = c.type; return a }, addHandler: function (b, c) {
        this._.handlers[b] =
c
    }, space: function (b) { return CKEDITOR.document.getById(this.spaceId(b)) }, spaceId: function (b) { return this.editor.id + "_" + b }
    }; CKEDITOR.event.implementOn(CKEDITOR.ui);
    (function () {
        function b(b, i, n) {
            CKEDITOR.event.call(this); b = b && CKEDITOR.tools.clone(b); if (i !== void 0) {
                if (i instanceof CKEDITOR.dom.element) { if (!n) throw Error("One of the element mode must be specified."); } else throw Error("Expect element of type CKEDITOR.dom.element."); if (CKEDITOR.env.ie && CKEDITOR.env.quirks && n == CKEDITOR.ELEMENT_MODE_INLINE) throw Error("Inline element mode is not supported on IE quirks."); if (n == CKEDITOR.ELEMENT_MODE_INLINE && !i.is(CKEDITOR.dtd.$editable) || n == CKEDITOR.ELEMENT_MODE_REPLACE &&
i.is(CKEDITOR.dtd.$nonBodyContent)) throw Error('The specified element mode is not supported on element: "' + i.getName() + '".'); this.element = i; this.elementMode = n; this.name = this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO && (i.getId() || i.getNameAtt())
            } else this.elementMode = CKEDITOR.ELEMENT_MODE_NONE; this._ = {}; this.commands = {}; this.templates = {}; this.name = this.name || c(); this.id = CKEDITOR.tools.getNextId(); this.config = CKEDITOR.tools.prototypedCopy(CKEDITOR.config); this.ui = new CKEDITOR.ui(this); this.focusManager =
new CKEDITOR.focusManager(this); this.keystrokeHandler = new CKEDITOR.keystrokeHandler(this); this.on("mode", a); this.on("readOnly", a); this.on("selectionChange", f); this.on("instanceReady", function () { this.config.startupFocus && this.focus() }); CKEDITOR.fire("instanceCreated", null, this); CKEDITOR.add(this); CKEDITOR.tools.setTimeout(function () { d(this, b) }, 0, this)
        } function c() { do var a = "editor" + ++m; while (CKEDITOR.instances[a]); return a } function a() {
            var a, b = this.commands, c = this.mode; if (c) for (var d in b) {
                a = b[d];
                a[a.startDisabled ? "disable" : this.readOnly && !a.readOnly ? "disable" : a.modes[c] ? "enable" : "disable"]()
            }
        } function f(a) { var b = this.commands, c = a.editor, d = a.data.path, n; for (n in b) { a = b[n]; a.contextSensitive && a.refresh(c, d) } } function e(a) {
            var b = a.config.customConfig; if (!b) return false; var b = CKEDITOR.getUrl(b), c = n[b] || (n[b] = {}); if (c.fn) { c.fn.call(a, a.config); (CKEDITOR.getUrl(a.config.customConfig) == b || !e(a)) && a.fireOnce("customConfigLoaded") } else CKEDITOR.scriptLoader.load(b, function () {
                c.fn = CKEDITOR.editorConfig ?
CKEDITOR.editorConfig : function () { }; e(a)
            }); return true
        } function d(a, b) {
            a.on("customConfigLoaded", function () {
                if (b) { if (b.on) for (var c in b.on) a.on(c, b.on[c]); CKEDITOR.tools.extend(a.config, b, true); delete a.config.on } a.readOnly = !(!a.config.readOnly && !(a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.isReadOnly() : a.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && a.element.getAttribute("disabled"))); a.blockless = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE && !CKEDITOR.dtd[a.element.getName()].p; a.tabIndex =
a.config.tabIndex || a.element && a.element.getAttribute("tabindex") || 0; if (a.config.skin) CKEDITOR.skinName = a.config.skin; a.fireOnce("configLoaded"); a.dataProcessor = new CKEDITOR.htmlDataProcessor(a); g(a)
            }); if (b && b.customConfig != void 0) a.config.customConfig = b.customConfig; e(a) || a.fireOnce("customConfigLoaded")
        } function g(a) { CKEDITOR.skin.loadPart("editor", function () { k(a) }) } function k(a) {
            CKEDITOR.lang.load(a.config.language, a.config.defaultLanguage, function (b, c) {
                a.langCode = b; a.lang = CKEDITOR.tools.prototypedCopy(c);
                if (CKEDITOR.env.gecko && CKEDITOR.env.version < 10900 && a.lang.dir == "rtl") a.lang.dir = "ltr"; if (!a.config.contentsLangDirection) a.config.contentsLangDirection = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.getDirection(1) : a.lang.dir; a.fire("langLoaded"); h(a)
            })
        } function h(a) {
            var b = a.config, c = b.plugins, d = b.extraPlugins, n = b.removePlugins; if (d) var e = RegExp("(?:^|,)(?:" + d.replace(/\s*,\s*/g, "|") + ")(?=,|$)", "g"), c = c.replace(e, ""), c = c + ("," + d); if (n) var g = RegExp("(?:^|,)(?:" + n.replace(/\s*,\s*/g, "|") + ")(?=,|$)",
"g"), c = c.replace(g, ""); CKEDITOR.env.air && (c = c + ",adobeair"); CKEDITOR.plugins.load(c.split(","), function (c) {
    var d = [], n = [], e = []; a.plugins = c; for (var f in c) {
        var j = c[f], h = j.lang, q = null, t = j.requires, k; CKEDITOR.tools.isArray(t) && (t = t.join(",")); if (t && (k = t.match(g))) for (; t = k.pop(); ) CKEDITOR.tools.setTimeout(function (a, b) { throw Error('Plugin "' + a.replace(",", "") + '" cannot be removed from the plugins list, because it\'s required by "' + b + '" plugin.'); }, 0, null, [t, f]); if (h && !a.lang[f]) {
            h.split && (h = h.split(","));
            if (CKEDITOR.tools.indexOf(h, a.langCode) >= 0) q = a.langCode; else { q = a.langCode.replace(/-.*/, ""); q = q != a.langCode && CKEDITOR.tools.indexOf(h, q) >= 0 ? q : CKEDITOR.tools.indexOf(h, "en") >= 0 ? "en" : h[0] } if (!j.langEntries || !j.langEntries[q]) e.push(CKEDITOR.getUrl(j.path + "lang/" + q + ".js")); else { a.lang[f] = j.langEntries[q]; q = null }
        } n.push(q); d.push(j)
    } CKEDITOR.scriptLoader.load(e, function () {
        for (var c = ["beforeInit", "init", "afterInit"], e = 0; e < c.length; e++) for (var g = 0; g < d.length; g++) {
            var f = d[g]; e === 0 && (n[g] && f.lang && f.langEntries) &&
(a.lang[f.name] = f.langEntries[n[g]]); if (f[c[e]]) f[c[e]](a)
        } a.fireOnce("pluginsLoaded"); b.keystrokes && a.setKeystroke(a.config.keystrokes); for (g = 0; g < a.config.blockedKeystrokes.length; g++) a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[g]] = 1; a.fireOnce("loaded"); CKEDITOR.fire("instanceLoaded", null, a)
    })
})
        } function l() {
            var a = this.element; if (a && this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO) {
                var b = this.getData(); this.config.htmlEncodeOutput && (b = CKEDITOR.tools.htmlEncode(b)); a.is("textarea") ?
a.setValue(b) : a.setHtml(b); return true
            } return false
        } b.prototype = CKEDITOR.editor.prototype; CKEDITOR.editor = b; var m = 0, n = {}; CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { addCommand: function (a, b) { return this.commands[a] = new CKEDITOR.command(this, b) }, destroy: function (a) { this.fire("beforeDestroy"); !a && l.call(this); this.editable(null); this.fire("destroy"); this.removeAllListeners(); CKEDITOR.remove(this); CKEDITOR.fire("instanceDestroyed", null, this) }, elementPath: function (a) {
            return (a = a || this.getSelection().getStartElement()) ?
new CKEDITOR.dom.elementPath(a, this.editable()) : null
        }, createRange: function () { var a = this.editable(); return a ? new CKEDITOR.dom.range(a) : null }, execCommand: function (a, b) { var c = this.getCommand(a), d = { name: a, commandData: b, command: c }; if (c && c.state != CKEDITOR.TRISTATE_DISABLED && this.fire("beforeCommandExec", d) !== true) { d.returnValue = c.exec(d.commandData); if (!c.async && this.fire("afterCommandExec", d) !== true) return d.returnValue } return false }, getCommand: function (a) { return this.commands[a] }, getData: function (a) {
            !a &&
this.fire("beforeGetData"); var b = this._.data; if (typeof b != "string") b = (b = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? b.is("textarea") ? b.getValue() : b.getHtml() : ""; b = { dataValue: b }; !a && this.fire("getData", b); return b.dataValue
        }, getSnapshot: function () { var a = this.fire("getSnapshot"); if (typeof a != "string") { var b = this.element; b && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && (a = b.is("textarea") ? b.getValue() : b.getHtml()) } return a }, loadSnapshot: function (a) { this.fire("loadSnapshot", a) },
            setData: function (a, b, c) { if (b) this.on("dataReady", function (a) { a.removeListener(); b.call(a.editor) }); a = { dataValue: a }; !c && this.fire("setData", a); this._.data = a.dataValue; !c && this.fire("afterSetData", a) }, setReadOnly: function (a) { a = a == void 0 || a; if (this.readOnly != a) { this.readOnly = a; this.editable().setReadOnly(a); this.fire("readOnly") } }, insertHtml: function (a, b) { this.fire("insertHtml", { dataValue: a, mode: b }) }, insertText: function (a) { this.fire("insertText", a) }, insertElement: function (a) {
                this.fire("insertElement",
a)
            }, focus: function () { this.fire("beforeFocus") }, checkDirty: function () { return this._.previousValue !== this.getSnapshot() }, resetDirty: function () { this._.previousValue = this.getSnapshot() }, updateElement: function () { return l.call(this) }, setKeystroke: function () { for (var a = this.keystrokeHandler.keystrokes, b = CKEDITOR.tools.isArray(arguments[0]) ? arguments[0] : [[].slice.call(arguments, 0)], c, d, n = b.length; n--; ) { c = b[n]; d = 0; if (CKEDITOR.tools.isArray(c)) { d = c[1]; c = c[0] } d ? a[c] = d : delete a[c] } }
        })
    })();
    CKEDITOR.ELEMENT_MODE_NONE = 0; CKEDITOR.ELEMENT_MODE_REPLACE = 1; CKEDITOR.ELEMENT_MODE_APPENDTO = 2; CKEDITOR.ELEMENT_MODE_INLINE = 3; CKEDITOR.htmlParser = function () { this._ = { htmlPartsRegex: RegExp("<(?:(?:\\/([^>]+)>)|(?:!--([\\S|\\s]*?)--\>)|(?:([^\\s>]+)\\s*((?:(?:\"[^\"]*\")|(?:'[^']*')|[^\"'>])*)\\/?>))", "g")} };
    (function () {
        var b = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g, c = { checked: 1, compact: 1, declare: 1, defer: 1, disabled: 1, ismap: 1, multiple: 1, nohref: 1, noresize: 1, noshade: 1, nowrap: 1, readonly: 1, selected: 1 }; CKEDITOR.htmlParser.prototype = { onTagOpen: function () { }, onTagClose: function () { }, onText: function () { }, onCDATA: function () { }, onComment: function () { }, parse: function (a) {
            for (var f, e, d = 0, g; f = this._.htmlPartsRegex.exec(a); ) {
                e = f.index; if (e > d) { d = a.substring(d, e); if (g) g.push(d); else this.onText(d) } d =
this._.htmlPartsRegex.lastIndex; if (e = f[1]) { e = e.toLowerCase(); if (g && CKEDITOR.dtd.$cdata[e]) { this.onCDATA(g.join("")); g = null } if (!g) { this.onTagClose(e); continue } } if (g) g.push(f[0]); else if (e = f[3]) { e = e.toLowerCase(); if (!/="/.test(e)) { var k = {}, h; f = f[4]; var l = !!(f && f.charAt(f.length - 1) == "/"); if (f) for (; h = b.exec(f); ) { var m = h[1].toLowerCase(); h = h[2] || h[3] || h[4] || ""; k[m] = !h && c[m] ? m : h } this.onTagOpen(e, k, l); !g && CKEDITOR.dtd.$cdata[e] && (g = []) } } else if (e = f[2]) this.onComment(e)
            } if (a.length > d) this.onText(a.substring(d,
a.length))
        }
        }
    })();
    CKEDITOR.htmlParser.basicWriter = CKEDITOR.tools.createClass({ $: function () { this._ = { output: []} }, proto: { openTag: function (b) { this._.output.push("<", b) }, openTagClose: function (b, c) { c ? this._.output.push(" />") : this._.output.push(">") }, attribute: function (b, c) { typeof c == "string" && (c = CKEDITOR.tools.htmlEncodeAttr(c)); this._.output.push(" ", b, '="', c, '"') }, closeTag: function (b) { this._.output.push("</", b, ">") }, text: function (b) { this._.output.push(b) }, comment: function (b) { this._.output.push("<\!--", b, "--\>") }, write: function (b) { this._.output.push(b) },
        reset: function () { this._.output = []; this._.indent = false }, getHtml: function (b) { var c = this._.output.join(""); b && this.reset(); return c }
    }
    }); CKEDITOR.htmlParser.comment = function (b) { this.value = b; this._ = { isBlockLike: false} }; CKEDITOR.htmlParser.comment.prototype = { type: CKEDITOR.NODE_COMMENT, writeHtml: function (b, c) { var a = this.value; if (c) { if (!(a = c.onComment(a, this))) return; if (typeof a != "string") { a.parent = this.parent; a.writeHtml(b, c); return } } b.comment(a) } };
    (function () { CKEDITOR.htmlParser.text = function (b) { this.value = b; this._ = { isBlockLike: false} }; CKEDITOR.htmlParser.text.prototype = { type: CKEDITOR.NODE_TEXT, writeHtml: function (b, c) { var a = this.value; (!c || (a = c.onText(a, this))) && b.text(a) } } })(); (function () { CKEDITOR.htmlParser.cdata = function (b) { this.value = b }; CKEDITOR.htmlParser.cdata.prototype = { type: CKEDITOR.NODE_TEXT, writeHtml: function (b) { b.write(this.value) } } })();
    CKEDITOR.htmlParser.fragment = function () { this.children = []; this.parent = null; this._ = { isBlockLike: true, hasInlineStarted: false} };
    (function () {
        function b(a) { return a.name == "a" && a.attributes.href || CKEDITOR.dtd.$removeEmpty[a.name] } var c = CKEDITOR.tools.extend({ table: 1, ul: 1, ol: 1, dl: 1 }, CKEDITOR.dtd.table, CKEDITOR.dtd.ul, CKEDITOR.dtd.ol, CKEDITOR.dtd.dl), a = { ol: 1, ul: 1 }, f = CKEDITOR.tools.extend({}, { html: 1 }, CKEDITOR.dtd.html, CKEDITOR.dtd.body, CKEDITOR.dtd.head, { style: 1, script: 1 }); CKEDITOR.htmlParser.fragment.fromHtml = function (e, d, g) {
            function k(a) {
                var b; if (y.length > 0) for (var c = 0; c < y.length; c++) {
                    var d = y[c], n = d.name, i = CKEDITOR.dtd[n], o = j.name &&
CKEDITOR.dtd[j.name]; if ((!o || o[n]) && (!a || !i || i[a] || !CKEDITOR.dtd[a])) { if (!b) { h(); b = 1 } d = d.clone(); d.parent = j; j = d; y.splice(c, 1); c-- } else if (n == j.name) { m(j, j.parent, 1); c-- }
                }
            } function h() { for (; z.length; ) m(z.shift(), j) } function l(a) { if (a._.isBlockLike && a.name != "pre" && a.name != "textarea") { var b = a.children.length, c = a.children[b - 1], d; if (c && c.type == CKEDITOR.NODE_TEXT) (d = CKEDITOR.tools.rtrim(c.value)) ? c.value = d : a.children.length = b - 1 } } function m(a, c, d) {
                var c = c || j || q, o = j; if (a.previous === void 0) {
                    if (n(c, a)) {
                        j = c;
                        i.onTagOpen(g, {}); a.returnPoint = c = j
                    } l(a); (!b(a) || a.children.length) && c.add(a); a.name == "pre" && (A = false); a.name == "textarea" && (s = false)
                } if (a.returnPoint) { j = a.returnPoint; delete a.returnPoint } else j = d ? c : o
            } function n(a, b) { if ((a == q || a.name == "body") && g && (!a.name || CKEDITOR.dtd[a.name][g])) { var c, d; return (c = b.attributes && (d = b.attributes["data-cke-real-element-type"]) ? d : b.name) && c in CKEDITOR.dtd.$inline && !(c in CKEDITOR.dtd.head) && !b.isOrphan || b.type == CKEDITOR.NODE_TEXT } } function o(a, b) {
                return a in CKEDITOR.dtd.$listItem ||
a in CKEDITOR.dtd.$tableContent ? a == b || a == "dt" && b == "dd" || a == "dd" && b == "dt" : false
            } var i = new CKEDITOR.htmlParser, q = d instanceof CKEDITOR.htmlParser.element ? d : typeof d == "string" ? new CKEDITOR.htmlParser.element(d) : new CKEDITOR.htmlParser.fragment, y = [], z = [], j = q, s = q.name == "textarea", A = q.name == "pre"; i.onTagOpen = function (d, n, g, e) {
                n = new CKEDITOR.htmlParser.element(d, n); if (n.isUnknown && g) n.isEmpty = true; n.isOptionalClose = e; if (b(n)) y.push(n); else {
                    if (d == "pre") A = true; else {
                        if (d == "br" && A) {
                            j.add(new CKEDITOR.htmlParser.text("\n"));
                            return
                        } d == "textarea" && (s = true)
                    } if (d == "br") z.push(n); else {
                        for (; ; ) {
                            e = (g = j.name) ? CKEDITOR.dtd[g] || (j._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : f; if (!n.isUnknown && !j.isUnknown && !e[d]) if (j.isOptionalClose) i.onTagClose(g); else if (d in a && g in a) { g = j.children; (g = g[g.length - 1]) && g.name == "li" || m(g = new CKEDITOR.htmlParser.element("li"), j); !n.returnPoint && (n.returnPoint = j); j = g } else if (d in CKEDITOR.dtd.$listItem && !o(d, g)) i.onTagOpen(d == "li" ? "ul" : "dl", {}, 0, 1); else if (g in c && !o(d, g)) {
                                !n.returnPoint &&
(n.returnPoint = j); j = j.parent
                            } else { g in CKEDITOR.dtd.$inline && y.unshift(j); if (j.parent) m(j, j.parent, 1); else { n.isOrphan = 1; break } } else break
                        } k(d); h(); n.parent = j; n.isEmpty ? m(n) : j = n
                    }
                }
            }; i.onTagClose = function (a) {
                for (var b = y.length - 1; b >= 0; b--) if (a == y[b].name) { y.splice(b, 1); return } for (var c = [], d = [], n = j; n != q && n.name != a; ) { n._.isBlockLike || d.unshift(n); c.push(n); n = n.returnPoint || n.parent } if (n != q) { for (b = 0; b < c.length; b++) { var i = c[b]; m(i, i.parent) } j = n; n._.isBlockLike && h(); m(n, n.parent); if (n == j) j = j.parent; y = y.concat(d) } a ==
"body" && (g = false)
            }; i.onText = function (b) { if ((!j._.hasInlineStarted || z.length) && !A && !s) { b = CKEDITOR.tools.ltrim(b); if (b.length === 0) return } var d = j.name, o = d ? CKEDITOR.dtd[d] || (j._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : f; if (!s && !o["#"] && d in c) { i.onTagOpen(d in a ? "li" : d == "dl" ? "dd" : d == "table" ? "tr" : d == "tr" ? "td" : ""); i.onText(b) } else { h(); k(); !A && !s && (b = b.replace(/[\t\r\n ]{2,}|[\t\r\n]/g, " ")); b = new CKEDITOR.htmlParser.text(b); if (n(j, b)) this.onTagOpen(g, {}, 0, 1); j.add(b) } }; i.onCDATA = function (a) { j.add(new CKEDITOR.htmlParser.cdata(a)) };
            i.onComment = function (a) { h(); k(); j.add(new CKEDITOR.htmlParser.comment(a)) }; i.parse(e); for (h(!CKEDITOR.env.ie && 1); j != q; ) m(j, j.parent, 1); l(q); return q
        }; CKEDITOR.htmlParser.fragment.prototype = { type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, add: function (a, b) {
            isNaN(b) && (b = this.children.length); var c = b > 0 ? this.children[b - 1] : null; if (c) { if (a._.isBlockLike && c.type == CKEDITOR.NODE_TEXT) { c.value = CKEDITOR.tools.rtrim(c.value); if (c.value.length === 0) { this.children.pop(); this.add(a); return } } c.next = a } a.previous = c; a.parent = this;
            this.children.splice(b, 0, a); if (!this._.hasInlineStarted) this._.hasInlineStarted = a.type == CKEDITOR.NODE_TEXT || a.type == CKEDITOR.NODE_ELEMENT && !a._.isBlockLike
        }, writeHtml: function (a, b) { var c; this.filterChildren = function () { var a = new CKEDITOR.htmlParser.basicWriter; this.writeChildrenHtml.call(this, a, b); a = a.getHtml(); this.children = (new CKEDITOR.htmlParser.fragment.fromHtml(a)).children; c = 1 }; b && b.onRoot(this); this.writeChildrenHtml(a, c ? null : b) }, writeChildrenHtml: function (a, b, c) {
            if (c && !this.parent && b) b.onRoot(this);
            for (c = 0; c < this.children.length; c++) this.children[c].writeHtml(a, b)
        }
        }
    })();
    (function () {
        function b(a, b) { for (var c = 0; a && c < b.length; c++) var e = b[c], a = a.replace(e[0], e[1]); return a } function c(a, b, c) { typeof b == "function" && (b = [b]); var e, f; f = a.length; var m = b && b.length; if (m) { for (e = 0; e < f && a[e].pri < c; e++); for (f = m - 1; f >= 0; f--) if (m = b[f]) { m.pri = c; a.splice(e, 0, m) } } } function a(a, b, c) { if (b) for (var e in b) { var l = a[e]; a[e] = f(l, b[e], c); l || a.$length++ } } function f(a, b, f) { if (b) { b.pri = f; if (a) { if (a.splice) c(a, b, f); else { a = a.pri > f ? [b, a] : [a, b]; a.filter = e } return a } return b.filter = b } } function e(a) {
            for (var b =
a.type || a instanceof CKEDITOR.htmlParser.fragment, c = 0; c < this.length; c++) { if (b) var e = a.type, f = a.name; var m = this[c].apply(window, arguments); if (m === false) return m; if (b) { if (m && (m.name != f || m.type != e)) return m } else if (typeof m != "string") return m; m != void 0 && (a = m) } return a
        } CKEDITOR.htmlParser.filter = CKEDITOR.tools.createClass({ $: function (a) { this._ = { elementNames: [], attributeNames: [], elements: { $length: 0 }, attributes: { $length: 0} }; a && this.addRules(a, 10) }, proto: { addRules: function (b, e) {
            typeof e != "number" && (e = 10);
            c(this._.elementNames, b.elementNames, e); c(this._.attributeNames, b.attributeNames, e); a(this._.elements, b.elements, e); a(this._.attributes, b.attributes, e); this._.text = f(this._.text, b.text, e) || this._.text; this._.comment = f(this._.comment, b.comment, e) || this._.comment; this._.root = f(this._.root, b.root, e) || this._.root
        }, onElementName: function (a) { return b(a, this._.elementNames) }, onAttributeName: function (a) { return b(a, this._.attributeNames) }, onText: function (a) { var b = this._.text; return b ? b.filter(a) : a }, onComment: function (a,
b) { var c = this._.comment; return c ? c.filter(a, b) : a }, onRoot: function (a) { var b = this._.root; return b ? b.filter(a) : a }, onElement: function (a) { for (var b = [this._.elements["^"], this._.elements[a.name], this._.elements.$], c, e = 0; e < 3; e++) if (c = b[e]) { c = c.filter(a, this); if (c === false) return null; if (c && c != a) return this.onNode(c); if (a.parent && !a.name) break } return a }, onNode: function (a) {
    var b = a.type; return b == CKEDITOR.NODE_ELEMENT ? this.onElement(a) : b == CKEDITOR.NODE_TEXT ? new CKEDITOR.htmlParser.text(this.onText(a.value)) :
b == CKEDITOR.NODE_COMMENT ? new CKEDITOR.htmlParser.comment(this.onComment(a.value)) : null
}, onAttribute: function (a, b, c) { if (b = this._.attributes[b]) { a = b.filter(c, a, this); if (a === false) return false; if (typeof a != "undefined") return a } return c }
        }
        })
    })();
    (function () {
        function b(b, c) {
            function n(a) { return a || CKEDITOR.env.ie ? new CKEDITOR.htmlParser.text(" ") : new CKEDITOR.htmlParser.element("br", { "data-cke-bogus": 1 }) } function i(b, c) {
                return function (i) {
                    if (i.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                        var e = [], g = a(i), j, K; if (g) for (o(g, 1) && e.push(g); g; ) { if (d(g) && (j = f(g)) && o(j)) if ((K = f(j)) && !d(K)) e.push(j); else { var h = j, q = n(t), l = h.parent.children, y = CKEDITOR.tools.indexOf(l, h); l.splice(y + 1, 0, q); l = h.next; h.next = q; q.previous = h; q.parent = h.parent; q.next = l; k(j) } g = g.previous } for (g =
0; g < e.length; g++) k(e[g]); if (e = CKEDITOR.env.opera && !b || (typeof c == "function" ? c(i) !== false : c)) if (!t && CKEDITOR.env.ie && i.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) e = false; else if (!t && CKEDITOR.env.ie && (document.documentMode > 7 || i.name in CKEDITOR.dtd.tr || i.name in CKEDITOR.dtd.$listItem)) e = false; else { e = a(i); e = !e || i.name == "form" && e.name == "input" } e && i.add(n(b))
                    }
                }
            } function o(a, b) {
                if ((!t || !CKEDITOR.env.ie) && a.type == CKEDITOR.NODE_ELEMENT && a.name == "br" && !a.attributes["data-cke-eol"]) return true; var c; if (a.type ==
CKEDITOR.NODE_TEXT && (c = a.value.match(s))) { if (c.index) { g(a, new CKEDITOR.htmlParser.text(a.value.substring(0, c.index))); a.value = c[0] } if (CKEDITOR.env.ie && t && (!b || a.parent.name in h)) return true; if (!t) if ((c = a.previous) && c.name == "br" || !c || d(c)) return true } return false
            } var j = { elements: {} }, t = c == "html", h = CKEDITOR.tools.extend({}, D), q; for (q in h) "#" in B[q] || delete h[q]; for (q in h) j.elements[q] = i(t, b.config.fillEmptyBlocks !== false); j.root = i(t); j.elements.br = function (a) {
                return function (b) {
                    if (b.parent.type !=
CKEDITOR.NODE_DOCUMENT_FRAGMENT) { var c = b.attributes; if ("data-cke-bogus" in c || "data-cke-eol" in c) delete c["data-cke-bogus"]; else { for (c = b.next; c && e(c); ) c = c.next; var i = f(b); if (!c && d(b.parent)) { b = b.parent; c = n(a); i = b.children[b.children.length - 1]; b.children.push(c); c.parent = b; if (i) { i.next = c; c.previous = i } } else d(c) && (i && !d(i)) && g(c, n(a)) } }
                }
            } (t); return j
        } function c(a) { return a.enterMode != CKEDITOR.ENTER_BR && a.autoParagraph !== false ? a.enterMode == CKEDITOR.ENTER_DIV ? "div" : "p" : false } function a(a) {
            for (a = a.children[a.children.length -
1]; a && e(a); ) a = a.previous; return a
        } function f(a) { for (a = a.previous; a && e(a); ) a = a.previous; return a } function e(a) { return a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(a.value) || a.type == CKEDITOR.NODE_ELEMENT && a.attributes["data-cke-bookmark"] } function d(a) { return a && (a.type == CKEDITOR.NODE_ELEMENT && a.name in D || a.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) } function g(a, b) {
            var c = a.parent.children, d = CKEDITOR.tools.indexOf(c, a); c.splice(d, 0, b); c = a.previous; a.previous = b; b.next = a; b.parent = a.parent; if (c) {
                b.previous =
c; c.next = b
            }
        } function k(a) { var b = a.parent.children, c = CKEDITOR.tools.indexOf(b, a), d = a.previous, a = a.next; d && (d.next = a); a && (a.previous = d); b.splice(c, 1) } function h(a) { var b = a.parent; return b ? CKEDITOR.tools.indexOf(b.children, a) : -1 } function l(a) { a = a.attributes; a.contenteditable != "false" && (a["data-cke-editable"] = a.contenteditable ? "true" : 1); a.contenteditable = "false" } function m(a) { a = a.attributes; switch (a["data-cke-editable"]) { case "true": a.contenteditable = "true"; break; case "1": delete a.contenteditable } } function n(a) {
            return a.replace(v,
function (a, b, c) { return "<" + b + c.replace(t, function (a, b) { return !/^on/.test(b) && c.indexOf("data-cke-saved-" + b) == -1 ? " data-cke-saved-" + a + " data-cke-" + CKEDITOR.rnd + "-" + a : a }) + ">" })
        } function o(a) { return a.replace(w, function (a) { return "<cke:encoded>" + encodeURIComponent(a) + "</cke:encoded>" }) } function i(a) { return a.replace(I, function (a, b) { return decodeURIComponent(b) }) } function q(a) {
            return a.replace(/<\!--(?!{cke_protected})[\s\S]+?--\>/g, function (a) {
                return "<\!--" + A + "{C}" + encodeURIComponent(a).replace(/--/g,
"%2D%2D") + "--\>"
            })
        } function y(a) { return a.replace(/<\!--\{cke_protected\}\{C\}([\s\S]+?)--\>/g, function (a, b) { return decodeURIComponent(b) }) } function z(a, b) { var c = b._.dataStore; return a.replace(/<\!--\{cke_protected\}([\s\S]+?)--\>/g, function (a, b) { return decodeURIComponent(b) }).replace(/\{cke_protected_(\d+)\}/g, function (a, b) { return c && c[b] || "" }) } function j(a, b) {
            for (var c = [], d = b.config.protectedSource, n = b._.dataStore || (b._.dataStore = { id: 1 }), i = /<\!--\{cke_temp(comment)?\}(\d*?)--\>/g, d = [/<script[\s\S]*?<\/script>/gi,
/<noscript[\s\S]*?<\/noscript>/gi].concat(d), a = a.replace(/<\!--[\s\S]*?--\>/g, function (a) { return "<\!--{cke_tempcomment}" + (c.push(a) - 1) + "--\>" }), o = 0; o < d.length; o++) a = a.replace(d[o], function (a) { a = a.replace(i, function (a, b, d) { return c[d] }); return /cke_temp(comment)?/.test(a) ? a : "<\!--{cke_temp}" + (c.push(a) - 1) + "--\>" }); a = a.replace(i, function (a, b, d) { return "<\!--" + A + (b ? "{C}" : "") + encodeURIComponent(c[d]).replace(/--/g, "%2D%2D") + "--\>" }); return a.replace(/(['"]).*?\1/g, function (a) {
    return a.replace(/<\!--\{cke_protected\}([\s\S]+?)--\>/g,
function (a, b) { n[n.id] = decodeURIComponent(b); return "{cke_protected_" + n.id++ + "}" })
})
        } CKEDITOR.htmlDataProcessor = function (a) { var c, d; this.editor = a; this.dataFilter = c = new CKEDITOR.htmlParser.filter; this.htmlFilter = d = new CKEDITOR.htmlParser.filter; this.writer = new CKEDITOR.htmlParser.basicWriter; c.addRules(u); c.addRules(b(a, "data")); d.addRules(r); d.addRules(b(a, "html")) }; CKEDITOR.htmlDataProcessor.prototype = { toHtml: function (a, b, d) {
            var a = j(a, this.editor), a = n(a), a = o(a), a = a.replace(G, "$1cke:$2"), a = a.replace(Q,
"<cke:$1$2></cke:$1>"), a = CKEDITOR.env.opera ? a : a.replace(/(<pre\b[^>]*>)(\r\n|\n)/g, "$1$2$2"), e = this.editor.editable(), f; !b && b !== null && (b = e.getName()); e = b || e.getName(); if (CKEDITOR.env.ie && CKEDITOR.env.version < 9 && e == "pre") { e = "div"; a = "<pre>" + a + "</pre>"; f = 1 } e = this.editor.document.createElement(e); e.setHtml("a" + a); a = e.getHtml().substr(1); a = a.replace(RegExp(" data-cke-" + CKEDITOR.rnd + "-", "ig"), " "); f && (a = a.replace(/^<pre>|<\/pre>$/gi, "")); a = a.replace(C, "$1$2"); a = i(a); a = y(a); a = CKEDITOR.htmlParser.fragment.fromHtml(a,
b, d === false ? false : c(this.editor.config)); b = new CKEDITOR.htmlParser.basicWriter; a.writeChildrenHtml(b, this.dataFilter, 1); a = b.getHtml(true); return a = q(a)
        }, toDataFormat: function (a) { var b = this.editor.editable(), d = this.writer, a = CKEDITOR.htmlParser.fragment.fromHtml(a, b.getName(), c(this.editor.config)); d.reset(); a.writeChildrenHtml(d, this.htmlFilter, 1); d = d.getHtml(true); d = y(d); return d = z(d, this.editor) }
        }; var s = /(?:&nbsp;|\xa0)$/, A = "{cke_protected}", B = CKEDITOR.dtd, p = ["caption", "colgroup", "col", "thead", "tfoot",
"tbody"], D = CKEDITOR.tools.extend({}, B.$blockLimit, B.$block), u = { elements: {}, attributeNames: [[/^on/, "data-cke-pa-on"]] }, r = { elementNames: [[/^cke:/, ""], [/^\?xml:namespace$/, ""]], attributeNames: [[/^data-cke-(saved|pa)-/, ""], [/^data-cke-.*/, ""], ["hidefocus", ""]], elements: { $: function (a) { var b = a.attributes; if (b) { if (b["data-cke-temp"]) return false; for (var c = ["name", "href", "src"], d, n = 0; n < c.length; n++) { d = "data-cke-saved-" + c[n]; d in b && delete b[c[n]] } } return a }, table: function (a) {
    a.children.slice(0).sort(function (a,
b) { var c, d; if (a.type == CKEDITOR.NODE_ELEMENT && b.type == a.type) { c = CKEDITOR.tools.indexOf(p, a.name); d = CKEDITOR.tools.indexOf(p, b.name) } if (!(c > -1 && d > -1 && c != d)) { c = h(a); d = h(b) } return c > d ? 1 : -1 })
}, embed: function (a) { var b = a.parent; if (b && b.name == "object") { var c = b.attributes.width, b = b.attributes.height; c && (a.attributes.width = c); b && (a.attributes.height = b) } }, param: function (a) { a.children = []; a.isEmpty = true; return a }, a: function (a) { if (!a.children.length && !a.attributes.name && !a.attributes["data-cke-saved-name"]) return false },
    span: function (a) { a.attributes["class"] == "Apple-style-span" && delete a.name }, html: function (a) { delete a.attributes.contenteditable; delete a.attributes["class"] }, body: function (a) { delete a.attributes.spellcheck; delete a.attributes.contenteditable }, style: function (a) { var b = a.children[0]; b && b.value && (b.value = CKEDITOR.tools.trim(b.value)); if (!a.attributes.type) a.attributes.type = "text/css" }, title: function (a) { var b = a.children[0]; b && (b.value = a.attributes["data-cke-title"] || "") }
}, attributes: { "class": function (a) {
    return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g,
"")) || false
}
}
}; if (CKEDITOR.env.ie) r.attributes.style = function (a) { return a.replace(/(^|;)([^\:]+)/g, function (a) { return a.toLowerCase() }) }; for (var F in { input: 1, textarea: 1 }) { u.elements[F] = l; r.elements[F] = m } var v = /<(a|area|img|input|source)\b([^>]*)>/gi, t = /\b(on\w+|href|src|name)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi, w = /(?:<style(?=[ >])[^>]*>[\s\S]*<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi, I = /<cke:encoded>([^<]*)<\/cke:encoded>/gi, G = /(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,
C = /(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi, Q = /<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi
    })();
    CKEDITOR.htmlParser.element = function (b, c) { this.name = b; this.attributes = c || {}; this.children = []; var a = b || "", f = a.match(/^cke:(.*)/); f && (a = f[1]); a = !(!CKEDITOR.dtd.$nonBodyContent[a] && !CKEDITOR.dtd.$block[a] && !CKEDITOR.dtd.$listItem[a] && !CKEDITOR.dtd.$tableContent[a] && !(CKEDITOR.dtd.$nonEditable[a] || a == "br")); this.isEmpty = !!CKEDITOR.dtd.$empty[b]; this.isUnknown = !CKEDITOR.dtd[b]; this._ = { isBlockLike: a, hasInlineStarted: this.isEmpty || !a} };
    CKEDITOR.htmlParser.cssStyle = function (b) {
        var c = {}; ((b instanceof CKEDITOR.htmlParser.element ? b.attributes.style : b) || "").replace(/&quot;/g, '"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, b, e) { b == "font-family" && (e = e.replace(/["']/g, "")); c[b.toLowerCase()] = e }); return { rules: c, populate: function (a) { var b = this.toString(); if (b) a instanceof CKEDITOR.dom.element ? a.setAttribute("style", b) : a instanceof CKEDITOR.htmlParser.element ? a.attributes.style = b : a.style = b }, toString: function () {
            var a = [], b;
            for (b in c) c[b] && a.push(b, ":", c[b], ";"); return a.join("")
        }
        }
    };
    (function () {
        var b = function (b, a) { b = b[0]; a = a[0]; return b < a ? -1 : b > a ? 1 : 0 }; CKEDITOR.htmlParser.element.prototype = { type: CKEDITOR.NODE_ELEMENT, add: CKEDITOR.htmlParser.fragment.prototype.add, clone: function () { return new CKEDITOR.htmlParser.element(this.name, this.attributes) }, writeHtml: function (c, a) {
            var f = this.attributes, e = this, d = e.name, g, k, h, l; e.filterChildren = function () {
                if (!l) {
                    var b = new CKEDITOR.htmlParser.basicWriter; CKEDITOR.htmlParser.fragment.prototype.writeChildrenHtml.call(e, b, a); e.children = (new CKEDITOR.htmlParser.fragment.fromHtml(b.getHtml(),
e.clone(), 0)).children; l = 1
                }
            }; if (a) { if (!this.parent) a.onRoot(this); for (; ; ) { if (!(d = a.onElementName(d))) return; e.name = d; if (!(e = a.onElement(e))) return; e.parent = this.parent; if (e.name == d) break; if (e.type != CKEDITOR.NODE_ELEMENT) { e.writeHtml(c, a); return } d = e.name; if (!d) { for (var d = 0, m = this.children.length; d < m; d++) this.children[d].parent = e.parent; this.writeChildrenHtml.call(e, c, l ? null : a); return } } f = e.attributes } c.openTag(d, f); for (var m = [], n = 0; n < 2; n++) for (g in f) {
                k = g; h = f[g]; if (n == 1) m.push([g, h]); else if (a) {
                    for (; ; ) if (k =
a.onAttributeName(g)) if (k != g) { delete f[g]; g = k } else break; else { delete f[g]; break } k && ((h = a.onAttribute(e, k, h)) === false ? delete f[k] : f[k] = h)
                }
            } c.sortAttributes && m.sort(b); f = m.length; for (n = 0; n < f; n++) { g = m[n]; c.attribute(g[0], g[1]) } c.openTagClose(d, e.isEmpty); if (!e.isEmpty) { this.writeChildrenHtml.call(e, c, l ? null : a); c.closeTag(d) }
        }, writeChildrenHtml: function (b, a) { CKEDITOR.htmlParser.fragment.prototype.writeChildrenHtml.apply(this, arguments) }
        }
    })();
    (function () { var b = {}; CKEDITOR.template = function (c) { if (b[c]) this.output = b[c]; else { var a = c.replace(/'/g, "\\'").replace(/{([^}]+)}/g, function (a, b) { return "',data['" + b + "']==undefined?'{" + b + "}':data['" + b + "'],'" }); this.output = b[c] = Function("data", "buffer", "return buffer?buffer.push('" + a + "'):['" + a + "'].join('');") } } })(); delete CKEDITOR.loadFullCore; CKEDITOR.instances = {}; CKEDITOR.document = new CKEDITOR.dom.document(document);
    CKEDITOR.add = function (b) { CKEDITOR.instances[b.name] = b; b.on("focus", function () { if (CKEDITOR.currentInstance != b) { CKEDITOR.currentInstance = b; CKEDITOR.fire("currentInstance") } }); b.on("blur", function () { if (CKEDITOR.currentInstance == b) { CKEDITOR.currentInstance = null; CKEDITOR.fire("currentInstance") } }); CKEDITOR.fire("instance", null, b) }; CKEDITOR.remove = function (b) { delete CKEDITOR.instances[b.name] };
    (function () { var b = {}; CKEDITOR.addTemplate = function (c, a) { var f = b[c]; if (f) return f; f = { name: c, source: a }; CKEDITOR.fire("template", f); return b[c] = new CKEDITOR.template(f.source) }; CKEDITOR.getTemplate = function (c) { return b[c] } })(); (function () { var b = []; CKEDITOR.addCss = function (c) { b.push(c) }; CKEDITOR.getCss = function () { return b.join("\n") } })(); CKEDITOR.on("instanceDestroyed", function () { CKEDITOR.tools.isEmpty(this.instances) && CKEDITOR.fire("reset") }); CKEDITOR.TRISTATE_ON = 1; CKEDITOR.TRISTATE_OFF = 2;
    CKEDITOR.TRISTATE_DISABLED = 0;
    (function () {
        CKEDITOR.inline = function (b, c) {
            if (!CKEDITOR.env.isCompatible) return null; b = CKEDITOR.dom.element.get(b); if (b.getEditor()) throw 'The editor instance "' + b.getEditor().name + '" is already attached to the provided element.'; var a = new CKEDITOR.editor(c, b, CKEDITOR.ELEMENT_MODE_INLINE); a.setData(b.getHtml(), null, true); a.on("loaded", function () {
                a.fire("uiReady"); a.editable(b); a.container = b; a.setData(a.getData(1)); a.fire("contentDom"); a.mode = "wysiwyg"; a.fire("mode"); a.fireOnce("instanceReady"); CKEDITOR.fire("instanceReady",
null, a); a.resetDirty()
            }, null, null, 1E4); a.on("destroy", function () { a.element.clearCustomData(); delete a.element }); return a
        }; CKEDITOR.inlineAll = function () { var b, c, a; for (a in CKEDITOR.dtd.$editable) for (var f = CKEDITOR.document.getElementsByTag(a), e = 0, d = f.count(); e < d; e++) { b = f.getItem(e); if (b.getAttribute("contenteditable") == "true") { c = { element: b, config: {} }; CKEDITOR.fire("inline", c) !== false && CKEDITOR.inline(b, c.config) } } }; CKEDITOR.domReady(function () { !CKEDITOR.disableAutoInline && CKEDITOR.inlineAll() })
    })();
    CKEDITOR.replaceClass = "ckeditor";
    (function () {
        function b(b, e, k, h) {
            if (!CKEDITOR.env.isCompatible) return null; b = CKEDITOR.dom.element.get(b); if (b.getEditor()) throw 'The editor instance "' + b.getEditor().name + '" is already attached to the provided element.'; var l = new CKEDITOR.editor(e, b, h); h == CKEDITOR.ELEMENT_MODE_REPLACE && b.setStyle("visibility", "hidden"); k && l.setData(k, null, true); l.on("loaded", function () {
                a(l); h == CKEDITOR.ELEMENT_MODE_REPLACE && l.config.autoUpdateElement && f(l); l.setMode(l.config.startupMode, function () {
                    l.fireOnce("instanceReady");
                    CKEDITOR.fire("instanceReady", null, l); l.resetDirty()
                })
            }); l.on("destroy", c); return l
        } function c() { var a = this.container, b = this.element; if (a) { a.clearCustomData(); a.remove() } if (b) { b.clearCustomData(); this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && b.show(); delete this.element } } function a(a) {
            var b = a.name, c = a.element, f = a.elementMode, l = a.fire("uiSpace", { space: "top", html: "" }).html, m = a.fireOnce("uiSpace", { space: "bottom", html: "" }).html; e || (e = CKEDITOR.addTemplate("maincontainer", '<{outerEl} id="cke_{name}" class="{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} ' +
CKEDITOR.env.cssClass + '"  dir="{langDir}" lang="{langCode}" role="application" aria-labelledby="cke_{name}_arialbl"><span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span><{outerEl} class="cke_inner cke_reset" role="presentation">{topHtml}<{outerEl} id="{contentId}" class="cke_contents cke_reset" role="presentation"></{outerEl}>{bottomHtml}</{outerEl}></{outerEl}>')); b = CKEDITOR.dom.element.createFromHtml(e.output({ id: a.id, name: b, langDir: a.lang.dir, langCode: a.langCode, voiceLabel: a.lang.editor,
    topHtml: l ? '<span id="' + a.ui.spaceId("top") + '" class="cke_top cke_reset_all" role="presentation" style="height:auto">' + l + "</span>" : "", contentId: a.ui.spaceId("contents"), bottomHtml: m ? '<span id="' + a.ui.spaceId("bottom") + '" class="cke_bottom cke_reset_all" role="presentation">' + m + "</span>" : "", outerEl: CKEDITOR.env.ie ? "span" : "div"
})); if (f == CKEDITOR.ELEMENT_MODE_REPLACE) { c.hide(); b.insertAfter(c) } else c.append(b); a.container = b; l && a.ui.space("top").unselectable(); m && a.ui.space("bottom").unselectable(); c =
a.config.width; f = a.config.height; c && b.setStyle("width", CKEDITOR.tools.cssLength(c)); f && a.ui.space("contents").setStyle("height", CKEDITOR.tools.cssLength(f)); b.disableContextMenu(); CKEDITOR.env.webkit && b.on("focus", function () { a.focus() }); a.fireOnce("uiReady")
        } function f(a) {
            var b = a.element; if (a.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && b.is("textarea")) {
                var c = b.$.form && new CKEDITOR.dom.element(b.$.form); if (c) {
                    var e = function () { a.updateElement() }; c.on("submit", e); if (!c.$.submit.nodeName && !c.$.submit.length) c.$.submit =
CKEDITOR.tools.override(c.$.submit, function (b) { return function () { a.updateElement(); b.apply ? b.apply(this, arguments) : b() } }); a.on("destroy", function () { c.removeListener("submit", e) })
                }
            }
        } CKEDITOR.replace = function (a, c) { return b(a, c, null, CKEDITOR.ELEMENT_MODE_REPLACE) }; CKEDITOR.appendTo = function (a, c, e) { return b(a, c, e, CKEDITOR.ELEMENT_MODE_APPENDTO) }; CKEDITOR.replaceAll = function () {
            for (var a = document.getElementsByTagName("textarea"), b = 0; b < a.length; b++) {
                var c = null, e = a[b]; if (e.name || e.id) {
                    if (typeof arguments[0] ==
"string") { if (!RegExp("(?:^|\\s)" + arguments[0] + "(?:$|\\s)").test(e.className)) continue } else if (typeof arguments[0] == "function") { c = {}; if (arguments[0](e, c) === false) continue } this.replace(e, c)
                }
            }
        }; CKEDITOR.editor.prototype.addMode = function (a, b) { (this._.modes || (this._.modes = {}))[a] = b }; CKEDITOR.editor.prototype.setMode = function (a, b) {
            var c = this, e = this._.modes; if (!(a == c.mode || !e || !e[a])) {
                c.fire("beforeSetMode", a); if (c.mode) {
                    var f = c.checkDirty(); c._.previousMode = c.mode; c.fire("beforeModeUnload"); c.editable(0);
                    c.mode = ""
                } this._.modes[a](function () { c.mode = a; if (f !== void 0) { c.mayBeDirty = true; !f && c.resetDirty() } setTimeout(function () { c.fire("mode"); b && b.call(c) }, 0) })
            }
        }; CKEDITOR.editor.prototype.resize = function (a, b, c, e) {
            var f = this.container, m = this.ui.space("contents"), n = CKEDITOR.env.webkit && this.document && this.document.getWindow().$.frameElement, e = e ? f.getChild(1) : f; e.setSize("width", a, true); n && (n.style.width = "1%"); m.setStyle("height", Math.max(b - (c ? 0 : (e.$.offsetHeight || 0) - (m.$.clientHeight || 0)), 0) + "px"); n && (n.style.width =
"100%"); this.fire("resize")
        }; CKEDITOR.editor.prototype.getResizable = function (a) { return a ? this.ui.space("contents") : this.container }; var e; CKEDITOR.domReady(function () { CKEDITOR.replaceClass && CKEDITOR.replaceAll(CKEDITOR.replaceClass) })
    })(); CKEDITOR.config.startupMode = "wysiwyg";
    (function () {
        function b(b) {
            var c = b.editor, d = c.editable(), e = b.data.path, f = e.blockLimit, g = b.data.selection.getRanges()[0], j = c.config.enterMode; if (CKEDITOR.env.gecko) { var h = e.block || e.blockLimit || e.root, l = h && h.getLast(a); h && (h.isBlockBoundary() && (!l || !(l.type == CKEDITOR.NODE_ELEMENT && l.isBlockBoundary())) && !h.is("pre") && !h.getBogus()) && h.appendBogus() } if (c.config.autoParagraph !== false && j != CKEDITOR.ENTER_BR && g.collapsed && d.equals(f) && !e.block) {
                d = g.clone(); d.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS); e = new CKEDITOR.dom.walker(d);
                e.guard = function (b) { return !a(b) || b.type == CKEDITOR.NODE_COMMENT || b.isReadOnly() }; if (!e.checkForward() || d.checkStartOfBlock() && d.checkEndOfBlock()) { c = g.fixBlock(true, c.config.enterMode == CKEDITOR.ENTER_DIV ? "div" : "p"); if (CKEDITOR.env.ie) (c = c.getFirst(a)) && (c.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(c.getText()).match(/^(?:&nbsp;|\xa0)$/)) && c.remove(); g.select(); b.cancel() }
            }
        } function c(a) { var b = a.data.getTarget(); if (b.is("input")) { b = b.getAttribute("type"); (b == "submit" || b == "reset") && a.data.preventDefault() } }
        function a(a) { return h(a) && l(a) } function f(a, b) { return function (c) { var d = CKEDITOR.dom.element.get(c.data.$.toElement || c.data.$.fromElement || c.data.$.relatedTarget); (!d || !b.equals(d) && !b.contains(d)) && a.call(this, c) } } function e(b) {
            var c, d = b.getRanges()[0], b = b.root, e = d.startPath(), f = { table: 1, ul: 1, ol: 1, dl: 1 }, g = CKEDITOR.dom.walker.bogus(); if (e.contains(f)) {
                var j = d.clone(); j.collapse(1); j.setStartAt(b, CKEDITOR.POSITION_AFTER_START); j = new CKEDITOR.dom.walker(j); e = function (b, d) {
                    return function (b, n) {
                        n && (b.type ==
CKEDITOR.NODE_ELEMENT && b.is(f)) && (c = b); if (a(b) && !n && (!d || !g(b))) return false
                    }
                }; j.guard = e(j); j.checkBackward(); if (c) { j = d.clone(); j.collapse(); j.setEndAt(b, CKEDITOR.POSITION_BEFORE_END); j = new CKEDITOR.dom.walker(j); j.guard = e(j, 1); c = 0; j.checkForward(); return c }
            } return null
        } function d(a) { a.editor.focus(); a.editor.fire("saveSnapshot") } function g(a, b) { var c = a.editor; !b && c.getSelection().scrollIntoView(); setTimeout(function () { c.fire("saveSnapshot") }, 0) } CKEDITOR.editable = CKEDITOR.tools.createClass({ base: CKEDITOR.dom.element,
            $: function (a, b) { this.base(b.$ || b); this.editor = a; this.hasFocus = false; this.setup() }, proto: { focus: function () { this.$[CKEDITOR.env.ie && this.getDocument().equals(CKEDITOR.document) ? "setActive" : "focus"](); CKEDITOR.env.safari && !this.isInline() && (CKEDITOR.document.getActive().equals(this.getWindow().getFrame()) || this.getWindow().focus()) }, on: function (a, b) {
                var c = Array.prototype.slice.call(arguments, 0); if (CKEDITOR.env.ie && /^focus|blur$/.exec(a)) { a = a == "focus" ? "focusin" : "focusout"; b = f(b, this); c[0] = a; c[1] = b } return CKEDITOR.dom.element.prototype.on.apply(this,
c)
            }, attachListener: function (a, b, c, d, e, f) { !this._.listeners && (this._.listeners = []); var g = Array.prototype.slice.call(arguments, 1); this._.listeners.push(a.on.apply(a, g)) }, clearListeners: function () { var a = this._.listeners; try { for (; a.length; ) a.pop().removeListener() } catch (b) { } }, restoreAttrs: function () { var a = this._.attrChanges, b, c; for (c in a) if (a.hasOwnProperty(c)) { b = a[c]; b !== null ? this.setAttribute(c, b) : this.removeAttribute(c) } }, attachClass: function (a) {
                var b = this.getCustomData("classes"); if (!this.hasClass(a)) {
                    !b &&
(b = []); b.push(a); this.setCustomData("classes", b); this.addClass(a)
                }
            }, changeAttr: function (a, b) { var c = this.getAttribute(a); if (b !== c) { !this._.attrChanges && (this._.attrChanges = {}); a in this._.attrChanges || (this._.attrChanges[a] = c); this.setAttribute(a, b) } }, insertHtml: function (a, b) { d(this); m(this, b == "text" ? "text" : "html", a) }, insertText: function (a) {
                d(this); var b = this.editor, c = b.getSelection().getStartElement().hasAscendant("pre", true) ? CKEDITOR.ENTER_BR : b.config.enterMode, b = c == CKEDITOR.ENTER_BR, e = CKEDITOR.tools,
a = e.htmlEncode(a.replace(/\r\n/g, "\n")), a = a.replace(/\t/g, "&nbsp;&nbsp; &nbsp;"), c = c == CKEDITOR.ENTER_P ? "p" : "div"; if (!b) { var f = /\n{2}/g; if (f.test(a)) var g = "<" + c + ">", j = "</" + c + ">", a = g + a.replace(f, function () { return j + g }) + j } a = a.replace(/\n/g, "<br>"); b || (a = a.replace(RegExp("<br>(?=</" + c + ">)"), function (a) { return e.repeat(a, 2) })); a = a.replace(/^ | $/g, "&nbsp;"); a = a.replace(/(>|\s) /g, function (a, b) { return b + "&nbsp;" }).replace(/ (?=<)/g, "&nbsp;"); m(this, "text", a)
            }, insertElement: function (b) {
                d(this); for (var c =
this.editor, e = c.config.enterMode, f = c.getSelection(), h = f.getRanges(), l = b.getName(), j = CKEDITOR.dtd.$block[l], m, k, B, p = h.length - 1; p >= 0; p--) {
                    m = h[p]; if (!m.checkReadOnly()) {
                        m.deleteContents(1); k = !p && b || b.clone(1); var D, u; if (j) for (; (D = m.getCommonAncestor(0, 1)) && (u = CKEDITOR.dtd[D.getName()]) && (!u || !u[l]); ) if (D.getName() in CKEDITOR.dtd.span) m.splitElement(D); else if (m.checkStartOfBlock() && m.checkEndOfBlock()) { m.setStartBefore(D); m.collapse(true); D.remove() } else m.splitBlock(e == CKEDITOR.ENTER_DIV ? "div" : "p",
c.editable()); m.insertNode(k); B || (B = k)
                    }
                } if (B) { m.moveToPosition(B, CKEDITOR.POSITION_AFTER_END); if (j) if ((b = B.getNext(a)) && b.type == CKEDITOR.NODE_ELEMENT && b.is(CKEDITOR.dtd.$block)) b.getDtd()["#"] ? m.moveToElementEditStart(b) : m.moveToElementEditEnd(B); else if (!b && e != CKEDITOR.ENTER_BR) { b = m.fixBlock(true, e == CKEDITOR.ENTER_DIV ? "div" : "p"); m.moveToElementEditStart(b) } } f.selectRanges([m]); g(this, CKEDITOR.env.opera)
            }, setData: function (a, b) {
                !b && this.editor.dataProcessor && (a = this.editor.dataProcessor.toHtml(a));
                this.setHtml(a); this.editor.fire("dataReady")
            }, getData: function (a) { var b = this.getHtml(); !a && this.editor.dataProcessor && (b = this.editor.dataProcessor.toDataFormat(b)); return b }, setReadOnly: function (a) { this.setAttribute("contenteditable", !a) }, detach: function () { this.removeClass("cke_editable"); var a = this.editor; this._.detach(); delete a.document; delete a.window }, isInline: function () { return this.getDocument().equals(CKEDITOR.document) }, setup: function () {
                var a = this.editor; this.attachListener(a, "beforeGetData",
function () { var b = this.getData(); this.is("textarea") || a.config.ignoreEmptyParagraph !== false && (b = b.replace(k, function (a, b) { return b })); a.setData(b, null, 1) }, this); this.attachListener(a, "getSnapshot", function (a) { a.data = this.getData(1) }, this); this.attachListener(a, "afterSetData", function () { this.setData(a.getData(1)) }, this); this.attachListener(a, "loadSnapshot", function (a) { this.setData(a.data, 1) }, this); this.attachListener(a, "beforeFocus", function () {
    var b = a.getSelection(); (b = b && b.getNative()) && b.type == "Control" ||
this.focus()
}, this); this.attachListener(a, "insertHtml", function (a) { this.insertHtml(a.data.dataValue, a.data.mode) }, this); this.attachListener(a, "insertElement", function (a) { this.insertElement(a.data) }, this); this.attachListener(a, "insertText", function (a) { this.insertText(a.data) }, this); this.setReadOnly(a.readOnly); this.attachClass("cke_editable"); this.attachClass(a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? "cke_editable_inline" : a.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE || a.elementMode == CKEDITOR.ELEMENT_MODE_APPENDTO ?
"cke_editable_themed" : ""); this.attachClass("cke_contents_" + a.config.contentsLangDirection); a.keystrokeHandler.blockedKeystrokes[8] = a.readOnly; a.keystrokeHandler.attach(this); this.on("blur", function (a) { CKEDITOR.env.opera && CKEDITOR.document.getActive().equals(this.isInline() ? this : this.getWindow().getFrame()) ? a.cancel() : this.hasFocus = false }, null, null, -1); this.on("focus", function () { this.hasFocus = true }, null, null, -1); a.focusManager.add(this); if (this.equals(CKEDITOR.document.getActive())) {
                    this.hasFocus =
true; a.once("contentDom", function () { a.focusManager.focus() })
                } if (!this.is("textarea")) {
                    a.document = this.getDocument(); a.window = this.getWindow(); var b = a.document; this.changeAttr("spellcheck", !a.config.disableNativeSpellChecker); var d = a.config.contentsLangDirection; this.getDirection(1) != d && this.changeAttr("dir", d); a.document.equals(CKEDITOR.document) && this.changeAttr("tabindex", a.tabIndex); var f = CKEDITOR.getCss(); if (f) {
                        d = b.getHead(); if (!d.getCustomData("stylesheet")) {
                            f = b.appendStyleText(f); f = new CKEDITOR.dom.element(f.ownerNode ||
f.owningElement); d.setCustomData("stylesheet", f); f.data("cke-temp", 1)
                        }
                    } d = b.getCustomData("stylesheet_ref") || 0; b.setCustomData("stylesheet_ref", d + 1); this.setCustomData("cke_includeReadonly", !a.config.disableReadonlyStyling); this.attachListener(this, "click", function (a) { var a = a.data, b = a.getTarget(); b.is("a") && (a.$.button != 2 && b.isReadOnly()) && a.preventDefault() }); this.attachListener(a, "key", function (b) {
                        if (a.readOnly) return false; var c = b.data.keyCode, d; if (c in { 8: 1, 46: 1 }) {
                            var i = a.getSelection(), b = i.getRanges()[0],
f = b.startPath(), o, g, l, c = c == 8; if (i = e(i)) { a.fire("saveSnapshot"); b.moveToPosition(i, CKEDITOR.POSITION_BEFORE_START); i.remove(); b.select(); a.fire("saveSnapshot"); d = 1 } else if (b.collapsed) if ((o = f.block) && b[c ? "checkStartOfBlock" : "checkEndOfBlock"]() && (l = o[c ? "getPrevious" : "getNext"](h)) && l.is("table")) { a.fire("saveSnapshot"); b[c ? "checkEndOfBlock" : "checkStartOfBlock"]() && o.remove(); b["moveToElementEdit" + (c ? "End" : "Start")](l); b.select(); a.fire("saveSnapshot"); d = 1 } else if (f.blockLimit && f.blockLimit.is("td") &&
(g = f.blockLimit.getAscendant("table")) && b.checkBoundaryOfElement(g, c ? CKEDITOR.START : CKEDITOR.END) && (l = g[c ? "getPrevious" : "getNext"](h))) { a.fire("saveSnapshot"); b["moveToElementEdit" + (c ? "End" : "Start")](l); b.checkStartOfBlock() && b.checkEndOfBlock() ? l.remove() : b.select(); a.fire("saveSnapshot"); d = 1 } else if ((g = f.contains(["td", "th", "caption"])) && b.checkBoundaryOfElement(g, c ? CKEDITOR.START : CKEDITOR.END)) if ((l = g[c ? "getPreviousSourceNode" : "getNextSourceNode"](1, CKEDITOR.NODE_ELEMENT)) && !l.isReadOnly() && b.root.contains(l)) {
                                b[c ?
"moveToElementEditEnd" : "moveToElementEditStart"](l); b.select(); d = 1
                            }
                        } return !d
                    }); CKEDITOR.env.ie && this.attachListener(this, "click", c); !CKEDITOR.env.ie && !CKEDITOR.env.opera && this.attachListener(this, "mousedown", function (b) { var c = b.data.getTarget(); if (c.is("img", "hr", "input", "textarea", "select")) { a.getSelection().selectElement(c); c.is("input", "textarea", "select") && b.data.preventDefault() } }); CKEDITOR.env.gecko && this.attachListener(this, "mouseup", function (b) {
                        if (b.data.$.button == 2) {
                            b = b.data.getTarget();
                            if (!b.getOuterHtml().replace(k, "")) { var c = a.createRange(); c.moveToElementEditStart(b); c.select(true) }
                        }
                    }); if (CKEDITOR.env.webkit) { this.attachListener(this, "click", function (a) { a.data.getTarget().is("input", "select") && a.data.preventDefault() }); this.attachListener(this, "mouseup", function (a) { a.data.getTarget().is("input", "textarea") && a.data.preventDefault() }) }
                }
            }
            }, _: { detach: function () {
                this.editor.setData(this.editor.getData(), 0, 1); this.clearListeners(); this.restoreAttrs(); var a; if (a = this.removeCustomData("classes")) for (; a.length; ) this.removeClass(a.pop());
                a = this.getDocument(); var b = a.getHead(); if (b.getCustomData("stylesheet")) { var c = a.getCustomData("stylesheet_ref"); if (--c) a.setCustomData("stylesheet_ref", c); else { a.removeCustomData("stylesheet_ref"); b.removeCustomData("stylesheet").remove() } } delete this.editor
            }
            }
        }); CKEDITOR.editor.prototype.editable = function (a) { var b = this._.editable; if (b && a) return 0; if (arguments.length) b = this._.editable = a ? a instanceof CKEDITOR.editable ? a : new CKEDITOR.editable(this, a) : (b && b.detach(), null); return b }; var k = /(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi,
h = CKEDITOR.dom.walker.whitespaces(true), l = CKEDITOR.dom.walker.bookmark(false, true); CKEDITOR.on("instanceLoaded", function (a) {
    var c = a.editor; c.on("insertElement", function (a) { a = a.data; if (a.type == CKEDITOR.NODE_ELEMENT && (a.is("input") || a.is("textarea"))) { a.getAttribute("contentEditable") != "false" && a.data("cke-editable", a.hasAttribute("contenteditable") ? "true" : "1"); a.setAttribute("contentEditable", false) } }); c.on("selectionChange", function (a) {
        if (!c.readOnly) {
            var d = c.getSelection(); if (d && !d.isLocked) {
                d = c.checkDirty();
                c.fire("lockSnapshot"); b(a); c.fire("unlockSnapshot"); !d && c.resetDirty()
            }
        }
    })
}); CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}"); var m = function () {
    function b(a) { return a.type == CKEDITOR.NODE_ELEMENT } function c(a, d) {
        var e, f, i, g, t = [], h = d.range.startContainer; e = d.range.startPath(); for (var h = j[h.getName()], l = 0, m = a.getChildren(), q = m.count(), k = -1, z = -1, y = 0, s = e.contains(j.$list); l < q; ++l) {
            e = m.getItem(l); if (b(e)) {
                i = e.getName(); if (s && i in CKEDITOR.dtd.$list) t =
t.concat(c(e, d)); else { g = !!h[i]; if (i == "br" && e.data("cke-eol") && (!l || l == q - 1)) { y = (f = l ? t[l - 1].node : m.getItem(l + 1)) && (!b(f) || !f.is("br")); f = f && b(f) && j.$block[f.getName()] } k == -1 && !g && (k = l); g || (z = l); t.push({ isElement: 1, isLineBreak: y, isBlock: e.isBlockBoundary(), hasBlockSibling: f, node: e, name: i, allowed: g }); f = y = 0 }
            } else t.push({ isElement: 0, node: e, allowed: 1 })
        } if (k > -1) t[k].firstNotAllowed = 1; if (z > -1) t[z].lastNotAllowed = 1; return t
    } function d(a, c) {
        var e = [], f = a.getChildren(), o = f.count(), g, t = 0, h = j[c], l = !a.is(j.$inline) ||
a.is("br"); for (l && e.push(" "); t < o; t++) { g = f.getItem(t); b(g) && !g.is(h) ? e = e.concat(d(g, c)) : e.push(g) } l && e.push(" "); return e
    } function e(a) { return a && b(a) && (a.is(j.$removeEmpty) || a.is("a") && !a.isBlockBoundary()) } function f(a, c, d, e) {
        var i = a.clone(), o, g; i.setEndAt(c, CKEDITOR.POSITION_BEFORE_END); if ((o = (new CKEDITOR.dom.walker(i)).next()) && b(o) && l[o.getName()] && (g = o.getPrevious()) && b(g) && !g.getParent().equals(a.startContainer) && d.contains(g) && e.contains(o) && o.isIdentical(g)) {
            o.moveChildren(g); o.remove();
            f(a, c, d, e)
        }
    } function h(a, c) { function d(a, c) { if (c.isBlock && c.isElement && !c.node.is("br") && b(a) && a.is("br")) { a.remove(); return 1 } } var e = c.endContainer.getChild(c.endOffset), f = c.endContainer.getChild(c.endOffset - 1); e && d(e, a[a.length - 1]); if (f && d(f, a[0])) { c.setEnd(c.endContainer, c.endOffset - 1); c.collapse() } } var j = CKEDITOR.dtd, l = { p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, ul: 1, ol: 1, li: 1, pre: 1, dl: 1, blockquote: 1 }, m = { p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, k = CKEDITOR.tools.extend({}, j.$inline); delete k.br; return function (l,
s, u) {
        var r = l.editor; l.getDocument(); var F = r.getSelection().getRanges()[0]; if (!F.checkReadOnly()) {
            var v = (new CKEDITOR.dom.elementPath(F.startContainer, F.root)).blockLimit || F.root, s = { type: s, editable: l, editor: r, range: F, blockLimit: v, mergeCandidates: [], zombies: [] }, r = s.range, v = s.mergeCandidates, t, w, I, G, C; if (s.type == "text" && r.shrink(CKEDITOR.SHRINK_ELEMENT, true, false)) { w = CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>", r.document); r.insertNode(w); r.setStartAfter(w) } I = new CKEDITOR.dom.elementPath(r.startContainer);
            s.endPath = G = new CKEDITOR.dom.elementPath(r.endContainer); if (!r.collapsed) { t = G.block || G.blockLimit; var Q = r.getCommonAncestor(); t && (!t.equals(Q) && !t.contains(Q) && r.checkEndOfBlock()) && s.zombies.push(t); r.deleteContents() } for (; (C = b(r.startContainer) && r.startContainer.getChild(r.startOffset - 1)) && b(C) && C.isBlockBoundary() && I.contains(C); ) r.moveToPosition(C, CKEDITOR.POSITION_BEFORE_END); f(r, s.blockLimit, I, G); if (w) { r.setEndBefore(w); r.collapse(); w.remove() } w = r.startPath(); if (t = w.contains(e, false, 1)) {
                r.splitElement(t);
                s.inlineStylesRoot = t; s.inlineStylesPeak = w.lastElement
            } w = r.createBookmark(); (t = w.startNode.getPrevious(a)) && b(t) && e(t) && v.push(t); (t = w.startNode.getNext(a)) && b(t) && e(t) && v.push(t); for (t = w.startNode; (t = t.getParent()) && e(t); ) v.push(t); r.moveToBookmark(w); if (u) {
                C = u; u = s.range; if (s.type == "text" && s.inlineStylesRoot) {
                    w = C; C = s.inlineStylesPeak; r = C.getDocument().createText("{cke-peak}"); for (v = s.inlineStylesRoot.getParent(); !C.equals(v); ) { r = r.appendTo(C.clone()); C = C.getParent() } C = r.getOuterHtml().replace("{cke-peak}",
w)
                } w = s.blockLimit.getName(); if (/^\s+|\s+$/.test(C) && "span" in CKEDITOR.dtd[w]) { var K = '<span data-cke-marker="1">&nbsp;</span>'; C = K + C + K } C = s.editor.dataProcessor.toHtml(C, null, false); w = u.document.createElement("body"); w.setHtml(C); if (K) { w.getFirst().remove(); w.getLast().remove() } if ((K = u.startPath().block) && !(K.getChildCount() == 1 && K.getBogus()))a:
                {
                    var E; if (w.getChildCount() == 1 && b(E = w.getFirst()) && E.is(m)) {
                        K = E.getElementsByTag("*"); u = 0; for (r = K.count(); u < r; u++) { C = K.getItem(u); if (!C.is(k)) break a } E.moveChildren(E.getParent(1));
                        E.remove()
                    }
                } s.dataWrapper = w; E = s.range; var K = E.document, x, u = s.blockLimit; w = 0; var J; C = []; var H, N, v = r = 0, L, O; I = E.startContainer; t = s.endPath.elements[0]; var P; G = t.getPosition(I); Q = !!t.getCommonAncestor(I) && G != CKEDITOR.POSITION_IDENTICAL && !(G & CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED); I = c(s.dataWrapper, s); for (h(I, E); w < I.length; w++) {
                    G = I[w]; if (x = G.isLineBreak) {
                        x = E; L = u; var M = void 0, R = void 0; if (G.hasBlockSibling) x = 1; else {
                            M = x.startContainer.getAscendant(j.$block, 1); if (!M || !M.is({ div: 1, p: 1 })) x =
0; else { R = M.getPosition(L); if (R == CKEDITOR.POSITION_IDENTICAL || R == CKEDITOR.POSITION_CONTAINS) x = 0; else { L = x.splitElement(M); x.moveToPosition(L, CKEDITOR.POSITION_AFTER_START); x = 1 } }
                        }
                    } if (x) v = w > 0; else {
                        x = E.startPath(); if (!G.isBlock && (N = s.editor.config.enterMode != CKEDITOR.ENTER_BR && s.editor.config.autoParagraph !== false ? s.editor.config.enterMode == CKEDITOR.ENTER_DIV ? "div" : "p" : false) && !x.block && x.blockLimit && x.blockLimit.equals(E.root)) {
                            N = K.createElement(N); !CKEDITOR.env.ie && N.appendBogus(); E.insertNode(N); !CKEDITOR.env.ie &&
(J = N.getBogus()) && J.remove(); E.moveToPosition(N, CKEDITOR.POSITION_BEFORE_END)
                        } if ((x = E.startPath().block) && !x.equals(H)) { if (J = x.getBogus()) { J.remove(); C.push(x) } H = x } G.firstNotAllowed && (r = 1); if (r && G.isElement) {
                            x = E.startContainer; for (L = null; x && !j[x.getName()][G.name]; ) { if (x.equals(u)) { x = null; break } L = x; x = x.getParent() } if (x) { if (L) { O = E.splitElement(L); s.zombies.push(O); s.zombies.push(L) } } else {
                                L = u.getName(); P = !w; x = w == I.length - 1; L = d(G.node, L); for (var M = [], R = L.length, T = 0, U = void 0, V = 0, W = -1; T < R; T++) {
                                    U = L[T];
                                    if (U == " ") { if (!V && (!P || T)) { M.push(new CKEDITOR.dom.text(" ")); W = M.length } V = 1 } else { M.push(U); V = 0 }
                                } x && W == M.length && M.pop(); P = M
                            }
                        } if (P) { for (; x = P.pop(); ) E.insertNode(x); P = 0 } else E.insertNode(G.node); if (G.lastNotAllowed && w < I.length - 1) { (O = Q ? t : O) && E.setEndAt(O, CKEDITOR.POSITION_AFTER_START); r = 0 } E.collapse()
                    }
                } s.dontMoveCaret = v; s.bogusNeededBlocks = C
            } J = s.range; var S; O = s.bogusNeededBlocks; for (P = J.createBookmark(); H = s.zombies.pop(); ) if (H.getParent()) { N = J.clone(); N.moveToElementEditStart(H); N.removeEmptyBlocksAtEnd() } if (O) for (; H =
O.pop(); ) H.append(CKEDITOR.env.ie ? J.document.createText(" ") : J.document.createElement("br")); for (; H = s.mergeCandidates.pop(); ) H.mergeSiblings(); J.moveToBookmark(P); if (!s.dontMoveCaret) { for (H = b(J.startContainer) && J.startContainer.getChild(J.startOffset - 1); H && b(H) && !H.is(j.$empty); ) { if (H.isBlockBoundary()) J.moveToPosition(H, CKEDITOR.POSITION_BEFORE_END); else { if (e(H) && H.getHtml().match(/(\s|&nbsp;)$/g)) { S = null; break } S = J.clone(); S.moveToPosition(H, CKEDITOR.POSITION_BEFORE_END) } H = H.getLast(a) } S && J.moveToRange(S) } F.select();
            g(l)
        }
    }
} ()
    })();
    (function () {
        function b() { var a = this.getSelection(1); if (a.getType() != CKEDITOR.SELECTION_NONE) { this.fire("selectionCheck", a); var b = this.elementPath(); if (!b.compare(this._.selectionPreviousPath)) { this._.selectionPreviousPath = b; this.fire("selectionChange", { selection: a, path: b }) } } } function c() { k = true; if (!g) { a.call(this); g = CKEDITOR.tools.setTimeout(a, 200, this) } } function a() { g = null; if (k) { CKEDITOR.tools.setTimeout(b, 0, this); k = false } } function f(a) {
            function b(c, d) {
                return !c || c.type == CKEDITOR.NODE_TEXT ? false :
a.clone()["moveToElementEdit" + (d ? "End" : "Start")](c)
            } if (!(a.root instanceof CKEDITOR.editable)) return false; var c = a.startContainer, d = a.getPreviousNode(h, null, c), e = a.getNextNode(h, null, c); return b(d) || b(e, 1) || !d && !e && !(c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary() && c.getBogus()) ? true : false
        } function e(a) { return a.getCustomData("cke-fillingChar") } function d(a, b) {
            var c = a && a.removeCustomData("cke-fillingChar"); if (c) {
                if (b !== false) {
                    var d, e = a.getDocument().getSelection().getNative(), f = e && e.type != "None" &&
e.getRangeAt(0); if (c.getLength() > 1 && f && f.intersectsNode(c.$)) { d = [e.anchorOffset, e.focusOffset]; f = e.focusNode == c.$ && e.focusOffset > 0; e.anchorNode == c.$ && e.anchorOffset > 0 && d[0]--; f && d[1]--; var g; f = e; if (!f.isCollapsed) { g = f.getRangeAt(0); g.setStart(f.anchorNode, f.anchorOffset); g.setEnd(f.focusNode, f.focusOffset); g = g.collapsed } g && d.unshift(d.pop()) }
                } c.setText(c.getText().replace(/\u200B/g, "")); if (d) { c = e.getRangeAt(0); c.setStart(c.startContainer, d[0]); c.setEnd(c.startContainer, d[1]); e.removeAllRanges(); e.addRange(c) }
            }
        }
        var g, k, h = CKEDITOR.dom.walker.invisible(1); CKEDITOR.on("instanceCreated", function (a) {
            function e() { var a = f.getSelection(); a && a.removeAllRanges() } var f = a.editor; f.define("selectionChange", { errorProof: 1 }); f.on("contentDom", function () {
                var a = f.document, e = CKEDITOR.document, g = f.editable(), o = a.getBody(), n = a.getDocumentElement(), h = g.isInline(); if (CKEDITOR.env.ie || CKEDITOR.env.opera || h) {
                    var m; g.attachListener(g, "focus", function () { f.unlockSelection(m); m = 0 }, null, null, -1); var k, D = function () {
                        k = f.getSelection(1);
                        k.lock()
                    }; l ? g.attachListener(g, "beforedeactivate", D, null, null, -1) : g.attachListener(f, "selectionCheck", D, null, null, -1); g.attachListener(g, "blur", function () { f.lockSelection(k); m = 1 }, null, null, -1); g.attachListener(g, "mousedown", function () { m = 0 })
                } if (CKEDITOR.env.ie && !h) {
                    var u; g.attachListener(g, "mousedown", function (a) { a.data.$.button == 2 && f.document.$.selection.type == "None" && (u = f.window.getScrollPosition()) }); g.attachListener(g, "mouseup", function (a) {
                        if (a.data.$.button == 2 && u) {
                            f.document.$.documentElement.scrollLeft =
u.x; f.document.$.documentElement.scrollTop = u.y
                        } u = null
                    }); if (a.$.compatMode != "BackCompat") {
                        if (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) n.on("mousedown", function (a) {
                            function b(a) { a = a.data.$; if (d) { var c = o.$.createTextRange(); try { c.moveToPoint(a.x, a.y) } catch (e) { } d.setEndPoint(g.compareEndPoints("StartToStart", c) < 0 ? "EndToEnd" : "StartToStart", c); d.select() } } function c() { n.removeListener("mousemove", b); e.removeListener("mouseup", c); n.removeListener("mouseup", c); d.select() } a = a.data; if (a.getTarget().is("html") &&
a.$.y < n.$.clientHeight && a.$.x < n.$.clientWidth) { var d = o.$.createTextRange(); try { d.moveToPoint(a.$.x, a.$.y) } catch (f) { } var g = d.duplicate(); n.on("mousemove", b); e.on("mouseup", c); n.on("mouseup", c) }
                        }); if (CKEDITOR.env.version > 7) {
                            n.on("mousedown", function (a) { if (a.data.getTarget().is("html")) { e.on("mouseup", r); n.on("mouseup", r) } }); var r = function () {
                                e.removeListener("mouseup", r); n.removeListener("mouseup", r); var b = CKEDITOR.document.$.selection, c = b.createRange(); b.type != "None" && c.parentElement().ownerDocument ==
a.$ && c.select()
                            }
                        }
                    }
                } g.attachListener(g, "selectionchange", b, f); g.attachListener(g, "mouseup", c, f); g.attachListener(g, "keyup", c, f); g.attachListener(g, "focus", function () { f.forceNextSelectionCheck(); f.selectionChange(1) }); if (CKEDITOR.env.webkit) a.on("keydown", function (a) { switch (a.data.getKey()) { case 13: case 33: case 34: case 35: case 36: case 37: case 39: case 8: case 45: case 46: d(f.editable()) } }, null, null, -1)
            }); f.on("contentDomUnload", f.forceNextSelectionCheck, f); f.on("dataReady", function () { f.selectionChange(1) });
            CKEDITOR.env.ie9Compat && f.on("beforeDestroy", e, null, null, 9); CKEDITOR.env.webkit && f.on("setData", e); f.on("contentDomUnload", function () { f.unlockSelection() })
        }); CKEDITOR.on("instanceReady", function (a) {
            var b = a.editor, c = b.editable(); if (CKEDITOR.env.webkit) {
                b.on("selectionChange", function () { var a = e(c); a && (a.getCustomData("ready") ? d(c) : a.setCustomData("ready", 1)) }, null, null, -1); b.on("beforeSetMode", function () { d(c) }, null, null, -1); var f, g, a = function () {
                    var a = b.document, d = e(c); if (d) {
                        a = a.$.defaultView.getSelection();
                        a.type == "Caret" && a.anchorNode == d.$ && (g = 1); f = d.getText(); d.setText(f.replace(/\u200B/g, ""))
                    }
                }, h = function () { var a = b.document, d = e(c); if (d) { d.setText(f); if (g) { a.$.defaultView.getSelection().setPosition(d.$, d.getLength()); g = 0 } } }; b.on("beforeUndoImage", a); b.on("afterUndoImage", h); b.on("beforeGetData", a, null, null, 0); b.on("getData", h)
            }
        }); CKEDITOR.editor.prototype.selectionChange = function (a) { (a ? b : c).call(this) }; CKEDITOR.editor.prototype.getSelection = function (a) {
            if (this._.savedSelection && !a) return this._.savedSelection;
            return (a = this.editable()) ? new CKEDITOR.dom.selection(a) : null
        }; CKEDITOR.editor.prototype.lockSelection = function (a) { a = a || this.getSelection(1); if (a.getType() != CKEDITOR.SELECTION_NONE) { !a.isLocked && a.lock(); this._.savedSelection = a; return true } return false }; CKEDITOR.editor.prototype.unlockSelection = function (a) { var b = this._.savedSelection; if (b) { b.unlock(a); delete this._.savedSelection; return true } return false }; CKEDITOR.editor.prototype.forceNextSelectionCheck = function () { delete this._.selectionPreviousPath };
        CKEDITOR.dom.document.prototype.getSelection = function () { return new CKEDITOR.dom.selection(this) }; CKEDITOR.dom.range.prototype.select = function () { var a = this.root instanceof CKEDITOR.editable ? this.root.editor.getSelection() : new CKEDITOR.dom.selection(this.root); a.selectRanges([this]); return a }; CKEDITOR.SELECTION_NONE = 1; CKEDITOR.SELECTION_TEXT = 2; CKEDITOR.SELECTION_ELEMENT = 3; var l = typeof window.getSelection != "function"; CKEDITOR.dom.selection = function (a) {
            var b = a instanceof CKEDITOR.dom.element; this.document =
a instanceof CKEDITOR.dom.document ? a : a.getDocument(); this.root = b ? a : this.document.getBody(); this.isLocked = 0; this._ = { cache: {} }; if (CKEDITOR.env.webkit) {
                a = this.document.getWindow().$.getSelection(); if (a.type == "None" && this.document.getActive().equals(this.root) || a.type == "Caret" && a.anchorNode.nodeType == CKEDITOR.NODE_DOCUMENT) {
                    var c = new CKEDITOR.dom.range(this.root); c.moveToPosition(this.root, CKEDITOR.POSITION_AFTER_START); b = this.document.$.createRange(); b.setStart(c.startContainer.$, c.startOffset); b.collapse(1);
                    a.addRange(b)
                }
            } var a = this.getNative(), d; if (a) if (a.getRangeAt) d = (c = a.rangeCount && a.getRangeAt(0)) && new CKEDITOR.dom.node(c.commonAncestorContainer); else { try { c = a.createRange() } catch (e) { } d = c && CKEDITOR.dom.element.get(c.item && c.item(0) || c.parentElement()) } if (!d || !this.root.equals(d) && !this.root.contains(d)) { this._.cache.type = CKEDITOR.SELECTION_NONE; this._.cache.startElement = null; this._.cache.selectedElement = null; this._.cache.selectedText = ""; this._.cache.ranges = new CKEDITOR.dom.rangeList } return this
        };
        var m = { img: 1, hr: 1, li: 1, table: 1, tr: 1, td: 1, th: 1, embed: 1, object: 1, ol: 1, ul: 1, a: 1, input: 1, form: 1, select: 1, textarea: 1, button: 1, fieldset: 1, thead: 1, tfoot: 1 }; CKEDITOR.dom.selection.prototype = { getNative: function () { return this._.cache.nativeSel !== void 0 ? this._.cache.nativeSel : this._.cache.nativeSel = l ? this.document.$.selection : this.document.getWindow().$.getSelection() }, getType: l ? function () {
            var a = this._.cache; if (a.type) return a.type; var b = CKEDITOR.SELECTION_NONE; try {
                var c = this.getNative(), d = c.type; if (d == "Text") b =
CKEDITOR.SELECTION_TEXT; if (d == "Control") b = CKEDITOR.SELECTION_ELEMENT; if (c.createRange().parentElement()) b = CKEDITOR.SELECTION_TEXT
            } catch (e) { } return a.type = b
        } : function () {
            var a = this._.cache; if (a.type) return a.type; var b = CKEDITOR.SELECTION_TEXT, c = this.getNative(); if (!c || !c.rangeCount) b = CKEDITOR.SELECTION_NONE; else if (c.rangeCount == 1) { var c = c.getRangeAt(0), d = c.startContainer; if (d == c.endContainer && d.nodeType == 1 && c.endOffset - c.startOffset == 1 && m[d.childNodes[c.startOffset].nodeName.toLowerCase()]) b = CKEDITOR.SELECTION_ELEMENT } return a.type =
b
        }, getRanges: function () {
            var a = l ? function () {
                function a(b) { return (new CKEDITOR.dom.node(b)).getIndex() } var b = function (b, c) {
                    b = b.duplicate(); b.collapse(c); var d = b.parentElement(), e = d.ownerDocument; if (!d.hasChildNodes()) return { container: d, offset: 0 }; for (var f = d.children, g, i, h = b.duplicate(), n = 0, l = f.length - 1, m = -1, k, v; n <= l; ) {
                        m = Math.floor((n + l) / 2); g = f[m]; h.moveToElementText(g); k = h.compareEndPoints("StartToStart", b); if (k > 0) l = m - 1; else if (k < 0) n = m + 1; else {
                            if (CKEDITOR.env.ie9Compat && g.tagName == "BR") {
                                f = e.defaultView.getSelection();
                                return { container: f[c ? "anchorNode" : "focusNode"], offset: f[c ? "anchorOffset" : "focusOffset"] }
                            } return { container: d, offset: a(g) }
                        }
                    } if (m == -1 || m == f.length - 1 && k < 0) {
                        h.moveToElementText(d); h.setEndPoint("StartToStart", b); e = h.text.replace(/(\r\n|\r)/g, "\n").length; f = d.childNodes; if (!e) { g = f[f.length - 1]; return g.nodeType != CKEDITOR.NODE_TEXT ? { container: d, offset: f.length} : { container: g, offset: g.nodeValue.length} } for (d = f.length; e > 0 && d > 0; ) { i = f[--d]; if (i.nodeType == CKEDITOR.NODE_TEXT) { v = i; e = e - i.nodeValue.length } } return { container: v,
                            offset: -e
                        }
                    } h.collapse(k > 0 ? true : false); h.setEndPoint(k > 0 ? "StartToStart" : "EndToStart", b); e = h.text.replace(/(\r\n|\r)/g, "\n").length; if (!e) return { container: d, offset: a(g) + (k > 0 ? 0 : 1) }; for (; e > 0; ) try { i = g[k > 0 ? "previousSibling" : "nextSibling"]; if (i.nodeType == CKEDITOR.NODE_TEXT) { e = e - i.nodeValue.length; v = i } g = i } catch (t) { return { container: d, offset: a(g)} } return { container: v, offset: k > 0 ? -e : v.nodeValue.length + e }
                }; return function () {
                    var a = this.getNative(), c = a && a.createRange(), d = this.getType(); if (!a) return []; if (d == CKEDITOR.SELECTION_TEXT) {
                        a =
new CKEDITOR.dom.range(this.root); d = b(c, true); a.setStart(new CKEDITOR.dom.node(d.container), d.offset); d = b(c); a.setEnd(new CKEDITOR.dom.node(d.container), d.offset); a.endContainer.getPosition(a.startContainer) & CKEDITOR.POSITION_PRECEDING && a.endOffset <= a.startContainer.getIndex() && a.collapse(); return [a]
                    } if (d == CKEDITOR.SELECTION_ELEMENT) {
                        for (var d = [], e = 0; e < c.length; e++) {
                            for (var f = c.item(e), g = f.parentNode, o = 0, a = new CKEDITOR.dom.range(this.root); o < g.childNodes.length && g.childNodes[o] != f; o++); a.setStart(new CKEDITOR.dom.node(g),
o); a.setEnd(new CKEDITOR.dom.node(g), o + 1); d.push(a)
                        } return d
                    } return []
                }
            } () : function () { var a = [], b, c = this.getNative(); if (!c) return a; for (var d = 0; d < c.rangeCount; d++) { var e = c.getRangeAt(d); b = new CKEDITOR.dom.range(this.root); b.setStart(new CKEDITOR.dom.node(e.startContainer), e.startOffset); b.setEnd(new CKEDITOR.dom.node(e.endContainer), e.endOffset); a.push(b) } return a }; return function (b) {
                var c = this._.cache; if (c.ranges && !b) return c.ranges; if (!c.ranges) c.ranges = new CKEDITOR.dom.rangeList(a.call(this)); if (b) for (var d =
c.ranges, e = 0; e < d.length; e++) {
                    var f = d[e]; f.getCommonAncestor().isReadOnly() && d.splice(e, 1); if (!f.collapsed) {
                        if (f.startContainer.isReadOnly()) for (var b = f.startContainer, g; b; ) { if ((g = b.type == CKEDITOR.NODE_ELEMENT) && b.is("body") || !b.isReadOnly()) break; g && b.getAttribute("contentEditable") == "false" && f.setStartAfter(b); b = b.getParent() } b = f.startContainer; g = f.endContainer; var h = f.startOffset, l = f.endOffset, m = f.clone(); b && b.type == CKEDITOR.NODE_TEXT && (h >= b.getLength() ? m.setStartAfter(b) : m.setStartBefore(b)); g &&
g.type == CKEDITOR.NODE_TEXT && (l ? m.setEndAfter(g) : m.setEndBefore(g)); b = new CKEDITOR.dom.walker(m); b.evaluator = function (a) { if (a.type == CKEDITOR.NODE_ELEMENT && a.isReadOnly()) { var b = f.clone(); f.setEndBefore(a); f.collapsed && d.splice(e--, 1); if (!(a.getPosition(m.endContainer) & CKEDITOR.POSITION_CONTAINS)) { b.setStartAfter(a); b.collapsed || d.splice(e + 1, 0, b) } return true } return false }; b.next()
                    }
                } return c.ranges
            }
        } (), getStartElement: function () {
            var a = this._.cache; if (a.startElement !== void 0) return a.startElement; var b;
            switch (this.getType()) {
                case CKEDITOR.SELECTION_ELEMENT: return this.getSelectedElement(); case CKEDITOR.SELECTION_TEXT: var c = this.getRanges()[0]; if (c) {
                        if (c.collapsed) { b = c.startContainer; b.type != CKEDITOR.NODE_ELEMENT && (b = b.getParent()) } else {
                            for (c.optimize(); ; ) { b = c.startContainer; if (c.startOffset == (b.getChildCount ? b.getChildCount() : b.getLength()) && !b.isBlockBoundary()) c.setStartAfter(b); else break } b = c.startContainer; if (b.type != CKEDITOR.NODE_ELEMENT) return b.getParent(); b = b.getChild(c.startOffset); if (!b ||
b.type != CKEDITOR.NODE_ELEMENT) b = c.startContainer; else for (c = b.getFirst(); c && c.type == CKEDITOR.NODE_ELEMENT; ) { b = c; c = c.getFirst() }
                        } b = b.$
                    }
            } return a.startElement = b ? new CKEDITOR.dom.element(b) : null
        }, getSelectedElement: function () {
            var a = this._.cache; if (a.selectedElement !== void 0) return a.selectedElement; var b = this, c = CKEDITOR.tools.tryThese(function () { return b.getNative().createRange().item(0) }, function () {
                for (var a = b.getRanges()[0], c, d, e = 2; e && (!(c = a.getEnclosedNode()) || !(c.type == CKEDITOR.NODE_ELEMENT && m[c.getName()] &&
(d = c))); e--) a.shrink(CKEDITOR.SHRINK_ELEMENT); return d.$
            }); return a.selectedElement = c ? new CKEDITOR.dom.element(c) : null
        }, getSelectedText: function () { var a = this._.cache; if (a.selectedText !== void 0) return a.selectedText; var b = this.getNative(), b = l ? b.type == "Control" ? "" : b.createRange().text : b.toString(); return a.selectedText = b }, lock: function () { this.getRanges(); this.getStartElement(); this.getSelectedElement(); this.getSelectedText(); this._.cache.nativeSel = null; this.isLocked = 1 }, unlock: function (a) {
            if (this.isLocked) {
                if (a) var b =
this.getSelectedElement(), c = !b && this.getRanges(); this.isLocked = 0; this.reset(); if (a) (a = b || c[0].getCommonAncestor()) && a.getAscendant("body", 1) && (b ? this.selectElement(b) : this.selectRanges(c))
            }
        }, reset: function () { this._.cache = {} }, selectElement: function (a) { var b = new CKEDITOR.dom.range(this.root); b.setStartBefore(a); b.setEndAfter(a); this.selectRanges([b]) }, selectRanges: function (a) {
            if (a.length) if (this.isLocked) {
                var b = CKEDITOR.document.getActive(); this.unlock(); this.selectRanges(a); this.lock(); !b.equals(this.root) &&
b.focus()
            } else {
                if (l) {
                    var c = CKEDITOR.dom.walker.whitespaces(true), e = /\ufeff|\u00a0/, g = { table: 1, tbody: 1, tr: 1 }; if (a.length > 1) { b = a[a.length - 1]; a[0].setEnd(b.endContainer, b.endOffset) } var b = a[0], a = b.collapsed, h, j, k, A = b.getEnclosedNode(); if (A && A.type == CKEDITOR.NODE_ELEMENT && A.getName() in m && (!A.is("a") || !A.getText())) try { k = A.$.createControlRange(); k.addElement(A.$); k.select(); return } catch (B) { } (b.startContainer.type == CKEDITOR.NODE_ELEMENT && b.startContainer.getName() in g || b.endContainer.type == CKEDITOR.NODE_ELEMENT &&
b.endContainer.getName() in g) && b.shrink(CKEDITOR.NODE_ELEMENT, true); k = b.createBookmark(); var g = k.startNode, p; if (!a) p = k.endNode; k = b.document.$.body.createTextRange(); k.moveToElementText(g.$); k.moveStart("character", 1); if (p) { e = b.document.$.body.createTextRange(); e.moveToElementText(p.$); k.setEndPoint("EndToEnd", e); k.moveEnd("character", -1) } else {
                        h = g.getNext(c); j = g.hasAscendant("pre"); h = !(h && h.getText && h.getText().match(e)) && (j || !g.hasPrevious() || g.getPrevious().is && g.getPrevious().is("br")); j = b.document.createElement("span");
                        j.setHtml("&#65279;"); j.insertBefore(g); h && b.document.createText("﻿").insertBefore(g)
                    } b.setStartBefore(g); g.remove(); if (a) { if (h) { k.moveStart("character", -1); k.select(); b.document.$.selection.clear() } else k.select(); b.moveToPosition(j, CKEDITOR.POSITION_BEFORE_START); j.remove() } else { b.setEndBefore(p); p.remove(); k.select() }
                } else {
                    p = this.getNative(); if (!p) return; if (CKEDITOR.env.opera) { b = this.document.$.createRange(); b.selectNodeContents(this.root.$); p.addRange(b) } this.removeAllRanges(); for (e = 0; e < a.length; e++) {
                        if (e <
a.length - 1) { b = a[e]; k = a[e + 1]; j = b.clone(); j.setStart(b.endContainer, b.endOffset); j.setEnd(k.startContainer, k.startOffset); if (!j.collapsed) { j.shrink(CKEDITOR.NODE_ELEMENT, true); h = j.getCommonAncestor(); j = j.getEnclosedNode(); if (h.isReadOnly() || j && j.isReadOnly()) { k.setStart(b.startContainer, b.startOffset); a.splice(e--, 1); continue } } } b = a[e]; k = this.document.$.createRange(); h = b.startContainer; if (CKEDITOR.env.opera && b.collapsed && h.type == CKEDITOR.NODE_ELEMENT) {
                            j = h.getChild(b.startOffset - 1); c = h.getChild(b.startOffset);
                            if (!j && !c && h.is(CKEDITOR.dtd.$removeEmpty) || j && j.type == CKEDITOR.NODE_ELEMENT || c && c.type == CKEDITOR.NODE_ELEMENT) { b.insertNode(this.document.createText("")); b.collapse(1) }
                        } if (b.collapsed && CKEDITOR.env.webkit && f(b)) { h = this.root; d(h, false); j = h.getDocument().createText("​"); h.setCustomData("cke-fillingChar", j); b.insertNode(j); if ((h = j.getNext()) && !j.getPrevious() && h.type == CKEDITOR.NODE_ELEMENT && h.getName() == "br") { d(this.root); b.moveToPosition(h, CKEDITOR.POSITION_BEFORE_START) } else b.moveToPosition(j, CKEDITOR.POSITION_AFTER_END) } k.setStart(b.startContainer.$,
b.startOffset); try { k.setEnd(b.endContainer.$, b.endOffset) } catch (D) { if (D.toString().indexOf("NS_ERROR_ILLEGAL_VALUE") >= 0) { b.collapse(1); k.setEnd(b.endContainer.$, b.endOffset) } else throw D; } p.addRange(k)
                    }
                } this.reset(); this.root.fire("selectionchange")
            }
        }, createBookmarks: function (a) { return this.getRanges().createBookmarks(a) }, createBookmarks2: function (a) { return this.getRanges().createBookmarks2(a) }, selectBookmarks: function (a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = new CKEDITOR.dom.range(this.root); d.moveToBookmark(a[c]);
                b.push(d)
            } this.selectRanges(b); return this
        }, getCommonAncestor: function () { var a = this.getRanges(); return a[0].startContainer.getCommonAncestor(a[a.length - 1].endContainer) }, scrollIntoView: function () { this.type != CKEDITOR.SELECTION_NONE && this.getRanges()[0].scrollIntoView() }, removeAllRanges: function () { var a = this.getNative(); try { a && a[l ? "empty" : "removeAllRanges"]() } catch (b) { } this.reset() }
        }
    })();
    CKEDITOR.editor.prototype.attachStyleStateChange = function (b, c) { var a = this._.styleStateChangeCallbacks; if (!a) { a = this._.styleStateChangeCallbacks = []; this.on("selectionChange", function (b) { for (var c = 0; c < a.length; c++) { var d = a[c], g = d.style.checkActive(b.data.path) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF; d.fn.call(this, g) } }) } a.push({ style: b, fn: c }) }; CKEDITOR.STYLE_BLOCK = 1; CKEDITOR.STYLE_INLINE = 2; CKEDITOR.STYLE_OBJECT = 3;
    (function () {
        function b(a, b) { for (var c, d; a = a.getParent(); ) { if (a.equals(b)) break; if (a.getAttribute("data-nostyle")) c = a; else if (!d) { var e = a.getAttribute("contentEditable"); e == "false" ? c = a : e == "true" && (d = 1) } } return c } function c(a) {
            var c = a.document; if (a.collapsed) { c = y(this, c); a.insertNode(c); a.moveToPosition(c, CKEDITOR.POSITION_BEFORE_END) } else {
                var d = this.element, e = this._.definition, f, g = e.ignoreReadonly, h = g || e.includeReadonly; h == void 0 && (h = a.root.getCustomData("cke_includeReadonly")); var i = CKEDITOR.dtd[d] ||
(f = true, CKEDITOR.dtd.span); a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); a.trim(); var l = a.createBookmark(), j = l.startNode, m = l.endNode, k = j, n; if (!g) { var q = a.getCommonAncestor(), g = b(j, q), q = b(m, q); g && (k = g.getNextSourceNode(true)); q && (m = q) } for (k.getPosition(m) == CKEDITOR.POSITION_FOLLOWING && (k = 0); k; ) {
                    g = false; if (k.equals(m)) { k = null; g = true } else {
                        var p = k.type, r = p == CKEDITOR.NODE_ELEMENT ? k.getName() : null, q = r && k.getAttribute("contentEditable") == "false", s = r && k.getAttribute("data-nostyle"); if (r && k.data("cke-bookmark")) {
                            k =
k.getNextSourceNode(true); continue
                        } if (!r || i[r] && !s && (!q || h) && (k.getPosition(m) | CKEDITOR.POSITION_PRECEDING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED) == CKEDITOR.POSITION_PRECEDING + CKEDITOR.POSITION_IDENTICAL + CKEDITOR.POSITION_IS_CONTAINED && (!e.childRule || e.childRule(k))) {
                            var u = k.getParent(); if (u && ((u.getDtd() || CKEDITOR.dtd.span)[d] || f) && (!e.parentRule || e.parentRule(u))) {
                                if (!n && (!r || !CKEDITOR.dtd.$removeEmpty[r] || (k.getPosition(m) | CKEDITOR.POSITION_PRECEDING | CKEDITOR.POSITION_IDENTICAL |
CKEDITOR.POSITION_IS_CONTAINED) == CKEDITOR.POSITION_PRECEDING + CKEDITOR.POSITION_IDENTICAL + CKEDITOR.POSITION_IS_CONTAINED)) { n = a.clone(); n.setStartBefore(k) } if (p == CKEDITOR.NODE_TEXT || q || p == CKEDITOR.NODE_ELEMENT && !k.getChildCount()) {
                                    for (var p = k, v; (g = !p.getNext(F)) && (v = p.getParent(), i[v.getName()]) && (v.getPosition(j) | CKEDITOR.POSITION_FOLLOWING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED) == CKEDITOR.POSITION_FOLLOWING + CKEDITOR.POSITION_IDENTICAL + CKEDITOR.POSITION_IS_CONTAINED && (!e.childRule ||
e.childRule(v)); ) p = v; n.setEndAfter(p)
                                }
                            } else g = true
                        } else g = true; k = k.getNextSourceNode(s || q && !h)
                    } if (g && n && !n.collapsed) {
                        for (var g = y(this, c), q = g.hasAttributes(), s = n.getCommonAncestor(), p = {}, r = {}, u = {}, z = {}, A, B, D; g && s; ) { if (s.getName() == d) { for (A in e.attributes) if (!z[A] && (D = s.getAttribute(B))) g.getAttribute(A) == D ? r[A] = 1 : z[A] = 1; for (B in e.styles) if (!u[B] && (D = s.getStyle(B))) g.getStyle(B) == D ? p[B] = 1 : u[B] = 1 } s = s.getParent() } for (A in r) g.removeAttribute(A); for (B in p) g.removeStyle(B); q && !g.hasAttributes() && (g =
null); if (g) { n.extractContents().appendTo(g); o.call(this, g); n.insertNode(g); g.mergeSiblings(); CKEDITOR.env.ie || g.$.normalize() } else { g = new CKEDITOR.dom.element("span"); n.extractContents().appendTo(g); n.insertNode(g); o.call(this, g); g.remove(true) } n = null
                    }
                } a.moveToBookmark(l); a.shrink(CKEDITOR.SHRINK_TEXT)
            }
        } function a(a) {
            a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); var b = a.createBookmark(), c = b.startNode; if (a.collapsed) {
                for (var d = new CKEDITOR.dom.elementPath(c.getParent(), a.root), e, f = 0, g; f < d.elements.length && (g =
d.elements[f]); f++) { if (g == d.block || g == d.blockLimit) break; if (this.checkElementRemovable(g)) { var h; if (a.collapsed && (a.checkBoundaryOfElement(g, CKEDITOR.END) || (h = a.checkBoundaryOfElement(g, CKEDITOR.START)))) { e = g; e.match = h ? "start" : "end" } else { g.mergeSiblings(); g.getName() == this.element ? n.call(this, g) : i(g, s(this)[g.getName()]) } } } if (e) { g = c; for (f = 0; ; f++) { h = d.elements[f]; if (h.equals(e)) break; else if (h.match) continue; else h = h.clone(); h.append(g); g = h } g[e.match == "start" ? "insertBefore" : "insertAfter"](e) }
            } else {
                var l =
b.endNode, j = this, d = function () { for (var a = new CKEDITOR.dom.elementPath(c.getParent()), b = new CKEDITOR.dom.elementPath(l.getParent()), d = null, e = null, f = 0; f < a.elements.length; f++) { var g = a.elements[f]; if (g == a.block || g == a.blockLimit) break; j.checkElementRemovable(g) && (d = g) } for (f = 0; f < b.elements.length; f++) { g = b.elements[f]; if (g == b.block || g == b.blockLimit) break; j.checkElementRemovable(g) && (e = g) } e && l.breakParent(e); d && c.breakParent(d) }; d(); for (e = c; !e.equals(l); ) {
                    f = e.getNextSourceNode(); if (e.type == CKEDITOR.NODE_ELEMENT &&
this.checkElementRemovable(e)) { e.getName() == this.element ? n.call(this, e) : i(e, s(this)[e.getName()]); if (f.type == CKEDITOR.NODE_ELEMENT && f.contains(c)) { d(); f = c.getNext() } } e = f
                }
            } a.moveToBookmark(b)
        } function f(a) { var b = a.getEnclosedNode() || a.getCommonAncestor(false, true); (a = (new CKEDITOR.dom.elementPath(b, a.root)).contains(this.element, 1)) && !a.isReadOnly() && z(a, this) } function e(a) {
            var b = a.getCommonAncestor(true, true); if (a = (new CKEDITOR.dom.elementPath(b, a.root)).contains(this.element, 1)) {
                var b = this._.definition,
c = b.attributes; if (c) for (var d in c) a.removeAttribute(d, c[d]); if (b.styles) for (var e in b.styles) b.styles.hasOwnProperty(e) && a.removeStyle(e)
            }
        } function d(a) { var b = a.createBookmark(true), c = a.createIterator(); c.enforceRealBlocks = true; if (this._.enterMode) c.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR; for (var d, e = a.document; d = c.getNextParagraph(); ) if (!d.isReadOnly()) { var f = y(this, e, d); k(d, f) } a.moveToBookmark(b) } function g(a) {
            var b = a.createBookmark(1), c = a.createIterator(); c.enforceRealBlocks = true; c.enlargeBr =
this._.enterMode != CKEDITOR.ENTER_BR; for (var d; d = c.getNextParagraph(); ) if (this.checkElementRemovable(d)) if (d.is("pre")) { var e = this._.enterMode == CKEDITOR.ENTER_BR ? null : a.document.createElement(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div"); e && d.copyAttributes(e); k(d, e) } else n.call(this, d); a.moveToBookmark(b)
        } function k(a, b) {
            var c = !b; if (c) { b = a.getDocument().createElement("div"); a.copyAttributes(b) } var d = b && b.is("pre"), e = a.is("pre"), f = !d && e; if (d && !e) {
                e = b; (f = a.getBogus()) && f.remove(); f = a.getHtml(); f = l(f,
/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, ""); f = f.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi, "$1"); f = f.replace(/([ \t\n\r]+|&nbsp;)/g, " "); f = f.replace(/<br\b[^>]*>/gi, "\n"); if (CKEDITOR.env.ie) { var g = a.getDocument().createElement("div"); g.append(e); e.$.outerHTML = "<pre>" + f + "</pre>"; e.copyAttributes(g.getFirst()); e = g.getFirst().remove() } else e.setHtml(f); b = e
            } else f ? b = m(c ? [a.getHtml()] : h(a), b) : a.moveChildren(b); b.replace(a); if (d) {
                var c = b, i; if ((i = c.getPrevious(v)) && i.is && i.is("pre")) {
                    d = l(i.getHtml(), /\n$/, "") +
"\n\n" + l(c.getHtml(), /^\n/, ""); CKEDITOR.env.ie ? c.$.outerHTML = "<pre>" + d + "</pre>" : c.setHtml(d); i.remove()
                }
            } else c && q(b)
        } function h(a) { a.getName(); var b = []; l(a.getOuterHtml(), /(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi, function (a, b, c) { return b + "</pre>" + c + "<pre>" }).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi, function (a, c) { b.push(c) }); return b } function l(a, b, c) {
            var d = "", e = "", a = a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi, function (a,
b, c) { b && (d = b); c && (e = c); return "" }); return d + a.replace(b, c) + e
        } function m(a, b) {
            var c; a.length > 1 && (c = new CKEDITOR.dom.documentFragment(b.getDocument())); for (var d = 0; d < a.length; d++) {
                var e = a[d], e = e.replace(/(\r\n|\r)/g, "\n"), e = l(e, /^[ \t]*\n/, ""), e = l(e, /\n$/, ""), e = l(e, /^[ \t]+|[ \t]+$/g, function (a, b) { return a.length == 1 ? "&nbsp;" : b ? " " + CKEDITOR.tools.repeat("&nbsp;", a.length - 1) : CKEDITOR.tools.repeat("&nbsp;", a.length - 1) + " " }), e = e.replace(/\n/g, "<br>"), e = e.replace(/[ \t]{2,}/g, function (a) {
                    return CKEDITOR.tools.repeat("&nbsp;",
a.length - 1) + " "
                }); if (c) { var f = b.clone(); f.setHtml(e); c.append(f) } else b.setHtml(e)
            } return c || b
        } function n(a) {
            var b = this._.definition, c = b.attributes, b = b.styles, d = s(this)[a.getName()], e = CKEDITOR.tools.isEmpty(c) && CKEDITOR.tools.isEmpty(b), f; for (f in c) if (!((f == "class" || this._.definition.fullMatch) && a.getAttribute(f) != A(f, c[f]))) { e = a.hasAttribute(f); a.removeAttribute(f) } for (var g in b) if (!(this._.definition.fullMatch && a.getStyle(g) != A(g, b[g], true))) { e = e || !!a.getStyle(g); a.removeStyle(g) } i(a, d, p[a.getName()]);
            e && (this._.definition.alwaysRemoveElement ? q(a, 1) : !CKEDITOR.dtd.$block[a.getName()] || this._.enterMode == CKEDITOR.ENTER_BR && !a.hasAttributes() ? q(a) : a.renameNode(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div"))
        } function o(a) { for (var b = s(this), c = a.getElementsByTag(this.element), d = c.count(); --d >= 0; ) n.call(this, c.getItem(d)); for (var e in b) if (e != this.element) { c = a.getElementsByTag(e); for (d = c.count() - 1; d >= 0; d--) { var f = c.getItem(d); i(f, b[e]) } } } function i(a, b, c) {
            if (b = b && b.attributes) for (var d = 0; d < b.length; d++) {
                var e =
b[d][0], f; if (f = a.getAttribute(e)) { var g = b[d][1]; (g === null || g.test && g.test(f) || typeof g == "string" && f == g) && a.removeAttribute(e) }
            } c || q(a)
        } function q(a, b) {
            if (!a.hasAttributes() || b) if (CKEDITOR.dtd.$block[a.getName()]) { var c = a.getPrevious(v), d = a.getNext(v); c && (c.type == CKEDITOR.NODE_TEXT || !c.isBlockBoundary({ br: 1 })) && a.append("br", 1); d && (d.type == CKEDITOR.NODE_TEXT || !d.isBlockBoundary({ br: 1 })) && a.append("br"); a.remove(true) } else {
                c = a.getFirst(); d = a.getLast(); a.remove(true); if (c) {
                    c.type == CKEDITOR.NODE_ELEMENT &&
c.mergeSiblings(); d && (!c.equals(d) && d.type == CKEDITOR.NODE_ELEMENT) && d.mergeSiblings()
                }
            }
        } function y(a, b, c) { var d; d = a.element; d == "*" && (d = "span"); d = new CKEDITOR.dom.element(d, b); c && c.copyAttributes(d); d = z(d, a); b.getCustomData("doc_processing_style") && d.hasAttribute("id") ? d.removeAttribute("id") : b.setCustomData("doc_processing_style", 1); return d } function z(a, b) {
            var c = b._.definition, d = c.attributes, c = CKEDITOR.style.getStyleText(c); if (d) for (var e in d) a.setAttribute(e, d[e]); c && a.setAttribute("style", c);
            return a
        } function j(a, b) { for (var c in a) a[c] = a[c].replace(r, function (a, c) { return b[c] }) } function s(a) { if (a._.overrides) return a._.overrides; var b = a._.overrides = {}, c = a._.definition.overrides; if (c) { CKEDITOR.tools.isArray(c) || (c = [c]); for (var d = 0; d < c.length; d++) { var e = c[d], f, g; if (typeof e == "string") f = e.toLowerCase(); else { f = e.element ? e.element.toLowerCase() : a.element; g = e.attributes } e = b[f] || (b[f] = {}); if (g) { var e = e.attributes = e.attributes || [], h; for (h in g) e.push([h.toLowerCase(), g[h]]) } } } return b } function A(a,
b, c) { var d = new CKEDITOR.dom.element("span"); d[c ? "setStyle" : "setAttribute"](a, b); return d[c ? "getStyle" : "getAttribute"](a) } function B(a, b) { for (var c = a.document, d = a.getRanges(), e = b ? this.removeFromRange : this.applyToRange, f, g = d.createIterator(); f = g.getNextRange(); ) e.call(this, f); a.selectRanges(d); c.removeCustomData("doc_processing_style") } var p = { address: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, p: 1, pre: 1, section: 1, header: 1, footer: 1, nav: 1, article: 1, aside: 1, figure: 1, dialog: 1, hgroup: 1, time: 1, meter: 1, menu: 1, command: 1,
    keygen: 1, output: 1, progress: 1, details: 1, datagrid: 1, datalist: 1
}, D = { a: 1, embed: 1, hr: 1, img: 1, li: 1, object: 1, ol: 1, table: 1, td: 1, tr: 1, th: 1, ul: 1, dl: 1, dt: 1, dd: 1, form: 1, audio: 1, video: 1 }, u = /\s*(?:;\s*|$)/, r = /#\((.+?)\)/g, F = CKEDITOR.dom.walker.bookmark(0, 1), v = CKEDITOR.dom.walker.whitespaces(1); CKEDITOR.style = function (a, b) {
    var c = a.attributes; if (c && c.style) { a.styles = CKEDITOR.tools.extend({}, a.styles, CKEDITOR.tools.parseCssText(c.style)); delete c.style } if (b) {
        a = CKEDITOR.tools.clone(a); j(a.attributes, b); j(a.styles,
b)
    } c = this.element = a.element ? typeof a.element == "string" ? a.element.toLowerCase() : a.element : "*"; this.type = a.type || (p[c] ? CKEDITOR.STYLE_BLOCK : D[c] ? CKEDITOR.STYLE_OBJECT : CKEDITOR.STYLE_INLINE); if (typeof this.element == "object") this.type = CKEDITOR.STYLE_OBJECT; this._ = { definition: a }
}; CKEDITOR.editor.prototype.applyStyle = function (a) { B.call(a, this.getSelection()) }; CKEDITOR.editor.prototype.removeStyle = function (a) { B.call(a, this.getSelection(), 1) }; CKEDITOR.style.prototype = { apply: function (a) { B.call(this, a.getSelection()) },
    remove: function (a) { B.call(this, a.getSelection(), 1) }, applyToRange: function (a) { return (this.applyToRange = this.type == CKEDITOR.STYLE_INLINE ? c : this.type == CKEDITOR.STYLE_BLOCK ? d : this.type == CKEDITOR.STYLE_OBJECT ? f : null).call(this, a) }, removeFromRange: function (b) { return (this.removeFromRange = this.type == CKEDITOR.STYLE_INLINE ? a : this.type == CKEDITOR.STYLE_BLOCK ? g : this.type == CKEDITOR.STYLE_OBJECT ? e : null).call(this, b) }, applyToObject: function (a) { z(a, this) }, checkActive: function (a) {
        switch (this.type) {
            case CKEDITOR.STYLE_BLOCK: return this.checkElementRemovable(a.block ||
a.blockLimit, true); case CKEDITOR.STYLE_OBJECT: case CKEDITOR.STYLE_INLINE: for (var b = a.elements, c = 0, d; c < b.length; c++) { d = b[c]; if (!(this.type == CKEDITOR.STYLE_INLINE && (d == a.block || d == a.blockLimit))) { if (this.type == CKEDITOR.STYLE_OBJECT) { var e = d.getName(); if (!(typeof this.element == "string" ? e == this.element : e in this.element)) continue } if (this.checkElementRemovable(d, true)) return true } }
        } return false
    }, checkApplicable: function (a) { switch (this.type) { case CKEDITOR.STYLE_OBJECT: return a.contains(this.element) } return true },
    checkElementMatch: function (a, b) {
        var c = this._.definition; if (!a || !c.ignoreReadonly && a.isReadOnly()) return false; var d = a.getName(); if (typeof this.element == "string" ? d == this.element : d in this.element) {
            if (!b && !a.hasAttributes()) return true; if (d = c._AC) c = d; else { var d = {}, e = 0, f = c.attributes; if (f) for (var g in f) { e++; d[g] = f[g] } if (g = CKEDITOR.style.getStyleText(c)) { d.style || e++; d.style = g } d._length = e; c = c._AC = d } if (c._length) {
                for (var h in c) if (h != "_length") {
                    e = a.getAttribute(h) || ""; if (h == "style")a:
                    {
                        d = c[h]; typeof d ==
"string" && (d = CKEDITOR.tools.parseCssText(d)); typeof e == "string" && (e = CKEDITOR.tools.parseCssText(e, true)); g = void 0; for (g in d) if (!(g in e && (e[g] == d[g] || d[g] == "inherit" || e[g] == "inherit"))) { d = false; break a } d = true
                    } else d = c[h] == e; if (d) { if (!b) return true } else if (b) return false
                } if (b) return true
            } else return true
        } return false
    }, checkElementRemovable: function (a, b) {
        if (this.checkElementMatch(a, b)) return true; var c = s(this)[a.getName()]; if (c) {
            var d; if (!(c = c.attributes)) return true; for (var e = 0; e < c.length; e++) {
                d =
c[e][0]; if (d = a.getAttribute(d)) { var f = c[e][1]; if (f === null || typeof f == "string" && d == f || f.test(d)) return true }
            }
        } return false
    }, buildPreview: function (a) { var b = this._.definition, c = [], d = b.element; d == "bdo" && (d = "span"); var c = ["<", d], e = b.attributes; if (e) for (var f in e) c.push(" ", f, '="', e[f], '"'); (e = CKEDITOR.style.getStyleText(b)) && c.push(' style="', e, '"'); c.push(">", a || b.name, "</", d, ">"); return c.join("") }
}; CKEDITOR.style.getStyleText = function (a) {
    var b = a._ST; if (b) return b; var b = a.styles, c = a.attributes && a.attributes.style ||
"", d = ""; c.length && (c = c.replace(u, ";")); for (var e in b) { var f = b[e], g = (e + ":" + f).replace(u, ";"); f == "inherit" ? d = d + g : c = c + g } c.length && (c = CKEDITOR.tools.normalizeCssText(c, true)); return a._ST = c + d
}
    })(); CKEDITOR.styleCommand = function (b) { this.style = b }; CKEDITOR.styleCommand.prototype.exec = function (b) { b.focus(); this.state == CKEDITOR.TRISTATE_OFF ? b.applyStyle(this.style) : this.state == CKEDITOR.TRISTATE_ON && b.removeStyle(this.style) }; CKEDITOR.stylesSet = new CKEDITOR.resourceManager("", "stylesSet");
    CKEDITOR.addStylesSet = CKEDITOR.tools.bind(CKEDITOR.stylesSet.add, CKEDITOR.stylesSet); CKEDITOR.loadStylesSet = function (b, c, a) { CKEDITOR.stylesSet.addExternal(b, c, ""); CKEDITOR.stylesSet.load(b, a) };
    CKEDITOR.editor.prototype.getStylesSet = function (b) { if (this._.stylesDefinitions) b(this._.stylesDefinitions); else { var c = this, a = c.config.stylesCombo_stylesSet || c.config.stylesSet || "default"; if (a instanceof Array) { c._.stylesDefinitions = a; b(a) } else { var a = a.split(":"), f = a[0]; CKEDITOR.stylesSet.addExternal(f, a[1] ? a.slice(1).join(":") : CKEDITOR.getUrl("styles.js"), ""); CKEDITOR.stylesSet.load(f, function (a) { c._.stylesDefinitions = a[f]; b(c._.stylesDefinitions) }) } } };
    CKEDITOR.dom.comment = function (b, c) { typeof b == "string" && (b = (c ? c.$ : document).createComment(b)); CKEDITOR.dom.domObject.call(this, b) }; CKEDITOR.dom.comment.prototype = new CKEDITOR.dom.node; CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype, { type: CKEDITOR.NODE_COMMENT, getOuterHtml: function () { return "<\!--" + this.$.nodeValue + "--\>" } });
    (function () {
        var b = {}, c; for (c in CKEDITOR.dtd.$blockLimit) c in CKEDITOR.dtd.$list || (b[c] = 1); var a = {}; for (c in CKEDITOR.dtd.$block) c in CKEDITOR.dtd.$blockLimit || c in CKEDITOR.dtd.$empty || (a[c] = 1); CKEDITOR.dom.elementPath = function (c, e) {
            var d = null, g = null, k = [], e = e || c.getDocument().getBody(), h = c; do if (h.type == CKEDITOR.NODE_ELEMENT) {
                k.push(h); if (!this.lastElement) { this.lastElement = h; if (h.is(CKEDITOR.dtd.$object)) continue } var l = h.getName(); if (!g) {
                    !d && a[l] && (d = h); if (b[l]) {
                        var m; if (m = !d) {
                            if (l = l == "div") {
                                a:
                                {
                                    l =
h.getChildren(); m = 0; for (var n = l.count(); m < n; m++) { var o = l.getItem(m); if (o.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$block[o.getName()]) { l = true; break a } } l = false
                                } l = !l && !h.equals(e)
                            } m = l
                        } m ? d = h : g = h
                    }
                } if (h.equals(e)) break
            } while (h = h.getParent()); this.block = d; this.blockLimit = g; this.root = e; this.elements = k
        }
    })();
    CKEDITOR.dom.elementPath.prototype = { compare: function (b) { var c = this.elements, b = b && b.elements; if (!b || c.length != b.length) return false; for (var a = 0; a < c.length; a++) if (!c[a].equals(b[a])) return false; return true }, contains: function (b, c, a) {
        var f; typeof b == "string" && (f = function (a) { return a.getName() == b }); b instanceof CKEDITOR.dom.element ? f = function (a) { return a.equals(b) } : CKEDITOR.tools.isArray(b) ? f = function (a) { return CKEDITOR.tools.indexOf(b, a.getName()) > -1 } : typeof b == "function" ? f = b : typeof b == "object" && (f =
function (a) { return a.getName() in b }); var e = this.elements, d = e.length; c && d--; if (a) { e = Array.prototype.slice.call(e, 0); e.reverse() } for (c = 0; c < d; c++) if (f(e[c])) return e[c]; return null
    }, isContextFor: function (b) { var c; if (b in CKEDITOR.dtd.$block) { c = this.contains(CKEDITOR.dtd.$intermediate) || this.root.equals(this.block) && this.block || this.blockLimit; return !!c.getDtd()[b] } return true }
    }; CKEDITOR.dom.text = function (b, c) { typeof b == "string" && (b = (c ? c.$ : document).createTextNode(b)); this.$ = b };
    CKEDITOR.dom.text.prototype = new CKEDITOR.dom.node;
    CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype, { type: CKEDITOR.NODE_TEXT, getLength: function () { return this.$.nodeValue.length }, getText: function () { return this.$.nodeValue }, setText: function (b) { this.$.nodeValue = b }, split: function (b) { var c = this.$.parentNode, a = c.childNodes.length, f = this.getLength(), e = this.getDocument(), d = new CKEDITOR.dom.text(this.$.splitText(b), e); if (c.childNodes.length == a) if (b >= f) { d = e.createText(""); d.insertAfter(this) } else { b = e.createText(""); b.insertAfter(d); b.remove() } return d }, substring: function (b,
c) { return typeof c != "number" ? this.$.nodeValue.substr(b) : this.$.nodeValue.substring(b, c) }
    });
    (function () {
        function b(a, b, c) {
            var d = a.serializable, g = b[c ? "endContainer" : "startContainer"], k = c ? "endOffset" : "startOffset", h = d ? b.document.getById(a.startNode) : a.startNode, a = d ? b.document.getById(a.endNode) : a.endNode; if (g.equals(h.getPrevious())) { b.startOffset = b.startOffset - g.getLength() - a.getPrevious().getLength(); g = a.getNext() } else if (g.equals(a.getPrevious())) { b.startOffset = b.startOffset - g.getLength(); g = a.getNext() } g.equals(h.getParent()) && b[k]++; g.equals(a.getParent()) && b[k]++; b[c ? "endContainer" : "startContainer"] =
g; return b
        } CKEDITOR.dom.rangeList = function (a) { if (a instanceof CKEDITOR.dom.rangeList) return a; a ? a instanceof CKEDITOR.dom.range && (a = [a]) : a = []; return CKEDITOR.tools.extend(a, c) }; var c = { createIterator: function () {
            var a = this, b = CKEDITOR.dom.walker.bookmark(), c = [], d; return { getNextRange: function (g) {
                d = d == void 0 ? 0 : d + 1; var k = a[d]; if (k && a.length > 1) {
                    if (!d) for (var h = a.length - 1; h >= 0; h--) c.unshift(a[h].createBookmark(true)); if (g) for (var l = 0; a[d + l + 1]; ) {
                        for (var m = k.document, g = 0, h = m.getById(c[l].endNode), m = m.getById(c[l +
1].startNode); ; ) { h = h.getNextSourceNode(false); if (m.equals(h)) g = 1; else if (b(h) || h.type == CKEDITOR.NODE_ELEMENT && h.isBlockBoundary()) continue; break } if (!g) break; l++
                    } for (k.moveToBookmark(c.shift()); l--; ) { h = a[++d]; h.moveToBookmark(c.shift()); k.setEnd(h.endContainer, h.endOffset) }
                } return k
            }
            }
        }, createBookmarks: function (a) { for (var c = [], e, d = 0; d < this.length; d++) { c.push(e = this[d].createBookmark(a, true)); for (var g = d + 1; g < this.length; g++) { this[g] = b(e, this[g]); this[g] = b(e, this[g], true) } } return c }, createBookmarks2: function (a) {
            for (var b =
[], c = 0; c < this.length; c++) b.push(this[c].createBookmark2(a)); return b
        }, moveToBookmarks: function (a) { for (var b = 0; b < this.length; b++) this[b].moveToBookmark(a[b]) }
        }
    })();
    (function () {
        function b() { return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1] || "skins/" + CKEDITOR.skinName.split(",")[0] + "/") } function c(a) { var c = CKEDITOR.skin["ua_" + a], d = CKEDITOR.env; if (c) for (var c = c.split(",").sort(function (a, b) { return a > b ? -1 : 1 }), e = 0, f; e < c.length; e++) { f = c[e]; if (d.ie && (f.replace(/^ie/, "") == d.version || d.quirks && f == "iequirks")) f = "ie"; if (d[f]) { a = a + ("_" + c[e]); break } } return CKEDITOR.getUrl(b() + a + ".css") } function a(a, b) { if (!d[a]) { CKEDITOR.document.appendStyleSheet(c(a)); d[a] = 1 } b && b() }
        function f(a) { var b = a.getById(g); if (!b) { b = a.getHead().append("style"); b.setAttribute("id", g); b.setAttribute("type", "text/css") } return b } function e(a, b, c) {
            var d, e, f; if (CKEDITOR.env.webkit) { b = b.split("}").slice(0, -1); for (e = 0; e < b.length; e++) b[e] = b[e].split("{") } for (var g = 0; g < a.length; g++) if (CKEDITOR.env.webkit) for (e = 0; e < b.length; e++) { f = b[e][1]; for (d = 0; d < c.length; d++) f = f.replace(c[d][0], c[d][1]); a[g].$.sheet.addRule(b[e][0], f) } else {
                f = b; for (d = 0; d < c.length; d++) f = f.replace(c[d][0], c[d][1]); CKEDITOR.env.ie ?
a[g].$.styleSheet.cssText = a[g].$.styleSheet.cssText + f : a[g].$.innerHTML = a[g].$.innerHTML + f
            }
        } var d = {}; CKEDITOR.skin = { path: b, loadPart: function (c, d) { CKEDITOR.skin.name != CKEDITOR.skinName.split(",")[0] ? CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(b() + "skin.js"), function () { a(c, d) }) : a(c, d) }, getPath: function (a) { return CKEDITOR.getUrl(c(a)) }, icons: {}, addIcon: function (a, b, c) { a = a.toLowerCase(); this.icons[a] || (this.icons[a] = { path: b, offset: c || 0 }) }, getIconStyle: function (a, b, c, d) {
            var e; if (a) {
                a = a.toLowerCase(); b &&
(e = this.icons[a + "-rtl"]); e || (e = this.icons[a])
            } a = c || e && e.path || ""; d = d || e && e.offset; return a && "background-image:url(" + CKEDITOR.getUrl(a) + ");background-position:0 " + d + "px;"
        }
        }; CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { getUiColor: function () { return this.uiColor }, setUiColor: function (a) { var b = f(CKEDITOR.document); return (this.setUiColor = function (a) { var c = CKEDITOR.skin.chameleon, d = [[h, a]]; this.uiColor = a; e([b], c(this, "editor"), d); e(k, c(this, "panel"), d) }).call(this, a) } }); var g = "cke_ui_color", k = [], h = /\$color/g;
        CKEDITOR.on("instanceLoaded", function (a) { if (!CKEDITOR.env.ie || !CKEDITOR.env.quirks) { var b = a.editor, a = function (a) { a = (a.data[0] || a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument(); if (!a.getById("cke_ui_color")) { a = f(a); k.push(a); var c = b.getUiColor(); c && e([a], CKEDITOR.skin.chameleon(b, "panel"), [[h, c]]) } }; b.on("panelShow", a); b.on("menuShow", a); b.config.uiColor && b.setUiColor(b.config.uiColor) } })
    })();
    (function () {
        if (CKEDITOR.env.webkit) CKEDITOR.env.hc = false; else { var b = CKEDITOR.dom.element.createFromHtml('<div style="width:0px;height:0px;position:absolute;left:-10000px;border: 1px solid;border-color: red blue;"></div>', CKEDITOR.document); b.appendTo(CKEDITOR.document.getHead()); try { CKEDITOR.env.hc = b.getComputedStyle("border-top-color") == b.getComputedStyle("border-right-color") } catch (c) { CKEDITOR.env.hc = false } b.remove() } if (CKEDITOR.env.hc) CKEDITOR.env.cssClass = CKEDITOR.env.cssClass + " cke_hc"; CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");
        CKEDITOR.status = "loaded"; CKEDITOR.fireOnce("loaded"); if (b = CKEDITOR._.pending) { delete CKEDITOR._.pending; for (var a = 0; a < b.length; a++) { CKEDITOR.editor.prototype.constructor.apply(b[a][0], b[a][1]); CKEDITOR.add(b[a][0]) } }
    })(); /*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
    CKEDITOR.skin.name = "moono"; //CKEDITOR.skin.ua_editor="ie,ie7,ie8,gecko";CKEDITOR.skin.ua_dialog="ie,ie7,ie8,opera";
    CKEDITOR.skin.chameleon = function () {
        var b = function () { return function (b, e) { for (var a = b.match(/[^#]./g), c = 0; 3 > c; c++) { var f = a, h = c, d; d = parseInt(a[c], 16); d = ("0" + (0 > e ? 0 | d * (1 + e) : 0 | d + (255 - d) * e).toString(16)).slice(-2); f[h] = d } return "#" + a.join("") } } (), c = function () {
            var b = new CKEDITOR.template("background:#{to};background-image:-webkit-gradient(linear,lefttop,leftbottom,from({from}),to({to}));background-image:-moz-linear-gradient(top,{from},{to});background-image:-webkit-linear-gradient(top,{from},{to});background-image:-o-linear-gradient(top,{from},{to});background-image:-ms-linear-gradient(top,{from},{to});background-image:linear-gradient(top,{from},{to});filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0,startColorstr='{from}',endColorstr='{to}');"); return function (c,
a) { return b.output({ from: c, to: a }) }
        } (), f = { editor: new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ {defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [{defaultGradient}outline-color:{defaultBorder};border-top-color:{defaultBorder};] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder};] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator};] {id} .cke_combo_button [border-color:{defaultBorder};{lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [border-color:{defaultBorder};{mediumGradient}] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg};] {id}.cke_panel [border-color:{defaultBorder};] "),
            panel: new CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")
        };
        return function (g, e) {
            var a = g.uiColor, a = { id: "." + g.id, defaultBorder: b(a, -0.1), defaultGradient: c(b(a, 0.9), a), lightGradient: c(b(a, 1), b(a, 0.7)), mediumGradient: c(b(a, 0.8), b(a, 0.5)), ckeButtonOn: c(b(a, 0.6), b(a, 0.7)), ckeResizer: b(a, -0.4), ckeToolbarSeparator: b(a, 0.5), ckeColorauto: b(a, 0.8), dialogBody: b(a, 0.7), dialogTabSelected: c("#FFFFFF", "#FFFFFF"), dialogTabSelectedBorder: "#FFF", elementsPathColor: b(a, -0.6), elementsPathBg: a, menubuttonIcon: b(a, 0.5), menubuttonIconHover: b(a, 0.3) }; return f[e].output(a).replace(/\[/g,
"{").replace(/\]/g, "}")
        }
    } (); CKEDITOR.plugins.add("dialogui", { onLoad: function () {
        var h = function (b) { this._ || (this._ = {}); this._["default"] = this._.initValue = b["default"] || ""; this._.required = b.required || !1; for (var a = [this._], d = 1; d < arguments.length; d++) a.push(arguments[d]); a.push(!0); CKEDITOR.tools.extend.apply(CKEDITOR.tools, a); return this._ }, r = { build: function (b, a, d) { return new CKEDITOR.ui.dialog.textInput(b, a, d) } }, l = { build: function (b, a, d) { return new CKEDITOR.ui.dialog[a.type](b, a, d) } }, n = { isChanged: function () {
            return this.getValue() !=
this.getInitValue()
        }, reset: function (b) { this.setValue(this.getInitValue(), b) }, setInitValue: function () { this._.initValue = this.getValue() }, resetInitValue: function () { this._.initValue = this._["default"] }, getInitValue: function () { return this._.initValue }
        }, o = CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, { onChange: function (b, a) {
            this._.domOnChangeRegistered || (b.on("load", function () {
                this.getInputElement().on("change", function () { b.parts.dialog.isVisible() && this.fire("change", { value: this.getValue() }) },
this)
            }, this), this._.domOnChangeRegistered = !0); this.on("change", a)
        }
        }, !0), s = /^on([A-Z]\w+)/, p = function (b) { for (var a in b) (s.test(a) || "title" == a || "type" == a) && delete b[a]; return b }; CKEDITOR.tools.extend(CKEDITOR.ui.dialog, { labeledElement: function (b, a, d, e) {
            if (!(4 > arguments.length)) {
                var c = h.call(this, a); c.labelId = CKEDITOR.tools.getNextId() + "_label"; this._.children = []; CKEDITOR.ui.dialog.uiElement.call(this, b, a, d, "div", null, { role: "presentation" }, function () {
                    var f = [], d = a.required ? " cke_required" : ""; "horizontal" !=
a.labelLayout ? f.push('<label class="cke_dialog_ui_labeled_label' + d + '" ', ' id="' + c.labelId + '"', c.inputId ? ' for="' + c.inputId + '"' : "", (a.labelStyle ? ' style="' + a.labelStyle + '"' : "") + ">", a.label, "</label>", '<div class="cke_dialog_ui_labeled_content"' + (a.controlStyle ? ' style="' + a.controlStyle + '"' : "") + ' role="presentation">', e.call(this, b, a), "</div>") : (d = { type: "hbox", widths: a.widths, padding: 0, children: [{ type: "html", html: '<label class="cke_dialog_ui_labeled_label' + d + '" id="' + c.labelId + '" for="' + c.inputId + '"' +
(a.labelStyle ? ' style="' + a.labelStyle + '"' : "") + ">" + CKEDITOR.tools.htmlEncode(a.label) + "</span>"
}, { type: "html", html: '<span class="cke_dialog_ui_labeled_content"' + (a.controlStyle ? ' style="' + a.controlStyle + '"' : "") + ">" + e.call(this, b, a) + "</span>"}]
}, CKEDITOR.dialog._.uiElementBuilders.hbox.build(b, d, f)); return f.join("")
                })
            }
        }, textInput: function (b, a, d) {
            if (!(3 > arguments.length)) {
                h.call(this, a); var e = this._.inputId = CKEDITOR.tools.getNextId() + "_textInput", c = { "class": "cke_dialog_ui_input_" + a.type, id: e, type: a.type };
                a.validate && (this.validate = a.validate); a.maxLength && (c.maxlength = a.maxLength); a.size && (c.size = a.size); a.inputStyle && (c.style = a.inputStyle); var f = this, i = !1; b.on("load", function () { f.getInputElement().on("keydown", function (a) { a.data.getKeystroke() == 13 && (i = true) }); f.getInputElement().on("keyup", function (a) { if (a.data.getKeystroke() == 13 && i) { b.getButton("ok") && setTimeout(function () { b.getButton("ok").click() }, 0); i = false } }, null, null, 1E3) }); CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
                    var b =
['<div class="cke_dialog_ui_input_', a.type, '" role="presentation"']; a.width && b.push('style="width:' + a.width + '" '); b.push("><input "); c["aria-labelledby"] = this._.labelId; this._.required && (c["aria-required"] = this._.required); for (var f in c) b.push(f + '="' + c[f] + '" '); b.push(" /></div>"); return b.join("")
                })
            }
        }, textarea: function (b, a, d) {
            if (!(3 > arguments.length)) {
                h.call(this, a); var e = this, c = this._.inputId = CKEDITOR.tools.getNextId() + "_textarea", f = {}; a.validate && (this.validate = a.validate); f.rows = a.rows || 5; f.cols =
a.cols || 20; "undefined" != typeof a.inputStyle && (f.style = a.inputStyle); CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () { f["aria-labelledby"] = this._.labelId; this._.required && (f["aria-required"] = this._.required); var a = ['<div class="cke_dialog_ui_input_textarea" role="presentation"><textarea class="cke_dialog_ui_input_textarea" id="', c, '" '], b; for (b in f) a.push(b + '="' + CKEDITOR.tools.htmlEncode(f[b]) + '" '); a.push(">", CKEDITOR.tools.htmlEncode(e._["default"]), "</textarea></div>"); return a.join("") })
            }
        },
            checkbox: function (b, a, d) {
                if (!(3 > arguments.length)) {
                    var e = h.call(this, a, { "default": !!a["default"] }); a.validate && (this.validate = a.validate); CKEDITOR.ui.dialog.uiElement.call(this, b, a, d, "span", null, null, function () {
                        var c = CKEDITOR.tools.extend({}, a, { id: a.id ? a.id + "_checkbox" : CKEDITOR.tools.getNextId() + "_checkbox" }, true), f = [], d = CKEDITOR.tools.getNextId() + "_label", g = { "class": "cke_dialog_ui_checkbox_input", type: "checkbox", "aria-labelledby": d }; p(c); if (a["default"]) g.checked = "checked"; if (typeof c.inputStyle !=
"undefined") c.style = c.inputStyle; e.checkbox = new CKEDITOR.ui.dialog.uiElement(b, c, f, "input", null, g); f.push(' <label id="', d, '" for="', g.id, '"' + (a.labelStyle ? ' style="' + a.labelStyle + '"' : "") + ">", CKEDITOR.tools.htmlEncode(a.label), "</label>"); return f.join("")
                    })
                }
            }, radio: function (b, a, d) {
                if (!(3 > arguments.length)) {
                    h.call(this, a); this._["default"] || (this._["default"] = this._.initValue = a.items[0][1]); a.validate && (this.validate = a.valdiate); var e = [], c = this; CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
                        for (var f =
[], d = [], g = a.id ? a.id + "_radio" : CKEDITOR.tools.getNextId() + "_radio", j = 0; j < a.items.length; j++) {
                            var k = a.items[j], h = k[2] !== void 0 ? k[2] : k[0], l = k[1] !== void 0 ? k[1] : k[0], m = CKEDITOR.tools.getNextId() + "_radio_input", n = m + "_label", m = CKEDITOR.tools.extend({}, a, { id: m, title: null, type: null }, true), h = CKEDITOR.tools.extend({}, m, { title: h }, true), o = { type: "radio", "class": "cke_dialog_ui_radio_input", name: g, value: l, "aria-labelledby": n }, q = []; if (c._["default"] == l) o.checked = "checked"; p(m); p(h); if (typeof m.inputStyle != "undefined") m.style =
m.inputStyle; e.push(new CKEDITOR.ui.dialog.uiElement(b, m, q, "input", null, o)); q.push(" "); new CKEDITOR.ui.dialog.uiElement(b, h, q, "label", null, { id: n, "for": o.id }, k[0]); f.push(q.join(""))
                        } new CKEDITOR.ui.dialog.hbox(b, e, f, d); return d.join("")
                    }); this._.children = e
                }
            }, button: function (b, a, d) {
                if (arguments.length) {
                    "function" == typeof a && (a = a(b.getParentEditor())); h.call(this, a, { disabled: a.disabled || !1 }); CKEDITOR.event.implementOn(this); var e = this; b.on("load", function () {
                        var a = this.getElement(); (function () {
                            a.on("click",
e.click, e); a.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1} && (e.click(), a.data.preventDefault()) })
                        })(); a.unselectable()
                    }, this); var c = CKEDITOR.tools.extend({}, a); delete c.style; var f = CKEDITOR.tools.getNextId() + "_label"; CKEDITOR.ui.dialog.uiElement.call(this, b, c, d, "a", null, { style: a.style, href: "javascript:void(0)", title: a.label, hidefocus: "true", "class": a["class"], role: "button", "aria-labelledby": f }, '<span id="' + f + '" class="cke_dialog_ui_button">' + CKEDITOR.tools.htmlEncode(a.label) + "</span>")
                }
            },
            select: function (b, a, d) {
                if (!(3 > arguments.length)) {
                    var e = h.call(this, a); a.validate && (this.validate = a.validate); e.inputId = CKEDITOR.tools.getNextId() + "_select"; CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
                        var c = CKEDITOR.tools.extend({}, a, { id: a.id ? a.id + "_select" : CKEDITOR.tools.getNextId() + "_select" }, true), d = [], i = [], g = { id: e.inputId, "class": "cke_dialog_ui_input_select", "aria-labelledby": this._.labelId }; d.push('<div class="cke_dialog_ui_input_', a.type, '" role="presentation"'); a.width && d.push('style="width:' +
a.width + '" '); d.push(">"); if (a.size != void 0) g.size = a.size; if (a.multiple != void 0) g.multiple = a.multiple; p(c); for (var j = 0, k; j < a.items.length && (k = a.items[j]); j++) i.push('<option value="', CKEDITOR.tools.htmlEncode(k[1] !== void 0 ? k[1] : k[0]).replace(/"/g, "&quot;"), '" /> ', CKEDITOR.tools.htmlEncode(k[0])); if (typeof c.inputStyle != "undefined") c.style = c.inputStyle; e.select = new CKEDITOR.ui.dialog.uiElement(b, c, d, "select", null, g, i.join("")); d.push("</div>"); return d.join("")
                    })
                }
            }, file: function (b, a, d) {
                if (!(3 > arguments.length)) {
                    void 0 ===
a["default"] && (a["default"] = ""); var e = CKEDITOR.tools.extend(h.call(this, a), { definition: a, buttons: [] }); a.validate && (this.validate = a.validate); b.on("load", function () { CKEDITOR.document.getById(e.frameId).getParent().addClass("cke_dialog_ui_input_file") }); CKEDITOR.ui.dialog.labeledElement.call(this, b, a, d, function () {
    e.frameId = CKEDITOR.tools.getNextId() + "_fileInput"; var b = CKEDITOR.env.isCustomDomain(), d = ['<iframe frameborder="0" allowtransparency="0" class="cke_dialog_ui_input_file" role="presentation" id="',
e.frameId, '" title="', a.label, '" src="javascript:void(']; d.push(b ? "(function(){document.open();document.domain='" + document.domain + "';document.close();})()" : "0"); d.push(')"></iframe>'); return d.join("")
})
                }
            }, fileButton: function (b, a, d) {
                if (!(3 > arguments.length)) {
                    h.call(this, a); var e = this; a.validate && (this.validate = a.validate); var c = CKEDITOR.tools.extend({}, a), f = c.onClick; c.className = (c.className ? c.className + " " : "") + "cke_dialog_ui_button"; c.onClick = function (c) {
                        var d = a["for"]; if (!f || f.call(this, c) !== false) {
                            b.getContentElement(d[0],
d[1]).submit(); this.disable()
                        }
                    }; b.on("load", function () { b.getContentElement(a["for"][0], a["for"][1])._.buttons.push(e) }); CKEDITOR.ui.dialog.button.call(this, b, c, d)
                }
            }, html: function () {
                var b = /^\s*<[\w:]+\s+([^>]*)?>/, a = /^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/, d = /\/$/; return function (e, c, f) {
                    if (!(3 > arguments.length)) {
                        var i = [], g = c.html; "<" != g.charAt(0) && (g = "<span>" + g + "</span>"); var j = c.focus; j && (this.focus = function () { this.selectParentTab(); "function" == typeof j && j.call(this); this.fire("focus") }, c.isFocusable &&
(this.isFocusable = this.isFocusable), this.keyboardFocusable = !0); CKEDITOR.ui.dialog.uiElement.call(this, e, c, i, "span", null, null, ""); i = i.join("").match(b); g = g.match(a) || ["", "", ""]; d.test(g[1]) && (g[1] = g[1].slice(0, -1), g[2] = "/" + g[2]); f.push([g[1], " ", i[1] || "", g[2]].join(""))
                    }
                }
            } (), fieldset: function (b, a, d, e, c) {
                var f = c.label; this._ = { children: a }; CKEDITOR.ui.dialog.uiElement.call(this, b, c, e, "fieldset", null, null, function () {
                    var a = []; f && a.push("<legend" + (c.labelStyle ? ' style="' + c.labelStyle + '"' : "") + ">" + f + "</legend>");
                    for (var b = 0; b < d.length; b++) a.push(d[b]); return a.join("")
                })
            }
        }, !0); CKEDITOR.ui.dialog.html.prototype = new CKEDITOR.ui.dialog.uiElement; CKEDITOR.ui.dialog.labeledElement.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, { setLabel: function (b) { var a = CKEDITOR.document.getById(this._.labelId); 1 > a.getChildCount() ? (new CKEDITOR.dom.text(b, CKEDITOR.document)).appendTo(a) : a.getChild(0).$.nodeValue = b; return this }, getLabel: function () {
            var b = CKEDITOR.document.getById(this._.labelId); return !b || 1 > b.getChildCount() ?
"" : b.getChild(0).getText()
        }, eventProcessors: o
        }, !0); CKEDITOR.ui.dialog.button.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, { click: function () { return !this._.disabled ? this.fire("click", { dialog: this._.dialog }) : !1 }, enable: function () { this._.disabled = !1; var b = this.getElement(); b && b.removeClass("cke_disabled") }, disable: function () { this._.disabled = !0; this.getElement().addClass("cke_disabled") }, isVisible: function () { return this.getElement().getFirst().isVisible() }, isEnabled: function () { return !this._.disabled },
            eventProcessors: CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, { onClick: function (b, a) { this.on("click", function () { a.apply(this, arguments) }) } }, !0), accessKeyUp: function () { this.click() }, accessKeyDown: function () { this.focus() }, keyboardFocusable: !0
        }, !0); CKEDITOR.ui.dialog.textInput.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, { getInputElement: function () { return CKEDITOR.document.getById(this._.inputId) }, focus: function () {
            var b = this.selectParentTab();
            setTimeout(function () { var a = b.getInputElement(); a && a.$.focus() }, 0)
        }, select: function () { var b = this.selectParentTab(); setTimeout(function () { var a = b.getInputElement(); a && (a.$.focus(), a.$.select()) }, 0) }, accessKeyUp: function () { this.select() }, setValue: function (b) { !b && (b = ""); return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this, arguments) }, keyboardFocusable: !0
        }, n, !0); CKEDITOR.ui.dialog.textarea.prototype = new CKEDITOR.ui.dialog.textInput; CKEDITOR.ui.dialog.select.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,
{ getInputElement: function () { return this._.select.getElement() }, add: function (b, a, d) { var e = new CKEDITOR.dom.element("option", this.getDialog().getParentEditor().document), c = this.getInputElement().$; e.$.text = b; e.$.value = void 0 === a || null === a ? b : a; void 0 === d || null === d ? CKEDITOR.env.ie ? c.add(e.$) : c.add(e.$, null) : c.add(e.$, d); return this }, remove: function (b) { this.getInputElement().$.remove(b); return this }, clear: function () { for (var b = this.getInputElement().$; 0 < b.length; ) b.remove(0); return this }, keyboardFocusable: !0 },
n, !0); CKEDITOR.ui.dialog.checkbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, { getInputElement: function () { return this._.checkbox.getElement() }, setValue: function (b, a) { this.getInputElement().$.checked = b; !a && this.fire("change", { value: b }) }, getValue: function () { return this.getInputElement().$.checked }, accessKeyUp: function () { this.setValue(!this.getValue()) }, eventProcessors: { onChange: function (b, a) {
    if (CKEDITOR.env.ie) b.on("load", function () {
        var a = this._.checkbox.getElement(); a.on("propertychange",
function (b) { b = b.data.$; "checked" == b.propertyName && this.fire("change", { value: a.$.checked }) }, this)
    }, this), this.on("change", a); else return o.onChange.apply(this, arguments); return null
}
}, keyboardFocusable: !0
}, n, !0); CKEDITOR.ui.dialog.radio.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, { setValue: function (b, a) { for (var d = this._.children, e, c = 0; c < d.length && (e = d[c]); c++) e.getElement().$.checked = e.getValue() == b; !a && this.fire("change", { value: b }) }, getValue: function () {
    for (var b = this._.children,
a = 0; a < b.length; a++) if (b[a].getElement().$.checked) return b[a].getValue(); return null
}, accessKeyUp: function () { var b = this._.children, a; for (a = 0; a < b.length; a++) if (b[a].getElement().$.checked) { b[a].getElement().focus(); return } b[0].getElement().focus() }, eventProcessors: { onChange: function (b, a) {
    if (CKEDITOR.env.ie) b.on("load", function () {
        for (var a = this._.children, b = this, c = 0; c < a.length; c++) a[c].getElement().on("propertychange", function (a) {
            a = a.data.$; "checked" == a.propertyName && this.$.checked && b.fire("change",
{ value: this.getAttribute("value") })
        })
    }, this), this.on("change", a); else return o.onChange.apply(this, arguments); return null
}
}, keyboardFocusable: !0
}, n, !0); CKEDITOR.ui.dialog.file.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, n, { getInputElement: function () { var b = CKEDITOR.document.getById(this._.frameId).getFrameDocument(); return 0 < b.$.forms.length ? new CKEDITOR.dom.element(b.$.forms[0].elements[0]) : this.getElement() }, submit: function () {
    this.getInputElement().getParent().$.submit();
    return this
}, getAction: function () { return this.getInputElement().getParent().$.action }, registerEvents: function (b) { var a = /^on([A-Z]\w+)/, d, e = function (a, b, c, d) { a.on("formLoaded", function () { a.getInputElement().on(c, d, a) }) }, c; for (c in b) if (d = c.match(a)) this.eventProcessors[c] ? this.eventProcessors[c].call(this, this._.dialog, b[c]) : e(this, this._.dialog, d[1].toLowerCase(), b[c]); return this }, reset: function () {
    function b() {
        d.$.open(); CKEDITOR.env.isCustomDomain() && (d.$.domain = document.domain); var b = ""; e.size &&
(b = e.size - (CKEDITOR.env.ie ? 7 : 0)); var h = a.frameId + "_input"; d.$.write(['<html dir="' + g + '" lang="' + j + '"><head><title></title></head><body style="margin: 0; overflow: hidden; background: transparent;">', '<form enctype="multipart/form-data" method="POST" dir="' + g + '" lang="' + j + '" action="', CKEDITOR.tools.htmlEncode(e.action), '"><label id="', a.labelId, '" for="', h, '" style="display:none">', CKEDITOR.tools.htmlEncode(e.label), '</label><input id="', h, '" aria-labelledby="', a.labelId, '" type="file" name="', CKEDITOR.tools.htmlEncode(e.id ||
"cke_upload"), '" size="', CKEDITOR.tools.htmlEncode(0 < b ? b : ""), '" /></form></body></html>', "<script>window.parent.CKEDITOR.tools.callFunction(" + f + ");", "window.onbeforeunload = function() {window.parent.CKEDITOR.tools.callFunction(" + i + ")}<\/script>"].join("")); d.$.close(); for (b = 0; b < c.length; b++) c[b].enable()
    } var a = this._, d = CKEDITOR.document.getById(a.frameId).getFrameDocument(), e = a.definition, c = a.buttons, f = this.formLoadedNumber, i = this.formUnloadNumber, g = a.dialog._.editor.lang.dir, j = a.dialog._.editor.langCode;
    f || (f = this.formLoadedNumber = CKEDITOR.tools.addFunction(function () { this.fire("formLoaded") }, this), i = this.formUnloadNumber = CKEDITOR.tools.addFunction(function () { this.getInputElement().clearCustomData() }, this), this.getDialog()._.editor.on("destroy", function () { CKEDITOR.tools.removeFunction(f); CKEDITOR.tools.removeFunction(i) })); CKEDITOR.env.gecko ? setTimeout(b, 500) : b()
}, getValue: function () { return this.getInputElement().$.value || "" }, setInitValue: function () { this._.initValue = "" }, eventProcessors: { onChange: function (b,
a) { this._.domOnChangeRegistered || (this.on("formLoaded", function () { this.getInputElement().on("change", function () { this.fire("change", { value: this.getValue() }) }, this) }, this), this._.domOnChangeRegistered = !0); this.on("change", a) }
}, keyboardFocusable: !0
}, !0); CKEDITOR.ui.dialog.fileButton.prototype = new CKEDITOR.ui.dialog.button; CKEDITOR.ui.dialog.fieldset.prototype = CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype); CKEDITOR.dialog.addUIElement("text", r); CKEDITOR.dialog.addUIElement("password", r); CKEDITOR.dialog.addUIElement("textarea",
l); CKEDITOR.dialog.addUIElement("checkbox", l); CKEDITOR.dialog.addUIElement("radio", l); CKEDITOR.dialog.addUIElement("button", l); CKEDITOR.dialog.addUIElement("select", l); CKEDITOR.dialog.addUIElement("file", l); CKEDITOR.dialog.addUIElement("fileButton", l); CKEDITOR.dialog.addUIElement("html", l); CKEDITOR.dialog.addUIElement("fieldset", { build: function (b, a, d) {
    for (var e = a.children, c, f = [], i = [], g = 0; g < e.length && (c = e[g]); g++) { var h = []; f.push(h); i.push(CKEDITOR.dialog._.uiElementBuilders[c.type].build(b, c, h)) } return new CKEDITOR.ui.dialog[a.type](b,
i, f, d, a)
}
})
    }
    }); CKEDITOR.DIALOG_RESIZE_NONE = 0; CKEDITOR.DIALOG_RESIZE_WIDTH = 1; CKEDITOR.DIALOG_RESIZE_HEIGHT = 2; CKEDITOR.DIALOG_RESIZE_BOTH = 3;
    (function () {
        function p() { for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId) + a, c = b - 1; c > b - a; c--) if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a]; return null } function u() { for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId), c = b + 1; c < b + a; c++) if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a]; return null } function q(a, b) {
            for (var c = a.$.getElementsByTagName("input"),
e = 0, d = c.length; e < d; e++) { var g = new CKEDITOR.dom.element(c[e]); "text" == g.getAttribute("type").toLowerCase() && (b ? (g.setAttribute("value", g.getCustomData("fake_value") || ""), g.removeCustomData("fake_value")) : (g.setCustomData("fake_value", g.getAttribute("value")), g.setAttribute("value", ""))) }
        } function P(a, b) { var c = this.getInputElement(); c && (a ? c.removeAttribute("aria-invalid") : c.setAttribute("aria-invalid", !0)); a || (this.select ? this.select() : this.focus()); b && alert(b); this.fire("validated", { valid: a, msg: b }) }
        function Q() { var a = this.getInputElement(); a && a.removeAttribute("aria-invalid") } function R(a) {
            var a = CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog", S).output({ id: CKEDITOR.tools.getNextNumber(), editorId: a.id, langDir: a.lang.dir, langCode: a.langCode, editorDialogClass: "cke_editor_" + a.name.replace(/\./g, "\\.") + "_dialog", closeTitle: a.lang.common.close })), b = a.getChild([0, 0, 0, 0, 0]), c = b.getChild(0), e = b.getChild(1); if (CKEDITOR.env.ie && !CKEDITOR.env.ie6Compat) {
                var d = CKEDITOR.env.isCustomDomain(),
d = "javascript:void(function(){" + encodeURIComponent("document.open();" + (d ? 'document.domain="' + document.domain + '";' : "") + "document.close();") + "}())"; CKEDITOR.dom.element.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="' + d + '" tabIndex="-1"></iframe>').appendTo(b.getParent())
            } c.unselectable(); e.unselectable(); return { element: a, parts: { dialog: a.getChild(0), title: c, close: e, tabs: b.getChild(2), contents: b.getChild([3, 0, 0, 0]), footer: b.getChild([3, 0, 1, 0])} }
        } function H(a, b, c) {
            this.element = b;
            this.focusIndex = c; this.tabIndex = 0; this.isFocusable = function () { return !b.getAttribute("disabled") && b.isVisible() }; this.focus = function () { a._.currentFocusIndex = this.focusIndex; this.element.focus() }; b.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1, 13: 1} && this.fire("click") }); b.on("focus", function () { this.fire("mouseover") }); b.on("blur", function () { this.fire("mouseout") })
        } function T(a) {
            function b() { a.layout() } var c = CKEDITOR.document.getWindow(); c.on("resize", b); a.on("hide", function () {
                c.removeListener("resize",
b)
            })
        } function I(a, b) { this._ = { dialog: a }; CKEDITOR.tools.extend(this, b) } function U(a) {
            function b(b) { var c = a.getSize(), h = CKEDITOR.document.getWindow().getViewPaneSize(), o = b.data.$.screenX, i = b.data.$.screenY, n = o - e.x, l = i - e.y; e = { x: o, y: i }; d.x += n; d.y += l; a.move(d.x + k[3] < f ? -k[3] : d.x - k[1] > h.width - c.width - f ? h.width - c.width + ("rtl" == g.lang.dir ? 0 : k[1]) : d.x, d.y + k[0] < f ? -k[0] : d.y - k[2] > h.height - c.height - f ? h.height - c.height + k[2] : d.y, 1); b.data.preventDefault() } function c() {
                CKEDITOR.document.removeListener("mousemove",
b); CKEDITOR.document.removeListener("mouseup", c); if (CKEDITOR.env.ie6Compat) { var a = r.getChild(0).getFrameDocument(); a.removeListener("mousemove", b); a.removeListener("mouseup", c) }
            } var e = null, d = null; a.getElement().getFirst(); var g = a.getParentEditor(), f = g.config.dialog_magnetDistance, k = CKEDITOR.skin.margins || [0, 0, 0, 0]; "undefined" == typeof f && (f = 20); a.parts.title.on("mousedown", function (f) {
                e = { x: f.data.$.screenX, y: f.data.$.screenY }; CKEDITOR.document.on("mousemove", b); CKEDITOR.document.on("mouseup", c); d =
a.getPosition(); if (CKEDITOR.env.ie6Compat) { var g = r.getChild(0).getFrameDocument(); g.on("mousemove", b); g.on("mouseup", c) } f.data.preventDefault()
            }, a)
        } function V(a) {
            var b, c; function e(d) {
                var e = "rtl" == k.lang.dir, i = o.width, D = o.height, E = i + (d.data.$.screenX - b) * (e ? -1 : 1) * (a._.moved ? 1 : 2), n = D + (d.data.$.screenY - c) * (a._.moved ? 1 : 2), x = a._.element.getFirst(), x = e && x.getComputedStyle("right"), y = a.getPosition(); y.y + n > h.height && (n = h.height - y.y); if ((e ? x : y.x) + E > h.width) E = h.width - (e ? x : y.x); if (f == CKEDITOR.DIALOG_RESIZE_WIDTH ||
f == CKEDITOR.DIALOG_RESIZE_BOTH) i = Math.max(g.minWidth || 0, E - m); if (f == CKEDITOR.DIALOG_RESIZE_HEIGHT || f == CKEDITOR.DIALOG_RESIZE_BOTH) D = Math.max(g.minHeight || 0, n - j); a.resize(i, D); a._.moved || a.layout(); d.data.preventDefault()
            } function d() { CKEDITOR.document.removeListener("mouseup", d); CKEDITOR.document.removeListener("mousemove", e); i && (i.remove(), i = null); if (CKEDITOR.env.ie6Compat) { var a = r.getChild(0).getFrameDocument(); a.removeListener("mouseup", d); a.removeListener("mousemove", e) } } var g = a.definition, f = g.resizable;
            if (f != CKEDITOR.DIALOG_RESIZE_NONE) {
                var k = a.getParentEditor(), m, j, h, o, i, n = CKEDITOR.tools.addFunction(function (f) {
                    o = a.getSize(); var g = a.parts.contents; g.$.getElementsByTagName("iframe").length && (i = CKEDITOR.dom.element.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 100%; position: absolute; width: 100%;"></div>'), g.append(i)); j = o.height - a.parts.contents.getSize("height", !(CKEDITOR.env.gecko || CKEDITOR.env.opera || CKEDITOR.env.ie && CKEDITOR.env.quirks)); m = o.width - a.parts.contents.getSize("width",
1); b = f.screenX; c = f.screenY; h = CKEDITOR.document.getWindow().getViewPaneSize(); CKEDITOR.document.on("mousemove", e); CKEDITOR.document.on("mouseup", d); CKEDITOR.env.ie6Compat && (g = r.getChild(0).getFrameDocument(), g.on("mousemove", e), g.on("mouseup", d)); f.preventDefault && f.preventDefault()
                }); a.on("load", function () {
                    var b = ""; f == CKEDITOR.DIALOG_RESIZE_WIDTH ? b = " cke_resizer_horizontal" : f == CKEDITOR.DIALOG_RESIZE_HEIGHT && (b = " cke_resizer_vertical"); b = CKEDITOR.dom.element.createFromHtml('<div class="cke_resizer' +
b + " cke_resizer_" + k.lang.dir + '" title="' + CKEDITOR.tools.htmlEncode(k.lang.common.resize) + '" onmousedown="CKEDITOR.tools.callFunction(' + n + ', event )">' + ("ltr" == k.lang.dir ? "◢" : "◣") + "</div>"); a.parts.footer.append(b, 1)
                }); k.on("destroy", function () { CKEDITOR.tools.removeFunction(n) })
            }
        } function F(a) { a.data.preventDefault(1) } function J(a) {
            var b = CKEDITOR.document.getWindow(), c = a.config, e = c.dialog_backgroundCoverColor || "white", d = c.dialog_backgroundCoverOpacity, g = c.baseFloatZIndex, c = CKEDITOR.tools.genKey(e,
d, g), f = w[c]; if (f) f.show(); else {
                g = ['<div tabIndex="-1" style="position: ', CKEDITOR.env.ie6Compat ? "absolute" : "fixed", "; z-index: ", g, "; top: 0px; left: 0px; ", !CKEDITOR.env.ie6Compat ? "background-color: " + e : "", '" class="cke_dialog_background_cover">']; if (CKEDITOR.env.ie6Compat) {
                    var k = CKEDITOR.env.isCustomDomain(), e = "<html><body style=\\'background-color:" + e + ";\\'></body></html>"; g.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" src="javascript:'); g.push("void((function(){document.open();" +
(k ? "document.domain='" + document.domain + "';" : "") + "document.write( '" + e + "' );document.close();})())"); g.push('" style="position:absolute;left:0;top:0;width:100%;height: 100%;progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>')
                } g.push("</div>"); f = CKEDITOR.dom.element.createFromHtml(g.join("")); f.setOpacity(void 0 != d ? d : 0.5); f.on("keydown", F); f.on("keypress", F); f.on("keyup", F); f.appendTo(CKEDITOR.document.getBody()); w[c] = f
            } a.focusManager.add(f); r = f; var a = function () {
                var a = b.getViewPaneSize();
                f.setStyles({ width: a.width + "px", height: a.height + "px" })
            }, m = function () { var a = b.getScrollPosition(), c = CKEDITOR.dialog._.currentTop; f.setStyles({ left: a.x + "px", top: a.y + "px" }); if (c) { do a = c.getPosition(), c.move(a.x, a.y); while (c = c._.parentDialog) } }; G = a; b.on("resize", a); a(); (!CKEDITOR.env.mac || !CKEDITOR.env.webkit) && f.focus(); if (CKEDITOR.env.ie6Compat) {
                var j = function () { m(); arguments.callee.prevScrollHandler.apply(this, arguments) }; b.$.setTimeout(function () {
                    j.prevScrollHandler = window.onscroll || function () { };
                    window.onscroll = j
                }, 0); m()
            }
        } function K(a) { r && (a.focusManager.remove(r), a = CKEDITOR.document.getWindow(), r.hide(), a.removeListener("resize", G), CKEDITOR.env.ie6Compat && a.$.setTimeout(function () { window.onscroll = window.onscroll && window.onscroll.prevScrollHandler || null }, 0), G = null) } var s = CKEDITOR.tools.cssLength, S = '<div class="cke cke_reset_all {editorId} {editorDialogClass}" dir="{langDir}" lang="{langCode}" role="dialog" aria-labelledby="cke_dialog_title_{id}"><table class="cke_dialog ' + CKEDITOR.env.cssClass +
' cke_{langDir}" style="position:absolute" role="presentation"><tr><td role="presentation"><div class="cke_dialog_body" role="presentation"><div id="cke_dialog_title_{id}" class="cke_dialog_title" role="presentation"></div><a id="cke_dialog_close_button_{id}" class="cke_dialog_close_button" href="javascript:void(0)" title="{closeTitle}" role="button"><span class="cke_label">X</span></a><div id="cke_dialog_tabs_{id}" class="cke_dialog_tabs" role="tablist"></div><table class="cke_dialog_contents" role="presentation"><tr><td id="cke_dialog_contents_{id}" class="cke_dialog_contents_body" role="presentation"></td></tr><tr><td id="cke_dialog_footer_{id}" class="cke_dialog_footer" role="presentation"></td></tr></table></div></td></tr></table></div>';
        CKEDITOR.dialog = function (a, b) {
            function c() { var a = l._.focusList; a.sort(function (a, b) { return a.tabIndex != b.tabIndex ? b.tabIndex - a.tabIndex : a.focusIndex - b.focusIndex }); for (var b = a.length, c = 0; c < b; c++) a[c].focusIndex = c } function e(a) { var b = l._.focusList, a = a || 0; if (!(1 > b.length)) { var c = l._.currentFocusIndex; try { b[c].getInputElement().$.blur() } catch (d) { } for (var f = c = (c + a + b.length) % b.length; a && !b[f].isFocusable() && !(f = (f + a + b.length) % b.length, f == c); ); b[f].focus(); "text" == b[f].type && b[f].select() } } function d(b) {
                if (l ==
CKEDITOR.dialog._.currentTop) {
                    var c = b.data.getKeystroke(), f = "rtl" == a.lang.dir; o = i = 0; if (9 == c || c == CKEDITOR.SHIFT + 9) c = c == CKEDITOR.SHIFT + 9, l._.tabBarMode ? (c = c ? p.call(l) : u.call(l), l.selectPage(c), l._.tabs[c][0].focus()) : e(c ? -1 : 1), o = 1; else if (c == CKEDITOR.ALT + 121 && !l._.tabBarMode && 1 < l.getPageCount()) l._.tabBarMode = !0, l._.tabs[l._.currentTabId][0].focus(), o = 1; else if ((37 == c || 39 == c) && l._.tabBarMode) c = c == (f ? 39 : 37) ? p.call(l) : u.call(l), l.selectPage(c), l._.tabs[c][0].focus(), o = 1; else if ((13 == c || 32 == c) && l._.tabBarMode) this.selectPage(this._.currentTabId),
this._.tabBarMode = !1, this._.currentFocusIndex = -1, e(1), o = 1; else if (13 == c) { c = b.data.getTarget(); if (!c.is("a", "button", "select", "textarea") && (!c.is("input") || "button" != c.$.type)) (c = this.getButton("ok")) && CKEDITOR.tools.setTimeout(c.click, 0, c), o = 1; i = 1 } else if (27 == c) (c = this.getButton("cancel")) ? CKEDITOR.tools.setTimeout(c.click, 0, c) : !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(), i = 1; else return; g(b)
                }
            } function g(a) { o ? a.data.preventDefault(1) : i && a.data.stopPropagation() } var f = CKEDITOR.dialog._.dialogDefinitions[b],
k = CKEDITOR.tools.clone(W), m = a.config.dialog_buttonsOrder || "OS", j = a.lang.dir, h = {}, o, i; ("OS" == m && CKEDITOR.env.mac || "rtl" == m && "ltr" == j || "ltr" == m && "rtl" == j) && k.buttons.reverse(); f = CKEDITOR.tools.extend(f(a), k); f = CKEDITOR.tools.clone(f); f = new L(this, f); k = R(a); this._ = { editor: a, element: k.element, name: b, contentSize: { width: 0, height: 0 }, size: { width: 0, height: 0 }, contents: {}, buttons: {}, accessKeyMap: {}, tabs: {}, tabIdList: [], currentTabId: null, currentTabIndex: null, pageCount: 0, lastTab: null, tabBarMode: !1, focusList: [],
    currentFocusIndex: 0, hasFocus: !1
}; this.parts = k.parts; CKEDITOR.tools.setTimeout(function () { a.fire("ariaWidget", this.parts.contents) }, 0, this); k = { position: CKEDITOR.env.ie6Compat ? "absolute" : "fixed", top: 0, visibility: "hidden" }; k["rtl" == j ? "right" : "left"] = 0; this.parts.dialog.setStyles(k); CKEDITOR.event.call(this); this.definition = f = CKEDITOR.fire("dialogDefinition", { name: b, definition: f }, a).definition; if (!("removeDialogTabs" in a._) && a.config.removeDialogTabs) {
                k = a.config.removeDialogTabs.split(";"); for (j = 0; j <
k.length; j++) if (m = k[j].split(":"), 2 == m.length) { var n = m[0]; h[n] || (h[n] = []); h[n].push(m[1]) } a._.removeDialogTabs = h
            } if (a._.removeDialogTabs && (h = a._.removeDialogTabs[b])) for (j = 0; j < h.length; j++) f.removeContents(h[j]); if (f.onLoad) this.on("load", f.onLoad); if (f.onShow) this.on("show", f.onShow); if (f.onHide) this.on("hide", f.onHide); if (f.onOk) this.on("ok", function (b) { a.fire("saveSnapshot"); setTimeout(function () { a.fire("saveSnapshot") }, 0); !1 === f.onOk.call(this, b) && (b.data.hide = !1) }); if (f.onCancel) this.on("cancel",
function (a) { !1 === f.onCancel.call(this, a) && (a.data.hide = !1) }); var l = this, C = function (a) { var b = l._.contents, c = !1, f; for (f in b) for (var d in b[f]) if (c = a.call(this, b[f][d])) return }; this.on("ok", function (a) { C(function (b) { if (b.validate) { var c = b.validate(this), f = "string" == typeof c || !1 === c; f && (a.data.hide = !1, a.stop()); P.call(b, !f, "string" == typeof c ? c : void 0); return f } }) }, this, null, 0); this.on("cancel", function (b) { C(function (c) { if (c.isChanged()) return confirm(a.lang.common.confirmCancel) || (b.data.hide = !1), !0 }) },
this, null, 0); this.parts.close.on("click", function (a) { !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(); a.data.preventDefault() }, this); this.changeFocus = e; var v = this._.element; a.focusManager.add(v, 1); this.on("show", function () { v.on("keydown", d, this); if (CKEDITOR.env.opera || CKEDITOR.env.gecko) v.on("keypress", g, this) }); this.on("hide", function () { v.removeListener("keydown", d); (CKEDITOR.env.opera || CKEDITOR.env.gecko) && v.removeListener("keypress", g); C(function (a) { Q.apply(a) }) }); this.on("iframeAdded", function (a) {
    (new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown",
d, this, null, 0)
}); this.on("show", function () { c(); if (a.config.dialog_startupFocusTab && 1 < l._.pageCount) l._.tabBarMode = !0, l._.tabs[l._.currentTabId][0].focus(); else if (!this._.hasFocus) if (this._.currentFocusIndex = -1, f.onFocus) { var b = f.onFocus.call(this); b && b.focus() } else e(1) }, this, null, 4294967295); if (CKEDITOR.env.ie6Compat) this.on("load", function () { var a = this.getElement(), b = a.getFirst(); b.remove(); b.appendTo(a) }, this); U(this); V(this); (new CKEDITOR.dom.text(f.title, CKEDITOR.document)).appendTo(this.parts.title);
            for (j = 0; j < f.contents.length; j++) (h = f.contents[j]) && this.addPage(h); this.parts.tabs.on("click", function (a) { var b = a.data.getTarget(); b.hasClass("cke_dialog_tab") && (b = b.$.id, this.selectPage(b.substring(4, b.lastIndexOf("_"))), this._.tabBarMode && (this._.tabBarMode = !1, this._.currentFocusIndex = -1, e(1)), a.data.preventDefault()) }, this); j = []; h = CKEDITOR.dialog._.uiElementBuilders.hbox.build(this, { type: "hbox", className: "cke_dialog_footer_buttons", widths: [], children: f.buttons }, j).getChild(); this.parts.footer.setHtml(j.join(""));
            for (j = 0; j < h.length; j++) this._.buttons[h[j].id] = h[j]
        }; CKEDITOR.dialog.prototype = { destroy: function () { this.hide(); this._.element.remove() }, resize: function () {
            return function (a, b) {
                if (!this._.contentSize || !(this._.contentSize.width == a && this._.contentSize.height == b)) CKEDITOR.dialog.fire("resize", { dialog: this, width: a, height: b }, this._.editor), this.fire("resize", { width: a, height: b }, this._.editor), this.parts.contents.setStyles({ width: a + "px", height: b + "px" }), "rtl" == this._.editor.lang.dir && this._.position && (this._.position.x =
CKEDITOR.document.getWindow().getViewPaneSize().width - this._.contentSize.width - parseInt(this._.element.getFirst().getStyle("right"), 10)), this._.contentSize = { width: a, height: b }
            }
        } (), getSize: function () { var a = this._.element.getFirst(); return { width: a.$.offsetWidth || 0, height: a.$.offsetHeight || 0} }, move: function (a, b, c) {
            var e = this._.element.getFirst(), d = "rtl" == this._.editor.lang.dir, g = "fixed" == e.getComputedStyle("position"); if (!g || !this._.position || !(this._.position.x == a && this._.position.y == b)) this._.position =
{ x: a, y: b }, g || (g = CKEDITOR.document.getWindow().getScrollPosition(), a += g.x, b += g.y), d && (g = this.getSize(), a = CKEDITOR.document.getWindow().getViewPaneSize().width - g.width - a), b = { top: (0 < b ? b : 0) + "px" }, b[d ? "right" : "left"] = (0 < a ? a : 0) + "px", e.setStyles(b), c && (this._.moved = 1)
        }, getPosition: function () { return CKEDITOR.tools.extend({}, this._.position) }, show: function () {
            var a = this._.element, b = this.definition; !a.getParent() || !a.getParent().equals(CKEDITOR.document.getBody()) ? a.appendTo(CKEDITOR.document.getBody()) : a.setStyle("display",
"block"); if (CKEDITOR.env.gecko && 10900 > CKEDITOR.env.version) { var c = this.parts.dialog; c.setStyle("position", "absolute"); setTimeout(function () { c.setStyle("position", "fixed") }, 0) } this.resize(this._.contentSize && this._.contentSize.width || b.width || b.minWidth, this._.contentSize && this._.contentSize.height || b.height || b.minHeight); this.reset(); this.selectPage(this.definition.contents[0].id); null === CKEDITOR.dialog._.currentZIndex && (CKEDITOR.dialog._.currentZIndex = this._.editor.config.baseFloatZIndex); this._.element.getFirst().setStyle("z-index",
CKEDITOR.dialog._.currentZIndex += 10); null === CKEDITOR.dialog._.currentTop ? (CKEDITOR.dialog._.currentTop = this, this._.parentDialog = null, J(this._.editor)) : (this._.parentDialog = CKEDITOR.dialog._.currentTop, this._.parentDialog.getElement().getFirst().$.style.zIndex -= Math.floor(this._.editor.config.baseFloatZIndex / 2), CKEDITOR.dialog._.currentTop = this); a.on("keydown", M); a.on(CKEDITOR.env.opera ? "keypress" : "keyup", N); this._.hasFocus = !1; CKEDITOR.tools.setTimeout(function () {
    this.layout(); T(this); this.parts.dialog.setStyle("visibility",
""); this.fireOnce("load", {}); CKEDITOR.ui.fire("ready", this); this.fire("show", {}); this._.editor.fire("dialogShow", this); this._.parentDialog || this._.editor.focusManager.lock(); this.foreach(function (a) { a.setInitValue && a.setInitValue() })
}, 100, this)
        }, layout: function () {
            var a = this.parts.dialog, b = this.getSize(), c = CKEDITOR.document.getWindow().getViewPaneSize(), e = (c.width - b.width) / 2, d = (c.height - b.height) / 2; CKEDITOR.env.ie6Compat || (b.height + (0 < d ? d : 0) > c.height || b.width + (0 < e ? e : 0) > c.width ? a.setStyle("position",
"absolute") : a.setStyle("position", "fixed")); this.move(this._.moved ? this._.position.x : e, this._.moved ? this._.position.y : d)
        }, foreach: function (a) { for (var b in this._.contents) for (var c in this._.contents[b]) a.call(this, this._.contents[b][c]); return this }, reset: function () { var a = function (a) { a.reset && a.reset(1) }; return function () { this.foreach(a); return this } } (), setupContent: function () { var a = arguments; this.foreach(function (b) { b.setup && b.setup.apply(b, a) }) }, commitContent: function () {
            var a = arguments; this.foreach(function (b) {
                CKEDITOR.env.ie &&
this._.currentFocusIndex == b.focusIndex && b.getInputElement().$.blur(); b.commit && b.commit.apply(b, a)
            })
        }, hide: function () {
            if (this.parts.dialog.isVisible()) {
                this.fire("hide", {}); this._.editor.fire("dialogHide", this); this.selectPage(this._.tabIdList[0]); var a = this._.element; a.setStyle("display", "none"); this.parts.dialog.setStyle("visibility", "hidden"); for (X(this); CKEDITOR.dialog._.currentTop != this; ) CKEDITOR.dialog._.currentTop.hide(); if (this._.parentDialog) {
                    var b = this._.parentDialog.getElement().getFirst();
                    b.setStyle("z-index", parseInt(b.$.style.zIndex, 10) + Math.floor(this._.editor.config.baseFloatZIndex / 2))
                } else K(this._.editor); if (CKEDITOR.dialog._.currentTop = this._.parentDialog) CKEDITOR.dialog._.currentZIndex -= 10; else { CKEDITOR.dialog._.currentZIndex = null; a.removeListener("keydown", M); a.removeListener(CKEDITOR.env.opera ? "keypress" : "keyup", N); var c = this._.editor; c.focus(); setTimeout(function () { c.focusManager.unlock() }, 0) } delete this._.parentDialog; this.foreach(function (a) { a.resetInitValue && a.resetInitValue() })
            }
        },
            addPage: function (a) {
                var b = [], c = a.label ? ' title="' + CKEDITOR.tools.htmlEncode(a.label) + '"' : "", e = CKEDITOR.dialog._.uiElementBuilders.vbox.build(this, { type: "vbox", className: "cke_dialog_page_contents", children: a.elements, expand: !!a.expand, padding: a.padding, style: a.style || "width: 100%;" }, b), b = CKEDITOR.dom.element.createFromHtml(b.join("")); b.setAttribute("role", "tabpanel"); var d = CKEDITOR.env, g = "cke_" + a.id + "_" + CKEDITOR.tools.getNextNumber(), c = CKEDITOR.dom.element.createFromHtml(['<a class="cke_dialog_tab"',
0 < this._.pageCount ? " cke_last" : "cke_first", c, a.hidden ? ' style="display:none"' : "", ' id="', g, '"', d.gecko && 10900 <= d.version && !d.hc ? "" : ' href="javascript:void(0)"', ' tabIndex="-1" hidefocus="true" role="tab">', a.label, "</a>"].join("")); b.setAttribute("aria-labelledby", g); this._.tabs[a.id] = [c, b]; this._.tabIdList.push(a.id); !a.hidden && this._.pageCount++; this._.lastTab = c; this.updateStyle(); g = this._.contents[a.id] = {}; for (d = e.getChild(); e = d.shift(); ) g[e.id] = e, "function" == typeof e.getChild && d.push.apply(d,
e.getChild()); b.setAttribute("name", a.id); b.appendTo(this.parts.contents); c.unselectable(); this.parts.tabs.append(c); a.accessKey && (O(this, this, "CTRL+" + a.accessKey, Y, Z), this._.accessKeyMap["CTRL+" + a.accessKey] = a.id)
            }, selectPage: function (a) {
                if (this._.currentTabId != a && !0 !== this.fire("selectPage", { page: a, currentPage: this._.currentTabId })) {
                    for (var b in this._.tabs) { var c = this._.tabs[b][0], e = this._.tabs[b][1]; b != a && (c.removeClass("cke_dialog_tab_selected"), e.hide()); e.setAttribute("aria-hidden", b != a) } var d =
this._.tabs[a]; d[0].addClass("cke_dialog_tab_selected"); CKEDITOR.env.ie6Compat || CKEDITOR.env.ie7Compat ? (q(d[1]), d[1].show(), setTimeout(function () { q(d[1], 1) }, 0)) : d[1].show(); this._.currentTabId = a; this._.currentTabIndex = CKEDITOR.tools.indexOf(this._.tabIdList, a)
                }
            }, updateStyle: function () { this.parts.dialog[(1 === this._.pageCount ? "add" : "remove") + "Class"]("cke_single_page") }, hidePage: function (a) {
                var b = this._.tabs[a] && this._.tabs[a][0]; b && (1 != this._.pageCount && b.isVisible()) && (a == this._.currentTabId && this.selectPage(p.call(this)),
b.hide(), this._.pageCount--, this.updateStyle())
            }, showPage: function (a) { if (a = this._.tabs[a] && this._.tabs[a][0]) a.show(), this._.pageCount++, this.updateStyle() }, getElement: function () { return this._.element }, getName: function () { return this._.name }, getContentElement: function (a, b) { var c = this._.contents[a]; return c && c[b] }, getValueOf: function (a, b) { return this.getContentElement(a, b).getValue() }, setValueOf: function (a, b, c) { return this.getContentElement(a, b).setValue(c) }, getButton: function (a) { return this._.buttons[a] },
            click: function (a) { return this._.buttons[a].click() }, disableButton: function (a) { return this._.buttons[a].disable() }, enableButton: function (a) { return this._.buttons[a].enable() }, getPageCount: function () { return this._.pageCount }, getParentEditor: function () { return this._.editor }, getSelectedElement: function () { return this.getParentEditor().getSelection().getSelectedElement() }, addFocusable: function (a, b) {
                if ("undefined" == typeof b) b = this._.focusList.length, this._.focusList.push(new H(this, a, b)); else {
                    this._.focusList.splice(b,
0, new H(this, a, b)); for (var c = b + 1; c < this._.focusList.length; c++) this._.focusList[c].focusIndex++
                }
            }
        }; CKEDITOR.tools.extend(CKEDITOR.dialog, { add: function (a, b) { if (!this._.dialogDefinitions[a] || "function" == typeof b) this._.dialogDefinitions[a] = b }, exists: function (a) { return !!this._.dialogDefinitions[a] }, getCurrent: function () { return CKEDITOR.dialog._.currentTop }, okButton: function () {
            var a = function (a, c) {
                c = c || {}; return CKEDITOR.tools.extend({ id: "ok", type: "button", label: a.lang.common.ok, "class": "cke_dialog_ui_button_ok",
                    onClick: function (a) { a = a.data.dialog; !1 !== a.fire("ok", { hide: !0 }).hide && a.hide() }
                }, c, !0)
            }; a.type = "button"; a.override = function (b) { return CKEDITOR.tools.extend(function (c) { return a(c, b) }, { type: "button" }, !0) }; return a
        } (), cancelButton: function () {
            var a = function (a, c) { c = c || {}; return CKEDITOR.tools.extend({ id: "cancel", type: "button", label: a.lang.common.cancel, "class": "cke_dialog_ui_button_cancel", onClick: function (a) { a = a.data.dialog; !1 !== a.fire("cancel", { hide: !0 }).hide && a.hide() } }, c, !0) }; a.type = "button"; a.override =
function (b) { return CKEDITOR.tools.extend(function (c) { return a(c, b) }, { type: "button" }, !0) }; return a
        } (), addUIElement: function (a, b) { this._.uiElementBuilders[a] = b }
        }); CKEDITOR.dialog._ = { uiElementBuilders: {}, dialogDefinitions: {}, currentTop: null, currentZIndex: null }; CKEDITOR.event.implementOn(CKEDITOR.dialog); CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype, !0); var W = { resizable: CKEDITOR.DIALOG_RESIZE_BOTH, minWidth: 600, minHeight: 400, buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton] }, z = function (a,
b, c) { for (var e = 0, d; d = a[e]; e++) if (d.id == b || c && d[c] && (d = z(d[c], b, c))) return d; return null }, A = function (a, b, c, e, d) { if (c) { for (var g = 0, f; f = a[g]; g++) { if (f.id == c) return a.splice(g, 0, b), b; if (e && f[e] && (f = A(f[e], b, c, e, !0))) return f } if (d) return null } a.push(b); return b }, B = function (a, b, c) { for (var e = 0, d; d = a[e]; e++) { if (d.id == b) return a.splice(e, 1); if (c && d[c] && (d = B(d[c], b, c))) return d } return null }, L = function (a, b) { this.dialog = a; for (var c = b.contents, e = 0, d; d = c[e]; e++) c[e] = d && new I(a, d); CKEDITOR.tools.extend(this, b) };
        L.prototype = { getContents: function (a) { return z(this.contents, a) }, getButton: function (a) { return z(this.buttons, a) }, addContents: function (a, b) { return A(this.contents, a, b) }, addButton: function (a, b) { return A(this.buttons, a, b) }, removeContents: function (a) { B(this.contents, a) }, removeButton: function (a) { B(this.buttons, a) } }; I.prototype = { get: function (a) { return z(this.elements, a, "children") }, add: function (a, b) { return A(this.elements, a, b, "children") }, remove: function (a) { B(this.elements, a, "children") } }; var G, w = {}, r, t =
{}, M = function (a) { var b = a.data.$.ctrlKey || a.data.$.metaKey, c = a.data.$.altKey, e = a.data.$.shiftKey, d = String.fromCharCode(a.data.$.keyCode); if ((b = t[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (e ? "SHIFT+" : "") + d]) && b.length) b = b[b.length - 1], b.keydown && b.keydown.call(b.uiElement, b.dialog, b.key), a.data.preventDefault() }, N = function (a) {
    var b = a.data.$.ctrlKey || a.data.$.metaKey, c = a.data.$.altKey, e = a.data.$.shiftKey, d = String.fromCharCode(a.data.$.keyCode); if ((b = t[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (e ? "SHIFT+" : "") + d]) && b.length) b = b[b.length -
1], b.keyup && (b.keyup.call(b.uiElement, b.dialog, b.key), a.data.preventDefault())
}, O = function (a, b, c, e, d) { (t[c] || (t[c] = [])).push({ uiElement: a, dialog: b, key: c, keyup: d || a.accessKeyUp, keydown: e || a.accessKeyDown }) }, X = function (a) { for (var b in t) { for (var c = t[b], e = c.length - 1; 0 <= e; e--) (c[e].dialog == a || c[e].uiElement == a) && c.splice(e, 1); 0 === c.length && delete t[b] } }, Z = function (a, b) { a._.accessKeyMap[b] && a.selectPage(a._.accessKeyMap[b]) }, Y = function () { }; (function () {
    CKEDITOR.ui.dialog = { uiElement: function (a, b, c, e, d, g,
f) {
        if (!(4 > arguments.length)) {
            var k = (e.call ? e(b) : e) || "div", m = ["<", k, " "], j = (d && d.call ? d(b) : d) || {}, h = (g && g.call ? g(b) : g) || {}, o = (f && f.call ? f.call(this, a, b) : f) || "", i = this.domId = h.id || CKEDITOR.tools.getNextId() + "_uiElement"; this.id = b.id; h.id = i; var n = {}; b.type && (n["cke_dialog_ui_" + b.type] = 1); b.className && (n[b.className] = 1); b.disabled && (n.cke_disabled = 1); for (var l = h["class"] && h["class"].split ? h["class"].split(" ") : [], i = 0; i < l.length; i++) l[i] && (n[l[i]] = 1); l = []; for (i in n) l.push(i); h["class"] = l.join(" "); b.title &&
(h.title = b.title); n = (b.style || "").split(";"); b.align && (l = b.align, j["margin-left"] = "left" == l ? 0 : "auto", j["margin-right"] = "right" == l ? 0 : "auto"); for (i in j) n.push(i + ":" + j[i]); b.hidden && n.push("display:none"); for (i = n.length - 1; 0 <= i; i--) "" === n[i] && n.splice(i, 1); 0 < n.length && (h.style = (h.style ? h.style + "; " : "") + n.join("; ")); for (i in h) m.push(i + '="' + CKEDITOR.tools.htmlEncode(h[i]) + '" '); m.push(">", o, "</", k, ">"); c.push(m.join("")); (this._ || (this._ = {})).dialog = a; "boolean" == typeof b.isChanged && (this.isChanged = function () { return b.isChanged });
            "function" == typeof b.isChanged && (this.isChanged = b.isChanged); "function" == typeof b.setValue && (this.setValue = CKEDITOR.tools.override(this.setValue, function (a) { return function (c) { a.call(this, b.setValue.call(this, c)) } })); "function" == typeof b.getValue && (this.getValue = CKEDITOR.tools.override(this.getValue, function (a) { return function () { return b.getValue.call(this, a.call(this)) } })); CKEDITOR.event.implementOn(this); this.registerEvents(b); this.accessKeyUp && (this.accessKeyDown && b.accessKey) && O(this, a, "CTRL+" +
b.accessKey); var p = this; a.on("load", function () { var b = p.getInputElement(); if (b) { var c = p.type in { checkbox: 1, ratio: 1} && CKEDITOR.env.ie && CKEDITOR.env.version < 8 ? "cke_dialog_ui_focused" : ""; b.on("focus", function () { a._.tabBarMode = false; a._.hasFocus = true; p.fire("focus"); c && this.addClass(c) }); b.on("blur", function () { p.fire("blur"); c && this.removeClass(c) }) } }); this.keyboardFocusable && (this.tabIndex = b.tabIndex || 0, this.focusIndex = a._.focusList.push(this) - 1, this.on("focus", function () { a._.currentFocusIndex = p.focusIndex }));
            CKEDITOR.tools.extend(this, b)
        }
    }, hbox: function (a, b, c, e, d) {
        if (!(4 > arguments.length)) {
            this._ || (this._ = {}); var g = this._.children = b, f = d && d.widths || null, k = d && d.height || null, m, j = { role: "presentation" }; d && d.align && (j.align = d.align); CKEDITOR.ui.dialog.uiElement.call(this, a, d || { type: "hbox" }, e, "table", {}, j, function () {
                var a = ['<tbody><tr class="cke_dialog_ui_hbox">']; for (m = 0; m < c.length; m++) {
                    var b = "cke_dialog_ui_hbox_child", e = []; 0 === m && (b = "cke_dialog_ui_hbox_first"); m == c.length - 1 && (b = "cke_dialog_ui_hbox_last");
                    a.push('<td class="', b, '" role="presentation" '); f ? f[m] && e.push("width:" + s(f[m])) : e.push("width:" + Math.floor(100 / c.length) + "%"); k && e.push("height:" + s(k)); d && void 0 != d.padding && e.push("padding:" + s(d.padding)); CKEDITOR.env.ie && (CKEDITOR.env.quirks && g[m].align) && e.push("text-align:" + g[m].align); 0 < e.length && a.push('style="' + e.join("; ") + '" '); a.push(">", c[m], "</td>")
                } a.push("</tr></tbody>"); return a.join("")
            })
        }
    }, vbox: function (a, b, c, e, d) {
        if (!(3 > arguments.length)) {
            this._ || (this._ = {}); var g = this._.children =
b, f = d && d.width || null, k = d && d.heights || null; CKEDITOR.ui.dialog.uiElement.call(this, a, d || { type: "vbox" }, e, "div", null, { role: "presentation" }, function () {
    var b = ['<table role="presentation" cellspacing="0" border="0" ']; b.push('style="'); d && d.expand && b.push("height:100%;"); b.push("width:" + s(f || "100%"), ";"); b.push('"'); b.push('align="', CKEDITOR.tools.htmlEncode(d && d.align || ("ltr" == a.getParentEditor().lang.dir ? "left" : "right")), '" '); b.push("><tbody>"); for (var e = 0; e < c.length; e++) {
        var h = []; b.push('<tr><td role="presentation" ');
        f && h.push("width:" + s(f || "100%")); k ? h.push("height:" + s(k[e])) : d && d.expand && h.push("height:" + Math.floor(100 / c.length) + "%"); d && void 0 != d.padding && h.push("padding:" + s(d.padding)); CKEDITOR.env.ie && (CKEDITOR.env.quirks && g[e].align) && h.push("text-align:" + g[e].align); 0 < h.length && b.push('style="', h.join("; "), '" '); b.push(' class="cke_dialog_ui_vbox_child">', c[e], "</td></tr>")
    } b.push("</tbody></table>"); return b.join("")
})
        }
    }
    }
})(); CKEDITOR.ui.dialog.uiElement.prototype = { getElement: function () { return CKEDITOR.document.getById(this.domId) },
    getInputElement: function () { return this.getElement() }, getDialog: function () { return this._.dialog }, setValue: function (a, b) { this.getInputElement().setValue(a); !b && this.fire("change", { value: a }); return this }, getValue: function () { return this.getInputElement().getValue() }, isChanged: function () { return !1 }, selectParentTab: function () {
        for (var a = this.getInputElement(); (a = a.getParent()) && -1 == a.$.className.search("cke_dialog_page_contents"); ); if (!a) return this; a = a.getAttribute("name"); this._.dialog._.currentTabId !=
a && this._.dialog.selectPage(a); return this
    }, focus: function () { this.selectParentTab().getInputElement().focus(); return this }, registerEvents: function (a) { var b = /^on([A-Z]\w+)/, c, e = function (a, b, c, d) { b.on("load", function () { a.getInputElement().on(c, d, a) }) }, d; for (d in a) if (c = d.match(b)) this.eventProcessors[d] ? this.eventProcessors[d].call(this, this._.dialog, a[d]) : e(this, this._.dialog, c[1].toLowerCase(), a[d]); return this }, eventProcessors: { onLoad: function (a, b) { a.on("load", b, this) }, onShow: function (a, b) {
        a.on("show",
b, this)
    }, onHide: function (a, b) { a.on("hide", b, this) }
    }, accessKeyDown: function () { this.focus() }, accessKeyUp: function () { }, disable: function () { var a = this.getElement(); this.getInputElement().setAttribute("disabled", "true"); a.addClass("cke_disabled") }, enable: function () { var a = this.getElement(); this.getInputElement().removeAttribute("disabled"); a.removeClass("cke_disabled") }, isEnabled: function () { return !this.getElement().hasClass("cke_disabled") }, isVisible: function () { return this.getInputElement().isVisible() },
    isFocusable: function () { return !this.isEnabled() || !this.isVisible() ? !1 : !0 }
}; CKEDITOR.ui.dialog.hbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, { getChild: function (a) { if (1 > arguments.length) return this._.children.concat(); a.splice || (a = [a]); return 2 > a.length ? this._.children[a[0]] : this._.children[a[0]] && this._.children[a[0]].getChild ? this._.children[a[0]].getChild(a.slice(1, a.length)) : null } }, !0); CKEDITOR.ui.dialog.vbox.prototype = new CKEDITOR.ui.dialog.hbox; (function () {
    var a = { build: function (a,
c, e) { for (var d = c.children, g, f = [], k = [], m = 0; m < d.length && (g = d[m]); m++) { var j = []; f.push(j); k.push(CKEDITOR.dialog._.uiElementBuilders[g.type].build(a, g, j)) } return new CKEDITOR.ui.dialog[c.type](a, k, f, e, c) }
    }; CKEDITOR.dialog.addUIElement("hbox", a); CKEDITOR.dialog.addUIElement("vbox", a)
})(); CKEDITOR.dialogCommand = function (a, b) { this.dialogName = a; CKEDITOR.tools.extend(this, b, !0) }; CKEDITOR.dialogCommand.prototype = { exec: function (a) {
    CKEDITOR.env.opera ? CKEDITOR.tools.setTimeout(function () { a.openDialog(this.dialogName) },
0, this) : a.openDialog(this.dialogName)
}, canUndo: !1, editorFocus: CKEDITOR.env.ie || CKEDITOR.env.webkit
}; (function () {
    var a = /^([a]|[^a])+$/, b = /^\d*$/, c = /^\d*(?:\.\d+)?$/, e = /^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/, d = /^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i, g = /^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/; CKEDITOR.VALIDATE_OR = 1; CKEDITOR.VALIDATE_AND = 2; CKEDITOR.dialog.validate = { functions: function () {
        var a = arguments; return function () {
            var b = this && this.getValue ? this.getValue() : a[0], c = void 0, d = CKEDITOR.VALIDATE_AND,
e = [], g; for (g = 0; g < a.length; g++) if ("function" == typeof a[g]) e.push(a[g]); else break; g < a.length && "string" == typeof a[g] && (c = a[g], g++); g < a.length && "number" == typeof a[g] && (d = a[g]); var i = d == CKEDITOR.VALIDATE_AND ? !0 : !1; for (g = 0; g < e.length; g++) i = d == CKEDITOR.VALIDATE_AND ? i && e[g](b) : i || e[g](b); return !i ? c : !0
        }
    }, regex: function (a, b) { return function (c) { c = this && this.getValue ? this.getValue() : c; return !a.test(c) ? b : !0 } }, notEmpty: function (b) { return this.regex(a, b) }, integer: function (a) { return this.regex(b, a) }, number: function (a) {
        return this.regex(c,
a)
    }, cssLength: function (a) { return this.functions(function (a) { return d.test(CKEDITOR.tools.trim(a)) }, a) }, htmlLength: function (a) { return this.functions(function (a) { return e.test(CKEDITOR.tools.trim(a)) }, a) }, inlineStyle: function (a) { return this.functions(function (a) { return g.test(CKEDITOR.tools.trim(a)) }, a) }, equals: function (a, b) { return this.functions(function (b) { return b == a }, b) }, notEqual: function (a, b) { return this.functions(function (b) { return b != a }, b) }
    }; CKEDITOR.on("instanceDestroyed", function (a) {
        if (CKEDITOR.tools.isEmpty(CKEDITOR.instances)) {
            for (var b; b =
CKEDITOR.dialog._.currentTop; ) b.hide(); for (var c in w) w[c].remove(); w = {}
        } var a = a.editor._.storedDialogs, d; for (d in a) a[d].destroy()
    })
})(); CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { openDialog: function (a, b) {
    var c = null, e = CKEDITOR.dialog._.dialogDefinitions[a]; null === CKEDITOR.dialog._.currentTop && J(this); if ("function" == typeof e) c = this._.storedDialogs || (this._.storedDialogs = {}), c = c[a] || (c[a] = new CKEDITOR.dialog(this, a)), b && b.call(c, c), c.show(); else {
        if ("failed" == e) throw K(this), Error('[CKEDITOR.dialog.openDialog] Dialog "' +
a + '" failed when loading definition.'); "string" == typeof e && CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e), function () { "function" != typeof CKEDITOR.dialog._.dialogDefinitions[a] && (CKEDITOR.dialog._.dialogDefinitions[a] = "failed"); this.openDialog(a, b) }, this, 0, 1)
    } CKEDITOR.skin.loadPart("dialog"); return c
}
})
    })();
    CKEDITOR.plugins.add("dialog", { requires: "dialogui", init: function (p) { p.on("contentDom", function () { var u = p.editable(); u.attachListener(u, "dblclick", function (q) { if (p.readOnly) return !1; q = { element: q.data.getTarget() }; p.fire("doubleclick", q); q.dialog && p.openDialog(q.dialog); return 1 }) }) } }); CKEDITOR.plugins.add("about", { requires: "dialog", init: function (a) { var b = a.addCommand("about", new CKEDITOR.dialogCommand("about")); b.modes = { wysiwyg: 1, source: 1 }; b.canUndo = !1; b.readOnly = 1; a.ui.addButton && a.ui.addButton("About", { label: a.lang.about.title, command: "about", toolbar: "about" }); CKEDITOR.dialog.add("about", this.path + "dialogs/about.js") } }); (function () {
        CKEDITOR.plugins.add("a11yhelp", { requires: "dialog", availableLangs: { en: 1, ar: 1, bg: 1, ca: 1, et: 1, cs: 1, cy: 1, da: 1, de: 1, el: 1, eo: 1, fa: 1, fi: 1, fr: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, it: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, nb: 1, nl: 1, no: 1, pl: 1, pt: 1, "pt-br": 1, ro: 1, ru: 1, sk: 1, sl: 1, tr: 1, ug: 1, uk: 1, vi: 1, "zh-cn": 1 }, init: function (b) {
            var c = this; b.addCommand("a11yHelp", { exec: function () {
                var a = b.langCode, a = c.availableLangs[a] ? a : c.availableLangs[a.replace(/-.*/, "")] ? a.replace(/-.*/, "") : "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(c.path +
"dialogs/lang/" + a + ".js"), function () { b.lang.a11yhelp = c.langEntries[a]; b.openDialog("a11yHelp") })
            }, modes: { wysiwyg: 1, source: 1 }, readOnly: 1, canUndo: !1
            }); b.setKeystroke(CKEDITOR.ALT + 48, "a11yHelp"); CKEDITOR.dialog.add("a11yHelp", this.path + "dialogs/a11yhelp.js")
        }
        })
    })(); CKEDITOR.plugins.add("basicstyles", { init: function (c) {
        var f = 0, a = function (a, d, b, e) { e && (e = new CKEDITOR.style(e), c.attachStyleStateChange(e, function (a) { !c.readOnly && c.getCommand(b).setState(a) }), c.addCommand(b, new CKEDITOR.styleCommand(e)), c.ui.addButton && c.ui.addButton(a, { label: d, command: b, toolbar: "basicstyles," + (f += 10) })) }, d = c.config, b = c.lang.basicstyles; a("Bold", b.bold, "bold", d.coreStyles_bold); a("Italic", b.italic, "italic", d.coreStyles_italic); a("Underline", b.underline, "underline", d.coreStyles_underline);
        a("Strike", b.strike, "strike", d.coreStyles_strike); a("Subscript", b.subscript, "subscript", d.coreStyles_subscript); a("Superscript", b.superscript, "superscript", d.coreStyles_superscript); c.setKeystroke([[CKEDITOR.CTRL + 66, "bold"], [CKEDITOR.CTRL + 73, "italic"], [CKEDITOR.CTRL + 85, "underline"]])
    }
    }); CKEDITOR.config.coreStyles_bold = { element: "strong", overrides: "b" }; CKEDITOR.config.coreStyles_italic = { element: "em", overrides: "i" }; CKEDITOR.config.coreStyles_underline = { element: "u" };
    CKEDITOR.config.coreStyles_strike = { element: "strike" }; CKEDITOR.config.coreStyles_subscript = { element: "sub" }; CKEDITOR.config.coreStyles_superscript = { element: "sup" }; (function () {
        var k = { exec: function (g) {
            var a = g.getCommand("blockquote").state, i = g.getSelection(), c = i && i.getRanges(!0)[0]; if (c) {
                var h = i.createBookmarks(); if (CKEDITOR.env.ie) { var e = h[0].startNode, b = h[0].endNode, d; if (e && "blockquote" == e.getParent().getName()) for (d = e; d = d.getNext(); ) if (d.type == CKEDITOR.NODE_ELEMENT && d.isBlockBoundary()) { e.move(d, !0); break } if (b && "blockquote" == b.getParent().getName()) for (d = b; d = d.getPrevious(); ) if (d.type == CKEDITOR.NODE_ELEMENT && d.isBlockBoundary()) { b.move(d); break } } var f = c.createIterator();
                f.enlargeBr = g.config.enterMode != CKEDITOR.ENTER_BR; if (a == CKEDITOR.TRISTATE_OFF) {
                    for (e = []; a = f.getNextParagraph(); ) e.push(a); 1 > e.length && (a = g.document.createElement(g.config.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), b = h.shift(), c.insertNode(a), a.append(new CKEDITOR.dom.text("﻿", g.document)), c.moveToBookmark(b), c.selectNodeContents(a), c.collapse(!0), b = c.createBookmark(), e.push(a), h.unshift(b)); d = e[0].getParent(); c = []; for (b = 0; b < e.length; b++) a = e[b], d = d.getCommonAncestor(a.getParent()); for (a = { table: 1, tbody: 1,
                        tr: 1, ol: 1, ul: 1
                    }; a[d.getName()]; ) d = d.getParent(); for (b = null; 0 < e.length; ) { for (a = e.shift(); !a.getParent().equals(d); ) a = a.getParent(); a.equals(b) || c.push(a); b = a } for (; 0 < c.length; ) if (a = c.shift(), "blockquote" == a.getName()) { for (b = new CKEDITOR.dom.documentFragment(g.document); a.getFirst(); ) b.append(a.getFirst().remove()), e.push(b.getLast()); b.replace(a) } else e.push(a); c = g.document.createElement("blockquote"); for (c.insertBefore(e[0]); 0 < e.length; ) a = e.shift(), c.append(a)
                } else if (a == CKEDITOR.TRISTATE_ON) {
                    b = [];
                    for (d = {}; a = f.getNextParagraph(); ) { for (e = c = null; a.getParent(); ) { if ("blockquote" == a.getParent().getName()) { c = a.getParent(); e = a; break } a = a.getParent() } c && (e && !e.getCustomData("blockquote_moveout")) && (b.push(e), CKEDITOR.dom.element.setMarker(d, e, "blockquote_moveout", !0)) } CKEDITOR.dom.element.clearAllMarkers(d); a = []; e = []; for (d = {}; 0 < b.length; ) f = b.shift(), c = f.getParent(), f.getPrevious() ? f.getNext() ? (f.breakParent(f.getParent()), e.push(f.getNext())) : f.remove().insertAfter(c) : f.remove().insertBefore(c), c.getCustomData("blockquote_processed") ||
(e.push(c), CKEDITOR.dom.element.setMarker(d, c, "blockquote_processed", !0)), a.push(f); CKEDITOR.dom.element.clearAllMarkers(d); for (b = e.length - 1; 0 <= b; b--) { c = e[b]; a: { d = c; for (var f = 0, k = d.getChildCount(), j = void 0; f < k && (j = d.getChild(f)); f++) if (j.type == CKEDITOR.NODE_ELEMENT && j.isBlockBoundary()) { d = !1; break a } d = !0 } d && c.remove() } if (g.config.enterMode == CKEDITOR.ENTER_BR) for (c = !0; a.length; ) if (f = a.shift(), "div" == f.getName()) {
                        b = new CKEDITOR.dom.documentFragment(g.document); c && (f.getPrevious() && !(f.getPrevious().type ==
CKEDITOR.NODE_ELEMENT && f.getPrevious().isBlockBoundary())) && b.append(g.document.createElement("br")); for (c = f.getNext() && !(f.getNext().type == CKEDITOR.NODE_ELEMENT && f.getNext().isBlockBoundary()); f.getFirst(); ) f.getFirst().remove().appendTo(b); c && b.append(g.document.createElement("br")); b.replace(f); c = !1
                    }
                } i.selectBookmarks(h); g.focus()
            }
        }, refresh: function (g, a) { this.setState(g.elementPath(a.block || a.blockLimit).contains("blockquote", 1) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) }, context: "blockquote"
        };
        CKEDITOR.plugins.add("blockquote", { init: function (g) { g.blockless || (g.addCommand("blockquote", k), g.ui.addButton && g.ui.addButton("Blockquote", { label: g.lang.blockquote.toolbar, command: "blockquote", toolbar: "blocks,10" })) } })
    })(); (function () {
        function v(b) {
            function a() { var e = b.editable(); e.on(q, function (b) { (!CKEDITOR.env.ie || !m) && u(b) }); CKEDITOR.env.ie && e.on("paste", function (e) { r || (f(), e.data.preventDefault(), u(e), l("paste") || b.openDialog("paste")) }); CKEDITOR.env.ie && (e.on("contextmenu", h, null, null, 0), e.on("beforepaste", function (b) { b.data && !b.data.$.ctrlKey && h() }, null, null, 0)); e.on("beforecut", function () { !m && j(b) }); e.on("mouseup", function () { setTimeout(function () { s() }, 0) }); e.on("keyup", s) } function d(e) {
                return { type: e, canUndo: "cut" ==
e, startDisabled: !0, exec: function () { "cut" == this.type && j(); var e; var a = this.type; if (CKEDITOR.env.ie) e = l(a); else try { e = b.document.$.execCommand(a, !1, null) } catch (c) { e = !1 } e || alert(b.lang.clipboard[this.type + "Error"]); return e }
                }
            } function c() { return { canUndo: !1, async: !0, exec: function (b, a) { var c = function (a, c) { a && g(a.type, a.dataValue, !!c); b.fire("afterCommandExec", { name: "paste", command: d, returnValue: !!a }) }, d = this; "string" == typeof a ? c({ type: "auto", dataValue: a }, 1) : b.getClipboardData(c) } } } function f() {
                r = 1; setTimeout(function () {
                    r =
0
                }, 100)
            } function h() { m = 1; setTimeout(function () { m = 0 }, 10) } function l(e) { var a = b.document, c = a.getBody(), d = !1, j = function () { d = !0 }; c.on(e, j); (7 < CKEDITOR.env.version ? a.$ : a.$.selection.createRange()).execCommand(e); c.removeListener(e, j); return d } function g(e, a, c) { e = { type: e }; if (c && !b.fire("beforePaste", e) || !a) return !1; e.dataValue = a; return b.fire("paste", e) } function j() {
                if (CKEDITOR.env.ie && !CKEDITOR.env.quirks) {
                    var e = b.getSelection(), a, c, d; if (e.getType() == CKEDITOR.SELECTION_ELEMENT && (a = e.getSelectedElement())) c =
e.getRanges()[0], d = b.document.createText(""), d.insertBefore(a), c.setStartBefore(d), c.setEndAfter(a), e.selectRanges([c]), setTimeout(function () { a.getParent() && (d.remove(), e.selectElement(a)) }, 0)
                }
            } function k(a, c) {
                var d = b.document, j = b.editable(), k = function (b) { b.cancel() }, f = CKEDITOR.env.gecko && 10902 >= CKEDITOR.env.version; if (!d.getById("cke_pastebin")) {
                    var h = b.getSelection(), o = h.createBookmarks(), i = new CKEDITOR.dom.element(j.is("body") && !CKEDITOR.env.ie && !CKEDITOR.env.opera ? "body" : "div", d); i.setAttribute("id",
"cke_pastebin"); CKEDITOR.env.opera && i.appendBogus(); var g = 0, d = d.getWindow(); f ? (i.insertAfter(o[0].startNode), i.setStyle("display", "inline")) : (CKEDITOR.env.webkit ? (j.append(i), g = (j.is("body") ? j : CKEDITOR.dom.element.get(i.$.offsetParent)).getDocumentPosition().y) : j.getAscendant(CKEDITOR.env.ie || CKEDITOR.env.opera ? "body" : "html", 1).append(i), i.setStyles({ position: "absolute", top: d.getScrollPosition().y - g + 10 + "px", width: "1px", height: Math.max(1, d.getViewPaneSize().height - 20) + "px", overflow: "hidden", margin: 0,
    padding: 0
})); (f = i.getParent().isReadOnly()) ? (i.setOpacity(0), i.setAttribute("contenteditable", !0)) : i.setStyle("ltr" == b.config.contentsLangDirection ? "left" : "right", "-1000px"); b.on("selectionChange", k, null, null, 0); f && i.focus(); f = new CKEDITOR.dom.range(i); f.selectNodeContents(i); var l = f.select(); if (CKEDITOR.env.ie) var m = j.once("blur", function () { b.lockSelection(l) }); setTimeout(function () {
    m && m.removeListener(); CKEDITOR.env.ie && j.focus(); h.selectBookmarks(o); i.remove(); var a; if (CKEDITOR.env.webkit && (a =
i.getFirst()) && a.is && a.hasClass("Apple-style-span")) i = a; b.removeListener("selectionChange", k); c(i.getHtml())
}, 0)
                }
            } function o() { if (CKEDITOR.env.ie) { b.focus(); f(); var a = b.focusManager; a.lock(); if (b.editable().fire(q) && !l("paste")) return a.unlock(), !1; a.unlock() } else try { if (b.editable().fire(q) && !b.document.$.execCommand("Paste", !1, null)) throw 0; } catch (c) { return !1 } return !0 } function p(a) {
                if ("wysiwyg" == b.mode) switch (a.data.keyCode) {
                    case CKEDITOR.CTRL + 86: case CKEDITOR.SHIFT + 45: a = b.editable(); f(); !CKEDITOR.env.ie &&
a.fire("beforepaste"); (CKEDITOR.env.opera || CKEDITOR.env.gecko && 10900 > CKEDITOR.env.version) && a.fire("paste"); break; case CKEDITOR.CTRL + 88: case CKEDITOR.SHIFT + 46: b.fire("saveSnapshot"), setTimeout(function () { b.fire("saveSnapshot") }, 0)
                }
            } function u(a) { var c = { type: "auto" }, d = b.fire("beforePaste", c); k(a, function (b) { b = b.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig, ""); d && g(c.type, b, 0, 1) }) } function s() {
                if ("wysiwyg" == b.mode) {
                    var a = n("Paste"); b.getCommand("cut").setState(n("Cut")); b.getCommand("copy").setState(n("Copy"));
                    b.getCommand("paste").setState(a); b.fire("pasteState", a)
                }
            } function n(a) { var c; if (t && a in { Paste: 1, Cut: 1 }) return CKEDITOR.TRISTATE_DISABLED; if ("Paste" == a) { CKEDITOR.env.ie && (m = 1); try { c = b.document.$.queryCommandEnabled(a) || CKEDITOR.env.webkit } catch (d) { } m = 0 } else a = b.getSelection(), c = a.getRanges(), c = a.type != CKEDITOR.SELECTION_NONE && !(1 == c.length && c[0].collapsed); return c ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED } var m = 0, r = 0, t = 0, q = CKEDITOR.env.ie ? "beforepaste" : "paste"; (function () {
                b.on("key", p); b.on("contentDom",
a); b.on("selectionChange", function (b) { t = b.data.selection.getRanges()[0].checkReadOnly(); s() }); b.contextMenu && b.contextMenu.addListener(function (b, a) { t = a.getRanges()[0].checkReadOnly(); return { cut: n("Cut"), copy: n("Copy"), paste: n("Paste")} })
            })(); (function () {
                function a(c, d, j, e, f) { var k = b.lang.clipboard[d]; b.addCommand(d, j); b.ui.addButton && b.ui.addButton(c, { label: k, command: d, toolbar: "clipboard," + e }); b.addMenuItems && b.addMenuItem(d, { label: k, command: d, group: "clipboard", order: f }) } a("Cut", "cut", d("cut"), 10,
1); a("Copy", "copy", d("copy"), 20, 4); a("Paste", "paste", c(), 30, 8)
            })(); b.getClipboardData = function (a, c) {
                function d(a) { a.removeListener(); a.cancel(); c(a.data) } function j(a) { a.removeListener(); a.cancel(); g = !0; c({ type: h, dataValue: a.data }) } function f() { this.customTitle = a && a.title } var k = !1, h = "auto", g = !1; c || (c = a, a = null); b.on("paste", d, null, null, 0); b.on("beforePaste", function (a) { a.removeListener(); k = true; h = a.data.type }, null, null, 1E3); !1 === o() && (b.removeListener("paste", d), k && b.fire("pasteDialog", f) ? (b.on("pasteDialogCommit",
j), b.on("dialogHide", function (a) { a.removeListener(); a.data.removeListener("pasteDialogCommit", j); setTimeout(function () { g || c(null) }, 10) })) : c(null))
            }
        } function w(b) {
            if (CKEDITOR.env.webkit) { if (!b.match(/^[^<]*$/g) && !b.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi)) return "html" } else if (CKEDITOR.env.ie) { if (!b.match(/^([^<]|<br( ?\/)?>)*$/gi) && !b.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi)) return "html" } else if (CKEDITOR.env.gecko || CKEDITOR.env.opera) { if (!b.match(/^([^<]|<br( ?\/)?>)*$/gi)) return "html" } else return "html";
            return "htmlifiedtext"
        } function x(b, a) {
            function d(a) { return CKEDITOR.tools.repeat("</p><p>", ~ ~(a / 2)) + (1 == a % 2 ? "<br>" : "") } a = a.replace(/\s+/g, " ").replace(/> +</g, "><").replace(/<br ?\/>/gi, "<br>"); a = a.replace(/<\/?[A-Z]+>/g, function (a) { return a.toLowerCase() }); if (a.match(/^[^<]$/)) return a; CKEDITOR.env.webkit && -1 < a.indexOf("<div>") && (a = a.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g, "<br>").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g, "<div></div>"), a.match(/<div>(<br>|)<\/div>/) && (a = "<p>" +
a.replace(/(<div>(<br>|)<\/div>)+/g, function (a) { return d(a.split("</div><div>").length + 1) }) + "</p>"), a = a.replace(/<\/div><div>/g, "<br>"), a = a.replace(/<\/?div>/g, "")); if ((CKEDITOR.env.gecko || CKEDITOR.env.opera) && b.enterMode != CKEDITOR.ENTER_BR) CKEDITOR.env.gecko && (a = a.replace(/^<br><br>$/, "<br>")), -1 < a.indexOf("<br><br>") && (a = "<p>" + a.replace(/(<br>){2,}/g, function (a) { return d(a.length / 4) }) + "</p>"); return p(b, a)
        } function y() {
            var b = new CKEDITOR.htmlParser.filter, a = { blockquote: 1, dl: 1, fieldset: 1, h1: 1, h2: 1,
                h3: 1, h4: 1, h5: 1, h6: 1, ol: 1, p: 1, table: 1, ul: 1
            }, d = CKEDITOR.tools.extend({ br: 0 }, CKEDITOR.dtd.$inline), c = { p: 1, br: 1, "cke:br": 1 }, f = CKEDITOR.dtd, h = CKEDITOR.tools.extend({ area: 1, basefont: 1, embed: 1, iframe: 1, map: 1, object: 1, param: 1 }, CKEDITOR.dtd.$nonBodyContent, CKEDITOR.dtd.$cdata), l = function (a) { delete a.name; a.add(new CKEDITOR.htmlParser.text(" ")) }, g = function (a) { for (var b = a, c; (b = b.next) && b.name && b.name.match(/^h\d$/); ) { c = new CKEDITOR.htmlParser.element("cke:br"); c.isEmpty = !0; for (a.add(c); c = b.children.shift(); ) a.add(c) } };
            b.addRules({ elements: { h1: g, h2: g, h3: g, h4: g, h5: g, h6: g, img: function (a) { var a = CKEDITOR.tools.trim(a.attributes.alt || ""), b = " "; a && !a.match(/(^http|\.(jpe?g|gif|png))/i) && (b = " [" + a + "] "); return new CKEDITOR.htmlParser.text(b) }, td: l, th: l, $: function (b) {
                var k = b.name, g; if (h[k]) return !1; delete b.attributes; if ("br" == k) return b; if (a[k]) b.name = "p"; else if (d[k]) delete b.name; else if (f[k]) {
                    g = new CKEDITOR.htmlParser.element("cke:br"); g.isEmpty = !0; if (CKEDITOR.dtd.$empty[k]) return g; b.add(g, 0); g = g.clone(); g.isEmpty =
!0; b.add(g); delete b.name
                } c[b.name] || delete b.name; return b
            }
            }
            }); return b
        } function z(b, a, d) {
            var a = new CKEDITOR.htmlParser.fragment.fromHtml(a), c = new CKEDITOR.htmlParser.basicWriter; a.writeHtml(c, d); var a = c.getHtml(), a = a.replace(/\s*(<\/?[a-z:]+ ?\/?>)\s*/g, "$1").replace(/(<cke:br \/>){2,}/g, "<cke:br />").replace(/(<cke:br \/>)(<\/?p>|<br \/>)/g, "$2").replace(/(<\/?p>|<br \/>)(<cke:br \/>)/g, "$1").replace(/<(cke:)?br( \/)?>/g, "<br>").replace(/<p><\/p>/g, ""), f = 0, a = a.replace(/<\/?p>/g, function (a) {
                if ("<p>" ==
a) { if (1 < ++f) return "</p><p>" } else if (0 < --f) return "</p><p>"; return a
            }).replace(/<p><\/p>/g, ""); return p(b, a)
        } function p(b, a) { b.enterMode == CKEDITOR.ENTER_BR ? a = a.replace(/(<\/p><p>)+/g, function (a) { return CKEDITOR.tools.repeat("<br>", 2 * (a.length / 7)) }).replace(/<\/?p>/g, "") : b.enterMode == CKEDITOR.ENTER_DIV && (a = a.replace(/<(\/)?p>/g, "<$1div>")); return a } CKEDITOR.plugins.add("clipboard", { requires: "dialog", init: function (b) {
            var a; v(b); CKEDITOR.dialog.add("paste", CKEDITOR.getUrl(this.path + "dialogs/paste.js"));
            b.on("paste", function (a) {
                var b = a.data.dataValue, f = CKEDITOR.dtd.$block; -1 < b.indexOf("Apple-") && (b = b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi, " "), "html" != a.data.type && (b = b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi, function (a, b) { return b.replace(/\t/g, "&nbsp;&nbsp; &nbsp;") })), -1 < b.indexOf('<br class="Apple-interchange-newline">') && (a.data.startsWithEOL = 1, a.data.preSniffing = "html", b = b.replace(/<br class="Apple-interchange-newline">/, "")), b = b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,
"$1")); if (b.match(/^<[^<]+cke_(editable|contents)/i)) { var h, l, g = new CKEDITOR.dom.element("div"); for (g.setHtml(b); 1 == g.getChildCount() && (h = g.getFirst()) && (h.hasClass("cke_editable") || h.hasClass("cke_contents")); ) g = l = h; l && (b = l.getHtml().replace(/<br>$/i, "")) } CKEDITOR.env.ie ? b = b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g, function (b, c) { if (c.toLowerCase() in f) { a.data.preSniffing = "html"; return "<" + c } return b }) : CKEDITOR.env.webkit ? b = b.replace(/<\/(\w+)><div><br><\/div>$/, function (b, c) {
    if (c in f) {
        a.data.endsWithEOL =
1; return "</" + c + ">"
    } return b
}) : CKEDITOR.env.gecko && (b = b.replace(/(\s)<br>$/, "$1")); a.data.dataValue = b
            }, null, null, 3); b.on("paste", function (d) {
                var d = d.data, c = d.type, f = d.dataValue, h, l = b.config.clipboard_defaultContentType || "html"; h = "html" == c || "html" == d.preSniffing ? "html" : w(f); "htmlifiedtext" == h ? f = x(b.config, f) : "text" == c && "html" == h && (f = z(b.config, f, a || (a = y(b)))); d.startsWithEOL && (f = '<br data-cke-eol="1">' + f); d.endsWithEOL && (f += '<br data-cke-eol="1">'); "auto" == c && (c = "html" == h || "html" == l ? "html" : "text");
                d.type = c; d.dataValue = f; delete d.preSniffing; delete d.startsWithEOL; delete d.endsWithEOL
            }, null, null, 6); b.on("paste", function (a) { a = a.data; b.insertHtml(a.dataValue, a.type); setTimeout(function () { b.fire("afterPaste") }, 0) }, null, null, 1E3); b.on("pasteDialog", function (a) { setTimeout(function () { b.openDialog("paste", a.data) }, 0) })
        }
        })
    })(); (function () {
        CKEDITOR.plugins.add("panel", { beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_PANEL, CKEDITOR.ui.panel.handler) } }); CKEDITOR.UI_PANEL = "panel"; CKEDITOR.ui.panel = function (a, b) { b && CKEDITOR.tools.extend(this, b); CKEDITOR.tools.extend(this, { className: "", css: [] }); this.id = CKEDITOR.tools.getNextId(); this.document = a; this.isFramed = this.forceIFrame || this.css.length; this._ = { blocks: {}} }; CKEDITOR.ui.panel.handler = { create: function (a) { return new CKEDITOR.ui.panel(a) } }; var e = CKEDITOR.addTemplate("panel",
'<div lang="{langCode}" id="{id}" dir={dir} class="cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style="z-index:{z-index}" role="presentation">{frame}</div>'), f = CKEDITOR.addTemplate("panel-frame", '<iframe id="{id}" class="cke_panel_frame" role="application" frameborder="0" src="{src}"></iframe>'), g = CKEDITOR.addTemplate("panel-frame-inner", '<!DOCTYPE html><html class="cke_panel_container {env}" dir="{dir}" lang="{langCode}"><head>{css}</head><body class="cke_{dir}" style="margin:0;padding:0" onload="{onload}"></body></html>');
        CKEDITOR.ui.panel.prototype = { render: function (a, b) {
            this.getHolderElement = function () {
                var a = this._.holder; if (!a) {
                    if (this.isFramed) {
                        var a = this.document.getById(this.id + "_frame"), b = a.getParent(), a = a.getFrameDocument(); CKEDITOR.env.iOS && b.setStyles({ overflow: "scroll", "-webkit-overflow-scrolling": "touch" }); b = CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function () { this.isLoaded = !0; if (this.onLoad) this.onLoad() }, this)); a.write(g.output(CKEDITOR.tools.extend({ css: CKEDITOR.tools.buildStyleHtml(this.css), onload: "window.parent.CKEDITOR.tools.callFunction(" +
b + ");"
                        }, c))); a.getWindow().$.CKEDITOR = CKEDITOR; a.on("key" + (CKEDITOR.env.opera ? "press" : "down"), function (a) { var b = a.data.getKeystroke(), c = this.document.getById(this.id).getAttribute("dir"); this._.onKeyDown && !1 === this._.onKeyDown(b) ? a.data.preventDefault() : (27 == b || b == ("rtl" == c ? 39 : 37)) && this.onEscape && !1 === this.onEscape(b) && a.data.preventDefault() }, this); a = a.getBody(); a.unselectable(); CKEDITOR.env.air && CKEDITOR.tools.callFunction(b)
                    } else a = this.document.getById(this.id); this._.holder = a
                } return a
            }; var c =
{ editorId: a.id, id: this.id, langCode: a.langCode, dir: a.lang.dir, cls: this.className, frame: "", env: CKEDITOR.env.cssClass, "z-index": a.config.baseFloatZIndex + (this.zIndexOffset || 1) }; this.isFramed && (c.frame = f.output({ id: this.id + "_frame", src: "javascript:void(document.open()," + (CKEDITOR.env.isCustomDomain() ? "document.domain='" + document.domain + "'," : "") + 'document.close())">' })); var d = e.output(c); b && b.push(d); return d
        }, addBlock: function (a, b) {
            b = this._.blocks[a] = b instanceof CKEDITOR.ui.panel.block ? b : new CKEDITOR.ui.panel.block(this.getHolderElement(),
b); this._.currentBlock || this.showBlock(a); return b
        }, getBlock: function (a) { return this._.blocks[a] }, showBlock: function (a) { var a = this._.blocks[a], b = this._.currentBlock, c = !this.forceIFrame || CKEDITOR.env.ie ? this._.holder : this.document.getById(this.id + "_frame"); b && (c.removeAttributes(b.attributes), b.hide()); this._.currentBlock = a; c.setAttributes(a.attributes); CKEDITOR.fire("ariaWidget", c); a._.focusIndex = -1; this._.onKeyDown = a.onKeyDown && CKEDITOR.tools.bind(a.onKeyDown, a); a.show(); return a }, destroy: function () {
            this.element &&
this.element.remove()
        }
        }; CKEDITOR.ui.panel.block = CKEDITOR.tools.createClass({ $: function (a, b) { this.element = a.append(a.getDocument().createElement("div", { attributes: { tabIndex: -1, "class": "cke_panel_block", role: "presentation" }, styles: { display: "none"} })); b && CKEDITOR.tools.extend(this, b); this.attributes.title || (this.attributes.title = this.attributes["aria-label"]); this.keys = {}; this._.focusIndex = -1; this.element.disableContextMenu() }, _: { markItem: function (a) {
-1 != a && (a = this.element.getElementsByTag("a").getItem(this._.focusIndex =
a), (CKEDITOR.env.webkit || CKEDITOR.env.opera) && a.getDocument().getWindow().focus(), a.focus(), this.onMark && this.onMark(a))
        }
        }, proto: { show: function () { this.element.setStyle("display", "") }, hide: function () { (!this.onHide || !0 !== this.onHide.call(this)) && this.element.setStyle("display", "none") }, onKeyDown: function (a) {
            var b = this.keys[a]; switch (b) {
                case "next": for (var a = this._.focusIndex, b = this.element.getElementsByTag("a"), c; c = b.getItem(++a); ) if (c.getAttribute("_cke_focus") && c.$.offsetWidth) {
                        this._.focusIndex =
a; c.focus(); break
                    } return !1; case "prev": a = this._.focusIndex; for (b = this.element.getElementsByTag("a"); 0 < a && (c = b.getItem(--a)); ) if (c.getAttribute("_cke_focus") && c.$.offsetWidth) { this._.focusIndex = a; c.focus(); break } return !1; case "click": case "mouseup": return a = this._.focusIndex, (c = 0 <= a && this.element.getElementsByTag("a").getItem(a)) && (c.$[b] ? c.$[b]() : c.$["on" + b]()), !1
            } return !0
        }
        }
        })
    })(); CKEDITOR.plugins.add("floatpanel", { requires: "panel" });
    (function () {
        function p(a, b, c, g, i) { var i = CKEDITOR.tools.genKey(b.getUniqueId(), c.getUniqueId(), a.lang.dir, a.uiColor || "", g.css || "", i || ""), e = h[i]; e || (e = h[i] = new CKEDITOR.ui.panel(b, g), e.element = c.append(CKEDITOR.dom.element.createFromHtml(e.render(a), b)), e.element.setStyles({ display: "none", position: "absolute" })); return e } var h = {}; CKEDITOR.ui.floatPanel = CKEDITOR.tools.createClass({ $: function (a, b, c, g) {
            c.forceIFrame = 1; c.toolbarRelated && a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE && (b = CKEDITOR.document.getById("cke_" +
a.name)); var i = b.getDocument(), g = p(a, i, b, c, g || 0), e = g.element, k = e.getFirst(); e.disableContextMenu(); this.element = e; this._ = { editor: a, panel: g, parentElement: b, definition: c, document: i, iframe: k, children: [], dir: a.lang.dir }; a.on("mode", function () { this.hide() }, this); a.on("resize", function () { this.hide() }, this)
        }, proto: { addBlock: function (a, b) { return this._.panel.addBlock(a, b) }, addListBlock: function (a, b) { return this._.panel.addListBlock(a, b) }, getBlock: function (a) { return this._.panel.getBlock(a) }, showBlock: function (a,
b, c, g, i) {
            var e = this._.panel, k = e.showBlock(a); this.allowBlur(!1); a = this._.editor.editable(); this._.returnFocus = a.hasFocus ? a : new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement); var d = this.element, a = this._.iframe, h = d.getDocument(), n = this._.parentElement.getPositionedAncestor(), o = b.getDocumentPosition(h), h = n ? n.getDocumentPosition(h) : { x: 0, y: 0 }, l = "rtl" == this._.dir, f = o.x + (g || 0) - h.x, j = o.y + (i || 0) - h.y; if (l && (1 == c || 4 == c)) f += b.$.offsetWidth; else if (!l && (2 == c || 3 == c)) f += b.$.offsetWidth - 1; if (3 == c || 4 == c) j +=
b.$.offsetHeight - 1; this._.panel._.offsetParentId = b.getId(); d.setStyles({ top: j + "px", left: 0, display: "" }); d.setOpacity(0); d.getFirst().removeStyle("width"); this._.blurSet || (b = CKEDITOR.env.ie ? a : new CKEDITOR.dom.window(a.$.contentWindow), CKEDITOR.event.useCapture = !0, b.on("blur", function (a) { this.allowBlur() && a.data.getPhase() == CKEDITOR.EVENT_PHASE_AT_TARGET && (this.visible && !this._.activeChild) && (delete this._.returnFocus, this.hide()) }, this), b.on("focus", function () { this._.focused = !0; this.hideChild(); this.allowBlur(!0) },
this), CKEDITOR.event.useCapture = !1, this._.editor.focusManager.add(b), this._.blurSet = 1); e.onEscape = CKEDITOR.tools.bind(function (a) { if (this.onEscape && this.onEscape(a) === false) return false }, this); CKEDITOR.tools.setTimeout(function () {
    var a = CKEDITOR.tools.bind(function () {
        d.removeStyle("width"); if (k.autoSize) {
            var a = k.element.getDocument(), a = (CKEDITOR.env.webkit ? k.element : a.getBody()).$.scrollWidth; CKEDITOR.env.ie && (CKEDITOR.env.quirks && a > 0) && (a = a + ((d.$.offsetWidth || 0) - (d.$.clientWidth || 0) + 3)); d.setStyle("width",
a + 10 + "px"); a = k.element.$.scrollHeight; CKEDITOR.env.ie && (CKEDITOR.env.quirks && a > 0) && (a = a + ((d.$.offsetHeight || 0) - (d.$.clientHeight || 0) + 3)); d.setStyle("height", a + "px"); e._.currentBlock.element.setStyle("display", "none").removeStyle("display")
        } else d.removeStyle("height"); l && (f = f - d.$.offsetWidth); d.setStyle("left", f + "px"); var b = e.element.getWindow(), a = d.$.getBoundingClientRect(), b = b.getViewPaneSize(), c = a.width || a.right - a.left, g = a.height || a.bottom - a.top, i = l ? a.right : b.width - a.left, h = l ? b.width - a.right : a.left;
        l ? i < c && (f = h > c ? f + c : b.width > c ? f - a.left : f - a.right + b.width) : i < c && (f = h > c ? f - c : b.width > c ? f - a.right + b.width : f - a.left); c = a.top; b.height - a.top < g && (j = c > g ? j - g : b.height > g ? j - a.bottom + b.height : j - a.top); if (CKEDITOR.env.ie) { b = a = new CKEDITOR.dom.element(d.$.offsetParent); b.getName() == "html" && (b = b.getDocument().getBody()); b.getComputedStyle("direction") == "rtl" && (f = CKEDITOR.env.ie8Compat ? f - d.getDocument().getDocumentElement().$.scrollLeft * 2 : f - (a.$.scrollWidth - a.$.clientWidth)) } var a = d.getFirst(), m; (m = a.getCustomData("activePanel")) &&
m.onHide && m.onHide.call(this, 1); a.setCustomData("activePanel", this); d.setStyles({ top: j + "px", left: f + "px" }); d.setOpacity(1)
    }, this); e.isLoaded ? a() : e.onLoad = a; CKEDITOR.tools.setTimeout(function () { this.focus(); this.allowBlur(true); this._.editor.fire("panelShow", this) }, 0, this)
}, CKEDITOR.env.air ? 200 : 0, this); this.visible = 1; this.onShow && this.onShow.call(this)
        }, focus: function () { if (CKEDITOR.env.webkit) { var a = CKEDITOR.document.getActive(); !a.equals(this._.iframe) && a.$.blur() } (this._.lastFocused || this._.iframe.getFrameDocument().getWindow()).focus() },
            blur: function () { var a = this._.iframe.getFrameDocument().getActive(); a.is("a") && (this._.lastFocused = a) }, hide: function (a) {
                if (this.visible && (!this.onHide || !0 !== this.onHide.call(this))) {
                    this.hideChild(); CKEDITOR.env.gecko && this._.iframe.getFrameDocument().$.activeElement.blur(); this.element.setStyle("display", "none"); this.visible = 0; this.element.getFirst().removeCustomData("activePanel"); if (a = a && this._.returnFocus) CKEDITOR.env.webkit && a.type && a.getWindow().$.focus(), a.focus(); delete this._.lastFocused;
                    this._.editor.fire("panelHide", this)
                }
            }, allowBlur: function (a) { var b = this._.panel; void 0 != a && (b.allowBlur = a); return b.allowBlur }, showAsChild: function (a, b, c, g, h, e) {
                this._.activeChild == a && a._.panel._.offsetParentId == c.getId() || (this.hideChild(), a.onHide = CKEDITOR.tools.bind(function () { CKEDITOR.tools.setTimeout(function () { this._.focused || this.hide() }, 0, this) }, this), this._.activeChild = a, this._.focused = !1, a.showBlock(b, c, g, h, e), this.blur(), (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) && setTimeout(function () {
                    a.element.getChild(0).$.style.cssText +=
""
                }, 100))
            }, hideChild: function (a) { var b = this._.activeChild; b && (delete b.onHide, delete this._.activeChild, b.hide(), a && this.focus()) }
        }
        }); CKEDITOR.on("instanceDestroyed", function () { var a = CKEDITOR.tools.isEmpty(CKEDITOR.instances), b; for (b in h) { var c = h[b]; a ? c.destroy() : c.element.hide() } a && (h = {}) })
    })(); CKEDITOR.plugins.add("menu", { requires: "floatpanel", beforeInit: function (k) { for (var g = k.config.menu_groups.split(","), m = k._.menuGroups = {}, l = k._.menuItems = {}, a = 0; a < g.length; a++) m[g[a]] = a + 1; k.addMenuGroup = function (a, b) { m[a] = b || 100 }; k.addMenuItem = function (a, b) { m[b.group] && (l[a] = new CKEDITOR.menuItem(this, a, b)) }; k.addMenuItems = function (a) { for (var b in a) this.addMenuItem(b, a[b]) }; k.getMenuItem = function (a) { return l[a] }; k.removeMenuItem = function (a) { delete l[a] } } });
    (function () {
        function k(a) { a.sort(function (a, b) { return a.group < b.group ? -1 : a.group > b.group ? 1 : a.order < b.order ? -1 : a.order > b.order ? 1 : 0 }) } var g = '<span class="cke_menuitem"><a id="{id}" class="cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href="{href}" title="{title}" tabindex="-1"_cke_focus=1 hidefocus="true" role="menuitem" aria-haspopup="{hasPopup}" aria-disabled="{disabled}" aria-pressed="{pressed}"'; if (CKEDITOR.env.opera || CKEDITOR.env.gecko && CKEDITOR.env.mac) g += ' onkeypress="return false;"';
        CKEDITOR.env.gecko && (g += ' onblur="this.style.cssText = this.style.cssText;"'); var g = g + (' onmouseover="CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout="CKEDITOR.tools.callFunction({moveOutFn},{index});" ' + (CKEDITOR.env.ie ? 'onclick="return false;" onmouseup' : "onclick") + '="CKEDITOR.tools.callFunction({clickFn},{index}); return false;">'), m = CKEDITOR.addTemplate("menuItem", g + '<span class="cke_menubutton_inner"><span class="cke_menubutton_icon"><span class="cke_button_icon cke_button__{iconName}_icon" style="{iconStyle}"></span></span><span class="cke_menubutton_label">{label}</span>{arrowHtml}</span></a></span>'),
l = CKEDITOR.addTemplate("menuArrow", '<span class="cke_menuarrow"><span>{label}</span></span>'); CKEDITOR.menu = CKEDITOR.tools.createClass({ $: function (a, c) { c = this._.definition = c || {}; this.id = CKEDITOR.tools.getNextId(); this.editor = a; this.items = []; this._.listeners = []; this._.level = c.level || 1; var b = CKEDITOR.tools.extend({}, c.panel, { css: [CKEDITOR.skin.getPath("editor")], level: this._.level - 1, block: {} }), i = b.block.attributes = b.attributes || {}; !i.role && (i.role = "menu"); this._.panelDefinition = b }, _: { onShow: function () {
    var a =
this.editor.getSelection(), c = a && a.getStartElement(), b = this.editor.elementPath(), i = this._.listeners; this.removeAll(); for (var e = 0; e < i.length; e++) { var j = i[e](c, a, b); if (j) for (var f in j) { var h = this.editor.getMenuItem(f); if (h && (!h.command || this.editor.getCommand(h.command).state)) h.state = j[f], this.add(h) } }
}, onClick: function (a) { this.hide(); if (a.onClick) a.onClick(); else a.command && this.editor.execCommand(a.command) }, onEscape: function (a) { var c = this.parent; c ? c._.panel.hideChild(1) : 27 == a && this.hide(1); return !1 },
    onHide: function () { this.onHide && this.onHide() }, showSubMenu: function (a) {
        var c = this._.subMenu, b = this.items[a]; if (b = b.getItems && b.getItems()) {
            c ? c.removeAll() : (c = this._.subMenu = new CKEDITOR.menu(this.editor, CKEDITOR.tools.extend({}, this._.definition, { level: this._.level + 1 }, !0)), c.parent = this, c._.onClick = CKEDITOR.tools.bind(this._.onClick, this)); for (var i in b) { var e = this.editor.getMenuItem(i); e && (e.state = b[i], c.add(e)) } a = this._.panel.getBlock(this.id).element.getDocument().getById(this.id + ("" + a)); c.show(a,
2)
        } else this._.panel.hideChild(1)
    }
}, proto: { add: function (a) { a.order || (a.order = this.items.length); this.items.push(a) }, removeAll: function () { this.items = [] }, show: function (a, c, b, i) {
    if (!this.parent && (this._.onShow(), !this.items.length)) return; var c = c || ("rtl" == this.editor.lang.dir ? 2 : 1), e = this.items, j = this.editor, f = this._.panel, h = this._.element; if (!f) {
        f = this._.panel = new CKEDITOR.ui.floatPanel(this.editor, CKEDITOR.document.getBody(), this._.panelDefinition, this._.level); f.onEscape = CKEDITOR.tools.bind(function (a) {
            if (!1 ===
this._.onEscape(a)) return !1
        }, this); f.onShow = function () { f._.panel.getHolderElement().getParent().addClass("cke cke_reset_all") }; f.onHide = CKEDITOR.tools.bind(function () { this._.onHide && this._.onHide() }, this); h = f.addBlock(this.id, this._.panelDefinition.block); h.autoSize = !0; var d = h.keys; d[40] = "next"; d[9] = "next"; d[38] = "prev"; d[CKEDITOR.SHIFT + 9] = "prev"; d["rtl" == j.lang.dir ? 37 : 39] = CKEDITOR.env.ie ? "mouseup" : "click"; d[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (d[13] = "mouseup"); h = this._.element =
h.element; d = h.getDocument(); d.getBody().setStyle("overflow", "hidden"); d.getElementsByTag("html").getItem(0).setStyle("overflow", "hidden"); this._.itemOverFn = CKEDITOR.tools.addFunction(function (a) { clearTimeout(this._.showSubTimeout); this._.showSubTimeout = CKEDITOR.tools.setTimeout(this._.showSubMenu, j.config.menu_subMenuDelay || 400, this, [a]) }, this); this._.itemOutFn = CKEDITOR.tools.addFunction(function () { clearTimeout(this._.showSubTimeout) }, this); this._.itemClickFn = CKEDITOR.tools.addFunction(function (a) {
    var b =
this.items[a]; if (b.state == CKEDITOR.TRISTATE_DISABLED) this.hide(1); else if (b.getItems) this._.showSubMenu(a); else this._.onClick(b)
}, this)
    } k(e); for (var d = j.container && j.container.getChild(1), d = ['<div class="cke_menu' + (d && d.hasClass("cke_mixed_dir_content") ? " cke_mixed_dir_content" : "") + '" role="presentation">'], g = e.length, m = g && e[0].group, l = 0; l < g; l++) { var n = e[l]; m != n.group && (d.push('<div class="cke_menuseparator" role="separator"></div>'), m = n.group); n.render(this, l, d) } d.push("</div>"); h.setHtml(d.join(""));
    CKEDITOR.ui.fire("ready", this); this.parent ? this.parent._.panel.showAsChild(f, this.id, a, c, b, i) : f.showBlock(this.id, a, c, b, i); j.fire("menuShow", [f])
}, addListener: function (a) { this._.listeners.push(a) }, hide: function (a) { this._.onHide && this._.onHide(); this._.panel && this._.panel.hide(a) }
}
}); CKEDITOR.menuItem = CKEDITOR.tools.createClass({ $: function (a, c, b) { CKEDITOR.tools.extend(this, b, { order: 0, className: "cke_menubutton__" + c }); this.group = a._.menuGroups[this.group]; this.editor = a; this.name = c }, proto: { render: function (a,
c, b) {
    var g = a.id + ("" + c), e = "undefined" == typeof this.state ? CKEDITOR.TRISTATE_OFF : this.state, j = e == CKEDITOR.TRISTATE_ON ? "on" : e == CKEDITOR.TRISTATE_DISABLED ? "disabled" : "off", f = this.getItems, h = "&#" + ("rtl" == this.editor.lang.dir ? "9668" : "9658") + ";", d = this.name; this.icon && !/\./.test(this.icon) && (d = this.icon); a = { id: g, name: this.name, iconName: d, label: this.label, cls: this.className || "", state: j, hasPopup: f ? "true" : "false", disabled: e == CKEDITOR.TRISTATE_DISABLED, pressed: e == CKEDITOR.TRISTATE_ON, title: this.label, href: "javascript:void('" +
(this.label || "").replace("'") + "')", hoverFn: a._.itemOverFn, moveOutFn: a._.itemOutFn, clickFn: a._.itemClickFn, index: c, iconStyle: CKEDITOR.skin.getIconStyle(d, "rtl" == this.editor.lang.dir, d == this.icon ? null : this.icon, this.iconOffset), arrowHtml: f ? l.output({ label: h }) : ""
    }; m.output(a, b)
}
}
})
    })(); CKEDITOR.config.menu_groups = "clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div"; CKEDITOR.plugins.add("contextmenu", { requires: "menu", onLoad: function () {
        CKEDITOR.plugins.contextMenu = CKEDITOR.tools.createClass({ base: CKEDITOR.menu, $: function (b) { this.base.call(this, b, { panel: { className: "cke_menu_panel", attributes: { "aria-label": b.lang.contextmenu.options }, zIndexOffset: -2} }) }, proto: { addTarget: function (b, d) {
            if (CKEDITOR.env.opera && !("oncontextmenu" in document.body)) {
                var c; b.on("mousedown", function (a) {
                    a = a.data; if (2 != a.$.button) a.getKeystroke() == CKEDITOR.CTRL + 1 && b.fire("contextmenu", a); else if (!d ||
!(CKEDITOR.env.mac ? a.$.metaKey : a.$.ctrlKey)) { var g = a.getTarget(); c || (g = g.getDocument(), c = g.createElement("input"), c.$.type = "button", g.getBody().append(c)); c.setAttribute("style", "position:absolute;top:" + (a.$.clientY - 2) + "px;left:" + (a.$.clientX - 2) + "px;width:5px;height:5px;opacity:0.01") }
                }); b.on("mouseup", function (a) { c && (c.remove(), c = void 0, b.fire("contextmenu", a.data)) })
            } b.on("contextmenu", function (a) {
                a = a.data; if (!d || !(CKEDITOR.env.webkit ? e : CKEDITOR.env.mac ? a.$.metaKey : a.$.ctrlKey)) {
                    a.preventDefault();
                    var b = a.getTarget().getDocument(), c = a.getTarget().getDocument().getDocumentElement(), f = !b.equals(CKEDITOR.document), b = b.getWindow().getScrollPosition(), h = f ? a.$.clientX : a.$.pageX || b.x + a.$.clientX, i = f ? a.$.clientY : a.$.pageY || b.y + a.$.clientY; CKEDITOR.tools.setTimeout(function () { this.open(c, null, h, i) }, CKEDITOR.env.ie ? 200 : 0, this)
                }
            }, this); if (CKEDITOR.env.opera) b.on("keypress", function (a) { a = a.data; 0 === a.$.keyCode && a.preventDefault() }); if (CKEDITOR.env.webkit) {
                var e, f = function () { e = 0 }; b.on("keydown", function (a) {
                    e =
CKEDITOR.env.mac ? a.data.$.metaKey : a.data.$.ctrlKey
                }); b.on("keyup", f); b.on("contextmenu", f)
            }
        }, open: function (b, d, c, e) { this.editor.focus(); b = b || CKEDITOR.document.getDocumentElement(); this.editor.selectionChange(1); this.show(b, d, c, e) }
        }
        })
    }, beforeInit: function (b) {
        var d = b.contextMenu = new CKEDITOR.plugins.contextMenu(b); b.on("contentDom", function () { d.addTarget(b.editable(), !1 !== b.config.browserContextMenuOnCtrl) }); b.addCommand("contextMenu", { exec: function () { b.contextMenu.open(b.document.getBody()) } }); b.setKeystroke(CKEDITOR.SHIFT +
121, "contextMenu"); b.setKeystroke(CKEDITOR.CTRL + CKEDITOR.SHIFT + 121, "contextMenu")
    }
    }); CKEDITOR.plugins.add("resize", { init: function (b) {
        var f, g, n, o, a = b.config, q = b.ui.spaceId("resizer"), h = b.element ? b.element.getDirection(1) : "ltr"; !a.resize_dir && (a.resize_dir = "vertical"); void 0 == a.resize_maxWidth && (a.resize_maxWidth = 3E3); void 0 == a.resize_maxHeight && (a.resize_maxHeight = 3E3); void 0 == a.resize_minWidth && (a.resize_minWidth = 750); void 0 == a.resize_minHeight && (a.resize_minHeight = 250); if (!1 !== a.resize_enabled) {
            var c = null, i = ("both" == a.resize_dir || "horizontal" == a.resize_dir) && a.resize_minWidth != a.resize_maxWidth,
l = ("both" == a.resize_dir || "vertical" == a.resize_dir) && a.resize_minHeight != a.resize_maxHeight, j = function (e) { var d = f, m = g, c = d + (e.data.$.screenX - n) * ("rtl" == h ? -1 : 1), e = m + (e.data.$.screenY - o); i && (d = Math.max(a.resize_minWidth, Math.min(c, a.resize_maxWidth))); l && (m = Math.max(a.resize_minHeight, Math.min(e, a.resize_maxHeight))); b.resize(i ? d : null, m) }, k = function () {
    CKEDITOR.document.removeListener("mousemove", j); CKEDITOR.document.removeListener("mouseup", k); b.document && (b.document.removeListener("mousemove", j), b.document.removeListener("mouseup",
k))
}, p = CKEDITOR.tools.addFunction(function (e) { c || (c = b.getResizable()); f = c.$.offsetWidth || 0; g = c.$.offsetHeight || 0; n = e.screenX; o = e.screenY; a.resize_minWidth > f && (a.resize_minWidth = f); a.resize_minHeight > g && (a.resize_minHeight = g); CKEDITOR.document.on("mousemove", j); CKEDITOR.document.on("mouseup", k); b.document && (b.document.on("mousemove", j), b.document.on("mouseup", k)) }); b.on("destroy", function () { CKEDITOR.tools.removeFunction(p) }); b.on("uiSpace", function (a) {
    if ("bottom" == a.data.space) {
        var d = ""; i && !l && (d =
" cke_resizer_horizontal"); !i && l && (d = " cke_resizer_vertical"); var c = '<span id="' + q + '" class="cke_resizer' + d + " cke_resizer_" + h + '" title="' + CKEDITOR.tools.htmlEncode(b.lang.common.resize) + '" onmousedown="CKEDITOR.tools.callFunction(' + p + ', event)">' + ("ltr" == h ? "◢" : "◣") + "</span>"; "ltr" == h && "ltr" == d ? a.data.html += c : a.data.html = c + a.data.html
    }
}, b, null, 100); b.on("maximize", function (a) { b.ui.space("resizer")[a.data == CKEDITOR.TRISTATE_ON ? "hide" : "show"]() })
        }
    }
    }); (function () {
        var b = '<a id="{id}" class="cke_button cke_button__{name} cke_button_{state} {cls}"' + (CKEDITOR.env.gecko && 10900 <= CKEDITOR.env.version && !CKEDITOR.env.hc ? "" : '" href="javascript:void(\'{titleJs}\')"') + ' title="{title}" tabindex="-1" hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="{hasArrow}"'; if (CKEDITOR.env.opera || CKEDITOR.env.gecko && CKEDITOR.env.mac) b += ' onkeypress="return false;"'; CKEDITOR.env.gecko && (b += ' onblur="this.style.cssText = this.style.cssText;"'); var b =
b + (' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus="return CKEDITOR.tools.callFunction({focusFn},event);"  onmousedown="return CKEDITOR.tools.callFunction({mousedownFn},event);" ' + (CKEDITOR.env.ie ? 'onclick="return false;" onmouseup' : "onclick") + '="CKEDITOR.tools.callFunction({clickFn},this);return false;"><span class="cke_button_icon cke_button__{iconName}_icon" style="{style}"'), b = b + '>&nbsp;</span><span id="{id}_label" class="cke_button_label cke_button__{name}_label">{label}</span>{arrowHtml}</a>',
m = CKEDITOR.addTemplate("buttonArrow", '<span class="cke_button_arrow">' + (CKEDITOR.env.hc ? "&#9660;" : "") + "</span>"), n = CKEDITOR.addTemplate("button", b); CKEDITOR.plugins.add("button", { beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_BUTTON, CKEDITOR.ui.button.handler) } }); CKEDITOR.UI_BUTTON = "button"; CKEDITOR.ui.button = function (a) { CKEDITOR.tools.extend(this, a, { title: a.label, click: a.click || function (b) { b.execCommand(a.command) } }); this._ = {} }; CKEDITOR.ui.button.handler = { create: function (a) { return new CKEDITOR.ui.button(a) } };
        CKEDITOR.ui.button.prototype = { render: function (a, b) {
            var e = CKEDITOR.env, i = this._.id = CKEDITOR.tools.getNextId(), f = "", d = this.command, l; this._.editor = a; var c = { id: i, button: this, editor: a, focus: function () { CKEDITOR.document.getById(i).focus() }, execute: function () { this.button.click(a) }, attach: function (a) { this.button.attach(a) } }, o = CKEDITOR.tools.addFunction(function (a) { if (c.onkey) return a = new CKEDITOR.dom.event(a), !1 !== c.onkey(c, a.getKeystroke()) }), p = CKEDITOR.tools.addFunction(function (a) {
                var b; c.onfocus && (b =
!1 !== c.onfocus(c, new CKEDITOR.dom.event(a))); CKEDITOR.env.gecko && 10900 > CKEDITOR.env.version && a.preventBubble(); return b
            }), j = 0, q = CKEDITOR.tools.addFunction(function () { if (CKEDITOR.env.opera) { var b = a.editable(); b.isInline() && b.hasFocus && (a.lockSelection(), j = 1) } }); c.clickFn = l = CKEDITOR.tools.addFunction(function () { j && (a.unlockSelection(1), j = 0); c.execute() }); if (this.modes) {
                var k = {}, g = function () {
                    var b = a.mode; b && (b = this.modes[b] ? void 0 != k[b] ? k[b] : CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, this.setState(a.readOnly &&
!this.readOnly ? CKEDITOR.TRISTATE_DISABLED : b))
                }; a.on("beforeModeUnload", function () { a.mode && this._.state != CKEDITOR.TRISTATE_DISABLED && (k[a.mode] = this._.state) }, this); a.on("mode", g, this); !this.readOnly && a.on("readOnly", g, this)
            } else if (d && (d = a.getCommand(d))) d.on("state", function () { this.setState(d.state) }, this), f += d.state == CKEDITOR.TRISTATE_ON ? "on" : d.state == CKEDITOR.TRISTATE_DISABLED ? "disabled" : "off"; if (this.directional) a.on("contentDirChanged", function (b) {
                var c = CKEDITOR.document.getById(this._.id), d =
c.getFirst(), b = b.data; b != a.lang.dir ? c.addClass("cke_" + b) : c.removeClass("cke_ltr").removeClass("cke_rtl"); d.setAttribute("style", CKEDITOR.skin.getIconStyle(h, "rtl" == b, this.icon, this.iconOffset))
            }, this); d || (f += "off"); var h = g = this.name || this.command; this.icon && !/\./.test(this.icon) && (h = this.icon, this.icon = null); e = { id: i, name: g, iconName: h, label: this.label, cls: this.className || "", state: f, title: this.title, titleJs: e.gecko && 10900 <= e.version && !e.hc ? "" : (this.title || "").replace("'", ""), hasArrow: this.hasArrow ?
"true" : "false", keydownFn: o, mousedownFn: q, focusFn: p, clickFn: l, style: CKEDITOR.skin.getIconStyle(h, "rtl" == a.lang.dir, this.icon, this.iconOffset), arrowHtml: this.hasArrow ? m.output() : ""
            }; n.output(e, b); if (this.onRender) this.onRender(); return c
        }, setState: function (a) { if (this._.state == a) return !1; this._.state = a; var b = CKEDITOR.document.getById(this._.id); return b ? (b.setState(a, "cke_button"), !0) : !1 }
        }; CKEDITOR.ui.prototype.addButton = function (a, b) { this.add(a, CKEDITOR.UI_BUTTON, b) }
    })(); (function () {
        function w(a) {
            function e() { for (var b = h(), g = CKEDITOR.tools.clone(a.config.toolbarGroups) || o(a), f = 0; f < g.length; f++) { var d = g[f]; if ("/" != d) { "string" == typeof d && (d = g[f] = { name: d }); var e, n = d.groups; if (n) for (var l = 0; l < n.length; l++) e = n[l], (e = b[e]) && c(d, e); (e = b[d.name]) && c(d, e) } } return g } function h() {
                var b = {}, c, f, d; for (c in a.ui.items) f = a.ui.items[c], d = f.toolbar || "others", d = d.split(","), f = d[0], d = parseInt(d[1] || -1, 10), b[f] || (b[f] = []), b[f].push({ name: c, order: d }); for (f in b) b[f] = b[f].sort(function (a,
b) { return a.order == b.order ? 0 : 0 > b.order ? -1 : 0 > a.order ? 1 : a.order < b.order ? -1 : 1 }); return b
            } function c(a, c) { if (c.length) { a.items ? a.items.push("-") : a.items = []; for (var d; d = c.shift(); ) a.items.push(d.name) } } var d = a.config.toolbar; "string" == typeof d && (d = a.config["toolbar_" + d]); return a.toolbar = d || e()
        } function o(a) {
            return a._.toolbarGroups || (a._.toolbarGroups = [{ name: "document", groups: ["mode", "document", "doctools"] }, { name: "clipboard", groups: ["clipboard", "undo"] }, { name: "editing", groups: ["find", "selection", "spellchecker"] },
{ name: "forms" }, "/", { name: "basicstyles", groups: ["basicstyles", "cleanup"] }, { name: "paragraph", groups: ["list", "indent", "blocks", "align"] }, { name: "links" }, { name: "insert" }, "/", { name: "styles" }, { name: "colors" }, { name: "tools" }, { name: "others" }, { name: "about"}])
        } var t = function () { this.toolbars = []; this.focusCommandExecuted = !1 }; t.prototype.focus = function () { for (var a = 0, e; e = this.toolbars[a++]; ) for (var h = 0, c; c = e.items[h++]; ) if (c.focus) { c.focus(); return } }; var x = { modes: { wysiwyg: 1, source: 1 }, readOnly: 1, exec: function (a) {
            a.toolbox &&
(a.toolbox.focusCommandExecuted = !0, CKEDITOR.env.ie || CKEDITOR.env.air ? setTimeout(function () { a.toolbox.focus() }, 100) : a.toolbox.focus())
        }
        }; CKEDITOR.plugins.add("toolbar", { requires: "button", init: function (a) {
            var e, h = function (c, d) {
                var b, g = "rtl" == a.lang.dir, f = a.config.toolbarGroupCycling, f = void 0 === f || f; switch (d) {
                    case 9: case CKEDITOR.SHIFT + 9: for (; !b || !b.items.length; ) if (b = 9 == d ? (b ? b.next : c.toolbar.next) || a.toolbox.toolbars[0] : (b ? b.previous : c.toolbar.previous) || a.toolbox.toolbars[a.toolbox.toolbars.length -
1], b.items.length) for (c = b.items[e ? b.items.length - 1 : 0]; c && !c.focus; ) (c = e ? c.previous : c.next) || (b = 0); c && c.focus(); return !1; case g ? 37 : 39: case 40: b = c; do b = b.next, !b && f && (b = c.toolbar.items[0]); while (b && !b.focus); b ? b.focus() : h(c, 9); return !1; case g ? 39 : 37: case 38: b = c; do b = b.previous, !b && f && (b = c.toolbar.items[c.toolbar.items.length - 1]); while (b && !b.focus); b ? b.focus() : (e = 1, h(c, CKEDITOR.SHIFT + 9), e = 0); return !1; case 27: return a.focus(), !1; case 13: case 32: return c.execute(), !1
                } return !0
            }; a.on("uiSpace", function (c) {
                if (c.data.space ==
a.config.toolbarLocation) {
                    a.toolbox = new t; var d = CKEDITOR.tools.getNextId(), b = a.config.removeButtons, b = b && b.split(","), g = ['<span id="', d, '" class="cke_voice_label">', a.lang.toolbar.toolbars, "</span>", '<span id="' + a.ui.spaceId("toolbox") + '" class="cke_toolbox" role="group" aria-labelledby="', d, '" onmousedown="return false;">'], d = !1 !== a.config.toolbarStartupExpanded, f, e; a.config.toolbarCanCollapse && a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE && g.push('<span class="cke_toolbox_main"' + (d ? ">" : ' style="display:none">'));
                    for (var o = a.toolbox.toolbars, n = w(a), l = 0; l < n.length; l++) {
                        var j, i = 0, q, m = n[l], r; if (m) if (f && (g.push("</span>"), e = f = 0), "/" === m) g.push('<span class="cke_toolbar_break"></span>'); else {
                            r = m.items || m; for (var s = 0; s < r.length; s++) {
                                var k; k = r[s]; var u; if (!(b && 0 <= CKEDITOR.tools.indexOf(b, k)) && (k = a.ui.create(k))) if (k.type == CKEDITOR.UI_SEPARATOR) e = f && k; else {
                                    u = !1 !== k.canGroup; if (!i) {
                                        j = CKEDITOR.tools.getNextId(); i = { id: j, items: [] }; q = m.name && (a.lang.toolbar.toolbarGroups[m.name] || m.name); g.push('<span id="', j, '" class="cke_toolbar"',
q ? ' aria-labelledby="' + j + '_label"' : "", ' role="toolbar">'); q && g.push('<span id="', j, '_label" class="cke_voice_label">', q, "</span>"); g.push('<span class="cke_toolbar_start"></span>'); var p = o.push(i) - 1; 0 < p && (i.previous = o[p - 1], i.previous.next = i)
                                    } u ? f || (g.push('<span class="cke_toolgroup" role="presentation">'), f = 1) : f && (g.push("</span>"), f = 0); j = function (b) {
                                        b = b.render(a, g); p = i.items.push(b) - 1; if (p > 0) { b.previous = i.items[p - 1]; b.previous.next = b } b.toolbar = i; b.onkey = h; b.onfocus = function () {
                                            a.toolbox.focusCommandExecuted ||
a.focus()
                                        }
                                    }; e && (j(e), e = 0); j(k)
                                }
                            } f && (g.push("</span>"), e = f = 0); i && g.push('<span class="cke_toolbar_end"></span></span>')
                        }
                    } a.config.toolbarCanCollapse && g.push("</span>"); if (a.config.toolbarCanCollapse && a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                        var v = CKEDITOR.tools.addFunction(function () { a.execCommand("toolbarCollapse") }); a.on("destroy", function () { CKEDITOR.tools.removeFunction(v) }); a.addCommand("toolbarCollapse", { readOnly: 1, exec: function (a) {
                            var b = a.ui.space("toolbar_collapser"), c = b.getPrevious(), d =
a.ui.space("contents"), e = c.getParent(), f = parseInt(d.$.style.height, 10), g = e.$.offsetHeight, h = b.hasClass("cke_toolbox_collapser_min"); h ? (c.show(), b.removeClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarCollapse)) : (c.hide(), b.addClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarExpand)); b.getFirst().setText(h ? "▲" : "◀"); d.setStyle("height", f - (e.$.offsetHeight - g) + "px"); a.fire("resize")
                        }, modes: { wysiwyg: 1, source: 1 }
                        }); a.setKeystroke(CKEDITOR.ALT +
(CKEDITOR.env.ie || CKEDITOR.env.webkit ? 189 : 109), "toolbarCollapse"); g.push('<a title="' + (d ? a.lang.toolbar.toolbarCollapse : a.lang.toolbar.toolbarExpand) + '" id="' + a.ui.spaceId("toolbar_collapser") + '" tabIndex="-1" class="cke_toolbox_collapser'); d || g.push(" cke_toolbox_collapser_min"); g.push('" onclick="CKEDITOR.tools.callFunction(' + v + ')">', '<span class="cke_arrow">&#9650;</span>', "</a>")
                    } g.push("</span>"); c.data.html += g.join("")
                }
            }); a.on("destroy", function () {
                if (this.toolbox) {
                    var a, d = 0, b, e, f; for (a = this.toolbox.toolbars; d <
a.length; d++) { e = a[d].items; for (b = 0; b < e.length; b++) f = e[b], f.clickFn && CKEDITOR.tools.removeFunction(f.clickFn), f.keyDownFn && CKEDITOR.tools.removeFunction(f.keyDownFn) }
                }
            }); a.on("uiReady", function () { var c = a.ui.space("toolbox"); c && a.focusManager.add(c, 1) }); a.addCommand("toolbarFocus", x); a.setKeystroke(CKEDITOR.ALT + 121, "toolbarFocus"); a.ui.add("-", CKEDITOR.UI_SEPARATOR, {}); a.ui.addHandler(CKEDITOR.UI_SEPARATOR, { create: function () {
                return { render: function (a, d) {
                    d.push('<span class="cke_toolbar_separator" role="separator"></span>');
                    return {}
                }
                }
            }
            })
        }
        }); CKEDITOR.ui.prototype.addToolbarGroup = function (a, e, h) { var c = o(this.editor), d = 0 === e, b = { name: a }; if (h) { if (h = CKEDITOR.tools.search(c, function (a) { return a.name == h })) { !h.groups && (h.groups = []); if (e && (e = CKEDITOR.tools.indexOf(h.groups, e), 0 <= e)) { h.groups.splice(e + 1, 0, a); return } d ? h.groups.splice(0, 0, a) : h.groups.push(a); return } e = null } e && (e = CKEDITOR.tools.indexOf(c, function (a) { return a.name == e })); d ? c.splice(0, 0, a) : "number" == typeof e ? c.splice(e + 1, 0, b) : c.push(a) }
    })(); CKEDITOR.UI_SEPARATOR = "separator";
    CKEDITOR.config.toolbarLocation = "top"; (function () {
        var o = { editorFocus: !1, readOnly: 1, exec: function (a) { (a = CKEDITOR.document.getById(a._.elementsPath.idBase + "0")) && a.focus(CKEDITOR.env.ie || CKEDITOR.env.air) } }, m = '<span class="cke_path_empty">&nbsp;</span>', d = ""; if (CKEDITOR.env.opera || CKEDITOR.env.gecko && CKEDITOR.env.mac) d += ' onkeypress="return false;"'; CKEDITOR.env.gecko && (d += ' onblur="this.style.cssText = this.style.cssText;"'); var p = CKEDITOR.addTemplate("pathItem", '<a id="{id}" href="{jsTitle}" tabindex="-1" class="cke_path_item" title="{label}"' +
(CKEDITOR.env.gecko && 10900 > CKEDITOR.env.version ? ' onfocus="event.preventBubble();"' : "") + d + ' hidefocus="true"  onkeydown="return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick="CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role="button" aria-label="{label}">{text}</a>'); CKEDITOR.plugins.add("elementspath", { init: function (a) {
    function d(b) { a.focus(); b = a._.elementsPath.list[b]; if (b.equals(a.editable())) { var e = a.createRange(); e.selectNodeContents(b); e.select() } else a.getSelection().selectElement(b) }
    function h() { i && i.setHtml(m); delete a._.elementsPath.list } var l = a.ui.spaceId("path"), i, n = "cke_elementspath_" + CKEDITOR.tools.getNextNumber() + "_"; a._.elementsPath = { idBase: n, filters: [] }; a.on("uiSpace", function (b) { "bottom" == b.data.space && (b.data.html += '<span id="' + l + '_label" class="cke_voice_label">' + a.lang.elementspath.eleLabel + '</span><span id="' + l + '" class="cke_path" role="group" aria-labelledby="' + l + '_label">' + m + "</span>") }); a.on("uiReady", function () {
        var b = a.ui.space("path"); b && a.focusManager.add(b,
1)
    }); var q = CKEDITOR.tools.addFunction(d), r = CKEDITOR.tools.addFunction(function (b, e) {
        var c = a._.elementsPath.idBase, f, e = new CKEDITOR.dom.event(e); f = "rtl" == a.lang.dir; switch (e.getKeystroke()) {
            case f ? 39 : 37: case 9: return (f = CKEDITOR.document.getById(c + (b + 1))) || (f = CKEDITOR.document.getById(c + "0")), f.focus(), !1; case f ? 37 : 39: case CKEDITOR.SHIFT + 9: return (f = CKEDITOR.document.getById(c + (b - 1))) || (f = CKEDITOR.document.getById(c + (a._.elementsPath.list.length - 1))), f.focus(), !1; case 27: return a.focus(), !1; case 13: case 32: return d(b),
!1
        } return !0
    }); a.on("selectionChange", function (b) {
        for (var e = a.editable(), c = b.data.selection.getStartElement(), b = [], f = a._.elementsPath.list = [], d = a._.elementsPath.filters; c; ) {
            var j = 0, g; g = c.data("cke-display-name") ? c.data("cke-display-name") : c.data("cke-real-element-type") ? c.data("cke-real-element-type") : c.getName(); for (var k = 0; k < d.length; k++) { var h = d[k](c, g); if (!1 === h) { j = 1; break } g = h || g } j || (j = f.push(c) - 1, k = a.lang.elementspath.eleTitle.replace(/%1/, g), g = p.output({ id: n + j, label: k, text: g, jsTitle: "javascript:void('" +
g + "')", index: j, keyDownFn: r, clickFn: q
            }), b.unshift(g)); if (c.equals(e)) break; c = c.getParent()
        } i || (i = CKEDITOR.document.getById(l)); e = i; e.setHtml(b.join("") + m); a.fire("elementsPathUpdate", { space: e })
    }); a.on("readOnly", h); a.on("contentDomUnload", h); a.addCommand("elementsPathFocus", o); a.setKeystroke(CKEDITOR.ALT + 122, "elementsPathFocus")
}
})
    })(); (function () {
        function C(c, j, f) {
            function b(b) { if ((d = a[b ? "getFirst" : "getLast"]()) && (!d.is || !d.isBlockBoundary()) && (m = j.root[b ? "getPrevious" : "getNext"](CKEDITOR.dom.walker.invisible(!0))) && (!m.is || !m.isBlockBoundary({ br: 1 }))) c.document.createElement("br")[b ? "insertBefore" : "insertAfter"](d) } for (var i = CKEDITOR.plugins.list.listToArray(j.root, f), e = [], h = 0; h < j.contents.length; h++) {
                var g = j.contents[h]; if ((g = g.getAscendant("li", !0)) && !g.getCustomData("list_item_processed")) e.push(g), CKEDITOR.dom.element.setMarker(f,
g, "list_item_processed", !0)
            } g = null; for (h = 0; h < e.length; h++) g = e[h].getCustomData("listarray_index"), i[g].indent = -1; for (h = g + 1; h < i.length; h++) if (i[h].indent > i[h - 1].indent + 1) { e = i[h - 1].indent + 1 - i[h].indent; for (g = i[h].indent; i[h] && i[h].indent >= g; ) i[h].indent += e, h++; h-- } var a = CKEDITOR.plugins.list.arrayToList(i, f, null, c.config.enterMode, j.root.getAttribute("dir")).listNode, d, m; b(!0); b(); a.replace(j.root)
        } function x(c, j) { this.name = c; this.context = this.type = j } function y(c, j, f, b) {
            for (var i, e; i = c[b ? "getLast" :
"getFirst"](D); ) (e = i.getDirection(1)) !== j.getDirection(1) && i.setAttribute("dir", e), i.remove(), f ? i[b ? "insertBefore" : "insertAfter"](f) : j.append(i, b)
        } function A(c) { var j; (j = function (f) { var b = c[f ? "getPrevious" : "getNext"](q); b && (b.type == CKEDITOR.NODE_ELEMENT && b.is(c.getName())) && (y(c, b, null, !f), c.remove(), c = b) })(); j(1) } function B(c) { return c.type == CKEDITOR.NODE_ELEMENT && (c.getName() in CKEDITOR.dtd.$block || c.getName() in CKEDITOR.dtd.$listItem) && CKEDITOR.dtd[c.getName()]["#"] } function v(c, j, f) {
            c.fire("saveSnapshot");
            f.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS); var b = f.extractContents(); j.trim(!1, !0); var i = j.createBookmark(), e = new CKEDITOR.dom.elementPath(j.startContainer), h = e.block, e = e.lastElement.getAscendant("li", 1) || h, g = new CKEDITOR.dom.elementPath(f.startContainer), a = g.contains(CKEDITOR.dtd.$listItem), g = g.contains(CKEDITOR.dtd.$list); h ? (h = h.getBogus()) && h.remove() : g && (h = g.getPrevious(q)) && u(h) && h.remove(); (h = b.getLast()) && (h.type == CKEDITOR.NODE_ELEMENT && h.is("br")) && h.remove(); (h = j.startContainer.getChild(j.startOffset)) ?
b.insertBefore(h) : j.startContainer.append(b); if (a && (b = w(a))) e.contains(a) ? (y(b, a.getParent(), a), b.remove()) : e.append(b); for (; f.checkStartOfBlock() && f.checkEndOfBlock(); ) g = f.startPath(), b = g.block, b.is("li") && (e = b.getParent(), b.equals(e.getLast(q)) && b.equals(e.getFirst(q)) && (b = e)), f.moveToPosition(b, CKEDITOR.POSITION_BEFORE_START), b.remove(); f = f.clone(); b = c.editable(); f.setEndAt(b, CKEDITOR.POSITION_BEFORE_END); f = new CKEDITOR.dom.walker(f); f.evaluator = function (a) { return q(a) && !u(a) }; (f = f.next()) && (f.type ==
CKEDITOR.NODE_ELEMENT && f.getName() in CKEDITOR.dtd.$list) && A(f); j.moveToBookmark(i); j.select(); c.fire("saveSnapshot")
        } function w(c) { return (c = c.getLast(q)) && c.type == CKEDITOR.NODE_ELEMENT && c.getName() in r ? c : null } var r = { ol: 1, ul: 1 }, E = CKEDITOR.dom.walker.whitespaces(), F = CKEDITOR.dom.walker.bookmark(), q = function (c) { return !(E(c) || F(c)) }, u = CKEDITOR.dom.walker.bogus(); CKEDITOR.plugins.list = { listToArray: function (c, j, f, b, i) {
            if (!r[c.getName()]) return []; b || (b = 0); f || (f = []); for (var e = 0, h = c.getChildCount(); e < h; e++) {
                var g =
c.getChild(e); g.type == CKEDITOR.NODE_ELEMENT && g.getName() in CKEDITOR.dtd.$list && CKEDITOR.plugins.list.listToArray(g, j, f, b + 1); if ("li" == g.$.nodeName.toLowerCase()) {
                    var a = { parent: c, indent: b, element: g, contents: [] }; i ? a.grandparent = i : (a.grandparent = c.getParent(), a.grandparent && "li" == a.grandparent.$.nodeName.toLowerCase() && (a.grandparent = a.grandparent.getParent())); j && CKEDITOR.dom.element.setMarker(j, g, "listarray_index", f.length); f.push(a); for (var d = 0, m = g.getChildCount(), k; d < m; d++) k = g.getChild(d), k.type ==
CKEDITOR.NODE_ELEMENT && r[k.getName()] ? CKEDITOR.plugins.list.listToArray(k, j, f, b + 1, a.grandparent) : a.contents.push(k)
                }
            } return f
        }, arrayToList: function (c, j, f, b, i) {
            f || (f = 0); if (!c || c.length < f + 1) return null; for (var e, h = c[f].parent.getDocument(), g = new CKEDITOR.dom.documentFragment(h), a = null, d = f, m = Math.max(c[f].indent, 0), k = null, n, l, p = b == CKEDITOR.ENTER_P ? "p" : "div"; ; ) {
                var o = c[d]; e = o.grandparent; n = o.element.getDirection(1); if (o.indent == m) {
                    if (!a || c[d].parent.getName() != a.getName()) a = c[d].parent.clone(!1, 1), i &&
a.setAttribute("dir", i), g.append(a); k = a.append(o.element.clone(0, 1)); n != a.getDirection(1) && k.setAttribute("dir", n); for (e = 0; e < o.contents.length; e++) k.append(o.contents[e].clone(1, 1)); d++
                } else if (o.indent == Math.max(m, 0) + 1) l = c[d - 1].element.getDirection(1), d = CKEDITOR.plugins.list.arrayToList(c, null, d, b, l != n ? n : null), !k.getChildCount() && (CKEDITOR.env.ie && !(7 < h.$.documentMode)) && k.append(h.createText(" ")), k.append(d.listNode), d = d.nextIndex; else if (-1 == o.indent && !f && e) {
                    r[e.getName()] ? (k = o.element.clone(!1,
!0), n != e.getDirection(1) && k.setAttribute("dir", n)) : k = new CKEDITOR.dom.documentFragment(h); var a = e.getDirection(1) != n, s = o.element, z = s.getAttribute("class"), u = s.getAttribute("style"), w = k.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && (b != CKEDITOR.ENTER_BR || a || u || z), t, x = o.contents.length; for (e = 0; e < x; e++) {
                        t = o.contents[e]; if (t.type == CKEDITOR.NODE_ELEMENT && t.isBlockBoundary()) {
                            a && !t.getDirection() && t.setAttribute("dir", n); var v = t, y = s.getAttribute("style"); y && v.setAttribute("style", y.replace(/([^;])$/, "$1;") + (v.getAttribute("style") ||
"")); z && t.addClass(z)
                        } else w && (l || (l = h.createElement(p), a && l.setAttribute("dir", n)), u && l.setAttribute("style", u), z && l.setAttribute("class", z), l.append(t.clone(1, 1))); k.append(l || t.clone(1, 1))
                    } k.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && d != c.length - 1 && ((n = k.getLast()) && (n.type == CKEDITOR.NODE_ELEMENT && "_moz" == n.getAttribute("type")) && n.remove(), (!k.getLast(q) || !(n.type == CKEDITOR.NODE_ELEMENT && n.getName() in CKEDITOR.dtd.$block)) && k.append(h.createElement("br"))); n = k.$.nodeName.toLowerCase(); !CKEDITOR.env.ie &&
("div" == n || "p" == n) && k.appendBogus(); g.append(k); a = null; d++
                } else return null; l = null; if (c.length <= d || Math.max(c[d].indent, 0) < m) break
            } if (j) for (c = g.getFirst(); c; ) { if (c.type == CKEDITOR.NODE_ELEMENT && (CKEDITOR.dom.element.clearMarkers(j, c), c.getName() in CKEDITOR.dtd.$listItem && (f = c, h = i = b = void 0, b = f.getDirection()))) { for (i = f.getParent(); i && !(h = i.getDirection()); ) i = i.getParent(); b == h && f.removeAttribute("dir") } c = c.getNextSourceNode() } return { listNode: g, nextIndex: d }
        }
        }; var G = /^h[1-6]$/, D = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);
        x.prototype = { exec: function (c) {
            this.refresh(c, c.elementPath()); var j = c.config, f = c.getSelection(), b = f && f.getRanges(!0); if (this.state == CKEDITOR.TRISTATE_OFF) { var i = c.editable(); if (i.getFirst(q)) { var e = 1 == b.length && b[0]; (j = e && e.getEnclosedNode()) && (j.is && this.type == j.getName()) && this.setState(CKEDITOR.TRISTATE_ON) } else j.enterMode == CKEDITOR.ENTER_BR ? i.appendBogus() : b[0].fixBlock(1, j.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), f.selectRanges(b) } for (var j = f.createBookmarks(!0), i = [], h = {}, b = b.createIterator(),
g = 0; (e = b.getNextRange()) && ++g; ) {
                var a = e.getBoundaryNodes(), d = a.startNode, m = a.endNode; d.type == CKEDITOR.NODE_ELEMENT && "td" == d.getName() && e.setStartAt(a.startNode, CKEDITOR.POSITION_AFTER_START); m.type == CKEDITOR.NODE_ELEMENT && "td" == m.getName() && e.setEndAt(a.endNode, CKEDITOR.POSITION_BEFORE_END); e = e.createIterator(); for (e.forceBrBreak = this.state == CKEDITOR.TRISTATE_OFF; a = e.getNextParagraph(); ) if (!a.getCustomData("list_block")) {
                    CKEDITOR.dom.element.setMarker(h, a, "list_block", 1); for (var k = c.elementPath(a),
d = k.elements, m = 0, k = k.blockLimit, n, l = d.length - 1; 0 <= l && (n = d[l]); l--) if (r[n.getName()] && k.contains(n)) { k.removeCustomData("list_group_object_" + g); (d = n.getCustomData("list_group_object")) ? d.contents.push(a) : (d = { root: n, contents: [a] }, i.push(d), CKEDITOR.dom.element.setMarker(h, n, "list_group_object", d)); m = 1; break } m || (m = k, m.getCustomData("list_group_object_" + g) ? m.getCustomData("list_group_object_" + g).contents.push(a) : (d = { root: m, contents: [a] }, CKEDITOR.dom.element.setMarker(h, m, "list_group_object_" + g, d), i.push(d)))
                }
            } for (n =
[]; 0 < i.length; ) if (d = i.shift(), this.state == CKEDITOR.TRISTATE_OFF) if (r[d.root.getName()]) {
                a = c; b = d; d = h; g = n; m = CKEDITOR.plugins.list.listToArray(b.root, d); k = []; for (e = 0; e < b.contents.length; e++) if (l = b.contents[e], (l = l.getAscendant("li", !0)) && !l.getCustomData("list_item_processed")) k.push(l), CKEDITOR.dom.element.setMarker(d, l, "list_item_processed", !0); for (var l = b.root.getDocument(), p = void 0, o = void 0, e = 0; e < k.length; e++) {
                    var s = k[e].getCustomData("listarray_index"), p = m[s].parent; p.is(this.type) || (o = l.createElement(this.type),
p.copyAttributes(o, { start: 1, type: 1 }), o.removeStyle("list-style-type"), m[s].parent = o)
                } a = CKEDITOR.plugins.list.arrayToList(m, d, null, a.config.enterMode); d = void 0; m = a.listNode.getChildCount(); for (e = 0; e < m && (d = a.listNode.getChild(e)); e++) d.getName() == this.type && g.push(d); a.listNode.replace(b.root)
            } else {
                m = c; a = d; e = n; k = a.contents; b = a.root.getDocument(); g = []; 1 == k.length && k[0].equals(a.root) && (d = b.createElement("div"), k[0].moveChildren && k[0].moveChildren(d), k[0].append(d), k[0] = d); a = a.contents[0].getParent();
                for (l = 0; l < k.length; l++) a = a.getCommonAncestor(k[l].getParent()); p = m.config.useComputedState; m = d = void 0; p = void 0 === p || p; for (l = 0; l < k.length; l++) for (o = k[l]; s = o.getParent(); ) { if (s.equals(a)) { g.push(o); !m && o.getDirection() && (m = 1); o = o.getDirection(p); null !== d && (d = d && d != o ? null : o); break } o = s } if (!(1 > g.length)) {
                    k = g[g.length - 1].getNext(); l = b.createElement(this.type); e.push(l); for (p = e = void 0; g.length; ) e = g.shift(), p = b.createElement("li"), e.is("pre") || G.test(e.getName()) ? e.appendTo(p) : (e.copyAttributes(p), d && e.getDirection() &&
(p.removeStyle("direction"), p.removeAttribute("dir")), e.moveChildren(p), e.remove()), p.appendTo(l); d && m && l.setAttribute("dir", d); k ? l.insertBefore(k) : l.appendTo(a)
                }
            } else this.state == CKEDITOR.TRISTATE_ON && r[d.root.getName()] && C.call(this, c, d, h); for (l = 0; l < n.length; l++) A(n[l]); CKEDITOR.dom.element.clearAllMarkers(h); f.selectBookmarks(j); c.focus()
        }, refresh: function (c, j) {
            var f = j.contains(r, 1), b = j.blockLimit || j.root; f && b.contains(f) ? this.setState(f.is(this.type) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) :
this.setState(CKEDITOR.TRISTATE_OFF)
        }
        }; CKEDITOR.plugins.add("list", { init: function (c) {
            c.blockless || (c.addCommand("numberedlist", new x("numberedlist", "ol")), c.addCommand("bulletedlist", new x("bulletedlist", "ul")), c.ui.addButton && (c.ui.addButton("NumberedList", { label: c.lang.list.numberedlist, command: "numberedlist", directional: !0, toolbar: "list,10" }), c.ui.addButton("BulletedList", { label: c.lang.list.bulletedlist, command: "bulletedlist", directional: !0, toolbar: "list,20" })), c.on("key", function (j) {
                var f = j.data.keyCode;
                if (c.mode == "wysiwyg" && f in { 8: 1, 46: 1 }) {
                    var b = c.getSelection().getRanges()[0], i = b.startPath(); if (b.collapsed) {
                        var i = new CKEDITOR.dom.elementPath(b.startContainer), e = f == 8, h = c.editable(), g = new CKEDITOR.dom.walker(b.clone()); g.evaluator = function (a) { return q(a) && !u(a) }; g.guard = function (a, b) { return !(b && a.type == CKEDITOR.NODE_ELEMENT && a.is("table")) }; f = b.clone(); if (e) {
                            var a, d; if ((a = i.contains(r)) && b.checkBoundaryOfElement(a, CKEDITOR.START) && (a = a.getParent()) && a.is("li") && (a = w(a))) {
                                d = a; a = a.getPrevious(q); f.moveToPosition(a &&
u(a) ? a : d, CKEDITOR.POSITION_BEFORE_START)
                            } else { g.range.setStartAt(h, CKEDITOR.POSITION_AFTER_START); g.range.setEnd(b.startContainer, b.startOffset); if ((a = g.previous()) && a.type == CKEDITOR.NODE_ELEMENT && (a.getName() in r || a.is("li"))) { if (!a.is("li")) { g.range.selectNodeContents(a); g.reset(); g.evaluator = B; a = g.previous() } d = a; f.moveToElementEditEnd(d) } } if (d) { v(c, f, b); j.cancel() } else if ((f = i.contains(r)) && b.checkBoundaryOfElement(f, CKEDITOR.START)) {
                                d = f.getFirst(q); if (b.checkBoundaryOfElement(d, CKEDITOR.START)) {
                                    a =
f.getPrevious(q); if (w(d)) { if (a) { b.moveToElementEditEnd(a); b.select() } } else c.execCommand("outdent"); j.cancel()
                                }
                            }
                        } else if (d = i.contains("li")) { g.range.setEndAt(h, CKEDITOR.POSITION_BEFORE_END); h = (i = d.getLast(q)) && B(i) ? i : d; d = 0; if ((a = g.next()) && a.type == CKEDITOR.NODE_ELEMENT && a.getName() in r && a.equals(i)) { d = 1; a = g.next() } else b.checkBoundaryOfElement(h, CKEDITOR.END) && (d = 1); if (d && a) { b = b.clone(); b.moveToElementEditStart(a); v(c, f, b); j.cancel() } } else {
                            g.range.setEndAt(h, CKEDITOR.POSITION_BEFORE_END); if ((a = g.next()) &&
a.type == CKEDITOR.NODE_ELEMENT && a.is(r)) { a = a.getFirst(q); if (i.block && b.checkStartOfBlock() && b.checkEndOfBlock()) { i.block.remove(); b.moveToElementEditStart(a); b.select() } else if (w(a)) { b.moveToElementEditStart(a); b.select() } else { b = b.clone(); b.moveToElementEditStart(a); v(c, f, b) } j.cancel() }
                        } setTimeout(function () { c.selectionChange(1) })
                    }
                }
            }))
        }
        })
    })(); (function () {
        function p(d, i) { this.name = i; if (this.useIndentClasses = d.config.indentClasses && 0 < d.config.indentClasses.length) { this.classNameRegex = RegExp("(?:^|\\s+)(" + d.config.indentClasses.join("|") + ")(?=$|\\s)"); this.indentClassMap = {}; for (var a = 0; a < d.config.indentClasses.length; a++) this.indentClassMap[d.config.indentClasses[a]] = a + 1 } this.startDisabled = "outdent" == i } function r(d, i) { return "ltr" == (i || d.getComputedStyle("direction")) ? "margin-left" : "margin-right" } function q(d) {
            return d.type == CKEDITOR.NODE_ELEMENT &&
d.is("li")
        } var m = { ol: 1, ul: 1 }, t = CKEDITOR.dom.walker.whitespaces(!0), u = CKEDITOR.dom.walker.bookmark(!1, !0); p.prototype = { context: "p", refresh: function (d, i) {
            var a = i && i.contains(m), f = i.block || i.blockLimit; a ? this.setState(CKEDITOR.TRISTATE_OFF) : !this.useIndentClasses && "indent" == this.name ? this.setState(CKEDITOR.TRISTATE_OFF) : f ? this.useIndentClasses ? (a = f.$.className.match(this.classNameRegex), f = 0, a && (a = a[1], f = this.indentClassMap[a]), "outdent" == this.name && !f || "indent" == this.name && f == d.config.indentClasses.length ?
this.setState(CKEDITOR.TRISTATE_DISABLED) : this.setState(CKEDITOR.TRISTATE_OFF)) : (a = parseInt(f.getStyle(r(f)), 10), isNaN(a) && (a = 0), 0 >= a ? this.setState(CKEDITOR.TRISTATE_DISABLED) : this.setState(CKEDITOR.TRISTATE_OFF)) : this.setState(CKEDITOR.TRISTATE_DISABLED)
        }, exec: function (d) {
            function i(n) {
                for (var h = l.startContainer, b = l.endContainer; h && !h.getParent().equals(n); ) h = h.getParent(); for (; b && !b.getParent().equals(n); ) b = b.getParent(); if (h && b) {
                    for (var c = h, h = [], a = !1; !a; ) c.equals(b) && (a = !0), h.push(c), c = c.getNext();
                    if (!(1 > h.length)) {
                        c = n.getParents(!0); for (b = 0; b < c.length; b++) if (c[b].getName && m[c[b].getName()]) { n = c[b]; break } for (var c = "indent" == e.name ? 1 : -1, b = h[0], h = h[h.length - 1], a = CKEDITOR.plugins.list.listToArray(n, o), k = a[h.getCustomData("listarray_index")].indent, b = b.getCustomData("listarray_index"); b <= h.getCustomData("listarray_index"); b++) if (a[b].indent += c, 0 < c) { var i = a[b].parent; a[b].parent = new CKEDITOR.dom.element(i.getName(), i.getDocument()) } for (b = h.getCustomData("listarray_index") + 1; b < a.length && a[b].indent >
k; b++) a[b].indent += c; h = CKEDITOR.plugins.list.arrayToList(a, o, null, d.config.enterMode, n.getDirection()); if ("outdent" == e.name) { var j; if ((j = n.getParent()) && j.is("li")) for (var c = h.listNode.getChildren(), f = [], g, b = c.count() - 1; 0 <= b; b--) (g = c.getItem(b)) && (g.is && g.is("li")) && f.push(g) } h && h.listNode.replace(n); if (f && f.length) for (b = 0; b < f.length; b++) {
                            for (g = n = f[b]; (g = g.getNext()) && g.is && g.getName() in m; ) CKEDITOR.env.ie && !n.getFirst(function (b) { return t(b) && u(b) }) && n.append(l.document.createText(" ")), n.append(g);
                            n.insertAfter(j)
                        }
                    }
                }
            } function a() { var a = l.createIterator(), e = d.config.enterMode; a.enforceRealBlocks = !0; a.enlargeBr = e != CKEDITOR.ENTER_BR; for (var b; b = a.getNextParagraph(e == CKEDITOR.ENTER_P ? "p" : "div"); ) f(b) } function f(a, g) {
                if (a.getCustomData("indent_processed")) return !1; if (e.useIndentClasses) {
                    var b = a.$.className.match(e.classNameRegex), c = 0; b && (b = b[1], c = e.indentClassMap[b]); "outdent" == e.name ? c-- : c++; if (0 > c) return !1; c = Math.min(c, d.config.indentClasses.length); c = Math.max(c, 0); a.$.className = CKEDITOR.tools.ltrim(a.$.className.replace(e.classNameRegex,
"")); 0 < c && a.addClass(d.config.indentClasses[c - 1])
                } else { b = r(a, g); c = parseInt(a.getStyle(b), 10); isNaN(c) && (c = 0); var f = d.config.indentOffset || 40, c = c + ("indent" == e.name ? 1 : -1) * f; if (0 > c) return !1; c = Math.max(c, 0); c = Math.ceil(c / f) * f; a.setStyle(b, c ? c + (d.config.indentUnit || "px") : ""); "" === a.getAttribute("style") && a.removeAttribute("style") } CKEDITOR.dom.element.setMarker(o, a, "indent_processed", 1); return !0
            } for (var e = this, o = {}, g = d.getSelection(), v = g.createBookmarks(1), l, p = (g && g.getRanges(1)).createIterator(); l = p.getNextRange(); ) {
                for (var j =
l.getCommonAncestor(); j && !(j.type == CKEDITOR.NODE_ELEMENT && m[j.getName()]); ) j = j.getParent(); if (!j) { var k = l.getEnclosedNode(); k && (k.type == CKEDITOR.NODE_ELEMENT && k.getName() in m) && (l.setStartAt(k, CKEDITOR.POSITION_AFTER_START), l.setEndAt(k, CKEDITOR.POSITION_BEFORE_END), j = k) } j && (l.startContainer.type == CKEDITOR.NODE_ELEMENT && l.startContainer.getName() in m) && (k = new CKEDITOR.dom.walker(l), k.evaluator = q, l.startContainer = k.next()); j && (l.endContainer.type == CKEDITOR.NODE_ELEMENT && l.endContainer.getName() in m) &&
(k = new CKEDITOR.dom.walker(l), k.evaluator = q, l.endContainer = k.previous()); if (j) { var k = j.getFirst(q), w = !!k.getNext(q), s = l.startContainer; (!k.equals(s) && !k.contains(s) || !("indent" == e.name || e.useIndentClasses || parseInt(j.getStyle(r(j)), 10)) || !f(j, !w && k.getDirection())) && i(j) } else a()
            } CKEDITOR.dom.element.clearAllMarkers(o); d.forceNextSelectionCheck(); g.selectBookmarks(v)
        }
        }; CKEDITOR.plugins.add("indent", { requires: "list", onLoad: function () { (CKEDITOR.env.ie6Compat || CKEDITOR.env.ie7Compat) && CKEDITOR.addCss(".cke_editable ul,.cke_editable ol{\tmargin-left: 0px;\tpadding-left: 40px;}") },
            init: function (d) {
                d.blockless || (d.addCommand("indent", new p(d, "indent")), d.addCommand("outdent", new p(d, "outdent")), d.ui.addButton && (d.ui.addButton("Indent", { label: d.lang.indent.indent, command: "indent", directional: !0, toolbar: "indent,20" }), d.ui.addButton("Outdent", { label: d.lang.indent.outdent, command: "outdent", directional: !0, toolbar: "indent,10" })), d.on("dirChanged", function (i) {
                    var a = d.createRange(); a.setStartBefore(i.data.node); a.setEndAfter(i.data.node); for (var f = new CKEDITOR.dom.walker(a), e; e = f.next(); ) if (e.type ==
CKEDITOR.NODE_ELEMENT) if (!e.equals(i.data.node) && e.getDirection()) { a.setStartAfter(e); f = new CKEDITOR.dom.walker(a) } else { var o = d.config.indentClasses; if (o) for (var g = i.data.dir == "ltr" ? ["_rtl", ""] : ["", "_rtl"], m = 0; m < o.length; m++) if (e.hasClass(o[m] + g[0])) { e.removeClass(o[m] + g[0]); e.addClass(o[m] + g[1]) } o = e.getStyle("margin-right"); g = e.getStyle("margin-left"); o ? e.setStyle("margin-left", o) : e.removeStyle("margin-left"); g ? e.setStyle("margin-right", g) : e.removeStyle("margin-right") }
                }))
            }
        })
    })(); (function () {
        function m(a, d, b) { b = a.config.forceEnterMode || b; if ("wysiwyg" != a.mode) return !1; d || (d = a.config.enterMode); a.elementPath().isContextFor("p") || (d = CKEDITOR.ENTER_BR, b = 1); a.fire("saveSnapshot"); d == CKEDITOR.ENTER_BR ? n(a, d, null, b) : o(a, d, null, b); a.fire("saveSnapshot"); return !0 } function p(a) { for (var a = a.getSelection().getRanges(!0), d = a.length - 1; 0 < d; d--) a[d].deleteContents(); return a[0] } CKEDITOR.plugins.add("enterkey", { requires: "indent", init: function (a) {
            a.addCommand("enter", { modes: { wysiwyg: 1 }, editorFocus: !1,
                exec: function (a) { m(a) }
            }); a.addCommand("shiftEnter", { modes: { wysiwyg: 1 }, editorFocus: !1, exec: function (a) { "wysiwyg" == a.mode && m(a, a.config.shiftEnterMode, 1) } }); a.setKeystroke([[13, "enter"], [CKEDITOR.SHIFT + 13, "shiftEnter"]])
        }
        }); var s = CKEDITOR.dom.walker.whitespaces(), t = CKEDITOR.dom.walker.bookmark(); CKEDITOR.plugins.enterkey = { enterBlock: function (a, d, b, i) {
            if (b = b || p(a)) {
                var f = b.document, j = b.checkStartOfBlock(), h = b.checkEndOfBlock(), c = a.elementPath(b.startContainer).block; if (j && h) {
                    if (c && (c.is("li") || c.getParent().is("li"))) {
                        a.execCommand("outdent");
                        return
                    } if (c && c.getParent().is("blockquote")) { c.breakParent(c.getParent()); c.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1)) || c.getPrevious().remove(); c.getNext().getFirst(CKEDITOR.dom.walker.invisible(1)) || c.getNext().remove(); b.moveToElementEditStart(c); b.select(); return }
                } else if (c && c.is("pre") && !h) { n(a, d, b, i); return } var c = d == CKEDITOR.ENTER_DIV ? "div" : "p", l = b.splitBlock(c); if (l) {
                    var d = l.previousBlock, a = l.nextBlock, j = l.wasStartOfBlock, h = l.wasEndOfBlock, g; if (a) g = a.getParent(), g.is("li") && (a.breakParent(g),
a.move(a.getNext(), 1)); else if (d && (g = d.getParent()) && g.is("li")) d.breakParent(g), g = d.getNext(), b.moveToElementEditStart(g), d.move(d.getPrevious()); if (!j && !h) {
                        if (a.is("li")) { var e = b.clone(); e.selectNodeContents(a); e = new CKEDITOR.dom.walker(e); e.evaluator = function (a) { return !(t(a) || s(a) || a.type == CKEDITOR.NODE_ELEMENT && a.getName() in CKEDITOR.dtd.$inline && !(a.getName() in CKEDITOR.dtd.$empty)) }; (g = e.next()) && (g.type == CKEDITOR.NODE_ELEMENT && g.is("ul", "ol")) && (CKEDITOR.env.ie ? f.createText(" ") : f.createElement("br")).insertBefore(g) } a &&
b.moveToElementEditStart(a)
                    } else {
                        var k; if (d) { if (d.is("li") || !q.test(d.getName()) && !d.is("pre")) e = d.clone() } else a && (e = a.clone()); e ? i && !e.is("li") && e.renameNode(c) : g && g.is("li") ? e = g : (e = f.createElement(c), d && (k = d.getDirection()) && e.setAttribute("dir", k)); if (f = l.elementPath) { i = 0; for (g = f.elements.length; i < g; i++) { k = f.elements[i]; if (k.equals(f.block) || k.equals(f.blockLimit)) break; CKEDITOR.dtd.$removeEmpty[k.getName()] && (k = k.clone(), e.moveChildren(k), e.append(k)) } } CKEDITOR.env.ie || e.appendBogus(); e.getParent() ||
b.insertNode(e); e.is("li") && e.removeAttribute("value"); if (CKEDITOR.env.ie && j && (!h || !d.getChildCount())) b.moveToElementEditStart(h ? d : e), b.select(); b.moveToElementEditStart(j && !h ? a : e)
                    } b.select(); b.scrollIntoView()
                }
            }
        }, enterBr: function (a, d, b, i) {
            if (b = b || p(a)) {
                var f = b.document, j = b.checkEndOfBlock(), h = new CKEDITOR.dom.elementPath(a.getSelection().getStartElement()), c = h.block, h = c && h.block.getName(); !i && "li" == h ? o(a, d, b, i) : (!i && j && q.test(h) ? (j = c.getDirection()) ? (f = f.createElement("div"), f.setAttribute("dir",
j), f.insertAfter(c), b.setStart(f, 0)) : (f.createElement("br").insertAfter(c), CKEDITOR.env.gecko && f.createText("").insertAfter(c), b.setStartAt(c.getNext(), CKEDITOR.env.ie ? CKEDITOR.POSITION_BEFORE_START : CKEDITOR.POSITION_AFTER_START)) : (c = "pre" == h && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ? f.createText("\r") : f.createElement("br"), b.deleteContents(), b.insertNode(c), CKEDITOR.env.ie ? b.setStartAt(c, CKEDITOR.POSITION_AFTER_END) : (f.createText("﻿").insertAfter(c), j && c.getParent().appendBogus(), c.getNext().$.nodeValue =
"", b.setStartAt(c.getNext(), CKEDITOR.POSITION_AFTER_START))), b.collapse(!0), b.select(), b.scrollIntoView())
            }
        }
        }; var r = CKEDITOR.plugins.enterkey, n = r.enterBr, o = r.enterBlock, q = /^h[1-6]$/
    })(); (function () {
        function j(a, b) { var d = {}, e = [], f = { nbsp: " ", shy: "­", gt: ">", lt: "<", amp: "&", apos: "'", quot: '"' }, a = a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g, function (a, h) { var c = b ? "&" + h + ";" : f[h]; d[c] = b ? f[h] : "&" + h + ";"; e.push(c); return "" }); if (!b && a) { var a = a.split(","), c = document.createElement("div"), g; c.innerHTML = "&" + a.join(";&") + ";"; g = c.innerHTML; c = null; for (c = 0; c < g.length; c++) { var i = g.charAt(c); d[i] = "&" + a[c] + ";"; e.push(i) } } d.regex = e.join(b ? "|" : ""); return d } CKEDITOR.plugins.add("entities", { afterInit: function (a) {
            var b =
a.config; if (a = (a = a.dataProcessor) && a.htmlFilter) {
                var d = []; !1 !== b.basicEntities && d.push("nbsp,gt,lt,amp"); b.entities && (d.length && d.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
b.entities_latin && d.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"), b.entities_greek && d.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
b.entities_additional && d.push(b.entities_additional)); var e = j(d.join(",")), f = e.regex ? "[" + e.regex + "]" : "a^"; delete e.regex; b.entities && b.entities_processNumerical && (f = "[^ -~]|" + f); var f = RegExp(f, "g"), c = function (a) { return b.entities_processNumerical == "force" || !e[a] ? "&#" + a.charCodeAt(0) + ";" : e[a] }, g = j("nbsp,gt,lt,amp,shy", !0), i = RegExp(g.regex, "g"), k = function (a) { return g[a] }; a.addRules({ text: function (a) { return a.replace(i, k).replace(f, c) } })
            }
        }
        })
    })(); CKEDITOR.config.basicEntities = !0;
    CKEDITOR.config.entities = !0; CKEDITOR.config.entities_latin = !0; CKEDITOR.config.entities_greek = !0; CKEDITOR.config.entities_additional = "#39"; CKEDITOR.plugins.add("popup");
    CKEDITOR.tools.extend(CKEDITOR.editor.prototype, { popup: function (e, a, b, d) {
        a = a || "80%"; b = b || "70%"; "string" == typeof a && (1 < a.length && "%" == a.substr(a.length - 1, 1)) && (a = parseInt(window.screen.width * parseInt(a, 10) / 100, 10)); "string" == typeof b && (1 < b.length && "%" == b.substr(b.length - 1, 1)) && (b = parseInt(window.screen.height * parseInt(b, 10) / 100, 10)); 640 > a && (a = 640); 420 > b && (b = 420); var f = parseInt((window.screen.height - b) / 2, 10), g = parseInt((window.screen.width - a) / 2, 10), d = (d || "location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes") + ",width=" +
a + ",height=" + b + ",top=" + f + ",left=" + g, c = window.open("", null, d, !0); if (!c) return !1; try { -1 == navigator.userAgent.toLowerCase().indexOf(" chrome/") && (c.moveTo(g, f), c.resizeTo(a, b)), c.focus(), c.location.href = e } catch (h) { window.open(e, null, d, !0) } return !0
    }
    }); (function () {
        function g(a, c) { var d = []; if (c) for (var b in c) d.push(b + "=" + encodeURIComponent(c[b])); else return a; return a + (-1 != a.indexOf("?") ? "&" : "?") + d.join("&") } function i(a) { a += ""; return a.charAt(0).toUpperCase() + a.substr(1) } function k() {
            var a = this.getDialog(), c = a.getParentEditor(); c._.filebrowserSe = this; var d = c.config["filebrowser" + i(a.getName()) + "WindowWidth"] || c.config.filebrowserWindowWidth || "80%", a = c.config["filebrowser" + i(a.getName()) + "WindowHeight"] || c.config.filebrowserWindowHeight || "70%",
b = this.filebrowser.params || {}; b.CKEditor = c.name; b.CKEditorFuncNum = c._.filebrowserFn; b.langCode || (b.langCode = c.langCode); b = g(this.filebrowser.url, b); c.popup(b, d, a, c.config.filebrowserWindowFeatures || c.config.fileBrowserWindowFeatures)
        } function l() { var a = this.getDialog(); a.getParentEditor()._.filebrowserSe = this; return !a.getContentElement(this["for"][0], this["for"][1]).getInputElement().$.value || !a.getContentElement(this["for"][0], this["for"][1]).getAction() ? !1 : !0 } function m(a, c, d) {
            var b = d.params || {};
            b.CKEditor = a.name; b.CKEditorFuncNum = a._.filebrowserFn; b.langCode || (b.langCode = a.langCode); c.action = g(d.url, b); c.filebrowser = d
        } function j(a, c, d, b) {
            var e, g; for (g in b) if (e = b[g], ("hbox" == e.type || "vbox" == e.type || "fieldset" == e.type) && j(a, c, d, e.children), e.filebrowser) if ("string" == typeof e.filebrowser && (e.filebrowser = { action: "fileButton" == e.type ? "QuickUpload" : "Browse", target: e.filebrowser }), "Browse" == e.filebrowser.action) {
                var f = e.filebrowser.url; void 0 === f && (f = a.config["filebrowser" + i(c) + "BrowseUrl"], void 0 ===
f && (f = a.config.filebrowserBrowseUrl)); f && (e.onClick = k, e.filebrowser.url = f, e.hidden = !1)
            } else if ("QuickUpload" == e.filebrowser.action && e["for"] && (f = e.filebrowser.url, void 0 === f && (f = a.config["filebrowser" + i(c) + "UploadUrl"], void 0 === f && (f = a.config.filebrowserUploadUrl)), f)) { var h = e.onClick; e.onClick = function (a) { var b = a.sender; return h && h.call(b, a) === false ? false : l.call(b, a) }; e.filebrowser.url = f; e.hidden = !1; m(a, d.getContents(e["for"][0]).get(e["for"][1]), e.filebrowser) }
        } function h(a, c, d) {
            if (-1 !== d.indexOf(";")) {
                for (var d =
d.split(";"), b = 0; b < d.length; b++) if (h(a, c, d[b])) return !0; return !1
            } return (a = a.getContents(c).get(d).filebrowser) && a.url
        } function n(a, c) {
            var d = this._.filebrowserSe.getDialog(), b = this._.filebrowserSe["for"], e = this._.filebrowserSe.filebrowser.onSelect; b && d.getContentElement(b[0], b[1]).reset(); if (!("function" == typeof c && !1 === c.call(this._.filebrowserSe)) && !(e && !1 === e.call(this._.filebrowserSe, a, c)) && ("string" == typeof c && c && alert(c), a && (b = this._.filebrowserSe, d = b.getDialog(), b = b.filebrowser.target || null))) if (b =
b.split(":"), e = d.getContentElement(b[0], b[1])) e.setValue(a), d.selectPage(b[0])
        } CKEDITOR.plugins.add("filebrowser", { requires: "popup", init: function (a) { a._.filebrowserFn = CKEDITOR.tools.addFunction(n, a); a.on("destroy", function () { CKEDITOR.tools.removeFunction(this._.filebrowserFn) }) } }); CKEDITOR.on("dialogDefinition", function (a) { var c = a.data.definition, d, b; for (b in c.contents) if (d = c.contents[b]) j(a.editor, a.data.name, c, d.elements), d.hidden && d.filebrowser && (d.hidden = !h(c, d.id, d.filebrowser)) })
    })(); (function () {
        function t(a) { var e = "left" == a ? "pageXOffset" : "pageYOffset"; return e in g.$ ? g.$[e] : CKEDITOR.document.$.documentElement["left" == a ? "scrollLeft" : "scrollTop"] } function n(a) {
            var e, f = a.config, n = f.floatSpaceDockedOffsetX || 0, m = f.floatSpaceDockedOffsetY || 0, u = f.floatSpacePinnedOffsetX || 0, o = f.floatSpacePinnedOffsetY || 0, h = function (d) {
                function f(a, b, d) { c.setStyle(b, r(d)); c.setStyle("position", a) } function j(a) {
                    var d = l.getDocumentPosition(); switch (a) {
                        case "top": f("absolute", "top", d.y - k - m); break; case "pin": f("fixed",
"top", o); break; case "bottom": f("absolute", "top", d.y + (b.height || b.bottom - b.top) + m)
                    } e = a; p = 1
                } "focus" == d.name && c.show(); var p = "scroll" != d.name; p && (c.removeStyle("left"), c.removeStyle("right")); var l = a.editable(), i = c.getClientRect(), b = l.getClientRect(), k = i.height, q = t("left"); if (e) {
                    if ("top" == e && i.top < o ? j("pin") : "pin" == e ? b.top > m + k ? j("top") : b.bottom - i.bottom < k && j("bottom") : "bottom" == e && (b.top > m + k ? j("top") : b.bottom > 2 * k + o && j("pin")), p) {
                        var d = g.getViewPaneSize(), s = d.width / 2, i = 0 < b.left && b.right < d.width && b.width >
i.width ? "rtl" == a.config.contentsLangDirection ? "right" : "left" : s - b.left > b.right - s ? "left" : "right"; c.setStyle(i, r(("pin" == e ? u : n) + ("left" == i ? 0 < b.left ? b.left : 0 : b.right < d.width ? d.width - b.right : 0) + q))
                    }
                } else e = "pin", j("pin"), h(d)
            }, f = CKEDITOR.document.getBody(), q = { id: a.id, name: a.name, langDir: a.lang.dir, langCode: a.langCode }, l = a.fire("uiSpace", { space: "top", html: "" }).html; if (l) {
                var c = f.append(CKEDITOR.dom.element.createFromHtml(v.output(CKEDITOR.tools.extend({ topId: a.ui.spaceId("top"), content: l, style: "display:none;z-index:" +
(a.config.baseFloatZIndex - 1)
                }, q)))); c.unselectable(); c.on("mousedown", function (a) { a = a.data; a.getTarget().hasAscendant("a", 1) || a.preventDefault() }); a.on("focus", function (a) { h(a); g.on("scroll", h); g.on("resize", h) }); a.on("blur", function () { c.hide(); g.removeListener("scroll", h); g.removeListener("resize", h) }); a.on("destroy", function () { g.removeListener("scroll", h); g.removeListener("resize", h); c.clearCustomData(); c.remove() }); a.focusManager.hasFocus && c.show(); a.focusManager.add(c, 1)
            }
        } var v = CKEDITOR.addTemplate("floatcontainer",
'<div id="cke_{name}" class="cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} ' + CKEDITOR.env.cssClass + '" dir="{langDir}" title="' + (CKEDITOR.env.gecko ? " " : "") + '" lang="{langCode}" role="presentation" style="{style}"><div class="cke_inner"><div id="{topId}" class="cke_top" role="presentation">{content}</div></div></div>'); CKEDITOR.plugins.add("floatingspace", { init: function (a) { a.on("contentDom", function () { n(a) }) } }); var g = CKEDITOR.document.getWindow(), r = CKEDITOR.tools.cssLength
    })(); CKEDITOR.plugins.add("listblock", { requires: "panel", onLoad: function () {
        var e = CKEDITOR.addTemplate("panel-list", '<ul role="presentation" class="cke_panel_list">{items}</ul>'), f = CKEDITOR.addTemplate("panel-list-item", '<li id="{id}" class="cke_panel_listItem" role=presentation><a id="{id}_option" _cke_focus=1 hidefocus=true title="{title}" href="javascript:void(\'{val}\')"  {onclick}="CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role="option">{text}</a></li>'), g = CKEDITOR.addTemplate("panel-list-group",
'<h1 id="{id}" class="cke_panel_grouptitle" role="presentation" >{label}</h1>'); CKEDITOR.ui.panel.prototype.addListBlock = function (a, b) { return this.addBlock(a, new CKEDITOR.ui.listBlock(this.getHolderElement(), b)) }; CKEDITOR.ui.listBlock = CKEDITOR.tools.createClass({ base: CKEDITOR.ui.panel.block, $: function (a, b) {
    var b = b || {}, c = b.attributes || (b.attributes = {}); (this.multiSelect = !!b.multiSelect) && (c["aria-multiselectable"] = !0); !c.role && (c.role = "listbox"); this.base.apply(this, arguments); c = this.keys; c[40] = "next";
    c[9] = "next"; c[38] = "prev"; c[CKEDITOR.SHIFT + 9] = "prev"; c[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (c[13] = "mouseup"); this._.pendingHtml = []; this._.pendingList = []; this._.items = {}; this._.groups = {}
}, _: { close: function () { if (this._.started) { var a = e.output({ items: this._.pendingList.join("") }); this._.pendingList = []; this._.pendingHtml.push(a); delete this._.started } }, getClick: function () {
    this._.click || (this._.click = CKEDITOR.tools.addFunction(function (a) {
        var b = this.toggle(a); if (this.onClick) this.onClick(a,
b)
    }, this)); return this._.click
}
}, proto: { add: function (a, b, c) { var d = CKEDITOR.tools.getNextId(); this._.started || (this._.started = 1, this._.size = this._.size || 0); this._.items[a] = d; a = { id: d, val: a, onclick: CKEDITOR.env.ie ? 'onclick="return false;" onmouseup' : "onclick", clickFn: this._.getClick(), title: c || a, text: b || a }; this._.pendingList.push(f.output(a)) }, startGroup: function (a) { this._.close(); var b = CKEDITOR.tools.getNextId(); this._.groups[a] = b; this._.pendingHtml.push(g.output({ id: b, label: a })) }, commit: function () {
    this._.close();
    this.element.appendHtml(this._.pendingHtml.join("")); delete this._.size; this._.pendingHtml = []
}, toggle: function (a) { var b = this.isMarked(a); b ? this.unmark(a) : this.mark(a); return !b }, hideGroup: function (a) { var b = (a = this.element.getDocument().getById(this._.groups[a])) && a.getNext(); a && (a.setStyle("display", "none"), b && "ul" == b.getName() && b.setStyle("display", "none")) }, hideItem: function (a) { this.element.getDocument().getById(this._.items[a]).setStyle("display", "none") }, showAll: function () {
    var a = this._.items, b =
this._.groups, c = this.element.getDocument(), d; for (d in a) c.getById(a[d]).setStyle("display", ""); for (var e in b) a = c.getById(b[e]), d = a.getNext(), a.setStyle("display", ""), d && "ul" == d.getName() && d.setStyle("display", "")
}, mark: function (a) { this.multiSelect || this.unmarkAll(); var a = this._.items[a], b = this.element.getDocument().getById(a); b.addClass("cke_selected"); this.element.getDocument().getById(a + "_option").setAttribute("aria-selected", !0); this.onMark && this.onMark(b) }, unmark: function (a) {
    var b = this.element.getDocument(),
a = this._.items[a], c = b.getById(a); c.removeClass("cke_selected"); b.getById(a + "_option").removeAttribute("aria-selected"); this.onUnmark && this.onUnmark(c)
}, unmarkAll: function () { var a = this._.items, b = this.element.getDocument(), c; for (c in a) { var d = a[c]; b.getById(d).removeClass("cke_selected"); b.getById(d + "_option").removeAttribute("aria-selected") } this.onUnmark && this.onUnmark() }, isMarked: function (a) { return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected") }, focus: function (a) {
    this._.focusIndex =
-1; if (a) { for (var b = this.element.getDocument().getById(this._.items[a]).getFirst(), a = this.element.getElementsByTag("a"), c, d = -1; c = a.getItem(++d); ) if (c.equals(b)) { this._.focusIndex = d; break } setTimeout(function () { b.focus() }, 0) }
}
}
})
    }
    }); CKEDITOR.plugins.add("richcombo", { requires: "floatpanel,listblock,button", beforeInit: function (b) { b.ui.addHandler(CKEDITOR.UI_RICHCOMBO, CKEDITOR.ui.richCombo.handler) } });
    (function () {
        var b = '<span id="{id}" class="cke_combo cke_combo__{name} {cls}" role="presentation"><span id="{id}_label" class="cke_combo_label">{label}</span><a class="cke_combo_button" hidefocus=true title="{title}" tabindex="-1"' + (CKEDITOR.env.gecko && 10900 <= CKEDITOR.env.version && !CKEDITOR.env.hc ? "" : '" href="javascript:void(\'{titleJs}\')"') + ' hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="true"'; if (CKEDITOR.env.opera || CKEDITOR.env.gecko && CKEDITOR.env.mac) b += ' onkeypress="return false;"';
        CKEDITOR.env.gecko && (b += ' onblur="this.style.cssText = this.style.cssText;"'); var b = b + (' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event,this);" onmousedown="return CKEDITOR.tools.callFunction({mousedownFn},event);"  onfocus="return CKEDITOR.tools.callFunction({focusFn},event);" ' + (CKEDITOR.env.ie ? 'onclick="return false;" onmouseup' : "onclick") + '="CKEDITOR.tools.callFunction({clickFn},this);return false;"><span id="{id}_text" class="cke_combo_text cke_combo_inlinelabel">{label}</span><span class="cke_combo_open"><span class="cke_combo_arrow">' +
(CKEDITOR.env.hc ? "&#9660;" : CKEDITOR.env.air ? "&nbsp;" : "") + "</span></span></a></span>"), h = CKEDITOR.addTemplate("combo", b); CKEDITOR.UI_RICHCOMBO = "richcombo"; CKEDITOR.ui.richCombo = CKEDITOR.tools.createClass({ $: function (a) {
    CKEDITOR.tools.extend(this, a, { canGroup: !1, title: a.label, modes: { wysiwyg: 1 }, editorFocus: 1 }); a = this.panel || {}; delete this.panel; this.id = CKEDITOR.tools.getNextNumber(); this.document = a.parent && a.parent.getDocument() || CKEDITOR.document; a.className = "cke_combopanel"; a.block = { multiSelect: a.multiSelect,
        attributes: a.attributes
    }; a.toolbarRelated = !0; this._ = { panelDefinition: a, items: {} }
}, proto: { renderHtml: function (a) { var d = []; this.render(a, d); return d.join("") }, render: function (a, d) {
    function j() { var c = this.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED; this.setState(a.readOnly && !this.readOnly ? CKEDITOR.TRISTATE_DISABLED : c); this.setValue("") } var b = CKEDITOR.env, g = "cke_" + this.id, e = CKEDITOR.tools.addFunction(function (d) { i && (a.unlockSelection(1), i = 0); c.execute(d) }, this), f = this, c = { id: g, combo: this,
        focus: function () { CKEDITOR.document.getById(g).getChild(1).focus() }, execute: function (c) { var d = f._; if (d.state != CKEDITOR.TRISTATE_DISABLED) if (f.createPanel(a), d.on) d.panel.hide(); else { f.commit(); var b = f.getValue(); b ? d.list.mark(b) : d.list.unmarkAll(); d.panel.showBlock(f.id, new CKEDITOR.dom.element(c), 4) } }, clickFn: e
    }; a.on("mode", j, this); !this.readOnly && a.on("readOnly", j, this); var k = CKEDITOR.tools.addFunction(function (a, d) {
        var a = new CKEDITOR.dom.event(a), b = a.getKeystroke(); switch (b) {
            case 13: case 32: case 40: CKEDITOR.tools.callFunction(e,
d); break; default: c.onkey(c, b)
        } a.preventDefault()
    }), l = CKEDITOR.tools.addFunction(function () { c.onfocus && c.onfocus() }), i = 0, m = CKEDITOR.tools.addFunction(function () { if (CKEDITOR.env.opera) { var c = a.editable(); c.isInline() && c.hasFocus && (a.lockSelection(), i = 1) } }); c.keyDownFn = k; b = { id: g, name: this.name || this.command, label: this.label, title: this.title, cls: this.className || "", titleJs: b.gecko && 10900 <= b.version && !b.hc ? "" : (this.title || "").replace("'", ""), keydownFn: k, mousedownFn: m, focusFn: l, clickFn: e }; h.output(b, d);
    if (this.onRender) this.onRender(); return c
}, createPanel: function (a) {
    if (!this._.panel) {
        var d = this._.panelDefinition, b = this._.panelDefinition.block, h = d.parent || CKEDITOR.document.getBody(), g = "cke_combopanel__" + this.name, e = new CKEDITOR.ui.floatPanel(a, h, d), f = e.addListBlock(this.id, b), c = this; e.onShow = function () { this.element.addClass(g); c.setState(CKEDITOR.TRISTATE_ON); f.focus(!f.multiSelect && c.getValue()); c._.on = 1; c.editorFocus && a.focus(); if (c.onOpen) c.onOpen() }; e.onHide = function (d) {
            this.element.removeClass(g);
            c.setState(c.modes && c.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); c._.on = 0; if (!d && c.onClose) c.onClose()
        }; e.onEscape = function () { e.hide(1) }; f.onClick = function (a, d) { c.onClick && c.onClick.call(c, a, d); e.hide() }; this._.panel = e; this._.list = f; e.getBlock(this.id).onHide = function () { c._.on = 0; c.setState(CKEDITOR.TRISTATE_OFF) }; this.init && this.init()
    }
}, setValue: function (a, d) {
    this._.value = a; var b = this.document.getById("cke_" + this.id + "_text"); b && (!a && !d ? (d = this.label, b.addClass("cke_combo_inlinelabel")) :
b.removeClass("cke_combo_inlinelabel"), b.setText("undefined" != typeof d ? d : a))
}, getValue: function () { return this._.value || "" }, unmarkAll: function () { this._.list.unmarkAll() }, mark: function (a) { this._.list.mark(a) }, hideItem: function (a) { this._.list.hideItem(a) }, hideGroup: function (a) { this._.list.hideGroup(a) }, showAll: function () { this._.list.showAll() }, add: function (a, d, b) { this._.items[a] = b || a; this._.list.add(a, d, b) }, startGroup: function (a) { this._.list.startGroup(a) }, commit: function () {
    this._.committed || (this._.list.commit(),
this._.committed = 1, CKEDITOR.ui.fire("ready", this)); this._.committed = 1
}, setState: function (a) { this._.state != a && (this.document.getById("cke_" + this.id).setState(a, "cke_combo"), this._.state = a) }, enable: function () { this._.state == CKEDITOR.TRISTATE_DISABLED && this.setState(this._.lastState) }, disable: function () { this._.state != CKEDITOR.TRISTATE_DISABLED && (this._.lastState = this._.state, this.setState(CKEDITOR.TRISTATE_DISABLED)) }
}, statics: { handler: { create: function (a) { return new CKEDITOR.ui.richCombo(a) } } }
}); CKEDITOR.ui.prototype.addRichCombo =
function (a, b) { this.add(a, CKEDITOR.UI_RICHCOMBO, b) }
    })(); CKEDITOR.plugins.add("format", { requires: "richcombo", init: function (a) {
        if (!a.blockless) {
            for (var g = a.config, c = a.lang.format, j = g.format_tags.split(";"), d = {}, h = 0; h < j.length; h++) { var i = j[h]; d[i] = new CKEDITOR.style(g["format_" + i]); d[i]._.enterMode = a.config.enterMode } a.ui.addRichCombo("Format", { label: c.label, title: c.panelTitle, toolbar: "styles,20", panel: { css: [CKEDITOR.skin.getPath("editor")].concat(g.contentsCss), multiSelect: !1, attributes: { "aria-label": c.panelTitle} }, init: function () {
                this.startGroup(c.panelTitle);
                for (var a in d) { var e = c["tag_" + a]; this.add(a, d[a].buildPreview(e), e) }
            }, onClick: function (b) { a.focus(); a.fire("saveSnapshot"); var b = d[b], e = a.elementPath(); a[b.checkActive(e) ? "removeStyle" : "applyStyle"](b); setTimeout(function () { a.fire("saveSnapshot") }, 0) }, onRender: function () {
                a.on("selectionChange", function (b) { var e = this.getValue(), b = b.data.path, c = !a.readOnly && b.isContextFor("p"); this[c ? "enable" : "disable"](); if (c) { for (var f in d) if (d[f].checkActive(b)) { f != e && this.setValue(f, a.lang.format["tag_" + f]); return } this.setValue("") } },
this)
            }
            })
        }
    }
    }); CKEDITOR.config.format_tags = "p;h1;h2;h3;h4;h5;h6;pre;address;div"; CKEDITOR.config.format_p = { element: "p" }; CKEDITOR.config.format_div = { element: "div" }; CKEDITOR.config.format_pre = { element: "pre" }; CKEDITOR.config.format_address = { element: "address" }; CKEDITOR.config.format_h1 = { element: "h1" }; CKEDITOR.config.format_h2 = { element: "h2" }; CKEDITOR.config.format_h3 = { element: "h3" }; CKEDITOR.config.format_h4 = { element: "h4" }; CKEDITOR.config.format_h5 = { element: "h5" }; CKEDITOR.config.format_h6 = { element: "h6" }; CKEDITOR.plugins.add("htmlwriter", { init: function (b) { var a = new CKEDITOR.htmlWriter; a.forceSimpleAmpersand = b.config.forceSimpleAmpersand; a.indentationChars = b.config.dataIndentationChars || "\t"; b.dataProcessor.writer = a } });
    CKEDITOR.htmlWriter = CKEDITOR.tools.createClass({ base: CKEDITOR.htmlParser.basicWriter, $: function () {
        this.base(); this.indentationChars = "\t"; this.selfClosingEnd = " />"; this.lineBreakChars = "\n"; this.sortAttributes = 1; this._.indent = 0; this._.indentation = ""; this._.inPre = 0; this._.rules = {}; var b = CKEDITOR.dtd, a; for (a in CKEDITOR.tools.extend({}, b.$nonBodyContent, b.$block, b.$listItem, b.$tableContent)) this.setRules(a, { indent: !b[a]["#"], breakBeforeOpen: 1, breakBeforeClose: !b[a]["#"], breakAfterClose: 1, needsSpace: a in
b.$block && !(a in { li: 1, dt: 1, dd: 1 })
        }); this.setRules("br", { breakAfterOpen: 1 }); this.setRules("title", { indent: 0, breakAfterOpen: 0 }); this.setRules("style", { indent: 0, breakBeforeClose: 1 }); this.setRules("pre", { breakAfterOpen: 1, indent: 0 })
    }, proto: { openTag: function (b) { var a = this._.rules[b]; this._.afterCloser && (a && a.needsSpace && this._.needsSpace) && this._.output.push("\n"); this._.indent ? this.indentation() : a && a.breakBeforeOpen && (this.lineBreak(), this.indentation()); this._.output.push("<", b); this._.afterCloser = 0 },
        openTagClose: function (b, a) { var c = this._.rules[b]; a ? (this._.output.push(this.selfClosingEnd), c && c.breakAfterClose && (this._.needsSpace = c.needsSpace)) : (this._.output.push(">"), c && c.indent && (this._.indentation += this.indentationChars)); c && c.breakAfterOpen && this.lineBreak(); "pre" == b && (this._.inPre = 1) }, attribute: function (b, a) { "string" == typeof a && (this.forceSimpleAmpersand && (a = a.replace(/&amp;/g, "&")), a = CKEDITOR.tools.htmlEncodeAttr(a)); this._.output.push(" ", b, '="', a, '"') }, closeTag: function (b) {
            var a = this._.rules[b];
            a && a.indent && (this._.indentation = this._.indentation.substr(this.indentationChars.length)); this._.indent ? this.indentation() : a && a.breakBeforeClose && (this.lineBreak(), this.indentation()); this._.output.push("</", b, ">"); "pre" == b && (this._.inPre = 0); a && a.breakAfterClose && (this.lineBreak(), this._.needsSpace = a.needsSpace); this._.afterCloser = 1
        }, text: function (b) { this._.indent && (this.indentation(), !this._.inPre && (b = CKEDITOR.tools.ltrim(b))); this._.output.push(b) }, comment: function (b) {
            this._.indent && this.indentation();
            this._.output.push("<\!--", b, "--\>")
        }, lineBreak: function () { !this._.inPre && 0 < this._.output.length && this._.output.push(this.lineBreakChars); this._.indent = 1 }, indentation: function () { !this._.inPre && this._.indentation && this._.output.push(this._.indentation); this._.indent = 0 }, reset: function () { this._.output = []; this._.indent = 0; this._.indentation = ""; this._.afterCloser = 0; this._.inPre = 0 }, setRules: function (b, a) { var c = this._.rules[b]; c ? CKEDITOR.tools.extend(c, a, !0) : this._.rules[b] = a }
    }
    }); (function () { var b = { canUndo: !1, exec: function (a) { var b = a.document.createElement("hr"); a.insertElement(b) } }; CKEDITOR.plugins.add("horizontalrule", { init: function (a) { a.blockless || (a.addCommand("horizontalrule", b), a.ui.addButton && a.ui.addButton("HorizontalRule", { label: a.lang.horizontalrule.toolbar, command: "horizontalrule", toolbar: "insert,40" })) } }) })(); (function () {
        function n(a) {
            var c = this.editor, d = a.document, b = d.body; (a = d.getElementById("cke_actscrpt")) && a.parentNode.removeChild(a); (a = d.getElementById("cke_shimscrpt")) && a.parentNode.removeChild(a); CKEDITOR.env.gecko && (b.contentEditable = !1, 2E4 > CKEDITOR.env.version && (b.innerHTML = b.innerHTML.replace(/^.*<\!-- cke-content-start --\>/, ""), setTimeout(function () { var a = new CKEDITOR.dom.range(new CKEDITOR.dom.document(d)); a.setStart(new CKEDITOR.dom.node(b), 0); c.getSelection().selectRanges([a]) }, 0))); b.contentEditable =
!0; CKEDITOR.env.ie && (b.hideFocus = !0, b.disabled = !0, b.removeAttribute("disabled")); delete this._.isLoadingData; this.$ = b; d = new CKEDITOR.dom.document(d); this.setup(); CKEDITOR.env.ie && (d.getDocumentElement().addClass(d.$.compatMode), c.config.enterMode != CKEDITOR.ENTER_P && d.on("selectionchange", function () {
    var a = d.getBody(), b = c.getSelection(), e = b && b.getRanges()[0]; e && (a.getHtml().match(/^<p>&nbsp;<\/p>$/i) && e.startContainer.equals(a)) && setTimeout(function () {
        e = c.getSelection().getRanges()[0]; if (!e.startContainer.equals("body")) {
            a.getFirst().remove(1);
            e.moveToElementEditEnd(a); e.select()
        }
    }, 0)
})); CKEDITOR.env.gecko && CKEDITOR.tools.setTimeout(o, 0, this, c); try { c.document.$.execCommand("2D-position", !1, !0) } catch (e) { } try { c.document.$.execCommand("enableInlineTableEditing", !1, !c.config.disableNativeTableHandles) } catch (f) { } if (c.config.disableObjectResizing) try { this.getDocument().$.execCommand("enableObjectResizing", !1, !1) } catch (g) { this.attachListener(this, CKEDITOR.env.ie ? "resizestart" : "resize", function (a) { a.data.preventDefault() }) } (CKEDITOR.env.gecko ||
CKEDITOR.env.ie && "CSS1Compat" == c.document.$.compatMode) && this.attachListener(this, "keydown", function (a) { var b = a.data.getKeystroke(); if (b == 33 || b == 34) if (CKEDITOR.env.ie) setTimeout(function () { c.getSelection().scrollIntoView() }, 0); else if (c.window.$.innerHeight > this.$.offsetHeight) { var d = c.createRange(); d[b == 33 ? "moveToElementEditStart" : "moveToElementEditEnd"](this); d.select(); a.data.preventDefault() } }); CKEDITOR.env.ie && this.attachListener(d, "blur", function () { try { d.$.selection.empty() } catch (a) { } }); c.document.getElementsByTag("title").getItem(0).data("cke-title",
c.document.$.title); CKEDITOR.env.ie && (c.document.$.title = this._.docTitle); CKEDITOR.tools.setTimeout(function () { c.fire("contentDom"); if (this._.isPendingFocus) { c.focus(); this._.isPendingFocus = false } setTimeout(function () { c.fire("dataReady") }, 0); CKEDITOR.env.ie && setTimeout(function () { if (c.document) { var a = c.document.$.body; a.runtimeStyle.marginBottom = "0px"; a.runtimeStyle.marginBottom = "" } }, 1E3) }, 0, this)
        } function p(a) { a.checkDirty() || setTimeout(function () { a.resetDirty() }, 0) } function o(a) {
            if (!a.readOnly) {
                var c =
a.window, d = a.document, b = d.getBody(), e = b.getFirst(), f = b.getChildren().count(); if (!f || 1 == f && e.type == CKEDITOR.NODE_ELEMENT && e.hasAttribute("_moz_editor_bogus_node")) {
                    p(a); var e = CKEDITOR.document, g = e.getDocumentElement(), h = g.$.scrollTop, i = g.$.scrollLeft, j = d.$.createEvent("KeyEvents"); j.initKeyEvent("keypress", !0, !0, c.$, !1, !1, !1, !1, 0, 32); d.$.dispatchEvent(j); (h != g.$.scrollTop || i != g.$.scrollLeft) && e.getWindow().$.scrollTo(i, h); f && b.getFirst().remove(); d.getBody().appendBogus(); a = a.createRange(); a.setStartAt(b,
CKEDITOR.POSITION_AFTER_START); a.select()
                }
            }
        } function q() {
            var a = []; if (8 <= CKEDITOR.document.$.documentMode) { a.push("html.CSS1Compat [contenteditable=false]{min-height:0 !important}"); var c = [], d; for (d in CKEDITOR.dtd.$removeEmpty) c.push("html.CSS1Compat " + d + "[contenteditable=false]"); a.push(c.join(",") + "{display:inline-block}") } else CKEDITOR.env.gecko && (a.push("html{height:100% !important}"), a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")); a.push("html{cursor:text;*cursor:auto}");
            a.push("img,input,textarea{cursor:default}"); return a.join("\n")
        } CKEDITOR.plugins.add("wysiwygarea", { init: function (a) {
            a.addMode("wysiwyg", function (c) {
                function d(d) { d && d.removeListener(); a.editable(new k(a, b.$.contentWindow.document.body)); a.setData(a.getData(1), c) } var b = CKEDITOR.document.createElement("iframe"); b.setStyles({ width: "100%", height: "100%" }); b.addClass("cke_wysiwyg_frame cke_reset"); var e = a.ui.space("contents"); e.append(b); var f = "document.open();" + (l ? 'document.domain="' + document.domain +
'";' : "") + "document.close();", f = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie ? "javascript:void(function(){" + encodeURIComponent(f) + "}())" : "", g = CKEDITOR.env.ie || CKEDITOR.env.gecko; if (g) b.on("load", d); var h = [a.lang.editor, a.name].join(), i = a.lang.common.editorHelp; CKEDITOR.env.ie && (h += ", " + i); var j = CKEDITOR.tools.getNextId(), m = CKEDITOR.dom.element.createFromHtml('<span id="' + j + '" class="cke_voice_label">' + i + "</span>"); e.append(m, 1); a.on("beforeModeUnload", function (a) { a.removeListener(); m.remove() });
                b.setAttributes({ frameBorder: 0, "aria-describedby": j, title: h, src: f, tabIndex: a.tabIndex, allowTransparency: "true" }); !g && d(); CKEDITOR.env.webkit && (f = function () { e.setStyle("width", "100%"); b.hide(); b.setSize("width", e.getSize("width")); e.removeStyle("width"); b.show() }, b.setCustomData("onResize", f), CKEDITOR.document.getWindow().on("resize", f)); a.fire("ariaWidget", b)
            })
        }
        }); var l = CKEDITOR.env.isCustomDomain(), k = CKEDITOR.tools.createClass({ $: function (a) {
            this.base.apply(this, arguments); this._.frameLoadedHandler =
CKEDITOR.tools.addFunction(function (a) { CKEDITOR.tools.setTimeout(n, 0, this, a) }, this); this._.docTitle = this.getWindow().getFrame().getAttribute("title")
        }, base: CKEDITOR.editable, proto: { setData: function (a, c) {
            var d = this.editor; if (c) this.setHtml(a); else {
                this._.isLoadingData = !0; d._.dataStore = { id: 1 }; var b = d.config, e = b.fullPage, f = b.docType, g = CKEDITOR.tools.buildStyleHtml(q()).replace(/<style>/, '<style data-cke-temp="1">'); e || (g += CKEDITOR.tools.buildStyleHtml(d.config.contentsCss)); var h = b.baseHref ? '<base href="' +
b.baseHref + '" data-cke-temp="1" />' : ""; e && (a = a.replace(/<!DOCTYPE[^>]*>/i, function (a) { d.docType = f = a; return "" }).replace(/<\?xml\s[^\?]*\?>/i, function (a) { d.xmlDeclaration = a; return "" })); d.dataProcessor && (a = d.dataProcessor.toHtml(a)); e ? (/<body[\s|>]/.test(a) || (a = "<body>" + a), /<html[\s|>]/.test(a) || (a = "<html>" + a + "</html>"), /<head[\s|>]/.test(a) ? /<title[\s|>]/.test(a) || (a = a.replace(/<head[^>]*>/, "$&<title></title>")) : a = a.replace(/<html[^>]*>/, "$&<head><title></title></head>"), h && (a = a.replace(/<head>/, "$&" +
h)), a = a.replace(/<\/head\s*>/, g + "$&"), a = f + a) : a = b.docType + '<html dir="' + b.contentsLangDirection + '" lang="' + (b.contentsLanguage || d.langCode) + '"><head><title>' + this._.docTitle + "</title>" + h + g + "</head><body" + (b.bodyId ? ' id="' + b.bodyId + '"' : "") + (b.bodyClass ? ' class="' + b.bodyClass + '"' : "") + ">" + a + "</body></html>"; CKEDITOR.env.gecko && (a = a.replace(/<body/, '<body contenteditable="true" '), 2E4 > CKEDITOR.env.version && (a = a.replace(/<body[^>]*>/, "$&<\!-- cke-content-start --\>"))); b = '<script id="cke_actscrpt" type="text/javascript"' +
(CKEDITOR.env.ie ? ' defer="defer" ' : "") + ">" + (l ? 'document.domain="' + document.domain + '";' : "") + "var wasLoaded=0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction(" + this._.frameLoadedHandler + ",window);wasLoaded=1;}" + (CKEDITOR.env.ie ? "onload();" : 'document.addEventListener("DOMContentLoaded", onload, false );') + "<\/script>"; CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (b += '<script id="cke_shimscrpt">(function(){var e="abbr,article,aside,audio,bdi,canvas,data,datalist,details,figcaption,figure,footer,header,hgroup,mark,meter,nav,output,progress,section,summary,time,video".split(","),i=e.length;while(i--){document.createElement(e[i])}})()<\/script>');
                a = a.replace(/(?=\s*<\/(:?head)>)/, b); this.clearCustomData(); this.clearListeners(); d.fire("contentDomUnload"); var i = this.getDocument(); try { i.write(a) } catch (j) { setTimeout(function () { i.write(a) }, 0) }
            }
        }, getData: function (a) {
            if (a) return this.getHtml(); var a = this.editor, c = a.config.fullPage, d = c && a.docType, b = c && a.xmlDeclaration, e = this.getDocument(), c = c ? e.getDocumentElement().getOuterHtml() : e.getBody().getHtml(); CKEDITOR.env.gecko && (c = c.replace(/<br>(?=\s*(:?$|<\/body>))/, "")); a.dataProcessor && (c = a.dataProcessor.toDataFormat(c));
            b && (c = b + "\n" + c); d && (c = d + "\n" + c); return c
        }, focus: function () { this._.isLoadingData ? this._.isPendingFocus = !0 : k.baseProto.focus.call(this) }, detach: function () {
            var a = this.editor, c = a.document, d = a.window.getFrame(); k.baseProto.detach.call(this);
            if (this.editor) {
                this.clearCustomData();
                c.getDocumentElement().clearCustomData();
                d.clearCustomData();
                CKEDITOR.tools.removeFunction(this._.frameLoadedHandler);
                (c = d.removeCustomData("onResize")) && c.removeListener();
                a.fire("contentDomUnload");
                d.remove();
            }
        }
        }
        }); CKEDITOR.env.gecko && function () {
            var a =
document.body; if (a) { var c = a.getAttribute("onpageshow"); a.setAttribute("onpageshow", (c ? c + ";" : "") + 'event.persisted&&(function(){var x=CKEDITOR.instances,d,i;for(i in x){d=x[i].document;if(d){d.$.designMode="off";d.$.designMode="on";}}})();') } else window.addEventListener("load", arguments.callee, !1)
        } ()
    })(); CKEDITOR.config.disableObjectResizing = !1; CKEDITOR.config.disableNativeTableHandles = !0; CKEDITOR.config.disableNativeSpellChecker = !0; CKEDITOR.config.contentsCss = CKEDITOR.basePath + "contents.css"; (function () {
        function e(b, a) { if (!a) var g = b.getSelection(), a = g.getType() == CKEDITOR.SELECTION_ELEMENT && g.getSelectedElement(); if (a && a.is("img") && !a.data("cke-realelement") && !a.isReadOnly()) return a } function f(b) { var a = b.getStyle("float"); if ("inherit" == a || "none" == a) a = 0; a || (a = b.getAttribute("align")); return a } CKEDITOR.plugins.add("image", { requires: "dialog", init: function (b) {
            CKEDITOR.dialog.add("image", this.path + "dialogs/image.js"); b.addCommand("image", new CKEDITOR.dialogCommand("image")); b.ui.addButton &&
b.ui.addButton("Image", { label: b.lang.common.image, command: "image", toolbar: "insert,10" }); b.on("doubleclick", function (a) { var b = a.data.element; b.is("img") && (!b.data("cke-realelement") && !b.isReadOnly()) && (a.data.dialog = "image") }); b.addMenuItems && b.addMenuItems({ image: { label: b.lang.image.menu, command: "image", group: "image"} }); b.contextMenu && b.contextMenu.addListener(function (a) { if (e(b, a)) return { image: CKEDITOR.TRISTATE_OFF} })
        }, afterInit: function (b) {
            function a(a) {
                var d = b.getCommand("justify" + a); if (d) {
                    if ("left" ==
a || "right" == a) d.on("exec", function (d) { var c = e(b), h; c && (h = f(c), h == a ? (c.removeStyle("float"), a == f(c) && c.removeAttribute("align")) : c.setStyle("float", a), d.cancel()) }); d.on("refresh", function (d) { var c = e(b); c && (c = f(c), this.setState(c == a ? CKEDITOR.TRISTATE_ON : "right" == a || "left" == a ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED), d.cancel()) })
                }
            } a("left"); a("right"); a("center"); a("block")
        }
        })
    })(); CKEDITOR.config.image_removeLinkByEmptyURL = !0; (function () {
        function g(a, b) { var c = j.exec(a), d = j.exec(b); if (c) { if (!c[2] && "px" == d[2]) return d[1]; if ("px" == c[2] && !d[2]) return d[1] + "px" } return b } var i = CKEDITOR.htmlParser.cssStyle, h = CKEDITOR.tools.cssLength, j = /^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i, l = { elements: { $: function (a) {
            var b = a.attributes; if ((b = (b = (b = b && b["data-cke-realelement"]) && new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(b))) && b.children[0]) && a.attributes["data-cke-resizable"]) {
                var c = (new i(a)).rules, a = b.attributes, d = c.width, c =
c.height; d && (a.width = g(a.width, d)); c && (a.height = g(a.height, c))
            } return b
        }
        }
        }, k = CKEDITOR.plugins.add("fakeobjects", { afterInit: function (a) { (a = (a = a.dataProcessor) && a.htmlFilter) && a.addRules(l) } }); CKEDITOR.editor.prototype.createFakeElement = function (a, b, c, d) {
            var e = this.lang.fakeobjects, e = e[c] || e.unknown, b = { "class": b, "data-cke-realelement": encodeURIComponent(a.getOuterHtml()), "data-cke-real-node-type": a.type, alt: e, title: e, align: a.getAttribute("align") || "" }; CKEDITOR.env.hc || (b.src = CKEDITOR.getUrl(k.path +
"images/spacer.gif")); c && (b["data-cke-real-element-type"] = c); d && (b["data-cke-resizable"] = d, c = new i, d = a.getAttribute("width"), a = a.getAttribute("height"), d && (c.rules.width = h(d)), a && (c.rules.height = h(a)), c.populate(b)); return this.document.createElement("img", { attributes: b })
        }; CKEDITOR.editor.prototype.createFakeParserElement = function (a, b, c, d) {
            var e = this.lang.fakeobjects, e = e[c] || e.unknown, f; f = new CKEDITOR.htmlParser.basicWriter; a.writeHtml(f); f = f.getHtml(); b = { "class": b, "data-cke-realelement": encodeURIComponent(f),
                "data-cke-real-node-type": a.type, alt: e, title: e, align: a.attributes.align || ""
            }; CKEDITOR.env.hc || (b.src = CKEDITOR.getUrl(k.path + "images/spacer.gif")); c && (b["data-cke-real-element-type"] = c); d && (b["data-cke-resizable"] = d, d = a.attributes, a = new i, c = d.width, d = d.height, void 0 != c && (a.rules.width = h(c)), void 0 != d && (a.rules.height = h(d)), a.populate(b)); return new CKEDITOR.htmlParser.element("img", b)
        }; CKEDITOR.editor.prototype.restoreRealElement = function (a) {
            if (a.data("cke-real-node-type") != CKEDITOR.NODE_ELEMENT) return null;
            var b = CKEDITOR.dom.element.createFromHtml(decodeURIComponent(a.data("cke-realelement")), this.document); if (a.data("cke-resizable")) { var c = a.getStyle("width"), a = a.getStyle("height"); c && b.setAttribute("width", g(b.getAttribute("width"), c)); a && b.setAttribute("height", g(b.getAttribute("height"), a)) } return b
        }
    })(); CKEDITOR.plugins.add("link", { requires: "dialog,fakeobjects", onLoad: function () {
        function b(b) { return c.replace(/%1/g, "rtl" == b ? "right" : "left").replace(/%2/g, "cke_contents_" + b) } var a = "background:url(" + CKEDITOR.getUrl(this.path + "images/anchor.png") + ") no-repeat %1 center;border:1px dotted #00f;", c = ".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{" + a + "padding-%1:18px;cursor:auto;}" + (CKEDITOR.env.ie ? "a.cke_anchor_empty{display:inline-block;}" : "") + ".%2 img.cke_anchor{" +
a + "width:16px;min-height:15px;height:1.15em;vertical-align:" + (CKEDITOR.env.opera ? "middle" : "text-bottom") + ";}"; CKEDITOR.addCss(b("ltr") + b("rtl"))
    }, init: function (b) {
        b.addCommand("link", new CKEDITOR.dialogCommand("link")); b.addCommand("anchor", new CKEDITOR.dialogCommand("anchor")); b.addCommand("unlink", new CKEDITOR.unlinkCommand); b.addCommand("removeAnchor", new CKEDITOR.removeAnchorCommand); b.setKeystroke(CKEDITOR.CTRL + 76, "link"); b.ui.addButton && (b.ui.addButton("Link", { label: b.lang.link.toolbar, command: "link",
            toolbar: "links,10"
        }), b.ui.addButton("Unlink", { label: b.lang.link.unlink, command: "unlink", toolbar: "links,20" }), b.ui.addButton("Anchor", { label: b.lang.link.anchor.toolbar, command: "anchor", toolbar: "links,30" })); CKEDITOR.dialog.add("link", this.path + "dialogs/link.js"); CKEDITOR.dialog.add("anchor", this.path + "dialogs/anchor.js"); b.on("doubleclick", function (a) {
            var c = CKEDITOR.plugins.link.getSelectedLink(b) || a.data.element; if (!c.isReadOnly()) if (c.is("a")) {
                a.data.dialog = c.getAttribute("name") && (!c.getAttribute("href") ||
!c.getChildCount()) ? "anchor" : "link"; b.getSelection().selectElement(c)
            } else if (CKEDITOR.plugins.link.tryRestoreFakeAnchor(b, c)) a.data.dialog = "anchor"
        }); b.addMenuItems && b.addMenuItems({ anchor: { label: b.lang.link.anchor.menu, command: "anchor", group: "anchor", order: 1 }, removeAnchor: { label: b.lang.link.anchor.remove, command: "removeAnchor", group: "anchor", order: 5 }, link: { label: b.lang.link.menu, command: "link", group: "link", order: 1 }, unlink: { label: b.lang.link.unlink, command: "unlink", group: "link", order: 5} }); b.contextMenu &&
b.contextMenu.addListener(function (a) { if (!a || a.isReadOnly()) return null; a = CKEDITOR.plugins.link.tryRestoreFakeAnchor(b, a); if (!a && !(a = CKEDITOR.plugins.link.getSelectedLink(b))) return null; var c = {}; a.getAttribute("href") && a.getChildCount() && (c = { link: CKEDITOR.TRISTATE_OFF, unlink: CKEDITOR.TRISTATE_OFF }); if (a && a.hasAttribute("name")) c.anchor = c.removeAnchor = CKEDITOR.TRISTATE_OFF; return c })
    }, afterInit: function (b) {
        var a = b.dataProcessor, c = a && a.dataFilter, a = a && a.htmlFilter, d = b._.elementsPath && b._.elementsPath.filters;
        c && c.addRules({ elements: { a: function (a) { var c = a.attributes; if (!c.name) return null; var d = !a.children.length; if (CKEDITOR.plugins.link.synAnchorSelector) { var a = d ? "cke_anchor_empty" : "cke_anchor", e = c["class"]; if (c.name && (!e || 0 > e.indexOf(a))) c["class"] = (e || "") + " " + a; d && CKEDITOR.plugins.link.emptyAnchorFix && (c.contenteditable = "false", c["data-cke-editable"] = 1) } else if (CKEDITOR.plugins.link.fakeAnchor && d) return b.createFakeParserElement(a, "cke_anchor", "anchor"); return null } } }); CKEDITOR.plugins.link.emptyAnchorFix &&
a && a.addRules({ elements: { a: function (a) { delete a.attributes.contenteditable } } }); d && d.push(function (a, c) { if ("a" == c && (CKEDITOR.plugins.link.tryRestoreFakeAnchor(b, a) || a.getAttribute("name") && (!a.getAttribute("href") || !a.getChildCount()))) return "anchor" })
    }
    });
    CKEDITOR.plugins.link = { getSelectedLink: function (b) { var a = b.getSelection(), c = a.getSelectedElement(); return c && c.is("a") ? c : (a = a.getRanges(!0)[0]) ? (a.shrink(CKEDITOR.SHRINK_TEXT), b.elementPath(a.getCommonAncestor()).contains("a", 1)) : null }, fakeAnchor: CKEDITOR.env.opera || CKEDITOR.env.webkit, synAnchorSelector: CKEDITOR.env.ie, emptyAnchorFix: CKEDITOR.env.ie && 8 > CKEDITOR.env.version, tryRestoreFakeAnchor: function (b, a) {
        if (a && a.data("cke-real-element-type") && "anchor" == a.data("cke-real-element-type")) {
            var c = b.restoreRealElement(a);
            if (c.data("cke-saved-name")) return c
        }
    }
    }; CKEDITOR.unlinkCommand = function () { }; CKEDITOR.unlinkCommand.prototype = { exec: function (b) { var a = new CKEDITOR.style({ element: "a", type: CKEDITOR.STYLE_INLINE, alwaysRemoveElement: 1 }); b.removeStyle(a) }, refresh: function (b, a) { var c = a.lastElement && a.lastElement.getAscendant("a", !0); c && "a" == c.getName() && c.getAttribute("href") && c.getChildCount() ? this.setState(CKEDITOR.TRISTATE_OFF) : this.setState(CKEDITOR.TRISTATE_DISABLED) }, contextSensitive: 1, startDisabled: 1 };
    CKEDITOR.removeAnchorCommand = function () { }; CKEDITOR.removeAnchorCommand.prototype = { exec: function (b) { var a = b.getSelection(), c = a.createBookmarks(), d; if (a && (d = a.getSelectedElement()) && (CKEDITOR.plugins.link.fakeAnchor && !d.getChildCount() ? CKEDITOR.plugins.link.tryRestoreFakeAnchor(b, d) : d.is("a"))) d.remove(1); else if (d = CKEDITOR.plugins.link.getSelectedLink(b)) d.hasAttribute("href") ? (d.removeAttributes({ name: 1, "data-cke-saved-name": 1 }), d.removeClass("cke_anchor")) : d.remove(1); a.selectBookmarks(c) } };
    CKEDITOR.tools.extend(CKEDITOR.config, { linkShowAdvancedTab: !0, linkShowTargetTab: !0 }); (function () {
        function J(a, b, d) { return l(b) && l(d) && d.equals(b.getNext(function (a) { return !(w(a) || x(a) || n(a)) })) } function s(a) { this.upper = a[0]; this.lower = a[1]; this.set.apply(this, a.slice(2)) } function K(a) { var b = a.element, d; return b && l(b) ? (d = b.getAscendant(a.triggers, !0)) && !d.contains(a.editable) && !d.equals(a.editable) ? d : null : null } function Z(a, b, d) { m(a, b); m(a, d); a = b.size.bottom; d = d.size.top; return a && d ? 0 | (a + d) / 2 : a || d } function L(a, b, d) {
            return b = b[d ? "getPrevious" : "getNext"](function (e) {
                return e && e.type ==
CKEDITOR.NODE_TEXT && !w(e) || l(e) && !n(e) && !t(a, e)
            })
        } function $(a) {
            var b = a.doc, d = y('<span contenteditable="false" style="' + E + "position:absolute;border-top:1px dashed " + a.boxColor + '"></span>', b); o(d, { attach: function () { this.wrap.getParent() || this.wrap.appendTo(a.editable, !0); return this }, lineChildren: [o(y('<span title="' + a.editor.lang.magicline.title + '" contenteditable="false">&#8629;</span>', b), { base: E + "height:17px;width:17px;" + (a.rtl ? "left" : "right") + ":17px;background:url(" + this.path + "images/icon.png) center no-repeat " +
a.boxColor + ";cursor:pointer;" + (p.hc ? "font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;" : ""), looks: ["top:-8px;" + CKEDITOR.tools.cssVendorPrefix("border-radius", "2px", 1), "top:-17px;" + CKEDITOR.tools.cssVendorPrefix("border-radius", "2px 2px 0px 0px", 1), "top:-1px;" + CKEDITOR.tools.cssVendorPrefix("border-radius", "0px 0px 2px 2px", 1)]
            }), o(y(M, b), { base: N + "left:0px;border-left-color:" + a.boxColor + ";", looks: ["border-width:8px 0 8px 8px;top:-8px", "border-width:8px 0 0 8px;top:-8px", "border-width:0 0 8px 8px;top:0px"] }),
o(y(M, b), { base: N + "right:0px;border-right-color:" + a.boxColor + ";", looks: ["border-width:8px 8px 8px 0;top:-8px", "border-width:8px 8px 0 0;top:-8px", "border-width:0 8px 8px 0;top:0px"] })], detach: function () { this.wrap.getParent() && this.wrap.remove(); return this }, mouseNear: function () { m(a, this); var e = a.holdDistance, b = this.size; return b && a.mouse.y > b.top - e && a.mouse.y < b.bottom + e && a.mouse.x > b.left - e && a.mouse.x < b.right + e ? !0 : !1 }, place: function () {
    var b = a.view, d = a.editable, c = a.trigger, h = c.upper, i = c.lower, j = h || i,
k = j.getParent(), g = {}; this.trigger = c; h && m(a, h, !0); i && m(a, i, !0); m(a, k, !0); a.inInlineMode && z(a, !0); k.equals(d) ? (g.left = b.scroll.x, g.right = -b.scroll.x, g.width = "") : (g.left = j.size.left - j.size.margin.left + b.scroll.x - (a.inInlineMode ? b.editable.left + b.editable.border.left : 0), g.width = j.size.outerWidth + j.size.margin.left + j.size.margin.right + b.scroll.x, g.right = ""); h && i ? g.top = h.size.margin.bottom === i.size.margin.top ? 0 | h.size.bottom + h.size.margin.bottom / 2 : h.size.margin.bottom < i.size.margin.top ? h.size.bottom + h.size.margin.bottom :
h.size.bottom + h.size.margin.bottom - i.size.margin.top : h ? i || (g.top = h.size.bottom + h.size.margin.bottom) : g.top = i.size.top - i.size.margin.top; c.is(u) || g.top > b.scroll.y - 15 && g.top < b.scroll.y + 5 ? (g.top = a.inInlineMode ? 0 : b.scroll.y, this.look(u)) : c.is(v) || g.top > b.pane.bottom - 5 && g.top < b.pane.bottom + 15 ? (g.top = a.inInlineMode ? b.editable.height + b.editable.padding.top + b.editable.padding.bottom : b.pane.bottom - 1, this.look(v)) : (a.inInlineMode && (g.top -= b.editable.top + b.editable.border.top), this.look(q)); a.inInlineMode &&
(g.top--, g.top += b.editable.scroll.top, g.left += b.editable.scroll.left); for (var O in g) g[O] = CKEDITOR.tools.cssLength(g[O]); this.setStyles(g)
}, look: function (a) { if (this.oldLook != a) { for (var b = this.lineChildren.length, c; b--; ) (c = this.lineChildren[b]).setAttribute("style", c.base + c.looks[0 | a / 2]); this.oldLook = a } }, wrap: new F("span", a.doc)
            }); for (b = d.lineChildren.length; b--; ) d.lineChildren[b].appendTo(d); d.look(q); d.appendTo(d.wrap); d.unselectable(); d.lineChildren[0].on("mouseup", function (b) {
                d.detach(); P(a, function (b) {
                    var c =
a.line.trigger; b[c.is(A) ? "insertBefore" : "insertAfter"](c.is(A) ? c.lower : c.upper)
                }); a.editor.focus(); !p.ie && a.enterMode != CKEDITOR.ENTER_BR && a.hotNode.scrollIntoView(); b.data.preventDefault(!0)
            }); d.on("mousedown", function (a) { a.data.preventDefault(!0) }); a.line = d
        } function P(a, b) {
            var d = new CKEDITOR.dom.range(a.doc), e = a.editor, f; p.ie && a.enterMode == CKEDITOR.ENTER_BR ? f = a.doc.createText(G) : (f = new F(a.enterBehavior, a.doc), a.enterMode != CKEDITOR.ENTER_BR && a.doc.createText(G).appendTo(f)); e.fire("saveSnapshot");
            b(f); d.moveToPosition(f, CKEDITOR.POSITION_AFTER_START); e.getSelection().selectRanges([d]); a.hotNode = f; e.fire("saveSnapshot")
        } function t(a, b) { if (!b || !(b.type == CKEDITOR.NODE_ELEMENT && b.$)) return !1; var d = a.line; return d.wrap.equals(b) || d.wrap.contains(b) } function l(a) { return a && a.type == CKEDITOR.NODE_ELEMENT && a.$ } function n(a) { if (!l(a)) return !1; var b; if (!(b = Q(a))) l(a) ? (b = { left: 1, right: 1, center: 1 }, b = !(!b[a.getComputedStyle("float")] && !b[a.getAttribute("align")])) : b = !1; return b } function Q(a) {
            return !!{ absolute: 1,
                fixed: 1, relative: 1
            }[a.getComputedStyle("position")]
        } function B(a, b) { return l(b) ? b.is(a.triggers) : null } function aa(a, b, d) { b = b[d ? "getLast" : "getFirst"](function (b) { return a.isRelevant(b) && !b.is(ba) }); if (!b) return !1; m(a, b); return d ? b.size.top > a.mouse.y : b.size.bottom < a.mouse.y } function R(a) {
            var b = a.editable, d = a.mouse, e = a.view, f = a.triggerOffset; z(a); var c = d.y > (a.inInlineMode ? e.editable.top + e.editable.height / 2 : Math.min(e.editable.height, e.pane.height) / 2), b = b[c ? "getLast" : "getFirst"](function (a) {
                return !(w(a) ||
x(a))
            }); if (!b) return null; t(a, b) && (b = a.line.wrap[c ? "getPrevious" : "getNext"](function (a) { return !(w(a) || x(a)) })); if (!l(b) || n(b) || !B(a, b)) return null; m(a, b); return !c && 0 <= b.size.top && 0 < d.y && d.y < b.size.top + f ? (a = a.inInlineMode || 0 === e.scroll.y ? u : q, new s([null, b, A, C, a])) : c && b.size.bottom <= e.pane.height && d.y > b.size.bottom - f && d.y < e.pane.height ? (a = a.inInlineMode || b.size.bottom > e.pane.height - f && b.size.bottom < e.pane.height ? v : q, new s([b, null, S, C, a])) : null
        } function T(a) {
            var b = a.mouse, d = a.view, e = a.triggerOffset,
f = K(a); if (!f) return null; m(a, f); var e = Math.min(e, 0 | f.size.outerHeight / 2), c = [], h, i; if (b.y > f.size.top - 1 && b.y < f.size.top + e) i = !1; else if (b.y > f.size.bottom - e && b.y < f.size.bottom + 1) i = !0; else return null; if (n(f) || aa(a, f, i) || f.getParent().is(U)) return null; var j = L(a, f, !i); if (j) { if (j && j.type == CKEDITOR.NODE_TEXT) return null; if (l(j)) { if (n(j) || !B(a, j) || j.getParent().is(U)) return null; c = [j, f][i ? "reverse" : "concat"]().concat([H, C]) } } else f.equals(a.editable[i ? "getLast" : "getFirst"](a.isRelevant)) ? (z(a), i && b.y > f.size.bottom -
e && b.y < d.pane.height && f.size.bottom > d.pane.height - e && f.size.bottom < d.pane.height ? h = v : 0 < b.y && b.y < f.size.top + e && (h = u)) : h = q, c = [null, f][i ? "reverse" : "concat"]().concat([i ? S : A, C, h, f.equals(a.editable[i ? "getLast" : "getFirst"](a.isRelevant)) ? i ? v : u : q]); return 0 in c ? new s(c) : null
        } function I(a, b, d, e) {
            for (var f = function () { var c = p.ie ? b.$.currentStyle : a.win.$.getComputedStyle(b.$, ""); return p.ie ? function (a) { return c[CKEDITOR.tools.cssStyleToDomStyle(a)] } : function (a) { return c.getPropertyValue(a) } } (), c = b.getDocumentPosition(),
h = {}, i = {}, j = {}, k = {}, g = r.length; g--; ) h[r[g]] = parseInt(f("border-" + r[g] + "-width"), 10) || 0, j[r[g]] = parseInt(f("padding-" + r[g]), 10) || 0, i[r[g]] = parseInt(f("margin-" + r[g]), 10) || 0; (!d || e) && D(a, e); k.top = c.y - (d ? 0 : a.view.scroll.y); k.left = c.x - (d ? 0 : a.view.scroll.x); k.outerWidth = b.$.offsetWidth; k.outerHeight = b.$.offsetHeight; k.height = k.outerHeight - (j.top + j.bottom + h.top + h.bottom); k.width = k.outerWidth - (j.left + j.right + h.left + h.right); k.bottom = k.top + k.outerHeight; k.right = k.left + k.outerWidth; a.inInlineMode && (k.scroll =
{ top: b.$.scrollTop, left: b.$.scrollLeft }); return o({ border: h, padding: j, margin: i, ignoreScroll: d }, k, !0)
        } function m(a, b, d) { if (!l(b)) return b.size = null; if (b.size) { if (b.size.ignoreScroll == d && b.size.date > new Date - V) return null } else b.size = {}; return o(b.size, I(a, b, d), { date: +new Date }, !0) } function z(a, b) { a.view.editable = I(a, a.editable, b, !0) } function D(a, b) {
            a.view || (a.view = {}); var d = a.view; if (b || !(d && d.date > new Date - V)) {
                var e = a.win, d = e.getScrollPosition(), e = e.getViewPaneSize(); o(a.view, { scroll: { x: d.x, y: d.y,
                    width: a.doc.$.documentElement.scrollWidth - e.width, height: a.doc.$.documentElement.scrollHeight - e.height
                }, pane: { width: e.width, height: e.height, bottom: e.height + d.y }, date: +new Date
                }, !0)
            }
        } function ca(a, b, d, e) { for (var f = e, c = e, h = 0, i = !1, j = !1, k = a.view.pane.height, g = a.mouse; g.y + h < k && 0 < g.y - h; ) { i || (i = b(f, e)); j || (j = b(c, e)); !i && 0 < g.y - h && (f = d(a, { x: g.x, y: g.y - h })); !j && g.y + h < k && (c = d(a, { x: g.x, y: g.y + h })); if (i && j) break; h += 2 } return new s([f, c, null, null]) } CKEDITOR.plugins.add("magicline", { init: function (a) {
            var b = {}; b[CKEDITOR.ENTER_BR] =
"br"; b[CKEDITOR.ENTER_P] = "p"; b[CKEDITOR.ENTER_DIV] = "div"; var d = a.config, e = d.magicline_triggerOffset || 30, f = d.enterMode, c = { editor: a, enterBehavior: b[f], enterMode: f, triggerOffset: e, holdDistance: 0 | e * (d.magicline_holdDistance || 0.5), boxColor: d.magicline_color || "#ff0000", rtl: "rtl" == d.contentsLangDirection, triggers: d.magicline_everywhere ? CKEDITOR.dtd.$block : { table: 1, hr: 1, div: 1, ul: 1, ol: 1, dl: 1} }, h, i, j, k; c.isRelevant = function (a) { return l(a) && !t(c, a) && !n(a) }; a.on("contentDom", function () {
    var b = a.editable(), d = a.document,
e = a.window; o(c, { editable: b, inInlineMode: b.isInline(), doc: d, win: e }, !0); c.boundary = c.inInlineMode ? c.editable : c.doc.getDocumentElement(); b.is(CKEDITOR.dtd.$inline) || (c.inInlineMode && !Q(b) && b.setStyles({ position: "relative", top: null, left: null }), $.call(this, c), D(c), b.attachListener(a, "beforeUndoImage", function () { c.line.detach() }), b.attachListener(a, "beforeGetData", function () { c.line.wrap.getParent() && (c.line.detach(), a.once("getData", function () { c.line.attach() }, null, null, 1E3)) }, null, null, 0), b.attachListener(c.inInlineMode ?
d : d.getWindow().getFrame(), "mouseout", function (b) { if ("wysiwyg" == a.mode) if (clearTimeout(i), c.inInlineMode) { var d = b.data.$.clientX, b = b.data.$.clientY; D(c); z(c, !0); var e = c.view.editable, f = c.view.scroll; if (!(d > e.left - f.x && d < e.right - f.x) || !(b > e.top - f.y && b < e.bottom - f.y)) clearTimeout(k), k = null, c.line.detach() } else clearTimeout(k), k = null, i = CKEDITOR.tools.setTimeout(c.line.detach, 150, c.line) }), b.attachListener(b, "keyup", function () { c.hiddenMode = 0 }), b.attachListener(b, "keydown", function (b) {
    if ("wysiwyg" == a.mode) switch (b =
b.data.getKeystroke(), a.getSelection().getStartElement(), b) { case 2228240: case 16: c.hiddenMode = 1, c.line.detach() }
}), b.attachListener(c.inInlineMode ? b : d, "mousemove", function (b) {
    clearTimeout(i); j = !0; if (!("wysiwyg" != a.mode || k)) {
        var d = { x: b.data.$.clientX, y: b.data.$.clientY }; k = setTimeout(function () {
            c.mouse = d; k = c.trigger = null; D(c); if (j && !c.hiddenMode && a.focusManager.hasFocus && !c.line.mouseNear() && (c.element = W(c, !0))) (c.trigger = R(c) || T(c) || X(c)) ? c.line.attach().place() : (c.trigger = null, c.line.detach()), j =
!1
        }, 30)
    }
}), b.attachListener(e, "scroll", function () { "wysiwyg" == a.mode && (c.line.detach(), p.webkit && (c.hiddenMode = 1, clearTimeout(h), h = setTimeout(function () { c.hiddenMode = 0 }, 50))) }), b.attachListener(e, "mousedown", function () { "wysiwyg" == a.mode && (c.line.detach(), c.hiddenMode = 1) }), b.attachListener(e, "mouseup", function () { c.hiddenMode = 0 }), this.backdoor = { accessFocusSpace: P, boxTrigger: s, isLine: t, getAscendantTrigger: K, getNonEmptyNeighbour: L, getSize: I, that: c, triggerEdge: T, triggerEditable: R, triggerExpand: X })
}, this)
        }
        });
        var A = 128, S = 64, H = 32, C = 16, Y = 8, u = 4, v = 2, q = 1, G = " ", U = CKEDITOR.dtd.$listItem, ba = CKEDITOR.dtd.$tableContent, V = 100, E = "width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;", N = E + "border-color:transparent;display:block;border-style:solid;", M = "<span>" + G + "</span>", o = CKEDITOR.tools.extend, F = CKEDITOR.dom.element, y = F.createFromHtml, p = CKEDITOR.env; s.prototype = { set: function (a, b, d) { this.properties = a + b + (d || q); return this }, is: function (a) {
            return (this.properties &
a) == a
        }
        }; var W = function () { return function (a, b, d) { if (!a.mouse) return null; var e = a.doc, f = a.line.wrap, d = d || a.mouse, c = new CKEDITOR.dom.element(e.$.elementFromPoint(d.x, d.y)); b && t(a, c) && (f.hide(), c = new CKEDITOR.dom.element(e.$.elementFromPoint(d.x, d.y)), f.show()); return !c || !(c.type == CKEDITOR.NODE_ELEMENT && c.$) || p.ie && 9 > p.version && !a.boundary.equals(c) && !a.boundary.contains(c) ? null : c } } (), w = CKEDITOR.dom.walker.whitespaces(), x = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT), X = function () {
            function a(a) {
                var e =
a.element, f, c, h; if (!l(e) || e.contains(a.editable)) return null; h = ca(a, function (a, b) { return !b.equals(a) }, function (a, b) { return W(a, !0, b) }, e); f = h.upper; c = h.lower; if (J(a, f, c)) return h.set(H, Y); if (f && e.contains(f)) for (; !f.getParent().equals(e); ) f = f.getParent(); else f = e.getFirst(function (c) { return b(a, c) }); if (c && e.contains(c)) for (; !c.getParent().equals(e); ) c = c.getParent(); else c = e.getLast(function (c) { return b(a, c) }); if (!f || !c) return null; m(a, f); m(a, c); if (!(a.mouse.y > f.size.top && a.mouse.y < c.size.bottom)) return null;
                for (var e = Number.MAX_VALUE, i, j, k, g; c && !c.equals(f) && (j = f.getNext(a.isRelevant)); ) i = Math.abs(Z(a, f, j) - a.mouse.y), i < e && (e = i, k = f, g = j), f = j, m(a, f); if (!k || !g || !(a.mouse.y > k.size.top && a.mouse.y < g.size.bottom)) return null; h.upper = k; h.lower = g; return h.set(H, Y)
            } function b(a, b) { return !(b && b.type == CKEDITOR.NODE_TEXT || x(b) || n(b) || t(a, b) || b.type == CKEDITOR.NODE_ELEMENT && b.$ && b.is("br")) } return function (b) {
                var e = a(b), f; if (f = e) {
                    f = e.upper; var c = e.lower; f = !f || !c || n(c) || n(f) || c.equals(f) || f.equals(c) || c.contains(f) ||
f.contains(c) ? !1 : B(b, f) && B(b, c) && J(b, f, c) ? !0 : !1
                } return f ? e : null
            }
        } (), r = ["top", "left", "right", "bottom"]
    })(); (function () {
        function l(a) { if (!a || a.type != CKEDITOR.NODE_ELEMENT || "form" != a.getName()) return []; for (var e = [], f = ["style", "className"], b = 0; b < f.length; b++) { var d = a.$.elements.namedItem(f[b]); d && (d = new CKEDITOR.dom.element(d), e.push([d, d.nextSibling]), d.remove()) } return e } function o(a, e) { if (a && !(a.type != CKEDITOR.NODE_ELEMENT || "form" != a.getName()) && 0 < e.length) for (var f = e.length - 1; 0 <= f; f--) { var b = e[f][0], d = e[f][1]; d ? b.insertBefore(d) : b.appendTo(a) } } function n(a, e) {
            var f = l(a), b = {}, d = a.$; e || (b["class"] = d.className ||
"", d.className = ""); b.inline = d.style.cssText || ""; e || (d.style.cssText = "position: static; overflow: visible"); o(f); return b
        } function p(a, e) { var f = l(a), b = a.$; "class" in e && (b.className = e["class"]); "inline" in e && (b.style.cssText = e.inline); o(f) } function q(a) { var e = CKEDITOR.instances, f; for (f in e) { var b = e[f]; "wysiwyg" == b.mode && !b.readOnly && (b = b.document.getBody(), b.setAttribute("contentEditable", !1), b.setAttribute("contentEditable", !0)) } a.editable().hasFocus && (a.toolbox.focus(), a.focus()) } CKEDITOR.plugins.add("maximize",
{ init: function (a) {
    function e() { var b = d.getViewPaneSize(); a.resize(b.width, b.height, null, !0) } if (a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
        var f = a.lang, b = CKEDITOR.document, d = b.getWindow(), j, k, m, l = CKEDITOR.TRISTATE_OFF; a.addCommand("maximize", { modes: { wysiwyg: !CKEDITOR.env.iOS, source: !CKEDITOR.env.iOS }, readOnly: 1, editorFocus: !1, exec: function () {
            var h = a.container.getChild(1), g = a.ui.space("contents"); if ("wysiwyg" == a.mode) { var c = a.getSelection(); j = c && c.getRanges(); k = d.getScrollPosition() } else {
                var i = a.editable().$;
                j = !CKEDITOR.env.ie && [i.selectionStart, i.selectionEnd]; k = [i.scrollLeft, i.scrollTop]
            } if (this.state == CKEDITOR.TRISTATE_OFF) {
                d.on("resize", e); m = d.getScrollPosition(); for (c = a.container; c = c.getParent(); ) c.setCustomData("maximize_saved_styles", n(c)), c.setStyle("z-index", a.config.baseFloatZIndex - 5); g.setCustomData("maximize_saved_styles", n(g, !0)); h.setCustomData("maximize_saved_styles", n(h, !0)); g = { overflow: CKEDITOR.env.webkit ? "" : "hidden", width: 0, height: 0 }; b.getDocumentElement().setStyles(g); !CKEDITOR.env.gecko &&
b.getDocumentElement().setStyle("position", "fixed"); (!CKEDITOR.env.gecko || !CKEDITOR.env.quirks) && b.getBody().setStyles(g); CKEDITOR.env.ie ? setTimeout(function () { d.$.scrollTo(0, 0) }, 0) : d.$.scrollTo(0, 0); h.setStyle("position", CKEDITOR.env.gecko && CKEDITOR.env.quirks ? "fixed" : "absolute"); h.$.offsetLeft; h.setStyles({ "z-index": a.config.baseFloatZIndex - 5, left: "0px", top: "0px" }); h.addClass("cke_maximized"); e(); g = h.getDocumentPosition(); h.setStyles({ left: -1 * g.x + "px", top: -1 * g.y + "px" }); CKEDITOR.env.gecko && q(a)
            } else if (this.state ==
CKEDITOR.TRISTATE_ON) {
                d.removeListener("resize", e); g = [g, h]; for (c = 0; c < g.length; c++) p(g[c], g[c].getCustomData("maximize_saved_styles")), g[c].removeCustomData("maximize_saved_styles"); for (c = a.container; c = c.getParent(); ) p(c, c.getCustomData("maximize_saved_styles")), c.removeCustomData("maximize_saved_styles"); CKEDITOR.env.ie ? setTimeout(function () { d.$.scrollTo(m.x, m.y) }, 0) : d.$.scrollTo(m.x, m.y); h.removeClass("cke_maximized"); CKEDITOR.env.webkit && (h.setStyle("display", "inline"), setTimeout(function () {
                    h.setStyle("display",
"block")
                }, 0)); a.fire("resize")
            } this.toggleState(); if (c = this.uiItems[0]) g = this.state == CKEDITOR.TRISTATE_OFF ? f.maximize.maximize : f.maximize.minimize, c = CKEDITOR.document.getById(c._.id), c.getChild(1).setHtml(g), c.setAttribute("title", g), c.setAttribute("href", 'javascript:void("' + g + '");'); "wysiwyg" == a.mode ? j ? (CKEDITOR.env.gecko && q(a), a.getSelection().selectRanges(j), (i = a.getSelection().getStartElement()) && i.scrollIntoView(!0)) : d.$.scrollTo(k.x, k.y) : (j && (i.selectionStart = j[0], i.selectionEnd = j[1]), i.scrollLeft =
k[0], i.scrollTop = k[1]); j = k = null; l = this.state; a.fire("maximize", this.state)
        }, canUndo: !1
        }); a.ui.addButton && a.ui.addButton("Maximize", { label: f.maximize.maximize, command: "maximize", toolbar: "tools,10" }); a.on("mode", function () { var b = a.getCommand("maximize"); b.setState(b.state == CKEDITOR.TRISTATE_DISABLED ? CKEDITOR.TRISTATE_DISABLED : l) }, null, null, 100)
    }
}
})
    })(); (function () {
        var c = { canUndo: !1, async: !0, exec: function (a) { a.getClipboardData({ title: a.lang.pastetext.title }, function (b) { b && a.fire("paste", { type: "text", dataValue: b.dataValue }); a.fire("afterCommandExec", { name: "pastetext", command: c, returnValue: !!b }) }) } }; CKEDITOR.plugins.add("pastetext", { requires: "clipboard", init: function (a) {
            a.addCommand("pastetext", c); a.ui.addButton && a.ui.addButton("PasteText", { label: a.lang.pastetext.button, command: "pastetext", toolbar: "clipboard,40" }); if (a.config.forcePasteAsPlainText) a.on("beforePaste",
function (a) { "html" != a.data.type && (a.data.type = "text") }); a.on("pasteState", function (b) { a.getCommand("pastetext").setState(b.data) })
        }
        })
    })(); (function () {
        function h(a, b) { var e = CKEDITOR.cleanWord; if (e) b(); else { var f = CKEDITOR.getUrl(CKEDITOR.config.pasteFromWordCleanupFile || a + "filter/default.js"); CKEDITOR.scriptLoader.load(f, b, null, !0) } return !e } function i(a) { a.data.type = "html" } CKEDITOR.plugins.add("pastefromword", { requires: "clipboard,format", init: function (a) {
            var b = 0, e = this.path; a.addCommand("pastefromword", { canUndo: !1, async: !0, exec: function (a) {
                var d = this; b = 1; a.once("beforePaste", i); a.getClipboardData({ title: a.lang.pastefromword.title }, function (c) {
                    c &&
a.fire("paste", { type: "html", dataValue: c.dataValue }); a.fire("afterCommandExec", { name: "pastefromword", command: d, returnValue: !!c })
                })
            }
            }); a.ui.addButton && a.ui.addButton("PasteFromWord", { label: a.lang.pastefromword.toolbar, command: "pastefromword", toolbar: "clipboard,50" }); a.on("pasteState", function (b) { a.getCommand("pastefromword").setState(b.data) }); a.on("paste", function (f) {
                var d = f.data, c = d.dataValue; if (c && (b || /(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/.test(c))) {
                    var g = h(e, function () {
                        if (g) a.fire("paste",
d); else if (!a.config.pasteFromWordPromptCleanup || b || confirm(a.lang.pastefromword.confirmCleanup)) d.dataValue = CKEDITOR.cleanWord(c, a)
                    }); g && f.cancel()
                }
            }, null, null, 3)
        }
        })
    })(); CKEDITOR.plugins.add("removeformat", { init: function (a) { a.addCommand("removeFormat", CKEDITOR.plugins.removeformat.commands.removeformat); a.ui.addButton && a.ui.addButton("RemoveFormat", { label: a.lang.removeformat.toolbar, command: "removeFormat", toolbar: "cleanup,10" }); a._.removeFormat = { filters: []} } });
    CKEDITOR.plugins.removeformat = { commands: { removeformat: { exec: function (a) {
        for (var h = a._.removeFormatRegex || (a._.removeFormatRegex = RegExp("^(?:" + a.config.removeFormatTags.replace(/,/g, "|") + ")$", "i")), e = a._.removeAttributes || (a._.removeAttributes = a.config.removeFormatAttributes.split(",")), f = CKEDITOR.plugins.removeformat.filter, k = a.getSelection().getRanges(1), l = k.createIterator(), c; c = l.getNextRange(); ) {
            c.collapsed || c.enlarge(CKEDITOR.ENLARGE_ELEMENT); var i = c.createBookmark(), b = i.startNode, j = i.endNode,
d = function (b) { for (var c = a.elementPath(b), e = c.elements, d = 1, g; (g = e[d]) && !g.equals(c.block) && !g.equals(c.blockLimit); d++) h.test(g.getName()) && f(a, g) && b.breakParent(g) }; d(b); if (j) { d(j); for (b = b.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT); b && !b.equals(j); ) d = b.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT), !("img" == b.getName() && b.data("cke-realelement")) && f(a, b) && (h.test(b.getName()) ? b.remove(1) : (b.removeAttributes(e), a.fire("removeFormatCleanup", b))), b = d } c.moveToBookmark(i)
        } a.forceNextSelectionCheck(); a.getSelection().selectRanges(k)
    }
    }
    },
        filter: function (a, h) { for (var e = a._.removeFormat.filters, f = 0; f < e.length; f++) if (!1 === e[f](h)) return !1; return !0 }
    }; CKEDITOR.editor.prototype.addRemoveFormatFilter = function (a) { this._.removeFormat.filters.push(a) }; CKEDITOR.config.removeFormatTags = "b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var"; CKEDITOR.config.removeFormatAttributes = "class,style,lang,width,height,align,hspace,valign"; (function () {
        CKEDITOR.plugins.add("sourcearea", { init: function (a) {
            function d() { this.hide(); this.setStyle("height", this.getParent().$.clientHeight + "px"); this.setStyle("width", this.getParent().$.clientWidth + "px"); this.show() } if (a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                var e = CKEDITOR.plugins.sourcearea; a.addMode("source", function (e) {
                    var b = a.ui.space("contents").getDocument().createElement("textarea"); b.setStyles(CKEDITOR.tools.extend({ width: CKEDITOR.env.ie7Compat ? "99%" : "100%", height: "100%", resize: "none",
                        outline: "none", "text-align": "left"
                    }, CKEDITOR.tools.cssVendorPrefix("tab-size", a.config.sourceAreaTabSize || 4))); var f = [a.lang.editor, a.name].join(); b.setAttributes({ dir: "ltr", tabIndex: CKEDITOR.env.webkit ? -1 : a.tabIndex, role: "textbox", "aria-label": f }); b.addClass("cke_source cke_reset cke_enable_context_menu"); a.ui.space("contents").append(b); b = a.editable(new c(a, b)); b.setData(a.getData(1)); CKEDITOR.env.ie && (b.attachListener(a, "resize", d, b), b.attachListener(CKEDITOR.document.getWindow(), "resize", d, b),
CKEDITOR.tools.setTimeout(d, 0, b)); a.fire("ariaWidget", this); e()
                }); a.addCommand("source", e.commands.source); a.ui.addButton && a.ui.addButton("Source", { label: a.lang.sourcearea.toolbar, command: "source", toolbar: "mode,10" }); a.on("mode", function () { a.getCommand("source").setState("source" == a.mode ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) })
            }
        }
        }); var c = CKEDITOR.tools.createClass({ base: CKEDITOR.editable, proto: { setData: function (a) { this.setValue(a); this.editor.fire("dataReady") }, getData: function () { return this.getValue() },
            insertHtml: function () { }, insertElement: function () { }, insertText: function () { }, setReadOnly: function (a) { this[(a ? "set" : "remove") + "Attribute"]("readOnly", "readonly") }, detach: function () { c.baseProto.detach.call(this); this.clearCustomData(); this.remove() }
        }
        })
    })();
    CKEDITOR.plugins.sourcearea = { commands: { source: { modes: { wysiwyg: 1, source: 1 }, editorFocus: !1, readOnly: 1, exec: function (c) { "wysiwyg" == c.mode && c.fire("saveSnapshot"); c.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED); c.setMode("source" == c.mode ? "wysiwyg" : "source") }, canUndo: !1}} }; CKEDITOR.plugins.add("specialchar", { availableLangs: { ca: 1, cs: 1, cy: 1, de: 1, en: 1, eo: 1, et: 1, fa: 1, fi: 1, fr: 1, he: 1, hr: 1, it: 1, ku: 1, lv: 1, nb: 1, nl: 1, no: 1, "pt-br": 1, sk: 1, tr: 1, ug: 1, "zh-cn": 1 }, requires: "dialog", init: function (a) {
        var c = this; CKEDITOR.dialog.add("specialchar", this.path + "dialogs/specialchar.js"); a.addCommand("specialchar", { exec: function () {
            var b = a.langCode, b = c.availableLangs[b] ? b : c.availableLangs[b.replace(/-.*/, "")] ? b.replace(/-.*/, "") : "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(c.path + "dialogs/lang/" +
b + ".js"), function () { CKEDITOR.tools.extend(a.lang.specialchar, c.langEntries[b]); a.openDialog("specialchar") })
        }, modes: { wysiwyg: 1 }, canUndo: !1
        }); a.ui.addButton && a.ui.addButton("SpecialChar", { label: a.lang.specialchar.toolbar, command: "specialchar", toolbar: "insert,50" })
    }
    }); CKEDITOR.config.specialChars = "! &quot; # $ % &amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ &euro; &lsquo; &rsquo; &ldquo; &rdquo; &ndash; &mdash; &iexcl; &cent; &pound; &curren; &yen; &brvbar; &sect; &uml; &copy; &ordf; &laquo; &not; &reg; &macr; &deg; &sup2; &sup3; &acute; &micro; &para; &middot; &cedil; &sup1; &ordm; &raquo; &frac14; &frac12; &frac34; &iquest; &Agrave; &Aacute; &Acirc; &Atilde; &Auml; &Aring; &AElig; &Ccedil; &Egrave; &Eacute; &Ecirc; &Euml; &Igrave; &Iacute; &Icirc; &Iuml; &ETH; &Ntilde; &Ograve; &Oacute; &Ocirc; &Otilde; &Ouml; &times; &Oslash; &Ugrave; &Uacute; &Ucirc; &Uuml; &Yacute; &THORN; &szlig; &agrave; &aacute; &acirc; &atilde; &auml; &aring; &aelig; &ccedil; &egrave; &eacute; &ecirc; &euml; &igrave; &iacute; &icirc; &iuml; &eth; &ntilde; &ograve; &oacute; &ocirc; &otilde; &ouml; &divide; &oslash; &ugrave; &uacute; &ucirc; &uuml; &yacute; &thorn; &yuml; &OElig; &oelig; &#372; &#374 &#373 &#375; &sbquo; &#8219; &bdquo; &hellip; &trade; &#9658; &bull; &rarr; &rArr; &hArr; &diams; &asymp;".split(" "); (function () {
        function m(b, j) { var k = b.type, f = j.type; return k == f ? 0 : k == CKEDITOR.STYLE_OBJECT ? -1 : f == CKEDITOR.STYLE_OBJECT ? 1 : f == CKEDITOR.STYLE_BLOCK ? 1 : -1 } CKEDITOR.plugins.add("stylescombo", { requires: "richcombo", init: function (b) {
            function j(a) { b.getStylesSet(function (g) { if (!i.length) { for (var c, l, e = 0, f = g.length; e < f; e++) c = g[e], b.blockless && c.element in CKEDITOR.dtd.$block || (l = c.name, c = h[l] = new CKEDITOR.style(c), c._name = l, c._.enterMode = k.enterMode, i.push(c)); i.sort(m) } a && a() }) } var k = b.config, f = b.lang.stylescombo,
h = {}, i = [], d; b.ui.addRichCombo("Styles", { label: f.label, title: f.panelTitle, toolbar: "styles,10", panel: { css: [CKEDITOR.skin.getPath("editor")].concat(k.contentsCss), multiSelect: !0, attributes: { "aria-label": f.panelTitle} }, init: function () { d = this; j(function () { var a, g, c, b, e, h; e = 0; for (h = i.length; e < h; e++) a = i[e], g = a._name, b = a.type, b != c && (d.startGroup(f["panelTitle" + b]), c = b), d.add(g, a.type == CKEDITOR.STYLE_OBJECT ? g : a.buildPreview(), g); d.commit() }) }, onClick: function (a) {
    b.focus(); b.fire("saveSnapshot"); var a = h[a],
g = b.elementPath(); b[a.checkActive(g) ? "removeStyle" : "applyStyle"](a); b.fire("saveSnapshot")
}, onRender: function () { b.on("selectionChange", function (a) { for (var b = this.getValue(), a = a.data.path.elements, c = 0, f = a.length, e; c < f; c++) { e = a[c]; for (var d in h) if (h[d].checkElementRemovable(e, !0)) { d != b && this.setValue(d); return } } this.setValue("") }, this) }, onOpen: function () {
    var a = b.getSelection().getSelectedElement(), a = b.elementPath(a), g = [0, 0, 0, 0]; this.showAll(); this.unmarkAll(); for (var c in h) {
        var d = h[c], e = d.type; e ==
CKEDITOR.STYLE_BLOCK && !a.isContextFor(d.element) ? this.hideItem(c) : (d.checkActive(a) ? this.mark(c) : e == CKEDITOR.STYLE_OBJECT && !d.checkApplicable(a) && (this.hideItem(c), g[e]--), g[e]++)
    } g[CKEDITOR.STYLE_BLOCK] || this.hideGroup(f["panelTitle" + CKEDITOR.STYLE_BLOCK]); g[CKEDITOR.STYLE_INLINE] || this.hideGroup(f["panelTitle" + CKEDITOR.STYLE_INLINE]); g[CKEDITOR.STYLE_OBJECT] || this.hideGroup(f["panelTitle" + CKEDITOR.STYLE_OBJECT])
}, reset: function () {
    d && (delete d._.panel, delete d._.list, d._.committed = 0, d._.items = {},
d._.state = CKEDITOR.TRISTATE_OFF); h = {}; i = []; j()
}
}); b.on("instanceReady", function () { j() })
        }
        })
    })(); (function () {
        function i(c) {
            return { editorFocus: !1, canUndo: !1, modes: { wysiwyg: 1 }, exec: function (d) {
                if (d.editable().hasFocus) {
                    var e = d.getSelection(), b; if (b = (new CKEDITOR.dom.elementPath(e.getCommonAncestor(), e.root)).contains({ td: 1, th: 1 }, 1)) {
                        var e = d.createRange(), a = CKEDITOR.tools.tryThese(function () { var a = b.getParent().$.cells[b.$.cellIndex + (c ? -1 : 1)]; a.parentNode.parentNode; return a }, function () {
                            var a = b.getParent(), a = a.getAscendant("table").$.rows[a.$.rowIndex + (c ? -1 : 1)]; return a.cells[c ? a.cells.length - 1 :
0]
                        }); if (!a && !c) { for (var f = b.getAscendant("table").$, a = b.getParent().$.cells, f = new CKEDITOR.dom.element(f.insertRow(-1), d.document), g = 0, h = a.length; g < h; g++) { var i = f.append((new CKEDITOR.dom.element(a[g], d.document)).clone(!1, !1)); !CKEDITOR.env.ie && i.appendBogus() } e.moveToElementEditStart(f) } else if (a) a = new CKEDITOR.dom.element(a), e.moveToElementEditStart(a), (!e.checkStartOfBlock() || !e.checkEndOfBlock()) && e.selectNodeContents(a); else return !0; e.select(!0); return !0
                    }
                } return !1
            }
            }
        } var h = { editorFocus: !1, modes: { wysiwyg: 1,
            source: 1
        }
        }, g = { exec: function (c) { c.container.focusNext(!0, c.tabIndex) } }, f = { exec: function (c) { c.container.focusPrevious(!0, c.tabIndex) } }; CKEDITOR.plugins.add("tab", { init: function (c) {
            for (var d = !1 !== c.config.enableTabKeyTools, e = c.config.tabSpaces || 0, b = ""; e--; ) b += " "; if (b) c.on("key", function (a) { 9 == a.data.keyCode && (c.insertHtml(b), a.cancel()) }); if (d) c.on("key", function (a) { (9 == a.data.keyCode && c.execCommand("selectNextCell") || a.data.keyCode == CKEDITOR.SHIFT + 9 && c.execCommand("selectPreviousCell")) && a.cancel() });
            c.addCommand("blur", CKEDITOR.tools.extend(g, h)); c.addCommand("blurBack", CKEDITOR.tools.extend(f, h)); c.addCommand("selectNextCell", i()); c.addCommand("selectPreviousCell", i(!0))
        }
        })
    })();
    CKEDITOR.dom.element.prototype.focusNext = function (i, h) {
        var g = void 0 === h ? this.getTabIndex() : h, f, c, d, e, b, a; if (0 >= g) for (b = this.getNextSourceNode(i, CKEDITOR.NODE_ELEMENT); b; ) { if (b.isVisible() && 0 === b.getTabIndex()) { d = b; break } b = b.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT) } else for (b = this.getDocument().getBody().getFirst(); b = b.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT); ) {
            if (!f) if (!c && b.equals(this)) { if (c = !0, i) { if (!(b = b.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; f = 1 } } else c && !this.contains(b) &&
(f = 1); if (b.isVisible() && !(0 > (a = b.getTabIndex()))) { if (f && a == g) { d = b; break } a > g && (!d || !e || a < e) ? (d = b, e = a) : !d && 0 === a && (d = b, e = a) }
        } d && d.focus()
    };
    CKEDITOR.dom.element.prototype.focusPrevious = function (i, h) { for (var g = void 0 === h ? this.getTabIndex() : h, f, c, d, e = 0, b, a = this.getDocument().getBody().getLast(); a = a.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT); ) { if (!f) if (!c && a.equals(this)) { if (c = !0, i) { if (!(a = a.getPreviousSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; f = 1 } } else c && !this.contains(a) && (f = 1); if (a.isVisible() && !(0 > (b = a.getTabIndex()))) if (0 >= g) { if (f && 0 === b) { d = a; break } b > e && (d = a, e = b) } else { if (f && b == g) { d = a; break } if (b < g && (!d || b > e)) d = a, e = b } } d && d.focus() }; CKEDITOR.plugins.add("table", { requires: "dialog", init: function (a) {
        function d(a) { return CKEDITOR.tools.extend(a || {}, { contextSensitive: 1, refresh: function (a, e) { this.setState(e.contains("table", 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } }) } if (!a.blockless) {
            var b = a.lang.table; a.addCommand("table", new CKEDITOR.dialogCommand("table", { context: "table" })); a.addCommand("tableProperties", new CKEDITOR.dialogCommand("tableProperties", d())); a.addCommand("tableDelete", d({ exec: function (a) {
                var c = a.elementPath().contains("table",
1); if (c) { var b = c.getParent(); 1 == b.getChildCount() && !b.is("body", "td", "th") && (c = b); a = a.createRange(); a.moveToPosition(c, CKEDITOR.POSITION_BEFORE_START); c.remove(); a.select() }
            }
            })); a.ui.addButton && a.ui.addButton("Table", { label: b.toolbar, command: "table", toolbar: "insert,30" }); CKEDITOR.dialog.add("table", this.path + "dialogs/table.js"); CKEDITOR.dialog.add("tableProperties", this.path + "dialogs/table.js"); a.addMenuItems && a.addMenuItems({ table: { label: b.menu, command: "tableProperties", group: "table", order: 5 }, tabledelete: { label: b.deleteTable,
                command: "tableDelete", group: "table", order: 1
            }
            }); a.on("doubleclick", function (a) { a.data.element.is("table") && (a.data.dialog = "tableProperties") }); a.contextMenu && a.contextMenu.addListener(function () { return { tabledelete: CKEDITOR.TRISTATE_OFF, table: CKEDITOR.TRISTATE_OFF} })
        }
    }
    }); (function () {
        function o(c) {
            function d(c) { !(0 < b.length) && (c.type == CKEDITOR.NODE_ELEMENT && z.test(c.getName()) && !c.getCustomData("selected_cell")) && (CKEDITOR.dom.element.setMarker(a, c, "selected_cell", !0), b.push(c)) } for (var c = c.getRanges(), b = [], a = {}, e = 0; e < c.length; e++) {
                var f = c[e]; if (f.collapsed) f = f.getCommonAncestor(), (f = f.getAscendant("td", !0) || f.getAscendant("th", !0)) && b.push(f); else {
                    var f = new CKEDITOR.dom.walker(f), g; for (f.guard = d; g = f.next(); ) if ((g = g.getAscendant("td") || g.getAscendant("th")) && !g.getCustomData("selected_cell")) CKEDITOR.dom.element.setMarker(a,
g, "selected_cell", !0), b.push(g)
                }
            } CKEDITOR.dom.element.clearAllMarkers(a); return b
        } function m(c, d) {
            for (var b = o(c), a = b[0], e = a.getAscendant("table"), a = a.getDocument(), f = b[0].getParent(), g = f.$.rowIndex, b = b[b.length - 1], h = b.getParent().$.rowIndex + b.$.rowSpan - 1, b = new CKEDITOR.dom.element(e.$.rows[h]), g = d ? g : h, f = d ? f : b, b = CKEDITOR.tools.buildTableMap(e), e = b[g], g = d ? b[g - 1] : b[g + 1], b = b[0].length, a = a.createElement("tr"), h = 0; e[h] && h < b; h++) {
                var i; 1 < e[h].rowSpan && g && e[h] == g[h] ? (i = e[h], i.rowSpan += 1) : (i = (new CKEDITOR.dom.element(e[h])).clone(),
i.removeAttribute("rowSpan"), !CKEDITOR.env.ie && i.appendBogus(), a.append(i), i = i.$); h += i.colSpan - 1
            } d ? a.insertBefore(f) : a.insertAfter(f)
        } function p(c) {
            if (c instanceof CKEDITOR.dom.selection) {
                for (var d = o(c), b = d[0].getAscendant("table"), a = CKEDITOR.tools.buildTableMap(b), c = d[0].getParent().$.rowIndex, d = d[d.length - 1], e = d.getParent().$.rowIndex + d.$.rowSpan - 1, d = [], f = c; f <= e; f++) {
                    for (var g = a[f], h = new CKEDITOR.dom.element(b.$.rows[f]), i = 0; i < g.length; i++) {
                        var j = new CKEDITOR.dom.element(g[i]), k = j.getParent().$.rowIndex;
                        1 == j.$.rowSpan ? j.remove() : (j.$.rowSpan -= 1, k == f && (k = a[f + 1], k[i - 1] ? j.insertAfter(new CKEDITOR.dom.element(k[i - 1])) : (new CKEDITOR.dom.element(b.$.rows[f + 1])).append(j, 1))); i += j.$.colSpan - 1
                    } d.push(h)
                } a = b.$.rows; b = new CKEDITOR.dom.element(a[e + 1] || (0 < c ? a[c - 1] : null) || b.$.parentNode); for (f = d.length; 0 <= f; f--) p(d[f]); return b
            } c instanceof CKEDITOR.dom.element && (b = c.getAscendant("table"), 1 == b.$.rows.length ? b.remove() : c.remove()); return null
        } function q(c, d) {
            for (var b = d ? Infinity : 0, a = 0; a < c.length; a++) {
                var e; e =
c[a]; for (var f = d, g = e.getParent().$.cells, h = 0, i = 0; i < g.length; i++) { var j = g[i], h = h + (f ? 1 : j.colSpan); if (j == e.$) break } e = h - 1; if (d ? e < b : e > b) b = e
            } return b
        } function n(c, d) {
            for (var b = o(c), a = b[0].getAscendant("table"), e = q(b, 1), b = q(b), e = d ? e : b, f = CKEDITOR.tools.buildTableMap(a), a = [], b = [], g = f.length, h = 0; h < g; h++) a.push(f[h][e]), b.push(d ? f[h][e - 1] : f[h][e + 1]); for (h = 0; h < g; h++) a[h] && (1 < a[h].colSpan && b[h] == a[h] ? (e = a[h], e.colSpan += 1) : (e = (new CKEDITOR.dom.element(a[h])).clone(), e.removeAttribute("colSpan"), !CKEDITOR.env.ie &&
e.appendBogus(), e[d ? "insertBefore" : "insertAfter"].call(e, new CKEDITOR.dom.element(a[h])), e = e.$), h += e.rowSpan - 1)
        } function t(c, d) { var b = c.getStartElement(); if (b = b.getAscendant("td", 1) || b.getAscendant("th", 1)) { var a = b.clone(); CKEDITOR.env.ie || a.appendBogus(); d ? a.insertBefore(b) : a.insertAfter(b) } } function s(c) {
            if (c instanceof CKEDITOR.dom.selection) {
                var c = o(c), d = c[0] && c[0].getAscendant("table"), b; a:
                {
                    var a = 0; b = c.length - 1; for (var e = {}, f, g; f = c[a++]; ) CKEDITOR.dom.element.setMarker(e, f, "delete_cell", !0); for (a =
0; f = c[a++]; ) if ((g = f.getPrevious()) && !g.getCustomData("delete_cell") || (g = f.getNext()) && !g.getCustomData("delete_cell")) { CKEDITOR.dom.element.clearAllMarkers(e); b = g; break a } CKEDITOR.dom.element.clearAllMarkers(e); g = c[0].getParent(); (g = g.getPrevious()) ? b = g.getLast() : (g = c[b].getParent(), b = (g = g.getNext()) ? g.getChild(0) : null)
                } for (g = c.length - 1; 0 <= g; g--) s(c[g]); b ? u(b, !0) : d && d.remove()
            } else c instanceof CKEDITOR.dom.element && (d = c.getParent(), 1 == d.getChildCount() ? d.remove() : c.remove())
        } function u(c, d) {
            var b =
new CKEDITOR.dom.range(c.getDocument()); if (!b["moveToElementEdit" + (d ? "End" : "Start")](c)) b.selectNodeContents(c), b.collapse(d ? !1 : !0); b.select(!0)
        } function v(c, d, b) { c = c[d]; if ("undefined" == typeof b) return c; for (d = 0; c && d < c.length; d++) { if (b.is && c[d] == b.$) return d; if (d == b) return new CKEDITOR.dom.element(c[d]) } return b.is ? -1 : null } function r(c, d, b) {
            var a = o(c), e; if ((d ? 1 != a.length : 2 > a.length) || (e = c.getCommonAncestor()) && e.type == CKEDITOR.NODE_ELEMENT && e.is("table")) return !1; var f, c = a[0]; e = c.getAscendant("table");
            var g = CKEDITOR.tools.buildTableMap(e), h = g.length, i = g[0].length, j = c.getParent().$.rowIndex, k = v(g, j, c); if (d) { var w; try { var l = parseInt(c.getAttribute("rowspan"), 10) || 1; f = parseInt(c.getAttribute("colspan"), 10) || 1; w = g["up" == d ? j - l : "down" == d ? j + l : j]["left" == d ? k - f : "right" == d ? k + f : k] } catch (u) { return !1 } if (!w || c.$ == w) return !1; a["up" == d || "left" == d ? "unshift" : "push"](new CKEDITOR.dom.element(w)) } for (var d = c.getDocument(), m = j, l = w = 0, p = !b && new CKEDITOR.dom.documentFragment(d), r = 0, d = 0; d < a.length; d++) {
                f = a[d]; var n = f.getParent(),
s = f.getFirst(), q = f.$.colSpan, t = f.$.rowSpan, n = n.$.rowIndex, x = v(g, n, f), r = r + q * t, l = Math.max(l, x - k + q); w = Math.max(w, n - j + t); if (!b) { q = f; (t = q.getBogus()) && t.remove(); q.trim(); if (f.getChildren().count()) { if (n != m && s && (!s.isBlockBoundary || !s.isBlockBoundary({ br: 1 }))) (m = p.getLast(CKEDITOR.dom.walker.whitespaces(!0))) && (!m.is || !m.is("br")) && p.append("br"); f.moveChildren(p) } d ? f.remove() : f.setHtml("") } m = n
            } if (b) return w * l == r; p.moveChildren(c); CKEDITOR.env.ie || c.appendBogus(); l >= i ? c.removeAttribute("rowSpan") : c.$.rowSpan =
w; w >= h ? c.removeAttribute("colSpan") : c.$.colSpan = l; b = new CKEDITOR.dom.nodeList(e.$.rows); a = b.count(); for (d = a - 1; 0 <= d; d--) e = b.getItem(d), e.$.cells.length || (e.remove(), a++); return c
        } function x(c, d) {
            var b = o(c); if (1 < b.length) return !1; if (d) return !0; var b = b[0], a = b.getParent(), e = a.getAscendant("table"), f = CKEDITOR.tools.buildTableMap(e), g = a.$.rowIndex, h = v(f, g, b), i = b.$.rowSpan, j; if (1 < i) {
                j = Math.ceil(i / 2); for (var i = Math.floor(i / 2), a = g + j, e = new CKEDITOR.dom.element(e.$.rows[a]), f = v(f, a), k, a = b.clone(), g = 0; g < f.length; g++) if (k =
f[g], k.parentNode == e.$ && g > h) { a.insertBefore(new CKEDITOR.dom.element(k)); break } else k = null; k || e.append(a, !0)
            } else { i = j = 1; e = a.clone(); e.insertAfter(a); e.append(a = b.clone()); k = v(f, g); for (h = 0; h < k.length; h++) k[h].rowSpan++ } CKEDITOR.env.ie || a.appendBogus(); b.$.rowSpan = j; a.$.rowSpan = i; 1 == j && b.removeAttribute("rowSpan"); 1 == i && a.removeAttribute("rowSpan"); return a
        } function y(c, d) {
            var b = o(c); if (1 < b.length) return !1; if (d) return !0; var b = b[0], a = b.getParent(), e = a.getAscendant("table"), e = CKEDITOR.tools.buildTableMap(e),
f = v(e, a.$.rowIndex, b), g = b.$.colSpan; if (1 < g) a = Math.ceil(g / 2), g = Math.floor(g / 2); else { for (var g = a = 1, h = [], i = 0; i < e.length; i++) { var j = e[i]; h.push(j[f]); 1 < j[f].rowSpan && (i += j[f].rowSpan - 1) } for (e = 0; e < h.length; e++) h[e].colSpan++ } e = b.clone(); e.insertAfter(b); CKEDITOR.env.ie || e.appendBogus(); b.$.colSpan = a; e.$.colSpan = g; 1 == a && b.removeAttribute("colSpan"); 1 == g && e.removeAttribute("colSpan"); return e
        } var z = /^(?:td|th)$/; CKEDITOR.plugins.tabletools = { requires: "table,dialog,contextmenu", init: function (c) {
            function d(a) {
                return CKEDITOR.tools.extend(a ||
{}, { contextSensitive: 1, refresh: function (a, b) { this.setState(b.contains({ td: 1, th: 1 }, 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } })
            } var b = c.lang.table; c.addCommand("cellProperties", new CKEDITOR.dialogCommand("cellProperties", d())); CKEDITOR.dialog.add("cellProperties", this.path + "dialogs/tableCell.js"); c.addCommand("rowDelete", d({ exec: function (a) { a = a.getSelection(); u(p(a)) } })); c.addCommand("rowInsertBefore", d({ exec: function (a) { a = a.getSelection(); m(a, !0) } })); c.addCommand("rowInsertAfter", d({ exec: function (a) {
                a =
a.getSelection(); m(a)
            }
            })); c.addCommand("columnDelete", d({ exec: function (a) {
                for (var a = a.getSelection(), a = o(a), b = a[0], c = a[a.length - 1], a = b.getAscendant("table"), d = CKEDITOR.tools.buildTableMap(a), h, i, j = [], k = 0, m = d.length; k < m; k++) for (var l = 0, n = d[k].length; l < n; l++) d[k][l] == b.$ && (h = l), d[k][l] == c.$ && (i = l); for (k = h; k <= i; k++) for (l = 0; l < d.length; l++) c = d[l], b = new CKEDITOR.dom.element(a.$.rows[l]), c = new CKEDITOR.dom.element(c[k]), c.$ && (1 == c.$.colSpan ? c.remove() : c.$.colSpan -= 1, l += c.$.rowSpan - 1, b.$.cells.length || j.push(b));
                i = a.$.rows[0] && a.$.rows[0].cells; h = new CKEDITOR.dom.element(i[h] || (h ? i[h - 1] : a.$.parentNode)); j.length == m && a.remove(); h && u(h, !0)
            }
            })); c.addCommand("columnInsertBefore", d({ exec: function (a) { a = a.getSelection(); n(a, !0) } })); c.addCommand("columnInsertAfter", d({ exec: function (a) { a = a.getSelection(); n(a) } })); c.addCommand("cellDelete", d({ exec: function (a) { a = a.getSelection(); s(a) } })); c.addCommand("cellMerge", d({ exec: function (a) { u(r(a.getSelection()), !0) } })); c.addCommand("cellMergeRight", d({ exec: function (a) {
                u(r(a.getSelection(),
"right"), !0)
            }
            })); c.addCommand("cellMergeDown", d({ exec: function (a) { u(r(a.getSelection(), "down"), !0) } })); c.addCommand("cellVerticalSplit", d({ exec: function (a) { u(x(a.getSelection())) } })); c.addCommand("cellHorizontalSplit", d({ exec: function (a) { u(y(a.getSelection())) } })); c.addCommand("cellInsertBefore", d({ exec: function (a) { a = a.getSelection(); t(a, !0) } })); c.addCommand("cellInsertAfter", d({ exec: function (a) { a = a.getSelection(); t(a) } })); c.addMenuItems && c.addMenuItems({ tablecell: { label: b.cell.menu, group: "tablecell",
                order: 1, getItems: function () {
                    var a = c.getSelection(), b = o(a); return { tablecell_insertBefore: CKEDITOR.TRISTATE_OFF, tablecell_insertAfter: CKEDITOR.TRISTATE_OFF, tablecell_delete: CKEDITOR.TRISTATE_OFF, tablecell_merge: r(a, null, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_right: r(a, "right", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_down: r(a, "down", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_split_vertical: x(a, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED,
                        tablecell_split_horizontal: y(a, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_properties: 0 < b.length ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED
                    }
                }
            }, tablecell_insertBefore: { label: b.cell.insertBefore, group: "tablecell", command: "cellInsertBefore", order: 5 }, tablecell_insertAfter: { label: b.cell.insertAfter, group: "tablecell", command: "cellInsertAfter", order: 10 }, tablecell_delete: { label: b.cell.deleteCell, group: "tablecell", command: "cellDelete", order: 15 }, tablecell_merge: { label: b.cell.merge,
                group: "tablecell", command: "cellMerge", order: 16
            }, tablecell_merge_right: { label: b.cell.mergeRight, group: "tablecell", command: "cellMergeRight", order: 17 }, tablecell_merge_down: { label: b.cell.mergeDown, group: "tablecell", command: "cellMergeDown", order: 18 }, tablecell_split_horizontal: { label: b.cell.splitHorizontal, group: "tablecell", command: "cellHorizontalSplit", order: 19 }, tablecell_split_vertical: { label: b.cell.splitVertical, group: "tablecell", command: "cellVerticalSplit", order: 20 }, tablecell_properties: { label: b.cell.title,
                group: "tablecellproperties", command: "cellProperties", order: 21
            }, tablerow: { label: b.row.menu, group: "tablerow", order: 1, getItems: function () { return { tablerow_insertBefore: CKEDITOR.TRISTATE_OFF, tablerow_insertAfter: CKEDITOR.TRISTATE_OFF, tablerow_delete: CKEDITOR.TRISTATE_OFF} } }, tablerow_insertBefore: { label: b.row.insertBefore, group: "tablerow", command: "rowInsertBefore", order: 5 }, tablerow_insertAfter: { label: b.row.insertAfter, group: "tablerow", command: "rowInsertAfter", order: 10 }, tablerow_delete: { label: b.row.deleteRow,
                group: "tablerow", command: "rowDelete", order: 15
            }, tablecolumn: { label: b.column.menu, group: "tablecolumn", order: 1, getItems: function () { return { tablecolumn_insertBefore: CKEDITOR.TRISTATE_OFF, tablecolumn_insertAfter: CKEDITOR.TRISTATE_OFF, tablecolumn_delete: CKEDITOR.TRISTATE_OFF} } }, tablecolumn_insertBefore: { label: b.column.insertBefore, group: "tablecolumn", command: "columnInsertBefore", order: 5 }, tablecolumn_insertAfter: { label: b.column.insertAfter, group: "tablecolumn", command: "columnInsertAfter", order: 10 }, tablecolumn_delete: { label: b.column.deleteColumn,
                group: "tablecolumn", command: "columnDelete", order: 15
            }
            }); c.contextMenu && c.contextMenu.addListener(function (a, b, c) { return (a = c.contains({ td: 1, th: 1 }, 1)) && !a.isReadOnly() ? { tablecell: CKEDITOR.TRISTATE_OFF, tablerow: CKEDITOR.TRISTATE_OFF, tablecolumn: CKEDITOR.TRISTATE_OFF} : null })
        }, getSelectedCells: o
        }; CKEDITOR.plugins.add("tabletools", CKEDITOR.plugins.tabletools)
    })();
    CKEDITOR.tools.buildTableMap = function (o) { for (var o = o.$.rows, m = -1, p = [], q = 0; q < o.length; q++) { m++; !p[m] && (p[m] = []); for (var n = -1, t = 0; t < o[q].cells.length; t++) { var s = o[q].cells[t]; for (n++; p[m][n]; ) n++; for (var u = isNaN(s.colSpan) ? 1 : s.colSpan, s = isNaN(s.rowSpan) ? 1 : s.rowSpan, v = 0; v < s; v++) { p[m + v] || (p[m + v] = []); for (var r = 0; r < u; r++) p[m + v][n + r] = o[q].cells[t] } n += u - 1 } } return p }; (function () {
        function h(a) { this.editor = a; this.reset() } CKEDITOR.plugins.add("undo", { init: function (a) {
            function c(a) { b.enabled && !1 !== a.data.command.canUndo && b.save() } var b = new h(a), d = a.addCommand("undo", { exec: function () { b.undo() && (a.selectionChange(), this.fire("afterUndo")) }, state: CKEDITOR.TRISTATE_DISABLED, canUndo: !1 }), e = a.addCommand("redo", { exec: function () { b.redo() && (a.selectionChange(), this.fire("afterRedo")) }, state: CKEDITOR.TRISTATE_DISABLED, canUndo: !1 }); a.setKeystroke([[CKEDITOR.CTRL + 90, "undo"],
[CKEDITOR.CTRL + 89, "redo"], [CKEDITOR.CTRL + CKEDITOR.SHIFT + 90, "redo"]]); b.onChange = function () { d.setState(b.undoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); e.setState(b.redoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) }; a.on("beforeCommandExec", c); a.on("afterCommandExec", c); a.on("saveSnapshot", function (a) { b.save(a.data && a.data.contentOnly) }); a.on("contentDom", function () { a.editable().on("keydown", function (a) { !a.data.$.ctrlKey && !a.data.$.metaKey && b.type(a) }) }); a.on("beforeModeUnload",
function () { "wysiwyg" == a.mode && b.save(!0) }); a.on("mode", function () { b.enabled = a.readOnly ? !1 : "wysiwyg" == a.mode; b.onChange() }); a.ui.addButton && (a.ui.addButton("Undo", { label: a.lang.undo.undo, command: "undo", toolbar: "undo,10" }), a.ui.addButton("Redo", { label: a.lang.undo.redo, command: "redo", toolbar: "undo,20" })); a.resetUndo = function () { b.reset(); a.fire("saveSnapshot") }; a.on("updateSnapshot", function () { b.currentImage && b.update() }); a.on("lockSnapshot", b.lock, b); a.on("unlockSnapshot", b.unlock, b)
        }
        }); CKEDITOR.plugins.undo =
{}; var i = CKEDITOR.plugins.undo.Image = function (a) { this.editor = a; a.fire("beforeUndoImage"); var c = a.getSnapshot(), b = c && a.getSelection(); CKEDITOR.env.ie && c && (c = c.replace(/\s+data-cke-expando=".*?"/g, "")); this.contents = c; this.bookmarks = b && b.createBookmarks2(!0); a.fire("afterUndoImage") }, j = /\b(?:href|src|name)="[^"]*?"/gi; i.prototype = { equals: function (a, c) {
    var b = this.contents, d = a.contents; if (CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat)) b = b.replace(j, ""), d = d.replace(j, ""); if (b != d) return !1;
    if (c) return !0; b = this.bookmarks; d = a.bookmarks; if (b || d) { if (!b || !d || b.length != d.length) return !1; for (var e = 0; e < b.length; e++) { var g = b[e], f = d[e]; if (g.startOffset != f.startOffset || g.endOffset != f.endOffset || !CKEDITOR.tools.arrayCompare(g.start, f.start) || !CKEDITOR.tools.arrayCompare(g.end, f.end)) return !1 } } return !0
}
}; var k = { 8: 1, 46: 1 }, m = { 16: 1, 17: 1, 18: 1 }, l = { 37: 1, 38: 1, 39: 1, 40: 1 }; h.prototype = { type: function (a) {
    var a = a && a.data.getKey(), c = a in k, b = this.lastKeystroke in k, d = c && a == this.lastKeystroke, e = a in l, g = this.lastKeystroke in
l; if (!(a in m || this.typing) || !c && !e && (b || g) || c && !d) { var f = new i(this.editor), h = this.snapshots.length; CKEDITOR.tools.setTimeout(function () { var a = this.editor.getSnapshot(); CKEDITOR.env.ie && (a = a.replace(/\s+data-cke-expando=".*?"/g, "")); f.contents != a && h == this.snapshots.length && (this.typing = !0, this.save(!1, f, !1) || this.snapshots.splice(this.index + 1, this.snapshots.length - this.index - 1), this.hasUndo = !0, this.hasRedo = !1, this.modifiersCount = this.typesCount = 1, this.onChange()) }, 0, this) } this.lastKeystroke = a; c ?
(this.typesCount = 0, this.modifiersCount++, 25 < this.modifiersCount && (this.save(!1, null, !1), this.modifiersCount = 1)) : e || (this.modifiersCount = 0, this.typesCount++, 25 < this.typesCount && (this.save(!1, null, !1), this.typesCount = 1))
}, reset: function () { this.lastKeystroke = 0; this.snapshots = []; this.index = -1; this.limit = this.editor.config.undoStackSize || 20; this.currentImage = null; this.hasRedo = this.hasUndo = !1; this.locked = null; this.resetType() }, resetType: function () {
    this.typing = !1; delete this.lastKeystroke; this.modifiersCount =
this.typesCount = 0
}, fireChange: function () { this.hasUndo = !!this.getNextImage(!0); this.hasRedo = !!this.getNextImage(!1); this.resetType(); this.onChange() }, save: function (a, c, b) { if (this.locked) return !1; var d = this.snapshots; c || (c = new i(this.editor)); if (!1 === c.contents || this.currentImage && c.equals(this.currentImage, a)) return !1; d.splice(this.index + 1, d.length - this.index - 1); d.length == this.limit && d.shift(); this.index = d.push(c) - 1; this.currentImage = c; !1 !== b && this.fireChange(); return !0 }, restoreImage: function (a) {
    var c =
this.editor, b; a.bookmarks && (c.focus(), b = c.getSelection()); this.locked = 1; this.editor.loadSnapshot(a.contents); a.bookmarks ? b.selectBookmarks(a.bookmarks) : CKEDITOR.env.ie && (c = this.editor.document.getBody().$.createTextRange(), c.collapse(!0), c.select()); this.locked = 0; this.index = a.index; this.update(); this.fireChange()
}, getNextImage: function (a) {
    var c = this.snapshots, b = this.currentImage, d; if (b) if (a) for (d = this.index - 1; 0 <= d; d--) { if (a = c[d], !b.equals(a, !0)) return a.index = d, a } else for (d = this.index + 1; d < c.length; d++) if (a =
c[d], !b.equals(a, !0)) return a.index = d, a; return null
}, redoable: function () { return this.enabled && this.hasRedo }, undoable: function () { return this.enabled && this.hasUndo }, undo: function () { if (this.undoable()) { this.save(!0); var a = this.getNextImage(!0); if (a) return this.restoreImage(a), !0 } return !1 }, redo: function () { if (this.redoable() && (this.save(!0), this.redoable())) { var a = this.getNextImage(!1); if (a) return this.restoreImage(a), !0 } return !1 }, update: function () {
    this.locked || this.snapshots.splice(this.index, 1, this.currentImage =
new i(this.editor))
}, lock: function () { if (!this.locked) { var a = this.editor.getSnapshot(); this.locked = { update: this.currentImage && a == this.currentImage.contents ? a : null} } }, unlock: function () { if (this.locked) { var a = this.locked.update, c = this.editor.getSnapshot(); this.locked = null; "string" == typeof a && c != a && this.update() } }
}
    })(); CKEDITOR.config.plugins = 'dialogui,dialog,about,a11yhelp,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,resize,button,toolbar,elementspath,list,indent,enterkey,entities,popup,filebrowser,floatingspace,listblock,richcombo,format,htmlwriter,horizontalrule,wysiwygarea,image,fakeobjects,link,magicline,maximize,pastetext,pastefromword,removeformat,sourcearea,specialchar,stylescombo,tab,table,tabletools,undo'; CKEDITOR.config.skin = 'moono'; (function () { var icons = ('about,0,bold,32,italic,64,strike,96,subscript,128,superscript,160,underline,192,blockquote,224,copy-rtl,256,copy,288,cut-rtl,320,cut,352,paste-rtl,384,paste,416,bulletedlist-rtl,448,bulletedlist,480,numberedlist-rtl,512,numberedlist,544,indent-rtl,576,indent,608,outdent-rtl,640,outdent,672,horizontalrule,704,image,736,anchor-rtl,768,anchor,800,link,832,unlink,864,maximize,896,pastetext-rtl,928,pastetext,960,pastefromword-rtl,992,pastefromword,1024,removeformat,1056,source-rtl,1088,source,1120,specialchar,1152,table,1184,redo-rtl,1216,redo,1248,undo-rtl,1280,undo,1312'), path = CKEDITOR.getUrl('plugins/icons.png'), icons = icons.split(','); for (var i = 0; i < icons.length; i++) CKEDITOR.skin.icons[icons[i]] = { path: path, offset: -icons[++i] }; })(); CKEDITOR.lang.languages = { "af": 1, "ar": 1, "eu": 1, "bn": 1, "bs": 1, "bg": 1, "ca": 1, "zh-cn": 1, "zh": 1, "hr": 1, "cs": 1, "da": 1, "nl": 1, "en": 1, "en-au": 1, "en-ca": 1, "en-gb": 1, "eo": 1, "et": 1, "fo": 1, "fi": 1, "fr": 1, "fr-ca": 1, "gl": 1, "ka": 1, "de": 1, "el": 1, "gu": 1, "he": 1, "hi": 1, "hu": 1, "is": 1, "it": 1, "ja": 1, "km": 1, "ko": 1, "ku": 1, "lv": 1, "lt": 1, "mk": 1, "ms": 1, "mn": 1, "no": 1, "nb": 1, "fa": 1, "pl": 1, "pt-br": 1, "pt": 1, "ro": 1, "ru": 1, "sr": 1, "sr-latn": 1, "sk": 1, "sl": 1, "es": 1, "sv": 1, "th": 1, "tr": 1, "ug": 1, "uk": 1, "vi": 1, "cy": 1 };
} ());