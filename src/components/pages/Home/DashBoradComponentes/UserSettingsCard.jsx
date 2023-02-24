import React, { useState } from 'react'
import { UserAuth } from '../../../../context/UserAuth';
import { updateUserSettings } from '../../../../repository/FirebaseUpdateUserSettings';
import { handleFileUpload } from '../../../../repository/FirebaseUploadFile.js'
import { storage } from '../../../../Firebase';
import { ref } from 'firebase/storage';


const UserSettingsCard = ({ setIsUserSettingsOpen }) => {
    const { user, currentUserData } = UserAuth()
    const [userName, setUserName] = useState(currentUserData.username)
    const [imgUrl, setImgUrl] = useState(currentUserData.coverimgurl)
    const [file, setFile] = useState(null);
    console.log(currentUserData);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };

    const handleCreateProject = async (e) => {
        e.preventDefault()
        const storageRef = ref(storage, `${user.uid}/coverimg/${file.name}`);
        const updatedImgUrl = await handleFileUpload(storageRef, file, file.type)
        console.log(updatedImgUrl);
        setImgUrl(updatedImgUrl);
        updateUserSettings(userName, imgUrl, updatedImgUrl, user)
        alert('Updated')
    }

    const handlerRemoveProject = async () => {
        // await removeProjectHandler(user, docRef)
        //     .then(navigate('/'))
        //     .then(setDocRefId(''))
    }

    return (
        <div className='ProjectSettingsPopUp fixed z-[100] top-0 left-0 bottom-0 right-0 overflow-hidden flex justify-center items-center '>
            <div className='ProjectSettingsPopUp_Card absolute z-[100] h-[70vh] w-[50vh] bg-white rounded-lg p-10'>

                <div className='ProjectSettingsPopUp_Card_Body w-full h-full flex flex-col gap-10'>
                    <img src={currentUserData.coverimgurl} alt="" className='w-full h-[30%] object-cover rounded-md' />

                    <div className='flex flex-col gap-3'>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-medium mb-2" htmlFor="project-name">
                                User Name
                            </label>
                            <input defaultValue={userName} onChange={(e) => setUserName(e.target.value.trim())} className="appearance-none border border-gray-300  rounded-lg w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="project-name" type="text" placeholder="Enter project name" />
                        </div>

                        <div className='Upload file'>
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload Cover Image</label>
                            <input onChange={handleFileChange} className="block w-full text-sm text-gray-900  border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full gap-5">
                        <button onClick={handleCreateProject} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                            Update
                        </button>
                        <button onClick={handlerRemoveProject} className=" hover:text-white hover:bg-red-700 text-red-700 font-medium py-2 w-full duration-200 rounded focus:outline-none focus:shadow-outline" type="button">
                            Delete Account
                        </button>
                    </div>
                </div>

            </div>
            <div onClick={() => setIsUserSettingsOpen(false)} className='fixed z-[99] opacity-50 top-0 left-0 bottom-0 right-0 bg-black'></div>

        </div>
    )
}

export default UserSettingsCard