// write tests that checks that there is at least 1 level, that every level has at least 1 round and every round has at least 1 step

import { levels } from "@/data/levels"

describe("levels", () => {
    it("has at least 1 level", () => {
        expect(levels.length).toBeGreaterThanOrEqual(1)
    })

    levels.forEach((level, levelIndex) => {
        it(`level ${levelIndex + 1} has at least 1 round`, () => {
            expect(level.rounds.length).toBeGreaterThanOrEqual(1)
        })

        level.rounds.forEach((round, roundIndex) => {
            it(`level ${levelIndex + 1} round ${roundIndex + 1} has at least 1 step`, () => {
                expect(round.steps.length).toBeGreaterThanOrEqual(1)
            })
        })
    })
})
