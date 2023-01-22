import { addDoc, collection } from "firebase/firestore"
import { db, storage } from "../Firebase"
import { ref, uploadBytes } from "firebase/storage"

const img = 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'

export const createProject = async (user, projectName) => {
    const defultProjectStart = {
        projectname: projectName,
        projectlogo: img,
        projectnotes: null,
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

    if (img) {
        const imageRef = ref(storage, `projects/${projectName}/projectlogo`)
        uploadBytes(imageRef, img)


        const collectionRef = collection(db, 'users', user?.uid, 'projects')
        return await addDoc(collectionRef, defultProjectStart)
    }


}