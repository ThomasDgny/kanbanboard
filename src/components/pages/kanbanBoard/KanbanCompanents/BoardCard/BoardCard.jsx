import React from 'react'
import DropDownMenu from '../dropDownMenu/DropDownMenu'

const BoardCard = ({ cardData }) => {

    //const cardDataObject = cardData.map(item => item)

    const highTagsStyle = `py-1 px-4 text-[16px] bg-red-100 text-red-600 border border-red-600 rounded-lg`
    const midTagsStyle = `py-1 px-4 text-[16px] bg-orange-100 text-orange-600 border border-orange-600 rounded-lg`
    const lowTagsStyle = `py-1 px-4 text-[16px] bg-green-100 text-green-600 border border-green-600 rounded-lg`

    const severity = () => {
        if (cardData.severity === 'high') {
            return highTagsStyle
        } else if (cardData.severity === 'medium') {
            return midTagsStyle
        } else if (cardData.severity === 'low') {
            return lowTagsStyle
        }
    }




    return (
        <div>
            <div className="w-full">
                <div className='rounded-lg border border-[#D6E3EC] p-[20px] flex flex-col gap-[15px]'>

                    <div className='CardHeader flex justify-between'>
                        <h5 className="text-[20px] text-black font-bold">
                            {cardData.title}
                        </h5>
                        <div>
                            <DropDownMenu />
                        </div>
                    </div>

                    {cardData?.img && <img src={cardData?.img} className='rounded-lg h-full w-full' alt="" />}

                    <div className='flex gap-3 items-center'>
                        <label className={severity()}>{cardData.severity}</label>
                        <span className="text-[16px] text-black font-medium">{cardData.createddate}</span>
                    </div>

                    <div>
                        <h5 className="text-[18px] text-black font-bold">Note</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">
                            {cardData.description}
                        </p>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default BoardCard