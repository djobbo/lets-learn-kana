import { type CharacterQuizChoiceStep } from "@/data/levels"
import { useState } from "react"
import { Button } from "@/components/Button"
import { CharacterDisplay } from "@/components/CharacterDisplay"
import { useLevelStore } from "@/store/LevelStore"
import { Kana, romaji } from "@/data/kana"

type CharacterQuizChoiceStepContentProps = Readonly<{
    step: CharacterQuizChoiceStep
}>

const Answer = {
    None: "None",
    Correct: "Correct",
    Incorrect: "Incorrect",
} as const

type Choice = (typeof Answer)[keyof typeof Answer]

export const CharacterQuizChoice = ({
    step,
}: CharacterQuizChoiceStepContentProps) => {
    const { nextStep } = useLevelStore()
    const [answer, setAnswer] = useState<Choice>(Answer.None)

    const handleSubmit = (choice: Kana) => {
        const isCorrect = choice === step.character
        setAnswer(isCorrect ? Answer.Correct : Answer.Incorrect)

        if (isCorrect) {
            setTimeout(() => {
                setAnswer(Answer.None)
                nextStep()
            }, 500)
        }
    }

    return (
        <div className="flex flex-col mt-8">
            <CharacterDisplay character={step.character} />
            <div className="flex justify-between p-4 gap-2">
                {step.choices.map((character) => {
                    const pronounciation = romaji[character][0]
                    return (
                        <Button
                            key={character}
                            type="button"
                            className="w-16"
                            onClick={() => {
                                handleSubmit(character)
                            }}
                            disabled={answer === Answer.Correct}
                        >
                            {pronounciation}
                        </Button>
                    )
                })}
            </div>
            {answer === Answer.Incorrect && <p>Try again!</p>}
        </div>
    )
}
