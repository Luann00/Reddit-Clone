import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import PostCard from "../Post/PostCard";
import CreatePostForm from "../Post/CreatePostForm";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchPosts = () => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(Boolean(token));
    
    if (token) {
      axios
        .get("http://localhost:8080/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Logged-in user:", res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch current user:", err);
        });
    }
  
    fetchPosts();
  }, []);
  
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    console.log(token, "log out")
    setIsLoggedIn(false);
  };  
  
  return (
    <div className="home-container">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <Button variant="light">Popular</Button>
          <Button variant="light">New</Button>

          {/* Show CreatePostForm only for users who are logged in. */}
          {isLoggedIn && <CreatePostForm onPostCreated={fetchPosts} />}

          {/*Show all posts for all users, even unlogged*/}
          {data.length > 0 ? (
            data.map((post) => (
              <PostCard
                key={post.id}
                createdAt={post.createdAt}
                title={post.title}
                content={post.content}
                author={post.user}
              />
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
