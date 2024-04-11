import { AnimatePresence, motion } from "framer-motion"

type CharacterDisplayProps = Readonly<{
    character: string
    pronounciation?: string
}>

export const CharacterDisplay = ({
    character,
    pronounciation,
}: CharacterDisplayProps) => {
    return (
        <div className="relative">
            <svg
                className="mx-auto"
                width="320"
                height="320"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                overflow="visible"
            >
                <motion.circle
                    cx="160"
                    cy="160"
                    r="136"
                    className="fill-card"
                    initial={{ scale: 0.75, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                        scale: {
                            type: "spring",
                            damping: 12,
                            stiffness: 400,
                            restDelta: 0.01,
                        },
                        duration: 0.2,
                    }}
                />
                {pronounciation && (
                    <motion.g
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 350,
                                restDelta: 0.01,
                            },
                            delay: 0.2,
                            duration: 0.08,
                        }}
                    >
                        <circle
                            cx="256"
                            cy="64"
                            r="42"
                            className="fill-accent"
                        />
                        <text
                            x="256"
                            y="64"
                            className="text-center text-3xl fill-bg"
                            dominantBaseline="middle"
                            textAnchor="middle"
                        >
                            {pronounciation}
                        </text>
                    </motion.g>
                )}
                <motion.line
                    x1="160"
                    y1="0"
                    x2="160"
                    className="stroke-accent/50 stroke-1 svg-stroke-dashed"
                    initial={{ y1: 160, y2: 160 }}
                    animate={{ y1: 0, y2: 320 }}
                    exit={{ y1: 160, y2: 160 }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut",
                    }}
                />
                <motion.line
                    y1="160"
                    y2="160"
                    className="stroke-accent/50 stroke-1 svg-stroke-dashed"
                    initial={{ x1: 160, x2: 160 }}
                    animate={{ x1: 0, x2: 320 }}
                    exit={{ x1: 160, x2: 160 }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut",
                    }}
                />
            </svg>
            <motion.span
                className="absolute inset-0 flex justify-center items-center text-9xl"
                initial={{ scale: 1.25, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.25, opacity: 0 }}
                transition={{
                    duration: 0.1,
                }}
            >
                {character}
            </motion.span>
        </div>
    )
}
