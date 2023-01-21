import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import { UserAuth } from '../../../context/UserAuth';
import { getProjects } from '../../../repository/FirebaseGetProjects';
import { createProject } from '../../../repository/FirebaseCreateProject';




const Dasboard = () => {
    const [projectName, setProjectName] = useState('')
    const [projectsData, setProjectsData] = useState([])
    const { user } = UserAuth()


    const handleCreateProject = (e) => {
        e.preventDefault()
        return createProject(user, projectName)
    }

    useEffect(() => {
        getProjects(user, db).then((res) => setProjectsData(res))
    }, [user])

    console.log(projectsData)


    return (
        <div>
            <form onSubmit={handleCreateProject}>
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