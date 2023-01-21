import { collection, getDocs, query } from "firebase/firestore";

export const getProjects = async (user, db) => {
    if (!user) {
        return []
    }
    const tracks = collection(db, 'users', user.uid, 'projects');
    const tracksQuery = query(tracks)
    const querySnapshot = await getDocs(tracksQuery);
    console.log("read tracks")
    const res = []
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        res.push(data)
    });

    return res;
}