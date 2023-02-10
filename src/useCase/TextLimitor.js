export const limit = (text, limit) => {
    if (text.length > limit) {
        return `${text.slice(0, limit)}...`
    } else {
        return `${text.slice(0, limit)}`
    }
}