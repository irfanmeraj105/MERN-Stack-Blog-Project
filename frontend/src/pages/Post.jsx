import { baseUrl, get, post } from "../services/Endpoint";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  // creating states variables for the data handling
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState(null);
  console.log("singlePost", singlePost);
  // getting the single post for the reading on UI - huhuu
  const getSinglePost = async () => {
    try {
      const response = await get(`/public/singlepost/${id}`);
      const data = response.data;
      setSinglePost(data);
    } catch (error) {
console.error(error)
    }
  };

  // useEffect Hook - For the ui update
  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <div className="container text-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="fw-bold text-white mb-4 display-4">
            {singlePost && singlePost.title}
          </h1>
          <img
            src={singlePost && `/images/${singlePost.image}`}
            alt="blog-post"
            width={100}
            className="post-image"
            height={100}
          />
          <p className="mb-3 mt-5">{singlePost && singlePost.description}</p>
          <hr />

          <h3 className="text-white fw-bold">Leave a comment </h3>

          <form>
            <div className="mb-3">
              <label htmlFor="comment" className=" form-label ">
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                className="form-control mb-4 "
                rows={4}
                placeholder="Enter your comment here"
                required
              ></textarea>
              <button type="submit " className="btn btn-primary ">
                {" "}
                Submit Comment
              </button>
            </div>
          </form>

          <hr />
          <h3 className="mt-5 ">Comments</h3>
          <p className="mb-4">
            Total Comments :{" "}
            {singlePost && singlePost.comments ? singlePost.comments.length : 0}
          </p>
          {singlePost &&
          singlePost.comments &&
          singlePost.comments.length > 0 ? (
            singlePost.comments.map((commit) => {
              return (
                <div
                  className="bg-secondary p-3 rounded mb-3  d-flex"
                  key={commit._id}
                >
                  <img
                    src={`/images/${commit.userId.profile}`}
                    className="rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    alt="comment-profile-image"
                  />
                  <div>
                    <h5 className="mb-1">
                      {commit.userId ? commit.userId.fullName : "Anonymous"}
                    </h5>
                    <p className="mb-0">{commit.comment}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p> No comments yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
