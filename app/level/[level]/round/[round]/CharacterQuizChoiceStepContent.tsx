import { type CharacterQuizChoiceStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { useState } from "react"
import { Button } from "@/components/Button"
import { CharacterDisplay } from "@/components/CharacterDisplay"

type CharacterQuizChoiceStepContentProps = {
    step: CharacterQuizChoiceStep
} & BaseStepProps

export const CharacterQuizChoiceStepContent = ({
    step,
}: CharacterQuizChoiceStepContentProps) => {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null)

    return (
        <div className="flex flex-col mt-8">
            <CharacterDisplay character={step.character} />
            <div className="flex justify-between p-4 gap-2">
                {step.choices.map((choice, choiceIndex) => (
                    <Button
                        key={choiceIndex}
                        type="button"
                        className="w-16"
                        onClick={() => {
                            setSelectedChoice(choice)
                        }}
                    >
                        {choice}
                    </Button>
                ))}
            </div>
            {selectedChoice && (
                <div>
                    {selectedChoice === step.correctChoice ? (
                        <Button type="submit">Correct! Go Next</Button>
                    ) : (
                        <p>Try again!</p>
                    )}
                </div>
            )}
        </div>
    )
}
