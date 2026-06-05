import { useEffect, useRef } from "react";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

function loadCalendlyScript() {
  return new Promise((resolve, reject) => {
    if (window.Calendly) {
      resolve();
      return;
    }
    const existing = document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function CalendlyEmbed({ url, prefill }) {
  const containerRef = useRef(null);

  const prefillKey = JSON.stringify(prefill || {});

  useEffect(() => {
    if (!url || !containerRef.current) return;

    let cancelled = false;
    const answers = JSON.parse(prefillKey);

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: answers
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [url, prefillKey]);

  return (
    <div
      ref={containerRef}
      className="calendly-embed"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
