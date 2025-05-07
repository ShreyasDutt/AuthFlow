import React from 'react';
import { FiBell, FiMessageSquare, FiUser, FiPlus } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import {Link, useNavigate} from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="w-full px-6 py-3 bg-black border-b border-gray-800 flex items-center justify-between">

            <div className="flex items-center space-x-4 w-1/3">
                <Link to={'/'} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <h1 className="text-2xl font-bold text-green-500 tracking-wide">Auth</h1>
                </Link>

            </div>


            <div className="flex items-center space-x-4 w-1/3 justify-end">
                <button className="cursor-pointer p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition" onClick={()=>{navigate("/profile")}}>
                    <FiUser className="text-green-400" size={18} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
