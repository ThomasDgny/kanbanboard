import { Dropdown } from 'flowbite-react'
import React from 'react'

const DropDownMenu = () => {



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
                <Dropdown.Item className='text-[16px]'>
                    Delete
                </Dropdown.Item>
            </Dropdown>

        </div>
    )
}

export default DropDownMenu