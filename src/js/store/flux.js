const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contacts: []
		},
		actions: {

			getAllContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/greizag/contacts")
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log("Data:", data)
						console.log(data.contacts)
						setStore({ contacts: data.contacts })
					})
					.catch((error) => {
						console.log("Error: ", error)
					})
			},

			addNewContact: (data) => {
				return fetch("https://playground.4geeks.com/contact/agendas/greizag/contacts", {
					method: "POST",
					body: JSON.stringify(data),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						console.log(response);
						if (response.ok) {
							return response.json();
						}
						throw new Error("Ocurrió un error agregando un nuevo contacto");
					})
					.then((data) => {
						console.log("Contacto creado: ", data);
						return getAllContacts();
					})
					.catch((error) => console.log("Error: ", error));
			},

			deleteContact: (id) => {

				const updateContacts = getStore().contacts.filter(
					(contact) => contact.id != id
				);

				return fetch(`https://playground.4geeks.com/contact/agendas/greizag/contacts/${id}`, {
					method: "DELETE"
					, headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						console.log(response)
					})
					.then(() => {
						console.log("Contacto borrado");
						console.log(getStore().contacts);
						getStore().contacts = updateContacts;
						console.log("Este es updateContacts: ", updateContacts);
						setStore({ contacts: updateContacts });
						getAllContacts();
					})
					.catch((error) => error)
			},
		}
	};
};

export default getState;
