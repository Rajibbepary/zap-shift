import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const MyParcel = () => {
    const { user} = useAuth();
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const { data: parcels = [],refetch } = useQuery({
    queryKey: ['my-parcels', user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
        return res.data;
    },
    });

    const handleView = (id) => {
        console.log("View parcel", id);
        // You could open a modal or navigate to a detail page
    };

    const handlePay = (id) => {
        navigate(`/dashboard/payment/${id}`)
       
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This parcel will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#e11d48", // red-600
            cancelButtonColor: "#6b7280",  // gray-500
        });
        if (confirm.isConfirmed) {
            try {
                
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Parcel has been deleted.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }
                        refetch();
                    })

                
            } catch (err) {
                Swal.fire("Error", err.message || "Failed to delete parcel", "error");
            }
        }
    };
  const formatDate = (iso) => {
        return new Date(iso).toLocaleString(); // Format: "6/22/2025, 3:11:31 AM"
    };
    //console.log(parcels)
    return ( 
        <>
             <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Parcel {parcels.length}</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Title</th>
                                <th className="px-4 py-3 font-semibold truncate">Type</th>
                                <th className="px-4 py-3 font-semibold truncate hidden md:block">Created At</th>
                                 <th className="px-4 py-3 font-semibold truncate">Cost</th>
                                <th className="px-4 py-3 font-semibold truncate">Payment</th>
                                <th className="px-4 py-3 font-semibold truncate">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {parcels.map((parcel, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                   
                                    <td className="px-4 py-3">{parcel.title}</td>
                                    <td className="px-4 py-3 max-sm:hidden">{parcel.type}</td>
                                    <td className="px-4 py-3 text-sm">{formatDate(parcel.creation_date)}</td>
                                      <td>৳{parcel.cost}</td>
                            <td className="px-4 py-3">
                <button
                    className={`px-3 py-1 rounded-full text-xs text-white ${
                    parcel.payment_status === "paid" ? "bg-green-600" : "bg-yellow-400"
                    }`}
                >
                    {parcel.payment_status}
                </button>
                </td>

                            <td className="flex items-center gap-2 px-4 py-3">
                                <button
                                    onClick={() => handleView(parcel._id)}
                                    className="px-3 py-2 bg-green-600 rounded-sm text-xs text-white"
                                >
                                    View
                                </button>
                                {parcel.payment_status === "unpaid" && (
                                    <button
                                        onClick={() => handlePay(parcel._id)}
                                        className="text-2xl text-white px-3 py-1 rounded-sm bg-blue-700"
                                    >
                                       <FaAmazonPay/>
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(parcel._id)}
                                    className="bg-red-600 text-sm text-white px-3 py-2 rounded-sm "
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </td>
                                </tr>
                            ))}
                            
              {parcels.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No parcels found
                  </td>
                </tr>
              )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
        </>
    );
};

export default MyParcel;