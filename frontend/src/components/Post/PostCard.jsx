import React from "react";
import "./PostCard.css";

const PostCard = ({ author, content, createdAt, title }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3 className="post-title">{title}</h3>
        <p className="post-meta">
          Posted by <strong>{author?.name}</strong> in <strong>r/Community</strong>
        </p>
      </div>

      <div className="post-body">
        <div className="post-info">
          <p className="post-content">{content}</p>
          <p className="post-date">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
