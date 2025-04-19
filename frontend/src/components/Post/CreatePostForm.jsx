import React, { useState } from "react";
import axios from "axios";
import "./CreatePostForm.css";

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:8080/api/posts/createPost",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle("");
      onPostCreated();
    } catch (err) {
      console.error(err);
      alert("Could not create post!");
    }
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePostForm;