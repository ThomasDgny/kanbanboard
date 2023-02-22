import { doc, getDoc } from "firebase/firestore";

export const getUserData = async (db, user, setCurrentUserData) => {
    if (user) {
        const userRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(userRef);
        return setCurrentUserData(docSnap.data())
    }
}