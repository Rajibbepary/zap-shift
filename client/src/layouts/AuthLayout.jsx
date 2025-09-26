import assets from "../assets/assets";
import {Link, Outlet} from 'react-router'

const AuthLayout = () => {
    return (
        <div className="w-10/12 mx-auto mt-4">
          <Link to='/'>
           <div className="relative flex">
                <img src={assets.logo} className="w-7 mb-2" alt="" />
                <h3 className="font-extrabold absolute ml-4 top-4 text-gray-70">Profast</h3>
            </div>
          </Link>
          <div className="flex justify-center items-center mt-10">
             <div className="">
                <Outlet></Outlet>
           </div>

           <div className="bg-[#FAFDF0] ">
            <img src={assets.authImage} alt="" />
           </div>
          </div>
        </div>
    );
};

export default AuthLayout;