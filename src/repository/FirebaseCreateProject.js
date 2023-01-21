import { addDoc, collection } from "firebase/firestore"
import { db } from "../Firebase"


export const createProject = async (user, projectName) => {
    const defultProjectStart = {
        projectname: projectName || null,
        bucket: [{
            id: 'todo',
            label: 'todo',
            list: []
        },
        {
            id: 'inprogress',
            label: 'inprogress',
            list: []
        },
        {
            id: 'done',
            label: 'done',
            list: []
        }],
    }

    const collectionRef = collection(db, 'users', user?.uid, 'projects')
    return await addDoc(collectionRef, defultProjectStart)
}