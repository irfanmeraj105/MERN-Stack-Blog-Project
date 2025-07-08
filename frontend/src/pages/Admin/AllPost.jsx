import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const posts = [
  {
    _id: "1",
    title: "First Blog Post",
    description: "This is the description of the first blog post.",
    image: "profile-image.jpg",
  },
  {
    _id: "2",
    title: "Second Blog Post",
    description: "This is the second blog post.",
    image: "profile-image.jpg",
  },
];

const BaseUrl = "/images"; 

export default function AllPost() {
  const handleDelete = (id) => {
    console.log("Deleting post with id:", id);
  };

  const handleUpdate = (id) => {
    console.log("Updating post with id:", id);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4 text-white">All Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post._id}>
            <div className="card h-100">
              <img
                src={`${BaseUrl}/${post.image}`}
                className="card-img-top"
                alt={post.title}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post._id)}
                >
                  <FaTrashAlt /> Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(post._id)}
                >
                  <FaEdit /> Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
