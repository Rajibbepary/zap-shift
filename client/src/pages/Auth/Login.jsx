import { useState } from "react";
import { useForm } from "react-hook-form"


const Login = () => {
    const [state, setState] = useState("login");
    
     const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
    return (
        <div> 
             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg">
            <p className="text-2xl font-medium m-auto">
                <span className="text-[#CAEB66]">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input {...register("name")} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#CAEB66]" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input {...register("email")} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#CAEB66]" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input {...register("password")} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#CAEB66]" type="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-[#CAEB66] cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-[#CAEB66] cursor-pointer">click here</span>
                </p>
            )}
            <button className="bg-[#CAEB66] transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
             <button type="submit" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                Log in with Apple
            </button>
        </form>
        </div>
    );
};

export default Login;