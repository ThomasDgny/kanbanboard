import { doc, onSnapshot } from "firebase/firestore";

export const getUserData = async (db, user, setCurrentUserData) => {
    if (user) {
        const userRef = doc(db, 'users', user.uid)
        // const docSnap = await getDoc(userRef);
        const unSubscribe = onSnapshot(userRef, async (snapshot) => {
            console.log(snapshot.data());
            setCurrentUserData(snapshot.data())
        })
        return () => unSubscribe
    }
}