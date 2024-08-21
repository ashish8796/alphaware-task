import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const LandingRedirect = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return user ? <Navigate to="/jobs" /> : <Navigate to="/login" />;
};

export default LandingRedirect;
