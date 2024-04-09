"use client"

import { levels } from "@/data/levels"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ReactNode, createContext, useContext, useRef } from "react"

const LevelStore = types
    .model({
        levelIndex: types.number,
        roundIndex: types.number,
    })
    .volatile(() => ({
        stepIndex: 0,
    }))
    .actions((self) => ({
        setLevelIndex(levelIndex: number) {
            self.levelIndex = levelIndex
        },
        setRoundIndex(roundIndex: number) {
            self.roundIndex = roundIndex
        },
        setStepIndex(stepIndex: number) {
            self.stepIndex = stepIndex
        },
    }))
    .views((self) => ({
        get level() {
            return levels[self.levelIndex]
        },
        get round() {
            return this.level.rounds[self.roundIndex]
        },
        get step() {
            return this.round.steps[self.stepIndex]
        },
    }))
    .actions((self) => ({
        nextStep() {
            if (self.stepIndex >= self.round.steps.length - 1) return
            self.setStepIndex(self.stepIndex + 1)
        },
    }))

type ILevelStore = Instance<typeof LevelStore>

const LevelStoreContext = createContext<ILevelStore | null>(null)

export const useLevelStore = () => {
    const store = useContext(LevelStoreContext)

    if (!store)
        throw new Error(
            "useLevelStore must be used within a LevelStoreProvider",
        )

    return store
}

type LevelStoreProviderProps = {
    children: ReactNode
} & SnapshotOut<typeof LevelStore>

export const LevelStoreProvider = ({
    children,
    ...props
}: LevelStoreProviderProps) => {
    const storeRef = useRef<ILevelStore>(LevelStore.create(props))

    return (
        <LevelStoreContext.Provider value={storeRef.current}>
            {children}
        </LevelStoreContext.Provider>
    )
}
