import React from 'react'
import { projectProgresBar } from '../../../../useCase/ProgressCal';
import { useNavigate } from 'react-router-dom';

const ProjectCrad = ({ item }) => {
    const navigate = useNavigate()
    //console.log(item.item.projectid);

    const handleOpenProject = () => {
        navigate(`/Board/${item.projectid}`, { state: item.projectid })
    }
    console.log(item);
    console.log(item.projectid);

    //console.log('Project progress bar result', projectProgresBar(item));

    return (
        <div onClick={handleOpenProject}>
            <div className='w-[100px]'>
                <img src={item.projectlogo} className='w-full h-[100px] object-cover rounded-md' alt="" />
                <div>
                    <h1>{item.projectname}</h1>
                    {/* <p>{item?.projectnotes?.length} Notes</p> */}
                </div>

            </div>

            <div>
                <p>{projectProgresBar(item)}%</p>
            </div>

        </div>
    )
}

export default ProjectCrad