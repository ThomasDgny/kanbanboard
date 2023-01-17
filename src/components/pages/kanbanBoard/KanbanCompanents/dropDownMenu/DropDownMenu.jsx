import { Dropdown } from 'flowbite-react'
import React from 'react'

const DropDownMenu = () => {
    return (
        <div>
            <Dropdown
                // label={<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>}
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