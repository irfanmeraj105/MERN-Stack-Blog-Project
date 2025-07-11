import { baseUrl, get } from "../services/Endpoint";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecentPost = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/single-post/${id}`);
  };

  // Get all posts
  const getPost = async () => {
    try {
      const response = await get("/blogs");
      const data = response.data;
      setPosts(data); // Adjust this if API structure is different
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="fw-bold text-center mt-5 mb-5">Recent Posts</h2>
        <div className="row">
          {posts && posts.length > 0 ? (
            posts.map((postItem) => (
              <div className="col-md-6 col-lg-4 mb-4" key={postItem._id}>
                <div className="card" style={{ width: "100%" }}>
                  <img
                    src={`${baseUrl}/images/${postItem.image}`}
                    className="card-img-top"
                    alt="Blog image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {postItem.title || "Untitled Post"}
                    </h5>
                    <p className="card-text">
                      {postItem.description || "No description available."}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleNavigate(postItem._id)}
                    >
                      Click to read
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
