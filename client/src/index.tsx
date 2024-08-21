import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Signup from "./pages/Signup";
import Login from "./pages/Login"; // Login component
import JobListings from "./pages/JobListings"; // Job Listings component
import JobDetails from "./pages/JobDetails"; // Job Details component
import Profile from "./pages/Profile"; // Profile component
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "jobs", element: <JobListings /> },
      { path: "jobs/:jobId", element: <JobDetails /> },
      { path: "profile", element: <Profile /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
