import uniformTypes from "../static/uniformTypes";

/**
 * Should I warn the user if they register a variable twice?
 *
 * I might refine this function to:
 * - Detect the appropriate file type on it's own
 * - Automatically register a variable when setting it
 */

/**
 * @param type Type of the variable
 * @param name Name of the variable in glsl
 */
export default function registerVariable(type: string, name: string) {
  this.variables.push({
    name, type,
    glType: "uniform" + uniformTypes[type],
    value: null
  } as Variable);
}