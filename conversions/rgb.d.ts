import { Irgba, Ixyza, Ihexa, Ihsla, Ihsva, Ilaba, Ilcha, Icmyka, Ihwba, Iluva, Iryba, Iuvwa } from "../types";
export declare function RGBtoHEX(obj: Irgba, round?: boolean): Ihexa;
/**
 * @see https://www.rapidtables.com/convert/color/rgb-to-hsl.html
 */
export declare function RGBtoHSL(obj: Irgba): Ihsla;
/**
 * @see https://www.rapidtables.com/convert/color/rgb-to-hsv.html
 */
export declare function RGBtoHSV(obj: Irgba): Ihsva;
/**
 * @see https://en.wikipedia.org/wiki/HWB_color_model#:~:text=HWB%20is%20a%20cylindrical%2Dcoordinate,and%20slightly%20faster%20to%20compute
 */
export declare function RGBtoHWB(obj: Irgba): Ihwba;
/**
 * @see https://www.image-engineering.de/library/technotes/958-how-to-convert-between-srgb-and-ciexyz
 * @see https://www.w3.org/TR/css-color-4/#color-conversion-code
 */
export declare function RGBtoXYZ(obj: Irgba): Ixyza;
/**
 * @see https://www.w3.org/TR/css-color-4/#color-conversion-code
 */
export declare function RGBtoLAB(obj: Irgba): Ilaba;
/**
 * @see https://www.w3.org/TR/css-color-4/#color-conversion-code
 */
export declare function RGBtoLCH(obj: Irgba): Ilcha;
/**
 * @see http://www.easyrgb.com/en/math.php
 * @see http://www.brucelindbloom.com/index.html?Eqn_Luv_to_XYZ.html
 */
export declare function RGBtoLUV(obj: Irgba): Iluva;
/**
 * @see http://cs.haifa.ac.il/hagit/courses/ist/Lectures/IST05_ColorLABx4.pdf
 */
export declare function RGBtoUVW(obj: Irgba): Iuvwa;
/**
 * @see http://nishitalab.org/user/UEI/publication/Sugita_IWAIT2015.pdf
 * @see https://web.archive.org/web/20130525061042/www.insanit.net/tag/rgb-to-ryb/
 */
export declare function RGBtoRYB(obj: Irgba): Iryba;
/**
 * Naively Converting Between Uncalibrated CMYK and sRGB-Based Colors
 * @see https://www.w3.org/TR/css-color-4/#cmyk-rgb
 */
export declare function RGBtoCMYK(obj: Irgba): Icmyka;
