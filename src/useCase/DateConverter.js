
export const dateConverter = (getDate) => {
    const timestamp = getDate;
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    return formattedDate
}