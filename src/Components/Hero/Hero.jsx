import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import profile_img from "../../assets/download.png";
import resume_file from "../../assets/Resume.pdf"; // Update this to the correct path of your resume file

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        I'm <span>Prithak</span> Acharya, here.
      </h1>
      <div className="hero-action">
        <div>
          <Link
            className="hero-connect"
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Connect
          </Link>
        </div>
        <div className="hero-resume">
          <a href={resume_file} download>
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
