"use client"

import { levels } from "@/data/levels"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/navigation"
import { ReactNode, createContext, useContext, useRef } from "react"

const LevelStore = types
    .model({
        levelIndex: types.number,
        roundIndex: types.number,
        defaultStepIndex: types.maybeNull(types.number),
        router: types.frozen<AppRouterInstance>(),
    })
    .volatile((self) => ({
        stepIndex: self.defaultStepIndex ?? 0,
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
    .views((self) => ({
        get uniqueStepKey() {
            return `${self.levelIndex}-${self.roundIndex}-${self.stepIndex}`
        },
    }))
    .actions((self) => ({
        nextRound() {
            if (self.roundIndex >= self.level.rounds.length - 1) {
                self.router.push(`/level/${self.levelIndex + 2}/round/1`)
                return
            }

            self.router.push(
                `/level/${self.levelIndex + 1}/round/${self.roundIndex + 2}`,
            )
        },
    }))
    .actions((self) => ({
        nextStep() {
            if (self.stepIndex >= self.round.steps.length - 1) {
                self.nextRound()
                return
            }

            self.router.push(
                `/level/${self.levelIndex + 1}/round/${self.roundIndex + 1}?step=${self.stepIndex + 2}`,
            )
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

type LevelStoreProviderProps = Readonly<
    {
        children: ReactNode
    } & SnapshotOut<typeof LevelStore>
>

export const LevelStoreProvider = ({
    children,
    ...props
}: Omit<LevelStoreProviderProps, "router">) => {
    const router = useRouter()
    const storeRef = useRef<ILevelStore>(
        LevelStore.create({ ...props, router }),
    )

    return (
        <LevelStoreContext.Provider value={storeRef.current}>
            {children}
        </LevelStoreContext.Provider>
    )
}
