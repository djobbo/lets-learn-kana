import { type LearnCharacterStep } from "@/data/levels"
import { Button } from "@/components/Button"
import { CharacterDisplay } from "@/components/CharacterDisplay"
import { romaji } from "@/data/kana"

type LearnCharacterStepContentProps = Readonly<{
    step: LearnCharacterStep
}>

export const LearnCharacter = ({ step }: LearnCharacterStepContentProps) => {
    return (
        <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-1 flex-col justify-center">
                <CharacterDisplay
                    character={step.character}
                    pronounciation={romaji[step.character][0]}
                />
                <p className="text-textSecondary">{step.description}</p>
            </div>
            <Button type="submit">Continue</Button>
        </div>
    )
}
