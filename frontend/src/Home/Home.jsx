import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

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
          <div className="big-card">
            <h2>Welcome to Reddit Clone</h2>
            <p>This is where your posts will be displayed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
