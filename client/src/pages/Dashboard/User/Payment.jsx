//import SectionTitel from "../../components/SectionTitel/SectionTitel";
import { Elements } from "@stripe/react-stripe-js";  
import { loadStripe } from "@stripe/stripe-js";  
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
    return (
          <div className="w-11/12 mx-auto">
            {/* <SectionTitel subHeading={'Payment'} heading={'please pay first'}/> */}
             <div className="w-9/12 mx-auto my-20">
                <Elements stripe={stripePromise} >
            <CheckoutForm/>
        </Elements>
             </div>
        </div>
    );
};

export default Payment;