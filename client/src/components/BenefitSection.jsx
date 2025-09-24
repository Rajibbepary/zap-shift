
import assets from '../assets/assets';

const BenefitSection = () => {
    return (
         <div className='w-10/12 mx-auto flex flex-col gap-4'>
            <div className='flex max-sm:flex-col justify-center items-center gap-9 bg-[#FFFFFF] dark:bg-gray-800 shadow-xl p-6 rounded-xl hover:scale-105 transition-all duration-300'>
                <div>
                    <img src={assets.livetracking} className='w-50' alt="" />
                </div>
                <div className='border-l-2 py-8 border-dashed dark:border-l-white border-gray-600'>
                    <h2 className='ml-4 dark:text-white/75 text-gray-800 font-semibold text-xl'>Live Parcel Tracking</h2>
                    <p  className='ml-4 dark:text-white/75 mt-2 text-gray-800 text-sm'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>

              <div className='flex max-sm:flex-col justify-center items-center gap-9 bg-[#FFFFFF] dark:bg-gray-800 shadow-xl p-6 rounded-xl hover:scale-105 transition-all duration-300'>
                <div>
                    <img src={assets.deliveryman} className='w-50' alt="" />
                </div>
                <div className='border-l-2 py-8 border-dashed dark:border-l-white border-gray-600'>
                    <h2 className='ml-4 dark:text-white/75 text-gray-800 font-semibold text-xl'>100% Safe Delivery</h2>
                    <p  className='ml-4 dark:text-white/75 mt-2 text-gray-800 text-sm'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>

             <div className='flex max-sm:flex-col justify-center items-center gap-9 bg-[#FFFFFF] dark:bg-gray-800 shadow-xl p-6 rounded-xl hover:scale-105 transition-all duration-300'>
                <div>
                    <img src={assets.safe} className='w-50 ' alt="" />
                </div>
                <div className='border-l-2 py-8 border-dashed dark:border-l-white border-gray-600'>
                    <h2 className='ml-4 dark:text-white/75 text-gray-800 font-semibold text-xl'>24/7 Call Center Support</h2>
                    <p  className='ml-4 dark:text-white/75 mt-2 text-gray-800 text-sm'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </div>
    );
};

export default BenefitSection;