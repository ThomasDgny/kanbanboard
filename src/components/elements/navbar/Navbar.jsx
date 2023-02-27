import React, { useState } from 'react'
import { auth } from '../../../Firebase';
import { UserAuth } from '../../../context/UserAuth';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
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


    const userEmail = user?.email
    console.log(user);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <Link to="/">
                    <img src={''} alt="Logo" className="h-8 w-8" />
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white"
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
                        to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
                    >
                        Contact
                    </Link>
                </div>
                <div>
                    <Link
                        to="/signin"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:text-white hover:border-white mt-4 lg:mt-0"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:text-white hover:border-white mt-4 lg:mt-0 ml-2"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}