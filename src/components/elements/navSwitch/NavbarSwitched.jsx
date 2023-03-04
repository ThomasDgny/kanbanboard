import React from 'react'
import PriviteNav from '../sideBar/PriviteNav'
import { UserAuth } from '../../../context/UserAuth';
import PublicNavbar from '../navbar/Navbar';

const NavbarSwitched = () => {

    const { user } = UserAuth();
    return (
        <div>
            {!user ?
                <PublicNavbar />
                :
                <PriviteNav />
            }
        </div>
    )
}

export default NavbarSwitched