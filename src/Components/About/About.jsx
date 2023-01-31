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
// import { Link } from 'react-router-dom'
// import {Button} from '../ButtonElements'
import { AboutContainer, AboutWrapper, AboutRow,Column1, Column2, Column3,Column4,TextWrapper,  Heading, SubTitle, AboutH1 ,Column5,Column6, ImgWrap, Img } from './AboutElements'

const About = ({ id1,id2,id3, imgStart, imgStart1,imgStart2,headline, description,headline1, description1,headline2, description2,  img,img1,img2, alt}) => {
  return (
    <>
      <AboutContainer id='about' >
      <AboutH1>About Bloggy's</AboutH1>
        <AboutWrapper>
            <AboutRow >
                <Column1 id1={id1}>
                <TextWrapper>
                    
                    <Heading >{headline}</Heading>
                    <SubTitle >{description}</SubTitle>
                    
                </TextWrapper>
                </Column1>
                <Column2 imgStart={imgStart}>
                <ImgWrap>
                <Img src={img} alt={alt}/> 
                </ImgWrap>
                </Column2>
               

                <Column3  id2={id2}>
                <TextWrapper>
                   
                    <Heading >{headline1}</Heading>
                    <SubTitle >{description1}</SubTitle>
                    
                </TextWrapper>
                </Column3>
                <Column4 imgStart1={imgStart1} id2={id2}>
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
                </Column6 >
            </AboutRow>
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About