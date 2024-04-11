import { type LearnCharacterStep } from "@/data/levels"
import { Button } from "@/components/Button"
import { CharacterDisplay } from "@/components/CharacterDisplay"
import { romaji } from "@/data/kana"

type LearnCharacterStepContentProps = Readonly<{
    step: LearnCharacterStep
}>

export const LearnCharacter = ({ step }: LearnCharacterStepContentProps) => {
    return (
        <div className="flex flex-col gap-4 mt-8">
            <CharacterDisplay
                character={step.character}
                pronounciation={romaji[step.character][0]}
            />
            <p className="text-textSecondary">{step.description}</p>
            <Button type="submit">Next</Button>
        </div>
    )
}
