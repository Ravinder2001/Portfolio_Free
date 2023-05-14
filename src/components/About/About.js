import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import Ravi from "../../Assets/Ravi2.png";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div
          className="BigCard"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Image src={Ravi} alt="man-svgrepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Ravi</strong>, I am from
            <strong> India</strong>.
            <br />
            <br />
            Dedicated and Ingenious full-stack web developer. Passionate about
            developing user-friendly websites. Possessing excellent
            problem-solving and multitasking skills as well as a good team
            player. Looking forward to being an integral part of a company and
            developing various products as a software engineer and developing my
            skills as a coder.
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
