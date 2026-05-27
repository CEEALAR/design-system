"use client";

import { useEffect, useRef, useState } from "react";

// Animates a number up from zero the first time it scrolls into view, then
// stops. Takes the final display string (e.g. "8.9/10", "76.3%", "$7.07M",
// "$11,820", "300+") and animates only the numeric part, preserving the
// prefix (like "$"), suffix (like "%", "/10", "M", "+"), decimal precision,
// and thousands separators.
//
// Reduced-motion and no-JS safe: it renders the final value on the server,
// and if the visitor prefers reduced motion it never animates. Pair with the
// Playfair-italic gold numeral treatment from the brand (see StatBlock).
function parse(value) {
  const match = value.match(/^(\D*)([\d,]*\.?\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const target = parseFloat(numStr.replace(/,/g, ""));
  if (Number.isNaN(target)) return null;
  return { prefix, suffix, decimals, target };
}

export function CountUp({ value, durationMs = 1100 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  // Parse inside the effect and depend on the stable `value` string, not a
  // freshly-parsed object (a new reference each render would re-run the effect
  // every frame and restart the count, causing flicker).
  useEffect(() => {
    const parsed = parse(value);
    if (!parsed) return;
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n) =>
      parsed.prefix +
      n.toLocaleString(undefined, {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      }) +
      parsed.suffix;

    let raf = 0;
    let snap = 0;
    let started = false;
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / durationMs, 1);
        setDisplay(format(parsed.target * easeOutExpo(t)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      setDisplay(format(0));
      raf = requestAnimationFrame(tick);
      // Guarantee the final value even if rAF is throttled or paused, so the
      // number can never freeze mid-count.
      snap = window.setTimeout(
        () => setDisplay(format(parsed.target)),
        durationMs + 150,
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(snap);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {display}
    </span>
  );
}
