import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FirebaseCreateProject from '../../../repository/FirebaseCreateProject'
import { UserAuth } from '../../../context/UserAuth'
import { handleFileUpload } from '../../../repository/FirebaseUploadFile'
import { storage } from '../../../Firebase'
import { ref } from 'firebase/storage'

const CreateProject = () => {
    const [projectName, setProjectName] = useState('')
    const [file, setFile] = useState(null);
    const { user } = UserAuth()
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };
    console.log(file);


    const handleCreateProject = async (e) => {
        e.preventDefault()
        const storageRef = ref(storage, `${user.uid}/Projects/ProjecstLogo/${file?.name}`);
        const imgUrl = file ? await handleFileUpload(storageRef, file, file.type) : '';
        await FirebaseCreateProject(user, projectName, imgUrl)
            .then((docId) => navigate(`/board/${docId.id}`, { state: docId.id }))
    }

    return (

        <div className="CreateProject flex flex-col md:flex-row h-screen">

            <div className="w-full md:w-1/2  flex items-center justify-center">
                <div className="max-w-md py-12 px-6">
                    <h2 className="text-[42px] font-bold text-black mb-6">Create New Project</h2>
                    <form onSubmit={handleCreateProject}>

                        <div className="mb-4">
                            <label className="block text-black text-sm font-medium mb-2" htmlFor="project-name">
                                Project Name
                            </label>
                            <input onChange={(e) => setProjectName(e.target.value.trim())} required className="appearance-none border border-gray-300  rounded-lg w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="project-name" type="text" placeholder="Enter project name" />
                        </div>


                        <div className='Upload file'>
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload Cover Image</label>
                            <input onChange={handleFileChange} className="block w-full text-sm text-gray-900  border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Create
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <img className="object-cover w-full h-full" src="https://picsum.photos/1200/800" alt="Project Image" />
            </div>
        </div>

    )
}

export default CreateProject






