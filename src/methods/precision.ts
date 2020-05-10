export default function precision(value: string, type: string) {
  this.shaderPrecisionPrefix = `precision ${value} ${type};`;
}