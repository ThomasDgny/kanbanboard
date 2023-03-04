import { collection, onSnapshot, query } from 'firebase/firestore'


const todoBucketList = (todoArr) => todoArr?.filter(bucket => bucket.status === 'todo')
const inProgressBucketList = (doneArr) => doneArr?.filter(bucket => bucket.status === 'inProgress')
const doneBucketList = (doneArr) => doneArr?.filter(bucket => bucket.status === 'done')

export const getBucketList = async (db, user, projectId, setList, setTaskCounter, setTodoTaskCounter, setDoneTaskCounter, setInProgressTaskCounter) => {
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
        setTodoTaskCounter(todoBucketList(listItems)?.length)
        setDoneTaskCounter(doneBucketList(listItems)?.length)
        setInProgressTaskCounter(inProgressBucketList(listItems)?.length)
        setList(listItems)
    });

    return () => unSubscribe
}
