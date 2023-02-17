import React, { useEffect, useRef, useState } from 'react'
import TaskCreateCard from '../KanbanCompanents/BoardCard/TaskCreateCard'
import { dateConverter } from '../../../../useCase/DateConverter';

const BoardHeader = ({ id, projectData }) => {
    const [CreateTaskPopUp, setCreateTaskPopUp] = useState(false)

    //console.log(projectData);


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


    const createDate = dateConverter(projectData.createddate)
    return (
        <div className='w-full pt-7 h-[15vh] justify-center px-14 flex items-center'>
            {
                CreateTaskPopUp &&
                <div ref={tabCloserRef}>
                    <TaskCreateCard docRef={id} />
                </div>
            }
            <div className='BoradHeader w-full flex justify-between'>

                <div className='ProjectInfo_BorderHeader flex gap-5'>
                    <img src={projectData.projectlogo} alt="" className='w-[80px] h-[80px] object-cover rounded-md' />
                    <div>
                        <h1 className='text-[30px] font-bold'>{projectData.projectname}</h1>
                        <h1>{createDate}</h1>
                    </div>
                </div>

                <div>
                    <button className='py-3 px-6 rounded-md border border-[#D6E3EC] text-[15px] ' onClick={() => setCreateTaskPopUp(true)}>Create | +</button>
                </div>

            </div>
        </div>
    )
}

export default BoardHeader