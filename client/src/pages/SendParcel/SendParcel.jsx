

const SendParcel = () => (
    <div className="w-11/12 mx-auto mt-10 dark:bg-gray-800 p-6 rounded-xl">
        <div>
            <h2 className="text-3xl text-black/70 dark:text-white">Add Parcel</h2>
            <div className="border-b py-2 ">
            </div>
            <h3 className="text-xl text-black/70 my-2 dark:text-white">Enter your parcel details</h3>
            <div className="flex gap-6 mt-2">
                <div className="flex gap-1 items-center">
                    <input type="radio" name="parcelType" value="Document" id="document" />
                    <label htmlFor="document" className="text-sm text-black/70 dark:text-white ">Document</label>
                </div>
                <div className="flex gap-1 items-center">
                    <input type="radio" name="parcelType" value="Not-Document" id="not-document" />
                    <label htmlFor="not-document" className="text-sm dark:text-white text-black/70">Not-Document</label>
                </div>
            </div>

        </div>
        <form>
            <div className="border-b border-gray-500/30">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Parcle Name</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Parcel Name" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Parcel Weight(KG)</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="number" placeholder="Parcel Weight(KG)" required />
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row justify- gap-8 mt-5">
                {/* sender details form */}
                <div className="flex-1">
                    <h2 className="text-xl mb-2 text-black/70 dark:text-white">Sender Details</h2>
                <div className=" flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Sender Name</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Sender name" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Sender Pickup Wire house</label>
                        <select className="h-12 p-2 mt-2 w-full text-sm border border-gray-500/30 rounded outline-none focus:border-indigo-300" placeholder='Select your house' required>
                        <option value=""></option>
                        </select>
                    </div>
                    
                </div>
                <div className=" flex flex-col md:flex-row items-center gap-4 mt-2">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Address</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Address" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Sender Contact No</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Sender contact on" required />
                    </div>
                    
                </div>
                 <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Your Region</label>
                        <select className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Your region" name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                     <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Pickup Instruction</label>
                        <textarea className="h-20 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" name="" id="" placeholder="Pickup instruction" required >
                        </textarea>
                    </div>
                </div>
               
               <div className="flex-1">
                {/* Receiver Details */}
                <h3 className="text-black/70 dark:text-white text-xl mb-2">Receiver Details</h3>
                 <div className=" flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Name</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Receiver name" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Deliver Wire House</label>
                        <select className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Your region" name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                {/* second div */}
                <div className=" flex flex-col md:flex-row items-center gap-4 mt-2">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Address</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Receiver address" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Contact On</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" placeholder="Receiver contact on" type="text" required />
                    </div>
                </div>
                 <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Region</label>
                        <select className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Your region" name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                 <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Instruction</label>
                        <textarea className="h-20 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" name="" id="" placeholder="Receiver instruction" required >
                        </textarea>
                    </div>
               </div>
            </div>
            <button type="submit" className="bg-[#CAEB66] md:w-1/2 w-full h-10  mt-4 rounded-xl mb-8">Proceed to Confirm Booking</button>
        </form>
    </div>
);

export default SendParcel;