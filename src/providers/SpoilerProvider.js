import React, { useState } from "react";

function BluredText(props) {
  return (
    <div
      style={{
        width: " 60%",
        height: " 100%",
        position: " absolute",
        zIndex: " 100",
        left: " 50%",
        top: " 50%",
        transform: " translate(-50%, -50%)",
        color: " white",
        display: " flex",
        justifyContent: " center",
        flexDirection: " column",
        alignItems: " center",
        textAlign: " center",
        pointerEvents: " none",
        opacity: props.blured ? 1 : 0,
        transition: "opacity 200ms ease-in-out",
        ...props.style,
      }}
    >
      <div style={{ margin: "1.5em" }}>
        <h2 style={{ whiteSpace: "pre-line", margin: "0" }}>{props.title}</h2>
        <p style={{ fontWeight: "400", fontStyle: "italic", margin: "0" }}>{props.message}</p>
      </div>
      <p style={{ fontWeight: "400", fontFamily: "monospace" }}>{props.hint ? `Hint: ${props.hint}` : ""}</p>
    </div>
  );
}

function Overlay(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "5px",
        backdropFilter: props.blured ? `blur(${props.radius || "5"}px)` : "none",
        pointerEvents: props.blured ? "all" : "none",
        transition: "backdrop-filter 200ms ease-in-out",
        cursor: props.blured ? "pointer" : "unset",
        ...props.style,
      }}
    />
  );
}

export function SpoilerProvider({ children, onClick, radius, style, textStyle, title, message, hint }) {
  const [blured, setBlured] = useState(true);

  function _onClick(e) {
    setBlured(e.shiftKey);
    if (onClick) onClick(blured, e);
  }

  return (
    <div style={{ position: "relative" }} onClick={_onClick}>
      <BluredText blured={blured} title={title} message={message} hint={hint} style={textStyle} />
      <Overlay blured={blured} radius={radius} style={style} />
      {children}
    </div>
  );
}
