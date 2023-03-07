import React, { useEffect, useRef, useState } from 'react'
import TaskCreateCard from '../KanbanCompanents/BoardCard/TaskCreateCard'
import { dateConverter } from '../../../../useCase/DateConverter';
import ProjectSettings from '../KanbanCompanents/ProjectSettingsCard/ProjectSettings';
import DefaultImgIcon from '../../../../assets/icons/DefaultImg';

const BoardHeader = ({ id, projectData }) => {
    const [CreateTaskPopUp, setCreateTaskPopUp] = useState(false)
    const [isProjectSettingsOpen, setIsProjectSettingsOpen] = useState(false)

    // console.log(projectData);


    const tabCloserRef = useRef(null);

    const handleClickOutside = (event) => {
        if (tabCloserRef.current && !tabCloserRef.current.contains(event.target)) {
            setCreateTaskPopUp(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });


    const createDate = dateConverter(projectData?.createddate)
    return (
        <div className='BoardHeader pt-7 min-h-[15vh] flex justify-center items-center'>
            <div className='BoardHeader_Body w-[90%]'>
                {
                    CreateTaskPopUp &&
                    <div ref={tabCloserRef}>
                        <TaskCreateCard docRef={id} />
                    </div>
                }

                {
                    isProjectSettingsOpen &&
                    <div>
                        <ProjectSettings docRef={id} projectData={projectData} setIsProjectSettingsOpen={setIsProjectSettingsOpen} />
                    </div>
                }
                <div className='BoradHeader_Main w-full md:flex md:justify-between md:items-end'>

                    <div className='ProjectInfo_BorderHeader flex gap-5'>
                        {projectData?.projectlogo !== '' ? <img src={projectData?.projectlogo} alt="" className='w-[12vh] h-[12vh] object-cover rounded-md' />
                            :
                            <div className='bg-slate-300 w-[12vh] h-[12vh] rounded-md flex justify-center items-center'> <DefaultImgIcon /> </div>}
                        <div>
                            <h1 className='text-[30px] font-bold'>{projectData?.projectname}</h1>
                            <h1>{createDate}</h1>
                            <button onClick={() => setIsProjectSettingsOpen(true)} className='py-2 rounded-md text-[#307EF3] font-semibold text-[16px] hover:underline duration-200'>Project Settings</button>
                        </div>
                    </div>

                    <div>
                        <button className='py-3 px-6 rounded-md border bg-blue-600 hover:bg-blue-500 text-white text-[15px]' onClick={() => setCreateTaskPopUp(true)}>Create | +</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BoardHeader