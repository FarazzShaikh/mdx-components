import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "build/mdx-components.js",
    format: "esm",
    sourcemap: true,
  },
  external: ["react", "styled-components"],
  plugins: [babel({ babelHelpers: "bundled" }), terser()],
};
