import { checkPronounciation } from "./checkPronounciation"

describe("Check Pronounciation", () => {
    describe("Should return -1 if the pronounciation is right", () => {
        test("single solution", () => {
            expect(checkPronounciation("ai", [["a"], ["i"]])).toBe(-1)
        })

        test("multiple solutions", () => {
            expect(checkPronounciation("ichi", [["i"], ["chi", "ti"]])).toBe(-1)
            expect(checkPronounciation("iti", [["i"], ["chi", "ti"]])).toBe(-1)

            expect(checkPronounciation("jaa", [["ja", "zya"], ["a"]])).toBe(-1)
            expect(checkPronounciation("zyaa", [["ja", "zya"], ["a"]])).toBe(-1)
        })
    })

    describe("should return the index of the error if the pronounciation is wrong", () => {
        test("wrong character", () => {
            expect(checkPronounciation("ai", [["i"], ["a"]])).toBe(0)
            expect(checkPronounciation("ai", [["i"], ["i"]])).toBe(0)
            expect(checkPronounciation("ia", [["i"], ["i"]])).toBe(1)

            expect(checkPronounciation("aoi", [["a"], ["o"], ["i"]])).toBe(-1)
            expect(checkPronounciation("eoi", [["a"], ["o"], ["i"]])).toBe(0)
            expect(checkPronounciation("aei", [["a"], ["o"], ["i"]])).toBe(1)
            expect(checkPronounciation("aee", [["a"], ["o"], ["i"]])).toBe(1)
            expect(checkPronounciation("aoe", [["a"], ["o"], ["i"]])).toBe(2)
        })

        test("wrong character (multiple solutions)", () => {
            expect(checkPronounciation("iti", [["i"], ["chi", "ti"]])).toBe(-1)
            expect(checkPronounciation("ici", [["i"], ["chi", "ti"]])).toBe(1)
            expect(checkPronounciation("tci", [["i"], ["chi", "ti"]])).toBe(0)
        })

        test("missing character", () => {
            expect(checkPronounciation("ai", [["a"], ["i"], ["i"]])).toBe(2)
            expect(checkPronounciation("ai", [["a"], ["i"], ["a"]])).toBe(2)
            expect(checkPronounciation("ai", [["a"], ["i"], ["o"]])).toBe(2)
        })

        test("missing character (multiple solutions)", () => {
            expect(
                checkPronounciation("iti", [["i"], ["chi", "ti"], ["i"]]),
            ).toBe(3)
            expect(
                checkPronounciation("ichi", [["i"], ["chi", "ti"], ["i"]]),
            ).toBe(4)
        })

        test("extra character", () => {
            expect(checkPronounciation("aii", [["a"], ["i"]])).toBe(2)
            expect(checkPronounciation("aiii", [["a"], ["i"]])).toBe(2)
            expect(checkPronounciation("aiii", [["a"], ["i"], ["i"]])).toBe(3)
        })
    })
})
