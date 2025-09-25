/* eslint-disable no-unused-vars */

import { useState } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

import ThemeToggleBtn from "../components/ThemeToggleBtn";
import { Link } from 'react-router';
const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <motion.div
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: 'easeInOut'}}
        className='flex justify-between items-center px-4 py-4 sm:px-12  sticky top-0 z-20 backdrop-blur-xl shadow-xl font-medium bg-white/50 dark:bg-gray-900/70'> 
            <div className="relative max-sm:hidden flex">
                <img src={assets.logo} className="w-5" alt="" />
                <h3 className="font-extrabold absolute ml-3 top-2 text-gray-700 dark:text-white">Profast</h3>
            </div>

            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden': 'max-sm:w-50 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#CAEB66] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
                <img src={assets.closemenu} className="w-5 absolute right-4 top-4 sm:hidden" onClick={()=> setSidebarOpen(false)} alt="" />
                <a onClick={()=>setSidebarOpen(false)} href="#" className="sm:hover:border-b">Home</a>
                <a onClick={()=>setSidebarOpen(false)} href="#services" className="sm:hover:border-b">Services</a>
                <a onClick={()=>setSidebarOpen(false)} href="#our-work" className="sm:hover:border-b">Coverage</a>
                <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">About Us</a>
                 <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">Pricing</a>
                  <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">Be a Rider</a>
            </div>
        <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
            <img src={theme === 'dark' ? assets.menu_dark : assets.menuIcon} onClick={()=> setSidebarOpen(true)} className="w-8 sm:hidden" alt="" />
            <Link to={'/login'}>
            <a  className="text-sm flex items-center gap-2 bg-[#CAEB66] text-gray-700 dark:bg-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all">
                SignIn <img src={assets.arrow_icon} className="-rotate-45" width={14} alt="" />
            </a>
            </Link>
        </div>
        </motion.div>
    );
};

export default Navbar;