import React from "react";
import "../Styles-css/Listing.css";
import h1 from "../Image/property-1.jpg";
import h2 from "../Image/property-2.jpg";
import h3 from "../Image/property-3.jpg";
import h4 from "../Image/property-4.jpg";
import h5 from "../Image/property-5.jpg";
import h6 from "../Image/property-6.jpg";
const Blog = () => {
  const posts = [
    {
      id: 1,
      image: h1,
      title: "Creative business to takeover the market",
      date: "Jan 20, 2056",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      image: h2,
      title: "Creative business to takeover the market",
      date: "Jan 20, 2056",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 3,
        image: h3,
        title: "Creative business to takeover the market",
        date: "Jan 20, 2056",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        id: 4,
        image: h4,
        title: "Creative business to takeover the market",
        date: "Jan 20, 2056",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        id: 5,
        image: h5,
        title: "Creative business to takeover the market",
        date: "Jan 20, 2056",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
  ];

  return (
    <div className="container">
    <div className="blog-container">
      {/* Left Side - Blog Posts */}
      <div className="blog-list">
        {posts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt="blog" className="blog-image" />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="blog-date">Posted on: {post.date}</p>
              <p className="blog-description">{post.description}</p>
              <button className="read-more">READ MORE</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Sidebar */}
      <div className="sidebar">
        <div className="tabs">
          <span>Recent Post</span>
          <span>Most Popular</span>
          <span className="active-tab">Most Commented</span>
        </div>
        <div className="sidebar-posts">
          {posts.map((post) => (
            <div className="sidebar-item" key={post.id}>
              <p className="sidebar-title">{post.title}</p>
              <p className="sidebar-date">Posted on: {post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
