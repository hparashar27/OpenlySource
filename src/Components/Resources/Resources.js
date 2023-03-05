import React from 'react'
import "./Resources.css"
import Opensource from "../../assets/Open source-cuate.png"
const Resources=()=>{
return(
    <>
    <div className="container1">
        
        <div className='heading'>
            <h1>Stuck in Open-Source?</h1>
        </div>
        <div className='Wrapper'>
        <div className="ImgWrap">
                {/* <div className="Img">  */}
                <img src={Opensource} alt="opensource-collaboration"/> 
                </div>
        <div className="Subtitle">A well-curated guide for all the beginners who wants to start their open-source journey.</div>
       
</div>
    </div>
    </>
)
}
export default Resources