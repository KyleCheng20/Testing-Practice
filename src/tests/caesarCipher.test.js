import { caesarCipher } from "../funcs/caesarCipher";

describe("caesarCipher function", () => {
    test("shift one lowercase letter", () => {
        expect(caesarCipher("a", 3)).toBe("d");
    });

    test("shift multiple lowercase letters", () => {
        expect(caesarCipher("abc", 3)).toBe("def");
    });

    test("shift two lowercase words", () => {
        expect(caesarCipher("hello world", 1)).toBe("ifmmp xpsme");
    });

    test("shift one uppercase letter", () => {
        expect(caesarCipher("A", 1)).toBe("B");
    });

    test("shift multiple uppercase letters", () => {
        expect(caesarCipher("ABC", 3)).toBe("DEF");
    });

    test("shift multiple lowercase and uppercase letters", () => {
        expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
    });

    test("shift multiple lowercase and uppercase words with punctuation", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test("shifts outside the range wraps back to beginning", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });
});
