import z from "zod"
import { levels } from "@/data/levels"
import { RedirectType, redirect } from "next/navigation"
import { Round } from "./Round"
import { LevelStoreProvider } from "@/store/LevelStore"

const paramsSchema = z.object({
    level: z.number({ coerce: true }).int().catch(1),
    round: z.number({ coerce: true }).int().catch(1),
})

const searchParamsSchema = z.object({
    step: z.number({ coerce: true }).int().catch(0).optional(),
})

type LevelRoundPageProps = Readonly<{
    params: unknown
    searchParams: unknown
}>

export default function LevelRoundPage({
    params,
    searchParams,
}: LevelRoundPageProps) {
    const parsedParams = paramsSchema.safeParse(params)
    const parsedSearchParams = searchParamsSchema.parse(searchParams)

    if (!parsedParams.success) {
        redirect("/level/1/round/1", RedirectType.replace)
    }

    const { level: levelIndex, round: roundIndex } = parsedParams.data

    const level = levels[levelIndex - 1]

    if (!level) {
        redirect("/level/1/round/1", RedirectType.replace)
    }

    if (roundIndex > level.rounds.length) {
        redirect(`/level/${levelIndex + 1}/round/1`, RedirectType.replace)
    }

    const round = level.rounds[roundIndex - 1]

    if (!round) {
        redirect(`/level/${levelIndex}/round/1`, RedirectType.replace)
    }

    if (
        parsedSearchParams.step &&
        parsedSearchParams.step > round.steps.length
    ) {
        redirect(
            `/level/${levelIndex}/round/${roundIndex}`,
            RedirectType.replace,
        )
    }

    return (
        <LevelStoreProvider
            levelIndex={levelIndex - 1}
            roundIndex={roundIndex - 1}
            defaultStepIndex={
                parsedSearchParams.step ? parsedSearchParams.step - 1 : 0
            }
        >
            <div className="py-8 px-4 w-96 mx-auto h-full flex flex-col">
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
