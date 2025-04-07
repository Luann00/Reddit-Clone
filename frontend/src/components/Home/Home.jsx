import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Button from 'react-bootstrap/Button';
import PostCard from "../Post/PostCard";

/*This is the home menu where the navbar, the sidebar(to the left)
and the main content is shown */
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
        <Button variant="light">Popular</Button>
        <Button variant="light">New</Button>
        <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
