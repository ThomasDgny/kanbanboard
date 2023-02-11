import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";
import { UserOp } from "../context/ProjectOp";
import { UserAuth } from "../context/UserAuth";


export const RemoveTaskHandler = async (passedId) => {

    const { docRefId } = UserOp()
    const { user } = UserAuth()

    console.log(docRefId);

    try {
        const docRef = doc(db, 'users', user.uid, 'projects', docRefId, 'bucketlist', passedId)
        await deleteDoc(docRef);
    } catch (error) {
        console.log(error);
    }
}