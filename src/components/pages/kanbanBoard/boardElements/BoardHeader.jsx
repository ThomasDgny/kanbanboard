import React, { useState } from 'react'
import TaskCreateCard from '../KanbanCompanents/BoardCard/TaskCreateCard'

const BoardHeader = ({id}) => {
    const [CreateTaskPopUp, setCreateTaskPopUp] = useState(false)


    const handleCreateTask = () => {
        if (!CreateTaskPopUp) {
            setCreateTaskPopUp(true)
        } else {
            setCreateTaskPopUp(false)
        }
    }

   
    return (
        <div>
            {
                CreateTaskPopUp &&
                <TaskCreateCard id={id} />
            }
            <div className='BoradHeader w-full flex justify-end'>
                <h1>{''}</h1>
                <button className='py-3 px-6 rounded-md border border-[#D6E3EC] text-[15px] ' onClick={() => handleCreateTask()}>Create | +</button>
            </div>
        </div>
    )
}

export default BoardHeader