import { LearnCharacter } from "@/components/Steps/LearnCharacter"
import { Info } from "@/components/Steps/Info"
import { CharacterQuizChoice } from "@/components/Steps/CharacterQuizChoice"
import { KeywordChallenge } from "@/components/Steps/KeywordChallenge"
import { observer } from "mobx-react-lite"
import { useLevelStore } from "@/store/LevelStore"
import { AnimatePresence } from "framer-motion"
import { StepType } from "@/data/levels"

const StepContent = observer(function StepContent() {
    const { step } = useLevelStore()

    switch (step.type) {
        case StepType.INFO:
            return <Info step={step} />
        case StepType.KANA_LEARN:
            return <LearnCharacter step={step} />
        case StepType.KANA_QUIZ_CHOICE:
            return <CharacterQuizChoice step={step} />
        case StepType.KEYWORD_CHALLENGE:
            return <KeywordChallenge step={step} />
        default:
            return null
    }
})

export const Step = () => {
    const { nextStep, uniqueStepKey } = useLevelStore()

    return (
        <form
            className="flex-1 flex flex-col"
            onSubmit={(e) => {
                e.preventDefault()
                nextStep()
            }}
        >
            <AnimatePresence mode="wait">
                <StepContent key={uniqueStepKey} />
            </AnimatePresence>
        </form>
    )
}
