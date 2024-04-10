"use client"

import { useLevelStore } from "@/store/LevelStore"
import { observer } from "mobx-react-lite"
import { Step } from "./Step"

export const Round = observer(function Round() {
    const { round, stepIndex } = useLevelStore()

    return (
        <div>
            <h1 className="mt-8 text-center text-xl font-semibold">
                {round.title}
            </h1>
            <Step key={stepIndex} />
        </div>
    )
})
