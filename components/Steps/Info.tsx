import { type InfoStep } from "@/data/levels"
import { Button } from "@/components/Button"

type InfoStepContentProps = Readonly<{
    step: InfoStep
}>

export const Info = ({ step }: InfoStepContentProps) => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold">{step.title}</h2>
                <p className="mt-2">{step.description}</p>
            </div>
            <Button type="submit">Continue</Button>
        </div>
    )
}
