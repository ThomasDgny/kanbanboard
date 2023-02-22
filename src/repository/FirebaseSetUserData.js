import { doc, updateDoc } from "firebase/firestore"

export const setUserData = async (db, res, email, userName, coverimg, joinedDate) => {
    const ref = doc(db, 'users', res.user.uid)
    const userobj = {
        uid: res.user.uid,
        email: email,
        username: userName,
        coverimg: coverimg || '',
        joinedDate: joinedDate || '',
    }
    await updateDoc(ref, userobj)
}