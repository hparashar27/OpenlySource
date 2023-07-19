import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import gitIcon from "../../assets/images/github.svg";
import profile from "../../assets/images/profile.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Member.css";
import MemberCard from "./MemberCard.js";
import members from "../../data/memberApi";
const Member = () => {
  const [formData, setFormData] = useState({
    name: '',
    githubProfileLink: '',
    thoughts: ''
  });
  const [fetchedData, setFetchedData] = useState({})
  const [status, setStatus] = useState(false)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault()
    submitData()
  }
  const submitData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/members', formData)
      if (response.statusText === 'OK') {
        fetchData()
      }
      setStatus(true)
      setFormData({
        name: '',
        githubProfileLink: '',
        thoughts: ''
      })
    } catch (error) {
      console.log(error.message)
      setStatus(false)
    }
  }
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/members')
      console.log(response);
      setFetchedData(response.data.data)
      setStatus(true)
    } catch (error) {
      setStatus(false)
      console.log(error.message)
    }
  }

  useEffect(() => {
    console.log('hello');
    fetchData()
  }, [status])


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="heading">
        <h1>Want to become Openlysource member</h1>
        <Button color="danger" onClick={toggle}>
          Join Now
        </Button>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <form onSubmit={handleSubmit} className="box">
            <ModalHeader toggle={toggle}>Become a member</ModalHeader>
            <ModalBody>
              <div className="header">
                <img src={profile} className="header__profile" alt="" />
                <button
                  type="file"
                  id="myFile"
                  name="filename"
                  className="header__btn header__btn--primary"
                >
                  Change Image
                </button>
                <button className="header__btn header__btn--secondary">
                  Remove
                </button>
              </div>
              <div className="middle">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                  })}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Github Link"
                  value={formData.githubProfileLink}
                  onChange={(e) => setFormData({
                    ...formData,
                    githubProfileLink: e.target.value
                  })}
                />
                <textarea
                  rows="4"
                  cols="50"
                  className="input-textarea"
                  placeholder="Share your thoughts about Open-source"
                  value={formData.thoughts}
                  onChange={(e) => setFormData({
                    ...formData,
                    thoughts: e.target.value
                  })}
                ></textarea>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle} type="submit">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
      <h1 className="Members_Head">OpenlySource Members</h1>
      <Carousel className="carousal" responsive={responsive}>
        {
          members.length > 0 && members.map((member) => (
            <MemberCard name={member.name} thoughts={member.thoughts} githubProfileLink={member.githubProfileLink} _id={member._id} />
          ))
        }
      </Carousel>
    </>
  );
};
export default Member;
