import { TNumArr } from "../types";
/**
 * Restricts the value of `val` to be between `min` and `max` for number inputs
 * @param min Lower bound (0)
 * @param val Current value
 * @param max Upper bound (typically 100, 255, 359)
 *
 * @returns A number in the range `[min, max]` such that `min <= val <= max`
 */
export declare function clamp(min: number, val: number, max: number): number;
/**
 * Given a value, rounds the value to a given precision (number of decimal places)
 * @param value The value that needs to be rounded
 * @param precision How many decimal places to include in the result
 *
 * @note Providing a negative precision value will skip this conversion
 * @returns The input value with "precision" amount of decimal places
 */
export declare function round(value: number, precision: number): number;
/**
 * Given a hue (`value`) - ensure that it is in range [0, 359]
 * @param value The value that needs to be rounded
 *
 * @returns A positively bounded hue value
 */
export declare function adjustHue(value: number): number;
/**
 * Helper function to correctly determine or clamp the alpha channel value
 * @param alpha A numeric value corresponding to the alpha channel
 *
 * @note This utility function is provided to provide identical logic for alpha channel value determination.
 *       Unlike other channels, the alpha channel is optional, thus it needs to be handled differently.
 * @returns A valid alpha channel value in range [0, 1]
 */
export declare function adjustAlpha(alpha: number): number;
/**
 * Converts a RGB color space channel value into its corresponding standard RGB (sRGB) color space value
 * @param value The RGB channel value to convert
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance
 * @returns standard RGB equivalent of the RGB channel value provided
 */
export declare function sRGB(value: number): number;
/**
 * Inverse of sRGB - converts sRGB to RGB color space value
 * @param value The sRGB channel value to convert
 *
 * @see https://www.w3.org/TR/css-color-4/#color-conversion-code
 * @returns RGB equivalent of the standard RGB channel value provided
 */
export declare function sRGBInv(value: number): number;
/**
 * Helper for generating random numbers (integer) from an upper bounded range
 *
 * @param max Output will be bounded to [0, max]
 * @returns A positive integer that is randomly generated and guaranteed to be less than `max`
 */
export declare function rng(max: number): number;
/**
 * Transforms an input RGBA string into an RGBA ([r, g, b, a]) numeric array
 * @param str Input RGBA string from which the RGB values are extracted
 * @param alternative If the string is not RGBA, this array is returned instead
 *
 * @returns An RGBA array based on the input string in the form [r, g, b, a]
 */
export declare function getRGBArr(str: string, alternative?: number[]): Required<TNumArr>;
/**
 * Given two RGB arrays, this computes the sum of their channel wise difference
 * @param rgb1 First RGB array
 * @param rgb2 Second RGB array
 *
 * @returns The sum of absolute differences between the channels of the two input RGB arrays
 */
export declare function channelWiseDifference(rgb1: TNumArr, rgb2: TNumArr): number;
