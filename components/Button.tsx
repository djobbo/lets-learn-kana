import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <div className="bg-primary mt-4 rounded-lg flex items-center pb-1">
            <button
                className={`flex-1 bg-primaryLight hover:bg-primary text-white rounded-lg p-2 text-bg ${className}`}
                {...props}
            />
        </div>
    )
}
