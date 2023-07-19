import React from 'react'
import "./Resources.css"
import Card from "react-bootstrap/Card";
const Resources=()=>{
return(
    <>
    <div className="container1">
        
        <div className='heading'>
            <h1>Stuck in Open-Source?</h1>
        </div>
        
        <div className="Subtitle">A well-curated guide for all the beginners who wants to start their open-source journey.</div>
       
    </div>
    <h2>Video Tutorials</h2>
    <div className="tutorials">
     
          <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/apGV9Kg7ics" rel="noreferrer" allowFullScreen></iframe>
</div>
<div className="ratio ratio-16x9">
  <iframe  src="https://www.youtube.com/embed/RGOj5yH7evk" rel="noreferrer" title="YouTube video player" allowFullScreen></iframe>

</div>
          
        </div>

        <div className='doc'>
        <h2>Git CheatSheets</h2>

            <a href="https://about.gitlab.com/images/press/git-cheat-sheet.pdf" rel="noreferrer" target="_blank">
              <Card className='cheatsheet'>
                
                <Card.Body>
                  <Card.Text>Git Cheat Sheet by Github-Education</Card.Text>
                </Card.Body>
              </Card>
            </a>
          {/* </div> */}
          <a href="https://about.gitlab.com/images/press/git-cheat-sheet.pdf" rel="noreferrer" target="_blank">
              <Card className='cheatsheet'>
                
                <Card.Body>
                  <Card.Text>Git Cheat Sheet by GitLab</Card.Text>
                </Card.Body>
              </Card>
            </a>

            <div className='blogs'>
              <h2>Blogs/Documentation</h2>
              <div className="socialsrow">
              <div>
            
              <Card style={{ width: "18rem" }}>
                <Card.Img rel="noreferrer" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*ve-E-lXoo8D7uDYok4VYAA.png" />
                <Card.Body>
               
               <a  rel="noreferrer" href="https://medium.com/@abhishekj/an-intro-to-git-and-github-1a0e2c7e3a2f" target="_blank"><Card.Text>An Intro to Git and GitHub</Card.Text></a>
                </Card.Body>
              </Card>
            
          </div>
          <div>
            <a rel="noreferrer" href="https://opensource.guide/how-to-contribute/" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img rel="noreferrer" src="https://opensource.guide/assets/images/illos/contribute.svg" />
                <Card.Body>
                  <Card.Text>Get Started with Open-Source</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div>
            <a  rel="noreferrer" href="https://blog.greenroots.info/8-resources-to-start-with-opensource-immediately" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img  rel="noreferrer" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631381266463/w-HYGhPkh.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"/>
                <Card.Body>
                  <Card.Text>Resources to start with opensource</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div>
            <a  rel="noreferrer" href="https://blog.openreplay.com/getting-started-with-open-source-how-to-contribute/" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img  rel="noreferrer" src="https://blog.openreplay.com/images/getting-started-with-open-source-how-to-contribute/images/hero.png" />
                <Card.Body>
                  <Card.Text>Getting Started With Open-Source</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          </div>
          <div className="socialsrow">
              <div>
            <a rel="noreferrer" href="https://opensource.com/article/19/7/create-pull-request-github" target="_blank">
              <Card style={{ width: "17rem" }}>
                <Card.Img  rel="noreferrer" src="https://opensource.com/sites/default/files/lead-images/checklist_hands_team_collaboration.png" />
                <Card.Body>
                  <Card.Text>Creating Pull Requests in Github</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects/" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img  rel="noreferrer" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/open-source-contributions.jpeg" />
                <Card.Body>
                  <Card.Text>Contributing to open-source projects</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img  rel="noreferrer" src="https://github.blog/wp-content/uploads/2022/09/Open-Source-Engineering@2x.png?resize=1600%2C850"/>
                <Card.Body>
                  <Card.Text>The Complete Beginner's Guide</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="https://blog.devgenius.io/a-journey-to-contribute-in-open-source-f3c1e4848c6b" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img rel="noreferrer" src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sD1inpOFn4i1WDN5Imybqw.png" />
                <Card.Body>
                  <Card.Text>A Journey to Contribute in Open Source</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          </div>
            </div>
        </div>
        <div className='sec'>
          <h2>Learn Git Interactively</h2>
          <div className='socialsrow'>
          <div>
            <a rel="noreferrer" href="https://learngitbranching.js.org/" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img rel="noreferrer" src="https://pcottle.github.io/learnGitBranching/assets/learnGitBranching.png" />
                <Card.Body>
                  <Card.Text>Learn Git Branching</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="https://gitimmersion.com/lab_01.html" target="_blank">
              <Card style={{ width: "18rem" }}>
                <Card.Img rel="noreferrer" src="https://i.stack.imgur.com/BUVVa.png" />
                <Card.Body>
                  <Card.Text>Learn Git Immersion</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
          </div>
        </div>
        
    </>
)
}
export default Resources