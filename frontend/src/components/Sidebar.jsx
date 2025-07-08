import React from "react";
import { FaHome } from "react-icons/fa";
import { FiFolderPlus } from "react-icons/fi";
import { LiaUsersSolid } from "react-icons/lia";
import { FaLayerGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="bg-dark text-white vh-100" style={{ width: "250px" }}>
        <div className="p-3">
          <ul className="nav flex-column">
            <li className="nav-item d-flex align-items-center mb-3">
              <Link to={"/dashboard"} className="text-white nav-link">
                <FaHome className=" me-2" /> Dashboard
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center mb-3">
              <Link to={"/dashboard/add-post"} className="text-white nav-link">
                <FiFolderPlus className="me-2" /> AddPost
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center mb-3">
              <Link to={"/dashboard/users"} className="text-white nav-link">
                <LiaUsersSolid className="me-2" /> All Users
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-3">
              <Link to={"/dashboard/all-posts"} className="text-white nav-link">
                <FaLayerGroup className="me-2" /> All Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
