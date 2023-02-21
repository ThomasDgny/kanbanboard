import { collection, onSnapshot, query } from 'firebase/firestore'


export const getBucketList = async (db, user, projectId, setList, setTaskCounter) => {
    if (!user) {
        return []
    }

    const q = query(collection(db, 'users', user.uid, 'projects', projectId, 'bucketlist'));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
        const listItems = [];
        querySnapshot.forEach((doc) => {
            listItems.push({ ...doc.data(), id: doc.id });
        });
        setTaskCounter(listItems?.length)
        setList(listItems)
    });

    return () => unSubscribe
}
