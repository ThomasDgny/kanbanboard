import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItems = () => {
    return (
        <div>
            <div className="flex">

                <ul className="flex gap-4 items-center  w-full  p-3 text-[#212121]">

                    <li className="hover:text-[#ff51ae] duration-200">
                        <NavLink to={'/'} className="block py-2 pr-4 pl-3 font-medium text-[15px]" aria-current="page">Home</NavLink>
                    </li>

                    <li className="hover:text-[#ff51ae] duration-200">
                        <NavLink to={'/SignUp'} className="block py-2 pr-4 pl-3 font-medium text-[15px]">SignUp</NavLink>
                    </li>

                    <li className="hover:text-[#ff51ae]">
                        <NavLink to={'/SignIn'} className="block py-2 pr-4 pl-3 font-medium text-[15px]">SignIn</NavLink>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default NavItems