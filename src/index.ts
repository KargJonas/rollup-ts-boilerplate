export default class Plotter {
  public canvas: HTMLCanvasElement;
  public gl: WebGLRenderingContext;

  // Geometry of the drawing surface
  private vertexCode: string = 'attribute vec2 coordinates;void main(void){gl_Position=vec4(coordinates,0.0,1.0);}';
  private vertices: number[] = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5];
  private shaderProgram: WebGLProgram;
  private vertexBuffer: WebGLBuffer;

  constructor(canvas: HTMLCanvasElement) {
    // Setting Canvas and creating a rendering context
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl");
    this.shaderProgram = this.gl.createProgram();

    this.createBuffer();
    this.compileShader(this.gl.VERTEX_SHADER, this.vertexCode);
  }

  private createBuffer() {
    this.vertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertices), this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
  }

  private compileShader(type: number, code: string) {
    const shader: WebGLShader = this.gl.createShader(type);
    this.gl.shaderSource(shader, code);
    this.gl.compileShader(shader);
    this.gl.attachShader(this.shaderProgram, shader);
  }

  private run() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.linkProgram(this.shaderProgram);
    this.gl.useProgram(this.shaderProgram);

    const coord = this.gl.getAttribLocation(this.shaderProgram, "coordinates");
    this.gl.vertexAttribPointer(coord, 2, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(coord);

    this.gl.clearColor(0.5, 0.5, 0.5, 0.9);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
  }
}
