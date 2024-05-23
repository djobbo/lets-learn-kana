"use client"

import { useLevelStore } from "@/store/LevelStore"
import { observer } from "mobx-react-lite"
import { Step } from "./Step"

export const Round = observer(function Round() {
    const { round, stepIndex } = useLevelStore()

    return (
        <div className="flex-1 flex flex-col mt-2">
            <h3 className="text-center text-textSecondary">{round.title}</h3>
            <Step key={stepIndex} />
        </div>
    )
})
