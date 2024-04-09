export const checkKeyword = (
    inputValue: string,
    pronounciation: string[][],
): number => {
    let checkIndex = 0
    let ok = true
    for (let i = 0; i < pronounciation.length; i++) {
        const rest = inputValue.slice(checkIndex)
        for (let j = 0; j < pronounciation[i].length; j++) {
            if (rest.length !== 0 && rest.startsWith(pronounciation[i][j])) {
                checkIndex += pronounciation[i][j].length
                ok = true
                break
            }

            ok = false
        }
    }

    if (ok && checkIndex === inputValue.length) {
        return -1
    }

    return checkIndex
}
