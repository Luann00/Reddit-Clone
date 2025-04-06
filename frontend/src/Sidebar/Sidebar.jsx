import React, { useState } from "react";
import CommunityCard from "../Community/CommunityCard";

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
    <div className="sidebar">
      <div className="sidebar-header">Popular communities</div>
      {communities.map((community) => (
        <CommunityCard key={community} communityName={community} />
      ))}
    </div>
  );
};

export default Sidebar;
