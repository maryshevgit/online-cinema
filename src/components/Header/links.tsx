import { BsHouseDoor } from "react-icons/bs";
import { BsCompass } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { ImFire } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";

export const links = [
    {name: 'Home', navigate: '/', icon: <BsHouseDoor />},
    {name: 'Discovery', navigate: '/discovery', icon: <BsCompass />},
    {name: 'Fresh movies', navigate: '/fresh', icon: <IoMdRefresh />},
    {name: 'Trending now', navigate: '/trend', icon: <ImFire />},
]

export const authLinks = [
    {name: 'Profile', auth: true, navigate: '/profile', icon: <IoSettingsOutline />},
    {name: 'Logout', auth: true, navigate: '/auth', icon: <FiLogOut />},
    {name: 'Login', auth: false, navigate: '/auth', icon: <FiLogIn />},
]

