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
    const { round } = props

    return (
        <form
            className="max-w-lg p-8 mx-auto"
            onSubmit={() => props.onStepComplete?.()}
        >
            <h1 className="text-center text-lg font-bold">{round.title}</h1>
            <div className="flex flex-col shadow-sm p-4 rounded-lg bg-card mt-2">
                <StepContent {...props} />
            </div>
        </form>
    )
}
