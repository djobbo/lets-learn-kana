import { type LearnCharacterStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { Button } from "@/components/Button"
import { CharacterDisplay } from "@/components/CharacterDisplay"

type LearnCharacterStepContentProps = {
    step: LearnCharacterStep
} & BaseStepProps

export const LearnCharacterStepContent = ({
    step,
    onStepComplete,
}: LearnCharacterStepContentProps) => {
    return (
        <div className="flex flex-col gap-4 mt-8">
            <CharacterDisplay
                character={step.character}
                pronounciation={step.pronounciation}
            />
            <p className="text-textSecondary">{step.description}</p>
            <Button type="submit">Next</Button>
        </div>
    )
}
