const cnv = document.querySelector('canvas');
const p = new Plotter(cnv);
p.resize(500, 500);

var fragCode = `
void main() {
  vec2 pos = gl_FragCoord.xy / resolution;
  gl_FragColor = vec4(gl_FragCoord.x / 1000.0, 0.0, 0.0, 1.0);
}
`;

p.registerVariable("vec2", "resolution");
p.registerVariable("float", "time");

p.useShader(fragCode);
p.run();

// p.clearColor(0, 0, 0, 1);
p.clear();

let time = 0;
let start;

function update() {
  time++;
  p.setVariable("time", time);
  p.draw();
  // requestAnimationFrame(update);
}

// start = new Date().getMilliseconds();
update();
// setTimeout(() => {
//   console.log(time)
// }, 1000);