import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
  return true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
