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
            <h1>{round.title}</h1>
            <p>{round.description}</p>
            <Step
                key={currentStepIndex}
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
