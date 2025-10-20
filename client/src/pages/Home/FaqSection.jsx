import { useState } from "react";
import Titel from "../../hooks/Titel";


const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "How can I track my parcel?",
    answer: "Use our real-time tracking system on the website."
  },
  {
    question: "How long does delivery take?",
    answer: "Express: 4–6 hrs in Dhaka. Standard: 24–72 hrs nationwide."
  },
  {
    question: "Do you offer business delivery?",
    answer: "Yes, we provide solutions for both personal and business shipments."
  },
  {
    question: "What if my parcel is delayed?",
    answer: "Contact our support team for quick help."
  },
  {
    question: "What areas do you cover?",
    answer: "We deliver across Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi."
  },
  {
    question: "Is my parcel safe during delivery?",
    answer: "Yes, all parcels are handled securely with care from pick-up to drop-off."
  }
];



    return (
         <div className="w-full mb-8">
           
            <div className="max-w-2xl mt-10 mx-auto flex flex-col items-center justify-center px-4 md:px-0">
               <Titel title={'Frequently Asked Question (FAQ)'} desc={'Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!'}/>
                {faqs.map((faq, index) => (
                    <div className="border-b border-slate-200 mt-4 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base  text-gray-600 dark:text-white/75 font-medium">
                                {faq.question}
                            </h3>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all dark:bg-white/65 duration-500 ease-in-out`}>
                                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className={`text-sm text-gray-600 dark:text-white/75 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;