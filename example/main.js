const cnv = document.querySelector('canvas');
const p = new Plotter(cnv);
p.resize(500, 500);

var fragCode = `
uniform vec2 resolution;

void main() {
  vec2 pos = gl_FragCoord.xy / resolution;
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`;

p.registerVariable("float", "time");
console.log(p.variables);

p.useShader(fragCode);
p.run();
p.setVariable("time", 10);

p.clearColor(0, 0, 0, 1);
p.clear();
p.draw();