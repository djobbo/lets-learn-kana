import z from "zod"
import { levels } from "@/data/levels"
import { RedirectType, redirect } from "next/navigation"
import { Round } from "./Round"
import { LevelStoreProvider } from "@/store/LevelStore"

const paramsSchema = z.object({
    level: z.number({ coerce: true }).int().catch(1),
    round: z.number({ coerce: true }).int().catch(1),
})

type LevelRoundPageProps = Readonly<{
    params: unknown
}>

export default function LevelRoundPage({ params }: LevelRoundPageProps) {
    const parsedParams = paramsSchema.safeParse(params)

    if (!parsedParams.success) {
        redirect("/level/1/round/1", RedirectType.replace)
    }

    const { level: levelIndex, round: roundIndex } = parsedParams.data

    const level = levels[levelIndex - 1]

    if (!level) {
        redirect("/level/1/round/1", RedirectType.replace)
    }

    const round = level.rounds[roundIndex - 1]

    if (!round) {
        redirect(`/level/${levelIndex}/round/1`, RedirectType.replace)
    }

    return (
        <LevelStoreProvider
            levelIndex={levelIndex - 1}
            roundIndex={roundIndex - 1}
        >
            <div className="m-8 w-96 mx-auto">
                <div className="bg-accent rounded-full flex p-0.5 items-center mx-auto max-w-96">
                    <div className="bg-bg rounded-full px-4 py-2 flex-1">
                        <p className="text-xs uppercase text-textSecondary leading-4">
                            Level {levelIndex}
                        </p>
                        <p className="text-base leading-4">
                            {level.description}
                        </p>
                    </div>
                    <p className="px-4 shrink-0 text-bg min-w-16">
                        #{roundIndex}
                    </p>
                </div>
                <Round />
            </div>
        </LevelStoreProvider>
    )
}
