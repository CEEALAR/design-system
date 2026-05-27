"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// Crossfades between routes using the native View Transitions API. Intercepts
// internal link clicks in the capture phase (before Next's own Link handler),
// starts a view transition, and runs the navigation inside it. The transition
// promise resolves when the pathname commits, so the browser captures the NEW
// page rather than a stale frame.
//
// Pure progressive enhancement: if startViewTransition is missing (Safari < 18,
// Firefox) or the visitor prefers reduced motion, it does nothing and Next's
// normal navigation happens. Crossfade timing/disable lives in CSS
// (::view-transition-* in effects-and-motion.css). Mount once in the root layout.
export function ViewTransitions() {
  const router = useRouter();
  const pathname = usePathname();
  const resolveRef = useRef(null);

  useEffect(() => {
    if (resolveRef.current) {
      resolveRef.current();
      resolveRef.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof document.startViewTransition !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onClick = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const anchor = e.target?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      if (!href || (target && target !== "_self")) return;
      if (!href.startsWith("/") || href.startsWith("//")) return;
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname) return;

      e.preventDefault();
      e.stopImmediatePropagation();

      document.startViewTransition(
        () =>
          new Promise((resolve) => {
            resolveRef.current = resolve;
            router.push(href);
            window.setTimeout(() => {
              if (resolveRef.current) {
                resolveRef.current();
                resolveRef.current = null;
              }
            }, 800);
          }),
      );
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
