
import WorkSection from '../../components/WorkSection';
import FaqSection from './FaqSection';
import Slider from './Slider';

const Home = () => {
    return (
        <div className='bg-white/50 dark:bg-gray-900/70'>
           <Slider/>
           <WorkSection/>
           <FaqSection/>
             
        </div>
    )
};

export default Home;