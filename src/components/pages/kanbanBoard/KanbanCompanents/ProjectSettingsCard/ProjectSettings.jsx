import React, { useEffect, useState } from 'react'
import { updateProjectSettings } from '../../../../../repository/FirebaseUpdateProjectSettings';
import { UserAuth } from '../../../../../context/UserAuth';
import { handleFileUpload } from '../../../../../repository/FirebaseUploadFile.js'
import { UserOp } from '../../../../../context/ProjectOp';
import { removeProjectHandler } from '../../../../../repository/FirebaseRemoveProject';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../../../../Firebase';
import { deleteObject, ref } from 'firebase/storage';
import DefaultImgIcon from '../../../../../assets/icons/DefaultImg';
import { getFilenameFromUrl } from '../../../../../useCase/DecodeUrlToFileName';

const ProjectSettings = ({ docRef, setIsProjectSettingsOpen }) => {
    const [projectName, setProjectName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    const { projectData, setDocRefId } = UserOp()
    const { user } = UserAuth()

    const navigate = useNavigate()

    const handleFileChange = (e) => {
        if (e.target.files[0].size > 2019066) {
            alert('Dude this file is waaay to big. Size limit is 2mb')
            e.target.value = ''
        } else {
            setFile(e.target.files[0])
        }
    };

    useEffect(() => {
        if (projectData) {
            setProjectName(projectData.projectname)
            setImgUrl(projectData.projectlogo)
        }
    }, [projectData])

    const handleUpdateProject = async (e) => {
        e.preventDefault()
        let imgUrl;
        if (file) {
            const fileName = getFilenameFromUrl(projectData.projectlogo)
            const newFilename = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            const optionalFileName = fileName !== '' ? fileName : newFilename
            const storageRef = ref(storage, `${user.uid}/Projects/ProjecstLogo/${optionalFileName}`);
            setUploading(true)
            imgUrl = await handleFileUpload(storageRef, file, file.type, 500, 500)
        }
        await updateProjectSettings(projectName, projectData.projectlogo, imgUrl, user, docRef)
        setUploading(false)
        //  console.log('updated');
    }

    const handlerRemoveProject = async () => {
        let text = "Are you sure about that";
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            const fileName = getFilenameFromUrl(projectData.projectlogo)
            if (fileName) {
                console.log(fileName);
                const storageRef = ref(storage, `${user.uid}/Projects/ProjecstLogo/${fileName}`);
                await deleteObject(storageRef)
            }
            await removeProjectHandler(user, docRef)
            navigate('/dashboard')
            setDocRefId('')
        }
    }



    return (
        <div className='ProjectSettingsPopUp fixed z-[100] top-0 left-0 bottom-0 right-0 overflow-hidden flex justify-center items-center '>
            <div className='ProjectSettingsPopUp_Card absolute z-[100] max-h-max w-[50vh] bg-white rounded-lg p-10'>

                <div className='ProjectSettingsPopUp_Card_Body w-full h-full flex flex-col gap-10'>
                    {projectData?.projectlogo !== '' ? <img src={projectData?.projectlogo} alt="" className='w-[12vh] h-[12vh] object-cover rounded-md' />
                        :
                        <div className='bg-slate-300 w-[12vh] h-[12vh] rounded-md flex justify-center items-center'> <DefaultImgIcon /> </div>}
                    <div className='flex flex-col gap-3'>
                        <div className="mb-4">
                            <label className="block text-black text-[12px] font-medium mb-2">
                                Project Name
                            </label>
                            <input defaultValue={projectName} onChange={(e) => setProjectName(e.target.value.trim())} className="appearance-none text-[13px] border border-gray-300 rounded-lg w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="project-name" type="text" placeholder="Enter project name" />
                        </div>

                        <div className='Upload file'>
                            <label className="block mb-2 text-[12px] font-medium text-gray-900">Upload Cover Image</label>
                            <input onChange={handleFileChange} className="block w-full text-[12px] text-sm text-gray-900  border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p className="mt-1 text-sm text-gray-500 text-[12px] dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 1000 X 1000px).</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full gap-2">
                        {uploading && <h2 className='py-3 px-6 mb-3 w-full border rounded-lg text-[12px] bg-slate-100'>Image uploading...</h2>}
                        <button onClick={handleUpdateProject} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 w-full text-[13px] rounded focus:outline-none focus:shadow-outline" type="button">
                            Update
                        </button>
                        <button onClick={handlerRemoveProject} className=" hover:text-white hover:bg-red-700 text-red-700 font-medium py-2 text-[13px] w-full duration-200 rounded focus:outline-none focus:shadow-outline" type="button">
                            Delete This Project
                        </button>
                    </div>
                </div>

            </div>
            <div onClick={() => setIsProjectSettingsOpen(false)} className='fixed z-[99] opacity-50 top-0 left-0 bottom-0 right-0 bg-black'></div>

        </div>
    )
}

export default ProjectSettings