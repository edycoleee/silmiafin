import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  //console.log(currentUser);
  return currentUser?.email ? <Outlet /> : <Navigate to="/" />;
}