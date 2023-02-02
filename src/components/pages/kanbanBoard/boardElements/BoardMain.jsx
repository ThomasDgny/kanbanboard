import React, { useEffect, useState } from 'react'
import BoardCard from '../KanbanCompanents/BoardCard/BoardCard'
import { db } from '../../../../Firebase'
import TaskCreateCard from '../KanbanCompanents/BoardCard/TaskCreateCard'
import { getBucketList } from '../../../../repository/FirebaseGetBucketList'
import { UserAuth } from '../../../../context/UserAuth'

const BoardMain = ({ docRefId }) => {
    const [todoBucketList, setTodoBucketList] = useState([])
    const [inProgressBucketList, setInProgressBucketList] = useState([])
    const [doneBucketList, setDoneBucketList] = useState([])
    const [CreateTaskPopUp, setCreateTaskPopUp] = useState(false)
    const { user } = UserAuth()

    useEffect(() => {
        getBucketList(db, user, docRefId, 'todo', setTodoBucketList)
        getBucketList(db, user, docRefId, 'inProgress', setInProgressBucketList)
        getBucketList(db, user, docRefId, 'done', setDoneBucketList)
    }, [docRefId, user])


    const handleCreateTask = () => {
        if (!CreateTaskPopUp) {
            setCreateTaskPopUp(true)
        } else {
            setCreateTaskPopUp(false)
        }
    }

    return (
        <div className='Main '>

            <button onClick={() => handleCreateTask()}>Create+</button>

            <div className='MainBody w-[1400px] grid grid-cols-3 gap-5'>
                {
                    CreateTaskPopUp &&
                    <TaskCreateCard id={docRefId} />
                }
                <div className='Todo flex w-full flex-col gap-5'>
                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Todo</button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {todoBucketList?.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>
                </div>

                <div className='InProgress w-full flex flex-col gap-5'>
                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>In Progress</button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {inProgressBucketList?.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>
                </div>

                <div className='Done flex w-full flex-col gap-5'>
                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Done</button>
                    </div>
                    <div className='TodoContent flex flex-col gap-5'>
                        {doneBucketList?.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardMain