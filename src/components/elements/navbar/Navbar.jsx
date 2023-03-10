import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import SiteLogoIcon from '../../../assets/siteLogo/SiteLogo';


export default function PublicNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="flex items-center justify-between flex-wrap bg-transparent px-6 py-3 border-b">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <Link to="/">
                    <div className="relative bg-gradient-to-tr from-blue-700 to-blue-900 w-[7vh] h-[7vh] rounded-lg shadow-lg">
                        <div className="absolute h-full w-full top-[25%] left-[25%]">
                            <SiteLogoIcon height={"25"} />
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
                        className="fill-current"
                        width='20'
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
                <div className="text-sm lg:flex-grow flex gap-10">
                    <a
                        target={'_blank'}
                        href="https://www.linkedin.com/in/tarik-doganay/"
                        className="text-[14px] font-medium block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-400 duration-200"
                    >
                        Contact
                    </a>
                </div>
                <div className='flex gap-5'>
                    <Link
                        to="/signin"
                        className="text-[14px] font-medium inline-block text-sm px-8 py-3 leading-none border rounded-lg text-white bg-blue-600 mt-4 lg:mt-0 shadow-lg"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="text-[14px] font-medium inline-block text-sm px-8 py-3 leading-none border rounded-lg text-black bg-white mt-4 lg:mt-0"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}