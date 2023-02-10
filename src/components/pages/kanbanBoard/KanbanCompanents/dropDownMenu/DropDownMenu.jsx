import { Dropdown } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { UserOp } from '../../../../../context/ProjectOp'
import { UserAuth } from '../../../../../context/UserAuth'
import { db } from '../../../../../Firebase'


const DropDownMenu = ({ taskInfo, docRefId }) => {
    const [bucketList, setBucketList] = useState([])

    const { removeTaskHandler } = UserOp()
    const { user } = UserAuth()
    const { getBucketList } = UserOp()

    useEffect(() => {
        getBucketList(db, user, docRefId, taskInfo.status, setBucketList)
    }, [docRefId, getBucketList, taskInfo.status, user])
    console.log(bucketList);

    const removeHandler = (passedId) => removeTaskHandler(passedId, bucketList, user, docRefId, taskInfo.status)



    return (
        <div>
            <Dropdown
                inline={true}
            >
                <Dropdown.Item className='text-[16px]'>
                    In Progress
                </Dropdown.Item>
                <Dropdown.Item className='text-[16px]'>
                    Done
                </Dropdown.Item>
                <Dropdown.Item onClick={() => removeHandler(taskInfo.id)} className='text-[16px]'>
                    Delete
                </Dropdown.Item>
            </Dropdown>

        </div>
    )
}

export default DropDownMenu