export default function useShader(code: string, type: number = this.gl.FRAGMENT_SHADER) {
  const shader: WebGLShader = this.gl.createShader(type);
  this.gl.shaderSource(shader, code);
  this.gl.compileShader(shader);

  if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
    console.error(this.gl.getShaderInfoLog(shader));
  }

  this.gl.attachShader(this.shaderProgram, shader);
}