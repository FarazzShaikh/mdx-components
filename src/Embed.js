import React from "react";

export function Embed({ url, width, height, style }) {
  return (
    <>
      <iframe
        src={url}
        width={width || 500}
        height={height || 300}
        style={{
          border: "1px solid #ccc",
          width: "100%",
          borderRadius: "5px",
          ...style,
        }}
        frameBorder="0"
      />
    </>
  );
}
