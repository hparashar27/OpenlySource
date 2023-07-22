import React from "react";
import Button from "react-bootstrap/Button";
import Opensource from "../../assets/Open source-cuate.png";
import colab from "../../assets/Creative team-pana.png";
import Card from "react-bootstrap/Card";
import "./AboutElements.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="newContainer">
        <div className="AboutH1">About OpenlySource</div>

        <div className="first-container">
          <div>
            <div className="first-left">
              <h1 className="para-heading">What is OpenlySource ?</h1>
              <p className="para">
                OpenlySource is a community of open-source enthusiasts , where
                you learn contributing to open source projects and collaborate
                with contributors from around the world. It is committed towards
                providing resources and support to you and helps to build a
                strong and thriving open-source community! 🚀
              </p>
            </div>
            <Link target="_blank" to= "/Resources">
              <Button>Get Started</Button>
            </Link>
          </div>
          <div className="first-right ImgWrap">
            <img src={Opensource} alt="opensource-collaboration" />
          </div>
        </div>

        <div className="first-container">
          <div className="first-right ImgWrap">
            <img src={colab} alt="collaboration" />
          </div>
          <div className="first-left">
            <h1 className="para-heading">Benefits of joining us !</h1>
            <ul>
              <li>
                Collaborate with a diverse group of individuals and
                organizations.
              </li>
              <li>
                Get aware about upcoming hackathons and internship opportunities
                in open source.
              </li>
              <li>
                Access to a supportive and inclusive community that values
                collaboration and diversity.
              </li>
              <li>Access to a vast pool of resources and support.</li>
              <li>
                Learn new skills and technologies through hands-on experience
                and mentorship.
              </li>
              <li>
                Contribute to meaningful projects and make a positive impact in
                the open source community.
              </li>
            </ul>
            <a href="https://lnkd.in/dvVB7Cfk" target="_blank">
              <Button variant="primary">Join the community now</Button>
            </a>
          </div>
        </div>
        {/* join us  */}
        <div className="bottom-c">
          <h1 className="join-heading">Join Us Here</h1>
          <div className="socialsrow">
            <div>
              <a href="https://lnkd.in/dvVB7Cfk" target="_blank">
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      Join the slack community and connect with like-minded
                      people across the country.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>

            <div>
              <a
                href="https://github.com/hparashar27/OpenlySource"
                target="_blank"
              >
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      This is the github repo of OpenlySource made using
                      javascript and reactjs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
