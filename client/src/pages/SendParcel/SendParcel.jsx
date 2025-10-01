

const SendParcel = () => {
    return (
        <div className="w-11/12 mx-auto mt-10">
           <div>
             <h2 className="text-3xl text-gray-600">Add Parcel</h2>
             <div className="border-b py-2 ">
             </div>
             <h3 className="text-xl text-gray-600 my-2">Enter your parcel details</h3>
                <div className="flex gap-6 mt-2">
                   <div className="flex gap-1 items-center">
                    <input type="radio" name="parcelType" value="Document" id="document" />
                    <label htmlFor="document" className="text-sm">Document</label>

                   </div>
                    <div className="flex gap-1 items-center">
                      <input type="radio" name="parcelType" value="Not-Document" id="not-document" />
                        <label htmlFor="not-document" className="text-sm">Not-Document</label>
                    </div>
                </div>
            
           </div>
           <form >
                <div className="border-b border-gray-500/30">
                     <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                <div className="w-full">
                    <label className="text-black/70 text-sm" htmlFor="name">Parcle Name</label>
                    <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Parcel Name" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70 text-sm" htmlFor="name">Parcel Weight(KG)</label>
                    <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="number" placeholder="Parcel Weight(KG)" required />
                </div>
            </div>
            
                </div>
                <div className="flex flex-col md:flex-row justify- gap-8 mt-5">
                    <div className="flex-1 flex flex-col md:flex-row items-center gap-4">
                <div className="w-full">
                    <label className="text-black/70 text-sm" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70 text-sm" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full text-sm border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
             <div className="flex-1 flex flex-col md:flex-row items-center gap-4">
                <div className="w-full">
                    <label className="text-black/70 text-sm" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70 text-sm" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border text-sm border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
                </div>

           </form>
        </div>
    );
};

export default SendParcel;