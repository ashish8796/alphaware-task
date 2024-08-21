import { useEffect } from "react";
import { useDispatch } from "react-redux";

const JobListings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch();
  }, []);
  return <div>JobListings</div>;
};

export default JobListings;
