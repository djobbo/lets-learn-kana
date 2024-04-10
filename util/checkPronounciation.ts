/**
 * Check if the input value is a is a valid pronounciation of the keyword
 * @param inputValue - The input value to check
 * @param pronounciation - The pronounciation of the keyword
 * @returns -1 if the keyword is right, otherwise the index of the error
 */
export const checkPronounciation = (
    inputValue: string,
    pronounciation: string[][],
): number => {
    let checkIndex = 0
    let ok = pronounciation.every((p) => {
        const rest = inputValue.slice(checkIndex)
        const found = p.find((p) => rest.startsWith(p))

        if (!found) return false

        checkIndex += found.length
        return true
    })

    if (ok && checkIndex === inputValue.length) return -1

    return checkIndex
}
