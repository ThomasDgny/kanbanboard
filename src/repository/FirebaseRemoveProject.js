import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export const removeProjectHandler = async (user, docRefId) => {
    try {
       // console.log(docRefId);
        const docRef = doc(db, 'users', user.uid, 'projects', docRefId)
        await deleteDoc(docRef);
    } catch (error) {
        console.log(error);
    }
}