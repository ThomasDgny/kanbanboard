import { createContext, useContext, useEffect, useState } from "react";
import { getBucketList } from "../repository/FirebaseGetBucketList";
import { UserAuth } from "./UserAuth";
import { db } from "../Firebase";


const ProjectContext = createContext();


export function ProjectContextProvider({ children }) {
    const [allBucketList, setAllBucketList] = useState([])
    const [docRefId, setDocRefId] = useState('')

    const { user } = UserAuth()

    useEffect(() => {
        getBucketList(db, user, docRefId, setAllBucketList)
    }, [docRefId, user])
    console.log(allBucketList);



    return (
        <ProjectContext.Provider value={{ allBucketList, setDocRefId }}>
            {children}
        </ProjectContext.Provider>
    )
}

export function UserOp() {
    return useContext(ProjectContext);
}