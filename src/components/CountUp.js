import { useEffect, useRef, useState } from "react";

function parseStat(value) {
  const match = String(value).match(/^(\d+)(.*)$/);
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: value };
}

export default function CountUp({ value, duration = 1800 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const { num, suffix } = parseStat(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = now => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(num * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, duration]);

  return (
    <span ref={ref} className="stat-number">
      {display}{suffix}
    </span>
  );
}
