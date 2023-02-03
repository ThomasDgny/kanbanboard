export const severityTag = (cardData) => {
    const highTagsStyle = `py-1 px-4 text-[16px] bg-red-100 text-red-600 border border-red-600 rounded-lg`
    const midTagsStyle = `py-1 px-4 text-[16px] bg-orange-100 text-orange-600 border border-orange-600 rounded-lg`
    const lowTagsStyle = `py-1 px-4 text-[16px] bg-green-100 text-green-600 border border-green-600 rounded-lg`

    if (cardData.severity === 'high' || cardData === 'high') {
        return highTagsStyle
    } else if (cardData.severity === 'medium' || cardData === 'medium') {
        return midTagsStyle
    } else if (cardData.severity === 'low' || cardData === 'low') {
        return lowTagsStyle
    }
}