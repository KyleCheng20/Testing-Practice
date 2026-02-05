import { analyzeArray } from "../funcs/analyzeArray";

describe("analyzeArray function", () => {
    test("[1, 8, 3, 4, 2, 6]", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });

    test("[1, 1, 2, 2, 3, 3, 4, 5]", () => {
        expect(analyzeArray([1, 1, 2, 2, 3, 3, 4, 5])).toEqual({
            average: 2.625,
            min: 1,
            max: 5,
            length: 8
        });
    });
});