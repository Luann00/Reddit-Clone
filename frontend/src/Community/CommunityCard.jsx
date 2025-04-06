import React from "react";

const CommunityCard = ({communityName}) => {
  return (
    <>
      <div className="community-card">
        <img
          src="https://via.placeholder.com/40"
          alt="Community Avatar"
          className="community-avatar"
        />
        <p className="community-name">{`r/${communityName}`}</p>
      </div>
    </>
  );
};

export default CommunityCard;
