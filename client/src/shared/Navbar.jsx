import { useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
      const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
          <div
        className='flex justify-between items-center px-4 py-4 sm:px-12 sticky top-0 z-20 backdrop-blur-xl font-medium'> 
            <div className="flex relative">
                <img src={assets.logo} className="w-5" alt="" />
            <h2 className="font-bold absolute top-2 ml-3">Profast</h2>
            </div>
            <div className={`text-gray-700  sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden ': 'max-sm:w-60 max-sm:pl-10 bg-[#CAEB66]'}  max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary  max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
                <img src={assets.closemenu} className="w-5 absolute right-4 top-4 sm:hidden" onClick={()=> setSidebarOpen(false)} alt="" />
                <a onClick={()=>setSidebarOpen(false)} href="#" className="sm:hover:border-b">Home</a>
                <a onClick={()=>setSidebarOpen(false)} href="#services" className="sm:hover:border-b">Services</a>
                <a onClick={()=>setSidebarOpen(false)} href="#coverage" className="sm:hover:border-b">Coverage</a>
                <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">About Us</a>
                 <a onClick={()=>setSidebarOpen(false)} href="#pricing" className="sm:hover:border-b">Pricing</a>
                  <a onClick={()=>setSidebarOpen(false)} href="#be-a-rider" className="sm:hover:border-b">Be a Rider</a>
                    <a onClick={()=>setSidebarOpen(false)} href="" className="sm:hover:border-b">SignIn</a>
                 
            </div>
        <div className="flex items-center gap-2 sm:gap-4">
            <img src={assets.menuIcon} onClick={()=> setSidebarOpen(true)} className="w-8 sm:hidden" alt="" />
        </div>
        </div>
    );
};

export default Navbar;