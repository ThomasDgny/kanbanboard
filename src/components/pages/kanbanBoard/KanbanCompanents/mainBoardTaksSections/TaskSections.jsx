import React from 'react'
import BoardCard from '../BoardCard/BoardCard'

const TaskSections = ({ title, bucketList, docRefId }) => {
    return (

        <div className='TaskSection flex w-full flex-col gap-5'>
            <div className='TaskSectionHeader'>

                <h1 className='text-[22px] py-4 px-4 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>{title}</h1>

            </div>

            <div className='TaskSectionContent flex flex-col gap-5'>
                {
                    bucketList?.map((item, id) => (
                        <BoardCard key={id} cardData={item} docRefId={docRefId} bucketList={bucketList} />
                    ))
                }
            </div>
        </div>

    )
}

export default TaskSections