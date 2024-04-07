import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <button
            className={`px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded-sm shadow-md text-white ${className}`}
            {...props}
        />
    )
}
