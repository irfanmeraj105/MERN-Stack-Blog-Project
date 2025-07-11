import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AddPost from "./pages/Admin/AddPost";
import User from "./pages/Admin/User";
import AllPost from "./pages/Admin/AllPost";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster />
        <Routes>
          {/* user layout routes  */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="single-post/:id" element={<Post />}></Route>
            <Route path="profile/:id" element={<Profile />}></Route>
          </Route>
          {/* Dashboard layout routes  */}
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="add-post" element={<AddPost />}></Route>
            <Route path="users" element={<User />}></Route>
            <Route path="all-posts" element={<AllPost />}></Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
