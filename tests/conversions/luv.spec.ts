import { LUVtoRGB } from "../../src/conversions/luv";

describe("LUVtoRGB", () => {
  test.each`
    name         | input                                                                                | expected
    ${"Black"}   | ${{ l: 0, u: 0, v: 0, a: 1 }}                                                        | ${[0, 0, 0, 1]}
    ${"White"}   | ${{ l: 100.00000139649632, u: 0.024879126844718054, v: 0.008286205414290931, a: 1 }} | ${[255, 255, 255, 1]}
    ${"Red"}     | ${{ l: 54.29054294696968, u: 175.04931972712927, v: 25.958396703979968, a: 1 }}      | ${[255, 0, 0, 1]}
    ${"Lime"}    | ${{ l: 87.81853633115202, u: -84.90425304127174, v: 87.24348468040357, a: 1 }}       | ${[0, 255, 0, 1]}
    ${"Blue"}    | ${{ l: 29.56829715344471, u: -11.536934269249699, v: -121.96471342426904, a: 1 }}    | ${[0, 0, 255, 1]}
    ${"Yellow"}  | ${{ l: 97.60701009682253, u: 8.010163982734554, v: 84.38011136989297, a: 1 }}        | ${[255, 255, 0, 1]}
    ${"Cyan"}    | ${{ l: 90.66601315791455, u: -76.2364736982004, v: -11.299996687394904, a: 1 }}      | ${[0, 255, 255, 1]}
    ${"Magenta"} | ${{ l: 60.16894098715946, u: 94.88955106397388, v: -97.45031445383121, a: 1 }}       | ${[255, 0, 255, 1]}
    ${"Silver"}  | ${{ l: 77.7043647180372, u: 0.01933216719210981, v: 0.006438743186377408, a: 1 }}    | ${[192, 192, 192, 1]}
    ${"Gray"}    | ${{ l: 53.5850142898864, u: 0.013331483488748122, v: 0.004440164293291735, a: 1 }}   | ${[128, 128, 128, 1]}
    ${"Maroon"}  | ${{ l: 26.165244625216808, u: 84.36475348224123, v: 12.510609822073416, a: 1 }}      | ${[128, 0, 0, 1]}
    ${"Olive"}   | ${{ l: 52.14952867110431, u: 4.279674952275392, v: 45.08265372323352, a: 1 }}        | ${[128, 128, 0, 1]}
    ${"Green"}   | ${{ l: 46.27770902748027, u: -44.741969993933104, v: 45.974674223202136, a: 1 }}     | ${[0, 128, 0, 1]}
    ${"Purple"}  | ${{ l: 29.6915239933531, u: 46.82507845261468, v: -48.08873651911572, a: 1 }}        | ${[128, 0, 128, 1]}
    ${"Teal"}    | ${{ l: 47.98582724554071, u: -40.34885983482456, v: -5.980627911498536, a: 1 }}      | ${[0, 128, 128, 1]}
    ${"Navy"}    | ${{ l: 11.33509112426626, u: -4.422716687334855, v: -46.75552107159647, a: 1 }}      | ${[0, 0, 128, 1]}
  `("$name", ({ input, expected }) => {
    expect(Object.values(LUVtoRGB(input)).map((val) => Math.abs(Math.round(val)))).toEqual(expected);
  });
});
