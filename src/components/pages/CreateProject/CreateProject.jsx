import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProject } from '../../../repository/FirebaseCreateProject'
import { UserAuth } from '../../../context/UserAuth'

const CreateProject = () => {
    const [projectName, setProjectName] = useState('')
    const { user } = UserAuth()
    const navigate = useNavigate()


    const handleCreateProject = (e) => {
        e.preventDefault()
        createProject(user, projectName)
        navigate('/Board')
    }

    return (
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleCreateProject}>
                <label>
                    Project Name:
                    <input required type="text" placeholder='Project Name' onChange={(e) => setProjectName(e.target.value.trim())} />
                </label>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default CreateProject