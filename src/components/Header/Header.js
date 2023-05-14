import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
		<div className='Container'>
			<Nav>
				<NavMenu>
					<NavLink className='menu-item' to='projects' smooth={true}>
						Projects
					</NavLink>
					<NavLink className='menu-item' to='about' smooth={true}>
						About
					</NavLink>
					<NavLink className='menu-item' to='contact' smooth={true}>
						Contact
					</NavLink>

					<NavLink className='menu-item' to='skill' smooth={true}>
						Skills
					</NavLink>
				</NavMenu>

				<Bars onClick={toggle} />
			</Nav>
		</div>
	);
};

export default Header;
