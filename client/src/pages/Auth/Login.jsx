import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import useAxios from "../../hooks/useAxios";

const Login = () => {
    const navigate = useNavigate()
    const [state, setState] = useState("login");
    const { register, handleSubmit } = useForm()
    const {createUser,signInWithGoogle,signIn,} = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const axiosInstance = useAxios();
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then( async(result) =>{

      const userInfo = {
          email:data.email,
          role:'user', //default role
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString()
      }

      const userRes = await axiosInstance.post('/users',userInfo)
      console.log(userRes.data);
        console.log(result.user)
         toast.success('Signin Successful')
        navigate('/')
    })
    .catch(error =>{
        console.log(error)
    })
  }

 // Email Password Signin

    const handleSignIn =  e => {
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value
      console.log( email, password )
      signIn(email, password)
      .then(result => {
        const user = result.user;
       console.log(user);
       toast.success('Login Successful')
       navigate('/')
    //    navigate(from, { replace: true });
      })
    }




const handleGoogleSignIn = () => {
       signInWithGoogle()
      .then(result =>{
        console.log(result.user)
         toast.success('GoogleSignIn Successful')
          navigate('/')
        })
      .catch(error =>{
        console.error(error)
      })
      
    }
  


    return (
        <div> 
             <form onSubmit={state === "register" ? handleSubmit(onSubmit) : handleSignIn}  className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg">
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
            <div className="w-full relative">
                <p>Password</p>
                <input {...register("password")} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#CAEB66]" type={showPassword ? 'text' : 'password'} required />
                 <p onClick={()=> setShowPassword(!showPassword)}  className=' bg-white absolute right-5 top-11'>
                      
                      {
                        showPassword ? <FaEyeSlash/> :<FaEye />
                      }
                      </p>
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
             <button  onClick={handleGoogleSignIn} type="submit" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                Log in with Google
            </button>
        </form>
        </div>
    );
};

export default Login;