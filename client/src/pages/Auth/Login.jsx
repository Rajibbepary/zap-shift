import { useState } from "react";


const Login = () => {
    const [state, setState] = useState("login");
    
    return (
        <div> 
             <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg">
            <p className="text-2xl font-medium m-auto">
                <span className="text-[#CAEB66]">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#CAEB66]" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#CAEB66]" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input  placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#CAEB66]" type="password" required />
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
        </form>
        </div>
    );
};

export default Login;