import { Irgba, TFormat, TParser, TInput, Ihsla, Ihexa, TPlugin } from "./types";
import { IColorMaster } from "./types/colormaster";
import { HueColors } from "./enums/colors";
/**
 * @classdesc Generates color space instances that ColorMaster can interpret.
 * This allows the user to manipulate colors via helpful functions/wrappers.
 *
 * @note If a color's values are not valid, ColorMaster uses "black" or a mixture
 * with provided values that are valid (in the corresponding colorspace) by default.
 * Additionally, ColorMaster works in RGBA space internally by default and only converts to other color
 * spaces as necessary. For example, printing a string requires conversion to the correct color space.
 * On that end, it is also easier to work with HSLA space when performing rotation and other hue related adjustments.
 * This approach ensures the highest possible accuracy when converting to other color spaces.
 */
export declare class ColorMaster implements IColorMaster {
    #private;
    static Parsers: TParser[];
    constructor(color: TInput);
    get red(): number;
    get blue(): number;
    get green(): number;
    get alpha(): number;
    get hue(): number;
    get saturation(): number;
    get lightness(): number;
    get format(): TFormat;
    isValid(): boolean;
    rgba(): Irgba;
    hsla(): Ihsla;
    hexa({ round }?: {
        round?: boolean | undefined;
    }): Ihexa;
    stringRGB({ alpha, precision }?: {
        alpha?: boolean | undefined;
        precision?: [number, number, number, number] | undefined;
    }): string;
    stringHEX({ alpha }?: {
        alpha?: boolean | undefined;
    }): string;
    stringHSL({ alpha, precision }?: {
        alpha?: boolean | undefined;
        precision?: [number, number, number, number] | undefined;
    }): string;
    hueTo(value: number | keyof typeof HueColors): this;
    hueBy(delta: number): this;
    saturationTo(value: number): this;
    saturateBy(delta: number): this;
    desaturateBy(delta: number): this;
    lightnessTo(value: number): this;
    lighterBy(delta: number): this;
    darkerBy(delta: number): this;
    alphaTo(value: number): this;
    alphaBy(delta: number): this;
    invert({ alpha }?: {
        alpha?: boolean | undefined;
    }): this;
    grayscale(): this;
    rotate(value: number): this;
}
/**
 * Generates a random RGBA color which can then be converted into any color space
 * @returns A random RGBA color instance that is properly bounded
 */
export declare function random(): ColorMaster;
/**
 * ColorMaster comes with core functionality by default. This helper function allows users to extend that functionality.
 * @param plugins These extend ColorMaster's functionality
 * @see https://github.com/lbragile/ColorMaster#-plugins for a list of supported plugins
 */
export declare function extendPlugins(plugins: TPlugin[]): void;
declare const _default: (color: TInput) => ColorMaster;
export default _default;
