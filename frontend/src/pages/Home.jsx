import React from "react";
import RecentPost from "../components/RecentPost";

const Home = () => {
  return (
    <div>
      <div className="container-fluid bg-dark hero-section text-center">
        <h1 className="fs-1 fw-bold text-light ">WELCOME TO MY BLOG</h1>
        <p className="text-light fs-5 mt-3">
          This is a blog about my personal experiences and thoughts. I hope you
          find something interesting here.
        </p>
      </div>

      {/* recent post  */}
      <div className="container-fluid">
        <RecentPost />
      </div>
    </div>
  );
};

export default Home;
