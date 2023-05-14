/** @format */

import React from "react";

import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./SkillElements";
function Skill() {
  return (
    <ContactWrapper id="skill">
      <div className="Container">
        <div className="SectionTitle">Skills</div>

        <Technologies>
          {stackList.map((stack, index) => (
            <div
            key={index}
              className="BigCard"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            </div>
          ))}
        </Technologies>
      </div>
    </ContactWrapper>
  );
}

export default Skill;
