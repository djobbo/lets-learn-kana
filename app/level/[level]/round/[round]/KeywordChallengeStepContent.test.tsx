import { renderWithContext } from "@/test-utils/renderWithContext"
import { KeywordChallengeStepContent } from "./KeywordChallengeStepContent"
import { StepType } from "@/data/levels"

describe("KeywordChallengeStepContent", () => {
    it("should render successfully", () => {
        expect(() => {
            renderWithContext(
                <KeywordChallengeStepContent
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
