import typescript from "rollup-plugin-typescript2";
import liveServer from "rollup-plugin-live-server";
import { terser } from "rollup-plugin-terser";

const output = process.argv.includes("-w") ? [
  {
    file: "./example/lib.js",
    format: "iife",
    name: "Plotter",
    sourcemap: true
  }
] : [
    {
      file: "./dist/bundle.js",
      format: "iife",
      name: "lib",
      plugins: [terser()]
    },
    {
      file: "./dist/bundle.cjs.js",
      format: "cjs",
      plugins: [terser()]
    },
    {
      file: "./dist/bundle.esm.js",
      format: "esm",
      plugins: [terser()]
    },
    {
      file: "./example/lib.js",
      format: "iife",
      name: "lib",
      sourcemap: true,
    }
  ];

export default {
  input: "./src/index.ts",
  output,

  plugins: [
    typescript({ inlineSourceMap: true }),
    liveServer({
      port: 5000,
      host: "localhost",
      root: "example",
      file: "index.html",
      mount: [],
      open: false,
      wait: 500
    })
  ],
}
