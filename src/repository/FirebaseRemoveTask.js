import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export const RemoveTaskHandler = async (passedId ,user ,docRefId) => {

  //  console.log(docRefId);
    try {
        const docRef = doc(db, 'users', user.uid, 'projects', docRefId, 'bucketlist', passedId)
        await deleteDoc(docRef);
    } catch (error) {
        console.log(error);
    }
}