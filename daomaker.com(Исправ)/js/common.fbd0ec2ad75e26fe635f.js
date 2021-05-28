(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], { QUrN: function(e, t, n) { "use strict";
            n.d(t, "a", function() { return s }); var i = n("MGFw"),
                r = n("WtWf"),
                c = n("fXoL"),
                o = (n("wd/R"), new c.InjectionToken("NGX_MOMENT_OPTIONS")),
                s = function() { var e = function() {
                        function e() { Object(i.a)(this, e) } return Object(r.a)(e, null, [{ key: "forRoot", value: function(t) { return { ngModule: e, providers: [{ provide: o, useValue: Object.assign({}, t) }] } } }]), e }(); return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275mod = c["\u0275\u0275defineNgModule"]({ type: e }), e.\u0275inj = c["\u0275\u0275defineInjector"]({}), e }() }, jCJ1: function(e, t, n) { "use strict";
            n.d(t, "a", function() { return b }), n.d(t, "b", function() { return m }), n.d(t, "c", function() { return j }), n.d(t, "d", function() { return w }), n("95OS"); var i = n("MGFw"),
                r = n("WtWf"),
                c = n("fXoL"),
                o = n("ofXK"),
                s = n("LRne"),
                a = n("2Vo4"),
                u = (n("XNiG"), n("3Pt+")),
                h = new c.InjectionToken("recaptcha-language"),
                d = new c.InjectionToken("recaptcha-base-url"),
                f = new c.InjectionToken("recaptcha-nonce-tag"),
                l = new c.InjectionToken("recaptcha-settings"),
                p = new c.InjectionToken("recaptcha-v3-site-key"),
                v = function() { var e = function() {
                        function e(t, n, r, c, a) { Object(i.a)(this, e), this.platformId = t, this.language = n, this.baseUrl = r, this.nonce = c, this.v3SiteKey = a, this.init(), this.ready = Object(o.B)(this.platformId) ? e.ready.asObservable() : Object(s.a)() } return Object(r.a)(e, [{ key: "init", value: function() { if (!e.ready && Object(o.B)(this.platformId)) { var t = new a.a(null);
                                    e.ready = t,
                                        function(e, n, i, r, c) { window.ng2recaptchaloaded = function() {! function(e) { t.next(e) }(grecaptcha) }; var o = document.createElement("script");
                                            o.innerHTML = "", o.src = "".concat(r || "https://www.google.com/recaptcha/api.js", "?render=").concat(e, "&onload=ng2recaptchaloaded").concat(i), c && (o.nonce = c), o.async = !0, o.defer = !0, document.head.appendChild(o) }(this.v3SiteKey || "explicit", 0, this.language ? "&hl=" + this.language : "", this.baseUrl, this.nonce) } } }]), e }(); return e.\u0275fac = function(t) { return new(t || e)(c["\u0275\u0275inject"](c.PLATFORM_ID), c["\u0275\u0275inject"](h, 8), c["\u0275\u0275inject"](d, 8), c["\u0275\u0275inject"](f, 8), c["\u0275\u0275inject"](p, 8)) }, e.\u0275prov = c["\u0275\u0275defineInjectable"]({ token: e, factory: e.\u0275fac }), e.ready = null, e }(),
                g = 0,
                b = function() { var e = function() {
                        function e(t, n, r, o) { Object(i.a)(this, e), this.elementRef = t, this.loader = n, this.zone = r, this.id = "ngrecaptcha-".concat(g++), this.errorMode = "default", this.resolved = new c.EventEmitter, this.error = new c.EventEmitter, o && (this.siteKey = o.siteKey, this.theme = o.theme, this.type = o.type, this.size = o.size, this.badge = o.badge) } return Object(r.a)(e, [{ key: "ngAfterViewInit", value: function() { var e = this;
                                this.subscription = this.loader.ready.subscribe(function(t) { null != t && t.render instanceof Function && (e.grecaptcha = t, e.renderRecaptcha()) }) } }, { key: "ngOnDestroy", value: function() { this.grecaptchaReset(), this.subscription && this.subscription.unsubscribe() } }, { key: "execute", value: function() { "invisible" === this.size && (null != this.widget ? this.grecaptcha.execute(this.widget) : this.executeRequested = !0) } }, { key: "reset", value: function() { null != this.widget && (this.grecaptcha.getResponse(this.widget) && this.resolved.emit(null), this.grecaptchaReset()) } }, { key: "expired", value: function() { this.resolved.emit(null) } }, { key: "errored", value: function(e) { this.error.emit(e) } }, { key: "captchaResponseCallback", value: function(e) { this.resolved.emit(e) } }, { key: "grecaptchaReset", value: function() { var e = this;
                                null != this.widget && this.zone.runOutsideAngular(function() { return e.grecaptcha.reset(e.widget) }) } }, { key: "renderRecaptcha", value: function() { var e = this,
                                    t = { badge: this.badge, callback: function(t) { e.zone.run(function() { return e.captchaResponseCallback(t) }) }, "expired-callback": function() { e.zone.run(function() { return e.expired() }) }, sitekey: this.siteKey, size: this.size, tabindex: this.tabIndex, theme: this.theme, type: this.type }; "handled" === this.errorMode && (t["error-callback"] = function() { for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                                    e.zone.run(function() { return e.errored(n) }) }), this.widget = this.grecaptcha.render(this.elementRef.nativeElement, t), !0 === this.executeRequested && (this.executeRequested = !1, this.execute()) } }]), e }(); return e.\u0275fac = function(t) { return new(t || e)(c["\u0275\u0275directiveInject"](c.ElementRef), c["\u0275\u0275directiveInject"](v), c["\u0275\u0275directiveInject"](c.NgZone), c["\u0275\u0275directiveInject"](l, 8)) }, e.\u0275cmp = c["\u0275\u0275defineComponent"]({ type: e, selectors: [
                            ["re-captcha"]
                        ], hostVars: 1, hostBindings: function(e, t) { 2 & e && c["\u0275\u0275attribute"]("id", t.id) }, inputs: { id: "id", errorMode: "errorMode", siteKey: "siteKey", theme: "theme", type: "type", size: "size", badge: "badge", tabIndex: "tabIndex" }, outputs: { resolved: "resolved", error: "error" }, exportAs: ["reCaptcha"], decls: 0, vars: 0, template: function(e, t) {}, encapsulation: 2 }), e }(),
                y = function() { var e = function e() { Object(i.a)(this, e) }; return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275mod = c["\u0275\u0275defineNgModule"]({ type: e }), e.\u0275inj = c["\u0275\u0275defineInjector"]({}), e }(),
                j = function() { var e = function e() { Object(i.a)(this, e) }; return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275mod = c["\u0275\u0275defineNgModule"]({ type: e }), e.\u0275inj = c["\u0275\u0275defineInjector"]({ providers: [v], imports: [
                            [y]
                        ] }), e }(),
                w = function() { var e = function() {
                        function e(t) { Object(i.a)(this, e), this.host = t } return Object(r.a)(e, [{ key: "writeValue", value: function(e) { e || this.host.reset() } }, { key: "registerOnChange", value: function(e) { this.onChange = e } }, { key: "registerOnTouched", value: function(e) { this.onTouched = e } }, { key: "onResolve", value: function(e) { this.onChange && this.onChange(e), this.onTouched && this.onTouched() } }]), e }(); return e.\u0275fac = function(t) { return new(t || e)(c["\u0275\u0275directiveInject"](b)) }, e.\u0275dir = c["\u0275\u0275defineDirective"]({ type: e, selectors: [
                            ["re-captcha", "formControlName", ""],
                            ["re-captcha", "formControl", ""],
                            ["re-captcha", "ngModel", ""]
                        ], hostBindings: function(e, t) { 1 & e && c["\u0275\u0275listener"]("resolved", function(e) { return t.onResolve(e) }) }, features: [c["\u0275\u0275ProvidersFeature"]([{ multi: !0, provide: u.i, useExisting: Object(c.forwardRef)(function() { return e }) }])] }), e }(),
                m = function() { var e = function e() { Object(i.a)(this, e) }; return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275mod = c["\u0275\u0275defineNgModule"]({ type: e }), e.\u0275inj = c["\u0275\u0275defineInjector"]({ imports: [
                            [u.g, y]
                        ] }), e }() }, mgSA: function(e, t, n) { "use strict";
            n.d(t, "a", function() { return u }); var i = n("mrSG"),
                r = n("XNiG"),
                c = n("cWaD"),
                o = n("vFK0"),
                s = n("fXoL"),
                a = n("tk/3"),
                u = function() {
                    function e(e, t, n) { this._http = e, this.server = t, this.envConfig = n, this.headerOptions = null, this._isLoggedIn = !1, this.authSub = new r.b; var i = this.envConfig.getConfig();
                        this.serverUrl = i.serverUrl } return e.prototype.setupAuth = function() { return Object(i.b)(this, void 0, void 0, function() { return Object(i.e)(this, function(e) { switch (e.label) {
                                    case 0:
                                        return [4, this.server.mfaSetup()];
                                    case 1:
                                        return [2, e.sent()] } }) }) }, e.prototype.getAuth = function() { return this._http.get(this.serverUrl + "/tfa/setup", { observe: "response" }) }, e.prototype.deleteAuth = function(e) { return this.server.mfaDisable(e) }, e.prototype.verifyAuth = function(e) { return this.server.mfaVerify(e) }, e.\u0275fac = function(t) { return new(t || e)(s["\u0275\u0275inject"](a.a), s["\u0275\u0275inject"](o.a), s["\u0275\u0275inject"](c.a)) }, e.\u0275prov = s["\u0275\u0275defineInjectable"]({ token: e, factory: e.\u0275fac, providedIn: "root" }), e }() } }
]);