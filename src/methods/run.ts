export default function run() {
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
  this.gl.linkProgram(this.shaderProgram);
  this.gl.useProgram(this.shaderProgram);

  const position = this.gl.getAttribLocation(this.shaderProgram, "position");
  this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);
  this.gl.enableVertexAttribArray(position);

  this.clearColor(0.5, 0.5, 0.5, 0.9);
  // this.gl.enable(this.gl.DEPTH_TEST); // I don't think we need this
  this.clear();
  // this.resize(); // Might be the culprit if something doesn't work
  this.render();
}