import React from "react";

export default function Card({ title, subtitle, image, children, tag }) {
  return (
    <div className="card">
      {image && (
        <div className="card-media">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-body">
        <div className="card-head">
          <h3>{title}</h3>
          {tag && <span className="card-tag">{tag}</span>}
        </div>
        {subtitle && <p className="muted">{subtitle}</p>}
        <div className="card-desc">{children}</div>
      </div>
    </div>
  );
}
