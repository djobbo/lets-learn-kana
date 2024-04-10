import { checkKeyword } from "./checkKeyword"

describe("Check Keyword", () => {
    describe("Should return -1 if the keyword is right", () => {
        test("single solution", () => {
            expect(checkKeyword("ai", [["a"], ["i"]])).toBe(-1)
        })

        test("multiple solutions", () => {
            expect(checkKeyword("ichi", [["i"], ["chi", "ti"]])).toBe(-1)
            expect(checkKeyword("iti", [["i"], ["chi", "ti"]])).toBe(-1)

            expect(checkKeyword("jaa", [["ja", "zya"], ["a"]])).toBe(-1)
            expect(checkKeyword("zyaa", [["ja", "zya"], ["a"]])).toBe(-1)
        })
    })

    describe("should return the index of the error if the keyword is wrong", () => {
        test("wrong character", () => {
            expect(checkKeyword("ai", [["i"], ["a"]])).toBe(0)
            expect(checkKeyword("ai", [["i"], ["i"]])).toBe(0)
            expect(checkKeyword("ia", [["i"], ["i"]])).toBe(1)

            expect(checkKeyword("aoi", [["a"], ["o"], ["i"]])).toBe(-1)
            expect(checkKeyword("eoi", [["a"], ["o"], ["i"]])).toBe(0)
            expect(checkKeyword("aei", [["a"], ["o"], ["i"]])).toBe(1)
            expect(checkKeyword("aee", [["a"], ["o"], ["i"]])).toBe(1)
            expect(checkKeyword("aoe", [["a"], ["o"], ["i"]])).toBe(2)
        })

        test("wrong character (multiple solutions)", () => {
            expect(checkKeyword("iti", [["i"], ["chi", "ti"]])).toBe(-1)
            expect(checkKeyword("ici", [["i"], ["chi", "ti"]])).toBe(1)
            expect(checkKeyword("tci", [["i"], ["chi", "ti"]])).toBe(0)
        })

        test("missing character", () => {
            expect(checkKeyword("ai", [["a"], ["i"], ["i"]])).toBe(2)
            expect(checkKeyword("ai", [["a"], ["i"], ["a"]])).toBe(2)
            expect(checkKeyword("ai", [["a"], ["i"], ["o"]])).toBe(2)
        })

        test("missing character (multiple solutions)", () => {
            expect(checkKeyword("iti", [["i"], ["chi", "ti"], ["i"]])).toBe(3)
            expect(checkKeyword("ichi", [["i"], ["chi", "ti"], ["i"]])).toBe(4)
        })

        test("extra character", () => {
            expect(checkKeyword("aii", [["a"], ["i"]])).toBe(2)
            expect(checkKeyword("aiii", [["a"], ["i"]])).toBe(2)
            expect(checkKeyword("aiii", [["a"], ["i"], ["i"]])).toBe(3)
        })
    })
})
