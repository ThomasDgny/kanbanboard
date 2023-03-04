import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const updateTaskCounter = async (user, docRefId, totaltask, todo, done, inProgress) => {
    const docRef = doc(db, 'users', user.uid, 'projects', docRefId)

    const updatedTask = {
        totaltask: totaltask,
        todo: todo,
        done: done,
        inProgress: inProgress
    }

    await updateDoc(docRef, { generalStats: updatedTask });
}