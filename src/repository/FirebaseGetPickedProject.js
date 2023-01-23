import {doc, getDoc} from "firebase/firestore";

export const getPickedProjects = async (user, db, id) => {
    if (!user) {
        return []
    }
    const tracks = doc(db, 'users', user.uid, 'projects', `${id}`);
    const docSnap = await getDoc(tracks);
    return docSnap.data();
}