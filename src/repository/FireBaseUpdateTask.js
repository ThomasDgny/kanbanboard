import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const fireBaseUpdateTask = async (passedId, user, docRefId, title, description, status, severity ,url) => {

   // console.log(docRefId);

    try {
        const docRef = doc(db, 'users', user.uid, 'projects', docRefId, 'bucketlist', passedId)

        const updatedTask = {
            title: title,
            description: description,
            updatedDate: new Date().getTime(),
            status: status,
            severity: severity,
            fileurl: url
        }


        await updateDoc(docRef, updatedTask);
    } catch (error) {
        console.log(error);
    }
}