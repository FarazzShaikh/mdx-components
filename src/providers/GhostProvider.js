import React from "react";
import styled from "styled-components";

const Ghost = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 5px;
  background: rgb(249, 84, 84);
  background: linear-gradient(
    45deg,
    rgba(249, 84, 84, 1) 0%,
    rgba(249, 84, 84, 1) 20%,
    rgba(190, 76, 215, 1) 20%,
    rgba(190, 76, 215, 1) 40%,
    rgba(75, 111, 241, 1) 40%,
    rgba(75, 111, 241, 1) 60%,
    rgba(67, 191, 94, 1) 60%,
    rgba(78, 190, 91, 1) 80%,
    rgba(255, 178, 44, 1) 80%,
    rgba(255, 176, 44, 1) 100%,
    rgba(252, 128, 39, 1) 100%
  );
  opacity: 50%;
`;

export function GhostProvider({ children }) {
  return (
    <div style={{ position: "relative", overflow: "visible" }}>
      {children}
      <Ghost>ABC</Ghost>
    </div>
  );
}
