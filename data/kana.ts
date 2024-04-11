export const kana = {
    // vowels
    あ: "あ",
    い: "い",
    う: "う",
    え: "え",
    お: "お",
    // k
    か: "か",
    き: "き",
    く: "く",
    け: "け",
    こ: "こ",
    // s
    さ: "さ",
    し: "し",
    す: "す",
    せ: "せ",
    そ: "そ",
    // t
    た: "た",
    ち: "ち",
    つ: "つ",
    て: "て",
    と: "と",
    // n
    な: "な",
    に: "に",
    ぬ: "ぬ",
    ね: "ね",
    の: "の",
    // h
    は: "は",
    ひ: "ひ",
    ふ: "ふ",
    へ: "へ",
    ほ: "ほ",
    // m
    ま: "ま",
    み: "み",
    む: "む",
    め: "め",
    も: "も",
    // y
    や: "や",
    ゆ: "ゆ",
    よ: "よ",
    // r
    ら: "ら",
    り: "り",
    る: "る",
    れ: "れ",
    ろ: "ろ",
    // w
    わ: "わ",
    を: "を",
    ん: "ん",
} as const

export type Kana = (typeof kana)[keyof typeof kana]

export const romaji: Record<Kana, string[]> = {
    // vowels
    [kana.あ]: ["a"],
    [kana.い]: ["i"],
    [kana.う]: ["u"],
    [kana.え]: ["e"],
    [kana.お]: ["o"],
    // k
    [kana.か]: ["ka"],
    [kana.き]: ["ki"],
    [kana.く]: ["ku"],
    [kana.け]: ["ke"],
    [kana.こ]: ["ko"],
    // s
    [kana.さ]: ["sa"],
    [kana.し]: ["shi", "si"],
    [kana.す]: ["su"],
    [kana.せ]: ["se"],
    [kana.そ]: ["so"],
    // t
    [kana.た]: ["ta"],
    [kana.ち]: ["chi", "ti"],
    [kana.つ]: ["tsu", "tu"],
    [kana.て]: ["te"],
    [kana.と]: ["to"],
    // n
    [kana.な]: ["na"],
    [kana.に]: ["ni"],
    [kana.ぬ]: ["nu"],
    [kana.ね]: ["ne"],
    [kana.の]: ["no"],
    // h
    [kana.は]: ["ha"],
    [kana.ひ]: ["hi"],
    [kana.ふ]: ["fu", "hu"],
    [kana.へ]: ["he"],
    [kana.ほ]: ["ho"],
    // m
    [kana.ま]: ["ma"],
    [kana.み]: ["mi"],
    [kana.む]: ["mu"],
    [kana.め]: ["me"],
    [kana.も]: ["mo"],
    // y
    [kana.や]: ["ya"],
    [kana.ゆ]: ["yu"],
    [kana.よ]: ["yo"],
    // r
    [kana.ら]: ["ra"],
    [kana.り]: ["ri"],
    [kana.る]: ["ru"],
    [kana.れ]: ["re"],
    [kana.ろ]: ["ro"],
    // w
    [kana.わ]: ["wa"],
    [kana.を]: ["wo", "o"],
    [kana.ん]: ["n"],
}
