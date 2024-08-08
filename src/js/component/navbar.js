import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3" style={{ backgroundColor: '#d0fdd760' }}>
			<div className="container">
				<div><Link to="/">
					<span className="navbar-brand mb-0 h1"><i className="fa-solid fa-house fs-4"></i></span>
				</Link>
				</div>
				<div className="ml-auto">
					<Link to="/newcontact">
						<span className="navbar-brand mb-0 h1"><i className="fa-solid fa-user-plus fs-4"></i></span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
