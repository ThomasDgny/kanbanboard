import React from 'react'
import Navbar from '../navbar/Navbar'
import SideBar from '../sideBar/SideBar'
import { UserAuth } from '../../../context/UserAuth';

const NavbarSwitched = () => {

    const { user } = UserAuth();
    return (
        <div>
            {!user ?
                <Navbar />
                :
                <SideBar />
            }
        </div>
    )
}

export default NavbarSwitched