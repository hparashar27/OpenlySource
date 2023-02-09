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
                        <h2>Member</h2>
                        <img src={gitIcon} className="icon" alt="github" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quod.
                    </p>
                </div>
            </Carousel>
        </>
    );
};

export default Member;
