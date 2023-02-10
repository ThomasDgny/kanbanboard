import { collection, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";


export const RemoveTaskHandler = async (passedId, bucketList, userid, docRefId) => {

    const collectionRef = collection(db, 'users', userid, 'projects', docRefId, 'bucketlist')
    const picked = bucketList?.filter((item) => item.id !== passedId)
    await updateDoc(collectionRef, { bucketlist: picked });
}