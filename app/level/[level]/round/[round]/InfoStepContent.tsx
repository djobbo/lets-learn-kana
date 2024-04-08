import { type InfoStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { Button } from "@/components/Button"

type InfoStepContentProps = {
    step: InfoStep
} & BaseStepProps

export const InfoStepContent = ({ step }: InfoStepContentProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{step.title}</h2>
            <p className="mt-2">{step.description}</p>
            <Button type="submit">Next</Button>
        </div>
    )
}
