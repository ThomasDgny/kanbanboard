import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { db } from "../Firebase"

export const newTask = async (user, title, description, status, severity, url, DocRef) => {
    if (user) {
        const newTask = {
            title: title,
            description: description,
            userId: user.uid,
            creationDate: new Date().getTime(),
            status: status,
            severity: severity,
            fileurl: url

        }

        const collectionRef = collection(db, 'users', user.uid, 'projects', DocRef, 'bucketlist')
        const docRef = await addDoc(collectionRef, newTask)
        await updateDoc(docRef, { id: docRef.id })
    }
}