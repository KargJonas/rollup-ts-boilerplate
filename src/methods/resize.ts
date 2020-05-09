export default function resize(
  width: number = this.canvas.width,
  height: number = this.canvas.height
) {
  this.canvas.setAttribute('width', width);
  this.canvas.setAttribute('height', height);
  this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
}