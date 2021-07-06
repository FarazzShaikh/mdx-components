import React, { useState } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";

export const Highlight = ({ children, color }) => {
  const [theme, settheme] = useState("");

  function onChange(theme) {
    settheme(theme);
  }

  return (
    <ThemeProvider onChange={onChange}>
      <span
        style={{
          backgroundColor: color || "#11e8bb70",
          borderRadius: "5px",
          color: theme === "dark" ? "#fff" : "#000",
          padding: "0.1rem",
          width: "auto",
        }}
      >
        {children}
      </span>
    </ThemeProvider>
  );
};
