import React from 'react'
import gitIcon from "../../assets/images/github.svg";
import profile from "../../assets/images/profile.png";
import "./Member.css";

const MemberCard = ({ name, thoughts,_id , githubProfileLink ,profile }) => {
  return (
    <div className="carousal__card" key={_id}>
        <div className="carousal__header">
            <img src={profile} className="profile" alt="" />
            <h5>{name}</h5>
            <a href={githubProfileLink} target='_blank' rel='noreferrer' >
  <img src={gitIcon} className="icon" alt="github"/>
</a>
    </div>
    <p>
        {thoughts}
    </p>
</div>
  )
}

export default MemberCard