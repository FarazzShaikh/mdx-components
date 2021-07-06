import React, { useEffect } from "react";

async function downlaod(path) {
  const blob = await (await fetch(path)).blob();

  console.log(blob);

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = path.replace(/^.*[\\\/]/, "");
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function DownloadProvider({ path, children }) {
  if (!path) {
    throw new Error("Must provide a valid file path.");
  }

  return <div onClick={() => downlaod(path)}>{children}</div>;
}
