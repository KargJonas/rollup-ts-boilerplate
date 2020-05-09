import typescript from "rollup-plugin-typescript2";
import liveServer from "rollup-plugin-live-server";
import { string } from "rollup-plugin-string";

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
      name: "lib"
    },
    {
      file: "./dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/bundle.esm.js",
      format: "esm",
    },
    {
      file: "./example/lib.js",
      format: "iife",
      name: "lib",
      sourcemap: true
    }
  ];

export default {
  input: "./src/index.ts",
  output,

  plugins: [liveServer({
    port: 5000,
    host: "localhost",
    root: "example",
    file: "index.html",
    mount: [],
    open: false,
    wait: 500
  }),
  string({ include: "**/*.glsl" }),
  typescript({ inlineSourceMap: true })
  ],
}
