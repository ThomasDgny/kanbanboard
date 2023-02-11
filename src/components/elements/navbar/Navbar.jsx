import { auth } from '../../../Firebase';
import { UserAuth } from '../../../context/UserAuth';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Navbar() {
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

    const userEmail = user?.email
    console.log(user);
    return (

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

                <li className="hover:text-[#ff51ae]">
                    <button onClick={HandleSignOut}>Sign Out</button>
                </li>



                <li>
                    {userEmail && <h1>{userEmail}</h1>}
                </li>

            </ul>

        </div>

    )
}