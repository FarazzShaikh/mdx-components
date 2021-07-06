import React from "react";

export function Image({ src, style }) {
  return (
    <img
      style={{
        borderRadius: "5px",
        boxShadow: "0px 0px 14px 0px rgba(0,0,0,0.27)",
        WebkitBoxShadow: "0px 0px 14px 0px rgba(0,0,0,0.27)",
        ...style,
      }}
      src={src}
    />
  );
}
