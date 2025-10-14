//import SectionTitel from "../../components/SectionTitel/SectionTitel";
import { Elements } from "@stripe/react-stripe-js";  
import { loadStripe } from "@stripe/stripe-js";  
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
    return (
          <div className="w-full mx-auto">
             <div className="lg:w-9/12 mx-auto my-10">
                <Elements stripe={stripePromise} >
            <CheckoutForm/>
          </Elements>
             </div>
        </div>
    );
};

export default Payment;