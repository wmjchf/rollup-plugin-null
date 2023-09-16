import { defineConfig } from "rollup";
import { noBuild } from "no-build";

export default defineConfig({
  input: "./src/index.js",
  output: {
    format: "es",
    file: "./dist/index.js",
  },
  plugins: [
    noBuild({
      ext: [".less", ".css"],
    }),
  ],
});
