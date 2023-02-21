import { collection, onSnapshot, query } from "firebase/firestore";

export const getAllProjects = async (user, db, setList) => {
    if (!user) {
        return []
    }
    const q = query(collection(db, 'users', user.uid, 'projects'));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
        const listItems = [];
        querySnapshot.forEach((doc) => {
            listItems.push({ ...doc.data() });
        });
        setList(listItems)
    });

    return () => unSubscribe

}
