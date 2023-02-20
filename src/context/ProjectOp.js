import { createContext, useContext, useEffect, useState } from "react";
import { getBucketList } from "../repository/FirebaseGetBucketList";
import { UserAuth } from "./UserAuth";
import { db } from "../Firebase";
import { getPickedProject } from "../repository/FirebaseGetPickedProject";


const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
    const [allBucketList, setAllBucketList] = useState([])
    const [docRefId, setDocRefId] = useState('')
    const [projectData, setProjectData] = useState([])

    const { user } = UserAuth()

    useEffect(() => {
        getBucketList(db, user, docRefId, setAllBucketList)
    }, [docRefId, user])
    console.log(allBucketList);

    useEffect(() => {
        getPickedProject(user, db, docRefId ,setProjectData)
    }, [docRefId, user])

    return (
        <ProjectContext.Provider value={{ projectData, allBucketList, docRefId, setDocRefId }}>
            {children}
        </ProjectContext.Provider>
    )
}

export function UserOp() {
    return useContext(ProjectContext);
}