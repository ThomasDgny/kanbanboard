import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import { UserAuth } from '../../../context/UserAuth';
import { getAllProjects } from '../../../repository/FirebaseGetProjects';
import { useNavigate } from 'react-router-dom';
import ProjectCrad from './DashboardElements/ProjectCrad';


const Dasboard = () => {
    const [projectsData, setProjectsData] = useState([])
    const { user } = UserAuth()
    const navigate = useNavigate()

    useEffect(() => {
        getAllProjects(user, db).then((res) => setProjectsData(res))
    }, [user])
    console.log(projectsData)



    return (
        <div>

            <div>
                <div className='flex gap-10'>
                    <h1>Projects</h1>
                    <button onClick={() => navigate('/CreateProject')}>Create</button>
                </div>
                <div className='ProjectLsit flex gap-5'>
                    {projectsData.map((item, id) => (
                        <div key={id} className='ProjectCard'>
                            <ProjectCrad item={item} />
                        </div>
                    ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Dasboard