import { TPlugin, IStringOpts, Ihsva } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Converts a RGBA color instance to HSVA color object
         * @link https://www.rapidtables.com/convert/color/rgb-to-hsv.html
         */
        hsva(): Ihsva;
        /**
         * Gives the string representation of an input HSVA color object
         *
         * @example CM({ r: 200, g: 150, b: 100, a: 0.7 }).stringHSV() → "hsva(30, 50%, 78%, 0.7)"
         * @default opts = { alpha: true, precision: [0, 0, 0, 1] }
         * @returns ```hsv[a](H, S, V[, A])```
         */
        stringHSV(opts?: IStringOpts): string;
    }
}
declare const HSVPlugin: TPlugin;
export default HSVPlugin;
