import React, { useEffect, useState } from 'react'
import BoardCard from '../KanbanCompanents/BoardCard/BoardCard'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import { UserAuth } from '../../../../context/UserAuth'
import { db } from '../../../../Firebase'
import { getPickedProjects } from '../../../../repository/FirebaseGetPickedProject'
import TaskCreateCard from '../KanbanCompanents/BoardCard/TaskCreateCard'
import { getBucketList } from '../../../../repository/FirebaseGetBucketList'


const BoardMain = ({ id }) => {
    const [projectsData, setProjectsData] = useState([])
    const [todoBucketList, setTodoBucketList] = useState([])
    const [inProgressBucketList, setInProgressBucketList] = useState([])
    const [doneBucketList, setDoneBucketList] = useState([])
    const [CreateTaskPopUp, setCreateTaskPopUp] = useState(false)
    const { user } = UserAuth()
    console.log(id)

    useEffect(() => {
        getPickedProjects(user, db, id).then((res) => setProjectsData(res))
    }, [id, user])
    console.log(projectsData)


    useEffect(() => {
        getBucketList(db, user, id, 'todo').then((res) => setTodoBucketList(res))
        getBucketList(db, user, id, 'inProgress').then((res) => setInProgressBucketList(res))
        getBucketList(db, user, id, 'done').then((res) => setDoneBucketList(res))
    }, [id, user, doneBucketList, todoBucketList, inProgressBucketList])


    const handleCreateTask = () => {
        setCreateTaskPopUp(true)
    }

    return (
        <div className='Main max-w-[1400px]'>
            {
                CreateTaskPopUp &&
                <TaskCreateCard id={id} />
            }

            <div className='MainBody grid grid-cols-3 gap-5 w-full'>

                <div className='Todo flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button onChange={handleCreateTask} className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Todo <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {todoBucketList?.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='InProgress flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>In Progress <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {inProgressBucketList?.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='Done flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Done <PlusIcon /></button>
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