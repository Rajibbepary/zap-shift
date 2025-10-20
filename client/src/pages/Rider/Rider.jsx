import { toast } from "react-toastify";
import assets from "../../assets/assets";
import './rider.css'
const Rider = () => {

     const onSubmit = async (event) => {
    event.preventDefault();
   // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4354c38-c9ef-47cc-a19e-83009964cbb8");

    try{
 const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Thank you for your submission");
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch(error){
    toast.error(error.message)
    }
   
  };
    
    return (
        <div className="bg-[#FFFFFF] dark:bg-gray-800  p-10">
            <div>
                <h2 className="text-3xl font-bold dark:text-white text-gray-800">Be A Rider</h2>
                <p className="text-sm bold dark:text-white text-gray-800">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="flex justify-between items-center gap-4">
                <div className="flex-1">
                   <h3 className="text-xl dark:text-white text-gray-800">Tell us about yourself</h3>
            <form onSubmit={onSubmit} className="flex flex-col items-center text-sm mt-4">
            <div className="flex flex-col md:flex-row items-center gap-4 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-gray-800 dark:text-white" htmlFor="name">Your Name</label>
                    <input name="name" className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-gray-800 dark:text-white" htmlFor="name">Your Age</label>
                    <input name="age" className="h-12 p-2  mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="number" required />
                </div>
            </div>
         <div className="flex flex-col md:flex-row items-center mt-6 gap-4 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-gray-800 dark:text-white" htmlFor="name">Your Email</label>
                    <input name="email" className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
                <div className="w-full">
                    <label className="text-gray-800 dark:text-white" htmlFor="name">Your Region</label>
                    <select name="region"  className="h-12 p-2  mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" id="" required>
                        <option value=""></option>
                        <option value="Muslim">Muslim</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Buddhist">Buddhist</option>
                        <option value="Christian">Christian</option>
                    </select>
                </div>
            </div>
             <div className="flex flex-col md:flex-row mt-6 items-center gap-4 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-gray-800 dark:text-white" htmlFor="name">NID No</label>
                    <input name="nid" className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-gray-800 dark:text-white" htmlFor="name">Contact</label>
                    <input name="contact" className="h-12 p-2  mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="number" required />
                </div>
            </div>
             <div className="flex flex-col md:flex-row mt-6 items-center gap-4 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-gray-800 dark:text-white" htmlFor="name">Which wire-house you want to work?</label>
                    <input name="house" className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
            </div>
                    <button type="submit" className="btn-3 mt-6">Submit</button>
        </form>
                </div>
                <div className="flex-1">
                    <img src={assets.agent} className="w-full" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Rider;