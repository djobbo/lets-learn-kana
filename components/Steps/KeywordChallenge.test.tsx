import { renderWithContext } from "@/test-utils/renderWithContext"
import { KeywordChallenge } from "./KeywordChallenge"
import { StepType } from "@/data/levels"

describe("KeywordChallengeStepContent", () => {
    it("should render successfully", () => {
        expect(() => {
            renderWithContext(
                <KeywordChallenge
                    step={{
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: "うえ",
                        pronounciation: [["u"], ["e"]],
                    }}
                />,
            )
        }).not.toThrow()
    })
})
