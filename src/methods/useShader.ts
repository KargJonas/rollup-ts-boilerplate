export default function useShader(code: string, type: number = this.gl.FRAGMENT_SHADER) {
  let shaderPrefix: string = "";

  if (type == this.gl.FRAGMENT_SHADER) {
    shaderPrefix += this.shaderPrecisionPrefix;
    shaderPrefix += this.variables.map((variable: Variable) => {
      return `uniform ${variable.type} ${variable.name};`;
    }).join("");
  }

  const shader: WebGLShader = this.gl.createShader(type);
  this.gl.shaderSource(shader, shaderPrefix + code);
  this.gl.compileShader(shader);

  if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
    console.error(this.gl.getShaderInfoLog(shader));
  }

  this.gl.attachShader(this.shaderProgram, shader);
}