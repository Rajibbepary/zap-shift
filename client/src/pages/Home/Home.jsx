
import CardSection from '../../components/CardSection';
import WorkSection from '../../components/WorkSection';
import FaqSection from './FaqSection';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
           <Slider/>
           <WorkSection/>
           <CardSection/>
           <FaqSection/>
        </div>
    )
};

export default Home;