import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
		<ContactWrapper id='contact'>
			<div className='Container'>
				<div className='SectionTitle'>Contact Me At</div>
{/* 
				<div
					className='BigCard'
					style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
					<Email>
						<span>9756726341</span>
					</Email>
				</div> */}
				<div
					className='BigCard'
					style={{
						marginTop: "10px",
						boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
					}}>
					<Email>
						<span>rvnegi786@gmail.com</span>
						<a
							className='btn PrimaryBtn'
							href='mailto:your_email@gmail.com'
							target='_blank'
							rel='noopener noreferrer'>
							Send Mail
						</a>
					</Email>
				</div>
				<SocialIcon />
			</div>
		</ContactWrapper>
	);
}

export default Contact;
