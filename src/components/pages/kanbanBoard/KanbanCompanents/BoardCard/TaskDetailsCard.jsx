import React, { useState } from 'react'
import { severityTag } from '../../../../../useCase/Tag'
import TextEditor from '../../../../elements/TextEditor'
import { fireBaseUpdateTask } from '../../../../../repository/FireBaseUpdateTask'
import { RemoveTaskHandler } from '../../../../../repository/FirebaseRemoveTask'
import { UserAuth } from '../../../../../context/UserAuth'
import { toastMessage } from '../../../../../useCase/ToastMessages'
import { ToastContainer } from 'react-toastify'

const TaskDetailsCard = ({ cardInfo, docRefId }) => {
    const [title, setTitle] = useState(cardInfo.title)
    const [description, setDescription] = useState(cardInfo.description)
    const [status, setStatus] = useState(cardInfo.status)
    const [severity, setSeverity] = useState(cardInfo.severity)


    const { user } = UserAuth()

    const currentCardInfoObj = {
        title: cardInfo.title,
        description: cardInfo.description,
        status: cardInfo.status,
        severity: cardInfo.severity
    }

    const updatedCardInfoObj = {
        title: title,
        description: description,
        status: status,
        severity: severity
    }

    const createNewTask = (e) => {
        e.preventDefault()
        if (JSON.stringify(currentCardInfoObj) !== JSON.stringify(updatedCardInfoObj)) {
            fireBaseUpdateTask(cardInfo.id, user, docRefId, title, description, status, severity)
            alert('Updated')
        }
    }
    const removeTask = () => {
        RemoveTaskHandler(cardInfo.id, user, docRefId)
    }



    return (
        <div className='CreateCardPopUp fixed z-[100] top-0 bottom-0 left-0 min-w-[20vh] w-[80vh] bg-white drop-shadow-md overflow-y-scroll scroll-smooth scrollbar-hide'>
            <ToastContainer />
            <div className='CreateCardPopUp_Body w-full h-full p-6'>

                <form className='TaskForm relative h-full' onSubmit={createNewTask}>
                    <div className='h-full flex flex-col w-full gap-6'>
                        <input type="text" className=' Title bg-transparent border-none outline-0 text-[32px] font-bold p-2 border text-gray-700 rounded-lg resize-none' defaultValue={title} required placeholder='Untitled' onChange={(e) => setTitle(e.target.value)} />

                        <div className="Status">
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Status</label>
                            <select
                                className="form-select w-32 bg-white border border-gray-400 hover:border-gray-500 py-2 px-4 rounded-l"
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            >
                                <option value="todo">Todo</option>
                                <option value="inProgress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        <div className="Severity">
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Severity</label>
                            <select
                                className="form-select w-32 bg-white border border-gray-400 hover:border-gray-500 py-2 px-4 rounded-l"
                                value={severity}
                                onChange={(event) => setSeverity(event.target.value)}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            <label className={`${severityTag(severity.toLocaleLowerCase())} ml-3`}>{severity}</label>
                        </div>

                        <div className='Uploadfile'>
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload file</label>
                            <input  className="block w-full text-sm text-gray-900  border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>

                        <div className='TextArea'>
                            <TextEditor
                                content={description}
                                setContent={setDescription}
                                readonly={false}
                                toolBarIsVisble={true}
                                height={'h-[35vh]'} />
                        </div>
                        <div className='FormBtns pb-7 w-full flex flex-col'>
                            <input type="submit" className="cursor-pointer w-full drop-shadow-lg shadow-[#1DA1F2] bottom-5 left-5 right-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2" value={'Update Task'} />

                            <input type="button" onClick={() => removeTask()} className="cursor-pointer w-full drop-shadow-lg shadow-[#d57373] left-5 right-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2" value={'Delete Task'} />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default TaskDetailsCard