import { createContext, useContext } from "react";
import { collection, doc, getDoc, getDocs, getFirestore, query } from "firebase/firestore";
import { UserAuth } from "../context/UserAuth";

const FirebaseApi = createContext();

const getProjects = async (user, db, projectid) => {
    if (!user) {
        return null
    }

    console.log("read results")
    const docRef = doc(db, 'users', user.uid, 'projects', projectid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return null
    }
}

export function FirebaseProvider({ children }) {

    const { user } = UserAuth()
    const db = getFirestore()

    async function GetProjectsData(projectid) {
        return await getProjects(user, db, projectid)
    }

    return (
        <FirebaseApi.Provider value={{ GetProjectsData }}>
            {children}
        </FirebaseApi.Provider>
    )
}

export function FirebaseContextApi() {
    return useContext(FirebaseApi);
}