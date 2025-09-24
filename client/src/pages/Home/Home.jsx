
import BeMarChant from '../../components/BeMarChant';
import BenefitSection from '../../components/BenefitSection';
import ClientTestominal from '../../components/ClientTestominal';
import WorkSection from '../../components/WorkSection';
import FaqSection from './FaqSection';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
           <Slider/>
           <WorkSection/>
           <BenefitSection/>
           <BeMarChant/>
           <ClientTestominal/>
           <FaqSection/>
        </div>
    )
};

export default Home;