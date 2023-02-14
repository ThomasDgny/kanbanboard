import React, { useEffect, useRef, useState } from 'react'
import BoardCard from '../BoardCard/BoardCard'
import TaskDetailsCard from '../BoardCard/TaskDetailsCard'

const TaskSections = ({ title, bucketList }) => {
    const [isTaskDetailOpen, setIsTaskDetailOpen] = useState(false)
    const [cardId, setCardId] = useState('')
    const [taskInfo, setTaskInfo] = useState({})

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsTaskDetailOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    useEffect(() => {
        console.log(cardId);
        const taskDetails = bucketList.find(item => item.id === cardId)
        setTaskInfo(taskDetails)
    }, [cardId])
    console.log(taskInfo);



    return (
        <div className='TaskSection flex w-full flex-col gap-5'>
            {
                isTaskDetailOpen && taskInfo ?
                    <div ref={dropdownRef}>
                        <TaskDetailsCard cardInfo={taskInfo} />
                    </div>
                    : null
            }
            <div className='TaskSectionHeader'>
                <h1 className='text-[22px] py-4 px-4 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>{title}</h1>
            </div>

            <div className='TaskSectionContent flex flex-col gap-5'>
                {
                    bucketList?.map((item, id) => (
                        <BoardCard
                            key={id}
                            cardData={item}
                            setCardId={setCardId}
                            setIsTaskDetailOpen={setIsTaskDetailOpen}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TaskSections