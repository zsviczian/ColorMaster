import { TPlugin, Ixyza, IStringOpts } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Converts a RGBA color instance to XYZA color object
         * @link https://www.w3.org/TR/css-color-4/#color-conversion-code
         */
        xyza(): Ixyza;
        /**
         * Gives the string representation of an input XYZA color object
         *
         * @example CM({ r: 200, g: 150, b: 100, a: 0.7 }).stringXYZ() → "color(xyza 37, 35, 17, 0.7)"
         * @default opts = { alpha: true, precision: [0, 0, 0, 1] }
         * @see https://www.w3.org/TR/css-color-4/#predefined
         * @returns ```color(xyz[a] X, Y, Z[, A])```
         */
        stringXYZ(opts?: IStringOpts): string;
    }
}
declare const XYZPlugin: TPlugin;
export default XYZPlugin;
