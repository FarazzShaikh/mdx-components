import React from "react";
import styled from "styled-components";

const Caption = styled.div`
  font-style: italic;
`;

const Source = styled.div`
  text-align: right;
  font-size: 75%;
`;

export function CaptionProvider({ caption, source, sourceUrl, children }) {
  return (
    <>
      {sourceUrl ? (
        <Source>
          <a href={sourceUrl}>{source ? source : "Source"}</a>
        </Source>
      ) : (
        <></>
      )}

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            style: {
              borderTopRightRadius: sourceUrl ? "0px" : "5px",
              borderBottomLeftRadius: caption ? "0px" : "5px",
            },
          });
        }
        return child;
      })}
      <Caption>{caption}</Caption>
    </>
  );
}
