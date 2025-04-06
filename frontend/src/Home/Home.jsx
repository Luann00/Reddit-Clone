import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content"></div>
    </div>
  );
};

export default Home;
