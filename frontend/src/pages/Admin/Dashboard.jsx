import { get } from "../../services/Endpoint";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await get('/dashboard');
        if (response.status === 200) {
          setPosts(response.data.posts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await get('/dashboard/users');
        if (response.status === 200) {
          setUsers(response.data.users);
        }
      } catch (error) {
        console.log(error);
      }
    };

     const fetchComments = async () => {
      try {
        const response = await get('/dashboard/all-comments');
        if (response.status === 200) {
          setComments(response.data.comments);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-white mb-4">Dashboard</h2>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-4 col-12">
            <div className=" card bg-primary text-white mb-4">
              <div className="card-body">
                <h5 className="card-title ">Total Users</h5>
                <p className="card-text">{users && users.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-4 col-12">
            <div className=" card bg-success text-white mb-4">
              <div className="card-body">
                <h5 className="card-title ">Total Posts</h5>
                <p className="card-text">{posts && posts.length}</p>
              </div>
            </div>
          </div>
           <div className="col-md-4 col-lg-4 col-sm-4 col-12">
            <div className=" card bg-warning text-white mb-4">
              <div className="card-body">
                <h5 className="card-title ">Total Comments</h5>
                <p className="card-text">{comments && comments.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
