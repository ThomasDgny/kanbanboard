import React, { useState } from 'react'
import TaskCreateCard from '../KanbanCompanents/BoardCard/TaskCreateCard'
import { dateConverter } from '../../../../useCase/DateConverter';

const BoardHeader = ({ id, projectData }) => {
    const [CreateTaskPopUp, setCreateTaskPopUp] = useState(false)
    //console.log(projectData);

    const handleCreateTask = () => {
        if (!CreateTaskPopUp) {
            setCreateTaskPopUp(true)
        } else {
            setCreateTaskPopUp(false)
        }
    }

    const createDate = dateConverter(projectData.createddate)
    return (
        <div className='min-w-[100px] pt-7 h-[15vh] justify-center px-14 flex items-center'>
            {
                CreateTaskPopUp &&
                <TaskCreateCard id={id} />
            }
            <div className='BoradHeader w-full flex justify-between'>

                <div className='ProjectInfo_BorderHeader flex gap-5'>
                    <img src={projectData.projectlogo} alt="" className='w-[80px] h-[80px] rounded-md' />
                    <div>
                        <h1 className='text-[30px] font-bold'>{projectData.projectname}</h1>
                        <h1>{createDate}</h1>
                    </div>
                </div>

                <div>
                    <button className='py-3 px-6 rounded-md border border-[#D6E3EC] text-[15px] ' onClick={() => handleCreateTask()}>Create | +</button>
                </div>

            </div>
        </div>
    )
}

export default BoardHeader