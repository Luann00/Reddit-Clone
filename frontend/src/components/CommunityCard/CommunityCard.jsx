import React from "react";
import Red_Color from '../../Assets/Red_Color.jpg'
import './CommunityCard.css';

//This is for the community card on the left side.
//We have a logo on the left and the community name on the right.
const CommunityCard = ({communityName}) => {
  return (
    <>
      <div className="community-card">
        <img
          src={Red_Color}
          alt="Community Avatar"
          className="community-avatar"
        />
        <p className="community-name">{`r/${communityName}`}</p>
      </div>
    </>
  );
};

export default CommunityCard;
