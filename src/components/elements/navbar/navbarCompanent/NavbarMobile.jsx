import { Disclosure } from '@headlessui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserAuth } from '../../../../context/UserAuth'

const NavbarMobile = () => {
    const user = UserAuth()

    const userEmail = user?.email

    return (
        <div>
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {!userEmail ? <ul className="flex flex-col gap-4 items-center text-black p-3 font-medium text-[15px]">

                        <li className="hover:text-[#dbdbdb]">
                            <NavLink to={'/'} className="block py-2 pr-4 pl-3 font-medium text-[15px]" aria-current="page">Home</NavLink>
                        </li>

                        <li className="hover:text-[#dbdbdb]">
                            <NavLink to={'/SignUp'} className="block py-2 pr-4 pl-3 font-medium text-[15px]">SignUp</NavLink>
                        </li>

                        <li className="hover:text-[#dbdbdb]">
                            <NavLink to={'/SignIn'} className="block py-2 pr-4 pl-3 font-medium text-[15px]">SignIn</NavLink>
                        </li>

                    </ul> : <ul className="flex flex-col gap-4 items-center text-black p-3">

                        <li className="hover:text-[#dbdbdb]">
                            <NavLink to={'/'} className="block py-2 pr-4 pl-3 font-medium text-[15px]" aria-current="page">Home</NavLink>
                        </li>

                        <li className="hover:text-[#dbdbdb]">
                            <NavLink to={'/Discover'} className="block py-2 pr-4 pl-3 font-medium text-[15px]">Discover</NavLink>
                        </li>

                    </ul>}


                </div>
            </Disclosure.Panel>
        </div>
    )
}

export default NavbarMobile