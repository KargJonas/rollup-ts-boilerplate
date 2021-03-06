export default function run() {
  // Linking the shader program
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
  this.gl.linkProgram(this.shaderProgram);
  this.gl.useProgram(this.shaderProgram);

  const position = this.gl.getAttribLocation(this.shaderProgram, "position");
  this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);
  this.gl.enableVertexAttribArray(position);
}