import React from 'react'
import DropDownMenu from '../dropDownMenu/DropDownMenu'

const BoardCard = () => {
    return (
        <div>
            <div className="w-full">
                <div className='rounded-lg border border-[#D6E3EC] p-[20px] flex flex-col gap-[15px]'>

                    <div className='CardHeader flex justify-between'>
                        <h5 className="text-[20px] text-black font-bold">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <div>
                            <DropDownMenu />
                        </div>
                    </div>

                    <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className='rounded-lg' alt="" />

                    <div className='flex gap-3 items-center'>
                        <label className='py-1 px-4 text-[14px] bg-red-100 text-red-600 border border-red-600 rounded-lg'>High</label>
                        <span className="text-[16px] text-black font-medium">23, Jun 2023</span>
                    </div>

                    <div>
                        <h5 className="text-[16px] text-black font-bold">Note</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[16px]">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default BoardCard