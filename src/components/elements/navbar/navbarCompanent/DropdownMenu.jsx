import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../../../Firebase';
import { UserAuth } from '../../../../context/UserAuth';


function DropdownMenu() {
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
        <div className="relative">
            <div >
                 (
                    <div className="absolute right-0 z-50 w-[20vh] py-2 bg-white rounded-md shadow-xl mt-2">
                        <ul className="flex gap-2 w-full p-3 text-[#212121]">
                            <li className="hover:text-[#ff51ae] duration-200">
                                <NavLink onClick={HandleSignOut} className="flex items-center gap-2 py-2 pr-4 pl-3 font-medium text-[15px]">Sign Out</NavLink>
                            </li>

                        </ul>
                    </div>
                )
            </div>
        </div>
    );
}

export default DropdownMenu;
