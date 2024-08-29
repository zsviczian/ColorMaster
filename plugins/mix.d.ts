import { IMix, TPlugin } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Mix current color instance with another based on a given ratio (done in LUVA space by default for best results)
         *
         * @note Not specifying a ratio will cause equal proportions of colors to be mixed
         * @example CM("#000").mix({ color: "#fff", ratio: 0.2, colorspace: "rgb" }) → "mix 20% of white INTO 80% of the current color (black) using the RGB colorspace"
         * @default opts = { color: "#fff", ratio: 0.5, colorspace: "luv" }
         * @returns A new color instance corresponding to the new mixture
         */
        mix(opts?: IMix): ColorMaster;
    }
}
declare const MixPlugin: TPlugin;
export default MixPlugin;
