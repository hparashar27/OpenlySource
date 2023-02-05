import React from 'react';
import profile from '../../assets/images/profile.png';
import './Member.css';
const Member = () => {
    return (
        <form action="" className="box">
            <div className="header">
                <img src={profile} className="profile" alt="" />
                <button className="primary-btn">Change Image</button>
                <button className="secondary-btn">Remove</button>
            </div>
            <div className="middle">
                <input className="input" type="text" placeholder="Name" />
                <input
                    className="input"
                    type="text"
                    placeholder="Github Link"
                />
                <textarea
                    rows="4"
                    cols="50"
                    className="input-textarea"
                    placeholder="Share your thoughts about Open-source"
                ></textarea>
                <button className="primary-btn">Become a member</button>
            </div>
        </form>
    );
};

export default Member;
