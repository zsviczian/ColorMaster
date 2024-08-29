import { IHarmony, TPlugin } from "../types";
declare module ".." {
    interface ColorMaster {
        /**
         * Generates an RGBA color instance array based on the corresponding harmony
         *
         * @see https://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm
         * @note For "monochromatic", the amount must be in range [2, 10]
         * @default opts = { type: "analogous", effect: "tones", amount: 5 }
         * @returns - All harmony types return an array with the original color as the first element.
         *          - The only exception to this are 'analogous' and 'double-split-complementary',
         *            which return the original color as the second element.
         *          - For 'monochromatic' the original color is always first and the array size is `amount + 1` evenly spaced colors.
         */
        harmony(opts?: IHarmony): ColorMaster[];
    }
}
declare const HarmonyPlugin: TPlugin;
export default HarmonyPlugin;
