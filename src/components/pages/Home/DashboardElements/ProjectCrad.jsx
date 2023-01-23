import React from 'react'
import { projectProgress as projectProgresBar } from '../../../../useCase/ProgressCal';
import { useNavigate } from 'react-router-dom';

const ProjectCrad = (item, id) => {
    const navigate = useNavigate()


    const handleOpenProject = () => {
        navigate(`/Board/${item.item.projectid}`, { state: item.item.projectid })
    }

    console.log('Project progress bar result', projectProgresBar(item));
    return (

        <div key={id} onClick={handleOpenProject}>
            <div className='w-[100px]'>
                <img src={item.item.projectlogo} className='w-full h-[100px] object-cover rounded-md' alt="" />
                <div>
                    <h1>{item.item.projectname}</h1>
                    <p>{item?.item?.projectnotes?.length} Notes</p>
                </div>

            </div>

            <div>
                <p>{projectProgresBar(item)}%</p>
            </div>

        </div>

    )
}

export default ProjectCrad