import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar/>
        <div className="flex-grow-1 p-4">
      <Outlet />

        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
