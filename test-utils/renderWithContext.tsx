import { LevelStoreProvider } from "@/store/LevelStore"
import { ReactNode } from "react"
import { render } from "@testing-library/react"

export const renderWithContext = (children: ReactNode) => {
    render(
        <LevelStoreProvider levelIndex={0} roundIndex={0} defaultStepIndex={0}>
            {children}
        </LevelStoreProvider>,
    )
}
