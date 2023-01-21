import { Disclosure } from '@headlessui/react'
import { UserAuth } from '../../../context/UserAuth';
import { NavLink } from 'react-router-dom';
import BurgerIcon from '../../../assets/icons/BurgerIcon';
import DropdownMenu from './navbarCompanent/DropdownMenu';
import NavbarMobile from './navbarCompanent/NavbarMobile';
import NavItems from './navbarCompanent/NavItems';


export default function Navbar() {
    const { user } = UserAuth();

    const userEmail = user?.email

    return (
        <Disclosure as="nav" className="bg-[#fff]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center duration-300 rounded-md p-2 hover:bg-[#ff51ae] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <BurgerIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <BurgerIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>

                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <NavLink className='text-[20px] font-bold text-[#ff51ae]' to={'/'}>Zeus Flight.</NavLink>
                                </div>

                                <div className="hidden sm:ml-6 sm:block w-full">
                                    {!userEmail && <NavItems />}
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {userEmail && <DropdownMenu userName={userEmail} />}
                            </div>
                        </div>
                    </div>

                    <NavbarMobile />

                </>
            )}
        </Disclosure>
    )
}