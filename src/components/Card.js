import React, { useEffect, useRef, useState } from "react";

export default function Card({ title, subtitle, image, children, tag }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImgLoaded(true);
    }
  }, [image]);

  return (
    <article className="card">
      <div className="card-accent" aria-hidden="true" />
      {image && (
        <div className="card-media">
          <img
            ref={imgRef}
            src={image}
            alt={title}
            loading="lazy"
            className={imgLoaded ? "is-loaded" : ""}
            onLoad={() => setImgLoaded(true)}
          />
          <div className="card-media-overlay" />
        </div>
      )}
      <div className="card-body">
        <div className="card-head">
          <h3>{title}</h3>
          {tag && <span className="card-tag">{tag}</span>}
        </div>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <div className="card-desc">{children}</div>
      </div>
    </article>
  );
}
