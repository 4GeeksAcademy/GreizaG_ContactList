import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";
import { ContactCard } from "../component/ContactCard";
import { Navbar } from "../component/navbar";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllContacts()
	}, [])

	return (
		<React.Fragment>
			<Navbar />
			<div className="container mx-5 px-5">
				<div className="text-center mt-5">
					<h1 className="grey-qo-regular">Contact list</h1>
				</div>
				<div>
					<>
						{store.contacts && store.contacts.map((contact) => {
							return (
								<ContactCard name={contact.name} key={contact.id} id={contact.id} address={contact.address} phone={contact.phone} email={contact.email} />
							)
						})}
					</>
				</div>
			</div>
		</React.Fragment>
	)
};
