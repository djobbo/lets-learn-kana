import { Kana, kana } from "@/data/kana"

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
    character: Kana
    description: string
}

export type CharacterQuizChoiceStep = {
    type: typeof StepType.KANA_QUIZ_CHOICE
    character: Kana
    choices: [Kana, Kana, Kana, Kana]
}

export type KeywordChallengeStep = {
    type: typeof StepType.KEYWORD_CHALLENGE
    keyword: Kana[]
    meanings: string[]
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
        title: "Hiragana Set 1",
        description: "The journey begins...",
        rounds: [
            {
                id: "hiragana-1-1",
                title: "Introduction to あ and い",
                steps: [
                    {
                        type: StepType.INFO,
                        title: "Welcome to Hiragana 1",
                        description:
                            "This is the first set of hiragana characters. You will be presented with a series of challenges to help you learn and remember them. Good luck!",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: kana.あ,
                        description:
                            "This is the character あ. It is pronounced as 'a'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: kana.い,
                        description:
                            "This is the character い. It is pronounced as 'i'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.あ,
                        choices: [kana.う, kana.い, kana.お, kana.あ],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.い,
                        choices: [kana.あ, kana.う, kana.い, kana.え],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.あ, kana.い],
                        meanings: ["love", "affection", "care"],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.い, kana.い],
                        meanings: ["good", "fine", "nice"],
                    },
                ],
            },
            {
                id: "hiragana-1-2",
                title: "Introduction to う and え",
                steps: [
                    {
                        type: StepType.KANA_LEARN,
                        character: kana.う,
                        description:
                            "This is the character う. It is pronounced as 'u'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: kana.え,
                        description:
                            "This is the character え. It is pronounced as 'e'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.う,
                        choices: [kana.お, kana.え, kana.う, kana.あ],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.え,
                        choices: [kana.い, kana.え, kana.う, kana.お],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.う, kana.え],
                        meanings: ["above", "up"],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.い, kana.い, kana.え],
                        meanings: ["no"],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.あ, kana.う],
                        meanings: ["to meet", "to encounter", "to see"],
                    },
                ],
            },
            {
                id: "hiragana-1-3",
                title: "Introduction to お and review",
                steps: [
                    {
                        type: StepType.KANA_LEARN,
                        character: kana.お,
                        description:
                            "This is the character お. It is pronounced as 'o'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.お,
                        choices: [kana.お, kana.い, kana.う, kana.え],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.う,
                        choices: [kana.い, kana.え, kana.う, kana.お],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.あ,
                        choices: [kana.え, kana.あ, kana.お, kana.い],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.い,
                        choices: [kana.う, kana.い, kana.あ, kana.お],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.え,
                        choices: [kana.あ, kana.え, kana.う, kana.い],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.お, kana.お, kana.い],
                        meanings: ["many", "numerous", "a lot"],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.あ, kana.お, kana.い],
                        meanings: ["blue", "azure"],
                    },
                ],
            },
        ],
    },
]
