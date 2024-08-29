import { TPlugin, Ilcha, IStringOpts } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Converts a RGBA color instance to LCHA color object
         * @link https://www.w3.org/TR/css-color-4/#color-conversion-code
         */
        lcha(): Ilcha;
        /**
         * Gives the string representation of an input LCHA color object
         *
         * @example CM({ r: 200, g: 150, b: 100, a: 0.7 }).stringLCH() → "lcha(66%, 36, 69, 0.7)"
         * @default { alpha: true, precision: [0, 0, 0, 1] }
         * @returns ```lch[a](L, C, H[, A])```
         */
        stringLCH(opts?: IStringOpts): string;
    }
}
declare const LCHPlugin: TPlugin;
export default LCHPlugin;
