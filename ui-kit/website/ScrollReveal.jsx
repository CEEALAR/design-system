"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Drives the scroll-reveal motion defined in effects-and-motion.css.
// Observes every top-level section/article (and any opt-in
// [data-reveal-stagger] container) and adds `.is-visible` when it enters
// the viewport. The hidden state itself is gated behind the `reveal-enabled`
// class on <html>, set by an inline head script ONLY when JS is on and
// reduced-motion is off, so it is pure progressive enhancement: no JS or
// reduced-motion means everything is visible from the start, no FOUC, no
// layout shift.
//
// Mount once in the root layout. Add the enabling script to <body>:
//   <script dangerouslySetInnerHTML={{ __html:
//     "(function(){try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-enabled');}}catch(e){}})();"
//   }} />
// and set suppressHydrationWarning on <html> (the script mutates its class
// before hydration, same pattern as next-themes).
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.documentElement.classList.contains("reveal-enabled")) return;

    const targets = Array.from(
      document.querySelectorAll(
        "main > section, main > article, [data-reveal-stagger]",
      ),
    );
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
