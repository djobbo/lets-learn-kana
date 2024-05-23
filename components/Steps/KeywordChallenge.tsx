import { type KeywordChallengeStep } from "@/data/levels"
import { useMemo, useState } from "react"
import { Button } from "@/components/Button"
import { checkPronounciation } from "@/util/checkPronounciation"
import { romaji } from "@/data/kana"

type KeywordChallengeStepContentProps = Readonly<{
    step: KeywordChallengeStep
}>

export const KeywordChallenge = ({
    step,
}: KeywordChallengeStepContentProps) => {
    const [inputValue, setInputValue] = useState<string>("")
    const [hasAnswered, setHasAnswered] = useState<boolean>(false)
    const [errorIndex, setErrorIndex] = useState<number>(-1)

    const isReadyToSubmit = inputValue.length > 0
    const isReadyToGoNext = hasAnswered && errorIndex === -1

    const maxInputLength = useMemo(() => {
        const pronounciationLengths = step.keyword
            .map((k) => romaji[k].map((c) => c.length))
            .flat()
        return Math.max(...pronounciationLengths, 12)
    }, [step.keyword])

    return (
        <div className="flex-1 flex flex-col justify-between">
            <h2 className="flex-1 flex justify-center items-center text-6xl font-bold">
                {step.keyword}
            </h2>
            <div>
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
                    <Button type="submit">Correct! Continue</Button>
                ) : (
                    <Button
                        type="button"
                        onClick={() => {
                            const errorIndex = checkPronounciation(
                                inputValue.toLowerCase(),
                                // TODO: add to model when adding levels/rounds/steps to mobx
                                step.keyword.map((k) => romaji[k]),
                            )
                            setErrorIndex(errorIndex)
                            setHasAnswered(true)
                        }}
                        disabled={!isReadyToSubmit}
                    >
                        Submit
                    </Button>
                )}
            </div>
        </div>
    )
}
