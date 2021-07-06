import React from "react";
import { DownloadProvider } from "./providers/DownloadProvider";
import styled from "styled-components";

// Based on https://codepen.io/kathykato/pen/gOOjgmP

const DownloadButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;

  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #fce6c0;
  border: 2px solid #c29340;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f7d8a1;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #c29340, 0 0.625em 0 0 #ffd6932f;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  :hover {
    background: #f7d8a1;
    transform: translate(0, 0.25em);
  }
  :hover::before {
    box-shadow: 0 0 0 2px #c29340, 0 0.5em 0 0 #ffd6932f;
    transform: translate3d(0, 0.5em, -1em);
  }
  :active {
    background: #f7d8a1;
    transform: translate(0em, 0.75em);
  }
  :active::before {
    box-shadow: 0 0 0 2px #c29340, 0 0 #ffd6932f;
    transform: translate3d(0, 0, -1em);
  }
`;

export const Download = ({ url, text, Icon }) => {
  return (
    <DownloadProvider path={url}>
      <DownloadButton title="Download Sample Project">
        {text}
        <svg
          style={{
            width: "24px",
            height: "24px",
            marginLeft: "0.5em",
            marginRight: "0.5em",
          }}
        >
          {Icon ? <Icon /> : <></>}
        </svg>
      </DownloadButton>
    </DownloadProvider>
  );
};
