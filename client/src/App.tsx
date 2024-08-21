import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { validateUserFromCookies } from "./redux/auth/authActions";
import { AppDispatch } from "./redux/store";
import Loader from "./components/Loader"; // Your loading component

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const resultAction = await dispatch(validateUserFromCookies());

        if (validateUserFromCookies.fulfilled.match(resultAction)) {
          navigate("/jobs");
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("User validation failed", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [dispatch, navigate]);

  if (loading) {
    return <Loader />;
  }

  return <Outlet />;
};

export default App;
