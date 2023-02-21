import { createContext, useContext, useEffect, useState } from "react";
import { getBucketList } from "../repository/FirebaseGetBucketList";
import { UserAuth } from "./UserAuth";
import { db } from "../Firebase";
import { getPickedProject } from "../repository/FirebaseGetPickedProject";
import { getAllProjects } from "../repository/FirebaseGetProjects";
import { updateTaskCounter } from "../repository/FirebaseTaskCounter";


const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
    const [allProjects, setAllProjects] = useState([])
    const [allBucketList, setAllBucketList] = useState([])
    const [projectData, setProjectData] = useState([])
    const [docRefId, setDocRefId] = useState('')
    const [taskCounter, setTaskCounter] = useState(0)

    const { user } = UserAuth()

    console.log(user);
    useEffect(() => {
        if (user) {
            getBucketList(db, user, docRefId, setAllBucketList, setTaskCounter)
        }
    }, [docRefId, user])
    console.log(allBucketList);
    console.log(taskCounter);

    useEffect(() => {
        if (user) {
            getPickedProject(user, db, docRefId, setProjectData)
            getAllProjects(user, db, setAllProjects)
            updateTaskCounter(user, docRefId, taskCounter)
        }
    }, [docRefId, user, taskCounter])


    return (
        <ProjectContext.Provider value={{ allProjects, projectData, allBucketList, docRefId, setDocRefId }}>
            {children}
        </ProjectContext.Provider>
    )
}

export function UserOp() {
    return useContext(ProjectContext);
}