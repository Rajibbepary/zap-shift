import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyParcel = () => {
    const { user} = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [] } = useQuery({
    queryKey: ['my-parcels', user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
        return res.data;
    },
    });

    console.log(parcels)
    return ( 
        <div>
            <h1 className="text-amber-600 text-xl">My Parcel {parcels.length}</h1>
        </div>
    );
};

export default MyParcel;