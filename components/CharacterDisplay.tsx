type CharacterDisplayProps = {
    character: string
    pronounciation?: string
}

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
            >
                <circle cx="160" cy="160" r="136" className="fill-card" />
                {pronounciation && (
                    <g>
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
                    </g>
                )}
                <line
                    x1="160"
                    y1="0"
                    x2="160"
                    y2="320"
                    className="stroke-accent/50 stroke-1 svg-stroke-dashed "
                />
                <line
                    x1="0"
                    y1="160"
                    x2="320"
                    y2="160"
                    className="stroke-accent/50 stroke-1 svg-stroke-dashed "
                />
            </svg>
            <span className="absolute inset-0 flex justify-center items-center text-9xl">
                {character}
            </span>
        </div>
    )
}
