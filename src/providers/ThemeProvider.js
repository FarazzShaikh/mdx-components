import React, { useEffect } from "react";

export function ThemeProvider({ children, onChange }) {
  useEffect(() => {
    const html = document.querySelector("html");
    const observer = new MutationObserver(() => {
      onChange(html.getAttribute("data-theme"));
    });
    onChange(html.getAttribute("data-theme"));

    observer.observe(html, {
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
