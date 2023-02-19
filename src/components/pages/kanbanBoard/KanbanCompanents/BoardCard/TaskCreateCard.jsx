import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../../../../context/UserAuth'
import { newTask } from '../../../../../repository/FirebaseTaskCreater'
import { severityTag } from '../../../../../useCase/Tag'
import TextEditor from '../../../../elements/TextEditor'
import { handleFileUpload } from '../../../../../repository/FirebaseUploadFile'

const TaskCreateCard = ({ docRef }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('todo')
    const [severity, setSeverity] = useState('low')
    const [file, setFile] = useState(null);
    const [imgUrl, setImgUrl] = useState('')

    const { user } = UserAuth()
    console.log(docRef);

    function resetInputs() {
        setTitle('')
        setDescription('')
        setStatus('todo')
        setSeverity('low')
    }

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };
    console.log(file);

    const createNewTask = async (e) => {
        e.preventDefault()
        const imgUrl = await handleFileUpload(file, user, docRef ,file.type)
        setImgUrl(imgUrl);
        console.log(imgUrl);
        newTask(user, title, description, status, severity, imgUrl, docRef)
        resetInputs()
    }

    useEffect(() => {
        console.log(imgUrl);
    }, [imgUrl])



    return (
        <div className='CreateCardPopUp fixed z-[100] top-0 bottom-0 left-0 w-[80vh] bg-white drop-shadow-md overflow-y-scroll scroll-smooth scrollbar-hide'>
            <div className='CreateCardPopUp_Body p-6'>
                <form className='flex flex-col w-full gap-6' onSubmit={createNewTask}>

                    <input type="text" className='bg-transparent border-none outline-0 text-[32px] font-bold p-2 border text-gray-700 rounded-lg resize-none' required placeholder='Untitled' onChange={(e) => setTitle(e.target.value)} />


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

                    <div className='Upload file'>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload file</label>
                        <input onChange={handleFileChange} className="block w-full text-sm text-gray-900  border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" />
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
                    <input type="submit" className="sticky cursor-pointer drop-shadow-lg shadow-[#1DA1F2] bottom-5 left-5 right-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2" value={'Create'} />

                </form>

            </div>
        </div>
    )
}

export default TaskCreateCard