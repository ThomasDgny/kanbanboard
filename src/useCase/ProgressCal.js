export const projectProgresBar = (totalTaskLenght, doneLength) => {
    if (totalTaskLenght === 0) {
        return 0;
    } else {
        return (doneLength / totalTaskLenght) * 100;
    }

}