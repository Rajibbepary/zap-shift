import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Atom } from "react-loading-indicators";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Atom color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }


  if (!user) {
    return <Navigate to="/login" replace />;
  }


  return children;
};

export default PrivateRoute;
