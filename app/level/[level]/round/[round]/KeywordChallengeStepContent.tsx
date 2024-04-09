import { type KeywordChallengeStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { useMemo, useState } from "react"
import { Button } from "@/components/Button"
import { checkKeyword } from "@/util/checkKeyword"

type KeywordChallengeStepContentProps = {
    step: KeywordChallengeStep
} & BaseStepProps

export const KeywordChallengeStepContent = ({
    step,
}: KeywordChallengeStepContentProps) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [hasAnswered, setHasAnswered] = useState<boolean>(false)
    const [errorIndex, setErrorIndex] = useState<number>(-1)

    const isReadyToSubmit = inputValue.length > 0
    const isReadyToGoNext = hasAnswered && errorIndex === -1

    const maxInputLength = useMemo(
        () =>
            Math.max(
                step.pronounciation.reduce(
                    (acc, curr) => acc + Math.max(...curr.map((c) => c.length)),
                    0,
                ),
                12,
            ),
        [step.pronounciation],
    )

    return (
        <div className="flex flex-col gap-2">
            <h2>{step.keyword}</h2>
            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    maxLength={maxInputLength}
                    onChange={(e) => {
                        setHasAnswered(false)
                        setInputValue(e.target.value.toLowerCase())
                    }}
                    className="border border-gray-300 rounded-md p-2"
                    disabled={isReadyToGoNext}
                />
                {hasAnswered && errorIndex !== -1 && (
                    <p className="border border-transparent absolute top-0 pointer-events-none p-2">
                        {inputValue.slice(0, errorIndex)}
                        <span className="text-accent">
                            {inputValue[errorIndex] ?? "?"}
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
                        const errorIndex = checkKeyword(
                            inputValue.toLowerCase(),
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
