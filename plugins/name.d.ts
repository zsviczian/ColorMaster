import { TPlugin, INameOpts } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Gets the color table HTML/CSS name for a given color
         *
         * @note Colors with an alpha value of '0' return 'transparent'. Also, colors with alpha < 1, return `CSS_NAME (with opacity)`
         * @example CM("rgb(128, 0, 0)").name() → "maroon"
         * @default opts = { exact: true }
         * @returns The color's HTML/CSS name
         */
        name(opts?: INameOpts): string;
    }
}
declare const NamePlugin: TPlugin;
export default NamePlugin;
