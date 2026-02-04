import { capitalize } from "../funcs/capitalize";

describe("capitalize function", () => {
    test("capitalize first letter of one word", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test("capitalize first letter of multiple words", () => {
        expect(capitalize("hello world")).toBe("Hello world");
    });

    test("capitalize a single letter", () => {
        expect(capitalize("h")).toBe("H");
    });
});