export type InfoStep = {
    type: "info"
    title: string
    description: string
}

export type LearnCharacterStep = {
    type: "kana_learn"
    character: string
    pronounciation: string
    description: string
}

export type CharacterQuizChoiceStep = {
    type: "kana_quiz_choice"
    character: string
    choices: [string, string, string, string]
    correctChoice: string
}

export type KeywordChallengeStep = {
    type: "keyword_challenge"
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
                        type: "info",
                        title: "Welcome to Hiragana 1",
                        description:
                            "This is the first set of hiragana characters. You will be presented with a series of challenges to help you learn and remember them. Good luck!",
                    },
                    {
                        type: "kana_learn",
                        character: "あ",
                        pronounciation: "a",
                        description:
                            "This is the character あ. It is pronounced as 'a'. It is part of the hiragana set.",
                    },
                    {
                        type: "kana_learn",
                        character: "い",
                        pronounciation: "i",
                        description:
                            "This is the character い. It is pronounced as 'i'. It is part of the hiragana set.",
                    },
                    {
                        type: "kana_quiz_choice",
                        character: "あ",
                        choices: ["u", "i", "o", "a"],
                        correctChoice: "a",
                    },
                    {
                        type: "kana_quiz_choice",
                        character: "い",
                        choices: ["i", "u", "e", "o"],
                        correctChoice: "i",
                    },
                    {
                        type: "keyword_challenge",
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
                        type: "info",
                        title: "Welcome to Hiragana 1",
                        description:
                            "This is the second set of hiragana characters. You will be presented with a series of challenges to help you learn and remember them. Good luck!",
                    },
                    {
                        type: "kana_learn",
                        character: "う",
                        pronounciation: "u",
                        description:
                            "This is the character う. It is pronounced as 'u'. It is part of the hiragana set.",
                    },
                    {
                        type: "kana_learn",
                        character: "え",
                        pronounciation: "e",
                        description:
                            "This is the character え. It is pronounced as 'e'. It is part of the hiragana set.",
                    },
                    {
                        type: "kana_learn",
                        character: "お",
                        pronounciation: "o",
                        description:
                            "This is the character お. It is pronounced as 'o'. It is part of the hiragana set. It is similar to the character あ (a), so be careful not to mix them up!",
                    },
                    {
                        type: "kana_quiz_choice",
                        character: "え",
                        choices: ["i", "u", "e", "o"],
                        correctChoice: "e",
                    },
                    {
                        type: "kana_quiz_choice",
                        character: "う",
                        choices: ["u", "i", "o", "a"],
                        correctChoice: "u",
                    },
                    {
                        type: "kana_quiz_choice",
                        character: "お",
                        choices: ["i", "u", "e", "o"],
                        correctChoice: "o",
                    },
                    {
                        type: "keyword_challenge",
                        keyword: "うえ",
                        pronounciation: [["u"], ["e"]],
                    },
                    {
                        type: "keyword_challenge",
                        keyword: "おお",
                        pronounciation: [["o"], ["o"]],
                    },
                    {
                        type: "keyword_challenge",
                        keyword: "あおい",
                        pronounciation: [["a"], ["o"], ["i"]],
                    },
                ],
            },
        ],
    },
]
