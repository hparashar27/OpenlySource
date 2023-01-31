// import React from 'react'
// import { Link } from 'react-router-dom'

// function About() {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   )
// }

// export default About

import React from 'react'
import Opensource from "../../assets/Open source-cuate.png"
import colab from "../../assets/Creative team-pana.png"
import "./AboutElements.css"
// import { Link } from 'react-router-dom'
// import {Button} from '../ButtonElements'
// import { AboutContainer, AboutWrapper, AboutRow,Column1, Column2, Column3,Column4,TextWrapper,  Heading, SubTitle, AboutH1 ,Column5,Column6, ImgWrap, Img } from './AboutElements'

const About = () => {
  return (
    <>
      <div className="AboutContainer" >
      <div className="AboutH1">About OpenlySource</div>
        <div className="AboutWrapper">
            <div className="AboutRow ">
                <div className="Column1 ">
                <div className="TextWrapper">
                    
                    <div className="Heading" >What is OpenlySource?</div>
                    <div className="SubTitle" >OpenlySource is a open source community , where you learn more about open source contribution to large codebases , interact with some of the best open source contributors 🚀 </div>
                    
                </div>
                </div>
                 <div className="Column1 ">
                <div className="ImgWrap">
                {/* <div className="Img">  */}
                <img src={Opensource} alt="avhh"/> 
                </div>
                </div>
               

                {/*<Column3  id2={id2}>
                <TextWrapper>
                   
                    <Heading >{headline1}</Heading>
                    <SubTitle >{description1}</SubTitle>
                    
                </TextWrapper>
                </Column3> */}
                {/* <Column4 imgStart1={imgStart1} id2={id2}>
                <ImgWrap>
                <Img src={img1} alt={alt}/> 
                </ImgWrap>
                </Column4>

                <Column5 id3={id3}>
                <TextWrapper>
                  
                    <Heading >{headline2}</Heading>
                    <SubTitle >{description2}</SubTitle>
                    
                </TextWrapper>
                </Column5>
                <Column6 imgStart2={imgStart2} id3={id3}>
                <ImgWrap>
                <Img src={img2} alt={alt}/> 
                </ImgWrap>
                </Column6 > */}
            </div>
        </div>
<div className='Heading1'>Benefits of Joining Us

</div>
<div className="About1Row ">
<div className="Column1 ">
                <div className="ImgWrap">
                {/* <div className="Img">  */}
                <img src={colab} alt="avhh"/> 
                </div>
                </div>
                <div className="Column1 ">
                <div className="TextWrapper">
                    
                    {/* <div className="Heading" >What is OpenlySource?</div> */}
                    <div className="SubTitle" >
                      <ul>
                        <li>Collaborate with a diverse group of individuals and organizations.</li>
                        <li>Access to a supportive and inclusive community that values collaboration and diversity.</li>
                        <li>Access to a vast pool of resources and support.</li>
                        <li>Learn new skills and technologies through hands-on experience and mentorship</li>
                        <li>Contribute to meaningful projects and make a positive impact in the open source community</li>
                        </ul> </div>
                    
                </div>
                </div>
                 
                </div>
                <div className='Heading3'>Join Us

</div>
<div className='socialsrow'>
  <div className='socialcolumn'></div>
  <div className='socialcolumn'></div>
</div>
      </div>
    </>
  )
}

export default About