import assets from "../assets/assets";


const BeMarChant = () => {
    return (
        <div className="mt-24 w-10/12 bg-[#03373D] from-[#03373D] to-[rgb(3,55,61)] mx-auto rounded-xl bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${assets.merchant})`}}>
           <div className="flex justify-center items-center p-6 max-sm:flex-col max-sm:gap-6">
             <div className="flex flex-col gap-3">
                <h2 className="text-white/90 text-2xl">Merchant and Customer Satisfaction is Our First Priority</h2>
                <p className="text-white/75 text-sm">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className="flex gap-2 flex-col md:flex-row">
            <button type="button" className="w-50 py-3 active:scale-95 transition text-sm text-white/90 rounded-full bg-[#CAEB66]"><p className="mb-0.5">Become a Marchant</p></button>
                <button type="button" className="w-50 py-3 active:scale-95 transition text-sm text-white/75 border border-[#CAEB66] rounded-full bg-transparent"><p className="mb-0.5">Earn with Profast Courier</p></button>
                </div>
            </div>
            <div>
                <img src={assets.location} alt="" />
            </div>
           </div>
        </div>
    );
};

export default BeMarChant;