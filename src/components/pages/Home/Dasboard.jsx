import React, { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../Firebase';
import { UserAuth } from '../../../context/UserAuth';
import { getProjects } from '../../../repository/FirebaseCustomFunc';




const Dasboard = () => {
    const [ProjectName, setProjectName] = useState('')
    const [projectsData, setProjectsData] = useState([])
    const { user } = UserAuth()


    const defultProjectStart = {
        projectname: ProjectName,
        bucket: [{
            id: 'todo',
            label: 'todo',
            list: []
        },
        {
            id: 'inprogress',
            label: 'inprogress',
            list: []
        },
        {
            id: 'done',
            label: 'done',
            list: []
        }],
    }

    const createNewProject = async (e) => {
        e.preventDefault()
        const collectionRef = collection(db, 'users', user.uid, 'projects')
        const docRef = await addDoc(collectionRef, defultProjectStart)
        console.log("Document written with ID: ", docRef.id);
    }

    useEffect(() => {
        const getResults = async () => {
            const res = await getProjects(user, db)
            setProjectsData(res)
        }
        getResults()
    }, [user])

    console.log(projectsData)



    return (
        <div>
            <form onSubmit={createNewProject}>
                <label>
                    Project Name:
                    <input required type="text" placeholder='Project Name' onChange={(e) => setProjectName(e.target.value.trim())} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <h1>Projects</h1>
                <div>
                    {/* Projects here */}
                </div>
            </div>

        </div>
    )
}

export default Dasboard