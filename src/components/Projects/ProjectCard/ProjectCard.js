import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
		<>
			{ProjectList.map((list, index) => (
				<Card key={index}>
					<CardLeft style={{ marginBottom: "12px" }}>
						<img
							src={list.img}
							alt={list.name}
							style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
						/>
					</CardLeft>
					<CardRight style={{ marginBottom: "12px" }}>
						<h4>{list.title}</h4>
						<p>
							{list.description} <br />
							{list.about}
						</p>

						<Stack>
							<span className='stackTitle'>Tech Stack-</span>
							<span className='tags'>{list.tech_stack}</span>
						</Stack>
						<BtnGroup>
							<a
								className='btn btn2 SecondarBtn'
								href={list.github_url}
								target='_blank'
								rel='noopener noreferrer'>
								Github
							</a>
							{/* <a
								className='btn PrimaryBtn'
								href={list.demo_url}
								target='_blank'
								rel='noopener noreferrer'>
								Demo ➜
							</a> */}
						</BtnGroup>
					</CardRight>
				</Card>
			))}
		</>
	);
}

export default ProjectCard;
