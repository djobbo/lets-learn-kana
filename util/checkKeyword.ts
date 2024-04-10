export const checkKeyword = (
    inputValue: string,
    pronounciation: string[][],
): number => {
    let checkIndex = 0
    let ok = pronounciation.every((p) => {
        const rest = inputValue.slice(checkIndex)
        const found = p.find((p) => rest.startsWith(p))

        if (!found) {
            return false
        }

        checkIndex += found.length
        return true
    })

    return ok && checkIndex === inputValue.length ? -1 : checkIndex
}
