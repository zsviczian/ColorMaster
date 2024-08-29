/**
 * Performs the following operation:
 * ```
 *   A       M_00, M_01, M_02       arr[0]
 * ( B ) = [ M_10, M_11, M_12 ] * ( arr[1] )
 *   C       M_20, M_21, M_22       arr[2]
 * ```
 * @param M 2D matrix that performs the conversion
 * @param arr Input array to convert
 * @returns A new array of values based on the matrix multiplication
 */
export declare function multiplyMatrix(M: number[][], arr: number[]): number[];
