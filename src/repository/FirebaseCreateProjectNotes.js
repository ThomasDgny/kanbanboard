import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { db } from "../Firebase"


export const newProjectNote = async (user, title, description, id) => {
    if (user) {
        const newTask = {
            title: title,
            description: description,
            userId: user.uid,
            creationDate: new Date()
        }


        const collectionRef = collection(db, 'users', user.uid, 'projects', id, 'ProjectNotes')
        const docRef = await addDoc(collectionRef, newTask)

        await updateDoc(docRef, { id: docRef.id })

        return docRef
    }
}