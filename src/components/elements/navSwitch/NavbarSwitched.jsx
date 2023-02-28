import React from 'react'
import SideBar from '../sideBar/SideBar'
import { UserAuth } from '../../../context/UserAuth';
import PublicNavbar from '../navbar/Navbar';

const NavbarSwitched = () => {

    const { user } = UserAuth();
    return (
        <div>
            {!user ?
                <PublicNavbar />
                :
                <SideBar />
            }
        </div>
    )
}

export default NavbarSwitched