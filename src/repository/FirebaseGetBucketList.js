import { collection, onSnapshot, query } from 'firebase/firestore'


export const getBucketList = async (db, user, projectId, progress, setList) => {
    if (!user) {
        return []
    }

    // const collectionRef = collection(db, 'users', user.uid, 'projects', id, 'bucket', 'todo', 'list')
    const q = query(collection(db, 'users', user.uid, 'projects', projectId, 'bucket', progress, 'list'));

    const unSubscribe = onSnapshot(q, (querySnapshot) => {
        const listItems = [];
        querySnapshot.forEach((doc) => {
            listItems.push({ ...doc.data(), id: doc.id });
        });
        setList(listItems)
    });

    return () => unSubscribe
}
