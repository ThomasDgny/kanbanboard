import { addDoc, collection, updateDoc } from "firebase/firestore"
import { db } from "../Firebase"

const FirebaseCreateProject = async (user, projectName, imgUrl) => {
    const defultProjectStart = {
        projectname: projectName,
        projectlogo: imgUrl,
        createddate: new Date().getTime(),
    }

    const collectionRef = collection(db, 'users', user.uid, 'projects')
    const docRef = await addDoc(collectionRef, defultProjectStart)
    await updateDoc(docRef, { projectid: docRef.id })

    return docRef
}

export default FirebaseCreateProject