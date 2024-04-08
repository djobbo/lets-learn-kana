import { type KeywordChallengeStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { useState } from "react"
import { Button } from "@/components/Button"

type KeywordChallengeStepContentProps = {
    step: KeywordChallengeStep
} & BaseStepProps

// TODO: add tests
const checkAnswer = (
    inputValue: string,
    pronounciation: string[][],
): number => {
    let checkIndex = 0
    for (let i = 0; i < pronounciation.length; i++) {
        for (let j = 0; j < pronounciation[i].length; j++) {
            if (inputValue.slice(checkIndex).startsWith(pronounciation[i][j])) {
                checkIndex += pronounciation[i][j].length
            } else {
                return checkIndex
            }
        }
    }

    if (checkIndex === inputValue.length) {
        return -1
    }

    return checkIndex
}

// TODO: case when the input is shorter than the answer
export const KeywordChallengeStepContent = ({
    step,
}: KeywordChallengeStepContentProps) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [hasAnswered, setHasAnswered] = useState<boolean>(false)
    const [errorIndex, setErrorIndex] = useState<number>(-1)

    const isReadyToSubmit = inputValue.length > 0
    const isReadyToGoNext = hasAnswered && errorIndex === -1

    return (
        <div className="flex flex-col gap-2">
            <h2>{step.keyword}</h2>
            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setHasAnswered(false)
                        setInputValue(e.target.value)
                    }}
                    className="border border-gray-300 rounded-md p-2"
                    disabled={isReadyToGoNext}
                />
                {hasAnswered && errorIndex !== -1 && (
                    <p className="absolute top-0 pointer-events-none p-2">
                        {inputValue.slice(0, errorIndex)}
                        <span className="text-red-500">
                            {inputValue[errorIndex]}
                        </span>
                        {inputValue.slice(errorIndex + 1)}
                    </p>
                )}
            </div>
            {isReadyToGoNext ? (
                <Button type="submit">Correct! Go Next</Button>
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        const errorIndex = checkAnswer(
                            inputValue,
                            step.pronounciation,
                        )
                        setErrorIndex(errorIndex)
                        setHasAnswered(true)
                    }}
                    disabled={!isReadyToSubmit}
                >
                    Submit
                </button>
            )}
        </div>
    )
}
