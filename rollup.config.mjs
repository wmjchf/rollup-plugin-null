import { defineConfig } from "rollup";
// import path from "path";
import { fileURLToPath } from "url";
import typescript from "@rollup/plugin-typescript";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const ENV = process.env.ENV;

export default defineConfig({
  input: "./src/index.ts",
  output: {
    format: ENV,
    file: `./dist/${ENV}/index.js`,
  },
  plugins: [
    typescript({
      declaration: true,
      declarationDir: "./dist",
    }),
  ],
});
