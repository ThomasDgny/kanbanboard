import { doc, onSnapshot } from "firebase/firestore";

export const getPickedProject = async (user, db, id, setProjectData) => {
    if (!user) {
        return []
    }
    const docPath = doc(db, 'users', user.uid, 'projects', id)
    const unSubscribe = onSnapshot(docPath, async (snapshot) => {
        console.log(snapshot.data());
        setProjectData(snapshot.data())
    })
    return () => unSubscribe
}