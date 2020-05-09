var Plotter = (function () {
  'use strict';

  var Plotter = /** @class */ (function () {
      function Plotter(canvas) {
          // Geometry of the drawing surface
          this.vertexCode = 'attribute vec2 coordinates;void main(void){gl_Position=vec4(coordinates,0.0,1.0);}';
          this.vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5];
          // Setting Canvas and creating a rendering context
          this.canvas = canvas;
          this.gl = canvas.getContext("webgl");
          this.shaderProgram = this.gl.createProgram();
          this.createBuffer();
          this.compileShader(this.gl.VERTEX_SHADER, this.vertexCode);
      }
      Plotter.prototype.createBuffer = function () {
          this.vertexBuffer = this.gl.createBuffer();
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
          this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertices), this.gl.STATIC_DRAW);
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
      };
      Plotter.prototype.compileShader = function (type, code) {
          var shader = this.gl.createShader(type);
          this.gl.shaderSource(shader, code);
          this.gl.compileShader(shader);
          this.gl.attachShader(this.shaderProgram, shader);
      };
      Plotter.prototype.run = function () {
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
          this.gl.linkProgram(this.shaderProgram);
          this.gl.useProgram(this.shaderProgram);
          var coord = this.gl.getAttribLocation(this.shaderProgram, "coordinates");
          this.gl.vertexAttribPointer(coord, 2, this.gl.FLOAT, false, 0, 0);
          this.gl.enableVertexAttribArray(coord);
          this.gl.clearColor(0.5, 0.5, 0.5, 0.9);
          this.gl.enable(this.gl.DEPTH_TEST);
          this.gl.clear(this.gl.COLOR_BUFFER_BIT);
          this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
          this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
      };
      return Plotter;
  }());

  return Plotter;

}());
//# sourceMappingURL=lib.js.map
