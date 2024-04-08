"use client"

import { type Round as RoundType } from "@/data/levels"
import { Step } from "./Step"
import { useState } from "react"

type RoundProps = {
    round: RoundType
}

export const Round = ({ round }: RoundProps) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    return (
        <div>
            <h1 className="mt-8 text-center text-xl font-semibold">
                {round.title}
            </h1>
            <Step
                key={currentStepIndex}
                round={round}
                step={round.steps[currentStepIndex]}
                onStepComplete={
                    currentStepIndex < round.steps.length - 1
                        ? () => setCurrentStepIndex(currentStepIndex + 1)
                        : undefined
                }
            />
        </div>
    )
}
