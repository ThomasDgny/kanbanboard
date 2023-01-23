import React, { useEffect, useState } from 'react'
import BoardCard from '../KanbanCompanents/BoardCard/BoardCard'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import { UserAuth } from '../../../../context/UserAuth'
import { db } from '../../../../Firebase'
import { useLocation } from 'react-router-dom'
import { getPickedProjects } from '../../../../repository/FirebaseGetPickedProject'


const BoardMain = () => {
    const [projectsData, setProjectsData] = useState([])
    const { user } = UserAuth()
    const { state: id } = useLocation()


    const buckets = projectsData.bucket
    const TodoBuckets = buckets?.find(bucket => bucket.id === 'todo')
    const inProgressBuckets = buckets?.find(bucket => bucket.id === 'inprogress')
    const doneBuckets = buckets?.find(bucket => bucket.id === 'done')

    useEffect(() => {
        getPickedProjects(user, db, id).then((res) => setProjectsData(res))
    }, [id, user])
    console.log(projectsData)

    return (
        <div className='Main max-w-[1400px]'>
            <div className='MainBody grid grid-cols-3 gap-5 w-full'>

                <div className='Todo flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Todo <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {TodoBuckets?.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='InProgress flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>In Progress <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {inProgressBuckets?.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='Done flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Done <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {doneBuckets?.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BoardMain