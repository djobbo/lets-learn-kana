import { renderWithContext } from "@/test-utils/renderWithContext"
import { KeywordChallenge } from "./KeywordChallenge"
import { StepType } from "@/data/levels"
import { kana } from "@/data/kana"

describe("KeywordChallengeStepContent", () => {
    it("should render successfully", () => {
        expect(() => {
            renderWithContext(
                <KeywordChallenge
                    step={{
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.う, kana.え],
                        meanings: ["above", "up"],
                    }}
                />,
            )
        }).not.toThrow()
    })
})
