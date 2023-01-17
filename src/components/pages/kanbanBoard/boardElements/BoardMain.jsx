import React from 'react'
import BoardCard from '../KanbanCompanents/BoardCard/BoardCard'
import PlusIcon from '../../../../assets/icons/PlusIcon'

const BoardMain = () => {
    return (
        <div className='Main max-w-[1400px]'>
            <div className='MainBody grid grid-cols-3 gap-5 w-full'>
                <div className='Todo flex flex-col gap-5'>
                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Todo <PlusIcon /> </button>
                    </div>

                    <div className='TodoContent'>
                        <BoardCard />
                    </div>
                </div>

                <div className='InProgress flex flex-col gap-5'>
                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>InProgress <PlusIcon /> </button>
                    </div>

                    <div className='TodoContent'>
                        <BoardCard />
                    </div>
                </div>

                <div className='Done flex flex-col gap-5'>
                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Done <PlusIcon /> </button>
                    </div>

                    <div className='TodoContent'>
                        <BoardCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardMain