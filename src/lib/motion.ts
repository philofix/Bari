import { animate, inView as motionInView, stagger } from 'motion';

export { animate, stagger };

/**
 * motion's inView, plus: elements already scrolled past when behaviour binds
 * (e.g. the visitor scrolled before hydration finished) trigger immediately,
 * otherwise they would never intersect again and stay in their hidden state.
 */
export function inView(el: Element, onEnter: () => void, opts?: Parameters<typeof motionInView>[2]): () => void {
  if (el.getBoundingClientRect().bottom < 0) {
    onEnter();
    return () => {};
  }
  return motionInView(el, () => { onEnter(); }, opts);
}

/** Easing used across the prototype. */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT = [0.4, 0, 0.2, 1] as const;
export const SPRING = { type: 'spring', stiffness: 320, damping: 22 } as const;

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Mirrors the prototype's `ok` flag: animate only when motion is allowed. */
export function motionOK(): boolean {
  return !prefersReducedMotion();
}

export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

export type Cleanup = () => void;

/** Collects teardown callbacks so behaviours can be mounted/unmounted with React effects. */
export class Scope {
  private fns: Cleanup[] = [];
  add(fn: Cleanup | void | undefined | null) {
    if (fn) this.fns.push(fn);
  }
  on<K extends keyof WindowEventMap>(target: Window, type: K, fn: (e: WindowEventMap[K]) => void, opts?: AddEventListenerOptions): void;
  on(target: EventTarget, type: string, fn: (e: never) => void, opts?: AddEventListenerOptions): void;
  on(target: EventTarget, type: string, fn: (e: never) => void, opts?: AddEventListenerOptions) {
    target.addEventListener(type, fn as EventListener, opts);
    this.fns.push(() => target.removeEventListener(type, fn as EventListener, opts));
  }
  /** Track an animation so infinite loops are stopped on unmount. */
  track<T extends { stop: () => void }>(a: T): T {
    this.fns.push(() => a.stop());
    return a;
  }
  dispose() {
    for (const fn of this.fns.splice(0).reverse()) {
      try {
        fn();
      } catch {
        /* element may already be gone */
      }
    }
  }
}
