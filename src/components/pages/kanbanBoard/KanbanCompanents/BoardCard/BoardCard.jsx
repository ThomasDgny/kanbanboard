import React from 'react'
import DropDownMenu from '../dropDownMenu/DropDownMenu'
import { dateConverter } from '../../../../../useCase/DateConverter'
import { severityTag } from '../../../../../useCase/Tag'
import { limit } from '../../../../../useCase/TextLimitor'
import { RemoveTaskHandler } from '../../../../../repository/FirebaseRemoveTask'



const BoardCard = ({ cardData, docRefId, bucketList }) => {
    const desc = cardData.description
    const limitedDesc = limit(desc, 100)

    console.log(bucketList);

    // const showId = (passedId) => {
    //     const picked = bucketList?.filter((item) => item.id !== passedId)
    //     console.log(picked);
    //     return picked
    // }


    const removeHandler = (passedId) => RemoveTaskHandler(passedId, bucketList, cardData.userId, docRefId)

    // const RemoveTaskHandler = async (passedId) => {

    //     const collectionRef = collection(db, 'users', cardData.userId, 'projects', docRefId, 'bucketlist')
    //     const picked = bucketList?.filter((item) => item.id !== passedId)
    //     console.log(picked);

    //     return await updateDoc(collectionRef, { bucketlist: picked });
    // }

    return (
        <div>
            <div className="w-full">
                <div className='rounded-lg border border-[#D6E3EC] p-[20px] flex flex-col gap-[15px]'>

                    <div className='CardHeader flex justify-between'>
                        <h5 className="text-[20px] text-black font-bold">
                            {cardData.title}
                        </h5>
                        <div>

                            <button className='py-2 px-6 border' onClick={() => removeHandler(cardData.id)}>Delete</button>

                            {/* <DropDownMenu taskInfo={cardData} docRefId={docRefId} /> */}
                        </div>
                    </div>

                    {cardData?.img && <img src={cardData?.img} className='rounded-lg h-full w-full' alt="" />}

                    <div className='flex gap-3 items-center'>
                        <label className={severityTag(cardData)}>{cardData.severity}</label>
                        <label className='text-[16px]'>{dateConverter(cardData.creationDate)}</label>
                        <span className="text-[16px] text-black font-medium">{cardData.createddate}</span>
                    </div>

                    <div>
                        <h5 className="text-[18px] text-black font-bold">Note</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-[18px]">
                            {limitedDesc}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BoardCard