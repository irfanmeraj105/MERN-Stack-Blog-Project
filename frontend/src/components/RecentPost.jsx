import React from "react";

const RecentPost = () => {
  return (
    <div>
      <div className="container">
        <h2 className="fw-bold text-center mt-5 mb-5">Recent Posts</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="/images/profile-image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Blog Post </h5>
                <p className="card-text">
                    This is a sample blog post. This is a sample blog post. This is a sample blog
                </p>
                <a href="#" className="btn btn-primary">
                  Click to read
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
