import React, { useEffect, useState } from 'react'
import { dateConverter } from '../../../../../useCase/DateConverter'
import { severityTag } from '../../../../../useCase/Tag'
import { limit } from '../../../../../useCase/TextLimitor'
import { RemoveTaskHandler } from '../../../../../repository/FirebaseRemoveTask'
import { UserAuth } from '../../../../../context/UserAuth'
import { UserOp } from '../../../../../context/ProjectOp'
import { FirebaseChangeTaskStatus } from '../../../../../repository/FirebaseChangeTaskStatus'
import TextEditor from '../../../../elements/TextEditor'
import DropdownMenu from '../dropDownMenu/DropDownMenu'



const BoardCard = ({ cardData }) => {
    const [status, setStatus] = useState(cardData.status)
    const [text, settext] = useState()
    const { docRefId } = UserOp()
    const { user } = UserAuth()

    const desc = cardData.description
    const limitedDesc = limit(desc, 150)


    //const removeHandler = (passedId) => RemoveTaskHandler(passedId, user, docRefId)

    useEffect(() => {
        FirebaseChangeTaskStatus(cardData.id, user, docRefId, status)
    }, [status])



    return (
        <div className='BoardCard'>
            <div className="BoardCard_Body w-full">
                <div className='rounded-2xl border border-[#D6E3EC] p-[25px] flex flex-col gap-[15px]'>


                    <div className='CardHeader flex justify-between'>
                        <h5 className="text-[24px] text-black font-bold">
                            {cardData.title}
                        </h5>

                        <DropdownMenu defaultStatu={cardData.status} setStatus={setStatus} cardDataid={cardData.id} userobj={user} RefId={docRefId} />

                    </div>

                    {cardData?.img && <img src={cardData?.img} className='rounded-lg h-full w-full ' alt="" />}

                    <div className='flex gap-3 items-center'>
                        <label className={severityTag(cardData)}>{cardData.severity}</label>
                        <label className='text-[16px] text-[#8393B9]  font-medium'>{dateConverter(cardData.creationDate)}</label>
                    </div>

                    <div className='relative'>
                        <h5 className="absolute text-[18px] top-4 text-black font-bold">Note</h5>
                        <TextEditor
                            className='top-0'
                            content={limitedDesc}
                            setContent={settext}
                            readOnly={true}
                            toolBarIsVisble={false}
                            height={'max-h-max'}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BoardCard