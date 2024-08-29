import { TPlugin, Iuvwa, IStringOpts } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Converts a RGBA color instance to UVWA color object
         *
         * @link https://en.wikipedia.org/wiki/CIEUVW#Cylindrical_representation_.28CIELCH.29
         */
        uvwa(): Iuvwa;
        /**
         * Gives the string representation of an input UVWA color object
         *
         * @example CM({ r: 200, g: 150, b: 100, a: 0.7 }).stringUVW() → "color(uvwa 26, 35, 40, 0.7)"
         * @default opts = { alpha: true, precision: [0, 0, 0, 1] }
         * @returns ```color(uvw[a] U, V, W[, A])```
         */
        stringUVW(opts?: IStringOpts): string;
    }
}
declare const UVWPlugin: TPlugin;
export default UVWPlugin;
