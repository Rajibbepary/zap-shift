/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import ThemeToggleBtn from "../components/ThemeToggleBtn";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContexts/AuthContext";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex justify-between items-center px-4 py-4 sm:px-12 sticky top-0 z-20 backdrop-blur-xl shadow-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      <div className="relative max-sm:hidden flex">
        <img src={assets.logo} className="w-5" alt="" />
        <h3 className="font-extrabold absolute ml-3 top-2 text-gray-700 dark:text-white">
          Profast
        </h3>
      </div>

      {/* Navigation Links */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-50 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-gray-800 max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.closemenu}
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
          alt=""
        />

        
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-semibold"
              : "text-gray-700 dark:text-white hover:text-[#CAEB66]"
          }
        >
          Home
        </NavLink>

        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-semibold"
              : "text-gray-700 dark:text-white hover:text-[#CAEB66]"
          }
        >
          Services
        </NavLink>

        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="/coverage"
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-semibold"
              : "text-gray-700 dark:text-white hover:text-[#CAEB66]"
          }
        >
          Coverage
        </NavLink>

        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-semibold"
              : "text-gray-700 dark:text-white hover:text-[#CAEB66]"
          }
        >
          About Us
        </NavLink>

        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="/sendparcel"
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-semibold"
              : "text-gray-700 dark:text-white hover:text-[#CAEB66]"
          }
        >
          Pricing
        </NavLink>

        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="/rider"
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-semibold"
              : "text-gray-700 dark:text-white hover:text-[#CAEB66]"
          }
        >
          Be a Rider
        </NavLink>

      {
        user && <>
          <NavLink
          onClick={() => setSidebarOpen(false)}
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-semibold"
              : "text-gray-700 dark:text-white hover:text-[#CAEB66]"
          }
        >
          Dashboard
        </NavLink>
        </>
      }
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_dark : assets.menuIcon}
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
          alt=""
        />
        <button
          onClick={handleAuthButtonClick}
          className="text-sm flex items-center gap-2 bg-[#CAEB66] text-gray-700 dark:bg-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          {user ? "Logout" : "Login"}
          <img
            src={assets.arrow_icon}
            className="-rotate-45"
            width={14}
            alt=""
          />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
