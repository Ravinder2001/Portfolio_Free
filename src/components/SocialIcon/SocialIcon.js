import React from "react";
import {
	FaLinkedin,
	FaInstagram,
	FaGithub,
	FaFacebook,
	FaWhatsapp,
} from "react-icons/fa";

import styled from "styled-components";

export const SocialDiv = styled.div`
	margin-top: 2rem;
	display: none;
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	a {
		font-size: 2.5rem;
		color: #151418;
		transition: 0.2s ease-in;
		&:hover {
			color: rgb(57, 134, 250);
		}
	}

	.item + .item {
		margin-left: 2rem;
	}

	@media screen and (max-width: 768px) {
		display: block;
	}
`;

function SocialIcon() {
	return (
		<SocialDiv>
			<ul>
				<li className='item'>
					<a
						href='https://github.com/Ravinder2001'
						target='_blank'
						rel='noopener noreferrer'>
						<FaGithub />
					</a>
				</li>
			</ul>
		</SocialDiv>
	);
}

export default SocialIcon;
