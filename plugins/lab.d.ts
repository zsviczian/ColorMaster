import { TPlugin, Ilaba, IStringOpts } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Converts a RGBA color instance to LABA color object
         * @link https://www.w3.org/TR/css-color-4/#color-conversion-code
         */
        laba(): Ilaba;
        /**
         * Gives the string representation of an input LABA color object
         *
         * @example CM({ r: 200, g: 150, b: 100, a: 0.7 }).stringLAB() → "laba(66%, 15, 34, 0.7)"
         * @default opts = { alpha: true, precision: [0, 0, 0, 1] }
         * @returns ```lab[a](L, A, B[, A])```
         */
        stringLAB(opts?: IStringOpts): string;
    }
}
declare const LABPlugin: TPlugin;
export default LABPlugin;
