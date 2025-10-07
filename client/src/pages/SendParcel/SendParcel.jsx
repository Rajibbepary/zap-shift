
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useLoaderData } from "react-router";
import useAuth from './../../hooks/useAuth';
import useAxiosSecure from "../../hooks/useAxiosSecure";

const generateTrackingID = () => {
    const date = new Date();
    const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
    const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `PCL-${datePart}-${rand}`;
};


const SendParcel = () => {

    const {
        register,
        handleSubmit,
        watch
    } = useForm();

    const { user } = useAuth();
   const axiosSecure = useAxiosSecure();
    const serviceCenters = useLoaderData();
    // Extract unique regions
    const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];
    // Get districts by region
    const getDistrictsByRegion = (region) =>serviceCenters.filter((w) => w.region === region).map((w) => w.district);

    const parcelType = watch("type");
    const senderRegion = watch("sender_region");
    const receiverRegion = watch("receiver_region");

    const onSubmit = (data) => {
        const weight = parseFloat(data.weight) || 0;
        const isSameDistrict = data.sender_center === data.receiver_center;

        let baseCost = 0;
        let extraCost = 0;
        let breakdown = "";

        if (data.type === "document") {
            baseCost = isSameDistrict ? 60 : 80;
            breakdown = `Document delivery ${isSameDistrict ? "within" : "outside"} the district.`;
        } else {
            if (weight <= 3) {
                baseCost = isSameDistrict ? 110 : 150;
                breakdown = `Non-document up to 3kg ${isSameDistrict ? "within" : "outside"} the district.`;
            } else {
                const extraKg = weight - 3;
                const perKgCharge = extraKg * 40;
                const districtExtra = isSameDistrict ? 0 : 40;
                baseCost = isSameDistrict ? 110 : 150;
                extraCost = perKgCharge + districtExtra;

                breakdown = `
        Non-document over 3kg ${isSameDistrict ? "within" : "outside"} the district.<br/>
        Extra charge: ৳40 x ${extraKg.toFixed(1)}kg = ৳${perKgCharge}<br/>
        ${districtExtra ? "+ ৳40 extra for outside district delivery" : ""}
      `;
            }
        }

        const totalCost = baseCost + extraCost;

        Swal.fire({
            title: "Delivery Cost Breakdown",
            //icon: "info",
            html: `
      <div class="text-left text-base space-y-2">
        <p><strong>Parcel Type:</strong> ${data.type}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Delivery Zone:</strong> ${isSameDistrict ? "Within Same District" : "Outside District"}</p>
        <hr class="my-2"/>
        <p><strong>Base Cost:</strong> ৳${baseCost}</p>
        ${extraCost > 0 ? `<p><strong>Extra Charges:</strong> ৳${extraCost}</p>` : ""}
        <div class="text-gray-500 text-sm">${breakdown}</div>
        <hr class="my-2"/>
        <p class="text-xl font-bold text-green-600">Total Cost: ৳${totalCost}</p>
      </div>
    `,
            showDenyButton: true,
            confirmButtonText: "💳 Proceed to Payment",
            denyButtonText: "✏️ Continue Editing",
            confirmButtonColor: "#16a34a",
            denyButtonColor: "#d3d3d3",
            customClass: {
                popup: "rounded-xl shadow-md px-6 py-6",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const parcelData = {
                    ...data,
                    cost: totalCost,
                    created_by: user.email,
                    payment_status: 'unpaid',
                    delivery_status: 'not_collected',
                    creation_date: new Date().toISOString(),
                    tracking_id: generateTrackingID(),
                };
               
                axiosSecure.post('/parcels',parcelData)
                .then(res=>{
                    console.log(res.data)
                     if (res.data.insertedId) {
                            // TODO: redirect to a payment page 
                            Swal.fire({
                                title: "Redirecting...",
                                text: "Proceeding to payment gateway.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                })
            }
        });
    };


return (
 <div className="w-11/12 mx-auto mt-10 dark:bg-gray-800 p-6 rounded-xl">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <h2 className="text-3xl text-black/70 dark:text-white">Add Parcel</h2>
            <div className="border-b py-2 ">
            </div>
            <h3 className="text-xl text-black/70 my-2 dark:text-white">Enter your parcel details</h3>
            
            <div className="flex gap-6 mt-2">
                <div className="flex gap-1 items-center">
                    <input type="radio" name="parcelType" value="document" 
                     {...register("type", { required: true })}
                    id="document" />
                    <label htmlFor="document" className="text-sm text-black/70 dark:text-white ">Document</label>
                </div>
                <div className="flex gap-1 items-center">
                    <input type="radio" name="parcelType" value="non-document"
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
                        <input className={`h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300 ${parcelType !== "non-document" ? "bg-gray-100 cursor-not-allowed" : "" }`} type="number" placeholder="Parcel Weight(KG)" 
                         disabled={parcelType !== "non-document"}
                         {...register("weight")}
                        required />
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row justify- gap-8 mt-5">
               
               {/* Sender Details */}
                <div className="flex-1">
                <h2 className="text-xl mb-2 text-black/70 dark:text-white">Sender Details</h2>

                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="sender_name">Sender Name</label>
                    <input 
                        {...register("sender_name", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                        type="text" 
                        placeholder="Sender name" 
                        required 
                    />
                    </div>

                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="sender_region">Sender Region</label>
                    <select 
                        {...register("sender_region", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300"  
                        required
                    >
                        <option value="">Select Region</option>
                        {uniqueRegions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="sender_address">Sender Address</label>
                    <input 
                        {...register("sender_address", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                        type="text" 
                        placeholder="Sender address" 
                        required 
                    />
                    </div>

                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="sender_contact">Sender Contact No</label>
                    <input  
                        {...register("sender_contact", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                        type="text" 
                        placeholder="Sender contact no" 
                        required 
                    />
                    </div>
                </div>

                <div className="w-full mt-2">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="sender_center">Sender Service Center</label>
                    <select  
                    {...register("sender_center", { required: true })} 
                    className="h-12 p-2 mt-2 w-full text-sm border border-gray-500/30 rounded outline-none focus:border-indigo-300"  
                    required
                    >
                    <option value="">Select Service Center</option>
                    {senderRegion && getDistrictsByRegion(senderRegion).map((district) => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                    </select>
                </div>

                <div className="w-full mt-2">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="pickup_instruction">Pickup Instruction</label>
                    <textarea 
                    {...register("pickup_instruction", { required: true })} 
                    className="h-20 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                    placeholder="Pickup instruction" 
                    required 
                    />
                </div>
                </div>

              {/* Receiver Details */}
                <div className="flex-1">
                <h3 className="text-black/70 dark:text-white text-xl mb-2">Receiver Details</h3>
                
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="receiver_name">Receiver Name</label>
                    <input 
                        {...register("receiver_name", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                        type="text" 
                        placeholder="Receiver name" 
                        required 
                    />
                    </div>

                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="receiver_region">Receiver Region</label>
                    <select 
                        {...register("receiver_region", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300"
                        required
                    >
                        <option value="">Select Region</option>
                        {uniqueRegions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="receiver_address">Receiver Address</label>
                    <input 
                        {...register("receiver_address", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                        type="text" 
                        placeholder="Receiver address" 
                        required 
                    />
                    </div>
                    <div className="w-full">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="receiver_contact">Receiver Contact No</label>
                    <input  
                        {...register("receiver_contact", { required: true })} 
                        className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                        placeholder="Receiver contact no" 
                        type="text" 
                        required 
                    />
                    </div>
                </div>

                <div className="w-full mt-2">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="receiver_center">Receiver Service Center</label>
                    <select  
                    {...register("receiver_center", { required: true })} 
                    className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300"
                    required
                    >
                    <option value="">Select Service Center</option>
                    {receiverRegion && getDistrictsByRegion(receiverRegion).map((district) => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                    </select>
                </div>

                <div className="w-full mt-2">
                    <label className="text-black/70 dark:text-white text-sm" htmlFor="delivery_instruction">Receiver Instruction</label>
                    <textarea 
                    {...register("delivery_instruction", { required: true })} 
                    className="h-20 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" 
                    placeholder="Receiver instruction" 
                    required 
                    />
                </div>
                </div>
            </div>
            <button type="submit" className="bg-[#CAEB66] md:w-1/2 w-full h-10  mt-4 rounded-xl mb-8">Proceed to Confirm Booking</button>
       </form>     
    </div> 
 
)
};

export default SendParcel;