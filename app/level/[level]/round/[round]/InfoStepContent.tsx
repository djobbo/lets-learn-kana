import { type InfoStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { Button } from "@/components/Button"

type InfoStepContentProps = {
    step: InfoStep
} & BaseStepProps

export const InfoStepContent = ({ step }: InfoStepContentProps) => {
    return (
        <div>
            <h2 className="text-xl font-bold">{step.title}</h2>
            <p className="mt-2">{step.description}</p>
            <div className="flex justify-end mt-4">
                <Button type="submit">Next</Button>
            </div>
        </div>
    )
}
