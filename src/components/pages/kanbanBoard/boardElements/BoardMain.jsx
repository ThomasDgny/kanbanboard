import React from 'react'
import TaskSections from '../KanbanCompanents/mainBoardTaksSections/TaskSections'
import { UserOp } from '../../../../context/ProjectOp'

const BoardMain = ({ docRefId }) => {
    const { allBucketList } = UserOp()

    const todoBucketList = allBucketList.filter(bucket => bucket.status === 'todo')
    const inProgressBucketList = allBucketList.filter(bucket => bucket.status === 'inProgress')
    const doneBucketList = allBucketList.filter(bucket => bucket.status === 'done')

    const TaskListSections = [
        {
            name: 'Todo',
            arr: todoBucketList,
        },
        {
            name: 'In Progress',
            arr: inProgressBucketList,
        },
        {
            name: 'Done',
            arr: doneBucketList,
        },
    ]



    return (
        <div className='Main  w-full'>

            <div className='MainBody overflow-x-scroll scrollbar-hide flex justify-center'>
                <div className='MainContent w-[90%] gap-5 grid-cols-3 grid'>

                    {
                        TaskListSections.map((item, id) => (
                            <div key={id}>
                                <TaskSections title={item.name} bucketList={item.arr} docRefId={docRefId} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default BoardMain