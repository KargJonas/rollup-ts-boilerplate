const cnv = document.querySelector('canvas');
const p = new Plotter(cnv);
p.createBuffer();

var fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' + '}';

// sdfsdf
p.compileShader(p.gl.FRAGMENT_SHADER, fragCode);

p.run();