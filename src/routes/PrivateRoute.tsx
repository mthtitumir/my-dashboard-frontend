import { Navigate, useLocation } from "react-router-dom";
import { TChildrenProps } from "../types";

const PrivateRoute = ({ children }: TChildrenProps) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;
