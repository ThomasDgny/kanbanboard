import { createContext, useContext, useEffect, useState } from "react";
import { getBucketList } from "../repository/FirebaseGetBucketList";
import { UserAuth } from "./UserAuth";
import { db } from "../Firebase";
import { getPickedProject } from "../repository/FirebaseGetPickedProject";
import { getAllProjects } from "../repository/FirebaseGetProjects";


const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
    const [allProjects, setAllProjects] = useState([])
    const [allBucketList, setAllBucketList] = useState([])
    const [projectData, setProjectData] = useState([])
    const [docRefId, setDocRefId] = useState('')


    const { user } = UserAuth()

    useEffect(() => {
        getBucketList(db, user, docRefId, setAllBucketList)
    }, [docRefId, user])
    console.log(allBucketList);

    useEffect(() => {
        getPickedProject(user, db, docRefId, setProjectData)
    }, [docRefId, user])

    useEffect(() => {
        getAllProjects(user, db, setAllProjects)
    }, [docRefId, user])


    return (
        <ProjectContext.Provider value={{ allProjects, projectData, allBucketList, docRefId, setDocRefId }}>
            {children}
        </ProjectContext.Provider>
    )
}

export function UserOp() {
    return useContext(ProjectContext);
}