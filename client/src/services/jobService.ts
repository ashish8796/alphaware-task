import axiosClient from "./axiosClient";

export const fetchJobs = async () => {
  const response = await axiosClient.get("/jobs");
  return response.data;
};

// export const fetchJobById = async (jobId: string) => {
//   const response = await axiosClient.get(`/jobs/${jobId}`);
//   return response.data;
// };

export const applyForJob = async (jobId: string, userId: string) => {
  const response = await axiosClient.post(`/jobs/${jobId}/apply`, { userId });
  return response.data;
};

export const postJob = async (jobData: any) => {
  const response = await axiosClient.post("/jobs", jobData);
  return response.data;
};

export const editJob = async (jobId: string, jobData: any) => {
  const response = await axiosClient.put(`/jobs/${jobId}`, jobData);
  return response.data;
};

export const deleteJob = async (jobId: string) => {
  const response = await axiosClient.delete(`/jobs/${jobId}`);
  return response.data;
};
