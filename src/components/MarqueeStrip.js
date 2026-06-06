const sectors = [
  "Energy",
  "Infrastructure",
  "Oil & Gas",
  "Renewables",
  "Civil Engineering",
  "HSE Advisory",
  "Programme Management",
  "Pipeline Design"
];

export default function MarqueeStrip() {
  const items = [...sectors, ...sectors];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
