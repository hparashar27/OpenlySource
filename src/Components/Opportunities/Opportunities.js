import React from "react";
import "./Opportunities.css";
import mlh from "../../assets/mlh_logo.jpg";
import gsoc from "../../assets/gsoc_logo.svg";
import sob from "../../assets/sob_logo.png"
import {TbLink} from "react-icons/tb"

const Opportunities = () => {
  return (
    <div className="Opp_body">
      {/* opportunities heading  */}
      <div className="Opp_heading">All Upcoming open-source opportunities</div>
      <div className="Opp_cards_list">
        {/* for Google summer of code */}
        <div className="Opp_card">
          <div className="card_left ">
            <img src={gsoc} height="70%" width="50%" />
          </div>
          <div className="card_right">
            <span className="card_right_heading"> Google Summer of Code</span>
            <span className="card_right_description">
              {" "}
              Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors
            </span>
            <div className="card_right_button">
              <button className="visit_button"> <a
                rel='noreferrer'
                href='https://summerofcode.withgoogle.com/'
                target='_blank'
              ><TbLink/>Visit</a></button>
              <span className="month_name">Jan-April</span>
            </div>
          </div>
        </div>
        {/* for Summer of bitcoins */}
        <div className="Opp_card">
          <div className="card_left ">
            <img src={sob} height="70%" width="50%" />
          </div>
          <div className="card_right">
            <span className="card_right_heading"> Summer of Bitcoin </span>
            <span className="card_right_description">
              {" "}
              A global, online summer internship program focused on introducing university students to bitcoin open-source development and design
            </span>
            <div className="card_right_button">
              <button className="visit_button"><a
                rel='noreferrer'
                href='https://www.summerofbitcoin.org/'
                target='_blank'
              ><TbLink/>Visit</a></button>
              <span className="month_name">Jan-April</span>
            </div>
          </div>
        </div>
        {/* for MLH fellowship */}
        <div className="Opp_card">
          <div className="card_left ">
            <img src={mlh} height="70%" width="60%" />
          </div>
          <div className="card_right">
            <span className="card_right_heading"> MLH Fellowship </span>
            <span className="card_right_description">
              {" "}
              MLH Fellowship is a program to contribute to open source projects.A fully remote, 12-week internship where participants earn a stipend and learn to collaborate on real open source projects with peers and engineers from top companies.
            </span>
            <div className="card_right_button">
              <button className="visit_button"> <a
                rel='noreferrer'
                href='https://fellowship.mlh.io/'
                target='_blank'
              ><TbLink/>Visit</a></button>
              <span className="month_name">Jan-May</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
