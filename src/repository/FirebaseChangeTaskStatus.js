import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const FirebaseChangeTaskStatus = async (passedId, user, docRefId, status) => {
    //console.log(docRefId);

    try {
        const docRef = doc(db, 'users', user.uid, 'projects', docRefId, 'bucketlist', passedId)
        await updateDoc(docRef, { status: status })
    } catch (error) {
        console.log(error);
    }
}