import React from 'react'
import profile from "../../assets/images/profile.png";

const MemberCard = ({ name, thoughts }) => {
  return (
    <div className="carousal__card">
      <div className="carousal__header">
        <img src={profile} className="profile" alt="" />
        <h2>{name}</h2>
      </div>
      <p>
        {thoughts}
      </p>
    </div>
  )
}

export default MemberCard