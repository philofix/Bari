"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scope = exports.$$ = exports.$ = exports.SPRING = exports.EASE_OUT = exports.EASE = exports.stagger = exports.animate = void 0;
exports.inView = inView;
exports.prefersReducedMotion = prefersReducedMotion;
exports.motionOK = motionOK;
var motion_1 = require("motion");
Object.defineProperty(exports, "animate", { enumerable: true, get: function () { return motion_1.animate; } });
Object.defineProperty(exports, "stagger", { enumerable: true, get: function () { return motion_1.stagger; } });
/**
 * motion's inView, plus: elements already scrolled past when behaviour binds
 * (e.g. the visitor scrolled before hydration finished) trigger immediately,
 * otherwise they would never intersect again and stay in their hidden state.
 */
function inView(el, onEnter, opts) {
    if (el.getBoundingClientRect().bottom < 0) {
        onEnter();
        return function () { };
    }
    return (0, motion_1.inView)(el, function () { onEnter(); }, opts);
}
/** Easing used across the prototype. */
exports.EASE = [0.22, 1, 0.36, 1];
exports.EASE_OUT = [0.4, 0, 0.2, 1];
exports.SPRING = { type: 'spring', stiffness: 320, damping: 22 };
function prefersReducedMotion() {
    return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
/** Mirrors the prototype's `ok` flag: animate only when motion is allowed. */
function motionOK() {
    return !prefersReducedMotion();
}
var $ = function (sel, root) {
    if (root === void 0) { root = document; }
    return root.querySelector(sel);
};
exports.$ = $;
var $$ = function (sel, root) {
    if (root === void 0) { root = document; }
    return Array.from(root.querySelectorAll(sel));
};
exports.$$ = $$;
/** Collects teardown callbacks so behaviours can be mounted/unmounted with React effects. */
var Scope = /** @class */ (function () {
    function Scope() {
        this.fns = [];
    }
    Scope.prototype.add = function (fn) {
        if (fn)
            this.fns.push(fn);
    };
    Scope.prototype.on = function (target, type, fn, opts) {
        target.addEventListener(type, fn, opts);
        this.fns.push(function () { return target.removeEventListener(type, fn, opts); });
    };
    /** Track an animation so infinite loops are stopped on unmount. */
    Scope.prototype.track = function (a) {
        this.fns.push(function () { return a.stop(); });
        return a;
    };
    Scope.prototype.dispose = function () {
        for (var _i = 0, _a = this.fns.splice(0).reverse(); _i < _a.length; _i++) {
            var fn = _a[_i];
            try {
                fn();
            }
            catch (_b) {
                /* element may already be gone */
            }
        }
    };
    return Scope;
}());
exports.Scope = Scope;
