import typescript from "rollup-plugin-typescript2";
import liveServer from "rollup-plugin-live-server";

const dev = process.argv.includes("-w");

const exampleOut = {
  file: "./example/lib.js",
  format: "iife",
  name: "lib",
  sourceMap: "inline"
};

const output = dev ? exampleOut : [
  exampleOut,
  { file: "./dist/bundle.js", format: "iife", name: "lib" },
  { file: "./dist/bundle.cjs.js", format: "cjs", },
  { file: "./dist/bundle.esm.js", format: "esm", },
];

export default {
  input: "./src/index.ts",
  output,

  plugins: [dev ? liveServer({
    port: 5000,
    host: "localhost",
    root: "example",
    file: "index.html",
    mount: [],
    open: false,
    wait: 500
  }) : null],

  plugins: [
    typescript({sourceMap: true}),
  ]
}
