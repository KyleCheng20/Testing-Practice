import { calculator } from "../funcs/calculator";

describe("calculator function", () => {
    describe("add function", () => {
        test("add two numbers", () => {
            expect(calculator.add(1, 2)).toBe(3);
        });

        test("add two negative numbers", () => {
            expect(calculator.add(-1, -2)).toBe(-3);
        });

        test("operating on invalid numbers returns ERROR", () => {
            expect(calculator.add("a", 5)).toBe("ERROR");
        });
    });

    describe("subtract function", () => {
        test("subtract two numbers", () => {
            expect(calculator.subtract(5, 2)).toBe(3);
        });

        test("subtract two negative numbers", () => {
            expect(calculator.subtract(-1, -2)).toBe(1);
        });

        test("operating on invalid numbers returns ERROR", () => {
            expect(calculator.subtract("a", 5)).toBe("ERROR");
        });
    });

    describe("multiply function", () => {
        test("multiply two numbers", () => {
            expect(calculator.multiply(2, 5)).toBe(10);
        });

        test("multiply two negative numbers", () => {
            expect(calculator.multiply(-1, -2)).toBe(2);
        });

        test("operating on invalid numbers returns ERROR", () => {
            expect(calculator.multiply("a", 5)).toBe("ERROR");
        });
    });

    describe("divide function", () => {
        test("divide two numbers", () => {
            expect(calculator.divide(25, 5)).toBe(5);
        });

        test("divide two negative numbers", () => {
            expect(calculator.divide(-2, -2)).toBe(1);
        });

        test("operating on invalid numbers returns ERROR", () => {
                expect(calculator.divide("a", 5)).toBe("ERROR");
            });
    });

});