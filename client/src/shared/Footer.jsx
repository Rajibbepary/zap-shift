
import assets from '../assets/assets';

const Footer = () => {
    return (
        <div>
             <div className="w-full top-0  text-sm text-slate-500 bg-[#F9FBFF] dark:bg-gray-900 pt-4">
            <div className="px-6 pt-16 flex flex-col items-center">
                 <div className="relative flex">
                <img src={assets.logo} className="w-7 mb-2" alt="" />
                <h3 className="font-extrabold absolute ml-4 top-4 text-gray-700 dark:text-white">Profast</h3>
            </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed dark:text-white">
                   Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <div className="border-t md:w-10/12 mx-auto flex max-sm:flex-row justify-center items-center md:space-x-4 space-x-2 py-4 border-slate-200 mt-3">
                <p className='text-sm dark:text-white hover:border-b duration-300 border-[#CAEB66]'>Home</p>
                <p className='text-sm dark:text-white hover:border-b duration-300 border-[#CAEB66]'>Services</p>
                <p className='text-sm dark:text-white hover:border-b duration-300 border-[#CAEB66]'>About Us</p>
                <p className='text-sm dark:text-white hover:border-b duration-300 border-[#CAEB66]'>Pricing</p>
                <p className='text-sm dark:text-white hover:border-b duration-300 border-[#CAEB66]'>Blog</p>
                <p className='text-sm dark:text-white hover:border-b duration-300 border-[#CAEB66]'>Contact</p>
            </div>
            <div className="border-t md:w-10/12 mx-auto border-slate-200">
                <div className="max-w-7xl mx-auto py-6 text-center">
                   <div className='flex justify-center items-center space-x-7'>
                   
                   <div className='hover:bg-[#1877F2] rounded-full p-2 scale-z-150 border-0 transition-opacity ease-in duration-300'> <img src={assets.facebook_icon} alt="" /></div>
                   <div className='hover:bg-[#0A66C2] rounded-full p-2 scale-z-150 border-0 transition-opacity ease-in duration-300'> <img src={assets.linkedin_icon} alt="" /></div>
                    <div className='hover:bg-[#041a28] rounded-full p-2 scale-z-150 border-0 transition-opacity ease-in duration-300'>  <img src={assets.twitter_icon} alt="" /></div>
                    <div className='hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full p-2 scale-z-150 border-0 transition-opacity ease-in duration-300'> <img src={assets.instagram_icon} alt="" /></div>
                   </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;