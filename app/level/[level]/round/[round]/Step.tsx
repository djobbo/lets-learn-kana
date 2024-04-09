import { LearnCharacterStepContent } from "./LearnCharacterStepContent"
import { InfoStepContent } from "./InfoStepContent"
import { CharacterQuizChoiceStepContent } from "./CharacterQuizChoiceStepContent"
import { KeywordChallengeStepContent } from "./KeywordChallengeStepContent"
import { observer } from "mobx-react-lite"
import { useLevelStore } from "./LevelStoreProvider"

const StepContent = observer(function StepContent() {
    const { step } = useLevelStore()

    switch (step.type) {
        case "info":
            return <InfoStepContent step={step} />
        case "kana_learn":
            return <LearnCharacterStepContent step={step} />
        case "kana_quiz_choice":
            return <CharacterQuizChoiceStepContent step={step} />
        case "keyword_challenge":
            return <KeywordChallengeStepContent step={step} />
        default:
            return null
    }
})

export const Step = () => {
    const { nextStep } = useLevelStore()

    return (
        <form onSubmit={() => nextStep()}>
            <StepContent />
        </form>
    )
}
