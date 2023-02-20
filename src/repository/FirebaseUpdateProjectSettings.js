import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const updateProjectSettings = async (projectName, defaulturl, imgUrl, user, docRefId) => {
    const docRef = doc(db, 'users', user.uid, 'projects', docRefId)
    const updatedTask = {
        projectname: projectName,
        projectlogo: imgUrl || defaulturl,
    }
    console.log(imgUrl);
    console.log(projectName);
    await updateDoc(docRef, updatedTask);
}