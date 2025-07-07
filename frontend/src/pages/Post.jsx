import React from "react";

const Post = () => {
  return (
    <div className="container text-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="fw-bold text-white mb-4 display-4">My First Blog</h1>
          <img
            src="/images/blog-image.jpg"
            alt="blog-post"
            width={100}
            className="post-image"
            height={100}
          />
          <p className="mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit modi
            iure eius totam labore laudantium amet cumque. Cumque eos in eum
            vero iusto tempora vitae aliquid ducimus facilis beatae.
            Perspiciatis?
          </p>
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
          <h3 className="mt-5 mb-4">Comments</h3>
          <div className="bg-secondary p-3 rounded mb-3  d-flex">
            <img
              src="/images/profile-image.jpg"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              alt="comment-profile-image"
            />
             <div>
            <h5 className="mb-1">CodeByIrfanMeraj</h5>
            <p className="mb-0">Amazing content</p>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Post;
