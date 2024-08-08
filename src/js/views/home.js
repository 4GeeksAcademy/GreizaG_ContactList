import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";
import { ContactCard } from "../component/ContactCard";
import { Navbar } from "../component/navbar";

export const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container mx-5 px-5">
				<div className="text-center mt-5">
					<h1 className="grey-qo-regular">Contact list</h1>
				</div>
				<div>
					<ContactCard />
				</div>
			</div>
		</React.Fragment>
	)
};
