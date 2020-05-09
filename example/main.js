const cnv = document.querySelector('canvas');
const p = new Plotter(cnv);
p.createBuffer();

var fragCode = 'void main(void) { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1); }';

p.useShader(fragCode);
p.run();