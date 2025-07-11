import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
