import React, { useState } from 'react';
import profile from '../../assets/images/profile.png';
import Carousel from 'react-multi-carousel';
import gitIcon from '../../assets/images/github.svg';
import 'react-multi-carousel/lib/styles.css';
import './Member.css';
const Member = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
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
                <h1>Openlysource members</h1>
            </div>
            <Carousel className="carousal" responsive={responsive}>
                <div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Linus Torvalds</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    The creator of the Linux operating system, is a strong advocate for open source and has said that "open source is the way to go
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Richard Stallman</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    He believes that all software should be free and open source, and has been a leading voice in the open source movement.
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Mark Shuttle</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    He believes that open source is a way to bring technology to everyone, and has made it his mission to create an open source operating system
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Tim O'Reilly</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    Founder of O'Reilly Media, has said that "open source is a way of life," and believes that the open source movement has transformed the software industry.
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Eric S. Raymond</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    Author of "The Cathedral and the Bazaar," is a leading voice in the open source community and has written extensively on the benefits of open source development.
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Jim Whitehurst</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                     He is a former CEO of Red Hat, has said that open source is "a better way to build software," and has led the company to become a major player in the enterprise software industry.
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Mitchell Baker</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                     CEO of Mozilla, has said that open source is about "participation and empowerment," and believes that the open source model can be applied to many other areas beyond software.

                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Michael Tiemann</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    co-founder of Red Hat, has called open source "the greatest paradigm shift in the history of computing," and believes that it has the potential to transform society.
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Bruce Perens</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    co-founder of the Open Source Initiative, has said that open source is "the only way to make sure that software is reliable, trustworthy, and can be improved by anyone who cares to try."
                    </p>
                </div><div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Matt Mullenweg</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                    founder of WordPress, has said that open source is "about democratizing publishing and making it accessible to everyone," and believes that it has the potential to create positive social change
                    </p>
                </div>
            </Carousel>
        </>
    );
};

export default Member;
