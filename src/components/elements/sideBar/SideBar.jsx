import React, { useState } from 'react'
import { UserAuth } from '../../../context/UserAuth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase';
import SiteLogoIcon from '../../../assets/siteLogo/SiteLogo';


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = UserAuth();

    const { LogOut } = UserAuth();
    const navigate = useNavigate();

    const HandleSignOut = async () => {
        try {
            LogOut(auth)
            navigate('/')
        } catch (error) {

        }
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    console.log(user);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <Link
                    to='/dashboard'
                >
                    <div className="relative bg-gradient-to-tr from-blue-700 to-blue-900 w-[7vh] h-[7vh] rounded-lg shadow-lg">
                        <div className="absolute h-full w-full top-[25%] left-[25%]">
                            <SiteLogoIcon height={"30"} />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex duration-500 items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-slate-800"
                    onClick={toggleMenu}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="text-sm lg:flex-grow">
                    <Link
                        onClick={() => navigate('/dashboard')}
                        className="text-[18px] font-medium block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                    >
                        Home
                    </Link>

                </div>
                <div className='flex gap-5'>
                    <Link
                        onClick={HandleSignOut}
                        className="text-[18px] font-medium inline-block text-sm px-8 py-4 leading-none border rounded-lg text-white bg-blue-600 mt-4 lg:mt-0 shadow-lg"
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default SideBar