import { cn } from "@/util/cn"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <div
            className={cn(
                "bg-primary mt-4 rounded-2xl flex items-center pb-1",
                className,
            )}
        >
            <button
                className="flex-1 bg-primaryLight hover:bg-primary text-white rounded-2xl p-2 text-bg"
                {...props}
            />
        </div>
    )
}
