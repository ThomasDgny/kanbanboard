import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const updateUserSettings = async (userName, imgUrl, user) => {
    const docRef = doc(db, 'users', user.uid)
    const updateUserData = {
        username: userName,
        coverimgurl: imgUrl,
    }
    await updateDoc(docRef, updateUserData);
}