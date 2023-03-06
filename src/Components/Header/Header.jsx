import React from 'react'
import './Header.css'
import Header_video_ from "../../assets/Header_video_.mp4"
import slack_logo from "../../assets/Slack-logo-RGB.svg"


const Header = () => {
  return (<>
    <div className='Header'>
      <div className='main'>
        <video src={Header_video_} autoPlay loop muted />
        <div className="content">
          <p>Connecting the Open Source Community</p>
          <h4> A Platform for Open Source Collaboration and Growth ,where one can share open source experience and Learn from the Pros</h4>
          <h3>Connect, Learn, and Contribute</h3>
          <div className='slack_sec'>
            <img src={slack_logo} className="slack_logo" />
            <div className='slack_des'><a rel='noreferrer' href='https://lnkd.in/dvVB7Cfk' target='_blank' >join us now</a></div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Header