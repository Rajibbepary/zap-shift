
import { FaBoxOpen } from "react-icons/fa6";
import { FaMoneyCheckAlt, FaSearchLocation } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const UserSidebar = () => {

    const sidebarLinks = [
        { name: "MyParcel", path:"/dashboard/myparcel", icon: <FaBoxOpen/>},
        { name: "Payment History", path: "/dashboard/paymenthistory", icon: <FaMoneyCheckAlt/> },
        { name: "Track a Package", path: "/dashboard/track", icon: <FaSearchLocation/> },
    ];

    return (
        <>
            <div className="md:w-64 w-16 dark:bg-gray-900/70 border-r h-[550px] text-base dark:border-gray-600 border-gray-300 pt-4 flex flex-col transition-all duration-300">
                 {sidebarLinks.map((item, index) => (
        <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) =>
                    `flex items-center py-3 px-4 gap-3 ${
                    isActive
                        ? "border-r-4 md:border-r-[6px] border-[#CAEB66] text-[#b9f603]"
                        : "hover:bg-gray-100/90 border-white text-gray-700 dark:text-white"
                    }`
                }
                >
            <span className="text-2xl">{item.icon}</span>
            <p className="md:block hidden text-center">{item.name}</p>
</NavLink> ))}
                           
                        </div>
                      
        </>
    );
};

export default UserSidebar;