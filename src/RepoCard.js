import React, { useState } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";

export function RepoCard({ owner, repo, type, showOwner }) {
  const [theme, settheme] = useState("");

  function onChange(theme) {
    settheme(theme);
  }

  return (
    <ThemeProvider onChange={onChange}>
      <a href={`https://github.com/${owner}/${repo}`} target="_blank">
        <img src={`https://github-readme-stats.vercel.app/api/${type}/?username=${owner}&repo=${repo}&show_owner=${!!showOwner}&theme=${theme === "dark" ? "tokyonight" : "buefy"}`} />
      </a>
    </ThemeProvider>
  );
}
