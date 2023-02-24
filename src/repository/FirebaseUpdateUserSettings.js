import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const updateUserSettings = async (userName, previousImgUrl, imgUrl, user) => {
    const docRef = doc(db, 'users', user.uid)
    const updatedTask = {
        username: userName,
        coverimgurl: imgUrl || previousImgUrl,
    }
    await updateDoc(docRef, updatedTask);
}