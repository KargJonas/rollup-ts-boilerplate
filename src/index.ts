import clear from "./methods/clear";
import clearColor from "./methods/clearColor";
import createBuffer from "./methods/createBuffer";
import resize from "./methods/resize";
import render from "./methods/render";
import run from "./methods/run";
import useShader from "./methods/useShader";

import vertexShaderCode from './static/vertexShader';

/**
 * ToDo: Add a dispose() function
 */

export default class Plotter {
  public canvas: HTMLCanvasElement;
  public gl: WebGLRenderingContext;

  private vertexCode: string = vertexShaderCode;
  private vertices: number[] = [-1, -1, -1, 1, 1, -1, 1, 1];
  private shaderProgram: WebGLProgram;
  private vertexBuffer: WebGLBuffer;

  private createBuffer = createBuffer;
  public clear = clear;
  public clearColor = clearColor;
  public render = render;
  public resize = resize;
  public run = run;
  public useShader = useShader;

  constructor(canvas: HTMLCanvasElement) {
    // Setting Canvas and creating a rendering context
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl");
    this.shaderProgram = this.gl.createProgram();

    this.createBuffer();
    this.useShader(this.vertexCode, this.gl.VERTEX_SHADER);
  }
}
