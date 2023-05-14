import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
	// background-image: url(https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/footer_wave.svg);
	background-repeat: no-repeat;
	background-size: cover;
	background-color: black;
	width: 100%;
	height: 100px;
	position: relative;

	span {
		position: absolute;
		bottom: 4rem;
		color: #fff;

		a {
			text-decoration: underline;
		}
	}
`;
function Footer() {
	return (
		<FooterSection>
			<div className='Container'>
				<span>made by @ravi</span>
			</div>
		</FooterSection>
	);
}

export default Footer;
