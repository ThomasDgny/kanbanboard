import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const updateTaskCounter = async (user, docRefId, totaltask, todo, done) => {
    const docRef = doc(db, 'users', user.uid, 'projects', docRefId)
    const updatedTask = {
        totaltask: totaltask,
        todo: todo,
        done: done
    }
    await updateDoc(docRef, updatedTask);
}