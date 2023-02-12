import React, { useEffect, useState } from 'react'
import DropDownMenu from '../dropDownMenu/DropDownMenu'
import { dateConverter } from '../../../../../useCase/DateConverter'
import { severityTag } from '../../../../../useCase/Tag'
import { limit } from '../../../../../useCase/TextLimitor'
import { RemoveTaskHandler } from '../../../../../repository/FirebaseRemoveTask'
import { UserAuth } from '../../../../../context/UserAuth'
import { UserOp } from '../../../../../context/ProjectOp'
import { FirebaseChangeTaskStatus } from '../../../../../repository/FirebaseChangeTaskStatus'



const BoardCard = ({ cardData }) => {
    const [status, setStatus] = useState(cardData.status)
    const { docRefId } = UserOp()
    const { user } = UserAuth()

    const desc = cardData.description
    const limitedDesc = limit(desc, 100)

    const removeHandler = (passedId) => RemoveTaskHandler(passedId, user, docRefId)

    useEffect(() => {
        FirebaseChangeTaskStatus(cardData.id, user, docRefId, status)
    }, [status])


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

                            <select
                                className="form-select w-32 bg-white border border-gray-400 hover:border-gray-500 py-2 px-4 rounded-l"
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            >
                                <option value="todo">Todo</option>
                                <option value="inProgress">In Progress</option>
                                <option value="done">Done</option>
                            </select>


                            {/* <DropDownMenu /> */}
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