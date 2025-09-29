
import { useLoaderData } from 'react-router';
import BangladeshMap from './BangladeshMap';

const Coverage = () => {
    const serviceCenters = useLoaderData();
    
    return (
        <div className="w-11/12 mx-auto py-10 bg-[#FFFFFF] px-16 shadow-2xl dark:bg-gray-800">
            <h1 className="md:text-4xl text-2xl font-bold text-gray-700 dark:text-white mb-6">We are available in 64 districts</h1>

            <BangladeshMap serviceCenters={serviceCenters} />
        </div>
    );
};

export default Coverage;