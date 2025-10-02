
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const {
        register,
        handleSubmit,
        watch,
        // formState: { errors },
    } = useForm();

return (
 <div className="w-11/12 mx-auto mt-10 dark:bg-gray-800 p-6 rounded-xl">
    <form onSubmit={handleSubmit()}>
        <div>
            <h2 className="text-3xl text-black/70 dark:text-white">Add Parcel</h2>
            <div className="border-b py-2 ">
            </div>
            <h3 className="text-xl text-black/70 my-2 dark:text-white">Enter your parcel details</h3>
            
            <div className="flex gap-6 mt-2">
                <div className="flex gap-1 items-center">
                    <input type="radio" name="parcelType" value="Document" 
                     {...register("type", { required: true })}
                    id="document" />
                    <label htmlFor="document" className="text-sm text-black/70 dark:text-white ">Document</label>
                </div>
                <div className="flex gap-1 items-center">
                    <input type="radio" name="parcelType" value="Not-Document"
                    {...register("type", { required: true })}
                    id="not-document" />
                    <label htmlFor="non-document" className="text-sm dark:text-white text-black/70">Non-Document</label>
                </div>
            </div>

        </div>
      
            <div className="border-b border-gray-500/30">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Parcel Name</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" 
                         {...register("title", { required: true })}
                        placeholder="Parcel Name" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Parcel Weight(KG)</label>
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="number" placeholder="Parcel Weight(KG)" 
                         {...register("weight", { required: true })}
                        required />
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
                        <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" 
                         {...register("sender_name", { required: true })}
                        placeholder="Sender name" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Sender Pickup Wire house</label>
                        <select  {...register("sender_center", { required: true })} className="h-12 p-2 mt-2 w-full text-sm border border-gray-500/30 rounded outline-none focus:border-indigo-300" placeholder='Select your house' required>
                          <option value="">Select Service Center</option>
                                {/* {getDistrictsByRegion(senderRegion).map((district) => (
                                    <option key={district} value={district}>{district}</option>
                                ))} */}
                        </select>
                    </div>
                    
                </div>
                <div className=" flex flex-col md:flex-row items-center gap-4 mt-2">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Address</label>
                        <input {...register("sender_address", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Address" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Sender Contact No</label>
                        <input  {...register("sender_contact", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Sender contact on" required />
                    </div>
                    
                </div>
                 <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Your Region</label>
                        <select {...register("sender_region", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300"  placeholder="Your region" name="" id="">
                             <option value="">Select Region</option>
                                {/* {uniqueRegions.map((region) => (
                                    <option key={region} value={region}>{region}</option>
                                ))} */}
                        </select>
                    </div>

                     <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Pickup Instruction</label>
                        <textarea {...register("pickup_instruction", { required: true })} className="h-20 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" name="" id="" placeholder="Pickup instruction" required >
                        </textarea>
                    </div>
                </div>
               
               <div className="flex-1">
                {/* Receiver Details */}
                <h3 className="text-black/70 dark:text-white text-xl mb-2">Receiver Details</h3>
                 <div className=" flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Name</label>
                        <input {...register("receiver_name", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Receiver name" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Deliver Wire House</label>
                        <select  {...register("receiver_region", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300"  placeholder="Your region" name="" id="">
                             <option value="">Select Region</option>
                                {/* {uniqueRegions.map((region) => (
                                    <option key={region} value={region}>{region}</option>
                                ))} */}
                        </select>
                    </div>
                </div>
                {/* second div */}
                <div className=" flex flex-col md:flex-row items-center gap-4 mt-2">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Address</label>
                        <input {...register("receiver_address", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Receiver address" required />
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Contact On</label>
                        <input  {...register("receiver_contact", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" placeholder="Receiver contact on" type="text" required />
                    </div>
                </div>
                 <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Region</label>
                        <select {...register("receiver_center", { required: true })} className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300"  placeholder="Your region" name="" id="">
                              <option value="">Select Service Center</option>
                                {/* {getDistrictsByRegion(receiverRegion).map((district) => (
                                    <option key={district} value={district}>{district}</option>
                                ))} */}
                        </select>
                    </div>
                 <div className="w-full mt-2">
                        <label className="text-black/70 dark:text-white text-sm" htmlFor="name">Receiver Instruction</label>
                        <textarea {...register("delivery_instruction", { required: true })} className="h-20 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" name="" id="" placeholder="Receiver instruction" required >
                        </textarea>
                    </div>
               </div>
            </div>
            <button type="submit" className="bg-[#CAEB66] md:w-1/2 w-full h-10  mt-4 rounded-xl mb-8">Proceed to Confirm Booking</button>
       </form>     
    </div> 
 
)
};

export default SendParcel;