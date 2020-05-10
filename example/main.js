const cnv = document.querySelector('canvas');
const p = new Plotter(cnv);
p.createBuffer();

var fragCode = `
precision mediump float;
uniform vec2 resolution;
uniform float time;

void main() {
  vec2 pos = gl_FragCoord.xy / resolution;
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`;

p.registerVariable("float", "");

console.log(p.variables)

p.useShader(fragCode);
p.resize(500, 500);
p.run();