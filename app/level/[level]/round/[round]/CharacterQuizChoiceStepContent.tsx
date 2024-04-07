import { type CharacterQuizChoiceStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { useState } from "react"
import { Button } from "@/components/Button"

type CharacterQuizChoiceStepContentProps = {
    step: CharacterQuizChoiceStep
} & BaseStepProps

export const CharacterQuizChoiceStepContent = ({
    step,
}: CharacterQuizChoiceStepContentProps) => {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null)

    return (
        <div>
            <h2>{step.character}</h2>
            <ul className="flex p-4 gap-2">
                {step.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex}>
                        <button
                            className="rounded-full bg-blue-500 text-white w-12 h-12"
                            onClick={() => {
                                setSelectedChoice(choice)
                            }}
                        >
                            {choice}
                        </button>
                    </li>
                ))}
            </ul>
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
