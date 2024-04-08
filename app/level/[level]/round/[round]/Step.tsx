import { Round as RoundType, type Step as StepType } from "@/data/levels"
import { LearnCharacterStepContent } from "./LearnCharacterStepContent"
import { InfoStepContent } from "./InfoStepContent"
import { CharacterQuizChoiceStepContent } from "./CharacterQuizChoiceStepContent"
import { KeywordChallengeStepContent } from "./KeywordChallengeStepContent"

export type BaseStepProps = {
    onStepComplete?: () => void
    round: RoundType
}

type StepProps = {
    step: StepType
} & BaseStepProps

export const StepContent = ({ step, ...baseProps }: StepProps) => {
    switch (step.type) {
        case "info":
            return <InfoStepContent step={step} {...baseProps} />
        case "kana_learn":
            return <LearnCharacterStepContent step={step} {...baseProps} />
        case "kana_quiz_choice":
            return <CharacterQuizChoiceStepContent step={step} {...baseProps} />
        case "keyword_challenge":
            return <KeywordChallengeStepContent step={step} {...baseProps} />
        default:
            return null
    }
}

export const Step = (props: StepProps) => {
    return (
        <form onSubmit={() => props.onStepComplete?.()}>
            <StepContent {...props} />
        </form>
    )
}
