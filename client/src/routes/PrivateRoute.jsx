import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { Atom } from "react-loading-indicators";
const PrivateRoute = ({children}) => {

    const { user,loading,} = useAuth();

    if(loading){
        <Atom color="#32cd32" size="medium" text="" textColor="" />
    }

    if(!user){
        <Navigate to={'/login'}></Navigate>
    }

    return children; 
};

export default PrivateRoute;