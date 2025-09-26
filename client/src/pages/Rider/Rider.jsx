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
        <div className="bg-[#FFFFFF] dark:bg-gray-800  p-4">
            <div>
                <h2 className="text-3xl font-bold dark:text-white text-gray-800">Be A Rider</h2>
                <p className="text-sm bold dark:text-white text-gray-800">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="flex justify-between items-center gap-4">
                <div className="flex-1">
                   <h3 className="text-xl dark:text-white text-gray-800">Tell us about yourself</h3>
                     <form 
            
            onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:gap-5">
                <div className="flex flex-col md:flex-row w-full gap-3 sm:gap-5">
                    {/* Name Input */}
                    <div className="input-field">
                        <input 
                            name="name"
                            type="text" 
                            id="username"
                            className="border border-gray-300 dark:border-gray-600" 
                            required 
                            autoComplete="off" 
                        />
                        <label htmlFor="username" >
                            Enter your name
                        </label>
                    </div>
 
                    {/* Email Input */}
                    <div className="input-field">
                        <input 
                            name="number"
                            type="text" 
                            id="usernumber"
                            className="border border-gray-300 dark:border-gray-600" 
                            required 
                            autoComplete="off" 
                        />
                        <label 
                            htmlFor="usernumber" 
                            className="flex items-center gap-2 top-0"
                        >
                            {/* <img src={assets.email_icon} className="w-6" alt="" /> */}
                            Enter your age
                        </label>
                    </div>
                </div>
            { /*----------------*/ }

              <div className="flex flex-col md:flex-row w-full gap-3 sm:gap-5">
                    {/* Name Input */}
                    <div className="input-field">
                        <input 
                            name="email"
                            type="email" 
                            id="useremail"
                            className="border border-gray-300 dark:border-gray-600" 
                            required 
                            autoComplete="off" 
                        />
                        <label 
                            htmlFor="useremail" 
                            className="flex gap-2 top-0"
                        >
                            {/* <img src={assets.person_icon} alt="" className="w-6" /> */}
                            Enter your email
                        </label>
                    </div>

                    {/* Email Input */}
                    <div className="input-field">
                        <input 
                            name="region"
                            type="text" 
                            id="usernumber"
                            className="border border-gray-300 dark:border-gray-600" 
                            required 
                            autoComplete="off" 
                        />
                        <label 
                            htmlFor="userregion" 
                            className="flex items-center gap-2 top-0"
                        >
                            {/* <img src={assets.email_icon} className="w-6" alt="" /> */}
                            Enter your region
                        </label>
                    </div>
                </div>
                {/* Message Textarea */}
                
                 <button type="submit" class="btn-3">Submit</button>
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