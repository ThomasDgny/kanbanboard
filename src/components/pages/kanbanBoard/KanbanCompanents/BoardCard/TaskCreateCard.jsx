import React, { useState } from 'react'
import { UserAuth } from '../../../../../context/UserAuth'
import { newTask } from '../../../../../repository/FirebaseTaskCreater'
import { severityTag } from '../../../../../useCase/Tag'
import TextEditor from '../../../../elements/TextEditor'
import { handleFileUpload } from '../../../../../repository/FirebaseUploadFile'
import { storage } from '../../../../../Firebase'
import { ref } from 'firebase/storage'

const TaskCreateCard = ({ docRef }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('todo')
    const [severity, setSeverity] = useState('low')
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);
    const { user } = UserAuth()
    // console.log(docRef);

    function resetInputs() {
        setTitle('');
        setDescription('');
        setStatus('todo');
        setSeverity('low');
        setFile(null);
    }


    const handleFileChange = (e) => {
        if (e.target.files[0].size > 3019066) {
            alert('Dude this file is waaay to big. Size limit is 3mb')
            e.target.value = ''
        } else {
            setFile(e.target.files[0])
        }
    };
    //console.log(file);

    const createNewTask = async (e) => {
        e.preventDefault()
        let imgUrl = '';
        if (file) {
            const newFilename = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            const storageRef = ref(storage, `${user.uid}/Projects/${docRef}/Taskimg/${newFilename}`)
            setUploading(true)
            imgUrl = await handleFileUpload(storageRef, file, file.type, 1000, 1000)
        }
        await newTask(user, title, description, status, severity, imgUrl, docRef)
        resetInputs()
        setUploading(false)
    }

    return (
        <div className='CreateCardPopUp fixed z-[500] top-0 bottom-0 left-0 w-full max-w-[75vh] bg-white drop-shadow-md overflow-y-scroll scroll-smooth scrollbar-hide'>
            <div className='CreateCardPopUp_Body p-6'>
                <form className='flex flex-col w-full gap-6' onSubmit={createNewTask}>
                    <div className='w-full'>
                        <label className="block w-full text-[12px] font-medium text-gray-900">Title</label>
                        <input type="text" className='bg-transparent border-none outline-0 text-[32px] focus:ring-0 font-bold text-gray-700 rounded-lg resize-none' required placeholder='Untitled' onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="Status">
                        <label className="block mb-2 text-[12px] font-medium text-gray-900">Status</label>
                        <select
                            className="form-select w-28 text-[13px] bg-white border border-gray-400 hover:border-gray-500 py-[5px] px-3 rounded-l"
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            <option className='text-[14px]' value="todo">Todo</option>
                            <option className='text-[14px]' value="inProgress">In Progress</option>
                            <option className='text-[14px]' value="done">Done</option>
                        </select>
                    </div>

                    <div className="Severity">
                        <label className="block mb-2 text-[12px] font-medium text-gray-900">Severity</label>
                        <select
                            className="form-select w-28 text-[13px] bg-white border border-gray-400 hover:border-gray-500 py-[5px] px-3 rounded-l"
                            value={severity}
                            onChange={(event) => setSeverity(event.target.value)}
                        >
                            <option className='text-[14px]' value="low">Low</option>
                            <option className='text-[14px]' value="medium">Medium</option>
                            <option className='text-[14px]' value="high">High</option>
                        </select>
                        <label className={`${severityTag(severity.toLocaleLowerCase())} ml-3`}>{severity}</label>
                    </div>

                    <div className='Upload file'>
                        <label className="block mb-2 text-[12px] font-medium text-gray-900">Upload file</label>
                        <input onChange={handleFileChange} className="block text-[12px] w-full text-sm text-gray-900  border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 text-[12px]" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                    <div className='TextArea'>
                        <TextEditor
                            content={description}
                            setContent={setDescription}
                            readonly={false}
                            toolBarIsVisble={true}
                            height={'h-[35vh]'} 
                        />
                    </div>
                    {uploading && <h2 className='py-3 px-6 border rounded-lg bg-slate-100'>Image uploading...</h2>}
                    <input type="submit" className="sticky cursor-pointer drop-shadow-lg shadow-[#1DA1F2] bottom-5 left-5 right-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2" value={'Create'} />

                </form>

            </div>
        </div>
    )
}

export default TaskCreateCard