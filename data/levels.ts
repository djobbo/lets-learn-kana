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
                        description:
                            "This is the character あ. It is pronounced as 'a'. It is part of the hiragana set.",
                    },
                    {
                        type: StepType.KANA_LEARN,
                        character: "い",
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
                        choices: [kana.い, kana.う, kana.え, kana.お],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        // keyword: "あい",
                        keyword: [kana.あ, kana.い],
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
                        type: StepType.KANA_LEARN,
                        character: kana.お,
                        description:
                            "This is the character お. It is pronounced as 'o'. It is part of the hiragana set. It is similar to the character あ (a), so be careful not to mix them up!",
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.え,
                        choices: [kana.い, kana.う, kana.え, kana.お],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.う,
                        choices: [kana.う, kana.い, kana.お, kana.あ],
                    },
                    {
                        type: StepType.KANA_QUIZ_CHOICE,
                        character: kana.お,
                        choices: [kana.い, kana.う, kana.え, kana.お],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.う, kana.え],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.お, kana.お],
                    },
                    {
                        type: StepType.KEYWORD_CHALLENGE,
                        keyword: [kana.あ, kana.お, kana.い],
                    },
                ],
            },
        ],
    },
]
