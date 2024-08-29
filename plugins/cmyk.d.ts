import { TPlugin, Icmyka, ICMYKStringOpts } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Converts a RGBA color instance to CMYKA color object
         *
         * @link https://www.w3.org/TR/css-color-4/#color-conversion-code
         */
        cmyka(): Icmyka;
        /**
         * Gives the string representation of an input CMYKA color object
         *
         * @example CM({ r: 200, g: 150, b: 100, a: 0.7 }).stringCMYK() → "cmyka(0, 25, 50, 22)"
         * @default opts = { alpha: true, precision: [0, 0, 0, 0, 1] }
         * @returns ```device-cmyk(C, M, Y, K[, A])```
         */
        stringCMYK(opts?: ICMYKStringOpts): string;
    }
}
declare const CMYKPlugin: TPlugin;
export default CMYKPlugin;
