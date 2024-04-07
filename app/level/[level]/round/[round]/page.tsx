import z from "zod"
import { levels } from "@/data/levels"
import { RedirectType, redirect } from "next/navigation"
import { Round } from "./Round"

const paramsSchema = z.object({
    level: z.number({ coerce: true }).int().catch(1),
    round: z.number({ coerce: true }).int().catch(1),
})

type LevelRoundPageProps = {
    params: {
        level: string
        round: string
    }
}

export default function LevelRoundPage({ params }: LevelRoundPageProps) {
    const parsedParams = paramsSchema.safeParse(params)

    if (!parsedParams.success) {
        redirect("/level/1/round/1", RedirectType.replace)
    }

    const { level, round } = parsedParams.data

    const levelData = levels[level - 1]

    if (!levelData) {
        redirect("/level/1/round/1", RedirectType.replace)
    }

    const roundData = levelData.rounds[round - 1]

    if (!roundData) {
        redirect(`/level/${level}/round/1`, RedirectType.replace)
    }

    return (
        <div>
            <h1>{levelData.title}</h1>
            <Round round={roundData} />
        </div>
    )
}
