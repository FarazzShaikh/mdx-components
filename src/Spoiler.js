import React, { useState } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SpoilerProvider } from "./providers/SpoilerProvider";

export function Spoiler({ children, title, message, hint }) {
  const [theme, settheme] = useState("");

  function onChange(theme) {
    settheme(theme);
  }

  return (
    <ThemeProvider onChange={onChange}>
      <SpoilerProvider
        title={title}
        message={message}
        hint={hint}
        textStyle={{
          color: theme === "dark" ? "#fff" : "#000",
        }}
      >
        {children}
      </SpoilerProvider>
    </ThemeProvider>
  );
}
