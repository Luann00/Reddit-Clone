import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure you have axios installed
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import PostCard from "../Post/PostCard";

/*This is the home menu where the navbar, the sidebar(to the left)
and the main content is shown */
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

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
          {data.length > 0 ? (
            data.map((post) => (
              <PostCard
                key={post.id}
                createdAt={post.createdAt}
                title={post.title}
              />
            ))
          ) : (
            <p>No posts available</p>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
