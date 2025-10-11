import React, { useContext, useState } from 'react';
import assets from '../assets/assets';
import { AuthContext } from '../contexts/AuthContexts/AuthContext';
import ThemeToggleBtn from '../components/ThemeToggleBtn';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import UserSidebar from '../pages/Dashboard/User/UserSidebar';

const DashboardLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
const { user, logOut } = useContext(AuthContext);
const navigate = useNavigate();

const handleLogOut = () => {
    
    logOut()
      .then(() => {
        navigate("/"); 
      })
      .catch((error) => console.error(error));
  };

  const handleAuthButtonClick = () => {
    if (user) {
      handleLogOut();
    } else {
      navigate("/login"); 
    }
  };

    
    return (
        <>
            <div className="flex bg-white/50 dark:bg-gray-900/70 items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 transition-all duration-300">
                <Link to={'/'}>
                 <div className="relative flex">
                <img src={assets.logo} className="w-5" alt="" />
                <h3 className="font-extrabold absolute ml-3 top-2 text-gray-700 dark:text-white">
                Profast
                </h3>
            </div>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                     <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <button
          onClick={handleAuthButtonClick}
          className="text-sm flex items-center gap-2 bg-[#CAEB66] text-gray-700 dark:bg-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          {user ? "Logout" : ""}
          <img
            src={assets.arrow_icon}
            className="-rotate-45"
            width={14}
            alt=""
          />
        </button>
                </div>
            </div>  
           <div className='flex'>
             <UserSidebar/>
            <Outlet/>
           </div>
        </>
    );
};



export default DashboardLayout;