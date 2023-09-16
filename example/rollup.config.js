import { defineConfig } from "rollup";
import nullImport from "rollup-plugin-null";

export default defineConfig({
  input: "./src/index.js",
  output: {
    format: "es",
    file: "./dist/index.js",
  },
  plugins: [
    nullImport({
      ext: [".less", ".css"],
    }),
  ],
});
