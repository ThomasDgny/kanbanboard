import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { db } from "../Firebase"


export const newTask = async (user, title, description, status, id) => {
    if (user) {
        const newTask = {
            title: title,
            description: description,
            userId: user.uid,
            creationDate: new Date(),
            status: status
        }


        const collectionRef = collection(db, 'users', user.uid, 'projects', id, 'bucket', status, 'list')
        const docRef = await addDoc(collectionRef, newTask)

        await updateDoc(docRef, { projectid: docRef.id })

        return docRef
    }
}