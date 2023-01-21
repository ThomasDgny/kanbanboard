import React, { useState, useEffect } from 'react'
import BoardCard from '../KanbanCompanents/BoardCard/BoardCard'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import { userMockData } from '../../../../static/MockData'
import { FirebaseContextApi } from '../../../../repository/FirebaseContext';


const BoardMain = () => {
    const [projectData, setProjectData] = useState([])


    // console.log(userMockData)
    const buckets = userMockData.bucket
    const TodoBuckets = buckets.find(bucket => bucket.id === 'todo')
    const inProgressBuckets = buckets.find(bucket => bucket.id === 'inprogress')
    const doneBuckets = buckets.find(bucket => bucket.id === 'done')

    const { GetProjectsData } = FirebaseContextApi()


    useEffect(() => {
        const getResults = async () => {
            const res = await Promise.all(
                projectData?.map(async (data) => {
                    return await GetProjectsData(data.trackId)
                })
            );
            const nonNullResult = res.filter(res => res !== null)
        }
        getResults()
    }, [GetProjectsData, projectData])


    return (
        <div className='Main max-w-[1400px]'>
            <div className='MainBody grid grid-cols-3 gap-5 w-full'>

                <div className='Todo flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Todo <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {TodoBuckets.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='InProgress flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>In Progress <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {inProgressBuckets.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='Done flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Done <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {doneBuckets.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BoardMain