import clear from "./methods/clear";
import clearColor from "./methods/clearColor";
import createBuffer from "./methods/createBuffer";
import draw from "./methods/draw";
import precision from "./methods/precision";
import resize from "./methods/resize";
import run from "./methods/run";
import useShader from "./methods/useShader";
import registerVariable from "./methods/registerVariable";
import setVariable from "./methods/setVariable"

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
  private variables: Variable[] = [];
  private shaderPrecisionPrefix: string = "precision mediump float;";

  private createBuffer = createBuffer;
  private precision = precision;
  public clear = clear;
  public run = run;
  public clearColor = clearColor;
  public draw = draw;
  public resize = resize;
  public useShader = useShader;
  public setVariable = setVariable;
  public registerVariable = registerVariable;

  constructor(canvas: HTMLCanvasElement) {
    // Setting Canvas and creating a rendering context
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl");
    this.shaderProgram = this.gl.createProgram();

    this.createBuffer();
    this.useShader(this.vertexCode, this.gl.VERTEX_SHADER);

    // 1f, 1i, 2f, 2i, 3f, 3i, 4f, 4i, 1fv, 1iv, 2fv, 2iv, 3fv, 3iv, 4fv, 4iv
  }
}
