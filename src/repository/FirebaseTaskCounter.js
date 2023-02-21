import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const updateTaskCounter = async (user, docRefId, totaltask) => {
    console.log(user.uid);
    const docRef = doc(db, 'users', user.uid, 'projects', docRefId)
    const updatedTask = {
        totaltask: totaltask
    }
    await updateDoc(docRef, updatedTask);
}