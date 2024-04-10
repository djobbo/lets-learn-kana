export const StepType = {
    INFO: "info",
    KANA_LEARN: "kana_learn",
    KANA_QUIZ_CHOICE: "kana_quiz_choice",
    KEYWORD_CHALLENGE: "keyword_challenge",
} as const

export type InfoStep = {
    type: typeof StepType.INFO
    title: string
    description: string
}

export type LearnCharacterStep = {
    type: typeof StepType.KANA_LEARN
    character: string
    pronounciation: string
    description: string
}

export type CharacterQuizChoiceStep = {
    type: typeof StepType.KANA_QUIZ_CHOICE
    character: string
    choices: [string, string, string, string]
    correctChoice: string
}

export type KeywordChallengeStep = {
    type: typeof StepType.KEYWORD_CHALLENGE
    keyword: string
    pronounciation: string[][] // ex: つち -> [["tsu", "tu"], ["chi", "ti"]] (mulitple romanization methods)
}

type Step =
    | InfoStep
    | LearnCharacterStep
    | CharacterQuizChoiceStep
    | KeywordChallengeStep

type Round = {
    id: string
    title: string
    steps: Step[]
}

type Level = {
    id: string
    title: string
    description: string
    rounds: Round[]
}

export const levels: Level[] = [
    {
        id: "hiragana-1",
        title: "Hiragana 1",
        description: "The journey begins...",
        rounds: [
            {
                id: "round-1",
                title: "First steps into the world of hiragana.",
                steps: [
                    {
                        type: StepType.INFO,
                        title: "Welcome to Hiragana 1",
                        description:
                            "This is the first set of hiragana characters. You will be presented with a series of challenges to help you learn and remember them. Good luck!",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: "あ",
                        pronounciation: "a",
                        description:
                            "This is the character あ. It is pronounced as 'a'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: "い",
                        pronounciation: "i",
                        description:
                            "This is the character い. It is pronounced as 'i'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: "あ",
                        choices: ["u", "i", "o", "a"],
                        correctChoice: "a",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: "い",
                        choices: ["i", "u", "e", "o"],
                        correctChoice: "i",
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: "あい",
                        pronounciation: [["a"], ["i"]],
                    },
                ],
            },
            {
                id: "round-2",
                title: "Learn the second set of hiragana characters.",
                steps: [
                    {
                        type: StepType.INFO,
                        title: "Welcome to Hiragana 1",
                        description:
                            "This is the second set of hiragana characters. You will be presented with a series of challenges to help you learn and remember them. Good luck!",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: "う",
                        pronounciation: "u",
                        description:
                            "This is the character う. It is pronounced as 'u'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: "え",
                        pronounciation: "e",
                        description:
                            "This is the character え. It is pronounced as 'e'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: "お",
                        pronounciation: "o",
                        description:
                            "This is the character お. It is pronounced as 'o'. It is part of the hiragana set. It is similar to the character あ (a), so be careful not to mix them up!",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: "え",
                        choices: ["i", "u", "e", "o"],
                        correctChoice: "e",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: "う",
                        choices: ["u", "i", "o", "a"],
                        correctChoice: "u",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: "お",
                        choices: ["i", "u", "e", "o"],
                        correctChoice: "o",
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: "うえ",
                        pronounciation: [["u"], ["e"]],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: "おお",
                        pronounciation: [["o"], ["o"]],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: "あおい",
                        pronounciation: [["a"], ["o"], ["i"]],
                    },
                ],
            },
        ],
    },
]
