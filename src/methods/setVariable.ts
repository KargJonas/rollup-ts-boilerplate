/**
 * The idea of this function is to provide an easy way to make a
 * link between javascript and glsl variables
 *
 * Some things this function needs to be able to do:
 *  - detect the appropriate file type
 *    - Provide a "JS-Version" of glsl types like vec
 *  - register uniforms in the rendering context (gl)
 *  - modify the glsl code to register the uniforms
 *
 * Some ideas on how to approach this...
 *
 * 1) State machine (possibly slow)
 *    - Pass a proxy into the function and monitor changes
 *    - When a change is detected, update the value in the rendering context
 *      - This possibly requires reattaching the shader every time a change is made
 *    - Renaming the function to "variables" would be appropriate
 *
 * 2) Object approach (possibly slow)
 *    - Pass an object of variables into the function (this can be done multiple times)
 *    - The provided object is merged with the previous one (incoming change is always dominant)
 *    - When a new variable appears, it is registered
 *    - Changed variable values are updated
 *    - Renaming the function to "variables" would be appropriate
 *
 * 3) Simple approach (probably relatively fast) *preferred*
 *    - Make two functions:
 *      - One for registering a new variable before the shader is complied
 *      - One to update variable values at runtime
 *    - Leave state management to the user
 *
 * One important note on the variable system:
 *  This is a one-way system. You can push data to glsl but not back.
 *  (Unless my intention with this project changes to something like utilizing the GPU in JS)
 *
 * ToDo: Handle compound data types properly.
 */

/**
 * Set the value of a variable, which has previously been registered.
 * @param name Name of the variable in glsl
 * @param value New value of the variable
 */
export default function setVariable(name: string, values: number) {
  const uniformLocation = this.gl.getUniformLocation(this.shaderProgram, name);

  // Check if variable is registered
  // if (!uniformLocation) { }

  this.gl.uniform1f(uniformLocation, values);
}