const cnv = document.querySelector('canvas');
const p = new Plotter(cnv);
p.resize(500, 500);

var fragCode = `
void main() {
  vec2 pos = gl_FragCoord.xy / resolution;
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`;

p.registerVariable("vec2", "resolution");
p.registerVariable("float", "time");

p.useShader(fragCode);
p.run();

p.setVariable("time", 10);

// p.clearColor(0, 0, 0, 1);
p.clear();
p.draw();