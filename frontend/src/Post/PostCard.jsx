import React from "react";
import "./PostCard.css";
import photo from '../Assets/mock-photo.jpg';

/*This is the post card where the post details are shown for the user */
const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3 className="post-title">This is the Post Title</h3>
        <p className="post-meta">
          Posted by <strong>Username</strong> in <strong>r/Subreddit</strong> - 2 hours ago
        </p>
      </div>

      <div className="post-body">
        <img
          src={photo}
          alt="Post"
          className="post-image"
        />
        <div className="post-info">
          <p className="post-date">2 hours ago</p>
          <p className="post-comments">42 Comments</p>
          <div className="post-upvotes">
            <span className="upvote-count">1,232</span>
            <button className="upvote-button">&#8593;</button> 
            <button className="downvote-button">&#8595;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
