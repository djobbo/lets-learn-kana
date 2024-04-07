import { HTMLAttributes } from "react"

export const Button = ({
    className,
    ...props
}: HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={`px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded-sm shadow-md text-white ${className}`}
            {...props}
        />
    )
}
