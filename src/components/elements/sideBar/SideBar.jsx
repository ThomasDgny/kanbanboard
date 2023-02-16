import { Sidebar } from 'flowbite-react'
import React, { useState } from 'react'
import { UserAuth } from '../../../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase';
import LogoIcon from '../../../assets/icons/LogoIcon';
import DasboardIcon from '../../../assets/icons/DasboardIcon';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const { LogOut } = UserAuth();
    const navigate = useNavigate();
    const HandleSignOut = async () => {
        try {
            LogOut(auth)
            navigate('/')
        } catch (error) {

        }
    };


    return (
        <div className="fixed z-50 w-[12vh] top-0 bottom-0 border-r-[1px] bg-white">

            <nav>
                <ul className='flex flex-col items-center justify-center'>
                    <li className="hover:bg-slate-200 p-2">
                        <button onClick={() => navigate('/')}> <LogoIcon /> </button>
                    </li>
                    <li className="hover:bg-slate-200 p-2">
                        <button > <DasboardIcon /> </button>
                    </li>
                    <li className="hover:bg-slate-200 p-2">
                        <button onClick={HandleSignOut}>Sign Out</button>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default SideBar