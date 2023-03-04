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
    const [todoTaskCounter, setTodoTaskCounter] = useState(0)
    const [inProgressTaskCounter, setInProgressTaskCounter] = useState(0)
    const [doneTaskCounter, setDoneTaskCounter] = useState(0)
    const { user } = UserAuth()

    //console.log(user);
    useEffect(() => {
        if (user) {
            getBucketList(db, user, docRefId, setAllBucketList, setTaskCounter, setTodoTaskCounter, setDoneTaskCounter, setInProgressTaskCounter)
        }
    }, [docRefId, user])
    //console.log(allBucketList);
    // console.log('total task', taskCounter);
    // console.log('todo task', todoTaskCounter);
    // console.log('done task', doneTaskCounter);

    useEffect(() => {
        if (user) {
            getPickedProject(user, db, docRefId, setProjectData)
            getAllProjects(user, db, setAllProjects)
            updateTaskCounter(user, docRefId, taskCounter, todoTaskCounter, doneTaskCounter, inProgressTaskCounter)

        }
    }, [docRefId, doneTaskCounter, inProgressTaskCounter, taskCounter, todoTaskCounter, user])

    return (
        <ProjectContext.Provider value={{ allProjects, projectData, allBucketList, docRefId, setDocRefId }}>
            {children}
        </ProjectContext.Provider>
    )
}

export function UserOp() {
    return useContext(ProjectContext);
}