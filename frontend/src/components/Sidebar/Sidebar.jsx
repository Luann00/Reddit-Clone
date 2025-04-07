import React, { useState } from "react";
import CommunityCard from "../CommunityCard/CommunityCard";
import "./Sidebar.css";

const Sidebar = () => {
  const [communities, setCommunities] = useState([
    "Programming",
    "Studium",
    "Arbeit",
    "Informatik",
    "React",
    "Java",
  ]);

  return (
    <div className="sidebar-container">
      <strong className="sidebar-header">Popular communities</strong>
      {communities.map((community, index) => (
        <CommunityCard key={index} communityName={community} />
      ))}
    </div>
  );
};

export default Sidebar;
