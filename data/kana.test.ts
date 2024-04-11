// each kana should have at least one romaji pronounciation

import { Kana, kana, romaji } from "@/data/kana"

const HIRAGANA_COUNT = 46
const TOTAL_KANA = HIRAGANA_COUNT

describe("kana", () => {
    it("should have the correct number of kana", () => {
        expect(Object.keys(kana).length).toBe(TOTAL_KANA)
    })

    it("every kana should map to itself", () => {
        for (const kanaCharacter in kana) {
            expect(kana[kanaCharacter as Kana]).toBe(kanaCharacter)
        }
    })

    it("every kana should have at least one romaji pronounciation for each kana", () => {
        for (const kanaCharacter in kana) {
            expect(romaji[kanaCharacter as Kana].length).toBeGreaterThan(0)
        }
    })
})
