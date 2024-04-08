import { type LearnCharacterStep } from "@/data/levels"
import { BaseStepProps } from "./Step"
import { Button } from "@/components/Button"

type LearnCharacterStepContentProps = {
    step: LearnCharacterStep
} & BaseStepProps

export const LearnCharacterStepContent = ({
    step,
    onStepComplete,
}: LearnCharacterStepContentProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-8xl">{step.character}</h1>
            <div className="flex items-center gap-2 mt-4">
                <p className="shrink-0 w-10 h-10 text-xl text-white bg-blue-400 flex items-center justify-center rounded-full">
                    {step.pronounciation}
                </p>
                <p>{step.description}</p>
            </div>
            <Button type="submit">Next</Button>
        </div>
    )
}
