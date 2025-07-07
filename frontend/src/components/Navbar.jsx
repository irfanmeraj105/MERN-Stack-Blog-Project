import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <nav className="navbar d-flex justify-content-between align-items-center p-3">
        <Link to="/">
          <h1 className="mx-5 text-white fs-2 fw-bold">CodeByIrfanMeraj</h1>
        </Link>

        {!isLogin ? (
          <div className="d-flex align-items-center">
            <Link to="/login">
              <button className="btn_sign mx-3">Sign In</button>
            </Link>
          </div>
        ) : (
          // Avatar Dropdown
          <div className="dropdown">
            <div
              className="avatar-container pointer rounded-circle overflow-hidden bg-info"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/images/profile-image.jpg"
                alt="profile"
                width="40"
                height="40"
                className="rounded-circle"
              />
            </div>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark mt-2">
              <li>
                <Link className="dropdown-item active" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile/:id">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/logout">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
