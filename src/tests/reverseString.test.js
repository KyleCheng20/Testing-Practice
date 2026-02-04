import { reverseString } from "../funcs/reverseString";

describe("reverseString function", () => {
    test("reverse one word", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("reverse two words", () => {
        expect(reverseString("hello world")).toBe("dlrow olleh");
    });

    test("reverse numbers", () => {
        expect(reverseString("12")).toBe("21");
    });

    test("reverse multiple numbers", () => {
        expect(reverseString("12 345")).toBe("543 21");
    });
});