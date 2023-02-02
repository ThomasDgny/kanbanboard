import React, { useState } from 'react'
import { UserAuth } from '../../../../../context/UserAuth'
import { newTask } from '../../../../../repository/FirebaseTaskCreater'

const TaskCreateCard = ({ id }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('todo')

    const { user } = UserAuth()


    const createNewTask = (e) => {
        e.preventDefault()
        newTask(user, title, description, status, id)
    }

    return (
        <div className='CreateCardPopUp absolute z-50 w-[50vh] h-[100vh] bg-slate-200 rounded-lg'>
            <div className='CreateCardPopUp_Body p-6'>

                <div>
                    <h1>Add a New Task</h1>
                </div>

                <div >
                    <form className='flex flex-col gap-6' onSubmit={createNewTask}>
                        <input type="text" required placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" required placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" required placeholder='Status' onChange={(e) => setStatus(e.target.value)} />
                        <input type="submit" value={'Create'} />
                    </form>

                </div>

            </div>
        </div>
    )
}

export default TaskCreateCard