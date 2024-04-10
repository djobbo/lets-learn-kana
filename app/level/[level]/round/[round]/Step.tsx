import { LearnCharacterStepContent } from "./LearnCharacterStepContent"
import { InfoStepContent } from "./InfoStepContent"
import { CharacterQuizChoiceStepContent } from "./CharacterQuizChoiceStepContent"
import { KeywordChallengeStepContent } from "./KeywordChallengeStepContent"
import { observer } from "mobx-react-lite"
import { useLevelStore } from "@/store/LevelStore"
import { AnimatePresence } from "framer-motion"
import { StepType } from "@/data/levels"

const StepContent = observer(function StepContent() {
    const { step } = useLevelStore()

    switch (step.type) {
        case StepType.INFO:
            return <InfoStepContent step={step} key={StepType.INFO} />
        case StepType.KANA_LEARN:
            return (
                <LearnCharacterStepContent
                    step={step}
                    key={StepType.KANA_LEARN}
                />
            )
        case StepType.KANA_QUIZ_CHOICE:
            return (
                <CharacterQuizChoiceStepContent
                    step={step}
                    key={StepType.KANA_QUIZ_CHOICE}
                />
            )
        case StepType.KEYWORD_CHALLENGE:
            return (
                <KeywordChallengeStepContent
                    step={step}
                    key={StepType.KEYWORD_CHALLENGE}
                />
            )
        default:
            return null
    }
})

export const Step = () => {
    const { nextStep } = useLevelStore()

    return (
        <form onSubmit={() => nextStep()}>
            <AnimatePresence mode="wait">
                <StepContent />
            </AnimatePresence>
        </form>
    )
}
