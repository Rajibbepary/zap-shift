import {Outlet} from 'react-router'
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
const RootLayout = () => {
    
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    return (
        <div className='dark:bg-black relative'>
           <ToastContainer />
        <Navbar theme={theme} setTheme={setTheme}/>
         <Outlet></Outlet>
         <Footer/>
        </div>
    );
};

export default RootLayout;