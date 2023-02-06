import React from 'react';
import profile from '../../assets/images/profile.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Member.css';
const Member = () => {
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
            <form action="" className="box">
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
                    <input className="input" type="text" placeholder="Name" />
                    <input
                        className="input"
                        type="text"
                        placeholder="Github Link"
                    />
                    <textarea
                        rows="4"
                        cols="50"
                        className="input-textarea"
                        placeholder="Share your thoughts about Open-source"
                    ></textarea>
                    <button className="header__btn header__btn--primary">
                        Become member
                    </button>
                </div>
            </form>
            {/* Body */}
            <Carousel className="carousal" responsive={responsive}>
                <div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Member</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Member</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Member</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div className="carousal__card">
                    <div className="carousal__header">
                        <img src={profile} className="profile" alt="" />
                        <h2>Member</h2>
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
