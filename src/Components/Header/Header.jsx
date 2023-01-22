import React from 'react'
import './Header.css'
import Header_video_ from "../../assets/Header_video_.mp4"


const Header = () => {
  return (<>
<div className='Header'>
<div className='main'>
        <video src={Header_video_} autoPlay loop muted />
        <div className="content">
        <h2>Connecting the Open Source Community</h2>
        <h4> A Platform for Open Source Collaboration and Growth ,where one can share open source experience and Learn from the Pros</h4>
        <h3>Connect, Learn, and Contribute</h3>
        </div>
        </div>
</div>
    </>
  )
}

export default Header