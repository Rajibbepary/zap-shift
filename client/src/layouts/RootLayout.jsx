import {Outlet} from 'react-router'
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
         <Outlet></Outlet>
         <Footer/>
        </div>
    );
};

export default RootLayout;