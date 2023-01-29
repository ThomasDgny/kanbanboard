import { collection, onSnapshot, query } from 'firebase/firestore'


export const getBucketList = async (db, user, id, progress) => {
    if (!user) {
        return []
    }

    // const collectionRef = collection(db, 'users', user.uid, 'projects', id, 'bucket', 'todo', 'list')
    const q = query(collection(db, 'users', user.uid, 'projects', id, 'bucket', progress, 'list'));
    const listItems = [];
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            listItems.push(doc.data());
        });
    });

    return listItems
}