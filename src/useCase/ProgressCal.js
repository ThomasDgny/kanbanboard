export const projectProgresBar = (todoLength, doneLength) => {
    if (todoLength === 0) {
        return 100;
    } else {
        return (doneLength / todoLength) * 100;
    }

}